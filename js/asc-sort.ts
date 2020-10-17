let locations: Array<any> = [];


class Locations {
  name: string
  zipCode: string
  address: string
  image: string
  dateCreated: string
  timeCreated: string
  constructor(name: string, zipCode: string, address: string, image: string, dateCreated: string, timeCreated: string) {
    this.name = name
    this.zipCode = zipCode;
    this.address = address;
    this.image = image
    this.dateCreated = dateCreated
    this.timeCreated = timeCreated
    locations.push(this)
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
            <div class="card-footer">
              <p class="card-text">Created at: ${this.dateCreated} ${this.timeCreated}</p>
            </div>
          </div>
        </div>
    `)
  }
}

class Restaurants extends Locations {
  website: string
  phone: any
  type: string
  constructor(name: string, zipCode: string, address: string, image: string, website: string, phone: any, type: string, dateCreated: string, timeCreated: string) {
    super(name, zipCode, address, image, dateCreated, timeCreated);
    this.website = website
    this.phone = phone
    this.type = type
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
            <div class="card-footer">
              <p class="card-text">Created at: ${this.dateCreated} ${this.timeCreated}</p>
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
  constructor(name: string, zipCode: string, address: string, image: string, website: string, date: string, time: string, price: number, dateCreated: string, timeCreated: string) {
    super(name, zipCode, address, image, dateCreated, timeCreated);
    this.website = website
    this.eventDate = date
    this.eventTime = time
    this.price = price
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
            <div class="card-footer">
              <p class="card-text">Created at: ${this.dateCreated} ${this.timeCreated}</p>
            </div>
          </div>
        </div>
    `)
  }
}

//creates new objects
new Locations("St. Charles Church", "1010 Vienna", "Karlsplatz 1", "./img/st-charles-church.jpg", "16.11.2021.", "20:00")
new Locations("Zoo Vienna", "1130 Wien", "Maxingstraße 13b", "./img/vienna-zoo.jpg", "14.11.2021.", "20:10")
new Restaurants("Lemon Leaf", "1050 Vienna", "Kettenbrückengasse 19", "./img/lemon-leaf.png", "www.lemonleaf.at", "+43(1)5812308", "Thai restaurant", "15.11.2021.", "20:08")
new Restaurants("Sixta", "1050 Wien", "Schönbrunner Straße 21", "./img/sixta.png", "http://www.sixta-restaurant.at/", ["+43 1 58 528 56 l", "+43 1 58 528 56"], "thai food", "15.11.2021.", "20:06")
new Events("Kris Kristofferson", "1150 Wien", "Wiener Stadthalle, Halle F, Roland Rainer Platz 1", "./img/kriskristofferson.jpg", "http://kriskristofferson.com/", "15.11.2021.", "20:00", 58.50, "15.11.2021.", "20:04")
new Events("Lenny Kravitz", "1150 Wien", "Wiener Stadthalle, Halle F, Roland Rainer Platz 1", "./img/lennykravitz.jpg", "www.lennykravitz.com/", "Sat, 09.12.2029", "19:30", 47.80, "15.11.2021.", "20:02")

//sorting function
locations.sort((a, b) => a.dateCreated.localeCompare(b.dateCreated) === 0 ? a.timeCreated.localeCompare(b.timeCreated) : a.dateCreated.localeCompare(b.dateCreated))
//ternary operator which checks if the date is the same, then sort in respect to the time. If the dates are not the same, sorts in respect to the date

//appends content to DOM
function displayLocations (content: Array<any>) {
  content.forEach( element => {
    $("#locations").append(
      element.display())
  })
}


displayLocations(locations)



