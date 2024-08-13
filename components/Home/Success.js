import styles from "@/styles/HomeCompStyles/success.module.css"
import Link from "next/link"

const Success = () => {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <h1>Success Stories</h1>
            <Link href="/Portfolio"><button className={styles.viewall}>View all <img src="/up-right-arrow.png" alt="" /></button></Link>
        </div>
        <div className={styles.right}>
            <div className={styles.card}>
                <img className={styles.back} src="/success/powr.jpg" alt="img" />
                <div className={styles.grad}></div>
                <h1>Powr</h1>
                <p>Integrated 20 YouTube Channels' Stats into One Power BI Dashboard for Powr Digital Sports.</p>
            </div>
            <div className={styles.card}>
                <img className={styles.back} src="/success/bmh.jpg" alt="img" />
                <div className={styles.grad}></div>
                <h1>BMH</h1>
                <p>Veritas Reduced Missing Data Entries by 55% for BMH in Just 60 Days!</p>
            </div>
            <div className={styles.card}>
                <img className={styles.back} src="/success/dh.jpg" alt="img" />
                <div className={styles.grad}></div>
                <h1>Design Holding</h1>
                <p>Achieved $800K Savings with Power BI-Enhanced Inventory Management.</p>
            </div>
        </div>
    </div>
  )
}

export default Success
