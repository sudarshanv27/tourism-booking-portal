================================================================================
                    TOURISM BOOKING PORTAL - PROJECT README
================================================================================

PROJECT NAME: Tourism Booking Portal
DEVELOPER: Sudarshan
VERSION: 1.0
DATE: 2024

================================================================================
                        PROJECT OVERVIEW
================================================================================

This is a complete Travel Booking Website that allows users to:
- Browse popular travel destinations
- View detailed information about each destination
- Select multiple destinations for booking
- Choose from 4 different travel packages (Bronze, Silver, Gold, Platinum)
- Register and book their travel
- Admin can manage all customer data

================================================================================
                        FOLDER STRUCTURE
================================================================================

tourism-booking-portal/
│
├── index.html              # Homepage
├── locations.html          # All destinations page
├── packages.html           # Travel packages page
├── about.html              # About Us page
├── contact.html            # Contact Us page
├── register.html           # Booking registration page
├── admin.html              # Admin dashboard
├── destination-detail.html # Dynamic destination details page
│
├── css/
│   └── style.css           # Master stylesheet
│
├── js/
│   ├── main.js             # Main JavaScript functions
│   ├── admin.js            # Admin panel functions
│   └── api.js              # API helper functions
│
├── images/                 # All project images
│   ├── logo.png
│   ├── bgimg.jpg
│   ├── kashmir.jpg
│   ├── istanbul.jpg
│   ├── paris.jpg
│   ├── bali.jpg
│   ├── dubai.jpg
│   ├── switzerland.jpg
│   ├── thailand.jpg
│   ├── maldives.jpg
│   ├── package-bronze.jpg
│   ├── package-silver.jpg
│   ├── package-gold.jpg
│   ├── package-platinum.jpg
│   ├── about-img.jpg
│   ├── team-founder.jpg
│   ├── team-expert.jpg
│   ├── traveler-1.jpg
│   ├── traveler-2.jpg
│   └── traveler-3.jpg
│
└── README.txt              # This file

================================================================================
                        HOW TO SETUP
================================================================================

STEP 1: Extract the project folder to your desired location

STEP 2: Open the folder in VS Code or any code editor

STEP 3: Install Live Server extension (if using VS Code)

STEP 4: Right-click on index.html and select "Open with Live Server"

STEP 5: The website will open at http://127.0.0.1:5500/

================================================================================
                        PAGE NAVIGATION
================================================================================

| Page | File | Description |
|------|------|-------------|
| Home | index.html | Main landing page with hero section, services, destinations |
| Locations | locations.html | All destinations with filters |
| Packages | packages.html | Travel packages with details |
| About Us | about.html | Company information and team |
| Contact Us | contact.html | Contact form and support |
| Register | register.html | Booking registration form |
| Admin | admin.html | Customer data management |
| Destination Detail | destination-detail.html | Individual destination details |

================================================================================
                        FEATURES
================================================================================

1. USER FEATURES:
   - Browse 8+ popular destinations
   - View detailed destination information
   - Select multiple destinations for booking
   - Choose from 4 travel packages
   - Fill registration form with personal details
   - Subscribe to newsletter
   - Contact form for inquiries

2. ADMIN FEATURES:
   - View all customer registrations
   - View all booking records
   - View contact messages
   - View newsletter subscribers
   - Export data to CSV/JSON
   - Delete records
   - Dashboard with statistics

3. TECHNICAL FEATURES:
   - Responsive design (works on mobile, tablet, desktop)
   - Local storage for data persistence
   - No backend required (frontend only)
   - Dynamic destination pages
   - Filterable destinations

================================================================================
                        SERVICES OFFERED
================================================================================

1. FLIGHT SERVICES
   - Arrival & Departure management
   - Best price guarantee
   - 24/7 flight support

2. FOOD SERVICES
   - Multi-cuisine catering
   - Dietary customization
   - 24/7 meal support

