type ValidationResponse = {
    success: boolean
    score: number
    challenge_ts: string
    hostname: string
    'error-codes': string[]
}

const VALIDATE_SCORE_THRESHOLD = 0.5

export const validateRecaptchaToken = async (token: string) => {
    if (process.env.NEXT_PUBLIC_NODE_ENV !== 'production') return true
    try {
        const response = await fetch(
            `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        )

        const data = (await response.json()) as ValidationResponse

        return data.success && data.score > VALIDATE_SCORE_THRESHOLD
    } catch (error) {
        console.error(error)
        return false
    }
}
