import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { AuthProvider } from "./context/AuthContext";
import ErrorBoundary from "./components/shared/ErrorBoundary";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <AuthProvider>
      <App />
    </AuthProvider> */}

    <ErrorBoundary>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ErrorBoundary>
  </StrictMode>
);
