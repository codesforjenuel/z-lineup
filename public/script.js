// let photoEl = document.querySelector(".photoEl")
// let brandEl = document.querySelector(".brandEl")
// let modelEl = document.querySelector(".carName")
// let motorEl = document.querySelector(".motorEl")
// let hpEl = document.querySelector(".hpEl")
// let tqEl = document.querySelector(".tqEl")
// let cylEl = document.querySelector(".cylEl")
// let mpgEl = document.querySelector(".mpgEl")
// let originEl = document.querySelector(".originEl")
// let msrpEl = document.querySelector(".msrpEl")
// let searchBtn = document.querySelector("button")
// let carTitle = document.querySelector(".carTitle")
// let carInfo = document.querySelector(".carInfo")
// let videoUrl = document.querySelector(".videoUrl")
// fetch(`/api/cars/z`, {
//   method: 'GET',
//   headers: {
//     'Content-Type': 'application/json'
//   }
// })
//   .then((response) => response.json())
//   .then((carData) => {
//     console.log(carData);
//     const { brand, model, motor,torque, horsepower, cylinders, mpgs, origin, info, videoEmbed, msrp, photoUrl } = carData;
//     if (carData) {
//       carTitle.textContent = `${brand} ${model.toUpperCase()}`
//       brandEl.textContent = `Company: ${brand}`;
//       modelEl.textContent = model.toUpperCase();
//       motorEl.textContent = `Motor: ${motor}`;
//       hpEl.textContent = `${horsepower}hp`;
//       tqEl.textContent = `${torque}lb-ft`;
//       cylEl.textContent = `V${cylinders}`;
//       mpgEl.textContent = `MPG ${mpgs} `;
//       originEl.textContent = `Made In ${origin}`;
//       carInfo.textContent = info;
//       videoUrl.src = videoEmbed
//       msrpEl.textContent = `MSRP: $ ${msrp} USD`;
//       photoEl.src = photoUrl;
//     } else {
//       modelEl.textContent =
//         'no car data';
//     }
//   })
//   .catch((error) => {
//     console.error(error);
//   });


// searchBtn.addEventListener("click", (event) => {
//   event.preventDefault()
//   let inputedName = document.querySelector('.inputName').value;

//   fetch(`/api/cars/${inputedName}`, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   })
//     .then((response) => response.json())
//     .then((carData) => {
//       console.log(carData);
//       const { brand, model, motor,torque, horsepower, cylinders, mpgs, origin, info, videoEmbed, msrp, photoUrl } = carData;
//     if (carData) {
//       carTitle.textContent = `${brand} ${model.toUpperCase()}`
//       brandEl.textContent = `Company: ${brand}`;
//       modelEl.textContent = model.toUpperCase();
//       motorEl.textContent = `Motor: ${motor}`;
//       hpEl.textContent = `${horsepower}hp`;
//       tqEl.textContent = `${torque}lb-ft`;
//       cylEl.textContent = `V${cylinders}`;
//       mpgEl.textContent = `MPG ${mpgs} `;
//       originEl.textContent = `Made In ${origin}`;
//       carInfo.textContent = info;
//       videoUrl.src = videoEmbed
//       msrpEl.textContent = `MSRP: $ ${msrp} USD`;
//       photoEl.src = photoUrl;
//     } else if (inputedName !== carData.model) {
//         alert("invalid entry");
//       }

//     })
//     .catch((error) => {
//       console.error(error);
//     });

   

// })