import styles from './reservation-card.module.css';

export default function ReservationCard() {
  return (
    <>
      <h3>Make a Reservation</h3>
      <p className={styles['restaurant__reservation-partysize']}>Party size</p>
      <select
        name="person"
        id="person"
        className={styles['restaurant__reservation-personpicker']}
      >
        <option value="1">1 Person</option>
        <option value="2">2 Persons</option>
        <option value="3">3-5 Persons</option>
        <option value="4">More than 10 Persons</option>
      </select>
      <div className={styles['restaurant__reservation-datetime']}>
        <p className={styles['restaurant__reservation-date']}>Date</p>
        <p className={styles['restaurant__reservation-time']}>Time</p>
      </div>
      <div>
        <input
          type="date"
          id="birthday"
          name="birthday"
          className={styles['restaurant__reservation-datepicker']}
        />
        <select
          className={styles['restaurant__reservation-timepicker']}
          name="person"
          id="person"
        >
          <option value="1">1-2 PM</option>
          <option value="2">5-10 PM</option>
          <option value="3">10-11 PM</option>
          <option value="4">12-1PM</option>
        </select>
      </div>
      <button
        className={`${styles['restaurant__reservation-button']} ${styles['restaurant__reservation-button--hover']}`}
      >
        Find a Time
      </button>
    </>
  );
}
