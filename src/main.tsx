import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider.tsx";
import { LogProvider } from "./context/LogProvider.tsx";
import { EmailProvider } from "./context/EmailProvider.tsx";
import { UserProvider } from "./context/UserProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
      <AuthProvider>
        <UserProvider>
        <LogProvider>
          <EmailProvider>
            <App/>
          </EmailProvider>
        </LogProvider>
          </UserProvider>

      </AuthProvider>
    </BrowserRouter>
);
