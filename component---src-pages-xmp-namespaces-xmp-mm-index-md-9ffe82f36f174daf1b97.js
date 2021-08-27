(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[610],{15507:function(e,t,a){"use strict";a.r(t),a.d(t,{_frontmatter:function(){return i},default:function(){return p}});var n=a(22122),r=a(19756),m=(a(15007),a(64983)),o=a(99536),d=["components"],i={},s={_frontmatter:i},l=o.Z;function p(e){var t=e.components,a=(0,r.Z)(e,d);return(0,m.mdx)(l,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,m.mdx)("h1",{id:"xmp-media-management-namespace"},"XMP Media Management namespace"),(0,m.mdx)("p",null,"This namespace is primarily for use by digital asset management (DAM) systems."),(0,m.mdx)("p",null,"The following properties are “owned” by the DAM system and should be set by applications under their direction; they should not be used by unmanaged files: ",(0,m.mdx)("em",{parentName:"p"},"xmpMM:ManagedFrom, xmpMM:Manager, xmpMM:ManageTo, xmpMM:ManageUI, xmpMM: ManagerVariant"),"."),(0,m.mdx)("p",null,"The following properties are owned by the DAM system for managed files, but can also be used by applications for unmanaged files: ",(0,m.mdx)("em",{parentName:"p"},"xmpMM:DerivedFrom, xmpMM:DocumentID, xmpMM: RenditionClass, xmpMM:RenditionParams, xmpMM:VersionID, xmpMM:Versions"),"."),(0,m.mdx)("p",null,"The ",(0,m.mdx)("em",{parentName:"p"},"xmpMM:History")," property is always owned by the application."),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},"The namespace URI is ",(0,m.mdx)("a",{parentName:"p",href:"http://ns.adobe.com/xap/1.0/mm/"},"http://ns.adobe.com/xap/1.0/mm/"))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},"The preferred namespace prefix is xmpMM"))),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null}),(0,m.mdx)("th",{parentName:"tr",align:null}),(0,m.mdx)("th",{parentName:"tr",align:null}))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("strong",{parentName:"td"},"Name")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("strong",{parentName:"td"},"Description")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("strong",{parentName:"td"},"Type"))),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"xmpMM:DerivedFrom"),(0,m.mdx)("td",{parentName:"tr",align:null},"A reference to the original document from which this one is derived. It is a minimal reference; missing components can be assumed to be unchanged. For example, a new version might only need to specify the instance ID and version number of the previous version, or a rendition might only need to specify the instance ID and rendition class of the original."),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("a",{parentName:"td",href:"./XMPDataTypes/ResourceRef.md"},"ResourceRef"))),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"xmpMM:DocumentID"),(0,m.mdx)("td",{parentName:"tr",align:null},"The common identifier for all versions and renditions of a resource. It should be based on a UUID; Created once for new resources. Different renditions are expected to have different values for xmpMM:DocumentID."),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("a",{parentName:"td",href:"./XMPDataTypes/CoreProperties.md#guid"},"GUID"))),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"xmpMM:InstanceID"),(0,m.mdx)("td",{parentName:"tr",align:null},"An identifier for a specific incarnation of a resource, updated each time a file is saved. It should be based on a UUID;"),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("a",{parentName:"td",href:"./XMPDataTypes/CoreProperties.md#guid"},"GUID"))),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"xmpMM:OriginalDocumentID"),(0,m.mdx)("td",{parentName:"tr",align:null},"The common identifier for the original resource from which the current resource is derived. For example, if you save a resource to a different format, then save that one to another format, each save operation should generate a new xmpMM:DocumentID that uniquely identifies the resource in that format, but should retain the ID of the source file here. It links a resource to its original source."),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("a",{parentName:"td",href:"./XMPDataTypes/CoreProperties.md#guid"},"GUID"))),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"xmpMM:RenditionClass"),(0,m.mdx)("td",{parentName:"tr",align:null},"The rendition class name for this resource. This property should be absent or set to default for a document version that is not a derived rendition."),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("a",{parentName:"td",href:"./XMPDataTypes/CoreProperties.md#renditionclass"},"RenditionClass"))),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"xmpMM:RenditionParams"),(0,m.mdx)("td",{parentName:"tr",align:null},"Can be used to provide additional rendition parameters that are too complex or verbose to encode in xmpMM: RenditionClass."),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("a",{parentName:"td",href:"./XMPDataTypes/CoreProperties.md#text"},"Text"))),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"xmpMM:History"),(0,m.mdx)("td",{parentName:"tr",align:null},"An ordered array of high-level user actions that resulted in this resource. It is intended to give human readers a description of the steps taken to make the changes from the previous version to this one. The list should be at an abstract level; it is not intended to be an exhaustive keystroke or other detailed history. The description should be sufficient for metadata management, as well as for workflow enhancement."),(0,m.mdx)("td",{parentName:"tr",align:null},"Ordered array of ",(0,m.mdx)("a",{parentName:"td",href:"./XMPDataTypes/ResourceEvent.md"},"ResourceEvent"))),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"xmpMM:Ingredients"),(0,m.mdx)("td",{parentName:"tr",align:null},"References to resources that were incorporated, by inclusion or reference, into this resource."),(0,m.mdx)("td",{parentName:"tr",align:null},"Unordered array of ",(0,m.mdx)("a",{parentName:"td",href:"./XMPDataTypes/ResourceRef.md"},"ResourceRef"))),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"xmpMM:Pantry"),(0,m.mdx)("td",{parentName:"tr",align:null},"Each array item has a structure value with a potentially unique set of fields, containing extracted XMP from a component. Each field is a property from the XMP of a contained resource component, with all substructure preserved. Each pantry entry shall contain an ",(0,m.mdx)("strong",{parentName:"td"},"xmpMM:InstanceID"),". Only one copy of the pantry entry for any given ",(0,m.mdx)("strong",{parentName:"td"},"xmpMM:InstanceID")," shall be retained in the pantry. Nested pantry items shall be removed from the individual pantry item and promoted to the top level of the pantry."),(0,m.mdx)("td",{parentName:"tr",align:null},"Unordered array of struct")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"xmpMM:ManagedFrom"),(0,m.mdx)("td",{parentName:"tr",align:null},"A reference to the document as it was prior to becoming managed. It is set when a managed document is introduced to an asset management system that does not currently own it. It may or may not include references to different management systems."),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("a",{parentName:"td",href:"./XMPDataTypes/ResourceRef.md"},"ResourceRef"))),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"xmpMM:Manager"),(0,m.mdx)("td",{parentName:"tr",align:null},"The name of the asset management system that manages this resource. Along with xmpMM: ManagerVariant, it tells applications which asset management system to contact concerning this document."),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("a",{parentName:"td",href:"./XMPDataTypes/CoreProperties.md#agent-name"},"AgentName"))),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"xmpMM:ManageTo"),(0,m.mdx)("td",{parentName:"tr",align:null},"A URI identifying the managed resource to the asset management system; the presence of this property is the formal indication that this resource is managed. The form and content of this URI is private to the asset management system."),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("a",{parentName:"td",href:"./XMPDataTypes/CoreProperties.md#uri"},"URI"))),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"xmpMM:ManageUI"),(0,m.mdx)("td",{parentName:"tr",align:null},"A URI that can be used to access information about the managed resource through a web browser. It might require a custom browser plug-in."),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("a",{parentName:"td",href:"./XMPDataTypes/CoreProperties.md#uri"},"URI"))),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"xmpMM:ManagerVariant"),(0,m.mdx)("td",{parentName:"tr",align:null},"Specifies a particular variant of the asset management system. The format of this property is private to the specific asset management system."),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("a",{parentName:"td",href:"./XMPDataTypes/CoreProperties.md#text"},"Text"))),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"xmpMM:VersionID"),(0,m.mdx)("td",{parentName:"tr",align:null},"The document version identifier for this resource. Each version of a document gets a new identifier, usually simply by incrementing integers 1, 2, 3 . . . and so on. Media management systems can have other conventions or support branching which requires a more complex scheme."),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("a",{parentName:"td",href:"./XMPDataTypes/CoreProperties.md#text"},"Text"))),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"xmpMM:Versions"),(0,m.mdx)("td",{parentName:"tr",align:null},"The version history associated with this resource. Entry 1 is the oldest known version for this document, entry","[last()]"," is the most recent version. Typically, a media management system would fill in the version information in the metadata on check-in. It is not guaranteed that a complete history of versions from the first to this one will be present in the xmpMM:Versions property. Interior version information can be compressed or eliminated and the version history can be truncated at some point."),(0,m.mdx)("td",{parentName:"tr",align:null},"Ordered array of ",(0,m.mdx)("a",{parentName:"td",href:"./XMPDataTypes/Version.md"},"Version"))))))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-xmp-namespaces-xmp-mm-index-md-9ffe82f36f174daf1b97.js.map