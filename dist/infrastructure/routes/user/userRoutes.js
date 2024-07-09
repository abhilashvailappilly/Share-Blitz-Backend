"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = __importDefault(require("../../../adapters/controllers/user/userController"));
const postRepository_1 = __importDefault(require("../../database/repositories/user/postRepository"));
const userRepository_1 = __importDefault(require("../../database/repositories/user/userRepository"));
const postUseCase_1 = __importDefault(require("../../../application/useCase/user/postUseCase"));
const userUseCase_1 = __importDefault(require("../../../application/useCase/user/userUseCase"));
const connectionUseCase_1 = __importDefault(require("../../../application/useCase/user/connectionUseCase"));
const jwtToken_1 = __importDefault(require("../../utils/helpers/jwtToken"));
const hashPassword_1 = __importDefault(require("../../utils/helpers/hashPassword"));
const authMiddleware_1 = __importDefault(require("../../middleware/authMiddleware"));
const connectionRepository_1 = __importDefault(require("../../database/repositories/user/connectionRepository"));
const verificationRepository_1 = __importDefault(require("../../database/repositories/user/verificationRepository"));
const postRepo = new postRepository_1.default();
const userRepo = new userRepository_1.default();
const verificationRepo = new verificationRepository_1.default();
const connectionRepo = new connectionRepository_1.default();
const jwt = new jwtToken_1.default();
const hashedPassword = new hashPassword_1.default();
const postCase = new postUseCase_1.default(postRepo, jwt, hashedPassword);
const userCase = new userUseCase_1.default(userRepo, verificationRepo, jwt, hashedPassword);
const connectionUseCase = new connectionUseCase_1.default(postRepo, userRepo, connectionRepo, jwt, hashedPassword);
const controller = new userController_1.default(connectionUseCase, userCase);
const router = express_1.default.Router();
router.post('/followUser', authMiddleware_1.default, (req, res) => { controller.followUser(req, res); });
router.delete('/unFollowUser', authMiddleware_1.default, (req, res) => { controller.unFollowUser(req, res); });
router.get('/getConnections', authMiddleware_1.default, (req, res) => { controller.getConnections(req, res); });
router.get('/checkIsFriend', authMiddleware_1.default, (req, res) => { controller.checkIsFriend(req, res); });
router.get('/searchUser', authMiddleware_1.default, (req, res) => { controller.searchUser(req, res); });
router.patch('/changePrivacy', authMiddleware_1.default, (req, res) => { controller.changePrivacy(req, res); });
router.get('/isRequestedVerification', authMiddleware_1.default, (req, res) => { controller.isRequestedVerification(req, res); });
router.post('/submitVerification', authMiddleware_1.default, (req, res) => { controller.submitVerification(req, res); });
router.patch('/submitPaymentDetails', authMiddleware_1.default, (req, res) => { controller.updatePaymentDetails(req, res); });
exports.default = router;
