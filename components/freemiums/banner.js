import styles from "@/styles/Freemiums/banner.module.css";

const Banner = ({ imageSrc, title, description }) => {
  return (
    <div className={styles.hero}>
      <img src={imageSrc} alt="" />
      <div className={styles.grad}></div>
      <h1>{title}</h1>
      <p>{description}</p>
      <button>Get Started for Free</button>
    </div>
  );
};

export default Banner;
