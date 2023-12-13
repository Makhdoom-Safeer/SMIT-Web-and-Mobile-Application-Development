// Notifications

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("serviceWorker.js")
        .then(res => {
            console.log("service worker registered")
            Notification.requestPermission().then(res => {
                if (Notification.permission == "granted"){
                    console.log("Granted permission")
                    return
                }
                console.log(res)
            })
        })
        .catch(err => console.log("service worker not registered", err))
    })
}

navigator.serviceWorker.ready.then((notification) => {
    var options = {
        body: "This is Message Body",
        icon: "icons/icon-72x72.png",
        link: "http://127.0.0.1:5500/index.html"
    };
})

var cities = {

    Place_1: {
        Name: "Gilgit, Gilgit-Baltistan",
        Latitude: 35.920834,
        Longitude: 74.308334,
    },

    Place_2: {
        Name: "Ahmedpur East, Bahawalpur, Punjab",
        Latitude: 29.143644,
        Longitude: 71.257240,
    },

    Place_3: {
        Name: "Kāmoke, Gujranwala, Punjab",
        Latitude: 31.976515,
        Longitude: 74.222015,
    },

    Place_4: {
        Name: "Pir Mahal, Toba Tek Singh, Punjab",
        Latitude: 30.767956,
        Longitude: 72.437813,
    },

    Place_5: {
        Name: "Jacobabad, Sindh",
        Latitude: 28.281891,
        Longitude: 68.438171,
    },

    Place_6: {
        Name: "Sahiwal, Punjab",
        Latitude: 30.677717,
        Longitude: 73.106812,
    },

    Place_7: {
        Name: "Zafarwal, Narowal, Punjab",
        Latitude: 32.337006,
        Longitude: 74.903336,
    },

    Place_8: {
        Name: "Khanewal, Punjab",
        Latitude: 30.286415,
        Longitude: 71.932030,
    },

    Place_9: {
        Name: "Jaranwala, Faisalabad, Punjab",
        Latitude: 31.345394,
        Longitude: 73.429810,
    },

    Place_10: {
        Name: "New Mirpur City, Azad Kashmir",
        Latitude: 33.148392,
        Longitude: 73.751770,
    },

    Place_11: {
        Name: "Multan, Multan District, Punjab",
        Latitude: 30.181459,
        Longitude: 71.492157,
    },

    Place_12: {
        Name: "Nawabshah, Shaheed, Sindh",
        Latitude: 26.244221,
        Longitude: 68.410034,
    },

    Place_13: {
        Name: "Dera Ghāzi Khān, Punjab",
        Latitude: 30.032486,
        Longitude: 70.640244,
    },

    Place_14: {
        Name: "Larkana",
        Latitude: 27.563993,
        Longitude: 68.215134,
    },

    Place_15: {
        Name: "Malakwāl",
        Latitude: 32.555496,
        Longitude: 73.194351,
    },

    Place_16: {
        Name: "Haveli Lakha",
        Latitude: 30.448601,
        Longitude: 73.697578,
    },

    Place_17: {
        Name: "Jalalpur Pirwala",
        Latitude: 29.505283,
        Longitude: 71.222084,
    },

    Place_18: {
        Name: "Nowshera",
        Latitude: 34.015858,
        Longitude: 71.975449,
    },

    Place_19: {
        Name: "Hafizabad",
        Latitude: 32.071697,
        Longitude: 73.685730,
    },

    Place_20: {
        Name: "Vehāri, Punjab",
        Latitude: 30.045246,
        Longitude: 72.348869,
    },

    Place_21: {
        Name: "Okara, Punjab",
        Latitude: 30.808500,
        Longitude: 73.459396,
    },

    Place_22: {
        Name: "Attock",
        Latitude: 33.768051,
        Longitude: 72.360703,
    },

    Place_23: {
        Name: "Abbottābad, Khyber Pakhtunkhwa",
        Latitude: 34.168751,
        Longitude: 73.221497,
    },

    Place_24: {
        Name: "Qurtaba City",
        Latitude: 33.351357,
        Longitude: 72.774734,
    },

    Place_25: {
        Name: "Mandi Bahauddin, Punjab",
        Latitude: 32.588169,
        Longitude: 73.497345,
    },
    
    Place_26: {
        Name: "Bahawalpur",
        Latitude: 29.395721,
        Longitude: 71.683334,
    },
    
    Place_27: {
        Name: "Karak, Khyber-Pakhtunkhwa",
        Latitude: 33.115269,
        Longitude: 71.095535,
    },
    
    Place_28: {
        Name: "Muzaffargarh, Punjab",
        Latitude: 30.074377,
        Longitude: 71.184654,
    },
    
    Place_29: {
        Name: "Shikārpur",
        Latitude: 27.955648,
        Longitude: 68.637672,
    },
    
    Place_30: {
        Name: "Khairpur, Sindh",
        Latitude: 27.529951,
        Longitude: 68.758141,
    },
    
    Place_31: {
        Name: "Kamoki, Pubjab",
        Latitude: 31.975508,
        Longitude: 74.223801,
    },
    
    Place_32: {
        Name: "Sargodha, Punjab",
        Latitude: 32.082466,
        Longitude: 72.669128,
    },
    
    Place_33: {
        Name: "Pattoki, Punjab",
        Latitude: 31.025009,
        Longitude: 73.847878,
    },
    
    Place_34: {
        Name: "Makli",
        Latitude: 24.743303,
        Longitude: 67.890938,
    },
    
    Place_35: {
        Name: "Garhi Habibullah",
        Latitude: 34.405262,
        Longitude: 73.380066,
    },
    
    Place_36: {
        Name: "Bhalwal, Punjab",
        Latitude: 32.265396,
        Longitude: 72.905388,
    },
    
    Place_37: {
        Name: "Bannu",
        Latitude: 32.986111,
        Longitude: 70.604164,
    },
    
    Place_38: {
        Name: "Nankana Sahib",
        Latitude: 31.452097,
        Longitude: 73.708305,
    },
    
    Place_39: {
        Name: "Dijkot",
        Latitude: 31.217646,
        Longitude: 72.997368,
    },
    
    Place_40: {
        Name: "Sādiqābād",
        Latitude: 28.310350,
        Longitude: 70.127403,
    },
    
    Place_41: {
        Name: "Turbat",
        Latitude: 26.004168,
        Longitude: 63.060555,
    },
    
    Place_42: {
        Name: "Quetta, Balochistan",
        Latitude: 30.183270,
        Longitude: 66.996452,
    },
    
    Place_43: {
        Name: "Gujrat, Punjab",
        Latitude: 32.571144,
        Longitude: 74.075005,
    },
    
    Place_44: {
        Name: "Bahawalpur",
        Latitude: 29.418068,
        Longitude: 71.670685,
    },

    Place_45: {
        Name: "Sukkur",
        Latitude: 27.713926,
        Longitude: 68.836899,
    },

    Place_46: {
        Name: "Khanqah Dogran, Punjab",
        Latitude: 31.831667,
        Longitude: 73.623055,
    },

    Place_47: {
        Name: "Jhelum, Punjab",
        Latitude: 32.940548,
        Longitude: 73.727631,
    },

    Place_48: {
        Name: "Qila Didar Singh",
        Latitude: 32.136673,
        Longitude: 74.012383,
    },

    Place_49: {
        Name: "Bahawalpur",
        Latitude: 29.418068,
        Longitude: 71.670685,
    },

    Place_50: {
        Name: "Gujranwala, Punjab",
        Latitude: 32.166351,
        Longitude: 74.195900,
    },

    Place_51: {
        Name: "Badin",
        Latitude: 24.655720,
        Longitude: 68.837242,
    },

    Place_52: {
        Name: "Sheikhupura",
        Latitude: 31.716661,
        Longitude: 73.985023,
    },

    Place_53: {
        Name: "Wah",
        Latitude: 33.783184,
        Longitude: 72.723076,
    },

    Place_54: {
        Name: "Taunsa",
        Latitude: 30.705557,
        Longitude: 70.657776,
    },

    Place_55: {
        Name: "Hub, Balochistan",
        Latitude: 25.067562,
        Longitude: 66.917038,
    },

    Place_56: {
        Name: "Narowal, Punjab",
        Latitude: 32.099476,
        Longitude: 74.874733,
    },

    Place_57: {
        Name: "Chichawatni, Punjab",
        Latitude: 30.535133,
        Longitude: 72.699539,
    },

    Place_58: {
        Name: "Muzaffarabad",
        Latitude: 34.359688,
        Longitude: 73.471054,
    },

    Place_59: {
        Name: "Shahdara",
        Latitude: 31.621113,
        Longitude: 74.282364,
    },

    Place_60: {
        Name: "Lahore",
        Latitude: 31.582045,
        Longitude: 74.329376,
    },
    
    Place_61: {
        Name: "Peshawar",
        Latitude: 34.025917,
        Longitude: 71.560135,
    },
    
    Place_62: {
        Name: "Thakot",
        Latitude: 34.788040,
        Longitude: 72.929115,
    },
    
    Place_63: {
        Name: "Saidu Sharif, Mingora",
        Latitude: 34.749271,
        Longitude: 72.357063,
    },
    
    Place_64: {
        Name: "Sanghar",
        Latitude: 26.044418,
        Longitude: 68.953880,
    },
    
    Place_65: {
        Name: "Mardan",
        Latitude: 34.206123,
        Longitude: 72.029800,
    },
    
    Place_66: {
        Name: "Kalabagh",
        Latitude: 32.966000,
        Longitude: 71.553001,
    },
    
    Place_67: {
        Name: "Gwadar",
        Latitude: 25.126389,
        Longitude: 62.322498,
    },
    
    Place_68: {
        Name: "Pasrūr",
        Latitude: 32.265652,
        Longitude: 74.669525,
    },
    
    Place_69: {
        Name: "Mingora",
        Latitude: 34.773647,
        Longitude: 72.359901,
    },
    
    Place_70: {
        Name: "Kasur",
        Latitude: 31.118793,
        Longitude: 74.463272,
    },
    
    Place_72: {
        Name: "Faisalabad",
        Latitude: 31.418715,
        Longitude: 73.079109,
    },
    
    Place_73: {
        Name: "Thatta",
        Latitude: 24.749731,
        Longitude: 67.911636,
    },
    
    Place_74: {
        Name: "Chowk Azam",
        Latitude: 30.970655,
        Longitude: 71.212303,
    },
    
    Place_75: {
        Name: "Layyah",
        Latitude: 30.964750,
        Longitude: 70.939934,
    },
    
    Place_76: {
        Name: "Mīrpur Khās",
        Latitude: 25.529104,
        Longitude: 69.013573,
    },
    
    Place_77: {
        Name: "Rawalpindi",
        Latitude: 33.626057,
        Longitude: 73.071442,
    },
    
    Place_78: {
        Name: "Daska",
        Latitude: 32.338779,
        Longitude: 74.353065,
    },
    
    Place_79: {
        Name: "Bhakkar",
        Latitude: 31.633333,
        Longitude: 71.066666,
    },
    
    Place_80: {
        Name: "Ārifwāla, Punjab",
        Latitude: 30.297859,
        Longitude: 73.058235,
    },
    
    Place_81: {
        Name: "Karachi",
        Latitude: 24.860966,
        Longitude: 66.990501,
    },
    
    Place_82: {
        Name: "Dullewala",
        Latitude: 31.839722,
        Longitude: 71.430000,
    },
    
    Place_83: {
        Name: "Shahpur",
        Latitude: 32.286613,
        Longitude: 72.430252,
    },
    
    Place_84: {
        Name: "Kot Addu",
        Latitude: 30.466667,
        Longitude: 70.966667,
    },
    
    Place_85: {
        Name: "Jhang, Jhang District",
        Latitude: 31.278046,
        Longitude: 72.311760,
    },
    
    Place_86: {
        Name: "Jamshoro",
        Latitude: 25.416868,
        Longitude: 68.274307,
    },
    
    Place_87: {
        Name: "Islamabad",
        Latitude: 33.738045,
        Longitude: 73.084488,
    },
    
    Place_88: {
        Name: "Chunian",
        Latitude: 30.963774,
        Longitude: 73.977982,
    },
    
    Place_89: {
        Name: "Sialkot",
        Latitude: 32.497223,
        Longitude: 74.536110,
    },
    
    Place_90: {
        Name: "Dera Ismail Khan",
        Latitude: 31.831482,
        Longitude: 70.911598,
    },
    
    Place_91: {
        Name: "Dalbandin",
        Latitude: 28.883612,
        Longitude: 64.416061,
    },
    
    Place_92: {
        Name: "Chagai",
        Latitude: 29.297670,
        Longitude: 64.706734,
    },
    
    Place_93: {
        Name: "Khushāb, Punjab",
        Latitude: 32.294445,
        Longitude: 72.349724,
    },
    
}

