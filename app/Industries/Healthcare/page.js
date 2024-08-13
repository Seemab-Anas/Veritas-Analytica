import Contact from "@/components/Contact/contact"
import Indus from "@/components/industries/indus"
import Casestudy from "@/components/industries/Casestudy"

const solutions = [
    {
      imageSrc: "/industries/health/predictive.png",
      heading: "1. Predictive Analytics",
      description: "Utilize patient data to predict disease outbreaks, readmission rates, and patient outcomes to improve care and resource allocation."
    },
    {
      imageSrc: "/industries/health/patient.png",
      heading: "2. Patient Segmentation",
      description: "Analyze patient demographics and medical history to create personalized treatment plans and improve patient engagement."
    },
    {
      imageSrc: "/industries/health/imagescan.png",
      heading: "3. Medical Imaging Analysis",
      description: "Leverage AI to assist in diagnosing diseases by analyzing medical images with greater accuracy and speed."
    },
    {
      imageSrc: "/industries/health/decision.png",
      heading: "4. Clinical Decision Support",
      description: "Implement AI-driven systems to support healthcare providers in making informed clinical decisions based on real-time data."
    },
    {
      imageSrc: "/industries/health/efficiency.png",
      heading: "5. Operational Efficiency",
      description: "Optimize hospital operations by analyzing workflow data to reduce wait times, streamline processes, and improve resource management."
    },
    {
      imageSrc: "/industries/health/fraud.png",
      heading: "6. Fraud Detection",
      description: "Use machine learning to detect fraudulent activities in billing and insurance claims, minimizing financial losses."
    }
  ];
  
  const heroImageSrc = "/industries/health/healthcare.png";

const page = () => {
  return (
    <div>
        <Indus 
            title="Healthcare Solutions" 
            desc="Transforming healthcare with data-driven insights and AI-powered solutions for better patient outcomes and operational efficiency." 
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
    img: "/portfolio/BMH.jpg",
    title: "BMH",
    subtitle:
      "Veritas Reduced Missing Data Entries for BMH by 55% Within 60 Days!",
    source:"/CaseStudy/BMH",
  },
]  

export default page
