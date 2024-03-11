import { Route, Routes } from "react-router-dom";
import "./App.css";
import Products from "./components/Products";
import Product from "./components/Product";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 10000,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/Products" element={<Products />} />
        <Route path="/Products/:id" element={<Product />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
