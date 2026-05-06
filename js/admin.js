// ========================================
// ADMIN PANEL JAVASCRIPT
// ========================================

// Load all data for admin panel
function loadAdminData() {
    loadBookings();
    loadContacts();
    loadRegistrations();
    updateDashboardStats();
}

// Load bookings
function loadBookings() {
    const bookings = JSON.parse(localStorage.getItem('admin_bookings') || '[]');
    const tbody = document.getElementById('bookings-table-body');
    
    if (tbody) {
        if (bookings.length === 0) {
            tbody.innerHTML = '<tr><td colspan="8" class="text-center">No bookings found</td></tr>';
        } else {
            tbody.innerHTML = bookings.map(booking => `
                <tr>
                    <td>#${booking.id}</td>
                    <td>${booking.customerName || 'N/A'}</td>
                    <td>${booking.destination || 'N/A'}</td>
                    <td>${booking.travelDate || 'N/A'}</td>
                    <td>${booking.travelers || 1}</td>
                    <td>₹${parseInt(booking.amount || 0).toLocaleString()}</td>
                    <td><span class="status-badge ${booking.status || 'pending'}">${booking.status || 'pending'}</span></td>
                    <td>
                        <button class="action-icon" onclick="viewBooking(${booking.id})"><i class='bx bx-show'></i></button>
                        <button class="action-icon" onclick="deleteBooking(${booking.id})"><i class='bx bx-trash'></i></button>
                    </td>
                </tr>
            `).join('');
        }
    }
}

// Load contacts
function loadContacts() {
    const contacts = JSON.parse(localStorage.getItem('admin_contacts') || '[]');
    const tbody = document.getElementById('contacts-table-body');
    
    if (tbody) {
        if (contacts.length === 0) {
            tbody.innerHTML = '<tr><td colspan="8" class="text-center">No messages found</td></tr>';
        } else {
            tbody.innerHTML = contacts.map(contact => `
                <tr>
                    <td>#${contact.id}</td>
                    <td>${contact.name || 'N/A'}</td>
                    <td>${contact.email || 'N/A'}</td>
                    <td>${contact.subject || 'N/A'}</td>
                    <td>${(contact.message || '').substring(0, 50)}...</td>
                    <td><span class="status-badge ${contact.status || 'unread'}">${contact.status || 'unread'}</span></td>
                    <td>${new Date(contact.date).toLocaleDateString()}</td>
                    <td>
                        <button class="action-icon" onclick="viewMessage(${contact.id})"><i class='bx bx-show'></i></button>
                        <button class="action-icon" onclick="deleteMessage(${contact.id})"><i class='bx bx-trash'></i></button>
                    </td>
                </tr>
            `).join('');
        }
    }
}

// Load registrations
function loadRegistrations() {
    const registrations = JSON.parse(localStorage.getItem('user_registrations') || '[]');
    const tbody = document.getElementById('registrations-table-body');
    
    if (tbody) {
        if (registrations.length === 0) {
            tbody.innerHTML = '<tr><td colspan="9" class="text-center">No registrations found</td></tr>';
        } else {
            tbody.innerHTML = registrations.map(reg => `
                <tr>
                    <td>#${reg.id}</td>
                    <td>${reg.firstName || ''} ${reg.lastName || ''}</td>
                    <td>${reg.email || 'N/A'}</td>
                    <td>${reg.phone || 'N/A'}</td>
                    <td>${reg.destinations ? reg.destinations.join(', ') : 'N/A'}</td>
                    <td>${reg.package || 'N/A'}</td>
                    <td>₹${parseInt(reg.packagePrice || 0).toLocaleString()}</td>
                    <td><span class="status-badge active">Active</span></td>
                    <td>
                        <button class="action-icon" onclick="viewRegistration(${reg.id})"><i class='bx bx-show'></i></button>
                        <button class="action-icon" onclick="deleteRegistration(${reg.id})"><i class='bx bx-trash'></i></button>
                    </td>
                </tr>
            `).join('');
        }
    }
}

