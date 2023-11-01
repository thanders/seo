# Article

Article pages must be based on one of the following schema.org types: Article, NewsArticle, BlogPosting.

There are no required properties. However, you should add properties that apply to your content.

```
<script type=”application/ld+json”>
{
“@context”: “https://schema.org”,
“@type”: “BlogPosting”,
“mainEntityOfPage”: {
“@type”: “WebPage”,
“@id”: “https://www.example.com/example-blog-post/”
},
“headline”: “Example blog post title“,
“description”: “Example blog post description.“,
“image”: “https://www.example.com/example-image-url.jpg“,
“author”: {
“@type”: “Person”,
“name”: “Bob Sacamano“,
“url”: “https://www.example.com/team/bob-sacamano/”
},
“publisher”: {
“@type”: “Organization”,
“name”: “Example Company Name“,
“logo”: {
“@type”: “ImageObject”,
“url”: “https://www.example.com/”
}
},
“datePublished”: “2020-02-25“,
“dateModified”: “2022-09-16”
}
</script>
```


## Relatd links

https://developers.google.com/search/docs/appearance/structured-data/article

https://schema.org/BlogPosting

https://schema.org/Article