var latitude = cities.Place_81.Latitude
var longitude = cities.Place_81.Longitude

var clock_container = document.getElementById("clock")
var time
var time_1 = document.getElementById("t1")
var time_2 = document.getElementById("t2")
var time_3 = document.getElementById("t3")
var time_4 = document.getElementById("t4")
var time_5 = document.getElementById("t5")
var index_1 = document.getElementById("i1")
var index_2 = document.getElementById("i2")
var index_3 = document.getElementById("i3")
var index_4 = document.getElementById("i4")
var index_5 = document.getElementById("i5")

var city = document.getElementById("city")

city.innerHTML = `

    <option value="" disabled>Select City</option>`

for (var key in cities)
{
    city.innerHTML += `
    <option value="${key}">${cities[key].Name}</option>`
}

// Clock
const clock_interval = setInterval(clock, 1000)

function clock(){
    time = new Date
    clock_container.innerHTML = `<span><i class="fa fa-clock-o"></i> ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}</span>`

    // Prayer Times
    var url = "https://api.aladhan.com/v1/calendar/2023/" + (time.getMonth() + 1) + "?latitude=" + latitude + "&longitude=" + longitude + "&method=1"

    fetch(url)
        .then(res => res.json())
        .then(
            function res(res){
                fajr = res.data[time.getDate() - 1].timings.Fajr
                time_1.innerHTML = fajr
                
                dhuhr = res.data[time.getDate() - 1].timings.Dhuhr
                time_2.innerHTML = dhuhr

                asr = res.data[time.getDate() - 1].timings.Asr
                time_3.innerHTML = asr

                maghrib = res.data[time.getDate() - 1].timings.Maghrib
                time_4.innerHTML = maghrib

                isha = res.data[time.getDate() - 1].timings.Isha
                time_5.innerHTML = isha

                conversion()
                next()
                })
        .catch(err => console.log(err))
}

