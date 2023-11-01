import Person from "./person.ts";

interface ArticleSchema {
    '@context'?: string,
    '@type': string,
    headline?: string,
    author?: Person,
    url?: string,
    image?: string,
    datePublished?: string,
}

export default ArticleSchema;