import React, { useState, useEffect } from "react";
import axios from "axios";
import { Customer } from "./CustomerList";

interface CustomerDetailsProps {
  customer: Customer;
}

const CustomerDetails = ({ customer }: CustomerDetailsProps) => {
  const [photos, setPhotos] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPhotos = async () => {
    try {
      const newPhotos = Array.from(
        { length: 9 },
        (_, index) => `https://picsum.photos/200/200?random=${Math.random()}`
      );
      setPhotos(newPhotos);
      setLoading(false);
    } catch (error: any) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPhotos();
    const interval = setInterval(fetchPhotos, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="customer-details">
      <h2>{customer.name}</h2>
      <p>{customer.title}</p>
      <p>{customer.address}</p>
      <div className="photo-grid">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          photos?.map((photo, index) => (
            <img key={index} src={photo} alt="Customer photo" />
          ))
        )}
      </div>
    </div>
  );
};

export default CustomerDetails;
