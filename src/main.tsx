import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './index.css';
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store/store.ts";
import { Provider } from "react-redux";
import ErrorBoundaryWrapper from "./components/error/ErrorBoundaryWrapper.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ErrorBoundaryWrapper>
          <App />
        </ErrorBoundaryWrapper>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
