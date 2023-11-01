interface BaseArticleType {
    type?: string,
    headline?: string,
    author?: string,
    url?: string,
    image?: string[],
    datePublished?: string,
}

type ArticleType = BaseArticleType | Record<string, string | number | boolean | string[]>;

export type { ArticleType, BaseArticleType};