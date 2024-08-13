import Contact from "@/components/Contact/contact"
import Faq from "@/components/Faq/Faq";
import Hero from "@/components/Services/Hero"
import Desc from "@/components/Services/desc"
import Tech from "@/components/Services/tech"
import Step from "@/components/Services/step"
import Card from "@/components/Services/card"

const aiTechIcons = [
  { name: "AWS", src: "/Services/techs/devops/aws.png" },
  { name: "Azure", src: "/Services/techs/devops/azure.png" },
  { name: "CSS", src: "/Services/techs/devops/css.png" },
  { name: "Flask", src: "/Services/techs/devops/flask.png" },
  { name: "Git", src: "/Services/techs/devops/git.png" },
  { name: "Github", src: "/Services/techs/devops/github.png" },
  { name: "HTML", src: "/Services/techs/devops/html.png" },
  { name: "Linux", src: "/Services/techs/devops/linux.svg" },
  { name: "My Sql", src: "/Services/techs/devops/mysql.png" },
  { name: "PHP", src: "/Services/techs/devops/php.png" },
  { name: "Phython", src: "/Services/techs/devops/phython.png" }
];

const faqs = [
  {
    question: "What is DevOps and its benefits?",
    answer: "DevOps integrates development and operations, enhancing efficiency, reliability, and delivery speed.",
  },
  {
    question: "How can Veritas Analytica help with DevOps?",
    answer: "Veritas Analytica customizes DevOps solutions, automating workflows and improving collaboration between teams.",
  },
  {
    question: "Which business areas benefit from DevOps?",
    answer: "All areas including development, operations, QA, and security benefit from improved efficiency and reliability.",
  },
  {
    question: "What technologies does Veritas Analytica use for DevOps?",
    answer: "We use tools like Jenkins, Kubernetes, Docker, and more to streamline operations and automate processes.",
  },
  {
    question: "How does DevOps impact delivery speed?",
    answer: "DevOps accelerates delivery by automating integration, deployment, and monitoring, reducing manual errors and downtime.",
  },
  {
    question: "Does Veritas Analytica offer ongoing support for DevOps?",
    answer: "Yes, we provide continuous support and optimization to ensure your DevOps solutions remain effective and efficient.",
  },
];

const stepsData = [
  {
    heading: "Define Objectives",
    description: "Identify goals and key metrics.\nUnderstand target infrastructure needs."
  },
  {
    heading: "Assess Current State",
    description: "Evaluate existing processes and tools.\nIdentify areas for improvement and automation."
  },
  {
    heading: "Design and Implementation",
    description: "Select appropriate DevOps tools and practices.\nImplement automated workflows and integrations."
  },
  {
    heading: "Continuous Improvement",
    description: "Monitor performance and gather feedback.\nOptimize processes and tools based on insights."
  }
];

const cardData = [
  {
    imgSrc: "/Services/devops/integration.png",
    title: "Continuous Integration",
    description: "Automate responses to common queries, Reduce burden on customer service teams, Enhance service quality and customer satisfaction"
  },
  {
    imgSrc: "/Services/devops/deployment.png",
    title: "Continuous Deployment",
    description: "Provide real-time product information and guidance, Eliminate wait time for customer inquiries, Improve user experience and increase sales"
  },
  {
    imgSrc: "/Services/devops/code.png",
    title: "Infrastructure as Code",
    description: "Automate the scheduling process, Minimize administrative workload and errors, Improve customer satisfaction and efficiency"
  },
  {
    imgSrc: "/Services/devops/monitring.png",
    title: "Monitoring and Logging",
    description: "Handle routine inquiries instantly, Reduce need for human intervention, Ensure consistent, high-quality user experience"
  },
  {
    imgSrc: "/Services/devops/integration.png",
    title: "Security Integration",
    description: "Deploy across multiple digital channels, Ensure consistent customer experience, Enhance engagement and gain deeper insights"
  },
  {
    imgSrc: "/Services/devops/collaboration.png",
    title: "Collaboration Tools",
    description: "Provide precise, industry-specific answers, Streamline communication and decision-making, Deliver intelligent, responsive support across industries"
  },
];


const page = () => {
  return (
    <div>
      <Hero 
        videoSrc="/Services/backgrounds/devops.jpg" 
        title="Streamline Business Operations with DevOps" 
        description="Accelerate Delivery, Enhance Efficiency, Ensure Reliability."
      />
      <Desc 
        title="Efficiency, Reliability, Growth"
        content="We understand the complexity of managing modern applications and infrastructure. Our DevOps services streamline your operations, ensuring faster delivery and enhanced efficiency. By automating processes such as code integration, deployment, and infrastructure management, we minimize errors and reduce downtime. Our real-time monitoring and logging solutions provide valuable insights, allowing you to proactively address issues and maintain system reliability. With integrated security practices, we help you stay compliant and protect your assets."
      />
      <Card 
        heading="DevOps Services" 
        cardData={cardData} 
      />
      <Tech totalIcons={aiTechIcons.length} title="Our DevOps Techstack" aiTechIcons={aiTechIcons}/>
      <Step title="DevOps Development Process" steps={stepsData} />
      <Faq faqs={faqs}/>
      <Contact />
    </div>
  )
}

export default page
