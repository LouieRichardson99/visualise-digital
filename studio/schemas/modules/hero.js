import {defineType} from 'sanity'

export default defineType({
  name: 'hero',
  type: 'object',
  title: 'Hero',
  initialValue: {
    variation: 'default',
  },
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
    },
    {
      name: 'tagline',
      type: 'string',
      title: 'Tagline',
    },
    {
      title: 'Variation',
      name: 'variation',
      type: 'string',
      options: {
        list: [
          {title: 'Default', value: 'default'},
          {title: '2 Column', value: '2Column'},
        ],
        layout: 'dropdown',
      },
      initialValue: 'default',
      validation: (Rule) => Rule.required().error('Variation is required'),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      hidden: ({parent}) => parent?.variation !== '2Column', // Hidden if variation is not 2 Column
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        },
      ],
    },
  ],
})
