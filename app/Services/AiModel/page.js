import Contact from "@/components/Contact/contact"
import Faq from "@/components/Faq/Faq";
import Hero from "@/components/Services/Hero"
import Desc from "@/components/Services/desc"
import Tech from "@/components/Services/tech"
import Step from "@/components/Services/step"
import Card from "@/components/Services/card"

const aiTechIcons = [
  { name: "Bard AI", src: "/Services/techs/aimodel/bardai.png" },
  { name: "Chat GPT", src: "/Services/techs/aimodel/chatgpt.png" },
  { name: "Clude AI", src: "/Services/techs/aimodel/cludeai.png" },
  { name: "Tawk TO", src: "/Services/techs/aimodel/tawkto.png" },
  { name: "Twilio", src: "/Services/techs/aimodel/twilio.svg" }
];

const faqs = [
  {
    question: "What is AI model development at Veritas Analytica?",
    answer: "AI model development involves creating and training algorithms to analyze data and make predictions. Veritas Analytica customizes these models to meet your business needs, delivering actionable insights and real value.",
  },
  {
    question: "How can AI models transform my business?",
    answer: "AI models automate tasks, improve customer service, optimize logistics, and forecast trends, saving time and costs while enabling data-driven strategic decisions.",
  },
  {
    question: "Which industries benefit from AI models?",
    answer: "Industries like finance, healthcare, retail, and manufacturing see significant benefits from AI, including risk assessment, predictive maintenance, and enhanced efficiency.",
  },
  {
    question: "What data is needed for effective AI models?",
    answer: "We use historical, real-time, structured, and unstructured data to build robust models. The specific data required varies by application and business problem.",
  },
  {
    question: "How does Veritas Analytica ensure model accuracy?",
    answer: "We use advanced training and validation techniques and continuously monitor and retrain models with new data to maintain high accuracy and relevance.",
  },
  {
    question: "How do I start with AI model development?",
    answer: "Contact us via our website or phone for an initial consultation to discuss your needs and how we can tailor our AI services to your goals.",
  },
];

const stepsData = [
  {
    heading: "Requirement Gathering",
    description:
      "Identify business needs and goals. Design a user-friendly, brand-aligned bot."
  },
  {
    heading: "Bot Development",
    description:
      "Create a smart AI bot for customer service or lead generation. Integrate seamlessly with existing systems."
  },
  {
    heading: "Testing & Optimization",
    description:
      "Test thoroughly to ensure accuracy and efficiency. Optimize responses with machine learning."
  },
  {
    heading: "Deployment",
    description:
      "Deploy the bot, monitor performance, and update regularly based on feedback and business needs."
  }
];

const cardData = [
  {
    imgSrc: "/Services/aimodel/customer chatbot.png",
    title: "Customer Support Chatbots",
    description: "Automate responses to common queries, Reduce burden on customer service teams, Enhance service quality and customer satisfaction"
  },
  {
    imgSrc: "/Services/aimodel/ecomerce chatbot.png",
    title: "E-commerce Support Chatbots",
    description: "Provide real-time product information and guidance, Eliminate wait time for customer inquiries, Improve user experience and increase sales"
  },
  {
    imgSrc: "/Services/aimodel/appointment chatbot.png",
    title: "Appointment Scheduling Chatbots",
    description: "Automate the scheduling process, Minimize administrative workload and errors, Improve customer satisfaction and efficiency"
  },
  {
    imgSrc: "/Services/aimodel/informational chatbot.png",
    title: "Informational Chatbots",
    description: "Handle routine inquiries instantly, Reduce need for human intervention, Ensure consistent, high-quality user experience"
  },
  {
    imgSrc: "/Services/aimodel/multichannel deployment.png",
    title: "Multichannel Deployment",
    description: "Deploy across multiple digital channels, Ensure consistent customer experience, Enhance engagement and gain deeper insights"
  },
  {
    imgSrc: "/Services/aimodel/GPT solutions.png",
    title: "Custom GPT Solutions",
    description: "Provide precise, industry-specific answers, Streamline communication and decision-making, Deliver intelligent, responsive support across industries"
  },
];

const page = () => {
  return (
    <div>
      <Hero 
        videoSrc="/Services/backgrounds/ai.jpg" 
        title="Next-Gen AI Model Development Your Vision, Our Expertise." 
        description="Delivering precision-driven AI solutions tailored to your needs."
      />
      <Desc 
        title="Smarter AI Solutions for Smarter Outcomes"
        content="Imagine equipping your business with AI that truly understands your customers. Our advanced Natural Language Processing ensures your bots communicate with precision and efficiency, making every interaction smooth and meaningful. Dive deep into your customer conversations with AI-driven analytics, uncovering valuable insights that can shape your business strategies and decisions. We make it easy to integrate our AI bots into your existing systems, handling the complexities so you can focus on what you do best."
      />
      <Card 
        heading="Tailored AI Models for Your Business" 
        cardData={cardData} 
      />
      <Tech totalIcons={aiTechIcons.length} title="Our Data Analytics & Visualization Techstack" aiTechIcons={aiTechIcons}/>
      <Step title="AI Model Development Process" steps={stepsData} />
      <Faq faqs={faqs}/>
      <Contact />
    </div>
  )
}

export default page
