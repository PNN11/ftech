const case1En = {
    title: 'Lorem ipsum dolor sit amet',
    shortTitle: 'Case 1',
    description:
        'Lorem ipsum dolor sit amet consectetur. Sit fermentum sit sapien justo gravida gravida nec ipsum. Tellus non ullamcorper varius turpis. Viverra leo a non sit in purus vulputate. Odio sed donec facilisis netus. Quis velit cursus.',
    tags: [
        'Real Estate',
        'E-commerce',
        'Edtech',
        'Web 3.0',
        'Healthcare',
        'Fintech',
        'Travel',
        'Logistics',
        'Energetics',
    ],
    features: [
        { value: '120+', text: 'Projects Completed' },
        { value: '120+', text: 'Projects Completed' },
        { value: '120+', text: 'Projects Completed' },
    ],
    href: 'case1',
    image: '/images/home/phone.png',
    location: 'Montreal, Canada',
    clutchReview: 'Lorem ipsum dolor sit amet',
    client: 'NDA',
    budget: 'NDA',
    industry: ['Online dating', 'Social network'],
    environment: ['Flutter'],
    release: '2024',
    problem:
        'Lorem ipsum dolor sit amet consectetur. Amet quam interdum posuere commodo id imperdiet dictumst commodo cursus. Egestas eget ultrices habitasse non. In congue mauris pellentesque molestie egestas eleifend lacus. At velit nulla ipsum egestas suscipit tellus magnis arcu. Interdum et imperdiet commodo malesuada.',
    solution:
        'Lorem ipsum dolor sit amet consectetur. Amet quam interdum posuere commodo id imperdiet dictumst commodo cursus. Egestas eget ultrices habitasse non. In congue mauris pellentesque molestie egestas eleifend lacus. At velit nulla ipsum egestas suscipit tellus magnis arcu. Interdum et imperdiet commodo malesuada.',
    delivering:
        'Lorem ipsum dolor sit amet consectetur. Amet quam interdum posuere commodo id imperdiet dictumst commodo cursus. Egestas eget ultrices habitasse non. In congue mauris pellentesque molestie egestas eleifend lacus. At velit nulla ipsum egestas suscipit tellus magnis arcu. Interdum et imperdiet commodo malesuada.',
    outcome: {
        title: 'Showcasing versatility and ability to adapt to different challenges',
        description:
            'Our projects span various industries, from real estate to technology, showcasing our versatility and expertise',
        features: [
            { value: '90%', text: 'of staff are middle grade and higher ' },
            { value: '120+', text: 'Projects Completed' },
            { value: '5 years', text: "Establishing a solid foundation, we've honed our skills over half a decade" },
        ],
    },
    owner: {
        name: 'Project owner',
        message: 'Lorem ipsum dolor sit amet consectetur. Ultricies consectetur proin vitae sodales.',
    },
}

const casesEn = [case1En]

export const allCases: Record<string, (typeof case1En)[]> = {
    en: casesEn,
}
