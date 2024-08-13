import Contact from "@/components/Contact/contact"
import Indus from "@/components/industries/indus"
import Casestudy from "@/components/industries/Casestudy"

const solutions = [
    {
      imageSrc: "/industries/finance/risk.png",
      heading: "1. Risk Management",
      description: "Utilize predictive analytics to assess and mitigate financial risks, ensuring stability and compliance."
    },
    {
      imageSrc: "/industries/health/fraud.png",
      heading: "2. Fraud Detection",
      description: "Implement AI-driven systems to detect and prevent fraudulent activities in real-time, safeguarding assets."
    },
    {
      imageSrc: "/industries/travel/customer.png",
      heading: "3. Customer Segmentation",
      description: "Analyze customer data to deliver personalized financial products and services, enhancing customer satisfaction."
    },
    {
      imageSrc: "/industries/finance/credit.png",
      heading: "4. Credit Scoring",
      description: "Use advanced algorithms to provide more accurate credit scoring, improving loan approval processes and reducing default rates."
    },
    {
      imageSrc: "/industries/finance/algo.png",
      heading: "5. Algorithmic Trading",
      description: "Develop AI models to optimize trading strategies, enhance decision-making, and maximize returns."
    },
    {
      imageSrc: "/industries/finance/compliance.png",
      heading: "6. Regulatory Compliance",
      description: "Leverage AI to monitor and ensure compliance with financial regulations, reducing the risk of penalties and fines."
    }
  ];
  
  const heroImageSrc = "/industries/finance/finance.png";

const page = () => {
  return (
    <div>
        <Indus 
            title="Finance Solutions" 
            desc="Harnessing the power of data and AI to drive financial innovation and operational excellence." 
            solutions={solutions}    
            heroImageSrc={heroImageSrc}
             
        />    
        <Casestudy CaseStudies={caseStudies} />
        <Contact />
    </div>
  )
}

const caseStudies = [
  {
    img: "/industries/casestudy.jpg",
    title: "View Case Studies",
    subtitle:
      "lorem lorem lorem lorem lorem",
    source:"/Portfolio",
  },
]  

export default page
