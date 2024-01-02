import mongoose from 'mongoose';
import { YEAR_STATUS, DEP_STATUS } from '../utils/constant.js';

const FeedbackSchema = new mongoose.Schema(
    {
        name: String,
        department: {
            type: String,
            enum: Object.values(DEP_STATUS),
            default: DEP_STATUS.CSE
        },
        year: {
            type: String,
            enum: Object.values(YEAR_STATUS),
            default: YEAR_STATUS.ONE
        },
        message: String,

        createdBy: {
            type: mongoose.Types.ObjectId,
            ref: 'user',
        },
    },
    { timestamps: true }
);

export default mongoose.model('Feeds', FeedbackSchema);
