import Banner from "@/components/freemiums/banner";
import About from "@/components/freemiums/about";
import Steps from "@/components/freemiums/steps";
import Features from "@/components/freemiums/features";
import Test from "@/components/freemiums/test";
import Tech from "@/components/freemiums/tech";
import Faq from "@/components/Faq/Faq";
import Contact from "@/components/Contact/contact"

const benefitsData = [
  {
    title: "AI-Powered Analysis",
    description:
      "Leverage advanced AI to perform comprehensive data analysis.",
  },
  {
    title: "Simple & Intuitive",
    description: "Upload your CSV file, and let our tool do the rest.",
  },
  {
    title: "Interactive Reports",
    description:
      "Gain valuable insights with dynamic, interactive reports.",
  },
];

const stepsData = [
    {
      title: "Upload Your CSV",
      details: [
        'Click on the "Browse files" button or drag and drop your CSV file.',
        "The process begins immediately, with no delays.",
      ],
    },
    {
      title: "Report Generation",
      details: [
        "Wait while our AI processes your data and generates an interactive report.",
        'View your online report once it is ready.',
      ],
    },
    {
      title: "Download Report",
      details: [
        'Click on the "Download Report" button to generate a download link for the HTML report.',
        "Click on [Download HTML Report] to download your interactive report.",
      ],
    },
];

const featuresData = [
    {
      image: "/freemium/freemium2/aipower.jpg",
      title: "AI-Powered Insights",
      description:
        "Utilize advanced AI to conduct Exploratory Data Analysis (EDA) and uncover hidden patterns.",
    },
    {
      image: "/freemium/freemium2/user.jpg",
      title: "User-Friendly Interface",
      description:
        "An intuitive platform that makes it easy to upload data, view results, and download reports.",
    },
    {
      image: "/freemium/freemium3/explore.jpg",
      title: "Interactive Exploration",
      description:
        "Engage with dynamic reports that allow you to drill down into data for deeper insights.",
    },
    {
      image: "/freemium/freemium2/free.jpg",
      title: "No Cost to Start",
      description:
        "Experience the full capabilities of our tool with no upfront costs. Upgrade anytime for additional features.",
    },
];

const reviewsData = [
    {
      image: "/freemium/person.jpg",
      title: "In-Depth Insights",
      content:
        "ReportRealm provided us with detailed insights that helped guide our business decisions.",
      author: " - Data Analyst, TechCorp.",
    },
    {
      image: "/freemium/person.jpg",
      title: "User-Friendly and Powerful",
      content:
        "The tool is incredibly easy to use and generates comprehensive reports quickly.",
      author: "- Marketing Manager, MarketMovers.",
    },
];

const aiTechIcons = [
    { name: "Streamlit", src: "/Services/techs/aimodel/bardai.png" },
    { name: "Pandas", src: "/Services/techs/aimodel/chatgpt.png" },
    { name: "Ydata_Profiling", src: "/Services/techs/aimodel/cludeai.png" },
  ];


  const faqs = [
    {
      question: "What is ReportRealm?",
      answer: "ReportRealm is an AI-powered tool that transforms CSV files into interactive reports through Exploratory Data Analysis (EDA).",
    },
    {
      question: "How can I use ReportRealm?",
      answer: "Simply upload your CSV file, and our AI-powered tool will generate an interactive report for you.",
    },
    {
      question: "What data formats are supported?",
      answer: "ReportRealm supports CSV file format for data upload.",
    },
    {
      question: "How long does the process take?",
      answer: "The report generation process is quick, typically taking just a few moments depending on the size of your CSV file.",
    },
  ];

  const techStackImages = [
    "/freemium/freemium1/pandas_mark.svg",
    "/freemium/freemium1/Matplotlib.webp",
    "/freemium/freemium1/streamlit-log.png",
  ];

const page = () => {
  return (
    <div>
      <Banner
        imageSrc="/freemium/freemium3/free2.jpg"
        title="Convert CSV Files into Interactive Reports"
        description="Convert CSV Files into Interactive Reportsoratory Data Analysis"
      />
      <About
        heading="About ReportRealm"
        description="ReportRealm is an AI-powered data analysis tool that performs Exploratory Data Analysis (EDA) on your CSV files. Upload your CSV file and watch as it transforms into an interactive report, ready to guide your decisions."
        benefits={benefitsData}
      />
      <Steps steps={stepsData} />
      <Features features={featuresData} />
      <Test reviews={reviewsData} />
      <Tech techStack={techStackImages}/>
      <Faq faqs={faqs}/>
      <Contact />
    </div>
  );
};

export default page;
