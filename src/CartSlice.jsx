import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    // Ürün ekleme
    addItem: (state, action) => {
      const { name, image, cost } = action.payload; // Ürün bilgilerini al
      const existingItem = state.items.find((item) => item.name === name);

      if (existingItem) {
        existingItem.quantity++; // varsa miktar artır
      } else {
        state.items.push({ name, image, cost, quantity: 1 }); // yoksa yeni ürün ekle
      }
    },

    // Ürün silme
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.name !== action.payload);
    },

    // Ürün miktarı güncelleme
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload; // Ürün ismi ve yeni miktar
      const itemToUpdate = state.items.find((item) => item.name === name);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity; // yeni miktarı ata
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
