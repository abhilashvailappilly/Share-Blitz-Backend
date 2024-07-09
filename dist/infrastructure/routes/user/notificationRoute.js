"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const jwtToken_1 = __importDefault(require("../../utils/helpers/jwtToken"));
const hashPassword_1 = __importDefault(require("../../utils/helpers/hashPassword"));
const authMiddleware_1 = __importDefault(require("../../middleware/authMiddleware"));
const socket_io_1 = require("socket.io");
const socket_1 = __importDefault(require("../../Socket/socket"));
const notificationRepository_1 = __importDefault(require("../../database/repositories/user/notificationRepository"));
const notificationUseCase_1 = __importDefault(require("../../../application/useCase/user/notificationUseCase"));
const notificationController_1 = __importDefault(require("../../../adapters/controllers/user/notificationController"));
const repositoryNotification = new notificationRepository_1.default();
const jwt = new jwtToken_1.default();
const hashedPassword = new hashPassword_1.default();
const io = new socket_io_1.Server();
(0, socket_1.default)(io);
const notificationUseCase = new notificationUseCase_1.default(repositoryNotification);
const controller = new notificationController_1.default(notificationUseCase);
const router = express_1.default.Router();
router.get('/', authMiddleware_1.default, (req, res, next) => { controller.getNotifications(req, res, next); });
router.get('/:id', authMiddleware_1.default, (req, res, next) => { controller.getNotificationById(req, res, next); });
router.patch('/toogleSeen', authMiddleware_1.default, (req, res, next) => { controller.toggleSeen(req, res, next); });
exports.default = router;
