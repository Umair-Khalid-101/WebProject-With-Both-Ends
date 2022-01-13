import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Success = () => {
  const { id } = useParams();
  console.log(id);

  const [shipmentAddress, setShipmentAddress] = useState([]);

  useEffect(() => {
    const data = axios
      .get(`http://localhost:3001/app/Success/${id}`)
      .then((response) => {
        console.log(response);
        setShipmentAddress(response.data);

        console.log(shipmentAddress);
      });
    return () => {};
  }, []);

  return (
    <div className="text-center">
      <h5>CONGRATS YOUR ORDER IS SHIPPED</h5>
    </div>
  );
};

export default Success;
