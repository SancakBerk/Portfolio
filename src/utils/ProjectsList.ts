import {
    HtmlIcon, CssIcon, JsIcon, ReactIcon, NodeIcon, TsIcon, NextIcon, MysqlIcon, MongoIcon, GdriveIcon, SocketIoIcon, RestApiIcon, PhpIcon, ViteIcon, NextAuthIcon, ReduxIcon, TailwindIcon, ZustandIcon, AstroIcon, NanostoresIcon, D3JsIcon,FirebaseIcon, ReactQueryIcon, EdgeStoreIcon
} from "../assets/Icons"

import {
    NextmartLogo, ArmsLogo, ArmsPhpLogo, ClimateLogo, CovidtraxLogo, DaysbeyondLogo, FilmstackLogo, PikturesLogo, SrinivasLogo, XReconLogo, YoatubeLogo, VortexaLogo
} from "../assets/Logos"

import {
    ExpenseSavingTrackerImage, Armsv1Shots, Armsv2Shots, ClimateShots, CovidTraxShots, DaysbeyondShots, Azure, PikturesShots, SrinivasShots, XreconShots, YoatubeShots, PersonalPortfolio, Armsv3Shots
} from "../assets/Shots"

import {
    ARMSv1Mockup, ARMSv2Mockup, ClimateMockup, DaysbeyondMockup, SrinivasMockup, VortexaMockup, XreconMockup, YoatubeMockup
} from "../assets/Mockup"


type ProjectsListType = {
    Name: string,
    ShortDesc: string,
    Desc: string,
    Logo: ImageMetadata,
    Shot: ImageMetadata,
    Mockup: ImageMetadata,
    Theme: string,
    Status: string,
    Link: string,
    Source: string,
    Demo?: {
        email: string,
        password: string
    },
    Tech: {
        title: string,
        description: string,
        icon: ImageMetadata
    }[],
    features: {
        title: string,
        description: string
    }[],
    hideProject: boolean,
    LogoSize: number,
    versions: {
        title: string,
        version: string
    }[]
}[]

// -- PROJECTS TEMPLATE --
// {
//     Name: "TITLE",
//     ShortDesc: "SHORT_DESCRIPTION",
//     Desc: "DESCRIPTION",
//     Logo: LOGO_URL,
//     Shot: SCREENSHOT_URL,
//     Mockup: MOCKUP_URL,
//     Theme: "PROJECT_THEME_COLOR_HEX",
//     Status: "completed OR development",
//     Link: "PROJECT_URL",
//     Source: "GITHUB_URL",
//     Demo?: { 
//         email: "DEMO_EMAIL", 
//         password: "DEMO_PASSWORD" 
//     },
//     Tech: [TECH_ICONS_URL],
//     features: [{
//         title: "FEATURE_TITLE",
//         description: "FEATURE_DESCRIPTION"
//     }],
//     hideProject: false,
//     LogoSize: 50,
//     versions: [{ 
//         title: "PREV_PROJECT_TITLE", 
//         version: "VERSION_NO" 
//     }]
// },

const TechInfo = {
    HTML: {
        title: "HTML",
        description: "HyperText Markup Language for creating the structure of web pages.",
        icon: HtmlIcon
    },
    CSS: {
        title: "CSS",
        description: "Cascading Style Sheets for styling the presentation of HTML documents.",
        icon: CssIcon
    },
    JavaScript: {
        title: "JavaScript",
        description: "High-level scripting language for adding interactivity to web pages.",
        icon: JsIcon
    },
    React: {
        title: "React",
        description: "JavaScript library for building user interfaces with reusable components.",
        icon: ReactIcon
    },
    Node: {
        title: "Node.js",
        description: "JavaScript runtime for server-side applications, enabling scalable and event-driven architecture.",
        icon: NodeIcon
    },
    TypeScript: {
        title: "TypeScript",
        description: "A superset of JavaScript adding static typing for building large-scale applications with enhanced maintainability and tooling support.",
        icon: TsIcon
    },
    Next: {
        title: "Next.js",
        description: "A React framework for server-side rendering, static site generation, and routing, offering improved performance and SEO optimization.",
        icon: NextIcon
    },
    MySQL: {
        title: "MySQL",
        description: "Open-source relational database management system for storing and managing structured data.",
        icon: MysqlIcon
    },
    MongoDB: {
        title: "MongoDB",
        description: "NoSQL database offering flexibility and scalability for storing and managing data efficiently.",
        icon: MongoIcon
    },
    GDrive: {
        title: "Google Drive API",
        description: "RESTful API for integrating Google Drive functionalities such as file storage and synchronization into applications.",
        icon: GdriveIcon
    },
    SocketIO: {
        title: "Socket.IO",
        description: "Real-time bidirectional communication library for building interactive web applications.",
        icon: SocketIoIcon
    },
    RESTAPI: {
        title: "REST API",
        description: "Architectural style for designing networked applications with standardized HTTP operations.",
        icon: RestApiIcon
    },
    Vite: {
        title: "Vite",
        description: "Modern build tooling for web development with rapid startup and hot module replacement.",
        icon: ViteIcon
    },
    NextAuth: {
        title: "NextAuth.js",
        description: "Authentication library designed specifically for Next.js applications, providing robust authentication features and seamless integration.",
        icon: NextAuthIcon
    },
    Redux: {
        title: "Redux",
        description: "Predictable state management library for JavaScript applications, enabling developers to write consistent, scalable code with ease.",
        icon: ReduxIcon
    },
    TailwindCSS: {
        title: "Tailwind CSS",
        description: "A utility-first CSS framework providing pre-designed, atomic-level utility classes for rapid UI development with minimal CSS code.",
        icon: TailwindIcon
    },
    ReactQuery: {
        title: "React Query",
        description: "React library for managing, caching, and synchronizing server state in web applications, providing a powerful and intuitive API for fetching and updating data.",
        icon: ReactQueryIcon
    },
    Firebase: {
        title: "Firebase",
        description: "Platform by Google for building web and mobile applications with real-time database, authentication, and hosting services.",
        icon: FirebaseIcon
    }
};

