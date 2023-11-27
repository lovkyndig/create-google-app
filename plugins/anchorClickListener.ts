export default defineNuxtPlugin(() => {
  return {
    provide: {
      anchorClickListener: (list: NodeListOf<HTMLAnchorElement>) => {
        const clickIs = useState('clickIs', () => false)
        list.forEach((element) => {
          element.addEventListener('click', (event) => {
            const header = event.target as HTMLElement
            const detail = header.parentElement.parentElement.parentElement

            const summary = detail.querySelector('summary > span')
            if (summary) { // changing the expand icon to collapse - on the first click
              summary.innerHTML = collapseSvg
            }

            const hppp = header.parentElement.parentElement.parentElement
            if (hppp.tagName === 'DETAILS') {
              const siblings = getSiblings(detail)
              /*  ----------------- COPY/PASTE FROM toggle-method.ts -------------- */
              // Do something with the colleted siblings
              if (!detail.hasAttribute('open') && !detail.hasAttribute('id')) {
                siblings.map((sibling) => {
                  if (sibling.hasAttribute('open')) {
                    sibling.removeAttribute('open')
                  }
                })
              } else if (summary) { // Running this on click on an open accordion. - Changing icon.
                // Changing the collapse-icon to expand-icon on click on open element
                summary.innerHTML = expandSvg
              }
              /*  ------------------------ END copy/paste ------------------------ */
              if (!hppp.hasAttribute('open')) {
                hppp.setAttribute('open', '')
              }
            }
            useNuxtApp().$closeOtherSiblings(event)
            event.stopPropagation()
            clickIs.value = true
            return clickIs.value
          }, { once: true })
        })
      }
    }
  }
})
// added this "function/method" 21.10.2023 & using it in MarkdownPost
