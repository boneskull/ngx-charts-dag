/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */


import * as import0 from '@angular/core';
import * as import1 from '../../build/ngx-charts-dag.module';
import * as import2 from '@angular/common';
import * as import3 from '@swimlane/ngx-charts/release/common/axes/axes.module';
import * as import4 from '@swimlane/ngx-charts/release/common/tooltip/tooltip.module';
import * as import5 from '@swimlane/ngx-charts/release/common/chart-common.module';
import * as import6 from '../../build/directed-graph/directed-graph.module';
import * as import7 from '@swimlane/ngx-charts/release/common/tooltip/injection.service';
import * as import8 from '@swimlane/ngx-charts/release/common/tooltip/tooltip.service';
import * as import9 from '../node_modules/@swimlane/ngx-charts/release/common/tooltip/tooltip.component.ngfactory';
class NgxChartsDagModuleInjector extends import0.ɵNgModuleInjector<import1.NgxChartsDagModule> {
  _CommonModule_0:import2.CommonModule;
  _AxesModule_1:import3.AxesModule;
  _TooltipModule_2:import4.TooltipModule;
  _ChartCommonModule_3:import5.ChartCommonModule;
  _DirectedGraphModule_4:import6.DirectedGraphModule;
  _NgxChartsDagModule_5:import1.NgxChartsDagModule;
  __NgLocalization_6:import2.NgLocaleLocalization;
  __InjectionService_7:import7.InjectionService;
  __TooltipService_8:import8.TooltipService;
  __LocationStrategy_9:import2.PathLocationStrategy;
  __Location_10:import2.Location;
  constructor(parent:import0.Injector) {
    super(parent,[import9.TooltipContentComponentNgFactory],([] as any[]));
  }
  get _NgLocalization_6():import2.NgLocaleLocalization {
    if ((this.__NgLocalization_6 == null)) { (this.__NgLocalization_6 = new import2.NgLocaleLocalization(this.parent.get(import0.LOCALE_ID))); }
    return this.__NgLocalization_6;
  }
  get _InjectionService_7():import7.InjectionService {
    if ((this.__InjectionService_7 == null)) { (this.__InjectionService_7 = new import7.InjectionService(this.parent.get(import0.ApplicationRef),this.componentFactoryResolver,this)); }
    return this.__InjectionService_7;
  }
  get _TooltipService_8():import8.TooltipService {
    if ((this.__TooltipService_8 == null)) { (this.__TooltipService_8 = new import8.TooltipService(this._InjectionService_7)); }
    return this.__TooltipService_8;
  }
  get _LocationStrategy_9():import2.PathLocationStrategy {
    if ((this.__LocationStrategy_9 == null)) { (this.__LocationStrategy_9 = new import2.PathLocationStrategy(this.parent.get(import2.PlatformLocation),this.parent.get(import2.APP_BASE_HREF,(null as any)))); }
    return this.__LocationStrategy_9;
  }
  get _Location_10():import2.Location {
    if ((this.__Location_10 == null)) { (this.__Location_10 = new import2.Location(this._LocationStrategy_9)); }
    return this.__Location_10;
  }
  createInternal():import1.NgxChartsDagModule {
    this._CommonModule_0 = new import2.CommonModule();
    this._AxesModule_1 = new import3.AxesModule();
    this._TooltipModule_2 = new import4.TooltipModule();
    this._ChartCommonModule_3 = new import5.ChartCommonModule();
    this._DirectedGraphModule_4 = new import6.DirectedGraphModule();
    this._NgxChartsDagModule_5 = new import1.NgxChartsDagModule();
    return this._NgxChartsDagModule_5;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.CommonModule)) { return this._CommonModule_0; }
    if ((token === import3.AxesModule)) { return this._AxesModule_1; }
    if ((token === import4.TooltipModule)) { return this._TooltipModule_2; }
    if ((token === import5.ChartCommonModule)) { return this._ChartCommonModule_3; }
    if ((token === import6.DirectedGraphModule)) { return this._DirectedGraphModule_4; }
    if ((token === import1.NgxChartsDagModule)) { return this._NgxChartsDagModule_5; }
    if ((token === import2.NgLocalization)) { return this._NgLocalization_6; }
    if ((token === import7.InjectionService)) { return this._InjectionService_7; }
    if ((token === import8.TooltipService)) { return this._TooltipService_8; }
    if ((token === import2.LocationStrategy)) { return this._LocationStrategy_9; }
    if ((token === import2.Location)) { return this._Location_10; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const NgxChartsDagModuleNgFactory:import0.NgModuleFactory<import1.NgxChartsDagModule> = new import0.NgModuleFactory<any>(NgxChartsDagModuleInjector,import1.NgxChartsDagModule);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1ZvbHVtZXMvYWxpZW4vZm9ya2VkL25neC1jaGFydHMtZGFnL2J1aWxkL25neC1jaGFydHMtZGFnLm1vZHVsZS5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9Wb2x1bWVzL2FsaWVuL2ZvcmtlZC9uZ3gtY2hhcnRzLWRhZy9idWlsZC9uZ3gtY2hhcnRzLWRhZy5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiICJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
