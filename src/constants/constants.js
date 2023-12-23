import { design, engineering, projectManagement, clientapproach, 
    resultdriven, expertise, collaborative, JohnSmith, 
} from "../assets/Home"

export const navLinks = [
    {
        id: 'home',
        label: 'Home',
        path: '/'
    },
    {
        id: 'services',
        label: 'Services',
        path: '/services'
    },
    {
        id: 'works',
        label: 'Works',
        path: '/works'
    },
    {
        id: 'process',
        label: 'Process',
        path: '/process'
    },
    {
        id: 'careers',
        label: 'Careers',
        path: '/careers'
    },
    {
        id: 'about',
        label: 'About',
        path: '/about'
    },
]

export const OurServices = [
    {
        id: 1,
        icon: design,
        title: 'Design',
        desc: `At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences.`,
    },
    {
        id: 2,
        icon: engineering,
        title: 'Engineering',
        desc: `Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs.`,
    },
    {
        id: 3,
        icon: projectManagement,
        title: 'Project Management',
        desc: `Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process.`,
    },
]

export const WhyChooseUsReasons = [
    {
        id:1,
        icon: expertise,
        title: 'Expertise' ,
        desc:  `Our team consists of highly skilled professionals who have a deep understanding of the digital landscape. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions.`
    },
    {
        id:2,
        icon: clientapproach,
        title: 'Client-Centric Approach' ,
        desc:  `We prioritize our clients and their unique needs. We listen to your ideas, challenges, and goals, and tailor our services to meet your specific requirements. Your success is our success.`
    },
    {
        id:3,
        icon: resultdriven,
        title: 'Collaborative Partnership' ,
        desc:  `Our primary focus is on delivering results. We combine creativity and technical expertise to create digital products that drive business growth, enhance user experiences, and provide a competitive advantage.`
    },
    {
        id:4,
        icon: collaborative,
        title: 'Results-Driven Solutions' ,
        desc:  `We value long-term relationships with our clients. We see ourselves as your digital partner, providing ongoing support, maintenance, and updates to ensure your digital products continue to thrive.`
    },
]

export const ClientTestimonials = [
    {
        id: 1,
        image: JohnSmith,
        name: 'John Smith',
        designation: 'CEO of Chic Boutique',
        heading: 'SquareUp has been Instrumental in Transforming our Online Presence. ',
        content: ` Their team's expertise in web development and design resulted in a visually stunning and user-friendly e-commerce platform. Our online sales have skyrocketed, and we couldn't be happier. `
    },
    {
        id: 2,
        image: SarahJohnson,
        name: 'Sarah Johnson',
        designation: 'Founder of HungryBites.',
        heading: 'Working with SquareUp was a breeze.',
        content: `They understood our vision for a mobile app that streamlined our food delivery service. The app they delivered exceeded our expectations, and our customers love the seamless ordering experience. SquareUp is a trusted partner we highly recommend.`
    },
    {
        id: 3,
        image: MarkThompson,
        name: 'Mark Thompson',
        designation: 'CEO of EventMasters',
        heading: 'SquareUp developed a comprehensive booking and reservation system for our event management company',
        content: `Their attention to detail and commitment to delivering a user-friendly platform was evident throughout the project. The system has streamlined our operations and enhanced our clients' event experiences.`
    }
]