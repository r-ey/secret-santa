import React from 'react';
import AppHeader from '../../components/app-header/app-header';
import styles from './about-page.module.css';

function AboutPage() {
  return (
    <div className={styles.app}>
      <AppHeader />
      <main className={styles.mainSize}>
        <div className={styles.aboutText}>
          <h3 className={styles.firstHeader}>Inspiration</h3>
          <p>
            With the holiday season just around the corner, we decided to
            contribute to the seasonal spirit with a
            web app to help organise Secret Santa exchanges!
            This project seemed like an interesting task and a fun end result!
          </p>
          <h3>What it does</h3>
          <p>
            Our project attempts to offer a simple solution to organising a Secret
            Santa gift exchange with your friends.
            It is a webapp that allows users to create custom &apos;groups,&apos;
            or Secret Santa gift exchanges, with a list of people in the group,
            each person&apos;s preferences, the price limit for that particular group, and more.
            The user first signs up for an account before reaching the home page,
            where they have the option to create a group.
          </p>
          <h3>How we made it</h3>
          <p>
            Overall we made the project with React.js, react router, redux, and figma for design.
            We prototyped
            the design for the different pages in Figma, along with creating .svg&apos;s for the
            backgrounds.
          </p>
          <h3>Challenges</h3>
          <p>
            It was our first time using Figma so designing the pages took longer than desired.
            Making the Java API was a massive struggle and we ended up scrapping it.
          </p>

        </div>
      </main>
    </div>
  );
}

export default AboutPage;
