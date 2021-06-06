import {NgModule} from '@angular/core';
import {CdkTableModule} from '@angular/cdk/table';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatStepperModule} from '@angular/material/stepper';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
    exports : [
        CdkTableModule,
        // MatAutocompleteModule,
        // MatButtonModule,
        // MatButtonToggleModule,
        // MatCardModule,
        // MatCheckboxModule,
        // MatChipsModule,
        // MatDatepickerModule,
        // MatDialogModule,
        // MatDividerModule,
        // MatExpansionModule,
        // MatGridListModule,
        MatIconModule,
        // MatInputModule,
        // MatListModule,
        // MatMenuModule,
        // MatNativeDateModule,
        // MatPaginatorModule,
        // MatProgressBarModule,
        // MatProgressSpinnerModule,
        // MatRadioModule,
        // MatRippleModule,
        // MatSelectModule,
        // MatSidenavModule,
        // MatSliderModule,
        // MatSlideToggleModule,
        // MatSnackBarModule,
        // MatStepperModule,
        // MatSortModule,
        // MatTableModule,
        // MatTabsModule,
        // MatToolbarModule,
        // MatTooltipModule
        //////////////////////////
        MatSidenavModule,
        MatGridListModule,
        MatListModule,
        MatToolbarModule,
        MatDialogModule,
        MatButtonModule,
        MatMenuModule,
        MatStepperModule,
        MatSelectModule,
        MatInputModule,
        MatFormFieldModule
    ],
})
export class MaterialModule {
}