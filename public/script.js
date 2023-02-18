
const btn = document.querySelector(".btn").addEventListener("click", (event) => {
    event.preventDefault()
const inputName = document.querySelector(".inputName")
    
    fetch(`/api/nissan/${inputName.value}`)
        .then(response => response.json())
        .then((modelData => {
            console.log(modelData)
            

            document.querySelector(".photoEl").src =modelData[0].photoUrl;
            document.querySelector(".carName").textContent =modelData[0].model;
            document.querySelector(".hpEl").textContent =`Horsepower:${modelData[0].horsepower}`;
            document.querySelector(".tqEl").textContent =`Torque:${modelData[0].torque}`
            document.querySelector(".cylEl").textContent =`Cylinder:${modelData[0].cylinders}`
            document.querySelector(".mpgEl").textContent =`Mpg:${modelData[0].mpgs}`
            document.querySelector(".msrpEl").textContent =`Mrsp:$${modelData[0].msrp}`
            document.querySelector(".videoUrl").src = modelData[0].videoEmbed
            document.querySelector(".carInfo").textContent = modelData[0].info

            inputName.value = ""
        }))
})
