'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './Portfolio.module.scss';

export default function Portfolio() {
  const [serverTime, setServerTime] = useState('8:42');
  const [localTime, setLocalTime] = useState('15:42');

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
            <div className={styles.avatarBorder}>
              <span className={`${styles.corner} ${styles.topLeft}`}></span>
              <span className={`${styles.corner} ${styles.topRight}`}></span>
              <span className={`${styles.corner} ${styles.bottomLeft}`}></span>
              <span className={`${styles.corner} ${styles.bottomRight}`}></span>
              <div className={styles.avatar}>
                <img src="/portf/images/avatar.png" alt="Avatar" />
              </div>
            </div>
            <div className={styles.information}>
              <p className={styles.infoTitle}>NAME</p>
              <p className={styles.realTitle}>ДИАНА ГЛИМНУРОВА</p>
            </div> 
            <div className={styles.information}>
              <p className={styles.infoTitle}>occupation</p>
              <p className={styles.realTitle}>FRONTEND DEVELOPER</p>
            </div> 
            <div className={styles.information}>
              <p className={styles.infoTitle}>availability</p>
              <div className={styles.border}>
                <p className={`${styles.realTitle} ${styles.hire}`}>open for hire</p>
              </div>
            </div> 
            <div className={styles.information}>
              <p className={styles.infoTitle}>social</p>
              <div className={styles.social}>
                <p className={styles.realTitle}>open connection</p>
                <img src="/portf/images/Frame.png" alt="Social" />
              </div>
            </div> 
            <div className={`${styles.information} ${styles.quote}`}>
              <p className={`${styles.infoTitle} ${styles.quoteName}`}>Джонни Сильверхенд</p>
              <p className={`${styles.infoTitle} ${styles.quoteTitle}`}>
                Не хочу показаться грубым, но я всё это в рот е*ал.
              </p>
            </div> 
          </div>                  
        </section>

        <section className={`${styles.sec} ${styles.content}`}>
          <div className={styles.mainImage}>
            <span className={`${styles.corner} ${styles.topLeft}`}></span>
            <span className={`${styles.corner} ${styles.topRight}`}></span>
            <span className={`${styles.corner} ${styles.bottomLeft}`}></span>
            <span className={`${styles.corner} ${styles.bottomRight}`}></span>
            <img src="/portf/images/image1.svg" alt="Main" />
          </div>
          <div className={styles.navigation}>
            <div className={`${styles.borderStyle} ${styles.margin}`}>
              <div className={styles.border}>
                <p className={`${styles.realTitle} ${styles.questWhite}`}>Begginning</p>
              </div>
              <div className={`${styles.styleTitle} ${styles.grayBorder}`}>
                <p className={`${styles.infoTitle} ${styles.gray} ${styles.buttonsStyle}`}>
                  Suscipit est consequatur<br />
                  nemo voluptatem est<br />
                  labore saepe.
                </p>
              </div>
            </div>
            
            <Link href="/main" className={`${styles.borderStyle} ${styles.margin}`}>
              <div className={styles.border}>
                <p className={`${styles.realTitle} ${styles.questWhite}`}>logs</p>
              </div>
              <div className={`${styles.styleTitle} ${styles.grayBorder}`}>
                <p className={`${styles.infoTitle} ${styles.gray} ${styles.buttonsStyle}`}>
                  Suscipit est consequatur<br />
                  nemo voluptatem est<br />
                  labore saepe.
                </p>
              </div>
            </Link>
            
            <div className={`${styles.borderStyle} ${styles.margin}`}>
              <div className={styles.border}>
                <p className={`${styles.realTitle} ${styles.questWhite}`}>creations</p>
              </div>
              <div className={`${styles.styleTitle} ${styles.grayBorder}`}>
                <p className={`${styles.infoTitle} ${styles.gray} ${styles.buttonsStyle}`}>
                  Suscipit est consequatur<br />
                  nemo voluptatem est<br />
                  labore saepe.
                </p>
              </div>
            </div>
          </div> 
        </section>

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
        </section>
      </div>
    </div>
  );
}
