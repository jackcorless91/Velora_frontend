import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Menu/Navbar";
import "./AdminPage.css";

function AdminPage() {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [adminName, setAdminName] = useState("");

  useEffect(() => {
    // Fetch products and users using Axios
    const fetchData = async () => {
      try {
        const productResponse = await axios.get("http://localhost:1234/api/products");
        const userResponse = await axios.get("http://localhost:1234/api/auth");

        setProducts(productResponse.data);
        setUsers(userResponse.data);

        // Assuming the admin's name is in the response
        setAdminName(userResponse.data.adminName || "Admin");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="admin-page">
      <Navbar />
      <h1 className="admin-welcome">Welcome back, {adminName}!</h1>

      <h1>Admin Dashboard</h1>

      <section className="admin-section">
        <h2>Products</h2>
        {products.length === 0 ? (
          <p>No products found.</p>
        ) : (
          <table className="admin-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>${product.price}</td>
                  <td>
                    <button>Edit</button>
                    <button>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>

      <section className="admin-section">
        <h2>Users</h2>
        {users.length === 0 ? (
          <p>No users found.</p>
        ) : (
          <table className="admin-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Username</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
    </div>
  );
}

export default AdminPage;
