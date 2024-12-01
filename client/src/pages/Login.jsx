// GENuGTWXU1qtCSW8
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { useRegisterUserMutation, useLoginUserMutation } from "@/features/api/authApi.js"
import { Loader2 } from "lucide-react"
import { useEffect, useState } from "react"
import { toast } from "sonner"

const Login = () => {
    const [signupInput, setSignupInput] = useState({ name: "", email: "", password: "" });
    const [loginInput, setLoginInput] = useState({ email: "", password: "" });

    const [registerUser, { data: registerData, error: registerError, isLoading: registerIsLoading, isSuccess: registerIsSuccess }] = useRegisterUserMutation();
    const [loginUser, { data: loginData, error: loginError, isLoading: loginIsLoading, isSuccess: loginIsSuccess }] = useLoginUserMutation();


    const changeInputHandler = (e, type) => {
        const { name, value } = e.target;
        if (type === 'signup') {
            setSignupInput({ ...signupInput, [name]: value })
        } else {
            setLoginInput({ ...loginInput, [name]: value })
        }
    }
    useEffect(() => {
        if (registerData && registerIsSuccess) {
            toast.success(registerData.message || "Sign Up successful.")
        }
        if (loginData, loginIsSuccess) {
            toast.success(loginData.message || "Login successful.")
        }
        if (registerError) {
            toast.error(registerData.data.message || "Signup Failed")
        }
        if (loginError) {
            toast.error(loginData.data.message || "Login Failed")
        }
    }, [loginIsLoading, registerIsLoading, loginData, registerData, loginError, registerError])
    const handleResistration = async (type) => {
        const inputData = type === "signup" ? signupInput : loginInput;
        const action = type === "signup" ? registerUser : loginUser;
        await action(inputData

        )

    }
    return (
        <div className="flex items-end justify-center w-full mt-20">
            <Tabs defaultValue="account" className="w-[400px]">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="signup">Signup</TabsTrigger>
                    <TabsTrigger value="login">Login</TabsTrigger>
                </TabsList>
                <TabsContent value="signup">
                    <Card>
                        <CardHeader>
                            <CardTitle>Signup</CardTitle>
                            <CardDescription>
                                Create a new account and click signup when you're done.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="space-y-1">
                                <Label htmlFor="name">Name</Label>
                                <Input type='text'
                                    name='name'
                                    value={signupInput.name}
                                    onChange={(e) => changeInputHandler(e, "signup")}
                                    placeholder='Eg. somnath'
                                    required='true'
                                />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="username">Email</Label>
                                <Input
                                    type='email'
                                    name='email'
                                    value={signupInput.email}
                                    onChange={(e) => changeInputHandler(e, "signup")}
                                    placeholder='Eg. somnath@gmail.com'
                                    required='true' />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="username">Password</Label>
                                <Input
                                    type='password'
                                    name='password'
                                    value={signupInput.password}
                                    onChange={(e) => changeInputHandler(e, "signup")}
                                    placeholder='Eg. *******'
                                    required='true' />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button disable={registerIsLoading} onClick={() => handleResistration("signup")}>
                                {
                                    registerIsLoading ? (
                                        <>
                                            <Loader2 className="mr-2 h4 w-4 animate-spin " />
                                        </>
                                    ) : "Sign Up"
                                }
                            </Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
                <TabsContent value="login">
                    <Card>
                        <CardHeader>
                            <CardTitle>Login</CardTitle>
                            <CardDescription>
                                Login your password here. After signup, you'll be logged in.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="space-y-1">
                                <Label htmlFor="username">Email</Label>
                                <Input
                                    type='email'
                                    name='email'
                                    value={loginInput.email}
                                    onChange={(e) => changeInputHandler(e, "login")}
                                    placeholder='Eg. somnath@gmail.com'
                                    required='true' />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="username">Password</Label>
                                <Input
                                    type='password'
                                    name='password'
                                    value={loginInput.password}
                                    onChange={(e) => changeInputHandler(e, "login")}
                                    placeholder='Eg. *******'
                                    required='true' />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button disable={loginIsLoading} onClick={() => handleResistration("login")}>
                                {
                                    loginIsLoading ? (
                                        <>
                                            <Loader2 className="mr-2 h4 w-4 animate-spin " />
                                        </>
                                    ) : "Login"
                                }
                            </Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>

    )
}

export default Login