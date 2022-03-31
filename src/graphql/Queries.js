import { Field, Query } from "@tilework/opus";

export const test = new Query('categories', true)
    .addField(new Field('name', true)
    )
