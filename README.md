# SEO   [![Badge License]][License]

*Generate schema markup to for JSON+LD scripts to improve the way your site's seach results are displayed.*

<br>

## Getting Started

Import the `SEO` module into your Deno project

```ts
import { generateSchema } from "https://deno.land/x/seo";

  const article: ArticleProp = {
    author: 'Bob Sacamano',
    type: 'NewsArticle',
    url: 'https://deno.land/x/seo',
    datePublished: '31.10.2023',
    image: ['https://docs.deno.com/deno-looking-up.svg']
  }
  const mockContext = 'https://schema.org';
  const articleMarkup = generateMarkup('article', article);

  return {
    <head>
        <script type="application/ld+json">
            {articleMarkup}
        </script>
    </head>
  };

```
    
<br>

## How does it work?

**SEO** allows you retrieve schema markup that can be used within **json+ld** script tags

Article

<br>

Person

## Why is this useful?

This module exports the related types for each type of schema. The purpose of the project is provide type checking for commonly used structured data markup and a convent way to generate the markup, in alignment with the guidelines from search engines and schema.org.

## Related links

Introduction to structured data markup in Google Search
https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data

schema.org - Schema for structured data
<br>
https://schema.org/

## Unit Tests

Unit tests can be run using:

```shell
deno test
```

<br>

## Distribution

The module is published on https://deno.land/x as a Deno Third Party Module

Module page:
https://deno.land/x/seo


<!----------------------------------------------------------------------------->

[License]: LICENSE

<!----------------------------------[ Badges ]--------------------------------->

[Badge License]: https://img.shields.io/badge/License-MIT-ac8b11.svg?style=for-the-badge&labelColor=yellow
