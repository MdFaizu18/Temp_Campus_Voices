import { Router } from "express";
import { login,register,logout} from "../controllers/authControllers.js";
import { validateRegisterInput,validateLoginInput } from "../middleware/ValidationMiddleware.js";
const router = Router();

router.post('/register',validateRegisterInput,register);
router.post('/login',validateLoginInput,login);
router.get('/logout',logout)

export default router;