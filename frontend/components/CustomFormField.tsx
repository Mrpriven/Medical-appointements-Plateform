'use client'

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { FormFieldType } from "./forms/PatientForm"
import { Label } from "@radix-ui/react-label"
import Image from "next/image";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'


interface CustomPrpos {
    control: Control<any>,
    fieldType: FormFieldType,
    name: string,
    label?: string,
    placeholder?: string,
    iconSrc?: string,
    iconAlt?: string,
    disabled?: boolean;
    dateFormat?: string;
    showTimeSelect?: boolean;
    children?: React.ReactNode;
    renderSkeleton?: (field: any) => React.ReactNode;
}
const RenderField = ({field, props}:{field: any; props:CustomPrpos}) =>{
  const {fieldType, iconSrc, iconAlt, placeholder}= props;
  switch(fieldType){
    case FormFieldType.INPUT:
      return (
        <div className="flex rounded-md border border-dark-500 bg-dark-400">
          {iconSrc && (
            <Image 
            src={iconSrc}
            height={24}
            width={24}
            alt={iconAlt || 'icon'}
            className="ml-2"
            />
          )}
          <FormControl>
            <Input
            placeholder={placeholder}
            {...field}
            className="shad-input border-0"
            />
          </FormControl>
        </div>
      )
    case FormFieldType.PHONE_INPUT:
      return(
        <FormControl>
          <PhoneInput
          defaultCountry="TN"
          international
          placeholder={placeholder}
          withCountryCallingCode
          value={field.value }
          onChange={field.onChange}
          className="input-phone"
          />
        </FormControl>
      )
  }
}
const CustomFormField = (props: CustomPrpos) => {
  const {control, fieldType, name, label} = props;
  return (
    <FormField
        control={control}
        name={name}
        render={({ field }) => (
        <FormItem className="flex-1">
            {fieldType !==FormFieldType.CHECKBOX && label && (
                <FormLabel> {label} </FormLabel>
            )}
            <RenderField field={field} props={props} />
            <FormMessage className="shad-error" />
        </FormItem>
            )}

        />
  )
}

export default CustomFormField