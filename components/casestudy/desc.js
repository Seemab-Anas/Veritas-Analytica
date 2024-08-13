import styles from "@/styles/CaseStudy/desc.module.css";

const Desc = ({ paragraph1, challengeTitle, challengeText, solutionTitle, solutionText }) => {
  return (
    <div className={styles.cont}>
      <div className={styles.box1}>
        <p>{paragraph1}</p>
      </div>
      <div className={styles.box2cont}>
        <div className={styles.box2}>
          <h2>{challengeTitle}</h2>
          <p>{challengeText}</p>
        </div>
        <div className={styles.box2}>
          <h2>{solutionTitle}</h2>
          <p>{solutionText}</p>
        </div>
      </div>
    </div>
  );
};

export default Desc;
