import styles from "@/styles/Industries/indus.module.css";
import Image from "next/image";

const Indus = ({ title, desc, solutions, heroImageSrc }) => {
  return (
    <div>
      <div className={styles.hero}>
        <Image
          className={styles.sol}
          src={heroImageSrc}
          width={500}
          height={500}
          alt="Hero Image"
        />
        <h1 className={styles.head}>{title}</h1>
        <p className={styles.desc}>{desc}</p>
      </div>
      <div className={styles.solutions}>
        {solutions.map((solution, index) => (
          <div key={index} className={styles.solution}>
            <Image
              className={styles.logo}
              src={solution.imageSrc}
              width={500}
              height={500}
              alt={`Solution ${index + 1}`}
            />
            <h2>{solution.heading}</h2>
            <p>{solution.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Indus;
