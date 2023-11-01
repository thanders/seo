import { schemaTypeEnum } from "../enums/schemaTypeEnum.ts";

interface Person {
    "@type"?: schemaTypeEnum.Person,
    name?: string,
    url?: string,
}

export default Person;