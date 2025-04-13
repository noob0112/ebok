import { ref } from 'vue';
import { defineStore } from 'pinia';

interface Book {
  id: number | string;
  slug: string;
  title: string;
  description: string;
  authors: string[];
  publisher?: string;
  categories: string[];
  publishedAt: Date;
  createdAt: Date;
  updatedAt: Date;
}

export const useBookStore = defineStore('book', () => {
  const book = ref(0);

  function fetchBookDetail() {}

  return { book };
});
