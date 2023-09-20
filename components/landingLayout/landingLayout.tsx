import landingStyle from "./landingLayout.module.sass";

const LandingLayout = () => {
  return (
    <div className={landingStyle.landingStyle}>
      <div className={landingStyle.landingContainer}>
        <p className={landingStyle.landingSlogan}>
          Don't Just Tell
          <br />
          <span style={{ fontWeight: "bold" }}>Show Them!!!</span>
        </p>
        <p className={landingStyle.landingText}>
          We provide large varities of Digital Resumes that helps you to
          showcase your skills and achievements.
        </p>
        <div className={landingStyle.landingButtonContainer}>
          <div className={landingStyle.landingButton}>
            <p className={landingStyle.landingButtonContent}>Get Started</p>
          </div>
        </div>
      </div>
      <div className={landingStyle.landingContainer}>
        <img
          src={"/static/landingBg.webp"}
          className={landingStyle.landingBg}
        />
      </div>
    </div>
  );
};

export default LandingLayout;
