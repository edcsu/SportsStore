import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";
import { StoreComponent } from "./store.component";
import { MatCardModule } from "@angular/material/card";

@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule, MatCardModule],
    declarations: [StoreComponent],
    exports: [StoreComponent],
    bootstrap: [StoreComponent]

})

export class StoreModule { }