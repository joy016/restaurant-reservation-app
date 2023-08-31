import { MENU_DETAILS } from '../../../../const/restaurant-data';
import Header from './components/header/Header';

export default function RestaurantLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { id: string };
}) {
  const singleMenuDetailsIndex = MENU_DETAILS.findIndex(
    (menu) => menu.id === params.id
  );

  const singeDetailsmenu = MENU_DETAILS[singleMenuDetailsIndex];

  return (
    <main>
      <Header name={singeDetailsmenu.restoName} countryFood={singeDetailsmenu.country_food} />
      <div>{children}</div>
    </main>
  );
}
