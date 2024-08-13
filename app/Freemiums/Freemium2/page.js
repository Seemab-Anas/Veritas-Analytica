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
    title: "AI-Powered Precision",
    description:
      "Leverage advanced AI to remove backgrounds with exceptional accuracy.",
  },
  {
    title: "Simple & Intuitive",
    description: "Upload your image, and let our tool handle the rest.",
  },
  {
    title: "Time-Saving",
    description:
      "Quickly transform images without the need for manual editing.",
  },
];

const stepsData = [
    {
      title: "Upload Your Image",
      details: [
        'Click on the "Browse files" button in the sidebar or drag and drop your image.',
        "The process starts instantly, no delays.",
      ],
    },
    {
      title: "Background Removal",
      details: [
        'Wait while our AI processes your image and removes the background.',
        "View the results with your original image and the removed background."
      ],
    },
    {
      title: "Download Updated Image",
      details: [
        'Click on the "Download Updated Image" button in the sidebar.',
        "Your image with the removed background will be downloaded instantly.",
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
      title: "AI-Powered Accuracy",
      description:
        "Utilize advanced AI algorithms to remove backgrounds seamlessly and accurately.",
    },
    {
      image: "/freemium/freemium2/user.jpg",
      title: "User-Friendly Interface",
      description:
        "An intuitive platform that makes it easy to upload images and view results.",
    },
    {
      image: "/freemium/freemium2/fast.jpg",
      title: "Fast Processing",
      description:
        "Quickly remove backgrounds from your images without any manual effort.",
    },
    {
      image: "/freemium/freemium2/free.jpg",
      title: "Free to Use",
      description:
        "Experience the full capabilities of our tool at no cost. Upgrade anytime for additional features.",
    },
];

const reviewsData = [
    {
      image: "/freemium/person.jpg",
      title: "Amazing Results",
      content:
        "Veritas Background Removal saved us hours of editing time and delivered flawless results.",
      author: "- Graphic Designer, Creative Solutions.",
    },
    {
      image: "/freemium/person.jpg",
      title: "Super Easy to Use",
      content:
        "The simplicity and efficiency of this tool are fantastic. Highly recommended for anyone needing quick background removal.",
      author: "- E-commerce Manager, ShopEase.",
    },
];


  const faqs = [
    {
      question: "How does the background removal tool work?",
      answer: "Simply upload your image, and our AI-powered tool will automatically remove the background for you.",
    },
    {
      question: "What image formats are supported?",
      answer: "Our tool supports a wide range of image formats including JPEG, PNG, and more.",
    },
    {
      question: "How long does the process take?",
      answer: "The background removal process is quick, typically taking just a few seconds depending on the image size.",
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
        imageSrc="/freemium/freemium2/back.jpg"
        title="Remove Backgrounds Instantly with AI"
        description="Transform Your Images in Seconds"
      />
      <About
        heading="About Background Image Removal"
        description="Background Image Removal is an AI-powered tool that magically removes the background from your images with precision and ease. Just upload your image and watch as our tool does the work for you."
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
