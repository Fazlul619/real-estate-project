import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { FaHome } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
const ContactUs = () => {
  const [title, setTitle] = useState("CONTACT US PAGE");

  useEffect(() => {
    // Update the title and icon path when the component mounts
    document.title = title;
  }, [title]);

  return (
    <div>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <div className="card max-w-3xl  mx-4 mt-4">
        <div className="card-body ">
          <p className="font-bold text-3xl text-[#2D3954]">Get In Touch</p>
          <p className="mt-4">
            Ready to take the next step towards your dream property? Reach out
            to us and let us start turning your real estate goals into reality.
            Whether you are buying, selling, or simply curious about the market,
            we are here to answer your questions and guide you through the
            process. Get in touch today and let us begin your journey in the
            world of real estate.
          </p>
        </div>
        <div className="card-body  ">
          <FaHome className="w-11 h-11" />

          <p className="font-bold text-xl text-[#2D3954]">Reach Us</p>
          <p>Dhaka Cantonment, Dhaka-1206, Bangladesh</p>
        </div>
        <div className="card-body  ">
          <MdOutlineMail className="w-11 h-11" />

          <p className="font-bold text-xl text-[#2D3954]">Drop A Mail</p>
          <p>dsproperty@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
