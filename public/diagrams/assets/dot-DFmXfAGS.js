function t(e){switch(e){case"index":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=index,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    govagency [color="#525252",
        fillcolor="#737373",
        fontcolor="#fafafa",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Gov Agency</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#d4d4d4">REST Client</FONT></TD></TR></TABLE>>,
        likec4_id=govAgency,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    gms [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<FONT POINT-SIZE="19">Government Messaging System</FONT>>,
        likec4_id=gms,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    govagency -> gms [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Integrates via REST</FONT></TD></TR></TABLE>>,
        likec4_id="1tp7byy",
        minlen=1,
        style=dashed];
    webclient [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Web/Mobile Client</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">User &amp; Admin Interfaces</FONT></TD></TR></TABLE>>,
        likec4_id=webClient,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    webclient -> gms [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">API calls via HTTPS</FONT></TD></TR></TABLE>>,
        likec4_id="1v65eka",
        minlen=1,
        style=dashed];
}
`;case"systemContext":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=systemContext,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    govagency [color="#525252",
        fillcolor="#737373",
        fontcolor="#fafafa",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Gov Agency</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#d4d4d4">REST Client</FONT></TD></TR></TABLE>>,
        likec4_id=govAgency,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    gms [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<FONT POINT-SIZE="19">Government Messaging System</FONT>>,
        likec4_id=gms,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    govagency -> gms [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Integrates via REST</FONT></TD></TR></TABLE>>,
        likec4_id="1tp7byy",
        minlen=1,
        style=dashed];
    webclient [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Web/Mobile Client</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">User &amp; Admin Interfaces</FONT></TD></TR></TABLE>>,
        likec4_id=webClient,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    webclient -> gms [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">API calls via HTTPS</FONT></TD></TR></TABLE>>,
        likec4_id="1v65eka",
        minlen=1,
        style=dashed];
}
`;case"containerView":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=containerView,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_gms {
        graph [color="#292f37",
            fillcolor="#3a404a",
            label=<<FONT POINT-SIZE="11" COLOR="#cbd5e1b3"><B>GOVERNMENT MESSAGING SYSTEM</B></FONT>>,
            likec4_depth=2,
            likec4_id=gms,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        subgraph cluster_edgesub {
            graph [color="#2a2490",
                fillcolor="#2225aa",
                label=<<FONT POINT-SIZE="11" COLOR="#c7d2feb3"><B>EDGE LAYER</B></FONT>>,
                likec4_depth=1,
                likec4_id="gms.edgeSub",
                likec4_level=1,
                margin=32,
                style=filled
            ];
            apigateway [color="#4f46e5",
                fillcolor="#6366f1",
                fontcolor="#eef2ff",
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">API Gateway</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c7d2fe">TLS termination, rate limiting and request<BR/>routing</FONT></TD></TR></TABLE>>,
                likec4_id="gms.edgeSub.apiGateway",
                likec4_level=2,
                margin="0.223,0.223",
                width=4.445];
        }
        subgraph cluster_eventsub {
            graph [color="#0b3c57",
                fillcolor="#0d4b6c",
                label=<<FONT POINT-SIZE="11" COLOR="#b6ecf7b3"><B>EVENT LAYER</B></FONT>>,
                likec4_depth=1,
                likec4_id="gms.eventSub",
                likec4_level=1,
                margin=40,
                style=filled
            ];
            identityserver [color="#0369a1",
                fillcolor="#0284c7",
                fontcolor="#f0f9ff",
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Identity Server</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">OAuth 2.0, LDAP/SAML</FONT></TD></TR></TABLE>>,
                likec4_id="gms.eventSub.identityServer",
                likec4_level=2,
                margin="0.223,0.223",
                width=4.445];
            rolemodule [color="#0369a1",
                fillcolor="#0284c7",
                fontcolor="#f0f9ff",
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">RBAC Module</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Role-based access control</FONT></TD></TR></TABLE>>,
                likec4_id="gms.eventSub.roleModule",
                likec4_level=2,
                margin="0.223,0.223",
                width=4.445];
            eventbus [color="#0369a1",
                fillcolor="#0284c7",
                fontcolor="#f0f9ff",
                height=2.389,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Event Bus</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Topics: msg.inbound, msg.outbound, msg.audit,<BR/>msg.dlq</FONT></TD></TR></TABLE>>,
                likec4_id="gms.eventSub.eventBus",
                likec4_level=2,
                margin="0.278,0.223",
                width=4.445];
        }
        subgraph cluster_processingsub {
            graph [color="#1e3524",
                fillcolor="#2c4e32",
                label=<<FONT POINT-SIZE="11" COLOR="#c2f0c2b3"><B>PROCESSING LAYER</B></FONT>>,
                likec4_depth=1,
                likec4_id="gms.processingSub",
                likec4_level=1,
                margin=40,
                style=filled
            ];
            inspector [color="#853A2D",
                fillcolor="#AC4D39",
                fontcolor="#FBD3CB",
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Content Inspector</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#f5b2a3">Blocks .exe, .bat, .sh at ingestion point</FONT></TD></TR></TABLE>>,
                likec4_id="gms.processingSub.inspector",
                likec4_level=2,
                margin="0.223,0.223",
                width=4.445];
            msgworkers [color="#853A2D",
                fillcolor="#AC4D39",
                fontcolor="#FBD3CB",
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Message Workers</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#f5b2a3">Async consumers, DLQ, retry &amp; backoff logic</FONT></TD></TR></TABLE>>,
                likec4_id="gms.processingSub.msgWorkers",
                likec4_level=2,
                margin="0.223,0.223",
                width=4.445];
            smtpbridge [color="#853A2D",
                fillcolor="#AC4D39",
                fontcolor="#FBD3CB",
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">REST-SMTP Bridge</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#f5b2a3">Translates REST calls to IMAP/SMTP commands</FONT></TD></TR></TABLE>>,
                likec4_id="gms.processingSub.smtpBridge",
                likec4_level=2,
                margin="0.223,0.223",
                width=4.445];
            auditlogger [color="#853A2D",
                fillcolor="#AC4D39",
                fontcolor="#FBD3CB",
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Audit Logger</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#f5b2a3">Tamper-evident log of all API calls &amp; admin<BR/>events</FONT></TD></TR></TABLE>>,
                likec4_id="gms.processingSub.auditLogger",
                likec4_level=2,
                margin="0.223,0.223",
                width=4.445];
        }
        subgraph cluster_persistencesub {
            graph [color="#462a17",
                fillcolor="#5a3620",
                label=<<FONT POINT-SIZE="11" COLOR="#f9b27cb3"><B>PERSISTENCE LAYER</B></FONT>>,
                likec4_depth=1,
                likec4_id="gms.persistenceSub",
                likec4_level=1,
                margin=40,
                style=filled
            ];
            emailstore [color="#525252",
                fillcolor="#737373",
                fontcolor="#fafafa",
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Email Store</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#d4d4d4">AES-256 at rest, IMAP-accessible mailboxes</FONT></TD></TR></TABLE>>,
                likec4_id="gms.persistenceSub.emailStore",
                likec4_level=2,
                margin="0.223,0",
                penwidth=2,
                shape=cylinder,
                width=4.445];
            archivedb [color="#525252",
                fillcolor="#737373",
                fontcolor="#fafafa",
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Archive DB</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#d4d4d4">5-year retention tier, separate storage node</FONT></TD></TR></TABLE>>,
                likec4_id="gms.persistenceSub.archiveDb",
                likec4_level=2,
                margin="0.223,0",
                penwidth=2,
                shape=cylinder,
                width=4.445];
            replicadb [color="#525252",
                fillcolor="#737373",
                fontcolor="#fafafa",
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Replica/Backup</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#d4d4d4">Daily snapshots and failover</FONT></TD></TR></TABLE>>,
                likec4_id="gms.persistenceSub.replicaDb",
                likec4_level=2,
                margin="0.223,0",
                penwidth=2,
                shape=cylinder,
                width=4.445];
            logstore [color="#525252",
                fillcolor="#737373",
                fontcolor="#fafafa",
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Audit Log Store</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#d4d4d4">Regulatory-compliant, 12-month retention</FONT></TD></TR></TABLE>>,
                likec4_id="gms.persistenceSub.logStore",
                likec4_level=2,
                margin="0.223,0",
                penwidth=2,
                shape=cylinder,
                width=4.445];
        }
    }
    govagency [color="#525252",
        fillcolor="#737373",
        fontcolor="#fafafa",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Gov Agency</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#d4d4d4">REST Client</FONT></TD></TR></TABLE>>,
        likec4_id=govAgency,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    govagency -> apigateway [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Integrates via REST</FONT></TD></TR></TABLE>>,
        likec4_id=xm0sxp,
        minlen=1,
        style=dashed];
    webclient [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Web/Mobile Client</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">User &amp; Admin Interfaces</FONT></TD></TR></TABLE>>,
        likec4_id=webClient,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    webclient -> apigateway [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">API calls via HTTPS</FONT></TD></TR></TABLE>>,
        likec4_id=fe8cil,
        minlen=1,
        style=dashed];
    apigateway -> identityserver [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Authenticates via</FONT></TD></TR></TABLE>>,
        likec4_id="1fbpapi",
        minlen=1,
        style=dashed];
    apigateway -> rolemodule [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Authorizes via</FONT></TD></TR></TABLE>>,
        likec4_id="3lbi17",
        minlen=1,
        style=dashed];
    apigateway -> eventbus [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Publishes events to</FONT></TD></TR></TABLE>>,
        likec4_id=wotci5,
        style=dashed];
    eventbus -> inspector [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">msg.inbound</FONT></TD></TR></TABLE>>,
        likec4_id="1rirpce",
        style=dashed];
    eventbus -> msgworkers [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">msg.outbound</FONT></TD></TR></TABLE>>,
        likec4_id=pgkkjd,
        style=dashed];
    eventbus -> smtpbridge [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">msg.outbound</FONT></TD></TR></TABLE>>,
        likec4_id="1x81wqo",
        style=dashed];
    eventbus -> auditlogger [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">msg.audit</FONT></TD></TR></TABLE>>,
        likec4_id=uaescc,
        style=dashed];
    inspector -> emailstore [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Stores filtered emails</FONT></TD></TR></TABLE>>,
        likec4_id=hq0zwu,
        minlen=1,
        style=dashed];
    msgworkers -> archivedb [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Archives messages</FONT></TD></TR></TABLE>>,
        likec4_id=qc7nce,
        minlen=1,
        style=dashed];
    smtpbridge -> replicadb [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Syncs via IMAP/SMTP</FONT></TD></TR></TABLE>>,
        likec4_id=v26lrp,
        minlen=1,
        style=dashed];
    auditlogger -> logstore [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Writes audit entries</FONT></TD></TR></TABLE>>,
        likec4_id="8qj650",
        minlen=1,
        style=dashed];
}
`;case"eventLayerComponents":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=eventLayerComponents,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_eventsub {
        graph [color="#0b3c57",
            fillcolor="#0d4b6c",
            label=<<FONT POINT-SIZE="11" COLOR="#b6ecf7b3"><B>EVENT LAYER</B></FONT>>,
            likec4_depth=1,
            likec4_id="gms.eventSub",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        identityserver [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Identity Server</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">OAuth 2.0, LDAP/SAML</FONT></TD></TR></TABLE>>,
            likec4_id="gms.eventSub.identityServer",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        rolemodule [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">RBAC Module</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Role-based access control</FONT></TD></TR></TABLE>>,
            likec4_id="gms.eventSub.roleModule",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        eventbus [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            height=2.389,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Event Bus</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Topics: msg.inbound, msg.outbound, msg.audit,<BR/>msg.dlq</FONT></TD></TR></TABLE>>,
            likec4_id="gms.eventSub.eventBus",
            likec4_level=1,
            margin="0.278,0.223",
            width=4.445];
    }
    edgesub [color="#4f46e5",
        fillcolor="#6366f1",
        fontcolor="#eef2ff",
        height=2.5,
        label=<<FONT POINT-SIZE="19">Edge Layer</FONT>>,
        likec4_id="gms.edgeSub",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    edgesub -> identityserver [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Authenticates via</FONT></TD></TR></TABLE>>,
        likec4_id=ebb0uw,
        minlen=1,
        style=dashed];
    edgesub -> rolemodule [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Authorizes via</FONT></TD></TR></TABLE>>,
        likec4_id=qdexid,
        minlen=1,
        style=dashed];
    edgesub -> eventbus [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Publishes events to</FONT></TD></TR></TABLE>>,
        likec4_id=jit50j,
        style=dashed];
    processingsub [color="#2d5d39",
        fillcolor="#428a4f",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<FONT POINT-SIZE="19">Processing Layer</FONT>>,
        likec4_id="gms.processingSub",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    eventbus -> processingsub [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id="145f9e3",
        minlen=1,
        style=dashed];
}
`;case"processingLayerComponents":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=processingLayerComponents,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_processingsub {
        graph [color="#1e3524",
            fillcolor="#2c4e32",
            label=<<FONT POINT-SIZE="11" COLOR="#c2f0c2b3"><B>PROCESSING LAYER</B></FONT>>,
            likec4_depth=1,
            likec4_id="gms.processingSub",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        inspector [color="#853A2D",
            fillcolor="#AC4D39",
            fontcolor="#FBD3CB",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Content Inspector</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#f5b2a3">Blocks .exe, .bat, .sh at ingestion point</FONT></TD></TR></TABLE>>,
            likec4_id="gms.processingSub.inspector",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        msgworkers [color="#853A2D",
            fillcolor="#AC4D39",
            fontcolor="#FBD3CB",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Message Workers</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#f5b2a3">Async consumers, DLQ, retry &amp; backoff logic</FONT></TD></TR></TABLE>>,
            likec4_id="gms.processingSub.msgWorkers",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        smtpbridge [color="#853A2D",
            fillcolor="#AC4D39",
            fontcolor="#FBD3CB",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">REST-SMTP Bridge</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#f5b2a3">Translates REST calls to IMAP/SMTP commands</FONT></TD></TR></TABLE>>,
            likec4_id="gms.processingSub.smtpBridge",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        auditlogger [color="#853A2D",
            fillcolor="#AC4D39",
            fontcolor="#FBD3CB",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Audit Logger</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#f5b2a3">Tamper-evident log of all API calls &amp; admin<BR/>events</FONT></TD></TR></TABLE>>,
            likec4_id="gms.processingSub.auditLogger",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    eventsub [color="#0369a1",
        fillcolor="#0284c7",
        fontcolor="#f0f9ff",
        height=2.5,
        label=<<FONT POINT-SIZE="19">Event Layer</FONT>>,
        likec4_id="gms.eventSub",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    eventsub -> inspector [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">msg.inbound</FONT></TD></TR></TABLE>>,
        likec4_id="8rm4qw",
        style=dashed];
    eventsub -> msgworkers [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">msg.outbound</FONT></TD></TR></TABLE>>,
        likec4_id=m2tg73,
        style=dashed];
    eventsub -> smtpbridge [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">msg.outbound</FONT></TD></TR></TABLE>>,
        likec4_id="1nt5j2e",
        style=dashed];
    eventsub -> auditlogger [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">msg.audit</FONT></TD></TR></TABLE>>,
        likec4_id="1ukj4ai",
        style=dashed];
    persistencesub [color="#7E451D",
        fillcolor="#A35829",
        fontcolor="#FFE0C2",
        height=2.5,
        label=<<FONT POINT-SIZE="19">Persistence Layer</FONT>>,
        likec4_id="gms.persistenceSub",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    inspector -> persistencesub [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Stores filtered emails</FONT></TD></TR></TABLE>>,
        likec4_id=kbmwhf,
        style=dashed];
    msgworkers -> persistencesub [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Archives messages</FONT></TD></TR></TABLE>>,
        likec4_id="1anri2s",
        style=dashed];
    smtpbridge -> persistencesub [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Syncs via IMAP/SMTP</FONT></TD></TR></TABLE>>,
        likec4_id=dmgifx,
        style=dashed];
    auditlogger -> persistencesub [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Writes audit entries</FONT></TD></TR></TABLE>>,
        likec4_id=dijcld,
        style=dashed];
}
`;case"persistenceLayerComponents":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=persistenceLayerComponents,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_persistencesub {
        graph [color="#462a17",
            fillcolor="#5a3620",
            label=<<FONT POINT-SIZE="11" COLOR="#f9b27cb3"><B>PERSISTENCE LAYER</B></FONT>>,
            likec4_depth=1,
            likec4_id="gms.persistenceSub",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        emailstore [color="#525252",
            fillcolor="#737373",
            fontcolor="#fafafa",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Email Store</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#d4d4d4">AES-256 at rest, IMAP-accessible mailboxes</FONT></TD></TR></TABLE>>,
            likec4_id="gms.persistenceSub.emailStore",
            likec4_level=1,
            margin="0.223,0",
            penwidth=2,
            shape=cylinder,
            width=4.445];
        archivedb [color="#525252",
            fillcolor="#737373",
            fontcolor="#fafafa",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Archive DB</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#d4d4d4">5-year retention tier, separate storage node</FONT></TD></TR></TABLE>>,
            likec4_id="gms.persistenceSub.archiveDb",
            likec4_level=1,
            margin="0.223,0",
            penwidth=2,
            shape=cylinder,
            width=4.445];
        replicadb [color="#525252",
            fillcolor="#737373",
            fontcolor="#fafafa",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Replica/Backup</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#d4d4d4">Daily snapshots and failover</FONT></TD></TR></TABLE>>,
            likec4_id="gms.persistenceSub.replicaDb",
            likec4_level=1,
            margin="0.223,0",
            penwidth=2,
            shape=cylinder,
            width=4.445];
        logstore [color="#525252",
            fillcolor="#737373",
            fontcolor="#fafafa",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Audit Log Store</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#d4d4d4">Regulatory-compliant, 12-month retention</FONT></TD></TR></TABLE>>,
            likec4_id="gms.persistenceSub.logStore",
            likec4_level=1,
            margin="0.223,0",
            penwidth=2,
            shape=cylinder,
            width=4.445];
    }
    processingsub [color="#2d5d39",
        fillcolor="#428a4f",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<FONT POINT-SIZE="19">Processing Layer</FONT>>,
        likec4_id="gms.processingSub",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    processingsub -> emailstore [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Stores filtered emails</FONT></TD></TR></TABLE>>,
        likec4_id="1vwh157",
        minlen=1,
        style=dashed];
    processingsub -> archivedb [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Archives messages</FONT></TD></TR></TABLE>>,
        likec4_id=jpyinw,
        minlen=1,
        style=dashed];
    processingsub -> replicadb [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Syncs via IMAP/SMTP</FONT></TD></TR></TABLE>>,
        likec4_id="8aperi",
        minlen=1,
        style=dashed];
    processingsub -> logstore [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Writes audit entries</FONT></TD></TR></TABLE>>,
        likec4_id=ru4ycj,
        minlen=1,
        style=dashed];
}
`;case"webClientView":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=webClientView,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_webclient {
        graph [color="#2d333d",
            fillcolor="#3e4651",
            label=<<FONT POINT-SIZE="11" COLOR="#cbd5e1b3"><B>WEB/MOBILE CLIENT</B></FONT>>,
            likec4_depth=1,
            likec4_id=webClient,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        usermobile [color="#4f46e5",
            fillcolor="#6366f1",
            fontcolor="#eef2ff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Mobile App</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c7d2fe">Native mobile interface</FONT></TD></TR></TABLE>>,
            likec4_id="webClient.userMobile",
            likec4_level=1,
            margin="0.278,0.223",
            width=4.445];
        userweb [color="#4f46e5",
            fillcolor="#6366f1",
            fontcolor="#eef2ff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Web Client</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c7d2fe">Browser-based UI</FONT></TD></TR></TABLE>>,
            likec4_id="webClient.userWeb",
            likec4_level=1,
            margin="0.278,0.306",
            width=4.445];
        adminportal [color="#4f46e5",
            fillcolor="#6366f1",
            fontcolor="#eef2ff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Admin Portal</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c7d2fe">Administrative interface</FONT></TD></TR></TABLE>>,
            likec4_id="webClient.adminPortal",
            likec4_level=1,
            margin="0.278,0.306",
            width=4.445];
    }
    gms [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<FONT POINT-SIZE="19">Government Messaging System</FONT>>,
        likec4_id=gms,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    usermobile -> gms [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">API calls via HTTPS</FONT></TD></TR></TABLE>>,
        likec4_id="18dvzfp",
        minlen=1,
        style=dashed];
    userweb -> gms [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">API calls via HTTPS</FONT></TD></TR></TABLE>>,
        likec4_id="1fh51g5",
        minlen=1,
        style=dashed];
    adminportal -> gms [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">API calls via HTTPS</FONT></TD></TR></TABLE>>,
        likec4_id="1djyaz3",
        minlen=1,
        style=dashed];
}
`;default:throw new Error("Unknown viewId: "+e)}}function n(e){switch(e){case"index":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 13.1.2 (0)
 -->
<!-- Pages: 1 -->
<svg width="780pt" height="533pt"
 viewBox="0.00 0.00 780.00 533.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 517.85)">
<!-- govagency -->
<g id="node1" class="node">
<title>govagency</title>
<polygon fill="#737373" stroke="#525252" stroke-width="0" points="320.04,-502.8 0,-502.8 0,-322.8 320.04,-322.8 320.04,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="108.27" y="-418.1" font-family="Arial" font-size="19.00" fill="#fafafa">Gov Agency</text>
<text xml:space="preserve" text-anchor="start" x="118.76" y="-394.9" font-family="Arial" font-size="15.00" fill="#d4d4d4">REST Client</text>
</g>
<!-- gms -->
<g id="node2" class="node">
<title>gms</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="535.04,-180 215,-180 215,0 535.04,0 535.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="239.85" y="-84.3" font-family="Arial" font-size="19.00" fill="#f8fafc">Government Messaging System</text>
</g>
<!-- webclient -->
<g id="node3" class="node">
<title>webclient</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="750.04,-502.8 430,-502.8 430,-322.8 750.04,-322.8 750.04,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="512.93" y="-418.1" font-family="Arial" font-size="19.00" fill="#f8fafc">Web/Mobile Client</text>
<text xml:space="preserve" text-anchor="start" x="508.74" y="-394.9" font-family="Arial" font-size="15.00" fill="#cbd5e1">User &amp; Admin Interfaces</text>
</g>
<!-- govagency&#45;&gt;gms -->
<g id="edge1" class="edge">
<title>govagency&#45;&gt;gms</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M219.62,-322.87C247.59,-281.14 280.98,-231.31 309.64,-188.56"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="311.81,-190.04 313.8,-182.34 307.45,-187.11 311.81,-190.04"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="273.97,-240 273.97,-262.8 405.24,-262.8 405.24,-240 273.97,-240"/>
<text xml:space="preserve" text-anchor="start" x="276.97" y="-247.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">Integrates via REST</text>
</g>
<!-- webclient&#45;&gt;gms -->
<g id="edge2" class="edge">
<title>webclient&#45;&gt;gms</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M530.42,-322.87C502.45,-281.14 469.06,-231.31 440.4,-188.56"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="442.59,-187.11 436.24,-182.34 438.23,-190.04 442.59,-187.11"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="488.97,-240 488.97,-262.8 620.99,-262.8 620.99,-240 488.97,-240"/>
<text xml:space="preserve" text-anchor="start" x="491.97" y="-247.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">API calls via HTTPS</text>
</g>
</g>
</svg>
`;case"systemContext":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 13.1.2 (0)
 -->
<!-- Pages: 1 -->
<svg width="780pt" height="533pt"
 viewBox="0.00 0.00 780.00 533.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 517.85)">
<!-- govagency -->
<g id="node1" class="node">
<title>govagency</title>
<polygon fill="#737373" stroke="#525252" stroke-width="0" points="320.04,-502.8 0,-502.8 0,-322.8 320.04,-322.8 320.04,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="108.27" y="-418.1" font-family="Arial" font-size="19.00" fill="#fafafa">Gov Agency</text>
<text xml:space="preserve" text-anchor="start" x="118.76" y="-394.9" font-family="Arial" font-size="15.00" fill="#d4d4d4">REST Client</text>
</g>
<!-- gms -->
<g id="node2" class="node">
<title>gms</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="535.04,-180 215,-180 215,0 535.04,0 535.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="239.85" y="-84.3" font-family="Arial" font-size="19.00" fill="#f8fafc">Government Messaging System</text>
</g>
<!-- webclient -->
<g id="node3" class="node">
<title>webclient</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="750.04,-502.8 430,-502.8 430,-322.8 750.04,-322.8 750.04,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="512.93" y="-418.1" font-family="Arial" font-size="19.00" fill="#f8fafc">Web/Mobile Client</text>
<text xml:space="preserve" text-anchor="start" x="508.74" y="-394.9" font-family="Arial" font-size="15.00" fill="#cbd5e1">User &amp; Admin Interfaces</text>
</g>
<!-- govagency&#45;&gt;gms -->
<g id="edge1" class="edge">
<title>govagency&#45;&gt;gms</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M219.62,-322.87C247.59,-281.14 280.98,-231.31 309.64,-188.56"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="311.81,-190.04 313.8,-182.34 307.45,-187.11 311.81,-190.04"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="273.97,-240 273.97,-262.8 405.24,-262.8 405.24,-240 273.97,-240"/>
<text xml:space="preserve" text-anchor="start" x="276.97" y="-247.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">Integrates via REST</text>
</g>
<!-- webclient&#45;&gt;gms -->
<g id="edge2" class="edge">
<title>webclient&#45;&gt;gms</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M530.42,-322.87C502.45,-281.14 469.06,-231.31 440.4,-188.56"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="442.59,-187.11 436.24,-182.34 438.23,-190.04 442.59,-187.11"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="488.97,-240 488.97,-262.8 620.99,-262.8 620.99,-240 488.97,-240"/>
<text xml:space="preserve" text-anchor="start" x="491.97" y="-247.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">API calls via HTTPS</text>
</g>
</g>
</svg>
`;case"containerView":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 13.1.2 (0)
 -->
<!-- Pages: 1 -->
<svg width="1890pt" height="1679pt"
 viewBox="0.00 0.00 1890.00 1679.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1664.25)">
<g id="clust1" class="cluster">
<title>cluster_gms</title>
<polygon fill="#3a404a" stroke="#292f37" points="8,-8 8,-1378.4 1852,-1378.4 1852,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-1365.5" font-family="Arial" font-weight="bold" font-size="11.00" fill="#cbd5e1" fill-opacity="0.701961">GOVERNMENT MESSAGING SYSTEM</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_edgesub</title>
<polygon fill="#2225aa" stroke="#2a2490" points="495,-1052 495,-1317.2 879,-1317.2 879,-1052 495,-1052"/>
<text xml:space="preserve" text-anchor="start" x="503" y="-1304.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#c7d2fe" fill-opacity="0.701961">EDGE LAYER</text>
</g>
<g id="clust3" class="cluster">
<title>cluster_eventsub</title>
<polygon fill="#0d4b6c" stroke="#0b3c57" points="57,-712 57,-993.2 1365,-993.2 1365,-712 57,-712"/>
<text xml:space="preserve" text-anchor="start" x="65" y="-980.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#b6ecf7" fill-opacity="0.701961">EVENT LAYER</text>
</g>
<g id="clust4" class="cluster">
<title>cluster_processingsub</title>
<polygon fill="#2c4e32" stroke="#1e3524" points="48,-380 48,-661.2 1812,-661.2 1812,-380 48,-380"/>
<text xml:space="preserve" text-anchor="start" x="56" y="-648.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#c2f0c2" fill-opacity="0.701961">PROCESSING LAYER</text>
</g>
<g id="clust5" class="cluster">
<title>cluster_persistencesub</title>
<polygon fill="#5a3620" stroke="#462a17" points="56,-48 56,-329.2 1772,-329.2 1772,-48 56,-48"/>
<text xml:space="preserve" text-anchor="start" x="64" y="-316.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#f9b27c" fill-opacity="0.701961">PERSISTENCE LAYER</text>
</g>
<!-- apigateway -->
<g id="node1" class="node">
<title>apigateway</title>
<polygon fill="#6366f1" stroke="#4f46e5" stroke-width="0" points="847.02,-1264 526.98,-1264 526.98,-1084 847.02,-1084 847.02,-1264"/>
<text xml:space="preserve" text-anchor="start" x="631.56" y="-1188.3" font-family="Arial" font-size="19.00" fill="#eef2ff">API Gateway</text>
<text xml:space="preserve" text-anchor="start" x="549.85" y="-1165.1" font-family="Arial" font-size="15.00" fill="#c7d2fe">TLS termination, rate limiting and request</text>
<text xml:space="preserve" text-anchor="start" x="664.07" y="-1147.1" font-family="Arial" font-size="15.00" fill="#c7d2fe">routing</text>
</g>
<!-- identityserver -->
<g id="node2" class="node">
<title>identityserver</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="417.02,-932 96.98,-932 96.98,-752 417.02,-752 417.02,-932"/>
<text xml:space="preserve" text-anchor="start" x="195.75" y="-847.3" font-family="Arial" font-size="19.00" fill="#f0f9ff">Identity Server</text>
<text xml:space="preserve" text-anchor="start" x="176.96" y="-824.1" font-family="Arial" font-size="15.00" fill="#b6ecf7">OAuth 2.0, LDAP/SAML</text>
</g>
<!-- rolemodule -->
<g id="node3" class="node">
<title>rolemodule</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="847.02,-932 526.98,-932 526.98,-752 847.02,-752 847.02,-932"/>
<text xml:space="preserve" text-anchor="start" x="626.81" y="-847.3" font-family="Arial" font-size="19.00" fill="#f0f9ff">RBAC Module</text>
<text xml:space="preserve" text-anchor="start" x="598.62" y="-824.1" font-family="Arial" font-size="15.00" fill="#b6ecf7">Role&#45;based access control</text>
</g>
<!-- eventbus -->
<g id="node4" class="node">
<title>eventbus</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1324.69,-928 957.31,-928 957.31,-756 1324.69,-756 1324.69,-928"/>
<text xml:space="preserve" text-anchor="start" x="1097.7" y="-856.3" font-family="Arial" font-size="19.00" fill="#f0f9ff">Event Bus</text>
<text xml:space="preserve" text-anchor="start" x="981.33" y="-833.1" font-family="Arial" font-size="15.00" fill="#b6ecf7">Topics: msg.inbound, msg.outbound, msg.audit,</text>
<text xml:space="preserve" text-anchor="start" x="1114.74" y="-815.1" font-family="Arial" font-size="15.00" fill="#b6ecf7">msg.dlq</text>
</g>
<!-- inspector -->
<g id="node5" class="node">
<title>inspector</title>
<polygon fill="#ac4d39" stroke="#853a2d" stroke-width="0" points="408.02,-600 87.98,-600 87.98,-420 408.02,-420 408.02,-600"/>
<text xml:space="preserve" text-anchor="start" x="173.01" y="-515.3" font-family="Arial" font-size="19.00" fill="#fbd3cb">Content Inspector</text>
<text xml:space="preserve" text-anchor="start" x="120.01" y="-492.1" font-family="Arial" font-size="15.00" fill="#f5b2a3">Blocks .exe, .bat, .sh at ingestion point</text>
</g>
<!-- msgworkers -->
<g id="node6" class="node">
<title>msgworkers</title>
<polygon fill="#ac4d39" stroke="#853a2d" stroke-width="0" points="855.86,-600 518.14,-600 518.14,-420 855.86,-420 855.86,-600"/>
<text xml:space="preserve" text-anchor="start" x="610.45" y="-515.3" font-family="Arial" font-size="19.00" fill="#fbd3cb">Message Workers</text>
<text xml:space="preserve" text-anchor="start" x="538.2" y="-492.1" font-family="Arial" font-size="15.00" fill="#f5b2a3">Async consumers, DLQ, retry &amp; backoff logic</text>
</g>
<!-- smtpbridge -->
<g id="node7" class="node">
<title>smtpbridge</title>
<polygon fill="#ac4d39" stroke="#853a2d" stroke-width="0" points="1335.68,-600 966.32,-600 966.32,-420 1335.68,-420 1335.68,-600"/>
<text xml:space="preserve" text-anchor="start" x="1066.01" y="-515.3" font-family="Arial" font-size="19.00" fill="#fbd3cb">REST&#45;SMTP Bridge</text>
<text xml:space="preserve" text-anchor="start" x="986.37" y="-492.1" font-family="Arial" font-size="15.00" fill="#f5b2a3">Translates REST calls to IMAP/SMTP commands</text>
</g>
<!-- auditlogger -->
<g id="node8" class="node">
<title>auditlogger</title>
<polygon fill="#ac4d39" stroke="#853a2d" stroke-width="0" points="1772.45,-600 1445.55,-600 1445.55,-420 1772.45,-420 1772.45,-600"/>
<text xml:space="preserve" text-anchor="start" x="1555.13" y="-524.3" font-family="Arial" font-size="19.00" fill="#fbd3cb">Audit Logger</text>
<text xml:space="preserve" text-anchor="start" x="1465.6" y="-501.1" font-family="Arial" font-size="15.00" fill="#f5b2a3">Tamper&#45;evident log of all API calls &amp; admin</text>
<text xml:space="preserve" text-anchor="start" x="1586.9" y="-483.1" font-family="Arial" font-size="15.00" fill="#f5b2a3">events</text>
</g>
<!-- emailstore -->
<g id="node9" class="node">
<title>emailstore</title>
<path fill="#737373" stroke="#525252" stroke-width="2" d="M433.87,-251.64C433.87,-260.67 358.18,-268 265,-268 171.82,-268 96.13,-260.67 96.13,-251.64 96.13,-251.64 96.13,-104.36 96.13,-104.36 96.13,-95.33 171.82,-88 265,-88 358.18,-88 433.87,-95.33 433.87,-104.36 433.87,-104.36 433.87,-251.64 433.87,-251.64"/>
<path fill="none" stroke="#525252" stroke-width="2" d="M433.87,-251.64C433.87,-242.61 358.18,-235.27 265,-235.27 171.82,-235.27 96.13,-242.61 96.13,-251.64"/>
<text xml:space="preserve" text-anchor="start" x="215.9" y="-183.3" font-family="Arial" font-size="19.00" fill="#fafafa">Email Store</text>
<text xml:space="preserve" text-anchor="start" x="116.19" y="-160.1" font-family="Arial" font-size="15.00" fill="#d4d4d4">AES&#45;256 at rest, IMAP&#45;accessible mailboxes</text>
</g>
<!-- archivedb -->
<g id="node10" class="node">
<title>archivedb</title>
<path fill="#737373" stroke="#525252" stroke-width="2" d="M872.31,-251.64C872.31,-260.67 798.66,-268 708,-268 617.34,-268 543.69,-260.67 543.69,-251.64 543.69,-251.64 543.69,-104.36 543.69,-104.36 543.69,-95.33 617.34,-88 708,-88 798.66,-88 872.31,-95.33 872.31,-104.36 872.31,-104.36 872.31,-251.64 872.31,-251.64"/>
<path fill="none" stroke="#525252" stroke-width="2" d="M872.31,-251.64C872.31,-242.61 798.66,-235.27 708,-235.27 617.34,-235.27 543.69,-242.61 543.69,-251.64"/>
<text xml:space="preserve" text-anchor="start" x="660.49" y="-183.3" font-family="Arial" font-size="19.00" fill="#fafafa">Archive DB</text>
<text xml:space="preserve" text-anchor="start" x="563.75" y="-160.1" font-family="Arial" font-size="15.00" fill="#d4d4d4">5&#45;year retention tier, separate storage node</text>
</g>
<!-- replicadb -->
<g id="node11" class="node">
<title>replicadb</title>
<path fill="#737373" stroke="#525252" stroke-width="2" d="M1302.02,-251.64C1302.02,-260.67 1230.3,-268 1142,-268 1053.7,-268 981.98,-260.67 981.98,-251.64 981.98,-251.64 981.98,-104.36 981.98,-104.36 981.98,-95.33 1053.7,-88 1142,-88 1230.3,-88 1302.02,-95.33 1302.02,-104.36 1302.02,-104.36 1302.02,-251.64 1302.02,-251.64"/>
<path fill="none" stroke="#525252" stroke-width="2" d="M1302.02,-251.64C1302.02,-242.61 1230.3,-235.27 1142,-235.27 1053.7,-235.27 981.98,-242.61 981.98,-251.64"/>
<text xml:space="preserve" text-anchor="start" x="1075.99" y="-183.3" font-family="Arial" font-size="19.00" fill="#fafafa">Replica/Backup</text>
<text xml:space="preserve" text-anchor="start" x="1048.2" y="-160.1" font-family="Arial" font-size="15.00" fill="#d4d4d4">Daily snapshots and failover</text>
</g>
<!-- logstore -->
<g id="node12" class="node">
<title>logstore</title>
<path fill="#737373" stroke="#525252" stroke-width="2" d="M1732.02,-251.64C1732.02,-260.67 1660.3,-268 1572,-268 1483.7,-268 1411.98,-260.67 1411.98,-251.64 1411.98,-251.64 1411.98,-104.36 1411.98,-104.36 1411.98,-95.33 1483.7,-88 1572,-88 1660.3,-88 1732.02,-95.33 1732.02,-104.36 1732.02,-104.36 1732.02,-251.64 1732.02,-251.64"/>
<path fill="none" stroke="#525252" stroke-width="2" d="M1732.02,-251.64C1732.02,-242.61 1660.3,-235.27 1572,-235.27 1483.7,-235.27 1411.98,-242.61 1411.98,-251.64"/>
<text xml:space="preserve" text-anchor="start" x="1506.51" y="-183.3" font-family="Arial" font-size="19.00" fill="#fafafa">Audit Log Store</text>
<text xml:space="preserve" text-anchor="start" x="1434.01" y="-160.1" font-family="Arial" font-size="15.00" fill="#d4d4d4">Regulatory&#45;compliant, 12&#45;month retention</text>
</g>
<!-- govagency -->
<g id="node13" class="node">
<title>govagency</title>
<polygon fill="#737373" stroke="#525252" stroke-width="0" points="632.02,-1649.2 311.98,-1649.2 311.98,-1469.2 632.02,-1469.2 632.02,-1649.2"/>
<text xml:space="preserve" text-anchor="start" x="420.25" y="-1564.5" font-family="Arial" font-size="19.00" fill="#fafafa">Gov Agency</text>
<text xml:space="preserve" text-anchor="start" x="430.74" y="-1541.3" font-family="Arial" font-size="15.00" fill="#d4d4d4">REST Client</text>
</g>
<!-- webclient -->
<g id="node14" class="node">
<title>webclient</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="1062.02,-1649.2 741.98,-1649.2 741.98,-1469.2 1062.02,-1469.2 1062.02,-1649.2"/>
<text xml:space="preserve" text-anchor="start" x="824.91" y="-1564.5" font-family="Arial" font-size="19.00" fill="#f8fafc">Web/Mobile Client</text>
<text xml:space="preserve" text-anchor="start" x="820.72" y="-1541.3" font-family="Arial" font-size="15.00" fill="#cbd5e1">User &amp; Admin Interfaces</text>
</g>
<!-- apigateway&#45;&gt;identityserver -->
<g id="edge3" class="edge">
<title>apigateway&#45;&gt;identityserver</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M571.2,-1084.13C512.28,-1038.91 440.63,-983.93 380.64,-937.89"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="382.58,-936.07 375.03,-933.58 379.38,-940.23 382.58,-936.07"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="484.89,-1001.2 484.89,-1024 597.51,-1024 597.51,-1001.2 484.89,-1001.2"/>
<text xml:space="preserve" text-anchor="start" x="487.89" y="-1008.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">Authenticates via</text>
</g>
<!-- apigateway&#45;&gt;rolemodule -->
<g id="edge4" class="edge">
<title>apigateway&#45;&gt;rolemodule</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M687,-1084.13C687,-1040.3 687,-987.28 687,-942.14"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="689.63,-942.27 687,-934.77 684.38,-942.27 689.63,-942.27"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="687,-1001.2 687,-1024 780.93,-1024 780.93,-1001.2 687,-1001.2"/>
<text xml:space="preserve" text-anchor="start" x="690" y="-1008.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">Authorizes via</text>
</g>
<!-- apigateway&#45;&gt;eventbus -->
<g id="edge5" class="edge">
<title>apigateway&#45;&gt;eventbus</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M809.26,-1084.13C873.36,-1037.54 951.73,-980.58 1016.2,-933.71"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1017.42,-936.07 1021.94,-929.54 1014.33,-931.83 1017.42,-936.07"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="914,-1001.2 914,-1024 1041.41,-1024 1041.41,-1001.2 914,-1001.2"/>
<text xml:space="preserve" text-anchor="start" x="917" y="-1008.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">Publishes events to</text>
</g>
<!-- eventbus&#45;&gt;inspector -->
<g id="edge6" class="edge">
<title>eventbus&#45;&gt;inspector</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1004.97,-756.15C972.28,-739.02 936.74,-722.94 902,-712 808.33,-682.5 554.82,-696.03 463,-661.2 427.63,-647.79 392.58,-627.26 361.36,-605.65"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="363.2,-603.74 355.56,-601.58 360.18,-608.04 363.2,-603.74"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="743.62,-669.2 743.62,-692 829.78,-692 829.78,-669.2 743.62,-669.2"/>
<text xml:space="preserve" text-anchor="start" x="746.62" y="-676.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">msg.inbound</text>
</g>
<!-- eventbus&#45;&gt;msgworkers -->
<g id="edge7" class="edge">
<title>eventbus&#45;&gt;msgworkers</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1024.08,-756.02C960.84,-710.05 882.56,-653.15 817.36,-605.76"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="819.13,-603.8 811.52,-601.51 816.04,-608.04 819.13,-603.8"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="927.61,-669.2 927.61,-692 1022.34,-692 1022.34,-669.2 927.61,-669.2"/>
<text xml:space="preserve" text-anchor="start" x="930.61" y="-676.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">msg.outbound</text>
</g>
<!-- eventbus&#45;&gt;smtpbridge -->
<g id="edge8" class="edge">
<title>eventbus&#45;&gt;smtpbridge</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1143.58,-756.02C1144.93,-711.45 1146.59,-656.62 1148,-610.13"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1150.62,-610.33 1148.22,-602.75 1145.37,-610.17 1150.62,-610.33"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1146,-669.2 1146,-692 1240.73,-692 1240.73,-669.2 1146,-669.2"/>
<text xml:space="preserve" text-anchor="start" x="1149" y="-676.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">msg.outbound</text>
</g>
<!-- eventbus&#45;&gt;auditlogger -->
<g id="edge9" class="edge">
<title>eventbus&#45;&gt;auditlogger</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1261.52,-756.02C1326.71,-710.05 1407.41,-653.15 1474.62,-605.76"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1476.08,-607.94 1480.69,-601.47 1473.05,-603.65 1476.08,-607.94"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1375,-669.2 1375,-692 1441.7,-692 1441.7,-669.2 1375,-669.2"/>
<text xml:space="preserve" text-anchor="start" x="1378" y="-676.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">msg.audit</text>
</g>
<!-- inspector&#45;&gt;emailstore -->
<g id="edge10" class="edge">
<title>inspector&#45;&gt;emailstore</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M252.58,-420.13C254.82,-376.65 257.52,-324.14 259.84,-279.23"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="262.45,-279.54 260.21,-271.91 257.21,-279.27 262.45,-279.54"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="256.5,-337.2 256.5,-360 393.22,-360 393.22,-337.2 256.5,-337.2"/>
<text xml:space="preserve" text-anchor="start" x="259.5" y="-344.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">Stores filtered emails</text>
</g>
<!-- msgworkers&#45;&gt;archivedb -->
<g id="edge11" class="edge">
<title>msgworkers&#45;&gt;archivedb</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M692.66,-420.13C695.42,-376.65 698.76,-324.14 701.62,-279.23"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="704.23,-279.56 702.09,-271.91 698.99,-279.23 704.23,-279.56"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="697.5,-337.2 697.5,-360 824.88,-360 824.88,-337.2 697.5,-337.2"/>
<text xml:space="preserve" text-anchor="start" x="700.5" y="-344.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">Archives messages</text>
</g>
<!-- smtpbridge&#45;&gt;replicadb -->
<g id="edge12" class="edge">
<title>smtpbridge&#45;&gt;replicadb</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1148.58,-420.13C1147.39,-376.65 1145.96,-324.14 1144.73,-279.23"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1147.36,-279.34 1144.53,-271.91 1142.11,-279.48 1147.36,-279.34"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1146.77,-337.2 1146.77,-360 1293.58,-360 1293.58,-337.2 1146.77,-337.2"/>
<text xml:space="preserve" text-anchor="start" x="1149.77" y="-344.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">Syncs via IMAP/SMTP</text>
</g>
<!-- auditlogger&#45;&gt;logstore -->
<g id="edge13" class="edge">
<title>auditlogger&#45;&gt;logstore</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1599.04,-420.13C1594.16,-376.65 1588.27,-324.14 1583.24,-279.23"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1585.86,-279.06 1582.42,-271.9 1580.64,-279.64 1585.86,-279.06"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1591.61,-337.2 1591.61,-360 1717.43,-360 1717.43,-337.2 1591.61,-337.2"/>
<text xml:space="preserve" text-anchor="start" x="1594.61" y="-344.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">Writes audit entries</text>
</g>
<!-- govagency&#45;&gt;apigateway -->
<g id="edge1" class="edge">
<title>govagency&#45;&gt;apigateway</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M521.87,-1469.32C554.91,-1410.42 598.28,-1333.14 632.27,-1272.54"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="634.36,-1274.19 635.74,-1266.37 629.78,-1271.62 634.36,-1274.19"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="566.63,-1386.4 566.63,-1409.2 697.9,-1409.2 697.9,-1386.4 566.63,-1386.4"/>
<text xml:space="preserve" text-anchor="start" x="569.63" y="-1393.6" font-family="Arial" font-size="14.00" fill="#c6c6c6">Integrates via REST</text>
</g>
<!-- webclient&#45;&gt;apigateway -->
<g id="edge2" class="edge">
<title>webclient&#45;&gt;apigateway</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M852.13,-1469.32C819.09,-1410.42 775.72,-1333.14 741.73,-1272.54"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="744.22,-1271.62 738.26,-1266.37 739.64,-1274.19 744.22,-1271.62"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="816.93,-1386.4 816.93,-1409.2 948.95,-1409.2 948.95,-1386.4 816.93,-1386.4"/>
<text xml:space="preserve" text-anchor="start" x="819.93" y="-1393.6" font-family="Arial" font-size="14.00" fill="#c6c6c6">API calls via HTTPS</text>
</g>
</g>
</svg>
`;case"eventLayerComponents":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 13.1.2 (0)
 -->
<!-- Pages: 1 -->
<svg width="1354pt" height="865pt"
 viewBox="0.00 0.00 1354.00 865.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 849.85)">
<g id="clust1" class="cluster">
<title>cluster_eventsub</title>
<polygon fill="#0d4b6c" stroke="#0b3c57" points="8,-282.8 8,-564 1316,-564 1316,-282.8 8,-282.8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-551.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#b6ecf7" fill-opacity="0.701961">EVENT LAYER</text>
</g>
<!-- identityserver -->
<g id="node1" class="node">
<title>identityserver</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="368.02,-502.8 47.98,-502.8 47.98,-322.8 368.02,-322.8 368.02,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="146.75" y="-418.1" font-family="Arial" font-size="19.00" fill="#f0f9ff">Identity Server</text>
<text xml:space="preserve" text-anchor="start" x="127.96" y="-394.9" font-family="Arial" font-size="15.00" fill="#b6ecf7">OAuth 2.0, LDAP/SAML</text>
</g>
<!-- rolemodule -->
<g id="node2" class="node">
<title>rolemodule</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="798.02,-502.8 477.98,-502.8 477.98,-322.8 798.02,-322.8 798.02,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="577.81" y="-418.1" font-family="Arial" font-size="19.00" fill="#f0f9ff">RBAC Module</text>
<text xml:space="preserve" text-anchor="start" x="549.62" y="-394.9" font-family="Arial" font-size="15.00" fill="#b6ecf7">Role&#45;based access control</text>
</g>
<!-- eventbus -->
<g id="node3" class="node">
<title>eventbus</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1275.69,-498.8 908.31,-498.8 908.31,-326.8 1275.69,-326.8 1275.69,-498.8"/>
<text xml:space="preserve" text-anchor="start" x="1048.7" y="-427.1" font-family="Arial" font-size="19.00" fill="#f0f9ff">Event Bus</text>
<text xml:space="preserve" text-anchor="start" x="932.33" y="-403.9" font-family="Arial" font-size="15.00" fill="#b6ecf7">Topics: msg.inbound, msg.outbound, msg.audit,</text>
<text xml:space="preserve" text-anchor="start" x="1065.74" y="-385.9" font-family="Arial" font-size="15.00" fill="#b6ecf7">msg.dlq</text>
</g>
<!-- edgesub -->
<g id="node4" class="node">
<title>edgesub</title>
<polygon fill="#6366f1" stroke="#4f46e5" stroke-width="0" points="798.02,-834.8 477.98,-834.8 477.98,-654.8 798.02,-654.8 798.02,-834.8"/>
<text xml:space="preserve" text-anchor="start" x="589.41" y="-739.1" font-family="Arial" font-size="19.00" fill="#eef2ff">Edge Layer</text>
</g>
<!-- processingsub -->
<g id="node5" class="node">
<title>processingsub</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="1252.02,-180 931.98,-180 931.98,0 1252.02,0 1252.02,-180"/>
<text xml:space="preserve" text-anchor="start" x="1018.6" y="-84.3" font-family="Arial" font-size="19.00" fill="#f8fafc">Processing Layer</text>
</g>
<!-- eventbus&#45;&gt;processingsub -->
<g id="edge4" class="edge">
<title>eventbus&#45;&gt;processingsub</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1092,-327.09C1092,-285.08 1092,-234.06 1092,-190.23"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1094.63,-190.36 1092,-182.86 1089.38,-190.36 1094.63,-190.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1092,-240 1092,-262.8 1118.99,-262.8 1118.99,-240 1092,-240"/>
<text xml:space="preserve" text-anchor="start" x="1095" y="-248.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c6c6c6">[...]</text>
</g>
<!-- edgesub&#45;&gt;identityserver -->
<g id="edge1" class="edge">
<title>edgesub&#45;&gt;identityserver</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M522.2,-654.93C463.28,-609.71 391.63,-554.73 331.64,-508.69"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="333.58,-506.87 326.03,-504.38 330.38,-511.03 333.58,-506.87"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="435.89,-572 435.89,-594.8 548.51,-594.8 548.51,-572 435.89,-572"/>
<text xml:space="preserve" text-anchor="start" x="438.89" y="-579.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">Authenticates via</text>
</g>
<!-- edgesub&#45;&gt;rolemodule -->
<g id="edge2" class="edge">
<title>edgesub&#45;&gt;rolemodule</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M638,-654.93C638,-611.1 638,-558.08 638,-512.94"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="640.63,-513.07 638,-505.57 635.38,-513.07 640.63,-513.07"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="638,-572 638,-594.8 731.93,-594.8 731.93,-572 638,-572"/>
<text xml:space="preserve" text-anchor="start" x="641" y="-579.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">Authorizes via</text>
</g>
<!-- edgesub&#45;&gt;eventbus -->
<g id="edge3" class="edge">
<title>edgesub&#45;&gt;eventbus</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M760.26,-654.93C824.36,-608.34 902.73,-551.38 967.2,-504.51"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="968.42,-506.87 972.94,-500.34 965.33,-502.63 968.42,-506.87"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="865,-572 865,-594.8 992.41,-594.8 992.41,-572 865,-572"/>
<text xml:space="preserve" text-anchor="start" x="868" y="-579.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">Publishes events to</text>
</g>
</g>
</svg>
`;case"processingLayerComponents":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 13.1.2 (0)
 -->
<!-- Pages: 1 -->
<svg width="1810pt" height="865pt"
 viewBox="0.00 0.00 1810.00 865.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 849.85)">
<g id="clust1" class="cluster">
<title>cluster_processingsub</title>
<polygon fill="#2c4e32" stroke="#1e3524" points="8,-282.8 8,-564 1772,-564 1772,-282.8 8,-282.8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-551.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#c2f0c2" fill-opacity="0.701961">PROCESSING LAYER</text>
</g>
<!-- inspector -->
<g id="node1" class="node">
<title>inspector</title>
<polygon fill="#ac4d39" stroke="#853a2d" stroke-width="0" points="368.02,-502.8 47.98,-502.8 47.98,-322.8 368.02,-322.8 368.02,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="133.01" y="-418.1" font-family="Arial" font-size="19.00" fill="#fbd3cb">Content Inspector</text>
<text xml:space="preserve" text-anchor="start" x="80.01" y="-394.9" font-family="Arial" font-size="15.00" fill="#f5b2a3">Blocks .exe, .bat, .sh at ingestion point</text>
</g>
<!-- msgworkers -->
<g id="node2" class="node">
<title>msgworkers</title>
<polygon fill="#ac4d39" stroke="#853a2d" stroke-width="0" points="815.86,-502.8 478.14,-502.8 478.14,-322.8 815.86,-322.8 815.86,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="570.45" y="-418.1" font-family="Arial" font-size="19.00" fill="#fbd3cb">Message Workers</text>
<text xml:space="preserve" text-anchor="start" x="498.2" y="-394.9" font-family="Arial" font-size="15.00" fill="#f5b2a3">Async consumers, DLQ, retry &amp; backoff logic</text>
</g>
<!-- smtpbridge -->
<g id="node3" class="node">
<title>smtpbridge</title>
<polygon fill="#ac4d39" stroke="#853a2d" stroke-width="0" points="1295.68,-502.8 926.32,-502.8 926.32,-322.8 1295.68,-322.8 1295.68,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="1026.01" y="-418.1" font-family="Arial" font-size="19.00" fill="#fbd3cb">REST&#45;SMTP Bridge</text>
<text xml:space="preserve" text-anchor="start" x="946.37" y="-394.9" font-family="Arial" font-size="15.00" fill="#f5b2a3">Translates REST calls to IMAP/SMTP commands</text>
</g>
<!-- auditlogger -->
<g id="node4" class="node">
<title>auditlogger</title>
<polygon fill="#ac4d39" stroke="#853a2d" stroke-width="0" points="1732.45,-502.8 1405.55,-502.8 1405.55,-322.8 1732.45,-322.8 1732.45,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="1515.13" y="-427.1" font-family="Arial" font-size="19.00" fill="#fbd3cb">Audit Logger</text>
<text xml:space="preserve" text-anchor="start" x="1425.6" y="-403.9" font-family="Arial" font-size="15.00" fill="#f5b2a3">Tamper&#45;evident log of all API calls &amp; admin</text>
<text xml:space="preserve" text-anchor="start" x="1546.9" y="-385.9" font-family="Arial" font-size="15.00" fill="#f5b2a3">events</text>
</g>
<!-- eventsub -->
<g id="node5" class="node">
<title>eventsub</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1038.02,-834.8 717.98,-834.8 717.98,-654.8 1038.02,-654.8 1038.02,-834.8"/>
<text xml:space="preserve" text-anchor="start" x="827.3" y="-739.1" font-family="Arial" font-size="19.00" fill="#f0f9ff">Event Layer</text>
</g>
<!-- persistencesub -->
<g id="node6" class="node">
<title>persistencesub</title>
<polygon fill="#a35829" stroke="#7e451d" stroke-width="0" points="1038.02,-180 717.98,-180 717.98,0 1038.02,0 1038.02,-180"/>
<text xml:space="preserve" text-anchor="start" x="801.96" y="-84.3" font-family="Arial" font-size="19.00" fill="#ffe0c2">Persistence Layer</text>
</g>
<!-- inspector&#45;&gt;persistencesub -->
<g id="edge5" class="edge">
<title>inspector&#45;&gt;persistencesub</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M349.81,-322.88C373.91,-308.88 398.93,-295.01 423,-282.8 515.28,-235.96 621.72,-190.64 708.43,-155.83"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="709.3,-158.31 715.29,-153.09 707.35,-153.44 709.3,-158.31"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="508.04,-240 508.04,-262.8 644.76,-262.8 644.76,-240 508.04,-240"/>
<text xml:space="preserve" text-anchor="start" x="511.04" y="-247.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">Stores filtered emails</text>
</g>
<!-- msgworkers&#45;&gt;persistencesub -->
<g id="edge6" class="edge">
<title>msgworkers&#45;&gt;persistencesub</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M711.04,-322.87C741.14,-281.06 777.11,-231.11 807.94,-188.29"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="810.01,-189.91 812.27,-182.29 805.75,-186.84 810.01,-189.91"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="769.43,-240 769.43,-262.8 896.81,-262.8 896.81,-240 769.43,-240"/>
<text xml:space="preserve" text-anchor="start" x="772.43" y="-247.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">Archives messages</text>
</g>
<!-- smtpbridge&#45;&gt;persistencesub -->
<g id="edge7" class="edge">
<title>smtpbridge&#45;&gt;persistencesub</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1046.41,-322.87C1016.04,-281.06 979.76,-231.11 948.66,-188.29"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="950.83,-186.8 944.3,-182.28 946.58,-189.89 950.83,-186.8"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1001.49,-240 1001.49,-262.8 1148.29,-262.8 1148.29,-240 1001.49,-240"/>
<text xml:space="preserve" text-anchor="start" x="1004.49" y="-247.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">Syncs via IMAP/SMTP</text>
</g>
<!-- auditlogger&#45;&gt;persistencesub -->
<g id="edge8" class="edge">
<title>auditlogger&#45;&gt;persistencesub</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1425.56,-322.85C1401.02,-308.82 1375.53,-294.95 1351,-282.8 1252.73,-234.14 1138.95,-187.71 1047.61,-152.72"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1048.77,-150.35 1040.82,-150.13 1046.89,-155.26 1048.77,-150.35"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1301.11,-240 1301.11,-262.8 1426.93,-262.8 1426.93,-240 1301.11,-240"/>
<text xml:space="preserve" text-anchor="start" x="1304.11" y="-247.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">Writes audit entries</text>
</g>
<!-- eventsub&#45;&gt;inspector -->
<g id="edge1" class="edge">
<title>eventsub&#45;&gt;inspector</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M718.1,-690.98C628.97,-659 517.27,-614.66 423,-564 392.88,-547.82 361.94,-528.21 333.24,-508.57"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="334.96,-506.57 327.3,-504.47 331.98,-510.89 334.96,-506.57"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="482.28,-572 482.28,-594.8 568.45,-594.8 568.45,-572 482.28,-572"/>
<text xml:space="preserve" text-anchor="start" x="485.28" y="-579.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">msg.inbound</text>
</g>
<!-- eventsub&#45;&gt;msgworkers -->
<g id="edge2" class="edge">
<title>eventsub&#45;&gt;msgworkers</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M815.79,-654.93C784.66,-610.45 746.9,-556.52 715,-510.95"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="717.31,-509.66 710.85,-505.02 713,-512.67 717.31,-509.66"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="769.43,-572 769.43,-594.8 864.16,-594.8 864.16,-572 769.43,-572"/>
<text xml:space="preserve" text-anchor="start" x="772.43" y="-579.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">msg.outbound</text>
</g>
<!-- eventsub&#45;&gt;smtpbridge -->
<g id="edge3" class="edge">
<title>eventsub&#45;&gt;smtpbridge</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M940.75,-654.93C972.15,-610.45 1010.23,-556.52 1042.41,-510.95"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1044.42,-512.65 1046.6,-505.01 1040.13,-509.63 1044.42,-512.65"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="994.5,-572 994.5,-594.8 1089.23,-594.8 1089.23,-572 994.5,-572"/>
<text xml:space="preserve" text-anchor="start" x="997.5" y="-579.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">msg.outbound</text>
</g>
<!-- eventsub&#45;&gt;auditlogger -->
<g id="edge4" class="edge">
<title>eventsub&#45;&gt;auditlogger</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1037.91,-693.74C1131.56,-661.82 1250.75,-616.61 1351,-564 1381.65,-547.91 1413.14,-528.29 1442.31,-508.61"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1443.65,-510.87 1448.38,-504.48 1440.7,-506.53 1443.65,-510.87"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1326.77,-572 1326.77,-594.8 1393.46,-594.8 1393.46,-572 1326.77,-572"/>
<text xml:space="preserve" text-anchor="start" x="1329.77" y="-579.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">msg.audit</text>
</g>
</g>
</svg>
`;case"persistenceLayerComponents":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 13.1.2 (0)
 -->
<!-- Pages: 1 -->
<svg width="1762pt" height="590pt"
 viewBox="0.00 0.00 1762.00 590.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 575.05)">
<g id="clust1" class="cluster">
<title>cluster_persistencesub</title>
<polygon fill="#5a3620" stroke="#462a17" points="8,-8 8,-289.2 1724,-289.2 1724,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-276.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#f9b27c" fill-opacity="0.701961">PERSISTENCE LAYER</text>
</g>
<!-- emailstore -->
<g id="node1" class="node">
<title>emailstore</title>
<path fill="#737373" stroke="#525252" stroke-width="2" d="M385.87,-211.64C385.87,-220.67 310.18,-228 217,-228 123.82,-228 48.13,-220.67 48.13,-211.64 48.13,-211.64 48.13,-64.36 48.13,-64.36 48.13,-55.33 123.82,-48 217,-48 310.18,-48 385.87,-55.33 385.87,-64.36 385.87,-64.36 385.87,-211.64 385.87,-211.64"/>
<path fill="none" stroke="#525252" stroke-width="2" d="M385.87,-211.64C385.87,-202.61 310.18,-195.27 217,-195.27 123.82,-195.27 48.13,-202.61 48.13,-211.64"/>
<text xml:space="preserve" text-anchor="start" x="167.9" y="-143.3" font-family="Arial" font-size="19.00" fill="#fafafa">Email Store</text>
<text xml:space="preserve" text-anchor="start" x="68.19" y="-120.1" font-family="Arial" font-size="15.00" fill="#d4d4d4">AES&#45;256 at rest, IMAP&#45;accessible mailboxes</text>
</g>
<!-- archivedb -->
<g id="node2" class="node">
<title>archivedb</title>
<path fill="#737373" stroke="#525252" stroke-width="2" d="M824.31,-211.64C824.31,-220.67 750.66,-228 660,-228 569.34,-228 495.69,-220.67 495.69,-211.64 495.69,-211.64 495.69,-64.36 495.69,-64.36 495.69,-55.33 569.34,-48 660,-48 750.66,-48 824.31,-55.33 824.31,-64.36 824.31,-64.36 824.31,-211.64 824.31,-211.64"/>
<path fill="none" stroke="#525252" stroke-width="2" d="M824.31,-211.64C824.31,-202.61 750.66,-195.27 660,-195.27 569.34,-195.27 495.69,-202.61 495.69,-211.64"/>
<text xml:space="preserve" text-anchor="start" x="612.49" y="-143.3" font-family="Arial" font-size="19.00" fill="#fafafa">Archive DB</text>
<text xml:space="preserve" text-anchor="start" x="515.75" y="-120.1" font-family="Arial" font-size="15.00" fill="#d4d4d4">5&#45;year retention tier, separate storage node</text>
</g>
<!-- replicadb -->
<g id="node3" class="node">
<title>replicadb</title>
<path fill="#737373" stroke="#525252" stroke-width="2" d="M1254.02,-211.64C1254.02,-220.67 1182.3,-228 1094,-228 1005.7,-228 933.98,-220.67 933.98,-211.64 933.98,-211.64 933.98,-64.36 933.98,-64.36 933.98,-55.33 1005.7,-48 1094,-48 1182.3,-48 1254.02,-55.33 1254.02,-64.36 1254.02,-64.36 1254.02,-211.64 1254.02,-211.64"/>
<path fill="none" stroke="#525252" stroke-width="2" d="M1254.02,-211.64C1254.02,-202.61 1182.3,-195.27 1094,-195.27 1005.7,-195.27 933.98,-202.61 933.98,-211.64"/>
<text xml:space="preserve" text-anchor="start" x="1027.99" y="-143.3" font-family="Arial" font-size="19.00" fill="#fafafa">Replica/Backup</text>
<text xml:space="preserve" text-anchor="start" x="1000.2" y="-120.1" font-family="Arial" font-size="15.00" fill="#d4d4d4">Daily snapshots and failover</text>
</g>
<!-- logstore -->
<g id="node4" class="node">
<title>logstore</title>
<path fill="#737373" stroke="#525252" stroke-width="2" d="M1684.02,-211.64C1684.02,-220.67 1612.3,-228 1524,-228 1435.7,-228 1363.98,-220.67 1363.98,-211.64 1363.98,-211.64 1363.98,-64.36 1363.98,-64.36 1363.98,-55.33 1435.7,-48 1524,-48 1612.3,-48 1684.02,-55.33 1684.02,-64.36 1684.02,-64.36 1684.02,-211.64 1684.02,-211.64"/>
<path fill="none" stroke="#525252" stroke-width="2" d="M1684.02,-211.64C1684.02,-202.61 1612.3,-195.27 1524,-195.27 1435.7,-195.27 1363.98,-202.61 1363.98,-211.64"/>
<text xml:space="preserve" text-anchor="start" x="1458.51" y="-143.3" font-family="Arial" font-size="19.00" fill="#fafafa">Audit Log Store</text>
<text xml:space="preserve" text-anchor="start" x="1386.01" y="-120.1" font-family="Arial" font-size="15.00" fill="#d4d4d4">Regulatory&#45;compliant, 12&#45;month retention</text>
</g>
<!-- processingsub -->
<g id="node5" class="node">
<title>processingsub</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="1037.02,-560 716.98,-560 716.98,-380 1037.02,-380 1037.02,-560"/>
<text xml:space="preserve" text-anchor="start" x="803.6" y="-464.3" font-family="Arial" font-size="19.00" fill="#f8fafc">Processing Layer</text>
</g>
<!-- processingsub&#45;&gt;emailstore -->
<g id="edge1" class="edge">
<title>processingsub&#45;&gt;emailstore</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M717.12,-411.89C633.09,-379.69 529.46,-336.48 441,-289.2 409.29,-272.25 376.46,-251.96 346.02,-231.85"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="347.72,-229.83 340.02,-227.86 344.82,-234.2 347.72,-229.83"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="498.13,-297.2 498.13,-320 634.84,-320 634.84,-297.2 498.13,-297.2"/>
<text xml:space="preserve" text-anchor="start" x="501.13" y="-304.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">Stores filtered emails</text>
</g>
<!-- processingsub&#45;&gt;archivedb -->
<g id="edge2" class="edge">
<title>processingsub&#45;&gt;archivedb</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M818.56,-380.13C789.61,-336.1 754.57,-282.81 724.8,-237.54"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="727.09,-236.24 720.77,-231.42 722.7,-239.13 727.09,-236.24"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="775.01,-297.2 775.01,-320 902.39,-320 902.39,-297.2 775.01,-297.2"/>
<text xml:space="preserve" text-anchor="start" x="778.01" y="-304.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">Archives messages</text>
</g>
<!-- processingsub&#45;&gt;replicadb -->
<g id="edge3" class="edge">
<title>processingsub&#45;&gt;replicadb</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M935.44,-380.13C964.39,-336.1 999.43,-282.81 1029.2,-237.54"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1031.3,-239.13 1033.23,-231.42 1026.91,-236.24 1031.3,-239.13"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="985.5,-297.2 985.5,-320 1132.31,-320 1132.31,-297.2 985.5,-297.2"/>
<text xml:space="preserve" text-anchor="start" x="988.5" y="-304.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">Syncs via IMAP/SMTP</text>
</g>
<!-- processingsub&#45;&gt;logstore -->
<g id="edge4" class="edge">
<title>processingsub&#45;&gt;logstore</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1036.77,-411.99C1119.94,-379.97 1222.12,-336.9 1309,-289.2 1339.61,-272.4 1371.17,-252.18 1400.36,-232.11"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1401.78,-234.33 1406.45,-227.9 1398.79,-230.01 1401.78,-234.33"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1286.82,-297.2 1286.82,-320 1412.64,-320 1412.64,-297.2 1286.82,-297.2"/>
<text xml:space="preserve" text-anchor="start" x="1289.82" y="-304.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">Writes audit entries</text>
</g>
</g>
</svg>
`;case"webClientView":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 13.1.2 (0)
 -->
<!-- Pages: 1 -->
<svg width="1306pt" height="602pt"
 viewBox="0.00 0.00 1306.00 602.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 587.05)">
<g id="clust1" class="cluster">
<title>cluster_webclient</title>
<polygon fill="#3e4651" stroke="#2d333d" points="8,-282.8 8,-564 1268,-564 1268,-282.8 8,-282.8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-551.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#cbd5e1" fill-opacity="0.701961">WEB/MOBILE CLIENT</text>
</g>
<!-- usermobile -->
<g id="node1" class="node">
<title>usermobile</title>
<polygon fill="#6366f1" stroke="#4f46e5" stroke-width="0" points="368.02,-502.8 47.98,-502.8 47.98,-322.8 368.02,-322.8 368.02,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="160.47" y="-418.1" font-family="Arial" font-size="19.00" fill="#eef2ff">Mobile App</text>
<text xml:space="preserve" text-anchor="start" x="131.71" y="-394.9" font-family="Arial" font-size="15.00" fill="#c7d2fe">Native mobile interface</text>
</g>
<!-- userweb -->
<g id="node2" class="node">
<title>userweb</title>
<polygon fill="#6366f1" stroke="#4f46e5" stroke-width="0" points="798.02,-502.8 477.98,-502.8 477.98,-322.8 798.02,-322.8 798.02,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="591.54" y="-418.1" font-family="Arial" font-size="19.00" fill="#eef2ff">Web Client</text>
<text xml:space="preserve" text-anchor="start" x="577.98" y="-394.9" font-family="Arial" font-size="15.00" fill="#c7d2fe">Browser&#45;based UI</text>
</g>
<!-- adminportal -->
<g id="node3" class="node">
<title>adminportal</title>
<polygon fill="#6366f1" stroke="#4f46e5" stroke-width="0" points="1228.02,-502.8 907.98,-502.8 907.98,-322.8 1228.02,-322.8 1228.02,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="1013.62" y="-418.1" font-family="Arial" font-size="19.00" fill="#eef2ff">Admin Portal</text>
<text xml:space="preserve" text-anchor="start" x="990.05" y="-394.9" font-family="Arial" font-size="15.00" fill="#c7d2fe">Administrative interface</text>
</g>
<!-- gms -->
<g id="node4" class="node">
<title>gms</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="798.02,-180 477.98,-180 477.98,0 798.02,0 798.02,-180"/>
<text xml:space="preserve" text-anchor="start" x="502.83" y="-84.3" font-family="Arial" font-size="19.00" fill="#f8fafc">Government Messaging System</text>
</g>
<!-- usermobile&#45;&gt;gms -->
<g id="edge1" class="edge">
<title>usermobile&#45;&gt;gms</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M327.21,-322.87C384.3,-280.27 452.72,-229.23 510.81,-185.89"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="512.07,-188.23 516.51,-181.64 508.93,-184.02 512.07,-188.23"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="435.89,-240 435.89,-262.8 567.92,-262.8 567.92,-240 435.89,-240"/>
<text xml:space="preserve" text-anchor="start" x="438.89" y="-247.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">API calls via HTTPS</text>
</g>
<!-- userweb&#45;&gt;gms -->
<g id="edge2" class="edge">
<title>userweb&#45;&gt;gms</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M638,-322.87C638,-281.67 638,-232.56 638,-190.17"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="640.63,-190.36 638,-182.86 635.38,-190.36 640.63,-190.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="638,-240 638,-262.8 770.03,-262.8 770.03,-240 638,-240"/>
<text xml:space="preserve" text-anchor="start" x="641" y="-247.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">API calls via HTTPS</text>
</g>
<!-- adminportal&#45;&gt;gms -->
<g id="edge3" class="edge">
<title>adminportal&#45;&gt;gms</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M948.79,-322.87C891.7,-280.27 823.28,-229.23 765.19,-185.89"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="767.07,-184.02 759.49,-181.64 763.93,-188.23 767.07,-184.02"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="865.89,-240 865.89,-262.8 997.92,-262.8 997.92,-240 865.89,-240"/>
<text xml:space="preserve" text-anchor="start" x="868.89" y="-247.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">API calls via HTTPS</text>
</g>
</g>
</svg>
`;default:throw new Error("Unknown viewId: "+e)}}export{t as dotSource,n as svgSource};
