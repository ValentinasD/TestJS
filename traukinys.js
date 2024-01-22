
let train1 = {
    route: "Vilnius-Kaunas",
    departure_date: "2024-2-15",
    departure_time: "15:00",
    travel_time: "2:00",
};

let train2 = {
    route: "Vilnius-Berlin",
    departure_date: "2024-2-14",
    departure_time: "14:00",
    travel_time: "22:00",
};

let train3 = {
    route: "Vilnius-Klaipeda",
    departure_date: "2024-2-11",
    departure_time: "18:00",
    travel_time: "5:00",
};

let train4 = {
    route: "Vilnius-Jonava",
    departure_date: "2024-2-20",
    departure_time: "9:00",
    travel_time: "1:00",
};

let train5 = {
    route: "Vilnius-Roma",
    departure_date: "2024-2-5",
    departure_time: "17:00",
    travel_time: "20:00",
};

let list_of_routes = [train1, train2, train3, train4, train5];



//   laiko formatas i minutes
function convertTime(duration) {
    const [hours, minutes] = duration.split(":").map(Number);
    // console.log( duration)
    return hours * 60 + minutes;
}


function findShortRoute(list) {
    let shortestRoute = list[0]; // Pirmą kartą nustatome, kad pirmas maršrutas yra trumpiausias

    list.forEach(route => {
        const currentRouteTime = convertTime(route.travel_time);
        const shortestRouteTime = convertTime(shortestRoute.travel_time);

        if (currentRouteTime < shortestRouteTime) {
            shortestRoute = route; // Atnaujiname trumpiausią maršrutą
        }
    });

    return shortestRoute;
};


// Spausdiname informaciją apie trumpiausią kelionę
let shortestRoute = findShortRoute(list_of_routes);
console.log("Trumpiausia kelionė:", shortestRoute);

function findLongRuote(long) {
    let longRoute = long[0];

    long.forEach(route => {  // <-- Pakeista iš 'list' į 'long'
        const currentRouteTime = convertTime(route.travel_time);
        const longestRouteTime = convertTime(longRoute.travel_time);

        if (currentRouteTime > longestRouteTime) {
            longRoute = route;
        }
    });

    return longRoute;
}

// ...

let longTimeRoute = findLongRuote(list_of_routes);
console.log("Ilgiausia kelionė:", longTimeRoute);