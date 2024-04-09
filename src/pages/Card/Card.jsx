import { useEffect } from "react";
import { useState } from "react";
import CardDetails from "../CardDetails/CardDetails";

const Card = () => {
  const [propertyCards, setPropertyCards] = useState([]);
  useEffect(() => {
    fetch("Resident.json")
      .then((res) => res.json())
      .then((data) => setPropertyCards(data));
  }, []);
  return (
    <div>
      <div className="">
        <div className="text-center mt-6">
          <h1 className="font-bold text-3xl text-[#2D3954]">
            Explore Good Places
          </h1>
          <p className="font-normal ">
            Explore good places, for in their hidden corners lie the secrets of
            beauty waiting to be discovered.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-6 mx-auto max-w-7xl ">
          {propertyCards.map((property) => (
            <CardDetails key={property.id} property={property}></CardDetails>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