function conversion(){
    fajr = fajr.replace(" (PKT)", "")
    fajr_time = new Date(`${time.getDate()}-${time.getMonth()}-${time.getFullYear()} ` + fajr + ":00")
    fajr_hour = fajr_time.getHours()
    fajr_minute = fajr_time.getMinutes()

    dhuhr = dhuhr.replace(" (PKT)", "")
    dhuhr_time = new Date(`${time.getDate()}-${time.getMonth()}-${time.getFullYear()} ` + dhuhr + ":00")
    dhuhr_hour = dhuhr_time.getHours()
    dhuhr_minute = dhuhr_time.getMinutes()

    asr = asr.replace(" (PKT)", "")
    asr_time = new Date(`${time.getDate()}-${time.getMonth()}-${time.getFullYear()} ` + asr + ":00")
    asr_hour = asr_time.getHours()
    asr_minute = asr_time.getMinutes()

    maghrib = maghrib.replace(" (PKT)", "")
    maghrib_time = new Date(`${time.getDate()}-${time.getMonth()}-${time.getFullYear()} ` + maghrib + ":00")
    maghrib_hour = maghrib_time.getHours()
    maghrib_minute = maghrib_time.getMinutes()

    isha = isha.replace(" (PKT)", "")
    isha_time = new Date(`${time.getDate()}-${time.getMonth()}-${time.getFullYear()} ` + isha + ":00")
    isha_hour = isha_time.getHours()
    isha_minute = isha_time.getMinutes()

    reminder()
}

