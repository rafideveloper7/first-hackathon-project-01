// src/services/api.js
const API_URL = 'https://fakestoreapi.com/products';

export const api = {
  // Get all products
  async getProducts() {
    try {
      const response = await fetch(API_URL);
      const products = await response.json();
      return products;
    } catch (error) {
      console.error('Error:', error);
      return [];
    }
  },
};