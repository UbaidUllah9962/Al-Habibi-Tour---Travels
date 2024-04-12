import styles from "./Images.module.css";
function Images() {
  return (
    <div className={styles.Images}>
      <div className={styles.Image}>
        <div className={styles.Image_list}>
          <img
            src="https://cdn.pixabay.com/photo/2024/01/04/16/48/landscape-8487906_1280.jpg"
            alt=""
          />
        </div>
        <div className={styles.Image_list}>
          <img
            src="https://cdn.pixabay.com/photo/2016/12/11/12/02/mountains-1899264_1280.jpg"
            alt=""
          />
        </div>

        <div className={styles.Image_list}>
          <img
            src="https://cdn.pixabay.com/photo/2022/11/14/10/54/sunrise-7591335_960_720.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Images;
