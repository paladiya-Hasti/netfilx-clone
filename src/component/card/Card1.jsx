import React, { useState } from "react";
import "./card.css";
import { hotelinks } from "../../assets/Hotel/hotel-links";
import StarRateIcon from "@mui/icons-material/StarRate";

const Card1 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const togglePopup = (item) => {
    setIsOpen(!isOpen);
    setSelectedItem(item);
    setShowForm(false);
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };
  return (
    <div className="cards-flex">
      {hotelinks.map((item, index) => (
        <div>
          <img
            src={item.img}
            className="card-img"
            key={index}
            onClick={() => togglePopup(item)}
            alt=""
          />
          <div className="rating">
            <p>{item.price}</p>
            <StarRateIcon className="star-icon">4.86</StarRateIcon>
          </div>
          <p className="label">{item.label}</p>

          <p className="item-address">{item.address}</p>
        </div>
      ))}

      {isOpen && selectedItem && (
        <div className="popup">
          <div className="popup-content">
            <h1>{selectedItem.label}</h1>
            <img src={selectedItem.img} className="card-pop" alt="" />

            <p className="item-address">{selectedItem.address}</p>
            <p className="price-2">{selectedItem.price}</p>
            <button onClick={toggleForm} className="btn2">
              Booking now
            </button>

            {showForm && (
              <form className="booking-form">
                <h3>Booking Form</h3>
                <div className="form-group">
                  <label>Your Name</label>
                  <input type="text" placeholder="Enter your name" required />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" placeholder="Enter your email" required />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
                <div className="form-group">
                  <button type="submit" className="btn-submit">
                    submit
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Card1;
