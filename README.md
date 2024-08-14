# Data Fetching Example with React, Vite, and TypeScript

This project is a simple example of how to fetch data from an API using React, Vite, and TypeScript. The example demonstrates the use of React hooks (`useState`, `useEffect`) to handle side effects like data fetching and state management.

## Table of Contents

- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
- [How It Works](#how-it-works)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Installation

To get started with this project, follow the steps below:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/CamiloPinzon/Component-lifecicle-methods.git
   cd Component-lifecicle-methods
   ```

2. **Install dependencies:**

   Make sure you have [Node.js](https://nodejs.org/) installed. Then, run the following command to install the project dependencies:

   ```bash
   npm install
   ```

## Running the Project

Once the dependencies are installed, you can start the development server with:

```bash
npm run dev
```

This will start the Vite development server, and you can view the project in your browser at `http://localhost:5173`.

## Project Structure

Here’s an overview of the project structure:

```
├── public
│   └── index.html      # Main HTML file
├── src
│   ├── components
│   │   └── DataFetching.tsx  # The main data-fetching component
│   ├── App.tsx         # Main application component
│   ├── main.tsx        # Entry point of the application
│   └── styles
│       └── App.css     # Optional CSS styling
├── tsconfig.json       # TypeScript configuration
├── vite.config.ts      # Vite configuration
└── package.json        # Project dependencies and scripts
```

### Important Files:

- **`DataFetching.tsx`**: Contains the logic for fetching data from an API and rendering it in the UI.
- **`App.tsx`**: Imports and renders the `DataFetching` component.
- **`main.tsx`**: The entry point of the React application.
- **`vite.config.ts`**: Configuration file for Vite.

## How It Works

- **Data Fetching:** The `DataFetching.tsx` component uses the `useEffect` hook to fetch data from an API endpoint when the component is mounted. The fetched data is stored in the local state using the `useState` hook and displayed in the UI.

- **State Management:** The component uses `useState` to manage the fetched data and conditional rendering to show a loading message while the data is being fetched.

- **TypeScript:** The project is set up with TypeScript to ensure type safety and improve code reliability. The `Post` interface defines the structure of the data being fetched.

### Example Code Snippet:

```tsx
import { useState, useEffect } from "react";

interface Post {
  id: number;
  title: string;
  body: string;
}

const DataFetching = () => {
  const initialState: Post = {
    id: 0,
    title: "",
    body: "",
  };

  const [data, setData] = useState<Post[]>([initialState]); // use state to store data and initialize it to an array of initialState
  const fetchUrl = "https://jsonplaceholder.typicode.com/posts";

  // Use the useEffect hook to fetch data when the component mounts.
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(fetchUrl);
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.log("error fetching data", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run only once on mount

  return (
    <div>
      <h1>Data Fetching Example</h1>
      {data ? (
        <div>
          {data.map((item) => (
            <div key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DataFetching;
```

## Dependencies

This project uses the following dependencies:

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast development server and build tool.
- **TypeScript**: A superset of JavaScript that adds static typing.

You can find the full list of dependencies in the `package.json` file.

## Contributing

If you would like to contribute to this project, feel free to open a pull request or file an issue on the GitHub repository.

## License

This project is licensed under the MIT License.