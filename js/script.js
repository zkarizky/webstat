document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor =>
      anchor.addEventListener('click', e => {
        e.preventDefault();
        const targetElement = document.querySelector(anchor.getAttribute('href'));
        targetElement && window.scrollTo({ top: targetElement.offsetTop - 70, behavior: 'smooth' });
      })
    );
  
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
      navbar.style.padding = window.scrollY > 50 ? '10px 0' : '15px 0';
      navbar.style.boxShadow = window.scrollY > 50 ? '0 2px 10px rgba(0, 0, 0, 0.1)' : '0 2px 10px rgba(0, 0, 0, 0.05)';
    });
  
    // Pre-order form submission
    const preOrderForm = document.getElementById('preOrderForm');
    preOrderForm?.addEventListener('submit', e => {
      e.preventDefault();
      const [name, email, phone, color] = ['name', 'email', 'phone', 'color'].map(id => document.getElementById(id)?.value);
      if (!name || !email || !phone || !color) return alert('Silakan isi semua field yang wajib diisi');
      alert('Terima kasih! Pre-order Anda telah berhasil dikirim.');
      preOrderForm.reset();
    });
  
    // Active nav links on scroll
    const navLinks = document.querySelectorAll('.nav-link');
    window.addEventListener('scroll', () => {
      let current = '';
      document.querySelectorAll('section').forEach(section => {
        if (window.pageYOffset >= section.offsetTop - 100 && window.pageYOffset < section.offsetTop + section.clientHeight) {
          current = section.id;
        }
      });
      navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${current}`));
    });
  
    // Animation on scroll
    window.addEventListener('scroll', () => {
      document.querySelectorAll('.feature-card, .specs-item, .color-option').forEach(element => {
        if (element.getBoundingClientRect().top < window.innerHeight - 100) {
          element.classList.add('visible');
        }
      });
    });
  });
  