// Common Features List
const FeatureList = {
    Responsive: {
        title: "Responsive Design",
        description: "Enjoy a seamless experience across devices with a responsive design that adapts to various screen sizes and orientations."
    },
    SEO: {
        title: "SEO Optimization",
        description: "Crafted with SEO best practices, ensuring optimal visibility on search engines. From keyword-rich content to streamlined meta tags and efficient site architecture."
    }
}

export const ProjectsList: ProjectsListType = [
    {
        Name: "Expense Saving Tracker",
        ShortDesc: "Personal finance & goal tracking web application to help users manage financial goals and track savings across multiple assets.",
        Desc: "Personal Finance & Goal Tracking Web Application. Developed a full-stack web application to help users manage their financial goals and track savings across multiple assets. The frontend was built with Next.js, while the backend leveraged Next.js API routes, and Firebase Firestore was used for database management.",
        Logo: ExpenseSavingTrackerImage,
        Shot: ExpenseSavingTrackerImage,
        Mockup: ExpenseSavingTrackerImage,
        Theme: "#090b0b",
        Status: "completed",
        Link: "https://expensexavingtracker-git-main-sancakberks-projects.vercel.app/",
        Source: "https://github.com/SancakBerk/ExpenseSavingTracker",
        Tech: [TechInfo.Next, TechInfo.TypeScript, TechInfo.TailwindCSS, TechInfo.Firebase],
        features: [
            {
                title: "Financial Goal Setting",
                description: "Set personal financial goals and calculate required monthly savings based on goal targets."
            },
            {
                title: "Multi-Asset Tracking",
                description: "Track accumulated savings in various forms, including gold, stocks, mutual funds, Turkish Lira (TL), Euro, and gold karat values."
            },
            {
                title: "Progress Visualization",
                description: "Monitor and visualize progress, adjusting contributions according to real-time asset values."
            },
            FeatureList.Responsive,
            FeatureList.SEO
        ],
        hideProject: false,
        LogoSize: 50,
        versions: []
    },
    {
        Name: "Personal Portfolio",
        ShortDesc: "Interactive portfolio website showcasing projects, technical expertise, and professional background with live demos and case studies.",
        Desc: "Personal Projects Showcase Website. Developed a personal website to showcase my individual projects, technical expertise, and professional background. This platform highlights my skills in software development, including front-end and back-end technologies, and provides detailed descriptions of projects I have worked on.",
        Logo: PersonalPortfolio,
        Shot: PersonalPortfolio,
        Mockup: PersonalPortfolio,
        Theme: "#fff",
        Status: "completed",
        Link: "https://portfolio-six-ashen-68.vercel.app/",
        Source: "https://github.com/SancakBerk/portfolio",
        Tech: [ TechInfo.React, TechInfo.TypeScript, TechInfo.TailwindCSS],
        features: [
            {
                title: "Project Showcase",
                description: "Interactive portfolio featuring live demos, source code links, and detailed case studies of my work."
            },
            {
                title: "Technical Skills Display",
                description: "Comprehensive display of software development skills, including front-end and back-end technologies."
            },
            {
                title: "Professional Background",
                description: "Detailed presentation of work experience, education, and technical expertise."
            },
            FeatureList.Responsive,
            FeatureList.SEO
        ],
        hideProject: false,
        LogoSize: 50,
        versions: []
    },
    {
        Name: "Cosmetics E-commerce Platform",
        ShortDesc: "Full-stack e-commerce platform for a cosmetics company, with modern storefront and admin dashboards for managing products, orders, and customers.",
        Desc: "Full-stack web application developed for a cosmetics company, covering both the public storefront and internal admin panels. The frontend is built with Next.js for SSR/SSG and optimized UX, while the backend uses Node.js APIs with MongoDB for product, order, and customer data. Firebase is used for authentication and secure access control between admin and customer flows.",
        Logo: Azure,
        Shot: Azure,
        Mockup: Azure,
        Theme: "#ddd",
        Status: "development",
        Link: "https://azure-octopus-148720.hostingersite.com/",
        Source: "https://github.com/SancakBerk/",
        Tech: [TechInfo.Next, TechInfo.Node, TechInfo.MongoDB, TechInfo.Firebase, TechInfo.TailwindCSS],
        features: [
            {
                title: "Product & Inventory Management",
                description: "Admin dashboards to create, update, and categorize cosmetic products, manage stock levels, and control visibility on the storefront."
            },
            {
                title: "Secure Authentication & Roles",
                description: "Authentication and role-based access control for admins and customers using Firebase and protected API routes."
            },
            {
                title: "Order Tracking & Customer Experience",
                description: "End-to-end shopping flow with cart, checkout, and order tracking, designed to provide a fast and intuitive user experience."
            },
            FeatureList.Responsive,
            FeatureList.SEO
        ],
        hideProject: false,
        LogoSize: 50,
        versions: []
    }
]