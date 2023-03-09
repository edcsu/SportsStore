import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";
import { StoreComponent } from "./store.component";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { CounterDirective } from "./counter.directive";

@NgModule({
    imports: [
        ModelModule, 
        BrowserModule, 
        FormsModule, 
        MatCardModule, 
        MatIconModule, 
        MatBadgeModule, 
        MatChipsModule, 
        MatButtonModule,
        MatFormFieldModule,
        MatSelectModule,
        MatButtonToggleModule
    ],
    declarations: [StoreComponent, CounterDirective],
    exports: [StoreComponent],
    bootstrap: [StoreComponent]

})

export class StoreModule { }