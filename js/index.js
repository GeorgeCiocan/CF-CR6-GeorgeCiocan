var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var places = [];
var restaurants = [];
var events = [];
var Locations = /** @class */ (function () {
    function Locations(name, zipCode, address, image) {
        this.name = name;
        this.zipCode = zipCode;
        this.address = address;
        this.image = image;
    }
    Locations.prototype.display = function () {
        return ("\n        <div class=\"col mb-4\">\n          <div class=\"card h-100\">\n            <img src=\"" + this.image + "\" class=\"card-img-top d-none d-md-block\" alt=\"" + this.name + "\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">" + this.name + "</h5>\n              <p class=\"card-text\">" + this.address + ", " + this.zipCode + "</p>\n            </div>\n          </div>\n        </div>\n    ");
    };
    return Locations;
}());
var Places = /** @class */ (function (_super) {
    __extends(Places, _super);
    function Places(name, zipCode, address, image) {
        var _this = _super.call(this, name, zipCode, address, image) || this;
        _super.prototype.display.call(_this);
        places.push(_this);
        return _this;
    }
    return Places;
}(Locations));
var Restaurants = /** @class */ (function (_super) {
    __extends(Restaurants, _super);
    function Restaurants(name, zipCode, address, image, website, phone, type) {
        var _this = _super.call(this, name, zipCode, address, image) || this;
        _this.website = website;
        _this.phone = phone;
        _this.type = type;
        restaurants.push(_this);
        return _this;
    }
    Restaurants.prototype.display = function () {
        return ("\n        <div class=\"col mb-4\">\n          <div class=\"card h-100\">\n            <img src=\"" + this.image + "\" class=\"card-img-top d-none d-md-block\" alt=\"" + this.name + "\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">" + this.name + " - <small>" + this.type + "</small></h5>\n              <p class=\"card-text\">" + this.address + ", " + this.zipCode + "</p>\n              <p class=\"card-text\">" + this.website + "</p>\n              <p class=\"card-text\">" + this.phone + "</p>\n            </div>\n          </div>\n        </div>\n    ");
    };
    return Restaurants;
}(Locations));
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events(name, zipCode, address, image, website, date, time, price) {
        var _this = _super.call(this, name, zipCode, address, image) || this;
        _this.website = website;
        _this.eventDate = date;
        _this.eventTime = time;
        _this.price = price;
        events.push(_this);
        return _this;
    }
    Events.prototype.display = function () {
        return ("\n        <div class=\"col mb-4\">\n          <div class=\"card h-100\">\n            <img src=\"" + this.image + "\" class=\"card-img-top d-none d-md-block\" alt=\"" + this.name + "\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">" + this.name + "</h5>\n              <p class=\"card-text\">" + this.website + "</p>\n              <p class=\"card-text\">$" + this.address + ", " + this.zipCode + "</p>\n              <p class=\"card-text\">" + this.eventDate + ", " + this.eventTime + "</p>\n              <p class=\"card-text\">Price: " + this.price + " EUR</p>\n            </div>\n          </div>\n        </div>\n    ");
    };
    return Events;
}(Locations));
//creates new objects
new Places("St. Charles Church", "1010 Vienna", "Karlsplatz 1", "./img/st-charles-church.jpg");
new Places("Zoo Vienna", "1130 Wien", "Maxingstraße 13b", "./img/vienna-zoo.jpg");
new Places("St. Charles Church", "1010 Vienna", "Karlsplatz 1", "./img/st-charles-church.jpg");
new Places("Zoo Vienna", "1130 Wien", "Maxingstraße 13b", "./img/vienna-zoo.jpg");
new Restaurants("Lemon Leaf", "1050 Vienna", "Kettenbrückengasse 19", "./img/lemon-leaf.png", "www.lemonleaf.at", "+43(1)5812308", "Thai restaurant");
new Restaurants("Sixta", "1050 Wien", "Schönbrunner Straße 21", "./img/sixta.png", "http://www.sixta-restaurant.at/", ["+43 1 58 528 56 l", "+43 1 58 528 56"], "thai food");
new Restaurants("Lemon Leaf", "1050 Vienna", "Kettenbrückengasse 19", "./img/lemon-leaf.png", "www.lemonleaf.at", "+43(1)5812308", "Thai restaurant");
new Restaurants("Sixta", "1050 Wien", "Schönbrunner Straße 21", "./img/sixta.png", "http://www.sixta-restaurant.at/", ["+43 1 58 528 56 l", "+43 1 58 528 56"], "thai food");
new Events("Kris Kristofferson", "1150 Wien", "Wiener Stadthalle, Halle F, Roland Rainer Platz 1", "./img/kriskristofferson.jpg", "http://kriskristofferson.com/", "Fr., 15.11.2021.", "20:00", 58.50);
new Events("Lenny Kravitz", "1150 Wien", "Wiener Stadthalle, Halle F, Roland Rainer Platz 1", "./img/lennykravitz.jpg", "www.lennykravitz.com/", "Sat, 09.12.2029", "19:30", 47.80);
new Events("Kris Kristofferson", "1150 Wien", "Wiener Stadthalle, Halle F, Roland Rainer Platz 1", "./img/kriskristofferson.jpg", "http://kriskristofferson.com/", "Fr., 15.11.2021.", "20:00", 58.50);
new Events("Lenny Kravitz", "1150 Wien", "Wiener Stadthalle, Halle F, Roland Rainer Platz 1", "./img/lennykravitz.jpg", "www.lennykravitz.com/", "Sat, 09.12.2029", "19:30", 47.80);
//append content to DOM
function displayPlaces(content) {
    content.forEach(function (element) {
        $("#places").append(element.display());
    });
}
function displayRestaurants(content) {
    content.forEach(function (element) {
        $("#restaurants").append(element.display());
    });
}
function displayEvents(content) {
    content.forEach(function (element) {
        $("#events").append(element.display());
    });
}
displayPlaces(places);
displayRestaurants(restaurants);
displayEvents(events);
