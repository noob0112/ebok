import { ref } from 'vue';
import { defineStore } from 'pinia';

interface Book {
  id: number | string;
  slug: string;
  title: string;
  coverImage?: string;
  description: string;
  authors?: Author[];
  publisher?: string;
  categories: string[];
  rating: number;
  rateCount: number;
  bookReviews: BookReview[];
  commentCount: number;
  comments: Comment[];
  publishedAt: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface BookReview {
  id: number | string;
  userId: number | string;
  bookId: number | string;
  rating: number;
  comment?: string;
  user?: User;
  createdAt: Date;
}

export interface Comment {
  id: number | string;
  userId: number | string;
  bookId: number | string;
  user?: User;
  content: string;
  createdAt: Date;
}

interface User {
  id: number | string;
  name: string;
  email: string;
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
}

interface Author {
  id: number | string;
  name: string;
  bio?: string;
  books?: Book[];
}

export const useBookStore = defineStore('book', () => {
  const book = ref<Book>();
  const bookReviews = ref<BookReview[]>([]);
  const bookComments = ref<Comment[]>([]);

  async function fetchBookDetail(bookId: number | string) {
    const bookData = {
      id: 1,
      slug: 'book-slug',
      title: 'Đừng tủi thân - Bạn đẹp hơn những gì bạn nghĩ',
      coverImage: 'https://307a0e78.vws.vegacdn.vn/view/v2/image/img.book/0/0/1/45056.jpg',
      description: `“Tâm sự về tình yêu” là một cuốn sách phi hư cấu xuất sắc được dịch từ cuốn sách “Dear Dolly: On Love, Life
          and Friendship”, tập hợp những chuyên mục tư vấn cuộc sống nổi tiếng của Dolly Alderton trên tờ The Sunday
          Times. Với giọng văn bình tĩnh, tốt bụng và tôn trọng, Dolly đã khéo léo đưa ra những lời khuyên chân thành và
          thiết thực cho độc giả về nhiều khía cạnh của cuộc sống hiện đại, từ tình yêu, tình bạn, gia đình cho đến các
          mối quan hệ xã hội. Cuốn sách này dành cho: Những người tìm kiếm lời khuyên về các mối quan hệ và cuộc sống:
          Cuốn sách bao gồm một loạt các chủ đề liên quan đến tình yêu, tình bạn, gia đình, hẹn hò và khám phá bản thân.
          Nếu bạn đang tìm kiếm sự hướng dẫn hoặc chỉ đơn giản là thích đọc những câu chuyện liên quan đến các chủ đề
          này, cuốn sách này có thể là một lựa chọn tuyệt vời. Độc giả đánh giá cao các bài luận cá nhân và giai thoại
          liên quan: Dolly chia sẻ những kinh nghiệm và điểm yếu của chính mình, khiến lời khuyên của cô ấy trở nên chân
          thực và dễ hiểu hơn. Nếu bạn thích phong cách viết này, bạn có thể sẽ thấy cuốn sách hấp dẫn. Nếu bạn đang tìm
          kiếm một người bạn đồng hành tâm lý, một người lắng nghe và thấu hiểu, thì “Tâm sự về tình yêu” chính là lựa
          chọn hoàn hảo dành cho bạn.`,
      rating: 4.5,
      rateCount: 2,
      bookReviews: [
        {
          id: 1,
          userId: 1,
          bookId: 1,
          rating: 5,
          user: {
            id: 1,
            name: 'Vu Van C',
            email: '',
            avatar: '/images/avatar.png',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          comment: 'Great book!',
          createdAt: new Date('2025-04-18'),
        },
        {
          id: 2,
          userId: 2,
          bookId: 1,
          rating: 4,
          user: {
            id: 2,
            name: 'Ngo Thi D',
            email: '',
            avatar: '/images/avatar.png',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          comment: 'Good read.',
          createdAt: new Date('2025-04-17'),
        },
      ],
      commentCount: 2,
      comments: [
        {
          id: 1,
          userId: 1,
          bookId: 1,
          user: {
            id: 1,
            name: 'Vu Van C',
            email: '',
            avatar: '/images/avatar.png',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          content: 'I love this book!',
          createdAt: new Date('2025-04-20'),
        },
        {
          id: 2,
          userId: 2,
          bookId: 1,
          user: {
            id: 2,
            name: 'Ngo Thi D',
            email: '',
            avatar: '/images/avatar.png',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          content: 'Interesting perspective.',
          createdAt: new Date('2025-04-19'),
        },
      ],
      authors: [
        {
          id: 1,
          name: 'Nguyen Van A',
          bio: 'Author Bio',
          books: [],
        },
        {
          id: 2,
          name: 'Bui Thi B',
          bio: 'Another Author Bio',
          books: [],
        },
      ],
      publisher: 'Publisher Name',
      categories: ['Category 1', 'Category 2'],
      publishedAt: new Date('2023-01-01'),
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    book.value = bookData;
    bookReviews.value = bookData.bookReviews || [];

    return bookData;
  }

  return { book, bookReviews, fetchBookDetail };
});
