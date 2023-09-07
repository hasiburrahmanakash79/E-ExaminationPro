import React from 'react';
import { Helmet } from 'react-helmet-async';

const AddBlog = () => {
    return (
        <div>
            <Helmet><title>E-ExamPro | Add Blog </title></Helmet>
            <h2 className='text-2xl'>Add Blog</h2>
        </div>
    );
};

export default AddBlog;