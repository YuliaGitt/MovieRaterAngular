import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MainModule } from './main/main.module';
import { AuthModule } from './auth/auth.module';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';


const routes : Routes = [
  {path : "", pathMatch : "full", redirectTo :'movies'}
] ; 

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    MainModule,
    AuthModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  exports : [RouterModule],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
