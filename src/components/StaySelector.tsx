import { useState } from "react";
import { addDays } from "date-fns";
import { pl } from "date-fns/locale";
import { DateRange } from "react-date-range";
const StaySelector = () => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  return (
    <div className="site-section">
      <div className="container">
        <div className="row">
          <DateRange
            dateDisplayFormat={"d MMMM yyyy"}
            disabledDates={[addDays(new Date(), 3), addDays(new Date(), 4)]}
            minDate={new Date()}
            locale={pl}
            months={3}
            direction="horizontal"
            editableDateInputs={true}
            onChange={(item) => setState([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={state}
            l
          />
        </div>
      </div>
    </div>
  );
};

export default StaySelector;
