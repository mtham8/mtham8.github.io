---
title: Let's Merge Channels
date: "2019-07-06T22:12:03.284Z"
description: "I encountered a situation while writing an application for text extraction..."
---

I encountered a situation while writing an application for text extraction,
where I fan-out to process files based on file extension types, but then needed a
way to fan-in the results to a single channel of responses for some consumer.

After doing some open-source research (googling), I discovered go had a convenient way
of merging channels, which in this case, was processed data channels produced by each file extension type (struct)
that implemented the file processor interface.

```go
func mergeChannels(cs ... <-chan ProcessorInterface) <-chan ProcessorInterface {
	outChan := make(chan ProcessorInterface)
	var wg sync.WaitGroup
	wg.Add(len(cs))

	for _, c := range cs {
		go func(channel <-chan ProcessorInterface) {
			defer wg.Done()
			for val := range channel {
				outChan <- val
			}
		}(c)
	}

	go func() {
		wg.Wait()
		close(outChan)
	}()
	return outChan
}
```
