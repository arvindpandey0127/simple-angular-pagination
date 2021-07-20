import { IonicModule } from 'ionic-angular';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination.component';

@NgModule({
    declarations: [
        PaginationComponent
    ],

    imports: [
        CommonModule,
        IonicModule,
        CommonModule
    ],

    exports: [
        PaginationComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PaginationModule { }
