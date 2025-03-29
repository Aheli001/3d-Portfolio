import { cognizant, pamprazzi, iema } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    baby,
    summiz,
    tailwindcss,
    sort,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "SDE Intern",
        company_name: "IEMA Research & Development",
        icon: iema,
        iconBg: "#c6e8ef",
        date: "Oct 2024 - Present",
        points: [
            "Contributing to the development of internal tools and libraries to improve developer productivity.",
            "Troubleshooting and debugging issues in production applications.",
            "Participating in team meetings and contributing to the overall success of the team.",
            "Mentoring junior developers and providing guidance on best practices.",
        ],
    },
    {
        title: "SDE Intern",
        company_name: "Pamprazzi",
        icon: pamprazzi,
        iconBg: "#e8d0e0",
        date: "May 2024 - Sept 2024",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality product.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Systems Engineer",
        company_name: "Cognizant",
        icon: cognizant,
        iconBg: "#bbcced",
        date: "Sept 2022 - Oct 2023",
        points: [
            "Reduced load times by 40% through application performance monitoring and optimization strategies.",
            "Improved workflow automation with tailored SAP ABAP modules, raising user satisfaction scores by 25% within six months.",
            "Streamlined data migration processes, achieving a 30% reduction in project timelines.",
            "Collaborated with cross-functional teams to define project requirements and deliver innovative solutions.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: baby,
        theme: 'btn-back-pink',
        name: 'EmoBaby: AI-Powered Baby Emotion Detection',
        description: 'An interactive and user-friendly frontend for the Baby Emotion Model, designed to analyze and visualize newborn emotions in real time.',
        link: 'https://github.com/Aheli001/Babyemo',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-green',
        name: 'NeoEmote: Smart Emotion Recognition for Infants',
        description: 'Model capable of detecting and classifying newborn baby emotions',
        link: 'https://github.com/Aheli001/baby-emotion-recognition',
    },
    {
        iconUrl: sort,
        theme: 'btn-back-blue',
        name: 'SortEase: Interactive Sorting Algorithm Visualizer',
        description: 'This will help to understand by visualizing various sorting techniques through real-time animations.',
        link: 'https://github.com/Aheli001/sorting_visualizer',
    },
];