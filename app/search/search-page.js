"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var search_view_model_1 = require("./search-view-model");
const frame = require("tns-core-modules/ui/frame");
// Event handler for Page "pageLoaded" event attached in home-page.xml
function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = new search_view_model_1.SearchViewModel();
}

function pageNavigateTo(args) {
    var page = args.object;
    page.bindingContext = new home_view_model_1.HomeViewModel();
}

function gotoHome(args) {
    frame.topmost().navigate( 'home/home-page' );
}

function gotoPrefs(args) {
    frame.topmost().navigate( 'preferences/preferences-page' );
}

function gotoInfo(args) {
    frame.topmost().navigate( 'info/info-page' );
}

exports.gotoInfo = gotoInfo;
exports.gotoPrefs = gotoPrefs;
exports.gotoHome = gotoHome;
exports.pageNavigateTo = pageNavigateTo;
exports.pageLoaded = pageLoaded;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZWFyY2gtcGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLHlEQUFzRDtBQUV0RCxzRUFBc0U7QUFDdEUsU0FBZ0IsVUFBVSxDQUFDLElBQWU7SUFDdEMsSUFBSSxJQUFJLEdBQWdCLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDcEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLG1DQUFlLEVBQUUsQ0FBQztBQUNoRCxDQUFDO0FBSEQsZ0NBR0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudERhdGEgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBTdGFja0xheW91dCB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9zdGFjay1sYXlvdXQnO1xuaW1wb3J0IHsgU2VhcmNoVmlld01vZGVsIH0gZnJvbSAnLi9zZWFyY2gtdmlldy1tb2RlbCc7XG5cbi8vIEV2ZW50IGhhbmRsZXIgZm9yIFBhZ2UgXCJwYWdlTG9hZGVkXCIgZXZlbnQgYXR0YWNoZWQgaW4gaG9tZS1wYWdlLnhtbFxuZXhwb3J0IGZ1bmN0aW9uIHBhZ2VMb2FkZWQoYXJnczogRXZlbnREYXRhKSB7XG4gICAgbGV0IHBhZ2UgPSA8U3RhY2tMYXlvdXQ+YXJncy5vYmplY3Q7XG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IG5ldyBTZWFyY2hWaWV3TW9kZWwoKTtcbn1cbiJdfQ==