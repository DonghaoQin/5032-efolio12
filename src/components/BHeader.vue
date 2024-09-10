<template>
  <div class="container">
    <header class="d-flex justify-content-center py-3">
      <ul class="nav nav-pills">
        <li class="nav-item">
          <router-link to="/" class="nav-link" active-class="active" aria-current="page">
            Home (Week 5)
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link" active-class="active">About</router-link>
        </li>
        <!-- 根据用户是否登录，显示不同的链接 -->
        <li class="nav-item" v-if="!isLoggedIn">
          <router-link to="/login" class="nav-link" active-class="active">Login</router-link>
        </li>
        <li class="nav-item" v-else>
          <button @click="logout" class="nav-link btn btn-link">Logout</button>
        </li>
        <li class="nav-item">
            <router-link to="/Firelogin" class="nav-link" active-class="active">Firebase Login</router-link>
        </li>

      </ul>
    </header>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const isLoggedIn = ref(localStorage.getItem('isLoggedIn') === 'true');
const router = useRouter();

const logout = () => {
  localStorage.removeItem('isLoggedIn'); // 清除登录状态
  isLoggedIn.value = false; // 更新本地状态
  router.push('/login'); // 重定向到登录页面
};
</script>

<style scoped>
/* 确保导航项之间有足够的间距 */
.nav-pills .nav-item {
  margin-right: 15px;
}

.nav-pills .nav-item:last-child {
  margin-right: 0;
}
</style>
