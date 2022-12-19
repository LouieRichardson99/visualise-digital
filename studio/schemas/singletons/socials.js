import {defineType} from 'sanity'
import {FaLinkedin, FaTwitter, FaInstagram} from 'react-icons/fa'

export default defineType({
  name: 'socials',
  title: 'Socials',
  type: 'document',
  description: 'Links to social networking profiles.',
  preview: {
    prepare() {
      return {
        title: 'Links to Socials',
      }
    },
  },
  fields: [
    {
      type: 'array',
      name: 'socialLinks',
      title: 'Social Links',

      of: [
        {
          name: 'linkedIn',
          title: 'LinkedIn',
          type: 'object',
          icon: FaLinkedin,
          preview: {
            prepare() {
              return {
                title: 'LinkedIn',
                media: FaLinkedin,
              }
            },
          },
          fields: [
            {
              title: 'LinkedIn Link',
              name: 'link',
              type: 'url',
              description: 'Enter the link to your LinkedIn profile.',
            },
          ],
        },
        {
          name: 'twitter',
          title: 'Twitter',
          type: 'object',
          icon: FaTwitter,
          preview: {
            prepare() {
              return {
                title: 'Twitter',
                media: FaTwitter,
              }
            },
          },
          fields: [
            {
              title: 'Twitter Link',
              name: 'link',
              type: 'url',
              description: 'Enter the link to your Twitter profile.',
            },
          ],
        },
        {
          name: 'instagram',
          title: 'Instagram',
          type: 'object',
          icon: FaInstagram,
          preview: {
            prepare() {
              return {
                title: 'Instagram',
                media: FaInstagram,
              }
            },
          },
          fields: [
            {
              title: 'Instagram Link',
              name: 'link',
              type: 'url',
              description: 'Enter the link to your Instagram profile.',
            },
          ],
        },
      ],
    },
  ],
})
