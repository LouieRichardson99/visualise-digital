import {defineType} from 'sanity'

export default defineType({
  name: 'footer',
  title: 'Footer',
  type: 'document',
  preview: {
    prepare() {
      return {
        title: 'Footer',
      }
    },
  },
  fields: [
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      description: 'The business logo to be displayed on the footer',
    },
  ],
})
