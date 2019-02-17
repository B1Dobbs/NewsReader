"use strict";
/*
In NativeScript, the app.ts file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first module.
*/
Object.defineProperty(exports, "__esModule", { value: true });
var app = require("tns-core-modules/application");
var fresco = require("nativescript-fresco");
var theme = "light_theme";
if (app.android) {
    app.on("launch", function () {
        fresco.initialize();
    });
}

function applyDarkTheme(){
    this.theme = "dark_theme";
}

function getTheme(){
    return theme;
}

exports.getTheme = getTheme;
exports.applyDarkTheme = applyDarkTheme;

app.start({ moduleName: 'home/home-page' });
/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7OztFQUlFOztBQUVGLGtEQUFvRDtBQUNwRCw0Q0FBK0M7QUFFL0MsSUFBSSxHQUFHLENBQUMsT0FBTyxFQUFFO0lBQ2IsR0FBRyxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUU7UUFDYixNQUFNLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDeEIsQ0FBQyxDQUFDLENBQUM7Q0FDTjtBQUVELEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxVQUFVLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDO0FBRTVDOzs7RUFHRSIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5JbiBOYXRpdmVTY3JpcHQsIHRoZSBhcHAudHMgZmlsZSBpcyB0aGUgZW50cnkgcG9pbnQgdG8geW91ciBhcHBsaWNhdGlvbi5cbllvdSBjYW4gdXNlIHRoaXMgZmlsZSB0byBwZXJmb3JtIGFwcC1sZXZlbCBpbml0aWFsaXphdGlvbiwgYnV0IHRoZSBwcmltYXJ5XG5wdXJwb3NlIG9mIHRoZSBmaWxlIGlzIHRvIHBhc3MgY29udHJvbCB0byB0aGUgYXBw4oCZcyBmaXJzdCBtb2R1bGUuXG4qL1xuXG5pbXBvcnQgKiBhcyBhcHAgZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbic7XG5pbXBvcnQgZnJlc2NvID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1mcmVzY29cIik7XG5cbmlmIChhcHAuYW5kcm9pZCkge1xuICAgIGFwcC5vbihcImxhdW5jaFwiLCAoKSA9PiB7XG4gICAgICAgIGZyZXNjby5pbml0aWFsaXplKCk7XG4gICAgfSk7XG59XG5cbmFwcC5zdGFydCh7IG1vZHVsZU5hbWU6ICdob21lL2hvbWUtcGFnZScgfSk7XG5cbi8qXG5EbyBub3QgcGxhY2UgYW55IGNvZGUgYWZ0ZXIgdGhlIGFwcGxpY2F0aW9uIGhhcyBiZWVuIHN0YXJ0ZWQgYXMgaXQgd2lsbCBub3RcbmJlIGV4ZWN1dGVkIG9uIGlPUy5cbiovXG4iXX0=