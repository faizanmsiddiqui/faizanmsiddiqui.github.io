---
title: Hello, Rust!
description: How to install Rust, write first program, and compile and run it.
author: faizan
date: 2025-09-22 16:46:13 +0300
categories: [Guide, Programming]
tags: [coding, guide, language, programming, rust]
image:
  path: /assets/img/posts/hello-rust/featured-image.png
  thumb: /assets/img/posts/hello-rust/featured-image-thumbnail.png
  lqip: /assets/img/posts/hello-rust/featured-image-thumbnail.png
---

<!-- markdownlint-disable MD033 MD036 -->

Rust is a systems programming language that runs blazingly fast, prevents
segfaults, and guarantees thread safety. It is designed to be a safe,
concurrent, and practical language (as discussed
[**previously**](/posts/what-is-rust/)), and supports both functional and
imperative-procedural paradigms.

## Setting Up Rust Environment

<blockquote class="prompt-tip" markdown="1">

**DOCUMENTATION**

- [**The Rust Programming Language: Installation**](https://doc.rust-lang.org/book/ch01-01-installation.html)
- [**Rust Forge: Other Installation Methods**](https://forge.rust-lang.org/infra/other-installation-methods.html)

</blockquote>

### Installation

To get started with Rust, installation is required. The recommended way is
through `rustup`, a command-line tool for managing Rust versions and associated
tools.

#### Linux, macOS, and Windows Subsystem for Linux (WSL)

On Linux, macOS, and Windows Subsystem for Linux (WSL), Rust can be installed by
running the following command in the terminal:

```shell
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

#### Other Platforms and Installation Methods

For other platforms such as Windows or Unix-like systems, or for different
installation methods, refer to the official guide:
[**Other Rust Installation Methods**](https://forge.rust-lang.org/infra/other-installation-methods.html).

### Toolchain Management with `rustup`

Rust installation includes `rustup`, a toolchain installer for Rust. `rustup`
manages multiple Rust toolchains (stable, beta, nightly) and allows switching
between them easily. It also helps keep Rust and its tools up to date.

Rust can be updated to the latest version with:

```shell
rustup update
```

More information about `rustup` is available in the
[**`rustup` official documentation**](https://rust-lang.github.io/rustup/).

### Configuring the `PATH` Environment Variable

In the Rust development environment, all tools are installed in the user's home
directory under `~/.rustup` and `~/.cargo`.

The `rustup`, `rustc`, `cargo`, and other commands are added to Cargo's bin
directory, located at `~/.cargo/bin`.

- `rustup` is the Rust toolchain installer.
- `rustc` is the Rust compiler.
- `cargo` is Rust's package manager and build system.

After installation, these tools need to be accessible from the command line.
This is usually done automatically by the installer, but if not, add the
following line to the shell configuration file (e.g., `~/.bashrc`, `~/.zshrc`):

```shell
export PATH="$HOME/.cargo/bin:$PATH"
```

### Verifying Installation

To verify that Rust is installed correctly, run the following commands in the
terminal to check the versions of `rustup`, `rustc`, and `cargo`:

```shell
rustup --version
```

```shell
rustc --version
```

```shell
cargo --version
```

If installation was successful, these commands display the installed versions of
Rustup, Rust compiler, and Cargo.

### Uninstalling Rust

Rust can be uninstalled with:

```shell
rustup self uninstall
```

## First Program

<blockquote class="prompt-tip" markdown="1">

**DOCUMENTATION**

- [**The Rust Programming Language: Hello, World!**](https://doc.rust-lang.org/book/ch01-02-hello-world.html)

</blockquote>

### Writing Code

A simple "Hello, World!" program in Rust:

```rust
fn main() {
    println!("Hello, World!");
}
```

Any file name works, but `main.rs` is conventional. The entry point is always
the `main` function, and the program will not run without it, similar to C, C++,
and Java.

### Compiling

The Rust compiler `rustc` can be used to compile the program:

```shell
rustc main.rs
```

This generates an executable file named `main` (or `main.exe` on Windows) in the
same directory.

### Running

The compiled program can be run with:

```shell
./main
```

This prints `Hello, World!` in the terminal.

## Useful Links

- [**Official Rust Programming Language Website**](https://www.rust-lang.org)
- [**Rust Installation Guide**](https://www.rust-lang.org/tools/install)
- [**Rust Playground**](https://play.rust-lang.org)
- [**Rust by Example**](https://doc.rust-lang.org/rust-by-example)
- [**Rust Standard Library Documentation**](https://doc.rust-lang.org/std)
- [**The Rust Programming Language Book**](https://doc.rust-lang.org/book)
- [**The `rustup` Book**](https://rust-lang.github.io/rustup)
- [**The Cargo Book**](https://doc.rust-lang.org/cargo)
- [**Crates.io: Rust Package Registry**](https://crates.io)
