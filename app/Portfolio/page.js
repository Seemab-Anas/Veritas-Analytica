"use client";
import { useState } from "react";
import styles from "@/styles/Portfolio/portfolio.module.css";
import Link from "next/link";

const PortfolioPage = () => {
  const [selectedService, setSelectedService] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedScale, setSelectedScale] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("");

  const handleFilterChange = (filterType, value) => {
    switch (filterType) {
      case "service":
        setSelectedService(value);
        break;
      case "region":
        setSelectedRegion(value);
        break;
      case "scale":
        setSelectedScale(value);
        break;
      case "industry":
        setSelectedIndustry(value);
        break;
      default:
        break;
    }
  };

  const handleAllFilter = () => {
    setSelectedService("");
    setSelectedRegion("");
    setSelectedScale("");
    setSelectedIndustry("");
  };

  const filteredCaseStudies = caseStudies.filter((caseStudy) => {
    const serviceMatch =
      !selectedService || caseStudy.services.includes(selectedService);
    const regionMatch = !selectedRegion || caseStudy.region === selectedRegion;
    const scaleMatch = !selectedScale || caseStudy.scale === selectedScale;
    const industryMatch =
      !selectedIndustry || caseStudy.industry === selectedIndustry;
    return serviceMatch && regionMatch && scaleMatch && industryMatch;
  });

  return (
    <div>
      <div className={styles.portfolio_page1}>
        <h1>Case Studies</h1>
        <div>
          <div className={styles.dilivered}>
            <h1>09</h1>
            <p>Project Delivered</p>
          </div>
          <p className={styles.portfolio_about}>
            Explore a selection of our crafted work combining unique designs and
            rich technology. We always build from scratch, creating memorable
            brands, engaging websites, and digital products.
          </p>
        </div>
      </div>

      <div className={styles.portfolio_page2}>
        <div className={styles.filter}>
          <button onClick={handleAllFilter} className={styles.all}>All</button>
          <select
            onChange={(e) => handleFilterChange("service", e.target.value)}
            value={selectedService}
          >
            <option value="">Services</option>
            <option value="Devops">Devops</option>
            <option value="AI model development">AI model development</option>
            <option value="Data Analytics">Data Analytics</option>
            <option value="Data Visualization">Data Visualization</option>
            <option value="Process Automation">Process Automation</option>
            <option value="Data mining">Data mining</option>
          </select>
          <select
            onChange={(e) => handleFilterChange("region", e.target.value)}
            value={selectedRegion}
          >
            <option value="">Region</option>
            <option value="USA">USA</option>
            <option value="Australia">Australia</option>
            <option value="Saudi Arabia">Saudi Arabia</option>
            <option value="Malaysia">Malaysia</option>
          </select>
          <select
            onChange={(e) => handleFilterChange("scale", e.target.value)}
            value={selectedScale}
          >
            <option value="">Scale</option>
            <option value="SME">SME</option>
            <option value="Startup">Startup</option>
            <option value="Enterprise">Enterprise</option>
          </select>
          <select
            onChange={(e) => handleFilterChange("industry", e.target.value)}
            value={selectedIndustry}
          >
            <option value="">Industry</option>
            <option value="Education">Education</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Real estate">Real estate</option>
            <option value="Retail">Retail</option>
            <option value="Ecommerce">Ecommerce</option>
            <option value="Cloud">Cloud</option>
            <option value="Law & Advisory">Law & Advisory</option>
          </select>
        </div>

        {filteredCaseStudies.map((caseStudy, index) => (
          <div key={index} className={styles["casestudy-hero"]}>
            <img
              className={styles["case-back"]}
              src={caseStudy.img}
              alt={caseStudy.title}
            />
            <div className={styles.grad}></div>
            <div className={styles["bluring-case"]}>
              <h1>{caseStudy.title}</h1>
              <h2>{caseStudy.subtitle}</h2>
              <p>{caseStudy.description}</p>
              <Link href={caseStudy.source}>
              <button>
                View case study
                <img className={styles.arrow} src="/up-right-arrow.png" alt="" />
              </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const caseStudies = [
  {
    img: "/portfolio/Yazan.jpg",
    title: "Yazan",
    subtitle: "Making Yazaan’s Data Easy: All YouTube Stats in One Spot",
    description:
      "20% increase in engagement on Youtube channels with 30% increase in efficiency",
    services: ["Devops", "AI model development"],
    region: "USA",
    scale: "Startup",
    industry: "Entertainment",
    source:"/CaseStudy/Powr",
  },
  {
    img: "/portfolio/BMH.jpg",
    title: "BMH",
    subtitle:
      "Veritas Reduced Missing Data Entries for BMH by 55% Within 60 Days!",
    description:
      "From Data Mess to Operational Success - BMH's Path to Operational Excellence",
    services: ["Data Analytics", "Data Visualization"],
    region: "Australia",
    scale: "Enterprise",
    industry: "Healthcare",
    source:"/CaseStudy/BMH",
  },
  {
    img: "/portfolio/Symm.jpg",
    title: "Symm AI",
    subtitle: "Redefining Cloud Security with Helm Risk Evaluation",
    description:
      "Developed with Lama3 LLM model, compatible for all operating systems and cloud services like Azure, GCP, and AWS",
    services: ["Data Analytics", "Process Automation"],
    region: "Saudi Arabia",
    scale: "Enterprise",
    industry: "Cloud",
    source:"#",
  },
  {
    img: "/portfolio/Scholar.jpg",
    title: "Scholar Den",
    subtitle: "GRE Sentence Equivalence Generator Application",
    description:
      "Extension of Language Model (LLM) solution by creating an API for seamless integration and a user-friendly GUI for intuitive interaction.",
    services: ["AI model development", "Data mining"],
    region: "USA",
    scale: "SME",
    industry: "Education",
    source:"#",
  },
  {
    img: "/portfolio/AliBaba.jpg",
    title: "AliBaba Cloud",
    subtitle:
      "Enhancing Supermarket Competitor Analysis through AI-Powered Object Detection",
    description:
      "Precise tracking of product sales for the two competing brands, enabling better inventory management.",
    services: ["Process Automation", "Data Visualization"],
    region: "Malaysia",
    scale: "Enterprise",
    industry: "Retail",
    source:"#",
  },
  {
    img: "/portfolio/DirectCA.jpg",
    title: "Direct Counsel Australia",
    subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, similique.",
    services: ["Data Analytics", "Process Automation"],
    region: "Australia",
    scale: "SME",
    industry: "Law & Advisory",
    source:"#",
  },
  {
    img: "/portfolio/Milton.jpg",
    title: "Milton",
    subtitle:
      "Streamlining Executive Decision-Making for Milton with a Unified CEO Report",
    description:
      "$10K+ in Cost Savings | 700+ Hours Saved  | 25+ Profitable Decisions",
    services: ["Data mining", "AI model development"],
    region: "USA",
    scale: "Startup",
    industry: "Real estate",
    source:"#",
  },
  {
    img: "/portfolio/DesignH.jpg",
    title: "Design Holdings",
    subtitle:
      "Design Holdings Achieves $800K Savings with PowerBI-Enhanced Inventory Management",
    description:
      "From Clutter to Clarity - Design Holdings' Leap to Streamline Operations with PowerBI",
    services: ["Data Visualization", "Data Analytics"],
    region: "Saudi Arabia",
    scale: "Enterprise",
    industry: "Ecommerce",
    source:"#",
  },
  {
    img: "/portfolio/Zenith.jpg",
    title: "Zenith Technica",
    subtitle: "Zenith Technica’s Leap to 30% Higher Customer Engagement",
    description:
      "From Obstacles to Opportunities: Zenith Technica's Boost in Customer Engagement",
    services: ["Process Automation", "Devops"],
    region: "Malaysia",
    scale: "SME",
    industry: "Entertainment",
    source:"#",
  },
];

export default PortfolioPage;
