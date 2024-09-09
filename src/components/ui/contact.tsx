import React from 'react';
import { cn } from '../../lib/utils';
import { Label } from "./label";
import { Input } from "./input";
import { EmailSubmitButton } from './email-submit-button';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LabelInputContainer = ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full text-wrap", className)}>
      {children}
    </div>
  );
};

export const Contact = () => {
  return (
    <div id="contact" className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-[4rem] md:p-8 shadow-input bg-black">
      <h2 className="font-light text-3xl text-neutral-200">
        Reach Out to Us
      </h2>
      <p className=" text-sm max-w-sm mt-2 text-neutral-300 font-light">
        Have questions? Send us an email here!
      </p>
      <Formik
        validateOnChange={false}
        validateOnBlur={false}   
        initialValues={{ 
          firstName: '',
          lastName: '',
          email: '',
          subject: '',
          message: '',
          access_key: process.env.GATSBY_WEB3_API_KEY!,
        }}
        validationSchema={Yup.object({
          firstName: Yup.string().max(20, '20 character limit').required('Required'),
          lastName: Yup.string().max(20, '20 character limit').required('Required'),
          email: Yup.string().max(50, '50 character limit').email('Invalid email address').required('Required'),
          subject: Yup.string().max(50, '50 character limit').required('Required'),
          message: Yup.string().max(5000, '5000 character limit').required('Required'),
        })}
        onSubmit={async values => {
          try {
            const response = await fetch(process.env.GATSBY_WEB3_API_URL!, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
              },
              body: JSON.stringify(values),
              signal: AbortSignal.timeout(5000)
            });
            if (!response.ok) {
              const json = await response.json();
              throw new Error(`A ${response.status} error has occured: ${json.message}`);
            }
            toast.success("Email sent successfully!");
          } catch (error: any) {
            console.error(error);
            toast.error("Email submission failed. Please retry.");
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form className="my-8">
            <input type="checkbox" name="botcheck" id="" className="hidden"/>
            <div className="flex flex-col"> 
              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                <LabelInputContainer>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input className="h-6 overflow-hidden resize-none whitespace-nowrap" id="firstName" placeholder="First Name" type="text" name="firstName" />
                </LabelInputContainer>
                <LabelInputContainer>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input className="h-6 overflow-hidden resize-none whitespace-nowrap" id="lastName" placeholder="Last Name" type="text" name="lastName" />
                </LabelInputContainer>
              </div>
              <LabelInputContainer className="mb-4">
                <Label htmlFor="email">Email</Label>
                <Input className="h-6 overflow-hidden resize-none whitespace-nowrap" id="email" placeholder="Enter your email address here." type="email" name="email" />
              </LabelInputContainer>
              <LabelInputContainer className="mb-4">
                <Label htmlFor="subject">Subject</Label>
                <Input className="h-6 overflow-hidden resize-none whitespace-nowrap" id="subject" placeholder="Enter your email subject here." type="subject" name="subject" />
              </LabelInputContainer>
              <LabelInputContainer className="mb-4 text-wrap h-[10rem]">
                <Label htmlFor="message">Message</Label>
                <Input className="h-[8rem]" id="message" placeholder="Tell us about your problem! We'll be glad to help out." type="message" name="message"/>
              </LabelInputContainer> 
              <EmailSubmitButton className="h-10" type="submit" disabled={isSubmitting}>
                Send Email
              </EmailSubmitButton>
            </div>
          </Form>
        )}
      </Formik>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
    </div>
  );
};
