"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var preferences_view_model_1 = require("./preferences-view-model");
const frame = require("tns-core-modules/ui/frame");
const observableModule = require("tns-core-modules/data/observable");
var application = require("tns-core-modules/application");
var page;
// Event handler for Page "pageLoaded" event attached in home-page.xml
function pageLoaded(args) {
    page = args.object;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlZmVyZW5jZXMtcGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByZWZlcmVuY2VzLXBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSx5REFBc0Q7QUFFdEQsc0VBQXNFO0FBQ3RFLFNBQWdCLFVBQVUsQ0FBQyxJQUFlO0lBQ3RDLElBQUksSUFBSSxHQUFnQixJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3BDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxtQ0FBZSxFQUFFLENBQUM7QUFDaEQsQ0FBQztBQUhELGdDQUdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUnO1xuaW1wb3J0IHsgU3RhY2tMYXlvdXQgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvc3RhY2stbGF5b3V0JztcbmltcG9ydCB7IFNlYXJjaFZpZXdNb2RlbCB9IGZyb20gJy4vc2VhcmNoLXZpZXctbW9kZWwnO1xuXG4vLyBFdmVudCBoYW5kbGVyIGZvciBQYWdlIFwicGFnZUxvYWRlZFwiIGV2ZW50IGF0dGFjaGVkIGluIGhvbWUtcGFnZS54bWxcbmV4cG9ydCBmdW5jdGlvbiBwYWdlTG9hZGVkKGFyZ3M6IEV2ZW50RGF0YSkge1xuICAgIGxldCBwYWdlID0gPFN0YWNrTGF5b3V0PmFyZ3Mub2JqZWN0O1xuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBuZXcgU2VhcmNoVmlld01vZGVsKCk7XG59XG4iXX0=