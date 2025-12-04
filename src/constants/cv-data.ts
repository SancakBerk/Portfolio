// CV Data Constants for Berk Sancak
export const personalInfo = {
  name: "Berk Sancak",
  location: "Pendik, Istanbul, Turkey",
  email: "berk.kurumsal@hotmail.com",
  phone: "5516060474",
  linkedin: "in/berk-sancak-5086a2258",
  portfolio: "portfolio-six-ashen-68.vercel.app/",
  github: "SancakBerk"
};

export const summary = {
  title: "Hello! I'm Berk Sancak",
  description: "I'm a dedicated software developer specializing in creating dynamic and scalable web applications. My focus is on delivering high-performance solutions with an emphasis on both functionality and user experience.",
  
  technologies: {
    frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    backend: ["Node.js", "Express.js"],
    database: ["SQL (MySQL, and MS SQL)", "NoSQL", "MongoDB"],
    stateManagement: ["Redux Toolkit"],
    versionControl: ["Git", "GitHub", "Vercel", "Internet Information Services (IIS)"]
  },
  
  whatIDo: [
    "Develop responsive, modern web applications using React and Next.js.",
    "Build robust back-end APIs with Node.js and manage data effectively with SQL databases.",
    "Deploy and manage applications on platforms such as Vercel and IIS, ensuring smooth delivery and uptime.",
    "Prioritize application performance, scalability, and an intuitive user experience.",
    "Continuously adapt to emerging technologies and best practices in software development."
  ]
};

export const references = [
  {
    name: "Emrah Asma",
    company: "UTRUST YAZILIM",
    role: "Senior Developer",
    phone: "+1 289 489 9858",
    email: "emrahasma@gmail.com",
    linkedin: "Emrah Asma"
  },
  {
    name: "Vikesh Dayaram",
    company: "Uwork",
    role: "Project Manager",
    phone: "+61 0416 662 808",
    email: "vikesh.dayaram@icloud.com",
    linkedin: "Vikesh Dayaram"
  },
  {
    name: "Fatih Can Yazıcı",
    company: "Digital Operation Services Inc",
    role: "Mobile Developer",
    phone: "+90 506 439 4231",
    email: "fatih.yazici@dop.com.tr",
    linkedin: "Fatih Can Yazıcı"
  }
];

