import getStartedStyle from "./getStartedLayout.module.sass";

const GetStartedLayout = () => {
  return (
    <div className={getStartedStyle.getStartedParent}>
      <p className={getStartedStyle.getStartedTitle}>Your Skills, Our Tech</p>
      <p className={getStartedStyle.getStartedSubTitle}>
        Let's Create Your Digital Identity
      </p>
      <p className={getStartedStyle.getStartedContent}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
        dolores nostrum animi perspiciatis commodi tempore
      </p>
      <button className={getStartedStyle.getStartedButton}>Get Started</button>
    </div>
  );
};

export default GetStartedLayout;
