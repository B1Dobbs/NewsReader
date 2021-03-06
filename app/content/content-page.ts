import { EventData } from 'tns-core-modules/data/observable';
import { StackLayout } from 'tns-core-modules/ui/layouts/stack-layout';
import { ContentViewModel } from './content-view-model';

// Event handler for Page "pageLoaded" event attached in home-page.xml
export function pageLoaded(args: EventData) {
    let page = <StackLayout>args.object;
    page.bindingContext = new ContentViewModel();
}
