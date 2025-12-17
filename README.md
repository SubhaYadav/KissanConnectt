# KissanConnect - Agricultural Portal for Nepal

## 🌾 About

KissanConnect is a comprehensive agricultural platform designed for Nepali farmers. It provides:

- **Crop Marketplace**: Buy and sell crops directly
- **Weather Forecast**: Real-time weather information
- **Learning Resources**: Modern farming techniques in Nepali
- **Subsidy Calculator**: Calculate government subsidies
- **Seeds & Tools Store**: Purchase agricultural supplies
- **Insurance Portal**: Access agricultural insurance information
- **Land Fertility Analyzer**: NASA satellite data integration
- **Crop Disease Detector**: AI-powered disease identification

## 🚀 Features

### Authentication
- Secure localStorage-based authentication
- User registration with phone number
- Persistent login sessions
- Profile management

### Marketplace
- List crops with seller details
- Contact seller functionality with embedded contact information
- Category filtering (Vegetables & Domestic/Livestock)
- District-based search
- Persistent listings via localStorage

### Technology Stack
- Pure HTML, CSS, JavaScript
- No backend required
- localStorage for data persistence
- PWA-ready with service worker
- Responsive mobile-first design

## 📱 PWA Installation

### For Users:
1. Open the app in a browser
2. Click "Add to Home Screen" or "Install App"
3. Launch from your device home screen

### For Developers:
1. Serve the files via a web server
2. Ensure HTTPS (required for service worker)
3. manifest.json and service-worker.js are included

## 🔒 Privacy & Security

- All data stored locally on user's device
- No external data transmission except essential services
- Phone numbers and passwords stored securely
- Full privacy policy included

## 🏪 Play Store Readiness

✅ Privacy Policy page included
✅ No fake authentication
✅ Persistent data storage
✅ Stable navigation
✅ Mobile-optimized design
✅ PWA manifest and icons
✅ Service worker for offline support

## 📋 Required Files

- `index.html` - Main application
- `FC.css` - Styles
- `FC.js` - Application logic
- `crop-disease-detector.html` - Disease detection feature
- `nasa.html` - Land fertility analyzer
- `manifest.json` - PWA configuration
- `service-worker.js` - Offline support
- `privacy-policy.html` - Privacy policy
- `about.html` - About the team
- Icon files (192x192 and 512x512)

## 👥 Team

- **Creator**: Subha Saubhagya Singh Yadav
- **Mentor**: Shubh Pravat Singh Yadav

## 📞 Contact

For support or queries, visit the About page in the app.

## 🔧 Development

This is a static web application. To run locally:

1. Extract all files to a folder
2. Open `index.html` in a modern browser
3. For PWA testing, use a local server (e.g., `python -m http.server`)

## 🌟 Key Improvements Made

1. **Authentication Fixed**: Proper localStorage-based login/register
2. **Seller Details**: Each listing stores complete seller information
3. **Contact Seller**: Shows actual seller details from the listing
4. **Category System**: Consistent vegetable/domestic categorization
5. **Data Persistence**: All listings and user data persist after refresh
6. **PWA Ready**: Manifest and service worker included
7. **Play Store Ready**: Privacy policy and stable functionality
8. **About Section**: Professional team introduction page

## 📄 License

© 2025 KissanConnect. All rights reserved.
