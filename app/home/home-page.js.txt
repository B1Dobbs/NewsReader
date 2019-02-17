"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var home_view_model_1 = require("./home-view-model");
const frame = require("tns-core-modules/ui/frame");
// Event handler for Page "pageLoaded" event attached in home-page.xml
function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = new home_view_model_1.HomeViewModel();
}

function pageNavigateTo(args) {
    var page = args.object;
    page.bindingContext = new home_view_model_1.HomeViewModel();
}

function gotoSearch(args) {
    frame.topmost().navigate( 'search/search-page' );
}

function gotoPrefs(args) {
    frame.topmost().navigate( 'preferences/preferences-page' );
}

exports.gotoPrefs = gotoPrefs;
exports.gotoSearch = gotoSearch;
exports.pageNavigateTo = pageNavigateTo;
exports.pageLoaded = pageLoaded;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaG9tZS1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEscURBQWtEO0FBRWxELHNFQUFzRTtBQUN0RSxTQUFnQixVQUFVLENBQUMsSUFBZTtJQUN0QyxJQUFJLElBQUksR0FBZ0IsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNwQyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksK0JBQWEsRUFBRSxDQUFDO0FBQzlDLENBQUM7QUFIRCxnQ0FHQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlJztcbmltcG9ydCB7IFN0YWNrTGF5b3V0IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL3N0YWNrLWxheW91dCc7XG5pbXBvcnQgeyBIb21lVmlld01vZGVsIH0gZnJvbSAnLi9ob21lLXZpZXctbW9kZWwnO1xuXG4vLyBFdmVudCBoYW5kbGVyIGZvciBQYWdlIFwicGFnZUxvYWRlZFwiIGV2ZW50IGF0dGFjaGVkIGluIGhvbWUtcGFnZS54bWxcbmV4cG9ydCBmdW5jdGlvbiBwYWdlTG9hZGVkKGFyZ3M6IEV2ZW50RGF0YSkge1xuICAgIGxldCBwYWdlID0gPFN0YWNrTGF5b3V0PmFyZ3Mub2JqZWN0O1xuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBuZXcgSG9tZVZpZXdNb2RlbCgpO1xufVxuIl19