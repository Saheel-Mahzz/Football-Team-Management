# Football Team Manager

A comprehensive web application for managing football team squads and creating starting XI formations.

## Setup Instructions

### Prerequisites
- Node.js 18+ installed
- Yarn package manager

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd football-team-manager
```

2. Install dependencies
```bash
yarn install
```

3. Start the development server
```bash
yarn dev
```

4. Open your browser and navigate to:
```
http://localhost:3000
```

### Build for Production

```bash
yarn build
```

The production-ready files will be in the `dist` folder.

### Preview Production Build

```bash
yarn preview
```

## Project Structure

```
src/
├── components/        # Reusable UI components
│   ├── ui/           # shadcn/ui components
│   └── ...           # Custom components
├── pages/            # Page components
│   ├── team/         # Team management page
│   └── starting-xi/  # Formation builder page
├── stores/           # Zustand stores
│   └── useTeamStore.ts
├── types/            # TypeScript type definitions
├── utils/            # Utility functions & validation
├── constants/        # Constants for error messages & player roles
│   ├── errorMessages.ts
│   └── playerRoles.ts
└── App.tsx           # Main app component
```

## How to Use

### 1. Team Management
- Click "Add Player" to create a new player
- Fill in player details (name, position, age, jersey number, nationality, avatar URL)
- Edit or delete existing players using card actions
- Maximum 22 players allowed in squad

### 2. Starting XI Formation
- Navigate to "Starting XI" from team management page
- Select players by clicking on position slots
- Choose appropriate position players (e.g., only GK for goalkeeper slot)
- View available substitutes in the bench
- Save formation once all 11 players are selected

## Features

- ✅ Complete squad management (Add, Edit, Delete players)
- ✅ Starting XI formation builder with interactive pitch
- ✅ Position-based player selection
- ✅ Substitute bench management
- ✅ Player validation (jersey numbers, squad limits, positions)
- ✅ Persistent data storage (survives page refresh)
- ✅ Responsive design for mobile and desktop

## Technology Stack

### Frontend Framework
- **React 18** with **TypeScript** - For type safety and better developer experience
- **Vite** - Fast build tool and development server with Hot Module Replacement (HMR)

### UI Components & Styling
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **shadcn/ui** - High-quality, accessible React components built on Radix UI
- **Lucide React** - Beautiful, consistent icon library

### State Management
- **Zustand** - Lightweight state management with minimal boilerplate
- **Zustand Persist Middleware** - Automatic localStorage persistence without manual implementation

### Form Handling & Validation
- **React Hook Form** - Performant form management with minimal re-renders
- **Zod** - TypeScript-first schema validation for runtime type safety

### Routing
- **React Router v6** - Client-side routing for seamless navigation

### Notifications
- **Sonner** - Modern toast notification system with better UX than default options

## Why These Technologies?

**Zustand over Redux/Context:**
- Simpler API with less boilerplate
- Built-in persistence middleware
- Better performance for this use case
- Easier to test and maintain

**Vite over Create React App:**
- 10-100x faster cold starts
- Instant HMR regardless of app size
- Better build optimization
- Modern and actively maintained

**shadcn/ui over Material-UI/Ant Design:**
- Copy-paste component model (own your code)
- Full customization without fighting the library
- Smaller bundle size (only what you use)
- Better accessibility out of the box

**React Hook Form + Zod:**
- Best-in-class form performance
- Type-safe validation
- Great developer experience
- Industry standard combination

## Validation Rules

- **Squad Limit:** Maximum 22 players
- **Jersey Numbers:** Must be unique (1-99)
- **Position Matching:** Players can only be selected for their designated positions
- **Formation Completion:** Must select exactly 11 players for Starting XI
- **Avatar URL:** Optional, but must be valid URL format if provided

## Data Persistence

All data is stored in browser's localStorage using Zustand persist middleware:
- Squad data persists across page refreshes
- Starting XI formation is saved automatically
- Data is scoped per browser/device

**Note:** Clearing browser data or using incognito mode will reset all data.

## Assumptions Made
Example assumptions:
- Maximum squad size is 22 players (FIFA standard)
- Formation uses 4-4-2 layout (1 GK, 4 DEF, 4 MID, 2 FWD)
- Jersey numbers range from 1-99
- Starting XI access: Users can navigate to Starting XI page even with 0 players in squad
- Substitute bench visibility: Bench is always visible regardless of Starting XI completion status (helps users see available players while building formation)
- No authentication/multi-user support needed
- All data stored client-side

## Known Issues/Limitations
Example limitations:
- No backend integration (all data is local)
- Limited to one formation type (4-4-2)
- Avatar images must be hosted externally (URL only)
- No search/filter functionality for players (manageable with pagination for small squads)

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## Future Enhancements

- Multiple formation types (4-3-3, 3-5-2, etc.)
- Backend API integration
- User authentication


## License

**Developed as part of a technical assessment**