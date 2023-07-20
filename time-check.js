// const timeCheck = (start) => {
//   const startTime = new Date(start);
//   const endTime = new Date();
//   const diff = (endTime.getTime() - startTime.getTime()) / 1000;
//   const hourDiff = diff / (60 * 60);
//   const result = {
//     hoursInDecimal: Math.abs(Math.round(hourDiff)),
//     totalHours: Math.abs(hourDiff),
//   };
//   return result;
// };

// console.log(timeCheck("2022-12-02 9:57:00"));
// console.log("Time checked successfully--------");

const printTime = () => {
  const startDate = new Date("2022-12-06 9:00:00");
  const endDate = new Date();
  let currentDate = startDate;

  while (new Date(currentDate) < endDate.getTime()) {
    const prevTime = new Date(currentDate).toLocaleTimeString("it-IT");
    const currDate = new Date(currentDate).setHours(
      new Date(currentDate).getHours() + 1
    );
    currentDate = currDate;
    console.log(
      `Time:${prevTime}-${new Date(currDate).toLocaleTimeString("it-IT")}`
    );
  }
};

printTime();
