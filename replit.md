# AI Assistant Instructions

## Core Directives

My primary goal is to assist in developing this project while following a strict set of rules to ensure code quality, clarity, and collaboration.

---

## 1. Planning and Approval ✅

**Rule:** You **MUST** always ask for my confirmation before making any changes.

**Workflow:**
1.  Analyze my request.
2.  Create a detailed, step-by-step plan of development. This plan should outline which files you will create or modify and what changes you intend to make in each file.
3.  Present the plan to me and wait for my explicit approval (e.g., "Yes, proceed" or "Approved").
4.  Do not start writing or changing any code until I approve your plan.

---

## 2. File and Code Structure 📏

**Rule:** No single file should ever exceed **500 lines of code**.

**Workflow:**
* If a task requires adding code that would push a file over the 500-line limit, you must propose a plan to split the code into multiple smaller, modular files.
* Clearly explain the purpose of each new file you propose.
* Always prioritize code readability and maintainability through modular design.

---

## 3. General Behavior

* Explain your reasoning clearly and concisely.
* When you complete a task, provide a summary of the changes you made.
* If you are unsure about any part of a request, ask for clarification before proceeding.

# Overview

This is a React-based business website for "Boots On The Ground" (BOTG), a professional real estate documentation service company operating in the Tri-State area. The application provides a modern, responsive landing page that showcases the company's visual documentation services for distressed properties, targeting real estate investors, agents, and property managers. The website features service listings with pricing, contact forms, and comprehensive company information presented through a clean, professional interface.

# User Preferences

Preferred communication style: developer language.

# System Architecture

## Frontend Architecture
The application uses a modern React-based single-page application (SPA) architecture built with Vite as the build tool. The frontend implements a component-based structure using TypeScript for type safety and follows a modular design pattern with separate sections for different page content.

**Key Design Decisions:**
- **React with TypeScript**: Chosen for type safety and modern development experience
- **Vite Build Tool**: Selected for fast development server and optimized production builds
- **Component Architecture**: Organized into layout components (navbar, footer) and section components (hero, services, contact)
- **Routing**: Uses Wouter for lightweight client-side routing, though currently only implements a single home page route

## UI and Styling System
The application uses a comprehensive design system built on Tailwind CSS with shadcn/ui components for consistent, accessible user interface elements.

**Component Strategy:**
- **shadcn/ui Integration**: Provides pre-built, customizable UI components following modern design patterns
- **Tailwind CSS**: Utility-first CSS framework for rapid styling and responsive design
- **CSS Custom Properties**: Uses CSS variables for theme consistency and easy customization
- **Responsive Design**: Mobile-first approach with responsive breakpoints for desktop, tablet, and mobile
