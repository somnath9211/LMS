import React from 'react'
import { CourseSkeleton } from './Courses';
import Course from './Course';

const MyLearning = () => {
    const isLoading = false;
    const myLearning = [1, 2];
    return (
        <div className=' max-w-4xl mx-auto my-24 px-4 md:px-0'>
            <h1 className=' font-bold text-2xl'>My Learning</h1>
            <div className=' my-5'>
                <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    {
                        isLoading ? (myLearning.map((course, index) => (<CourseSkeleton key={index} />))) : (myLearning.length === 0 ? (<p>You are not enrolled in any courses</p>) : (myLearning.map((course, index) => (<Course key={index} />))))
                    }
                </div>
            </div>
        </div>
    )
}

export default MyLearning