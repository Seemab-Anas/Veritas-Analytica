import Contact from "@/components/Contact/contact"
import Faq from "@/components/Faq/Faq";
import Hero from "@/components/Services/Hero"
import Desc from "@/components/Services/desc"
import Tech from "@/components/Services/tech"
import Step from "@/components/Services/step"
import Card from "@/components/Services/card"

const aiTechIcons = [
  { name: "Google Studio", src: "/Services/techs/datavisual/googe studio.png" },
  { name: "Looker Studio", src: "/Services/techs/datavisual/looker.png" },
  { name: "Power BI", src: "/Services/techs/datavisual/powerbi.png" },
  { name: "Tableau", src: "/Services/techs/datavisual/Tableau.png" },
  { name: "Zoho Analytics", src: "/Services/techs/datavisual/zoho-Analytics.png" }
];

const faqs = [
  {
    question: "What is data visualization and its benefits?",
    answer: "Data visualization transforms data into visual formats, enhancing understanding and decision-making.",
  },
  {
    question: "How can Veritas Analytica help with data visualization?",
    answer: "Veritas Analytica customizes visualization solutions for your business, integrating data and creating interactive visuals.",
  },
  {
    question: "Which business areas benefit from data visualization?",
    answer: "All areas including finance, marketing, operations, and HR benefit from improved data understanding and communication.",
  },
  {
    question: "What technologies does Veritas Analytica use for visualization?",
    answer: "We use tools like Tableau, Power BI, and custom solutions to create effective visuals.",
  },
  {
    question: "How does data visualization impact decision-making?",
    answer: "Visualization provides clear insights, enabling faster and more accurate decisions.",
  },
  {
    question: "Does Veritas Analytica offer ongoing support for data visualization?",
    answer: "Yes, we provide continuous support and optimization to ensure your visualization solutions remain effective.",
  },
];

const stepsData = [
  {
    heading: "Define Objectives",
    description: "Identify goals and key metrics.\nUnderstand target audience needs."
  },
  {
    heading: "Data Preparation",
    description: "Gather, clean, and integrate data.\nStructure data for effective visualization."
  },
  {
    heading: "Design and Development",
    description: "Select tools and techniques.\nCreate and refine visual prototypes."
  },
  {
    heading: "Testing and Refinement",
    description: "Test for accuracy and usability.\nGather feedback and optimize visuals."
  }
];

const cardData = [
  {
    imgSrc: "/Services/data visual/dashboard.png",
    title: "Custom Dashboards",
    description: "Automate responses to common queries, Reduce burden on customer service teams, Enhance service quality and customer satisfaction"
  },
  {
    imgSrc: "/Services/data visual/integration.png",
    title: "Data Integration",
    description: "Provide real-time product information and guidance, Eliminate wait time for customer inquiries, Improve user experience and increase sales"
  },
  {
    imgSrc: "/Services/data visual/Advanced Analytics.png",
    title: "Advanced Analytics",
    description: "Automate the scheduling process, Minimize administrative workload and errors, Improve customer satisfaction and efficiency"
  },
  {
    imgSrc: "/Services/data visual/Visualization Design.png",
    title: "Visualization Design",
    description: "Handle routine inquiries instantly, Reduce need for human intervention, Ensure consistent, high-quality user experience"
  },
  {
    imgSrc: "/Services/data visual/performance.png",
    title: "Performance Optimization",
    description: "Deploy across multiple digital channels, Ensure consistent customer experience, Enhance engagement and gain deeper insights"
  },
  {
    imgSrc: "/Services/data visual/training.png",
    title: "Training Support",
    description: "Provide precise, industry-specific answers, Streamline communication and decision-making, Deliver intelligent, responsive support across industries"
  },
];

const page = () => {
  return (
    <div>
      <Hero 
        videoSrc="/Services/backgrounds/visual.jpg" 
        title="See Beyond Numbers with Data Visualization" 
        description="Clear Visuals, Smarter Decisions, Unmatched Growth."
      />
      <Desc 
        title="Visual Clarity, Strategic Growth"
        content="We understand the challenges you face in making sense of complex data. Our data visualization solutions transform your data into clear, actionable insights, allowing you to make data-driven decisions with confidence. Imagine having real-time dashboards that update instantly, giving you the latest information at your fingertips. Our interactive visuals and customized reports are designed to meet your unique needs, helping you identify trends and uncover opportunities quickly. With our self-service analytics and drill-down capabilities, your team can explore data effortlessly, fostering collaboration and strategic planning."
      />
      <Card 
        heading="Data Visualization Services" 
        cardData={cardData} 
      />
      <Tech totalIcons={aiTechIcons.length} title="Our Data Visualization Techstack" aiTechIcons={aiTechIcons}/>
      <Step title="Data Visualization Development Process" steps={stepsData} />
      <Faq faqs={faqs}/>
      <Contact />
    </div>
  )
}

export default page
