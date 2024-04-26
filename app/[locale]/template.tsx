'use client'
import { useApplyTheme } from '@/stores/theme'
import React, { FC, ReactNode } from 'react'

const Template: FC<{ children: ReactNode }> = ({ children }) => {
    useApplyTheme()

    return <>{children}</>
}

export default Template
