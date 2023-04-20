// this function calculates date and time
function calculateDays() {
  const datePicker = document.querySelector('#date-picker');
  const selectedDate = new Date(datePicker.value);
  const today = new Date(); //storing current date and time
  const oneDay = 1000 * 60 * 60 * 24; // Number of milliseconds in a day

  //condition to check wheather user picked date before january 1, 2010.
  if (selectedDate.getTime() > new Date('2010-01-01').getTime()) {
    alert('Please select a date before January 1, 2010.');
    return;
  }
  else {
    const daysDifference = Math.floor((today.getTime() - selectedDate.getTime()) / oneDay);//getting the difference between picked date and today's date
    const result = document.querySelector('#result');
    result.textContent = `The number of days between ${selectedDate.toDateString()} and ${today} is ${daysDifference}.`;
  }

}
