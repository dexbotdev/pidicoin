import styles from "./FormContainer2.module.css";
const FormContainer2 = () => {
  return (
    <div className={styles.about2} id="Tutorial">
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.mainContent}>
            <b className={styles.h2FeatureSection1}>How to Access PIDIBot</b>
            <div className={styles.paragraph}>
              <p
                className={styles.gettingAccessTo}
              >{`Getting access to PIDI bot has never been simple, `}</p>
            </div>
          </div>
        </div>
        <div className={styles.row1}>
          <div className={styles.colMd7}>
            <img className={styles.video1Icon} alt="" src="/video1@2x.png" />
          </div>
          <div className={styles.colMd4}>
            <div className={styles.div} />
            <div className={styles.cardItem}>
              <div className={styles.flexRow}>
                <img
                  className={styles.icnSettingsIcnMd}
                  alt=""
                  src="/icn-settings-icnmd.svg"
                />
                <div className={styles.div1}>
                  <b className={styles.h5}>Easiest way to get Access</b>
                  <div className={styles.h6}>
                    <p className={styles.gettingAccessTo}>
                      Just Buy and Hold 1000 PIDICOINs
                    </p>
                    <p className={styles.gettingAccessTo}> in your Wallet</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.cardItem1} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormContainer2;
