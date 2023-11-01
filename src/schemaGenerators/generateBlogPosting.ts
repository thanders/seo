import schemaContextEnum from "../enums/schemaContextEnum.ts";
import { schemaTypeEnum } from "../enums/schemaTypeEnum.ts";
import BlogPostingSchema from "../types/blogPostingSchemaType.ts";
import { SchemaTypes } from "../types/schemaTypes.ts";

const generateBlogPosting = (data: SchemaTypes): BlogPostingSchema => {
    const blogPostMarkup: BlogPostingSchema = {
        ...data,
        "@context": schemaContextEnum.schemaOrg,
        "@type": schemaTypeEnum.BlogPosting,
        headline: data.headline,
        author: {
            "@type": schemaTypeEnum.Person,
            name: data.author?.name,
            url: data.author?.url,
        },
        url: data.url,
        image: data.image,
        datePublished: data.datePublished,
    }
    return blogPostMarkup
}

export default generateBlogPosting;