"use client"

import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { useState } from 'react';
import sendEmail from './email';
import { useToast } from './ui/use-toast';
import { Button } from './ui/button';


const Form = ({ children }: { children: React.ReactNode }) => {


    const { toast } = useToast()


    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);


    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            await sendEmail({
                email: email,
                message: message,
            });
            setEmail('');
            setMessage('');
            setIsSuccess(true);
            toast({
                description: "Your message has been sent.",
            });
        } catch (error) {
            console.error('Failed to send email:', error);
            toast({
                description: "Failed to send message. Please try again.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className='z-[100]'>
            <Dialog>
                <DialogTrigger asChild>
                    {children}
                </DialogTrigger>
                {!isSuccess && <DialogContent className="sm:max-w-[525px] bg-white dark:bg-black z-[100]">
                    <DialogHeader>
                        <DialogTitle>Say Hello</DialogTitle>
                        <DialogDescription>

                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                Email
                            </Label>
                            <Input
                                id="name"
                                defaultValue=""
                                type='email'
                                placeholder='Email'
                                className="col-span-3"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="username" className="text-right">
                                Message
                            </Label>
                            <Textarea
                                id="message"
                                defaultValue=""
                                placeholder='Message'
                                className="col-span-3 resize-none"
                                onChange={(e) => setMessage(e.target.value)}
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button onClick={handleSubmit} type="submit" disabled={isSubmitting}>
                            {isSubmitting ? 'Sending...' : 'Send'}
                        </Button>
                    </DialogFooter>
                </DialogContent>}
            </Dialog>
        </div>
    )
}

export default Form