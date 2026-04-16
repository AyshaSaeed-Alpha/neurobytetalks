# NeuroByteTalks 

[NeuroByteTalks](https://neurotalks.vercel.app/)is a article publishing platform designed for creating, managing, and reading digital content. It is built as an MVP with a strong focus on clean architecture, scalability, and user-friendly content management.

Users can register and log in using email-based authentication. Once authenticated, they can create, edit, and manage their blog posts through a rich writing interface. Each post is uniquely identified using a slug for clean routing and SEO-friendly URLs.

The platform supports a complete publishing workflow where posts can be saved as drafts or published. Only published posts are visible to the public, while drafts remain private to the author for editing and updates.

Access control ensures that only the original author of a post can edit or delete it, maintaining secure ownership and data integrity across the platform.

---

## Tech Stack

- React (Frontend UI)
- Vite (Build tool and development environment)
- Tailwind CSS (Styling framework)
- Redux Toolkit (State management)
- React Router DOM (Routing system)
- React Hook Form (Form handling)
- TinyMCE (Rich text editor)
- Appwrite (Authentication and backend services)
- MongoDB (Database)
- Cloudinary (Image storage and optimization)
- HTML React Parser (HTML rendering)
- Node.js ecosystem (Supporting backend logic)

---

## Features

- User authentication with email-based login and signup
- Secure JWT-based session handling
- Create, edit, and delete blog posts
- Rich text editor for advanced content creation
- Image upload and storage using Cloudinary
- Slug-based dynamic routing for posts
- Draft and published post states
- Public visibility only for published content
- Author-only access for editing and deleting posts
- Responsive and clean UI built with Tailwind CSS
- Scalable architecture suitable for MVP and production growth

---

## Project Overview

NeuroByteTalks is designed as a foundation for a scalable content publishing system. It demonstrates modern full-stack development practices including authentication, state management, content workflows, and media handling.

The system is structured to support future enhancements such as analytics, comment systems, content moderation, and multi-author publishing environments.

This project represents a complete MVP-level blogging platform suitable for real-world deployment and further product expansion.
