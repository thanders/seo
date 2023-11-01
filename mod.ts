import ArticleSchema from "./src/types/articleSchema.ts";
import SchemaProps from "./src/types/SchemaProps.ts";

function generateMarkup(schemaType: string, data: SchemaProps): ArticleSchema | null {
    if(schemaType === 'article') {
        const article: ArticleSchema = {
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            "headline": "Title of a News Article",
            author: data.author,
            url: data.url,
            image: [],
            datePublished: ''
        }
        return article
    }
  return null;
}

export { generateMarkup }