export const experience = [
  {
    title: "Backend Developer",
    company: "IWWOMI",
    period: "Current",
    location: "",
    description: `At IWWOMI, I worked as a Backend Developer on a project for taxi company owners in Germany. The system was designed to help owners efficiently manage their vehicles, drivers, companies, and income/expenses. I played a key role in designing the project architecture and providing technical leadership to the development team, ensuring that the system was scalable and maintainable.`,
    
    responsibilities: [
      "Implementing rate limiting, validation controls, log monitoring, and creating robust endpoints to support various functionalities.",
      "Performance optimization, integrated Firebase services for real-time updates and notifications, and managed deployment on Google Cloud servers to ensure reliable and scalable operation.",
      "The system's data was stored and managed using MongoDB, allowing for flexible and efficient handling of complex data structures.",
      "Currently developing an order management page for a beauty and wellness company, focusing on building an efficient and user-friendly backend."
    ],
    
    technologies: ["Backend: Node.js", "Database: MongoDB", "Services: Firebase", "Deployment: Google Cloud"],

    projects: [
      {
        name: "Beauty & Wellness Order Management",
        points: [
          "Implemented secure email verification for onboarding customers and dealers.",
          "Built real-time notification flows using Firebase to inform users about new orders, status changes, and critical events.",
          "Designed a multi-tenant structure to manage customer, dealer, and admin applications from a single backend.",
          "Created shared domain model packages to avoid duplication and keep business logic consistent across services.",
          "Integrated multiple payment gateways with a fallback mechanism so that when one provider fails, payments continue through an alternative gateway.",
          "Structured the codebase with clear validation, route, controller, and service layers to maintain a clean and scalable architecture."
        ]
      },
      {
        name: "Taxi Company Management Platform",
        points: [
          "Developed backend modules for managing vehicles, drivers, companies, and financial records.",
          "Designed REST APIs to support dashboards and reporting screens used by company owners.",
          "Improved system reliability with detailed logging, monitoring, and validation layers."
        ]
      },
      
    ]
  },
  {
    title: "Full Stack Web Developer",
    company: "UTrust",
    period: "January 2023 - July 2024",
    location: "Remote/Australia",
    description: `Developing an Auxiliary System for ERP Management. As part of our efforts, we design and develop an auxiliary system that seamlessly integrates with an ERP (Enterprise Resource Planning) system. This solution is engineered to enhance the efficiency of managing and tracking critical operational processes.`,
    
    responsibilities: [
      "Provides robust functionalities for monitoring and managing orders, streamlining operations, and overseeing workforce activities.",
      "Enables precise tracking of order lifecycles, facilitates smooth coordination of operational workflows, and offers real-time insights into employee performance and task assignments.",
      "Empower organizations to optimize their processes, boost productivity, and handle data-driven decisions with confidence."
    ],
    
    technologies: [
      "Front-End: React, enhanced with modern tools such as Tailwind CSS and Syncfusion for advanced UI components.",
      "Back-End: Nest.js, offering a scalable and modular server-side architecture.",
      "Database: MS SQL, ensuring robust and reliable data storage and retrieval.",
      "State Management: Redux Toolkit for efficient state management, ensuring scalability across the frontend.",
      "Deployment: The system is deployed and managed on Internet Information Services (IIS), ensuring stable, secure, and accessible hosting within enterprise environments."
    ],

    projects: [
      {
        name: "ERP Auxiliary Order Tracking",
        points: [
          "Implemented order lifecycle tracking screens tightly integrated with the core ERP system.",
          "Modelled and managed detailed assignment data such as assignee, working hours, and which person is responsible for which task at which time.",
          "Designed scheduling logic that keeps related (connected) jobs in sync when dates or deadlines are updated.",
          "Used Redux Toolkit on the frontend to handle complex UI state, including order filters, selections, and real-time status changes.",
          "Collaborated with the frontend team to define clear, type-safe API contracts between UI and backend.",
          "Optimized complex queries and API endpoints to keep performance stable under enterprise-level load."
        ]
      }
    ]
  },
  {
    title: "Web Developer",
    company: "PITON TECHNOLOGY",
    period: "December 2023 - February 2024",
    location: "Turkey, Eskişehir",
    description: `Developed a book page as part of the project, focusing on building an engaging and responsive frontend.`,
    
    technologies: [
      "Next.js: Utilized for server-side rendering (SSR) and static site generation (SSG), ensuring fast performance and SEO optimization for the page.",
      "Redux Toolkit: Integrated for efficient state management, allowing seamless data handling across components.",
      "TailwindCSS: Applied for styling to create a visually appealing, responsive, and consistent user interface."
    ],

    projects: [
      {
        name: "Book Listing Web Page",
        points: [
          "Built a responsive book listing interface with filters and clean layout.",
          "Improved UX with fast navigation and clear content hierarchy.",
          "Collaborated with the team to align UI implementation with design requirements."
        ]
      }
    ]
  },
  {
    title: "Web Developer",
    company: "Berkay Tulpar Clinic",
    period: "July 2023 - September 2023",
    location: "İstanbul",
    description: `Web development work for Berkay Tulpar Clinic.`,
    technologies: ["Next.js", "Node.js"],

    projects: [
      {
        name: "Clinic Website",
        points: [
          "Contributed to building the clinic's promotional website.",
          "Ensured the site was responsive and accessible on different devices."
        ]
      }
    ]
  }
];

