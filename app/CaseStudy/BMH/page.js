import Hero from "@/components/casestudy/hero";
import Desc from "@/components/casestudy/desc";
import Feature from "@/components/casestudy/feature";
import Flow from "@/components/casestudy/flow";
import Block from "@/components/casestudy/roadblock";
import Contact from "@/components/Contact/contact";

const featuresData = [
    {
      imgSrc: "/case/bmh/custom auto.png",
      title: "Automated Processes",
      description: "Implementation of automated workflows to enhance efficiency across various operational aspects, such as patient check-ins and billing.",
    },
    {
      imgSrc: "/case/bmh/data cleaning.png",
      title: "Data Cleansing and Visualization",
      description: "Utilized to provide clear and actionable insights, helping to identify and rectify inefficiencies.",
    },
    {
      imgSrc: "/case/bmh/data.png",
      title: "Integration of Data Sources",
      description: "Combined disparate data sources into a unified system for holistic analysis, leveraging both Google Sheets and Microsoft Excel in the initial stages.",
    },
    {
      imgSrc: "/case/bmh/dashboard.png",
      title: "Power BI Custom Dashboards",
      description: "Developed to offer real-time insights and scheduled updates every 24 hours, these dashboards became central to BMH's data strategy.",
    },
    {
      imgSrc: "/case/bmh/md.png",
      title: "AdvancedMD Utilization",
      description: "This medical software plays a crucial role by providing real-time medical and therapy session data, essential for daily operations.",
    },
  ];

  const roadblocksData = [
    {
      title: "Data Access Challenges",
      description: "Initial difficulties in accessing and integrating data from various sources.",
    },
    {
      title: "Data Manipulation Hurdles",
      description: "Complexities in cleaning and standardizing data for accurate analysis.",
    },
    {
      title: "Visualization Obstacles",
      description: "Challenges in presenting data in a clear and actionable format.",
    },
    {
      title: "Collaboration Needs",
      description: "Required iterative meetings and collaborative efforts to refine solutions.",
    },
    {
      title: "Tool Integration",
      description: "Necessitated leveraging expertise in Google Sheets, Excel, and Power BI.",
    },
  ];

  const impact = [
    {
      title: "Data Accuracy",
      description: "Within the first 60 days, BMH achieved a 55% reduction in missing entries during patient check-ins, dramatically enhancing data accuracy and reliability for multiple KPI tracking.",
    },
    {
      title: "Enhanced Resource Utilization",
      description: "The new system allowed for more effective use of staff and resources, improving overall operational efficiency.",
    },
    {
      title: "Real-Time Monitoring",
      description: "Enabled real-time tracking of patient appointments and billing, allowing for quicker responses and adjustments.",
    },
    {
      title: "Informed Decision-Making",
      description: "Historical trend analysis provided by the new dashboards aided BMH in making informed decisions to further improve patient care and operational procedures.",
    },
  ];

  const solution = [
    {
      title: "Automated Workflows",
      description: "Streamlined patient check-ins and billing processes for enhanced efficiency.",
    },
    {
      title: "Data Cleansing",
      description: "Ensured accurate and reliable data for insightful analysis.",
    },
    {
      title: "Holistic Data Integration",
      description: "Combined disparate data sources into a unified system.",
    },
    {
      title: "Custom Dashboards",
      description: "Developed real-time, updateable Power BI dashboards for ongoing insights.",
    },
    {
      title: "AdvancedMD Utilization",
      description: "Integrated real-time medical and therapy session data for operational accuracy.",
    },
    {
      title: "Ongoing Support",
      description: "Provided continuous guidance and support to ensure sustained operational success.",
    },
  ];

const page = () => {
  return (
    <div>
      <Hero
        head1="From Data Mess to Operational Success"
        head2="BMH's Journey to Excellence"
        imgSrc="/case/bmh/back.jpg"
      />
      <Desc
        paragraph1="BMH - Beverley Mack Harry Consulting Services Inc., a mental and medical health clinic, began as a modest venture offering therapeutic care. As their reputation grew, so did the complexity of their operations. BMH found themselves grappling with challenges in staff management, appointment scheduling, and financial tracking, which were scattered across various Google sheets. These inefficiencies made it difficult for them to make informed decisions and hindered their growth."
        challengeTitle="The Challenge"
        challengeText="As BMH expanded, their operational processes became increasingly convoluted. Manual data management on Google sheets led to inefficiencies and data overload. Staff scheduling and appointment tracking became cumbersome, and the lack of real-time insights impeded decision-making. BMH needed a unified system for data management and analysis to streamline their operations and enhance their decision-making capabilities."
        solutionTitle="How Did We Take on the Challenge?"
        solutionText="In their quest for operational excellence, BMH turned to Veritas Analytica. Our team conducted a thorough analysis to identify bottlenecks and devised a comprehensive strategy to streamline BMH's operations. We uncovered systemic inefficiencies through root cause analysis, implemented automated processes to enhance workflow efficiency, and provided data cleansing and visualization for actionable insights. By integrating disparate data sources, we facilitated holistic analysis and significantly improved BMH's operational processes."
      />
      <Feature features={featuresData} />
      <Flow imgSrc="/case/bmh/flow.png" />
      <Block title="The Roadblocks🚧" data={roadblocksData} />
      <Block title="Impact🚀" data={impact} />
      <Block title="Final Solution💡" data={solution} />
      <Contact />
    </div>
  );
};

export default page;
