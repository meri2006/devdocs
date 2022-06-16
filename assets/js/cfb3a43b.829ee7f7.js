"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[354],{3185:function(e,t,i){i.r(t),i.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return p}});var a=i(83117),n=i(80102),r=(i(67294),i(3905)),o=i(13904),s=["components"],u={title:"Favourites API",tags:["API","core_favourites"]},c=void 0,l={unversionedId:"apis/subsystems/favourites/index",id:"apis/subsystems/favourites/index",title:"Favourites API",description:"Overview",source:"@site/docs/apis/subsystems/favourites/index.md",sourceDirName:"apis/subsystems/favourites",slug:"/apis/subsystems/favourites/",permalink:"/devdocs/docs/apis/subsystems/favourites/",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/docs/apis/subsystems/favourites/index.md",tags:[{label:"API",permalink:"/devdocs/docs/tags/api"},{label:"core_favourites",permalink:"/devdocs/docs/tags/core-favourites"}],version:"current",lastUpdatedBy:"ferranrecio",lastUpdatedAt:1655390877,formattedLastUpdatedAt:"16/06/2022",frontMatter:{title:"Favourites API",tags:["API","core_favourites"]},sidebar:"docs",previous:{title:"Enrolment API",permalink:"/devdocs/docs/apis/subsystems/enrol"},next:{title:"File API",permalink:"/devdocs/docs/apis/subsystems/files/"}},d={},p=[{value:"Overview",id:"overview",level:2},{value:"What is a favourite?",id:"what-is-a-favourite",level:3},{value:"What can be marked as a favourite?",id:"what-can-be-marked-as-a-favourite",level:3},{value:"Identifying items",id:"identifying-items",level:3},{value:"Using the API",id:"using-the-api",level:2},{value:"Getting a service object",id:"getting-a-service-object",level:3},{value:"Creating a favourite",id:"creating-a-favourite",level:3},{value:"Reading favourites",id:"reading-favourites",level:3},{value:"Deleting a favourite",id:"deleting-a-favourite",level:3},{value:"Including favourites in external queries",id:"including-favourites-in-external-queries",level:3}],v={toc:p};function m(e){var t=e.components,i=(0,n.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},v,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,(0,a.Z)({frontMatter:u},void 0!==l?{metadata:l}:{},{mdxType:"MoodlePageBanner"})),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("h3",{id:"what-is-a-favourite"},"What is a favourite?"),(0,r.kt)("p",null,"The favourites API allows you to mark items as favourites for a given user. Marking an item as a favourite is akin to adding a web page to your browser favourites (or bookmarks), or marking someone in your contacts as a favourite. The API provides a means to create, read and delete favourite items, allowing any component to favourite arbitrary items as they see fit."),(0,r.kt)("h3",{id:"what-can-be-marked-as-a-favourite"},"What can be marked as a favourite?"),(0,r.kt)("p",null,"Almost any 'item' can be marked as a favourite, provided it is something which can be identified by a unique integer id."),(0,r.kt)("h3",{id:"identifying-items"},"Identifying items"),(0,r.kt)("p",null,"In order to store a favourite, and be able to uniquely identify it for later retrieval, 4 fields are required. These are: ",(0,r.kt)("strong",{parentName:"p"},"component"),", ",(0,r.kt)("strong",{parentName:"p"},"itemtype"),", ",(0,r.kt)("strong",{parentName:"p"},"itemid")," and ",(0,r.kt)("strong",{parentName:"p"},"contextid"),". You will see these in a range of API calls."),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"itemid")," is a unique integer identifier of the item itself. This might be a course id, or conversation id, or the id of any entity in Moodle. In fact, it does not have to be the id of a record from the database either; it can be any arbitrary id, so long as the component storing the item knows what it represents."),(0,r.kt)("p",null,"The two fields ",(0,r.kt)("strong",{parentName:"p"},"component")," and ",(0,r.kt)("strong",{parentName:"p"},"itemtype")," make up a pairing representing the ",(0,r.kt)("em",{parentName:"p"},"type")," of each favourite. Within this pair, the ",(0,r.kt)("strong",{parentName:"p"},"component")," must be a valid ",(0,r.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Frankenstyle"},"frankenstyle")," component name and is the name of the component wishing to set/unset the item as a favourite. The ",(0,r.kt)("strong",{parentName:"p"},"itemtype")," can be any identifying string, provided it is unique within the respective component. The type pairing allows us to distinguish between favourites of different types (from different areas of Moodle), which may have identical itemid values."),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"contextid")," is the id of the context in which the item is being marked as a favourite. For example, a user's course might be marked as a favourite at the course context, whereas a user's conversation with another user might be marked as a favourite at the user context. It's also possible that items of a certain ",(0,r.kt)("em",{parentName:"p"},"type")," (remember, this is the {component, itemtype} pairing) will be marked as favourites in different contexts, based on the context of the item itself. For example, consider the case in messaging, in which we have a group conversation (one which is linked to a course group), and an individual conversation between two users. Setting the group conversation as a favourite would require the course context to be used, whereas doing the same for the individual conversation would require a user context. Which contextid to use is a decision that must be made by the component creating the favourite."),(0,r.kt)("h2",{id:"using-the-api"},"Using the API"),(0,r.kt)("h3",{id:"getting-a-service-object"},"Getting a service object"),(0,r.kt)("p",null,"Favourites relies on a service layer to provide functionality to consumers. Getting a service object is as simple as using the service factory methods."),(0,r.kt)("p",null,"Assuming you have a user context, you can get a service scoped to a single user with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$ufservice = \\core_favourites\\service_factory::get_service_for_user_context($usercontext);\n")),(0,r.kt)("p",null,"The returned ",(0,r.kt)("inlineCode",{parentName:"p"},"$ufservice")," is an object of type \\core_favourites\\local\\service\\user_favourite_service."),(0,r.kt)("h3",{id:"creating-a-favourite"},"Creating a favourite"),(0,r.kt)("p",null,"Let's say we want to set a course as a favourite. Note: In core, this is done by using the favourite ",(0,r.kt)("em",{parentName:"p"},"type")," {'core_course', 'courses'}."),(0,r.kt)("p",null,"The service provides the method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"public function create_favourite(\n    string $component,\n    string $itemtype,\n    int $itemid,\n    \\context $context,\n    int $ordering = null\n): favourite;\n")),(0,r.kt)("p",null,"So, assuming we have the course id and course context, we can create our favourite with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$favourite = $ufservice->create_favourite('core_course', 'courses', $course->id, $coursecontext);\n")),(0,r.kt)("p",null,"The returned $favourite is an object of type \\core_favourites\\local\\entity\\favourite."),(0,r.kt)("h3",{id:"reading-favourites"},"Reading favourites"),(0,r.kt)("p",null,"There are several read actions supported by the service object."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"public function count_favourites_by_type(string $component, string $itemtype, \\context $context = null) : int;\npublic function find_favourites_by_type(string $component, string $itemtype, int $limitfrom = 0, int $limitnum = 0) : array;\npublic function favourite_exists(string $component, string $itemtype, int $itemid, \\context $context) : bool;\npublic function get_favourite(string $component, string $itemtype, int $itemid, \\context $context) : favourite;\n")),(0,r.kt)("h3",{id:"deleting-a-favourite"},"Deleting a favourite"),(0,r.kt)("p",null,"The service provides the method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"public function delete_favourite(string $component, string $itemtype, int $itemid, \\context $context);\n")),(0,r.kt)("p",null,"So, assuming we have the course id and course context, we can remove the favourite with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$ufservice = \\core_favourites\\service_factory::get_service_for_user_context($usercontext);\n$ufservice->delete_favourite('core_course', 'courses', $course->id, $coursecontext);\n")),(0,r.kt)("h3",{id:"including-favourites-in-external-queries"},"Including favourites in external queries"),(0,r.kt)("p",null,"Most of the time, you should ask the service to find favourite items for you. Sometimes, however, rather than fetching the favourites from the service, you'll just want to include the relevant information in those records from an existing query. You might want to do this if dealing with performance sensitive code where additional queries are undesirable."),(0,r.kt)("p",null,"The service lets you do this too, by providing the method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"public function get_join_sql_by_type(string $component, string $itemtype, string $tablealias, string $joinitemid) : array;\n")),(0,r.kt)("p",null,"which can be used in such cases."),(0,r.kt)("p",null,"For example, and for simplicity, let's say we have a query returning the ids and names of all courses within a given course category:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$sql = \"SELECT c.id, c.name\n          FROM {course} c\n         WHERE c.category = :category\";\n$params = ['category' => 3];\n\n$courses = $DB->get_records_sql($sql, $params);\n")),(0,r.kt)("p",null,"we can then modify this using the get_join_sql_by_type() result to include favourite information."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$ufservice = \\core_favourites\\service_factory::get_service_for_user_context($usercontext);\nlist($favsql, $favparams) = $ufservice->get_join_sql_by_type('core_course', 'courses', 'favalias', 'c.id');\n\n$sql = \"SELECT c.id, c.name, favalias.id as favouriteid\n          FROM {course} c\n       $favsql\n         WHERE c.category = :category\";\n$params = ['category' => 3] + $favparams;\n\n$courses = $DB->get_records_sql($sql, $params);\n")),(0,r.kt)("p",null,"We've now included id of the favourite in the results via a LEFT JOIN, so as to preserve the original set of records."),(0,r.kt)("p",null,"If you wish to select ONLY favourites, adding ",(0,r.kt)("inlineCode",{parentName:"p"},'"AND favouriteid IS NOT NULL"')," to the query will achieve this."))}m.isMDXComponent=!0}}]);