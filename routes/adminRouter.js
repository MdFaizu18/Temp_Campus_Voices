import { Router } from "express";
const router = Router();
import { authenticateUser, authorizePermissions } from "../middleware/AuthMIddleware.js";
import { getApplicationStats } from "../controllers/userController.js";
import { getAllAdminFeedback } from "../controllers/feedbackController.js";
import { getAllStats } from "../controllers/userController.js";

router.get('/all-feedbacks', [
    authorizePermissions('admin'),
    getAllAdminFeedback,]);
router.get('/app-stats', [
    authorizePermissions('admin'),
    getApplicationStats,
]);
router.get('/stats', [
    authorizePermissions('admin'),
     getAllStats]);

export default router;