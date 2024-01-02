import 'express-async-errors';
import feedbackModel from "../models/feedbackModel.js";
import userModel from '../models/userModel.js';

// to show all the feedbacks FOR ADMIN ------------------------------->>>>>>
export const getAllAdminFeedback = async (req, res) => {
    console.log(req.query);
    const {  year, department, sort } = req.query;

    const queryObject = {};  // No createdBy condition

    // if (search) {
    //     queryObject.$or = [
    //         { name: { $regex: search, $options: 'i' } },
    //         // { message: { $regex: search, $options: 'i' } },
    //     ];
    // }

    if (year && year !== 'all') {
        queryObject.year = year;
    }
    if (department && department !== 'all') {
        queryObject.department = department;
    }
    // for sorting the order  
    const sortOptions = {
        newest: '-createdAt',
        oldest: 'createdAt',
    };

    const sortKey = sortOptions[sort] || sortOptions.newest;

    // setup pagination
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const feedbacks = await feedbackModel.find(queryObject)
        .sort(sortKey)
        .skip(skip)
        .limit(limit);
    const currrentFeedbacks = feedbacks.length;
    const Totalfeedbacks = await feedbackModel.countDocuments() ;
    const Totalusers = await userModel.countDocuments();
    const numOfPages = Math.ceil(Totalfeedbacks / limit);

    res.status(200)
        .json({ Totalfeedbacks, Totalusers, numOfPages, currrentFeedbacks, currentPage: page, feedbacks });
};


//  to get the user feedbacks from them 
export const getAllFeedback = async (req, res) => {
    const feeds = await feedbackModel.find({ createdBy: req.user.userId });
    res.status(200).json({ feeds });
};

// to create the feedbacks 
export const createFeedback= async (req, res) => {
    req.body.createdBy = req.user.userId;
    const feedbacks = await feedbackModel.create(req.body);
    res.status(200).json({ feedbacks });
};

// to get single feeback 
export const getOneFeedback = async(req, res) => {
    const { id } = req.params;
    const msg = await feedbackModel.findById(id)
    if (!msg) {
        return res.status(404).json({ msg: `no feedback with id ${id}` });
    }
    res.status(200).json({ msg });
};


// to delete the feeback 
export const deleteFeedback = async(req, res) => {
        const removedFeed = await feedbackModel.findByIdAndDelete(req.params.id);
          res.status(201)
             .json({ msg: "feed  Deleted...", Feed: removedFeed});
    };