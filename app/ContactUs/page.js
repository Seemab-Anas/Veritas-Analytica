"use client";
import styles from "@/styles/ContactUs/contactus.module.css";
import { useState } from "react";

const Page = () => {
  const [selectedService, setSelectedService] = useState(null);

  const handleServiceChange = (service) => {
    if (selectedService === service) {
      setSelectedService(null);
    } else {
      setSelectedService(service);
    }
  };

  return (
    <div className={styles.cont}>
      <div className={styles.left}>
        <h1>Choose a type of service you need</h1>
        <p>
          Fill out the form providing all possible details about your project.
          We will come back to you shortly to discuss further steps to bring
          your idea to life.
        </p>
        <h2>
          You can also book a free meeting with our team to discuss your project
        </h2>
        <button>Book a meeting</button>
      </div>
      <div className={styles.right}>
        <h2>CHOOSE A SERVICE</h2>
        <div className={styles.service_choices}>
          <input
            type="radio"
            name="service"
            id="AI-Model-Development"
            value="AI Model Development"
            checked={selectedService === "AI Model Development"}
            onChange={() => handleServiceChange("AI Model Development")}
          />
          <label htmlFor="AI-Model-Development">AI Model Development</label>

          <input
            type="radio"
            name="service"
            id="Data-Analysis"
            value="Data Analysis"
            checked={selectedService === "Data Analysis"}
            onChange={() => handleServiceChange("Data Analysis")}
          />
          <label htmlFor="Data-Analysis">Data Analysis</label>

          <input
            type="radio"
            name="service"
            id="Process-Automation"
            value="Process Automation"
            checked={selectedService === "Process Automation"}
            onChange={() => handleServiceChange("Process Automation")}
          />
          <label htmlFor="Process-Automation">Process Automation</label>

          <input
            type="radio"
            name="service"
            id="Data-Mining"
            value="Data Mining"
            checked={selectedService === "Data Mining"}
            onChange={() => handleServiceChange("Data Mining")}
          />
          <label htmlFor="Data-Mining">Data Mining</label>
        </div>
        <h2>SHARE SOME INFO</h2>
        <input
          className={styles.input_info}
          type="text"
          name="name"
          placeholder="Your name"
          required
        />
        <input
          className={styles.input_info}
          type="email"
          name="email"
          placeholder="Your email"
          required
        />
        <textarea
          className={styles.input_info}
          name="project"
          placeholder="Tell us about your project"
          required
        ></textarea>

        <h2>CHOOSE A SERVICE</h2>
        <div className={styles.service_choices}>
              <input type="radio" name="budget" id="budget-6-10k" value="6-10k" />
              <label for="budget-6-10k">$6-10k</label>
            
              <input type="radio" name="budget" id="budget-10-20k" value="10-20k" />
              <label for="budget-10-20k">$10-20k</label>
            
              <input type="radio" name="budget" id="budget-20-40k" value="20-40k" />
              <label for="budget-20-40k">$20-40k</label>
            
              <input type="radio" name="budget" id="budget-40-100k" value="40-100k" />
              <label for="budget-40-100k">$40-100k</label>
            
              <input type="radio" name="budget" id="budget-100k" value=">100k" />
              <label for="budget-100k"> $100k</label>
          </div>
          <h2>HOW DID YOU HEAR ABOUT US?</h2>
          <select className={styles.source} name="source">
                <option value="Google">Google/Search engine</option>
                <option value="Friend">Friend/Referral</option>
                <option value="Social Media">Social Media</option>
          </select>
          <button className={styles.submitbtn}>Submit</button>
      </div>
    </div>
  );
};

export default Page;