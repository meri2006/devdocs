"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[70422],{24705:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return c},frontMatter:function(){return n},metadata:function(){return u},toc:function(){return m}});var o=r(87462),a=r(63366),s=(r(67294),r(3905)),l=r(13904),i=["components"],n={title:"Moodle 3.3.4",tags:["Release notes","Moodle 3.3"],sidebar_position:4,moodleVersion:"3.3.4"},d=void 0,u={unversionedId:"releases/3.3/3.3.4",id:"releases/3.3/3.3.4",title:"Moodle 3.3.4",description:"Release date: 15 January 2018",source:"@site/general/releases/3.3/3.3.4.md",sourceDirName:"releases/3.3",slug:"/releases/3.3/3.3.4",permalink:"/devdocs/general/releases/3.3/3.3.4",editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/3.3/3.3.4.md",tags:[{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"},{label:"Moodle 3.3",permalink:"/devdocs/general/tags/moodle-3-3"}],version:"current",lastUpdatedBy:"Andrew Nicols",lastUpdatedAt:1653650520,formattedLastUpdatedAt:"27/05/2022",sidebarPosition:4,frontMatter:{title:"Moodle 3.3.4",tags:["Release notes","Moodle 3.3"],sidebar_position:4,moodleVersion:"3.3.4"},sidebar:"releaseNotes",previous:{title:"Moodle 3.3.3",permalink:"/devdocs/general/releases/3.3/3.3.3"},next:{title:"Moodle 3.3.5",permalink:"/devdocs/general/releases/3.3/3.3.5"}},p={},m=[{value:"Highlights",id:"highlights",level:2},{value:"Fixes and improvements",id:"fixes-and-improvements",level:2},{value:"Security issues",id:"security-issues",level:2},{value:"Translations",id:"translations",level:2}],h={toc:m};function c(e){var t=e.components,r=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,o.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(l.Z,(0,o.Z)({frontMatter:n},void 0!==u?{metadata:u}:{},{mdxType:"MoodlePageBanner"})),(0,s.kt)("p",null,"Release date: 15 January 2018"),(0,s.kt)("p",null,"Here is ",(0,s.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=project+%3D+mdl+AND+resolution+%3D+fixed+AND+fixVersion+in+%28%223.3.4%22%29+ORDER+BY+priority+DESC&runQuery=true&clear=true"},"the full list of fixed issues in 3.3.4"),"."),(0,s.kt)("h2",{id:"highlights"},"Highlights"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-34161"},"MDL-34161")," - LTI: backup and restore supports submissions and also course and site tools. References to the site tools are restored only on the same site (they are not included in course backup for security reasons)."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-27886"},"MDL-27886"),' - If general backup setting "Include users" is unchecked, users with relevant capability can now backup user data'),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-40613"},"MDL-40613")," - LDAP authentication method now can synchronise custom user profile fields")),(0,s.kt)("h2",{id:"fixes-and-improvements"},"Fixes and improvements"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-58887"},"MDL-58887")," - Accessibility: Gear icon is now properly defined for screen readers"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-54106"},"MDL-54106"),' - Fixed bug preventing deletion of incomplete users accounts after specified period of time (setting "Delete not fully setup users after")'),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-59512"},"MDL-59512")," - Allow to connect to OAuth 2 services that only support client authentication via Basic Auth"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-56197"},"MDL-56197")," - Lesson: Multiple Choice answers should appear on same line as radio button"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-45068"},"MDL-45068")," - Number of bug fixes in Import Groups from CSV tool"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-52100"},"MDL-52100")," - Folder resource: Fixed bug with big files being deleted when editing teachers update resource with global maxbytes lower"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-37757"},"MDL-37757")," - Turning off Server Files Repository should not break courses that use it"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-58272"},"MDL-58272")," - Assignment: Fixed bug when converting images in submisisons to pdf (unoconv)"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-54967"},"MDL-54967")," - IMS Common Cartridge import works correctly with HTML entities in URLs"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-27230"},"MDL-27230")," - Quiz: when group override is deleted the calendar event should also be deleted"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-57431"},"MDL-57431"),' - Quiz: Clicking on help for "Shuffle" button no longer toggles shuffle itself'),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-42676"},"MDL-42676"),' - Assignment: Bug fix. The "This assignment is not accepting submissions" message is displayed in the assignment when override the grade'),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-34389"},"MDL-34389")," - Category manager with the 'moodle/course:changecategory' should be able to move existing courses between categories"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-52538"},"MDL-52538")," - Lesson: Fixed bug with content pages displaying grade when they should not"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-45500"},"MDL-45500")," - Allow uninstalling grading methods plugins"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-58817"},"MDL-58817")," - LTI: display correct icons"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-43042"},"MDL-43042")," - Lession multichoice questions with multiple answers : more clear indication for the user which answer was correct"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-40790"},"MDL-40790")," - Lesson: UI fix for content buttons running off the edge of the page"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-59999"},"MDL-59999")," - Lesson: Grade essays page does should show which essays have been graded"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-57564"},"MDL-57564"),' - Respect setting "Sort my courses (navsortmycoursessort)" on the dashboard')),(0,s.kt)("h2",{id:"security-issues"},"Security issues"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=364381"},"MSA-18-0001")," Server Side Request Forgery in the filepicker"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=364382"},"MSA-18-0002")," Setting for blocked hosts list can be bypassed with multiple A record hostnames"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=364383"},"MSA-18-0003")," Privilege escalation in quiz web services"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=364384"},"MSA-18-0004")," XSS in calendar event name")),(0,s.kt)("h2",{id:"translations"},"Translations"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_3.3.4"},"Notes de mise \xe0 jour de Moodle 3.3.4")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/es/Notas_de_Moodle_3.3.4"},"Notas de Moodle 3.3.4"))))}c.isMDXComponent=!0}}]);