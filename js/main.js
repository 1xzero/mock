// Dynamic Client-side Course Search & Scroll Animations
document.addEventListener('DOMContentLoaded', () => {
    // 1. Reveal Animations via Intersection Observer
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-up').forEach(el => revealObserver.observe(el));

    // 2. Real-time Course Filtering/Search Functionality
    const searchInput = document.getElementById('courseSearch');
    const coursesGrid = document.getElementById('coursesGrid');
    const courseCards = document.querySelectorAll('.course-card');
    const noResults = document.getElementById('noResults');

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            let matches = 0;

            courseCards.forEach(card => {
                const title = card.getAttribute('data-title') || '';
                if (title.includes(query)) {
                    card.style.display = 'flex';
                    matches++;
                } else {
                    card.style.display = 'none';
                }
            });

            // Toggle no results feedback
            if (matches === 0) {
                noResults.classList.remove('hidden');
            } else {
                noResults.classList.add('hidden');
            }
        });
    }

    // 3. Contact Form Submission Mockup
    const academyForm = document.getElementById('academyForm');
    const successMsg = document.getElementById('formSuccess');

    if (academyForm) {
        academyForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const submitBtn = academyForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerText;
            
            submitBtn.innerText = 'PROCESSING ADMISSION...';
            submitBtn.disabled = true;

            setTimeout(() => {
                submitBtn.innerText = originalText;
                submitBtn.disabled = false;
                academyForm.reset();
                successMsg.classList.remove('hidden');
                
                setTimeout(() => {
                    successMsg.classList.add('hidden');
                }, 4000);
            }, 1200);
        });
    }
});