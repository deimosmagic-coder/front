'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import styles from './Portfolio.module.scss';
import { CornerBorder, NavigationCard, InfoField } from './UI';

const SplineWrapper = dynamic(() => import('./SplineWrapper'), {
  ssr: false,
});

export default function Portfolio() {
  const [serverTime, setServerTime] = useState('8:42');
  const [localTime, setLocalTime] = useState('15:42');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.maxWidth = 'none';
    document.body.style.margin = '0';
    document.body.style.width = '100%';
    document.documentElement.style.width = '100%';
    
    return () => {
      document.body.style.maxWidth = '1440px';
      document.body.style.margin = '0 auto';
      document.body.style.width = '';
      document.documentElement.style.width = '';
    };
  }, []);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const local = now.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });
      setLocalTime(local);
      
      const moscowTime = new Date(now.toLocaleString('en-US', { timeZone: 'Europe/Moscow' }));
      setServerTime(moscowTime.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }));
    };

    updateTime();
    const interval = setInterval(updateTime, 60000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.portfolio}>
      <header className={styles.header}> 
        <div className={styles.container}>
          <div className={styles.headerInfo}>
            <div className={styles.ageInfo}>
              <p className={styles.age}>24</p>
              <p className={styles.lvl}>LEVEL</p>
            </div>
            <div className={styles.credits}>
              <p className={styles.creditsTitle}>CREDITS</p>
              <div className={styles.time}>
                <p className={styles.gray}>SERVER TIME: </p>
                <p>{serverTime}</p>
              </div>
              <div className={styles.time}>
                <p className={styles.gray}>LOCAL TIME: </p>
                <p>{localTime}</p> 
              </div>
            </div>
          </div>
        </div>
      </header>
   
      <div className={styles.mainContainer}>
        <section className={`${styles.heroInfo} ${styles.content}`}>
          <div className={styles.mainInformation}>
            <CornerBorder className={styles.avatarBorder}>
              <div className={styles.avatar}>
                <img src="portf/images/avatar2.png" alt="Avatar" />
              </div>
            </CornerBorder>
            
            <InfoField label="NAME">
              <p className={styles.realTitle}>ДИАНА ГЛИМНУРОВА</p>
            </InfoField>
            
            <InfoField label="occupation">
              <p className={styles.realTitle}>FRONTEND DEVELOPER</p>
            </InfoField>
            
            <InfoField label="availability">
              <div className={styles.border}>
                <p className={`${styles.realTitle} ${styles.hire}`}>open for hire</p>
              </div>
            </InfoField>
            
            <InfoField label="social">
              <div className={styles.social}>
                <p className={styles.realTitle}>open connection</p>
                <img src="/portf/images/Frame.png" alt="Social" />
              </div>
            </InfoField>
            
            <div className={`${styles.information} ${styles.quote}`}>
              <p className={`${styles.infoTitle} ${styles.quoteName}`}>Джонни Сильверхенд</p>
              <p className={`${styles.infoTitle} ${styles.quoteTitle}`}>
                Не хочу показаться грубым, но я всё это в рот е*ал.
              </p>
            </div> 
          </div>                  
        </section>

        <section className={`${styles.sec} ${styles.content}`}>
          <CornerBorder className={styles.mainImage}>
            <div className={styles.change}>
              <img src="/portf/images/image2.png" alt="Main" />
            </div>
          </CornerBorder>

          <div className={styles.navigation}>
            <NavigationCard 
              title="Begginning" 
              description={
                <>
                  Suscipit est consequatur<br />
                  nemo voluptatem est<br />
                  labore saepe.
                </>
              }
              isGrayBorder
              className={styles.margin}
            />
            
            <NavigationCard 
              title="Creations" 
              description={
                <>
                  Suscipit est consequatur<br />
                  nemo voluptatem est<br />
                  labore saepe.
                </>
              }
              href="/main"
              isGrayBorder
              className={styles.margin}
            />
            
            <NavigationCard 
              title="stack" 
              description={
                <>
                  Suscipit est consequatur<br />
                  nemo voluptatem est<br />
                  labore saepe.
                </>
              }
              isGrayBorder
              className={styles.margin}
            />
          </div>
        </section>

        <div className={styles.mobileButtons}>
          <button 
            className={styles.navButton}
            onClick={() => setIsMenuOpen(true)}
          >
            NAVIGATION
          </button>
          <button className={styles.aboutButton}>
            ABOUT
          </button>
        </div>

        {isMenuOpen && (
          <div className={styles.mobileMenu}>
            <div className={styles.menuHeader}>
              <h2 className={styles.menuTitle}>NAVIGATION</h2>
              <button 
                className={styles.closeButton}
                onClick={() => setIsMenuOpen(false)}
              >
                ✕
              </button>
            </div>
            
            <div className={styles.levelInfo}>
              <div className={styles.levelBlock}>
                <span className={styles.levelNumber}>24</span>
                <span className={styles.levelLabel}>LEVEL</span>
              </div>
            </div>

            <div className={styles.menuContent}>
              <NavigationCard 
                title="BEGGINNING" 
                description={
                  <>
                    Suscipit est consequatur<br />
                    nemo voluptatem est<br />
                    labore saepe.
                  </>
                }
                isGrayBorder
              />
              
              <NavigationCard 
                title="LOGS" 
                description={
                  <>
                    Suscipit est consequatur<br />
                    nemo voluptatem est<br />
                    labore saepe.
                  </>
                }
                isGrayBorder
              />
              
              <NavigationCard 
                title="CREATIONS" 
                description={
                  <>
                    Suscipit est consequatur<br />
                    nemo voluptatem est<br />
                    labore saepe.
                  </>
                }
                href="/main"
                isGrayBorder
              />
            </div>
            <div className={styles.mobileButtons}>
              <button 
                className={styles.navButton}
                onClick={() => setIsMenuOpen(false)}
              >
                NAVIGATION
              </button>
              <button className={styles.aboutButton}>
                ABOUT
              </button>
            </div>
          </div>
        )}

        <section className={styles.guest}>
          <div className={`${styles.borderStyle} ${styles.mainInformation}`}>
            <div className={styles.active}>
              <div className={styles.border}>
                <p className={`${styles.realTitle} ${styles.questWhite}`}>active quest</p>
              </div>
              <div className={styles.styleTitle}>
                <p className={`${styles.infoTitle} ${styles.gray}`}>the react skill-up line</p>
              </div>
            </div>
            <div className={`${styles.questName} ${styles.information} ${styles.wrap}`}>
              <p className={`${styles.nameQuest} ${styles.infoTitle}`}>quest name</p>
              <p className={styles.realTitle}>React website</p>
            </div>
            <div className={`${styles.goal} ${styles.information} ${styles.wrap}`}>
              <p className={styles.infoTitle}>goal</p>
              <p className={`${styles.infoTitle} ${styles.goalContent} ${styles.gray}`}>
                Build this website. Implement a full react website with multiple routers, 
                UI elements and tricky styling. Make it all work great!
              </p>
            </div>
            <div className={`${styles.rewards} ${styles.information} ${styles.wrap}`}>
              <p className={styles.infoTitle}>rewards</p>
              <div className={styles.rewardsImages}>
                <div className={styles.reward1}>
                  <img src="/portf/images/reward1.svg" alt="Reward 1" />
                  <p className={`${styles.infoTitle} ${styles.gray}`}>+5</p>
                </div>
                <div className={styles.reward2}>
                  <img src="/portf/images/reward2.svg" alt="Reward 2" />
                  <p className={`${styles.infoTitle} ${styles.gray}`}>+25</p>
                </div>
              </div>
            </div>
          </div>
          <SplineWrapper />
        </section>
      </div>
    </div>
  );
}
