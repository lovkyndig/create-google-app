import pkg from '../package.json'

export default defineAppConfig({
  myLayer: {
    meta: {
      name: 'Playground Test',
      version: `Playground ${pkg.version}`,
      description: pkg.description,
      homepage: pkg.homepage,
      logo: 'Kyrie Eleison'
    },
    menu: { btn: 'Articles' },
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
        description: 'The Privacy Policy, Sitemap and Rss for "PWA Starter App". Privacy Policy is requrid for all Google Apps.',
      notification: 'Privacy police is normally not recuried, but because this app is published on Google Play - Google need it.'
    },
    about: {
      title: 'Information about PWA Starter App and the articles about creating Google App"',
      description: 'About "WA Starter App" and why its a perfect starter-kit for non-programmers.',
      notification: 'A laywer from Norway, Kyrie Eleison, has made this app! Like it? Follow him on GitHub!'
    },
    home: {
      title: 'PWA Starter App by Kyrie Eleison for Theme: Create Google App',
      description: 'How to Create a Google App in less than a week, with no programming skills? Answer: Follow my guidlines and read this documentation:)',
      notification: 'PWA Starter App by Kyrie Eleison for Theme: Create Google App'
    },
    slug: {
      description: 'Guidelines and documentation for "PWA Starter App" with url: ',
      notification: 'Read the documentation with guidelines about how to create a Google App in one week, in this starter app.'
    },
    list: {
      tags: 'Documentation/guidelines in "PWA Starter App" with tag: ',
      tags_all: 'All guidelines"',
      description: 'This is the list of content in the "PWA Starter App" - with responsive design for mobile and laptop.',
      notification: 'Search and find what you are locking for - with the amazing search-functionality on this PWA Starter App.'
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
