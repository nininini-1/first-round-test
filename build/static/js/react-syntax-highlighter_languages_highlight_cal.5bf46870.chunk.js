(self.webpackChunkfirst_round_test=self.webpackChunkfirst_round_test||[]).push([[7458],{5546:function(e){e.exports=function(e){var n="div mod in and or not xor asserterror begin case do downto else end exit for if of repeat then to until while with var",s=[e.C_LINE_COMMENT_MODE,e.COMMENT(/\{/,/\}/,{relevance:0}),e.COMMENT(/\(\*/,/\*\)/,{relevance:10})],r={className:"string",begin:/'/,end:/'/,contains:[{begin:/''/}]},a={className:"string",begin:/(#\d+)+/},t={className:"function",beginKeywords:"procedure",end:/[:;]/,keywords:"procedure|10",contains:[e.TITLE_MODE,{className:"params",begin:/\(/,end:/\)/,keywords:n,contains:[r,a]}].concat(s)},i={className:"class",begin:"OBJECT (Table|Form|Report|Dataport|Codeunit|XMLport|MenuSuite|Page|Query) (\\d+) ([^\\r\\n]+)",returnBegin:!0,contains:[e.TITLE_MODE,t]};return{name:"C/AL",case_insensitive:!0,keywords:{keyword:n,literal:"false true"},illegal:/\/\*/,contains:[r,a,{className:"number",begin:"\\b\\d+(\\.\\d+)?(DT|D|T)",relevance:0},{className:"string",begin:'"',end:'"'},e.NUMBER_MODE,i,t]}}}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_cal.5bf46870.chunk.js.map