import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Card from "../Card/Card";
import { Helmet } from "react-helmet";
import FindUs from "../Find Us Section/FindUs";
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
    </div>
  );
};

export default Home;
