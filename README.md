# Arts Gallery Platform (Artsphere)

A sophisticated MERN stack marketplace designed for independent artists to host digital exhibitions and live auctions.

## Features

- 🎨 **Artist Profiles** - Showcase your artwork and portfolio
- 🖼️ **Gallery Management** - Upload and manage your artworks
- 🔨 **Real-time Auctions** - Live bidding with socket.io
- 💳 **Secure Payments** - Payment processing integration
- 📧 **Notifications** - Email notifications for bids and sales
- 🔐 **Authentication** - JWT-based secure authentication
- ☁️ **Cloud Storage** - Images hosted on Cloudinary
- 📊 **Analytics Dashboard** - Track sales and engagement

## Tech Stack

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **Socket.io** - Real-time communication
- **JWT** - Authentication
- **Cloudinary** - Image hosting

### Frontend
- **React** - UI library
- **Vite** - Build tool
- **React Router** - Navigation
- **Axios** - HTTP client
- **Tailwind CSS** - Styling
- **Socket.io-client** - Real-time updates
- **React Hot Toast** - Notifications

## Project Structure

```
legendary-succotash/
├── backend/                 # Express API
│   ├── models/             # MongoDB schemas
│   ├── routes/             # API endpoints
│   ├── controllers/        # Business logic
│   ├── middleware/         # Auth, validation
│   ├── config/             # Configuration
│   └── server.js           # Entry point
├── frontend/               # React app
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom hooks
│   │   ├── context/        # Context providers
│   │   ├── services/       # API services
│   │   └── App.jsx         # Main app
│   └── package.json
├── package.json            # Root scripts
└── .env.example            # Environment template
```

## Getting Started

### Prerequisites
- Node.js 16+
- MongoDB
- Cloudinary account

### Installation

1. Clone the repository
```bash
git clone https://github.com/1968eric/legendary-succotash.git
cd legendary-succotash
```

2. Install dependencies
```bash
npm install
cd backend && npm install && cd ..
cd frontend && npm install && cd ..
```

3. Create `.env` file in root
```bash
cp .env.example .env
```

4. Update `.env` with your credentials
```
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
NODEMAILER_EMAIL=your_email
NODEMAILER_PASSWORD=your_password
```

5. Run development server
```bash
npm run dev
```

This will start both backend (port 5000) and frontend (port 5173) concurrently.

### Running Individually

**Backend only:**
```bash
npm run backend
```

**Frontend only:**
```bash
npm run frontend
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/profile` - Get user profile

### Artworks
- `GET /api/artworks` - List all artworks
- `GET /api/artworks/:id` - Get artwork details
- `POST /api/artworks` - Create new artwork
- `PUT /api/artworks/:id` - Update artwork
- `DELETE /api/artworks/:id` - Delete artwork

### Auctions
- `GET /api/auctions` - List all auctions
- `POST /api/auctions` - Create auction
- `POST /api/auctions/:id/bid` - Place bid

### Users
- `GET /api/users/:id` - Get user profile
- `PUT /api/users/:id` - Update profile
- `GET /api/users/:id/artworks` - Get user's artworks

## Environment Variables

See `.env.example` for all required environment variables.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email support@artsphere.com or open an issue on GitHub.
