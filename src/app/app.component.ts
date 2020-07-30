import { Component } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';

import { SearchComponent } from "./search/search.component";
import { FilterComponent } from "./filter/filter.component";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  constructor(private dialog: MatDialog, private bottomSheet: MatBottomSheet) {}

  showSearch(): void {
    const dialogRef = this.dialog.open(SearchComponent, {
          width: '80%'
        });
  }

  showFilter(): void {
    this.bottomSheet.open(FilterComponent);
  }
}
