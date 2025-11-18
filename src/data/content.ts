import {
  Cloud,
  Code2,
  Database,
  FolderKanban,
  GitBranch,
  Home,
  Mail,
  Server,
  Shield,
  Terminal,
  User,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const navLinks = [
  { href: "hero", label: "Home", icon: Home },
  { href: "about", label: "About", icon: User },
  { href: "projects", label: "Projects", icon: FolderKanban },
  { href: "contact", label: "Contact", icon: Mail },
];

export const projects = [
  {
    title: "Online Appointment Booking System",
    description: "A secure booking platform with role-based access for administrators and users.",
    tech: ["ASP.NET Core", "Angular", "SQL Server"],
    category: "Full Stack Applications",
    link: "#",
  },
  {
    title: "E-Commerce Web Application",
    description: "An end-to-end online shop featuring OTP login, product management, and Razorpay integration.",
    tech: ["ASP.NET Core", "Angular", "Razorpay"],
    category: "Web Development",
    link: "#",
  },
  {
    title: "Employee Timesheet & Leave Tracker",
    description: "An HR automation tool for tracking employee hours and managing leave requests with reporting features.",
    tech: ["ASP.NET MVC", "Angular"],
    category: "Enterprise Tools",
    link: "#",
  },
];

export const projectCategories = ["All", "Web Development", "Full Stack Applications", "Enterprise Tools"];

export type Skill = {
  name: string;
  icon: LucideIcon;
};

export type SkillCategoryMap = Record<string, Skill[]>;

export const skills: SkillCategoryMap = {
  "Frontend & UX": [
    { name: "React", icon: Code2 },
    { name: "TypeScript", icon: Terminal },
    { name: "Responsive UI", icon: Shield },
  ],
  "Backend & APIs": [
    { name: ".NET Core", icon: Server },
    { name: "REST APIs", icon: Cloud },
    { name: "SQL Server", icon: Database },
  ],
  "Collaboration & Quality": [
    { name: "Git & Branching", icon: GitBranch },
    { name: "Automation", icon: Terminal },
    { name: "Code Reviews", icon: Shield },
  ],
};
