import React from "react";
import Filter from "./components/Filter";
import ProductList from "./components/ProductList";

const App: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">My Duka E-Commerce Catalog</h1>
      <Filter />
      <ProductList />
    </div>
  );
};

export default App;
