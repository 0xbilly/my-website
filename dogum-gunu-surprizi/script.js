console.log("JavaScript çalışıyor");

// Kız arkadaşınızın ve sizin resimlerinizi seçin
const girlfriendImage = document.getElementById("girlfriend");
const meImage = document.getElementById("me");

// Başlangıç konumları
let girlfriendTop = 59; // Kız arkadaşınızın başlangıç dikey konumu (İtalya)
let girlfriendLeft = 51; // Kız arkadaşınızın başlangıç yatay konumu (İtalya)

// Sizin sabit konumunuz (Türkiye)
let meTop = 61; // Sizin yeni dikey konumunuz
let meLeft = 77; // Sizin yeni yatay konumunuz

// Hedef tarihler
const targetDate = new Date('December 2, 2025 00:00:00').getTime();
const startDate = new Date('February 14, 2025 00:00:00').getTime();
const totalDuration = targetDate - startDate;

let moveStartTime = null;
let moveInterval = null;

// Kız arkadaşınızın resmini hareket ettiren fonksiyon
function moveGirlfriend() {
    const now = new Date().getTime();
    
    // Eğer hareket başlamamışsa, başlangıç zamanını ayarla
    if (moveStartTime === null) {
        moveStartTime = now;
    }
    
    // Geçen süreyi hesapla
    const elapsedMoveTime = now - moveStartTime;
    
    // Kalan süreyi hesapla
    const timeLeft = targetDate - now;
    const elapsedTime = now - startDate;
    
    // Kız arkadaşınızın hareket süresini kalan gün sayısına göre ayarla
    const remainingDays = Math.ceil(timeLeft / (1000 * 60 * 60 * 24));
    const moveDuration = (remainingDays > 0) ? totalDuration : 1000; // Eğer kalan gün 0 veya negatifse 1 saniye içinde hareket etsin
    
    // Kız arkadaşınızın konumunu sizin yanınıza doğru güncelle
    if (elapsedMoveTime < moveDuration) {
        const progress = elapsedMoveTime / moveDuration;
        girlfriendTop = 59 + (meTop - 59) * progress;
        girlfriendLeft = 51 + (meLeft - 51) * progress;

        // Yeni konumu uygula
        girlfriendImage.style.top = `${girlfriendTop}%`;
        girlfriendImage.style.left = `${girlfriendLeft}%`;
        console.log(`Kız arkadaşınızın yeni konum: top: ${girlfriendTop}%, left: ${girlfriendLeft}%`);
    } else {
        // Hareket tamamlandığında
        girlfriendTop = meTop;
        girlfriendLeft = meLeft;
        girlfriendImage.style.top = `${girlfriendTop}%`;
        girlfriendImage.style.left = `${girlfriendLeft}%`;
        console.log("Hareket tamamlandı, kız arkadaşınız yanınızda.");
        // Hareketi durdurmak için interval'i temizle
        clearInterval(moveInterval);
    }
}

// Sizin resminizin konumunu güncelleyen fonksiyon
function updateMePosition() {
    // Sizin resminizin konumunu manuel olarak ayarlıyoruz
    meImage.style.top = `${meTop}%`;
    meImage.style.left = `${meLeft}%`;
    console.log(`Yeni konum: top: ${meTop}%, left: ${meLeft}%`);
}

// Geri sayımı güncelleyen fonksiyon
function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;
    const elapsedTime = now - startDate;
    // İlerleme çubuğunu kalan süreye göre dinamik olarak güncelle
    const progress = (elapsedTime / totalDuration) * 100;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    
    document.getElementById("countdown").innerHTML = `${days} gün ${hours} saat ${minutes} dakika ${seconds} saniye`;
    document.getElementById("progress-bar").style.width = `${progress}%`;
    
    if (timeLeft < 0) {
        document.getElementById("countdown").innerHTML = "Buluşma zamanı geldi!";
        document.getElementById("progress-bar").style.width = "100%";
    }

    // Kız arkadaşınızın hareketini başlat
    if (moveStartTime === null) {
        moveGirlfriend();
        // Hareket süresine göre güncelleme aralığını ayarla
        moveInterval = setInterval(moveGirlfriend, 16); // Yaklaşık 60 FPS
    }
    
    updateMePosition();
}

// Işıldayan yıldızlar için fonksiyon
function createTwinklingStars() {
    const starsContainer = document.getElementById('stars-container');
    const numStars = 300;

    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const size = Math.random() * 3 + 1;
        const delay = Math.random() * 5;

        star.style.left = `${x}%`;
        star.style.top = `${y}%`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.animationDelay = `${delay}s`;

        starsContainer.appendChild(star);
    }
}

// Müziği başlatma fonksiyonu
function playMusic() {
    const audio = document.getElementById('background-music');
    audio.play();
    
    // Müziği başlattıktan sonra ikonu gizle
    document.getElementById('playMusicIcon').style.display = 'none';
}

// Sayfa yüklendiğinde
window.onload = function() {
    createTwinklingStars();
    updateCountdown();
    setInterval(updateCountdown, 1000);
};const map = document.getElementById("map");

function updateDayNight() {
    const now = new Date();
    const hours = now.getHours();

    if (hours >= 18 || hours <= 6) {
        map.style.filter = "brightness(50%)"; // Gece efekti
    } else {
        map.style.filter = "brightness(100%)"; // Gündüz efekti
    }
}

setInterval(updateDayNight, 1000);
updateDayNight();// ... Diğer JavaScript kodları ...

// Geri sayımı güncelleyen fonksiyon
function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;
    const elapsedTime = now - startDate;
    const progress = (elapsedTime / totalDuration) * 100;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    
    document.getElementById("countdown").innerHTML = `${days} gün ${hours} saat ${minutes} dakika ${seconds} saniye`;
    document.getElementById("progress-bar").style.width = `${progress}%`;
    document.getElementById("progress-percentage").innerHTML = `${Math.round(progress)}%`; // Yüzdeyi göster
    
    if (timeLeft < 0) {
        document.getElementById("countdown").innerHTML = "Buluşma zamanı geldi!";
        document.getElementById("progress-bar").style.width = "100%";
        document.getElementById("progress-percentage").innerHTML = "100%"; // Son durumda yüzdeyi 100 olarak göster
    }

    // Kız arkadaşınızın hareketini başlat
    if (moveStartTime === null) {
        moveGirlfriend();
        // Hareket süresine göre güncelleme aralığını ayarla
        moveInterval = setInterval(moveGirlfriend, 16); // Yaklaşık 60 FPS
    }
    
    updateMePosition();
}

// ... Diğer JavaScript kodları ...