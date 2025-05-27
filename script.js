// World capitals data (truncated for example - use full list from previous message)
const worldCapitals = [ { name: "Tokyo", country: "Japan", tz: "Asia/Tokyo", flag: "jp", lat: 35.68, lon: 139.77 },

    { name: "Abu Dhabi", country: "United Arab Emirates", tz: "Asia/Dubai", flag: "ae", lat: 24.47, lon: 54.37 },
    { name: "Abuja", country: "Nigeria", tz: "Africa/Lagos", flag: "ng", lat: 9.06, lon: 7.49 },
    { name: "Accra", country: "Ghana", tz: "Africa/Accra", flag: "gh", lat: 5.56, lon: -0.20 },
    { name: "Addis Ababa", country: "Ethiopia", tz: "Africa/Addis_Ababa", flag: "et", lat: 9.03, lon: 38.74 },
    { name: "Algiers", country: "Algeria", tz: "Africa/Algiers", flag: "dz", lat: 36.75, lon: 3.04 },
    { name: "Amman", country: "Jordan", tz: "Asia/Amman", flag: "jo", lat: 31.95, lon: 35.93 },
    { name: "Amsterdam", country: "Netherlands", tz: "Europe/Amsterdam", flag: "nl", lat: 52.37, lon: 4.90 },
    { name: "Andorra la Vella", country: "Andorra", tz: "Europe/Andorra", flag: "ad", lat: 42.51, lon: 1.52 },
    { name: "Ankara", country: "Turkey", tz: "Europe/Istanbul", flag: "tr", lat: 39.93, lon: 32.86 },
    { name: "Antananarivo", country: "Madagascar", tz: "Indian/Antananarivo", flag: "mg", lat: -18.91, lon: 47.54 },
    { name: "Apia", country: "Samoa", tz: "Pacific/Apia", flag: "ws", lat: -13.83, lon: -171.77 },
    { name: "Ashgabat", country: "Turkmenistan", tz: "Asia/Ashgabat", flag: "tm", lat: 37.95, lon: 58.38 },
    { name: "Asmara", country: "Eritrea", tz: "Africa/Asmara", flag: "er", lat: 15.32, lon: 38.93 },
    { name: "Astana", country: "Kazakhstan", tz: "Asia/Almaty", flag: "kz", lat: 51.16, lon: 71.47 },
    { name: "Asunción", country: "Paraguay", tz: "America/Asuncion", flag: "py", lat: -25.30, lon: -57.64 },
    { name: "Athens", country: "Greece", tz: "Europe/Athens", flag: "gr", lat: 37.98, lon: 23.73 },
    { name: "Avarua", country: "Cook Islands", tz: "Pacific/Rarotonga", flag: "ck", lat: -21.21, lon: -159.78 },
    { name: "Baghdad", country: "Iraq", tz: "Asia/Baghdad", flag: "iq", lat: 33.31, lon: 44.36 },
    { name: "Baku", country: "Azerbaijan", tz: "Asia/Baku", flag: "az", lat: 40.41, lon: 49.87 },
    { name: "Bamako", country: "Mali", tz: "Africa/Bamako", flag: "ml", lat: 12.65, lon: -8.00 },
    { name: "Bandar Seri Begawan", country: "Brunei", tz: "Asia/Brunei", flag: "bn", lat: 4.89, lon: 114.94 },
    { name: "Bangkok", country: "Thailand", tz: "Asia/Bangkok", flag: "th", lat: 13.76, lon: 100.50 },
    { name: "Bangui", country: "Central African Republic", tz: "Africa/Bangui", flag: "cf", lat: 4.36, lon: 18.55 },
    { name: "Banjul", country: "Gambia", tz: "Africa/Banjul", flag: "gm", lat: 13.45, lon: -16.58 },
    { name: "Basseterre", country: "Saint Kitts and Nevis", tz: "America/St_Kitts", flag: "kn", lat: 17.30, lon: -62.73 },
    { name: "Beijing", country: "China", tz: "Asia/Shanghai", flag: "cn", lat: 39.90, lon: 116.41 },
    { name: "Beirut", country: "Lebanon", tz: "Asia/Beirut", flag: "lb", lat: 33.89, lon: 35.51 },
    { name: "Belgrade", country: "Serbia", tz: "Europe/Belgrade", flag: "rs", lat: 44.82, lon: 20.46 },
    { name: "Belmopan", country: "Belize", tz: "America/Belize", flag: "bz", lat: 17.25, lon: -88.77 },
    { name: "Berlin", country: "Germany", tz: "Europe/Berlin", flag: "de", lat: 52.52, lon: 13.41 },
    { name: "Bern", country: "Switzerland", tz: "Europe/Zurich", flag: "ch", lat: 46.95, lon: 7.45 },
    { name: "Bishkek", country: "Kyrgyzstan", tz: "Asia/Bishkek", flag: "kg", lat: 42.87, lon: 74.59 },
    { name: "Bissau", country: "Guinea-Bissau", tz: "Africa/Bissau", flag: "gw", lat: 11.86, lon: -15.60 },
    { name: "Bogotá", country: "Colombia", tz: "America/Bogota", flag: "co", lat: 4.71, lon: -74.07 },
    { name: "Brasília", country: "Brazil", tz: "America/Sao_Paulo", flag: "br", lat: -15.78, lon: -47.93 },
    { name: "Bratislava", country: "Slovakia", tz: "Europe/Bratislava", flag: "sk", lat: 48.15, lon: 17.11 },
    { name: "Brazzaville", country: "Congo", tz: "Africa/Brazzaville", flag: "cg", lat: -4.26, lon: 15.28 },
    { name: "Bridgetown", country: "Barbados", tz: "America/Barbados", flag: "bb", lat: 13.10, lon: -59.62 },
    { name: "Brussels", country: "Belgium", tz: "Europe/Brussels", flag: "be", lat: 50.85, lon: 4.35 },
    { name: "Bucharest", country: "Romania", tz: "Europe/Bucharest", flag: "ro", lat: 44.43, lon: 26.10 },
    { name: "Budapest", country: "Hungary", tz: "Europe/Budapest", flag: "hu", lat: 47.50, lon: 19.04 },
    { name: "Buenos Aires", country: "Argentina", tz: "America/Argentina/Buenos_Aires", flag: "ar", lat: -34.60, lon: -58.38 },
    { name: "Cairo", country: "Egypt", tz: "Africa/Cairo", flag: "eg", lat: 30.04, lon: 31.24 },
    { name: "Canberra", country: "Australia", tz: "Australia/Sydney", flag: "au", lat: -35.28, lon: 149.13 },
    { name: "Caracas", country: "Venezuela", tz: "America/Caracas", flag: "ve", lat: 10.48, lon: -66.90 },
    { name: "Castries", country: "Saint Lucia", tz: "America/St_Lucia", flag: "lc", lat: 14.01, lon: -60.99 },
    { name: "Chisinau", country: "Moldova", tz: "Europe/Chisinau", flag: "md", lat: 47.01, lon: 28.86 },
    { name: "Conakry", country: "Guinea", tz: "Africa/Conakry", flag: "gn", lat: 9.54, lon: -13.68 },
    { name: "Copenhagen", country: "Denmark", tz: "Europe/Copenhagen", flag: "dk", lat: 55.68, lon: 12.57 },
    { name: "Dakar", country: "Senegal", tz: "Africa/Dakar", flag: "sn", lat: 14.69, lon: -17.45 },
    { name: "Damascus", country: "Syria", tz: "Asia/Damascus", flag: "sy", lat: 33.51, lon: 36.30 },
    { name: "Dhaka", country: "Bangladesh", tz: "Asia/Dhaka", flag: "bd", lat: 23.71, lon: 90.41 },
    { name: "Dili", country: "Timor-Leste", tz: "Asia/Dili", flag: "tl", lat: -8.56, lon: 125.57 },
    { name: "Djibouti", country: "Djibouti", tz: "Africa/Djibouti", flag: "dj", lat: 11.59, lon: 43.15 },
    { name: "Dodoma", country: "Tanzania", tz: "Africa/Dar_es_Salaam", flag: "tz", lat: -6.16, lon: 35.75 },
    { name: "Doha", country: "Qatar", tz: "Asia/Qatar", flag: "qa", lat: 25.27, lon: 51.52 },
    { name: "Dublin", country: "Ireland", tz: "Europe/Dublin", flag: "ie", lat: 53.35, lon: -6.26 },
    { name: "Dushanbe", country: "Tajikistan", tz: "Asia/Dushanbe", flag: "tj", lat: 38.56, lon: 68.79 },
    { name: "Edinburgh", country: "UK (Scotland)", tz: "Europe/London", flag: "gb-sct", lat: 55.95, lon: -3.19 },
    { name: "Freetown", country: "Sierra Leone", tz: "Africa/Freetown", flag: "sl", lat: 8.48, lon: -13.23 },
    { name: "Funafuti", country: "Tuvalu", tz: "Pacific/Funafuti", flag: "tv", lat: -8.52, lon: 179.19 },
    { name: "Gaborone", country: "Botswana", tz: "Africa/Gaborone", flag: "bw", lat: -24.66, lon: 25.91 },
    { name: "George Town", country: "Cayman Islands", tz: "America/Cayman", flag: "ky", lat: 19.29, lon: -81.37 },
    { name: "Georgetown", country: "Guyana", tz: "America/Guyana", flag: "gy", lat: 6.80, lon: -58.16 },
    { name: "Guatemala City", country: "Guatemala", tz: "America/Guatemala", flag: "gt", lat: 14.63, lon: -90.51 },
    { name: "Hanoi", country: "Vietnam", tz: "Asia/Ho_Chi_Minh", flag: "vn", lat: 21.03, lon: 105.85 },
    { name: "Harare", country: "Zimbabwe", tz: "Africa/Harare", flag: "zw", lat: -17.83, lon: 31.05 },
    { name: "Havana", country: "Cuba", tz: "America/Havana", flag: "cu", lat: 23.11, lon: -82.37 },
    { name: "Helsinki", country: "Finland", tz: "Europe/Helsinki", flag: "fi", lat: 60.17, lon: 24.94 },
    { name: "Islamabad", country: "Pakistan", tz: "Asia/Karachi", flag: "pk", lat: 33.68, lon: 73.05 },
    { name: "Jakarta", country: "Indonesia", tz: "Asia/Jakarta", flag: "id", lat: -6.21, lon: 106.85 },
    { name: "Jerusalem", country: "Israel", tz: "Asia/Jerusalem", flag: "il", lat: 31.77, lon: 35.22 },
    { name: "Juba", country: "South Sudan", tz: "Africa/Juba", flag: "ss", lat: 4.85, lon: 31.58 },
    { name: "Kabul", country: "Afghanistan", tz: "Asia/Kabul", flag: "af", lat: 34.53, lon: 69.17 },
    { name: "Kampala", country: "Uganda", tz: "Africa/Kampala", flag: "ug", lat: 0.31, lon: 32.58 },
    { name: "Kathmandu", country: "Nepal", tz: "Asia/Kathmandu", flag: "np", lat: 27.72, lon: 85.32 },
    { name: "Khartoum", country: "Sudan", tz: "Africa/Khartoum", flag: "sd", lat: 15.50, lon: 32.56 },
    { name: "Kigali", country: "Rwanda", tz: "Africa/Kigali", flag: "rw", lat: -1.95, lon: 30.06 },
    { name: "Kingston", country: "Jamaica", tz: "America/Jamaica", flag: "jm", lat: 17.97, lon: -76.79 },
    { name: "Kingstown", country: "Saint Vincent and the Grenadines", tz: "America/St_Vincent", flag: "vc", lat: 13.16, lon: -61.22 },
    { name: "Kinshasa", country: "DR Congo", tz: "Africa/Kinshasa", flag: "cd", lat: -4.32, lon: 15.31 },
    { name: "Kuala Lumpur", country: "Malaysia", tz: "Asia/Kuala_Lumpur", flag: "my", lat: 3.14, lon: 101.69 },
    { name: "Kuwait City", country: "Kuwait", tz: "Asia/Kuwait", flag: "kw", lat: 29.38, lon: 47.97 },
    { name: "Kyiv", country: "Ukraine", tz: "Europe/Kyiv", flag: "ua", lat: 50.45, lon: 30.52 },
    { name: "La Paz", country: "Bolivia", tz: "America/La_Paz", flag: "bo", lat: -16.49, lon: -68.12 },
    { name: "Libreville", country: "Gabon", tz: "Africa/Libreville", flag: "ga", lat: 0.39, lon: 9.45 },
    { name: "Lilongwe", country: "Malawi", tz: "Africa/Blantyre", flag: "mw", lat: -13.96, lon: 33.77 },
    { name: "Lima", country: "Peru", tz: "America/Lima", flag: "pe", lat: -12.05, lon: -77.04 },
    { name: "Lisbon", country: "Portugal", tz: "Europe/Lisbon", flag: "pt", lat: 38.72, lon: -9.14 },
    { name: "Ljubljana", country: "Slovenia", tz: "Europe/Ljubljana", flag: "si", lat: 46.05, lon: 14.51 },
    { name: "Lomé", country: "Togo", tz: "Africa/Lome", flag: "tg", lat: 6.13, lon: 1.22 },
    { name: "London", country: "United Kingdom", tz: "Europe/London", flag: "gb", lat: 51.51, lon: -0.13 },
    { name: "Luanda", country: "Angola", tz: "Africa/Luanda", flag: "ao", lat: -8.84, lon: 13.23 },
    { name: "Lusaka", country: "Zambia", tz: "Africa/Lusaka", flag: "zm", lat: -15.42, lon: 28.28 },
    { name: "Luxembourg", country: "Luxembourg", tz: "Europe/Luxembourg", flag: "lu", lat: 49.61, lon: 6.13 },
    { name: "Madrid", country: "Spain", tz: "Europe/Madrid", flag: "es", lat: 40.42, lon: -3.70 },
    { name: "Majuro", country: "Marshall Islands", tz: "Pacific/Majuro", flag: "mh", lat: 7.07, lon: 171.27 },
    { name: "Malabo", country: "Equatorial Guinea", tz: "Africa/Malabo", flag: "gq", lat: 3.75, lon: 8.77 },
    { name: "Malé", country: "Maldives", tz: "Indian/Maldives", flag: "mv", lat: 4.18, lon: 73.51 },
    { name: "Managua", country: "Nicaragua", tz: "America/Managua", flag: "ni", lat: 12.14, lon: -86.25 },
    { name: "Manama", country: "Bahrain", tz: "Asia/Bahrain", flag: "bh", lat: 26.22, lon: 50.58 },
    { name: "Manila", country: "Philippines", tz: "Asia/Manila", flag: "ph", lat: 14.60, lon: 120.98 },
    { name: "Maputo", country: "Mozambique", tz: "Africa/Maputo", flag: "mz", lat: -25.97, lon: 32.58 },
    { name: "Maseru", country: "Lesotho", tz: "Africa/Maseru", flag: "ls", lat: -29.31, lon: 27.48 },
    { name: "Mbabane", country: "Eswatini", tz: "Africa/Mbabane", flag: "sz", lat: -26.32, lon: 31.13 },
    { name: "Mexico City", country: "Mexico", tz: "America/Mexico_City", flag: "mx", lat: 19.43, lon: -99.13 },
    { name: "Minsk", country: "Belarus", tz: "Europe/Minsk", flag: "by", lat: 53.90, lon: 27.56 },
    { name: "Mogadishu", country: "Somalia", tz: "Africa/Mogadishu", flag: "so", lat: 2.04, lon: 45.34 },
    { name: "Monaco", country: "Monaco", tz: "Europe/Monaco", flag: "mc", lat: 43.74, lon: 7.42 },
    { name: "Monrovia", country: "Liberia", tz: "Africa/Monrovia", flag: "lr", lat: 6.30, lon: -10.80 },
    { name: "Montevideo", country: "Uruguay", tz: "America/Montevideo", flag: "uy", lat: -34.90, lon: -56.16 },
    { name: "Moroni", country: "Comoros", tz: "Indian/Comoro", flag: "km", lat: -11.70, lon: 43.26 },
    { name: "Moscow", country: "Russia", tz: "Europe/Moscow", flag: "ru", lat: 55.76, lon: 37.62 },
    { name: "Nairobi", country: "Kenya", tz: "Africa/Nairobi", flag: "ke", lat: -1.29, lon: 36.82 },
    { name: "Nassau", country: "Bahamas", tz: "America/Nassau", flag: "bs", lat: 25.05, lon: -77.36 },
    { name: "Naypyidaw", country: "Myanmar", tz: "Asia/Yangon", flag: "mm", lat: 19.76, lon: 96.07 },
    { name: "New Delhi", country: "India", tz: "Asia/Kolkata", flag: "in", lat: 28.61, lon: 77.21 },
    { name: "Niamey", country: "Niger", tz: "Africa/Niamey", flag: "ne", lat: 13.51, lon: 2.11 },
    { name: "Nicosia", country: "Cyprus", tz: "Asia/Nicosia", flag: "cy", lat: 35.19, lon: 33.36 },
    { name: "Nouakchott", country: "Mauritania", tz: "Africa/Nouakchott", flag: "mr", lat: 18.07, lon: -15.96 },
    { name: "Nuku'alofa", country: "Tonga", tz: "Pacific/Tongatapu", flag: "to", lat: -21.13, lon: -175.20 },
    { name: "Oslo", country: "Norway", tz: "Europe/Oslo", flag: "no", lat: 59.91, lon: 10.75 },
    { name: "Ottawa", country: "Canada", tz: "America/Toronto", flag: "ca", lat: 45.42, lon: -75.70 },
    { name: "Ouagadougou", country: "Burkina Faso", tz: "Africa/Ouagadougou", flag: "bf", lat: 12.37, lon: -1.53 },
    { name: "Pago Pago", country: "American Samoa", tz: "Pacific/Pago_Pago", flag: "as", lat: -14.28, lon: -170.70 },
    { name: "Panama City", country: "Panama", tz: "America/Panama", flag: "pa", lat: 8.98, lon: -79.52 },
    { name: "Paramaribo", country: "Suriname", tz: "America/Paramaribo", flag: "sr", lat: 5.85, lon: -55.20 },
    { name: "Paris", country: "France", tz: "Europe/Paris", flag: "fr", lat: 48.86, lon: 2.35 },
    { name: "Phnom Penh", country: "Cambodia", tz: "Asia/Phnom_Penh", flag: "kh", lat: 11.56, lon: 104.93 },
    { name: "Podgorica", country: "Montenegro", tz: "Europe/Podgorica", flag: "me", lat: 42.44, lon: 19.26 },
    { name: "Port Louis", country: "Mauritius", tz: "Indian/Mauritius", flag: "mu", lat: -20.16, lon: 57.50 },
    { name: "Port Moresby", country: "Papua New Guinea", tz: "Pacific/Port_Moresby", flag: "pg", lat: -9.44, lon: 147.18 },
    { name: "Port Vila", country: "Vanuatu", tz: "Pacific/Efate", flag: "vu", lat: -17.73, lon: 168.32 },
    { name: "Port-au-Prince", country: "Haiti", tz: "America/Port-au-Prince", flag: "ht", lat: 18.59, lon: -72.31 },
    { name: "Porto-Novo", country: "Benin", tz: "Africa/Porto-Novo", flag: "bj", lat: 6.50, lon: 2.60 },
    { name: "Prague", country: "Czech Republic", tz: "Europe/Prague", flag: "cz", lat: 50.09, lon: 14.42 },
    { name: "Praia", country: "Cape Verde", tz: "Atlantic/Cape_Verde", flag: "cv", lat: 14.92, lon: -23.51 },
    { name: "Pretoria", country: "South Africa", tz: "Africa/Johannesburg", flag: "za", lat: -25.75, lon: 28.19 },
    { name: "Pyongyang", country: "North Korea", tz: "Asia/Pyongyang", flag: "kp", lat: 39.03, lon: 125.75 },
    { name: "Quito", country: "Ecuador", tz: "America/Guayaquil", flag: "ec", lat: -0.23, lon: -78.52 },
    { name: "Rabat", country: "Morocco", tz: "Africa/Casablanca", flag: "ma", lat: 34.02, lon: -6.85 },
    { name: "Reykjavik", country: "Iceland", tz: "Atlantic/Reykjavik", flag: "is", lat: 64.14, lon: -21.94 },
    { name: "Riga", country: "Latvia", tz: "Europe/Riga", flag: "lv", lat: 56.95, lon: 24.11 },
    { name: "Riyadh", country: "Saudi Arabia", tz: "Asia/Riyadh", flag: "sa", lat: 24.71, lon: 46.68 },
    { name: "Rome", country: "Italy", tz: "Europe/Rome", flag: "it", lat: 41.90, lon: 12.50 },
    { name: "Roseau", country: "Dominica", tz: "America/Dominica", flag: "dm", lat: 15.30, lon: -61.39 },
    { name: "San José", country: "Costa Rica", tz: "America/Costa_Rica", flag: "cr", lat: 9.93, lon: -84.08 },
    { name: "San Juan", country: "Puerto Rico", tz: "America/Puerto_Rico", flag: "pr", lat: 18.47, lon: -66.11 },
    { name: "San Marino", country: "San Marino", tz: "Europe/San_Marino", flag: "sm", lat: 43.94, lon: 12.45 },
    { name: "San Salvador", country: "El Salvador", tz: "America/El_Salvador", flag: "sv", lat: 13.69, lon: -89.19 },
    { name: "Sana'a", country: "Yemen", tz: "Asia/Aden", flag: "ye", lat: 15.35, lon: 44.21 },
    { name: "Santiago", country: "Chile", tz: "America/Santiago", flag: "cl", lat: -33.45, lon: -70.67 },
    { name: "Santo Domingo", country: "Dominican Republic", tz: "America/Santo_Domingo", flag: "do", lat: 18.47, lon: -69.90 },
    { name: "Sarajevo", country: "Bosnia and Herzegovina", tz: "Europe/Sarajevo", flag: "ba", lat: 43.85, lon: 18.36 },
    { name: "Seoul", country: "South Korea", tz: "Asia/Seoul", flag: "kr", lat: 37.57, lon: 126.98 },
    { name: "Singapore", country: "Singapore", tz: "Asia/Singapore", flag: "sg", lat: 1.35, lon: 103.86 },
    { name: "Skopje", country: "North Macedonia", tz: "Europe/Skopje", flag: "mk", lat: 42.00, lon: 21.43 },
    { name: "Sofia", country: "Bulgaria", tz: "Europe/Sofia", flag: "bg", lat: 42.70, lon: 23.32 },
    { name: "Stockholm", country: "Sweden", tz: "Europe/Stockholm", flag: "se", lat: 59.33, lon: 18.07 },
    { name: "Sucre", country: "Bolivia", tz: "America/La_Paz", flag: "bo", lat: -19.02, lon: -65.26 },
    { name: "Taipei", country: "Taiwan", tz: "Asia/Taipei", flag: "tw", lat: 25.03, lon: 121.57 },
    { name: "Tallinn", country: "Estonia", tz: "Europe/Tallinn", flag: "ee", lat: 59.44, lon: 24.75 },
    { name: "Tashkent", country: "Uzbekistan", tz: "Asia/Tashkent", flag: "uz", lat: 41.30, lon: 69.24 },
    { name: "Tbilisi", country: "Georgia", tz: "Asia/Tbilisi", flag: "ge", lat: 41.72, lon: 44.78 },
    { name: "Tegucigalpa", country: "Honduras", tz: "America/Tegucigalpa", flag: "hn", lat: 14.08, lon: -87.21 },
    { name: "Tehran", country: "Iran", tz: "Asia/Tehran", flag: "ir", lat: 35.69, lon: 51.39 },
    { name: "Thimphu", country: "Bhutan", tz: "Asia/Thimphu", flag: "bt", lat: 27.47, lon: 89.64 },
    { name: "Tirana", country: "Albania", tz: "Europe/Tirana", flag: "al", lat: 41.33, lon: 19.82 },
   { name: "Tripoli", country: "Libya", tz: "Africa/Tripoli", flag: "ly", lat: 32.89, lon: 13.19 },
    { name: "Tunis", country: "Tunisia", tz: "Africa/Tunis", flag: "tn", lat: 36.80, lon: 10.18 },
    { name: "Ulaanbaatar", country: "Mongolia", tz: "Asia/Ulaanbaatar", flag: "mn", lat: 47.92, lon: 106.92 },
    { name: "Vaduz", country: "Liechtenstein", tz: "Europe/Vaduz", flag: "li", lat: 47.14, lon: 9.52 },
    { name: "Valletta", country: "Malta", tz: "Europe/Malta", flag: "mt", lat: 35.90, lon: 14.51 },
    { name: "Vatican City", country: "Vatican City", tz: "Europe/Rome", flag: "va", lat: 41.90, lon: 12.45 },
    { name: "Victoria", country: "Seychelles", tz: "Indian/Mahe", flag: "sc", lat: -4.62, lon: 55.45 },
    { name: "Vienna", country: "Austria", tz: "Europe/Vienna", flag: "at", lat: 48.21, lon: 16.37 },
    { name: "Vientiane", country: "Laos", tz: "Asia/Vientiane", flag: "la", lat: 17.97, lon: 102.60 },
    { name: "Vilnius", country: "Lithuania", tz: "Europe/Vilnius", flag: "lt", lat: 54.69, lon: 25.28 },
    { name: "Warsaw", country: "Poland", tz: "Europe/Warsaw", flag: "pl", lat: 52.23, lon: 21.01 },
    { name: "Washington D.C.", country: "United States", tz: "America/New_York", flag: "us", lat: 38.91, lon: -77.04 },
    { name: "Wellington", country: "New Zealand", tz: "Pacific/Auckland", flag: "nz", lat: -41.29, lon: 174.78 },
    { name: "Vienna", country: "Austria", tz: "Europe/Vienna", flag: "at", lat: 48.21, lon: 16.37 },
    { name: "Yaoundé", country: "Cameroon", tz: "Africa/Douala", flag: "cm", lat: 3.87, lon: 11.52 },
    { name: "Yerevan", country: "Armenia", tz: "Asia/Yerevan", flag: "am", lat: 40.18, lon: 44.51 },
    { name: "Zagreb", country: "Croatia", tz: "Europe/Zagreb", flag: "hr", lat: 45.81, lon: 15.98 }
  ];



 
  worldCapitals.forEach(capital => {
    const { country, name } = capital;
    capital.name = `${country} (${name})`;
  });

  
  let liveUpdateInterval = null;
  let useAutoTime = true;
  

