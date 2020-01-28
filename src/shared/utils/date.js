import { format } from 'date-fns';
const regularUS = 'MM-dd-yyyy';
const hourAndMinute = 'HH:mm';
const withAMandPM = 'b';
const withDayOfWeek = 'EEEE';
const dateWithAMandPM = `${regularUS} ${hourAndMinute} ${withAMandPM}`;

const dateFormats = {
  regularUSTime: regularUS,
  withUSTime: `${regularUS} HH`,
  USTimeFull: dateWithAMandPM,
  FullTimeWithWeekDate: ` ${withDayOfWeek} ${dateWithAMandPM}`
};

const {
  regularUSTime,
  withUSTime,
  USTimeFull,
  FullTimeWithWeekDate
} = dateFormats;

const getDate = format(new Date(), FullTimeWithWeekDate);

export { getDate };
