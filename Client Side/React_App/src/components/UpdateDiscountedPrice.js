import React, { useState } from "react";

const UpdateDiscountedPrice = ({ product_id }) => {
  const [discountedPrice, setDiscountedPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`/products/updateDiscountedPrice`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        product_id,
        discounted_price: parseFloat(discounted_price),
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error updating discounted price");
        }
        return response.json();
      })
      .then((result) => {
        alert("Discounted price updated successfully!");
      })
      .catch((error) => {
        console.error("Error updating discounted price:", error);
        alert("Error updating discounted price. Please try again.");
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="discountedPrice">Discounted Price:</label>
      <input
        type="number"
        id="discountedPrice"
        value={discounted_price}
        onChange={(e) => setDiscountedPrice(e.target.value)}
        required
      />
      <button type="submit">Update Discounted Price</button>
    </form>
  );
};

export default UpdateDiscountedPrice;