import { DateBox } from "devextreme-react";
import { useCallback, useState } from "react";

const holidays = [
  new Date(0, 0, 1),
  new Date(0, 0, 20),
  new Date(0, 1, 17),
  new Date(0, 4, 10),
  new Date(0, 4, 25),
  new Date(0, 5, 21),
  new Date(0, 6, 4),
  new Date(0, 8, 7),
  new Date(0, 9, 5),
  new Date(0, 9, 12),
  new Date(0, 10, 11),
  new Date(0, 10, 26),
  new Date(0, 10, 27),
  new Date(0, 11, 2),
  new Date(0, 11, 25),
  new Date(0, 11, 31)
];

const disabledDates = [
    new Date(2024, 10, 12),
    new Date(2024, 11, 25), // Dec 25, 2024
  ];

export const CustomDateBox = () => {
    const [dateValue, setDateValue] = useState(new Date());
    const min = new Date(1900, 0, 1);
    const max = new Date();

    const onDateValueChanged = useCallback((args) => {
        console.log("datvale", args.value)
        setDateValue(args.value);
      }, [])

    const getDisabledDates = (args) => {
        const dayOfWeek = args.date.getDay();
        const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
        const anc = disabledDates.some(
          (disabledDate) =>
            args.date.getDate() === disabledDate.getDate() &&
            args.date.getMonth() === disabledDate.getMonth() &&
            args.date.getFullYear() === disabledDate.getFullYear()
        );
    
        return anc
      }

    return (
        <>
            <h1>Date box</h1>
            <DateBox
                type="date"
                width={400}
                onValueChanged={onDateValueChanged}
                min={min}
                max={max}
                label="Select Date"
                labelMode="floating"
                disabledDates={getDisabledDates}
            />
        </>
    )
}