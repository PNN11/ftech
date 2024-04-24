import { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react'

export type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SwitchProps = DefaultInputPropsType & { label?: string }

const Switch: FC<SwitchProps> = ({ className, name, label = '', checked, ...props }) => {
    return (
        <div className="flex items-center justify-between gap-2.5">
            <label className="cursor-pointer" htmlFor={`${name}-switch`}>
                {label}
            </label>
            <div
                className={`relative inline-block h-4 w-8.5 cursor-pointer rounded-xl 
                transition-all duration-300 content-[''] after:absolute after:top-0.5 after:inline-block after:h-3 after:w-3 after:rounded-full
                after:transition-all after:duration-300 ${
                    checked
                        ? 'after:bg-primary-blue bg-blue-100 after:left-5'
                        : 'after:bg-primary-gray bg-gray-300 after:left-0.5'
                } ${className}`}
            >
                <input
                    {...props}
                    id={`${name}-switch`}
                    type="checkbox"
                    className="absolute inset-0 z-10 h-full w-full cursor-pointer opacity-0"
                />
            </div>
        </div>
    )
}

export default Switch
