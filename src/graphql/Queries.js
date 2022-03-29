import { Field, Query } from "@tilework/opus";

export const test = new Query('test', true)
    .addField(new Field('categories')
        .addField('name', true)
    )
