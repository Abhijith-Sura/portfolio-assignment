# Profile Gallery Dashboard

A modern, responsive React dashboard featuring an interactive profile section with tabbed navigation and a dynamic image gallery with upload functionality.

## 🚀 Features

- **Tab-Based Profile Navigation**: Switch between About Me, Experiences, and Recommended sections
- **Interactive Image Gallery**: Carousel-based gallery showing 3 images at a time
- **Image Upload**: Add your own images via file upload
- **Hover Effects**: Stunning cyan glow effects on images
- **Click to Expand**: Click images to expand them in place
- **Fully Responsive**: Works seamlessly on mobile, tablet, and desktop
- **Dark Theme**: Modern dark gradient background with glassmorphism effects

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## 🛠️ Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/profile-gallery-dashboard.git
cd profile-gallery-dashboard
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## 📦 Build for Production
```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

## 🚀 Deployment

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Then drag and drop the build folder to Netlify
```

### Deploy to GitHub Pages
```bash
npm install --save-dev gh-pages
```

Add to package.json:
```json
"homepage": "https://yourusername.github.io/profile-gallery-dashboard",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

Then deploy:
```bash
npm run deploy
```

## 🎨 Technologies Used

- **React 18**: UI library
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Beautiful icon library
- **FileReader API**: For image upload functionality

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1023px
- **Desktop**: ≥ 1024px

## ✨ Key Features Explained

### Profile Widget
- Three switchable tabs with smooth transitions
- Content area with fade effect at bottom
- Hover effects on all interactive elements

### Gallery Widget
- Displays 3 images at a time
- Previous/Next navigation with disabled states
- Upload button to add new images
- Click images to expand (1.5x scale) with cyan glow
- Hover for preview glow effect

## 🎯 Usage

1. **Switch Tabs**: Click on "About Me", "Experiences", or "Recommended" tabs
2. **Navigate Gallery**: Use arrow buttons to scroll through images
3. **Upload Images**: Click "+ ADD IMAGE" button and select an image file
4. **Expand Images**: Click any image to expand it in place (click again to collapse)
5. **Hover Effects**: Hover over images to see the cyan glow effect

## 📁 Project Structure
```
profile-gallery-dashboard/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   └── ProfileGalleryApp.jsx
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
├── tailwind.config.js
└── README.md
```

## 🐛 Troubleshooting

### Tailwind styles not working
- Ensure `tailwind.config.js` content paths are correct
- Check that `index.css` imports Tailwind directives

### Images not uploading
- Verify browser supports FileReader API (all modern browsers)
- Check file input accepts image/* attribute

### Build fails
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Check for syntax errors in JSX

## 📄 License

MIT License - feel free to use this project for your portfolio or assignments!

## 👨‍💻 Author

Your Name - [Your GitHub](https://github.com/yourusername)

## 🙏 Acknowledgments

- Images from [Unsplash](https://unsplash.com)
- Icons from [Lucide](https://lucide.dev)
- Built with Create React App