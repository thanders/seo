import generateArticle from "./schemaGenerators/generateArticle.ts";
import generateBlogPosting from "./schemaGenerators/generateBlogPosting.ts";
import ArticleSchema from "./types/articleSchemaType.ts";
import BlogPostingSchema from './types/blogPostingSchemaType.ts'
import SchemaProps from "./types/schemaType.ts";
import { schemaTypeEnum } from "./enums/schemaTypeEnum.ts";


export function generateMarkup(schemaType: schemaTypeEnum, data: SchemaProps): ArticleSchema | BlogPostingSchema | null {

    if(schemaType === schemaTypeEnum.Article) {
        const article = generateArticle(data);
        return article
    }
    if(schemaType === schemaTypeEnum.BlogPosting) {
        const blogPostMarkup = generateBlogPosting(data);
        return blogPostMarkup;
    }
  return null;
}