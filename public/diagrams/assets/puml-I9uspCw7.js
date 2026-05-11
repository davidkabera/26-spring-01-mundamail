function e(n){switch(n){case"index":return`@startuml
title "Landscape view"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam person<<GovAgency>>{
  BackgroundColor #737373
  FontColor #FFFFFF
  BorderColor #737373
}
skinparam person<<WebClient>>{
  BackgroundColor #64748b
  FontColor #FFFFFF
  BorderColor #64748b
}
skinparam rectangle<<Gms>>{
  BackgroundColor #64748b
  FontColor #FFFFFF
  BorderColor #64748b
}
person "==Gov Agency\\n\\nREST Client" <<GovAgency>> as GovAgency
person "==Web/Mobile Client\\n\\nUser & Admin Interfaces" <<WebClient>> as WebClient
rectangle "==Government Messaging System" <<Gms>> as Gms

GovAgency .[#777777,thickness=2].> Gms : "<color:#777777>Integrates via REST<color:#777777>"
WebClient .[#777777,thickness=2].> Gms : "<color:#777777>API calls via HTTPS<color:#777777>"
@enduml
`;case"systemContext":return`@startuml
title "C1: System Context"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam person<<GovAgency>>{
  BackgroundColor #737373
  FontColor #FFFFFF
  BorderColor #737373
}
skinparam person<<WebClient>>{
  BackgroundColor #64748b
  FontColor #FFFFFF
  BorderColor #64748b
}
skinparam rectangle<<Gms>>{
  BackgroundColor #64748b
  FontColor #FFFFFF
  BorderColor #64748b
}
person "==Gov Agency\\n\\nREST Client" <<GovAgency>> as GovAgency
person "==Web/Mobile Client\\n\\nUser & Admin Interfaces" <<WebClient>> as WebClient
rectangle "==Government Messaging System" <<Gms>> as Gms

GovAgency .[#777777,thickness=2].> Gms : "<color:#777777>Integrates via REST<color:#777777>"
WebClient .[#777777,thickness=2].> Gms : "<color:#777777>API calls via HTTPS<color:#777777>"
@enduml
`;case"containerView":return`@startuml
title "C2: Container View"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam person<<GovAgency>>{
  BackgroundColor #737373
  FontColor #FFFFFF
  BorderColor #737373
}
skinparam person<<WebClient>>{
  BackgroundColor #64748b
  FontColor #FFFFFF
  BorderColor #64748b
}
skinparam rectangle<<GmsEdgeSubApiGateway>>{
  BackgroundColor #6366f1
  FontColor #FFFFFF
  BorderColor #6366f1
}
skinparam rectangle<<GmsEventSubIdentityServer>>{
  BackgroundColor #0284c7
  FontColor #FFFFFF
  BorderColor #0284c7
}
skinparam rectangle<<GmsEventSubRoleModule>>{
  BackgroundColor #0284c7
  FontColor #FFFFFF
  BorderColor #0284c7
}
skinparam queue<<GmsEventSubEventBus>>{
  BackgroundColor #0284c7
  FontColor #FFFFFF
  BorderColor #0284c7
}
skinparam rectangle<<GmsProcessingSubInspector>>{
  BackgroundColor #ac4d39
  FontColor #FFFFFF
  BorderColor #ac4d39
}
skinparam rectangle<<GmsProcessingSubMsgWorkers>>{
  BackgroundColor #ac4d39
  FontColor #FFFFFF
  BorderColor #ac4d39
}
skinparam rectangle<<GmsProcessingSubSmtpBridge>>{
  BackgroundColor #ac4d39
  FontColor #FFFFFF
  BorderColor #ac4d39
}
skinparam rectangle<<GmsProcessingSubAuditLogger>>{
  BackgroundColor #ac4d39
  FontColor #FFFFFF
  BorderColor #ac4d39
}
skinparam database<<GmsPersistenceSubEmailStore>>{
  BackgroundColor #737373
  FontColor #FFFFFF
  BorderColor #737373
}
skinparam database<<GmsPersistenceSubArchiveDb>>{
  BackgroundColor #737373
  FontColor #FFFFFF
  BorderColor #737373
}
skinparam database<<GmsPersistenceSubReplicaDb>>{
  BackgroundColor #737373
  FontColor #FFFFFF
  BorderColor #737373
}
skinparam database<<GmsPersistenceSubLogStore>>{
  BackgroundColor #737373
  FontColor #FFFFFF
  BorderColor #737373
}
person "==Gov Agency\\n\\nREST Client" <<GovAgency>> as GovAgency
person "==Web/Mobile Client\\n\\nUser & Admin Interfaces" <<WebClient>> as WebClient
rectangle "Government Messaging System" <<Gms>> as Gms {
  skinparam RectangleBorderColor<<Gms>> #64748b
  skinparam RectangleFontColor<<Gms>> #64748b
  skinparam RectangleBorderStyle<<Gms>> dashed

  rectangle "Edge Layer" <<GmsEdgeSub>> as GmsEdgeSub {
    skinparam RectangleBorderColor<<GmsEdgeSub>> #6366f1
    skinparam RectangleFontColor<<GmsEdgeSub>> #6366f1
    skinparam RectangleBorderStyle<<GmsEdgeSub>> dashed

    rectangle "==API Gateway\\n\\nTLS termination, rate limiting and request routing" <<GmsEdgeSubApiGateway>> as GmsEdgeSubApiGateway
  }
  rectangle "Event Layer" <<GmsEventSub>> as GmsEventSub {
    skinparam RectangleBorderColor<<GmsEventSub>> #0284c7
    skinparam RectangleFontColor<<GmsEventSub>> #0284c7
    skinparam RectangleBorderStyle<<GmsEventSub>> dashed

    rectangle "==Identity Server\\n\\nOAuth 2.0, LDAP/SAML" <<GmsEventSubIdentityServer>> as GmsEventSubIdentityServer
    rectangle "==RBAC Module\\n\\nRole-based access control" <<GmsEventSubRoleModule>> as GmsEventSubRoleModule
    queue "==Event Bus\\n\\nTopics: msg.inbound, msg.outbound, msg.audit, msg.dlq" <<GmsEventSubEventBus>> as GmsEventSubEventBus
  }
  rectangle "Processing Layer" <<GmsProcessingSub>> as GmsProcessingSub {
    skinparam RectangleBorderColor<<GmsProcessingSub>> #428a4f
    skinparam RectangleFontColor<<GmsProcessingSub>> #428a4f
    skinparam RectangleBorderStyle<<GmsProcessingSub>> dashed

    rectangle "==Content Inspector\\n\\nBlocks .exe, .bat, .sh at ingestion point" <<GmsProcessingSubInspector>> as GmsProcessingSubInspector
    rectangle "==Message Workers\\n\\nAsync consumers, DLQ, retry & backoff logic" <<GmsProcessingSubMsgWorkers>> as GmsProcessingSubMsgWorkers
    rectangle "==REST-SMTP Bridge\\n\\nTranslates REST calls to IMAP/SMTP commands" <<GmsProcessingSubSmtpBridge>> as GmsProcessingSubSmtpBridge
    rectangle "==Audit Logger\\n\\nTamper-evident log of all API calls & admin events" <<GmsProcessingSubAuditLogger>> as GmsProcessingSubAuditLogger
  }
  rectangle "Persistence Layer" <<GmsPersistenceSub>> as GmsPersistenceSub {
    skinparam RectangleBorderColor<<GmsPersistenceSub>> #a35829
    skinparam RectangleFontColor<<GmsPersistenceSub>> #a35829
    skinparam RectangleBorderStyle<<GmsPersistenceSub>> dashed

    database "==Email Store\\n\\nAES-256 at rest, IMAP-accessible mailboxes" <<GmsPersistenceSubEmailStore>> as GmsPersistenceSubEmailStore
    database "==Archive DB\\n\\n5-year retention tier, separate storage node" <<GmsPersistenceSubArchiveDb>> as GmsPersistenceSubArchiveDb
    database "==Replica/Backup\\n\\nDaily snapshots and failover" <<GmsPersistenceSubReplicaDb>> as GmsPersistenceSubReplicaDb
    database "==Audit Log Store\\n\\nRegulatory-compliant, 12-month retention" <<GmsPersistenceSubLogStore>> as GmsPersistenceSubLogStore
  }
}

GovAgency .[#777777,thickness=2].> GmsEdgeSubApiGateway : "<color:#777777>Integrates via REST<color:#777777>"
WebClient .[#777777,thickness=2].> GmsEdgeSubApiGateway : "<color:#777777>API calls via HTTPS<color:#777777>"
GmsEdgeSubApiGateway .[#777777,thickness=2].> GmsEventSubIdentityServer : "<color:#777777>Authenticates via<color:#777777>"
GmsEdgeSubApiGateway .[#777777,thickness=2].> GmsEventSubRoleModule : "<color:#777777>Authorizes via<color:#777777>"
GmsEdgeSubApiGateway .[#777777,thickness=2].> GmsEventSubEventBus : "<color:#777777>Publishes events to<color:#777777>"
GmsEventSubEventBus .[#777777,thickness=2].> GmsProcessingSubInspector : "<color:#777777>msg.inbound<color:#777777>"
GmsEventSubEventBus .[#777777,thickness=2].> GmsProcessingSubMsgWorkers : "<color:#777777>msg.outbound<color:#777777>"
GmsEventSubEventBus .[#777777,thickness=2].> GmsProcessingSubSmtpBridge : "<color:#777777>msg.outbound<color:#777777>"
GmsEventSubEventBus .[#777777,thickness=2].> GmsProcessingSubAuditLogger : "<color:#777777>msg.audit<color:#777777>"
GmsProcessingSubInspector .[#777777,thickness=2].> GmsPersistenceSubEmailStore : "<color:#777777>Stores filtered emails<color:#777777>"
GmsProcessingSubMsgWorkers .[#777777,thickness=2].> GmsPersistenceSubArchiveDb : "<color:#777777>Archives messages<color:#777777>"
GmsProcessingSubSmtpBridge .[#777777,thickness=2].> GmsPersistenceSubReplicaDb : "<color:#777777>Syncs via IMAP/SMTP<color:#777777>"
GmsProcessingSubAuditLogger .[#777777,thickness=2].> GmsPersistenceSubLogStore : "<color:#777777>Writes audit entries<color:#777777>"
@enduml
`;case"eventLayerComponents":return`@startuml
title "C3: Event Layer - Components"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<GmsEdgeSub>>{
  BackgroundColor #6366f1
  FontColor #FFFFFF
  BorderColor #6366f1
}
skinparam rectangle<<GmsEventSubIdentityServer>>{
  BackgroundColor #0284c7
  FontColor #FFFFFF
  BorderColor #0284c7
}
skinparam rectangle<<GmsEventSubRoleModule>>{
  BackgroundColor #0284c7
  FontColor #FFFFFF
  BorderColor #0284c7
}
skinparam queue<<GmsEventSubEventBus>>{
  BackgroundColor #0284c7
  FontColor #FFFFFF
  BorderColor #0284c7
}
skinparam rectangle<<GmsProcessingSub>>{
  BackgroundColor #428a4f
  FontColor #FFFFFF
  BorderColor #428a4f
}
rectangle "==Edge Layer" <<GmsEdgeSub>> as GmsEdgeSub
rectangle "Event Layer" <<GmsEventSub>> as GmsEventSub {
  skinparam RectangleBorderColor<<GmsEventSub>> #0284c7
  skinparam RectangleFontColor<<GmsEventSub>> #0284c7
  skinparam RectangleBorderStyle<<GmsEventSub>> dashed

  rectangle "==Identity Server\\n\\nOAuth 2.0, LDAP/SAML" <<GmsEventSubIdentityServer>> as GmsEventSubIdentityServer
  rectangle "==RBAC Module\\n\\nRole-based access control" <<GmsEventSubRoleModule>> as GmsEventSubRoleModule
  queue "==Event Bus\\n\\nTopics: msg.inbound, msg.outbound, msg.audit, msg.dlq" <<GmsEventSubEventBus>> as GmsEventSubEventBus
}
rectangle "==Processing Layer" <<GmsProcessingSub>> as GmsProcessingSub

GmsEdgeSub .[#777777,thickness=2].> GmsEventSubIdentityServer : "<color:#777777>Authenticates via<color:#777777>"
GmsEdgeSub .[#777777,thickness=2].> GmsEventSubRoleModule : "<color:#777777>Authorizes via<color:#777777>"
GmsEdgeSub .[#777777,thickness=2].> GmsEventSubEventBus : "<color:#777777>Publishes events to<color:#777777>"
GmsEventSubEventBus .[#777777,thickness=2].> GmsProcessingSub : "<color:#777777>[...]<color:#777777>"
@enduml
`;case"processingLayerComponents":return`@startuml
title "C3: Processing Layer - Components"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<GmsEventSub>>{
  BackgroundColor #0284c7
  FontColor #FFFFFF
  BorderColor #0284c7
}
skinparam rectangle<<GmsProcessingSubInspector>>{
  BackgroundColor #ac4d39
  FontColor #FFFFFF
  BorderColor #ac4d39
}
skinparam rectangle<<GmsProcessingSubMsgWorkers>>{
  BackgroundColor #ac4d39
  FontColor #FFFFFF
  BorderColor #ac4d39
}
skinparam rectangle<<GmsProcessingSubSmtpBridge>>{
  BackgroundColor #ac4d39
  FontColor #FFFFFF
  BorderColor #ac4d39
}
skinparam rectangle<<GmsProcessingSubAuditLogger>>{
  BackgroundColor #ac4d39
  FontColor #FFFFFF
  BorderColor #ac4d39
}
skinparam rectangle<<GmsPersistenceSub>>{
  BackgroundColor #a35829
  FontColor #FFFFFF
  BorderColor #a35829
}
rectangle "==Event Layer" <<GmsEventSub>> as GmsEventSub
rectangle "Processing Layer" <<GmsProcessingSub>> as GmsProcessingSub {
  skinparam RectangleBorderColor<<GmsProcessingSub>> #428a4f
  skinparam RectangleFontColor<<GmsProcessingSub>> #428a4f
  skinparam RectangleBorderStyle<<GmsProcessingSub>> dashed

  rectangle "==Content Inspector\\n\\nBlocks .exe, .bat, .sh at ingestion point" <<GmsProcessingSubInspector>> as GmsProcessingSubInspector
  rectangle "==Message Workers\\n\\nAsync consumers, DLQ, retry & backoff logic" <<GmsProcessingSubMsgWorkers>> as GmsProcessingSubMsgWorkers
  rectangle "==REST-SMTP Bridge\\n\\nTranslates REST calls to IMAP/SMTP commands" <<GmsProcessingSubSmtpBridge>> as GmsProcessingSubSmtpBridge
  rectangle "==Audit Logger\\n\\nTamper-evident log of all API calls & admin events" <<GmsProcessingSubAuditLogger>> as GmsProcessingSubAuditLogger
}
rectangle "==Persistence Layer" <<GmsPersistenceSub>> as GmsPersistenceSub

GmsEventSub .[#777777,thickness=2].> GmsProcessingSubInspector : "<color:#777777>msg.inbound<color:#777777>"
GmsEventSub .[#777777,thickness=2].> GmsProcessingSubMsgWorkers : "<color:#777777>msg.outbound<color:#777777>"
GmsEventSub .[#777777,thickness=2].> GmsProcessingSubSmtpBridge : "<color:#777777>msg.outbound<color:#777777>"
GmsEventSub .[#777777,thickness=2].> GmsProcessingSubAuditLogger : "<color:#777777>msg.audit<color:#777777>"
GmsProcessingSubInspector .[#777777,thickness=2].> GmsPersistenceSub : "<color:#777777>Stores filtered emails<color:#777777>"
GmsProcessingSubMsgWorkers .[#777777,thickness=2].> GmsPersistenceSub : "<color:#777777>Archives messages<color:#777777>"
GmsProcessingSubSmtpBridge .[#777777,thickness=2].> GmsPersistenceSub : "<color:#777777>Syncs via IMAP/SMTP<color:#777777>"
GmsProcessingSubAuditLogger .[#777777,thickness=2].> GmsPersistenceSub : "<color:#777777>Writes audit entries<color:#777777>"
@enduml
`;case"persistenceLayerComponents":return`@startuml
title "C3: Persistence Layer - Components"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<GmsProcessingSub>>{
  BackgroundColor #428a4f
  FontColor #FFFFFF
  BorderColor #428a4f
}
skinparam database<<GmsPersistenceSubEmailStore>>{
  BackgroundColor #737373
  FontColor #FFFFFF
  BorderColor #737373
}
skinparam database<<GmsPersistenceSubArchiveDb>>{
  BackgroundColor #737373
  FontColor #FFFFFF
  BorderColor #737373
}
skinparam database<<GmsPersistenceSubReplicaDb>>{
  BackgroundColor #737373
  FontColor #FFFFFF
  BorderColor #737373
}
skinparam database<<GmsPersistenceSubLogStore>>{
  BackgroundColor #737373
  FontColor #FFFFFF
  BorderColor #737373
}
rectangle "==Processing Layer" <<GmsProcessingSub>> as GmsProcessingSub
rectangle "Persistence Layer" <<GmsPersistenceSub>> as GmsPersistenceSub {
  skinparam RectangleBorderColor<<GmsPersistenceSub>> #a35829
  skinparam RectangleFontColor<<GmsPersistenceSub>> #a35829
  skinparam RectangleBorderStyle<<GmsPersistenceSub>> dashed

  database "==Email Store\\n\\nAES-256 at rest, IMAP-accessible mailboxes" <<GmsPersistenceSubEmailStore>> as GmsPersistenceSubEmailStore
  database "==Archive DB\\n\\n5-year retention tier, separate storage node" <<GmsPersistenceSubArchiveDb>> as GmsPersistenceSubArchiveDb
  database "==Replica/Backup\\n\\nDaily snapshots and failover" <<GmsPersistenceSubReplicaDb>> as GmsPersistenceSubReplicaDb
  database "==Audit Log Store\\n\\nRegulatory-compliant, 12-month retention" <<GmsPersistenceSubLogStore>> as GmsPersistenceSubLogStore
}

GmsProcessingSub .[#777777,thickness=2].> GmsPersistenceSubEmailStore : "<color:#777777>Stores filtered emails<color:#777777>"
GmsProcessingSub .[#777777,thickness=2].> GmsPersistenceSubArchiveDb : "<color:#777777>Archives messages<color:#777777>"
GmsProcessingSub .[#777777,thickness=2].> GmsPersistenceSubReplicaDb : "<color:#777777>Syncs via IMAP/SMTP<color:#777777>"
GmsProcessingSub .[#777777,thickness=2].> GmsPersistenceSubLogStore : "<color:#777777>Writes audit entries<color:#777777>"
@enduml
`;case"webClientView":return`@startuml
title "C4: Web/Mobile Client - Internal"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<WebClientUserMobile>>{
  BackgroundColor #6366f1
  FontColor #FFFFFF
  BorderColor #6366f1
}
skinparam rectangle<<WebClientUserWeb>>{
  BackgroundColor #6366f1
  FontColor #FFFFFF
  BorderColor #6366f1
}
skinparam rectangle<<WebClientAdminPortal>>{
  BackgroundColor #6366f1
  FontColor #FFFFFF
  BorderColor #6366f1
}
skinparam rectangle<<Gms>>{
  BackgroundColor #64748b
  FontColor #FFFFFF
  BorderColor #64748b
}
rectangle "Web/Mobile Client" <<WebClient>> as WebClient {
  skinparam RectangleBorderColor<<WebClient>> #64748b
  skinparam RectangleFontColor<<WebClient>> #64748b
  skinparam RectangleBorderStyle<<WebClient>> dashed

  rectangle "==Mobile App\\n\\nNative mobile interface" <<WebClientUserMobile>> as WebClientUserMobile
  rectangle "==Web Client\\n\\nBrowser-based UI" <<WebClientUserWeb>> as WebClientUserWeb
  rectangle "==Admin Portal\\n\\nAdministrative interface" <<WebClientAdminPortal>> as WebClientAdminPortal
}
rectangle "==Government Messaging System" <<Gms>> as Gms

WebClientUserMobile .[#777777,thickness=2].> Gms : "<color:#777777>API calls via HTTPS<color:#777777>"
WebClientUserWeb .[#777777,thickness=2].> Gms : "<color:#777777>API calls via HTTPS<color:#777777>"
WebClientAdminPortal .[#777777,thickness=2].> Gms : "<color:#777777>API calls via HTTPS<color:#777777>"
@enduml
`;default:throw new Error("Unknown viewId: "+n)}}export{e as pumlSource};
