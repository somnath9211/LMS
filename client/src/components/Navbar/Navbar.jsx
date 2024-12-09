import { LogOut, Menu, School } from 'lucide-react'
import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "../ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

import { Button } from '../ui/button';
import DarkMode from './DarkMode';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '../ui/sheet';
import { Separator } from '@radix-ui/react-dropdown-menu';


const Navbar = () => {
    const user = true;
    return (
        <div className=' h-16 dark: bg-[#0A0A0A] bg-white border-b dark: border-b-gray-800 border-b-gray-200 fixed top-0 left-0 right-0 duration-300 z-10'>
            {/* Desktop */}
            <div className=' max-w-7xl mx-auto hidden md:flex justify-between items-center gap-10 h-full'>
                <div className='flex items-center gap-2'>
                    <School size={"30"} />
                    <h1 className=' hidden md:block font-extrabold text-2xl'>E-Learning</h1>
                </div>
                <div className=' flex items-center gap-8'>
                    {
                        user ? (
                            <DropdownMenu>
                                <DropdownMenuTrigger>
                                    <Avatar>
                                        <AvatarImage src="https://github.com/shadcn.png" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>

                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>My Learning</DropdownMenuItem>
                                    <DropdownMenuItem>Edit Profile</DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <LogOut />
                                        <span>Log out</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>Dashboard</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        ) : (
                            <div className='flex gap-2 items-center'>
                                <Button variant='outline'>LogIn</Button>
                                <Button>Signup</Button>
                            </div>
                        )
                    }
                    <DarkMode />
                </div>
            </div>
            {/* Mobile Device  */}
            <div className=' flex md:hidden items-center justify-between px-4 h-full'>
                <h1 className='font-extrabold text-2xl'>E-Learning</h1>
                <MobileNavbar />
            </div>
        </div>
    )
}

export default Navbar;

const MobileNavbar = () => {
    const role = 'instructor';
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button size='icon' className='bg-gray-200 rounded-full hover:bg-gray-200' variant="outline">
                    <Menu />
                </Button>
            </SheetTrigger>
            <SheetContent className='flex flex-col'>
                <SheetHeader className=' flex flex-row items-center justify-between'>
                    <SheetTitle>E-Learning</SheetTitle>
                    <DarkMode />
                </SheetHeader>
                <Separator className='mr-2' />
                <DropdownMenuSeparator />
                <nav className='flex flex-col space-y-4'>
                    <span>My Learning</span>
                    <span>Edit Profile</span>
                    <span>Log out</span>
                </nav>
                {
                    role === 'instructor' && (
                        <SheetFooter>
                            <SheetClose asChild>
                                <Button type="submit">Deshboard</Button>
                            </SheetClose>
                        </SheetFooter>
                    )
                }

            </SheetContent>
        </Sheet>
    )
}