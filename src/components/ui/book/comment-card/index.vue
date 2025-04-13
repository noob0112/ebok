<script setup lang="ts">
import { formatDistanceToNowStrict } from 'date-fns';
import { type Comment } from '#/stores/book';

const { comment } = defineProps<{ comment: Comment }>();
</script>
<template>
  <div
    class="comment-card grid grid-cols-[3rem_1fr] grid-rows-[auto_auto] gap-x-4 gap-y-2 p-4 bg-[#1c1c1e] rounded-lg shadow-sm"
  >
    <img class="h-12 w-12" :src="comment.user?.avatar" alt="Avatar" />
    <div class="flex items-center justify-between">
      <h3>{{ comment.user?.name }}</h3>
      <p>{{ formatDistanceToNowStrict(comment.createdAt) }}</p>
    </div>
    <p class="content">{{ comment.content }}</p>
  </div>
</template>

<style scoped>
.comment-card {
  & > .content {
    grid-column: 2 / 2;
  }
}
</style>
