import { useLoaderData, useParams } from "react-router-dom";
import locationIcon from "../../assets/icon/location.png";
import bedIcon from "../../assets/icon/bed.png";
import bathIcon from "../../assets/icon/bath.png";
import sizeIcon from "../../assets/icon/size.png";
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
          <div className="card max-w-7xl mx-auto bg-base-100 shadow-xl my-6 border">
            <div className="card-body">
              <p className="text-[#f74400] bg-orange-300 w-fit px-2 rounded-full">
                {estate.status}
              </p>
              <p className="text-[#2D3954] font-extrabold text-2xl">
                {estate.estate_title}
              </p>
              <div className="flex items-center gap-3 mt-2">
                <img src={locationIcon} alt="" />
                <p className="text-[#101828] font-medium">{estate.location}</p>
              </div>
              <p className="text-[#1266E3] text-2xl font-bold mt-3">
                {estate.price}
              </p>
              <div className="flex items-center gap-6 mt-5">
                <div className="flex items-center gap-3">
                  <img className="" src={bedIcon} alt="" />
                  <p className="text-[#101828]">
                    <span>{estate.beds}</span> Bedroom
                  </p>
                </div>
                <div className="flex items-center gap-3 ">
                  <img src={bathIcon} alt="" />
                  <p className="text-[#101828] ">
                    <span>{estate.baths}</span> Bath
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <img src={sizeIcon} alt="" />
                  <p className="text-[#101828]">
                    <span> {estate.area}</span> sqft
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card max-w-7xl mx-auto bg-base-100 shadow-xl my-6 border">
          <div className="card-body">
            <p className="text-[#2D3954] font-bold text-2xl">
              Detail & Features
            </p>
            <p className="text-[#2D3954] font-normal text-xl">
              Area Size (sqft)
              <span className="mx-4 font-light ">{estate.area}</span>
            </p>
            <p className="text-[#2D3954] font-normal text-xl">
              Bedroom <span className="mx-16 font-light">{estate.beds}</span>
            </p>
            <p className="text-[#2D3954] font-normal text-xl">
              Washroom <span className="mx-12 font-light">{estate.baths}</span>
            </p>
          </div>
        </div>
        <div className="card max-w-7xl mx-auto bg-base-100 shadow-xl my-6 border">
          <div className="card-body">
            <p className="text-[#2D3954] font-bold text-2xl">Description</p>
            <p className="flex items-center gap-3">
              {estate.facilities.map((facilities, Idx) => (
                <spn key={Idx}>
                  <p className="text-[#2D3954] bg-[#D2E4FF]  rounded-xl font-bold px-3 ">
                    #{facilities}
                  </p>
                </spn>
              ))}
            </p>
            <p className="text-xl">{estate.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstateDetails;
