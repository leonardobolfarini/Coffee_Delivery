import React, { LegacyRef, forwardRef } from "react"
import { InputBox, InputField } from "./styles"
import { FieldError } from "react-hook-form"

type TextInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    optional?: boolean
    containerProps?: React.HTMLAttributes<HTMLDivElement>
    error?: FieldError
}

export const TextInput = forwardRef(function TextInput(
    { optional, containerProps, ...rest }: TextInputProps,
    ref: LegacyRef<HTMLInputElement>,){
    return(
        <InputBox {...containerProps}>
            <InputField>
                <input
                    type="text"
                    ref={ref}
                    {...rest}
                />
                {optional ? <span>Opcional</span>: null}
            </InputField>     
        </InputBox>   
    )
})