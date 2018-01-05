webpackJsonp([4],{JPCu:function(n,s){n.exports='<form [formGroup]="form" (ngSubmit)="submit()">\n  <formly-form [model]="model" [fields]="fields" [options]="options" [form]="form">\n    <button type="submit" class="btn btn-primary submit-button">Submit</button>\n  </formly-form>\n</form>\n'},P2J4:function(n,s){n.exports='<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Component <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FieldType <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/core\'</span><span class="token punctuation" >;</span>\n\n@<span class="token function" >Component</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  selector<span class="token punctuation" >:</span> <span class="token string" >\'formly-field-button\'</span><span class="token punctuation" >,</span>\n  template<span class="token punctuation" >:</span> `\n    <span class="token operator" >&lt;</span>div<span class="token operator" >></span>\n      <span class="token operator" >&lt;</span>button <span class="token punctuation" >[</span>type<span class="token punctuation" >]</span><span class="token operator" >=</span><span class="token string" >"to.type"</span> <span class="token punctuation" >[</span>ngClass<span class="token punctuation" >]</span><span class="token operator" >=</span><span class="token string" >"\'btn btn-\' + to.btnType"</span> <span class="token punctuation" >(</span>click<span class="token punctuation" >)</span><span class="token operator" >=</span><span class="token string" >"onClick($event)"</span><span class="token operator" >></span>\n        <span class="token punctuation" >{</span><span class="token punctuation" >{</span> to<span class="token punctuation" >.</span>text <span class="token punctuation" >}</span><span class="token punctuation" >}</span>\n      <span class="token operator" >&lt;</span><span class="token operator" >/</span>button<span class="token operator" >></span>\n    <span class="token operator" >&lt;</span><span class="token operator" >/</span>div<span class="token operator" >></span>\n  `<span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span>\n<span class="token keyword" >export</span> <span class="token keyword" >class</span> <span class="token class-name" >FormlyFieldButton</span> <span class="token keyword" >extends</span> <span class="token class-name" >FieldType</span> <span class="token punctuation" >{</span>\n  <span class="token function" >onClick</span><span class="token punctuation" >(</span>$event<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>to<span class="token punctuation" >.</span>onClick<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >if</span> <span class="token punctuation" >(</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>to<span class="token punctuation" >.</span>onClick<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n      <span class="token keyword" >this</span><span class="token punctuation" >.</span>to<span class="token punctuation" >.</span><span class="token function" >onClick</span><span class="token punctuation" >(</span>$event<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token punctuation" >}</span>\n  <span class="token punctuation" >}</span>\n<span class="token punctuation" >}</span>\n'},lumk:function(n,s){n.exports='<span class="token keyword" >import</span> <span class="token punctuation" >{</span> NgModule <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> CommonModule <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/common\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> ReactiveFormsModule <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/forms\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormlyModule <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormlyBootstrapModule <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/bootstrap\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> AppComponent <span class="token punctuation" >}</span> from <span class="token string" >\'./app.component\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormlyFieldButton <span class="token punctuation" >}</span> from <span class="token string" >\'./button-type.component\'</span><span class="token punctuation" >;</span>\n\n@<span class="token function" >NgModule</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  imports<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n    CommonModule<span class="token punctuation" >,</span>\n    ReactiveFormsModule<span class="token punctuation" >,</span>\n    FormlyBootstrapModule<span class="token punctuation" >,</span>\n    FormlyModule<span class="token punctuation" >.</span><span class="token function" >forRoot</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n      types<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n        <span class="token punctuation" >{</span>\n          name<span class="token punctuation" >:</span> <span class="token string" >\'button\'</span><span class="token punctuation" >,</span>\n          component<span class="token punctuation" >:</span> FormlyFieldButton<span class="token punctuation" >,</span>\n          wrappers<span class="token punctuation" >:</span> <span class="token punctuation" >[</span><span class="token string" >\'fieldset\'</span><span class="token punctuation" >,</span> <span class="token string" >\'label\'</span><span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n          defaultOptions<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n            templateOptions<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n              btnType<span class="token punctuation" >:</span> <span class="token string" >\'default\'</span><span class="token punctuation" >,</span>\n              type<span class="token punctuation" >:</span> <span class="token string" >\'button\'</span><span class="token punctuation" >,</span>\n            <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n          <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n        <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n  declarations<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n    AppComponent<span class="token punctuation" >,</span>\n    FormlyFieldButton<span class="token punctuation" >,</span>\n  <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span>\n<span class="token keyword" >export</span> <span class="token keyword" >class</span> <span class="token class-name" >AppModule</span> <span class="token punctuation" >{</span> <span class="token punctuation" >}</span>\n'},rDv8:function(n,s){n.exports='<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>form</span> <span class="token attr-name" >[formGroup]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>form<span class="token punctuation" >"</span></span> <span class="token attr-name" >(ngSubmit)</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>submit()<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>formly-form</span> <span class="token attr-name" >[model]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>model<span class="token punctuation" >"</span></span> <span class="token attr-name" >[fields]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>fields<span class="token punctuation" >"</span></span> <span class="token attr-name" >[options]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>options<span class="token punctuation" >"</span></span> <span class="token attr-name" >[form]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>form<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>submit<span class="token punctuation" >"</span></span> <span class="token attr-name" >class</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>btn btn-primary submit-button<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>Submit<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>button</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>formly-form</span><span class="token punctuation" >></span></span>\n<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>form</span><span class="token punctuation" >></span></span>\n'},s954:function(n,s){n.exports='<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Component <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormGroup <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/forms\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormlyFormOptions<span class="token punctuation" >,</span> FormlyFieldConfig <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/core\'</span><span class="token punctuation" >;</span>\n\n@<span class="token function" >Component</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  selector<span class="token punctuation" >:</span> <span class="token string" >\'formly-app-example\'</span><span class="token punctuation" >,</span>\n  templateUrl<span class="token punctuation" >:</span> <span class="token string" >\'./app.component.html\'</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span>\n<span class="token keyword" >export</span> <span class="token keyword" >class</span> <span class="token class-name" >AppComponent</span> <span class="token punctuation" >{</span>\n  form <span class="token operator" >=</span> <span class="token keyword" >new</span> <span class="token class-name" >FormGroup</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  options<span class="token punctuation" >:</span> FormlyFormOptions <span class="token operator" >=</span> <span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  model <span class="token operator" >=</span> <span class="token punctuation" >{</span> someInput<span class="token punctuation" >:</span> <span class="token string" >\'\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n\n  fields<span class="token punctuation" >:</span> FormlyFieldConfig<span class="token punctuation" >[</span><span class="token punctuation" >]</span> <span class="token operator" >=</span> <span class="token punctuation" >[</span>\n    <span class="token punctuation" >{</span>\n      type<span class="token punctuation" >:</span> <span class="token string" >\'button\'</span><span class="token punctuation" >,</span>\n      templateOptions<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n        text<span class="token punctuation" >:</span> <span class="token string" >\'With Function\'</span><span class="token punctuation" >,</span>\n        onClick<span class="token punctuation" >:</span> <span class="token punctuation" >(</span>$event<span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token function" >alert</span><span class="token punctuation" >(</span><span class="token string" >\'You clicked me!\'</span><span class="token punctuation" >)</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >{</span>\n      type<span class="token punctuation" >:</span> <span class="token string" >\'button\'</span><span class="token punctuation" >,</span>\n      templateOptions<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n        label<span class="token punctuation" >:</span> <span class="token string" >\'Click this guy\'</span><span class="token punctuation" >,</span>\n        text<span class="token punctuation" >:</span> <span class="token string" >\'JSON Only\'</span><span class="token punctuation" >,</span>\n        btnType<span class="token punctuation" >:</span> <span class="token string" >\'info\'</span><span class="token punctuation" >,</span>\n        onClick<span class="token punctuation" >:</span> <span class="token punctuation" >(</span>$event<span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >{</span>\n          <span class="token keyword" >this</span><span class="token punctuation" >.</span>form<span class="token punctuation" >.</span><span class="token keyword" >get</span><span class="token punctuation" >(</span><span class="token string" >\'someInput\'</span><span class="token punctuation" >)</span><span class="token punctuation" >.</span><span class="token function" >setValue</span><span class="token punctuation" >(</span><span class="token string" >\'clicked!\'</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n        <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n        description<span class="token punctuation" >:</span> <span class="token string" >\'These can have labels and stuff too if you want....\'</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >{</span>\n      key<span class="token punctuation" >:</span> <span class="token string" >\'someInput\'</span><span class="token punctuation" >,</span>\n      type<span class="token punctuation" >:</span> <span class="token string" >\'input\'</span><span class="token punctuation" >,</span>\n      templateOptions<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n        label<span class="token punctuation" >:</span> <span class="token string" >\'Some Input\'</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n\n  <span class="token function" >submit</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >if</span> <span class="token punctuation" >(</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>form<span class="token punctuation" >.</span>valid<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n      <span class="token function" >alert</span><span class="token punctuation" >(</span>JSON<span class="token punctuation" >.</span><span class="token function" >stringify</span><span class="token punctuation" >(</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>model<span class="token punctuation" >)</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token punctuation" >}</span>\n  <span class="token punctuation" >}</span>\n<span class="token punctuation" >}</span>\n'},xwYZ:function(n,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var t=a("6Xbx"),p=a("/oeL"),o=a("BkNc"),c=a("Xa16"),e=a("qbdv"),u=a("bm2B"),l=a("JPbF"),i=a("sAA7"),k=function(){function n(){var n=this;this.form=new u.d({}),this.options={},this.model={someInput:""},this.fields=[{type:"button",templateOptions:{text:"With Function",onClick:function(n){return alert("You clicked me!")}}},{type:"button",templateOptions:{label:"Click this guy",text:"JSON Only",btnType:"info",onClick:function(s){n.form.get("someInput").setValue("clicked!")},description:"These can have labels and stuff too if you want...."}},{key:"someInput",type:"input",templateOptions:{label:"Some Input"}}]}return n.prototype.submit=function(){this.form.valid&&alert(JSON.stringify(this.model))},n=t.b([Object(p.o)({selector:"formly-app-example",template:a("JPCu")})],n)}(),r=function(n){function s(){return null!==n&&n.apply(this,arguments)||this}return t.c(s,n),s.prototype.onClick=function(n){console.log(this.to.onClick),this.to.onClick&&this.to.onClick(n)},s=t.b([Object(p.o)({selector:"formly-field-button",template:'\n    <div>\n      <button [type]="to.type" [ngClass]="\'btn btn-\' + to.btnType" (click)="onClick($event)">\n        {{ to.text }}\n      </button>\n    </div>\n  '})],s)}(l.a),m=function(){function n(){}return n=t.b([Object(p.M)({imports:[e.b,u.g,i.a,l.d.forRoot({types:[{name:"button",component:r,wrappers:["fieldset","label"],defaultOptions:{templateOptions:{btnType:"default",type:"button"}}}]})],declarations:[k,r]})],n)}();a.d(s,"ConfigModule",function(){return f});var f=function(){function n(){}return n=t.b([Object(p.M)({imports:[c.b,m,o.g.forChild([{path:"",component:c.a,data:{examples:[{title:"Buttons",description:"\n              This demonstrates a type for buttons. Specifically using bootstrap but this could easily be adapted for other frameworks\n            ",component:k,files:[{file:"app.component.html",content:a("rDv8")},{file:"app.component.ts",content:a("s954")},{file:"button-type.component",content:a("P2J4")},{file:"app.module.ts",content:a("lumk")}]}]}}])]})],n)}()}});