# Seo   [![Badge License]][License]

*Generate schema markup to improve your site's SEO.*

<br>

## Getting Started

*Import the `seo` module into your Deno project

```ts
import { generateSchema } from "https://deno.land/x/seo";

  const article: ArticleProp = {
    author: 'Bob',
    type: 'NewsArticle',
    url: 'https://deno.land/x/seo',
    datePublished: '31.01.2023',
    image: ['https://docs.deno.com/deno-looking-up.svg']


    
  }
  const mockContext = 'https://schema.org';
  const articleSchemaMarkup = generateMarkup('article', article);

```
    
<br>

## How does it work?

**SEO** allows you retrieve schema markup that can be used within **json+ld** script tags

Article

<br>

Person

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
