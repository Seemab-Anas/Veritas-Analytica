import styles from "@/styles/Freemiums/test.module.css"

const Test = ({ reviews }) => {
  return (
    <div className={styles.wrap}>
      <h1>Customer Testimonials</h1>
      <div className={styles.cont}>
        {reviews.map((review, index) => (
          <div key={index} className={styles.test}>
            <img src={review.image} alt="Customer" />
            <h1>{review.title}</h1>
            <p>{review.content}</p>
            <h4>{review.author}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Test;
