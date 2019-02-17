"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_property_decorator_1 = require("../observable-property-decorator");
var observable_1 = require("tns-core-modules/data/observable");
var platform_1 = require("tns-core-modules/platform");
var application = require("tns-core-modules/application");

var PreferencesViewModel = /** @class */ (function (_super) {
    
    __extends(PreferencesViewModel, _super);
    function PreferencesViewModel() {
        var _this = _super.call(this) || this;
        var isLarge = false;
        var isDark = false; 
        this.set("firstSwitch", false);
        //this.set("page_theme", "dark_theme");
        // handling Switch checked change
        this.on(observable_1.Observable.propertyChangeEvent, (propertyChangeData) => {
            if(propertyChangeData.propertyName == "firstSwitch"){
                isDark = propertyChangeData.value;
            }
            else if(propertyChangeData.propertyName == "largeText"){
                isLarge = true;
                this.set("largeTextButton", "background-color: gray");
                this.set("smallTextButton", "background-color: white");
                application.setCssFileName("app-dark-large.css");
                 this.set("page_theme", "background-color: black");
                 this.set("text", "color: white; size: 20;");
            }
            else {
                isLarge = false;
                this.set("largeTextButton", false);
                this.set("smallTextButton", "background-color: gray");
                this.set("largeTextButton", "background-color: white");
            }

            // if(isDark && !isLarge){
            //     application.setCssFileName("app-dark-regular.css")
            //     this.set("page_theme", "background-color: black");
            //     this.set("text", "color: white; size: 12;");
            // }
            // else if(!isDark && !isLarge){
            //     application.setCssFileName("app.css");
            //     this.set("page_theme", "background-color: white");
            //     this.set("text", "color: black; size: 12;");
            // }
            // else if(isDark && isLarge){
            //     application.setCssFileName("app-dark-large.css");
            //     this.set("page_theme", "background-color: black");
            //     this.set("text", "color: white; size: 20;");
            // }
            // else if(!isDark && isLarge){
            //     application.setCssFileName("app-light-large.css");
            //     this.set("page_theme", "background-color: white");
            //     this.set("text", "color: black; size: 20;");
            // }
            
        });

        return _this;
    }

    
    return PreferencesViewModel;
}(observable_1.Observable));
exports.PreferencesViewModel = PreferencesViewModel;
