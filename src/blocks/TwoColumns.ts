import { Block } from "payload/types";

const TwoColumns: Block = {
  slug: "twoColumns",
  labels: {
    singular: "Two Columns Blocks",
    plural: "Two Columns Blocks",
  },
  imageURL:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgFL5VgARVYMEZOrRB_aYmGwbItLFC-NNoJIl3dSVRXqpJLBfcwkaTYD2GMrX8eZrEIMc&usqp=CAU",
  fields: [
    {
      name: "heading",
      label: "Heading",
      type: "text",
      required: true,
    },
    {
      name: "text",
      label: "Text",
      type: "textarea",
    },
    {
      name: "image",
      label: "Image",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "direction",
      label: "Direction",
      type: "select",
      options: [
        {
          label: "Default",
          value: "default",
        },
        {
          label: "Reverse",
          value: "reverse",
        },
      ],
    },
  ],
};

export default TwoColumns;
