import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {BrowserRouter} from "react-router-dom" ; 
import App from "./App";
import { RegesterContextProvider } from "./Context/RegistrationContextProvider";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
    <RegesterContextProvider>
    <App />
    </RegesterContextProvider>
    </BrowserRouter>
  </StrictMode>
);



