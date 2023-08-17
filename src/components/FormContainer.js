import styles from "./FormContainer.module.css";
const FormContainer = () => {
  return (
    <div className={styles.header1}>
      <div className={styles.container}>
        <div className={styles.navbarStyle2NavbarLight}>
          <div className={styles.navbarBrand}>
            <div className={styles.pidicoin}>PIDICOIN</div>
          </div>
          <div className={styles.navbarToggler}>
            <div className={styles.navbarTogglerIcon} />
          </div>
          <div className={styles.collapseNavbarCollapse}>
            <div className={styles.navbarNav}>
              <div className={styles.li}>
                <a className={styles.a} href="#Home">
                  <div className={styles.link}>Home</div>
                </a>
              </div>
              <div className={styles.li1}>
                <a className={styles.a} href="#Pidinomics">
                  <div className={styles.link}>Pidinomics</div>
                </a>
              </div>
              <div className={styles.li2}>
                <a className={styles.a} href="#Tutorial">
                  <div className={styles.link}>Tutorial</div>
                </a>
              </div>
              <div className={styles.li3}>
                <a className={styles.a} href="#Telegram">
                  <div className={styles.link}>Telegram</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container1}>
        <div className={styles.row}>
          <div className={styles.mainContent}>
            <div className={styles.h1Headline1}>
              <p className={styles.pidiFollowsAll}>PIDI Follows all profits</p> 
            </div>
            <b className={styles.h4}>
              <p className={styles.pidiFollowsAll}>
                PIDI Follows all the Top Traders Wallets for you
              </p>
              <p className={styles.pidiFollowsAll}>
                Leave the Technical Analysis to Pro’s, just profit from
                following.
              </p>
            </b>
            <div className={styles.cta}>
                <a className={styles.buttonbtnprimaryColorbtnR} href="#Home">
                  <span className={styles.btnText}>Get $PIDI</span>
                </a> 
                <a className={styles.buttonbtnprimaryColorbtnR} href="https://t.me/pidispybot">
                  <span className={styles.btnText}>Access BOT</span>
                </a> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
