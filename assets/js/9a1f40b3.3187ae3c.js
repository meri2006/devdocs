"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[88143],{34641:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return i},metadata:function(){return m},toc:function(){return u}});var r=a(87462),o=a(63366),l=(a(67294),a(3905)),n=a(13904),s=["components"],i={title:"Moodle 3.5",tags:["Release notes","Moodle 3.5"],sidebar_position:-305,moodleVersion:"3.5"},p=void 0,m={unversionedId:"releases/3.5",id:"releases/3.5",title:"Moodle 3.5",description:"Release date: 17 May 2018",source:"@site/general/releases/3.5.md",sourceDirName:"releases",slug:"/releases/3.5",permalink:"/devdocs/general/releases/3.5",editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/3.5.md",tags:[{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"},{label:"Moodle 3.5",permalink:"/devdocs/general/tags/moodle-3-5"}],version:"current",lastUpdatedBy:"Andrew Nicols",lastUpdatedAt:1653650520,formattedLastUpdatedAt:"27/05/2022",sidebarPosition:-305,frontMatter:{title:"Moodle 3.5",tags:["Release notes","Moodle 3.5"],sidebar_position:-305,moodleVersion:"3.5"},sidebar:"releaseNotes",previous:{title:"Moodle 3.6.10",permalink:"/devdocs/general/releases/3.6/3.6.10"},next:{title:"Moodle 3.5.1",permalink:"/devdocs/general/releases/3.5/3.5.1"}},d={},u=[{value:"Server requirements",id:"server-requirements",level:2},{value:"Database requirements",id:"database-requirements",level:3},{value:"Client requirements",id:"client-requirements",level:2},{value:"Browser support",id:"browser-support",level:3},{value:"Major features",id:"major-features",level:2},{value:"GDPR",id:"gdpr",level:3},{value:"Question bank tagging improvements",id:"question-bank-tagging-improvements",level:3},{value:"UX: Usability improvements",id:"ux-usability-improvements",level:3},{value:"LTI Advantage support",id:"lti-advantage-support",level:3},{value:"RecordRTC for Atto",id:"recordrtc-for-atto",level:3},{value:"Messaging database tables",id:"messaging-database-tables",level:3},{value:"Other Highlights",id:"other-highlights",level:2},{value:"Global search",id:"global-search",level:3},{value:"Functional changes",id:"functional-changes",level:3},{value:"Security issues",id:"security-issues",level:3},{value:"For developers",id:"for-developers",level:3},{value:"Upgrading plugins",id:"upgrading-plugins",level:4},{value:"Translations",id:"translations",level:2}],k={toc:u};function h(e){var t=e.components,a=(0,o.Z)(e,s);return(0,l.kt)("wrapper",(0,r.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(n.Z,(0,r.Z)({frontMatter:i},void 0!==m?{metadata:m}:{},{mdxType:"MoodlePageBanner"})),(0,l.kt)("p",null,"Release date: 17 May 2018"),(0,l.kt)("p",null,"Here is ",(0,l.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=project+%3D+mdl+AND+resolution+%3D+fixed+AND+fixVersion+in+%28%223.5%22%29+ORDER+BY+priority+DESC&runQuery=true&clear=true"},"the full list of fixed issues in 3.5"),"."),(0,l.kt)("p",null,"See our ",(0,l.kt)("a",{parentName:"p",href:"https://docs.moodle.org/35/en/New_features"},"New Features page")," for a more user-friendly introduction to Moodle 3.5 with screenshots."),(0,l.kt)("p",null,"If you are upgrading from previous version, make sure you read the ",(0,l.kt)("a",{parentName:"p",href:"https://docs.moodle.org/35/en/Upgrading"},"Upgrading")," documentation."),(0,l.kt)("h2",{id:"server-requirements"},"Server requirements"),(0,l.kt)("p",null,"These are just the minimum supported versions. We recommend keeping all of your software and operating systems up-to-date."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Moodle upgrade:  Moodle 3.1 or later"),(0,l.kt)("li",{parentName:"ul"},"PHP version: minimum PHP 7.0.0 ",(0,l.kt)("em",{parentName:"li"},"Note: minimum PHP version has increased since Moodle 3.3"),". PHP 7.1.x and 7.2.x are supported too. See ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Moodle_and_PHP"},"Moodle and PHP")," for details."),(0,l.kt)("li",{parentName:"ul"},"PHP extension ",(0,l.kt)("strong",{parentName:"li"},"intl")," is required since Moodle 3.4 (it was recommended in 2.0 onwards)"),(0,l.kt)("li",{parentName:"ul"},"(Recommendation only) If you use MySQL or MariaDB, make sure your database supports full UTF-8 (utf8mb4) if you install a new instance of Moodle. CLI script may be used to convert to utf8mb4 if you're upgrading. You may choose to keep using 'utf8_",(0,l.kt)("em",{parentName:"li"},"', but then a warning will show that the database isn't using full UTF-8 support and suggest moving to 'utf8mb4_unicode_ci'. See ",(0,l.kt)("a",{parentName:"em",href:"https://docs.moodle.org/en/MySQL_full_unicode_support"},"MySQL full unicode support")," for details. If you do enable utf8mb4 you "),"must* use the Barracuda file format.")),(0,l.kt)("h3",{id:"database-requirements"},"Database requirements"),(0,l.kt)("p",null,"Moodle supports the following database servers. Again, version numbers are just the minimum supported version. We recommend running the latest stable version of any software."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Database"),(0,l.kt)("th",{parentName:"tr",align:null},"Minimum version"),(0,l.kt)("th",{parentName:"tr",align:null},"Recommended"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"http://www.postgresql.org/"},"PostgreSQL")),(0,l.kt)("td",{parentName:"tr",align:null},"9.3"),(0,l.kt)("td",{parentName:"tr",align:null},"11.x - note that 12.x is not yet supported (",(0,l.kt)("a",{parentName:"td",href:"https://tracker.moodle.org/browse/MDL-67414"},"MDL-67414"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"http://www.mysql.com/"},"MySQL")),(0,l.kt)("td",{parentName:"tr",align:null},"5.5.31"),(0,l.kt)("td",{parentName:"tr",align:null},"Latest")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://mariadb.org/"},"MariaDB")),(0,l.kt)("td",{parentName:"tr",align:null},"5.5.31"),(0,l.kt)("td",{parentName:"tr",align:null},"Latest")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"http://www.microsoft.com/en-us/server-cloud/products/sql-server/"},"Microsoft SQL Server")),(0,l.kt)("td",{parentName:"tr",align:null},"2008"),(0,l.kt)("td",{parentName:"tr",align:null},"Latest")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"http://www.oracle.com/us/products/database/overview/index.html"},"Oracle Database")),(0,l.kt)("td",{parentName:"tr",align:null},"10.2"),(0,l.kt)("td",{parentName:"tr",align:null},"Latest")))),(0,l.kt)("h2",{id:"client-requirements"},"Client requirements"),(0,l.kt)("h3",{id:"browser-support"},"Browser support"),(0,l.kt)("p",null,"Moodle is compatible with any standards compliant web browser. We regularly test Moodle with the following browsers:"),(0,l.kt)("p",null,"Desktop:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Chrome"),(0,l.kt)("li",{parentName:"ul"},"Firefox"),(0,l.kt)("li",{parentName:"ul"},"Safari"),(0,l.kt)("li",{parentName:"ul"},"Edge"),(0,l.kt)("li",{parentName:"ul"},"Internet Explorer")),(0,l.kt)("p",null,"Mobile:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"MobileSafari"),(0,l.kt)("li",{parentName:"ul"},"Google Chrome")),(0,l.kt)("p",null,"For the best experience and optimum security, we recommend that you keep your browser up to date. ",(0,l.kt)("a",{parentName:"p",href:"https://whatbrowser.org"},"https://whatbrowser.org")),(0,l.kt)("p",null,"Note: Legacy browsers with known compatibility issues with Moodle 3.5:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Internet Explorer 10 and below"),(0,l.kt)("li",{parentName:"ul"},"Safari 7 and below")),(0,l.kt)("h2",{id:"major-features"},"Major features"),(0,l.kt)("h3",{id:"gdpr"},"GDPR"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"https://tracker.moodle.org/browse/MDL-61275"},"MDL-61275")," - GDPR Consenting of Minors and Managing, Versioning and Tracking Privacy Policies and User Consents"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/browse/MDL-61292"},"MDL-61292")," - A new admin tool to manage policy documents")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/browse/MDL-61423"},"MDL-61423")," - Add age and location verification to identify minors")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/browse/MDL-61302"},"MDL-61302")," - Workflow to allow users to agree to all policies")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/browse/MDL-61301"},"MDL-61301")," - Report of user agreed policies and their versions")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/browse/MDL-61705"},"MDL-61705")," - Bulk accept of policies on behalf of users")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/browse/MDL-61864"},"MDL-61864")," - Include policy tool in core")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/browse/MDL-62286"},"MDL-62286")," - Add policy link to the site footer")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"https://tracker.moodle.org/browse/MDL-61306"},"MDL-61306")," - GDPR Data Requests and Data Registry"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/browse/MDL-59718"},"MDL-59718")," - A process to send a request to the data protection officer")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/browse/MDL-59720"},"MDL-59720")," - Delete personal data when it is no longer required")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/browse/MDL-61307"},"MDL-61307")," - Create a new privacy subsystem")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/browse/MDL-61362"},"MDL-61362")," - Ability to create data categories and purposes")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/browse/MDL-61486"},"MDL-61486")," - Data registry with purpose and retention period")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/browse/MDL-61489"},"MDL-61489")," - Report of plugin/components implementing the Privacy API")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/browse/MDL-61499"},"MDL-61499")," - Ability to set default purpose and retention periods for context levels")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/browse/MDL-61785"},"MDL-61785")," - Ability to review and confirm which expired data can be deleted")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/browse/MDL-61899"},"MDL-61899")," - Include data privacy tool in core")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/browse/MDL-61935"},"MDL-61935")," - Ability to specify the lawful bases for the collection of personal data"))),(0,l.kt)("h3",{id:"question-bank-tagging-improvements"},"Question bank tagging improvements"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-61066"},"MDL-61066")," - Expanded tagging functionality for question bank"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-61133"},"MDL-61133")," - New modal to add/edit/remove tags on questions"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-61135"},"MDL-61135")," - Filter questions by tag"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-61138"},"MDL-61138")," - Show the list of questions in the 'Add a random question' dialog"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-61363"},"MDL-61363")," - Ability to add question tags at a course level in the edit question form"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-61364"},"MDL-61364")," - Manage tags at a question and course context level"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-61380"},"MDL-61380")," - Allow filtering/adding random questions by tag for quizzes"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-61410"},"MDL-61410")," - Add import/export support for course level question tags"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-61444"},"MDL-61444")," - New capabilities for tagging questions")),(0,l.kt)("h3",{id:"ux-usability-improvements"},"UX: Usability improvements"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-62021"},"MDL-62021")," - Boost 4.0 Migration"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-56511"},"MDL-56511")," - Update bootstrap 4 to final release"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-61657"},"MDL-61657")," - Add images to the course cards on the dashboard")),(0,l.kt)("h3",{id:"lti-advantage-support"},"LTI Advantage support"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-60416"},"MDL-60416")," - Add support for LTI Advantage 1.1")),(0,l.kt)("h3",{id:"recordrtc-for-atto"},"RecordRTC for Atto"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-60848"},"MDL-60848")," - Implement RecordRTC Atto plugin as core feature"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-61973"},"MDL-61973")," - Update RecordRTC Atto plugin buttons")),(0,l.kt)("h3",{id:"messaging-database-tables"},"Messaging database tables"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-61254"},"MDL-61254")," - Merge messaging database tables"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-36941"},"MDL-36941")," - Create new tables for messaging"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-61255"},"MDL-61255")," - Ad-hoc task to upgrade messages to merged table")),(0,l.kt)("p",null,"See also ",(0,l.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Message_API#Changes_in_Moodle_3.5"},"Message API#Changes in Moodle 3.5")),(0,l.kt)("h2",{id:"other-highlights"},"Other Highlights"),(0,l.kt)("h3",{id:"global-search"},"Global search"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-58885"},"MDL-58885")," - Add group support"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-59434"},"MDL-59434")," - Content aware searching / alternate results sort orders"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-60981"},"MDL-60981")," - Reindex a single area"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-61028"},"MDL-61028")," - Allow filtering search by user"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-61256"},"MDL-61256")," - Search of section titles, summaries")),(0,l.kt)("h3",{id:"functional-changes"},"Functional changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-2051"},"MDL-2051")," - Inform student whether and how their selected choice will display"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-32585"},"MDL-32585")," - SCORM: option to force new attempts"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-53226"},"MDL-53226")," - Add Moodle DB search engine"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-55491"},"MDL-55491")," - Use cohort as badge criteria"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-56246"},"MDL-56246")," - Add site wide default for grade export: include feedback"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-59875"},"MDL-59875")," - Allow badges as criteria for other badges"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-60119"},"MDL-60119")," - Feedback - Multiple choice (rated) - remove weights from answer"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-61203"},"MDL-61203")," - Allow uploading of profile picture to be used as badge criteria"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-61601"},"MDL-61601")," - Allow cohort themes"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-61651"},"MDL-61651")," - LTI: line item definition within link to return gradable LTI links"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-60811"},"MDL-60811")," - Bulk delete self-registered enrolments on participants page"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-60682"},"MDL-60682")," - Ability to set date/time to nearest minute"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-60441"},"MDL-60441")," - Ability to add a link to glossary entries"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-58411"},"MDL-58411")," - Ability to apply file type restrictions for essay question type"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-56945"},"MDL-56945")," - Add easy return path from PDF grading screen to list of submissions"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-52811"},"MDL-52811")," - Add force language capability to course settings"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-41090"},"MDL-41090")," - Allow teachers to embed files when manually grading questions")),(0,l.kt)("h3",{id:"security-issues"},"Security issues"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=371199"},"MSA-18-0007")," Calculated question type allows remote code execution by Question authors"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=371200"},"MSA-18-0008")," Users can download any file via portfolio assignment caller class"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=371201"},"MSA-18-0009")," Portfolio forum caller class allows a user to download any file"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=371202"},"MSA-18-0010")," User can shift a block from Dashboard to any page"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=371203"},"MSA-18-0011")," User who did not agree to the site policies can see the site homepage as if they had full site access"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=371204"},"MSA-18-0012")," Portfolio script allows instantiation of class chosen by user")),(0,l.kt)("h3",{id:"for-developers"},"For developers"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-61307"},"MDL-61307")," - All plugins must implement ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Privacy_API"},"Privacy API")," to be compliant with GDPR requirements. They must implement the API to report on, export and delete stored user data"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-56511"},"MDL-56511")," - Bootstrap is upgraded to final release of version 4"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-61869"},"MDL-61869")," - Infer rendering of templatables with no render method"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-61298"},"MDL-61298")," - Boost: use navigation node icon")),(0,l.kt)("h4",{id:"upgrading-plugins"},"Upgrading plugins"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"1. Check for changes in core APIs")),(0,l.kt)("p",null,"Read lib/upgrade.txt to check for the deprecations and core API changes, make sure you applied them to your plugin. Note that entries there are not sorted by priority but rather by integration time. Below is the list of upgrade.txt files that contain information about upgrading from Moodle 3.4 to Moodle 3.5 (note that if you upgrade from earlier versions there may be more files):"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v3.5.0/lib/upgrade.txt"},"lib/upgrade.txt")," changes to various core APIs, deprecations, functions removal"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v3.5.0/calendar/upgrade.txt"},"calendar/upgrade.txt")," changes to Calendar API"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v3.5.0/search/upgrade.txt"},"search/upgrade.txt")," changes to Global search API"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v3.5.0/message/upgrade.txt"},"message/upgrade.txt")," changes to Messages API - See also ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Message_API#Changes_in_Moodle_3.5"},"Message API#Changes in Moodle 3.5")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v3.5.0/course/upgrade.txt"},"course/upgrade.txt")," changes to Course API")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"2. Check for changes in the API of your plugin type")),(0,l.kt)("p",null,"Below is the list of plugin types that had API changes between Moodle 3.4 and 3.5:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v3.5.0/enrol/upgrade.txt"},"enrol/upgrade.txt")," Enrolment method plugins"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v3.5.0/mod/upgrade.txt"},"mod/upgrade.txt")," Activity module plugins"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v3.5.0/auth/upgrade.txt"},"auth/upgrade.txt")," Authentication plugins"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v3.5.0/course/format/upgrade.txt"},"course/format/upgrade.txt")," Course format plugins"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v3.5.0/question/type/upgrade.txt"},"question/type/upgrade.txt")," Question type plugins")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"3. Check for changes in the depended plugins")),(0,l.kt)("p",null,"If your plugin depends on another plugin or calls methods from another plugin, read upgrade.txt in this plugin directory (if it exists). Below is the list of standard plugins that had changes between Moodle 3.4 and 3.5:"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/moodle/moodle/blob/v3.5.0/admin/tool/mobile/upgrade.txt"},"tool_mobile"),",\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/moodle/moodle/blob/v3.5.0/admin/tool/usertours/upgrade.txt"},"tool_usertours"),",\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/moodle/moodle/blob/v3.5.0/mod/assign/upgrade.txt"},"mod_assign"),",\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/moodle/moodle/blob/v3.5.0/mod/feedback/upgrade.txt"},"mod_feedback"),",\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/moodle/moodle/blob/v3.5.0/mod/quiz/upgrade.txt"},"mod_quiz"),",\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/moodle/moodle/blob/v3.5.0/mod/scorm/upgrade.txt"},"mod_scorm"),",\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/moodle/moodle/blob/v3.5.0/theme/boost/upgrade.txt"},"theme_boost")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"4. Do a smoke test of your plugin with developer debugging mode")),(0,l.kt)("p",null,"Make sure to check on both Boost and Clean themes. Bootstrap was upgraded in Moodle 3.5"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"5. Run all behat and phpunit tests")),(0,l.kt)("h2",{id:"translations"},"Translations"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_3.5"},"Notes de mise \xe0 jour de Moodle 3.5")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/es/Notas_de_Moodle_3.5"},"Notas de Moodle 3.5"))))}h.isMDXComponent=!0}}]);