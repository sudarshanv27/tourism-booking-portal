// ========================================
// MAIN JAVASCRIPT FOR TOURISM PORTAL
// ========================================

// Mobile Menu Toggle
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

if (menuIcon) {
    menuIcon.addEventListener('click', () => {
        navbar.classList.toggle('active');
        menuIcon.classList.toggle('bx-x');
    });
}

// Close mobile menu when clicking a link
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
        menuIcon.classList.remove('bx-x');
    });
});

// Newsletter Subscription
const newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('newsletterEmail').value;
        if (email) {
            let subscribers = JSON.parse(localStorage.getItem('newsletter_subscribers') || '[]');
            if (!subscribers.includes(email)) {
                subscribers.push(email);
                localStorage.setItem('newsletter_subscribers', JSON.stringify(subscribers));
                alert('Thank you for subscribing! You will receive updates on your email.');
                newsletterForm.reset();
            } else {
                alert('You are already subscribed!');
            }
        }
    });
}

// Image Error Handling - Fallback to default image
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function() {
        this.src = 'images/bgimg.jpg';
    });
});

// Smooth Scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Animate on Scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.destination-card, .package-card, .feature, .testimonial-card, .service-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Set current year in footer
const yearSpan = document.getElementById('currentYear');
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

// Default Destinations Data
const defaultDestinations = [
    { id: 1, name: "Kashmir, India", tagline: "Paradise on Earth", price: 8999, image: "images/kashmir.jpg", fullDesc: "Known as 'Paradise on Earth,' Kashmir is famous for its stunning landscapes, beautiful gardens, and serene lakes. Experience the beauty of Dal Lake, Mughal Gardens, and Gulmarg's snow-capped mountains.", bestTime: "March - October", attractions: "Dal Lake, Gulmarg, Mughal Gardens, Pahalgam", activities: "Shikara ride, Gondola ride, Skiing, Shopping" },
    { id: 2, name: "Istanbul, Turkey", tagline: "Where East Meets West", price: 15999, image: "images/istanbul.jpg", fullDesc: "Where East meets West, Istanbul offers a unique blend of history and modernity. Visit the Hagia Sophia, Blue Mosque, and Grand Bazaar for an unforgettable experience spanning two continents.", bestTime: "April - June, September - October", attractions: "Hagia Sophia, Blue Mosque, Grand Bazaar, Bosphorus", activities: "Bosphorus Cruise, Shopping, Turkish Bath, Cuisine Tour" },
    { id: 3, name: "Paris, France", tagline: "The City of Love", price: 25999, image: "images/paris.jpg", fullDesc: "The City of Light offers iconic landmarks like the Eiffel Tower, Louvre Museum, and Notre-Dame Cathedral. Experience romance, art, and exquisite cuisine in one of the world's most beautiful cities.", bestTime: "April - June, October", attractions: "Eiffel Tower, Louvre Museum, Notre-Dame, Seine River", activities: "Romantic cruises, Art tours, Wine tasting, Shopping" },
    { id: 4, name: "Bali, Indonesia", tagline: "Island of Gods", price: 12999, image: "images/bali.jpg", fullDesc: "Famous for its volcanic mountains, iconic rice paddies, beaches and coral reefs. Experience Balinese culture, ancient temples, spiritual retreats, and warm hospitality.", bestTime: "April - October", attractions: "Ubud, Tanah Lot, Kuta Beach, Rice Terraces", activities: "Surfing, Yoga, Temple tours, Spa treatments" }
];

// Load destinations from localStorage or use defaults
function loadDestinations() {
    const saved = localStorage.getItem('customDestinations');
    if (saved) {
        return JSON.parse(saved);
    } else {
        localStorage.setItem('customDestinations', JSON.stringify(defaultDestinations));
        return defaultDestinations;
    }
}

// Save destinations to localStorage
function saveDestinations(destinations) {
    localStorage.setItem('customDestinations', JSON.stringify(destinations));
}

// Render destinations on homepage
function renderHomepageDestinations() {
    const grid = document.getElementById('destinationsGrid');
    if (!grid) return;
    
    const destinations = loadDestinations();
    grid.innerHTML = destinations.map(dest => `
        <div class="destination-card" onclick="viewDestinationDetail(${dest.id})">
            <img src="${dest.image}" alt="${dest.name}" onerror="this.src='images/bgimg.jpg'">
            <div class="card-content">
                <h3>${dest.name}</h3>
                <p>${dest.tagline}</p>
                <span class="price">From ₹${dest.price.toLocaleString()}</span>
            </div>
            <button class="remove-dest-btn" onclick="event.stopPropagation(); removeDestination(${dest.id})">×</button>
        </div>
    `).join('');
}

// View destination detail
function viewDestinationDetail(id) {
    const destinations = loadDestinations();
    const dest = destinations.find(d => d.id === id);
    if (dest) {
        localStorage.setItem('selectedDestination', JSON.stringify(dest));
        window.location.href = `destination-detail.html?id=${id}`;
    }
}

// Remove destination
function removeDestination(id) {
    const destinations = loadDestinations();
    const dest = destinations.find(d => d.id === id);
    if (confirm(`Are you sure you want to remove "${dest.name}" from destinations?`)) {
        const newDestinations = destinations.filter(d => d.id !== id);
        saveDestinations(newDestinations);
        renderHomepageDestinations();
    }
}

// Show add destination modal
function showAddDestinationModal() {
    const modal = document.getElementById('addDestinationModal');
    if (modal) modal.style.display = 'flex';
}

// Close modal
function closeDestinationModal() {
    const modal = document.getElementById('addDestinationModal');
    if (modal) modal.style.display = 'none';
    const form = document.getElementById('addDestinationForm');
    if (form) form.reset();
}

// Add new destination
function addNewDestination(destination) {
    const destinations = loadDestinations();
    const newId = destinations.length > 0 ? Math.max(...destinations.map(d => d.id)) + 1 : 5;
    destination.id = newId;
    destinations.push(destination);
    saveDestinations(destinations);
    renderHomepageDestinations();
    return destination;
}

// Handle add destination form submission
const addDestinationForm = document.getElementById('addDestinationForm');
if (addDestinationForm) {
    addDestinationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const newDestination = {
            name: document.getElementById('destName').value,
            tagline: document.getElementById('destTagline').value,
            price: parseInt(document.getElementById('destPrice').value),
            image: document.getElementById('destImage').value,
            fullDesc: document.getElementById('destFullDesc').value,
            bestTime: document.getElementById('destBestTime').value || "Year-round",
            attractions: document.getElementById('destAttractions').value || "Various attractions",
            activities: document.getElementById('destActivities').value || "Multiple activities"
        };
        
        addNewDestination(newDestination);
        closeDestinationModal();
        alert(`${newDestination.name} has been added successfully!`);
    });
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('addDestinationModal');
    if (event.target === modal) {
        closeDestinationModal();
    }
}

// Initialize homepage destinations
document.addEventListener('DOMContentLoaded', function() {
    renderHomepageDestinations();
});