3. TRAVEL SERVICES
   - Pick-up & Drop facilities
   - Luxury vehicles
   - Professional drivers

4. ACCOMMODATION
   - Luxury stays
   - Best room deals
   - Early check-in

================================================================================
                        DESTINATIONS
================================================================================

| # | Destination | Price (₹) | Best Time |
|---|-------------|-----------|-----------|
| 1 | Kashmir, India | 8,999 | March - October |
| 2 | Istanbul, Turkey | 15,999 | April - June, Sep - Oct |
| 3 | Paris, France | 25,999 | April - June, October |
| 4 | Bali, Indonesia | 12,999 | April - October |
| 5 | Dubai, UAE | 18,999 | November - March |
| 6 | Switzerland | 35,999 | June - Sep, Dec - Mar |
| 7 | Thailand | 10,999 | November - February |
| 8 | Maldives | 28,999 | November - April |

================================================================================
                        PACKAGES
================================================================================

| Package | Duration | Price (₹) | Best For |
|---------|----------|-----------|----------|
| Bronze | 5 Days / 4 Nights | 9,999 | Solo/Small Groups |
| Silver | 7 Days / 6 Nights | 19,999 | Couples/Families |
| Gold | 10 Days / 9 Nights | 29,999 | Luxury Travelers |
| Platinum | 14 Days / 13 Nights | 39,999 | Ultimate Luxury |

================================================================================
                        TECHNOLOGY STACK
================================================================================

- HTML5
- CSS3
- JavaScript (ES6)
- Boxicons (Icons)
- Google Fonts (Poppins, Paytone One)
- Local Storage (Data persistence)

================================================================================
                        BROWSER SUPPORT
================================================================================

- Google Chrome (Recommended)
- Mozilla Firefox
- Microsoft Edge
- Safari
- Opera

================================================================================
                        TROUBLESHOOTING
================================================================================

ISSUE: Images not showing
SOLUTION: Download images from the provided links and place in 'images' folder

ISSUE: Icons not showing
SOLUTION: Check internet connection for Boxicons CDN

ISSUE: Data not saving
SOLUTION: Clear browser cache and reload

ISSUE: destination-detail.html?id=undefined
SOLUTION: Make sure destination cards have onclick="viewDestination(ID)" with correct ID

================================================================================
                        HOW TO ADD NEW DESTINATION
================================================================================

1. Open index.html
2. Add a new destination card in the destinations grid
3. Assign a unique ID (e.g., onclick="viewDestination(9)")
4. Add destination data in destination-detail.html
5. Add image to images folder

================================================================================
                        HOW TO VIEW CUSTOMER DATA
================================================================================

METHOD 1 (Admin Panel):
1. Open admin.html
2. Click on "Registrations" tab
3. View all customer data

METHOD 2 (Browser Console):
1. Press F12
2. Go to Console tab
3. Type: JSON.parse(localStorage.getItem('user_registrations'))
4. Press Enter

METHOD 3 (Export):
1. Open admin.html
2. Click "Export Registrations" button
3. Save CSV file
4. Open in Excel

================================================================================
                        CONTACT INFORMATION
================================================================================

Developer: Sudarshan
Email: info@tourismportal.com
Phone: +91 9876543210
Website: www.tourismbookingportal.com

================================================================================
                        LICENSE
================================================================================

This project is developed for educational purposes.
All images used are from free stock photo websites (Pexels, Unsplash).
All rights reserved.

================================================================================
                        VERSION HISTORY
================================================================================

Version 1.0 (2024)
- Initial release
- Complete website with all features
- Admin panel for data management
- 8 destinations and 4 packages
- Responsive design

================================================================================
                        SCREENSHOTS
================================================================================

[Take screenshots of your website pages and add them to a 'screenshots' folder]

================================================================================
                        THANK YOU!
================================================================================

Thank you for using Tourism Booking Portal!
For any queries or support, please contact the developer.

================================================================================