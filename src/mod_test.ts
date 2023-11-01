import { assertEquals } from "https://deno.land/std@0.204.0/assert/assert_equals.ts";
import { generateMarkup } from "../mod.ts";
import ArticleProp from "./types/articleProp.ts";

Deno.test("mod - Article schema should return as expected", () => {
  const article: ArticleProp = {
    author: 'Bob',
    type: 'NewsArticle',
    url: 'https://deno.land/x/seo',
    datePublished: '31.01.2023',
    image: ['https://docs.deno.com/deno-looking-up.svg']


    
  }
  const mockContext = 'https://schema.org';
  const schemaMarkup = generateMarkup('article', article);
  assertEquals(schemaMarkup?.["@type"], article.type );
  assertEquals(schemaMarkup?.["@context"], mockContext );
  assertEquals(schemaMarkup?.author, article.author );
  assertEquals(schemaMarkup?.datePublished, article.datePublished );
});