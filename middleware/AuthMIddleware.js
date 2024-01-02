import { UnauthenticatedError } from '../errors/CustomError.js';
import { verifyJWT } from '../utils/tokenUtils.js';

export const authenticateUser = async (req, res, next) => {
    const { token } = req.cookies;
    if (!token) {
        throw new UnauthenticatedError('authentication invalid');
    }

    try {
        const { userId, role } = verifyJWT(token);
        req.user = { userId, role };
        console.log(req.user);
        next();
    } catch (error) {
        throw new UnauthenticatedError('authentication invalid');
    }
};
                                            

// to access the admin pages routes 
export const authorizePermissions = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            throw new UnauthorizedError('Unauthorized to access this route for user only for admin');
        }
        next();
    };
};


// For user and admin can't access the routes untill they logged in
// export const ensureAuthenticated = (req, res, next) => {
//     if (req.isAuthenticated()) {
//         return next();
//     } else {
//         res.status(401).json({ message: 'Unauthorized' });
//     }
// };
