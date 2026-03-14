import React from 'react';
import { Navigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Package, Clock, CheckCircle } from 'lucide-react';
import './Orders.css';

// Mock Orders Data
const mockOrders = [
  {
    id: "ORD-847291",
    date: "2026-02-14",
    total: 1299,
    status: "Delivered",
    items: [
      { name: "Classic Red Roses Bouquet", quantity: 1, price: 1299 }
    ]
  },
  {
    id: "ORD-938102",
    date: "2026-03-01",
    total: 4199,
    status: "Processing",
    items: [
      { name: "Luxury Gift Hamper", quantity: 1, price: 3200 },
      { name: "Pastel Spring Delight", quantity: 1, price: 999 }
    ]
  }
];

const Orders = () => {
  const { user, logout } = useAuth();

  if (!user) {
    return <Navigate to="/auth" />;
  }

  return (
    <div className="orders-container">
      <div className="orders-sidebar">
        <div className="profile-card">
          <div className="profile-avatar">
            {user.name.charAt(0)}
          </div>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
          <p className="profile-phone">{user.phone}</p>
          
          <div className="profile-actions">
            <button className="logout-btn" onClick={logout}>Sign Out</button>
          </div>
        </div>
        
        <div className="address-card">
          <h4>Delivery Address</h4>
          <p>{user.address}</p>
          <button className="edit-link">Edit Address</button>
        </div>
      </div>

      <div className="orders-main">
        <h2>Your Orders</h2>
        
        {mockOrders.length === 0 ? (
          <div className="empty-orders">
            <Package size={48} className="empty-icon" />
            <h3>No orders yet</h3>
            <p>Looks like you haven't made any purchases yet.</p>
            <Link to="/shop" className="primary-btn mt-3">Start Shopping</Link>
          </div>
        ) : (
          <div className="orders-list">
            {mockOrders.map(order => (
              <div className="order-card" key={order.id}>
                <div className="order-header">
                  <div>
                    <span className="order-id">Order {order.id}</span>
                    <span className="order-date">Placed on {new Date(order.date).toLocaleDateString()}</span>
                  </div>
                  <div className={`order-status ${order.status.toLowerCase()}`}>
                    {order.status === 'Delivered' ? <CheckCircle size={16} /> : <Clock size={16} />}
                    {order.status}
                  </div>
                </div>
                
                <div className="order-items">
                  {order.items.map((item, idx) => (
                    <div className="order-item" key={idx}>
                      <span className="item-name">{item.name} <span className="item-qty">x{item.quantity}</span></span>
                      <span className="item-price">₹{item.price.toLocaleString()}</span>
                    </div>
                  ))}
                </div>
                
                <div className="order-footer">
                  <span className="order-total-label">Total Amount:</span>
                  <span className="order-total-value">₹{order.total.toLocaleString()}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
