import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";

@NgModule({
    declarations: [ ],
    exports: [
      MatToolbarModule,
      MatButtonModule,
      MatCardModule,
      MatInputModule,
      MatFormFieldModule
    ],
    imports: [
      CommonModule,
      MatToolbarModule,
      MatButtonModule,
      MatCardModule,
      MatInputModule,
      MatFormFieldModule
    ]
})
export class MaterialModule { }
