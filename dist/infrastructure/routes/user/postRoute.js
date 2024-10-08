"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const postController_1 = __importDefault(require("../../../adapters/controllers/user/postController"));
const postRepository_1 = __importDefault(require("../../database/repositories/user/postRepository"));
const postUseCase_1 = __importDefault(require("../../../application/useCase/user/postUseCase"));
const jwtToken_1 = __importDefault(require("../../utils/helpers/jwtToken"));
const hashPassword_1 = __importDefault(require("../../utils/helpers/hashPassword"));
const authMiddleware_1 = __importDefault(require("../../middleware/authMiddleware"));
const repository = new postRepository_1.default();
const jwt = new jwtToken_1.default();
const hashedPassword = new hashPassword_1.default();
const postCase = new postUseCase_1.default(repository, jwt, hashedPassword);
const controller = new postController_1.default(postCase);
const router = express_1.default.Router();
// router.post('/createUser', (req, res) => {controller.createUser(req, res) });
router.post('/createpost', authMiddleware_1.default, (req, res) => { controller.createPost(req, res); });
router.get('/getAllPosts', authMiddleware_1.default, (req, res) => { controller.getAllPosts(req, res); });
router.get('/getPostById', authMiddleware_1.default, (req, res) => { controller.getPostById(req, res); });
router.delete('/deletePost', authMiddleware_1.default, (req, res) => { controller.deletePost(req, res); });
router.get('/getCommentReplys', authMiddleware_1.default, (req, res) => { controller.getCommentReplys(req, res); });
router.post('/replyToComment', authMiddleware_1.default, (req, res) => { controller.addReply(req, res); });
router.post('/commentOnPost', authMiddleware_1.default, (req, res) => { controller.commentOnPost(req, res); });
router.delete('/deleteComment', authMiddleware_1.default, (req, res) => { controller.deleteComment(req, res); });
router.get('/getUserPosts', authMiddleware_1.default, (req, res) => { controller.getUserPosts(req, res); });
router.patch('/editPost', authMiddleware_1.default, (req, res) => { controller.editPost(req, res); });
router.post('/likePost', authMiddleware_1.default, (req, res) => { controller.likePost(req, res); });
router.delete('/unlikePost', authMiddleware_1.default, (req, res) => { controller.unlikePost(req, res); });
router.get('/getSavedPosts', authMiddleware_1.default, (req, res) => { controller.getSavedPosts(req, res); });
router.get('/getTaggedPosts', authMiddleware_1.default, (req, res) => { controller.getTaggedPosts(req, res); });
router.post('/savePost', authMiddleware_1.default, (req, res) => { controller.savePost(req, res); });
router.delete('/unSavePost', authMiddleware_1.default, (req, res) => { controller.unSavePost(req, res); });
router.delete('/unSave', authMiddleware_1.default, (req, res) => { controller.unSavePost(req, res); });
router.post('/reportPost', authMiddleware_1.default, (req, res) => { controller.reportPost(req, res); });
router.patch('/blockPost', authMiddleware_1.default, (req, res) => { controller.blockPost(req, res); });
exports.default = router;
