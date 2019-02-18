"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_property_decorator_1 = require("../observable-property-decorator");
var observable_1 = require("tns-core-modules/data/observable");
var platform_1 = require("tns-core-modules/platform");
var application = require("tns-core-modules/application");

var InfoViewModel = /** @class */ (function (_super) {
    
    __extends(InfoViewModel, _super);
    function InfoViewModel(args) {
        var _this = _super.call(this) || this;

        return _this;
    }

    //exports.setIsLarge = setIsLarge;
    return InfoViewModel;
}(observable_1.Observable));

exports.InfoViewModel = InfoViewModel;
