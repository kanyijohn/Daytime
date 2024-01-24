function Daytime() {
    const date= new Date()
    const hours= date.getHours ()
    let timeOfDay


    if (hours < 12) {
        timeOfDay= "Morning. Wishing you a fruitful and joyous day."
    }else if (hours >= 12 && hours < 17) {
        timeOfDay = "Afternoon. Congratulations for making this far. Keep pushing"
    }else {
        timeOfDay= "Night. I hope you had a nice day"
    }

     return (
         <h1>Good {timeOfDay}!</h1>
     )
}

ReactDOM.render (<Daytime />, document.getElementById("root"))

    


  