export const articles = [
  {
    slug: "solving-mongo-model-instance-problem",
    title: "MongoDB Model Instance Problemini Çözme: 3 Proje 1 Model",
    date: "2025-12-04",
    readingTime: "8 min read",
    tags: ["mongodb", "nodejs", "backend", "problem-solving"],
    excerpt:
      "3 farklı backend projesinde tek bir model paketi kullanırken yaşadığım response timeout sorununu ve çözüm yolumu paylaşıyorum.",
    codeExamples: [
      `
// Problem: Farklı instance'lar
// Project A
const mongooseA = require('mongoose');
mongooseA.connect('mongodb://localhost/project-a');
const UserModelA = mongooseA.model('User', userSchema);

// Project B  
const mongooseB = require('mongoose');
mongooseB.connect('mongodb://localhost/project-b');
const UserModelB = mongooseB.model('User', userSchema); // FARKLI INSTANCE!

// Project C
const mongooseC = require('mongoose');
mongooseC.connect('mongodb://localhost/project-c');
const UserModelC = mongooseC.model('User', userSchema); // FARKLI INSTANCE!
`,
      `
// Solution: Shared Model Package
// shared-models/package.js
let mongooseInstance = null;
let models = {};

const getModels = (mongoose) => {
  if (!mongooseInstance || mongooseInstance !== mongoose) {
    mongooseInstance = mongoose;
    models = {};
    
    // Modelleri aynı instance ile oluştur
    models.User = mongooseInstance.model('User', userSchema);
    models.Product = mongooseInstance.model('Product', productSchema);
    models.Order = mongooseInstance.model('Order', orderSchema);
  }
  
  return models;
};

module.exports = { getModels };
`,
      `
// Usage in Projects
// project-a/app.js
const mongoose = require('mongoose');
const { getModels } = require('shared-models');

mongoose.connect('mongodb://localhost/project-a');
const models = getModels(mongoose); // Aynı instance'ı kullan

// project-b/app.js  
const mongoose = require('mongoose');
const { getModels } = require('shared-models');

mongoose.connect('mongodb://localhost/project-b');
const models = getModels(mongoose); // Aynı instance'ı kullan
`,
      `
// Advanced Solution with Connection Pool
// shared-models/index.js
class ModelManager {
  constructor() {
    this.connections = new Map();
    this.models = new Map();
  }
  
  getModels(mongoose, connectionName) {
    const connectionKey = mongoose.connection.id;
    
    if (!this.models.has(connectionKey)) {
      const models = {};
      
      // Tüm modelleri aynı connection ile oluştur
      models.User = mongoose.model('User', userSchema);
      models.Product = mongoose.model('Product', productSchema);
      models.Order = mongoose.model('Order', orderSchema);
      
      this.models.set(connectionKey, models);
    }
    
    return this.models.get(connectionKey);
  }
  
  clearModels(connectionName) {
    const connectionKey = connectionName;
    this.models.delete(connectionKey);
  }
}

const modelManager = new ModelManager();
module.exports = modelManager;
      `
    ],
    content:
      "## Problem: 3 Proje, 1 Model Paketi ve Timeout Hataları\n\nGerçek bir projede karşıma çıkan ve bir süre uğraşmamı gerektiren bir teknik problemdi. 3 farklı backend projesi geliştiriyordum ve hepsinde aynı veri modellerini kullanmak istiyordum. Kod tekrarını önlemek için tüm modelleri ve DTO'ları içeren ortak bir paket oluşturdum, ancak bu yaklaşımın bazı beklenmedik yan etkileri oldu.\n\n### Senaryo\n\n- **Project A**: Customer management system\n- **Project B**: Order processing system  \n- **Project C**: Analytics dashboard\n\nHer proje aynı User, Product, Order modellerini kullanıyordu. Mantıklı görünüyordu: ortak bir `shared-models` paketi oluştur ve tüm projeler bunu kullansın.\n\n### Karşılaştığım Sorun\n\nProjeleri deploy ettikten bir süre sonra, zaman zaman timeout hataları almaya başladım. Ayrıntılı log analizleri ve denemeler sonrasında sorunun, farklı projelerin aynı veritabanına farklı mongoose instance'ları üzerinden bağlanmasından kaynaklandığını gördüm.\n\nSonuç olarak:\n- Aynı veritabanına 3 farklı instance'tan erişim denemesi\n- Connection pool üzerinde gereksiz yük\n- Zaman zaman response timeout'ları\n\n### Çözüm Fikri\n\nÖnce basit bir static instance yaklaşımı denedim, ancak bu yöntem multi-threading / multi-process senaryolarında sorun çıkardı. Daha sonra **instance-aware** bir yapı kurup, her connection için modelleri kontrollü bir şekilde üretmeye karar verdim.\n\nBu yazıda sadece fikrin kendisine odaklanıyorum; teknik detaylar için sağ tarafta yer alan kod bloklarına bakabilirsiniz:\n\n- **Code Snippet 1**: Farklı mongoose instance'ları ile ortaya çıkan problem senaryosu\n- **Code Snippet 2**: Basit `shared-models` paketinin nasıl kurgulandığı\n- **Code Snippet 3**: Connection pool ve model yönetimini daha ileri seviyede ele alan, connection-aware çözüm\n\n### Neden Önemli?\n\nBu deneyim bana özellikle üç konuda çok şey öğretti:\n\n1. **Connection management**: MongoDB connection'larının stateful olduğunu ve projeler arası nasıl paylaşılmaması gerektiğini\n2. **Instance awareness**: Her mongoose instance'ının aslında bağımsız bir dünya olduğunu\n3. **Model lifecycle**: Modelleri ne zaman, hangi connection üzerinden oluşturduğumun uzun vadeli performans ve hata senaryolarını doğrudan etkilediğini\n\n### Sonuç\n\nBugün benzer bir yapıyı tasarlarken, önce domain modelini, sonra connection yönetimini, en sonunda da kod organizasyonunu planlıyorum. Kod tarafındaki tüm detayları sağdaki **Code Snippet** panellerinde görebilirsiniz; burada ise daha çok kararların arkasındaki düşünce sürecini paylaşmak istedim.\n\n#MongoDB #NodeJS #BackendDevelopment #ProblemSolving #SoftwareArchitecture"
  }
];

