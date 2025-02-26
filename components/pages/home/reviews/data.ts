type Review = {
    image: string
    name: string
    text: string
}

const reviewsEn: Review[] = [
    {
        image: '/images/home/reviews/vincenzo-nuzzo.png',
        name: 'Vincenzo Nuzzo',
        text: 'FTECH-IT successfully launched the app on time and within budget, achieving a high retention rate and stable user experience. The team resolved bugs within 48 hours and maintained a high level of professionalism. Their structured approach and proactive communication fostered a collaborative process.',
    },
    {
        image: '/images/home/reviews/hleb-skuratau.jpg',
        name: 'Hleb Skuratau',
        text: "FTECH Solutions LLC has delivered a reliable working tool that aligns with the client's processes. The team has completed the project on time and provided the technical description of the deliverables. FTECH Solutions LLC has maintained close communication and delivered quality work.",
    },
]

export const reviews: Record<string, Review[]> = { en: reviewsEn }
