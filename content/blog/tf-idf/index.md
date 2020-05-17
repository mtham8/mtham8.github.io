---
title: Vector Space Model and TF-IDF
date: "2020-05-16T22:12:03.284Z"
description: "There are many similarity models floating in the universe..."
---

There are many similarity models floating in the universe, holding different assumptions and priorities. Here we will explore the most common one used, the TF-IDF Vector Space Model.

## VSM (Vector Space Model)

A vector space model is a model where each term of the query is considered a vector dimension. It assumes that each term is a dimension that is orthogonal to all other terms, which means terms are modeled as occurring in documents independently. When evaluating the query to a document considered, one vector represents the query, and another, the document. The cosine similarity of the two vectors can be used to represent the relevance of the document to the query. A cosine value of 0 means that the query and the document vector are orthogonal and have no match (ie. none of the query terms were in the document).

Let's see how this can play out. We could set each coordinate in the document vector to be 1 if the document contains the term for the dimension, otherwise set it to 0. The query vector would be all 1's, assuming each term has the same weight. This model would rank a document mentioning a query term once in a footnote, as equally relevant as, another document that uses a query term repeatedly throughout the text. Hmm... that ranking does not seem right. We should be able to calcuate different weights for a term in the document given its frequency and other factors that could affect its relevancy. Enter TF-IDF! A plausible way to account for various factors that this current model does not. Instead of using 1 if the term is present, perhaps, we can use TF-IDF in the document vector.

## TF-IDF (Term Frequency-Inverse Document Frequency)

*Term Frequency-Inverse Document Frequency*, is a numerical statistic that represents how influential a word is to defining the "relevancy" of a document in a corpus. The TF-IDF value increases proportionally to the frequency a word appears in a document (TF) and is offset by the number of documents in the corpus that also contain that word (IDF). The offset accounts for the fact that if a word, such as `the` or `is`, appears often in many documents, maybe it's not as influential in defining the "uniqueness" or "relevancy" of a specific document. Another way of thinking about it is, for instance, if you have a corpus that is about cats, when you search `can my cat eat chicken`, perhaps `cat` is not as important as the other terms you used in your search, such as `chicken`, and documents with the word `chicken` should be more relevant to your search than having the word `cat`.

TF-IDF is an intuitive concept, and works well under the assumption that each document in the corpus roughly has around the same length. However, if documents have varying lengths in the corpus, TF-IDF alone doesn't not account for that. Perhaps we could add additional weights to this model to account for varying document lengths and how much influence it should have to the overall relevance value/score of a given document.

In Lucene's implementation of TF-IDF, `ClassicSimilarity`, an additional bias, `lengthNorm`, was introduced to account for document length. `lengthNorm` gave signficant bias towards matching shorter documents over longer documents. It assumed that if a word/term occurs the same amount of times in two documents, but one is shorter than the other, then the shorter one is more "concentrated" and therefore, scores higher in relevancy than the longer document. The implementation looked like this:

```
IDF * TF * lengthNorm
```

* `IDF` implemented as `log((docCount+1)/(docFreq+1)) + 1` where `docFreq` is number of documents containing the term, and `docCount` is total number of documents
* `TF` implemented as `sqrt(freq)`
* `fieldNorms` implemented as `1/sqrt(length)`

Keep in mind, this implementation _accounts_ for document length, but does not allow you to adjust its _influence_ to the overall value/score.

## Limitations

There are some limitations using the TF-IDF VSM. IDF is calculated not based on relevance information, but on matching terms. Documents with simliar context, but different term vocabulary would not be considered a match, therefore, resulting as false negatives. The positions of the words within a document is lost in the vector space representation. The model assumes the terms are independent. Under this assumption, documents are a _bag of words_ and order does not matter. Often that is not the case. Terms can be dependent in situations such as:

* *polysemy*: same terms used in different contexts - ie. `I love my cat` vs `cat lady`, which affects _precision_ because irrelevant can be retrieved due to term matching.

* *synonymity*: different terms use in the same contexts - ie. `feline` vs `cat`, which affects _recall_ because documents that are relevant would not be retrieved.

* *ordering*: different terms used in different positions in different contexts - ie. `college junior` vs `junior college`, which affects _precision_ and _recall_.

Nonetheless, TF-IDF VSM is popular because it can go pretty far! Every corpus has its flavor. I invite you to try TF-IDF VSM, with its limitations in mind so that the surprises left are the unknowns.


## Sources

* https://github.com/apache/lucene-solr/blob/master/lucene/core/src/java/org/apache/lucene/search/similarities/ClassicSimilarity.java
* https://lucene.apache.org/core/7_4_0/core/org/apache/lucene/search/similarities/TFIDFSimilarity.html
* https://nlp.stanford.edu/IR-book/html/htmledition/the-binary-independence-model-1.html
* https://opensourceconnections.com/blog/2015/10/16/bm25-the-next-generation-of-lucene-relevation/
* https://www.elastic.co/blog/found-similarity-in-elasticsearch
* http://www.minerazzi.com/tutorials/term-vector-3.pdf