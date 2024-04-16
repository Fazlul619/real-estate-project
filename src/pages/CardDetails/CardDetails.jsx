import saleIcon from "../../assets/icon/sale.png";
import bedIcon from "../../assets/icon/bed.png";
import bathIcon from "../../assets/icon/bath.png";
import sizeIcon from "../../assets/icon/size.png";
import locationIcon from "../../assets/icon/location.png";
import { Link } from "react-router-dom";
const CardDetails = ({ property }) => {
  const {
    id,
    image,
    status,
    estate_title,
    price,
    beds,
    baths,
    area,
    location,
  } = property;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration="1000"
            src={image}
            alt="card"
          />
        </figure>
        <div className="card-body">
          <div className="flex items-center bg-[#D2E4FF] w-fit  rounded-full mt-2">
            <img className="rounded-full" src={saleIcon} alt="" />
            <p className="font-medium text-[#101828] pr-2">Sale</p>
          </div>

          <div className="flex justify-between w-96 h-9 items-center mt-1">
            <p className=" font-semibold text-[#000000]">{estate_title}</p>
            <p className="text-[#1266E3] text-2xl font-semibold">{price}</p>
          </div>
          <div className="flex items-center gap-6 mt-2">
            <div className="flex items-center gap-3">
              <img src={bedIcon} alt="" />
              <p className="text-[#101828]">
                <span>{beds}</span>Bedroom
              </p>
            </div>
            <div className="flex items-center gap-3 ">
              <img src={bathIcon} alt="" />
              <p className="text-[#101828] ">
                <span>{baths}</span>Bath
              </p>
            </div>
            <div className="flex items-center gap-3">
              <img src={sizeIcon} alt="" />
              <p className="text-[#101828]">
                <span> {area}</span>sqft
              </p>
            </div>
          </div>
          <p className="border m-2"></p>
          <div className="flex justify-between">
            <div className="flex items-center">
              <img src={locationIcon} alt="" />
              <p className="text-[#101828]">{location}</p>
            </div>
            <Link to={`/card/${id}`}>
              <button className="w-fit h-12 px-3 bg-[#1266E3] rounded-xl text-white">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
