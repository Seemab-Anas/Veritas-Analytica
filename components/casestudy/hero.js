import styles from "@/styles/CaseStudy/hero.module.css";

const Hero = ({ head1, head2, imgSrc }) => {
  return (
    <div className={styles.hero}>
      <div>
        <h2 className={styles.head1}>{head1}</h2>
        <h1 className={styles.head2}>{head2}</h1>
      </div>
      <img src={imgSrc} alt="" />
    </div>
  );
};

export default Hero;
