#1140 SASS grid — A semantic grid

## Description
A fork of the awesome of [SASS mixins](http://sass-lang.com/) created by [rschmuckler](https://github.com/rschmukler/1140-sass) to allow you to easily and more-sematically use [1140.gs](http://cssgrid.net/).

This also includes a version of the [push classes created by inky](https://gist.github.com/710796/5945729fe400299f98ba832869b6a82ec1840152).

## Requirements
SASS 3.2 is necessary for cool the media query stuff.

## Why?

I really like the 1140 CSS grid but I hate the idea of including all of those non-semantic classes. There was enough cool stuff in SASS 3.2 to warrant forking the original and extending it to take advantage of the new features.



## How do I use it?

    @import "1140";

    div.bottom-section {
      @include container;
    }

    div.bottom-inner {
      @include row;
    }

    div.articles {
      @include column(8);
    }

    div.sidebar {
      @include column(4);
    }

