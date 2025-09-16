import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
}

interface ProductState {
  products: Product[];
  filteredProducts: Product[];
  loading: boolean;
  error: string | null;
  categoryFilter: string;
  sortOrder: "asc" | "desc" | "";
  page: number;
  perPage: number;
}

const initialState: ProductState = {
  products: [],
  filteredProducts: [],
  loading: false,
  error: null,
  categoryFilter: "",
  sortOrder: "",
  page: 1,
  perPage: 8,
};

export const fetchProductsAsync = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get<Product[]>("https://fakestoreapi.com/products");
    return response.data;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setCategoryFilter(state, action: PayloadAction<string>) {
      state.categoryFilter = action.payload;
      state.page = 1;
    },
    setSortOrder(state, action: PayloadAction<"asc" | "desc" | "">) {
      state.sortOrder = action.payload;
    },
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    applyFilters(state) {
      let filtered = [...state.products];
      if (state.categoryFilter) filtered = filtered.filter(p => p.category === state.categoryFilter);
      if (state.sortOrder === "asc") filtered.sort((a,b) => a.price - b.price);
      else if (state.sortOrder === "desc") filtered.sort((a,b) => b.price - a.price);
      state.filteredProducts = filtered;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsAsync.pending, (state) => { state.loading = true; })
      .addCase(fetchProductsAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
        state.filteredProducts = action.payload;
      })
      .addCase(fetchProductsAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch products";
      });
  },
});

export const { setCategoryFilter, setSortOrder, setPage, applyFilters } = productSlice.actions;
export default productSlice.reducer;
