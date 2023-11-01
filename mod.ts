import Article from "./src/types/article";
import SchemaMarkup from "./src/types/schemaMarkup";

function generateMarkup(schemaType: string, data: SchemaMarkup): Article | null {
    if(schemaType === 'article') {
        const article: Article = {
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