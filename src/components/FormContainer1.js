import styles from "./FormContainer1.module.css";
const FormContainer1 = () => {
  return (
    <div className={styles.div}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.colMd3}>
            <div className={styles.navbarBrand}>
              <b className={styles.pidicoin}>PIDICOIN</b>
            </div>
          </div>
          <div className={styles.colMd31}>
            <div className={styles.socialMedia}>
              <img className={styles.facebookIcon} alt="" src="/facebook.svg" />
              <img
                className={styles.facebookIcon}
                alt=""
                src="/instagram.svg"
              />
              <img className={styles.twitterIcon} alt="" src="/twitter.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormContainer1;
