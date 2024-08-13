import { useEffect } from 'react';
import Image from 'next/image';
import styles from '@/styles/HomeCompStyles/clients.module.css';

const Clients = () => {
    const columns = [
        [
            ['/logos/actioncoach.webp', 'Action Coach', -0.15],
            ['/logos/alibaba.webp', 'Alibaba', -0.15]
        ],
        [
            ['/logos/bmh.png', 'BMH', 0.2],
            ['/logos/Milton.png', 'Milton', 0.2],
            ['/logos/dc.png', 'DC', 0.2]
        ],
        [
            ['/logos/runway.png', 'Runway', -0.1],
            ['/logos/powr.png', 'Powr', -0.1],
            ['/logos/zenth.webp', 'Zenth', -0.1]
        ],
        [
            ['/logos/g.png', 'G', 0.2],
            ['/logos/scholarden.png', 'Scholar Den', 0.2]
        ]
    ];


    return (
        <div id="ourclients" className={styles.ourClients} data-scroll-container>
            <div className={styles.ourClientLeft}>
                <h1>From Our Clients <br /> To Our Partners</h1>
                <p>
                    Choose Veritas Analytica as your trusted AI partner to advance in your Next Big Venture.
                </p>
            </div>
            <div className={styles.ourClientRight}>
                {columns.map((column, columnIndex) => (
                    <div key={columnIndex} data-scroll data-scroll-speed={column[0][2]} className={styles.clientColumn}>
                        {column.map((client, clientIndex) => (
                            <div key={clientIndex} className={styles.box}>
                                <Image src={client[0]} alt={client[1]} width={120} height={120} objectFit="cover" objectPosition="center" />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Clients;
