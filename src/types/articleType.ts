import Person from "./person.ts";
interface BaseArticleType {
    datePublished?: string,
    image?: string,
    headline?: string,
    author: Person,
    type?: string,
    url?: string,
}

type ArticleType = BaseArticleType | Record<string, string | number | boolean | string[]>;

export type { ArticleType, BaseArticleType };