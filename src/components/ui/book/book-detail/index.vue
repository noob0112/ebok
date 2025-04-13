<script setup lang="ts">
import { ref } from 'vue';
import { Rating, Divider, Button, Chip, Tab, Tabs, TabPanel, TabList } from '#/adapters/primevue/components';
import CommentCard from '#/components/ui/book/comment-card/index.vue';
import ReviewCard from '#/components/ui/book/review-card/index.vue';
import { useBookStore } from '#/stores/book';
import { storeToRefs } from 'pinia';

// get bookId from route params
const bookId = 1;

const bookStore = useBookStore();
const { fetchBookDetail } = bookStore;
const { book, bookReviews } = storeToRefs(bookStore);

fetchBookDetail(bookId);
const bookAuthorNames = book.value?.authors?.map((author) => author.name).join(', ');

const tabs = ref([
  { title: 'Bình luận', count: 9, value: 'comment' },
  { title: 'Đánh giá & nhận xét', count: book.value?.rateCount, value: 'rate' },
]);
</script>

<template>
  <template v-if="book">
    <div class="flex gap-x-8">
      <div class="flex-1 sticky top-0 h-[100vh]">
        <img class="book-cover sticky top-0" :src="book.coverImage" alt="" />
      </div>
      <div class="flex-2 flex flex-col gap-y-4">
        <h1 class="text-4xl">{{ book.title }}</h1>
        <div class="feedback-overview">
          <Rating v-model="book.rating" readonly />
          <div class="rate-count">{{ book.rateCount }} đánh giá</div>
        </div>
        <div class="ranking">
          <Chip>
            <div class="rank-number before:content-['#']">38</div>
            trong Top xu hướng Sách điện tử icon-right-pink
          </Chip>
        </div>
        <div class="flex flex-col gap-y-2">
          <p><strong>Tác giả:</strong> {{ bookAuthorNames }}</p>
          <p><strong>Thể loại:</strong> Dolly Alderton</p>
          <p><strong>Nhà xuất bản:</strong> NXB Thanh Niên</p>
        </div>
        <div class="flex gap-x-2">
          <Button>Đọc sách</Button>
          <Button class="hidden">Nghe sách</Button>
        </div>

        <Divider />

        <p><strong>Giới thiệu:</strong> {{ book.description }}</p>

        <h2 class="text-2xl">Độc giả nói gì về {{ book.title }}</h2>
        <Tabs value="0">
          <TabList>
            <Tab v-for="tab in tabs" :key="tab.title" :value="tab.value">{{ tab.title }}</Tab>
          </TabList>
          <TabPanels>
            <TabPanel value="comment" as="ul" class="flex flex-col gap-y-4 m-0">
              <li v-for="comment in book.comments" :key="comment.id">
                <CommentCard :comment="comment" />
              </li>
            </TabPanel>
            <TabPanel value="rate" as="ul" class="flex flex-col gap-y-4 m-0">
              <li v-for="bookReview in bookReviews" :key="bookReview.id">
                <ReviewCard :bookReview="bookReview" />
              </li>
            </TabPanel>
          </TabPanels>
        </Tabs>
        <Divider />
      </div>
      <div class="flex-1 sticky top-0 h-[100vh]">
        <div class="data">test</div>
      </div>
    </div>
  </template>
</template>

<style scoped>
.book-cover {
  width: 100%;
}

.feedback-overview {
  display: flex;
  align-items: center;
  column-gap: 1rem;
}
</style>
