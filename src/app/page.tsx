import Image from 'next/image';
import styles from './page.module.css';
import Search from './search/Search';
import { MENU_DATA } from '../../const/restaurant-data';

export default function Home() {
  return (
    <main>
      <Search />
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
            <div key={id} className={styles['restaurant-card']}>
              <img src={imgUrl} />
              <h3>{restoName}</h3>
              <p>{`${reviews} reviews`}</p>
              <p>{country_food}</p>
              <p>{location}</p>
              <p>{timesOfBook}</p>
            </div>
          )
        )}
      </div>
    </main>
  );
}