// ─── 1) Helpers for time-zone conversions ─────────────────────────────────────
function getTimeInZone(zone, baseDate = new Date()) {
  try {
    const localeStr = baseDate.toLocaleString("en-US", { timeZone: zone });
    return new Date(localeStr);
  } catch (error) {
    console.error(`Error converting time for zone: ${zone}`, error);
    return baseDate;
  }
}

function getOffsetHours(zone) {
  try {
    const now = new Date();
    const localMs = now.getTime();
    const zoneMs = getTimeInZone(zone, now).getTime();
    return (zoneMs - localMs + now.getTimezoneOffset() * 60000) / 3600000;
  } catch (error) {
    console.error(`Error calculating offset for zone: ${zone}`, error);
    return 0;
  }
}

function formatTimeWithSeconds(date) {
  return date.toLocaleTimeString('en-US', {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
}

// ─── 2) Search functionality ────────────────────────────────────────────────────
function performSearch(searchInput, select) {
  const searchTerm = searchInput.value.toLowerCase().trim();
  
  // If search is empty, reset the dropdown
  if (!searchTerm) {
    initDropdowns();
    return;
  }

  // Store the original options if we haven't already
  if (!select._originalOptions) {
    select._originalOptions = Array.from(select.options);
  }

  // Reset options to original state
  while (select.options.length > 0) {
    select.remove(0);
  }

  // Filter and add matching options
  const matchingOptions = select._originalOptions.filter(option => {
    const text = option.text.toLowerCase();
    return text.startsWith(searchTerm) || 
           text.includes(` ${searchTerm}`) || 
           text.includes(`-${searchTerm}`);
  });

  // Add matching options back to select
  matchingOptions.forEach(option => {
    select.add(new Option(option.text, option.value));
  });

  // Show "no results" message if no matches found
  if (matchingOptions.length === 0) {
    const noResults = new Option("No matches found", "");
    noResults.disabled = true;
    select.add(noResults);
  }
}

function setupSearch(searchInput, select) {
  const searchButton = searchInput.nextElementSibling;
  
  // Handle search button click
  searchButton.addEventListener('click', (e) => {
    e.preventDefault();
    performSearch(searchInput, select);
  });

  // Handle Enter key in search input
  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      performSearch(searchInput, select);
    }
  });

  // Reset on empty search
  searchInput.addEventListener('input', () => {
    if (!searchInput.value) {
      initDropdowns();
    }
  });
}

