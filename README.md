# Semesta Medika Helpdesk System

A comprehensive helpdesk and ticketing system built for Semesta Medika, a leading medical equipment company. This system streamlines customer support, equipment maintenance requests, and service management.

## 🚀 Features

- **Ticket Management**
  - Create and track support tickets
  - Priority-based ticket routing
  - Status tracking and updates
  - Ticket categorization by equipment type

- **User Management**
  - Role-based access control
  - Customer portal for ticket submission
  - Support agent dashboard
  - Admin management interface

- **Communication**
  - Real-time notifications
  - Internal messaging system
  - Email notifications
  - Status update alerts

- **Reporting & Analytics**
  - Service performance metrics
  - Response time tracking
  - Customer satisfaction metrics

## 🛠️ Technical Stack

- **Frontend**: React 19 with Vite 6
- **Data Fetching**: TanStack React Query
- **Real-time Features**: Socket.IO
- **Routing**: React Router v7
- **UI Components**: 
  - React Hot Toast for notifications
  - Recharts for analytics visualization

## 📦 Project Structure

```
src/
├── api/          # API integration and endpoints
├── assets/       # Static assets (images, fonts, etc.)
├── components/   # Reusable UI components
├── contexts/     # React context providers
├── features/     # Feature-specific modules
│   ├── tickets/  # Ticket management
│   ├── equipment/# Equipment tracking
│   ├── users/    # User management
│   └── reports/  # Analytics and reporting
├── hooks/        # Custom React hooks
├── pages/        # Page components
├── queryoptions/ # React Query configurations
├── routes/       # Route definitions
└── utils/        # Utility functions
```

## 🛠️ Development

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone [repository-url]

# Navigate to project directory
cd WADS_Frontend

# Install dependencies
npm install
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔧 Configuration

The project uses several configuration files:

- `vite.config.js` - Vite configuration
- `tailwind.config.js` - TailwindCSS configuration
- `postcss.config.js` - PostCSS configuration
- `eslint.config.js` - ESLint configuration

## 🎨 Styling

The project uses TailwindCSS for styling with PostCSS for processing. The UI is designed to be clean, professional, and user-friendly, suitable for medical equipment support staff and customers.

## 📱 Responsive Design

The application is primarily designed for desktop and laptop use, providing an optimal experience for support agents and administrators working from their workstations. However, we ensured that the interface is responsive and maintains functionality across all devices.
