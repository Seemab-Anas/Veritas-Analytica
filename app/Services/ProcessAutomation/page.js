import Contact from "@/components/Contact/contact"
import Faq from "@/components/Faq/Faq";
import Hero from "@/components/Services/Hero"
import Desc from "@/components/Services/desc"
import Tech from "@/components/Services/tech"
import Step from "@/components/Services/step"
import Card from "@/components/Services/card"

const aiTechIcons = [
  { name: "Adverity", src: "/Services/techs/automation/adverity.png" },
  { name: "Numpy", src: "/Services/techs/automation/numpy.png" },
  { name: "Pandas", src: "/Services/techs/automation/Pandas.png" },
  { name: "Rapidminer", src: "/Services/techs/automation/rapid.png" },
  { name: "Weka", src: "/Services/techs/automation/weka.png" }
];

const faqs = [
  {
    question: "What is business process automation and how does it benefit my company?",
    answer: "Business process automation involves the use of technology to execute recurring tasks or processes in a business where manual effort can be replaced. This is done to achieve cost minimization, greater efficiency, and streamlined processes. Implementing automation within your business can significantly reduce the time spent on routine tasks, enhance accuracy by reducing human error, and allow your team to focus on more strategic initiatives.",
  },
  {
    question: "How can Veritas Analytica help implement process automation in my business?",
    answer: "Veritas Analytica specializes in integrating process automation solutions tailored to the unique needs of your business. We assess your current processes, identify areas that can benefit from automation, and deploy advanced analytics to ensure seamless integration. Our expertise in data analysis allows us to predict areas of improvement and implement solutions that not only streamline operations but also enhance overall productivity.",
  },
  {
    question: "What are some common areas of a business that can benefit from automation?",
    answer: "Nearly every department can benefit from some level of automation. Common areas include customer service, where automated responses to common inquiries can improve efficiency; HR for streamlining recruitment and onboarding processes; finance for invoice processing and payroll; and sales and marketing for lead generation activities and customer relationship management.",
  },
  {
    question: "What technologies does Veritas Analytica use for implementing process automation?",
    answer: "At Veritas Analytica, we utilize a variety of cutting-edge technologies tailored to the specific needs of each client. These may include AI and machine learning for advanced decision-making, robotic process automation (RPA) for repetitive tasks, and customized software solutions that integrate with existing ERP or CRM systems to enhance operational efficiency.",
  },
  {
    question: "How does process automation impact the customer experience?",
    answer: "Process automation significantly enhances the customer experience by speeding up response times, ensuring consistency in customer interactions, and providing a more personalized experience. Automated systems can help in quickly resolving customer queries, providing them with timely updates, and ensuring that their needs are met efficiently and effectively.",
  },
];

const stepsData = [
  {
    heading: "Identify Goals",
    description: "We start by understanding your specific needs and outlining the key objectives for automation within your data processes."
  },
  {
    heading: "Mapping Design",
    description: "Detailed mapping of existing data workflows to identify automation opportunities. We design streamlined, automated workflows that enhance efficiency and accuracy."
  },
  {
    heading: "Implementation",
    description: "Deploy the most suitable automation technologies to transform your data processes, ensuring seamless integration with existing systems."
  },
  {
    heading: "Monitoring and Optimization",
    description: "Post-implementation, we continuously monitor the automated processes to ensure optimal performance and adapt to new challenges and opportunities."
  }
];

const cardData = [
  {
    imgSrc: "/Services/process auto/data.png",
    title: "Data Integration",
    description: "Automate responses to common queries, Reduce burden on customer service teams, Enhance service quality and customer satisfaction"
  },
  {
    imgSrc: "/Services/process auto/data cleaning.png",
    title: "Data Cleaning",
    description: "Provide real-time product information and guidance, Eliminate wait time for customer inquiries, Improve user experience and increase sales"
  },
  {
    imgSrc: "/Services/process auto/custom auto.png",
    title: "Automation Workflows",
    description: "Automate the scheduling process, Minimize administrative workload and errors, Improve customer satisfaction and efficiency"
  },
  {
    imgSrc: "/Services/process auto/report.png",
    title: "Automated Reporting",
    description: "Handle routine inquiries instantly, Reduce need for human intervention, Ensure consistent, high-quality user experience"
  },
  {
    imgSrc: "/Services/process auto/predictive analysis.png",
    title: "Predictive Automation",
    description: "Deploy across multiple digital channels, Ensure consistent customer experience, Enhance engagement and gain deeper insights"
  },
  {
    imgSrc: "/Services/process auto/custom auto.png",
    title: "Custom Solutions",
    description: "Provide precise, industry-specific answers, Streamline communication and decision-making, Deliver intelligent, responsive support across industries"
  },
];

const page = () => {
  return (
    <div>
      <Hero 
        videoSrc="/Services/backgrounds/auto.jpg" 
        title="Automation for seamless business operations." 
        description="Simplify Your Workflow with Automation"
      />
      <Desc 
        title="Data-Driven Excellence: Automate Smarter Decisions"
        content="Transform data into a roadmap for success with our advanced automation tools. Seamlessly integrating with your systems, we process large data volumes, identify crucial trends, and help you understand market dynamics and customer behavior. With Veritas, navigate data confidently using AI-driven insights. Embrace AI for smarter data processes and elevate your business strategy."
      />
      <Card 
        heading="Process Automation Expertise" 
        cardData={cardData} 
      />
      <Tech totalIcons={aiTechIcons.length} title="Our Process Automation Techstack" aiTechIcons={aiTechIcons}/>
      <Step title="Process Automation Development Process" steps={stepsData} />
      <Faq faqs={faqs}/>
      <Contact />
    </div>
  )
}

export default page