// ─── 3) Populate the "from" and "to" dropdowns ────────────────────────────────
function initDropdowns() {
  const fromTz = document.getElementById("from-tz");
  const toTz = document.getElementById("to-tz");
  const fromSearch = document.getElementById("from-tz-search");
  const toSearch = document.getElementById("to-tz-search");

  // Clear existing options except the first one in fromTz
  while (fromTz.options.length > 1) {
    fromTz.remove(1);
  }
  while (toTz.options.length > 0) {
    toTz.remove(0);
  }

  // Sort capitals by country name
  worldCapitals.sort((a, b) => a.country.localeCompare(b.country));

  worldCapitals.forEach(city => {
    const flagEmoji = city.flag
      .toUpperCase()
      .match(/../g)
      .map(c => String.fromCodePoint(0x1F1E6 + c.charCodeAt(0) - 65))
      .join("");

    const text = `${flagEmoji} ${city.country} - ${city.name}`;
    const opt1 = new Option(text, city.tz);
    const opt2 = new Option(text, city.tz);

    fromTz.add(opt1);
    toTz.add(opt2);
  });

  // Set a default selection for "to" timezone (e.g., London)
  const defaultTz = worldCapitals.find(city => city.name === "London");
  if (defaultTz) {
    toTz.value = defaultTz.tz;
  }

  // Setup search functionality
  setupSearch(fromSearch, fromTz);
  setupSearch(toSearch, toTz);
}

