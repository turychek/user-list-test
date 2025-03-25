# User Management System

A user management system developed in AngularJS. The project provides an interface to create, edit, delete and view users.

## Functionality

- View user list as a table
- Create new users
- Edit existing users
- Delete users
- Validate forms
- Handle errors (404 and 403 pages)
- Save data to localStorage

### User fields

- Username (unique)
- First name
- Last name
- Email
- User type (Admin/Driver)
- Password (only at creation)

## Technologies

- AngularJS 1.8.2
- Angular UI Router 1.0.20
- HTML5
- CSS3 (using CSS variables)
- LocalStorage for data storage

## Install and run

1. Clone the repository:

```bash
git clone <repository-url>
```

2. Install dependencies:

```bash
npm install
```

3. Run the project:

```bash
npm run start
```

After executing the command:

- A browser will automatically open with the application
- The browser will automatically reload when files are changed
- Developer tools are available in the browser

The application will be available at:

```
http://localhost:3000
```

## Project structure

```
├── app/
│   ├── components/
│   │   ├── user-form/
│   │   │   ├── user-form.controller.js
│   │   │   ├── user-form.view.html
│   │   │   └── user-form.css
│   │   └── user-input/
│   │       ├── user-input.controller.js
│   │       ├── user-input.view.html
│   │       └── user-input.css
│   ├── pages/
│   │   ├── users/
│   │   │   ├── users.controller.js
│   │   │   ├── users.view.html
│   │   │   └── users.css
│   │   └── errors/
│   │       ├── 403.html
│   │       ├── 404.html
│   │       └── errors.css
│   ├── services/
│   │   ├── user.service.js
│   │   └── validation.service.js
│   └── app.routes.js
├── styles/
│   └── main.css
├── index.html
├── .gitignore
└── README.md
```

## Implementation features

- Component-based approach
- Responsive design
- Client-side form validation
- Modular structure
- Data and validation services
- Error handling
- Modern UI/UX design

## Validation

- Uniqueness of username
- Correctness of email
- Required fields
- Password validation (minimum 8 characters, letters and numbers)
- Match passwords when created

## Data Storage

Data is stored in the browser's localStorage in JSON format. The key for storage is: `myApp.users`.
