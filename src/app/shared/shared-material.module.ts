import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule, ToastContainerModule } from 'ngx-toastr';
import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
    declarations: [],
    imports: [
        BrowserAnimationsModule,
        MatToolbarModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatSelectModule,
        MatInputModule,
        MatTableModule,
        MatPaginatorModule,
        ToastrModule.forRoot(),
        ToastContainerModule
    ],
    exports: [
        BrowserAnimationsModule,
        MatToolbarModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatSelectModule,
        MatInputModule,
        MatTableModule,
        MatPaginatorModule,
        ToastrModule,
        ToastContainerModule
    ]
})
export class SharedMaterialModule { }