export const projects = [
  {
    title: "Expense Saving Tracker Web App",
    type: "Personal",
    url: "expensexavingtracker-git-main-sancakberks-projects.vercel.app/",
    description: `Personal Finance & Goal Tracking Web Application. Developed a full-stack web application to help users manage their financial goals and track savings across multiple assets. The frontend was built with Next.js, while the backend leveraged Next.js API routes, and Firebase Firestore was used for database management.`,
    
    features: [
      "Set personal financial goals and calculate required monthly savings based on goal targets.",
      "Track accumulated savings in various forms, including gold, stocks, mutual funds, Turkish Lira (TL), Euro, and gold karat values.",
      "Monitor and visualize progress, adjusting contributions according to real-time asset values."
    ],
    
    technologies: [
      "Frontend: Next.js",
      "Backend: Next.js API Routes",
      "Database: Firebase Firestore"
    ]
  },
  {
    title: "Portfolio",
    type: "Personal",
    url: "portfolio-six-ashen-68.vercel.app/",
    description: `Personal Projects Showcase Website. Developed a personal website to showcase my individual projects, technical expertise, and professional background. This platform highlights my skills in software development, including front-end and back-end technologies, and provides detailed descriptions of projects I have worked on.`,
    
    features: [
      "The website serves as an interactive portfolio, featuring live demos, source code links, and case studies of my work.",
      "It reflects my commitment to continuous learning and demonstrates my ability to apply technical skills to solve real-world problems."
    ],
    
    technologies: [
      "Front-End: React, TypeScript, Tailwind CSS, Framer Motion",
      "Back-End: Node.js, Express",
      "Hosting: Vercel/Netlify (or your hosting platform)",
      "Version Control: Git, GitHub"
    ]
  },
  {
    title: "Diabetes Prediction Using Machine Learning in Pattern Recognition",
    type: "Course Project",
    institution: "ESOGU",
    description: `Pattern Recognition Course Project. As part of the Pattern Recognition course, we developed a machine learning-based classification model to predict whether individuals are diabetic based on medical data.`,
    
    features: [
      "Used supervised learning algorithms such as Logistic Regression and Decision Trees.",
      "Evaluated model performance using accuracy, precision, recall, and F1-score metrics.",
      "The project involved data preprocessing, feature selection, model training, and performance analysis, reinforcing my understanding of applying machine learning techniques to real-world health data classification problems."
    ]
  },
  {
    title: "Image Enhancement Using EnlightenGAN for Low-Light Image Correction",
    type: "Course Project",
    institution: "ESOGU",
    description: `EnlightenGAN Low-Light Image Enhancement Project. In this project, we utilized EnlightenGAN, a deep learning-based generative adversarial network (GAN), to enhance low-light images by adjusting brightness and illumination levels.`,
    
    features: [
      "The primary goal was to improve the visual quality of dark images captured in poor lighting conditions.",
      "Focused on training the model, preprocessing visual data, and evaluating the enhancement results.",
      "This work provided valuable experience in deep learning, computer vision, and real-world image processing applications."
    ]
  },
  {
    title: "Book Web",
    company: "PITON Technology",
    url: "book-web-two.vercel.app/",
    description: `This was my internship project, where we developed a web page to list books, focusing on creating an engaging and responsive frontend. The page was designed to provide a smooth and intuitive user experience, with fast loading times and clear navigation.`,
    
    technologies: [
      "React: For building interactive UI components and managing component-based architecture.",
      "Next.js (SSR & SSG): Implemented server-side rendering and static site generation to improve performance, SEO, and overall page load speed.",
      "Redux Toolkit: Used for efficient state management, ensuring seamless data flow between components.",
      "TailwindCSS: Applied for responsive and visually appealing styling, maintaining design consistency across the page."
    ]
  }
];

export const education = [
  {
    degree: "Computer Engineering",
    institution: "Eskişehir Osmangazi University",
    location: "Turkey, Eskişehir",
    period: ""
  },
  {
    degree: "Graduated High School",
    institution: "Eca Elginkan Anadolu Lisesi",
    location: "",
    period: ""
  }
];