// ─── 4) Time conversion and display ───────────────────────────────────────────
function updateTime() {
  const fromTz = document.getElementById("from-tz").value;
  const toTz = document.getElementById("to-tz").value;
  const fromTimeInput = document.getElementById("from-time").value;

  let baseDate = new Date();
  if (!useAutoTime && fromTimeInput) {
    const [hours, minutes] = fromTimeInput.split(':');
    baseDate.setHours(parseInt(hours), parseInt(minutes), 0);
  }

  try {
    // Get times in both zones
    const fromTime = fromTz === 'local' ? baseDate : getTimeInZone(fromTz, baseDate);
    const toTime = getTimeInZone(toTz, baseDate);

    // Calculate time difference and round to nearest hour
    const diffHours = getOffsetHours(toTz) - (fromTz === 'local' ? 0 : getOffsetHours(fromTz));
    const roundedDiff = Math.round(diffHours);
    let diffFormatted;
    
    if (roundedDiff === 0) {
      diffFormatted = 'Same time zone';
    } else {
      diffFormatted = `${Math.abs(roundedDiff)} hour${Math.abs(roundedDiff) !== 1 ? 's' : ''} ${roundedDiff > 0 ? 'ahead' : 'behind'}`;
    }

    // Update display
    document.getElementById("local-time-output").textContent = formatTimeWithSeconds(fromTime);
    document.getElementById("target-time-output").textContent = formatTimeWithSeconds(toTime);
    document.getElementById("time-diff-output").textContent = diffFormatted;

    // Update destination city info
    const selectedCity = worldCapitals.find(city => city.tz === toTz);
    if (selectedCity) {
      document.getElementById("output-city").textContent = `${selectedCity.name}, ${selectedCity.country}`;
      document.getElementById("output-flag").className = `fi fi-${selectedCity.flag}`;
    }

    // Update local city info
    if (fromTz === 'local') {
      // Try to get the local city based on the browser's timezone
      const localTz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const localCity = worldCapitals.find(city => city.tz === localTz) || 
                       worldCapitals.find(city => localTz.includes(city.tz.split('/')[1]));
      
      if (localCity) {
        document.getElementById("local-city").textContent = `${localCity.name}, ${localCity.country}`;
        document.getElementById("local-flag").className = `fi fi-${localCity.flag}`;
      } else {
        // Fallback to a generic message if we can't determine the exact city
        document.getElementById("local-city").textContent = `Your Location (${localTz})`;
        // Try to get country code from the timezone
        const countryCode = localTz.split('/')[1]?.substring(0, 2).toLowerCase();
        if (countryCode) {
          document.getElementById("local-flag").className = `fi fi-${countryCode}`;
        }
      }
    } else {
      const fromCity = worldCapitals.find(city => city.tz === fromTz);
      if (fromCity) {
        document.getElementById("local-city").textContent = `${fromCity.name}, ${fromCity.country}`;
        document.getElementById("local-flag").className = `fi fi-${fromCity.flag}`;
      }
    }
  } catch (error) {
    console.error('Error updating time:', error);
  }
}

