import React from "react";

import { Button } from "react-bootstrap";
import useSmoothScrollTo from "hooks/useSmoothScrollTo";
import ImageCard from "components/ImageCard";

const Top = () => {
  const scrollToServices = useSmoothScrollTo("services");

  return (
    <ImageCard
      imageFileName="header-bg.jpg"
      imageAlt="header-bg"
      header="It's Nice To Meet You"
      subheader="Welcome To Our Studio!"
      extraInfo={
        <Button size="xl" variant="primary" className="text-uppercase" onClick={scrollToServices}>
          Tell Me More
        </Button>
      }
    />
  );
};

export default Top;
