import { ComponentProps, FC } from 'react'

const CasesStar: FC<ComponentProps<'svg'>> = props => {
    return (
        <svg width="103" height="103" viewBox="0 0 103 103" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                d="M23.47 49.6224C36.9831 48.5414 47.7809 37.9352 49.1036 24.4436L51.5 0L54.4393 24.9843C55.9974 38.2278 66.6788 48.535 79.9694 49.62L103 51.5L78.2895 55.0301C65.7898 56.8157 56.0317 66.7466 54.4655 79.2757L51.5 103L49.0881 79.8455C47.7547 67.0447 37.8667 56.8013 25.1209 55.0169L0 51.5L23.47 49.6224Z"
                fill="currentColor"
            />
        </svg>
    )
}

export default CasesStar
