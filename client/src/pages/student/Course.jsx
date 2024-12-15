
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from "@/components/ui/badge"




const Course = () => {
    return (
        <Card className=' overflow-hidden rounded-lg dark:bg-gray-800 bg-white shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300'>
            <div className=' relative'>
                <img src="https://codewithmosh.com/_next/image?url=https:%2F%2Fcdn.filestackcontent.com%2F8MbtJ4hTAaOk3KPcptqZ&w=3840&q=75" alt="NEXT.Js" className=' w-full h-36 object-cover rounded-t-lg' />
            </div>
            <CardContent className=' px-5 py-4 space-y-3'>
                <h2 className=' font-bold hover:underline text-lg truncate'>NextJs Complete Course</h2>
                <div className=' flex items-center justify-between'>
                    <div className=' flex items-center gap-3'>
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <h2 className=' font-medium text-sm'>Hitesh Choudhary</h2>
                        <Badge className=' bg-blue-600 text-white px-2 py-1 text-xs rounded-full'>Beginner</Badge>
                    </div>
                </div>
                <div className=' font-bold text-lg'>
                    <span>₹499</span>
                </div>
            </CardContent>
        </Card>
    )
}

export default Course