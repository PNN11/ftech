import { ComponentProps, FC } from 'react'
import { UseControllerProps, useController } from 'react-hook-form'
import TextArea from '../defaultTextArea/textArea'

type ReactHookFormTextAreaProps = {
    inputProps: ComponentProps<typeof TextArea>
    controllerProps: UseControllerProps<any>
}

const ReactHookFormTextArea: FC<ReactHookFormTextAreaProps> = ({ controllerProps, inputProps }) => {
    const { field, fieldState } = useController(controllerProps)

    return <TextArea {...inputProps} {...field} />
}

export default ReactHookFormTextArea
