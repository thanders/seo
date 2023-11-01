import schemaContextEnum from "../enums/schemaContextEnum.ts";
import { schemaTypeEnum } from "../enums/schemaTypeEnum.ts";
import ArticleSchema from "../types/articleSchemaType.ts";
import { SchemaTypes } from "../types/schemaTypes.ts";


const generateArticle = (data: SchemaTypes): ArticleSchema => {
    const article: ArticleSchema = {
        ...data,
        "@context": schemaContextEnum.schemaOrg,
        "@type": schemaTypeEnum.NewsArticle,
        "headline": "Title of a News Article",
        author: {
            "@type": schemaTypeEnum.Person,
            name: data.author?.name,
            url: data.author?.url,
        },
        url: data.url,
        image: data.image,
        datePublished: data.datePublished
    }
    return article;
}

export default generateArticle;