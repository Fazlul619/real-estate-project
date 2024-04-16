import { useEffect, useState } from "react";

const FindUs = () => {
  const [findUsCard, setFindUsCard] = useState([]);
  useEffect(() => {
    fetch("location.json")
      .then((res) => res.json())
      .then((data) => setFindUsCard(data));
  }, []);
  return (
    <div>
      <div className="text-center mt-6">
        <h1 className="font-bold text-3xl text-[#2D3954]">Find By Location</h1>
        <p className="font-normal ">
          Discover your dream home, precisely where you want it. Explore
          properties by location and find the perfect match for your lifestyle.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-6 mx-auto max-w-7xl ">
        {findUsCard.map((location) => (
          <div
            key={location.id}
            className="card card-compact w-96 bg-base-100 border-2 "
          >
            <figure>
              <img
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
                data-aos-duration="1000"
                src={location.image_url}
                alt="Location"
              />
            </figure>
            <div className="card-body m-5">
              <h2 className="font-bold  text-[#2D3954]">
                {location.place_name}
              </h2>
              <p className="font-semibold">
                {location.property_count} Property
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FindUs;
