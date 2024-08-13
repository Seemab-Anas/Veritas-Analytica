import Contact from "@/components/Contact/contact"
import Faq from "@/components/Faq/Faq";
import Hero from "@/components/Services/Hero"
import Desc from "@/components/Services/desc"
import Tech from "@/components/Services/tech"
import Step from "@/components/Services/step"
import Card from "@/components/Services/card"

const aiTechIcons = [
  { name: "DOMO", src: "/Services/techs/analytics/domo.png" },
  { name: "Google Sheets", src: "/Services/techs/analytics/googleSheets.png" },
  { name: "Looker", src: "/Services/techs/analytics/looker.png" },
  { name: "Power My Analytics", src: "/Services/techs/analytics/power.svg" },
  { name: "Power BI", src: "/Services/techs/analytics/powerbi.png" }
];

const faqs = [
  {
    question: "What do Business Intelligence Services at Veritas Analytica involve?",
    answer: "Our Business Intelligence Services merge traditional data analysis methods with modern data analytics services to provide comprehensive insights into your business operations. These services facilitate smarter, data-driven decision-making by highlighting key patterns and trends that might otherwise go unnoticed.",
  },
  {
    question: "How do your data analytics services differ from other providers?",
    answer: "At Veritas Analytica, we distinguish ourselves through our dedication to 'mining the truth within your data'. This means we not only collect and analyze your data but also translate it into actionable business intelligence that can directly impact your strategic goals and operational efficiency.",
  },
  {
    question: "What business challenges do your Business Intelligence Services address?",
    answer: "Our services are designed to tackle a wide range of business challenges, from reducing operational costs and enhancing customer satisfaction to identifying new market opportunities and optimizing supply chains. By integrating data from various sources, we provide a holistic view that is crucial for resolving complex business issues.",
  },
  {
    question: "Can Veritas Analytica’s Business Intelligence and Data Analytics Services predict future trends?",
    answer: "Yes, our services include predictive analytics, which uses historical data to forecast future trends and behaviors. This aspect of our business intelligence capabilities allows companies to anticipate market demands, adjust strategies proactively, and stay ahead of the competition.",
  },
  {
    question: "What tools and technologies are used in your data analytics services?",
    answer: "Veritas Analytica utilizes state-of-the-art technologies and tools in our data analytics services, including AI and machine learning algorithms, to ensure that our business intelligence solutions are not only robust but also at the cutting edge of technological advancements.",
  },
];

const stepsData = [
  {
    heading: "Data Collection and Preparation",
    description: "Gather and refine relevant SME data from various sources, ensuring it's cleaned and standardized for analysis, enabling informed decision-making and strategic planning."
  },
  {
    heading: "Data Exploration",
    description: "Analyze the data to identify patterns and insights using techniques like visualization and segmentation, focusing on SME-specific trends for actionable strategies."
  },
  {
    heading: "Model Development",
    description: "Create and fine-tune an analytical model using appropriate statistical and machine learning methods, ensuring its relevance to the SME's needs."
  },
  {
    heading: "Deployment and Maintenance",
    description: "Implement real-time analysis in SME operations for ongoing accuracy and adaptability, ensuring swift responses to changing demands and sustained growth."
  }
];

const cardData = [
  {
    imgSrc: "/Services/data analytics/integration.png",
    title: "Data Integration",
    description: "Automate responses to common queries, Reduce burden on customer service teams, Enhance service quality and customer satisfaction"
  },
  {
    imgSrc: "/Services/data analytics/accuracy.png",
    title: "Data Accuracy",
    description: "Provide real-time product information and guidance, Eliminate wait time for customer inquiries, Improve user experience and increase sales"
  },
  {
    imgSrc: "/Services/data analytics/Data Interpretation.png",
    title: "Data Interpretation",
    description: "Automate the scheduling process, Minimize administrative workload and errors, Improve customer satisfaction and efficiency"
  },
  {
    imgSrc: "/Services/data analytics/Strategic Intelligence.png",
    title: "Strategic Intelligence",
    description: "Handle routine inquiries instantly, Reduce need for human intervention, Ensure consistent, high-quality user experience"
  },
  {
    imgSrc: "/Services/data analytics/custom analytics.png",
    title: "Custom Analytics Solutions",
    description: "Deploy across multiple digital channels, Ensure consistent customer experience, Enhance engagement and gain deeper insights"
  },
  {
    imgSrc: "/Services/data analytics/trend.png",
    title: "Trend Analysis",
    description: "Provide precise, industry-specific answers, Streamline communication and decision-making, Deliver intelligent, responsive support across industries"
  },
];


const page = () => {
  return (
    <div>
      <Hero 
        videoSrc="/Services/backgrounds/analytics.jpg" 
        title="Let Data Guide Your Next Big Leap." 
        description="Use data to plan your next move"
      />
      <Desc 
        title="Bring Your Data to Life with Accurate Analytics!"
        content="At Veritas Analytica, we transform complex data into clear, actionable insights. Our principle of mining the truth within your data ensures accurate analysis that drives business growth and efficiency. Led by an ex-Microsoft leader, our team includes MIT data scientists, PhD machine learning engineers, process automation experts, and financial analysts. With experience in Banking, Healthcare, and E-commerce, we've saved over $1.5 million in operational costs. Discover how our data analytics can benefit your business."
      />
      <Card 
        heading="Leverage Insights with Data Analytics" 
        cardData={cardData} 
      />
      <Tech totalIcons={aiTechIcons.length} title="Our Data Analytics & Visualization Techstack" aiTechIcons={aiTechIcons}/>
      <Step title="Data Analytics Development Process" steps={stepsData} />
      <Faq faqs={faqs}/>
      <Contact />
    </div>
  )
}

export default page
