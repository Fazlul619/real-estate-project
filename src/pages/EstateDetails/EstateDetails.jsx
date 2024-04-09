import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
const EstateDetails = () => {
  const estates = useLoaderData();
  const { id } = useParams();
  const estate = estates.find((estate) => estate.id === id);
  console.log(estate);
  return (
    <div>
      <div>
        <div className=" max-w-7xl mx-auto">
          <img className="rounded-xl w-full" src={estate.image} alt="" />
        </div>
        <div>
          <div className="card max-w-7xl mx-auto bg-base-300 shadow-xl">
            <div className="card-body">
              <p className="text-[#f74400] bg-orange-300 w-fit px-2 rounded-full">
                {estate.status}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstateDetails;
