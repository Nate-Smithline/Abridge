# Abridge

> Using AI to set reminders and manage tasks efficiently

A modern React-based SaaS application for AI-powered reminders and task management.

## 🚀 Features

- **Authentication**: Login and signup pages with form validation
- **Dashboard**: Comprehensive dashboard with overview, reminders, and settings
- **Reminders Management**: Create, edit, complete, and delete reminders
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Clean and intuitive interface with smooth animations
- **TypeScript**: Full TypeScript support for type safety
- **React Router**: Client-side routing for seamless navigation

## 🛠️ Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Fast build tool and dev server
- **React Router v7** - Routing
- **CSS3** - Styling with CSS modules

## 📦 Project Structure

```
abridge/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable components
│   │   ├── Header.tsx
│   │   ├── Sidebar.tsx
│   │   ├── Overview.tsx
│   │   ├── Reminders.tsx
│   │   ├── Settings.tsx
│   │   └── PrivateRoute.tsx
│   ├── layouts/         # Layout components
│   │   └── DashboardLayout.tsx
│   ├── pages/           # Page components
│   │   ├── Login.tsx
│   │   ├── Signup.tsx
│   │   └── Dashboard.tsx
│   ├── styles/          # CSS files
│   ├── types/           # TypeScript type definitions
│   ├── hooks/           # Custom React hooks
│   ├── utils/           # Utility functions
│   ├── services/        # API services
│   ├── App.tsx          # Main app component
│   └── main.tsx         # Entry point
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## 🚦 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Nate-Smithline/Abridge.git
cd Abridge
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file (optional):
```bash
cp .env.example .env
```

4. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🔐 Authentication

The boilerplate includes a basic authentication flow:
- Login page at `/login`
- Signup page at `/signup`
- Protected dashboard routes at `/dashboard/*`

**Note**: This is a frontend-only implementation. For production, integrate with a backend authentication service.

## 🎨 Customization

### Styling

All styles are located in `src/styles/`. Modify CSS variables in `index.css` to change the theme:

```css
:root {
  --primary-color: #667eea;
  --primary-hover: #5568d3;
  --secondary-color: #6c757d;
  /* ... more variables */
}
```

### Routes

Add new routes in `src/App.tsx` and create corresponding page components in `src/pages/`.

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Deploy to Vercel

```bash
npm i -g vercel
vercel
```

### Deploy to Netlify

```bash
npm i -g netlify-cli
netlify deploy --prod
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the ISC License - see the LICENSE file for details.

## 🔮 Future Enhancements

- [ ] Backend API integration
- [ ] Real authentication with JWT
- [ ] AI-powered reminder suggestions
- [ ] Calendar integration
- [ ] Email notifications
- [ ] Mobile app (React Native)
- [ ] Dark mode support
- [ ] Multi-language support

## 👥 Authors

- Nate Smithline

## 🙏 Acknowledgments

- React team for the amazing framework
- Vite team for the blazing fast build tool
- The open-source community
