"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[61397],{87094:function(e,t,o){o.r(t),o.d(t,{assets:function(){return u},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return n},metadata:function(){return m},toc:function(){return p}});var r=o(87462),a=o(63366),s=(o(67294),o(3905)),l=o(13904),i=["components"],n={title:"Moodle 2.0.4",tags:["Release notes","Moodle 2.0"],sidebar_position:4,moodleVersion:"2.0.4"},d=void 0,m={unversionedId:"releases/2.0/2.0.4",id:"releases/2.0/2.0.4",title:"Moodle 2.0.4",description:"Release date: 1st August, 2011",source:"@site/general/releases/2.0/2.0.4.md",sourceDirName:"releases/2.0",slug:"/releases/2.0/2.0.4",permalink:"/devdocs/general/releases/2.0/2.0.4",editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/2.0/2.0.4.md",tags:[{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"},{label:"Moodle 2.0",permalink:"/devdocs/general/tags/moodle-2-0"}],version:"current",lastUpdatedBy:"Andrew Nicols",lastUpdatedAt:1653650520,formattedLastUpdatedAt:"27/05/2022",sidebarPosition:4,frontMatter:{title:"Moodle 2.0.4",tags:["Release notes","Moodle 2.0"],sidebar_position:4,moodleVersion:"2.0.4"},sidebar:"releaseNotes",previous:{title:"Moodle 2.0.3",permalink:"/devdocs/general/releases/2.0/2.0.3"},next:{title:"Moodle 2.0.5",permalink:"/devdocs/general/releases/2.0/2.0.5"}},u={},p=[{value:"Highlights",id:"highlights",level:2},{value:"Functional changes",id:"functional-changes",level:2},{value:"Security issues",id:"security-issues",level:2},{value:"Fixes and improvements",id:"fixes-and-improvements",level:2},{value:"Translations",id:"translations",level:2}],c={toc:p};function k(e){var t=e.components,o=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(l.Z,(0,r.Z)({frontMatter:n},void 0!==m?{metadata:m}:{},{mdxType:"MoodlePageBanner"})),(0,s.kt)("p",null,"Release date: 1st August, 2011"),(0,s.kt)("p",null,"Here is ",(0,s.kt)("a",{parentName:"p",href:"http://tracker.moodle.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=project+%3D+mdl+and+resolution+%3D+fixed+AND+fixVersion+in+%28%222.0.4%22%29"},"the full list of fixed issues in 2.0.4"),"."),(0,s.kt)("h2",{id:"highlights"},"Highlights"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-28135"},"MDL-28135")," - Updated links to MoodleDocs to point to correct wiki (2.0, 2.1, 2.2...)"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-27169"},"MDL-27169")," - File Picker able to upload files using IE9")),(0,s.kt)("h2",{id:"functional-changes"},"Functional changes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-27755"},"MDL-27755")," - Course search can now include idnumber or shortname"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-27532"},"MDL-27532")," - Course reports are able to store table data in course backup")),(0,s.kt)("h2",{id:"security-issues"},"Security issues"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=182735"},"MSA-11-0018")," - Lacking capability controls over cohorts"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=182736"},"MSA-11-0019")," - Themes writing to files outside Moodle data directory"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=182737"},"MSA-11-0020")," - Continue links in error messages can lead offsite"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=182738"},"MSA-11-0021")," - Role assignment web service function not following restrictions"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=182739"},"MSA-11-0022")," - Course creators could change filters at course level"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=182740"},"MSA-11-0023")," - Guests can add comments to front page activities")),(0,s.kt)("h2",{id:"fixes-and-improvements"},"Fixes and improvements"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-28040"},"MDL-28040")," - Moodle 2.0 Navigation tree algorithm fixed"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-27999"},"MDL-27999")," - Images are now shown in Wiki previews"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-27988"},"MDL-27988")," - Activities identified by ID numbers in calculated grade items are now restored in a full course restore"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-27969"},"MDL-27969")," - Error when doing random assignment of submissions in Workshop with Moodle 2.1 fixed"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-27906"},"MDL-27906")," - Regression in calendar/lib.php breaking on user events resolved"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-27741"},"MDL-27741")," - Regression of forum_get_subscribe_link fixed"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-27638"},"MDL-27638")," - Assignment Module Submissions SQL avoids overflow"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-26739"},"MDL-26739")," - Able to add images to wiki in Nwiki or creole format"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-28021"},"MDL-28021")," - Duplicatated activity completion entries in database are now handled correctly")),(0,s.kt)("h2",{id:"translations"},"Translations"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/es/Notas_de_Moodle_2.0.4"},"Notas de Moodle 2.0.4")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_2.0.4"},"Notes de mise \xe0 jour de Moodle 2.0.4"))))}k.isMDXComponent=!0}}]);