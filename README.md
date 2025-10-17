# 🌟 Rambod Zafar - Portfolio Website

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Sanity-F03E2F?style=for-the-badge&logo=sanity&logoColor=white" alt="Sanity CMS" />
  <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
</div>

<div align="center">
  <img src="https://img.shields.io/badge/deployment-vercel-success?style=for-the-badge&logo=vercel" alt="Deployment" />
  <img src="https://img.shields.io/github/license/Rambod-22/portfolio2.0?style=for-the-badge" alt="License" />
  <img src="https://img.shields.io/github/stars/Rambod-22/portfolio2.0?style=for-the-badge" alt="Stars" />
</div>

---

## 🚀 About This Project

A modern, responsive portfolio website showcasing my journey as a Software Engineer and Computer Science student at the University of Waterloo. Built with cutting-edge technologies and featuring smooth animations, dynamic content management, and an engaging user experience.

### ✨ Key Features

- **🎨 Modern Design**: Clean, professional interface with smooth animations
- **📱 Fully Responsive**: Optimized for all devices and screen sizes  
- **🎯 Interactive Elements**: Engaging animations and hover effects
- **📊 Dynamic Content**: Powered by Sanity CMS for easy content updates
- **🔄 Real-time Updates**: Content changes reflect instantly on the live site
- **⚡ Performance Optimized**: Fast loading times and SEO-friendly
- **🎪 Animated Sections**: Beautiful transitions using Framer Motion

### 🛠️ Tech Stack

#### Frontend
- **[Next.js 14](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Framer Motion](https://www.framer.com/motion/)** - Production-ready motion library

#### Backend & CMS
- **[Sanity](https://www.sanity.io/)** - Headless CMS for content management
- **[GROQ](https://www.sanity.io/docs/groq)** - Query language for Sanity

#### Deployment & Hosting
- **[Vercel](https://vercel.com/)** - Deployment and hosting platform
- **[GitHub](https://github.com/)** - Version control and collaboration

## 🌐 Live Demo

**[View Live Website →](https://your-portfolio-url.vercel.app)**

## 📸 Screenshots

<div align="center">
  <img src="https://via.placeholder.com/800x400/1a1a1a/F7AB0A?text=Portfolio+Screenshot" alt="Portfolio Screenshot" style="border-radius: 10px;" />
</div>

## 🏗️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Rambod-22/portfolio2.0.git
   cd portfolio2.0
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Add your Sanity project configuration:
   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### 🎨 Sanity Studio Setup

1. **Access the Studio**
   ```bash
   # Start the development server
   npm run dev
   
   # Navigate to the studio
   # http://localhost:3000/studio
   ```

2. **Content Management**
   - Update personal information
   - Add/edit work experiences
   - Manage project portfolios
   - Upload images and media

## 📁 Project Structure

```
portfolio2.0/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── studio/            # Sanity Studio
│   └── page.tsx           # Main page
├── components/            # React components
│   ├── ExperienceCard.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   └── ...
├── sanity/               # Sanity configuration
│   ├── schema/          # Content schemas
│   └── env.js           # Environment config
├── typings.d.ts         # TypeScript definitions
└── utils/               # Utility functions
```

## 🎯 Sections

- **🏠 Hero**: Dynamic introduction with animated elements
- **👨‍💻 About**: Personal background and interests  
- **💼 Experience**: Professional work history with interactive cards
- **🛠️ Skills**: Technical proficiencies with progress indicators
- **🚀 Projects**: Featured projects with live demos
- **📞 Contact**: Social links and contact information

## 🚀 Deployment

The site is automatically deployed on Vercel with continuous integration:

1. **Push to main branch**
2. **Vercel automatically builds and deploys**
3. **Live site updates instantly**

### Manual Deployment
```bash
npm run build
npm run start
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **[Next.js Team](https://nextjs.org/)** - Amazing React framework
- **[Tailwind CSS](https://tailwindcss.com/)** - Excellent utility-first CSS
- **[Sanity](https://www.sanity.io/)** - Powerful headless CMS
- **[Framer Motion](https://www.framer.com/motion/)** - Beautiful animations
- **[Vercel](https://vercel.com/)** - Seamless deployment platform

---

<div align="center">
  <p>Built with ❤️ by <a href="https://github.com/Rambod-22">Rambod Zafar</a></p>
  <p>
    <a href="https://www.linkedin.com/in/rambodzafarmoghaddam/">LinkedIn</a> •
    <a href="mailto:Rambod.z@gmail.com">Email</a> •
    <a href="https://your-portfolio-url.vercel.app">Portfolio</a>
  </p>
</div>