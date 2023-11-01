import { BaseArticleType } from "./articleType.ts";
import Person from "./person.ts";

interface SchemaProps extends BaseArticleType, Person {}

export default SchemaProps;