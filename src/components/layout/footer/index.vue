<template>
  <footer class="bg-gray-900 text-white py-12" role="contentinfo">
    <div class="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10">
      <section aria-labelledby="footer-about">
        <h2 id="footer-about" class="text-xl font-semibold mb-4">📚 BookHaven</h2>
        <p class="text-gray-400 text-sm">
          BookHaven là nền tảng đọc sách trực tuyến hiện đại, giúp bạn tiếp cận hàng ngàn đầu sách chất lượng mọi lúc
          mọi nơi.
        </p>
      </section>

      <nav aria-labelledby="footer-nav">
        <h2 id="footer-nav" class="text-lg font-semibold mb-4">Liên kết nhanh</h2>
        <ul class="space-y-2 text-gray-400 text-sm">
          <li><a href="/" class="hover:text-white">Trang chủ</a></li>
          <li><a href="/the-loai" class="hover:text-white">Thể loại</a></li>
          <li><a href="/sach-moi" class="hover:text-white">Sách mới</a></li>
          <li><a href="/tai-khoan" class="hover:text-white">Tài khoản</a></li>
        </ul>
      </nav>

      <section aria-labelledby="footer-contact">
        <h2 id="footer-contact" class="text-lg font-semibold mb-4">Liên hệ</h2>
        <address class="not-italic text-gray-400 text-sm space-y-2">
          <p>Email: <a href="mailto:support@bookhaven.vn" class="hover:text-white">support@bookhaven.vn</a></p>
          <p>Hotline: <a href="tel:0123456789" class="hover:text-white">0123 456 789</a></p>
          <p>123 Đường Sách, Quận 1, TP. HCM</p>
        </address>
      </section>

      <section aria-labelledby="footer-social">
        <h2 id="footer-social" class="text-lg font-semibold mb-4">Kết nối với chúng tôi</h2>
        <div class="flex space-x-4 text-gray-400">
          <a href="#" aria-label="Facebook" class="hover:text-white"><i class="fab fa-facebook-f"></i></a>
          <a href="#" aria-label="Twitter" class="hover:text-white"><i class="fab fa-twitter"></i></a>
          <a href="#" aria-label="Instagram" class="hover:text-white"><i class="fab fa-instagram"></i></a>
          <a href="#" aria-label="YouTube" class="hover:text-white"><i class="fab fa-youtube"></i></a>
        </div>
      </section>
    </div>

    <hr class="border-gray-700 my-8" />

    <div class="text-center text-gray-500 text-sm">
      <small>&copy; 2025 BookHaven. Tất cả bản quyền được bảo lưu.</small>
      <div class="mt-2 space-x-4">
        <a href="/chinh-sach-bao-mat" class="hover:text-white">Chính sách bảo mật</a>
        <a href="/dieu-khoan" class="hover:text-white">Điều khoản sử dụng</a>
      </div>
    </div>
  </footer>
</template>
