export default function ReservationCard() {
  return (
    <>
      <h3>Make a Reservation</h3>
      <p>Party size</p>
      <select name="person" id="person">
        <option value="1">1 Person</option>
        <option value="2">2 Persons</option>
        <option value="3">3-5 Persons</option>
        <option value="4">More than 10 Persons</option>
      </select>
      <div>
        <p>Date</p>
        <p>Time</p>
      </div>
      <div>
        <input type="date" id="birthday" name="birthday"></input>
      </div>
      <button>Find a Time</button>
    </>
  );
}
