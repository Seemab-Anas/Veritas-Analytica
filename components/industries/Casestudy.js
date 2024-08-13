import styles from "@/styles/Industries/case.module.css"
import Link from "next/link";

const Casestudy = ({ CaseStudies }) => {
    return (
      <div className={styles.cont}>
        <h1>Case Studies</h1>
        <div className={styles.case_cont}>
          {CaseStudies.map((caseStudy, index) => (
            <div key={index} className={styles["casestudy-hero"]}>
              <img
                className={styles["case-back"]}
                src={caseStudy.img}
                alt={caseStudy.title}
              />
              <div className={styles.grad}></div>
              <div className={styles["bluring-case"]}>
                <h1>{caseStudy.title}</h1>
                <h2>{caseStudy.subtitle}</h2>
                <p>{caseStudy.description}</p>
                <Link href={caseStudy.source}>
                  <button>
                    View case study
                    <img className={styles.arrow} src="/up-right-arrow.png" alt="" />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Casestudy;
  