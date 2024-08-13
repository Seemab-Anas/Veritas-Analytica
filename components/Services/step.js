import styles from "@/styles/ServicesCompStyles/step.module.css";

const Step = ({ title, steps }) => {
  return (
    <div>
      <div className={styles.step_sec}>
        <h2>{title}</h2>
        {steps.map((step, index) => (
          <div key={index} className={styles.step_cont}>
            <h1>{index + 1}. {step.heading}</h1>
            <p>{step.description}</p>
            <img src="/arrow-down.png" alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Step;
