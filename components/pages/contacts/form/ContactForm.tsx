'use client'
import Button from '@/components/ui/buttons/defaultButton/button'
import ReactHookFormInput from '@/components/ui/inputs/hookFormInput/ReactHookFormInput'
import ReactHookFormTextArea from '@/components/ui/inputs/hookFormTextArea/ReactHookFormTextArea'
import { cn } from '@/lib/classNames'
import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

type FormContent = {
    title: string
    subtitle: string
    form: {
        name: string
        email: string
        phone: string
        message: string
        submit: string
        placeholder: string
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
        form: { email, message, name, phone, placeholder, submit },
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
                inputProps={{ placeholder, label: name, inputSize: 'l' }}
            />
            <ReactHookFormInput
                controllerProps={{ control, name: 'email' }}
                inputProps={{ placeholder, label: email, inputSize: 'l' }}
            />
            <ReactHookFormInput
                controllerProps={{ control, name: 'phone' }}
                inputProps={{ placeholder, label: phone, inputSize: 'l' }}
            />
            <ReactHookFormTextArea
                controllerProps={{ control, name: 'message' }}
                inputProps={{ placeholder, label: message, inputSize: 'l' }}
            />

            <Button type="submit">{submit}</Button>
        </form>
    )
}

export default ContactForm
