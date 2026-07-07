---
title: Comments in Rust
description: Overview of comments in the Rust programming language.
author: faizan
date: 2025-09-22 16:46:13 +0300
categories: [Articles, Programming]
tags: [articles, coding, commenting, language, programming, rust]
image:
  path: /assets/img/posts/comments-in-rust/featured-image.png
  thumb: /assets/img/posts/comments-in-rust/featured-image-thumbnail.png
  lqip: /assets/img/posts/comments-in-rust/featured-image-thumbnail.png
---

<!-- markdownlint-disable MD033 MD036 -->

<blockquote class="prompt-info" markdown="1">

**INFO**

This short article provides a brief overview of comments (non-doc comments) in
Rust. A detailed explanation of doc comments, which are used for generating
documentation, will be covered in a separate article.

</blockquote>

<blockquote class="prompt-tip" markdown="1">

**DOCUMENTATION**

- [**The Rust Programming Language: Comments**](https://doc.rust-lang.org/book/ch03-04-comments.html)

</blockquote>

Comments in Rust are similar to those found in C, C++, and Java. Single-line
comments start with `//`, and multi-line comments are enclosed between `/*` and
`*/`.

## Single-Line Comments

```rust
// This is a single-line comment
fn main() {
    println!("Hello, World!"); // This is another single-line comment
}
```

## Multi-Line Comments

```rust
/* This is a multi-line comment
   It can span multiple lines */
fn main() {
    println!("Hello, World!");
}
```
