import './polyfills.server.mjs';
import{A as k,B as A,E as P,I as E,L as S,a as d,b as p,c as u,d as z,e as b,f as c,g as I,h as m,i as r,j as a,k as f,l as M,m as w,n as h,o as l,p as v,q as T,y as j,z as Q}from"./chunk-P7XIB6HE.mjs";import{h as y}from"./chunk-VVCT4QZE.mjs";var D=[],N=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=u({type:e}),e.\u0275inj=d({imports:[S.forRoot(D),S]});let t=e;return t})();var g={title:"Voc\xEA seria um heroi ou vil\xE3o ?",questions:[{id:1,question:"Qual super poder voc\xEA escolheria ?",options:[{id:1,name:"Raios-Lasers",alias:"A"},{id:2,name:"Voar",alias:"B"},{id:3,name:"Explodir coisas",alias:"A"},{id:4,name:"Curar feridas",alias:"B"},{id:5,name:"Soltar fogo pelas m\xE3os",alias:"A"}]},{id:2,question:"Quem voc\xEA salvaria primeiro ?",options:[{id:1,name:"Crian\xE7as",alias:"A"},{id:2,name:"Idosos",alias:"A"},{id:3,name:"N\xE3o saberia escolher",alias:"B"}]},{id:3,question:"Qual a sua maior preocupa\xE7\xE3o ao enfretar outro super ser ?",options:[{id:1,name:"N\xE3o destruir pr\xE9dios",alias:"B"},{id:2,name:"Socar a cara do inimigo",alias:"A"},{id:3,name:"N\xE3o sujar meu traje",alias:"A"},{id:4,name:"N\xE3o deixar ningu\xE9m se ferir",alias:"B"}]},{id:4,question:"Qual o seu maior foco ?",options:[{id:1,name:"Ficar rico com poderes",alias:"A"},{id:2,name:"Salvar a cidade",alias:"B"}]},{id:5,question:"Qual o seu apelido de super ser ?",options:[{id:1,name:"O Terrivel",alias:"A"},{id:2,name:"Amigo da vizinhan\xE7a",alias:"B"}]}],results:{A:"Voc\xEA muito provavelmente seria um super vil\xE3o!",B:"Voc\xEA muito provavelmente seria um super Her\xF3i!"}};function H(t,e){if(t&1&&(r(0,"div",7)(1,"h3"),l(2),a()()),t&2){let s=h();c(2),v(s.questionsSelected.question)}}function L(t,e){if(t&1){let s=M();r(0,"button",10),w("click",function(){let o=z(s).$implicit,_=h(2);return b(_.playerChoice(o.alias))}),l(1),a()}if(t&2){let s=e.$implicit;c(),T(" ",s.name," ")}}function $(t,e){if(t&1&&(r(0,"div",8),I(1,L,2,1,"button",9),a()),t&2){let s=h();c(),m("ngForOf",s.questionsSelected.options)}}function G(t,e){if(t&1&&(r(0,"div",11)(1,"h1"),l(2,"O seu resultado \xE9:"),a(),r(3,"p"),l(4),a()()),t&2){let s=h();c(4),v(s.answersSelected)}}function U(t,e){if(t&1){let s=M();r(0,"div",12)(1,"button",10),w("click",function(){z(s);let i=h();return b(i.resetTest())}),l(2," Recome\xE7ar Teste "),a()()}}var F=(()=>{let e=class e{constructor(){this.title="",this.answers=[],this.answersSelected="",this.questionIndex=0,this.questionMaxIndex=0,this.finished=!1}ngOnInit(){g&&(this.finished=!1,this.title=g.title,this.questions=g.questions,this.questionsSelected=this.questions[this.questionIndex],this.questionIndex=0,this.questionMaxIndex=this.questions.length)}playerChoice(n){this.answers.push(n),this.nextStep()}nextStep(){return y(this,null,function*(){if(this.questionIndex+=1,this.questionMaxIndex>this.questionIndex)this.questionsSelected=this.questions[this.questionIndex];else{let n=yield this.checkResult(this.answers);this.finished=!0,this.answersSelected=g.results[n]}})}checkResult(n){return y(this,null,function*(){return n.reduce((o,_,X,O)=>O.filter(C=>C===o).length>O.filter(C=>C===_).length?o:_)})}resetTest(){this.questionIndex=0,this.questionsSelected=this.questions[this.questionIndex],this.finished=!1}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=p({type:e,selectors:[["app-quiz"]],decls:9,vars:5,consts:[[1,"quiz__container"],[1,"quiz_logo"],["src","assets/imgs/logo.png","alt",""],["class","quiz_question",4,"ngIf"],["class","quiz_opt",4,"ngIf"],["class","quiz_results",4,"ngIf"],["class","quiz_redo",4,"ngIf"],[1,"quiz_question"],[1,"quiz_opt"],["class","btn-opt",3,"click",4,"ngFor","ngForOf"],[1,"btn-opt",3,"click"],[1,"quiz_results"],[1,"quiz_redo"]],template:function(i,o){i&1&&(r(0,"div",0)(1,"div",1),f(2,"img",2),r(3,"h3"),l(4),a()(),I(5,H,3,1,"div",3)(6,$,2,1,"div",4)(7,G,5,1,"div",5)(8,U,3,0,"div",6),a()),i&2&&(c(4),v(o.title),c(),m("ngIf",!o.finished),c(),m("ngIf",!o.finished),c(),m("ngIf",o.finished),c(),m("ngIf",o.finished))},dependencies:[j,Q],styles:[".quiz__container[_ngcontent-%COMP%]{width:80%;margin:20px auto}.quiz_logo[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;margin-bottom:10px}.quiz_logo[_ngcontent-%COMP%] > h3[_ngcontent-%COMP%]{margin-top:20px}.quiz_question[_ngcontent-%COMP%]{margin-bottom:20px;display:flex;justify-content:center;align-items:center;border:1px solid #4224d9;border-radius:8px;background-color:#644ed2;width:100%;height:200px;font-size:20px;font-family:Trebuchet MS,Lucida Sans Unicode,Lucida Grande,Lucida Sans,Arial,sans-serif}.quiz_opt[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:center;margin-bottom:20px}.btn-opt[_ngcontent-%COMP%]{background-color:transparent;border-radius:8px;border:1px solid #18ab29;width:50%;display:inline-block;cursor:pointer;color:#f5f5f5;font-family:Arial,Helvetica,sans-serif;font-size:16px;padding:15px 30px;text-decoration:none;text-shadow:0px 1px 0px #2f6627}.btn-opt[_ngcontent-%COMP%]:hover{background-color:#5cbf2a}.btn-opt[_ngcontent-%COMP%]:active{position:relative;top:1px}.quiz_results[_ngcontent-%COMP%]{width:100%;height:350px;background-color:#1f0539;border-radius:10px;padding:30px;margin-bottom:20px;display:flex;flex-direction:column;justify-content:center;align-items:center}.quiz_results[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{font-size:1.2rem}.quiz_redo[_ngcontent-%COMP%]{width:100%;display:flex;margin:auto;justify-content:center;align-items:center}"]});let t=e;return t})();var V=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=p({type:e,selectors:[["app-home"]],decls:2,vars:0,consts:[[1,"home__container"]],template:function(i,o){i&1&&(r(0,"div",0),f(1,"app-quiz"),a())},dependencies:[F]});let t=e;return t})();var q=(()=>{let e=class e{constructor(){this.title="projeto-buzzfeed"}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=p({type:e,selectors:[["app-root"]],decls:2,vars:0,template:function(i,o){i&1&&f(0,"app-home")(1,"router-outlet")},dependencies:[E,V]});let t=e;return t})();var B=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=u({type:e,bootstrap:[q]}),e.\u0275inj=d({providers:[A()],imports:[k,N]});let t=e;return t})();var W=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=u({type:e,bootstrap:[q]}),e.\u0275inj=d({imports:[B,P]});let t=e;return t})();export{W as a};