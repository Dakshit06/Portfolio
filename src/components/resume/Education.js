import React from "react";
import ResumeTitle from "./ResumeTitle";
import { MdWork } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <div className="w-full grid grid-cols-9 px-6">
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Experience" icon={<MdWork />} />
        <ResumeCard
          badge="2019"
          title="Winner Electronic.Ltd "
          subTitle="Nashik."
          des="Hands-on experience as a trainee technician, gaining proficiency in troubleshooting electronic systems, performing repairs, and adhering to safety protocols."
        />
        <ResumeCard
          badge="2021-22"
          title=" Oil and Natural Gas Corporation,LTD. Mumbai"
          subTitle="Mumbai"
          des="Government Polytechnic,Nashik IT technician at ONGC, where responsibilities included troubleshooting hardware and software issues, configuring network systems, and providing technical support to users across the organization."
        />
        
      
      </div>
      <div className="w-full h-full hidden lgl:flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Education" icon={<GiGraduateCap />} />
        <ResumeCard
          badge="2018 - 2020"
          title="ITI In ICTSM"
          subTitle="Nashik"
          des="Hands-on experience in ITI ICTSM program, focusing on troubleshooting, system maintenance, and customer support."




          
        />
        <ResumeCard
          badge="2020 - 2022"
          title="Diploma"
          subTitle="Government Polytechnic, Nashik"
          des="Diploma in Computer Technology: Comprehensive training in software development, network administration, and hardware troubleshooting."
        />
        <ResumeCard
          badge="2023 - 2024"
          title="Information Technology"
          subTitle="Btech"
          des="Sanjivani College of Engineering,Kopargaon"
        />
        
       
      </div>
    </div>
  );
};

export default Education;
