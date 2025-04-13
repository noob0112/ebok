<script setup lang="ts">
import { formatDistanceToNowStrict } from 'date-fns';
import { type BookReview } from '#/stores/book';
import { Rating } from '#/adapters/primevue/components';

const { bookReview } = defineProps<{ bookReview: BookReview }>();
</script>
<template>
  <div
    class="comment-card grid grid-cols-[3rem_1fr] grid-rows-[auto_auto] gap-x-4 gap-y-2 p-4 bg-[#1c1c1e] rounded-lg shadow-sm"
  >
    <img class="h-12 w-12" :src="bookReview.user?.avatar" alt="Avatar" />
    <div class="flex items-center justify-between">
      <h3>{{ bookReview.user?.name }}</h3>
      <p>{{ formatDistanceToNowStrict(bookReview.createdAt) }}</p>
    </div>
    <div class="content flex items-center justify-between">
      <p class="comment">{{ bookReview.comment }}</p>
      <Rating class="nowrap" v-model="bookReview.rating" readonly />
    </div>
  </div>
</template>

<style scoped>
.comment-card {
  & > .content {
    grid-column: 2 / 2;
  }
}
</style>
