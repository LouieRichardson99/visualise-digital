import {defineType} from 'sanity'

export default defineType({
  name: 'header',
  title: 'Header',
  type: 'document',
  preview: {
    prepare() {
      return {
        title: 'Header',
      }
    },
  },
  fields: [
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      description: 'The business logo to be displayed on the navigation bar',
    },
  ],
})
