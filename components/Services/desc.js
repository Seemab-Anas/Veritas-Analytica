import styles from "@/styles/ServicesCompStyles/desc.module.css";

const Desc = ({ title, content }) => {
  return (
    <div className={styles.desc}>
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
}

export default Desc;
