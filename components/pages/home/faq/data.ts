export type FAQItem = {
    question: string
    answer: string
}

const faqEn: FAQItem[] = [
    {
        question: 'Question title1',
        answer: 'Lorem ipsum dolor sit amet consectetur. Lacus malesuada nulla blandit sollicitudin. Praesent pharetra ornare neque ut fermentum placerat. Eu ornare cras varius morbi nunc etiam mi at auctor. Viverra ut eu mauris dolor sed. Interdum curabitur ac elementum nibh viverra. Et erat sit.',
    },
    {
        question: 'Question title2',
        answer: 'Lorem ipsum dolor sit amet consectetur. Lacus malesuada nulla blandit sollicitudin. Praesent pharetra ornare neque ut fermentum placerat. Eu ornare cras varius morbi nunc etiam mi at auctor. Viverra ut eu mauris dolor sed. Interdum curabitur ac elementum nibh viverra. Et erat sit.',
    },
    {
        question: 'Question title3',
        answer: 'Lorem ipsum dolor sit amet consectetur. Lacus malesuada nulla blandit sollicitudin. Praesent pharetra ornare neque ut fermentum placerat. Eu ornare cras varius morbi nunc etiam mi at auctor. Viverra ut eu mauris dolor sed. Interdum curabitur ac elementum nibh viverra. Et erat sit.',
    },
    {
        question: 'Question title4',
        answer: 'Lorem ipsum dolor sit amet consectetur. Lacus malesuada nulla blandit sollicitudin. Praesent pharetra ornare neque ut fermentum placerat. Eu ornare cras varius morbi nunc etiam mi at auctor. Viverra ut eu mauris dolor sed. Interdum curabitur ac elementum nibh viverra. Et erat sit.',
    },
    {
        question: 'Question title5',
        answer: 'Lorem ipsum dolor sit amet consectetur. Lacus malesuada nulla blandit sollicitudin. Praesent pharetra ornare neque ut fermentum placerat. Eu ornare cras varius morbi nunc etiam mi at auctor. Viverra ut eu mauris dolor sed. Interdum curabitur ac elementum nibh viverra. Et erat sit.',
    },
]

export const faq: Record<string, FAQItem[]> = { en: faqEn }
