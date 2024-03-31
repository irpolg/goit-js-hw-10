console.log("snackbar");
import iziToast from "izitoast";   // Описаний у документації
import "izitoast/dist/css/iziToast.min.css"; // Додатковий імпорт стилів

const form = document.querySelector(".form"); 

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const promise = new Promise((resolve, reject) => {
        const { delay, state } = event.currentTarget.elements;
        console.log({ delay: delay.value, state: state.value });

        setTimeout(() => {
            if (state.value === "fulfilled") {
                iziToast.success({
                    title: 'OK',
                    titleColor: 'black',
                    backgroundColor: '#59A10D',
                    color: '#FFFFFF',
                    message: `✅ Fulfilled promise in ${delay.value}ms`,
                    position: 'topRight',
             });
            } else {
                iziToast.error({
                    title: 'Error',
                    titleColor: 'black',
                    backgroundColor: '#EF4040',
                    color: '#FFFFFF',
                    message: `❌ Rejected promise in ${delay.value}ms`,
                    position: 'topRight',
                });
            };
        }, delay);
    })
};