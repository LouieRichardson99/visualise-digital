import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {singletonPlugin} from './plugins/settings'

// Icons
import {HomeIcon, MenuIcon, DocumentsIcon, LinkIcon} from '@sanity/icons'

// Schemas
import hero from './schemas/modules/hero'
import page from './schemas/documents/page'
import homepage from './schemas/singletons/homepage'
import pageBuilder from './schemas/objects/pageBuilder'
import header from './schemas/singletons/header'
import footer from './schemas/singletons/footer'
import socials from './schemas/singletons/socials'

export default defineConfig({
  name: 'default',
  title: 'Visualise Digital',

  projectId: 'ag20w38r',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title('Base')
          .items([
            S.listItem()
              .title('Navigation')
              .icon(MenuIcon)
              .child(
                S.list()
                  .title('Navigation Types')
                  .items([
                    S.documentListItem().title('Header').id('header').schemaType('header'),
                    S.documentListItem().title('Footer').id('footer').schemaType('footer'),
                  ])
              ),
            S.documentListItem()
              .title('Socials')
              .icon(LinkIcon)
              .id('socials')
              .schemaType('socials'),
            S.divider(),
            S.documentListItem()
              .title('Homepage')
              .icon(HomeIcon)
              .id('homepage')
              .schemaType('homepage'),
            S.listItem()
              .title('Pages')
              .icon(DocumentsIcon)
              .child(S.documentList().title('All Pages').filter('_type == "page"')),
          ]),
    }),
    visionTool(),
    singletonPlugin(['homepage', 'header', 'footer', 'socials']), // Add all singleton document types to the array
  ],
  schema: {
    types: [
      // Documents
      page,

      // Objects
      pageBuilder,

      // Singletons
      homepage,
      header,
      footer,
      socials,

      // Modules
      hero,
    ],
  },
})
