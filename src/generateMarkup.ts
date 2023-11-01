import generateArticle from "./schemaGenerators/generateArticle.ts";
import generateBlogPosting from "./schemaGenerators/generateBlogPosting.ts";
import ArticleSchema from "./types/articleSchemaType.ts";
import BlogPostingSchema from './types/blogPostingSchemaType.ts'
import { schemaTypeEnum } from "./enums/schemaTypeEnum.ts";
import { BaseArticleType } from "./types/articleType.ts";


export function generateMarkup(schemaType: schemaTypeEnum, data: BaseArticleType): ArticleSchema | BlogPostingSchema | null {

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