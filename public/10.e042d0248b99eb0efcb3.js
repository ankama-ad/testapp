(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{D1jf:function(l,n,t){"use strict";t.r(n),t.d(n,"ReportsModuleNgFactory",function(){return D});var u=t("8Y7J"),o=function(){return function(){}}(),r=t("mM23"),e=t("pMnS"),i=t("iInd"),p=function(){function l(){}return l.prototype.ngOnInit=function(){},l}(),c=u.xb({encapsulation:0,styles:[[""]],data:{}});function s(l){return u.bc(0,[(l()(),u.zb(0,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),u.yb(1,212992,null,0,i.q,[i.b,u.R,u.j,[8,null],u.h],null,null)],function(l,n){l(n,1,0)},null)}function a(l){return u.bc(0,[(l()(),u.zb(0,0,null,null,1,"app-reports",[],null,null,null,s,c)),u.yb(1,114688,null,0,p,[],null,null)],function(l,n){l(n,1,0)},null)}var b=u.vb("app-reports",p,a,{},{},[]),d=t("SVse"),f=t("IheW"),h=function(){function l(l){this.http=l,this.baseUri="https://rcoedev.azurewebsites.net/reports/",this.headers=new f.g({"Content-Type":"application/json","Access-Control-Allow-Origin":"*"})}return l.prototype.getReportss=function(){return this.http.get(this.baseUri+"getReports")},l.\u0275prov=u.cc({factory:function(){return new l(u.dc(f.c))},token:l,providedIn:"root"}),l}(),y=function(){function l(l,n){this.reportService=l,this.router=n,this.reports=[]}return l.prototype.ngOnInit=function(){this.getReprots()},l.prototype.getReprots=function(){var l=this;this.reportService.getReportss().subscribe(function(n){n&&n.length&&(l.reports=n)})},l.prototype.loadReport=function(l){this.router.navigate(["/reports/details",l])},l}(),g=u.xb({encapsulation:0,styles:[[".cursor-pointer[_ngcontent-%COMP%]{cursor:pointer}.cursor-pointer[_ngcontent-%COMP%]:hover{background-color:#b0aeae}"]],data:{}});function z(l){return u.bc(0,[(l()(),u.zb(0,0,null,null,6,"tr",[["class","cursor-pointer"]],null,[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.loadReport(l.context.$implicit.Id)&&u),u},null,null)),(l()(),u.zb(1,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),u.Yb(2,null,["",""])),(l()(),u.zb(3,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),u.Yb(4,null,["",""])),(l()(),u.zb(5,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),u.Yb(6,null,["",""]))],null,function(l,n){l(n,2,0,n.context.$implicit.Id),l(n,4,0,n.context.$implicit.ReportName),l(n,6,0,n.context.$implicit.ReportDescription)})}function v(l){return u.bc(0,[(l()(),u.zb(0,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),u.Yb(-1,null,["Reports List!"])),(l()(),u.zb(2,0,null,null,11,"table",[["class","table table-striped"]],null,null,null,null,null)),(l()(),u.zb(3,0,null,null,7,"thead",[],null,null,null,null,null)),(l()(),u.zb(4,0,null,null,6,"tr",[],null,null,null,null,null)),(l()(),u.zb(5,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),u.Yb(-1,null,["Id"])),(l()(),u.zb(7,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),u.Yb(-1,null,["Name"])),(l()(),u.zb(9,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),u.Yb(-1,null,["Description"])),(l()(),u.zb(11,0,null,null,2,"tbody",[],null,null,null,null,null)),(l()(),u.ib(16777216,null,null,1,null,z)),u.yb(13,278528,null,0,d.j,[u.R,u.N,u.t],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,13,0,n.component.reports)},null)}function M(l){return u.bc(0,[(l()(),u.zb(0,0,null,null,1,"app-reports-list",[],null,null,null,v,g)),u.yb(1,114688,null,0,y,[h,i.l],null,null)],function(l,n){l(n,1,0)},null)}var m=u.vb("app-reports-list",y,M,{},{},[]),I=t("Mg5b"),R=t("ZhN8"),w=function(){function l(l){this.route=l,this.reportId=0}return l.prototype.ngOnInit=function(){this.reportId=this.route.snapshot.paramMap.get("id")},l}(),O=u.xb({encapsulation:0,styles:[[""]],data:{}});function Y(l){return u.bc(0,[(l()(),u.zb(0,0,null,null,2,"div",[["class","row"]],null,null,null,null,null)),(l()(),u.zb(1,0,null,null,1,"app-embedded-report",[["class","col-12"]],null,null,null,I.b,I.a)),u.yb(2,114688,null,0,R.a,[f.c],{reportId:[0,"reportId"]},null)],function(l,n){l(n,2,0,n.component.reportId)},null)}function j(l){return u.bc(0,[(l()(),u.zb(0,0,null,null,1,"app-display-report",[],null,null,null,Y,O)),u.yb(1,114688,null,0,w,[i.a],null,null)],function(l,n){l(n,1,0)},null)}var x=u.vb("app-display-report",w,j,{},{},[]),k=t("KZX/"),N={title:"Reports"},C={title:"List"},S={title:"details"},$=function(){return function(){}}(),D=u.wb(o,[],function(l){return u.Lb([u.Mb(512,u.j,u.ab,[[8,[r.a,e.a,b,m,x]],[3,u.j],u.y]),u.Mb(4608,d.m,d.l,[u.v]),u.Mb(1073742336,d.c,d.c,[]),u.Mb(1073742336,k.a,k.a,[]),u.Mb(1073742336,i.p,i.p,[[2,i.u],[2,i.l]]),u.Mb(1073742336,$,$,[]),u.Mb(1073742336,o,o,[]),u.Mb(1024,i.j,function(){return[[{path:"",data:N,component:p,children:[{path:"list",data:C,component:y},{path:"details/:id",data:S,component:w},{path:"",redirectTo:"list",pathMatch:"full"}]},{path:"",redirectTo:"/reports",pathMatch:"full"}]]},[])])})}}]);