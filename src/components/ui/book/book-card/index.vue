<script setup lang="ts">
import { Card, Skeleton } from "#/adapters/primevue/components";

import { defineProps } from "vue";

const props = defineProps<{
  isLoading: boolean;
  book?: {
    id: number;
    title: string;
  };
}>();
</script>

<template>
  <template v-if="props.isLoading">
    <Card>
      <template #header>
        <div class="aspect-2/3 w-full">
          <Skeleton width="100%" height="100%" />
        </div>
      </template>
      <template #content>
        <Skeleton width="75%" height="1rem" />
      </template>
    </Card>
  </template>
  <template v-else-if="props.book">
    <Card>
      <template #header>
        <div class="aspect-2/3 w-full">
          <img
            class="object-cover h-full w-full"
            :alt="`book cover of ${props.book.title}`"
            src="https://307a0e78.vws.vegacdn.vn/view/v2/image/img.book/0/0/1/45056.jpg"
          />
        </div>
      </template>
      <template #content>
        <div class="h-[2lh]">
          <p v-tooltip.bottom="props.book.title" class="line-clamp-2">{{ props.book.title }}</p>
        </div>
      </template>
    </Card>
  </template>
</template>