function selected_city(){
    latitude = cities[city.value].Latitude
    longitude = cities[city.value].Longitude
}

function reminder(){
    if (time.getHours() === fajr_hour && time.getMinutes() === fajr_minute && time.getSeconds() === 0){
        notification.showNotification("Fajr Prayer", options)
    }

    else if (time.getHours() === dhuhr_hour && time.getMinutes() === dhuhr_minute && time.getSeconds() === 0){
        notification.showNotification("Dhuhr Prayer", options)
    }

    else if (time.getHours() === asr_hour && time.getMinutes() === asr_minute && time.getSeconds() === 0){
        notification.showNotification("Asr Prayer", options)
    }

    else if (time.getHours() === maghrib_hour && time.getMinutes() === maghrib_minute && time.getSeconds() === 0){
        notification.showNotification("Maghrib Prayer", options)
    }

    else if (time.getHours() === isha_hour && time.getMinutes() === isha_minute && time.getSeconds() === 0){
        notification.showNotification("Isha Prayer", options)
    }
}

function next(){
    if (time.getHours() >= fajr_hour && time.getHours() < dhuhr_hour){
        index_2.focus()
    }

    else if (time.getHours() >= dhuhr_hour && time.getHours() < asr_hour){
        index_3.focus()
    }

    else if (time.getHours() >= asr_hour && time.getHours() < maghrib_hour){
        index_4.focus()
    }

    else if (time.getHours() >= maghrib_hour && time.getHours() < isha_hour){
        index_5.focus()
    }

    else if (time.getHours() >= isha_hour){
        index_1.focus()
    }
}