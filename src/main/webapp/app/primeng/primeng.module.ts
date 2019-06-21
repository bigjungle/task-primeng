import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { TaskButtonDemoModule } from './buttons/button/buttondemo.module';
import { TaskSplitbuttonDemoModule } from './buttons/splitbutton/splitbuttondemo.module';

import { TaskDialogDemoModule } from './overlay/dialog/dialogdemo.module';
import { TaskConfirmDialogDemoModule } from './overlay/confirmdialog/confirmdialogdemo.module';
import { TaskLightboxDemoModule } from './overlay/lightbox/lightboxdemo.module';
import { TaskTooltipDemoModule } from './overlay/tooltip/tooltipdemo.module';
import { TaskOverlayPanelDemoModule } from './overlay/overlaypanel/overlaypaneldemo.module';
import { TaskSideBarDemoModule } from './overlay/sidebar/sidebardemo.module';

import { TaskKeyFilterDemoModule } from './inputs/keyfilter/keyfilterdemo.module';
import { TaskInputTextDemoModule } from './inputs/inputtext/inputtextdemo.module';
import { TaskInputTextAreaDemoModule } from './inputs/inputtextarea/inputtextareademo.module';
import { TaskInputGroupDemoModule } from './inputs/inputgroup/inputgroupdemo.module';
import { TaskCalendarDemoModule } from './inputs/calendar/calendardemo.module';
import { TaskCheckboxDemoModule } from './inputs/checkbox/checkboxdemo.module';
import { TaskChipsDemoModule } from './inputs/chips/chipsdemo.module';
import { TaskColorPickerDemoModule } from './inputs/colorpicker/colorpickerdemo.module';
import { TaskInputMaskDemoModule } from './inputs/inputmask/inputmaskdemo.module';
import { TaskInputSwitchDemoModule } from './inputs/inputswitch/inputswitchdemo.module';
import { TaskPasswordIndicatorDemoModule } from './inputs/passwordindicator/passwordindicatordemo.module';
import { TaskAutoCompleteDemoModule } from './inputs/autocomplete/autocompletedemo.module';
import { TaskSliderDemoModule } from './inputs/slider/sliderdemo.module';
import { TaskSpinnerDemoModule } from './inputs/spinner/spinnerdemo.module';
import { TaskRatingDemoModule } from './inputs/rating/ratingdemo.module';
import { TaskSelectDemoModule } from './inputs/select/selectdemo.module';
import { TaskSelectButtonDemoModule } from './inputs/selectbutton/selectbuttondemo.module';
import { TaskListboxDemoModule } from './inputs/listbox/listboxdemo.module';
import { TaskRadioButtonDemoModule } from './inputs/radiobutton/radiobuttondemo.module';
import { TaskToggleButtonDemoModule } from './inputs/togglebutton/togglebuttondemo.module';
import { TaskEditorDemoModule } from './inputs/editor/editordemo.module';

import { TaskMessagesDemoModule } from './messages/messages/messagesdemo.module';
import { TaskToastDemoModule } from './messages/toast/toastdemo.module';
import { TaskGalleriaDemoModule } from './multimedia/galleria/galleriademo.module';

import { TaskFileUploadDemoModule } from './fileupload/fileupload/fileuploaddemo.module';

import { TaskAccordionDemoModule } from './panel/accordion/accordiondemo.module';
import { TaskPanelDemoModule } from './panel/panel/paneldemo.module';
import { TaskTabViewDemoModule } from './panel/tabview/tabviewdemo.module';
import { TaskFieldsetDemoModule } from './panel/fieldset/fieldsetdemo.module';
import { TaskToolbarDemoModule } from './panel/toolbar/toolbardemo.module';
import { TaskScrollPanelDemoModule } from './panel/scrollpanel/scrollpaneldemo.module';
import { TaskCardDemoModule } from './panel/card/carddemo.module';
import { TaskFlexGridDemoModule } from './panel/flexgrid/flexgriddemo.module';

import { TaskTableDemoModule } from './data/table/tabledemo.module';
import { TaskVirtualScrollerDemoModule } from './data/virtualscroller/virtualscrollerdemo.module';
import { TaskPickListDemoModule } from './data/picklist/picklistdemo.module';
import { TaskOrderListDemoModule } from './data/orderlist/orderlistdemo.module';
import { TaskFullCalendarDemoModule } from './data/fullcalendar/fullcalendardemo.module';
import { TaskTreeDemoModule } from './data/tree/treedemo.module';
import { TaskTreeTableDemoModule } from './data/treetable/treetabledemo.module';
import { TaskPaginatorDemoModule } from './data/paginator/paginatordemo.module';
import { TaskGmapDemoModule } from './data/gmap/gmapdemo.module';
import { TaskOrgChartDemoModule } from './data/orgchart/orgchartdemo.module';
import { TaskCarouselDemoModule } from './data/carousel/carouseldemo.module';
import { TaskDataViewDemoModule } from './data/dataview/dataviewdemo.module';

import { TaskBarchartDemoModule } from './charts/barchart/barchartdemo.module';
import { TaskDoughnutchartDemoModule } from './charts/doughnutchart/doughnutchartdemo.module';
import { TaskLinechartDemoModule } from './charts/linechart/linechartdemo.module';
import { TaskPiechartDemoModule } from './charts/piechart/piechartdemo.module';
import { TaskPolarareachartDemoModule } from './charts/polarareachart/polarareachartdemo.module';
import { TaskRadarchartDemoModule } from './charts/radarchart/radarchartdemo.module';

