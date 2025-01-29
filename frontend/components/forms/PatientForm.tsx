"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "@/node_modules/react-hook-form/dist"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {Form} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import CustomFormField from "../CustomFormField"
import SubmitButton from "../SubmitButton"
import { useState } from "react"
import {UserFormValidation} from "@/lib/validation"
import { create } from "domain"

export enum FormFieldType{
  INPUT= 'input',
  TEXTAREA= 'textarea',
  CHECKBOX= 'checkbox',
  PHONE_INPUT= 'phoneInput',
  DATE_PICKER= 'datePicker',
  SELECT= 'select',
  SKELETON= 'skeleton',
}
 

 
const PatientForm = () => {
  const [isLoading, setIsLoading]= useState(false);

  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      name: "",
      email:"",
      phone:"",
    },
  })
 
  async function onSubmit({name,email,phone}: z.infer<typeof UserFormValidation>) {
    setIsLoading
    try {
      //const userData ={name,email,phone};
      //const user = await createUser(userData);
    } catch (error) {
      console.log(error)
    }

  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex-1 space-y-10">
        <section className="mb-12 space-y-10">
          <h1 className="header">Hi there 👋</h1>
          <p className="text-dark-700">Get started with appointments.</p>
        </section>
        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="name"
          label="Full name"
          placeholder="write your full name"
          iconSrc="/assets/icons/user.svg"
          iconAlt="user"
        />
        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="email"
          label="Email"
          placeholder="write your Email"
          iconSrc="/assets/icons/email.svg"
          iconAlt="email"
        />
        <CustomFormField
          fieldType={FormFieldType.PHONE_INPUT}
          control={form.control}
          name="phone"
          label="Phone Number"
          placeholder="+216 xx xxx xxx"
        />
        <SubmitButton isLoading={isLoading}> Get Started </SubmitButton>
      </form>
    </Form>
  )
}

export default PatientForm