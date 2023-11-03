import pkg from './package.json'
export default defineAppConfig({
  myLayer: {
    name: 'Create Google App',
    meta: {
      homepage: pkg.homepage,
      author: 'Kyrie Eleison',
      email: 'jur.eleison@gmail.com',
      version: pkg.version
    },
    menu: {
      btn1: 'Google'
    },
    notification: {
      frontpage: 'How to create an google app in one week?',
      about: 'A laywer from Norway, Kyrie Eleison, has made this app! Like it? Follow him on GitHub!',
      privacy: 'Privacy police is normally not recuried, but because this app is published on Google Play - Google need it.',
      list: 'Search and find what you are locking for - with the amazing search-functionality on this Google App.',
      slug: 'Read the documentation with guidelines about how to create a Google App in one week.'
    },
    seoMeta: {
      home: {
        title: 'How to Create an sApp and go on Google App Store?',
        description: 'How to Create a Google App in less than a week, with no programming skills? Answer: Follow my guidelines and read this documentation:)'
      },
      about: {
        title: 'Information about this App, and going on Google Play Store',
        description: 'About the guidelines and description of the app "Create Google app", and the creator - the laywer Kyrie Eleison.'
      },
      privacy: {
        title: 'Privacy Policy following because this is an Google App.',
        description: 'The Privacy Policy, Sitemap and Rss for "Create Google App". Privacy Policy is requrid for all Google Apps.'
      },
      list: {
        tags: 'Guidelines in "Create Google App" with tag: ',
        tags_all: 'All guidelines"',
        description: 'This is the list of content in the "Create Google App" - with responsive design for mobile and laptop.'
      },
      slug: {
        description: 'Guidelines and documentation for "Create Google App" with url: '
      }
    },
    giscus: {
      repo: 'lovkyndig/create-google-app',
      repoId: 'R_kgDOKfRikA',
      category: 'Q&A',
      categoryId: 'DIC_kwDOKfRikM4CapTf',
      mapping: 'title',
      reactionsEnabled: '1',
      emitMetadata: '0',
      theme: 'noborder_dark',
      lang: 'en'
    }
  },
  site: {
    logo: '/img/svg/text-logo.svg',
    avatar: '/img/svg/avatar.svg',
    favicon: '/favicon.svg'
  },
  homePage: {
    showBlogPosts: true,
    postItemLimit: 20
  },
  privacyPage: true,
  articlePage: {
    showTime: true,
    outdated: {
      show: true,
      threshold: 30
    },
    showCatalog: false
  },
  search: {
    exclude: [
      '/',
      '/about/',
      '/privacy/',
      '/list/'
    ]
  },
  scrollSmooth: true,
  assetTypes: []
})

declare module '@nuxt/schema' {
  interface AppConfigInput {
    myLayer?: {
      /** Project name */
      name?: string
    }
  }
}
/*
ahrefs guide:
Title: 50-60
Descriptionn 110-130
*/
