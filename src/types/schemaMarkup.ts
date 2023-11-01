import Article from './article.ts';
import Person from "./person.ts";

interface SchemaMarkup extends Article, Person {}

export default SchemaMarkup;