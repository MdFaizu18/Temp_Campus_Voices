import { Router } from "express";
const router = Router();
import { validateFormInput,validateIdParam } from "../middleware/ValidationMiddleware.js";

import { getAllFeedback
        ,createFeedback
        ,deleteFeedback
        ,getOneFeedback } from "../controllers/feedbackController.js";


// Apply authentication middleware to the entire router
// router.use(ensureAuthenticated);

//  Apply routes 
router.route("/").get(getAllFeedback).post(validateFormInput,createFeedback);
router.route("/:id").get(getOneFeedback).delete(deleteFeedback);



export default router;