// Animasi sederhana interaksi tombol "Pilih Paket"
document.querySelectorAll('.cta-btn').forEach(button => {
    button.addEventListener('click', function() {
        const paketNama = this.parentElement.querySelector('h3').innerText;
        alert(`Terima kasih telah memilih paket ${paketNama}! Logika integrasi pembayaran atau registrasi bisa kamu tempatkan di sini.`);
    });
});

// Efek transparansi Navbar saat di-scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
    } else {
        header.style.boxShadow = '0 1px 3px rgba(0,0,0,0.05)';
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    }
});