<script setup lang="ts">
import { ref } from "vue";
import { DataView } from "#/adapters/primevue/components";
import BookCard from "#/components/ui/book/book-card/index.vue";

const layout = ref("grid");
const products = ref([{}]);
const book = {
  id: 1,
  title: "Yeu trong tinh thuc Yeu trong tinh thuc  Yeu trong tinh thucYeu trong tinh thuc Yeu trong tinh thuc",
  slug: "yeu-trong-tinh-thuc",
  description: "",
  author: {},
  categories: [],
};
</script>
<template>
  <DataView
    :layout="layout"
    :value="products"
    :totalRecords="100"
    :paginator="true"
    :rows="12"
    dataKey="id"
  >
    <template #grid>
      <div class="grid grid-cols-12 gap-2 sm:gap-4 p-2">
        <div
          v-for="i in 12"
          :key="i"
          class="col-span-6 sm:col-span-4 xl:col-span-3 p-2"
        >
          <BookCard :isLoading="false" :book />
        </div>
      </div>
    </template>
  </DataView>
</template>
