<template>
  <div v-if="user_session !== null">
    <div class="md:flex block">
      <app-header></app-header>
      <router-view />
    </div>
  </div>
  <div v-else>
    <login-page></login-page>
  </div>
</template>
<script>
import AppHeader from "./components/AppHeader.vue";
// import { ModalsContainer } from 'vue-final-modal'
import LoginPage from "./views/LoginPage.vue";

export default {
  data(){
    return {
      user_session: localStorage.getItem('user_token')
    }
  },
  components: {
    AppHeader,
    // ModalsContainer,
    LoginPage
  },
  methods: {
    async checkCookie() {
      if( this.user_session === null) {
        this.responseAlert("الرجاء تسجيل الدخول", "عفوا", "warning")
        this.$route.push('/LoginPage')
      }
      this.responseAlert("الرجاء تسجيل الدخول", "عفوا", "warning")
    },
    responseAlert(text, title, icon) {
      this.$swal.fire({
        title: `${title}`,
        text: ` ${text} `,
        icon: `${icon}`,
        toast: true,
        position: "top-start",
        showConfirmButton: false,
        timer: 2000,
      });
    },
    

  },
  provide() {
    return {
      checkCookie: this.checkCookie,
      responseAlert: this.responseAlert,
    };
  }
};
</script>

<style>
</style>

<!--
  admin4
  admin4@gmail.com
  123123123
  0123456789
-->