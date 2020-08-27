"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DataService = void 0;
var core_1 = require("@angular/core");
var DataService = /** @class */ (function () {
    function DataService() {
        this.products = [{
                id: 1,
                name: 'Pollo',
                description: 'Es un pollo',
                price: 123,
                category: 'Pollos'
            }, {
                id: 2,
                name: 'Pavo',
                description: 'Es un Pavo',
                price: 12,
                category: 'Aves'
            }];
    }
    DataService.prototype.getAllProducts = function () {
        return this.products;
    };
    DataService.prototype.getProductById = function (id) {
        return this.products.filter(function (product) { return product.id == id; });
    };
    DataService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
