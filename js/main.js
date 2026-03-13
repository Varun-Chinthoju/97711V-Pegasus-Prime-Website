// Pegasus Prime - Main Technical Logic

document.addEventListener('DOMContentLoaded', () => {
    console.log("97711V // Systems Online");

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

    // 2. Dynamic Gallery System
    // Since browser JS cannot scan folders directly, we maintain a list of folders and images.
    // When you add a new photo, simply add its filename to the correct category below.
    const galleryData = {
        "donations": [
            // Example: "parts-donation-1.jpg", "team-photo.png"
        ],
        "pid-project": [
            // Example: "pendulum-setup.jpg"
        ],
        "workshops": [
            // Example: "workshop-group.jpg"
        ]
    };

    const galleryContainer = document.getElementById('outreach-gallery');

    if (galleryContainer) {
        let galleryHTML = '';

        Object.keys(galleryData).forEach(category => {
            galleryData[category].forEach(imageName => {
                const imagePath = `assets/gallery/${category}/${imageName}`;
                galleryHTML += `
                    <div class="gallery-item">
                        <img src="${imagePath}" alt="${category} photo" onerror="this.src='https://via.placeholder.com/300x200?text=Pending+Upload'">
                        <div class="gallery-label">${category.toUpperCase()}</div>
                    </div>
                `;
            });
        });

        if (galleryHTML === '') {
            galleryContainer.innerHTML = '<p style="color: var(--text-muted); grid-column: 1/-1;">No photos found. Add images to assets/gallery/ categories and update galleryData in main.js.</p>';
        } else {
            galleryContainer.innerHTML = galleryHTML;
        }
    }
});
