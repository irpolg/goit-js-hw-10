console.log("snackbar");
import iziToast from "izitoast";   // Описаний у документації
import "izitoast/dist/css/iziToast.min.css"; // Додатковий імпорт стилів

const form = document.querySelector(".form"); 
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const promise = new Promise((resolve, reject) => {
    const delay = Number(form.delay.value);
    if (form.state.value === 'fulfilled') {
      setTimeout(() => {
        resolve(delay);
        console.log("resolve - delay: ", delay)
      }, delay);
    } else {
      setTimeout(() => {
        reject(delay);
        console.log("reject - delay: ", delay)
      }, delay);
    }
  });

  promise
    .then(delay => {
      iziToast.success({
        title: 'OK',
        titleColor: 'white',
        backgroundColor: '#59A10D',
        messageColor: '#FFFFFF',
        message: `✅ Fulfilled promise in ${delay}ms`,
        position: 'topRight',
      });
    })
    .catch(delay => {
      iziToast.error({
        title: 'Error',
        titleColor: 'white',
        backgroundColor: '#EF4040',
        messageColor: '#FFFFFF',
        message: `❌ Rejected promise in ${delay}ms`,
        position: 'topRight',
      });
    })
}