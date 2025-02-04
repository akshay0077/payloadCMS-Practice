import { CollectionConfig } from 'payload/types'

import Hero from  '../blocks/Hero'
import TwoColumns from '../blocks/TwoColumns'


const Pages: CollectionConfig = {
    slug:'pages',
    labels:{
        singular:'Page',
        plural:'Pages',
    },
    access:{
        read:()=>true,
    },
    fields:[
        {
            name:'name',
            label:'Name',
            type: 'richText',
            required:true
        },
        {
            name:'slug',
            label:'Slug',
            type: 'richText',
            required:true
        },
        {
            name:'layout',
            label:'Layout',
            type:'blocks',
            blocks:[
                Hero,
                TwoColumns
            ]
        }
    ]

}

export default Pages;