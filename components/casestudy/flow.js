import styles from "@/styles/CaseStudy/flow.module.css";

const Flow = ({ imgSrc }) => {
  return (
    <div className={styles.cont}>
      <h1>Data Flow Diagram</h1>
      <img src={imgSrc} alt="Data Flow Diagram" />
    </div>
  );
};

export default Flow;
