# Search Engine Optimization (SEO) [![Badge License]][License]

*Generate schema markup to for JSON+LD scripts to improve the way your site's seach results are displayed.*

<br>

## Getting Started

Import the `SEO` module into your Deno project

```ts
import { generateSchema } from "https://deno.land/x/seo";

{
“@context”: “https://schema.org”,
“@type”: “BlogPosting”,
“mainEntityOfPage”: {
“@type”: “WebPage”,
“@id”: “https://www.example.com/example-blog-post/”
},


}

  const article: ArticleProp = {
    author: 'Bob Sacamano',
    type: '“BlogPosting”',
    headline: “Example blog post title“,
    description: “Example blog post description.“,
    image: “https://www.example.com/example-image-url.jpg“,
    datePublished: '31.10.2023',

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

## How does it work?

**SEO** allows you retrieve schema markup that can be used within **json+ld** script tags

Article

<br>

Person

## Why is this useful?

This module exports the related types for commonly used schema types. You will be able to distinguish between what is
<a href="https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data" target="_blank">documented</a>
as working for structured data markup by Google, but not limited.
<br>
The purpose of the project is provide type validation for structured data markup and a convent way to generate the markup, in alignment with the guidelines from search engines and schema.org.

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

## Distribution

The module is published on https://deno.land/x as a Deno Third Party Module

Module page:
https://deno.land/x/seo


<!----------------------------------------------------------------------------->

[License]: LICENSE

<!----------------------------------[ Badges ]--------------------------------->

[Badge License]: https://img.shields.io/badge/License-MIT-ac8b11.svg?style=for-the-badge&labelColor=yellow
