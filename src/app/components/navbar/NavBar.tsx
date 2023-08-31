import Image from 'next/image';
import Link from 'next/link';
import styles from './navbar.module.css';

export default function NavigationPage() {
  return (
    <div className={styles['navbar-container']}>
      <div>
        <Link href="/">
          <Image
            className={styles.logo}
            src={'/images/logo.png '}
            alt={''}
            width={75}
            height={70}
          />
        </Link>
      </div>
      <div className={styles['navlink-container']}>
        <Link href="#">Sign up</Link>
        <Link href="#">Sign in</Link>
      </div>
    </div>
  );
}
