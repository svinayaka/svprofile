import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatCardModule} from '@angular/material/card';

const newStyles = [MatMenuModule, MatButtonModule, MatButtonToggleModule, MatProgressSpinnerModule, MatTooltipModule, MatCardModule];

export const bootstrapModules = [NgbModule, newStyles];

