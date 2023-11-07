export default defineNuxtPlugin(() => {
  return {
    provide: {
      anchorClickListener: (list: NodeListOf<HTMLAnchorElement>) => {
        const clickIs = useState('clickIs', () => false)
        list.forEach((element) => {
          element.addEventListener('click', (event) => {
            event.stopPropagation()
            clickIs.value = true
            return clickIs.value
          }, { once: true, passive: true })
        }, { passive: true })
      }
    }
  }
})
// added this "function/method" 21.10.2023 & using it in MarkdownPost
