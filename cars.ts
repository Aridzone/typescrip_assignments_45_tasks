function create_car(manufacturer: string, model: string, ...options: [string, any][]): object {
    let car_info: {[key: string]: any} = {
        manufacturer: manufacturer,
        model: model
    };

    for (let option of options) {
        car_info[option[0]] = option[1];
    }

    return car_info;
}

// Call the function with required information and additional name-value pairs
let car_info = create_car("Toyota", "Camry", ["color", "blue"], ["year", 2020]);

// Print the Object to verify the information
console.log(car_info);
