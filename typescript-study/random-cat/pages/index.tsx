import { type } from "os";
import { useEffect, useState } from "react";
import { GetServerSideProps, NextPage } from "next";
import styles from "./index.module.css"

// getServerSidePropsから渡されるpropsの型
type Props = {
  initialImageUrl: string;
};

type Image = {
  url: string;
};

const fetchImage = async (): Promise<Image> => {
  const res = await fetch("https://api.thecatapi.com/v1/images/search")
  const images = await res.json();
  return images[0];
};

const IndexPage: NextPage<Props> = ({ initialImageUrl }) => {
  // useStateを使って状態を定義する
  const [imageUrl, setImageUrl] = useState(initialImageUrl);
  const [loading, setLoading] = useState(true);
  // // マウント次画像を読み込む宣言
  // useEffect(() => {
  //   fetchImage().then((newImage) => {
  //     setImageUrl(newImage.url);
  //     setLoading(false);
  //   });
  // }, []);
  // ボタンをクリックした時に画像を読み込む処理
  const handleClick = async () => {
    setLoading(true);
    const newImage = await fetchImage();
    setImageUrl(newImage.url);
    setLoading(false);
  };

  //ローディング中でなければ、画像を表示する
  return (
    <div className={styles.page}>
      <button onClick={handleClick} className={styles.button}>
        他のニャンコも見る
      </button>
      <div className={styles.frame}>
        {loading || <img src={imageUrl} className={styles.img} />}
      </div>
    </div>
  );
};

// サーバーサイドで実行する処理
export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const image = await fetchImage();
  return {
    props: {
      initialImageUrl: image.url,
    },
  };
};

export default IndexPage;
