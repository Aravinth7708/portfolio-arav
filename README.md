# Premium Personal Portfolio

A modern, responsive, and premium personal portfolio built with Next.js 15, React, Tailwind CSS, and Framer Motion.

## Features
- **Modern Design**: Premium aesthetics, dark/light mode, and subtle glassmorphism.
- **Animations**: Smooth page transitions and hover effects using Framer Motion.
- **Responsive**: Fully optimized for mobile, tablet, and desktop devices.
- **SEO Ready**: Configured with Next.js Metadata API for Open Graph tags.
- **Contact Form**: Validation powered by React Hook Form.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## How to Customize

### Theme Colors
The color palette is configured using CSS variables in `src/app/globals.css`.
You can adjust the `--primary`, `--secondary`, and `--accent` variables to match your brand.

### Adding New Projects
To add or modify projects in the portfolio:

1. Open `src/components/Projects.tsx`
2. Locate the `projects` array at the top of the component.
3. Add a new object following this structure:
   ```javascript
   {
     id: 4, // Unique ID
     title: "Your Project Name",
     description: "A brief description of what the project does and the problems it solves.",
     image: "https://url-to-your-project-image.jpg", // Use a high-quality image URL or place an image in the public directory and use "/image-name.jpg"
     tags: ["React", "Node.js", "MongoDB"], // Technologies used
     github: "https://github.com/yourusername/repo", // Link to source code
     demo: "https://your-live-demo-link.com" // Link to live site
   }
   ```
4. Save the file, and the new project will automatically appear with all the hover animations and styling.

## Deployment

This portfolio is ready to be deployed on Vercel. 
Simply push the repository to GitHub and import it into your Vercel account. Next.js optimizations will work out of the box.
