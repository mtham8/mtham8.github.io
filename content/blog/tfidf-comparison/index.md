---
title: TF/IDF vs BM25 Ranking Functions
date: "2020-05-09T22:12:03.284Z"
description: "Tuning search starts with identifying ways to define relevance..."
---

## Introduction

## Relevance

## TF/IDF & Vector Space Model

* *tf-idf*, short for *term frequency-inverse document frequency*, is a numerical statistic/value that is intended to reflect how influential a word is to defining the "relevancy" of a document in a corpus. The tf-idf value increases proportionally to the number of times a word appears in a document (term frequency) and is offset by the number of documents in the corpus that also contain that word (inverse document frequency). The offset accounts for the fact that if a word, such as `the` or `is`, appears often in many documents, maybe it's not that influential in defining the "uniqueness" or "relevancy" of a specific document. Another way of thinking about it is, for instance, if you have a corpus that is about cats, when you search `can my cat eat chicken`, perhaps `cat` is not as important as the other terms you used in your search, such as `chicken`, and documents with the word `chicken` should be more relevant to your search than having the word `cat`.

* Tf-idf is a powerful and intuitive concept, and works well under the assumption that each document in the corpus roughly has around the same length. However, if documents have varying lengths in the corpus, tf-idf alone doesn't not account for that. Perhaps we should add additional weights to this model to account for varying document lengths and how much influence it should have to the overall relevance value/score of a given document. In Lucene's previous implementation of tf-idf, an additional bias, `fieldNorms`, was introduced to account for document length. `fieldNorms` gave signficant bias towards matching shorter documents over longer documents. It assumes that if a word/term occurs the same amount of times in two documents, but one is shorter than the other, then the shorter one is more "concentrated" and therefore, scores higher in relevancy than the longer document. Keep in mind, this implementation _accounts_ for document length, but does not allow you to adjust its _influence_ to the overall value/score.

* Assumption of the vector space model, where each term is dimension that is orthogonal to all other terms. This means terms are modeled as occurring in documents independently.

## BM25

* The model revolves around the notion of estimating a probablity of relevance for each pair, and ranking documents in relation to a given query in descending order.

* To make a probabilistic retrieval strategy precise, we need to estimate how terms in documents contribute to relevance, specifically, we wish to know how term frequency, document frequency, document length, and other statistics that we can compute influence judgments about document relevance, and how they can be reasonably combined to estimate the probability of document relevance. We then order documents by decreasing estimated probability of relevance.

* We take a query to be a representation of an individual user's information need or perhaps search intent. We take _relevance_ to mean the relevance of a document to the information need, as judged by the user.

* The assumptions about relevance are as follows:
  * Relevance is assumed to be a property of the document given information need only, assessable without reference to other documents.
  * The relevance property is assumed to be binary.


## Sources

* https://nlp.stanford.edu/IR-book/html/htmledition/the-binary-independence-model-1.html
* https://en.wikipedia.org/wiki/Tf%E2%80%93idf
* https://opensourceconnections.com/blog/2015/10/16/bm25-the-next-generation-of-lucene-relevation/
