import { useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/HomeCompStyles/whyus.module.css';

const Card = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const paragraphs = [
    "Our team has 10+ years of experience working with web crawlers & big data at scale.",
    "Operational Cost Savings exceeding $1.5M since 2023 inception, Up to 75% cheaper than on-premise solutions for sourcing web data.",
    "Wide ranging project portfolio encompassing retail, finance, real estate, e-commerce and global travel.",
    "Offering free business suggestions and advice."
  ];

  const images = [
    "/whyus/experience.jpg",
    "/whyus/costSaving.jpg",
    "/whyus/expert.jpg",
    "/whyus/consultation.jpg"
  ];

  const handleCardClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className={styles.cardSec}>
      <div className={styles.card}>
        <div className={styles.cardLeft}>
          {paragraphs.map((_, index) => (
            <h1
              key={index}
              className={index === activeIndex ? styles.active : ''}
              onClick={() => handleCardClick(index)}
            >
              {['Extensive Experience', 'Cost-saving Solutions', 'Industry Expertise', 'Free Consultation'][index]}
            </h1>
          ))}
          <p>{paragraphs[activeIndex]}</p>
        </div>
        <div className={styles.cardRight}>
          {images.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={['Experience', 'Cost Saving', 'Expert', 'Consultation'][index]}
              layout="fill"
              objectFit="cover"
              objectPosition="bottom left"
              className={index === activeIndex ? styles.active : ''}
              style={{ opacity: index === activeIndex ? 1 : 0 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
