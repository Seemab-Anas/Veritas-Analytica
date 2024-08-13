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
      "Leverage advanced AI to perform detailed customer segmentation.",
  },
  {
    title: "Simple & Intuitive",
    description: "Upload your CSV file, and let our tool do the rest.",
  },
  {
    title: "Targeted Campaigns",
    description:
      "Identify your best customers and tailor your marketing strategies effectively.",
  },
];

const stepsData = [
    {
      title: "Upload Your Data",
      details: [
        'Click on the "Browse files" button or drag and drop your CSV file.',
        "Optionally, use a sample dataset for a quick understanding.",
      ],
    },
    {
      title: "Select Columns",
      details: [
        "Choose three columns from your dataset: Customer ID, Invoice Date, and Total Spend.",
      ],
    },
    {
      title: "Calculate RFM",
      details: [
        'Click on the "Calculate RFM" button to perform the analysis.',
        "View instant results of the RFM Analysis on the screen.",
      ],
    },
    {
      title: "Download Report",
      details: [
        'Click on "Download RFM Data" to get your RFM analysis report.',
      ],
    },
];

const featuresData = [
    {
      image: "/freemium/freemium2/aipower.jpg",
      title: "AI-Powered Segmentation",
      description:
        "Harness the power of AI to automatically segment your customers based on their purchasing behavior.",
    },
    {
      image: "/freemium/freemium2/user.jpg",
      title: "User-Friendly Interface",
      description:
        "An intuitive platform that makes it easy to upload data, select columns, and view results.",
    },
    {
      image: "/freemium/freemium1/report.jpg",
      title: "Comprehensive Reports",
      description:
        "Download detailed RFM analysis reports to gain deep insights into customer behavior.",
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
      title: "Invaluable Insights",
      content:
        "The RFM Analyzer provided invaluable insights into our customer base, helping us tailor our marketing efforts effectively.",
      author: "- Marketing Manager, Retail Corp.",
    },
    {
      image: "/freemium/person.jpg",
      title: "Easy to Use",
      content:
        "The simplicity and efficiency of this tool are unparalleled. It made customer segmentation a breeze.",
      author: "- E-commerce Director, ShopEase",
    },
];

  const faqs = [
    {
      question: "What is RFM Analysis?",
      answer: "RFM Analysis segments customers based on Recency, Frequency, and Monetary metrics to identify the most valuable segments.",
    },
    {
      question: "How can I use the RFM Analyzer?",
      answer: "Simply upload your CSV file, select the required columns, and our AI-powered tool will perform the analysis for you.",
    },
    {
      question: "What data format is required for this tool?",
      answer: "A CSV file with columns for Customer ID, Invoice Date, and Total Spend.",
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
        imageSrc="/freemium/freemium1/free1.jpg"
        title="Discover Your Best Customers with AI-Powered RFM Analysis"
        description="Unlock Customer Insights, Drive Targeted Campaigns"
      />
      <About
        heading="About RFM Analyzer"
        description="Perform RFM Analysis on your retail data effortlessly with our AI-powered RFM Analyzer. Just upload your CSV file and watch as our tool segments your customers based on Recency, Frequency, and Monetary values."
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
