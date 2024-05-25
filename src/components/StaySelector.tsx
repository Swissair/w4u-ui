import { useEffect, useState } from "react";
import { addDays } from "date-fns";
import { pl } from "date-fns/locale";
import { DateRange } from "react-date-range";
import { IRange, ReservationSettings } from "../models/Domain";
import { getDaysWithinRange } from "../models/DateHelpers";
import apiClient from "../services/apiClient";
import { isMobile } from "react-device-detect";

export interface Props {
  setValue;
}

const StaySelector = (props: Props) => {
  const [selectedRange, setSelectedRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 1),
      key: "selection",
    },
  ]);

  const [unavailableDates, setUnavailableDates] = useState<Date[]>([]);
  const [minStay, setMinStay] = useState<number>(50);

  const [isSelectionValid, setIsSelectionValid] = useState<boolean>(true);

  const [reservationSettings, setReservationSettings] =
    useState<ReservationSettings>();

  useEffect(() => {
    async function fetchUnavailableDates() {
      const response = await apiClient.get<ReservationSettings>(
        "reservation/dates/unavailable"
      );
      setUnavailableDates(response.data.datesUnavailable);
      setMinStay(response.data.minDaysOfStay);
    }
    fetchUnavailableDates();
  }, []);

  const setSelectedDates = (ranges: IRange[]) => {
    const range = ranges[0];
    const daysWithinSelectedRange = getDaysWithinRange(range);
    if (daysWithinSelectedRange.length < minStay) {
      setIsSelectionValid(false);
    } else {
      setIsSelectionValid(true);
      setSelectedRange([range]);
      props.setValue("dateRange", range);
    }
  };

  return (
    <div className="site-section">
      <div className="container">
        <div className="row">
          {!isSelectionValid && (
            <div>
              Wybrany okres jest krótszy niż minimalny czas pobytu - {minStay}{" "}
              dni
            </div>
          )}

          <DateRange
            dateDisplayFormat={"d MMMM yyyy"}
            disabledDates={unavailableDates}
            minDate={new Date()}
            locale={pl}
            months={3}
            direction={isMobile ? "vertical" : "horizontal"}
            editableDateInputs={true}
            // onChange={(item) => setState([item.selection])}
            onChange={(item) => setSelectedDates([item.selection as IRange])}
            moveRangeOnFirstSelection={false}
            ranges={selectedRange}
          />
        </div>
      </div>
    </div>
  );
};

export default StaySelector;
