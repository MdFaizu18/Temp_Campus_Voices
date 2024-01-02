import feedbackModel from "../models/feedbackModel.js";
import User from "../models/userModel.js";
import { StatusCodes } from "http-status-codes";

export const getApplicationStats = async (req, res) => {
    const users = await User.countDocuments() - 1;
    const feedbacks = await feedbackModel.countDocuments();
    res.status(StatusCodes.OK).json({ users, feedbacks });
};

export const getCurrentUser = async (req, res) => {
    const user = await User.findOne({ _id: req.user.userId });
    const userWithoutPassword = user.toJSON();
    res.status(StatusCodes.OK).json({ user: userWithoutPassword });
};

export const getUserRole= async (req, res) => {
    const { email: userEmail } = req.params;
    console.log(userEmail);
    const user = await User.findOne({email:userEmail});
    if (!user) {
        return res.status(404).json({ msg: `no user with email ${userEmail}` });
    }
    res.status(200).json({ user});
};

export const getAllStats = async (req, res) => {
    try {
        const Totalfeedbacks = await feedbackModel.countDocuments();
        const Totalusers = await User.countDocuments();

        const feedbackCountsByYear = await feedbackModel.aggregate([
            {
                $group: {
                    _id: "$year",
                    count: { $sum: 1 }
                }
            }
        ]);

        const feedbackCountsByDepartment = await feedbackModel.aggregate([
            {
                $group: {
                    _id: "$department",
                    count: { $sum: 1 }
                }
            }
        ]);

        res.json({
            Totalfeedbacks,
            Totalusers,
            feedbackTotalYearCount: feedbackCountsByYear,
            feedbackTotalDepartCount:feedbackCountsByDepartment,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error by thunder client' });
    }
};
