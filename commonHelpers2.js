import"./assets/styles-433eb882.js";import{i as l}from"./assets/vendor-77e16229.js";console.log("snackbar");const t=document.querySelector(".form");t.addEventListener("submit",i);function i(r){r.preventDefault(),new Promise((o,s)=>{const e=Number(t.delay.value);t.state.value==="fulfilled"?setTimeout(()=>{o(e),console.log("resolve - delay: ",e)},e):setTimeout(()=>{s(e),console.log("reject - delay: ",e)},e)}).then(o=>{l.success({title:"OK",titleColor:"black",backgroundColor:"#59A10D",color:"#FFFFFF",message:`✅ Fulfilled promise in ${o}ms`,position:"topRight"})}).catch(o=>{l.error({title:"Error",titleColor:"black",backgroundColor:"#EF4040",color:"#FFFFFF",message:`❌ Rejected promise in ${o}ms`,position:"topRight"})})}
//# sourceMappingURL=commonHelpers2.js.map
