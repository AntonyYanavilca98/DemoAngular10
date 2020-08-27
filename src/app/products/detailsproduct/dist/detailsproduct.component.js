"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DetailsproductComponent = void 0;
var core_1 = require("@angular/core");
var DetailsproductComponent = /** @class */ (function () {
    function DetailsproductComponent(route, dataSvc, location) {
        this.route = route;
        this.dataSvc = dataSvc;
        this.location = location;
        this.product = {};
    }
    DetailsproductComponent.prototype.ngOnInit = function () {
        var productId = this.route.snapshot.paramMap.get('id');
        this.product = this.dataSvc.getProductById(productId)[0];
    };
    DetailsproductComponent.prototype.onBack = function () {
        this.location.back();
    };
    DetailsproductComponent = __decorate([
        core_1.Component({
            selector: 'app-detailsproduct',
            templateUrl: './detailsproduct.component.html',
            styleUrls: ['./detailsproduct.component.css']
        })
    ], DetailsproductComponent);
    return DetailsproductComponent;
}());
exports.DetailsproductComponent = DetailsproductComponent;
