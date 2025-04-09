const vehicle = {
    vehicleType: "car",
    duration: 3,
    firstHour: 5000,
    nextHour: 3000,
    extraCharge: 50000,
    calculateFee: function() {
        switch(this.vehicleType) {
            case "car": 
                this.firstHour = 5000;
                this.nextHour = 3000;
                this.extraCharge = 50000;
                break;
            case "bike": 
                this.firstHour = 2000;
                this.nextHour = 1000;
                this.extraCharge = 20000;
                break;
            default: break;
        }

        if(this.duration <= 1) {
            return this.firstHour;
        }

        if(this.duration <= 24) {
            return this.firstHour + ((this.duration - 1) * this.nextHour);
        }

        return this.firstHour + ((this.duration - 1) * this.nextHour) + this.extraCharge;
    }
}

// helper function
function runCase(vehicleType = "car", duration = 3) {
    vehicle.vehicleType = vehicleType;
    vehicle.duration = duration;
    console.log(vehicle.calculateFee());
}

// case 1
runCase();

// case 2
runCase("bike", 1);

// case 3
runCase("car", 27);