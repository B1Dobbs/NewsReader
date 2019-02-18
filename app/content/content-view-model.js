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
        this.set("regText", true);
        this.set("largeText", false);
        //this.set("page_theme", "dark_theme");
        // handling Switch checked change
        this.on(observable_1.Observable.propertyChangeEvent, (propertyChangeData) => {
            if(propertyChangeData.propertyName == "firstSwitch"){
                isDark = propertyChangeData.value;
            }
            else if(propertyChangeData.propertyName == "largeText"){
                isLarge = propertyChangeData.value;
                this.set("regText", !propertyChangeData.value);
            }
            else if(propertyChangeData.propertyName == "regText"){
                isLarge = propertyChangeData.value;
                this.set("largeText", !propertyChangeData.value);
            }
            console.log(propertyChangeData.propertyName);

            if(isDark && !isLarge){
                console.log("Setting dark-regular theme.");
                application.setCssFileName("app-dark-regular.css")
                this.set("page_theme", "background-color: black");
                this.set("text", "color: white; font-size: 17;");
            }
            else if(!isDark && !isLarge){
                console.log("Setting light-regular theme.");
                application.setCssFileName("app.css");
                this.set("page_theme", "background-color: white");
                this.set("text", "color: black; font-size: 17;");
            }
            else if(isDark && isLarge){
                console.log("Setting dark-large theme.");
                application.setCssFileName("app-dark-large.css");
                this.set("page_theme", "background-color: black");
                this.set("text", "color: white; font-size: 20;");
            }
            else if(!isDark && isLarge){
                console.log("Setting light-large theme.");
                application.setCssFileName("app-light-large.css");
                this.set("page_theme", "background-color: white");
                this.set("text", "color: black; font-size: 20;");
            }
            
        });

        return _this;
    }

    //exports.setIsLarge = setIsLarge;
    return PreferencesViewModel;
}(observable_1.Observable));

function setIsLarge(isLarge){
    console.log("Setting light-large theme.");
    application.setCssFileName("app-dark-regular.css");
}

exports.PreferencesViewModel = PreferencesViewModel;
exports.setIsLarge = setIsLarge;
