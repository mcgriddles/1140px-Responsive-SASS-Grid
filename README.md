#1140 SASS — A semantic grid system

## Description
A fork of the awesome of [SASS mixins](http://sass-lang.com/) created by [rschmukler](https://github.com/rschmukler/1140-sass) to allow you to easily and more-sematically use [The 1140px CSS Grid System](http://cssgrid.net/).

This also includes a mixin based on the [push classes created by inky](https://gist.github.com/710796/5945729fe400299f98ba832869b6a82ec1840152).

## Why?

I really like the 1140 CSS grid but I hate the idea of including all of those non-semantic classes. There was enough cool stuff in SASS 3.2 to warrant forking the original and extending it to take advantage of the new features.

## Requirements
SASS 3.2

If you haven't gotten started with SASS yet, [CodeKit](http://incident57.com/codekit/) or [LiveReload](http://livereload.com/) will make things easy if you're not the command line type.

You may need to [use a newer version of SASS with CodeKit](http://css-tricks.com/media-queries-sass-3-2-and-codekit/) or a [beta release of LiveReload](http://feedback.livereload.com/knowledgebase/articles/67441-how-do-i-start-using-livereload-).

## Usage

Your best bet is to look at examples.scss and examples.html. The comments will help you understand what's going on.

### Basic Markup

Keep in mind that your class names will vary because you will create them using `@include` in the SASS. These examples use nonsemantic class names.

```html

    <div class="container">
      <div class="row">
        <div class="col-4">
          <p>Column 1</p>
        </div>
        <div class="col-8 last">
          <p>Column 2</p>
        </div>
      </div>
    </div>
```

### Push classes

You can offset columns to the right. Look at examples.html to see this in action.

```html

    <div class="container">
      <div class="row">
        <div class="col-4 push-4">
          <p>Column 1</p>
        </div>
        <div class="col-4 last">
          <p>Column 2</p>
        </div>
      </div>
    </div>
```

### Creating semantic classes

This example uses includes the container, row, column and push mixins…

```scss

    .mcs {
      @include container;
      .mcs-content {
        @include row;
        article {
          @include column(4);
          @include push(4);
        }
      }
    }
```

Markup for this example…

```html

    <div class="mcs">
      <div class="mcs-content">
        <article>
          
        </article>
      </div>
    </div>
```

### Include breakpoints

Include breakpoint mixins to add a responsive element as the page width shrinks. This example uses the same markup as above.

```scss

    .mcs {
      @include container;
      .mcs-content {
        @include row;
        article {
          @include column(4);
          @include push(4);
          @include breakpoint(desktop-small) {
            @include column(6);
            @include push(3);
          }
          @include breakpoint(phone-landscape) {
            @include column(6);
            @include push(3);
          }
          @include breakpoint(phone-portrait) {
            @include column(8);
            @include push(2);
          }
        }
      }
    }
```