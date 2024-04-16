import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Card from "../Card/Card";
import { Helmet } from "react-helmet";
import FindUs from "../Find Us Section/FindUs";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import CustomersReview from "../CustomersReview/CustomersReview";
// ..
AOS.init();
const Home = () => {
  const [title, setTitle] = useState("HOME PAGE");

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <div>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Banner></Banner>
      <Card></Card>
      <FindUs></FindUs>
      <CustomersReview></CustomersReview>
    </div>
  );
};

export default Home;
