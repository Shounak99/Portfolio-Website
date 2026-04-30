const express = require("express");
const app = express();
const cors = require("cors");
app.use(
  cors({
    origin: ["http://localhost:3000", "https://shounaksportfolio.vercel.app/"]}),
);
const PORT = 5000;

app.use(express.json());

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "Personal portfolio built with React and Node.js",
    tech: "React, Node.js, Express",
  },
  {
    id: 2,
    title: "Todo App",
    description: "Task manager with add and delete functionality",
    tech: "React, useState",
  },
  {
    id: 3,
    title: "Weather App",
    description: "Fetches live weather data from an external API",
    tech: "React, REST API",
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
  console.log("Contact form received:", { name, email, message });
  res.json({ success: true, message: `Thanks ${name}, we'll be in touch!` });
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
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
