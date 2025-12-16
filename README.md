<div align="center">

# Little Lemon

### Modern • Accessible • Production‑Ready Table Reservation App

**Little Lemon** is a modern, accessible, and user‑friendly **table reservation web application** built with **React**, designed to reflect real‑world frontend standards.
Focused on **WCAG accessibility**, **clean UX/UI**, and **production‑ready frontend practices** — ideal for portfolio and real‑world showcase.

![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge\&logo=react)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?style=for-the-badge\&logo=javascript)
![Accessibility](https://img.shields.io/badge/Accessibility-WCAG%20Compliant-success?style=for-the-badge)
![Testing](https://img.shields.io/badge/Tests-Jest%20%26%20RTL-brightgreen?style=for-the-badge)

</div>

---

## Preview

<div align="center">

<img src="https://raw.githubusercontent.com/ConDevTp/capstone-meta-project/main/src/assets/homePage-preview.png" alt="Little Lemon App Preview" width="900" />

> Main reservation flow – clean UI, accessible form, responsive layout

</div>

## Live Demo

[![Live Demo](https://img.shields.io/badge/Live%20Demo-%2300AEEF?style=for-the-badge\&logo=appveyor\&logoColor=white)](https://condevtp.github.io/capstone-meta-project/)

---

## Tech Stack

![HTML5](https://img.shields.io/badge/HTML5-Semantic-orange?style=for-the-badge\&logo=html5)
![CSS3](https://img.shields.io/badge/CSS3-Responsive-blue?style=for-the-badge\&logo=css3)
![React Router](https://img.shields.io/badge/React_Router-Dynamic_Routing-red?style=for-the-badge\&logo=reactrouter)
![Jest](https://img.shields.io/badge/Jest-Testing_Critical_Flows-C21325?style=for-the-badge\&logo=jest)
![RTL](https://img.shields.io/badge/RTL-User_Centric_Tests-green?style=for-the-badge)

---

## Key Features

* Table Reservation System – Select date, time, guests & occasion
* Dynamic Available Times – Automatically updates based on selected date
* Robust Form Validation – HTML5 constraints + React state control
* Accessibility‑First Architecture

  * Semantic HTML structure
  * Proper `label` / `htmlFor` pairing
  * ARIA attributes for assistive technologies
* Persistent Booking Confirmation – Stored securely in `localStorage`
* Fully Tested Business Logic – Predictable & reliable behavior
* Responsive UI – Optimized for desktop, tablet & mobile

---

## Accessibility & UX Philosophy

Accessibility was treated as a core requirement, not an afterthought:

* Semantic elements (`form`, `label`, `button`, `fieldset`)
* Keyboard‑only navigation support
* Clear validation messages & system feedback
* Screen‑reader friendly ARIA labels
* Simple, real‑world language for better comprehension

Usability Review

The user experience was evaluated using Jakob Nielsen’s 10 Usability Heuristics, helping identify friction points and improve clarity, consistency, and feedback.

---

## Testing Coverage

Unit tests written with Jest and React Testing Library, covering:

* Form input validation logic
* Submit button enable / disable behavior
* Successful reservation submission
* API abstraction (`fetchAPI`, `submitAPI`)
* Booking confirmation persistence via `localStorage`

All tests are passing successfully.

---

## User Journey

Select reservation date
Available times update dynamically
Choose time, guests & occasion
Client‑side validation runs
Reservation is submitted
Confirmation is stored
User receives booking confirmation

---

## Getting Started

Clone the repository:

```bash
git clone https://github.com/ConDevTp/capstone-meta-project.git
```

Navigate into the project folder:

```bash
cd capstone-meta-project
```

Install dependencies:

```bash
npm install
```

Run the project:

```bash
npm start
```

---

<div align="center">

**Little Lemon** — Clean UX • Accessible Design • Real‑World Frontend Practice

</div>

---

<div align="center">

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge\&logo=appveyor\&logoColor=white)](https://opensource.org/licenses/MIT)

© ConDev — All rights reserved.

</div>
