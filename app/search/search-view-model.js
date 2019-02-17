"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_property_decorator_1 = require("../observable-property-decorator");
var observable_1 = require("tns-core-modules/data/observable");
var platform_1 = require("tns-core-modules/platform");


var SearchViewModel = /** @class */ (function (_super) {
    
    __extends(SearchViewModel, _super);
    function SearchViewModel() {
        var _this = _super.call(this) || this;

        _this.allNews = [];
        var newsArray = [];
        var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=547b2a58efb547219023a0a36e9282cf';
        var req = new Request(url);
        fetch(req).then(function(response) {
             response.json().then( (val) => {
                 _this.allNews = val.articles;
                 page.get("news");
                 console.log(val.articles[0]); 
            })
        })
        
        _this.allNews = [];
        _this.searching = true;

        _this.toggleSearch = function () {
            this.set("searching", !this.get("searching"));
        };

        // filter out news items with no images/title/desc/source name
         _this.news = _this.allNews.filter(function (e) {
             return e.urlToImage && e.title && e.description && e.source.name;
         });

        _this.on(observable_1.Observable.propertyChangeEvent, function (propertyChangeData) {
            if (propertyChangeData.propertyName == "searchPhrase") {
                _this._refilter();
            }
        });
        if (platform_1.isIOS) {
            var keyboard = IQKeyboardManager.sharedManager();
            keyboard.shouldResignOnTouchOutside = true;
        }
        return _this;
    }

    SearchViewModel.prototype._refilter = function () {
        var news = this.allNews;
        var f = this.searchPhrase.trim().toLowerCase();
        this.news = this.allNews.filter(function (e) {
            return (e.urlToImage && e.title && e.description && e.source.name) &&
                (e.description.toLowerCase().includes(f) || e.title.toLowerCase().includes(f));
        });
        this.set("news", this.news.slice(0));
    };

    SearchViewModel.prototype.onSearchSubmit = function (args) {
        this._refilter();
        var searchBar = args.object;
        searchBar.dismissSoftInput();
    };

    SearchViewModel.prototype.onClear = function () {
        this._refilter();
    };

    __decorate([
        observable_property_decorator_1.ObservableProperty(),
        __metadata("design:type", String)
    ], SearchViewModel.prototype, "searchPhrase", void 0);
    return SearchViewModel;
}(observable_1.Observable));
exports.SearchViewModel = SearchViewModel;
