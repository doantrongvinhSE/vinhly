// --- CHỨC NĂNG ĐẾM NGƯỢC (COUNTDOWN) ---
function startCountdown() {
    // Đặt ngày và giờ đám cưới ở đây (Năm, Tháng-1, Ngày, Giờ, Phút, Giây)
    // Ví dụ: 09 Tháng 3, 2025 lúc 17:30:00 
    const weddingDate = new Date("Mar 09, 2025 17:30:00").getTime();

    const x = setInterval(function() {
        const now = new Date().getTime();
        const distance = weddingDate - now;

        // Tính toán thời gian cho Ngày, Giờ, Phút, Giây
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Hiển thị kết quả (đảm bảo hiển thị 2 chữ số)
        const formatTime = (time) => time.toString().padStart(2, '0');

        const countdownElement = document.getElementById("countdown");
        if (countdownElement) {
            countdownElement.querySelector(".days").innerHTML = formatTime(days);
            countdownElement.querySelector(".hours").innerHTML = formatTime(hours);
            countdownElement.querySelector(".minutes").innerHTML = formatTime(minutes);
            countdownElement.querySelector(".seconds").innerHTML = formatTime(seconds);
        }

        // Khi đếm ngược kết thúc
        if (distance < 0) {
            clearInterval(x);
            if (countdownElement) {
                countdownElement.innerHTML = "<p>LỄ CƯỚI ĐÃ DIỄN RA!</p>";
                countdownElement.style.fontSize = "1.5em";
            }
        }
    }, 1000);
}


// --- KHỞI CHẠY KHI TẢI TRANG ---
document.addEventListener('DOMContentLoaded', (event) => {
    startCountdown();
    
    // Xử lý RSVP Form (Hiển thị thông báo mẫu)
    const rsvpForm = document.getElementById('rsvp-form');
    rsvpForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Cảm ơn bạn đã xác nhận! Dữ liệu đã được ghi nhận. (Cần lập trình máy chủ để lưu dữ liệu thực tế.)');
        rsvpForm.reset();
    });
});