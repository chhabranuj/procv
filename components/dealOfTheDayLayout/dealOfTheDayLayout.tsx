import { BiCategoryAlt } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import dealOfTheDayStyle from "./dealOfTheDayLayout.module.sass";

const DealOfTheDayLayout = () => {
  const l = ["one", "two", "three", "four", "five"];
  const handlePreview = () => {
    window.open("https://chhabranuj.netlify.app");
  };
  return (
    <div
      className={dealOfTheDayStyle.dealOfTheDayParent}
      style={{ flexWrap: "wrap" }}
    >
      {/* <p className={dealOfTheDayStyle.dealOfTheDayTitle}>Deal Of The Day</p>
      <p className={dealOfTheDayStyle.dealOfTheDaySubTitle}>
        Don't miss out the great oppotunity.
      </p>
      <div
        style={{
          width: "100%",
          display: "flex",
          margin: "1.25rem 0",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            margin: "1.25rem 0",
            justifyContent: "space-between",
          }}
        >
          <embed
            src="https://chhabranuj.netlify.app"
            style={{
              width: "72%",
              height: "100vh",
              borderRadius: "0.75rem",
              border: "none",
            }}
          ></embed>
          <embed
            src="https://chhabranuj.netlify.app"
            style={{
              width: "27%",
              height: "100vh",
              borderRadius: "0.75rem",
              border: "none",
            }}
          ></embed>
        </div>
        <button
          style={{
            width: "100%",
            border: "none",
            cursor: "pointer",
            padding: "1rem 0",
            fontSize: "medium",
            borderRadius: "0.75rem",
          }}
          onClick={handlePreview}
        >
          Live Preview
        </button>
      </div> */}
      {l.map((item) => {
        return (
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              width: "30%",
              height: "40vh",
              flexDirection: "column",
              borderRadius: "0.5rem",
              marginBottom: "2rem",
              boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
            }}
          >
            {/* <embed
              src="https://chhabranuj.netlify.app"
              style={{
                width: "100%",
                height: "70%",
                borderRadius: "0.75rem",
                border: "none",
              }}
            ></embed> */}
            <img
              src={`/static/${item}.png`}
              style={{
                width: "100%",
                height: "70%",
                borderRadius: "0.5rem",
              }}
            />
            <div
              style={{
                height: "30%",
                padding: "1rem",
                width: "100%",
                display: "flex",
                alignItems: "flex-start",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <p>{item}</p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <button style={{ width: "20%" }}>$21</button>
                <button style={{ width: "50%" }}>
                  <BiCategoryAlt />
                  Live Preview
                </button>
                <button style={{ width: "20%" }}>
                  <AiOutlineShoppingCart />
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DealOfTheDayLayout;
