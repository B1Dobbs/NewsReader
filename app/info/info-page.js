"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var info_view_model_1 = require("./info-view-model");
const frame = require("tns-core-modules/ui/frame");
// Event handler for Page "pageLoaded" event attached in home-page.xml
function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = new info_view_model_1.InfoViewModel();
}

function gotoHome(args) {
    frame.topmost().navigate( 'home/home-page' );
}

function gotoSearch(args) {
    frame.topmost().navigate('search/search-page');
}

function gotoPrefs(args) {
    frame.topmost().navigate( 'preferences/preferences-page' );
}

function gotoInfo(args) {
    frame.topmost().navigate( 'info/info-page' );
}

exports.gotoInfo = gotoInfo;
exports.gotoPrefs = gotoPrefs;
exports.gotoSearch = gotoSearch;
exports.gotoHome = gotoHome;
exports.pageLoaded = pageLoaded;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29udGVudC1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsMkRBQXdEO0FBRXhELHNFQUFzRTtBQUN0RSxTQUFnQixVQUFVLENBQUMsSUFBZTtJQUN0QyxJQUFJLElBQUksR0FBZ0IsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNwQyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUkscUNBQWdCLEVBQUUsQ0FBQztBQUNqRCxDQUFDO0FBSEQsZ0NBR0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudERhdGEgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBTdGFja0xheW91dCB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9zdGFjay1sYXlvdXQnO1xuaW1wb3J0IHsgQ29udGVudFZpZXdNb2RlbCB9IGZyb20gJy4vY29udGVudC12aWV3LW1vZGVsJztcblxuLy8gRXZlbnQgaGFuZGxlciBmb3IgUGFnZSBcInBhZ2VMb2FkZWRcIiBldmVudCBhdHRhY2hlZCBpbiBob21lLXBhZ2UueG1sXG5leHBvcnQgZnVuY3Rpb24gcGFnZUxvYWRlZChhcmdzOiBFdmVudERhdGEpIHtcbiAgICBsZXQgcGFnZSA9IDxTdGFja0xheW91dD5hcmdzLm9iamVjdDtcbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gbmV3IENvbnRlbnRWaWV3TW9kZWwoKTtcbn1cbiJdfQ==