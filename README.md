# React Portfolio Lab

A React portfolio application built with Chakra UI, featuring a responsive design with smooth scrolling navigation, contact form, and project showcase.

## Features

- **Landing Section**: Personal introduction with avatar and bio
- **Projects Section**: Showcase of projects with cards and navigation
- **Contact Form**: Formik-powered contact form with validation
- **Responsive Header**: Fixed navigation with social media links
- **Smooth Scrolling**: Navigation between sections

## Tech Stack

- React
- Chakra UI
- Formik & Yup (form handling and validation)
- FontAwesome icons

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm start
   ```

3. **Open your browser** and navigate to `http://localhost:3000`

## Project Structure

```
src/
├── components/
│   ├── Header.js          # Navigation header with social links
│   ├── LandingSection.js  # Hero section with avatar and intro
│   ├── ProjectsSection.js # Projects showcase
│   ├── Card.js           # Project card component
│   ├── ContactMeSection.js # Contact form
│   └── FullScreenSection.js # Layout wrapper
├── hooks/
│   └── useSubmit.js      # Form submission hook
└── context/
    └── alertContext.js   # Alert notifications
```

## Form Validation

The contact form includes validation for:
- **Name**: Required field
- **Email**: Required and valid email format
- **Message**: Required with minimum 25 characters
- **Type**: Optional enquiry type selection

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner