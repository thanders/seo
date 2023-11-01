import schemaContextEnum from "../enums/schemaContextEnum.ts";
import schemaTypeEnum from "../enums/schemaTypeEnum.ts";
import BlogPostingSchema from "../types/blogPostingSchemaType.ts";
import SchemaProps from "../types/schemaType.ts";

const generateBlogPosting = (data: SchemaProps): BlogPostingSchema => {
    const blogPostMarkup: BlogPostingSchema = {
        ...data,
        "@context": schemaContextEnum.schemaOrg,
        "@type": schemaTypeEnum.BlogPosting,
        "headline": data.headline,
        author: {
            "@type": schemaTypeEnum.Person,
            name: data.authorName,
            url: data.authorUrl,
        },
        url: data.url,
        image: data.image,
        datePublished: data.datePublished,
    }
    return blogPostMarkup
}

export default generateBlogPosting;