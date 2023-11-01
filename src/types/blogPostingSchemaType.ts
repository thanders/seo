interface BlogPostingSchema {
    '@context'?: string,
    '@type': string,
    headline?: string,
    author?: {
        "@type": string,
        name?: string,
        url?: string,
    },
    url?: string,
    image?: string,
    datePublished?: string,
}

export default BlogPostingSchema;