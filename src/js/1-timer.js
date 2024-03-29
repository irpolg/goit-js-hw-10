console.log("timer");

// es modules are recommended, if available, especially for typescript
// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";
//const flatpickr = require("flatpickr");


console.log(flatpickr);

// Бібліотека очікує, що її ініціалізують на елементі 
// input[type="text"], тому ми додали до HTML документа 
// поле input#datetime-picker.
// <input type="text" id="datetime-picker" />

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
  console.log(selectedDates[0]);
  },
};