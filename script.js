// Waitlist form handling
const form = document.getElementById('waitlist-form');
const success = document.getElementById('form-success');

form && form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const btn = form.querySelector('button[type="submit"]');
  const original = btn.textContent;
  btn.textContent = 'Submitting...';
  btn.disabled = true;

  const data = Object.fromEntries(new FormData(form));

  try {
    // TODO: wire up to a real backend / email service
    // For now, simulate success after a brief delay
    await new Promise(r => setTimeout(r, 1000));
    form.style.display = 'none';
    success.style.display = 'block';
    // Log for now so we can capture entries
    console.log('Waitlist signup:', data);
  } catch (err) {
    btn.textContent = original;
    btn.disabled = false;
    alert('Something went wrong. Please try again.');
  }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
