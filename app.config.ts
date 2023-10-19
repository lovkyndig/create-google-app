export default defineAppConfig({
  myLayer: {
    name: 'Hello from Nuxt layer',
    menuBtn1: 'Google',
    notification: {
      // frontpage: 'How to create an google app in one week?',
      frontpage: 'This app is under heavy development! It is working fine, but there is added futures all the time.',
      about: 'Do you love this app? Please wait some weeks before you download it from github.com/lovkyndig.',
      privacy: 'The privacy is normally not recuried, but because this app is published on Google Play - Google need it:)',
      list: 'Search and find what you are locking for with the amazing search-functionality on this site:)'
    },
    seoMeta: {
      home: {
        title: 'Create Google App',
        description: 'How to Create a Google App in less than a week, with no programming skills? Answer: Follow my guidlines and read this documentation:)'
      },
      about: {
        title: 'About this Google App',
        description: 'About the guidlines and description of how to create a google app'
      },
      list: {
        title: 'List of content in this Google App',
        description: 'This is the list of content in the "Create Google App" - with responsive design for mobile and laptop. '
      },
      privacy: {
        title: 'Privacy Policy etc.',
        description: 'The Privacy Policy, Sitemap and Rss for "Create Google App". Privacy Policy is requrid for all Google Apps.'
      }
    }
  },
  meta: {
    url: 'https://create-google-app.vercel.app/'
  },
  site: {
    author: 'Kyrie Eleison',
    email: 'jur.eleison@gmail.com',
    logo: '/svg/text-logo.svg',
    avatar: '/svg/avatar.svg',
    favicon: '/favicon.svg', // favicon.ico
    scrollSmooth: true
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
    showCatalog: false,
  },
  search: {
    exclude: [
      '/',
      '/about/',
      '/privacy/',
      '/list/'
    ]
  },
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
