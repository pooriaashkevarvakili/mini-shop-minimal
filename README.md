# Minimal Shop — Frontend

A modern and minimal e-commerce frontend built with **Next.js**, **React**, and **TypeScript**.

This project provides a clean and responsive shopping experience with product management, API integration, form validation, and reusable UI components.

## Tech Stack

* **Next.js 16** — React framework
* **React 19** — UI library
* **TypeScript** — Type-safe development
* **Ant Design** — UI components
* **Tailwind CSS** — Styling
* **TanStack React Query** — Server state management
* **Axios** — API requests
* **Formik + Yup** — Form handling and validation
* **React Icons** — Icons
* **React Toastify** — Notifications

## Requirements

* Node.js 20+
* npm, Yarn, pnpm, or Bun

## Installation

```bash
git clone <repository-url>
cd project-shop-minimal

npm install
```

## Environment Variables

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_API_URL=http://localhost:3000
```

Set `NEXT_PUBLIC_API_URL` to the URL of your backend API.

## Running the Application

### Development

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

### Production

Build the application:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

## Available Scripts

| Command         | Description                      |
| --------------- | -------------------------------- |
| `npm run dev`   | Start the development server     |
| `npm run build` | Build the production application |
| `npm run start` | Start the production server      |
| `npm run lint`  | Run ESLint                       |

## Project Structure

```text
src/
├── app/              # Next.js App Router
├── components/       # Reusable UI components
├── services/         # API and HTTP services
├── hooks/            # Custom React hooks
├── providers/        # Application providers
├── types/            # TypeScript types
├── utils/             # Utility functions
└── ...
```

## API Integration

The frontend communicates with the backend through REST APIs using **Axios**.

Server-side state and API caching are managed with **TanStack React Query**.

Make sure the backend API is running and that `NEXT_PUBLIC_API_URL` points to the correct API URL.

## Forms & Validation

Forms are handled using:

* **Formik** for form state management
* **Yup** for schema-based validation

## UI & Styling

The application uses **Ant Design** for reusable UI components and **Tailwind CSS** for custom layouts and styling.

## Production

For production deployment, build the application first:

```bash
npm run build
npm run start
```

The application can be deployed to platforms that support Next.js applications, such as Vercel or a Node.js server.

## License

This project is licensed under the **MIT License**.
