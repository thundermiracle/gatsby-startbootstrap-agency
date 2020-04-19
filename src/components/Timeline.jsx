import React from "react";

import TimelineItem from "components/TimelineItem";
import "./Timeline.scss";

const Timeline = () => {
  return (
    <ul className="timeline">
      <TimelineItem
        imageFileName="about/1.jpg"
        header="2009-2011"
        subheader="Our Humble Beginnings"
        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum
                      eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero
                      unde, sed, incidunt et ea quo dolore laudantium consectetur!"
      />
      <TimelineItem
        invert
        imageFileName="about/2.jpg"
        header="March 2011"
        subheader="An Agency is Born"
        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum
                      eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero
                      unde, sed, incidunt et ea quo dolore laudantium consectetur!"
      />
      <TimelineItem
        imageFileName="about/3.jpg"
        header="December 2012"
        subheader="Transition to Full Service"
        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum
                      eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero
                      unde, sed, incidunt et ea quo dolore laudantium consectetur!"
      />
      <TimelineItem
        invert
        imageFileName="about/4.jpg"
        header="July 2014"
        subheader="Phase Two Expansion"
        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum
                      eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero
                      unde, sed, incidunt et ea quo dolore laudantium consectetur!"
      />
      <TimelineItem
        imageContent={
          <h4>
            Be Part
            <br />
            Of Our
            <br />
            Story!
          </h4>
        }
      />
    </ul>
  );
};

export default Timeline;
