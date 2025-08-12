# E-commerce Landing Page

This project is a simple e-commerce landing page built with React and TypeScript. It includes essential components such as a navigation bar, a cart widget, and an item list container.

## Project Structure

```
ecommerce-landing-page
├── public
│   └── index.html          # Main HTML file
├── src
│   ├── components          # Contains all React components
│   │   ├── CartWidget      # Shopping cart component
│   │   │   └── CartWidget.tsx
│   │   ├── ItemListContainer # Displays a list of items
│   │   │   └── ItemListContainer.tsx
│   │   └── NavBar          # Navigation bar component
│   │       └── NavBar.tsx
│   ├── App.tsx             # Main application component
│   ├── index.tsx           # Entry point for the React application
│   └── types               # TypeScript types and interfaces
│       └── index.ts
├── package.json            # NPM configuration file
├── tsconfig.json           # TypeScript configuration file
└── README.md               # Project documentation
```

## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd ecommerce-landing-page
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the application:**
   ```
   npm start
   ```

The application will be available at `http://localhost:3000`.

## Components

- **NavBar**: Contains navigation links and the shopping cart widget.
- **CartWidget**: Displays the shopping cart icon and the number of items in the cart.
- **ItemListContainer**: Displays a greeting and will eventually render a catalog of products.

## Contributing

Feel free to submit issues or pull requests for any improvements or features you would like to see in this project.