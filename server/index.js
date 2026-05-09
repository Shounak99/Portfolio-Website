require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

app.use(
  cors({
    origin: function (origin, callback) {
      if (
        !origin ||
        origin.endsWith(".vercel.app") ||
        origin === "http://localhost:3000"
      ) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  }),
);

const PORT = 5000;

app.use(express.json());

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "Personal portfolio built with React and Node.js",
    tech: "React, Node.js, Express",
    link: "https://github.com/Shounak99/Portfolio-Website",
  },
  {
    id: 2,
    title: "Integrated-Project-Management-Tool",
    description: "Task manager with add and delete functionality",
    tech: "React, useState",
    link: "https://github.com/Shounak99/Integrated-Project-Management-Tool",
  },
];

const skills = [
  { name: "Java", level: "Advanced" },
  { name: "Spring", level: "Advanced" },
  { name: "Node.js", level: "Intermediate" },
  { name: "React", level: "Intermediate" },
  { name: "SQL", level: "Intermediate" },
  { name: "Git", level: "Advanced" },
];

let blogPosts = [
  {
    id: Date.parse("2026-04-26").toString(),
    title: "Day 1: Starting My Portfolio with React",
    content:
      "Today I began building my personal portfolio website using React. I set up the project structure and created the initial components for the homepage. It was exciting to see the first version of my site come together!",
  },
  {
    id: Date.parse("2026-04-27").toString(),
    title: "Day 2: Adding More Features",
    content:
      "Today I added more features to my portfolio website. I implemented a contact form and improved the layout.",
  },
  {
    id: Date.parse("2026-04-28").toString(),
    title: "Day 3: Deploying to Production",
    content:
      "I deployed my portfolio website to a production environment. It's now live and accessible to everyone!",
  },
];

const education = [
  {
    id: 1,
    institution: "National Institute of Technology Warangal",
    degree: "Bachelor of Technology in Mechanical Engineering",
    from: "Aug 2017",
    to: "Jul 2021",
    grade: "CGPA 7.76/10.0",
  },
  {
    id: 2,
    institution: "CBSE 12",
    degree: "Senior Secondary School",
    from: "Apr 2016",
    to: "May 2017",
    grade: "Percentage 96.4%",
  },
  {
    id: 3,
    institution: "CBSE 10",
    degree: "Secondary School",
    from: "Apr 2014",
    to: "May 2015",
    grade: "CGPA 10.0/10.0",
  },
];

const experience = [
  {
    id: 1,
    company: "UKG",
    type: "Full-time",
    location: "Noida, Uttar Pradesh, India · Hybrid",
    roles: [
      {
        title: "Senior Software Engineer (SDE II)",
        from: "Nov 2024",
        to: "Present",
      },
    ],
    description:
      "Designed and implemented key features for UKG's Workforce Management platform, serving 80,000+ enterprise customers globally, using Java, Spring Boot, and Microservices architecture.",
  },
  {
    id: 2,
    company: "TechMojo Solutions",
    type: "Full-time",
    location: "Hyderabad, Telangana, India · On-site",
    roles: [
      {
        title: "Member of Technical Staff",
        from: "Nov 2023",
        to: "Nov 2024",
      },
    ],
    description: "",
  },
  {
    id: 3,
    company: "Capgemini",
    type: "Full-time",
    location: "Chennai, Tamil Nadu, India",
    roles: [
      { title: "Associate Consultant", from: "Aug 2022", to: "Oct 2023" },
      { title: "Senior Software Engineer", from: "Aug 2021", to: "Jul 2022" },
    ],
    description: "Java, Spring Boot and +5 skills",
  },
];

app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.get("/api/projects", (req, res) => {
  res.json(projects);
});

app.get("/api/skills", (req, res) => {
  res.json(skills);
});

app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;
  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: process.env.GMAIL_USER,
    subject: `Portfolio Contact from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  };
  transporter.sendMail(mailOptions, (error) => {
    if (error)
      return res
        .status(500)
        .json({ success: false, message: "Failed to send email" });
    res.json({ success: true, message: `Thanks ${name}, I'll be in touch!` });
  });
});

app.get("/api/blogs", (req, res) => {
  res.json(blogPosts);
});

app.get("/api/blogs/:id", (req, res) => {
  const { id } = req.params;
  res.json(blogPosts.find((post) => post.id === id));
});

app.post("/api/blogs", (req, res) => {
  const { title, content } = req.body;
  const newPost = { id: Date.now().toString(), title, content };
  blogPosts.push(newPost);
  res.status(201).json({ success: true, post: newPost });
});

app.get("/api/experience", (req, res) => {
  res.json(experience);
});

app.get("/api/education", (req, res) => {
  res.json(education);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
