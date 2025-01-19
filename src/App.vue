<template>
  <button @click="login">Connexion</button>
  <button @click="character">Character</button>
  <p>Page principal {{ response }}</p>
</template>

<script setup lang="ts">
import axios from "axios";
import { ref } from "vue";

const response = ref("");
const config = ref();

async function login() {
  const response = await axios.post("http://127.0.0.1:8000/api/login", {
    email: "myster.gryffus@gmail.com",
    password: "test123",
  });
  const token = response.data.data.token;
  config.value = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
}

async function character() {
  const data = await axios.get(
    "http://127.0.0.1:8000/api/characters/a5011d8a-de24-4e8c-91cb-91edaa8b6fa7/with_linked_items",
    config.value
  );
  response.value = data.data.data;
}
</script>
