import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule, NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule
} from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';

@NgModule({
  imports: [
  CommonModule,
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule, NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
  ThemeModule,
  ProfileRoutingModule,
  ],
  declarations: [
   ProfileComponent,
   CreateProfileComponent,
  ],

})
export class ProfileModule { }
