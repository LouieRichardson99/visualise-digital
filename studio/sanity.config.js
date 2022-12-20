import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {singletonPlugin} from './plugins/settings'
import {JsonPreview} from './components/JsonPreview'

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

// Components
import {Logo} from './components/Logo'

const defaultDocumentNodeResolver = (S) =>
  S.document().views([S.view.form(), S.view.component(JsonPreview).title('JSON')])

export default defineConfig({
  name: 'default',
  title: 'Visualise Digital',

  projectId: 'ag20w38r',
  dataset: 'production',
  studio: {
    components: {
      logo: Logo,
    },
  },
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
      defaultDocumentNode: defaultDocumentNodeResolver, // Adds JSON preview tab
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
