import { body, validationResult } from 'express-validator';
import { BadRequestError,NotFoundError,UnauthorizedError } from '../errors/CustomError.js';
import { DEP_STATUS, YEAR_STATUS } from '../utils/constant.js';
import mongoose from 'mongoose';
import { param } from 'express-validator';
import feedbackModel from "../models/feedbackModel.js";
import userModel from '../models/userModel.js';

// to validate the main validation middleware using this syntax 
const withValidationErrors = (validateValues) => {
    return [
        validateValues,
        (req, res, next) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                const errorMessages = errors.array().map((error) => error.msg);
                throw new BadRequestError(errorMessages);
            }
            next();
        },
    ];
};

// ---------------------------to validate the form ---------------------------
export const validateFormInput = withValidationErrors([
    body('name').notEmpty().withMessage('name is required'),
    body('year')
        .isIn(Object.values(YEAR_STATUS))
        .withMessage('invalid year status'),
    body('department')
        .isIn(Object.values(DEP_STATUS))
        .withMessage('invalid status value'),
    body('message').notEmpty().withMessage('invalid feedback content'),
]);

// ----------------- to validate whether its user or admin ----------------------
export const validateIdParam = withValidationErrors([
    param('id').custom(async (value, { req }) => {
        const isValidMongoId = mongoose.Types.ObjectId.isValid(value);
        if (!isValidMongoId) throw new BadRequestError('invalid MongoDB id');
        const feed= await feedbackModel.findById(value);
        if (!feed) throw new NotFoundError(`no job with id ${value}`);
        const isAdmin = req.user.role === 'admin';
        const isOwner = req.user.userId === feedbackModel.createdBy.toString();
        if (!isAdmin && !isOwner)
            throw UnauthorizedError('not authorized to access this route');
    }),
]);

// --------------------- to validate the reister form ------------------------
export const validateRegisterInput = withValidationErrors([
    body('name').notEmpty().withMessage('name is required'),
    body('department')
        .isIn(Object.values(DEP_STATUS))
        .withMessage('invalid status value'),
    body('registerNo')
        .notEmpty()
        .withMessage('register no is required')
        .isLength({ min: 12 })
        .withMessage('register must be at least 12 characters long')
        .custom(async (registerNo) => {
            const user = await userModel.findOne({ registerNo });
            if (user) {
                throw new BadRequestError('register number already exits')
            }
          }),
    body('email')
        .notEmpty()
        .withMessage('email should be required')
        .isEmail()
        .withMessage('invalid email format')
        .custom(async(email)=>{
            const user = await userModel.findOne({email});
            if(user){
                throw new BadRequestError('email already exits')
            }
        }),
    body('password')
        .notEmpty()
        .withMessage('password is required')
        .isLength({ min: 8 })
        .withMessage('password must be at least 8 characters long'),
]);


// ------------------------------ to validate the login form --------------------
export const validateLoginInput = withValidationErrors([
    body('email')
        .notEmpty()
        .withMessage('email is required')
        .isEmail()
        .withMessage('invalid email format'),
    body('registerNo')
        .notEmpty()
        .withMessage('register no is required')
        .isLength({ min: 12 })
        .withMessage('register must be at least 12 characters long'),
    body('password').notEmpty().withMessage('password is required'),
]);


