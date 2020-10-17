let places: Array<{}> = [];
let restaurants: Array<{}> = [];
let events: Array<{}> = [];

class Locations {
  name: string
  zipCode: string
  address: string
  image: string

  constructor(name: string, zipCode: string, address: string, image: string) {
    this.name = name
    this.zipCode = zipCode;
    this.address = address;
    this.image = image
  }
  display() {
    return (`
        <div class="col mb-4">
          <div class="card h-100">
            <img src="${this.image}" class="card-img-top d-none d-md-block" alt="${this.name}">
            <div class="card-body">
              <h5 class="card-title">${this.name}</h5>
              <p class="card-text">${this.address}, ${this.zipCode}</p>
            </div>
          </div>
        </div>
    `)
  }
}

class Places extends Locations {
  constructor(name: string, zipCode: string, address: string, image: string) {
    super(name, zipCode, address, image) 
    super.display()
    places.push(this)
  }
}

class Restaurants extends Locations {
  website: string
  phone: any
  type: string
  constructor(name: string, zipCode: string, address: string, image: string, website: string, phone: any, type: string) {
    super(name, zipCode, address, image);
    this.website = website
    this.phone = phone
    this.type = type
    restaurants.push(this)
  }
  display() {
    return (`
        <div class="col mb-4">
          <div class="card h-100">
            <img src="${this.image}" class="card-img-top d-none d-md-block" alt="${this.name}">
            <div class="card-body">
              <h5 class="card-title">${this.name} - <small>${this.type}</small></h5>
              <p class="card-text">${this.address}, ${this.zipCode}</p>
              <p class="card-text">${this.website}</p>
              <p class="card-text">${this.phone}</p>
            </div>
          </div>
        </div>
    `)
  }
}

class Events extends Locations {
  eventDate: string
  eventTime: string
  price: number
  website: string
  constructor(name: string, zipCode: string, address: string, image: string, website: string, date: string, time: string, price: number) {
    super(name, zipCode, address, image);
    this.website = website
    this.eventDate = date
    this.eventTime = time
    this.price = price
    events.push(this)
  }
  display() {
    return (`
        <div class="col mb-4">
          <div class="card h-100">
            <img src="${this.image}" class="card-img-top d-none d-md-block" alt="${this.name}">
            <div class="card-body">
              <h5 class="card-title">${this.name}</h5>
              <p class="card-text">${this.website}</p>
              <p class="card-text">$${this.address}, ${this.zipCode}</p>
              <p class="card-text">${this.eventDate}, ${this.eventTime}</p>
              <p class="card-text">Price: ${this.price} EUR</p>
            </div>
          </div>
        </div>
    `)
  }
}

//creates new objects
new Places("St. Charles Church", "1010 Vienna", "Karlsplatz 1", "./img/st-charles-church.jpg")
new Places("Zoo Vienna", "1130 Wien", "Maxingstraße 13b", "./img/vienna-zoo.jpg")
new Places("St. Charles Church", "1010 Vienna", "Karlsplatz 1", "./img/st-charles-church.jpg")
new Places("Zoo Vienna", "1130 Wien", "Maxingstraße 13b", "./img/vienna-zoo.jpg")
new Restaurants("Lemon Leaf", "1050 Vienna", "Kettenbrückengasse 19", "./img/lemon-leaf.png", "www.lemonleaf.at", "+43(1)5812308", "Thai restaurant")
new Restaurants("Sixta", "1050 Wien", "Schönbrunner Straße 21", "./img/sixta.png", "http://www.sixta-restaurant.at/", ["+43 1 58 528 56 l", "+43 1 58 528 56"], "thai food")
new Restaurants("Lemon Leaf", "1050 Vienna", "Kettenbrückengasse 19", "./img/lemon-leaf.png", "www.lemonleaf.at", "+43(1)5812308", "Thai restaurant")
new Restaurants("Sixta", "1050 Wien", "Schönbrunner Straße 21", "./img/sixta.png", "http://www.sixta-restaurant.at/", ["+43 1 58 528 56 l", "+43 1 58 528 56"], "thai food")
new Events("Kris Kristofferson", "1150 Wien", "Wiener Stadthalle, Halle F, Roland Rainer Platz 1", "./img/kriskristofferson.jpg", "http://kriskristofferson.com/", "Fr., 15.11.2021.", "20:00", 58.50)
new Events("Lenny Kravitz", "1150 Wien", "Wiener Stadthalle, Halle F, Roland Rainer Platz 1", "./img/lennykravitz.jpg", "www.lennykravitz.com/", "Sat, 09.12.2029", "19:30", 47.80)
new Events("Kris Kristofferson", "1150 Wien", "Wiener Stadthalle, Halle F, Roland Rainer Platz 1", "./img/kriskristofferson.jpg", "http://kriskristofferson.com/", "Fr., 15.11.2021.", "20:00", 58.50)
new Events("Lenny Kravitz", "1150 Wien", "Wiener Stadthalle, Halle F, Roland Rainer Platz 1", "./img/lennykravitz.jpg", "www.lennykravitz.com/", "Sat, 09.12.2029", "19:30", 47.80)


//append content to DOM
function displayPlaces (content: Array<any>) {
  content.forEach( element => {
    $("#places").append(
      element.display())
  })
}

function displayRestaurants (content: Array<any>) {
  content.forEach( element => {
    $("#restaurants").append(
      element.display())
  })
}

function displayEvents (content: Array<any>) {
  content.forEach( element => {
    $("#events").append(
      element.display())
  })
}


displayPlaces(places)
displayRestaurants(restaurants)
displayEvents(events)


