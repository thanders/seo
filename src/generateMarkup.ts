import generateArticle from "./schemaGenerators/generateArticle.ts";
import generateBlogPosting from "./schemaGenerators/generateBlogPosting.ts";
import ArticleSchema from "./types/articleSchemaType.ts";
import BlogPostingSchema from './types/blogPostingSchemaType.ts'
import { schemaTypeEnum } from "./enums/schemaTypeEnum.ts";
import { SchemaTypes } from "./types/schemaTypes.ts";


export function generateMarkup(schemaType: schemaTypeEnum, data: SchemaTypes): ArticleSchema | BlogPostingSchema | null {

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