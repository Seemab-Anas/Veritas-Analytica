import styles from "@/styles/ServicesCompStyles/card.module.css";

const Card = ({ heading, cardData }) => {
  return (
    <section className={styles.whyus}>
      <h1>{heading}</h1>
      <div className={styles.cardList}>
        {cardData.map((item, index) => (
          <div key={index} className={styles.whyCard}>
            <img src={item.imgSrc} alt={item.title} />
            <div className={styles.whyCardContent}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Card;
