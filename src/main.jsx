import { createRoot } from "react-dom/client";
import "./index.css";
import AppRoutes from "./app/routes/AppRoutes.jsx";
import { Provider } from "react-redux";
import store from "./app/store/store.jsx";
import { AnalysisContextProvider } from "./app/context/AnalysisContext.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <AnalysisContextProvider>
      <AppRoutes />
    </AnalysisContextProvider>
  </Provider>,
);
