
const btn = document.querySelector(".btn").addEventListener("click", (event) => {
    event.preventDefault()
const inputName = document.querySelector(".inputName")
    
    fetch(`/api/nissan/${inputName.value}`)
        .then(response => response.json())
        .then((modelData => {
            console.log(modelData)
            

            document.querySelector(".photoEl").src =modelData[0].photoUrl;
            document.querySelector(".carName").textContent =modelData[0].model;
            document.querySelector(".motorEl").textContent =`Motor:${modelData[0].motor}`;
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
document.querySelector(".z240").addEventListener("click", (event) => {
    event.preventDefault()

    fetch(`/api/nissan/${event.target.textContent}`)
        .then(response => response.json())
        .then((modelData => {
            console.log(modelData)
            

            document.querySelector(".photoEl").src =modelData[0].photoUrl;
            document.querySelector(".carName").textContent =modelData[0].model;
            document.querySelector(".motorEl").textContent =`Motor:${modelData[0].motor}`;
            document.querySelector(".hpEl").textContent =`Horsepower:${modelData[0].horsepower}`;
            document.querySelector(".tqEl").textContent =`Torque:${modelData[0].torque}`
            document.querySelector(".cylEl").textContent =`Cylinder:${modelData[0].cylinders}`
            document.querySelector(".mpgEl").textContent =`Mpg:${modelData[0].mpgs}`
            document.querySelector(".msrpEl").textContent =`Mrsp:$${modelData[0].msrp}`
            document.querySelector(".videoUrl").src = modelData[0].videoEmbed
            document.querySelector(".carInfo").textContent = modelData[0].info

        }))
})
document.querySelector(".zx280").addEventListener("click", (event) => {
    event.preventDefault()

    fetch(`/api/nissan/${event.target.textContent}`)
        .then(response => response.json())
        .then((modelData => {
            console.log(modelData)
            

            document.querySelector(".photoEl").src =modelData[0].photoUrl;
            document.querySelector(".carName").textContent =modelData[0].model;
            document.querySelector(".motorEl").textContent =`Motor:${modelData[0].motor}`;
            document.querySelector(".hpEl").textContent =`Horsepower:${modelData[0].horsepower}`;
            document.querySelector(".tqEl").textContent =`Torque:${modelData[0].torque}`
            document.querySelector(".cylEl").textContent =`Cylinder:${modelData[0].cylinders}`
            document.querySelector(".mpgEl").textContent =`Mpg:${modelData[0].mpgs}`
            document.querySelector(".msrpEl").textContent =`Mrsp:$${modelData[0].msrp}`
            document.querySelector(".videoUrl").src = modelData[0].videoEmbed
            document.querySelector(".carInfo").textContent = modelData[0].info

        }))
})
document.querySelector(".z31").addEventListener("click", (event) => {
    event.preventDefault()

    fetch(`/api/nissan/${event.target.textContent}`)
        .then(response => response.json())
        .then((modelData => {
            console.log(modelData)
            

            document.querySelector(".photoEl").src =modelData[0].photoUrl;
            document.querySelector(".carName").textContent =modelData[0].model;
            document.querySelector(".motorEl").textContent =`Motor:${modelData[0].motor}`;
            document.querySelector(".hpEl").textContent =`Horsepower:${modelData[0].horsepower}`;
            document.querySelector(".tqEl").textContent =`Torque:${modelData[0].torque}`
            document.querySelector(".cylEl").textContent =`Cylinder:${modelData[0].cylinders}`
            document.querySelector(".mpgEl").textContent =`Mpg:${modelData[0].mpgs}`
            document.querySelector(".msrpEl").textContent =`Mrsp:$${modelData[0].msrp}`
            document.querySelector(".videoUrl").src = modelData[0].videoEmbed
            document.querySelector(".carInfo").textContent = modelData[0].info

        }))
})
document.querySelector(".zx300").addEventListener("click", (event) => {
    event.preventDefault()

    fetch(`/api/nissan/${event.target.textContent}`)
        .then(response => response.json())
        .then((modelData => {
            console.log(modelData)
            

            document.querySelector(".photoEl").src =modelData[0].photoUrl;
            document.querySelector(".carName").textContent =modelData[0].model;
            document.querySelector(".motorEl").textContent =`Motor:${modelData[0].motor}`;
            document.querySelector(".hpEl").textContent =`Horsepower:${modelData[0].horsepower}`;
            document.querySelector(".tqEl").textContent =`Torque:${modelData[0].torque}`
            document.querySelector(".cylEl").textContent =`Cylinder:${modelData[0].cylinders}`
            document.querySelector(".mpgEl").textContent =`Mpg:${modelData[0].mpgs}`
            document.querySelector(".msrpEl").textContent =`Mrsp:$${modelData[0].msrp}`
            document.querySelector(".videoUrl").src = modelData[0].videoEmbed
            document.querySelector(".carInfo").textContent = modelData[0].info

        }))
})
document.querySelector(".z350").addEventListener("click", (event) => {
    event.preventDefault()

    fetch(`/api/nissan/${event.target.textContent}`)
        .then(response => response.json())
        .then((modelData => {
            console.log(modelData)
            

            document.querySelector(".photoEl").src =modelData[0].photoUrl;
            document.querySelector(".carName").textContent =modelData[0].model;
            document.querySelector(".motorEl").textContent =`Motor:${modelData[0].motor}`;
            document.querySelector(".hpEl").textContent =`Horsepower:${modelData[0].horsepower}`;
            document.querySelector(".tqEl").textContent =`Torque:${modelData[0].torque}`
            document.querySelector(".cylEl").textContent =`Cylinder:${modelData[0].cylinders}`
            document.querySelector(".mpgEl").textContent =`Mpg:${modelData[0].mpgs}`
            document.querySelector(".msrpEl").textContent =`Mrsp:$${modelData[0].msrp}`
            document.querySelector(".videoUrl").src = modelData[0].videoEmbed
            document.querySelector(".carInfo").textContent = modelData[0].info

        }))
})
document.querySelector(".z370").addEventListener("click", (event) => {
    event.preventDefault()

    fetch(`/api/nissan/${event.target.textContent}`)
        .then(response => response.json())
        .then((modelData => {
            console.log(modelData)
            

            document.querySelector(".photoEl").src =modelData[0].photoUrl;
            document.querySelector(".carName").textContent =modelData[0].model;
            document.querySelector(".motorEl").textContent =`Motor:${modelData[0].motor}`;
            document.querySelector(".hpEl").textContent =`Horsepower:${modelData[0].horsepower}`;
            document.querySelector(".tqEl").textContent =`Torque:${modelData[0].torque}`
            document.querySelector(".cylEl").textContent =`Cylinder:${modelData[0].cylinders}`
            document.querySelector(".mpgEl").textContent =`Mpg:${modelData[0].mpgs}`
            document.querySelector(".msrpEl").textContent =`Mrsp:$${modelData[0].msrp}`
            document.querySelector(".videoUrl").src = modelData[0].videoEmbed
            document.querySelector(".carInfo").textContent = modelData[0].info

        }))
})
document.querySelector(".z").addEventListener("click", (event) => {
    event.preventDefault()

    fetch(`/api/nissan/${event.target.textContent}`)
        .then(response => response.json())
        .then((modelData => {
            console.log(modelData)
            

            document.querySelector(".photoEl").src =modelData[0].photoUrl;
            document.querySelector(".carName").textContent =modelData[0].model;
            document.querySelector(".motorEl").textContent =`Motor:${modelData[0].motor}`;
            document.querySelector(".hpEl").textContent =`Horsepower:${modelData[0].horsepower}`;
            document.querySelector(".tqEl").textContent =`Torque:${modelData[0].torque}`
            document.querySelector(".cylEl").textContent =`Cylinder:${modelData[0].cylinders}`
            document.querySelector(".mpgEl").textContent =`Mpg:${modelData[0].mpgs}`
            document.querySelector(".msrpEl").textContent =`Mrsp:$${modelData[0].msrp}`
            document.querySelector(".videoUrl").src = modelData[0].videoEmbed
            document.querySelector(".carInfo").textContent = modelData[0].info

        }))
})
