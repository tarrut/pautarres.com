(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6953,93520],{6953:function(e,n,a){"use strict";var t=a(64836);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=t(a(3848));n.default=r.default},3848:function(e){"use strict";function n(e){!function(e){function n(e){return RegExp(/(\()/.source+"(?:"+e+")"+/(?=[\s\)])/.source)}function a(e){return RegExp(/([\s([])/.source+"(?:"+e+")"+/(?=[\s)])/.source)}var t=/(?!\d)[-+*/~!@$%^=<>{}\w]+/.source,r="&"+t,s="(\\()",o="(?=\\s)",i=/(?:[^()]|\((?:[^()]|\((?:[^()]|\((?:[^()]|\((?:[^()]|\([^()]*\))*\))*\))*\))*\))*/.source,l={heading:{pattern:/;;;.*/,alias:["comment","title"]},comment:/;.*/,string:{pattern:/"(?:[^"\\]|\\.)*"/,greedy:!0,inside:{argument:/[-A-Z]+(?=[.,\s])/,symbol:RegExp("`"+t+"'")}},"quoted-symbol":{pattern:RegExp("#?'"+t),alias:["variable","symbol"]},"lisp-property":{pattern:RegExp(":"+t),alias:"property"},splice:{pattern:RegExp(",@?"+t),alias:["symbol","variable"]},keyword:[{pattern:RegExp(s+"(?:and|(?:cl-)?letf|cl-loop|cond|cons|error|if|(?:lexical-)?let\\*?|message|not|null|or|provide|require|setq|unless|use-package|when|while)"+o),lookbehind:!0},{pattern:RegExp(s+"(?:append|by|collect|concat|do|finally|for|in|return)"+o),lookbehind:!0}],declare:{pattern:n(/declare/.source),lookbehind:!0,alias:"keyword"},interactive:{pattern:n(/interactive/.source),lookbehind:!0,alias:"keyword"},boolean:{pattern:a(/nil|t/.source),lookbehind:!0},number:{pattern:a(/[-+]?\d+(?:\.\d*)?/.source),lookbehind:!0},defvar:{pattern:RegExp(s+"def(?:const|custom|group|var)\\s+"+t),lookbehind:!0,inside:{keyword:/^def[a-z]+/,variable:RegExp(t)}},defun:{pattern:RegExp(s+/(?:cl-)?(?:defmacro|defun\*?)\s+/.source+t+/\s+\(/.source+i+/\)/.source),lookbehind:!0,greedy:!0,inside:{keyword:/^(?:cl-)?def\S+/,arguments:null,function:{pattern:RegExp("(^\\s)"+t),lookbehind:!0},punctuation:/[()]/}},lambda:{pattern:RegExp(s+"lambda\\s+\\(\\s*(?:&?"+t+"(?:\\s+&?"+t+")*\\s*)?\\)"),lookbehind:!0,greedy:!0,inside:{keyword:/^lambda/,arguments:null,punctuation:/[()]/}},car:{pattern:RegExp(s+t),lookbehind:!0},punctuation:[/(?:['`,]?\(|[)\[\]])/,{pattern:/(\s)\.(?=\s)/,lookbehind:!0}]},u={"lisp-marker":RegExp(r),varform:{pattern:RegExp(/\(/.source+t+/\s+(?=\S)/.source+i+/\)/.source),inside:l},argument:{pattern:RegExp(/(^|[\s(])/.source+t),lookbehind:!0,alias:"variable"},rest:l},p="\\S+(?:\\s+\\S+)*",d={pattern:RegExp(s+i+"(?=\\))"),lookbehind:!0,inside:{"rest-vars":{pattern:RegExp("&(?:body|rest)\\s+"+p),inside:u},"other-marker-vars":{pattern:RegExp("&(?:aux|optional)\\s+"+p),inside:u},keys:{pattern:RegExp("&key\\s+"+p+"(?:\\s+&allow-other-keys)?"),inside:u},argument:{pattern:RegExp(t),alias:"variable"},punctuation:/[()]/}};l.lambda.inside.arguments=d,l.defun.inside.arguments=e.util.clone(d),l.defun.inside.arguments.inside.sublist=d,e.languages.lisp=l,e.languages.elisp=l,e.languages.emacs=l,e.languages["emacs-lisp"]=l}(e)}e.exports=n,n.displayName="lisp",n.aliases=[]},64836:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);