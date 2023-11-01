import ArticleSchema from "./types/articleSchemaType.ts";
import SchemaProps from "./types/schemaType.ts";

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

export default generateMarkup;