import { TaskDragDropDemoModule } from './dragdrop/dragdrop/dragdropdemo.module';

import { TaskMenuDemoModule } from './menu/menu/menudemo.module';
import { TaskContextMenuDemoModule } from './menu/contextmenu/contextmenudemo.module';
import { TaskPanelMenuDemoModule } from './menu/panelmenu/panelmenudemo.module';
import { TaskStepsDemoModule } from './menu/steps/stepsdemo.module';
import { TaskTieredMenuDemoModule } from './menu/tieredmenu/tieredmenudemo.module';
import { TaskBreadcrumbDemoModule } from './menu/breadcrumb/breadcrumbdemo.module';
import { TaskMegaMenuDemoModule } from './menu/megamenu/megamenudemo.module';
import { TaskMenuBarDemoModule } from './menu/menubar/menubardemo.module';
import { TaskSlideMenuDemoModule } from './menu/slidemenu/slidemenudemo.module';
import { TaskTabMenuDemoModule } from './menu/tabmenu/tabmenudemo.module';

import { TaskBlockUIDemoModule } from './misc/blockui/blockuidemo.module';
import { TaskCaptchaDemoModule } from './misc/captcha/captchademo.module';
import { TaskDeferDemoModule } from './misc/defer/deferdemo.module';
import { TaskInplaceDemoModule } from './misc/inplace/inplacedemo.module';
import { TaskProgressBarDemoModule } from './misc/progressbar/progressbardemo.module';
import { TaskRTLDemoModule } from './misc/rtl/rtldemo.module';
import { TaskTerminalDemoModule } from './misc/terminal/terminaldemo.module';
import { TaskValidationDemoModule } from './misc/validation/validationdemo.module';
import { TaskProgressSpinnerDemoModule } from './misc/progressspinner/progressspinnerdemo.module';

@NgModule({
  imports: [
    TaskMenuDemoModule,
    TaskContextMenuDemoModule,
    TaskPanelMenuDemoModule,
    TaskStepsDemoModule,
    TaskTieredMenuDemoModule,
    TaskBreadcrumbDemoModule,
    TaskMegaMenuDemoModule,
    TaskMenuBarDemoModule,
    TaskSlideMenuDemoModule,
    TaskTabMenuDemoModule,

    TaskBlockUIDemoModule,
    TaskCaptchaDemoModule,
    TaskDeferDemoModule,
    TaskInplaceDemoModule,
    TaskProgressBarDemoModule,
    TaskInputMaskDemoModule,
    TaskRTLDemoModule,
    TaskTerminalDemoModule,
    TaskValidationDemoModule,

    TaskButtonDemoModule,
    TaskSplitbuttonDemoModule,

    TaskInputTextDemoModule,
    TaskInputTextAreaDemoModule,
    TaskInputGroupDemoModule,
    TaskCalendarDemoModule,
    TaskChipsDemoModule,
    TaskInputMaskDemoModule,
    TaskInputSwitchDemoModule,
    TaskPasswordIndicatorDemoModule,
    TaskAutoCompleteDemoModule,
    TaskSliderDemoModule,
    TaskSpinnerDemoModule,
    TaskRatingDemoModule,
    TaskSelectDemoModule,
    TaskSelectButtonDemoModule,
    TaskListboxDemoModule,
    TaskRadioButtonDemoModule,
    TaskToggleButtonDemoModule,
    TaskEditorDemoModule,
    TaskColorPickerDemoModule,
    TaskCheckboxDemoModule,
    TaskKeyFilterDemoModule,

    TaskMessagesDemoModule,
    TaskToastDemoModule,
    TaskGalleriaDemoModule,

    TaskFileUploadDemoModule,

    TaskAccordionDemoModule,
    TaskPanelDemoModule,
    TaskTabViewDemoModule,
    TaskFieldsetDemoModule,
    TaskToolbarDemoModule,
    TaskScrollPanelDemoModule,
    TaskCardDemoModule,
    TaskFlexGridDemoModule,

    TaskBarchartDemoModule,
    TaskDoughnutchartDemoModule,
    TaskLinechartDemoModule,
    TaskPiechartDemoModule,
    TaskPolarareachartDemoModule,
    TaskRadarchartDemoModule,

    TaskDragDropDemoModule,

    TaskDialogDemoModule,
    TaskConfirmDialogDemoModule,
    TaskLightboxDemoModule,
    TaskTooltipDemoModule,
    TaskOverlayPanelDemoModule,
    TaskSideBarDemoModule,

    TaskTableDemoModule,
    TaskDataViewDemoModule,
    TaskVirtualScrollerDemoModule,
    TaskFullCalendarDemoModule,
    TaskOrderListDemoModule,
    TaskPickListDemoModule,
    TaskTreeDemoModule,
    TaskTreeTableDemoModule,
    TaskPaginatorDemoModule,
    TaskOrgChartDemoModule,
    TaskGmapDemoModule,
    TaskCarouselDemoModule,
    TaskProgressSpinnerDemoModule
  ],
  declarations: [],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TaskprimengModule {}
