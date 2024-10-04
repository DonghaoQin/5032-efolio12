<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router'; 
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

import Header from '../components/BHeader.vue';

const hardcodeUserName = 'user';
const hardcodePassword = '123456';

const formData = ref({
  username: '',
  password: '',
});

const errors = ref({
  username: null,
  password: null,
});

const router = useRouter(); 

const validateName = (blur) => {
  if (formData.value.username.length < 3) {
    if (blur) errors.value.username = 'Name must be at least 3 characters';
  } else {
    errors.value.username = null;
  }
};

const validatePassword = (blur) => {
  if (formData.value.password.length < 6) {
    if (blur) errors.value.password = 'Password must be at least 6 characters long.';
  } else {
    errors.value.password = null;
  }
};

const submitForm = () => {
  validateName(true);
  validatePassword(true);
  
  if (
    !errors.value.username &&
    !errors.value.password &&
    formData.value.username === hardcodeUserName &&
    formData.value.password === hardcodePassword
  ) {
    alert("Login success");
    localStorage.setItem('isLoggedIn', 'true'); 
    router.push('/about'); 
  }
};

</script>

<template>
  <Header />

  <div class="container mt-5">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <h2 class="text-center">Login</h2>
        <form @submit.prevent="submitForm">
          <div class="mb-3">
            <label for="username" class="form-label">Username</label>
            <input
              type="text"
              class="form-control"
              id="username"
              @blur="() => validateName(true)"
              @input="() => validateName(false)"
              v-model="formData.username"
            />
            <div v-if="errors.username" class="text-danger">{{ errors.username }}</div>
          </div>

          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input
              type="password"
              class="form-control"
              id="password"
              v-model="formData.password"
              @blur="() => validatePassword(true)"
              @input="() => validatePassword(false)"
            />
            <div v-if="errors.password" class="text-danger">{{ errors.password }}</div>
          </div>

          <div class="text-center">
            <button type="submit" class="btn btn-primary me-2">Login</button>
            <button type="button" class="btn btn-secondary" @click="clearForm">Clear</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  max-width: 50vw;
  margin: 0 auto;
  padding: 20px;
  border-radius: 10px;
}

.form {
  text-align: center;
  margin-top: 50px;
}

#username:focus,
#password:focus {
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
