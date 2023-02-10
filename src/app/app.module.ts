import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DecimalPipe } from "@angular/common";

import { AppComponent } from "./app.component";
import { ExampleDirective } from "./example.directive";
import { StepperComponent } from "./shared/stepper/stepper.component";
import { StepDirective } from "./shared/stepper/step.directive";
import { IconComponent } from "./shared/icon/icon.component";
import { FloatingLabelComponent } from "./shared/input-floating-label/floating-label.component";
import { ValidatorComponent } from "./shared/validator/validator.component";
import { InputCheckComponent } from "./shared/input-check/input-check.component";

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [
    AppComponent,
    ExampleDirective,
    StepperComponent,
    StepDirective,
    IconComponent,
    FloatingLabelComponent,
    ValidatorComponent,
    InputCheckComponent
  ],
  providers: [DecimalPipe],
  bootstrap: [AppComponent]
})
export class AppModule {}