// Update dashboard statistics
function updateDashboardStats() {
    const bookings = JSON.parse(localStorage.getItem('admin_bookings') || '[]');
    const contacts = JSON.parse(localStorage.getItem('admin_contacts') || '[]');
    const registrations = JSON.parse(localStorage.getItem('user_registrations') || '[]');
    
    const totalRevenue = bookings.reduce((sum, b) => sum + (parseInt(b.amount) || 0), 0);
    
    document.getElementById('total-bookings') && (document.getElementById('total-bookings').innerText = bookings.length);
    document.getElementById('total-contacts') && (document.getElementById('total-contacts').innerText = contacts.length);
    document.getElementById('total-registrations') && (document.getElementById('total-registrations').innerText = registrations.length);
    document.getElementById('total-revenue') && (document.getElementById('total-revenue').innerText = `₹${totalRevenue.toLocaleString()}`);
}

// Tab switching
if (document.querySelectorAll('.tab-button').length) {
    document.querySelectorAll('.tab-button').forEach(button => {
        button.addEventListener('click', () => {
            const tabName = button.getAttribute('data-tab');
            document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
            document.getElementById(`${tabName}-tab`).classList.add('active');
        });
    });
}

// View functions
function viewBooking(id) {
    const bookings = JSON.parse(localStorage.getItem('admin_bookings') || '[]');
    const booking = bookings.find(b => b.id === id);
    alert(`Booking Details:\nCustomer: ${booking.customerName}\nDestination: ${booking.destination}\nAmount: ₹${booking.amount}\nStatus: ${booking.status}`);
}

function deleteBooking(id) {
    if (confirm('Are you sure you want to delete this booking?')) {
        let bookings = JSON.parse(localStorage.getItem('admin_bookings') || '[]');
        bookings = bookings.filter(b => b.id !== id);
        localStorage.setItem('admin_bookings', JSON.stringify(bookings));
        loadBookings();
        updateDashboardStats();
        alert('Booking deleted successfully!');
    }
}

function viewMessage(id) {
    const contacts = JSON.parse(localStorage.getItem('admin_contacts') || '[]');
    const contact = contacts.find(c => c.id === id);
    alert(`Message from: ${contact.name}\nEmail: ${contact.email}\nSubject: ${contact.subject}\n\nMessage:\n${contact.message}`);
}

function deleteMessage(id) {
    if (confirm('Are you sure you want to delete this message?')) {
        let contacts = JSON.parse(localStorage.getItem('admin_contacts') || '[]');
        contacts = contacts.filter(c => c.id !== id);
        localStorage.setItem('admin_contacts', JSON.stringify(contacts));
        loadContacts();
        updateDashboardStats();
        alert('Message deleted successfully!');
    }
}

function viewRegistration(id) {
    const registrations = JSON.parse(localStorage.getItem('user_registrations') || '[]');
    const reg = registrations.find(r => r.id === id);
    alert(`User Details:\nName: ${reg.firstName} ${reg.lastName}\nEmail: ${reg.email}\nPhone: ${reg.phone}\nPackage: ${reg.package}`);
}

function deleteRegistration(id) {
    if (confirm('Are you sure you want to delete this registration?')) {
        let registrations = JSON.parse(localStorage.getItem('user_registrations') || '[]');
        registrations = registrations.filter(r => r.id !== id);
        localStorage.setItem('user_registrations', JSON.stringify(registrations));
        loadRegistrations();
        updateDashboardStats();
        alert('Registration deleted successfully!');
    }
}

// Refresh functions
function refreshBookings() { loadBookings(); }
function refreshContacts() { loadContacts(); }
function refreshRegistrations() { loadRegistrations(); }
function refreshAllData() { loadAdminData(); alert('All data refreshed!'); }

// Export functions
function exportBookings() {
    const bookings = JSON.parse(localStorage.getItem('admin_bookings') || '[]');
    const dataStr = JSON.stringify(bookings, null, 2);
    const blob = new Blob([dataStr], {type: 'application/json'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'bookings_export.json';
    a.click();
    URL.revokeObjectURL(url);
}

function markAllRead() {
    let contacts = JSON.parse(localStorage.getItem('admin_contacts') || '[]');
    contacts = contacts.map(c => ({ ...c, status: 'read' }));
    localStorage.setItem('admin_contacts', JSON.stringify(contacts));
    loadContacts();
    alert('All messages marked as read!');
}

// Initialize admin panel
if (document.body.classList.contains('admin-body')) {
    document.addEventListener('DOMContentLoaded', loadAdminData);
}