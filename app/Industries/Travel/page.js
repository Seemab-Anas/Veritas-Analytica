import Contact from "@/components/Contact/contact"
import Indus from "@/components/industries/indus"
import Casestudy from "@/components/industries/Casestudy"

const solutions = [
    {
      imageSrc: "/industries/travel/demand.png",
      heading: "1. Demand Forecasting",
      description: "Predict tourist influx and peak seasons to optimize resource allocation and improve service quality."
    },
    {
      imageSrc: "/industries/travel/customer.png",
      heading: "2. Customer Segmentation",
      description: "Analyze traveler data to create personalized marketing campaigns and tailor experiences to individual preferences."
    },
    {
      imageSrc: "/industries/travel/sentimental.png",
      heading: "3. Sentiment Analysis",
      description: "Use AI to analyze reviews and social media feedback, gaining insights into tourist satisfaction and areas for improvement."
    },
    {
      imageSrc: "/industries/travel/price.png",
      heading: "4. Dynamic Pricing",
      description: "Implement pricing strategies that adjust based on demand, competition, and market trends to maximize revenue."
    },
    {
      imageSrc: "/industries/health/efficiency.png",
      heading: "5. Operational Efficiency",
      description: "Optimize operations by analyzing workflow data to reduce wait times, streamline processes, and enhance overall efficiency."
    },
    {
      imageSrc: "/industries/health/fraud.png",
      heading: "6. Fraud Detection",
      description: "Leverage machine learning to detect and prevent fraudulent activities, ensuring the security of transactions and customer data."
    }
  ];
  
  const heroImageSrc = "/industries/travel/tourism.png";

const page = () => {
  return (
    <div>
        <Indus 
            title="Tourism Solutions" 
            desc="Empowering the tourism industry with data-driven insights and AI to enhance experiences and drive growth." 
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
