function countHours(year, holidays) {
    const weekendDays = [0, 6];
    let hours = 0;
  
    holidays.forEach( function(holiday) {
      let date = new Date(`${holiday}/${year}`);
      if(!weekendDays.includes(date.getDay())) {
        hours += 2;
      }
    });
  
    return hours;
  }