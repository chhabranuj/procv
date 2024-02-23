import { BiCategoryAlt } from "react-icons/bi";
import { GiJusticeStar } from "react-icons/gi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import designCardStyle from "./designCardLayout.module.sass";

const DesignCard = (props: any) => {
  return (
    <div className={designCardStyle.designCardParent}>
      <img
        className={designCardStyle.designCardImage}
        src={`https://drive.google.com/thumbnail?id=${
          props.data.image.split("/d/")[1].split("/view")[0]
        }&sz=w2000`}
        alt="Resume Image"
      />
      <div className={designCardStyle.designCardDescriptionContainer}>
        <div className={designCardStyle.designCardContent}>
          <div className={designCardStyle.priceContainer}>
            <p className={designCardStyle.containerTitle}>Price:</p>
            <p className={designCardStyle.containerContent}>
              ₹ {props.data.price}
            </p>
          </div>
          <p className={designCardStyle.designCardTitle}>{props.data.name}</p>
          <div className={designCardStyle.ratingContainer}>
            <p className={designCardStyle.containerTitle}>Rating:</p>
            <div className={designCardStyle.ratingContainerContent}>
              <p className={designCardStyle.containerContent}>
                {props.data.rating}
              </p>
              <GiJusticeStar
                style={{ marginLeft: "0.1rem", fontSize: "small" }}
              />
            </div>
          </div>
        </div>
        <div className={designCardStyle.designCardHandleContainer}>
          <button
            className={designCardStyle.designCardLivePreview}
            onClick={() => {
              window.open(props.data.link);
            }}
          >
            <BiCategoryAlt style={{ marginRight: "0.25rem" }} />
            Live Preview
          </button>
          <button
            className={designCardStyle.designCardBuyNow}
            onClick={() => {
              props.toTheContact(props.data.name);
            }}
          >
            <AiOutlineShoppingCart style={{ marginRight: "0.25rem" }} />
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default DesignCard;
