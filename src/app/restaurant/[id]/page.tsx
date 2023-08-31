import Link from 'next/link';
import { MENU_DETAILS } from '../../../../const/restaurant-data';
import styles from './page.module.css';
import OverviewPage from './components/overview/Overview';
import ReservationCard from './components/reservation-card/ReservationCard';

export default function MenuDetails({ params }: { params: { id: string } }) {
  const singleMenuDetailsIndex = MENU_DETAILS.findIndex(
    (menu) => menu.id === params.id
  );

  if (singleMenuDetailsIndex === -1) {
    return <div>Menu item not found</div>;
  }

  const singeDetailsmenu = MENU_DETAILS[singleMenuDetailsIndex];

  const renderOverviewPage = () => {
    const { restoName, reviews } = singeDetailsmenu;
    return <OverviewPage restoName={restoName} reviews={reviews} />;
  };

  return (
    <div className={styles['restaurant']}>
      <div className={styles['restaurant__details']}>
        <div className={styles['restaurant__details-navlinks']}>
          <Link
            href="#"
            className={styles['restaurant__details-navlinks-text']}
          >
            Overview
          </Link>
          <Link
            href="#"
            className={styles['restaurant__details-navlinks-text']}
          >
            Menu
          </Link>
        </div>
        <hr className={styles['restaurant__details-line']} />
        <div className={styles['restaurant__details-overview']}>
          {renderOverviewPage()}
        </div>
      </div>

      <div className={styles['restaurant__reservation']}>
        <ReservationCard />
      </div>
    </div>
  );
}
