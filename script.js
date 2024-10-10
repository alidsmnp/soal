document.getElementById('submit-btn').addEventListener('click', function() {
    const answers = {
        q1: 'c',
        q2: 'a',
        q3: 'a',
        q4: 'a'
    };

    let score = 0;
    const form = document.forms['quiz-form'];

    // Mengecek jawaban
    for (let key in answers) {
        const userAnswer = form[key].value;
        if (userAnswer === answers[key]) {
            score++;
        }
    }

    // Mengambil tautan
    const userLink = document.getElementById('link').value;

    // Menampilkan hasil
    document.getElementById('result').innerHTML = `Skor Anda: ${score}/4. Tautan yang Anda buat: <a href="${userLink}" target="_blank">${userLink}</a>`;
    
    // Menampilkan tombol untuk lanjut ke halaman berikutnya
    document.getElementById('next-btn').style.display = 'block';
});

// Tambahkan event listener untuk tombol lanjut
document.getElementById('next-btn').addEventListener('click', function() {
    // Ganti URL di bawah ini dengan halaman berikutnya
    window.location.href = 'halaman-berikutnya.html';
});