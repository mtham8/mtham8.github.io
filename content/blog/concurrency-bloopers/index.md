---
title: Concurrency Bloopers
date: "2019-07-21T22:12:03.284Z"
description: "If you're going to return a channel, wrap the process that sends to that channel in a goroutine..."
---

Earlier this week, I ran into a bug that I couldn't quite understand. The code looked a bit like this

[https://play.golang.org/p/29mw6PEDm2t](https://play.golang.org/p/29mw6PEDm2t)

My task was to create a program that fetches data, processes it, and then loads the data into a database.
My initial thought was, okay, let's think about this in terms of streams. A stream of incoming data flows in through
a channel - let's call that channel, `received`. Some function will then read off of `received` and process each item in that channel, and then send the result to a stream of processed data, or to a channel called, `processed`. Some other function will then read off of `processed` and either load it to a database, or in the playground example, simply print out what was processed. Thinking in streams allowed me to decouple data structures from upstream and downstream processes.

However, when I ran the program, I thought the results were quite weird. There was no errors, no race condition, but the only channel being read was the `received` channel. Then the `processed` channel was read afterwards. Hm. That was not what I was expecting. The code that ran behaved synchronously, despite the fact that the mental model in my mind, was concurrent.
I was expecting one datum to be sent to the `received` channel, and then consequently, in order for the `received` channel to send another datum, `processed` channel would be read.

After a couple hours of debugging, I saw one minor but enormous bug. Here is the correction, based on the example above

[https://play.golang.org/p/PUx_TXX6esV](https://play.golang.org/p/PUx_TXX6esV)

I was reading off the `received` channel on the same thread as reading off the `processed` channel. Therefore, `processed` could not be read until `received` was closed. The solution was to wrap reading off the `received` channel in a goroutine so that each channel can be read in its own thread/goroutine.

Concurrency is complex. Always make sure to verify if the code written reflects the mental model correctly. If you're going to return a channel, wrap the process that sends to that channel in a goroutine.
