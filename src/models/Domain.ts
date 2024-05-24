export interface ApiResponse<T> {
  data: T;
  status: string;
}

export interface IRange {
  startDate: Date;
  endDate: Date;
  key: string;
}

export interface ReservationSettings {
  minDaysOfStay: number;
  datesUnavailable: Date[];
}
