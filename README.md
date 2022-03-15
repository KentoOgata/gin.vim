# 🥃 gin.vim

[![Deno 1.17.0 or above](https://img.shields.io/badge/Deno-Support%201.17.0-yellowgreen.svg?logo=deno)](https://github.com/denoland/deno/tree/v1.17.0)
[![Vim 8.2.3452 or above](https://img.shields.io/badge/Vim-Support%208.2.3452-yellowgreen.svg?logo=vim)](https://github.com/vim/vim/tree/v8.2.3452)
[![Neovim 0.6.0 or above](https://img.shields.io/badge/Neovim-Support%200.6.0-yellowgreen.svg?logo=neovim&logoColor=white)](https://github.com/neovim/neovim/tree/v0.6.0)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![vim help](https://img.shields.io/badge/vim-%3Ah%20gin-orange.svg)](doc/gin.txt)
[![test](https://github.com/lambdalisue/gin.vim/actions/workflows/test.yml/badge.svg)](https://github.com/lambdalisue/gin.vim/actions/workflows/test.yml)

Gin (_gin.vim_) is a plugin to handle git repository from Vim/Neovim.

**Alpha version. Any changes, including backward incompatible ones, are applied
without announcements.**

## Features

- Proxy the prompts/editor used by git commands to Vim
- `Gin` to call a raw git command
- `GinBranch` to see `git branch` of a repository
- `GinChaperon` to solve git conflicts (like `git mergetool`)
- `GinDiff` to see `git diff` of a file
- `GinEdit` to see `git show` or local content of a file
- `GinPatch` to stage changes partially (like `git add -p`)
- `GinStatus` to see `git status` of a repository

## Requirements

Gin is written in denops thus users need to install denops.vim

- [vim-denops/denops.vim][vim-denops/denops.vim]<br> An ecosystem for writing
  Vim/Neovim plugin in Deno.

[vim-denops/denops.vim]: https://github.com/vim-denops/denops.vim

## Similar projects

- [tpope/vim-fugitive](https://github.com/tpope/vim-fugitive)<br>A plugin that
  lead me to the development of gita.vim
- [lambdalisue/vim-gita](https://github.com/lambdalisue/vim-gita)<br>First git
  manipulation plugin that I made, works on Vim 7.9
- [lambdalisue/gina.vim](https://github.com/lambdalisue/gina.vim)<br>Second git
  manipulation plugin that I made, works asynchronously on Vim 8.1

## License

The code in this repository follows MIT license, texted in [LICENSE](./LICENSE).
Contributors need to agree that any modifications sent in this repository follow
the license.
