import schemaContextEnum from "../enums/schemaContextEnum.ts";
import { schemaTypeEnum } from "../enums/schemaTypeEnum.ts";
import ArticleSchema from "../types/articleSchemaType.ts";
import SchemaProps from "../types/schemaType.ts";

const generateArticle = (data: SchemaProps): ArticleSchema => {
    const article: ArticleSchema = {
        ...data,
        "@context": schemaContextEnum.schemaOrg,
        "@type": schemaTypeEnum.NewsArticle,
        "headline": "Title of a News Article",
        author: {
            "@type": schemaTypeEnum.Person,
            name: data.person.name,
            url: data.person.url,
        },
        url: data.url,
        image: [],
        datePublished: data.datePublished
    }
    return article;
}

export default generateArticle;