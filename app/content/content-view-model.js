"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_property_decorator_1 = require("../observable-property-decorator");
var observable_1 = require("tns-core-modules/data/observable");
var platform_1 = require("tns-core-modules/platform");
var application = require("tns-core-modules/application");

var ContentViewModel = /** @class */ (function (_super) {
    
    __extends(ContentViewModel, _super);
    function ContentViewModel(args) {
        console.log(args.title);
        var _this = _super.call(this) || this;
        var isLarge = false;
        var isDark = false; 
        this.set("title", args.title);
        this.set("author", args.author);
        //this.set("content", args.content);
        this.set("image", args.image);

        return _this;
    }

    //exports.setIsLarge = setIsLarge;
    return ContentViewModel;
}(observable_1.Observable));

exports.ContentViewModel = ContentViewModel;
