import ourAimStyle from "./ourAimLayout.module.sass";

const OurAimLayout = () => {
  return (
    <div className={ourAimStyle.ourAimParent}>
      <div className={ourAimStyle.ourAimContainer}>
        <p className={ourAimStyle.ourAimTitle}>Our Aim</p>
        <p className={ourAimStyle.ourAimContent}>
          At ProCv, our aim is simple yet powerful: to provide individuals with
          the tools and resources they need to create resumes that makes a
          lasting impression. We understand that a well-crafted resume is the
          key to unlocking professional opportunities, and we're dedicated to
          making that process accessible, efficient, and effective. Our goal is
          to empower users, regardless of their career stage, to showcase their
          unique skills and experience in a way that resonates with employers.
          With our user-friendly interface and expert guidance, we're here to
          help you stand out in the competitive job market and take the next
          step in your career journey.
        </p>
      </div>
      <iframe
        className={ourAimStyle.ourAimVideo}
        src="https://www.youtube.com/embed/aKn0HddzuWM?si=k1l-YeRHb2eQxZg5"
      ></iframe>
    </div>
  );
};

export default OurAimLayout;
