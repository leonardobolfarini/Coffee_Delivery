import React, { LegacyRef, forwardRef } from "react";
import { Container } from "./styles";

type PaymentRadioOptionProps = React.InputHTMLAttributes<HTMLInputElement> & {
    isSelected: boolean
}

export const PaymentRadioOption = forwardRef(function PaymentRadioOption(
    { isSelected, children, ...rest }: PaymentRadioOptionProps,
    ref: LegacyRef<HTMLInputElement>
    ){
    return(
        <Container data-state={isSelected}>
            <input
                type="radio"
                ref={ref}
                {...rest}
            />
            {children}
        </Container>
    )
})