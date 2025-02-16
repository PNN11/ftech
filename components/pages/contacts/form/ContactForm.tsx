'use client'
import Button from '@/components/ui/buttons/defaultButton/button'
import ReactHookFormInput from '@/components/ui/inputs/hookFormInput/ReactHookFormInput'
import ReactHookFormTextArea from '@/components/ui/inputs/hookFormTextArea/ReactHookFormTextArea'
import { cn } from '@/lib/classNames'
import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

type FieldInfo = { label: string; placeholder: string }

type FormContent = {
    title: string
    subtitle: string
    form: {
        name: FieldInfo
        email: FieldInfo
        phone: FieldInfo
        message: FieldInfo
        submit: string
    }
}

type FormValues = {
    name: string
    email: string
    phone: string
    message: string
}

type ContactFormProps = {
    classes?: { wrapper?: string }
}

const ContactForm: FC<ContactFormProps> = ({ classes }) => {
    const { t } = useTranslation()
    const {
        form: { email, message, name, phone, submit },
    } = t('first-section', { returnObjects: true }) as FormContent

    const { handleSubmit, control, reset, formState } = useForm<FormValues>({
        defaultValues: { email: '', message: '', name: '', phone: '' },
    })

    return (
        <form
            onSubmit={handleSubmit(data => {
                console.log(data)
                reset()
            })}
            className={cn('flex flex-col gap-9', classes?.wrapper)}
        >
            <ReactHookFormInput
                controllerProps={{ control, name: 'name' }}
                inputProps={{ placeholder: name.placeholder, label: name.label, inputSize: 'l' }}
            />
            <ReactHookFormInput
                controllerProps={{ control, name: 'email' }}
                inputProps={{ placeholder: email.placeholder, label: email.label, inputSize: 'l' }}
            />
            <ReactHookFormInput
                controllerProps={{ control, name: 'phone' }}
                inputProps={{ placeholder: phone.placeholder, label: phone.label, inputSize: 'l' }}
            />
            <ReactHookFormTextArea
                controllerProps={{ control, name: 'message' }}
                inputProps={{ placeholder: message.placeholder, label: message.label, inputSize: 'l' }}
            />

            <Button type="submit">{submit}</Button>
        </form>
    )
}

export default ContactForm
