import styles from "@/styles/CaseStudy/roadblock.module.css";

const Roadblock = ({ title, data }) => {
  return (
    <div className={styles.cont}>
      <div className={styles.left}>
        <h1>{title}</h1>
      </div>
      <div className={styles.right}>
        {data.map((roadblock, index) => (
          <p key={index}>
            <span>{roadblock.title}:</span> {roadblock.description}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Roadblock;
