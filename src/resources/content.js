import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Sumita",
  lastName: "Pathak",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Developer",
  avatar: "/images/avatar.jpg",
  email: "httpsumita@gmail.com",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Bengali","Hindi"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/httpsumita",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/sumita-pathak-91699a215/",
  },
  // {
  //   name: "Threads",
  //   icon: "threads",
  //   link: "https://www.threads.com/@once_ui",
  // },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${ person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between design and code</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Once UI</strong></>,
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Selene, a design engineer at <Logo icon="/trademarks/wordmark-dark.svg" style={{ display: "inline-flex", top: "0.25em", marginLeft: "-0.25em" }}/>, where I craft intuitive
      <br /> user experiences. After hours, I build my own projects.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/httpsumita",
  },
  resume: {
    display: true,
    link: "https://drive.google.com/file/d/1jMt0dP6blpk8B5mYW2q6JjzqoWNIwxzX/view?usp=sharing",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Sumita is an undergraduate student pursuing her B.Tech. degree in Computer Science and Engineering with a specialization in Artificial Intelligence
         and Machine Learning (AI & ML)
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Deepwater",
        timeframe: "February-April 2025",
        role: "Full Stack Web Developer (Freelancer)",
        achievements: [
          <>
            Developed responsive web interfaces using Next.js, Tailwind CSS, TypeScript, and reusable React components
            reducing code redundancy by 30%
          </>,
          <>
            Integrated dynamic modals and contact forms with Appwrite backend, enabling secure and real-time data
            handling
          </>,
          <>
            Streamlined local-to-production deployment with DNS setup, port forwarding, and SSL configuration,
            accelerating delivery by 40%.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "WIT Dreamin'",
        timeframe: "July-November 2024",
        role: "Backend Developer",
        achievements: [
          <>
            Automated CI/CD pipelines using GitHub Actions, reducing manual deployment time by 30%
          </>,
          <>
            Containerized using Docker, reducing deployment failures by 60% and increasing environment consistency
          </>,
          <>
            Deployed and maintained AWS EC2 instances, achieving 95% uptime and optimizing server performance.
          </>,
        ],
        images: [],
      },
      {
        company: "FilmFinance.App",
        timeframe: "August 2023-August 2024",
        role: "Product Manager",
        achievements: [
          <>
            Implemented an agile project management system that redefined task assignment and accountability
across diverse teams; led to a notable 25% increase in project completion rates within designated timelines.
          </>,
          <>
            Conducted online events and crafted social media posts to spread knowledge about legality of
cryptocurrency
          </>,
         
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Dr. Sudhir Chandra Sur Institute of Technology and Sports Complex",
        description: <>B.Tech, Computer Science & Engineering (AIML) </>,
      },
      {
        name: "Hariyana Vidya Mandir(CBSE)",
        description: <>12th standard</>,
      },
      {
        name: "St Joan’s School(ICSE)",
        description: <>10th Standard</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Skillset",
    skills: [
      {
        title: "Programming Languages ",
        description: <></>,
        // optional: leave the array empty if you don't want to display images
        images: [
          { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", alt: "Python" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg", alt: "Java" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/solidity/solidity-original.svg", alt: "Solidity" },
        ],
      },
      {
        title: "Tools and Technologies",
        description: <> Gemini AI | Vertex AI 
</>,
        // optional: leave the array empty if you don't want to display images
        images: [
           { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain-wordmark.svg", alt: "django" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/djangorest/djangorest-original.svg", alt: "django-rest" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", alt: "Nextjs" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg", alt: "TailwindCSS" },
             { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-plain-wordmark.svg", alt: "git" },
              { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg", alt: "Github" },
              { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg", alt: "Linux" },
              { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg", alt: "Postman" },
               { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original-wordmark.svg", alt: "Docker" },
                { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg", alt: "GCP" },
                 { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", alt: "AWS" },
                     
                      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg", alt: "nginx" },
                     
                        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg", alt: "OpenCV" },

        ],
      },
       {
        title: "Concepts",
        description: <>Prompt Engineering | API
</>,
        // optional: leave the array empty if you don't want to display images
        images: [
         
        ],
      },
       {
        title: "Soft Skills",
        description: <>Adaptability | Agile Methodologies | Leadership | Public Speaking | Event Management
</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          
        ],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "MOD, Money & Mindset",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
