import pkg from './package.json'

export default defineAppConfig({
  myLayer: {
    meta: {
      name: 'Create Goocle App',
      version: pkg.version,
      description: pkg.description,
      homepage: pkg.homepage,
      logo: 'Kyrie Eleison' // max 13 char
    },
    menu: { btn: 'Google' },
    author: pkg.author,
    email: 'jur.eleison@gmail.com',
    avatar: '/img/svg/avatar.svg',
    favicon: '/favicon.svg',
    assetTypes: [],
    giscus: {
      repo: 'lovkyndig/create-google-app',
      repoId: 'R_kgDOKfRikA',
      category: 'Comments',
      categoryId: 'DIC_kwDOKfRikM4Capmi',
      mapping: 'url',
      reactionsEnabled: '1',
      emitMetadata: '0',
      inputPosition: 'top',
      theme: 'noborder_dark',
      lang: 'en',
      loading: 'lazy'
    },
    privacy: {
      title: 'Privacy Policy following because this is an Google App.',
      description: 'The Privacy Policy, Sitemap and Rss for "Create Google App". Privacy Policy is requrid for all Google Apps.',
      notification: 'Privacy police is normally not recuried, but because this app is published on Google Play - Google need it.'
    },
    about: {
      title: 'Information about this App, and going on Google Play Store',
      description: 'About the guidelines and description of the app "Create Google app", and the creator - the laywer Kyrie Eleison.',
      notification: 'A laywer from Norway, Kyrie Eleison, has made this app! Like it? Follow him on GitHub!'
    },
    home: {
      title: 'How to Create an App and go on Google App Store?',
      description: 'How to Create a Google App in less than a week, with no programming skills? Answer: Follow my guidelines and read this documentation:)',
      notification: 'How to create an google app in one week?'
    },
    slug: {
      description: 'Guidelines and documentation for "Create Google App" with url: ',
      notification: 'Read the documentation with guidelines about how to create a Google App in one week.'
    },
    list: {
      tags: 'Guidelines in "Create Google App" with tag: ',
      tags_all: 'All guidelines"',
      description: 'This is the list of content in the "Create Google App" - with responsive design for mobile and laptop.',
      notification: 'Search and find what you are locking for - with the amazing search-functionality on this Google App.'
    },
    scrollSmooth: true,
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
    }
  }
})
/*
ahrefs LENGTH guide:
Title: 50-60
Descriptionn 110-130
*/
