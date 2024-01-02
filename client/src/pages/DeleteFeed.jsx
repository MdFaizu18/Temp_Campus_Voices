import React from 'react'
import { redirect } from 'react-router-dom';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';

export async function action({ params }) {
    try {
        await customFetch.delete(`/dashboard-student/feedbacks/${params.id}`);
        toast.success('Feedback deleted successfully');
    } catch (error) {
        toast.error(error.response.data.msg);
    }
    return redirect('/dashboard-student/stuffs');
}

const DeleteFeed = () => {
    return (
        <div>

        </div>
    )
}

export default DeleteFeed;