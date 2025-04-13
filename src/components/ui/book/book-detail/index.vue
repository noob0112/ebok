<script setup lang="ts">
import { reactive } from 'vue'
import { Rating, Divider, Button, Chip } from '#/adapters/primevue/components'

const title = 'Đừng tủi thân - Bạn đẹp hơn những gì bạn nghĩ'

const book = reactive({
  rating: 4,
})
</script>

<template>
  <div class="flex gap-x-8">
    <div class="left">
      <img
        class="book-cover sticky top-0"
        src="https://307a0e78.vws.vegacdn.vn/view/v2/image/img.book/0/0/1/45056.jpg"
        alt=""
      />
    </div>
    <div class="middle">
      <h1 class="text-4xl">{{ title }}</h1>
      <div class="feedback-overview">
        <Rating v-model="book.rating" readonly />
        <div class="comment-number">1 comment</div>
      </div>
      <div class="ranking">
        <Chip>
          <div class="rank-number before:content-['#']">38</div>
          trong Top xu hướng Sách điện tử icon-right-pink
        </Chip>
      </div>
      <div>
        <p>Tác giả: Dolly Alderton</p>
        <p>Thể loại: Dolly Alderton</p>
        <p>Nhà xuất bản: NXB Thanh Niên</p>
      </div>
      <Divider />

      <div class="flex">
        <Button>Đọc sách</Button>
        <Button class="hidden">Nghe sách</Button>
      </div>

      <p>Giới thiệu:</p>
      <p>
        “Tâm sự về tình yêu” là một cuốn sách phi hư cấu xuất sắc được dịch từ
        cuốn sách “Dear Dolly: On Love, Life and Friendship”, tập hợp những
        chuyên mục tư vấn cuộc sống nổi tiếng của Dolly Alderton trên tờ The
        Sunday Times. Với giọng văn bình tĩnh, tốt bụng và tôn trọng, Dolly đã
        khéo léo đưa ra những lời khuyên chân thành và thiết thực cho độc giả về
        nhiều khía cạnh của cuộc sống hiện đại, từ tình yêu, tình bạn, gia đình
        cho đến các mối quan hệ xã hội. Cuốn sách này dành cho: Những người tìm
        kiếm lời khuyên về các mối quan hệ và cuộc sống: Cuốn sách bao gồm một
        loạt các chủ đề liên quan đến tình yêu, tình bạn, gia đình, hẹn hò và
        khám phá bản thân. Nếu bạn đang tìm kiếm sự hướng dẫn hoặc chỉ đơn giản
        là thích đọc những câu chuyện liên quan đến các chủ đề này, cuốn sách
        này có thể là một lựa chọn tuyệt vời. Độc giả đánh giá cao các bài luận
        cá nhân và giai thoại liên quan: Dolly chia sẻ những kinh nghiệm và điểm
        yếu của chính mình, khiến lời khuyên của cô ấy trở nên chân thực và dễ
        hiểu hơn. Nếu bạn thích phong cách viết này, bạn có thể sẽ thấy cuốn
        sách hấp dẫn. Nếu bạn đang tìm kiếm một người bạn đồng hành tâm lý, một
        người lắng nghe và thấu hiểu, thì “Tâm sự về tình yêu” chính là lựa chọn
        hoàn hảo dành cho bạn.
      </p>
    </div>
    <div class="right">
      <div class="data">test</div>
    </div>
  </div>
</template>

<style scoped>
.left,
.right {
  flex: 1;
  position: sticky;
  top: 0;
  height: 100vh;
}

.book-cover {
  width: 100%;
}

.middle {
  flex: 2;
}

.feedback-overview {
  display: flex;
  align-items: center;
  column-gap: 1rem;
}
</style>
