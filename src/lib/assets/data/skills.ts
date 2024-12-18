import type Skill from "../models/skill";

export const skills: Skill[] = [
  // Level 5
  { name: "UX/UI Design", level: 5, visible: true },
  { name: "User Story Mapping", level: 5, visible: true },
  { name: "Accessibility (WCAG)", level: 5, visible: true },
  { name: "HTML", level: 5, visible: false },
  { name: "CSS3", level: 5, visible: false },
  { name: "Prototyping (Low-Fi/High-Fi)", level: 5, visible: false },
  { name: "User Testing and Analysis", level: 5, visible: false },
  { name: "User Research", level: 5, visible: false },
  { name: "Figma", level: 5, visible: true },
  { name: "Responsive Design", level: 5, visible: false },
  { name: "Interaction Design", level: 5, visible: false },

  { name: "UX Design", level: 5, visible: false },
  { name: "System Development", level: 5, visible: false },
  { name: "Availability Testing", level: 5, visible: false },
  { name: "Agile Development (Scrum, Kanban)", level: 5, visible: false },
  { name: "Process Mapping", level: 5, visible: false },
  {
    name: "Accessibility Testing (Web, Android, iOS)",
    level: 5,
    visible: false,
  },
  {
    name: "Adobe Suite (Illustrator, Photoshop, XD)",
    level: 5,
    visible: false,
  },
  { name: "Sketch", level: 5, visible: false },
  { name: "HTML5", level: 5, visible: false },
  { name: "SCSS/SASS", level: 5, visible: false },
  { name: "UML", level: 5, visible: false },
  {
    name: "User-Centered Design & Product Development",
    level: 5,
    visible: false,
  },
  { name: "Requirements Analysis", level: 5, visible: false },
  { name: "Wireframes / Mockups", level: 5, visible: false },
  { name: "Test of Usability (A/B Testing)", level: 5, visible: false },
  { name: "Microsoft Visio", level: 5, visible: false },
  { name: "Visual Studio Code", level: 5, visible: false },
  { name: "Journey Mapping", level: 5, visible: false },
  { name: "Flowcharting", level: 5, visible: false },

  // Level 4
  { name: "Vue 3", level: 4, visible: true },
  { name: "Vue.js", level: 4, visible: false },
  { name: "ASP.NET MVC", level: 4, visible: false },
  { name: "Entity Framework", level: 4, visible: false },
  { name: "VoiceOver", level: 4, visible: false },
  { name: "TalkBack", level: 4, visible: false },
  { name: "RESTful APIs", level: 4, visible: false },
  { name: "JIRA", level: 4, visible: false },
  { name: "Trello", level: 4, visible: false },
  { name: "Miro", level: 4, visible: false },
  { name: "JavaScript", level: 4, visible: true },
  { name: "TypeScript", level: 4, visible: true },
  { name: "React.js", level: 4, visible: true },
  { name: ".Net", level: 4, visible: false },
  { name: ".Net Core", level: 4, visible: true },
  { name: "C#", level: 4, visible: false },
  { name: "UI Design", level: 4, visible: false },
  { name: "Frontend Development", level: 4, visible: false },
  { name: "Design Systems", level: 4, visible: false },
  { name: "Git", level: 4, visible: false },
  { name: "GitHub", level: 4, visible: false },
  { name: "DevOps", level: 4, visible: false },
  { name: "MySQL", level: 4, visible: false },
  { name: "MS SQL", level: 4, visible: true },
  { name: "Axure", level: 4, visible: false },
  { name: "Web Forms", level: 4, visible: false },
  { name: "Design Thinking", level: 4, visible: false },
  { name: "Material Design", level: 4, visible: false },
  { name: "Windows", level: 4, visible: false },
  { name: "Business Development", level: 4, visible: false },
  { name: "Cross-Browser Compatibility", level: 4, visible: false },
  { name: "Version Control (Git)", level: 4, visible: false },
  { name: "ESLint", level: 4, visible: false },
  { name: "Color Theory", level: 4, visible: false },
  { name: "Generative AI", level: 4, visible: false },
  { name: "Tailwind CSS", level: 4, visible: true },

  // Other levels
  { name: "SVN", level: 3, visible: false },
  { name: "Tortoise", level: 3, visible: false },
  { name: "NPM", level: 3, visible: false },
  { name: "Webpack", level: 3, visible: false },
  { name: "Three.js", level: 3, visible: false },
  { name: "Bootstrap", level: 3, visible: false },
  { name: "AWS", level: 3, visible: true },
  { name: "Microsoft Azure", level: 3, visible: true },
  { name: "Nuxt.js", level: 3, visible: false },
  { name: "Angular", level: 3, visible: false },
  { name: "Node.js", level: 3, visible: false },
  { name: "Express.js", level: 3, visible: false },
  { name: "Visual Studio", level: 3, visible: false },

  { name: "CMS", level: 3, visible: false },
  { name: "LINQ", level: 3, visible: false },
  { name: "Copywriting", level: 3, visible: false },
  { name: "AJAX", level: 3, visible: false },
  { name: "jQuery", level: 3, visible: false },
  { name: "Android Studio", level: 3, visible: false },
  { name: "MAC", level: 3, visible: false },
  { name: "Integration", level: 3, visible: false },
  { name: "Domain-Driven Development", level: 3, visible: false },
  { name: "E-commerce Platforms", level: 3, visible: false },
  { name: "Information Architecture", level: 3, visible: false },
  { name: "Python", level: 3, visible: false },
  { name: "Microinteractions", level: 3, visible: false },
  { name: "Sitevision", level: 3, visible: false },
  { name: "Pyramid", level: 2, visible: false },
  { name: "PHP 7", level: 2, visible: false },
  { name: "SQL Server Management Studio", level: 2, visible: false },
  { name: "SAFe (Scaled Agile Framework)", level: 2, visible: false },
  { name: "Manufacturing Industry", level: 2, visible: false },
  { name: "Healthcare Industry", level: 2, visible: false },
  { name: "Window Manufacturing", level: 2, visible: false },
  { name: "Babel", level: 2, visible: false },
  {
    name: "Logistics & Warehouse Management Systems (WMS)",
    level: 2,
    visible: false,
  },
  { name: "Microsoft IIS", level: 2, visible: false },
  { name: "Cypress", level: 2, visible: false },
  { name: "Jest", level: 2, visible: false },
  { name: "InVision", level: 2, visible: false },
  { name: "Terraform", level: 1, visible: false },
  { name: "Linux", level: 1, visible: false },
  { name: "Entertainment Industry", level: 1, visible: false },
  { name: "GraphQL", level: 1, visible: false },
];

export default skills;