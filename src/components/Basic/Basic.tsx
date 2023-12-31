import { useState } from "react";
import Datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.min.css";

export const Basic = () => {
  const [date, setDate] = useState<Date | null>(null);
  const [calenderOpen, setCalenderOpen] = useState<boolean>(false);

  return (
    <div className="flex justify-center">
      <div>
        <Datepicker
          selected={date}
          onChange={(value) => {
            setDate(value);
            setCalenderOpen(false);
          }}
          open={calenderOpen}
          onInputClick={() => {
            setCalenderOpen((prev) => !prev);
          }}
          onClickOutside={() => {
            setCalenderOpen(false);
          }}
          // dateFormat="dd-MM-yyyy"
          // minDate={new Date()}
          // maxDate={new Date()}
          // filterDate={(date) => date?.getDay() !== 5}   // exclude fridays
          className="border border-black"
          dateFormat="dd/MM/yyyy"
          showYearDropdown
        />
      </div>
    </div>
  );
};
