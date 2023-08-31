import { AiFillStar } from 'react-icons/ai';
import { MENU_DATA } from '../../../../const/restaurant-data';
import styles from './restaurant-card.module.css';
import Link from 'next/link';

export default function RestaurantCard() {
  return (
    <div className={styles['cards-container']}>
      {MENU_DATA.map(
        ({
          id,
          imgUrl,
          reviews,
          restoName,
          country_food,
          location,
          timesOfBook,
        }) => (
          <Link href={`/restaurant/${id}`}>
            <div
              key={id}
              className={`${styles['card']} ${styles['card--hover']}`}
            >
              <img src={imgUrl} className={styles['card__image']} />
              <div className={styles['card__details-container']}>
                <h3 className={styles['card__resto-name']}>{restoName}</h3>

                <div className={styles['card__reviews-container']}>
                  <div>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </div>
                  <p
                    className={styles['card__resto-reviews']}
                  >{`${reviews} reviews`}</p>
                </div>

                <div className={styles['card__details-location-container']}>
                  <p className={styles['card__resto-country-food']}>
                    {country_food}
                  </p>
                  <p className={styles['card__resto-dollar-sign']}>$$$$</p>
                  <p className={styles['card__resto-location']}>{location}</p>
                </div>

                <p className={styles['card__resto-times-of-book']}>
                  {timesOfBook}
                </p>
              </div>
            </div>
          </Link>
        )
      )}
    </div>
  );
}
