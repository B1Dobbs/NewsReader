"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ObservableProperty() {
    return function (target, propertyKey) {
        Object.defineProperty(target, propertyKey, {
            get: function () {
                return this["_" + propertyKey];
            },
            set: function (value) {
                if (this["_" + propertyKey] === value) {
                    return;
                }
                this["_" + propertyKey] = value;
                this.notifyPropertyChange(propertyKey, value);
            },
            enumerable: true,
            configurable: true
        });
    };
}
exports.ObservableProperty = ObservableProperty;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JzZXJ2YWJsZS1wcm9wZXJ0eS1kZWNvcmF0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJvYnNlcnZhYmxlLXByb3BlcnR5LWRlY29yYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQWNBLFNBQWdCLGtCQUFrQjtJQUM5QixPQUFPLFVBQUMsTUFBa0IsRUFBRSxXQUFtQjtRQUMzQyxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxXQUFXLEVBQUU7WUFDdkMsR0FBRztnQkFDQyxPQUFPLElBQUksQ0FBQyxHQUFHLEdBQUcsV0FBVyxDQUFDLENBQUM7WUFDbkMsQ0FBQztZQUNELEdBQUcsWUFBQyxLQUFLO2dCQUNMLElBQUksSUFBSSxDQUFDLEdBQUcsR0FBRyxXQUFXLENBQUMsS0FBSyxLQUFLLEVBQUU7b0JBQ25DLE9BQU87aUJBQ1Y7Z0JBRUQsSUFBSSxDQUFDLEdBQUcsR0FBRyxXQUFXLENBQUMsR0FBRyxLQUFLLENBQUM7Z0JBQ2hDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDbEQsQ0FBQztZQUNELFVBQVUsRUFBRSxJQUFJO1lBQ2hCLFlBQVksRUFBRSxJQUFJO1NBQ3JCLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQztBQUNOLENBQUM7QUFsQkQsZ0RBa0JDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG5UaGlzIGZpbGUgZGVmaW5lcyBhIGRlY29yYXRvciB5b3UgY2FuIHVzZSB0byBlbmFibGUgdHdvLXdheVxuYmluZGluZyBvbiB2aWV3LW1vZGVsIHByb3BlcnRpZXMuXG5cbkZvciBleGFtcGxlOlxuXG5pbXBvcnQgeyBPYnNlcnZhYmxlUHJvcGVydHkgfSBmcm9tIFwiLi4vb2JzZXJ2YWJsZS1wcm9wZXJ0eS1kZWNvcmF0b3JcIjtcblxuQE9ic2VydmFibGVQcm9wZXJ0eSgpIG15UHJvcGVydHk6IGJvb2xlYW4gPSB0cnVlO1xuXG5SZWFkIG1vcmUgYXQgaHR0cHM6Ly93d3cubmF0aXZlc2NyaXB0Lm9yZy9ibG9nL25hdGl2ZXNjcmlwdC1vYnNlcnZhYmxlLW1hZ2ljLXN0cmluZy1wcm9wZXJ0eS1uYW1lLWJlLWdvbmVcbioqL1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlJztcblxuZXhwb3J0IGZ1bmN0aW9uIE9ic2VydmFibGVQcm9wZXJ0eSgpIHtcbiAgICByZXR1cm4gKHRhcmdldDogT2JzZXJ2YWJsZSwgcHJvcGVydHlLZXk6IHN0cmluZykgPT4ge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eUtleSwge1xuICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzW1wiX1wiICsgcHJvcGVydHlLZXldO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldCh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzW1wiX1wiICsgcHJvcGVydHlLZXldID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpc1tcIl9cIiArIHByb3BlcnR5S2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UocHJvcGVydHlLZXksIHZhbHVlKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH07XG59XG4iXX0=