// ─── 5) Event Listeners and Initialization ──────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initDropdowns();
  
  // Setup auto-update button
  const autoTimeBtn = document.getElementById("auto-time-btn");
  autoTimeBtn.addEventListener('click', () => {
    useAutoTime = true;
    document.getElementById("from-time").value = new Date().toTimeString().slice(0, 5);
    updateTime();
  });

  // Setup manual time input
  document.getElementById("from-time").addEventListener('change', () => {
    useAutoTime = false;
    updateTime();
  });

  // Setup timezone change handlers
  document.getElementById("from-tz").addEventListener('change', updateTime);
  document.getElementById("to-tz").addEventListener('change', updateTime);

  // Setup convert button
  document.getElementById("convert-btn").addEventListener('click', updateTime);

  // Initial update
  updateTime();

  // Start live updates
  setInterval(updateTime, 1000);
});

// Initialize the map if it exists
if (document.getElementById('world-map')) {
  const map = L.map('world-map').setView([20, 0], 2);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);

  // Add markers for all capitals
  worldCapitals.forEach(city => {
    const marker = L.marker([city.lat, city.lon])
      .addTo(map)
      .bindPopup(`${city.name}, ${city.country}`);

    marker.on('click', () => {
      document.getElementById('to-tz').value = city.tz;
      updateTime();
    });
  });
}
