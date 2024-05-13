'use client'
import TitleWithDescription from '@/components/ui/TitleWithDescription'
import Button from '@/components/ui/buttons/defaultButton/button'
import Input from '@/components/ui/inputs/defaultInput/input'
import TextArea from '@/components/ui/inputs/defaultTextArea/textArea'
import React from 'react'
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

const ContactForm = () => {
    const { t } = useTranslation()
    const {
        form: { email, message, name, phone, placeholder, submit },
        subtitle,
        title,
    } = t('first-section', { returnObjects: true }) as FormContent

    const { register, handleSubmit } = useForm<FormValues>({
        defaultValues: { email: '', message: '', name: '', phone: '' },
    })

    return (
        <div>
            <TitleWithDescription classes={{ wrapper: 'text-left', title: 'mb-9' }} title={title} subtitle={subtitle} />
            <form
                onSubmit={handleSubmit(data => {
                    console.log(data)
                })}
                className="flex flex-col gap-9"
            >
                <Input placeholder={placeholder} {...register('name')} label={name} inputSize="l" />
                <Input placeholder={placeholder} {...register('email')} label={email} inputSize="l" />
                <Input placeholder={placeholder} {...register('phone')} label={phone} inputSize="l" />
                <TextArea placeholder={placeholder} {...register('message')} label={message} inputSize="l" />
                <Button type="submit">{submit}</Button>
            </form>
        </div>
    )
}

export default ContactForm
