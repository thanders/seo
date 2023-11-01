import Person from "./person.ts";

interface BlogPostingSchema {
    '@context'?: string,
    '@type': string,
    headline?: string,
    author?: Person,
    url?: string,
    image?: string,
    datePublished?: string,
}

export default BlogPostingSchema;