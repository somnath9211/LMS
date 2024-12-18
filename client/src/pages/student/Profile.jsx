import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Loader2 } from 'lucide-react'
import { CourseSkeleton } from './Courses'
import Course from './Course'
import { useLoadUserQuery } from '@/features/api/authApi.js'

const Profile = () => {

    const { data, isLoading } = useLoadUserQuery();
    const enrolledCourse = [1];
    if (isLoading) return <h1>Profile Loading...</h1>;
    console.log(data);
    const { user } = data;


    return (
        <div className='max-w-4xl mx-auto px-6 my-24'>
            <h1 className='font-bold text-2xl md:text-left'>PROFILE</h1>
            <div className=' flex flex-col md:flex-row items-center md:items-start gap-8 my-5'>
                <div className=' flex flex-col items-center'>
                    <Avatar className=' h-24 w-24 md:h-32 md:w-32 mb-4'>
                        <AvatarImage src={user.photoUrl || "https://github.com/shadcn.png"} />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
                <div>
                    <div className=' mb-2'>
                        <h2 className=' font-semibold text-gray-900 dark:text-gray-100 '>
                            Name:
                            <span className=' font-normal text-gray-700 dark:text-gray-300 ml-2'>{user.name}</span>
                        </h2>
                    </div>
                    <div className=' mb-2'>
                        <h2 className=' font-semibold text-gray-900 dark:text-gray-100 '>
                            Email:
                            <span className=' font-normal text-gray-700 dark:text-gray-300 ml-2'>{user.email}</span>
                        </h2>
                    </div>
                    <div className=' mb-2'>
                        <h2 className=' font-semibold text-gray-900 dark:text-gray-100 '>
                            Role:
                            <span className=' font-normal text-gray-700 dark:text-gray-300 ml-2'>{user.role.toUpperCase()}</span>
                        </h2>
                    </div>
                    <Dialog>
                        <DialogTrigger > <Button size='sm' className='mt-2'>Edit Profile</Button></DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Edit Profile</DialogTitle>
                                <DialogDescription>
                                    Make changes to your profile here. Click save when you're done.
                                </DialogDescription>
                            </DialogHeader>
                            <div className=' grid gap-4 py-4'>
                                <div className=' grid grid-cols-4 items-center gap-4'>
                                    <Label>Name</Label>
                                    <Input type='text' placeholder='Name' className=' col-span-3' />
                                </div>
                                <div className=' grid grid-cols-4 items-center gap-4'>
                                    <Label>Profile Photo</Label>
                                    <Input type='file' accept='image/*' className=' col-span-3' />
                                </div>
                            </div>
                            <DialogFooter>
                                <Button disabled={isLoading}>
                                    {
                                        isLoading ? (
                                            <> <Loader2 className=' mr-2 h-4 w-4 animate-spin ' />Please wait</>
                                        ) : "Save Changes"
                                    }
                                </Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
            <div>
                <h2 className=' font-medium text-lg'>Courses you're enrolled in</h2>
                <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-5'>
                    {

                        isLoading ? (user.enrolledCourses.map((course) => (<CourseSkeleton key={course._id} />))) : (user.enrolledCourses.length === 0 ? (<h1>You are not enrolled in any courses</h1>) : (user.enrolledCourses.map((course) => (<Course key={course._id} />))))

                    }
                </div>
            </div>
        </div>
    )
}

export default Profile