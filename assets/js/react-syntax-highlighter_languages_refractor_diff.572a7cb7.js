"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6247],{36577:e=>{function s(e){!function(e){e.languages.diff={coord:[/^(?:\*{3}|-{3}|\+{3}).*$/m,/^@@.*@@$/m,/^\d+.*$/m]};var s={"deleted-sign":"-","deleted-arrow":"<","inserted-sign":"+","inserted-arrow":">",unchanged:" ",diff:"!"};Object.keys(s).forEach((function(a){var n=s[a],i=[];/^\w+$/.test(a)||i.push(/\w+/.exec(a)[0]),"diff"===a&&i.push("bold"),e.languages.diff[a]={pattern:RegExp("^(?:["+n+"].*(?:\r\n?|\n|(?![\\s\\S])))+","m"),alias:i}})),Object.defineProperty(e.languages.diff,"PREFIXES",{value:s})}(e)}e.exports=s,s.displayName="diff",s.aliases=[]}}]);