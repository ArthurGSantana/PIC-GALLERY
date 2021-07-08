import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AppRoutingModule } from '../../../app-routing.module';
import { MaterialModule } from './../../../material-module.module';
import { LoadingModalComponent } from './loadingModal.component';

@NgModule({
    declarations: [
      LoadingModalComponent
    ],
    exports: [
      LoadingModalComponent
    ],
    imports: [
      CommonModule,
      MaterialModule,
      AppRoutingModule
    ]
})
export class LoadingModalModule { }
