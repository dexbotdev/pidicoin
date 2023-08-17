import styles from "./ContactForm.module.css";
const ContactForm = () => {
  return (
    <div className={styles.contact4} id="Pidinomics">
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.mainContent}>
            <b className={styles.h2}>PIDINOMICS</b>
            <div className={styles.paragraph}>
              The Tokenomics of PIDI Token is the most simplest
            </div>
          </div>
        </div>
        <div className={styles.row1}>
          <div className={styles.colMd4}>
            <div className={styles.cardItem}>
            <b className={styles.h5}>100K Tokens</b>
            <b className={styles.h5}>90% Tokens locked</b>
            </div>
          </div>
          <div className={styles.colMd41}>
            <div className={styles.cardItem1}>
              <b className={styles.h5}>
                <p className={styles.forGiveawaysMarketing}>
                  10% for Giveaways, Marketing,
                </p>
                <p className={styles.forGiveawaysMarketing}>
                  Team and Partners.
                </p>
              </b>
            </div>
          </div>
          <div className={styles.colMd42}>
            <div className={styles.cardItem}>
            <b className={styles.h5}>Zero Taxes and 25% Revenue Share with Holders</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
