import React from "react";
import Image from "next/image";
import Data from "../../data.json";
import styles from "./top.module.css";
import SampleImage from "../../public/images/SampleImage.png";

const Top = () => {
  let productHeader = Data.products[Data.products.length - 1];
  console.log(
    `Data\n\n\n\n\n\n\n\n\n\n\n\n\n`,
    Data.products.length - 1,
    Data.products[Data.products.length - 1],
    Data[20],
    Data
  );

  return (
    <header className={styles.header}>
      <div className={styles.topProductContainer}>
        <div className={styles.topProductTitle}>{productHeader?.name}</div>
        <button className={styles.topProductTitleBtn}>Add to Cart</button>
      </div>

      {/* featured image */}
      <div className={styles.topProductBox}>
        <Image
          //   src={productHeader?.image?.src}
          src={SampleImage}
          alt={productHeader?.image?.alt}
          height={553}
          width={1290}
          layout="responsive"
        />

        {productHeader?.featured ? (
          <div className={styles.topProductTag}>
            <p>Photo of the day</p>
          </div>
        ) : (
          ""
        )}
      </div>
      <button className={styles.topProductTitleBtnMobile}>Add to Cart</button>

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
