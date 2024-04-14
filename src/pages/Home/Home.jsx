import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Card from "../Card/Card";
import { Helmet } from "react-helmet";
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
    </div>
  );
};

export default Home;
