/*
In NativeScript, the app.ts file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first module.
*/

import * as app from 'tns-core-modules/application';
import fresco = require("nativescript-fresco");

if (app.android) {
    app.on("launch", () => {
        fresco.initialize();
    });
}

app.start({ moduleName: 'home/home-page' });

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
