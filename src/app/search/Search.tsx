import styles from './search.module.css';

export default function Search() {
  return (
    <div className={styles['search-container']}>
      <h2>Find your table for any occasion</h2>
      <div className={styles.search}>
        <input placeholder="Search Restaurant" />
        <button>Let's go</button>
      </div>
    </div>
  );
}
