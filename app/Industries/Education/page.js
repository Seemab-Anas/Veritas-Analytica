import Contact from "@/components/Contact/contact"
import Indus from "@/components/industries/indus"
import Casestudy from "@/components/industries/Casestudy"

const solutions = [
    {
      imageSrc: "/industries/education/personalized.png",
      heading: "1. Personalized Learning",
      description: "Utilize AI to create customized learning paths based on individual student needs and performance, improving outcomes."
    },
    {
      imageSrc: "/industries/health/predictive.png",
      heading: "2. Predictive Analytics",
      description: "Predict student performance and identify at-risk students early to provide targeted interventions."
    },
    {
      imageSrc: "/industries/education/curiculum.png",
      heading: "3. Curriculum Optimization",
      description: "Analyze educational data to refine and improve curriculum design, ensuring it meets the needs of students and the job market."
    },
    {
      imageSrc: "/industries/education/allocation.png",
      heading: "4. Resource Allocation",
      description: "Optimize resource allocation by predicting demand for courses and identifying areas where additional support is needed."
    },
    {
      imageSrc: "/industries/education/admin.png",
      heading: "5. Administrative Efficiency",
      description: "Improve administrative processes by automating tasks and analyzing workflow data to enhance efficiency and reduce costs."
    },
    {
      imageSrc: "/industries/education/engagement.png",
      heading: "6. Engagement Analysis",
      description: "Use sentiment and engagement analysis to understand student feedback and enhance the overall learning experience."
    }
  ];
  
  
  const heroImageSrc = "/industries/education/education.png";

const page = () => {
  return (
    <div>
        <Indus 
            title="Education Solutions" 
            desc="Revolutionizing education with data analytics and AI for enhanced learning experiences and operational efficiency." 
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
