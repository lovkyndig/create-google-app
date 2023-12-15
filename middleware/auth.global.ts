// import { storeToRefs } from 'pinia' // autoimport
import { useOnline } from '@vueuse/core'
import { useAuthStore } from '~/store/auth'

const online = useOnline().value

export default defineNuxtRouteMiddleware((to) => {
  const { authenticated } = storeToRefs(useAuthStore()) // make authenticated state reactive
  const token = useCookie('token') // get token from cookies

  if (token.value) {
    // check if value exists
    // todo verify if token is valid, before updating the state
    authenticated.value = true // update the state to authenticated
  }

  // if token exists and url is /login redirect to homepage
  if (token.value && to?.name === 'login') {
    return navigateTo('/')
  }

  // if token doesn't exist redirect to log in
  /*
  if (!token.value && to?.name !== 'login') {
    abortNavigation()
    return navigateTo('/login')
  }
  */
  // startsWith('/article/epistler')
  if (!token.value && to.fullPath.match(/^\/(article\/a|article\/b\/)\/.*/)) {
    abortNavigation()
    // useSessionStorage
    // console.log('sessionStorage-value is: ' + sessionStorage.getItem('auth-page'))
    if (online) {
      sessionStorage.setItem('auth-page', `${to.fullPath}`)
    }
    const page = online ? '/login' : '/list'
    return navigateTo(page)
  }
})
/*
Source:
https://dev.to/rafaelmagalhaes/authentication-in-nuxt-3-375o
https://dummyjson.com/docs/auth
https://github.com/rafaelmagalhaes/nuxt3-auth
https://nuxt3-auth-ochre.vercel.app/
*/
