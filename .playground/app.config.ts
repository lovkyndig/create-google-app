import pkg from './package.json'
export default defineAppConfig({
  myLayer: {
    name: 'PWA Starter App',
    meta: {
      homepage: pkg.homepage,
      author: 'Kyrie Eleison',
      email: 'jur.eleison@gmail.com',
      version: `Playground ${pkg.version}`
    },
    menu: {
      btn1: 'Articles',
    },
    notification: {
      frontpage: 'PWA Starter App by Kyrie Eleison for Theme: Create Google App',
      about: 'A laywer from Norway, Kyrie Eleison, has made this app! Like it? Follow him on GitHub!',
      privacy: 'Privacy police is normally not recuried, but because this app is published on Google Play - Google need it.',
      list: 'Search and find what you are locking for - with the amazing search-functionality on this PWA Starter App.',
      slug: 'Read the documentation with guidelines about how to create a Google App in one week, in this starter app.'
    },
    seoMeta: {
      home: {
        title: 'PWA Starter App by Kyrie Eleison for Theme: Create Google App',
        description: 'How to Create a Google App in less than a week, with no programming skills? Answer: Follow my guidlines and read this documentation:)'
      },
      about: {
        title: 'Information about PWA Starter App and the articles about creating Google App"',
        description: 'About "WA Starter App" and why its a perfect starter-kit for non-programmers.'
      },
      privacy: {
        title: 'Privacy Policy following because this is an Google App.',
        description: 'The Privacy Policy, Sitemap and Rss for "PWA Starter App". Privacy Policy is requrid for all Google Apps.'
      },
      list: {
        tags: 'Documentation/guidelines in "PWA Starter App" with tag: ',
        tags_all: 'All guidelines"',
        description: 'This is the list of content in the "PWA Starter App" - with responsive design for mobile and laptop.'
      },
      slug: {
        description: 'Guidelines and documentation for "PWA Starter App"; a starter-kit for non-programmers/non-developers!'
      }
    },
    giscus: {
      repo: 'lovkyndig/create-google-app',
      repoId: 'R_kgDOKfRikA',
      category: 'Comments',
      categoryId: 'DIC_kwDOKfRikM4Capmi',
      mapping: 'url',
      reactionsEnabled: '1',
      emitMetadata: '0',
      inputPosition: 'bottom',
      theme: 'noborder_dark',
      lang: 'en'
    }
  }
})
