console.log("timer");
import flatpickr from "flatpickr"; // Описаний в документації
import "flatpickr/dist/flatpickr.min.css";   // Додатковий імпорт стилів - LMS
import iziToast from "izitoast";   // Описаний у документації
import "izitoast/dist/css/iziToast.min.css"; // Додатковий імпорт стилів

const startBtn = document.querySelector("[data-start]");;
const daysRef = document.querySelector('span[data-days]');
const hoursRef = document.querySelector('span[data-hours]');
const minutesRef = document.querySelector('span[data-minutes]');
const secondsRef = document.querySelector('span[data-seconds]');
const inputDateTime = document.querySelector('#datetime-picker');

startBtn.disabled = true;
startBtn.style.backgroundColor = "#CFCFCF";
startBtn.style.color = "#989898";


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
            daysRef.textContent === "00";
            hoursRef.textContent === "00";
            minutesRef.textContent === "00";
            secondsRef.textContent === "00";
            iziToast.error({
                title: 'Error',
                titleColor: 'black',
                backgroundColor: 'red',
                message: 'Please choose a date in the future',
                position: 'topRight',
            });
      } else {
            startBtn.disabled = false;
            startBtn.style.backgroundColor = "#4E75FF";
            startBtn.style.color = "#FFFFFF";
            startBtn.addEventListener("click", () => {    
                startBtn.style.backgroundColor = "#CFCFCF";
                startBtn.style.color = "#989898";
                const userDate = setInterval(() => {
                    const time = convertMs(selectedDates[0].getTime() - new Date().getTime());
                    daysRef.textContent = addLeadingZero(time.days);
                    //console.log(daysRef.textContent);
                    hoursRef.textContent = addLeadingZero(time.hours);
                    minutesRef.textContent = addLeadingZero(time.minutes);
                    secondsRef.textContent = addLeadingZero(time.seconds);
                    if (daysRef.textContent === "00" &&
                        hoursRef.textContent === "00" &&
                        minutesRef.textContent === "00" &&
                        secondsRef.textContent === "00") {
                        console.log(userDate);
                        clearInterval(userDate);
                    }
                }, 1000);
                startBtn.disabled = true;
                inputDateTime.disabled = true;
            })
  }
  }
};

flatpickr(inputDateTime, options);
//flatpickr(selector, options);  - lms

function addLeadingZero(value) {
    //return `${n}`.padStart(2, '0');
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

console.log("convertMs: ", convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log("convertMs: ", convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log("convertMs: ", convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
