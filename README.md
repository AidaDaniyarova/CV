# Personal Resume & Portfolio

A modern, responsive personal resume and portfolio website built with **React**, **Redux Toolkit**, **SCSS**, and **Formik**. The application showcases professional experience, education, technical skills, projects, and contact information in a clean and interactive interface.

---

## Features

- Responsive layout for desktop, tablet, and mobile
- Sidebar navigation with smooth scrolling
- Expandable/collapsible navigation panel
- About Me section
- Education timeline
- Experience timeline
- Skills section with animated progress bars
- Add new skills using a validated form
- Portfolio section with category filtering
- Contact information
- Feedback section
- Reusable UI components
- Redux state management
- Form validation using Formik and Yup

---

## Technologies Used

- React
- Redux Toolkit
- React Redux
- React Router DOM
- SCSS (Sass)
- Formik
- Yup
- Font Awesome
- JavaScript (ES6+)

---

## Project Structure

```
src/
│
├── assets/
│   └── styles/
│
├── components/
│   ├── About/
│   ├── Address/
│   ├── Box/
│   ├── Button/
│   ├── Contacts/
│   ├── Feedback/
│   ├── Navigation/
│   ├── Panel/
│   ├── PhotoBox/
│   ├── Portfolio/
│   ├── Skills/
│   └── Timeline/
│
├── data/
│   └── resumeData.js
│
├── features/
│   ├── education/
│   └── skills/
│
├── services/
│   └── api.js
│
├── store/
│   └── store.js
│
├── App.jsx
└── main.jsx
```

---

## Installation

Clone the repository

```bash
git clone https://github.com/AidaDaniyarova/CV
```

Navigate to the project

```bash
cd cv
```

Install dependencies

```bash
npm install
```

Start the development server

```bash
npm run dev
```

---

## Available Scripts

Start development server

```bash
npm run dev
```

Build for production

```bash
npm run build
```

Preview production build

```bash
npm run preview
```

Lint the project

```bash
npm run lint
```

---

## Application Sections

### About

Displays a short professional introduction.

### Education

Shows education history in a timeline layout.

### Experience

Displays professional experience using a vertical timeline.

### Skills

Features:

- Animated skill bars
- Add new skills
- Form validation
- Redux state updates
- Editable skills list

### Portfolio

Displays projects with category filtering.

Categories include:

- AI
- Backend
- Full Stack

Each project includes:

- Project image
- Description
- GitHub/resource link

### Contacts

Displays:

- Phone
- Email
- Location
- GitHub
- LinkedIn
- Twitter
- Facebook
- Skype

### Feedback

Provides a contact/feedback section.

---

## State Management

Redux Toolkit is used for managing application state.

Current slices:

- Education
- Skills

Async operations are handled using:

- createAsyncThunk

---

## Form Validation

The Skills form uses:

- Formik
- Yup

Validation rules include:

- Skill name required
- Minimum length
- Maximum length
- Skill range between 10 and 100

---

## Responsive Design

The application is fully responsive and includes:

- Mobile navigation drawer
- Collapsible sidebar
- Responsive portfolio grid
- Flexible timeline layout

---

## Future Improvements

- Edit existing skills
- Delete skills
- Dark mode
- Portfolio search
- Portfolio pagination
- Contact form integration
- Backend API
- Authentication
- Project detail pages

---

## Author

**Aida Daniyarova**

GitHub:
https://github.com/AidaDaniyarova

LinkedIn:
https://linkedin.com/in/aida-dani

Email:
aida.daniyarova5@gmail.com

---

## License

This project is intended for educational and portfolio purposes.
