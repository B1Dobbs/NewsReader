"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var preferences_view_model_1 = require("./preferences-view-model");
const frame = require("tns-core-modules/ui/frame");
const observableModule = require("tns-core-modules/data/observable");
var application = require("tns-core-modules/application");
var page;
// Event handler for Page "pageLoaded" event attached in home-page.xml
function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = new preferences_view_model_1.PreferencesViewModel();
}

function pageNavigateTo(args) {
    page = args.object;
    page.bindingContext = new preferences_view_model_1.PreferencesViewModel();
}

function gotoHome(args) {
    frame.topmost().navigate( 'home/home-page' );
}

function gotoSearch(args) {
    frame.topmost().navigate('search/search-page');
}

function setSmallText() {
   // preferences_view_model_1.setIsLarge(false);
}

function gotoInfo(args) {
    frame.topmost().navigate( 'info/info-page' );
}

exports.gotoInfo = gotoInfo;
exports.setSmallText = setSmallText;
exports.gotoSearch = gotoSearch;
exports.gotoHome = gotoHome;
exports.pageNavigateTo = pageNavigateTo;
exports.pageLoaded = pageLoaded;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlZmVyZW5jZXMtcGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByZWZlcmVuY2VzLXBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxtRUFBZ0U7QUFFaEUsc0VBQXNFO0FBQ3RFLFNBQWdCLFVBQVUsQ0FBQyxJQUFlO0lBQ3RDLElBQUksSUFBSSxHQUFnQixJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3BDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSw2Q0FBb0IsRUFBRSxDQUFDO0FBQ3JELENBQUM7QUFIRCxnQ0FHQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlJztcbmltcG9ydCB7IFN0YWNrTGF5b3V0IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL3N0YWNrLWxheW91dCc7XG5pbXBvcnQgeyBQcmVmZXJlbmNlc1ZpZXdNb2RlbCB9IGZyb20gJy4vcHJlZmVyZW5jZXMtdmlldy1tb2RlbCc7XG5cbi8vIEV2ZW50IGhhbmRsZXIgZm9yIFBhZ2UgXCJwYWdlTG9hZGVkXCIgZXZlbnQgYXR0YWNoZWQgaW4gaG9tZS1wYWdlLnhtbFxuZXhwb3J0IGZ1bmN0aW9uIHBhZ2VMb2FkZWQoYXJnczogRXZlbnREYXRhKSB7XG4gICAgbGV0IHBhZ2UgPSA8U3RhY2tMYXlvdXQ+YXJncy5vYmplY3Q7XG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IG5ldyBQcmVmZXJlbmNlc1ZpZXdNb2RlbCgpO1xufVxuIl19