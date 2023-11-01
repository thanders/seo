interface Article {
    '@context'?: string,
    '@type': string,
    headline?: string,
    author?: string,
    url?: string,
    image?: string[],
    datePublished?: string,
}

export default Article;