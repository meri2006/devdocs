"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[14390],{54966:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var i=a(87462),n=a(63366),o=(a(67294),a(3905)),l=a(13904),r=["components"],s={title:"SQL injection",sidebar_position:5,tags:["Coding guidelines","Policies","Security"]},d=void 0,p={unversionedId:"development/policies/security/sql-injection",id:"development/policies/security/sql-injection",title:"SQL injection",description:"This page forms part of the Moodle security guidelines.",source:"@site/general/development/policies/security/sql-injection.md",sourceDirName:"development/policies/security",slug:"/development/policies/security/sql-injection",permalink:"/devdocs/general/development/policies/security/sql-injection",editUrl:"https://github.com/moodle/devdocs/edit/main/general/development/policies/security/sql-injection.md",tags:[{label:"Coding guidelines",permalink:"/devdocs/general/tags/coding-guidelines"},{label:"Policies",permalink:"/devdocs/general/tags/policies"},{label:"Security",permalink:"/devdocs/general/tags/security"}],version:"current",lastUpdatedBy:"Andrew Nicols",lastUpdatedAt:1653650520,formattedLastUpdatedAt:"27/05/2022",sidebarPosition:5,frontMatter:{title:"SQL injection",sidebar_position:5,tags:["Coding guidelines","Policies","Security"]},sidebar:"policies",previous:{title:"Cross-site scripting",permalink:"/devdocs/general/development/policies/security/crosssite-scripting"},next:{title:"Command-line injection",permalink:"/devdocs/general/development/policies/security/commandline-injection"}},u={},m=[{value:"What is the danger?",id:"what-is-the-danger",level:2},{value:"How Moodle avoids this problem",id:"how-moodle-avoids-this-problem",level:2},{value:"What you need to do in your code",id:"what-you-need-to-do-in-your-code",level:2},{value:"What you need to do as an administrator",id:"what-you-need-to-do-as-an-administrator",level:2},{value:"See also",id:"see-also",level:2}],c={toc:m};function h(e){var t=e.components,a=(0,n.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(l.Z,(0,i.Z)({frontMatter:s},void 0!==p?{metadata:p}:{},{mdxType:"MoodlePageBanner"})),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This page forms part of the ",(0,o.kt)("a",{parentName:"p",href:"../security"},"Moodle security guidelines"),"."))),(0,o.kt)("h2",{id:"what-is-the-danger"},"What is the danger?"),(0,o.kt)("p",null,"Suppose your code in ",(0,o.kt)("inlineCode",{parentName:"p"},"/course/view.php?id=123")," does something like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT FROM mdl_course WHERE id = $id;\n")),(0,o.kt)("p",null,"where the ",(0,o.kt)("inlineCode",{parentName:"p"},"$id = 123")," has come from the URL. Suppose that your code does not bother to clean that parameter properly."),(0,o.kt)("p",null,"Along comes Evil Hacker, and edits the URL to be ",(0,o.kt)("inlineCode",{parentName:"p"},"/course/view.php?id=123;DELETE+FROM+mdl_user"),"\nI will let you work out why that is a very, very bad thing."),(0,o.kt)("p",null,"Of course, depending on exactly what the database query is, the malicious input needs to be constructed appropriately, but that is just a matter of trial and error for Evil Hacker."),(0,o.kt)("h2",{id:"how-moodle-avoids-this-problem"},"How Moodle avoids this problem"),(0,o.kt)("p",null,"Once again, it is a case of being very suspicious of any input that came from outside Moodle. In the example above, ",(0,o.kt)("inlineCode",{parentName:"p"},"$id")," should clearly have been cleaned by passing ",(0,o.kt)("inlineCode",{parentName:"p"},"PARAM_INT")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"required_param"),"."),(0,o.kt)("p",null,"It is more tricky with a query like"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"UPDATE mdl_user SET lastname = '$lastname' WHERE id = $id;\n")),(0,o.kt)("p",null,"What happens when ",(0,o.kt)("inlineCode",{parentName:"p"},"$lastname")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"O'Brian"),"? Well, you have to escape the ' like this: ",(0,o.kt)("inlineCode",{parentName:"p"},"O\\\\'Brian"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"In Moodle 1.9, ",(0,o.kt)("inlineCode",{parentName:"li"},"addslashes")," is applied automatically to all input you get via ",(0,o.kt)("inlineCode",{parentName:"li"},"required_param")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"optional_param"),"."),(0,o.kt)("li",{parentName:"ul"},"Moodle 2.0 onwards, completely avoid the dangerous process of building SQL by concatenating strings. In Moodle 2.0 the SQL would look like")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"UPDATE mdl_user SET lastname = ? WHERE id = ?;\n")),(0,o.kt)("p",null,"and then we would pass an array of values ",(0,o.kt)("inlineCode",{parentName:"p"},"[$lastname, $id]")," to the database along with the SQL."),(0,o.kt)("h2",{id:"what-you-need-to-do-in-your-code"},"What you need to do in your code"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Use higher level ",(0,o.kt)("inlineCode",{parentName:"li"},"dmllib")," methods, like ",(0,o.kt)("inlineCode",{parentName:"li"},"get_record"),", whenever possible, so you do not have to create SQL yourself."),(0,o.kt)("li",{parentName:"ul"},"When you have to insert values into SQL statements, ",(0,o.kt)("strong",{parentName:"li"},"use place-holders")," to insert the values safely."),(0,o.kt)("li",{parentName:"ul"},"Test your code by using a tool like ",(0,o.kt)("a",{parentName:"li",href:"https://sqlmap.org/"},"sqlmap"),", or by manually trying tricky inputs like:",(0,o.kt)("br",null),(0,o.kt)("inlineCode",{parentName:"li"},"< > & \\&lt; \\&gt; \\&amp; ' \\\\' \u7881 \\ \\\\"))),(0,o.kt)("p",null,"In Moodle 1.9 or earlier:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Data from ",(0,o.kt)("inlineCode",{parentName:"li"},"required_param")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"optional_param")," have already had ",(0,o.kt)("inlineCode",{parentName:"li"},"addslashes")," applied, ready to be used in database queries, but make sure you put single quotes round each value."),(0,o.kt)("li",{parentName:"ul"},"If you have loaded some data from the database, and then want to re-insert it, then apply ",(0,o.kt)("inlineCode",{parentName:"li"},"addslashes")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"addslashes_object")," to it first.")),(0,o.kt)("h2",{id:"what-you-need-to-do-as-an-administrator"},"What you need to do as an administrator"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"This is not something that administrators can do anything about (other than keeping your Moodle up-to-date).")),(0,o.kt)("h2",{id:"see-also"},"See also"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../security"},"Security")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Coding"},"Coding")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://sqlmap.org"},"https://sqlmap.org")," - A tool for automatically finding SQL injection vulnerabilities.")))}h.isMDXComponent=!0}}]);