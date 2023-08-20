
import { defineType } from 'sanity';
import {defineField} from 'sanity'


export default   defineType ({
    name: "products",
    type: "document",
    title: "products",

    fields:[
       
        
        defineField({

            name : "image",
            type : "image",
            title : "Image",
        }),
        defineField ({

            name : "title",
           type : "string",
            title : "Title",
        }),
        defineField({

            name  :  "slug",
            type  :  "slug",
            title : "slug",
            options : {
               source : "title",
               maxLength : 50,
            }
        }),
        defineField({

            name : "decription",
            type : "string",
            title : "Description",
        }),
        defineField({

            name : "price",
            type : "number",
            title : "price",
        }),
        defineField({

            name : "category",
            type : "string",
            title : "category",
            options:{
                list:[
                    {title: "Man", value:"man"},
                    {title: "Women", value:"women"},
                    {title: "Kids", value:"kids"},

                ]
            }
        }),

    ],
});