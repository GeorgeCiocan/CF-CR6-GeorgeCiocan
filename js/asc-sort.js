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
var locations = [];
var Locations = /** @class */ (function () {
    function Locations(name, zipCode, address, image, dateCreated, timeCreated) {
        this.name = name;
        this.zipCode = zipCode;
        this.address = address;
        this.image = image;
        this.dateCreated = dateCreated;
        this.timeCreated = timeCreated;
        locations.push(this);
    }
    Locations.prototype.display = function () {
        return ("\n        <div class=\"col mb-4\">\n          <div class=\"card h-100\">\n            <img src=\"" + this.image + "\" class=\"card-img-top d-none d-md-block\" alt=\"" + this.name + "\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">" + this.name + "</h5>\n              <p class=\"card-text\">" + this.address + ", " + this.zipCode + "</p>\n            </div>\n            <div class=\"card-footer\">\n              <p class=\"card-text\">Created at: " + this.dateCreated + " " + this.timeCreated + "</p>\n            </div>\n          </div>\n        </div>\n    ");
    };
    return Locations;
}());
var Restaurants = /** @class */ (function (_super) {
    __extends(Restaurants, _super);
    function Restaurants(name, zipCode, address, image, website, phone, type, dateCreated, timeCreated) {
        var _this = _super.call(this, name, zipCode, address, image, dateCreated, timeCreated) || this;
        _this.website = website;
        _this.phone = phone;
        _this.type = type;
        return _this;
    }
    Restaurants.prototype.display = function () {
        return ("\n        <div class=\"col mb-4\">\n          <div class=\"card h-100\">\n            <img src=\"" + this.image + "\" class=\"card-img-top d-none d-md-block\" alt=\"" + this.name + "\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">" + this.name + " - <small>" + this.type + "</small></h5>\n              <p class=\"card-text\">" + this.address + ", " + this.zipCode + "</p>\n              <p class=\"card-text\">" + this.website + "</p>\n              <p class=\"card-text\">" + this.phone + "</p>\n            </div>\n            <div class=\"card-footer\">\n              <p class=\"card-text\">Created at: " + this.dateCreated + " " + this.timeCreated + "</p>\n            </div>\n          </div>\n        </div>\n    ");
    };
    return Restaurants;
}(Locations));
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events(name, zipCode, address, image, website, date, time, price, dateCreated, timeCreated) {
        var _this = _super.call(this, name, zipCode, address, image, dateCreated, timeCreated) || this;
        _this.website = website;
        _this.eventDate = date;
        _this.eventTime = time;
        _this.price = price;
        return _this;
    }
    Events.prototype.display = function () {
        return ("\n        <div class=\"col mb-4\">\n          <div class=\"card h-100\">\n            <img src=\"" + this.image + "\" class=\"card-img-top d-none d-md-block\" alt=\"" + this.name + "\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">" + this.name + "</h5>\n              <p class=\"card-text\">" + this.website + "</p>\n              <p class=\"card-text\">$" + this.address + ", " + this.zipCode + "</p>\n              <p class=\"card-text\">" + this.eventDate + ", " + this.eventTime + "</p>\n              <p class=\"card-text\">Price: " + this.price + " EUR</p>\n            </div>\n            <div class=\"card-footer\">\n              <p class=\"card-text\">Created at: " + this.dateCreated + " " + this.timeCreated + "</p>\n            </div>\n          </div>\n        </div>\n    ");
    };
    return Events;
}(Locations));
//creates new objects
new Locations("St. Charles Church", "1010 Vienna", "Karlsplatz 1", "./img/st-charles-church.jpg", "16.11.2021.", "20:00");
new Locations("Zoo Vienna", "1130 Wien", "Maxingstraße 13b", "./img/vienna-zoo.jpg", "14.11.2021.", "20:10");
new Restaurants("Lemon Leaf", "1050 Vienna", "Kettenbrückengasse 19", "./img/lemon-leaf.png", "www.lemonleaf.at", "+43(1)5812308", "Thai restaurant", "15.11.2021.", "20:08");
new Restaurants("Sixta", "1050 Wien", "Schönbrunner Straße 21", "./img/sixta.png", "http://www.sixta-restaurant.at/", ["+43 1 58 528 56 l", "+43 1 58 528 56"], "thai food", "15.11.2021.", "20:06");
new Events("Kris Kristofferson", "1150 Wien", "Wiener Stadthalle, Halle F, Roland Rainer Platz 1", "./img/kriskristofferson.jpg", "http://kriskristofferson.com/", "15.11.2021.", "20:00", 58.50, "15.11.2021.", "20:04");
new Events("Lenny Kravitz", "1150 Wien", "Wiener Stadthalle, Halle F, Roland Rainer Platz 1", "./img/lennykravitz.jpg", "www.lennykravitz.com/", "Sat, 09.12.2029", "19:30", 47.80, "15.11.2021.", "20:02");
//sorting function
locations.sort(function (a, b) { return a.dateCreated.localeCompare(b.dateCreated) === 0 ? a.timeCreated.localeCompare(b.timeCreated) : a.dateCreated.localeCompare(b.dateCreated); });
//ternary operator which checks if the date is the same, then sort in respect to the time. If the dates are not the same, sorts in respect to the date
//appends content to DOM
function displayLocations(content) {
    content.forEach(function (element) {
        $("#locations").append(element.display());
    });
}
displayLocations(locations);
