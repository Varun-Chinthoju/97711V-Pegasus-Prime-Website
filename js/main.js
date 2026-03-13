// Pegasus Prime - High-Tech Interactions

document.addEventListener('DOMContentLoaded', () => {
    // 1. Navigation Active State Handling
    const currentLocation = location.href;
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        if(link.href === currentLocation) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // 2. Spotlight Hover Effect for Cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    // 3. Scroll Animations (Fade Up)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));

    // 4. Dynamic Gallery System (Outreach Page)
    const galleryData = {
        "donations": [],
        "pid-project": [],
        "workshops": []
    };

    const galleryContainer = document.getElementById('outreach-gallery');

    if (galleryContainer) {
        let galleryHTML = '';
        let hasPhotos = false;

        Object.keys(galleryData).forEach(category => {
            if (galleryData[category].length > 0) {
                hasPhotos = true;
                galleryData[category].forEach(imageName => {
                    const imagePath = `assets/gallery/${category}/${imageName}`;
                    galleryHTML += `
                        <div class="card animate-on-scroll" style="padding: 0; display: flex; flex-direction: column;">
                            <img src="${imagePath}" alt="${category} photo" style="width: 100%; height: 200px; object-fit: cover;" onerror="this.src='https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600&h=400'">
                            <div style="padding: 1.5rem;">
                                <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent-color); text-transform: uppercase; margin-bottom: 0.5rem;">// ${category}</div>
                            </div>
                        </div>
                    `;
                });
            }
        });

        // Fallback to high-quality placeholders if no photos defined yet
        if (!hasPhotos) {
            const placeholders = [
                { title: "STEM Mentorship", url: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=600&h=400" },
                { title: "Hardware Donation", url: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=600&h=400" },
                { title: "Control Workshop", url: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=600&h=400" }
            ];
            
            placeholders.forEach((item, index) => {
                galleryHTML += `
                    <div class="card animate-on-scroll" style="padding: 0; display: flex; flex-direction: column; transition-delay: ${index * 100}ms;">
                        <img src="${item.url}" alt="Placeholder" style="width: 100%; height: 200px; object-fit: cover; opacity: 0.8;">
                        <div style="padding: 1.5rem;">
                            <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-secondary); text-transform: uppercase;">${item.title}</div>
                        </div>
                    </div>
                `;
            });
        }

        galleryContainer.innerHTML = galleryHTML;
        
        // Observe newly added gallery items
        const newAnimatedElements = galleryContainer.querySelectorAll('.animate-on-scroll');
        newAnimatedElements.forEach(el => observer.observe(el));
    }
});
