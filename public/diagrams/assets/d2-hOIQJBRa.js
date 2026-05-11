function n(e){switch(e){case"index":return`direction: down

GovAgency: {
  label: "Gov Agency"
  shape: person
}
WebClient: {
  label: "Web/Mobile Client"
  shape: person
}
Gms: {
  label: "Government Messaging System"
}

GovAgency -> Gms: "Integrates via REST"
WebClient -> Gms: "API calls via HTTPS"
`;case"systemContext":return`direction: down

GovAgency: {
  label: "Gov Agency"
  shape: person
}
WebClient: {
  label: "Web/Mobile Client"
  shape: person
}
Gms: {
  label: "Government Messaging System"
}

GovAgency -> Gms: "Integrates via REST"
WebClient -> Gms: "API calls via HTTPS"
`;case"containerView":return`direction: down

GovAgency: {
  label: "Gov Agency"
  shape: person
}
WebClient: {
  label: "Web/Mobile Client"
  shape: person
}
Gms: {
  label: "Government Messaging System"

  EdgeSub: {
    label: "Edge Layer"

    ApiGateway: {
      label: "API Gateway"
    }
  }
  EventSub: {
    label: "Event Layer"

    IdentityServer: {
      label: "Identity Server"
    }
    RoleModule: {
      label: "RBAC Module"
    }
    EventBus: {
      label: "Event Bus"
      shape: queue
    }
  }
  ProcessingSub: {
    label: "Processing Layer"

    Inspector: {
      label: "Content Inspector"
    }
    MsgWorkers: {
      label: "Message Workers"
    }
    SmtpBridge: {
      label: "REST-SMTP Bridge"
    }
    AuditLogger: {
      label: "Audit Logger"
    }
  }
  PersistenceSub: {
    label: "Persistence Layer"

    EmailStore: {
      label: "Email Store"
      shape: cylinder
    }
    ArchiveDb: {
      label: "Archive DB"
      shape: cylinder
    }
    ReplicaDb: {
      label: "Replica/Backup"
      shape: cylinder
    }
    LogStore: {
      label: "Audit Log Store"
      shape: cylinder
    }
  }
}

GovAgency -> Gms.EdgeSub.ApiGateway: "Integrates via REST"
WebClient -> Gms.EdgeSub.ApiGateway: "API calls via HTTPS"
Gms.EdgeSub.ApiGateway -> Gms.EventSub.IdentityServer: "Authenticates via"
Gms.EdgeSub.ApiGateway -> Gms.EventSub.RoleModule: "Authorizes via"
Gms.EdgeSub.ApiGateway -> Gms.EventSub.EventBus: "Publishes events to"
Gms.EventSub.EventBus -> Gms.ProcessingSub.Inspector: "msg.inbound"
Gms.EventSub.EventBus -> Gms.ProcessingSub.MsgWorkers: "msg.outbound"
Gms.EventSub.EventBus -> Gms.ProcessingSub.SmtpBridge: "msg.outbound"
Gms.EventSub.EventBus -> Gms.ProcessingSub.AuditLogger: "msg.audit"
Gms.ProcessingSub.Inspector -> Gms.PersistenceSub.EmailStore: "Stores filtered emails"
Gms.ProcessingSub.MsgWorkers -> Gms.PersistenceSub.ArchiveDb: "Archives messages"
Gms.ProcessingSub.SmtpBridge -> Gms.PersistenceSub.ReplicaDb: "Syncs via IMAP/SMTP"
Gms.ProcessingSub.AuditLogger -> Gms.PersistenceSub.LogStore: "Writes audit entries"
`;case"eventLayerComponents":return`direction: down

GmsEdgeSub: {
  label: "Edge Layer"
}
GmsEventSub: {
  label: "Event Layer"

  IdentityServer: {
    label: "Identity Server"
  }
  RoleModule: {
    label: "RBAC Module"
  }
  EventBus: {
    label: "Event Bus"
    shape: queue
  }
}
GmsProcessingSub: {
  label: "Processing Layer"
}

GmsEdgeSub -> GmsEventSub.IdentityServer: "Authenticates via"
GmsEdgeSub -> GmsEventSub.RoleModule: "Authorizes via"
GmsEdgeSub -> GmsEventSub.EventBus: "Publishes events to"
GmsEventSub.EventBus -> GmsProcessingSub: "[...]"
`;case"processingLayerComponents":return`direction: down

GmsEventSub: {
  label: "Event Layer"
}
GmsProcessingSub: {
  label: "Processing Layer"

  Inspector: {
    label: "Content Inspector"
  }
  MsgWorkers: {
    label: "Message Workers"
  }
  SmtpBridge: {
    label: "REST-SMTP Bridge"
  }
  AuditLogger: {
    label: "Audit Logger"
  }
}
GmsPersistenceSub: {
  label: "Persistence Layer"
}

GmsEventSub -> GmsProcessingSub.Inspector: "msg.inbound"
GmsEventSub -> GmsProcessingSub.MsgWorkers: "msg.outbound"
GmsEventSub -> GmsProcessingSub.SmtpBridge: "msg.outbound"
GmsEventSub -> GmsProcessingSub.AuditLogger: "msg.audit"
GmsProcessingSub.Inspector -> GmsPersistenceSub: "Stores filtered emails"
GmsProcessingSub.MsgWorkers -> GmsPersistenceSub: "Archives messages"
GmsProcessingSub.SmtpBridge -> GmsPersistenceSub: "Syncs via IMAP/SMTP"
GmsProcessingSub.AuditLogger -> GmsPersistenceSub: "Writes audit entries"
`;case"persistenceLayerComponents":return`direction: down

GmsProcessingSub: {
  label: "Processing Layer"
}
GmsPersistenceSub: {
  label: "Persistence Layer"

  EmailStore: {
    label: "Email Store"
    shape: cylinder
  }
  ArchiveDb: {
    label: "Archive DB"
    shape: cylinder
  }
  ReplicaDb: {
    label: "Replica/Backup"
    shape: cylinder
  }
  LogStore: {
    label: "Audit Log Store"
    shape: cylinder
  }
}

GmsProcessingSub -> GmsPersistenceSub.EmailStore: "Stores filtered emails"
GmsProcessingSub -> GmsPersistenceSub.ArchiveDb: "Archives messages"
GmsProcessingSub -> GmsPersistenceSub.ReplicaDb: "Syncs via IMAP/SMTP"
GmsProcessingSub -> GmsPersistenceSub.LogStore: "Writes audit entries"
`;case"webClientView":return`direction: down

WebClient: {
  label: "Web/Mobile Client"
  shape: person

  UserMobile: {
    label: "Mobile App"
  }
  UserWeb: {
    label: "Web Client"
  }
  AdminPortal: {
    label: "Admin Portal"
  }
}
Gms: {
  label: "Government Messaging System"
}

WebClient.UserMobile -> Gms: "API calls via HTTPS"
WebClient.UserWeb -> Gms: "API calls via HTTPS"
WebClient.AdminPortal -> Gms: "API calls via HTTPS"
`;default:throw new Error("Unknown viewId: "+e)}}export{n as d2Source};
