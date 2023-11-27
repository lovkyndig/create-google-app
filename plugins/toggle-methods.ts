export default defineNuxtPlugin(() => {
  return {
    provide: {
      closeAllHeadings: () => {
        if (document) {
          // first step: set attributes (style is set in assets/style.css)
          const detailEl = document.querySelectorAll('details[data-heading-id]')
          detailEl.forEach((element) => { // adding //tooltip
            element.setAttribute('title', 'Click beside the Header - to toggle the content!') 
            element.setAttribute('style', 'position:relative;')
            const summary = element.querySelector('summary')
            if (summary) {
              summary.setAttribute('class', 'summary') // set expand icon on all headings
              const html = `<span style="opacity:0.8s;position:absolute;right:0.8rem;bottom:0.8rem">
                            ${expandSvg}
                          </span>`
              summary.insertAdjacentHTML('beforeend', html)
            }
          })
          // second step: close all open elements
          const searchString = useState('searchString')
          if (searchString.value === '') {
            detailEl.forEach((element) => {
              if (element.hasAttribute('open') && element.hasAttribute('data-heading-id')) {
                element.removeAttribute('open')
              }
            })
          }
        }
      },
      closeOtherSiblings: (event) => { // and open the clicked one
        // This script works similar as closable accordions with only one open at the time
        const current = event.currentTarget as HTMLDetailsElement
        console.log('clicked event.tagName: ' + current.tagName)
        const summary = current.querySelector('summary > span')
        if (summary) { // changing the expand icon to collapse - on the first click
          summary.innerHTML = collapseSvg
        }
        // First step: Close other open siblings
        // const getSibling saved in utils-folder
        const siblings = getSiblings(current)
        // Do something with the colleted siblings
        if (!current.hasAttribute('open') && !current.hasAttribute('id')) {
          siblings.map((sibling) => {
            if (sibling.hasAttribute('open')) {
              sibling.removeAttribute('open')
            }
            // return expandSvg
          })
          if (current.querySelector('[data-heading-path]')) {
            moveClickedHeaderToTheTop(current.querySelector('[data-heading-path]'))
          }
        } else if (summary) { // Running this on click on an open accordion. - Changing icon.
          // Changing the collapse-icon to expand-icon on click on open element
          summary.innerHTML = expandSvg
        }

        // Second step: Get the clicked header on the top of the screen
        function moveClickedHeaderToTheTop (hElem) {
          const path = hElem.getAttribute('id')
          let url = window.location.href
          const urlArray = url.split('#')
          url = urlArray[0] // get only the first part of the url (if more)
          const page = '#' + path
          // get the url and add page-id to it, and then "click"
          window.location.href = url + page
        }
      }
    }
  }
})
