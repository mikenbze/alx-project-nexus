import React, { useEffect, useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsAsync, setPage } from "../redux/productSlice";
import { RootState, AppDispatch } from "../redux/store";
import ProductCard from "./ProductCard";

const ProductList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { filteredProducts, loading, error, page, perPage } = useSelector((state: RootState) => state.products);

  const observer = useRef<IntersectionObserver | null>(null);
  const lastProductRef = useCallback((node: HTMLDivElement | null) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && filteredProducts.length > page * perPage) {
        dispatch(setPage(page + 1));
      }
    });
    if (node) observer.current.observe(node);
  }, [loading, filteredProducts, page, perPage, dispatch]);

  useEffect(() => { dispatch(fetchProductsAsync()); }, [dispatch]);

  const visibleProducts = filteredProducts.slice(0, page * perPage);

  if (loading && page === 1) return <p>Loading products...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {visibleProducts.map((product, index) => {
        if (index === visibleProducts.length - 1) {
          return <div key={product.id} ref={lastProductRef}><ProductCard {...product} /></div>;
        } else return <ProductCard key={product.id} {...product} />;
      })}
      {loading && page > 1 && <p className="col-span-full text-center mt-4">Loading more...</p>}
    </div>
  );
};

export default ProductList;
