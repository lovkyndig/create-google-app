// METHODS USED IN PAGES/LIST.VUE
const appConfig = useAppConfig()
const config = useRuntimeConfig()
const titles = useSearchString()
const searchString = useState('searchString')

/**
 *
 * Publishing the TITLE.
 * Using route.path as argument to this function.
 * Using this function five times below, from here to the script end.
 *
 */
const publishTitle = (value, route) => { // using this function 5 times below
  const title = ref(value)
  titles.value = title
  useSeoMeta({
    title: title.value,
    description: `${appConfig.myLayer.list.description} ${route.fullPath.slice(9)}`,
    ogDescription: `${appConfig.myLayer.list.description} ${route.fullPath.slice(9)}`,
    ogUrl: `${config.public.hostname}${route.fullPath}`
  })
  useHead({ link: [{ rel: 'canonical', href: `${config.public.hostname}${route.fullPath}` }] })
}

/**
 * Loading echoQueryParam in onMounted in list-page.
 */
const echoQueryParam = (queryObj, route) => {
  /* const cat = queryObj.category; const tag = queryObj.tags; const serie = queryObj.series */
  if (process.client) {
    const querystring = window.location.search
    if (querystring.substring(1)) { // set searchString.value
      searchString.value = querystring.substring(1)
    } else { /* console.log('No searchstring here!') */ }
  }
  publishTitle(`${appConfig.myLayer.list.tags} ${searchString.value}`, route)
}

const getAndUseSearchparam = (route: any) => { // only on load
  if (route.fullPath === route.path) {
    publishTitle(appConfig.myLayer.list.tags_all, route)
  } else {
    publishTitle(`${appConfig.myLayer.list.tags} ${route.fullPath.slice(9)}`, route)
  }
}
// getAndUseSearchparam(route)

export { publishTitle, echoQueryParam, getAndUseSearchparam }
