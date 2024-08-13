import styles from "@/styles/Freemiums/tech.module.css";

const Tech = ({ techStack }) => {
  return (
    <div className={styles.cont}>
      <h1>Our Tech Stack</h1>
      <div className={styles.logos}>
        {techStack.map((tech, index) => (
          <div key={index} className={styles.box}>
            <img src={tech} alt={`Tech Stack ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tech;
