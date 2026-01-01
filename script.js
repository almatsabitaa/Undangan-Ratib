function getGuestName() {
    const urlParams = new URLSearchParams(window.location.search);
    const guestName = urlParams.get('to');

    if (guestName) {
        // Mengubah tanda + atau %20 menjadi spasi agar rapi
        const formattedName = decodeURIComponent(guestName.replace(/\+/g, ' '));
        document.getElementById('nama-tamu').innerText = formattedName;
    } else {
        document.getElementById('nama-tamu').innerText = "Tamu Undangan";
    }
}

function bukaUndangan() {
    // 1. Ambil elemen musik dan putar
    const musik = document.getElementById('musik-undangan');
    musik.play();

    // 2. Tampilkan tombol kontrol musik (Mute/Unmute)
    document.getElementById('ctrl-musik').style.display = 'block';

    // 3. Efek Transisi Halaman (Hero menghilang, Konten muncul)
    const hero = document.querySelector('.hero');
    const kontenUtama = document.getElementById('konten-utama');

    // Buat hero jadi transparan
    hero.style.opacity = '0';
    hero.style.transition = '0.8s';

    // Tunggu animasi transparan selesai (0.8 detik), baru ganti konten
    setTimeout(() => {
        hero.style.display = 'none'; 
        kontenUtama.style.display = 'block'; 
        kontenUtama.classList.add('fade-in'); 
        window.scrollTo(0, 0); 
    }, 800);
}

function toggleMusik() {
    const musik = document.getElementById('musik-undangan');
    const btn = document.getElementById('ctrl-musik');
    
    if (musik.paused) {
        musik.play();
        btn.innerText = "🔊"; // Kamu bisa ganti teks atau icon
    } else {
        musik.pause();
        btn.innerText = "🔇";
    }
}

// Jalankan fungsi ambil nama saat halaman pertama kali dibuka
window.onload = getGuestName;