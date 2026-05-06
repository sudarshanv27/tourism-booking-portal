// ========================================
// API HELPER FUNCTIONS
// ========================================

const API_BASE_URL = 'http://localhost:5000/api';

// User Registration
async function registerUser(userData) {
    try {
        const response = await fetch(`${API_BASE_URL}/users/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        });
        return await response.json();
    } catch (error) {
        console.error('Registration error:', error);
        return { success: false, message: 'Network error. Please check if backend server is running.' };
    }
}

// User Login
async function loginUser(email, password) {
    try {
        const response = await fetch(`${API_BASE_URL}/users/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });
        return await response.json();
    } catch (error) {
        console.error('Login error:', error);
        return { success: false, message: 'Network error' };
    }
}

// Get All Users (Admin)
async function getAllUsers(token) {
    try {
        const response = await fetch(`${API_BASE_URL}/users`, {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        return await response.json();
    } catch (error) {
        console.error('Fetch users error:', error);
        return { success: false, users: [] };
    }
}

// Local Storage Helpers
function saveToLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

function getFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key) || '[]');
}

// Destination Management
function saveDestinations(destinations) {
    localStorage.setItem('customDestinations', JSON.stringify(destinations));
}

function getDestinations() {
    return JSON.parse(localStorage.getItem('customDestinations') || '[]');
}

// Booking Management
function saveBooking(booking) {
    const bookings = getFromLocalStorage('admin_bookings');
    const newId = bookings.length > 0 ? Math.max(...bookings.map(b => b.id)) + 1 : 1;
    booking.id = newId;
    booking.bookingDate = new Date().toISOString();
    booking.status = 'pending';
    bookings.push(booking);
    saveToLocalStorage('admin_bookings', bookings);
    return booking;
}

// Contact Management
function saveContact(contact) {
    const contacts = getFromLocalStorage('admin_contacts');
    const newId = contacts.length > 0 ? Math.max(...contacts.map(c => c.id)) + 1 : 1;
    contact.id = newId;
    contact.status = 'unread';
    contact.date = new Date().toISOString();
    contacts.push(contact);
    saveToLocalStorage('admin_contacts', contacts);
    return contact;
}

// Registration Management
function saveRegistration(registration) {
    const registrations = getFromLocalStorage('user_registrations');
    const newId = registrations.length > 0 ? Math.max(...registrations.map(r => r.id)) + 1 : 1;
    registration.id = newId;
    registration.registeredDate = new Date().toISOString();
    registrations.push(registration);
    saveToLocalStorage('user_registrations', registrations);
    return registration;
}

// Helper to format currency
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        minimumFractionDigits: 0
    }).format(amount);
}

// Helper to format date
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-IN', options);
}