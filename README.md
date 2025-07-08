# 🚀 Share Blitz Backend

<div align="center">
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white" alt="Express.js">
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB">
  <img src="https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=socket.io&logoColor=white" alt="Socket.io">
  <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white" alt="JWT">
</div>

<div align="center">
  <h3>⚡ A powerful and scalable backend for Share Blitz - The next-generation social media platform</h3>
  <p>Built with modern technologies to deliver lightning-fast performance and seamless user experiences</p>
</div>

---

## 🌟 About Share Blitz

**Share Blitz** is a cutting-edge social media platform designed to revolutionize how people connect, share, and interact online. This backend service powers the entire ecosystem, providing robust APIs, real-time communication, and secure data management.

### ✨ Key Features

- 🔐 **Secure Authentication & Authorization** - JWT-based authentication with role-based access control
- 👥 **User Management** - Complete user profiles, settings, and account management
- 📱 **Post Management** - Create, edit, delete, and share multimedia posts
- 💬 **Real-time Messaging** - Instant messaging with Socket.io integration
- 👍 **Social Interactions** - Like, comment, share, and react to posts
- 🔍 **Advanced Search** - Full-text search for users, posts, and content
- 📊 **Analytics & Insights** - User engagement tracking and platform analytics
- 🔔 **Push Notifications** - Real-time notifications for user activities
- 📤 **File Upload** - Support for images, videos, and document uploads
- 🛡️ **Content Moderation** - Automated and manual content filtering
- 🌐 **API Rate Limiting** - Prevents abuse and ensures fair usage
- 📈 **Scalable Architecture** - Built to handle millions of users

---

## 🛠️ Tech Stack

### Core Technologies
- **Runtime**: Node.js 18+
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **Real-time**: Socket.io
- **File Storage**: AWS S3 / Cloudinary
- **Caching**: Redis

### Development Tools
- **Language**: JavaScript (ES6+)
- **Testing**: Jest & Supertest
- **Documentation**: Swagger/OpenAPI
- **Linting**: ESLint
- **Code Formatting**: Prettier
- **Process Management**: PM2

### Security & Monitoring
- **Security**: Helmet, CORS, bcrypt
- **Validation**: Joi
- **Logging**: Winston
- **Monitoring**: Morgan

---

## 🚀 Quick Start

### Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (v18.0.0 or higher)
- **MongoDB** (v5.0 or higher)
- **Redis** (v6.0 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/abhilashvailappilly/Share-Blitz-Backend.git
   cd Share-Blitz-Backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   ```bash
   cp .env.example .env
   ```
   
   Configure your environment variables in `.env`:
   ```env
   # Server Configuration
   PORT=5000
   NODE_ENV=development
   
   # Database
   MONGODB_URI=mongodb://localhost:27017/share-blitz
   
   # JWT Configuration
   JWT_SECRET=your-super-secure-jwt-secret
   JWT_EXPIRES_IN=7d
   
   # Redis Configuration
   REDIS_HOST=localhost
   REDIS_PORT=6379
   REDIS_PASSWORD=
   
   # File Upload
   CLOUDINARY_NAME=your-cloudinary-name
   CLOUDINARY_API_KEY=your-api-key
   CLOUDINARY_API_SECRET=your-api-secret
   
   # Email Configuration
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-email-password
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Production build**
   ```bash
   npm run build
   npm start
   ```

---

## 📁 Project Structure

```
Share-Blitz-Backend/
├── 📁 src/
│   ├── 📁 controllers/          # Route controllers
│   │   ├── authController.js
│   │   ├── userController.js
│   │   ├── postController.js
│   │   └── messageController.js
│   ├── 📁 middleware/           # Custom middleware
│   │   ├── auth.js
│   │   ├── validate.js
│   │   └── upload.js
│   ├── 📁 models/              # Database models
│   │   ├── User.js
│   │   ├── Post.js
│   │   ├── Message.js
│   │   └── Notification.js
│   ├── 📁 routes/              # API routes
│   │   ├── auth.js
│   │   ├── users.js
│   │   ├── posts.js
│   │   └── messages.js
│   ├── 📁 services/            # Business logic
│   │   ├── authService.js
│   │   ├── emailService.js
│   │   └── uploadService.js
│   ├── 📁 utils/               # Utility functions
│   │   ├── logger.js
│   │   ├── validators.js
│   │   └── helpers.js
│   ├── 📁 config/              # Configuration files
│   │   ├── database.js
│   │   └── redis.js
│   └── app.js                  # Express app setup
├── 📁 tests/                   # Test files
├── 📁 docs/                    # Documentation
├── 📄 package.json
├── 📄 .env.example
└── 📄 README.md
```

---

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `POST /api/auth/refresh` - Refresh access token
- `POST /api/auth/forgot-password` - Password reset request
- `POST /api/auth/reset-password` - Reset password

### Users
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile
- `GET /api/users/search` - Search users
- `POST /api/users/follow` - Follow user
- `DELETE /api/users/unfollow` - Unfollow user
- `GET /api/users/:id/followers` - Get user followers
- `GET /api/users/:id/following` - Get user following

### Posts
- `GET /api/posts` - Get all posts (feed)
- `POST /api/posts` - Create new post
- `GET /api/posts/:id` - Get specific post
- `PUT /api/posts/:id` - Update post
- `DELETE /api/posts/:id` - Delete post
- `POST /api/posts/:id/like` - Like post
- `POST /api/posts/:id/comment` - Comment on post
- `GET /api/posts/:id/comments` - Get post comments

### Messages
- `GET /api/messages` - Get user conversations
- `POST /api/messages` - Send message
- `GET /api/messages/:conversationId` - Get conversation messages
- `PUT /api/messages/:id/read` - Mark message as read

### Notifications
- `GET /api/notifications` - Get user notifications
- `PUT /api/notifications/:id/read` - Mark notification as read
- `DELETE /api/notifications/:id` - Delete notification

---

## 🔧 Configuration

### Database Configuration

The application uses MongoDB as the primary database. Configure your connection in the `.env` file:

```env
MONGODB_URI=mongodb://localhost:27017/share-blitz
```

### Redis Configuration

Redis is used for caching and session management:

```env
REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_PASSWORD=your-redis-password
```

### File Upload Configuration

Configure Cloudinary for file uploads:

```env
CLOUDINARY_NAME=your-cloudinary-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
```

---

## 🧪 Testing

Run the test suite:

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Run specific test file
npm test -- --testNamePattern="Auth"
```

---

## 📝 API Documentation

API documentation is available through Swagger UI:

- **Development**: http://localhost:5000/api-docs
- **Production**: https://your-domain.com/api-docs

To regenerate API documentation:

```bash
npm run docs:generate
```

---

## 🚀 Deployment

### Using PM2 (Production)

```bash
# Install PM2 globally
npm install -g pm2

# Start the application
pm2 start ecosystem.config.js

# Monitor the application
pm2 monitor

# View logs
pm2 logs
```

### Using Docker

```bash
# Build the Docker image
docker build -t share-blitz-backend .

# Run the container
docker run -p 5000:5000 share-blitz-backend
```

### Environment Variables for Production

```env
NODE_ENV=production
PORT=5000
MONGODB_URI=mongodb://your-production-db
JWT_SECRET=your-super-secure-production-secret
REDIS_HOST=your-redis-host
```

---

## 📊 Performance & Monitoring

### Key Performance Metrics

- **Response Time**: < 200ms for 95% of requests
- **Throughput**: 1000+ requests per second
- **Database Queries**: Optimized with indexing
- **Memory Usage**: < 512MB under normal load
- **CPU Usage**: < 70% under peak load

### Monitoring Setup

```bash
# Install monitoring tools
npm install --save newrelic
npm install --save @sentry/node
```

---

## 🔐 Security Features

### Authentication & Authorization
- JWT-based stateless authentication
- Role-based access control (RBAC)
- Password hashing with bcrypt
- Account lockout after failed attempts

### Data Protection
- Input validation and sanitization
- SQL injection prevention
- XSS protection
- CSRF protection
- Rate limiting

### Security Headers
- CORS configuration
- Content Security Policy
- HTTPS enforcement

---

## 🤝 Contributing

We welcome contributions from the community! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Development Guidelines

- Follow the existing code style
- Write tests for new features
- Update documentation
- Ensure all tests pass
- Use meaningful commit messages

---

## 📋 Scripts

| Script | Description |
|--------|-------------|
| `npm start` | Start production server |
| `npm run dev` | Start development server with nodemon |
| `npm test` | Run test suite |
| `npm run test:watch` | Run tests in watch mode |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Fix ESLint issues |
| `npm run format` | Format code with Prettier |
| `npm run build` | Build for production |
| `npm run docs:generate` | Generate API documentation |

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Abhilash Vailappilly**
- GitHub: [@abhilashvailappilly](https://github.com/abhilashvailappilly)
- LinkedIn: [Connect with me](https://linkedin.com/in/abhilashvailappilly)

---

## 🙏 Acknowledgments

- Express.js team for the amazing framework
- MongoDB team for the robust database
- Socket.io team for real-time capabilities
- All contributors and beta testers
- Open source community for inspiration

---

## 📞 Support

If you have any questions or need help with setup, please:

1. Check the [Documentation](docs/)
2. Search [Issues](https://github.com/abhilashvailappilly/Share-Blitz-Backend/issues)
3. Create a new [Issue](https://github.com/abhilashvailappilly/Share-Blitz-Backend/issues/new)

---

<div align="center">
  <p>Made with ❤️ by Abhilash V S</p>
  <p>⭐ Star this repository if you found it helpful!</p>
</div>