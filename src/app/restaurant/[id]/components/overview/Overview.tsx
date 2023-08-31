'use client';

import { usePathname } from 'next/navigation';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import styles from './overview.module.css';
import { FOOD_IMAGE } from '../../../../../../const/imageUrl';

interface OverviewProps {
  restoName: string;
  reviews: string;
}

export default function OverviewPage({ restoName, reviews }: OverviewProps) {
  const pathname = usePathname();

  const maxStars = 5;
  const numberOfReviews = Number(reviews);
  const filledStar = Math.min(numberOfReviews, maxStars);

  const renderStar = () => {
    const stars = [];
    for (let i = 0; i < maxStars; i++) {
      if (i < filledStar) {
        stars.push(
          <AiFillStar
            key={i}
            className={styles['restaurant__details-starIcon']}
          />
        );
      } else {
        stars.push(<AiOutlineStar key={i} />);
      }
    }
    return stars;
  };

  return (
    <>
      <h1>{restoName}</h1>
      <div className={styles['restaurant__details-reviews']}>
        <div>{renderStar()}</div>
        <p
          className={styles['restaurant__details-review']}
        >{`${reviews} Reviews`}</p>
      </div>
      <p className={styles['restaurant__details-food-description']}>
        Commodo tempor aute laborum nisi irure irure dolor. Ipsum fugiat eiusmod
        tempor dolore ad nulla magna cupidatat elit do et sit duis
        reprehenderit. Anim amet ad quis eiusmod esse sunt culpa nulla culpa
        nisi tempor laboris mollit. Amet Lorem ut ipsum aute deserunt velit.
      </p>
      <h3>4 photos</h3>
      <div className={styles['restaurant__details-photos']}>
        {FOOD_IMAGE.map(({ id, imageSrc }) => (
          <img
            key={id}
            src={imageSrc}
            className={styles['restaurant__details-photo']}
          />
        ))}
      </div>
    </>
  );
}
