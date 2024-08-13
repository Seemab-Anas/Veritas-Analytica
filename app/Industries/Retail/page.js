import Contact from "@/components/Contact/contact"
import Indus from "@/components/industries/indus"
import Casestudy from "@/components/industries/Casestudy"

const solutions = [
    {
      imageSrc: "/industries/travel/demand.png",
      heading: "1. Demand Forecasting",
      description: "Predict future product demand to optimize inventory levels, reduce stockouts, and minimize overstock."
    },
    {
      imageSrc: "/industries/travel/customer.png",
      heading: "2. Customer Segmentation",
      description: "Analyze customer data to create targeted marketing campaigns and personalized shopping experiences."
    },
    {
      imageSrc: "/industries/travel/sentimental.png",
      heading: "3. Sentiment Analysis",
      description: "Utilize AI to analyze customer feedback and reviews, gaining insights into customer satisfaction and areas for improvement."
    },
    {
      imageSrc: "/industries/retail/priceopt.png",
      heading: "4. Price Optimization",
      description: "Implement dynamic pricing strategies based on market trends, competitor analysis, and customer behavior to maximize profits."
    },
    {
      imageSrc: "/industries/health/fraud.png",
      heading: "5. Fraud Detection",
      description: "Leverage machine learning to identify fraudulent transactions and reduce financial losses."
    },
    {
      imageSrc: "/industries/retail/supplychain.png",
      heading: "6. Supply Chain Optimization",
      description: "Improve supply chain efficiency by predicting disruptions, optimizing logistics, and managing supplier performance."
    }
  ];
  
  const heroImageSrc = "/industries/retail/retail.png";

const page = () => {
  return (
    <div>
        <Indus 
            title="Retail Solutions" 
            desc="In the Retail industry, managing vast amounts of data from sales, inventory, and customer feedback is crucial for optimizing operations and enhancing customer experiences." 
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
