import { useEffect, useState } from "react";
import { addDays } from "date-fns";
import { pl } from "date-fns/locale";
import { DateRange } from "react-date-range";
import axios from "axios";

const StaySelector = () => {
  const baseURL = "https://localhost:7229/weatherforecast";

  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      alert(JSON.stringify(response.data[0]));
    });
  }, []);

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
