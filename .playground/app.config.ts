export default defineAppConfig({
  myLayer: {
    name: 'Create Google App',
    meta: {
      homepage: 'https://create-google-app.vercel.app/',
      author: 'Kyrie Eleison',
      email: 'jur.eleison@gmail.com'
    },
    menu: {
      btn1: 'Google',
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
        title: 'How to Create an App and go on Google App Store?',
        description: 'How to Create a Google App in less than a week, with no programming skills? Answer: Follow my guidelines and read this documentation:)'
      },
      about: {
        title: 'Information about this Google App, and going on "Google App Store"',
        description: 'About the guidelines and description of how to create a google app'
      },
      privacy: {
        title: 'Privacy Policy following because this is an Google App.',
        description: 'The Privacy Policy, Sitemap and Rss for "Create Google App". Privacy Policy is requrid for all Google Apps.'
      },
      list: {
        tags: 'Documentation/guidelines in "Create Google App" with tag: ',
        tags_all: 'All guidelines"',
        description: 'This is the list of content in the "Create Google App" - with responsive design for mobile and laptop.'
      },
      slug: {
        description: 'Guidelines and documentation for "Create Google App" - a tutorial for non-programmers/non-developers!'
      }
    }
  },
})
