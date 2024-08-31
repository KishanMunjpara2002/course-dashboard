const courses = [
  {
    id: 1,
    name: "React Fundamentals",
    instructor: "John Doe",
    description: "Learn React from scratch!",
    enrollmentStatus: "Open",
    thumbnail:
      "https://miro.medium.com/v2/resize:fit:1400/1*x0d41ns8PTQZz4a3VbMrBg.png",
    duration: "6 weeks",
    schedule: "Mon, Wed, Fri - 6 PM",
    location: "Online",
    prerequisites: ["Basic JavaScript"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to React",
        content: "Overview of React.",
      },
      { week: 2, topic: "Components", content: "Understanding components." },
    ],
    popularity: 100,
  },
  {
    id: 2,
    name: "Advanced JavaScript",
    instructor: "Jane Smith",
    description: "Dive deeper into JavaScript.",
    enrollmentStatus: "Closed",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    duration: "8 weeks",
    schedule: "Tue, Thu - 7 PM",
    location: "Online",
    prerequisites: ["Intermediate JavaScript"],
    syllabus: [
      {
        week: 1,
        topic: "Asynchronous JavaScript",
        content: "Promises and async/await.",
      },
      {
        week: 2,
        topic: "JavaScript Patterns",
        content: "Module and revealing module patterns.",
      },
    ],
    popularity: 80,
  },
  {
    id: 3,
    name: "Introduction to Python",
    instructor: "Emily Davis",
    description: "Learn Python programming from the basics.",
    enrollmentStatus: "Open",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Python_logo_01.svg/2048px-Python_logo_01.svg.png",
    duration: "10 weeks",
    schedule: "Mon, Wed - 5 PM",
    location: "Online",
    prerequisites: ["None"],
    syllabus: [
      {
        week: 1,
        topic: "Python Basics",
        content: "Variables, data types, and operators.",
      },
      { week: 2, topic: "Control Flow", content: "Conditionals and loops." },
    ],
    popularity: 120,
  },
  {
    id: 4,
    name: "Machine Learning with TensorFlow",
    instructor: "Michael Lee",
    description: "Understand machine learning algorithms and models.",
    enrollmentStatus: "Open",
    thumbnail:
      "https://cdn.dribbble.com/userupload/7371615/file/original-9504309f5d7388e9f84c4a7fddcf93f9.jpg?resize=400x0g",
    duration: "12 weeks",
    schedule: "Tue, Thu - 6 PM",
    location: "Online",
    prerequisites: ["Basic Python knowledge"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Machine Learning",
        content: "Supervised and unsupervised learning.",
      },
      {
        week: 2,
        topic: "TensorFlow Basics",
        content: "Building your first neural network.",
      },
    ],
    popularity: 150,
  },
  {
    id: 5,
    name: "Web Development Bootcamp",
    instructor: "Sarah Brown",
    description:
      "A comprehensive bootcamp covering front-end and back-end development.",
    enrollmentStatus: "Open",
    thumbnail:
      "https://imgcdn.stablediffusionweb.com/2024/4/19/8d8322c5-e13d-44f7-b927-cef21d498703.jpg",
    duration: "14 weeks",
    schedule: "Mon-Fri - 9 AM",
    location: "Online",
    prerequisites: ["None"],
    syllabus: [
      { week: 1, topic: "HTML & CSS", content: "Building static web pages." },
      {
        week: 2,
        topic: "JavaScript & React",
        content: "Creating interactive web applications.",
      },
    ],
    popularity: 200,
  },
  {
    id: 6,
    name: "Data Science Essentials",
    instructor: "Olivia White",
    description: "Learn data science techniques and tools.",
    enrollmentStatus: "Open",
    thumbnail:
      "https://www.dasca.org/Content/images/main/data-science-the-essential-tool-for-business-success.jpg",
    duration: "8 weeks",
    schedule: "Mon, Wed - 6 PM",
    location: "Online",
    prerequisites: ["Basic Statistics"],
    syllabus: [
      {
        week: 1,
        topic: "Data Analysis",
        content: "Using Python for data analysis.",
      },
      {
        week: 2,
        topic: "Data Visualization",
        content: "Creating visualizations with Matplotlib.",
      },
    ],
    popularity: 90,
  },
  {
    id: 7,
    name: "UI/UX Design",
    instructor: "Alex Green",
    description: "Master the principles of UI/UX design.",
    enrollmentStatus: "Open",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKRK2iQzTt-RsNQLONtf4G-28LjS-bRCACfA&s",
    duration: "6 weeks",
    schedule: "Tue, Thu - 7 PM",
    location: "Online",
    prerequisites: ["None"],
    syllabus: [
      {
        week: 1,
        topic: "Design Principles",
        content: "Understanding UI/UX fundamentals.",
      },
      {
        week: 2,
        topic: "Wireframing & Prototyping",
        content: "Creating wireframes and prototypes.",
      },
    ],
    popularity: 110,
  },
  {
    id: 8,
    name: "Cloud Computing with AWS",
    instructor: "Sophia Clark",
    description: "Learn how to use AWS for cloud computing.",
    enrollmentStatus: "Open",
    thumbnail:
      "https://static.vecteezy.com/system/resources/previews/006/030/600/non_2x/abstract-cloud-logo-blue-shape-cloud-computing-isolated-on-white-background-usable-for-business-and-technology-logos-flat-logo-design-template-element-vector.jpg",
    duration: "8 weeks",
    schedule: "Mon, Wed - 6 PM",
    location: "Online",
    prerequisites: ["Basic IT knowledge"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to AWS",
        content: "Overview of AWS services.",
      },
      {
        week: 2,
        topic: "Deploying Applications",
        content: "Deploying and managing applications on AWS.",
      },
    ],
    popularity: 130,
  },
  {
    id: 9,
    name: "Cybersecurity Basics",
    instructor: "James Turner",
    description: "Learn the fundamentals of cybersecurity.",
    enrollmentStatus: "Open",
    thumbnail:
      "https://media.istockphoto.com/id/1383553886/vector/abstract-banner-cyber-security-in-3d-style-communication-technology-database-system.jpg?s=612x612&w=0&k=20&c=H_EGuMLGF8qTCp_aqYHIyYgUUz-V66gSGffmHV8elOw=",
    duration: "7 weeks",
    schedule: "Tue, Thu - 5 PM",
    location: "Online",
    prerequisites: ["Basic IT knowledge"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Cybersecurity",
        content: "Understanding security concepts.",
      },
      {
        week: 2,
        topic: "Network Security",
        content: "Protecting network infrastructure.",
      },
    ],
    popularity: 70,
  },
  {
    id: 10,
    name: "Digital Marketing",
    instructor: "Ella Wilson",
    description: "Learn the strategies and tools of digital marketing.",
    enrollmentStatus: "Open",
    thumbnail:
      "https://i.pinimg.com/originals/83/6c/d2/836cd27d3bf3d81122d089088f60d60f.jpg",
    duration: "6 weeks",
    schedule: "Mon, Wed - 7 PM",
    location: "Online",
    prerequisites: ["None"],
    syllabus: [
      {
        week: 1,
        topic: "SEO Basics",
        content: "Understanding SEO techniques.",
      },
      {
        week: 2,
        topic: "Social Media Marketing",
        content: "Strategies for social media.",
      },
    ],
    popularity: 140,
  },
];

export default courses;
