import React, { ComponentProps, FC } from 'react'
import Input from '../defaultInput/input'
import { UseControllerProps, useController } from 'react-hook-form'

type ReactHookFormInputProps = {
    inputProps: ComponentProps<typeof Input>
    controllerProps: UseControllerProps<any>
}

const ReactHookFormInput: FC<ReactHookFormInputProps> = ({ controllerProps, inputProps }) => {
    const { field, fieldState } = useController(controllerProps)

    return <Input {...inputProps} {...field} error={fieldState.invalid ? fieldState.error?.message : undefined} />
}

export default ReactHookFormInput
