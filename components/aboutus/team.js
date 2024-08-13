import styles from '@/styles/Aboutus/team.module.css';

const Team = () => {
  return (
    <div className={styles.teamContainer}>
      <div className={styles.aboutmoving}>
            <div>
                <h1>OUR TEAM CORE OF</h1>
                <h1>OUR TEAM CORE OF</h1>
            </div>
      </div>
      {teamMembers.map((member, index) => (
        <div className={styles.teamCard} key={index}>
          <img src={member.image} alt={member.name} />
          <div>
            <h1>{member.name}</h1>
            <p>{member.position}</p>
          </div>
          <button className={styles.LinkedinBtn}>
            <span className={styles.svgContainer}>
              <svg viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
              </svg>
            </span>
            <span className={styles.BG}></span>
          </button>
        </div>
      ))}
    </div>
  );
};

const teamMembers = [
  {
    image: '/aboutus/razaul.png',
    name: 'Raza ul Mustafa',
    position: 'CEO',
  },
  {
    image: '/aboutus/zakaul.png',
    name: 'Zaka ul Mustafa',
    position: 'CEO',
  },
  {
    image: '/aboutus/tahirul.png',
    name: 'Tahir Farooq',
    position: 'Director',
  },
  {
    image: '/aboutus/Group-4683-304x330.jpg',
    name: 'Manal Mustafa',
    position: 'Business Engineering Manager',
  },
  {
    image: '/aboutus/Group-4683-304x330.jpg',
    name: 'Maryam Omar',
    position: 'Business Intelligence Lead',
  },
  {
    image: '/aboutus/22.png',
    name: 'Ehsan Malik',
    position: 'Technical Team Lead',
  },
  {
    image: '/aboutus/22.png',
    name: 'Talha',
    position: 'Technical Team',
  },
];

export default Team;
