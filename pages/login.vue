<script lang="ts" setup>
// import { storeToRefs } from 'pinia' // autoimport
import { useAuthStore } from '~/store/auth'

const { authenticateUser } = useAuthStore() // use auth store

const { authenticated } = storeToRefs(useAuthStore()) // make authenticated state reactive

const user = ref({
  username: '',
  password: ''
})
const router = useRouter()

const login = async () => {
  await authenticateUser(user.value)
  // redirect to homepage if user is authenticated
  if (authenticated) {
    const authPage = sessionStorage.getItem('auth-page')
    router.push(authPage)
  } else {
    router.push('/about')
  }
}

/*
Source:
https://dev.to/rafaelmagalhaes/authentication-in-nuxt-3-375o
https://dummyjson.com/docs/auth
https://github.com/rafaelmagalhaes/nuxt3-auth
https://nuxt3-auth-ochre.vercel.app/
*/
</script>

<template>
  <NuxtLayout name="base">
    <div class="title">
      <a
        href="/api/login"
        target="_blank"
        aria-label="Click me to get username and password!"
        class="text-blue-500 hover:text-blue-600 transition-colors duration-300"
        style="border-bottom:1px solid #6b21a8"
      >
        <b>Login</b>
      </a>
    </div>
    <div class="container form">
      <label for="uname"><b>Username</b></label>
      <input
        v-model="user.username"
        type="text"
        class="input"
        placeholder="Enter Username"
        name="uname"
        required
      >

      <label for="psw"><b>Password</b></label>
      <input
        v-model="user.password"
        type="password"
        class="input"
        placeholder="Enter Password"
        name="psw"
        required
      >

      <button class="button" @click.prevent="login">
        Login
      </button>
    </div>
  </NuxtLayout>
</template>

<style lang="scss">
.title {
  display: flex;
  justify-content: center;
}
.container {
  padding: 16px;
}
.form {
  border: 3px solid #f1f1f1;
  border-radius: 10px;
  .input {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
  }
  .button {
    background-color: #04aa6d;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
  }

  .button:hover {
    opacity: 0.8;
  }
  .cancelbtn {
    width: auto;
    padding: 10px 18px;
    background-color: #f44336;
  }

  span.psw {
    float: right;
    padding-top: 16px;
  }

  /* Change styles for span and cancel button on extra small screens */
  @media screen and (max-width: 300px) {
    span.psw {
      display: block;
      float: none;
    }
    .cancelbtn {
      width: 100%;
    }
  }
}
</style>
