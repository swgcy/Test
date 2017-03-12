import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { MyPagePage } from '../pages/my-page/my-page';
import { TestPage } from '../pages/test/test';
import { MyDataProvider } from '../providers/my-data-provider';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    MyPagePage,
    TestPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    MyPagePage,
    TestPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, MyDataProvider]
})
export class AppModule {}
