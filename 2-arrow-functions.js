// const square = function(x)
// {
//     return x*x;
// }

// const square = (x) => {
//     return x*x
// }

// const square = (x) => x*x

// console.log(square(2))

const events = {
    name: 'Birthday Party',
    guestList: ['Andrew', 'Jen', 'Mike'],
    printGuestList() {
        console.log('Event: ' + this.name)
        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending the ' + this.name)
        })
    }
}

events.printGuestList()