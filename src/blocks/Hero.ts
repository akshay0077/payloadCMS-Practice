import { Block } from 'payload/types';

const Hero: Block = {
    slug:'hero',
    labels:{
        singular:'Hero Blocks',
        plural:'Hero Blocks',
    },
    imageURL: 'https://img.freepik.com/free-vector/gradient-particle-wave-background_23-2150517309.jpg?size=626&ext=jpg',
    fields:[
        {
            name:'heading',
            label:'Heading',
            type:'text',
        },
        {
            name:'text',
            label:'Text',
            type:'textarea',
        },
        {
            name:'backgroundImage',
            label:'Background Image',
            type:'upload',
            relationTo:'media'
        },

    ]
}

export default Hero;