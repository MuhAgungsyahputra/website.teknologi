// Highlight list items
function toggleHighlight() {
  document.querySelectorAll('#listJenis li').forEach(li => {
    li.classList.toggle('highlight');
  });
}

// Form submission with validation & DOM update
document.getElementById('form').addEventListener('submit', function(e){
  e.preventDefault();
  const nama = document.getElementById('nama').value.trim();
  const email = document.getElementById('email').value.trim();
  const pesan = document.getElementById('pesan').value.trim();
  if (!nama || !email || !pesan) {
    alert('Semua field wajib diisi!');
    return;
  }
  document.getElementById('feedback').textContent =
    `Terima kasih ${nama}, pesan Anda sudah kami terima.`;
  this.reset();
});
