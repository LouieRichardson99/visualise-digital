import {defineType} from 'sanity'

export default defineType({
  title: 'Page Builder',
  name: 'pageBuilder',
  description: 'Build out the page with pre-defined sections!',
  type: 'object',
  fields: [
    {
      name: 'pageSections',
      title: 'Page Sections',
      type: 'array',
      of: [
        {
          type: 'hero',
        },
      ],
    },
  ],
})
