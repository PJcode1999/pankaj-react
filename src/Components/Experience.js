// Experience.js
import { FaBriefcase } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

const experienceData = [
  {
    logo: "https://heuristictechnopark.com/img/stickylogo.png",
    company: "Heuristic Technopark",
    role: "Python Intern",
    duration: "January 2024 - April 2024",
    location: " Nashik, Maharashtra 42200",
    description: [
      "An Autonomous College Affiliated to KBC North Maharashtra University, Jalgaon",
      "Has successfully completed the Training & Internship on Python + Django From 12 January to 13 April 2023 in Heuristic Technopark."
    ]
  },
  {
    logo: "https://koliinfotech.com/_next/static/media/SVGlogo.397f516a.svg",
    company: "Startup",
    role: "Full Stack python Developer",
    duration: "February 2024 - August 2025",
    location: "Dindoli Surat, Gujarat - 394210",
    description: [
      "Built scalable apps with Python (Django, Flask), boosting efficiency by 25% and cutting load times by 40%.", 
      "Designed APIs, fixed performance issues, improved UX, and wrote tests with 95% coverage."
    ]
  }
];

const ExperienceBox = ({ data }) => (
  <div className="experienceBox">
    <img className="companyLogo" src={data.logo} alt={`${data.company} logo`} />
    <h3 className="experienceCompany">{data.company}</h3>
    <p className="experienceRole"><FaBriefcase /> {data.role}</p>
    <p className="experienceDetails">{data.duration}</p>
    <p className="experienceDetails"><MdLocationOn /> {data.location}</p>
    <ul className="experienceDescription">
      {data.description.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

const Experience = () => (
  <section>
    <h1 className="experienceHeading">My <b>Experience</b></h1>
    <div className="experience">
      {experienceData.map((item, idx) => (
        <ExperienceBox key={idx} data={item} />
      ))}
    </div>
  </section>
);

export default Experience;
