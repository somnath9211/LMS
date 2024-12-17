import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import React from 'react'

const Profile = () => {
    return (
        <div className='max-w-4xl mx-auto px-6 my-24'>
            <h1 className='font-bold text-2xl md:text-left'>PROFILE</h1>
            <div className=' flex flex-col md:flex-row items-center md:items-start gap-8 my-5'>
                <div className=' flex flex-col items-center'>
                    <Avatar className=' h-24 w-24 md:h-32 md:w-32 mb-4'>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
            </div>
        </div>
    )
}

export default Profile