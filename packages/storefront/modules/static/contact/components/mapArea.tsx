import React, { FC } from "react";

const MapArea: FC = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.04133157134!2d90.39788591496837!3d23.781542484574032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c769c6633a2f%3A0xbb3979a7e02a8c90!2sBrain%20Station%2023!5e0!3m2!1sen!2sbd!4v1651824430053!5m2!1sen!2sbd"
      width="100%"
      height="460"
      style={{ border: 0 }}
      loading="lazy"
    ></iframe>
  );
};

export default MapArea;
