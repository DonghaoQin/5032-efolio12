<template>
    <div class="center-form">
      <h1>Logout</h1>
      <p>Are you sure you want to log out?</p>
      <p><button @click="logout">Logout</button></p>
    </div>
  </template>
  
  <script setup>
  import { getAuth, signOut } from "firebase/auth"
  import { useRouter } from "vue-router"
  
  const router = useRouter()
  const auth = getAuth()
  
  const logout = () => {
    signOut(auth)
      .then(() => {
        console.log("Logout successful")
        router.push("/firelogin"); 

      })
      .catch((error) => {
        console.error("Error during logout:", error)
      })
  }
  </script>
  
  <style scoped>
  .center-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  p {
    margin: 10px 0;
  }
  
  h1 {
    margin-bottom: 20px;
  }
  </style>
  