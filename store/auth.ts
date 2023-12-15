interface UserPayloadInterface {
  username: string;
  password: string;
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    authenticated: false,
    loading: false
  }),
  actions: {
    async authenticateUser ({ username, password }: UserPayloadInterface) {
      // useFetch from nuxt 3 // 'https://dummyjson.com/auth/login'
      const { data, pending }: any = await useFetch('https://dummyjson.com/auth/login', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' }, // application/json
        body: {
          username,
          password
        }
      })
      this.loading = pending

      if (data.value) {
        const token = useCookie('token') // useCookie new hook in nuxt 3
        token.value = data?.value?.token // set token to cookie
        this.authenticated = true // set authenticated  state value to true
      }
    },
    logUserOut() {
      const token = useCookie('token') // useCookie new hook in nuxt 3
      this.authenticated = false // set authenticated  state value to false
      token.value = null // clear the token cookie
    }
  }
})

/*
Source:
https://dev.to/rafaelmagalhaes/authentication-in-nuxt-3-375o
https://dummyjson.com/docs/auth
https://github.com/rafaelmagalhaes/nuxt3-auth
https://nuxt3-auth-ochre.vercel.app/
*/
