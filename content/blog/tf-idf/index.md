---
title: TF-IDF
date: "2020-05-09T22:12:03.284Z"
description: "A glance"
---

## TF-IDF & Vector Space Model

*TF-IDF*, short for *term frequency-inverse document frequency*, is a numerical statistic/value that reflects how influential a word is to defining the "relevancy" of a document in a corpus. The TF-IDF value increases proportionally to the frequency a word appears in a document (TF) and is offset by the number of documents in the corpus that also contain that word (IDF). The offset accounts for the fact that if a word, such as `the` or `is`, appears often in many documents, maybe it's not as influential in defining the "uniqueness" or "relevancy" of a specific document. Another way of thinking about it is, for instance, if you have a corpus that is about cats, when you search `can my cat eat chicken`, perhaps `cat` is not as important as the other terms you used in your search, such as `chicken`, and documents with the word `chicken` should be more relevant to your search than having the word `cat`.

TF-IDF is a powerful and intuitive concept, and works well under the assumption that each document in the corpus roughly has around the same length. However, if documents have varying lengths in the corpus, TF-IDF alone doesn't not account for that. Perhaps we should add additional weights to this model to account for varying document lengths and how much influence it should have to the overall relevance value/score of a given document.

In Lucene's implementation of TF-IDF, called `ClassicSimilarity`, an additional bias, `lengthNorm`, was introduced to account for document length. `lengthNorm` gave signficant bias towards matching shorter documents over longer documents. It assumed that if a word/term occurs the same amount of times in two documents, but one is shorter than the other, then the shorter one is more "concentrated" and therefore, scores higher in relevancy than the longer document.

```
IDF * TF * lengthNorm
```

* `IDF` implemented as `log((docCount+1)/(docFreq+1)) + 1` where `docFreq` is number of documents containing the term, and `docCount` is total number of documents
* `TF` implemented as `sqrt(freq)`
* `fieldNorms` implemented as `1/sqrt(length)`

Keep in mind, this implementation _accounts_ for document length, but does not allow you to adjust its _influence_ to the overall value/score.

* Assumption of the vector space model, where each term is dimension that is orthogonal to all other terms. This means terms are modeled as occurring in documents independently.


## Sources

* https://github.com/apache/lucene-solr/blob/master/lucene/core/src/java/org/apache/lucene/search/similarities/ClassicSimilarity.java
* https://nlp.stanford.edu/IR-book/html/htmledition/the-binary-independence-model-1.html
* https://en.wikipedia.org/wiki/Tf%E2%80%93idf
* https://opensourceconnections.com/blog/2015/10/16/bm25-the-next-generation-of-lucene-relevation/
