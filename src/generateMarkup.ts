import generateArticle from "./schemaGenerators/generateArticle.ts";
import generateBlogPosting from "./schemaGenerators/generateBlogPosting.ts";
import ArticleSchema from "./types/articleSchemaType.ts";
import BlogPostingSchema from './types/blogPostingSchemaType.ts'
import SchemaProps from "./types/schemaType.ts";

function generateMarkup(schemaType: string, data: SchemaProps): ArticleSchema | BlogPostingSchema | null {

    if(schemaType === 'article') {
        const article = generateArticle(data);
        return article
    }
    if(schemaType === 'blogPosting') {
        const blogPostMarkup = generateBlogPosting(data);
        return blogPostMarkup;
    }
  return null;
}

export default generateMarkup;