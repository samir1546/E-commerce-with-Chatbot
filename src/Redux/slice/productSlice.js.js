import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async (page, { rejectWithValue }) => {
        try {
            const res = await axios.get(
                "https://api.unsplash.com/search/photos",
                {
                    params: {
                        query: [
                            "shoes",
                            "watches",
                            "fashion",
                            "clothing",
                            "luxury",
                            "outfit",
                            "men",
                            "women",
                            "bags",
                            "laptop",
                            "phone",
                            "tv",
                            "smart watch",
                            "slippers",
                            "face wash",
                            "winter",
                        ][page % 11],
                        per_page: 8,
                        page,
                    },
                    headers: {
                        Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASHED_API_KEY}`,
                    },
                }
            );

            return res.data.results.map((img, index) => ({
                id: `${page}-${img.id}`,
                name: img.alt_description || "Fashion Product",
                price: (Math.random() * 500 + 50).toFixed(2),
                originalPrice: null,
                rating: (Math.random() * 5).toFixed(1),
                reviews: Math.floor(Math.random() * 300),
                images: img.urls
                    ? [img.urls.regular, img.urls.small, img.urls.thumb]
                    : [],
                badge: index === 0 && page === 1 ? "Best Seller" : null,
                badgeColor: index === 0 && page === 1 ? "bg-yellow-400" : null,
            }));
        } catch (error) {
            return rejectWithValue("Failed to fetch products");
        }
    }
);

const productSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        loading: false,
        error: null,
        page: 1,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = [...state.products, ...action.payload];
                state.page += 1;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});


const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        totalQty: 0,
        totalAmount: 0,
    },
    reducers: {
        addToCart(state, action) {
            const product = action.payload;
            const existing = state.items.find((i) => i.id === product.id);

            if (existing) {
                existing.qty += 1;
            } else {
                state.items.push({
                    id: product.id,
                    name: product.name,
                    price: Number(product.price),
                    image: product.images?.[0],
                    qty: 1,
                });
            }

            state.totalQty += 1;
            state.totalAmount += Number(product.price);
        },

        increaseQty(state, action) {
            const item = state.items.find((i) => i.id === action.payload);
            if (!item) return;

            item.qty += 1;
            state.totalQty += 1;
            state.totalAmount += item.price;
        },

        decreaseQty(state, action) {
            const item = state.items.find((i) => i.id === action.payload);
            if (!item) return;

            if (item.qty > 1) {
                item.qty -= 1;
                state.totalQty -= 1;
                state.totalAmount -= item.price;
            }
        },


        removeCart(state, action) {
            const item = state.items.find(i => i.id === action.payload);
            if (!item) return;
            state.totalQty -= item.qty;
            state.totalAmount -= item.price * item.qty;
            state.items = state.items.filter(i => i.id !== action.payload);
        }
    },
});


export const productReducer = productSlice.reducer;
export const cartReducer = cartSlice.reducer;

export const { addToCart, increaseQty, decreaseQty, removeCart } = cartSlice.actions;
