import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaunchComponent } from './launch/launch.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [LaunchComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [LaunchComponent],
})
export class SpacexModule {}
