'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './Portfolio.module.scss';

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

            <div className="change">
              <img src="/portf/images/image1.svg" alt="Main" />
              {/* <div className="stack">
                <div className="data">
                  <p>stack</p>
                </div>
                <div className={styles.warn}>
                  <div className={styles.details}>
                    <div className={styles.border}>
                      <p className={`${styles.realTitle} ${styles.questWhite}`}>details</p>
                    </div>
                    <div className={styles.information}>
                      <p className={styles.infoTitle}>project name</p>
                      <p className={styles.realTitle}>Portfolio</p>
                    </div> 
                    <div className={styles.information}>
                      <p className={styles.infoTitle}>brief</p>
                      <p className={styles.realTitle}>one sentence explanation for what the project is.</p>
                    </div>
                  </div>
                  <div className={styles.technologies}>
                    <div className={styles.border}>
                      <p className={`${styles.realTitle} ${styles.questWhite}`}>technologies</p>
                    </div>
                  </div>
                  <div className={styles.aboutme}>
                    <div>
                      <p className={styles.infoTitle}>about</p>
                      <p className={`${styles.infoTitle} ${styles.goalContent} ${styles.gray}`}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Lorem voluptate elit aliquip veniam nisi cillum anim ex quis ullamco 
                        dolor anim duis dolore consectetur velit. In cillum exercitation nostrud 
                        adipiscing sed laboris dolore minim consectetur tempor.
                        Exercitation tempor amet ut reprehenderit aliquip sit cupidatat eiusmod 
                        dolore nisi ex labore ipsum exercitation sint amet. Ea nostrud quis id 
                        sit nulla occaecat non proident in et exercitation occaecat mollit. Duis 
                        cillum cupidatat pariatur minim non elit quis anim occaecat nulla ex ex 
                        aute irure. Exercitation ut minim consequat laborum exercitation 
                        excepteur exercitation velit enim est.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="file-explorer">
                  <div className="explorer-title">
                    <p>file xplorer</p>
                  </div>
                  <div className="location">
                    <p>location:  /projects/the-name</p>
                  </div>

                </div>
                
              </div> */}
            </div>
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
                <p className={`${styles.realTitle} ${styles.questWhite}`}>Creations</p>
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
                <p className={`${styles.realTitle} ${styles.questWhite}`}>stack</p>
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
              <div className={`${styles.borderStyle}`}>
                <div className={styles.border}>
                  <p className={`${styles.realTitle} ${styles.questWhite}`}>BEGGINNING</p>
                </div>
                <div className={`${styles.styleTitle} ${styles.grayBorder}`}>
                  <p className={`${styles.infoTitle} ${styles.gray} ${styles.buttonsStyle}`}>
                    Suscipit est consequatur<br />
                    nemo voluptatem est<br />
                    labore saepe.
                  </p>
                </div>
              </div>
              
              <div className={`${styles.borderStyle}`}>
                <div className={styles.border}>
                  <p className={`${styles.realTitle} ${styles.questWhite}`}>LOGS</p>
                </div>
                <div className={`${styles.styleTitle} ${styles.grayBorder}`}>
                  <p className={`${styles.infoTitle} ${styles.gray} ${styles.buttonsStyle}`}>
                    Suscipit est consequatur<br />
                    nemo voluptatem est<br />
                    labore saepe.
                  </p>
                </div>
              </div>
              
              <Link href="/main" className={`${styles.borderStyle}`}>
                <div className={styles.border}>
                  <p className={`${styles.realTitle} ${styles.questWhite}`}>CREATIONS</p>
                </div>
                <div className={`${styles.styleTitle} ${styles.grayBorder}`}>
                  <p className={`${styles.infoTitle} ${styles.gray} ${styles.buttonsStyle}`}>
                    Suscipit est consequatur<br />
                    nemo voluptatem est<br />
                    labore saepe.
                  </p>
                </div>
              </Link>
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
        </section>
      </div>
    </div>
  );
}
