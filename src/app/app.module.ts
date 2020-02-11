import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ListComponent } from './pages/list/list.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

import { CardComponent } from './components/card/card.component';
import { FieldComponent } from './components/field/field.component';
import { ButtonComponent } from './components/button/button.component';
import { ListTableComponent } from './components/list-table/list-table.component';
import { ListRowComponent } from './components/list-row/list-row.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { MessageModalComponent } from './components/message-modal/message-modal.component';
import { LoadingComponent } from './components/loading/loading.component';
import { LoginBoxComponent } from './components/login-box/login-box.component';
import { RegisterBoxComponent } from './components/register-box/register-box.component';

import { LoginService } from './services/login/login.service';
import { ListService } from './services/list/list.service';
import { MessageModalService } from './services/message-modal/message-modal.service';
import { LoadingService } from './services/loading/loading.service';
import { LoginGuard } from './guards/login/login.guard';
import { LoginInterceptor } from './interceptors/login.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    LoginComponent,
    RegisterComponent,
    CardComponent,
    FieldComponent,
    ButtonComponent,
    ListTableComponent,
    ListRowComponent,
    ListItemComponent,
    MessageModalComponent,
    LoadingComponent,
    LoginBoxComponent,
    RegisterBoxComponent,
  ],
  entryComponents: [
    AppComponent,
    ListComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    LoginService,
    ListService,
    MessageModalService,
    LoadingService,
    LoginGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoginInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
