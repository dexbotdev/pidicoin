import FormContainer from "../components/FormContainer";
import FormContainer2 from "../components/FormContainer2";
import ContactForm from "../components/ContactForm";
import FormContainer1 from "../components/FormContainer1";
import styles from "./PidiBot.module.css";
const PidiBot = () => {
  return (
    <div className={styles.pidibot} id="Home">
      <FormContainer />
      <FormContainer2 /> 
      <ContactForm />
      <div className={styles.footer3}>
        <FormContainer1 />
        <div className={styles.hr} /> 
      </div>
    </div>
  );
};

export default PidiBot;
