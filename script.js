const eventDate = new Date('2025-07-26T17:00:00+06:00');
const cdEl = document.getElementById('countdown');

function updateCountdown() {
  const now = new Date();
  const diff = eventDate - now;
  if (diff <= 0) {
    cdEl.textContent = 'Мереке басталды!';
    clearInterval(timer);
    return;
  }
  const d = Math.floor(diff / (1000*60*60*24));
  const h = Math.floor(diff / (1000*60*60) % 24);
  const m = Math.floor(diff / (1000*60) % 60);
  const s = Math.floor(diff / 1000 % 60);
  cdEl.textContent = `${d} күн ${h} сағ ${m} мин ${s} сек`;
}

const timer = setInterval(updateCountdown, 1000);
updateCountdown();

document.getElementById('rsvpForm').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('rsvpForm').style.display = 'none';
  document.getElementById('thankyou').style.display = 'block';
});
