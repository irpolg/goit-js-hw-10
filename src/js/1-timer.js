console.log("timer");
import flatpickr from "flatpickr"; // Описаний в документації
import "flatpickr/dist/flatpickr.min.css";   // Додатковий імпорт стилів - LMS
import iziToast from "izitoast";   // Описаний у документації
import "izitoast/dist/css/iziToast.min.css"; // Додатковий імпорт стилів

const startButton = document.querySelector("[data-start]");;
const daysElement = document.querySelector('span[data-days]');
const hoursElement = document.querySelector('span[data-hours]');
const minutesElement = document.querySelector('span[data-minutes]');
const secondsElement = document.querySelector('span[data-seconds]');
const inputDateTime = document.querySelector('#datetime-picker');

startButton.disabled = true;
startButton.style.backgroundColor = "#CFCFCF";
startButton.style.color = "#989898";


// Другим аргументом функції flatpickr(selector, options) 
// можна передати необов'язковий об'єкт параметрів. 
// Ми підготували для тебе об'єкт, який потрібен 
// для виконання завдання. Розберися, за що відповідає 
// кожна властивість у документації «Options» і 
// використовуй його у своєму коді.
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0].getTime() < new Date().getTime()) {
            //alert("Виберіть майбутню дату!") // library
            daysElement.textContent === "00";
            hoursElement.textContent === "00";
            minutesElement.textContent === "00";
            secondsElement.textContent === "00";
            iziToast.error({
                title: 'Error',
                titleColor: 'black',
                backgroundColor: 'red',
                message: 'Please choose a date in the future',
                position: 'topRight',
            });
      } else {
            startButton.disabled = false;
            startButton.style.backgroundColor = "#4E75FF";
            startButton.style.color = "#FFFFFF";
            startButton.addEventListener("click", () => {    
                startButton.style.backgroundColor = "#CFCFCF";
                startButton.style.color = "#989898";
                const userDate = setInterval(() => {
                    const time = convertMs(selectedDates[0].getTime() - new Date().getTime());
                    daysElement.textContent = addLeadingZero(time.days);
                    //console.log(daysElement.textContent);
                    hoursElement.textContent = addLeadingZero(time.hours);
                    minutesElement.textContent = addLeadingZero(time.minutes);
                    secondsElement.textContent = addLeadingZero(time.seconds);
                    if (daysElement.textContent === "00" &&
                        hoursElement.textContent === "00" &&
                        minutesElement.textContent === "00" &&
                        secondsElement.textContent === "00") {
                        console.log(userDate);
                        clearInterval(userDate);
                    }
                }, 1000);
                startButton.disabled = true;
                inputDateTime.disabled = true;
            })
  }
  }
};

flatpickr(inputDateTime, options);
//flatpickr(selector, options);  - lms

function addLeadingZero(value) {
    return value.toString().padStart(2, '0');
}


// Для підрахунку значень використовуй готову 
// функцію convertMs, де ms — різниця між 
// кінцевою і поточною датою в мілісекундах.

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);   // Remaining days
  const hours = Math.floor((ms % day) / hour); // Remaining hours
  const minutes = Math.floor(((ms % day) % hour) / minute); // Remaining minutes
  const seconds = Math.floor((((ms % day) % hour) % minute) / second); // Remaining seconds

  return { days, hours, minutes, seconds };
}

console.log("convertMs: ", convertMs(2000));     //{days: 0, hours: 0, minutes: 0, seconds: 2}
console.log("convertMs: ", convertMs(140000));   //{days: 0, hours: 0, minutes: 2, seconds: 20}
console.log("convertMs: ", convertMs(24140000)); //{days: 0, hours: 6 minutes: 42, seconds: 20}
