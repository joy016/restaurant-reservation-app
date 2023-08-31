import styles from './header.module.css';

interface HeaderProps {
  name: string;
  countryFood: string;
}

export default function Header({ name, countryFood }: HeaderProps) {
  return (
    <div className={styles['resto-name-holder']}>
      <h1 className={styles['resto__resto-name']}>
        {name} <span>({countryFood})</span>
      </h1>
    </div>
  );
}
