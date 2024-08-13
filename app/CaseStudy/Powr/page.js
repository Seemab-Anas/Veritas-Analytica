import Hero from "@/components/casestudy/hero";
import Desc from "@/components/casestudy/desc";
import Feature from "@/components/casestudy/feature";
import Flow from "@/components/casestudy/flow";
import Block from "@/components/casestudy/roadblock";
import Contact from "@/components/Contact/contact";

const featuresData = [
    {
      imgSrc: "/case/bmh/custom auto.png",
      title: "Data Integration",
      description: "They used Google Sheets and some smart scripts to gather all the data from different channels into one place.",
    },
    {
      imgSrc: "/case/bmh/dashboard.png",
      title: "Data Visualization",
      description: "They made detailed charts using a tool called Power BI that showed important stuff like how many people watched the videos, liked them, or subscribed to the channels.",
    },
    {
      imgSrc: "/case/powr/Data Extraction.png",
      title: "Easy Filters",
      description: "The charts had special filters that helped Yazaan see what parts of their videos people liked the most.",
    },
  ];

  const roadblocksData = [
    {
      title: "Script Limits",
      description: "The scripts they first used had some limits that stopped them from gathering all the data they needed smoothly.",
    },
    {
      title: "Data Cleaning",
      description: "They had to figure out how to fix and organize data that came in different formats from different channels.",
    },
  ];

  const impact = [
    {
      title: "30%",
      description: "Efficiency Gain",
    },
    {
      title: "20%",
      description: "User Engagement Boost!",
    },
  ];

  const solution = [
    {
      title: "Instant Updates",
      description: "Yazaan could now see all their data updates quickly, which helped them react fast to what their viewers liked.",
    },
    {
      title: "Smart Choices",
      description: "Understanding what their viewers liked helped them make better videos.",
    },
  ];

const page = () => {
  return (
    <div>
      <Hero
        head1="30% Efficiency Gain, 20% User Engagement Boost!"
        head2="Complete YouTube Insights in One Place!"
        imgSrc="/case/powr/back.jpeg"
      />
      <Desc
        paragraph1="Yazaan Digital Sports, an esports organization based in Saudi Arabia, specializes in digital sports content across multiple YouTube channels. Each channel showcases different sports, catering to a diverse audience."
        challengeTitle="The Challenge"
        challengeText="The company faced a significant challenge in managing and analyzing vast amounts of data from these channels. The data was scattered and complex, making it difficult to gain cohesive insights and understand overall performance metrics. Yazaan Digital Sports needed a streamlined solution to consolidate and interpret this data effectively, enabling better decision-making and content strategy optimization."
        solutionTitle="How Did We Take on the Challenge?"
        solutionText="In their pursuit of maximizing content strategy and performance, Yazaan Digital Sports turned to us for a comprehensive solution. Our team conducted an in-depth analysis to identify key challenges and inefficiencies in data management across their multiple YouTube channels. We developed a robust strategy that included consolidating data from various sources, implementing advanced data analytics, and creating intuitive dashboards for real-time insights. By automating data collection and visualization, we enabled Yazaan Digital Sports to monitor and optimize their channel performance more effectively. This holistic approach provided a clear view of their content's impact, audience engagement, and overall channel growth, empowering them to make data-driven decisions and enhance their digital presence."
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
