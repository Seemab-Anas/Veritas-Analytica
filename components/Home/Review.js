import { useEffect } from 'react';
import Image from 'next/image';
import styles from '@/styles/HomeCompStyles/review.module.css';
import { gsap } from 'gsap';

const Review = () => {
    useEffect(() => {
        const reviewConts = document.querySelectorAll(`.${styles.reviewCont}`);

        const animations = [];

        reviewConts.forEach((cont) => {
            const animation = gsap.to(cont, {
                x: '-100%', 
                duration: 30, 
                ease: 'linear',
                repeat: -1 
            });

            animations.push(animation);
        });

        const reviews = document.querySelectorAll(`.${styles.review}`);

        reviews.forEach((review) => {
            review.addEventListener('mouseenter', () => {
                animations.forEach(animation => animation.pause());
                
                gsap.to(review, { scale: 1.04, duration: 0.5 });

                reviews.forEach((otherReview) => {
                    if (otherReview !== review) {
                        otherReview.classList.add(styles.blur);
                    }
                });
            });

            review.addEventListener('mouseleave', () => {
                animations.forEach(animation => animation.resume());

                gsap.to(review, { scale: 1, duration: 0.3 });

                reviews.forEach((otherReview) => {
                    otherReview.classList.remove(styles.blur);
                });
            });
        });

    }, []);

    return (
        <div className={styles.client}>
            <div className={styles.clientCont}>
                <div className={styles.clientLeft}>
                    <h1>Hear from Our Partners</h1>
                </div>
                <div className={styles.reviewSec}>
                    {[...Array(2)].map((_, i) => (
                        <div key={i} className={styles.reviewCont}>
                            {reviews.map((review, index) => (
                                <div key={index} className={styles.review}>
                                    <Image className={styles.quotes} src="/review/left_11042333.png" alt="quote" width={20} height={20} />
                                    <p>{review.text}</p>
                                    <div className={styles.reviewInfo}>
                                        <Image src={review.image} alt="img" width={60} height={60} />
                                        <div className={styles.reviewInfoData}>
                                            <h2>{review.name}</h2>
                                            <h6>{review.company}</h6>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const reviews = [
    {
        text: "Veritas's tailored solutions boosted engagement by 20% and efficiency by 30%, significantly enhancing our data management.",
        image: "/review/review_powr.jpg",
        name: "Yazan",
        company: "POWR"
    },
    {
        text: "Great work. Fantastic client service and experience.",
        image: "/review/review_loj.jpg",
        name: "Alvin Wung",
        company: "Law Of The Jungle"
    },
    {
        text: "Maryam is an excellent communicator with top tech skills and a calm problem-solver—highly recommended for data automation.",
        image: "/review/review_dc.png",
        name: "Adam Dawson",
        company: "Direct Counsel"
    },
    {
        text: "Maryam and her team effectively expedited our WhatsApp Business API despite initial difficulties.",
        image: "/review/review_zeth.png",
        name: "Izlaan & Nadhira",
        company: "Zenith Technica"
    }
];

export default Review;
