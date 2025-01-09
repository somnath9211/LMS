import { Label } from '@/components/ui/label';
import React, { useEffect, useState } from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import { useCreateCourseMutation } from '@/features/api/courseApi';
import { toast } from 'sonner';


const AddCourse = () => {
    const [courseTitel, setCourseTitel] = useState("");
    const [category, setCategory] = useState("");
    const navigate = useNavigate();

    const [createCourse, { data, error, isSuccess, isLoading }] = useCreateCourseMutation();

    const getSelectedCategory = (value) => {
        setCategory(value);
    };

    const createCourseHandler = async () => {
        await createCourse({ courseTitel, category })
    };

    // For displaying toast

    useEffect(() => {
        if (isSuccess) {
            toast.success(data.message || "Course created.")
        }
    }, [isSuccess, error, data]);

    return (

        <div className='flex-1 mx-10'>
            <div className='mb-4'>
                <h1 className=' font-bold text-xl'> Let's add course, add some basic course details for your new course. </h1>
                <p className=' text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, explicabo?</p>
            </div>
            <div className=' space-y-4'>
                <div className=''>
                    <Label>Title :</Label>
                    <Input type="text" value={courseTitel} placeholder='Your Course Name' onChange={(e) => setCourseTitel(e.target.value)} />
                </div>
                <div className=''>
                    <Label>Category :</Label>
                    <Select onValueChange={getSelectedCategory}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Next Js">Next Js</SelectItem>
                            <SelectItem value="Data Science">Data Science</SelectItem>
                            <SelectItem value="Frontend Development">Frontend Development</SelectItem>
                            <SelectItem value="Fullstack Development">Fullstack Development</SelectItem>
                            <SelectItem value="MERN stack Development">MERN stack Development</SelectItem>
                            <SelectItem value="Javascript">Javascript</SelectItem>
                            <SelectItem value="Java">Java</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className=' flex items-center gap-3'>
                    <Button variant='outline' onClick={() => navigate(`/admin/course`)}>Back</Button>
                    <Button disabled={isLoading} onClick={createCourseHandler}>
                        {
                            isLoading ? (
                                <>
                                    <Loader2 className=' mr-2 h-4 w-4 animate-spin' /> Please wait
                                </>
                            ) : "Create"
                        }
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default AddCourse