export type FAQItem = {
    question: string
    answer: string
}

const faqEn: FAQItem[] = [
    {
        question: 'What services do you provide?',
        answer: 'We’re ready to provide development services for web and mobile projects, offer development teams, and much more',
    },
    {
        question: 'What are your core competencies?',
        answer: 'Our core competencies include next domains: fintech, medicine, sport and entertainment, education, industrial and energetics and ecommerce projects. Find more here',
    },
    {
        question: 'How do you estimate the cost of the project?',
        answer: 'At FTECH-IT, the final estimate is clear and transparent. We describe in detail where each dollar of your budget will be sent. We present the project as a set of tasks and subtasks, each of which is estimated in a certain number of hours, with a fixed payment depending on the specialist implementing it. Find here about business analysis',
    },
    {
        question: 'How does the process of cooperation with your company work?',
        answer: "The cooperation process in FTECH-IT begins with discussing the customer's requirements and ends with the transfer of the finished product or service. Feel free to contact us",
    },
    {
        question: 'What guarantees do you provide for your services?',
        answer: 'We provide a guarantee for the quality of the work performed and compliance with deadlines confirmed by years of work and happy clients reviews on Clutch. In  case of unforeseen circumstances, FTECH‑IT carries €250,000 in business risk insurance, ensuring peace of mind for our clients',
    },
]

export const faq: Record<string, FAQItem[]> = { en: faqEn }
