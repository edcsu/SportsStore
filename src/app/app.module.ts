import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTableModule  } from '@angular/material/table';
import { MatCheckboxModule  } from '@angular/material/checkbox';
import { MatFormFieldModule   } from '@angular/material/form-field';
import { MatInputModule   } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { StoreModule } from "./store/store.module";
import { CartSummaryComponent } from "./store/cartSummary.component";
import { StoreComponent } from "./store/store.component";
import { CheckoutComponent } from "./store/checkout.component"; 
import { CartDetailComponent } from "./store/cartDetail.component"; 
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    CartSummaryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule, 
    MatToolbarModule, 
    MatIconModule, 
    MatBadgeModule, 
    MatTableModule, 
    MatCheckboxModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatSlideToggleModule,
    StoreModule,RouterModule.forRoot([
      { path: "store", component: StoreComponent },
      { path: "cart", component: CartDetailComponent },
      { path: "checkout", component: CheckoutComponent },
      { path: "**", redirectTo: "/store" }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
