import Contact from "@/components/Contact/contact"
import Faq from "@/components/Faq/Faq";
import Hero from "@/components/Services/Hero"
import Desc from "@/components/Services/desc"
import Tech from "@/components/Services/tech"
import Step from "@/components/Services/step"
import Card from "@/components/Services/card"

const aiTechIcons = [
  { name: "Octoparse", src: "/Services/techs/datamining/octoparse.png" },
  { name: "Playwright", src: "/Services/techs/datamining/playwright.png" },
  { name: "Scrapy", src: "/Services/techs/datamining/scrapy.webp" },
  { name: "Selenium", src: "/Services/techs/datamining/selenium.png" }
];

const faqs = [
  {
    question: "What are Veritas Analytica's data mining services?",
    answer: "Our data mining services extract actionable insights from large datasets, uncovering hidden patterns and trends to enhance ROI and optimize resources.",
  },
  {
    question: "How do data mining solutions impact my bottom line?",
    answer: "Our data mining expertise predicts customer behavior, manages risks, and identifies new revenue opportunities, boosting profitability and reducing costs.",
  },
  {
    question: "Which industries benefit from your data mining services?",
    answer: "Retail, healthcare, finance, and technology sectors benefit from our data mining solutions for customer segmentation, fraud detection, and market analysis.",
  },
  {
    question: "What makes Veritas Analytica's data mining unique?",
    answer: "Our data mining approach combines advanced analytics with deep industry knowledge, offering actionable recommendations for your business strategy.",
  },
  {
    question: "Can you handle large volumes of data for mining?",
    answer: "Yes, our data mining infrastructure efficiently processes and analyzes large datasets, scaling to meet your needs without compromising speed or accuracy.",
  },
  {
    question: "How do I start with your data mining services?",
    answer: "Contact us via our website or phone for an initial consultation. We'll tailor a data mining strategy to align with your business goals.",
  },
];

const stepsData = [
  {
    heading: "Data Collection and Preparation",
    description: "Collect, clean, and organize data for high-quality analysis."
  },
  {
    heading: "Data Exploration",
    description: "Analyze data to identify patterns using visualization and clustering."
  },
  {
    heading: "Model Development",
    description: "Develop and test machine learning models for accuracy and performance."
  },
  {
    heading: "Deployment and Maintenance",
    description: "Deploy the model and update it regularly to maintain accuracy."
  }
];

const cardData = [
  {
    imgSrc: "/Services/data mining/Data Extraction.png",
    title: "Data Extraction",
    description: "Automate responses to common queries, Reduce burden on customer service teams, Enhance service quality and customer satisfaction"
  },
  {
    imgSrc: "/Services/data mining/data cleaning.png",
    title: "Data Cleaning",
    description: "Provide real-time product information and guidance, Eliminate wait time for customer inquiries, Improve user experience and increase sales"
  },
  {
    imgSrc: "/Services/data mining/data visuallization.png",
    title: "Data Visualization",
    description: "Automate the scheduling process, Minimize administrative workload and errors, Improve customer satisfaction and efficiency"
  },
  {
    imgSrc: "/Services/data mining/Business Intelligence.png",
    title: "Business Intelligence",
    description: "Handle routine inquiries instantly, Reduce need for human intervention, Ensure consistent, high-quality user experience"
  },
  {
    imgSrc: "/Services/data mining/API Integration.png",
    title: "API Integration",
    description: "Deploy across multiple digital channels, Ensure consistent customer experience, Enhance engagement and gain deeper insights"
  },
  {
    imgSrc: "/Services/data mining/Big Data Analytics.png",
    title: "Big Data Analytics",
    description: "Provide precise, industry-specific answers, Streamline communication and decision-making, Deliver intelligent, responsive support across industries"
  },
];


const page = () => {
  return (
    <div>
      <Hero 
        videoSrc="/Services/backgrounds/mining.jpg" 
        title="Turning Data into Gold with Data Mining" 
        description="Discover Insights, Optimize Operations, Drive Growth"
      />
      <Desc 
        title="Precise Data, Powerful Insights"
        content="Experience the power of making decisions backed by accurate and reliable data. With our data mining services, we ensure your data is clean and dependable, allowing you to trust every insight. We don't just provide data; we transform it into actionable insights, identifying trends that empower you to make smarter, more strategic business decisions."
      />
      <Card 
        heading="Decision-Driven Data Mining Services" 
        cardData={cardData} 
      />
      <Tech totalIcons={aiTechIcons.length} title="Our Data Mining Techstack" aiTechIcons={aiTechIcons}/>
      <Step title="Data Mining Development Process" steps={stepsData} />
      <Faq faqs={faqs}/>
      <Contact />
    </div>
  )
}

export default page
