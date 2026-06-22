# MyClone AI - Universal AI Trial Room

A complete frontend web application built with React and Tailwind CSS that lets users create their AI Clone and try on products virtually.

## Features

### 🎭 Onboarding & Clone Setup
- Multi-step guided process (5 steps)
- Upload 12 photos from different angles
- Progress tracking with visual indicators
- 15-20 minute AI generation loading screen with animations

### 👤 Main Dashboard (My Clone Studio)
- Display generated 3D AI Clone character
- 5 premium background presets (Formal Office, Casual Street, Party Night, Gym/Sports, Nature)
- Instant background switching
- Clone statistics display

### ✨ Smart Try-On Studio
- Paste product links from Instagram, Amazon, Myntra, etc.
- Drag-and-drop image upload capability
- Category selection (Eyewear, Jewelry, Belts, Clothing)
- Realistic loading animation
- Live product preview on clone

### 📱 Mobile-Responsive Design
- Bottom navigation bar with 3 main tabs
- Clean, premium UI with no jargon
- Smooth animations and transitions
- Touch-friendly interface

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/amarnathraja73-cpu/myclone-ai.git
   cd myclone-ai
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Navigate to `http://localhost:3000`

## Building for Production

```bash
npm run build
```

The production files will be in the `dist/` directory.

## Project Structure

```
src/
├── screens/
│   ├── OnboardingScreen.jsx      # Multi-step clone creation
│   ├── MainDashboard.jsx          # Clone display & background changer
│   ├── TryOnStudio.jsx            # Product try-on interface
│   └── ProfileScreen.jsx          # User profile & settings
├── components/
│   ├── ProgressBar.jsx            # Step progress indicator
│   ├── PhotoUploadGrid.jsx        # 12-photo upload grid
│   ├── LoadingAnimation.jsx       # AI generation animation
│   ├── BottomNavigation.jsx       # Navigation tabs
│   ├── BackgroundChanger.jsx      # Background selector
│   └── TryOnInterface.jsx         # Product preview overlay
├── App.jsx                        # Main application component
├── main.jsx                       # React entry point
└── index.css                      # Tailwind styles
```

## Technologies Used

- **React 18.2** - UI framework
- **Tailwind CSS 3.3** - Utility-first CSS
- **Vite 4.3** - Build tool
- **React Icons** - Icon library
- **Lucide React** - Icon components

## Features Implemented

✅ Complete onboarding flow with 5 steps
✅ 12-angle photo upload system
✅ Progress tracking
✅ AI generation simulation (3-second demo)
✅ Main dashboard with clone display
✅ 5 background presets with instant switching
✅ Try-on studio with link input
✅ Drag-and-drop image upload
✅ Category selection (4 categories)
✅ Product overlay simulation
✅ Bottom navigation (3 tabs)
✅ Profile screen
✅ Mobile-responsive design
✅ Smooth animations throughout
✅ Premium, clean UI

## Usage Guide

### First Time
1. Click "Create Your AI Clone"
2. Go through 5-step onboarding
3. Upload 12 photos (can be any images for demo)
4. Wait for AI generation (demo: 3 seconds)

### Try-On Features
1. Navigate to Try-On Studio
2. Select product category
3. Either paste a product link or upload an image
4. Watch product appear on your clone
5. Save items or try another

### Customize Background
1. Go to My Clone Studio
2. Scroll through background options
3. Click any background to change instantly

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- Backend API integration for real AI clone generation
- Real 3D model rendering
- Product database integration
- Social sharing features
- Order directly from try-on
- AR integration for mobile
- User authentication

## License

MIT

## Support

For issues or questions, please create an issue in the GitHub repository.
