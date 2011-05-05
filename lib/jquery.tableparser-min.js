/*!
 * jQuery Parse Table plugin
 *
 * Copyright 2011, Francis Chong
 * Licensed under the MIT licenses.
 *
 */
(function(a){a.fn.parsetable=function(f,d){if(d==undefined){d=false}if(f==undefined){f=false}var b=[],e=0,c=0;a("tr",this).each(function(g,h){c=0;a("td, th",h).each(function(l,j){var m=a(j).attr("rowspan")||1;var o=a(j).attr("colspan")||1;var k=j.innerHTML||"";var i=0,n=0;for(i=0;i<m;i++){for(n=0;n<o;n++){if(b[c+n]==undefined){b[c+n]=[]}while(b[c+n][e+i]!=undefined){c+=1;if(b[c+n]==undefined){b[c+n]=[]}}if((i==0||d)&&(n==0||f)){b[c+n][e+i]=k}else{b[c+n][e+i]=""}}}c+=1});e+=1});return b}})(jQuery);