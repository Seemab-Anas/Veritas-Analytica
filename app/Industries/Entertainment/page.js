import Contact from "@/components/Contact/contact"
import Indus from "@/components/industries/indus"
import Casestudy from "@/components/industries/Casestudy"

const solutions = [
    {
      imageSrc: "/industries/entertainment/audience.png",
      heading: "1. Audience Analytics",
      description: "Leverage data to understand audience preferences and behaviors, enabling targeted content creation and marketing strategies."
    },
    {
      imageSrc: "/industries/entertainment/content.png",
      heading: "2. Content Personalization",
      description: "Use AI to deliver personalized content recommendations, enhancing viewer engagement and satisfaction."
    },
    {
      imageSrc: "/industries/travel/sentimental.png",
      heading: "3. Sentiment Analysis",
      description: "Analyze social media and review data to gauge audience reactions and improve content quality."
    },
    {
      imageSrc: "/industries/entertainment/revenue.png",
      heading: "4. Revenue Optimization",
      description: "Implement dynamic pricing and advertising strategies based on real-time data to maximize revenue streams."
    },
    {
      imageSrc: "/industries/health/efficiency.png",
      heading: "5. Operational Efficiency",
      description: "Streamline production and distribution processes through data-driven decision-making, reducing costs and improving efficiency."
    },
    {
      imageSrc: "/industries/health/fraud.png",
      heading: "6. Fraud Detection",
      description: "Detects and prevents fraudulent activities in digital content distribution and ticket sales, ensuring a secure environment for consumers."
    }
  ];
  
  const heroImageSrc = "/industries/entertainment/media.png";

const page = () => {
  return (
    <div>
        <Indus 
            title="Entertainment Solutions" 
            desc="Elevating the entertainment industry with data-driven insights and AI for unparalleled audience experiences and operational efficiency." 
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
]  

export default page
