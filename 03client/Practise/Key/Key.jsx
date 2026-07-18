import React from "react";

const Key = () => {
  const productData = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Mouse" },
    { id: 3, name: "Phone" },
    { id: 4, name: "Charger" },
    { id: 5, name: "Ipad" },
  ];
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Product</th>
          </tr>
        </thead>

        <tbody>
          {productData.map((product) => {
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
            </tr>;
          })}
          
        </tbody>
      </table>
    </>
  );
};

export default Key;
