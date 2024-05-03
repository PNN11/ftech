type Review = {
    image: string
    name: string
    text: string
}

const reviewsEn: Review[] = [
    {
        image: '/images/home/avatar_review_1.png',
        name: 'John Doe1',
        text: 'Lorem ipsum dolor sit amet consectetur. Mi lacus congue eget quis feugiat magna praesent suscipit sem. Enim faucibus',
    },
    {
        image: '/images/home/avatar_review_1.png',
        name: 'John Doe2',
        text: 'Lorem ipsum dolor sit amet consectetur. Mi lacus congue eget quis feugiat magna praesent suscipit sem. Enim faucibus',
    },
    {
        image: '/images/home/avatar_review_1.png',
        name: 'John Doe3',
        text: 'Lorem ipsum dolor sit amet consectetur. Mi lacus congue eget quis feugiat magna praesent suscipit sem. Enim faucibus',
    },
]

export const reviews: Record<string, Review[]> = { en: reviewsEn }