export const certifications = [
  {
    title: "Help Eachother Blind People Organisation",
    issuer: "",
    date: "2018",
    description: `We developed an audio library project designed to support visually impaired individuals by providing them with accessible educational and literary content. As part of a volunteer initiative, we recorded and organized a collection of books and educational materials in audio format, making them available for blind and visually impaired users. The project aimed to promote equal access to information, support independent learning, and enhance the quality of life for individuals with visual disabilities. This experience helped me understand the social impact of technology and the importance of inclusive digital solutions.`
  },
  {
    title: "Tübitak Bilim Fuarları Katılım Belgesi",
    issuer: "",
    date: "2018",
    description: ""
  },
  {
    title: "Sosyal Etkinlik Başarı Belgesi",
    issuer: "Eca Elginkan Anadolu Lisesi",
    date: "2017",
    description: ""
  }
];

export const coursework = [
  {
    title: "React JS : Uygulamalı React JS -Redux Eğitimi (2023 Güncel)",
    issuer: "Udemy",
    description: `This course provided a comprehensive introduction to React JS and Redux, focusing on hands-on learning and real-world applications.`,
    
    keyLearnings: [
      "React Fundamentals: Gained a deep understanding of components, props, state, and the component lifecycle.",
      "Modern Features: Learned how to implement Hooks and React Router for advanced functionality.",
      "Redux Toolkit: Mastered efficient state management using Redux and its modern Toolkit for scalable applications.",
      "Integration: Explored integration with third-party libraries and tools to enhance application performance.",
      "Best Practices: Developed skills for writing clean, reusable, and maintainable code.",
      "Testing and Optimization: Learned debugging, performance tuning, and testing methods for React apps."
    ]
  },
  {
    title: "Node.js ile Sıfırdan İleri Seviye Web Geliştirme",
    issuer: "Udemy",
    description: `Applied advanced Node.js skills to design, develop, and deploy scalable, high-performance web applications. Starting from scratch, I built complete back-end systems that efficiently handle data processing, API creation, and real-time communication.`,
    
    applications: [
      "Server-Side Development: Built RESTful APIs endpoints to manage complex business logic and interact with databases effectively.",
      "Real-Time Functionality: Implemented WebSocket communication for live data updates, such as chat applications and real-time dashboards.",
      "Middleware Integration: Used Express.js for handling middleware functions, authentication, and request routing.",
      "Database Connectivity: Established secure and optimized connections with MySQL.",
      "Error Handling and Optimization: Ensured robust error-handling mechanisms and optimized server performance for a seamless user experience."
    ]
  },
  {
    title: "Flutter Bootcamp Programı | Dart",
    issuer: "",
    date: "2024",
    description: ""
  },
  {
    title: "React Native Expo",
    issuer: "YouTube",
    date: "2023",
    description: ""
  },
  {
    title: "Sıfırdan İleri Düzey Web Geliştirme (HTML, CSS, Javascript)",
    issuer: "Udemy",
    date: "2022",
    description: ""
  }
];

export const involvement = [
  {
    organization: "IEEE Eskişehir Osmangazi University",
    role: "",
    period: "n/a - n/a",
    description: `At IEEE, I conducted training sessions on HTML, CSS, and JavaScript, guiding participants through the fundamentals of web development. I focused on teaching how to structure web pages with HTML, style them using CSS, and add interactivity with JavaScript. Additionally, I provided hands-on exercises and real-world examples to help attendees apply their knowledge effectively.`
  }
];

export const skills = [
  "React", "Next.js", "Tailwind CSS", "TypeScript", "Redux Toolkit", 
  "Nestjs", "MySQL", "SQL", "NOSQL", "MongoDB", "Firebase", "Node.js", 
  "JS", "HTML", "CSS", "JavaScript", "Git", "Github", "Framer Motion", 
  "Internet Information Service(IIS)", "Deployment", "Rate Limiting", 
  "Monitoring System Integrate", "Performance Optimisation"
];

// SEO and Meta Data
export const seoData = {
  title: "Berk Sancak | My Personal Portfolio | Fullstack Web Developer",
  description: "Welcome to your gateway to the dynamic world of web development. Dive into a digital realm where my coding and design expertise creates exceptional UI/UX.",
  canonical: "https://portfolio-six-ashen-68.vercel.app/",
  keywords: "berk sancak, sancakberk, portfolio, fullstack web developer, software developer, react, next.js, node.js, web development",
  author: "Berk Sancak",
  publisher: "Berk Sancak",
  twitter: {
    site: "@SancakBerk",
    creator: "@SancakBerk"
  }
};
