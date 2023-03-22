<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="alert alert-danger">{{ errorMessage }}</div>
        <div class="col-md-6">
          <form>
            <div class="mb-3">
              <label for="inputUsername" class="form-label">Username</label>
              <input id="inputUsername" v-model="username" type="text" class="form-control" />
            </div>
            <div class="mb-3">
              <label for="inputPassword" class="form-label">Password</label>
              <input type="password" v-model="password" class="form-control" id="inputPassword" />
            </div>
            <button type='button' class="btn btn-primary" @click="login">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import axios from '../axios-auth.js';
import { useUserSessionStore } from '../stores/usersession';
export default {
  setup() {
    return {
      store: useUserSessionStore()
    }
  },
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      errorMessage: ""
    };
  },
  methods: {
    login() {
      this.store.login(this.username, this.password).then(() => {
        this.$router.push('/products');
      }).catch((error) => {
        this.errorMessage = error;
      });
    }
  }
};
</script>

<style></style>