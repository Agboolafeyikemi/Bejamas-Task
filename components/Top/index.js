import React from "react";
import Image from "next/image";
import styles from "../../styles/component/top.module.css";
import SampleImage from "../../public/images/SampleImage.png";
import { useDataLayerValue } from "../../context-api/DataLayer";
import { actionTypes } from "../../context-api/reducer";
import { useIsSmall } from "../../helpers/mediaQuery";

const Top = () => {
  const [{ products }] = useDataLayerValue();
  let productHeader = {};
  if (typeof products != "undefined") {
    products.map((product) => {
      return product?.details?.recommendations ? (productHeader = product) : "";
    });
  }
  //check for mobile view
  const isSmall = useIsSmall();
  const [{ productCart }, dispatch] = useDataLayerValue();

  const updateCart = () => {
    let cartList = productCart;
    cartList.push(productHeader);

    dispatch({
      type: actionTypes.UPDATE_CART,
      productCart: cartList,
    });
  };

  return (
    <header className={styles.header}>
      <div className={styles.topProductContainer}>
        <div className={styles.topProductTitle}>{productHeader?.name}</div>
        <button className={styles.topProductTitleBtn}>Add to Cart</button>
      </div>

      {/* featured image */}
      <div className={styles.topProductBox}>
        {isSmall ? (
          <Image
            src={SampleImage}
            alt={productHeader?.image?.alt}
            height={289}
            width={382}
            layout="responsive"
          />
        ) : (
          <Image
            src={SampleImage}
            alt={productHeader?.image?.alt}
            height={553}
            width={1290}
            layout="responsive"
          />
        )}

        {productHeader?.featured ? (
          <div className={styles.topProductTag}>
            <p>Photo of the day</p>
          </div>
        ) : (
          ""
        )}
      </div>
      <button
        onClick={() => updateCart()}
        className={styles.topProductTitleBtnMobile}
      >
        Add to Cart
      </button>

      {/* description */}
      <div className={styles.topProductSummaryBox}>
        <div className={styles.topProductDescriptionBox}>
          <div className={styles.aboutProduct}>
            About The {productHeader?.name}
          </div>
          <div className={styles.topProductCategory}>
            {productHeader?.category}
          </div>
          <p className={styles.description}>
            {productHeader?.details?.description}
          </p>
        </div>

        <div className={styles.topProductRecommendationBox}>
          <div className={styles.aboutProduct}>People also buy</div>
          <div className={styles.topProductRecommendedPics}>
            {productHeader?.details?.recommendations.map(
              (recommended, keyId) => {
                return (
                  <div key={keyId} className={styles.recommendedPicContainer}>
                    {useIsSmall}
                    <div className={styles.imageBox}>
                      <Image
                        src={recommended?.src}
                        alt={recommended?.alt}
                        title={recommended?.alt}
                        height={117}
                        width={114}
                        layout="responsive"
                      />
                    </div>
                  </div>
                );
              }
            )}
          </div>
          <div className={styles.clrFix}></div>
          <div className={styles.productDetail}>
            <h3>Details</h3>
            <p>
              Size:{" "}
              {`${productHeader?.details?.dimensions?.width} x ${productHeader?.details?.dimensions?.height}`}{" "}
              pixel
            </p>
            <p>Size: {productHeader?.details?.size / 1024} mb</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Top;
