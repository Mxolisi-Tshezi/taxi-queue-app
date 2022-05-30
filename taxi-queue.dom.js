// write your DOM code here.


// DOM element references
const passengersCount = document.querySelector(".passenger_queue_count")
const taxisCount = document.querySelector(".taxi_queue_count")
const joinQueue = document.querySelector(".join_queue")
const leaveQueue = document.querySelector(".leave_queue")
const joinTaxiQueue = document.querySelector(".join_taxi_queue")
const departBtn = document.querySelector(".depart")



// create Factory Function instance
const taxiQueue = TaxiQueue(getFromLocalStorage("taxi"), getFromLocalStorage("people"));



function getFromLocalStorage(key){
    if(key === "taxi"){
        return localStorage.getItem("taxiCounter")-""
    } else if(key === "people"){
        return localStorage.getItem("peopleCounter")-""
    }
}

taxisCount.innerHTML = taxiQueue.taxiQueueLength()

passengersCount.innerHTML = taxiQueue.queueLength()

function addToLocalStorage(key){
    if(key === "taxi"){
        localStorage.setItem("taxiCounter", taxiQueue.taxiQueueLength())
    } else if(key === "people"){
        localStorage.setItem("peopleCounter", taxiQueue.queueLength())
    }
}

joinQueue.addEventListener("click", function () {
    taxiQueue.joinQueue()

    passengersCount.innerHTML = taxiQueue.queueLength()
    addToLocalStorage("people")
})


leaveQueue.addEventListener("click", function () {
    taxiQueue.leaveQueue()
    passengersCount.innerHTML = taxiQueue.queueLength()
    addToLocalStorage("people")
})

joinTaxiQueue.addEventListener("click", function () {
    taxiQueue.joinTaxiQueue()
    taxisCount.innerHTML = taxiQueue.taxiQueueLength()
    addToLocalStorage("taxi")
})

departBtn.addEventListener("click", function () {
    taxiQueue.taxiDepart()
    taxisCount.innerHTML = taxiQueue.taxiQueueLength()
    passengersCount.innerHTML = taxiQueue.queueLength()
    addToLocalStorage("taxi")
    addToLocalStorage("people")
})
