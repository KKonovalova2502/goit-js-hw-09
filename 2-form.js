import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const e={email:"",message:""},o="feedback-form-state",t=document.querySelector(".feedback-form");s();t.addEventListener("input",r);t.addEventListener("submit",l);function s(){const a=localStorage.getItem(o);if(a){const m=JSON.parse(a);e.email=m.email??"",e.message=m.message??"",t.email.value=e.email,t.message.value=e.message}}function r(a){e[a.target.name]=a.target.value,localStorage.setItem(o,JSON.stringify(e))}function l(a){if(a.preventDefault(),!e.email||!e.message){alert("Fill please all fields");return}console.log(e),localStorage.removeItem(o),e.email="",e.message="",t.reset()}
//# sourceMappingURL=2-form.js.map
