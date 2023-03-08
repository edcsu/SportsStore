import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";
import { StoreComponent } from "./store.component";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule, MatCardModule, MatIconModule, MatBadgeModule, MatChipsModule],
    declarations: [StoreComponent],
    exports: [StoreComponent],
    bootstrap: [StoreComponent]

})

export class StoreModule { }