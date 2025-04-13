<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';

import PageFooter from '#/components/layout/footer/index.vue';
</script>

<template>
  <nav>
    <RouterLink to="/">Go to Home</RouterLink>
    <RouterLink to="/about">Go to About</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
  <PageFooter />
</template>
