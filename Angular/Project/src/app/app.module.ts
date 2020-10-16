import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { NacionalnostComponent } from './Komponente/nacionalnost/nacionalnost.component';
import { TimComponent } from './Komponente/tim/tim.component';
import { LigaComponent } from './Komponente/liga/liga.component';
import { IgracComponent } from './Komponente/igrac/igrac.component';
import { RouterModule, Routes} from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { NacionalnostService } from './Service/nacionalnost.service';
import { HttpClientModule } from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { LigaService } from './Service/liga.service';
import { TimService } from './Service/tim.service';
import { IgracService } from './Service/igrac.service';
import { NacionalnostDijalogComponent } from './Komponente/Dijalog/nacionalnost-dijalog/nacionalnost-dijalog.component';
import { TimDijalogComponent } from './Komponente/Dijalog/tim-dijalog/tim-dijalog.component';
import { IgracDijalogComponent } from './Komponente/Dijalog/igrac-dijalog/igrac-dijalog.component';
import { LigaDijalogComponent } from './Komponente/Dijalog/liga-dijalog/liga-dijalog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {FormsModule} from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';








const Routes = [{path: 'nacionalnost', component: NacionalnostComponent},
                {path: 'tim', component: TimComponent},
                {path: 'liga', component: LigaComponent},
                {path: 'igrac', component: IgracComponent}];


@NgModule({
  declarations: [
    AppComponent,
    NacionalnostComponent,
    TimComponent,
    LigaComponent,
    IgracComponent,
    NacionalnostDijalogComponent,
    TimDijalogComponent,
    IgracDijalogComponent,
    LigaDijalogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatExpansionModule,
    MatListModule,
    MatButtonModule,
    RouterModule.forRoot(Routes),
    MatTableModule,
    MatIconModule,
    HttpClientModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    FormsModule,
    MatSnackBarModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],

  entryComponents:[NacionalnostDijalogComponent, LigaDijalogComponent, IgracDijalogComponent, TimDijalogComponent],
  providers: [NacionalnostService,LigaService, TimService, IgracService],
  bootstrap: [AppComponent]
})
export class AppModule { }
