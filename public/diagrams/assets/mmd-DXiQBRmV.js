function s(e){switch(e){case"index":return`---
title: "Landscape view"
---
graph TB
  GovAgency[fa:fa-user Gov Agency]
  WebClient[fa:fa-user Web/Mobile Client]
  Gms[Government Messaging System]
  GovAgency -. "Integrates via REST" .-> Gms
  WebClient -. "API calls via HTTPS" .-> Gms
`;case"systemContext":return`---
title: "C1: System Context"
---
graph TB
  GovAgency[fa:fa-user Gov Agency]
  WebClient[fa:fa-user Web/Mobile Client]
  Gms[Government Messaging System]
  GovAgency -. "Integrates via REST" .-> Gms
  WebClient -. "API calls via HTTPS" .-> Gms
`;case"containerView":return`---
title: "C2: Container View"
---
graph TB
  GovAgency[fa:fa-user Gov Agency]
  WebClient[fa:fa-user Web/Mobile Client]
  subgraph Gms["Government Messaging System"]
    subgraph Gms.EdgeSub["Edge Layer"]
      Gms.EdgeSub.ApiGateway[API Gateway]
    end
    subgraph Gms.EventSub["Event Layer"]
      Gms.EventSub.IdentityServer[Identity Server]
      Gms.EventSub.RoleModule[RBAC Module]
      Gms.EventSub.EventBus[(Event Bus)]
    end
    subgraph Gms.ProcessingSub["Processing Layer"]
      Gms.ProcessingSub.Inspector[Content Inspector]
      Gms.ProcessingSub.MsgWorkers[Message Workers]
      Gms.ProcessingSub.SmtpBridge[REST-SMTP Bridge]
      Gms.ProcessingSub.AuditLogger[Audit Logger]
    end
    subgraph Gms.PersistenceSub["Persistence Layer"]
      Gms.PersistenceSub.EmailStore[(Email Store)]
      Gms.PersistenceSub.ArchiveDb[(Archive DB)]
      Gms.PersistenceSub.ReplicaDb[(Replica/Backup)]
      Gms.PersistenceSub.LogStore[(Audit Log Store)]
    end
  end
  GovAgency -. "Integrates via REST" .-> Gms.EdgeSub.ApiGateway
  WebClient -. "API calls via HTTPS" .-> Gms.EdgeSub.ApiGateway
  Gms.EdgeSub.ApiGateway -. "Authenticates via" .-> Gms.EventSub.IdentityServer
  Gms.EdgeSub.ApiGateway -. "Authorizes via" .-> Gms.EventSub.RoleModule
  Gms.EdgeSub.ApiGateway -. "Publishes events to" .-> Gms.EventSub.EventBus
  Gms.EventSub.EventBus -. "msg.inbound" .-> Gms.ProcessingSub.Inspector
  Gms.EventSub.EventBus -. "msg.outbound" .-> Gms.ProcessingSub.MsgWorkers
  Gms.EventSub.EventBus -. "msg.outbound" .-> Gms.ProcessingSub.SmtpBridge
  Gms.EventSub.EventBus -. "msg.audit" .-> Gms.ProcessingSub.AuditLogger
  Gms.ProcessingSub.Inspector -. "Stores filtered emails" .-> Gms.PersistenceSub.EmailStore
  Gms.ProcessingSub.MsgWorkers -. "Archives messages" .-> Gms.PersistenceSub.ArchiveDb
  Gms.ProcessingSub.SmtpBridge -. "Syncs via IMAP/SMTP" .-> Gms.PersistenceSub.ReplicaDb
  Gms.ProcessingSub.AuditLogger -. "Writes audit entries" .-> Gms.PersistenceSub.LogStore
`;case"eventLayerComponents":return`---
title: "C3: Event Layer - Components"
---
graph TB
  GmsEdgeSub[Edge Layer]
  subgraph GmsEventSub["Event Layer"]
    GmsEventSub.IdentityServer[Identity Server]
    GmsEventSub.RoleModule[RBAC Module]
    GmsEventSub.EventBus[(Event Bus)]
  end
  GmsProcessingSub[Processing Layer]
  GmsEdgeSub -. "Authenticates via" .-> GmsEventSub.IdentityServer
  GmsEdgeSub -. "Authorizes via" .-> GmsEventSub.RoleModule
  GmsEdgeSub -. "Publishes events to" .-> GmsEventSub.EventBus
  GmsEventSub.EventBus -. "[...]" .-> GmsProcessingSub
`;case"processingLayerComponents":return`---
title: "C3: Processing Layer - Components"
---
graph TB
  GmsEventSub[Event Layer]
  subgraph GmsProcessingSub["Processing Layer"]
    GmsProcessingSub.Inspector[Content Inspector]
    GmsProcessingSub.MsgWorkers[Message Workers]
    GmsProcessingSub.SmtpBridge[REST-SMTP Bridge]
    GmsProcessingSub.AuditLogger[Audit Logger]
  end
  GmsPersistenceSub[Persistence Layer]
  GmsEventSub -. "msg.inbound" .-> GmsProcessingSub.Inspector
  GmsEventSub -. "msg.outbound" .-> GmsProcessingSub.MsgWorkers
  GmsEventSub -. "msg.outbound" .-> GmsProcessingSub.SmtpBridge
  GmsEventSub -. "msg.audit" .-> GmsProcessingSub.AuditLogger
  GmsProcessingSub.Inspector -. "Stores filtered emails" .-> GmsPersistenceSub
  GmsProcessingSub.MsgWorkers -. "Archives messages" .-> GmsPersistenceSub
  GmsProcessingSub.SmtpBridge -. "Syncs via IMAP/SMTP" .-> GmsPersistenceSub
  GmsProcessingSub.AuditLogger -. "Writes audit entries" .-> GmsPersistenceSub
`;case"persistenceLayerComponents":return`---
title: "C3: Persistence Layer - Components"
---
graph TB
  GmsProcessingSub[Processing Layer]
  subgraph GmsPersistenceSub["Persistence Layer"]
    GmsPersistenceSub.EmailStore[(Email Store)]
    GmsPersistenceSub.ArchiveDb[(Archive DB)]
    GmsPersistenceSub.ReplicaDb[(Replica/Backup)]
    GmsPersistenceSub.LogStore[(Audit Log Store)]
  end
  GmsProcessingSub -. "Stores filtered emails" .-> GmsPersistenceSub.EmailStore
  GmsProcessingSub -. "Archives messages" .-> GmsPersistenceSub.ArchiveDb
  GmsProcessingSub -. "Syncs via IMAP/SMTP" .-> GmsPersistenceSub.ReplicaDb
  GmsProcessingSub -. "Writes audit entries" .-> GmsPersistenceSub.LogStore
`;case"webClientView":return`---
title: "C4: Web/Mobile Client - Internal"
---
graph TB
  subgraph WebClient["Web/Mobile Client"]
    WebClient.UserMobile[Mobile App]
    WebClient.UserWeb[Web Client]
    WebClient.AdminPortal[Admin Portal]
  end
  Gms[Government Messaging System]
  WebClient.UserMobile -. "API calls via HTTPS" .-> Gms
  WebClient.UserWeb -. "API calls via HTTPS" .-> Gms
  WebClient.AdminPortal -. "API calls via HTTPS" .-> Gms
`;default:throw new Error("Unknown viewId: "+e)}}export{s as mmdSource};
