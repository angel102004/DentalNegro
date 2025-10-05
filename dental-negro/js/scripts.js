
        AOS.init({
            duration: 1000,
            once: true
        });

        // Smooth Scroll
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                const menuToggle = document.getElementById('menu');
                menuToggle.classList.remove('active');

                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            });
        });

        // Mobile Menu Toggle
        document.getElementById('menuToggle').addEventListener('click', function() {
            const menu = document.getElementById('menu');
            menu.classList.toggle('active');

            const icon = this.querySelector('i');
            if (menu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Header Scroll Effect
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.style.padding = '0.5rem 5%';
                header.style.boxShadow = '0 5px 30px rgba(255, 215, 0, 0.2)';
            } else {
                header.style.padding = '1rem 5%';
                header.style.boxShadow = '0 2px 20px rgba(255, 215, 0, 0.1)';
            }
        });

        // Contact Form Handler
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const servicio = document.getElementById('servicio').value;
    const mensaje = document.getElementById('mensaje').value;

    // Crear mensaje para WhatsApp
    const whatsappMessage = 
  '🔥 *NUEVA CITA - DENTAL NEGRO* 🔥\n\n' +
  '👤 *Cliente:* ' + nombre + '\n' +
  '🦷 *Servicio:* ' + servicio + '\n' +
  '💬 *Mensaje:* ' + mensaje;
    const whatsappNumber = '522431003410'; // +52 243 100 3410 → sin espacios ni "1" extra
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    // Abrir WhatsApp en una nueva pestaña
    window.open(whatsappURL, '_blank');

    // Reset form
    this.reset();

    // Opcional: mensaje de confirmación
    alert('¡Gracias por contactarnos! Se abrirá WhatsApp para enviar tu mensaje.');
});