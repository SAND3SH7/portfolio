
        // Smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({behavior: 'smooth'});
            });
        });

        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 100) navbar.classList.add('scrolled');
            else navbar.classList.remove('scrolled');
        });

        // Skill bar animation on scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.querySelectorAll('.skill-progress').forEach(bar => {
                        bar.style.width = bar.style.width;
                    });
                }
            });
        }, { threshold: 0.5 });
        observer.observe(document.querySelector('#skills'));

