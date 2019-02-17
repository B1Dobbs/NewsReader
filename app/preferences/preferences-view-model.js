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

        this.set("firstSwitch", false);
        //this.set("page_theme", "dark_theme");
        // handling Switch checked change
        this.on(observable_1.Observable.propertyChangeEvent, (propertyChangeData) => {
            if(propertyChangeData.propertyName == "firstSwitch"){
                if(propertyChangeData.value){
                    //this.app.applyDarkTheme();
                    //var theme_string = this.app.getTheme();
                    application.setCssFileName("app-dark.css")
                    this.set("page_theme", "dark_theme");
                    this.set("text", "text_light");
                }
                else{
                    application.setCssFileName("app.css");
                    this.set("page_theme", "light_theme");
                    this.set("text", "text_dark");
                }
            }
            
        });

        return _this;
    }

    
    return PreferencesViewModel;
}(observable_1.Observable));

exports.PreferencesViewModel = PreferencesViewModel;
