import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TaskSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [TaskSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [TaskSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TaskSharedModule {
  static forRoot() {
    return {
      ngModule: TaskSharedModule
    };
  }
}
