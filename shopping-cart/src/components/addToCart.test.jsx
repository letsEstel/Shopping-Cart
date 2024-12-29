import { addToCart } from "./addToCart"; // Import your function
import { describe, it, expect, vi } from "vitest";
describe("addToCart", () => {
  it("should add a new product to an empty cart", () => {
    const cart = []; // Initial empty cart
    const setCart = vi.fn(); // Vitest mock function (replaces jest.fn())

    // Call the function
    addToCart("Laptop", 1000, "laptop.png", 1, cart, setCart);

    // Verify that setCart was called with the correct updated cart
    expect(setCart).toHaveBeenCalledWith([
      {
        title: "Laptop",
        price: 1000,
        image: "laptop.png",
        amount: 1,
      },
    ]);
  });

  it("should add a new product to a non-empty cart", () => {
    const cart = [
      { title: "Phone", price: 500, image: "phone.png", amount: 2 },
    ]; // Initial cart with one product
    const setCart = vi.fn(); // Vitest mock function

    // Call the function
    addToCart("Laptop", 1000, "laptop.png", 1, cart, setCart);

    // Verify that setCart was called with the updated cart
    expect(setCart).toHaveBeenCalledWith([
      { title: "Phone", price: 500, image: "phone.png", amount: 2 },
      { title: "Laptop", price: 1000, image: "laptop.png", amount: 1 },
    ]);
  });

  it("should update the quantity of an existing product", () => {
    const cart = [
      { title: "Laptop", price: 1000, image: "laptop.png", amount: 1 },
    ]; // Initial cart with one product
    const setCart = vi.fn(); // Vitest mock function

    // Call the function
    addToCart("Laptop", 1000, "laptop.png", 2, cart, setCart);

    // Verify that setCart was called with the updated cart
    expect(setCart).toHaveBeenCalledWith([
      {
        title: "Laptop",
        price: 1000,
        image: "laptop.png",
        amount: 3, // Amount updated
      },
    ]);
  });

  it("should not modify the cart when amount is zero", () => {
    const cart = [
      { title: "Laptop", price: 1000, image: "laptop.png", amount: 1 },
    ]; // Initial cart with one product
    const setCart = vi.fn(); // Vitest mock function

    // Call the function with amount 0
    addToCart("Laptop", 1000, "laptop.png", 0, cart, setCart);

    // Verify that the cart remains unchanged
    expect(setCart).toHaveBeenCalledWith([
      {
        title: "Laptop",
        price: 1000,
        image: "laptop.png",
        amount: 1, // No change in amount
      },
    ]);
  });

  it("should add a new product even if the amount is 0", () => {
    const cart = [
      { title: "Laptop", price: 1000, image: "laptop.png", amount: 1 },
    ]; // Initial cart with one product
    const setCart = vi.fn(); // Vitest mock function

    // Call the function with a new product and amount 0
    addToCart("Tablet", 300, "tablet.png", 0, cart, setCart);

    // Verify that the new product is added even with amount 0
    expect(setCart).toHaveBeenCalledWith([
      { title: "Laptop", price: 1000, image: "laptop.png", amount: 1 },
      { title: "Tablet", price: 300, image: "tablet.png", amount: 0 },
    ]);
  });
});
