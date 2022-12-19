import {defineType} from 'sanity'
import {RobotIcon, DocumentIcon, HomeIcon} from '@sanity/icons'

export default defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  icon: HomeIcon,
  groups: [
    {
      name: 'pageContent',
      title: 'Page content',
      default: true,
      icon: DocumentIcon,
    },
    {
      name: 'seo',
      title: 'SEO',
      icon: RobotIcon,
    },
  ],
  fields: [
    // Page Content
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      group: 'pageContent',
    },
    {
      name: 'pageBuilder',
      type: 'pageBuilder',
      group: 'pageContent',
    },

    // SEO
    {
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      description: 'The page title that shows up in search results.',
      group: 'seo',
      validation: (Rule) => [
        Rule.required().error('Meta Title is required'),
        Rule.max(65).warning('Meta Title should be no more than 65 characters'),
      ],
    },
    {
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'string',
      description: 'The page description that shows up in search results.',
      group: 'seo',
      validation: (Rule) => [
        Rule.required().error('Meta Description is required'),
        Rule.max(160).warning('Meta Description should be no more than 160 characters'),
      ],
    },
    {
      name: 'metaImage',
      title: 'Meta Image',
      type: 'image',
      description:
        'The Open Graph image that appears when the page is shared to social networking sites.',
      group: 'seo',
    },
  ],
})
