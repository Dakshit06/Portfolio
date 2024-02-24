import React from "react";
import { FaAppStoreIos } from "react-icons/fa";
import { AiTwotoneAppstore } from "react-icons/ai";
import { SiAntdesign } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import ServicesCard from "./ServicesCard";

const MyServices = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <ServicesCard
        icons={<BiCodeAlt />}
        title="Web Development"
        subTitle="HTML,CSS,JavaScript."
      />
      <ServicesCard
        icons={<SiAntdesign />}
        title="Web Design"
        subTitle="Custom, responsive web design tailored to your brand, focusing on intuitive user interfaces, engaging graphics, and accessibility compliance."
      />
      <ServicesCard
        icons={<AiTwotoneAppstore />}
        title="Mobile Application"
        subTitle="Tailored mobile app development, ensuring seamless user experience, platform compatibility, robust backend integration, and ongoing support."
      />
      <ServicesCard
        icons={<FaAppStoreIos />}
        title="Hardware and Networking"
        subTitle="IT and Network Support and Installing  Software on Linux and Windows OS."
      />
    </div>
  );
};

export default MyServices;
