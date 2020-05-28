/** MutatingWebhook describes an admission webhook and the resources and operations it applies to. */
export type io$k8s$api$admissionregistration$v1beta1$MutatingWebhook = {
  /** AdmissionReviewVersions is an ordered list of preferred `AdmissionReview` versions the Webhook expects. API server will try to use first version in the list which it supports. If none of the versions specified in this list supported by API server, validation will fail for this object. If a persisted webhook configuration specifies allowed versions and does not include any versions known to the API Server, calls to the webhook will fail and be subject to the failure policy. Default to `['v1beta1']`. */
  readonly "admissionReviewVersions"?: readonly string[];
  /** ClientConfig defines how to communicate with the hook. Required */
  readonly "clientConfig":
    io$k8s$api$admissionregistration$v1beta1$WebhookClientConfig;
  /** FailurePolicy defines how unrecognized errors from the admission endpoint are handled - allowed values are Ignore or Fail. Defaults to Ignore. */
  readonly "failurePolicy"?: string;
  /** matchPolicy defines how the "rules" list is used to match incoming requests. Allowed values are "Exact" or "Equivalent".

- Exact: match a request only if it exactly matches a specified rule. For example, if deployments can be modified via apps/v1, apps/v1beta1, and extensions/v1beta1, but "rules" only included `apiGroups:["apps"], apiVersions:["v1"], resources: ["deployments"]`, a request to apps/v1beta1 or extensions/v1beta1 would not be sent to the webhook.

- Equivalent: match a request if modifies a resource listed in rules, even via another API group or version. For example, if deployments can be modified via apps/v1, apps/v1beta1, and extensions/v1beta1, and "rules" only included `apiGroups:["apps"], apiVersions:["v1"], resources: ["deployments"]`, a request to apps/v1beta1 or extensions/v1beta1 would be converted to apps/v1 and sent to the webhook.

Defaults to "Exact" */
  readonly "matchPolicy"?: string;
  /** The name of the admission webhook. Name should be fully qualified, e.g., imagepolicy.kubernetes.io, where "imagepolicy" is the name of the webhook, and kubernetes.io is the name of the organization. Required. */
  readonly "name": string;
  /** NamespaceSelector decides whether to run the webhook on an object based on whether the namespace for that object matches the selector. If the object itself is a namespace, the matching is performed on object.metadata.labels. If the object is another cluster scoped resource, it never skips the webhook.

For example, to run the webhook on any objects whose namespace is not associated with "runlevel" of "0" or "1";  you will set the selector as follows: "namespaceSelector": {
  "matchExpressions": [
    {
      "key": "runlevel",
      "operator": "NotIn",
      "values": [
        "0",
        "1"
      ]
    }
  ]
}

If instead you want to only run the webhook on any objects whose namespace is associated with the "environment" of "prod" or "staging"; you will set the selector as follows: "namespaceSelector": {
  "matchExpressions": [
    {
      "key": "environment",
      "operator": "In",
      "values": [
        "prod",
        "staging"
      ]
    }
  ]
}

See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more examples of label selectors.

Default to the empty LabelSelector, which matches everything. */
  readonly "namespaceSelector"?:
    io$k8s$apimachinery$pkg$apis$meta$v1$LabelSelector;
  /** ObjectSelector decides whether to run the webhook based on if the object has matching labels. objectSelector is evaluated against both the oldObject and newObject that would be sent to the webhook, and is considered to match if either object matches the selector. A null object (oldObject in the case of create, or newObject in the case of delete) or an object that cannot have labels (like a DeploymentRollback or a PodProxyOptions object) is not considered to match. Use the object selector only if the webhook is opt-in, because end users may skip the admission webhook by setting the labels. Default to the empty LabelSelector, which matches everything. */
  readonly "objectSelector"?:
    io$k8s$apimachinery$pkg$apis$meta$v1$LabelSelector;
  /** reinvocationPolicy indicates whether this webhook should be called multiple times as part of a single admission evaluation. Allowed values are "Never" and "IfNeeded".

Never: the webhook will not be called more than once in a single admission evaluation.

IfNeeded: the webhook will be called at least one additional time as part of the admission evaluation if the object being admitted is modified by other admission plugins after the initial webhook call. Webhooks that specify this option *must* be idempotent, able to process objects they previously admitted. Note: * the number of additional invocations is not guaranteed to be exactly one. * if additional invocations result in further modifications to the object, webhooks are not guaranteed to be invoked again. * webhooks that use this option may be reordered to minimize the number of additional invocations. * to validate an object after all mutations are guaranteed complete, use a validating admission webhook instead.

Defaults to "Never". */
  readonly "reinvocationPolicy"?: string;
  /** Rules describes what operations on what resources/subresources the webhook cares about. The webhook cares about an operation if it matches _any_ Rule. However, in order to prevent ValidatingAdmissionWebhooks and MutatingAdmissionWebhooks from putting the cluster in a state which cannot be recovered from without completely disabling the plugin, ValidatingAdmissionWebhooks and MutatingAdmissionWebhooks are never called on admission requests for ValidatingWebhookConfiguration and MutatingWebhookConfiguration objects. */
  readonly "rules"?:
    readonly io$k8s$api$admissionregistration$v1beta1$RuleWithOperations[];
  /** SideEffects states whether this webhookk has side effects. Acceptable values are: Unknown, None, Some, NoneOnDryRun Webhooks with side effects MUST implement a reconciliation system, since a request may be rejected by a future step in the admission change and the side effects therefore need to be undone. Requests with the dryRun attribute will be auto-rejected if they match a webhook with sideEffects == Unknown or Some. Defaults to Unknown. */
  readonly "sideEffects"?: string;
  /** TimeoutSeconds specifies the timeout for this webhook. After the timeout passes, the webhook call will be ignored or the API call will fail based on the failure policy. The timeout value must be between 1 and 30 seconds. Default to 30 seconds. */
  readonly "timeoutSeconds"?: number;
};

/** MutatingWebhookConfiguration describes the configuration of and admission webhook that accept or reject and may change the object. */
export type io$k8s$api$admissionregistration$v1beta1$MutatingWebhookConfiguration =
  {
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
    readonly "apiVersion"?: string;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
    readonly "kind"?: "MutatingWebhookConfiguration";
    /** Standard object metadata; More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata. */
    readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ObjectMeta;
    /** Webhooks is a list of webhooks and the affected resources and operations. */
    readonly "webhooks"?:
      readonly io$k8s$api$admissionregistration$v1beta1$MutatingWebhook[];
  };

/** MutatingWebhookConfigurationList is a list of MutatingWebhookConfiguration. */
export type io$k8s$api$admissionregistration$v1beta1$MutatingWebhookConfigurationList =
  {
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
    readonly "apiVersion"?: string;
    /** List of MutatingWebhookConfiguration. */
    readonly "items":
      readonly io$k8s$api$admissionregistration$v1beta1$MutatingWebhookConfiguration[];
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
    readonly "kind"?: "MutatingWebhookConfigurationList";
    /** Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
    readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ListMeta;
  };

/** RuleWithOperations is a tuple of Operations and Resources. It is recommended to make sure that all the tuple expansions are valid. */
export type io$k8s$api$admissionregistration$v1beta1$RuleWithOperations = {
  /** APIGroups is the API groups the resources belong to. '*' is all groups. If '*' is present, the length of the slice must be one. Required. */
  readonly "apiGroups"?: readonly string[];
  /** APIVersions is the API versions the resources belong to. '*' is all versions. If '*' is present, the length of the slice must be one. Required. */
  readonly "apiVersions"?: readonly string[];
  /** Operations is the operations the admission hook cares about - CREATE, UPDATE, or * for all operations. If '*' is present, the length of the slice must be one. Required. */
  readonly "operations"?: readonly string[];
  /** Resources is a list of resources this rule applies to.

For example: 'pods' means pods. 'pods/log' means the log subresource of pods. '*' means all resources, but not subresources. 'pods^*' means all subresources of pods. '*^scale' means all scale subresources. '*^*' means all resources and their subresources.

If wildcard is present, the validation rule will ensure resources do not overlap with each other.

Depending on the enclosing object, subresources might not be allowed. Required. */
  readonly "resources"?: readonly string[];
  /** scope specifies the scope of this rule. Valid values are "Cluster", "Namespaced", and "*" "Cluster" means that only cluster-scoped resources will match this rule. Namespace API objects are cluster-scoped. "Namespaced" means that only namespaced resources will match this rule. "*" means that there are no scope restrictions. Subresources match the scope of their parent resource. Default is "*". */
  readonly "scope"?: string;
};

/** ServiceReference holds a reference to Service.legacy.k8s.io */
export type io$k8s$api$admissionregistration$v1beta1$ServiceReference = {
  /** `name` is the name of the service. Required */
  readonly "name": string;
  /** `namespace` is the namespace of the service. Required */
  readonly "namespace": string;
  /** `path` is an optional URL path which will be sent in any request to this service. */
  readonly "path"?: string;
  /** If specified, the port on the service that hosting webhook. Default to 443 for backward compatibility. `port` should be a valid port number (1-65535, inclusive). */
  readonly "port"?: number;
};

/** ValidatingWebhook describes an admission webhook and the resources and operations it applies to. */
export type io$k8s$api$admissionregistration$v1beta1$ValidatingWebhook = {
  /** AdmissionReviewVersions is an ordered list of preferred `AdmissionReview` versions the Webhook expects. API server will try to use first version in the list which it supports. If none of the versions specified in this list supported by API server, validation will fail for this object. If a persisted webhook configuration specifies allowed versions and does not include any versions known to the API Server, calls to the webhook will fail and be subject to the failure policy. Default to `['v1beta1']`. */
  readonly "admissionReviewVersions"?: readonly string[];
  /** ClientConfig defines how to communicate with the hook. Required */
  readonly "clientConfig":
    io$k8s$api$admissionregistration$v1beta1$WebhookClientConfig;
  /** FailurePolicy defines how unrecognized errors from the admission endpoint are handled - allowed values are Ignore or Fail. Defaults to Ignore. */
  readonly "failurePolicy"?: string;
  /** matchPolicy defines how the "rules" list is used to match incoming requests. Allowed values are "Exact" or "Equivalent".

- Exact: match a request only if it exactly matches a specified rule. For example, if deployments can be modified via apps/v1, apps/v1beta1, and extensions/v1beta1, but "rules" only included `apiGroups:["apps"], apiVersions:["v1"], resources: ["deployments"]`, a request to apps/v1beta1 or extensions/v1beta1 would not be sent to the webhook.

- Equivalent: match a request if modifies a resource listed in rules, even via another API group or version. For example, if deployments can be modified via apps/v1, apps/v1beta1, and extensions/v1beta1, and "rules" only included `apiGroups:["apps"], apiVersions:["v1"], resources: ["deployments"]`, a request to apps/v1beta1 or extensions/v1beta1 would be converted to apps/v1 and sent to the webhook.

Defaults to "Exact" */
  readonly "matchPolicy"?: string;
  /** The name of the admission webhook. Name should be fully qualified, e.g., imagepolicy.kubernetes.io, where "imagepolicy" is the name of the webhook, and kubernetes.io is the name of the organization. Required. */
  readonly "name": string;
  /** NamespaceSelector decides whether to run the webhook on an object based on whether the namespace for that object matches the selector. If the object itself is a namespace, the matching is performed on object.metadata.labels. If the object is another cluster scoped resource, it never skips the webhook.

For example, to run the webhook on any objects whose namespace is not associated with "runlevel" of "0" or "1";  you will set the selector as follows: "namespaceSelector": {
  "matchExpressions": [
    {
      "key": "runlevel",
      "operator": "NotIn",
      "values": [
        "0",
        "1"
      ]
    }
  ]
}

If instead you want to only run the webhook on any objects whose namespace is associated with the "environment" of "prod" or "staging"; you will set the selector as follows: "namespaceSelector": {
  "matchExpressions": [
    {
      "key": "environment",
      "operator": "In",
      "values": [
        "prod",
        "staging"
      ]
    }
  ]
}

See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels for more examples of label selectors.

Default to the empty LabelSelector, which matches everything. */
  readonly "namespaceSelector"?:
    io$k8s$apimachinery$pkg$apis$meta$v1$LabelSelector;
  /** ObjectSelector decides whether to run the webhook based on if the object has matching labels. objectSelector is evaluated against both the oldObject and newObject that would be sent to the webhook, and is considered to match if either object matches the selector. A null object (oldObject in the case of create, or newObject in the case of delete) or an object that cannot have labels (like a DeploymentRollback or a PodProxyOptions object) is not considered to match. Use the object selector only if the webhook is opt-in, because end users may skip the admission webhook by setting the labels. Default to the empty LabelSelector, which matches everything. */
  readonly "objectSelector"?:
    io$k8s$apimachinery$pkg$apis$meta$v1$LabelSelector;
  /** Rules describes what operations on what resources/subresources the webhook cares about. The webhook cares about an operation if it matches _any_ Rule. However, in order to prevent ValidatingAdmissionWebhooks and MutatingAdmissionWebhooks from putting the cluster in a state which cannot be recovered from without completely disabling the plugin, ValidatingAdmissionWebhooks and MutatingAdmissionWebhooks are never called on admission requests for ValidatingWebhookConfiguration and MutatingWebhookConfiguration objects. */
  readonly "rules"?:
    readonly io$k8s$api$admissionregistration$v1beta1$RuleWithOperations[];
  /** SideEffects states whether this webhookk has side effects. Acceptable values are: Unknown, None, Some, NoneOnDryRun Webhooks with side effects MUST implement a reconciliation system, since a request may be rejected by a future step in the admission change and the side effects therefore need to be undone. Requests with the dryRun attribute will be auto-rejected if they match a webhook with sideEffects == Unknown or Some. Defaults to Unknown. */
  readonly "sideEffects"?: string;
  /** TimeoutSeconds specifies the timeout for this webhook. After the timeout passes, the webhook call will be ignored or the API call will fail based on the failure policy. The timeout value must be between 1 and 30 seconds. Default to 30 seconds. */
  readonly "timeoutSeconds"?: number;
};

/** ValidatingWebhookConfiguration describes the configuration of and admission webhook that accept or reject and object without changing it. */
export type io$k8s$api$admissionregistration$v1beta1$ValidatingWebhookConfiguration =
  {
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
    readonly "apiVersion"?: string;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
    readonly "kind"?: "ValidatingWebhookConfiguration";
    /** Standard object metadata; More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata. */
    readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ObjectMeta;
    /** Webhooks is a list of webhooks and the affected resources and operations. */
    readonly "webhooks"?:
      readonly io$k8s$api$admissionregistration$v1beta1$ValidatingWebhook[];
  };

/** ValidatingWebhookConfigurationList is a list of ValidatingWebhookConfiguration. */
export type io$k8s$api$admissionregistration$v1beta1$ValidatingWebhookConfigurationList =
  {
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
    readonly "apiVersion"?: string;
    /** List of ValidatingWebhookConfiguration. */
    readonly "items":
      readonly io$k8s$api$admissionregistration$v1beta1$ValidatingWebhookConfiguration[];
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
    readonly "kind"?: "ValidatingWebhookConfigurationList";
    /** Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
    readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ListMeta;
  };

/** WebhookClientConfig contains the information to make a TLS connection with the webhook */
export type io$k8s$api$admissionregistration$v1beta1$WebhookClientConfig = {
  /** `caBundle` is a PEM encoded CA bundle which will be used to validate the webhook's server certificate. If unspecified, system trust roots on the apiserver are used. */
  readonly "caBundle"?: string;
  /** `service` is a reference to the service for this webhook. Either `service` or `url` must be specified.

If the webhook is running within the cluster, then you should use `service`. */
  readonly "service"?:
    io$k8s$api$admissionregistration$v1beta1$ServiceReference;
  /** `url` gives the location of the webhook, in standard URL form (`scheme://host:port/path`). Exactly one of `url` or `service` must be specified.

The `host` should not refer to a service running in the cluster; use the `service` field instead. The host might be resolved via external DNS in some apiservers (e.g., `kube-apiserver` cannot resolve in-cluster DNS as that would be a layering violation). `host` may also be an IP address.

Please note that using `localhost` or `127.0.0.1` as a `host` is risky unless you take great care to run this webhook on all hosts which run an apiserver which might need to make calls to this webhook. Such installs are likely to be non-portable, i.e., not easy to turn up in a new cluster.

The scheme must be "https"; the URL must begin with "https://".

A path is optional, and if present may be any string permissible in a URL. You may use the path to pass an arbitrary string to the webhook, for example, a cluster identifier.

Attempting to use a user or basic auth e.g. "user:password@" is not allowed. Fragments ("#...") and query parameters ("?...") are not allowed, either. */
  readonly "url"?: string;
};

/** ControllerRevision implements an immutable snapshot of state data. Clients are responsible for serializing and deserializing the objects that contain their internal state. Once a ControllerRevision has been successfully created, it can not be updated. The API Server will fail validation of all requests that attempt to mutate the Data field. ControllerRevisions may, however, be deleted. Note that, due to its use by both the DaemonSet and StatefulSet controllers for update and rollback, this object is beta. However, it may be subject to name and representation changes in future releases, and clients should not depend on its stability. It is primarily for internal use by controllers. */
export type io$k8s$api$apps$v1$ControllerRevision = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Data is the serialized representation of the state. */
  readonly "data"?: io$k8s$apimachinery$pkg$runtime$RawExtension;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "ControllerRevision";
  /** Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ObjectMeta;
  /** Revision indicates the revision of the state represented by Data. */
  readonly "revision": number;
};

/** ControllerRevisionList is a resource containing a list of ControllerRevision objects. */
export type io$k8s$api$apps$v1$ControllerRevisionList = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Items is the list of ControllerRevisions */
  readonly "items": readonly io$k8s$api$apps$v1$ControllerRevision[];
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "ControllerRevisionList";
  /** More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ListMeta;
};

/** DaemonSet represents the configuration of a daemon set. */
export type io$k8s$api$apps$v1$DaemonSet = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "DaemonSet";
  /** Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ObjectMeta;
  /** The desired behavior of this daemon set. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status */
  readonly "spec"?: io$k8s$api$apps$v1$DaemonSetSpec;
  /** The current status of this daemon set. This data may be out of date by some window of time. Populated by the system. Read-only. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status */
  readonly "status"?: io$k8s$api$apps$v1$DaemonSetStatus;
};

/** DaemonSetCondition describes the state of a DaemonSet at a certain point. */
export type io$k8s$api$apps$v1$DaemonSetCondition = {
  /** Last time the condition transitioned from one status to another. */
  readonly "lastTransitionTime"?: io$k8s$apimachinery$pkg$apis$meta$v1$Time;
  /** A human readable message indicating details about the transition. */
  readonly "message"?: string;
  /** The reason for the condition's last transition. */
  readonly "reason"?: string;
  /** Status of the condition, one of True, False, Unknown. */
  readonly "status": string;
  /** Type of DaemonSet condition. */
  readonly "type": string;
};

/** DaemonSetList is a collection of daemon sets. */
export type io$k8s$api$apps$v1$DaemonSetList = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** A list of daemon sets. */
  readonly "items": readonly io$k8s$api$apps$v1$DaemonSet[];
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "DaemonSetList";
  /** Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ListMeta;
};

/** DaemonSetSpec is the specification of a daemon set. */
export type io$k8s$api$apps$v1$DaemonSetSpec = {
  /** The minimum number of seconds for which a newly created DaemonSet pod should be ready without any of its container crashing, for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready). */
  readonly "minReadySeconds"?: number;
  /** The number of old history to retain to allow rollback. This is a pointer to distinguish between explicit zero and not specified. Defaults to 10. */
  readonly "revisionHistoryLimit"?: number;
  /** A label query over pods that are managed by the daemon set. Must match in order to be controlled. It must match the pod template's labels. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#label-selectors */
  readonly "selector": io$k8s$apimachinery$pkg$apis$meta$v1$LabelSelector;
  /** An object that describes the pod that will be created. The DaemonSet will create exactly one copy of this pod on every node that matches the template's node selector (or on every node if no node selector is specified). More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller#pod-template */
  readonly "template": io$k8s$api$core$v1$PodTemplateSpec;
  /** An update strategy to replace existing DaemonSet pods with new pods. */
  readonly "updateStrategy"?: io$k8s$api$apps$v1$DaemonSetUpdateStrategy;
};

/** DaemonSetStatus represents the current status of a daemon set. */
export type io$k8s$api$apps$v1$DaemonSetStatus = {
  /** Count of hash collisions for the DaemonSet. The DaemonSet controller uses this field as a collision avoidance mechanism when it needs to create the name for the newest ControllerRevision. */
  readonly "collisionCount"?: number;
  /** Represents the latest available observations of a DaemonSet's current state. */
  readonly "conditions"?: readonly io$k8s$api$apps$v1$DaemonSetCondition[];
  /** The number of nodes that are running at least 1 daemon pod and are supposed to run the daemon pod. More info: https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/ */
  readonly "currentNumberScheduled": number;
  /** The total number of nodes that should be running the daemon pod (including nodes correctly running the daemon pod). More info: https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/ */
  readonly "desiredNumberScheduled": number;
  /** The number of nodes that should be running the daemon pod and have one or more of the daemon pod running and available (ready for at least spec.minReadySeconds) */
  readonly "numberAvailable"?: number;
  /** The number of nodes that are running the daemon pod, but are not supposed to run the daemon pod. More info: https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/ */
  readonly "numberMisscheduled": number;
  /** The number of nodes that should be running the daemon pod and have one or more of the daemon pod running and ready. */
  readonly "numberReady": number;
  /** The number of nodes that should be running the daemon pod and have none of the daemon pod running and available (ready for at least spec.minReadySeconds) */
  readonly "numberUnavailable"?: number;
  /** The most recent generation observed by the daemon set controller. */
  readonly "observedGeneration"?: number;
  /** The total number of nodes that are running updated daemon pod */
  readonly "updatedNumberScheduled"?: number;
};

/** DaemonSetUpdateStrategy is a struct used to control the update strategy for a DaemonSet. */
export type io$k8s$api$apps$v1$DaemonSetUpdateStrategy = {
  /** Rolling update config params. Present only if type = "RollingUpdate". */
  readonly "rollingUpdate"?: io$k8s$api$apps$v1$RollingUpdateDaemonSet;
  /** Type of daemon set update. Can be "RollingUpdate" or "OnDelete". Default is RollingUpdate. */
  readonly "type"?: string;
};

/** Deployment enables declarative updates for Pods and ReplicaSets. */
export type io$k8s$api$apps$v1$Deployment = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "Deployment";
  /** Standard object metadata. */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ObjectMeta;
  /** Specification of the desired behavior of the Deployment. */
  readonly "spec"?: io$k8s$api$apps$v1$DeploymentSpec;
  /** Most recently observed status of the Deployment. */
  readonly "status"?: io$k8s$api$apps$v1$DeploymentStatus;
};

/** DeploymentCondition describes the state of a deployment at a certain point. */
export type io$k8s$api$apps$v1$DeploymentCondition = {
  /** Last time the condition transitioned from one status to another. */
  readonly "lastTransitionTime"?: io$k8s$apimachinery$pkg$apis$meta$v1$Time;
  /** The last time this condition was updated. */
  readonly "lastUpdateTime"?: io$k8s$apimachinery$pkg$apis$meta$v1$Time;
  /** A human readable message indicating details about the transition. */
  readonly "message"?: string;
  /** The reason for the condition's last transition. */
  readonly "reason"?: string;
  /** Status of the condition, one of True, False, Unknown. */
  readonly "status": string;
  /** Type of deployment condition. */
  readonly "type": string;
};

/** DeploymentList is a list of Deployments. */
export type io$k8s$api$apps$v1$DeploymentList = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Items is the list of Deployments. */
  readonly "items": readonly io$k8s$api$apps$v1$Deployment[];
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "DeploymentList";
  /** Standard list metadata. */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ListMeta;
};

/** DeploymentSpec is the specification of the desired behavior of the Deployment. */
export type io$k8s$api$apps$v1$DeploymentSpec = {
  /** Minimum number of seconds for which a newly created pod should be ready without any of its container crashing, for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready) */
  readonly "minReadySeconds"?: number;
  /** Indicates that the deployment is paused. */
  readonly "paused"?: boolean;
  /** The maximum time in seconds for a deployment to make progress before it is considered to be failed. The deployment controller will continue to process failed deployments and a condition with a ProgressDeadlineExceeded reason will be surfaced in the deployment status. Note that progress will not be estimated during the time a deployment is paused. Defaults to 600s. */
  readonly "progressDeadlineSeconds"?: number;
  /** Number of desired pods. This is a pointer to distinguish between explicit zero and not specified. Defaults to 1. */
  readonly "replicas"?: number;
  /** The number of old ReplicaSets to retain to allow rollback. This is a pointer to distinguish between explicit zero and not specified. Defaults to 10. */
  readonly "revisionHistoryLimit"?: number;
  /** Label selector for pods. Existing ReplicaSets whose pods are selected by this will be the ones affected by this deployment. It must match the pod template's labels. */
  readonly "selector": io$k8s$apimachinery$pkg$apis$meta$v1$LabelSelector;
  /** The deployment strategy to use to replace existing pods with new ones. */
  readonly "strategy"?: io$k8s$api$apps$v1$DeploymentStrategy;
  /** Template describes the pods that will be created. */
  readonly "template": io$k8s$api$core$v1$PodTemplateSpec;
};

/** DeploymentStatus is the most recently observed status of the Deployment. */
export type io$k8s$api$apps$v1$DeploymentStatus = {
  /** Total number of available pods (ready for at least minReadySeconds) targeted by this deployment. */
  readonly "availableReplicas"?: number;
  /** Count of hash collisions for the Deployment. The Deployment controller uses this field as a collision avoidance mechanism when it needs to create the name for the newest ReplicaSet. */
  readonly "collisionCount"?: number;
  /** Represents the latest available observations of a deployment's current state. */
  readonly "conditions"?: readonly io$k8s$api$apps$v1$DeploymentCondition[];
  /** The generation observed by the deployment controller. */
  readonly "observedGeneration"?: number;
  /** Total number of ready pods targeted by this deployment. */
  readonly "readyReplicas"?: number;
  /** Total number of non-terminated pods targeted by this deployment (their labels match the selector). */
  readonly "replicas"?: number;
  /** Total number of unavailable pods targeted by this deployment. This is the total number of pods that are still required for the deployment to have 100% available capacity. They may either be pods that are running but not yet available or pods that still have not been created. */
  readonly "unavailableReplicas"?: number;
  /** Total number of non-terminated pods targeted by this deployment that have the desired template spec. */
  readonly "updatedReplicas"?: number;
};

/** DeploymentStrategy describes how to replace existing pods with new ones. */
export type io$k8s$api$apps$v1$DeploymentStrategy = {
  /** Rolling update config params. Present only if DeploymentStrategyType = RollingUpdate. */
  readonly "rollingUpdate"?: io$k8s$api$apps$v1$RollingUpdateDeployment;
  /** Type of deployment. Can be "Recreate" or "RollingUpdate". Default is RollingUpdate. */
  readonly "type"?: string;
};

/** ReplicaSet ensures that a specified number of pod replicas are running at any given time. */
export type io$k8s$api$apps$v1$ReplicaSet = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "ReplicaSet";
  /** If the Labels of a ReplicaSet are empty, they are defaulted to be the same as the Pod(s) that the ReplicaSet manages. Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ObjectMeta;
  /** Spec defines the specification of the desired behavior of the ReplicaSet. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status */
  readonly "spec"?: io$k8s$api$apps$v1$ReplicaSetSpec;
  /** Status is the most recently observed status of the ReplicaSet. This data may be out of date by some window of time. Populated by the system. Read-only. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status */
  readonly "status"?: io$k8s$api$apps$v1$ReplicaSetStatus;
};

/** ReplicaSetCondition describes the state of a replica set at a certain point. */
export type io$k8s$api$apps$v1$ReplicaSetCondition = {
  /** The last time the condition transitioned from one status to another. */
  readonly "lastTransitionTime"?: io$k8s$apimachinery$pkg$apis$meta$v1$Time;
  /** A human readable message indicating details about the transition. */
  readonly "message"?: string;
  /** The reason for the condition's last transition. */
  readonly "reason"?: string;
  /** Status of the condition, one of True, False, Unknown. */
  readonly "status": string;
  /** Type of replica set condition. */
  readonly "type": string;
};

/** ReplicaSetList is a collection of ReplicaSets. */
export type io$k8s$api$apps$v1$ReplicaSetList = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** List of ReplicaSets. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller */
  readonly "items": readonly io$k8s$api$apps$v1$ReplicaSet[];
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "ReplicaSetList";
  /** Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ListMeta;
};

/** ReplicaSetSpec is the specification of a ReplicaSet. */
export type io$k8s$api$apps$v1$ReplicaSetSpec = {
  /** Minimum number of seconds for which a newly created pod should be ready without any of its container crashing, for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready) */
  readonly "minReadySeconds"?: number;
  /** Replicas is the number of desired replicas. This is a pointer to distinguish between explicit zero and unspecified. Defaults to 1. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller/#what-is-a-replicationcontroller */
  readonly "replicas"?: number;
  /** Selector is a label query over pods that should match the replica count. Label keys and values that must match in order to be controlled by this replica set. It must match the pod template's labels. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#label-selectors */
  readonly "selector": io$k8s$apimachinery$pkg$apis$meta$v1$LabelSelector;
  /** Template is the object that describes the pod that will be created if insufficient replicas are detected. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller#pod-template */
  readonly "template"?: io$k8s$api$core$v1$PodTemplateSpec;
};

/** ReplicaSetStatus represents the current status of a ReplicaSet. */
export type io$k8s$api$apps$v1$ReplicaSetStatus = {
  /** The number of available replicas (ready for at least minReadySeconds) for this replica set. */
  readonly "availableReplicas"?: number;
  /** Represents the latest available observations of a replica set's current state. */
  readonly "conditions"?: readonly io$k8s$api$apps$v1$ReplicaSetCondition[];
  /** The number of pods that have labels matching the labels of the pod template of the replicaset. */
  readonly "fullyLabeledReplicas"?: number;
  /** ObservedGeneration reflects the generation of the most recently observed ReplicaSet. */
  readonly "observedGeneration"?: number;
  /** The number of ready replicas for this replica set. */
  readonly "readyReplicas"?: number;
  /** Replicas is the most recently oberved number of replicas. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller/#what-is-a-replicationcontroller */
  readonly "replicas": number;
};

/** Spec to control the desired behavior of daemon set rolling update. */
export type io$k8s$api$apps$v1$RollingUpdateDaemonSet = {
  /** The maximum number of DaemonSet pods that can be unavailable during the update. Value can be an absolute number (ex: 5) or a percentage of total number of DaemonSet pods at the start of the update (ex: 10%). Absolute number is calculated from percentage by rounding up. This cannot be 0. Default value is 1. Example: when this is set to 30%, at most 30% of the total number of nodes that should be running the daemon pod (i.e. status.desiredNumberScheduled) can have their pods stopped for an update at any given time. The update starts by stopping at most 30% of those DaemonSet pods and then brings up new DaemonSet pods in their place. Once the new pods are available, it then proceeds onto other DaemonSet pods, thus ensuring that at least 70% of original number of DaemonSet pods are available at all times during the update. */
  readonly "maxUnavailable"?: io$k8s$apimachinery$pkg$util$intstr$IntOrString;
};

/** Spec to control the desired behavior of rolling update. */
export type io$k8s$api$apps$v1$RollingUpdateDeployment = {
  /** The maximum number of pods that can be scheduled above the desired number of pods. Value can be an absolute number (ex: 5) or a percentage of desired pods (ex: 10%). This can not be 0 if MaxUnavailable is 0. Absolute number is calculated from percentage by rounding up. Defaults to 25%. Example: when this is set to 30%, the new ReplicaSet can be scaled up immediately when the rolling update starts, such that the total number of old and new pods do not exceed 130% of desired pods. Once old pods have been killed, new ReplicaSet can be scaled up further, ensuring that total number of pods running at any time during the update is at most 130% of desired pods. */
  readonly "maxSurge"?: io$k8s$apimachinery$pkg$util$intstr$IntOrString;
  /** The maximum number of pods that can be unavailable during the update. Value can be an absolute number (ex: 5) or a percentage of desired pods (ex: 10%). Absolute number is calculated from percentage by rounding down. This can not be 0 if MaxSurge is 0. Defaults to 25%. Example: when this is set to 30%, the old ReplicaSet can be scaled down to 70% of desired pods immediately when the rolling update starts. Once new pods are ready, old ReplicaSet can be scaled down further, followed by scaling up the new ReplicaSet, ensuring that the total number of pods available at all times during the update is at least 70% of desired pods. */
  readonly "maxUnavailable"?: io$k8s$apimachinery$pkg$util$intstr$IntOrString;
};

/** RollingUpdateStatefulSetStrategy is used to communicate parameter for RollingUpdateStatefulSetStrategyType. */
export type io$k8s$api$apps$v1$RollingUpdateStatefulSetStrategy = {
  /** Partition indicates the ordinal at which the StatefulSet should be partitioned. Default value is 0. */
  readonly "partition"?: number;
};

/** StatefulSet represents a set of pods with consistent identities. Identities are defined as:
 - Network: A single stable DNS and hostname.
 - Storage: As many VolumeClaims as requested.
The StatefulSet guarantees that a given network identity will always map to the same storage identity. */
export type io$k8s$api$apps$v1$StatefulSet = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "StatefulSet";
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ObjectMeta;
  /** Spec defines the desired identities of pods in this set. */
  readonly "spec"?: io$k8s$api$apps$v1$StatefulSetSpec;
  /** Status is the current status of Pods in this StatefulSet. This data may be out of date by some window of time. */
  readonly "status"?: io$k8s$api$apps$v1$StatefulSetStatus;
};

/** StatefulSetCondition describes the state of a statefulset at a certain point. */
export type io$k8s$api$apps$v1$StatefulSetCondition = {
  /** Last time the condition transitioned from one status to another. */
  readonly "lastTransitionTime"?: io$k8s$apimachinery$pkg$apis$meta$v1$Time;
  /** A human readable message indicating details about the transition. */
  readonly "message"?: string;
  /** The reason for the condition's last transition. */
  readonly "reason"?: string;
  /** Status of the condition, one of True, False, Unknown. */
  readonly "status": string;
  /** Type of statefulset condition. */
  readonly "type": string;
};

/** StatefulSetList is a collection of StatefulSets. */
export type io$k8s$api$apps$v1$StatefulSetList = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  readonly "items": readonly io$k8s$api$apps$v1$StatefulSet[];
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "StatefulSetList";
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ListMeta;
};

/** A StatefulSetSpec is the specification of a StatefulSet. */
export type io$k8s$api$apps$v1$StatefulSetSpec = {
  /** podManagementPolicy controls how pods are created during initial scale up, when replacing pods on nodes, or when scaling down. The default policy is `OrderedReady`, where pods are created in increasing order (pod-0, then pod-1, etc) and the controller will wait until each pod is ready before continuing. When scaling down, the pods are removed in the opposite order. The alternative policy is `Parallel` which will create pods in parallel to match the desired scale without waiting, and on scale down will delete all pods at once. */
  readonly "podManagementPolicy"?: string;
  /** replicas is the desired number of replicas of the given Template. These are replicas in the sense that they are instantiations of the same Template, but individual replicas also have a consistent identity. If unspecified, defaults to 1. */
  readonly "replicas"?: number;
  /** revisionHistoryLimit is the maximum number of revisions that will be maintained in the StatefulSet's revision history. The revision history consists of all revisions not represented by a currently applied StatefulSetSpec version. The default value is 10. */
  readonly "revisionHistoryLimit"?: number;
  /** selector is a label query over pods that should match the replica count. It must match the pod template's labels. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#label-selectors */
  readonly "selector": io$k8s$apimachinery$pkg$apis$meta$v1$LabelSelector;
  /** serviceName is the name of the service that governs this StatefulSet. This service must exist before the StatefulSet, and is responsible for the network identity of the set. Pods get DNS/hostnames that follow the pattern: pod-specific-string.serviceName.default.svc.cluster.local where "pod-specific-string" is managed by the StatefulSet controller. */
  readonly "serviceName": string;
  /** template is the object that describes the pod that will be created if insufficient replicas are detected. Each pod stamped out by the StatefulSet will fulfill this Template, but have a unique identity from the rest of the StatefulSet. */
  readonly "template": io$k8s$api$core$v1$PodTemplateSpec;
  /** updateStrategy indicates the StatefulSetUpdateStrategy that will be employed to update Pods in the StatefulSet when a revision is made to Template. */
  readonly "updateStrategy"?: io$k8s$api$apps$v1$StatefulSetUpdateStrategy;
  /** volumeClaimTemplates is a list of claims that pods are allowed to reference. The StatefulSet controller is responsible for mapping network identities to claims in a way that maintains the identity of a pod. Every claim in this list must have at least one matching (by name) volumeMount in one container in the template. A claim in this list takes precedence over any volumes in the template, with the same name. */
  readonly "volumeClaimTemplates"?:
    readonly io$k8s$api$core$v1$PersistentVolumeClaim[];
};

/** StatefulSetStatus represents the current state of a StatefulSet. */
export type io$k8s$api$apps$v1$StatefulSetStatus = {
  /** collisionCount is the count of hash collisions for the StatefulSet. The StatefulSet controller uses this field as a collision avoidance mechanism when it needs to create the name for the newest ControllerRevision. */
  readonly "collisionCount"?: number;
  /** Represents the latest available observations of a statefulset's current state. */
  readonly "conditions"?: readonly io$k8s$api$apps$v1$StatefulSetCondition[];
  /** currentReplicas is the number of Pods created by the StatefulSet controller from the StatefulSet version indicated by currentRevision. */
  readonly "currentReplicas"?: number;
  /** currentRevision, if not empty, indicates the version of the StatefulSet used to generate Pods in the sequence [0,currentReplicas). */
  readonly "currentRevision"?: string;
  /** observedGeneration is the most recent generation observed for this StatefulSet. It corresponds to the StatefulSet's generation, which is updated on mutation by the API Server. */
  readonly "observedGeneration"?: number;
  /** readyReplicas is the number of Pods created by the StatefulSet controller that have a Ready Condition. */
  readonly "readyReplicas"?: number;
  /** replicas is the number of Pods created by the StatefulSet controller. */
  readonly "replicas": number;
  /** updateRevision, if not empty, indicates the version of the StatefulSet used to generate Pods in the sequence [replicas-updatedReplicas,replicas) */
  readonly "updateRevision"?: string;
  /** updatedReplicas is the number of Pods created by the StatefulSet controller from the StatefulSet version indicated by updateRevision. */
  readonly "updatedReplicas"?: number;
};

/** StatefulSetUpdateStrategy indicates the strategy that the StatefulSet controller will use to perform updates. It includes any additional parameters necessary to perform the update for the indicated strategy. */
export type io$k8s$api$apps$v1$StatefulSetUpdateStrategy = {
  /** RollingUpdate is used to communicate parameters when Type is RollingUpdateStatefulSetStrategyType. */
  readonly "rollingUpdate"?:
    io$k8s$api$apps$v1$RollingUpdateStatefulSetStrategy;
  /** Type indicates the type of the StatefulSetUpdateStrategy. Default is RollingUpdate. */
  readonly "type"?: string;
};

/** DEPRECATED - This group version of ControllerRevision is deprecated by apps/v1beta2/ControllerRevision. See the release notes for more information. ControllerRevision implements an immutable snapshot of state data. Clients are responsible for serializing and deserializing the objects that contain their internal state. Once a ControllerRevision has been successfully created, it can not be updated. The API Server will fail validation of all requests that attempt to mutate the Data field. ControllerRevisions may, however, be deleted. Note that, due to its use by both the DaemonSet and StatefulSet controllers for update and rollback, this object is beta. However, it may be subject to name and representation changes in future releases, and clients should not depend on its stability. It is primarily for internal use by controllers. */
export type io$k8s$api$apps$v1beta1$ControllerRevision = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Data is the serialized representation of the state. */
  readonly "data"?: io$k8s$apimachinery$pkg$runtime$RawExtension;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "ControllerRevision";
  /** Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ObjectMeta;
  /** Revision indicates the revision of the state represented by Data. */
  readonly "revision": number;
};

/** ControllerRevisionList is a resource containing a list of ControllerRevision objects. */
export type io$k8s$api$apps$v1beta1$ControllerRevisionList = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Items is the list of ControllerRevisions */
  readonly "items": readonly io$k8s$api$apps$v1beta1$ControllerRevision[];
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "ControllerRevisionList";
  /** More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ListMeta;
};

/** DEPRECATED - This group version of Deployment is deprecated by apps/v1beta2/Deployment. See the release notes for more information. Deployment enables declarative updates for Pods and ReplicaSets. */
export type io$k8s$api$apps$v1beta1$Deployment = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "Deployment";
  /** Standard object metadata. */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ObjectMeta;
  /** Specification of the desired behavior of the Deployment. */
  readonly "spec"?: io$k8s$api$apps$v1beta1$DeploymentSpec;
  /** Most recently observed status of the Deployment. */
  readonly "status"?: io$k8s$api$apps$v1beta1$DeploymentStatus;
};

/** DeploymentCondition describes the state of a deployment at a certain point. */
export type io$k8s$api$apps$v1beta1$DeploymentCondition = {
  /** Last time the condition transitioned from one status to another. */
  readonly "lastTransitionTime"?: io$k8s$apimachinery$pkg$apis$meta$v1$Time;
  /** The last time this condition was updated. */
  readonly "lastUpdateTime"?: io$k8s$apimachinery$pkg$apis$meta$v1$Time;
  /** A human readable message indicating details about the transition. */
  readonly "message"?: string;
  /** The reason for the condition's last transition. */
  readonly "reason"?: string;
  /** Status of the condition, one of True, False, Unknown. */
  readonly "status": string;
  /** Type of deployment condition. */
  readonly "type": string;
};

/** DeploymentList is a list of Deployments. */
export type io$k8s$api$apps$v1beta1$DeploymentList = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Items is the list of Deployments. */
  readonly "items": readonly io$k8s$api$apps$v1beta1$Deployment[];
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "DeploymentList";
  /** Standard list metadata. */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ListMeta;
};

/** DEPRECATED. DeploymentRollback stores the information required to rollback a deployment. */
export type io$k8s$api$apps$v1beta1$DeploymentRollback = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "DeploymentRollback";
  /** Required: This must match the Name of a deployment. */
  readonly "name": string;
  /** The config of this deployment rollback. */
  readonly "rollbackTo": io$k8s$api$apps$v1beta1$RollbackConfig;
  /** The annotations to be updated to a deployment */
  readonly "updatedAnnotations"?: object;
};

/** DeploymentSpec is the specification of the desired behavior of the Deployment. */
export type io$k8s$api$apps$v1beta1$DeploymentSpec = {
  /** Minimum number of seconds for which a newly created pod should be ready without any of its container crashing, for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready) */
  readonly "minReadySeconds"?: number;
  /** Indicates that the deployment is paused. */
  readonly "paused"?: boolean;
  /** The maximum time in seconds for a deployment to make progress before it is considered to be failed. The deployment controller will continue to process failed deployments and a condition with a ProgressDeadlineExceeded reason will be surfaced in the deployment status. Note that progress will not be estimated during the time a deployment is paused. Defaults to 600s. */
  readonly "progressDeadlineSeconds"?: number;
  /** Number of desired pods. This is a pointer to distinguish between explicit zero and not specified. Defaults to 1. */
  readonly "replicas"?: number;
  /** The number of old ReplicaSets to retain to allow rollback. This is a pointer to distinguish between explicit zero and not specified. Defaults to 2. */
  readonly "revisionHistoryLimit"?: number;
  /** DEPRECATED. The config this deployment is rolling back to. Will be cleared after rollback is done. */
  readonly "rollbackTo"?: io$k8s$api$apps$v1beta1$RollbackConfig;
  /** Label selector for pods. Existing ReplicaSets whose pods are selected by this will be the ones affected by this deployment. */
  readonly "selector"?: io$k8s$apimachinery$pkg$apis$meta$v1$LabelSelector;
  /** The deployment strategy to use to replace existing pods with new ones. */
  readonly "strategy"?: io$k8s$api$apps$v1beta1$DeploymentStrategy;
  /** Template describes the pods that will be created. */
  readonly "template": io$k8s$api$core$v1$PodTemplateSpec;
};

/** DeploymentStatus is the most recently observed status of the Deployment. */
export type io$k8s$api$apps$v1beta1$DeploymentStatus = {
  /** Total number of available pods (ready for at least minReadySeconds) targeted by this deployment. */
  readonly "availableReplicas"?: number;
  /** Count of hash collisions for the Deployment. The Deployment controller uses this field as a collision avoidance mechanism when it needs to create the name for the newest ReplicaSet. */
  readonly "collisionCount"?: number;
  /** Represents the latest available observations of a deployment's current state. */
  readonly "conditions"?:
    readonly io$k8s$api$apps$v1beta1$DeploymentCondition[];
  /** The generation observed by the deployment controller. */
  readonly "observedGeneration"?: number;
  /** Total number of ready pods targeted by this deployment. */
  readonly "readyReplicas"?: number;
  /** Total number of non-terminated pods targeted by this deployment (their labels match the selector). */
  readonly "replicas"?: number;
  /** Total number of unavailable pods targeted by this deployment. This is the total number of pods that are still required for the deployment to have 100% available capacity. They may either be pods that are running but not yet available or pods that still have not been created. */
  readonly "unavailableReplicas"?: number;
  /** Total number of non-terminated pods targeted by this deployment that have the desired template spec. */
  readonly "updatedReplicas"?: number;
};

/** DeploymentStrategy describes how to replace existing pods with new ones. */
export type io$k8s$api$apps$v1beta1$DeploymentStrategy = {
  /** Rolling update config params. Present only if DeploymentStrategyType = RollingUpdate. */
  readonly "rollingUpdate"?: io$k8s$api$apps$v1beta1$RollingUpdateDeployment;
  /** Type of deployment. Can be "Recreate" or "RollingUpdate". Default is RollingUpdate. */
  readonly "type"?: string;
};

/** DEPRECATED. */
export type io$k8s$api$apps$v1beta1$RollbackConfig = {
  /** The revision to rollback to. If set to 0, rollback to the last revision. */
  readonly "revision"?: number;
};

/** Spec to control the desired behavior of rolling update. */
export type io$k8s$api$apps$v1beta1$RollingUpdateDeployment = {
  /** The maximum number of pods that can be scheduled above the desired number of pods. Value can be an absolute number (ex: 5) or a percentage of desired pods (ex: 10%). This can not be 0 if MaxUnavailable is 0. Absolute number is calculated from percentage by rounding up. Defaults to 25%. Example: when this is set to 30%, the new ReplicaSet can be scaled up immediately when the rolling update starts, such that the total number of old and new pods do not exceed 130% of desired pods. Once old pods have been killed, new ReplicaSet can be scaled up further, ensuring that total number of pods running at any time during the update is at most 130% of desired pods. */
  readonly "maxSurge"?: io$k8s$apimachinery$pkg$util$intstr$IntOrString;
  /** The maximum number of pods that can be unavailable during the update. Value can be an absolute number (ex: 5) or a percentage of desired pods (ex: 10%). Absolute number is calculated from percentage by rounding down. This can not be 0 if MaxSurge is 0. Defaults to 25%. Example: when this is set to 30%, the old ReplicaSet can be scaled down to 70% of desired pods immediately when the rolling update starts. Once new pods are ready, old ReplicaSet can be scaled down further, followed by scaling up the new ReplicaSet, ensuring that the total number of pods available at all times during the update is at least 70% of desired pods. */
  readonly "maxUnavailable"?: io$k8s$apimachinery$pkg$util$intstr$IntOrString;
};

/** RollingUpdateStatefulSetStrategy is used to communicate parameter for RollingUpdateStatefulSetStrategyType. */
export type io$k8s$api$apps$v1beta1$RollingUpdateStatefulSetStrategy = {
  /** Partition indicates the ordinal at which the StatefulSet should be partitioned. */
  readonly "partition"?: number;
};

/** Scale represents a scaling request for a resource. */
export type io$k8s$api$apps$v1beta1$Scale = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "Scale";
  /** Standard object metadata; More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata. */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ObjectMeta;
  /** defines the behavior of the scale. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status. */
  readonly "spec"?: io$k8s$api$apps$v1beta1$ScaleSpec;
  /** current status of the scale. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status. Read-only. */
  readonly "status"?: io$k8s$api$apps$v1beta1$ScaleStatus;
};

/** ScaleSpec describes the attributes of a scale subresource */
export type io$k8s$api$apps$v1beta1$ScaleSpec = {
  /** desired number of instances for the scaled object. */
  readonly "replicas"?: number;
};

/** ScaleStatus represents the current status of a scale subresource. */
export type io$k8s$api$apps$v1beta1$ScaleStatus = {
  /** actual number of observed instances of the scaled object. */
  readonly "replicas": number;
  /** label query over pods that should match the replicas count. More info: http://kubernetes.io/docs/user-guide/labels#label-selectors */
  readonly "selector"?: object;
  /** label selector for pods that should match the replicas count. This is a serializated version of both map-based and more expressive set-based selectors. This is done to avoid introspection in the clients. The string will be in the same format as the query-param syntax. If the target type only supports map-based selectors, both this field and map-based selector field are populated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#label-selectors */
  readonly "targetSelector"?: string;
};

/** DEPRECATED - This group version of StatefulSet is deprecated by apps/v1beta2/StatefulSet. See the release notes for more information. StatefulSet represents a set of pods with consistent identities. Identities are defined as:
 - Network: A single stable DNS and hostname.
 - Storage: As many VolumeClaims as requested.
The StatefulSet guarantees that a given network identity will always map to the same storage identity. */
export type io$k8s$api$apps$v1beta1$StatefulSet = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "StatefulSet";
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ObjectMeta;
  /** Spec defines the desired identities of pods in this set. */
  readonly "spec"?: io$k8s$api$apps$v1beta1$StatefulSetSpec;
  /** Status is the current status of Pods in this StatefulSet. This data may be out of date by some window of time. */
  readonly "status"?: io$k8s$api$apps$v1beta1$StatefulSetStatus;
};

/** StatefulSetCondition describes the state of a statefulset at a certain point. */
export type io$k8s$api$apps$v1beta1$StatefulSetCondition = {
  /** Last time the condition transitioned from one status to another. */
  readonly "lastTransitionTime"?: io$k8s$apimachinery$pkg$apis$meta$v1$Time;
  /** A human readable message indicating details about the transition. */
  readonly "message"?: string;
  /** The reason for the condition's last transition. */
  readonly "reason"?: string;
  /** Status of the condition, one of True, False, Unknown. */
  readonly "status": string;
  /** Type of statefulset condition. */
  readonly "type": string;
};

/** StatefulSetList is a collection of StatefulSets. */
export type io$k8s$api$apps$v1beta1$StatefulSetList = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  readonly "items": readonly io$k8s$api$apps$v1beta1$StatefulSet[];
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "StatefulSetList";
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ListMeta;
};

/** A StatefulSetSpec is the specification of a StatefulSet. */
export type io$k8s$api$apps$v1beta1$StatefulSetSpec = {
  /** podManagementPolicy controls how pods are created during initial scale up, when replacing pods on nodes, or when scaling down. The default policy is `OrderedReady`, where pods are created in increasing order (pod-0, then pod-1, etc) and the controller will wait until each pod is ready before continuing. When scaling down, the pods are removed in the opposite order. The alternative policy is `Parallel` which will create pods in parallel to match the desired scale without waiting, and on scale down will delete all pods at once. */
  readonly "podManagementPolicy"?: string;
  /** replicas is the desired number of replicas of the given Template. These are replicas in the sense that they are instantiations of the same Template, but individual replicas also have a consistent identity. If unspecified, defaults to 1. */
  readonly "replicas"?: number;
  /** revisionHistoryLimit is the maximum number of revisions that will be maintained in the StatefulSet's revision history. The revision history consists of all revisions not represented by a currently applied StatefulSetSpec version. The default value is 10. */
  readonly "revisionHistoryLimit"?: number;
  /** selector is a label query over pods that should match the replica count. If empty, defaulted to labels on the pod template. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#label-selectors */
  readonly "selector"?: io$k8s$apimachinery$pkg$apis$meta$v1$LabelSelector;
  /** serviceName is the name of the service that governs this StatefulSet. This service must exist before the StatefulSet, and is responsible for the network identity of the set. Pods get DNS/hostnames that follow the pattern: pod-specific-string.serviceName.default.svc.cluster.local where "pod-specific-string" is managed by the StatefulSet controller. */
  readonly "serviceName": string;
  /** template is the object that describes the pod that will be created if insufficient replicas are detected. Each pod stamped out by the StatefulSet will fulfill this Template, but have a unique identity from the rest of the StatefulSet. */
  readonly "template": io$k8s$api$core$v1$PodTemplateSpec;
  /** updateStrategy indicates the StatefulSetUpdateStrategy that will be employed to update Pods in the StatefulSet when a revision is made to Template. */
  readonly "updateStrategy"?: io$k8s$api$apps$v1beta1$StatefulSetUpdateStrategy;
  /** volumeClaimTemplates is a list of claims that pods are allowed to reference. The StatefulSet controller is responsible for mapping network identities to claims in a way that maintains the identity of a pod. Every claim in this list must have at least one matching (by name) volumeMount in one container in the template. A claim in this list takes precedence over any volumes in the template, with the same name. */
  readonly "volumeClaimTemplates"?:
    readonly io$k8s$api$core$v1$PersistentVolumeClaim[];
};

/** StatefulSetStatus represents the current state of a StatefulSet. */
export type io$k8s$api$apps$v1beta1$StatefulSetStatus = {
  /** collisionCount is the count of hash collisions for the StatefulSet. The StatefulSet controller uses this field as a collision avoidance mechanism when it needs to create the name for the newest ControllerRevision. */
  readonly "collisionCount"?: number;
  /** Represents the latest available observations of a statefulset's current state. */
  readonly "conditions"?:
    readonly io$k8s$api$apps$v1beta1$StatefulSetCondition[];
  /** currentReplicas is the number of Pods created by the StatefulSet controller from the StatefulSet version indicated by currentRevision. */
  readonly "currentReplicas"?: number;
  /** currentRevision, if not empty, indicates the version of the StatefulSet used to generate Pods in the sequence [0,currentReplicas). */
  readonly "currentRevision"?: string;
  /** observedGeneration is the most recent generation observed for this StatefulSet. It corresponds to the StatefulSet's generation, which is updated on mutation by the API Server. */
  readonly "observedGeneration"?: number;
  /** readyReplicas is the number of Pods created by the StatefulSet controller that have a Ready Condition. */
  readonly "readyReplicas"?: number;
  /** replicas is the number of Pods created by the StatefulSet controller. */
  readonly "replicas": number;
  /** updateRevision, if not empty, indicates the version of the StatefulSet used to generate Pods in the sequence [replicas-updatedReplicas,replicas) */
  readonly "updateRevision"?: string;
  /** updatedReplicas is the number of Pods created by the StatefulSet controller from the StatefulSet version indicated by updateRevision. */
  readonly "updatedReplicas"?: number;
};

/** StatefulSetUpdateStrategy indicates the strategy that the StatefulSet controller will use to perform updates. It includes any additional parameters necessary to perform the update for the indicated strategy. */
export type io$k8s$api$apps$v1beta1$StatefulSetUpdateStrategy = {
  /** RollingUpdate is used to communicate parameters when Type is RollingUpdateStatefulSetStrategyType. */
  readonly "rollingUpdate"?:
    io$k8s$api$apps$v1beta1$RollingUpdateStatefulSetStrategy;
  /** Type indicates the type of the StatefulSetUpdateStrategy. */
  readonly "type"?: string;
};

/** DEPRECATED - This group version of ControllerRevision is deprecated by apps/v1/ControllerRevision. See the release notes for more information. ControllerRevision implements an immutable snapshot of state data. Clients are responsible for serializing and deserializing the objects that contain their internal state. Once a ControllerRevision has been successfully created, it can not be updated. The API Server will fail validation of all requests that attempt to mutate the Data field. ControllerRevisions may, however, be deleted. Note that, due to its use by both the DaemonSet and StatefulSet controllers for update and rollback, this object is beta. However, it may be subject to name and representation changes in future releases, and clients should not depend on its stability. It is primarily for internal use by controllers. */
export type io$k8s$api$apps$v1beta2$ControllerRevision = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Data is the serialized representation of the state. */
  readonly "data"?: io$k8s$apimachinery$pkg$runtime$RawExtension;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "ControllerRevision";
  /** Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ObjectMeta;
  /** Revision indicates the revision of the state represented by Data. */
  readonly "revision": number;
};

/** ControllerRevisionList is a resource containing a list of ControllerRevision objects. */
export type io$k8s$api$apps$v1beta2$ControllerRevisionList = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Items is the list of ControllerRevisions */
  readonly "items": readonly io$k8s$api$apps$v1beta2$ControllerRevision[];
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "ControllerRevisionList";
  /** More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ListMeta;
};

/** DEPRECATED - This group version of DaemonSet is deprecated by apps/v1/DaemonSet. See the release notes for more information. DaemonSet represents the configuration of a daemon set. */
export type io$k8s$api$apps$v1beta2$DaemonSet = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "DaemonSet";
  /** Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ObjectMeta;
  /** The desired behavior of this daemon set. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status */
  readonly "spec"?: io$k8s$api$apps$v1beta2$DaemonSetSpec;
  /** The current status of this daemon set. This data may be out of date by some window of time. Populated by the system. Read-only. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status */
  readonly "status"?: io$k8s$api$apps$v1beta2$DaemonSetStatus;
};

/** DaemonSetCondition describes the state of a DaemonSet at a certain point. */
export type io$k8s$api$apps$v1beta2$DaemonSetCondition = {
  /** Last time the condition transitioned from one status to another. */
  readonly "lastTransitionTime"?: io$k8s$apimachinery$pkg$apis$meta$v1$Time;
  /** A human readable message indicating details about the transition. */
  readonly "message"?: string;
  /** The reason for the condition's last transition. */
  readonly "reason"?: string;
  /** Status of the condition, one of True, False, Unknown. */
  readonly "status": string;
  /** Type of DaemonSet condition. */
  readonly "type": string;
};

/** DaemonSetList is a collection of daemon sets. */
export type io$k8s$api$apps$v1beta2$DaemonSetList = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** A list of daemon sets. */
  readonly "items": readonly io$k8s$api$apps$v1beta2$DaemonSet[];
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "DaemonSetList";
  /** Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ListMeta;
};

/** DaemonSetSpec is the specification of a daemon set. */
export type io$k8s$api$apps$v1beta2$DaemonSetSpec = {
  /** The minimum number of seconds for which a newly created DaemonSet pod should be ready without any of its container crashing, for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready). */
  readonly "minReadySeconds"?: number;
  /** The number of old history to retain to allow rollback. This is a pointer to distinguish between explicit zero and not specified. Defaults to 10. */
  readonly "revisionHistoryLimit"?: number;
  /** A label query over pods that are managed by the daemon set. Must match in order to be controlled. It must match the pod template's labels. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#label-selectors */
  readonly "selector": io$k8s$apimachinery$pkg$apis$meta$v1$LabelSelector;
  /** An object that describes the pod that will be created. The DaemonSet will create exactly one copy of this pod on every node that matches the template's node selector (or on every node if no node selector is specified). More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller#pod-template */
  readonly "template": io$k8s$api$core$v1$PodTemplateSpec;
  /** An update strategy to replace existing DaemonSet pods with new pods. */
  readonly "updateStrategy"?: io$k8s$api$apps$v1beta2$DaemonSetUpdateStrategy;
};

/** DaemonSetStatus represents the current status of a daemon set. */
export type io$k8s$api$apps$v1beta2$DaemonSetStatus = {
  /** Count of hash collisions for the DaemonSet. The DaemonSet controller uses this field as a collision avoidance mechanism when it needs to create the name for the newest ControllerRevision. */
  readonly "collisionCount"?: number;
  /** Represents the latest available observations of a DaemonSet's current state. */
  readonly "conditions"?: readonly io$k8s$api$apps$v1beta2$DaemonSetCondition[];
  /** The number of nodes that are running at least 1 daemon pod and are supposed to run the daemon pod. More info: https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/ */
  readonly "currentNumberScheduled": number;
  /** The total number of nodes that should be running the daemon pod (including nodes correctly running the daemon pod). More info: https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/ */
  readonly "desiredNumberScheduled": number;
  /** The number of nodes that should be running the daemon pod and have one or more of the daemon pod running and available (ready for at least spec.minReadySeconds) */
  readonly "numberAvailable"?: number;
  /** The number of nodes that are running the daemon pod, but are not supposed to run the daemon pod. More info: https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/ */
  readonly "numberMisscheduled": number;
  /** The number of nodes that should be running the daemon pod and have one or more of the daemon pod running and ready. */
  readonly "numberReady": number;
  /** The number of nodes that should be running the daemon pod and have none of the daemon pod running and available (ready for at least spec.minReadySeconds) */
  readonly "numberUnavailable"?: number;
  /** The most recent generation observed by the daemon set controller. */
  readonly "observedGeneration"?: number;
  /** The total number of nodes that are running updated daemon pod */
  readonly "updatedNumberScheduled"?: number;
};

/** DaemonSetUpdateStrategy is a struct used to control the update strategy for a DaemonSet. */
export type io$k8s$api$apps$v1beta2$DaemonSetUpdateStrategy = {
  /** Rolling update config params. Present only if type = "RollingUpdate". */
  readonly "rollingUpdate"?: io$k8s$api$apps$v1beta2$RollingUpdateDaemonSet;
  /** Type of daemon set update. Can be "RollingUpdate" or "OnDelete". Default is RollingUpdate. */
  readonly "type"?: string;
};

/** DEPRECATED - This group version of Deployment is deprecated by apps/v1/Deployment. See the release notes for more information. Deployment enables declarative updates for Pods and ReplicaSets. */
export type io$k8s$api$apps$v1beta2$Deployment = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "Deployment";
  /** Standard object metadata. */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ObjectMeta;
  /** Specification of the desired behavior of the Deployment. */
  readonly "spec"?: io$k8s$api$apps$v1beta2$DeploymentSpec;
  /** Most recently observed status of the Deployment. */
  readonly "status"?: io$k8s$api$apps$v1beta2$DeploymentStatus;
};

/** DeploymentCondition describes the state of a deployment at a certain point. */
export type io$k8s$api$apps$v1beta2$DeploymentCondition = {
  /** Last time the condition transitioned from one status to another. */
  readonly "lastTransitionTime"?: io$k8s$apimachinery$pkg$apis$meta$v1$Time;
  /** The last time this condition was updated. */
  readonly "lastUpdateTime"?: io$k8s$apimachinery$pkg$apis$meta$v1$Time;
  /** A human readable message indicating details about the transition. */
  readonly "message"?: string;
  /** The reason for the condition's last transition. */
  readonly "reason"?: string;
  /** Status of the condition, one of True, False, Unknown. */
  readonly "status": string;
  /** Type of deployment condition. */
  readonly "type": string;
};

/** DeploymentList is a list of Deployments. */
export type io$k8s$api$apps$v1beta2$DeploymentList = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Items is the list of Deployments. */
  readonly "items": readonly io$k8s$api$apps$v1beta2$Deployment[];
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "DeploymentList";
  /** Standard list metadata. */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ListMeta;
};

/** DeploymentSpec is the specification of the desired behavior of the Deployment. */
export type io$k8s$api$apps$v1beta2$DeploymentSpec = {
  /** Minimum number of seconds for which a newly created pod should be ready without any of its container crashing, for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready) */
  readonly "minReadySeconds"?: number;
  /** Indicates that the deployment is paused. */
  readonly "paused"?: boolean;
  /** The maximum time in seconds for a deployment to make progress before it is considered to be failed. The deployment controller will continue to process failed deployments and a condition with a ProgressDeadlineExceeded reason will be surfaced in the deployment status. Note that progress will not be estimated during the time a deployment is paused. Defaults to 600s. */
  readonly "progressDeadlineSeconds"?: number;
  /** Number of desired pods. This is a pointer to distinguish between explicit zero and not specified. Defaults to 1. */
  readonly "replicas"?: number;
  /** The number of old ReplicaSets to retain to allow rollback. This is a pointer to distinguish between explicit zero and not specified. Defaults to 10. */
  readonly "revisionHistoryLimit"?: number;
  /** Label selector for pods. Existing ReplicaSets whose pods are selected by this will be the ones affected by this deployment. It must match the pod template's labels. */
  readonly "selector": io$k8s$apimachinery$pkg$apis$meta$v1$LabelSelector;
  /** The deployment strategy to use to replace existing pods with new ones. */
  readonly "strategy"?: io$k8s$api$apps$v1beta2$DeploymentStrategy;
  /** Template describes the pods that will be created. */
  readonly "template": io$k8s$api$core$v1$PodTemplateSpec;
};

/** DeploymentStatus is the most recently observed status of the Deployment. */
export type io$k8s$api$apps$v1beta2$DeploymentStatus = {
  /** Total number of available pods (ready for at least minReadySeconds) targeted by this deployment. */
  readonly "availableReplicas"?: number;
  /** Count of hash collisions for the Deployment. The Deployment controller uses this field as a collision avoidance mechanism when it needs to create the name for the newest ReplicaSet. */
  readonly "collisionCount"?: number;
  /** Represents the latest available observations of a deployment's current state. */
  readonly "conditions"?:
    readonly io$k8s$api$apps$v1beta2$DeploymentCondition[];
  /** The generation observed by the deployment controller. */
  readonly "observedGeneration"?: number;
  /** Total number of ready pods targeted by this deployment. */
  readonly "readyReplicas"?: number;
  /** Total number of non-terminated pods targeted by this deployment (their labels match the selector). */
  readonly "replicas"?: number;
  /** Total number of unavailable pods targeted by this deployment. This is the total number of pods that are still required for the deployment to have 100% available capacity. They may either be pods that are running but not yet available or pods that still have not been created. */
  readonly "unavailableReplicas"?: number;
  /** Total number of non-terminated pods targeted by this deployment that have the desired template spec. */
  readonly "updatedReplicas"?: number;
};

/** DeploymentStrategy describes how to replace existing pods with new ones. */
export type io$k8s$api$apps$v1beta2$DeploymentStrategy = {
  /** Rolling update config params. Present only if DeploymentStrategyType = RollingUpdate. */
  readonly "rollingUpdate"?: io$k8s$api$apps$v1beta2$RollingUpdateDeployment;
  /** Type of deployment. Can be "Recreate" or "RollingUpdate". Default is RollingUpdate. */
  readonly "type"?: string;
};

/** DEPRECATED - This group version of ReplicaSet is deprecated by apps/v1/ReplicaSet. See the release notes for more information. ReplicaSet ensures that a specified number of pod replicas are running at any given time. */
export type io$k8s$api$apps$v1beta2$ReplicaSet = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "ReplicaSet";
  /** If the Labels of a ReplicaSet are empty, they are defaulted to be the same as the Pod(s) that the ReplicaSet manages. Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ObjectMeta;
  /** Spec defines the specification of the desired behavior of the ReplicaSet. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status */
  readonly "spec"?: io$k8s$api$apps$v1beta2$ReplicaSetSpec;
  /** Status is the most recently observed status of the ReplicaSet. This data may be out of date by some window of time. Populated by the system. Read-only. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status */
  readonly "status"?: io$k8s$api$apps$v1beta2$ReplicaSetStatus;
};

/** ReplicaSetCondition describes the state of a replica set at a certain point. */
export type io$k8s$api$apps$v1beta2$ReplicaSetCondition = {
  /** The last time the condition transitioned from one status to another. */
  readonly "lastTransitionTime"?: io$k8s$apimachinery$pkg$apis$meta$v1$Time;
  /** A human readable message indicating details about the transition. */
  readonly "message"?: string;
  /** The reason for the condition's last transition. */
  readonly "reason"?: string;
  /** Status of the condition, one of True, False, Unknown. */
  readonly "status": string;
  /** Type of replica set condition. */
  readonly "type": string;
};

/** ReplicaSetList is a collection of ReplicaSets. */
export type io$k8s$api$apps$v1beta2$ReplicaSetList = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** List of ReplicaSets. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller */
  readonly "items": readonly io$k8s$api$apps$v1beta2$ReplicaSet[];
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "ReplicaSetList";
  /** Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ListMeta;
};

/** ReplicaSetSpec is the specification of a ReplicaSet. */
export type io$k8s$api$apps$v1beta2$ReplicaSetSpec = {
  /** Minimum number of seconds for which a newly created pod should be ready without any of its container crashing, for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready) */
  readonly "minReadySeconds"?: number;
  /** Replicas is the number of desired replicas. This is a pointer to distinguish between explicit zero and unspecified. Defaults to 1. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller/#what-is-a-replicationcontroller */
  readonly "replicas"?: number;
  /** Selector is a label query over pods that should match the replica count. Label keys and values that must match in order to be controlled by this replica set. It must match the pod template's labels. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#label-selectors */
  readonly "selector": io$k8s$apimachinery$pkg$apis$meta$v1$LabelSelector;
  /** Template is the object that describes the pod that will be created if insufficient replicas are detected. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller#pod-template */
  readonly "template"?: io$k8s$api$core$v1$PodTemplateSpec;
};

/** ReplicaSetStatus represents the current status of a ReplicaSet. */
export type io$k8s$api$apps$v1beta2$ReplicaSetStatus = {
  /** The number of available replicas (ready for at least minReadySeconds) for this replica set. */
  readonly "availableReplicas"?: number;
  /** Represents the latest available observations of a replica set's current state. */
  readonly "conditions"?:
    readonly io$k8s$api$apps$v1beta2$ReplicaSetCondition[];
  /** The number of pods that have labels matching the labels of the pod template of the replicaset. */
  readonly "fullyLabeledReplicas"?: number;
  /** ObservedGeneration reflects the generation of the most recently observed ReplicaSet. */
  readonly "observedGeneration"?: number;
  /** The number of ready replicas for this replica set. */
  readonly "readyReplicas"?: number;
  /** Replicas is the most recently oberved number of replicas. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller/#what-is-a-replicationcontroller */
  readonly "replicas": number;
};

/** Spec to control the desired behavior of daemon set rolling update. */
export type io$k8s$api$apps$v1beta2$RollingUpdateDaemonSet = {
  /** The maximum number of DaemonSet pods that can be unavailable during the update. Value can be an absolute number (ex: 5) or a percentage of total number of DaemonSet pods at the start of the update (ex: 10%). Absolute number is calculated from percentage by rounding up. This cannot be 0. Default value is 1. Example: when this is set to 30%, at most 30% of the total number of nodes that should be running the daemon pod (i.e. status.desiredNumberScheduled) can have their pods stopped for an update at any given time. The update starts by stopping at most 30% of those DaemonSet pods and then brings up new DaemonSet pods in their place. Once the new pods are available, it then proceeds onto other DaemonSet pods, thus ensuring that at least 70% of original number of DaemonSet pods are available at all times during the update. */
  readonly "maxUnavailable"?: io$k8s$apimachinery$pkg$util$intstr$IntOrString;
};

/** Spec to control the desired behavior of rolling update. */
export type io$k8s$api$apps$v1beta2$RollingUpdateDeployment = {
  /** The maximum number of pods that can be scheduled above the desired number of pods. Value can be an absolute number (ex: 5) or a percentage of desired pods (ex: 10%). This can not be 0 if MaxUnavailable is 0. Absolute number is calculated from percentage by rounding up. Defaults to 25%. Example: when this is set to 30%, the new ReplicaSet can be scaled up immediately when the rolling update starts, such that the total number of old and new pods do not exceed 130% of desired pods. Once old pods have been killed, new ReplicaSet can be scaled up further, ensuring that total number of pods running at any time during the update is at most 130% of desired pods. */
  readonly "maxSurge"?: io$k8s$apimachinery$pkg$util$intstr$IntOrString;
  /** The maximum number of pods that can be unavailable during the update. Value can be an absolute number (ex: 5) or a percentage of desired pods (ex: 10%). Absolute number is calculated from percentage by rounding down. This can not be 0 if MaxSurge is 0. Defaults to 25%. Example: when this is set to 30%, the old ReplicaSet can be scaled down to 70% of desired pods immediately when the rolling update starts. Once new pods are ready, old ReplicaSet can be scaled down further, followed by scaling up the new ReplicaSet, ensuring that the total number of pods available at all times during the update is at least 70% of desired pods. */
  readonly "maxUnavailable"?: io$k8s$apimachinery$pkg$util$intstr$IntOrString;
};

/** RollingUpdateStatefulSetStrategy is used to communicate parameter for RollingUpdateStatefulSetStrategyType. */
export type io$k8s$api$apps$v1beta2$RollingUpdateStatefulSetStrategy = {
  /** Partition indicates the ordinal at which the StatefulSet should be partitioned. Default value is 0. */
  readonly "partition"?: number;
};

/** Scale represents a scaling request for a resource. */
export type io$k8s$api$apps$v1beta2$Scale = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "Scale";
  /** Standard object metadata; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata. */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ObjectMeta;
  /** defines the behavior of the scale. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status. */
  readonly "spec"?: io$k8s$api$apps$v1beta2$ScaleSpec;
  /** current status of the scale. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status. Read-only. */
  readonly "status"?: io$k8s$api$apps$v1beta2$ScaleStatus;
};

/** ScaleSpec describes the attributes of a scale subresource */
export type io$k8s$api$apps$v1beta2$ScaleSpec = {
  /** desired number of instances for the scaled object. */
  readonly "replicas"?: number;
};

/** ScaleStatus represents the current status of a scale subresource. */
export type io$k8s$api$apps$v1beta2$ScaleStatus = {
  /** actual number of observed instances of the scaled object. */
  readonly "replicas": number;
  /** label query over pods that should match the replicas count. More info: http://kubernetes.io/docs/user-guide/labels#label-selectors */
  readonly "selector"?: object;
  /** label selector for pods that should match the replicas count. This is a serializated version of both map-based and more expressive set-based selectors. This is done to avoid introspection in the clients. The string will be in the same format as the query-param syntax. If the target type only supports map-based selectors, both this field and map-based selector field are populated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#label-selectors */
  readonly "targetSelector"?: string;
};

/** DEPRECATED - This group version of StatefulSet is deprecated by apps/v1/StatefulSet. See the release notes for more information. StatefulSet represents a set of pods with consistent identities. Identities are defined as:
 - Network: A single stable DNS and hostname.
 - Storage: As many VolumeClaims as requested.
The StatefulSet guarantees that a given network identity will always map to the same storage identity. */
export type io$k8s$api$apps$v1beta2$StatefulSet = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "StatefulSet";
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ObjectMeta;
  /** Spec defines the desired identities of pods in this set. */
  readonly "spec"?: io$k8s$api$apps$v1beta2$StatefulSetSpec;
  /** Status is the current status of Pods in this StatefulSet. This data may be out of date by some window of time. */
  readonly "status"?: io$k8s$api$apps$v1beta2$StatefulSetStatus;
};

/** StatefulSetCondition describes the state of a statefulset at a certain point. */
export type io$k8s$api$apps$v1beta2$StatefulSetCondition = {
  /** Last time the condition transitioned from one status to another. */
  readonly "lastTransitionTime"?: io$k8s$apimachinery$pkg$apis$meta$v1$Time;
  /** A human readable message indicating details about the transition. */
  readonly "message"?: string;
  /** The reason for the condition's last transition. */
  readonly "reason"?: string;
  /** Status of the condition, one of True, False, Unknown. */
  readonly "status": string;
  /** Type of statefulset condition. */
  readonly "type": string;
};

/** StatefulSetList is a collection of StatefulSets. */
export type io$k8s$api$apps$v1beta2$StatefulSetList = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  readonly "items": readonly io$k8s$api$apps$v1beta2$StatefulSet[];
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "StatefulSetList";
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ListMeta;
};

/** A StatefulSetSpec is the specification of a StatefulSet. */
export type io$k8s$api$apps$v1beta2$StatefulSetSpec = {
  /** podManagementPolicy controls how pods are created during initial scale up, when replacing pods on nodes, or when scaling down. The default policy is `OrderedReady`, where pods are created in increasing order (pod-0, then pod-1, etc) and the controller will wait until each pod is ready before continuing. When scaling down, the pods are removed in the opposite order. The alternative policy is `Parallel` which will create pods in parallel to match the desired scale without waiting, and on scale down will delete all pods at once. */
  readonly "podManagementPolicy"?: string;
  /** replicas is the desired number of replicas of the given Template. These are replicas in the sense that they are instantiations of the same Template, but individual replicas also have a consistent identity. If unspecified, defaults to 1. */
  readonly "replicas"?: number;
  /** revisionHistoryLimit is the maximum number of revisions that will be maintained in the StatefulSet's revision history. The revision history consists of all revisions not represented by a currently applied StatefulSetSpec version. The default value is 10. */
  readonly "revisionHistoryLimit"?: number;
  /** selector is a label query over pods that should match the replica count. It must match the pod template's labels. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#label-selectors */
  readonly "selector": io$k8s$apimachinery$pkg$apis$meta$v1$LabelSelector;
  /** serviceName is the name of the service that governs this StatefulSet. This service must exist before the StatefulSet, and is responsible for the network identity of the set. Pods get DNS/hostnames that follow the pattern: pod-specific-string.serviceName.default.svc.cluster.local where "pod-specific-string" is managed by the StatefulSet controller. */
  readonly "serviceName": string;
  /** template is the object that describes the pod that will be created if insufficient replicas are detected. Each pod stamped out by the StatefulSet will fulfill this Template, but have a unique identity from the rest of the StatefulSet. */
  readonly "template": io$k8s$api$core$v1$PodTemplateSpec;
  /** updateStrategy indicates the StatefulSetUpdateStrategy that will be employed to update Pods in the StatefulSet when a revision is made to Template. */
  readonly "updateStrategy"?: io$k8s$api$apps$v1beta2$StatefulSetUpdateStrategy;
  /** volumeClaimTemplates is a list of claims that pods are allowed to reference. The StatefulSet controller is responsible for mapping network identities to claims in a way that maintains the identity of a pod. Every claim in this list must have at least one matching (by name) volumeMount in one container in the template. A claim in this list takes precedence over any volumes in the template, with the same name. */
  readonly "volumeClaimTemplates"?:
    readonly io$k8s$api$core$v1$PersistentVolumeClaim[];
};

/** StatefulSetStatus represents the current state of a StatefulSet. */
export type io$k8s$api$apps$v1beta2$StatefulSetStatus = {
  /** collisionCount is the count of hash collisions for the StatefulSet. The StatefulSet controller uses this field as a collision avoidance mechanism when it needs to create the name for the newest ControllerRevision. */
  readonly "collisionCount"?: number;
  /** Represents the latest available observations of a statefulset's current state. */
  readonly "conditions"?:
    readonly io$k8s$api$apps$v1beta2$StatefulSetCondition[];
  /** currentReplicas is the number of Pods created by the StatefulSet controller from the StatefulSet version indicated by currentRevision. */
  readonly "currentReplicas"?: number;
  /** currentRevision, if not empty, indicates the version of the StatefulSet used to generate Pods in the sequence [0,currentReplicas). */
  readonly "currentRevision"?: string;
  /** observedGeneration is the most recent generation observed for this StatefulSet. It corresponds to the StatefulSet's generation, which is updated on mutation by the API Server. */
  readonly "observedGeneration"?: number;
  /** readyReplicas is the number of Pods created by the StatefulSet controller that have a Ready Condition. */
  readonly "readyReplicas"?: number;
  /** replicas is the number of Pods created by the StatefulSet controller. */
  readonly "replicas": number;
  /** updateRevision, if not empty, indicates the version of the StatefulSet used to generate Pods in the sequence [replicas-updatedReplicas,replicas) */
  readonly "updateRevision"?: string;
  /** updatedReplicas is the number of Pods created by the StatefulSet controller from the StatefulSet version indicated by updateRevision. */
  readonly "updatedReplicas"?: number;
};

/** StatefulSetUpdateStrategy indicates the strategy that the StatefulSet controller will use to perform updates. It includes any additional parameters necessary to perform the update for the indicated strategy. */
export type io$k8s$api$apps$v1beta2$StatefulSetUpdateStrategy = {
  /** RollingUpdate is used to communicate parameters when Type is RollingUpdateStatefulSetStrategyType. */
  readonly "rollingUpdate"?:
    io$k8s$api$apps$v1beta2$RollingUpdateStatefulSetStrategy;
  /** Type indicates the type of the StatefulSetUpdateStrategy. Default is RollingUpdate. */
  readonly "type"?: string;
};

/** TokenReview attempts to authenticate a token to a known user. Note: TokenReview requests may be cached by the webhook token authenticator plugin in the kube-apiserver. */
export type io$k8s$api$authentication$v1$TokenReview = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "TokenReview";
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ObjectMeta;
  /** Spec holds information about the request being evaluated */
  readonly "spec": io$k8s$api$authentication$v1$TokenReviewSpec;
  /** Status is filled in by the server and indicates whether the request can be authenticated. */
  readonly "status"?: io$k8s$api$authentication$v1$TokenReviewStatus;
};

/** TokenReviewSpec is a description of the token authentication request. */
export type io$k8s$api$authentication$v1$TokenReviewSpec = {
  /** Audiences is a list of the identifiers that the resource server presented with the token identifies as. Audience-aware token authenticators will verify that the token was intended for at least one of the audiences in this list. If no audiences are provided, the audience will default to the audience of the Kubernetes apiserver. */
  readonly "audiences"?: readonly string[];
  /** Token is the opaque bearer token. */
  readonly "token"?: string;
};

/** TokenReviewStatus is the result of the token authentication request. */
export type io$k8s$api$authentication$v1$TokenReviewStatus = {
  /** Audiences are audience identifiers chosen by the authenticator that are compatible with both the TokenReview and token. An identifier is any identifier in the intersection of the TokenReviewSpec audiences and the token's audiences. A client of the TokenReview API that sets the spec.audiences field should validate that a compatible audience identifier is returned in the status.audiences field to ensure that the TokenReview server is audience aware. If a TokenReview returns an empty status.audience field where status.authenticated is "true", the token is valid against the audience of the Kubernetes API server. */
  readonly "audiences"?: readonly string[];
  /** Authenticated indicates that the token was associated with a known user. */
  readonly "authenticated"?: boolean;
  /** Error indicates that the token couldn't be checked */
  readonly "error"?: string;
  /** User is the UserInfo associated with the provided token. */
  readonly "user"?: io$k8s$api$authentication$v1$UserInfo;
};

/** UserInfo holds the information about the user needed to implement the user.Info interface. */
export type io$k8s$api$authentication$v1$UserInfo = {
  /** Any additional information provided by the authenticator. */
  readonly "extra"?: object;
  /** The names of groups this user is a part of. */
  readonly "groups"?: readonly string[];
  /** A unique value that identifies this user across time. If this user is deleted and another user by the same name is added, they will have different UIDs. */
  readonly "uid"?: string;
  /** The name that uniquely identifies this user among all active users. */
  readonly "username"?: string;
};

/** TokenReview attempts to authenticate a token to a known user. Note: TokenReview requests may be cached by the webhook token authenticator plugin in the kube-apiserver. */
export type io$k8s$api$authentication$v1beta1$TokenReview = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "TokenReview";
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ObjectMeta;
  /** Spec holds information about the request being evaluated */
  readonly "spec": io$k8s$api$authentication$v1beta1$TokenReviewSpec;
  /** Status is filled in by the server and indicates whether the request can be authenticated. */
  readonly "status"?: io$k8s$api$authentication$v1beta1$TokenReviewStatus;
};

/** TokenReviewSpec is a description of the token authentication request. */
export type io$k8s$api$authentication$v1beta1$TokenReviewSpec = {
  /** Audiences is a list of the identifiers that the resource server presented with the token identifies as. Audience-aware token authenticators will verify that the token was intended for at least one of the audiences in this list. If no audiences are provided, the audience will default to the audience of the Kubernetes apiserver. */
  readonly "audiences"?: readonly string[];
  /** Token is the opaque bearer token. */
  readonly "token"?: string;
};

/** TokenReviewStatus is the result of the token authentication request. */
export type io$k8s$api$authentication$v1beta1$TokenReviewStatus = {
  /** Audiences are audience identifiers chosen by the authenticator that are compatible with both the TokenReview and token. An identifier is any identifier in the intersection of the TokenReviewSpec audiences and the token's audiences. A client of the TokenReview API that sets the spec.audiences field should validate that a compatible audience identifier is returned in the status.audiences field to ensure that the TokenReview server is audience aware. If a TokenReview returns an empty status.audience field where status.authenticated is "true", the token is valid against the audience of the Kubernetes API server. */
  readonly "audiences"?: readonly string[];
  /** Authenticated indicates that the token was associated with a known user. */
  readonly "authenticated"?: boolean;
  /** Error indicates that the token couldn't be checked */
  readonly "error"?: string;
  /** User is the UserInfo associated with the provided token. */
  readonly "user"?: io$k8s$api$authentication$v1beta1$UserInfo;
};

/** UserInfo holds the information about the user needed to implement the user.Info interface. */
export type io$k8s$api$authentication$v1beta1$UserInfo = {
  /** Any additional information provided by the authenticator. */
  readonly "extra"?: object;
  /** The names of groups this user is a part of. */
  readonly "groups"?: readonly string[];
  /** A unique value that identifies this user across time. If this user is deleted and another user by the same name is added, they will have different UIDs. */
  readonly "uid"?: string;
  /** The name that uniquely identifies this user among all active users. */
  readonly "username"?: string;
};

/** LocalSubjectAccessReview checks whether or not a user or group can perform an action in a given namespace. Having a namespace scoped resource makes it much easier to grant namespace scoped policy that includes permissions checking. */
export type io$k8s$api$authorization$v1$LocalSubjectAccessReview = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "LocalSubjectAccessReview";
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ObjectMeta;
  /** Spec holds information about the request being evaluated.  spec.namespace must be equal to the namespace you made the request against.  If empty, it is defaulted. */
  readonly "spec": io$k8s$api$authorization$v1$SubjectAccessReviewSpec;
  /** Status is filled in by the server and indicates whether the request is allowed or not */
  readonly "status"?: io$k8s$api$authorization$v1$SubjectAccessReviewStatus;
};

/** NonResourceAttributes includes the authorization attributes available for non-resource requests to the Authorizer interface */
export type io$k8s$api$authorization$v1$NonResourceAttributes = {
  /** Path is the URL path of the request */
  readonly "path"?: string;
  /** Verb is the standard HTTP verb */
  readonly "verb"?: string;
};

/** NonResourceRule holds information that describes a rule for the non-resource */
export type io$k8s$api$authorization$v1$NonResourceRule = {
  /** NonResourceURLs is a set of partial urls that a user should have access to.  *s are allowed, but only as the full, final step in the path.  "*" means all. */
  readonly "nonResourceURLs"?: readonly string[];
  /** Verb is a list of kubernetes non-resource API verbs, like: get, post, put, delete, patch, head, options.  "*" means all. */
  readonly "verbs": readonly string[];
};

/** ResourceAttributes includes the authorization attributes available for resource requests to the Authorizer interface */
export type io$k8s$api$authorization$v1$ResourceAttributes = {
  /** Group is the API Group of the Resource.  "*" means all. */
  readonly "group"?: string;
  /** Name is the name of the resource being requested for a "get" or deleted for a "delete". "" (empty) means all. */
  readonly "name"?: string;
  /** Namespace is the namespace of the action being requested.  Currently, there is no distinction between no namespace and all namespaces "" (empty) is defaulted for LocalSubjectAccessReviews "" (empty) is empty for cluster-scoped resources "" (empty) means "all" for namespace scoped resources from a SubjectAccessReview or SelfSubjectAccessReview */
  readonly "namespace"?: string;
  /** Resource is one of the existing resource types.  "*" means all. */
  readonly "resource"?: string;
  /** Subresource is one of the existing resource types.  "" means none. */
  readonly "subresource"?: string;
  /** Verb is a kubernetes resource API verb, like: get, list, watch, create, update, delete, proxy.  "*" means all. */
  readonly "verb"?: string;
  /** Version is the API Version of the Resource.  "*" means all. */
  readonly "version"?: string;
};

/** ResourceRule is the list of actions the subject is allowed to perform on resources. The list ordering isn't significant, may contain duplicates, and possibly be incomplete. */
export type io$k8s$api$authorization$v1$ResourceRule = {
  /** APIGroups is the name of the APIGroup that contains the resources.  If multiple API groups are specified, any action requested against one of the enumerated resources in any API group will be allowed.  "*" means all. */
  readonly "apiGroups"?: readonly string[];
  /** ResourceNames is an optional white list of names that the rule applies to.  An empty set means that everything is allowed.  "*" means all. */
  readonly "resourceNames"?: readonly string[];
  /** Resources is a list of resources this rule applies to.  "*" means all in the specified apiGroups.
 "*^foo" represents the subresource 'foo' for all resources in the specified apiGroups. */
  readonly "resources"?: readonly string[];
  /** Verb is a list of kubernetes resource API verbs, like: get, list, watch, create, update, delete, proxy.  "*" means all. */
  readonly "verbs": readonly string[];
};

/** SelfSubjectAccessReview checks whether or the current user can perform an action.  Not filling in a spec.namespace means "in all namespaces".  Self is a special case, because users should always be able to check whether they can perform an action */
export type io$k8s$api$authorization$v1$SelfSubjectAccessReview = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "SelfSubjectAccessReview";
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ObjectMeta;
  /** Spec holds information about the request being evaluated.  user and groups must be empty */
  readonly "spec": io$k8s$api$authorization$v1$SelfSubjectAccessReviewSpec;
  /** Status is filled in by the server and indicates whether the request is allowed or not */
  readonly "status"?: io$k8s$api$authorization$v1$SubjectAccessReviewStatus;
};

/** SelfSubjectAccessReviewSpec is a description of the access request.  Exactly one of ResourceAuthorizationAttributes and NonResourceAuthorizationAttributes must be set */
export type io$k8s$api$authorization$v1$SelfSubjectAccessReviewSpec = {
  /** NonResourceAttributes describes information for a non-resource access request */
  readonly "nonResourceAttributes"?:
    io$k8s$api$authorization$v1$NonResourceAttributes;
  /** ResourceAuthorizationAttributes describes information for a resource access request */
  readonly "resourceAttributes"?:
    io$k8s$api$authorization$v1$ResourceAttributes;
};

/** SelfSubjectRulesReview enumerates the set of actions the current user can perform within a namespace. The returned list of actions may be incomplete depending on the server's authorization mode, and any errors experienced during the evaluation. SelfSubjectRulesReview should be used by UIs to show/hide actions, or to quickly let an end user reason about their permissions. It should NOT Be used by external systems to drive authorization decisions as this raises confused deputy, cache lifetime/revocation, and correctness concerns. SubjectAccessReview, and LocalAccessReview are the correct way to defer authorization decisions to the API server. */
export type io$k8s$api$authorization$v1$SelfSubjectRulesReview = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "SelfSubjectRulesReview";
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ObjectMeta;
  /** Spec holds information about the request being evaluated. */
  readonly "spec": io$k8s$api$authorization$v1$SelfSubjectRulesReviewSpec;
  /** Status is filled in by the server and indicates the set of actions a user can perform. */
  readonly "status"?: io$k8s$api$authorization$v1$SubjectRulesReviewStatus;
};

export type io$k8s$api$authorization$v1$SelfSubjectRulesReviewSpec = {
  /** Namespace to evaluate rules for. Required. */
  readonly "namespace"?: string;
};

/** SubjectAccessReview checks whether or not a user or group can perform an action. */
export type io$k8s$api$authorization$v1$SubjectAccessReview = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "SubjectAccessReview";
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ObjectMeta;
  /** Spec holds information about the request being evaluated */
  readonly "spec": io$k8s$api$authorization$v1$SubjectAccessReviewSpec;
  /** Status is filled in by the server and indicates whether the request is allowed or not */
  readonly "status"?: io$k8s$api$authorization$v1$SubjectAccessReviewStatus;
};

/** SubjectAccessReviewSpec is a description of the access request.  Exactly one of ResourceAuthorizationAttributes and NonResourceAuthorizationAttributes must be set */
export type io$k8s$api$authorization$v1$SubjectAccessReviewSpec = {
  /** Extra corresponds to the user.Info.GetExtra() method from the authenticator.  Since that is input to the authorizer it needs a reflection here. */
  readonly "extra"?: object;
  /** Groups is the groups you're testing for. */
  readonly "groups"?: readonly string[];
  /** NonResourceAttributes describes information for a non-resource access request */
  readonly "nonResourceAttributes"?:
    io$k8s$api$authorization$v1$NonResourceAttributes;
  /** ResourceAuthorizationAttributes describes information for a resource access request */
  readonly "resourceAttributes"?:
    io$k8s$api$authorization$v1$ResourceAttributes;
  /** UID information about the requesting user. */
  readonly "uid"?: string;
  /** User is the user you're testing for. If you specify "User" but not "Groups", then is it interpreted as "What if User were not a member of any groups */
  readonly "user"?: string;
};

/** SubjectAccessReviewStatus */
export type io$k8s$api$authorization$v1$SubjectAccessReviewStatus = {
  /** Allowed is required. True if the action would be allowed, false otherwise. */
  readonly "allowed": boolean;
  /** Denied is optional. True if the action would be denied, otherwise false. If both allowed is false and denied is false, then the authorizer has no opinion on whether to authorize the action. Denied may not be true if Allowed is true. */
  readonly "denied"?: boolean;
  /** EvaluationError is an indication that some error occurred during the authorization check. It is entirely possible to get an error and be able to continue determine authorization status in spite of it. For instance, RBAC can be missing a role, but enough roles are still present and bound to reason about the request. */
  readonly "evaluationError"?: string;
  /** Reason is optional.  It indicates why a request was allowed or denied. */
  readonly "reason"?: string;
};

/** SubjectRulesReviewStatus contains the result of a rules check. This check can be incomplete depending on the set of authorizers the server is configured with and any errors experienced during evaluation. Because authorization rules are additive, if a rule appears in a list it's safe to assume the subject has that permission, even if that list is incomplete. */
export type io$k8s$api$authorization$v1$SubjectRulesReviewStatus = {
  /** EvaluationError can appear in combination with Rules. It indicates an error occurred during rule evaluation, such as an authorizer that doesn't support rule evaluation, and that ResourceRules and/or NonResourceRules may be incomplete. */
  readonly "evaluationError"?: string;
  /** Incomplete is true when the rules returned by this call are incomplete. This is most commonly encountered when an authorizer, such as an external authorizer, doesn't support rules evaluation. */
  readonly "incomplete": boolean;
  /** NonResourceRules is the list of actions the subject is allowed to perform on non-resources. The list ordering isn't significant, may contain duplicates, and possibly be incomplete. */
  readonly "nonResourceRules":
    readonly io$k8s$api$authorization$v1$NonResourceRule[];
  /** ResourceRules is the list of actions the subject is allowed to perform on resources. The list ordering isn't significant, may contain duplicates, and possibly be incomplete. */
  readonly "resourceRules": readonly io$k8s$api$authorization$v1$ResourceRule[];
};

/** LocalSubjectAccessReview checks whether or not a user or group can perform an action in a given namespace. Having a namespace scoped resource makes it much easier to grant namespace scoped policy that includes permissions checking. */
export type io$k8s$api$authorization$v1beta1$LocalSubjectAccessReview = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "LocalSubjectAccessReview";
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ObjectMeta;
  /** Spec holds information about the request being evaluated.  spec.namespace must be equal to the namespace you made the request against.  If empty, it is defaulted. */
  readonly "spec": io$k8s$api$authorization$v1beta1$SubjectAccessReviewSpec;
  /** Status is filled in by the server and indicates whether the request is allowed or not */
  readonly "status"?:
    io$k8s$api$authorization$v1beta1$SubjectAccessReviewStatus;
};

/** NonResourceAttributes includes the authorization attributes available for non-resource requests to the Authorizer interface */
export type io$k8s$api$authorization$v1beta1$NonResourceAttributes = {
  /** Path is the URL path of the request */
  readonly "path"?: string;
  /** Verb is the standard HTTP verb */
  readonly "verb"?: string;
};

/** NonResourceRule holds information that describes a rule for the non-resource */
export type io$k8s$api$authorization$v1beta1$NonResourceRule = {
  /** NonResourceURLs is a set of partial urls that a user should have access to.  *s are allowed, but only as the full, final step in the path.  "*" means all. */
  readonly "nonResourceURLs"?: readonly string[];
  /** Verb is a list of kubernetes non-resource API verbs, like: get, post, put, delete, patch, head, options.  "*" means all. */
  readonly "verbs": readonly string[];
};

/** ResourceAttributes includes the authorization attributes available for resource requests to the Authorizer interface */
export type io$k8s$api$authorization$v1beta1$ResourceAttributes = {
  /** Group is the API Group of the Resource.  "*" means all. */
  readonly "group"?: string;
  /** Name is the name of the resource being requested for a "get" or deleted for a "delete". "" (empty) means all. */
  readonly "name"?: string;
  /** Namespace is the namespace of the action being requested.  Currently, there is no distinction between no namespace and all namespaces "" (empty) is defaulted for LocalSubjectAccessReviews "" (empty) is empty for cluster-scoped resources "" (empty) means "all" for namespace scoped resources from a SubjectAccessReview or SelfSubjectAccessReview */
  readonly "namespace"?: string;
  /** Resource is one of the existing resource types.  "*" means all. */
  readonly "resource"?: string;
  /** Subresource is one of the existing resource types.  "" means none. */
  readonly "subresource"?: string;
  /** Verb is a kubernetes resource API verb, like: get, list, watch, create, update, delete, proxy.  "*" means all. */
  readonly "verb"?: string;
  /** Version is the API Version of the Resource.  "*" means all. */
  readonly "version"?: string;
};

/** ResourceRule is the list of actions the subject is allowed to perform on resources. The list ordering isn't significant, may contain duplicates, and possibly be incomplete. */
export type io$k8s$api$authorization$v1beta1$ResourceRule = {
  /** APIGroups is the name of the APIGroup that contains the resources.  If multiple API groups are specified, any action requested against one of the enumerated resources in any API group will be allowed.  "*" means all. */
  readonly "apiGroups"?: readonly string[];
  /** ResourceNames is an optional white list of names that the rule applies to.  An empty set means that everything is allowed.  "*" means all. */
  readonly "resourceNames"?: readonly string[];
  /** Resources is a list of resources this rule applies to.  "*" means all in the specified apiGroups.
 "*^foo" represents the subresource 'foo' for all resources in the specified apiGroups. */
  readonly "resources"?: readonly string[];
  /** Verb is a list of kubernetes resource API verbs, like: get, list, watch, create, update, delete, proxy.  "*" means all. */
  readonly "verbs": readonly string[];
};

/** SelfSubjectAccessReview checks whether or the current user can perform an action.  Not filling in a spec.namespace means "in all namespaces".  Self is a special case, because users should always be able to check whether they can perform an action */
export type io$k8s$api$authorization$v1beta1$SelfSubjectAccessReview = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "SelfSubjectAccessReview";
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ObjectMeta;
  /** Spec holds information about the request being evaluated.  user and groups must be empty */
  readonly "spec": io$k8s$api$authorization$v1beta1$SelfSubjectAccessReviewSpec;
  /** Status is filled in by the server and indicates whether the request is allowed or not */
  readonly "status"?:
    io$k8s$api$authorization$v1beta1$SubjectAccessReviewStatus;
};

/** SelfSubjectAccessReviewSpec is a description of the access request.  Exactly one of ResourceAuthorizationAttributes and NonResourceAuthorizationAttributes must be set */
export type io$k8s$api$authorization$v1beta1$SelfSubjectAccessReviewSpec = {
  /** NonResourceAttributes describes information for a non-resource access request */
  readonly "nonResourceAttributes"?:
    io$k8s$api$authorization$v1beta1$NonResourceAttributes;
  /** ResourceAuthorizationAttributes describes information for a resource access request */
  readonly "resourceAttributes"?:
    io$k8s$api$authorization$v1beta1$ResourceAttributes;
};

/** SelfSubjectRulesReview enumerates the set of actions the current user can perform within a namespace. The returned list of actions may be incomplete depending on the server's authorization mode, and any errors experienced during the evaluation. SelfSubjectRulesReview should be used by UIs to show/hide actions, or to quickly let an end user reason about their permissions. It should NOT Be used by external systems to drive authorization decisions as this raises confused deputy, cache lifetime/revocation, and correctness concerns. SubjectAccessReview, and LocalAccessReview are the correct way to defer authorization decisions to the API server. */
export type io$k8s$api$authorization$v1beta1$SelfSubjectRulesReview = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "SelfSubjectRulesReview";
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ObjectMeta;
  /** Spec holds information about the request being evaluated. */
  readonly "spec": io$k8s$api$authorization$v1beta1$SelfSubjectRulesReviewSpec;
  /** Status is filled in by the server and indicates the set of actions a user can perform. */
  readonly "status"?: io$k8s$api$authorization$v1beta1$SubjectRulesReviewStatus;
};

export type io$k8s$api$authorization$v1beta1$SelfSubjectRulesReviewSpec = {
  /** Namespace to evaluate rules for. Required. */
  readonly "namespace"?: string;
};

/** SubjectAccessReview checks whether or not a user or group can perform an action. */
export type io$k8s$api$authorization$v1beta1$SubjectAccessReview = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "SubjectAccessReview";
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ObjectMeta;
  /** Spec holds information about the request being evaluated */
  readonly "spec": io$k8s$api$authorization$v1beta1$SubjectAccessReviewSpec;
  /** Status is filled in by the server and indicates whether the request is allowed or not */
  readonly "status"?:
    io$k8s$api$authorization$v1beta1$SubjectAccessReviewStatus;
};

/** SubjectAccessReviewSpec is a description of the access request.  Exactly one of ResourceAuthorizationAttributes and NonResourceAuthorizationAttributes must be set */
export type io$k8s$api$authorization$v1beta1$SubjectAccessReviewSpec = {
  /** Extra corresponds to the user.Info.GetExtra() method from the authenticator.  Since that is input to the authorizer it needs a reflection here. */
  readonly "extra"?: object;
  /** Groups is the groups you're testing for. */
  readonly "group"?: readonly string[];
  /** NonResourceAttributes describes information for a non-resource access request */
  readonly "nonResourceAttributes"?:
    io$k8s$api$authorization$v1beta1$NonResourceAttributes;
  /** ResourceAuthorizationAttributes describes information for a resource access request */
  readonly "resourceAttributes"?:
    io$k8s$api$authorization$v1beta1$ResourceAttributes;
  /** UID information about the requesting user. */
  readonly "uid"?: string;
  /** User is the user you're testing for. If you specify "User" but not "Group", then is it interpreted as "What if User were not a member of any groups */
  readonly "user"?: string;
};

/** SubjectAccessReviewStatus */
export type io$k8s$api$authorization$v1beta1$SubjectAccessReviewStatus = {
  /** Allowed is required. True if the action would be allowed, false otherwise. */
  readonly "allowed": boolean;
  /** Denied is optional. True if the action would be denied, otherwise false. If both allowed is false and denied is false, then the authorizer has no opinion on whether to authorize the action. Denied may not be true if Allowed is true. */
  readonly "denied"?: boolean;
  /** EvaluationError is an indication that some error occurred during the authorization check. It is entirely possible to get an error and be able to continue determine authorization status in spite of it. For instance, RBAC can be missing a role, but enough roles are still present and bound to reason about the request. */
  readonly "evaluationError"?: string;
  /** Reason is optional.  It indicates why a request was allowed or denied. */
  readonly "reason"?: string;
};

/** SubjectRulesReviewStatus contains the result of a rules check. This check can be incomplete depending on the set of authorizers the server is configured with and any errors experienced during evaluation. Because authorization rules are additive, if a rule appears in a list it's safe to assume the subject has that permission, even if that list is incomplete. */
export type io$k8s$api$authorization$v1beta1$SubjectRulesReviewStatus = {
  /** EvaluationError can appear in combination with Rules. It indicates an error occurred during rule evaluation, such as an authorizer that doesn't support rule evaluation, and that ResourceRules and/or NonResourceRules may be incomplete. */
  readonly "evaluationError"?: string;
  /** Incomplete is true when the rules returned by this call are incomplete. This is most commonly encountered when an authorizer, such as an external authorizer, doesn't support rules evaluation. */
  readonly "incomplete": boolean;
  /** NonResourceRules is the list of actions the subject is allowed to perform on non-resources. The list ordering isn't significant, may contain duplicates, and possibly be incomplete. */
  readonly "nonResourceRules":
    readonly io$k8s$api$authorization$v1beta1$NonResourceRule[];
  /** ResourceRules is the list of actions the subject is allowed to perform on resources. The list ordering isn't significant, may contain duplicates, and possibly be incomplete. */
  readonly "resourceRules":
    readonly io$k8s$api$authorization$v1beta1$ResourceRule[];
};

/** CrossVersionObjectReference contains enough information to let you identify the referred resource. */
export type io$k8s$api$autoscaling$v1$CrossVersionObjectReference = {
  /** API version of the referent */
  readonly "apiVersion"?: string;
  /** Kind of the referent; More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds" */
  readonly "kind": "CrossVersionObjectReference";
  /** Name of the referent; More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly "name": string;
};

/** configuration of a horizontal pod autoscaler. */
export type io$k8s$api$autoscaling$v1$HorizontalPodAutoscaler = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "HorizontalPodAutoscaler";
  /** Standard object metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ObjectMeta;
  /** behaviour of autoscaler. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status. */
  readonly "spec"?: io$k8s$api$autoscaling$v1$HorizontalPodAutoscalerSpec;
  /** current information about the autoscaler. */
  readonly "status"?: io$k8s$api$autoscaling$v1$HorizontalPodAutoscalerStatus;
};

/** list of horizontal pod autoscaler objects. */
export type io$k8s$api$autoscaling$v1$HorizontalPodAutoscalerList = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** list of horizontal pod autoscaler objects. */
  readonly "items":
    readonly io$k8s$api$autoscaling$v1$HorizontalPodAutoscaler[];
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "HorizontalPodAutoscalerList";
  /** Standard list metadata. */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ListMeta;
};

/** specification of a horizontal pod autoscaler. */
export type io$k8s$api$autoscaling$v1$HorizontalPodAutoscalerSpec = {
  /** upper limit for the number of pods that can be set by the autoscaler; cannot be smaller than MinReplicas. */
  readonly "maxReplicas": number;
  /** lower limit for the number of pods that can be set by the autoscaler, default 1. */
  readonly "minReplicas"?: number;
  /** reference to scaled resource; horizontal pod autoscaler will learn the current resource consumption and will set the desired number of pods by using its Scale subresource. */
  readonly "scaleTargetRef":
    io$k8s$api$autoscaling$v1$CrossVersionObjectReference;
  /** target average CPU utilization (represented as a percentage of requested CPU) over all the pods; if not specified the default autoscaling policy will be used. */
  readonly "targetCPUUtilizationPercentage"?: number;
};

/** current status of a horizontal pod autoscaler */
export type io$k8s$api$autoscaling$v1$HorizontalPodAutoscalerStatus = {
  /** current average CPU utilization over all pods, represented as a percentage of requested CPU, e.g. 70 means that an average pod is using now 70% of its requested CPU. */
  readonly "currentCPUUtilizationPercentage"?: number;
  /** current number of replicas of pods managed by this autoscaler. */
  readonly "currentReplicas": number;
  /** desired number of replicas of pods managed by this autoscaler. */
  readonly "desiredReplicas": number;
  /** last time the HorizontalPodAutoscaler scaled the number of pods; used by the autoscaler to control how often the number of pods is changed. */
  readonly "lastScaleTime"?: io$k8s$apimachinery$pkg$apis$meta$v1$Time;
  /** most recent generation observed by this autoscaler. */
  readonly "observedGeneration"?: number;
};

/** Scale represents a scaling request for a resource. */
export type io$k8s$api$autoscaling$v1$Scale = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "Scale";
  /** Standard object metadata; More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata. */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ObjectMeta;
  /** defines the behavior of the scale. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status. */
  readonly "spec"?: io$k8s$api$autoscaling$v1$ScaleSpec;
  /** current status of the scale. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status. Read-only. */
  readonly "status"?: io$k8s$api$autoscaling$v1$ScaleStatus;
};

/** ScaleSpec describes the attributes of a scale subresource. */
export type io$k8s$api$autoscaling$v1$ScaleSpec = {
  /** desired number of instances for the scaled object. */
  readonly "replicas"?: number;
};

/** ScaleStatus represents the current status of a scale subresource. */
export type io$k8s$api$autoscaling$v1$ScaleStatus = {
  /** actual number of observed instances of the scaled object. */
  readonly "replicas": number;
  /** label query over pods that should match the replicas count. This is same as the label selector but in the string format to avoid introspection by clients. The string will be in the same format as the query-param syntax. More info about label selectors: http://kubernetes.io/docs/user-guide/labels#label-selectors */
  readonly "selector"?: string;
};

/** CrossVersionObjectReference contains enough information to let you identify the referred resource. */
export type io$k8s$api$autoscaling$v2beta1$CrossVersionObjectReference = {
  /** API version of the referent */
  readonly "apiVersion"?: string;
  /** Kind of the referent; More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds" */
  readonly "kind": "CrossVersionObjectReference";
  /** Name of the referent; More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly "name": string;
};

/** ExternalMetricSource indicates how to scale on a metric not associated with any Kubernetes object (for example length of queue in cloud messaging service, or QPS from loadbalancer running outside of cluster). Exactly one "target" type should be set. */
export type io$k8s$api$autoscaling$v2beta1$ExternalMetricSource = {
  /** metricName is the name of the metric in question. */
  readonly "metricName": string;
  /** metricSelector is used to identify a specific time series within a given metric. */
  readonly "metricSelector"?:
    io$k8s$apimachinery$pkg$apis$meta$v1$LabelSelector;
  /** targetAverageValue is the target per-pod value of global metric (as a quantity). Mutually exclusive with TargetValue. */
  readonly "targetAverageValue"?: io$k8s$apimachinery$pkg$api$resource$Quantity;
  /** targetValue is the target value of the metric (as a quantity). Mutually exclusive with TargetAverageValue. */
  readonly "targetValue"?: io$k8s$apimachinery$pkg$api$resource$Quantity;
};

/** ExternalMetricStatus indicates the current value of a global metric not associated with any Kubernetes object. */
export type io$k8s$api$autoscaling$v2beta1$ExternalMetricStatus = {
  /** currentAverageValue is the current value of metric averaged over autoscaled pods. */
  readonly "currentAverageValue"?:
    io$k8s$apimachinery$pkg$api$resource$Quantity;
  /** currentValue is the current value of the metric (as a quantity) */
  readonly "currentValue": io$k8s$apimachinery$pkg$api$resource$Quantity;
  /** metricName is the name of a metric used for autoscaling in metric system. */
  readonly "metricName": string;
  /** metricSelector is used to identify a specific time series within a given metric. */
  readonly "metricSelector"?:
    io$k8s$apimachinery$pkg$apis$meta$v1$LabelSelector;
};

/** HorizontalPodAutoscaler is the configuration for a horizontal pod autoscaler, which automatically manages the replica count of any resource implementing the scale subresource based on the metrics specified. */
export type io$k8s$api$autoscaling$v2beta1$HorizontalPodAutoscaler = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "HorizontalPodAutoscaler";
  /** metadata is the standard object metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ObjectMeta;
  /** spec is the specification for the behaviour of the autoscaler. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status. */
  readonly "spec"?: io$k8s$api$autoscaling$v2beta1$HorizontalPodAutoscalerSpec;
  /** status is the current information about the autoscaler. */
  readonly "status"?:
    io$k8s$api$autoscaling$v2beta1$HorizontalPodAutoscalerStatus;
};

/** HorizontalPodAutoscalerCondition describes the state of a HorizontalPodAutoscaler at a certain point. */
export type io$k8s$api$autoscaling$v2beta1$HorizontalPodAutoscalerCondition = {
  /** lastTransitionTime is the last time the condition transitioned from one status to another */
  readonly "lastTransitionTime"?: io$k8s$apimachinery$pkg$apis$meta$v1$Time;
  /** message is a human-readable explanation containing details about the transition */
  readonly "message"?: string;
  /** reason is the reason for the condition's last transition. */
  readonly "reason"?: string;
  /** status is the status of the condition (True, False, Unknown) */
  readonly "status": string;
  /** type describes the current condition */
  readonly "type": string;
};

/** HorizontalPodAutoscaler is a list of horizontal pod autoscaler objects. */
export type io$k8s$api$autoscaling$v2beta1$HorizontalPodAutoscalerList = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** items is the list of horizontal pod autoscaler objects. */
  readonly "items":
    readonly io$k8s$api$autoscaling$v2beta1$HorizontalPodAutoscaler[];
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "HorizontalPodAutoscalerList";
  /** metadata is the standard list metadata. */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ListMeta;
};

/** HorizontalPodAutoscalerSpec describes the desired functionality of the HorizontalPodAutoscaler. */
export type io$k8s$api$autoscaling$v2beta1$HorizontalPodAutoscalerSpec = {
  /** maxReplicas is the upper limit for the number of replicas to which the autoscaler can scale up. It cannot be less that minReplicas. */
  readonly "maxReplicas": number;
  /** metrics contains the specifications for which to use to calculate the desired replica count (the maximum replica count across all metrics will be used).  The desired replica count is calculated multiplying the ratio between the target value and the current value by the current number of pods.  Ergo, metrics used must decrease as the pod count is increased, and vice-versa.  See the individual metric source types for more information about how each type of metric must respond. */
  readonly "metrics"?: readonly io$k8s$api$autoscaling$v2beta1$MetricSpec[];
  /** minReplicas is the lower limit for the number of replicas to which the autoscaler can scale down. It defaults to 1 pod. */
  readonly "minReplicas"?: number;
  /** scaleTargetRef points to the target resource to scale, and is used to the pods for which metrics should be collected, as well as to actually change the replica count. */
  readonly "scaleTargetRef":
    io$k8s$api$autoscaling$v2beta1$CrossVersionObjectReference;
};

/** HorizontalPodAutoscalerStatus describes the current status of a horizontal pod autoscaler. */
export type io$k8s$api$autoscaling$v2beta1$HorizontalPodAutoscalerStatus = {
  /** conditions is the set of conditions required for this autoscaler to scale its target, and indicates whether or not those conditions are met. */
  readonly "conditions":
    readonly io$k8s$api$autoscaling$v2beta1$HorizontalPodAutoscalerCondition[];
  /** currentMetrics is the last read state of the metrics used by this autoscaler. */
  readonly "currentMetrics"?:
    readonly io$k8s$api$autoscaling$v2beta1$MetricStatus[];
  /** currentReplicas is current number of replicas of pods managed by this autoscaler, as last seen by the autoscaler. */
  readonly "currentReplicas": number;
  /** desiredReplicas is the desired number of replicas of pods managed by this autoscaler, as last calculated by the autoscaler. */
  readonly "desiredReplicas": number;
  /** lastScaleTime is the last time the HorizontalPodAutoscaler scaled the number of pods, used by the autoscaler to control how often the number of pods is changed. */
  readonly "lastScaleTime"?: io$k8s$apimachinery$pkg$apis$meta$v1$Time;
  /** observedGeneration is the most recent generation observed by this autoscaler. */
  readonly "observedGeneration"?: number;
};

/** MetricSpec specifies how to scale based on a single metric (only `type` and one other matching field should be set at once). */
export type io$k8s$api$autoscaling$v2beta1$MetricSpec = {
  /** external refers to a global metric that is not associated with any Kubernetes object. It allows autoscaling based on information coming from components running outside of cluster (for example length of queue in cloud messaging service, or QPS from loadbalancer running outside of cluster). */
  readonly "external"?: io$k8s$api$autoscaling$v2beta1$ExternalMetricSource;
  /** object refers to a metric describing a single kubernetes object (for example, hits-per-second on an Ingress object). */
  readonly "object"?: io$k8s$api$autoscaling$v2beta1$ObjectMetricSource;
  /** pods refers to a metric describing each pod in the current scale target (for example, transactions-processed-per-second).  The values will be averaged together before being compared to the target value. */
  readonly "pods"?: io$k8s$api$autoscaling$v2beta1$PodsMetricSource;
  /** resource refers to a resource metric (such as those specified in requests and limits) known to Kubernetes describing each pod in the current scale target (e.g. CPU or memory). Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source. */
  readonly "resource"?: io$k8s$api$autoscaling$v2beta1$ResourceMetricSource;
  /** type is the type of metric source.  It should be one of "Object", "Pods" or "Resource", each mapping to a matching field in the object. */
  readonly "type": string;
};

/** MetricStatus describes the last-read state of a single metric. */
export type io$k8s$api$autoscaling$v2beta1$MetricStatus = {
  /** external refers to a global metric that is not associated with any Kubernetes object. It allows autoscaling based on information coming from components running outside of cluster (for example length of queue in cloud messaging service, or QPS from loadbalancer running outside of cluster). */
  readonly "external"?: io$k8s$api$autoscaling$v2beta1$ExternalMetricStatus;
  /** object refers to a metric describing a single kubernetes object (for example, hits-per-second on an Ingress object). */
  readonly "object"?: io$k8s$api$autoscaling$v2beta1$ObjectMetricStatus;
  /** pods refers to a metric describing each pod in the current scale target (for example, transactions-processed-per-second).  The values will be averaged together before being compared to the target value. */
  readonly "pods"?: io$k8s$api$autoscaling$v2beta1$PodsMetricStatus;
  /** resource refers to a resource metric (such as those specified in requests and limits) known to Kubernetes describing each pod in the current scale target (e.g. CPU or memory). Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source. */
  readonly "resource"?: io$k8s$api$autoscaling$v2beta1$ResourceMetricStatus;
  /** type is the type of metric source.  It will be one of "Object", "Pods" or "Resource", each corresponds to a matching field in the object. */
  readonly "type": string;
};

/** ObjectMetricSource indicates how to scale on a metric describing a kubernetes object (for example, hits-per-second on an Ingress object). */
export type io$k8s$api$autoscaling$v2beta1$ObjectMetricSource = {
  /** averageValue is the target value of the average of the metric across all relevant pods (as a quantity) */
  readonly "averageValue"?: io$k8s$apimachinery$pkg$api$resource$Quantity;
  /** metricName is the name of the metric in question. */
  readonly "metricName": string;
  /** selector is the string-encoded form of a standard kubernetes label selector for the given metric When set, it is passed as an additional parameter to the metrics server for more specific metrics scoping When unset, just the metricName will be used to gather metrics. */
  readonly "selector"?: io$k8s$apimachinery$pkg$apis$meta$v1$LabelSelector;
  /** target is the described Kubernetes object. */
  readonly "target": io$k8s$api$autoscaling$v2beta1$CrossVersionObjectReference;
  /** targetValue is the target value of the metric (as a quantity). */
  readonly "targetValue": io$k8s$apimachinery$pkg$api$resource$Quantity;
};

/** ObjectMetricStatus indicates the current value of a metric describing a kubernetes object (for example, hits-per-second on an Ingress object). */
export type io$k8s$api$autoscaling$v2beta1$ObjectMetricStatus = {
  /** averageValue is the current value of the average of the metric across all relevant pods (as a quantity) */
  readonly "averageValue"?: io$k8s$apimachinery$pkg$api$resource$Quantity;
  /** currentValue is the current value of the metric (as a quantity). */
  readonly "currentValue": io$k8s$apimachinery$pkg$api$resource$Quantity;
  /** metricName is the name of the metric in question. */
  readonly "metricName": string;
  /** selector is the string-encoded form of a standard kubernetes label selector for the given metric When set in the ObjectMetricSource, it is passed as an additional parameter to the metrics server for more specific metrics scoping. When unset, just the metricName will be used to gather metrics. */
  readonly "selector"?: io$k8s$apimachinery$pkg$apis$meta$v1$LabelSelector;
  /** target is the described Kubernetes object. */
  readonly "target": io$k8s$api$autoscaling$v2beta1$CrossVersionObjectReference;
};

/** PodsMetricSource indicates how to scale on a metric describing each pod in the current scale target (for example, transactions-processed-per-second). The values will be averaged together before being compared to the target value. */
export type io$k8s$api$autoscaling$v2beta1$PodsMetricSource = {
  /** metricName is the name of the metric in question */
  readonly "metricName": string;
  /** selector is the string-encoded form of a standard kubernetes label selector for the given metric When set, it is passed as an additional parameter to the metrics server for more specific metrics scoping When unset, just the metricName will be used to gather metrics. */
  readonly "selector"?: io$k8s$apimachinery$pkg$apis$meta$v1$LabelSelector;
  /** targetAverageValue is the target value of the average of the metric across all relevant pods (as a quantity) */
  readonly "targetAverageValue": io$k8s$apimachinery$pkg$api$resource$Quantity;
};

/** PodsMetricStatus indicates the current value of a metric describing each pod in the current scale target (for example, transactions-processed-per-second). */
export type io$k8s$api$autoscaling$v2beta1$PodsMetricStatus = {
  /** currentAverageValue is the current value of the average of the metric across all relevant pods (as a quantity) */
  readonly "currentAverageValue": io$k8s$apimachinery$pkg$api$resource$Quantity;
  /** metricName is the name of the metric in question */
  readonly "metricName": string;
  /** selector is the string-encoded form of a standard kubernetes label selector for the given metric When set in the PodsMetricSource, it is passed as an additional parameter to the metrics server for more specific metrics scoping. When unset, just the metricName will be used to gather metrics. */
  readonly "selector"?: io$k8s$apimachinery$pkg$apis$meta$v1$LabelSelector;
};

/** ResourceMetricSource indicates how to scale on a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  The values will be averaged together before being compared to the target.  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.  Only one "target" type should be set. */
export type io$k8s$api$autoscaling$v2beta1$ResourceMetricSource = {
  /** name is the name of the resource in question. */
  readonly "name": string;
  /** targetAverageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods. */
  readonly "targetAverageUtilization"?: number;
  /** targetAverageValue is the target value of the average of the resource metric across all relevant pods, as a raw value (instead of as a percentage of the request), similar to the "pods" metric source type. */
  readonly "targetAverageValue"?: io$k8s$apimachinery$pkg$api$resource$Quantity;
};

/** ResourceMetricStatus indicates the current value of a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source. */
export type io$k8s$api$autoscaling$v2beta1$ResourceMetricStatus = {
  /** currentAverageUtilization is the current value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods.  It will only be present if `targetAverageValue` was set in the corresponding metric specification. */
  readonly "currentAverageUtilization"?: number;
  /** currentAverageValue is the current value of the average of the resource metric across all relevant pods, as a raw value (instead of as a percentage of the request), similar to the "pods" metric source type. It will always be set, regardless of the corresponding metric specification. */
  readonly "currentAverageValue": io$k8s$apimachinery$pkg$api$resource$Quantity;
  /** name is the name of the resource in question. */
  readonly "name": string;
};

/** CrossVersionObjectReference contains enough information to let you identify the referred resource. */
export type io$k8s$api$autoscaling$v2beta2$CrossVersionObjectReference = {
  /** API version of the referent */
  readonly "apiVersion"?: string;
  /** Kind of the referent; More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds" */
  readonly "kind": "CrossVersionObjectReference";
  /** Name of the referent; More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly "name": string;
};

/** ExternalMetricSource indicates how to scale on a metric not associated with any Kubernetes object (for example length of queue in cloud messaging service, or QPS from loadbalancer running outside of cluster). */
export type io$k8s$api$autoscaling$v2beta2$ExternalMetricSource = {
  /** metric identifies the target metric by name and selector */
  readonly "metric": io$k8s$api$autoscaling$v2beta2$MetricIdentifier;
  /** target specifies the target value for the given metric */
  readonly "target": io$k8s$api$autoscaling$v2beta2$MetricTarget;
};

/** ExternalMetricStatus indicates the current value of a global metric not associated with any Kubernetes object. */
export type io$k8s$api$autoscaling$v2beta2$ExternalMetricStatus = {
  /** current contains the current value for the given metric */
  readonly "current": io$k8s$api$autoscaling$v2beta2$MetricValueStatus;
  /** metric identifies the target metric by name and selector */
  readonly "metric": io$k8s$api$autoscaling$v2beta2$MetricIdentifier;
};

/** HorizontalPodAutoscaler is the configuration for a horizontal pod autoscaler, which automatically manages the replica count of any resource implementing the scale subresource based on the metrics specified. */
export type io$k8s$api$autoscaling$v2beta2$HorizontalPodAutoscaler = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "HorizontalPodAutoscaler";
  /** metadata is the standard object metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ObjectMeta;
  /** spec is the specification for the behaviour of the autoscaler. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status. */
  readonly "spec"?: io$k8s$api$autoscaling$v2beta2$HorizontalPodAutoscalerSpec;
  /** status is the current information about the autoscaler. */
  readonly "status"?:
    io$k8s$api$autoscaling$v2beta2$HorizontalPodAutoscalerStatus;
};

/** HorizontalPodAutoscalerCondition describes the state of a HorizontalPodAutoscaler at a certain point. */
export type io$k8s$api$autoscaling$v2beta2$HorizontalPodAutoscalerCondition = {
  /** lastTransitionTime is the last time the condition transitioned from one status to another */
  readonly "lastTransitionTime"?: io$k8s$apimachinery$pkg$apis$meta$v1$Time;
  /** message is a human-readable explanation containing details about the transition */
  readonly "message"?: string;
  /** reason is the reason for the condition's last transition. */
  readonly "reason"?: string;
  /** status is the status of the condition (True, False, Unknown) */
  readonly "status": string;
  /** type describes the current condition */
  readonly "type": string;
};

/** HorizontalPodAutoscalerList is a list of horizontal pod autoscaler objects. */
export type io$k8s$api$autoscaling$v2beta2$HorizontalPodAutoscalerList = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** items is the list of horizontal pod autoscaler objects. */
  readonly "items":
    readonly io$k8s$api$autoscaling$v2beta2$HorizontalPodAutoscaler[];
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "HorizontalPodAutoscalerList";
  /** metadata is the standard list metadata. */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ListMeta;
};

/** HorizontalPodAutoscalerSpec describes the desired functionality of the HorizontalPodAutoscaler. */
export type io$k8s$api$autoscaling$v2beta2$HorizontalPodAutoscalerSpec = {
  /** maxReplicas is the upper limit for the number of replicas to which the autoscaler can scale up. It cannot be less that minReplicas. */
  readonly "maxReplicas": number;
  /** metrics contains the specifications for which to use to calculate the desired replica count (the maximum replica count across all metrics will be used).  The desired replica count is calculated multiplying the ratio between the target value and the current value by the current number of pods.  Ergo, metrics used must decrease as the pod count is increased, and vice-versa.  See the individual metric source types for more information about how each type of metric must respond. If not set, the default metric will be set to 80% average CPU utilization. */
  readonly "metrics"?: readonly io$k8s$api$autoscaling$v2beta2$MetricSpec[];
  /** minReplicas is the lower limit for the number of replicas to which the autoscaler can scale down. It defaults to 1 pod. */
  readonly "minReplicas"?: number;
  /** scaleTargetRef points to the target resource to scale, and is used to the pods for which metrics should be collected, as well as to actually change the replica count. */
  readonly "scaleTargetRef":
    io$k8s$api$autoscaling$v2beta2$CrossVersionObjectReference;
};

/** HorizontalPodAutoscalerStatus describes the current status of a horizontal pod autoscaler. */
export type io$k8s$api$autoscaling$v2beta2$HorizontalPodAutoscalerStatus = {
  /** conditions is the set of conditions required for this autoscaler to scale its target, and indicates whether or not those conditions are met. */
  readonly "conditions":
    readonly io$k8s$api$autoscaling$v2beta2$HorizontalPodAutoscalerCondition[];
  /** currentMetrics is the last read state of the metrics used by this autoscaler. */
  readonly "currentMetrics"?:
    readonly io$k8s$api$autoscaling$v2beta2$MetricStatus[];
  /** currentReplicas is current number of replicas of pods managed by this autoscaler, as last seen by the autoscaler. */
  readonly "currentReplicas": number;
  /** desiredReplicas is the desired number of replicas of pods managed by this autoscaler, as last calculated by the autoscaler. */
  readonly "desiredReplicas": number;
  /** lastScaleTime is the last time the HorizontalPodAutoscaler scaled the number of pods, used by the autoscaler to control how often the number of pods is changed. */
  readonly "lastScaleTime"?: io$k8s$apimachinery$pkg$apis$meta$v1$Time;
  /** observedGeneration is the most recent generation observed by this autoscaler. */
  readonly "observedGeneration"?: number;
};

/** MetricIdentifier defines the name and optionally selector for a metric */
export type io$k8s$api$autoscaling$v2beta2$MetricIdentifier = {
  /** name is the name of the given metric */
  readonly "name": string;
  /** selector is the string-encoded form of a standard kubernetes label selector for the given metric When set, it is passed as an additional parameter to the metrics server for more specific metrics scoping. When unset, just the metricName will be used to gather metrics. */
  readonly "selector"?: io$k8s$apimachinery$pkg$apis$meta$v1$LabelSelector;
};

/** MetricSpec specifies how to scale based on a single metric (only `type` and one other matching field should be set at once). */
export type io$k8s$api$autoscaling$v2beta2$MetricSpec = {
  /** external refers to a global metric that is not associated with any Kubernetes object. It allows autoscaling based on information coming from components running outside of cluster (for example length of queue in cloud messaging service, or QPS from loadbalancer running outside of cluster). */
  readonly "external"?: io$k8s$api$autoscaling$v2beta2$ExternalMetricSource;
  /** object refers to a metric describing a single kubernetes object (for example, hits-per-second on an Ingress object). */
  readonly "object"?: io$k8s$api$autoscaling$v2beta2$ObjectMetricSource;
  /** pods refers to a metric describing each pod in the current scale target (for example, transactions-processed-per-second).  The values will be averaged together before being compared to the target value. */
  readonly "pods"?: io$k8s$api$autoscaling$v2beta2$PodsMetricSource;
  /** resource refers to a resource metric (such as those specified in requests and limits) known to Kubernetes describing each pod in the current scale target (e.g. CPU or memory). Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source. */
  readonly "resource"?: io$k8s$api$autoscaling$v2beta2$ResourceMetricSource;
  /** type is the type of metric source.  It should be one of "Object", "Pods" or "Resource", each mapping to a matching field in the object. */
  readonly "type": string;
};

/** MetricStatus describes the last-read state of a single metric. */
export type io$k8s$api$autoscaling$v2beta2$MetricStatus = {
  /** external refers to a global metric that is not associated with any Kubernetes object. It allows autoscaling based on information coming from components running outside of cluster (for example length of queue in cloud messaging service, or QPS from loadbalancer running outside of cluster). */
  readonly "external"?: io$k8s$api$autoscaling$v2beta2$ExternalMetricStatus;
  /** object refers to a metric describing a single kubernetes object (for example, hits-per-second on an Ingress object). */
  readonly "object"?: io$k8s$api$autoscaling$v2beta2$ObjectMetricStatus;
  /** pods refers to a metric describing each pod in the current scale target (for example, transactions-processed-per-second).  The values will be averaged together before being compared to the target value. */
  readonly "pods"?: io$k8s$api$autoscaling$v2beta2$PodsMetricStatus;
  /** resource refers to a resource metric (such as those specified in requests and limits) known to Kubernetes describing each pod in the current scale target (e.g. CPU or memory). Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source. */
  readonly "resource"?: io$k8s$api$autoscaling$v2beta2$ResourceMetricStatus;
  /** type is the type of metric source.  It will be one of "Object", "Pods" or "Resource", each corresponds to a matching field in the object. */
  readonly "type": string;
};

/** MetricTarget defines the target value, average value, or average utilization of a specific metric */
export type io$k8s$api$autoscaling$v2beta2$MetricTarget = {
  /** averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods. Currently only valid for Resource metric source type */
  readonly "averageUtilization"?: number;
  /** averageValue is the target value of the average of the metric across all relevant pods (as a quantity) */
  readonly "averageValue"?: io$k8s$apimachinery$pkg$api$resource$Quantity;
  /** type represents whether the metric type is Utilization, Value, or AverageValue */
  readonly "type": string;
  /** value is the target value of the metric (as a quantity). */
  readonly "value"?: io$k8s$apimachinery$pkg$api$resource$Quantity;
};

/** MetricValueStatus holds the current value for a metric */
export type io$k8s$api$autoscaling$v2beta2$MetricValueStatus = {
  /** currentAverageUtilization is the current value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods. */
  readonly "averageUtilization"?: number;
  /** averageValue is the current value of the average of the metric across all relevant pods (as a quantity) */
  readonly "averageValue"?: io$k8s$apimachinery$pkg$api$resource$Quantity;
  /** value is the current value of the metric (as a quantity). */
  readonly "value"?: io$k8s$apimachinery$pkg$api$resource$Quantity;
};

/** ObjectMetricSource indicates how to scale on a metric describing a kubernetes object (for example, hits-per-second on an Ingress object). */
export type io$k8s$api$autoscaling$v2beta2$ObjectMetricSource = {
  readonly "describedObject":
    io$k8s$api$autoscaling$v2beta2$CrossVersionObjectReference;
  /** metric identifies the target metric by name and selector */
  readonly "metric": io$k8s$api$autoscaling$v2beta2$MetricIdentifier;
  /** target specifies the target value for the given metric */
  readonly "target": io$k8s$api$autoscaling$v2beta2$MetricTarget;
};

/** ObjectMetricStatus indicates the current value of a metric describing a kubernetes object (for example, hits-per-second on an Ingress object). */
export type io$k8s$api$autoscaling$v2beta2$ObjectMetricStatus = {
  /** current contains the current value for the given metric */
  readonly "current": io$k8s$api$autoscaling$v2beta2$MetricValueStatus;
  readonly "describedObject":
    io$k8s$api$autoscaling$v2beta2$CrossVersionObjectReference;
  /** metric identifies the target metric by name and selector */
  readonly "metric": io$k8s$api$autoscaling$v2beta2$MetricIdentifier;
};

/** PodsMetricSource indicates how to scale on a metric describing each pod in the current scale target (for example, transactions-processed-per-second). The values will be averaged together before being compared to the target value. */
export type io$k8s$api$autoscaling$v2beta2$PodsMetricSource = {
  /** metric identifies the target metric by name and selector */
  readonly "metric": io$k8s$api$autoscaling$v2beta2$MetricIdentifier;
  /** target specifies the target value for the given metric */
  readonly "target": io$k8s$api$autoscaling$v2beta2$MetricTarget;
};

/** PodsMetricStatus indicates the current value of a metric describing each pod in the current scale target (for example, transactions-processed-per-second). */
export type io$k8s$api$autoscaling$v2beta2$PodsMetricStatus = {
  /** current contains the current value for the given metric */
  readonly "current": io$k8s$api$autoscaling$v2beta2$MetricValueStatus;
  /** metric identifies the target metric by name and selector */
  readonly "metric": io$k8s$api$autoscaling$v2beta2$MetricIdentifier;
};

/** ResourceMetricSource indicates how to scale on a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  The values will be averaged together before being compared to the target.  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.  Only one "target" type should be set. */
export type io$k8s$api$autoscaling$v2beta2$ResourceMetricSource = {
  /** name is the name of the resource in question. */
  readonly "name": string;
  /** target specifies the target value for the given metric */
  readonly "target": io$k8s$api$autoscaling$v2beta2$MetricTarget;
};

/** ResourceMetricStatus indicates the current value of a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source. */
export type io$k8s$api$autoscaling$v2beta2$ResourceMetricStatus = {
  /** current contains the current value for the given metric */
  readonly "current": io$k8s$api$autoscaling$v2beta2$MetricValueStatus;
  /** Name is the name of the resource in question. */
  readonly "name": string;
};

/** Job represents the configuration of a single job. */
export type io$k8s$api$batch$v1$Job = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "Job";
  /** Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ObjectMeta;
  /** Specification of the desired behavior of a job. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status */
  readonly "spec"?: io$k8s$api$batch$v1$JobSpec;
  /** Current status of a job. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status */
  readonly "status"?: io$k8s$api$batch$v1$JobStatus;
};

/** JobCondition describes current state of a job. */
export type io$k8s$api$batch$v1$JobCondition = {
  /** Last time the condition was checked. */
  readonly "lastProbeTime"?: io$k8s$apimachinery$pkg$apis$meta$v1$Time;
  /** Last time the condition transit from one status to another. */
  readonly "lastTransitionTime"?: io$k8s$apimachinery$pkg$apis$meta$v1$Time;
  /** Human readable message indicating details about last transition. */
  readonly "message"?: string;
  /** (brief) reason for the condition's last transition. */
  readonly "reason"?: string;
  /** Status of the condition, one of True, False, Unknown. */
  readonly "status": string;
  /** Type of job condition, Complete or Failed. */
  readonly "type": string;
};

/** JobList is a collection of jobs. */
export type io$k8s$api$batch$v1$JobList = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** items is the list of Jobs. */
  readonly "items": readonly io$k8s$api$batch$v1$Job[];
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "JobList";
  /** Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ListMeta;
};

/** JobSpec describes how the job execution will look like. */
export type io$k8s$api$batch$v1$JobSpec = {
  /** Specifies the duration in seconds relative to the startTime that the job may be active before the system tries to terminate it; value must be positive integer */
  readonly "activeDeadlineSeconds"?: number;
  /** Specifies the number of retries before marking this job failed. Defaults to 6 */
  readonly "backoffLimit"?: number;
  /** Specifies the desired number of successfully finished pods the job should be run with.  Setting to nil means that the success of any pod signals the success of all pods, and allows parallelism to have any positive value.  Setting to 1 means that parallelism is limited to 1 and the success of that pod signals the success of the job. More info: https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/ */
  readonly "completions"?: number;
  /** manualSelector controls generation of pod labels and pod selectors. Leave `manualSelector` unset unless you are certain what you are doing. When false or unset, the system pick labels unique to this job and appends those labels to the pod template.  When true, the user is responsible for picking unique labels and specifying the selector.  Failure to pick a unique label may cause this and other jobs to not function correctly.  However, You may see `manualSelector=true` in jobs that were created with the old `extensions/v1beta1` API. More info: https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/#specifying-your-own-pod-selector */
  readonly "manualSelector"?: boolean;
  /** Specifies the maximum desired number of pods the job should run at any given time. The actual number of pods running in steady state will be less than this number when ((.spec.completions - .status.successful) < .spec.parallelism), i.e. when the work left to do is less than max parallelism. More info: https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/ */
  readonly "parallelism"?: number;
  /** A label query over pods that should match the pod count. Normally, the system sets this field for you. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#label-selectors */
  readonly "selector"?: io$k8s$apimachinery$pkg$apis$meta$v1$LabelSelector;
  /** Describes the pod that will be created when executing a job. More info: https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/ */
  readonly "template": io$k8s$api$core$v1$PodTemplateSpec;
  /** ttlSecondsAfterFinished limits the lifetime of a Job that has finished execution (either Complete or Failed). If this field is set, ttlSecondsAfterFinished after the Job finishes, it is eligible to be automatically deleted. When the Job is being deleted, its lifecycle guarantees (e.g. finalizers) will be honored. If this field is unset, the Job won't be automatically deleted. If this field is set to zero, the Job becomes eligible to be deleted immediately after it finishes. This field is alpha-level and is only honored by servers that enable the TTLAfterFinished feature. */
  readonly "ttlSecondsAfterFinished"?: number;
};

/** JobStatus represents the current state of a Job. */
export type io$k8s$api$batch$v1$JobStatus = {
  /** The number of actively running pods. */
  readonly "active"?: number;
  /** Represents time when the job was completed. It is not guaranteed to be set in happens-before order across separate operations. It is represented in RFC3339 form and is in UTC. */
  readonly "completionTime"?: io$k8s$apimachinery$pkg$apis$meta$v1$Time;
  /** The latest available observations of an object's current state. More info: https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/ */
  readonly "conditions"?: readonly io$k8s$api$batch$v1$JobCondition[];
  /** The number of pods which reached phase Failed. */
  readonly "failed"?: number;
  /** Represents time when the job was acknowledged by the job controller. It is not guaranteed to be set in happens-before order across separate operations. It is represented in RFC3339 form and is in UTC. */
  readonly "startTime"?: io$k8s$apimachinery$pkg$apis$meta$v1$Time;
  /** The number of pods which reached phase Succeeded. */
  readonly "succeeded"?: number;
};

/** CronJob represents the configuration of a single cron job. */
export type io$k8s$api$batch$v1beta1$CronJob = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "CronJob";
  /** Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ObjectMeta;
  /** Specification of the desired behavior of a cron job, including the schedule. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status */
  readonly "spec"?: io$k8s$api$batch$v1beta1$CronJobSpec;
  /** Current status of a cron job. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status */
  readonly "status"?: io$k8s$api$batch$v1beta1$CronJobStatus;
};

/** CronJobList is a collection of cron jobs. */
export type io$k8s$api$batch$v1beta1$CronJobList = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** items is the list of CronJobs. */
  readonly "items": readonly io$k8s$api$batch$v1beta1$CronJob[];
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "CronJobList";
  /** Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ListMeta;
};

/** CronJobSpec describes how the job execution will look like and when it will actually run. */
export type io$k8s$api$batch$v1beta1$CronJobSpec = {
  /** Specifies how to treat concurrent executions of a Job. Valid values are: - "Allow" (default): allows CronJobs to run concurrently; - "Forbid": forbids concurrent runs, skipping next run if previous run hasn't finished yet; - "Replace": cancels currently running job and replaces it with a new one */
  readonly "concurrencyPolicy"?: string;
  /** The number of failed finished jobs to retain. This is a pointer to distinguish between explicit zero and not specified. Defaults to 1. */
  readonly "failedJobsHistoryLimit"?: number;
  /** Specifies the job that will be created when executing a CronJob. */
  readonly "jobTemplate": io$k8s$api$batch$v1beta1$JobTemplateSpec;
  /** The schedule in Cron format, see https://en.wikipedia.org/wiki/Cron. */
  readonly "schedule": string;
  /** Optional deadline in seconds for starting the job if it misses scheduled time for any reason.  Missed jobs executions will be counted as failed ones. */
  readonly "startingDeadlineSeconds"?: number;
  /** The number of successful finished jobs to retain. This is a pointer to distinguish between explicit zero and not specified. Defaults to 3. */
  readonly "successfulJobsHistoryLimit"?: number;
  /** This flag tells the controller to suspend subsequent executions, it does not apply to already started executions.  Defaults to false. */
  readonly "suspend"?: boolean;
};

/** CronJobStatus represents the current state of a cron job. */
export type io$k8s$api$batch$v1beta1$CronJobStatus = {
  /** A list of pointers to currently running jobs. */
  readonly "active"?: readonly io$k8s$api$core$v1$ObjectReference[];
  /** Information when was the last time the job was successfully scheduled. */
  readonly "lastScheduleTime"?: io$k8s$apimachinery$pkg$apis$meta$v1$Time;
};

/** JobTemplateSpec describes the data a Job should have when created from a template */
export type io$k8s$api$batch$v1beta1$JobTemplateSpec = {
  /** Standard object's metadata of the jobs created from this template. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ObjectMeta;
  /** Specification of the desired behavior of the job. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status */
  readonly "spec"?: io$k8s$api$batch$v1$JobSpec;
};

/** Describes a certificate signing request */
export type io$k8s$api$certificates$v1beta1$CertificateSigningRequest = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "CertificateSigningRequest";
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ObjectMeta;
  /** The certificate request itself and any additional information. */
  readonly "spec"?:
    io$k8s$api$certificates$v1beta1$CertificateSigningRequestSpec;
  /** Derived information about the request. */
  readonly "status"?:
    io$k8s$api$certificates$v1beta1$CertificateSigningRequestStatus;
};

export type io$k8s$api$certificates$v1beta1$CertificateSigningRequestCondition =
  {
    /** timestamp for the last update to this condition */
    readonly "lastUpdateTime"?: io$k8s$apimachinery$pkg$apis$meta$v1$Time;
    /** human readable message with details about the request state */
    readonly "message"?: string;
    /** brief reason for the request state */
    readonly "reason"?: string;
    /** request approval state, currently Approved or Denied. */
    readonly "type": string;
  };

export type io$k8s$api$certificates$v1beta1$CertificateSigningRequestList = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  readonly "items":
    readonly io$k8s$api$certificates$v1beta1$CertificateSigningRequest[];
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "CertificateSigningRequestList";
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ListMeta;
};

/** This information is immutable after the request is created. Only the Request and Usages fields can be set on creation, other fields are derived by Kubernetes and cannot be modified by users. */
export type io$k8s$api$certificates$v1beta1$CertificateSigningRequestSpec = {
  /** Extra information about the requesting user. See user.Info interface for details. */
  readonly "extra"?: object;
  /** Group information about the requesting user. See user.Info interface for details. */
  readonly "groups"?: readonly string[];
  /** Base64-encoded PKCS#10 CSR data */
  readonly "request": string;
  /** UID information about the requesting user. See user.Info interface for details. */
  readonly "uid"?: string;
  /** allowedUsages specifies a set of usage contexts the key will be valid for. See: https://tools.ietf.org/html/rfc5280#section-4.2.1.3
     https://tools.ietf.org/html/rfc5280#section-4.2.1.12 */
  readonly "usages"?: readonly string[];
  /** Information about the requesting user. See user.Info interface for details. */
  readonly "username"?: string;
};

export type io$k8s$api$certificates$v1beta1$CertificateSigningRequestStatus = {
  /** If request was approved, the controller will place the issued certificate here. */
  readonly "certificate"?: string;
  /** Conditions applied to the request, such as approval or denial. */
  readonly "conditions"?:
    readonly io$k8s$api$certificates$v1beta1$CertificateSigningRequestCondition[];
};

/** Lease defines a lease concept. */
export type io$k8s$api$coordination$v1$Lease = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "Lease";
  /** More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ObjectMeta;
  /** Specification of the Lease. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status */
  readonly "spec"?: io$k8s$api$coordination$v1$LeaseSpec;
};

/** LeaseList is a list of Lease objects. */
export type io$k8s$api$coordination$v1$LeaseList = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Items is a list of schema objects. */
  readonly "items": readonly io$k8s$api$coordination$v1$Lease[];
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "LeaseList";
  /** Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ListMeta;
};

/** LeaseSpec is a specification of a Lease. */
export type io$k8s$api$coordination$v1$LeaseSpec = {
  /** acquireTime is a time when the current lease was acquired. */
  readonly "acquireTime"?: io$k8s$apimachinery$pkg$apis$meta$v1$MicroTime;
  /** holderIdentity contains the identity of the holder of a current lease. */
  readonly "holderIdentity"?: string;
  /** leaseDurationSeconds is a duration that candidates for a lease need to wait to force acquire it. This is measure against time of last observed RenewTime. */
  readonly "leaseDurationSeconds"?: number;
  /** leaseTransitions is the number of transitions of a lease between holders. */
  readonly "leaseTransitions"?: number;
  /** renewTime is a time when the current holder of a lease has last updated the lease. */
  readonly "renewTime"?: io$k8s$apimachinery$pkg$apis$meta$v1$MicroTime;
};

/** Lease defines a lease concept. */
export type io$k8s$api$coordination$v1beta1$Lease = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "Lease";
  /** More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ObjectMeta;
  /** Specification of the Lease. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status */
  readonly "spec"?: io$k8s$api$coordination$v1beta1$LeaseSpec;
};

/** LeaseList is a list of Lease objects. */
export type io$k8s$api$coordination$v1beta1$LeaseList = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Items is a list of schema objects. */
  readonly "items": readonly io$k8s$api$coordination$v1beta1$Lease[];
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "LeaseList";
  /** Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ListMeta;
};

/** LeaseSpec is a specification of a Lease. */
export type io$k8s$api$coordination$v1beta1$LeaseSpec = {
  /** acquireTime is a time when the current lease was acquired. */
  readonly "acquireTime"?: io$k8s$apimachinery$pkg$apis$meta$v1$MicroTime;
  /** holderIdentity contains the identity of the holder of a current lease. */
  readonly "holderIdentity"?: string;
  /** leaseDurationSeconds is a duration that candidates for a lease need to wait to force acquire it. This is measure against time of last observed RenewTime. */
  readonly "leaseDurationSeconds"?: number;
  /** leaseTransitions is the number of transitions of a lease between holders. */
  readonly "leaseTransitions"?: number;
  /** renewTime is a time when the current holder of a lease has last updated the lease. */
  readonly "renewTime"?: io$k8s$apimachinery$pkg$apis$meta$v1$MicroTime;
};

/** Represents a Persistent Disk resource in AWS.

An AWS EBS disk must exist before mounting to a container. The disk must also be in the same AWS zone as the kubelet. An AWS EBS disk can only be mounted as read/write once. AWS EBS volumes support ownership management and SELinux relabeling. */
export type io$k8s$api$core$v1$AWSElasticBlockStoreVolumeSource = {
  /** Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore */
  readonly "fsType"?: string;
  /** The partition in the volume that you want to mount. If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as "1". Similarly, the volume partition for /dev/sda is "0" (or you can leave the property empty). */
  readonly "partition"?: number;
  /** Specify "true" to force and set the ReadOnly property in VolumeMounts to "true". If omitted, the default is "false". More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore */
  readonly "readOnly"?: boolean;
  /** Unique ID of the persistent disk resource in AWS (Amazon EBS volume). More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore */
  readonly "volumeID": string;
};

/** Affinity is a group of affinity scheduling rules. */
export type io$k8s$api$core$v1$Affinity = {
  /** Describes node affinity scheduling rules for the pod. */
  readonly "nodeAffinity"?: io$k8s$api$core$v1$NodeAffinity;
  /** Describes pod affinity scheduling rules (e.g. co-locate this pod in the same node, zone, etc. as some other pod(s)). */
  readonly "podAffinity"?: io$k8s$api$core$v1$PodAffinity;
  /** Describes pod anti-affinity scheduling rules (e.g. avoid putting this pod in the same node, zone, etc. as some other pod(s)). */
  readonly "podAntiAffinity"?: io$k8s$api$core$v1$PodAntiAffinity;
};

/** AttachedVolume describes a volume attached to a node */
export type io$k8s$api$core$v1$AttachedVolume = {
  /** DevicePath represents the device path where the volume should be available */
  readonly "devicePath": string;
  /** Name of the attached volume */
  readonly "name": string;
};

/** AzureDisk represents an Azure Data Disk mount on the host and bind mount to the pod. */
export type io$k8s$api$core$v1$AzureDiskVolumeSource = {
  /** Host Caching mode: None, Read Only, Read Write. */
  readonly "cachingMode"?: string;
  /** The Name of the data disk in the blob storage */
  readonly "diskName": string;
  /** The URI the data disk in the blob storage */
  readonly "diskURI": string;
  /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. */
  readonly "fsType"?: string;
  /** Expected values Shared: multiple blob disks per storage account  Dedicated: single blob disk per storage account  Managed: azure managed data disk (only in managed availability set). defaults to shared */
  readonly "kind"?: "AzureDiskVolumeSource";
  /** Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. */
  readonly "readOnly"?: boolean;
};

/** AzureFile represents an Azure File Service mount on the host and bind mount to the pod. */
export type io$k8s$api$core$v1$AzureFilePersistentVolumeSource = {
  /** Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. */
  readonly "readOnly"?: boolean;
  /** the name of secret that contains Azure Storage Account Name and Key */
  readonly "secretName": string;
  /** the namespace of the secret that contains Azure Storage Account Name and Key default is the same as the Pod */
  readonly "secretNamespace"?: string;
  /** Share Name */
  readonly "shareName": string;
};

/** AzureFile represents an Azure File Service mount on the host and bind mount to the pod. */
export type io$k8s$api$core$v1$AzureFileVolumeSource = {
  /** Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. */
  readonly "readOnly"?: boolean;
  /** the name of secret that contains Azure Storage Account Name and Key */
  readonly "secretName": string;
  /** Share Name */
  readonly "shareName": string;
};

/** Binding ties one object to another; for example, a pod is bound to a node by a scheduler. Deprecated in 1.7, please use the bindings subresource of pods instead. */
export type io$k8s$api$core$v1$Binding = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "Binding";
  /** Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ObjectMeta;
  /** The target object that you want to bind to the standard object. */
  readonly "target": io$k8s$api$core$v1$ObjectReference;
};

/** Represents storage that is managed by an external CSI volume driver (Beta feature) */
export type io$k8s$api$core$v1$CSIPersistentVolumeSource = {
  /** ControllerExpandSecretRef is a reference to the secret object containing sensitive information to pass to the CSI driver to complete the CSI ControllerExpandVolume call. This is an alpha field and requires enabling ExpandCSIVolumes feature gate. This field is optional, and may be empty if no secret is required. If the secret object contains more than one secret, all secrets are passed. */
  readonly "controllerExpandSecretRef"?: io$k8s$api$core$v1$SecretReference;
  /** ControllerPublishSecretRef is a reference to the secret object containing sensitive information to pass to the CSI driver to complete the CSI ControllerPublishVolume and ControllerUnpublishVolume calls. This field is optional, and may be empty if no secret is required. If the secret object contains more than one secret, all secrets are passed. */
  readonly "controllerPublishSecretRef"?: io$k8s$api$core$v1$SecretReference;
  /** Driver is the name of the driver to use for this volume. Required. */
  readonly "driver": string;
  /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". */
  readonly "fsType"?: string;
  /** NodePublishSecretRef is a reference to the secret object containing sensitive information to pass to the CSI driver to complete the CSI NodePublishVolume and NodeUnpublishVolume calls. This field is optional, and may be empty if no secret is required. If the secret object contains more than one secret, all secrets are passed. */
  readonly "nodePublishSecretRef"?: io$k8s$api$core$v1$SecretReference;
  /** NodeStageSecretRef is a reference to the secret object containing sensitive information to pass to the CSI driver to complete the CSI NodeStageVolume and NodeStageVolume and NodeUnstageVolume calls. This field is optional, and may be empty if no secret is required. If the secret object contains more than one secret, all secrets are passed. */
  readonly "nodeStageSecretRef"?: io$k8s$api$core$v1$SecretReference;
  /** Optional: The value to pass to ControllerPublishVolumeRequest. Defaults to false (read/write). */
  readonly "readOnly"?: boolean;
  /** Attributes of the volume to publish. */
  readonly "volumeAttributes"?: object;
  /** VolumeHandle is the unique volume name returned by the CSI volume plugin’s CreateVolume to refer to the volume on all subsequent calls. Required. */
  readonly "volumeHandle": string;
};

/** Represents a source location of a volume to mount, managed by an external CSI driver */
export type io$k8s$api$core$v1$CSIVolumeSource = {
  /** Driver is the name of the CSI driver that handles this volume. Consult with your admin for the correct name as registered in the cluster. */
  readonly "driver": string;
  /** Filesystem type to mount. Ex. "ext4", "xfs", "ntfs". If not provided, the empty value is passed to the associated CSI driver which will determine the default filesystem to apply. */
  readonly "fsType"?: string;
  /** NodePublishSecretRef is a reference to the secret object containing sensitive information to pass to the CSI driver to complete the CSI NodePublishVolume and NodeUnpublishVolume calls. This field is optional, and  may be empty if no secret is required. If the secret object contains more than one secret, all secret references are passed. */
  readonly "nodePublishSecretRef"?: io$k8s$api$core$v1$LocalObjectReference;
  /** Specifies a read-only configuration for the volume. Defaults to false (read/write). */
  readonly "readOnly"?: boolean;
  /** VolumeAttributes stores driver-specific properties that are passed to the CSI driver. Consult your driver's documentation for supported values. */
  readonly "volumeAttributes"?: object;
};

/** Adds and removes POSIX capabilities from running containers. */
export type io$k8s$api$core$v1$Capabilities = {
  /** Added capabilities */
  readonly "add"?: readonly string[];
  /** Removed capabilities */
  readonly "drop"?: readonly string[];
};

/** Represents a Ceph Filesystem mount that lasts the lifetime of a pod Cephfs volumes do not support ownership management or SELinux relabeling. */
export type io$k8s$api$core$v1$CephFSPersistentVolumeSource = {
  /** Required: Monitors is a collection of Ceph monitors More info: https://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it */
  readonly "monitors": readonly string[];
  /** Optional: Used as the mounted root, rather than the full Ceph tree, default is / */
  readonly "path"?: string;
  /** Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. More info: https://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it */
  readonly "readOnly"?: boolean;
  /** Optional: SecretFile is the path to key ring for User, default is /etc/ceph/user.secret More info: https://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it */
  readonly "secretFile"?: string;
  /** Optional: SecretRef is reference to the authentication secret for User, default is empty. More info: https://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it */
  readonly "secretRef"?: io$k8s$api$core$v1$SecretReference;
  /** Optional: User is the rados user name, default is admin More info: https://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it */
  readonly "user"?: string;
};

/** Represents a Ceph Filesystem mount that lasts the lifetime of a pod Cephfs volumes do not support ownership management or SELinux relabeling. */
export type io$k8s$api$core$v1$CephFSVolumeSource = {
  /** Required: Monitors is a collection of Ceph monitors More info: https://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it */
  readonly "monitors": readonly string[];
  /** Optional: Used as the mounted root, rather than the full Ceph tree, default is / */
  readonly "path"?: string;
  /** Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. More info: https://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it */
  readonly "readOnly"?: boolean;
  /** Optional: SecretFile is the path to key ring for User, default is /etc/ceph/user.secret More info: https://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it */
  readonly "secretFile"?: string;
  /** Optional: SecretRef is reference to the authentication secret for User, default is empty. More info: https://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it */
  readonly "secretRef"?: io$k8s$api$core$v1$LocalObjectReference;
  /** Optional: User is the rados user name, default is admin More info: https://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it */
  readonly "user"?: string;
};

/** Represents a cinder volume resource in Openstack. A Cinder volume must exist before mounting to a container. The volume must also be in the same region as the kubelet. Cinder volumes support ownership management and SELinux relabeling. */
export type io$k8s$api$core$v1$CinderPersistentVolumeSource = {
  /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://releases.k8s.io/HEAD/examples/mysql-cinder-pd/README.md */
  readonly "fsType"?: string;
  /** Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. More info: https://releases.k8s.io/HEAD/examples/mysql-cinder-pd/README.md */
  readonly "readOnly"?: boolean;
  /** Optional: points to a secret object containing parameters used to connect to OpenStack. */
  readonly "secretRef"?: io$k8s$api$core$v1$SecretReference;
  /** volume id used to identify the volume in cinder More info: https://releases.k8s.io/HEAD/examples/mysql-cinder-pd/README.md */
  readonly "volumeID": string;
};

/** Represents a cinder volume resource in Openstack. A Cinder volume must exist before mounting to a container. The volume must also be in the same region as the kubelet. Cinder volumes support ownership management and SELinux relabeling. */
export type io$k8s$api$core$v1$CinderVolumeSource = {
  /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://releases.k8s.io/HEAD/examples/mysql-cinder-pd/README.md */
  readonly "fsType"?: string;
  /** Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. More info: https://releases.k8s.io/HEAD/examples/mysql-cinder-pd/README.md */
  readonly "readOnly"?: boolean;
  /** Optional: points to a secret object containing parameters used to connect to OpenStack. */
  readonly "secretRef"?: io$k8s$api$core$v1$LocalObjectReference;
  /** volume id used to identify the volume in cinder More info: https://releases.k8s.io/HEAD/examples/mysql-cinder-pd/README.md */
  readonly "volumeID": string;
};

/** ClientIPConfig represents the configurations of Client IP based session affinity. */
export type io$k8s$api$core$v1$ClientIPConfig = {
  /** timeoutSeconds specifies the seconds of ClientIP type session sticky time. The value must be >0 && <=86400(for 1 day) if ServiceAffinity == "ClientIP". Default value is 10800(for 3 hours). */
  readonly "timeoutSeconds"?: number;
};

/** Information about the condition of a component. */
export type io$k8s$api$core$v1$ComponentCondition = {
  /** Condition error code for a component. For example, a health check error code. */
  readonly "error"?: string;
  /** Message about the condition for a component. For example, information about a health check. */
  readonly "message"?: string;
  /** Status of the condition for a component. Valid values for "Healthy": "True", "False", or "Unknown". */
  readonly "status": string;
  /** Type of condition for a component. Valid value: "Healthy" */
  readonly "type": string;
};

/** ComponentStatus (and ComponentStatusList) holds the cluster validation info. */
export type io$k8s$api$core$v1$ComponentStatus = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** List of component conditions observed */
  readonly "conditions"?: readonly io$k8s$api$core$v1$ComponentCondition[];
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "ComponentStatus";
  /** Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ObjectMeta;
};

/** Status of all the conditions for the component as a list of ComponentStatus objects. */
export type io$k8s$api$core$v1$ComponentStatusList = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** List of ComponentStatus objects. */
  readonly "items": readonly io$k8s$api$core$v1$ComponentStatus[];
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "ComponentStatusList";
  /** Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ListMeta;
};

/** ConfigMap holds configuration data for pods to consume. */
export type io$k8s$api$core$v1$ConfigMap = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** BinaryData contains the binary data. Each key must consist of alphanumeric characters, '-', '_' or '.'. BinaryData can contain byte sequences that are not in the UTF-8 range. The keys stored in BinaryData must not overlap with the ones in the Data field, this is enforced during validation process. Using this field will require 1.10+ apiserver and kubelet. */
  readonly "binaryData"?: object;
  /** Data contains the configuration data. Each key must consist of alphanumeric characters, '-', '_' or '.'. Values with non-UTF-8 byte sequences must use the BinaryData field. The keys stored in Data must not overlap with the keys in the BinaryData field, this is enforced during validation process. */
  readonly "data"?: object;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "ConfigMap";
  /** Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ObjectMeta;
};

/** ConfigMapEnvSource selects a ConfigMap to populate the environment variables with.

The contents of the target ConfigMap's Data field will represent the key-value pairs as environment variables. */
export type io$k8s$api$core$v1$ConfigMapEnvSource = {
  /** Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
  readonly "name"?: string;
  /** Specify whether the ConfigMap must be defined */
  readonly "optional"?: boolean;
};

/** Selects a key from a ConfigMap. */
export type io$k8s$api$core$v1$ConfigMapKeySelector = {
  /** The key to select. */
  readonly "key": string;
  /** Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
  readonly "name"?: string;
  /** Specify whether the ConfigMap or its key must be defined */
  readonly "optional"?: boolean;
};

/** ConfigMapList is a resource containing a list of ConfigMap objects. */
export type io$k8s$api$core$v1$ConfigMapList = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Items is the list of ConfigMaps. */
  readonly "items": readonly io$k8s$api$core$v1$ConfigMap[];
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "ConfigMapList";
  /** More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ListMeta;
};

/** ConfigMapNodeConfigSource contains the information to reference a ConfigMap as a config source for the Node. */
export type io$k8s$api$core$v1$ConfigMapNodeConfigSource = {
  /** KubeletConfigKey declares which key of the referenced ConfigMap corresponds to the KubeletConfiguration structure This field is required in all cases. */
  readonly "kubeletConfigKey": string;
  /** Name is the metadata.name of the referenced ConfigMap. This field is required in all cases. */
  readonly "name": string;
  /** Namespace is the metadata.namespace of the referenced ConfigMap. This field is required in all cases. */
  readonly "namespace": string;
  /** ResourceVersion is the metadata.ResourceVersion of the referenced ConfigMap. This field is forbidden in Node.Spec, and required in Node.Status. */
  readonly "resourceVersion"?: string;
  /** UID is the metadata.UID of the referenced ConfigMap. This field is forbidden in Node.Spec, and required in Node.Status. */
  readonly "uid"?: string;
};

/** Adapts a ConfigMap into a projected volume.

The contents of the target ConfigMap's Data field will be presented in a projected volume as files using the keys in the Data field as the file names, unless the items element is populated with specific mappings of keys to paths. Note that this is identical to a configmap volume source without the default mode. */
export type io$k8s$api$core$v1$ConfigMapProjection = {
  /** If unspecified, each key-value pair in the Data field of the referenced ConfigMap will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the ConfigMap, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'. */
  readonly "items"?: readonly io$k8s$api$core$v1$KeyToPath[];
  /** Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
  readonly "name"?: string;
  /** Specify whether the ConfigMap or its keys must be defined */
  readonly "optional"?: boolean;
};

/** Adapts a ConfigMap into a volume.

The contents of the target ConfigMap's Data field will be presented in a volume as files using the keys in the Data field as the file names, unless the items element is populated with specific mappings of keys to paths. ConfigMap volumes support ownership management and SELinux relabeling. */
export type io$k8s$api$core$v1$ConfigMapVolumeSource = {
  /** Optional: mode bits to use on created files by default. Must be a value between 0 and 0777. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
  readonly "defaultMode"?: number;
  /** If unspecified, each key-value pair in the Data field of the referenced ConfigMap will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the ConfigMap, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'. */
  readonly "items"?: readonly io$k8s$api$core$v1$KeyToPath[];
  /** Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
  readonly "name"?: string;
  /** Specify whether the ConfigMap or its keys must be defined */
  readonly "optional"?: boolean;
};

/** A single application container that you want to run within a pod. */
export type io$k8s$api$core$v1$Container = {
  /** Arguments to the entrypoint. The docker image's CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell */
  readonly "args"?: readonly string[];
  /** Entrypoint array. Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell */
  readonly "command"?: readonly string[];
  /** List of environment variables to set in the container. Cannot be updated. */
  readonly "env"?: readonly io$k8s$api$core$v1$EnvVar[];
  /** List of sources to populate environment variables in the container. The keys defined within a source must be a C_IDENTIFIER. All invalid keys will be reported as an event when the container is starting. When a key exists in multiple sources, the value associated with the last source will take precedence. Values defined by an Env with a duplicate key will take precedence. Cannot be updated. */
  readonly "envFrom"?: readonly io$k8s$api$core$v1$EnvFromSource[];
  /** Docker image name. More info: https://kubernetes.io/docs/concepts/containers/images This field is optional to allow higher level config management to default or override container images in workload controllers like Deployments and StatefulSets. */
  readonly "image"?: string;
  /** Image pull policy. One of Always, Never, IfNotPresent. Defaults to Always if :latest tag is specified, or IfNotPresent otherwise. Cannot be updated. More info: https://kubernetes.io/docs/concepts/containers/images#updating-images */
  readonly "imagePullPolicy"?: string;
  /** Actions that the management system should take in response to container lifecycle events. Cannot be updated. */
  readonly "lifecycle"?: io$k8s$api$core$v1$Lifecycle;
  /** Periodic probe of container liveness. Container will be restarted if the probe fails. Cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes */
  readonly "livenessProbe"?: io$k8s$api$core$v1$Probe;
  /** Name of the container specified as a DNS_LABEL. Each container in a pod must have a unique name (DNS_LABEL). Cannot be updated. */
  readonly "name": string;
  /** List of ports to expose from the container. Exposing a port here gives the system additional information about the network connections a container uses, but is primarily informational. Not specifying a port here DOES NOT prevent that port from being exposed. Any port which is listening on the default "0.0.0.0" address inside a container will be accessible from the network. Cannot be updated. */
  readonly "ports"?: readonly io$k8s$api$core$v1$ContainerPort[];
  /** Periodic probe of container service readiness. Container will be removed from service endpoints if the probe fails. Cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes */
  readonly "readinessProbe"?: io$k8s$api$core$v1$Probe;
  /** Compute Resources required by this container. Cannot be updated. More info: https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/ */
  readonly "resources"?: io$k8s$api$core$v1$ResourceRequirements;
  /** Security options the pod should run with. More info: https://kubernetes.io/docs/concepts/policy/security-context/ More info: https://kubernetes.io/docs/tasks/configure-pod-container/security-context/ */
  readonly "securityContext"?: io$k8s$api$core$v1$SecurityContext;
  /** Whether this container should allocate a buffer for stdin in the container runtime. If this is not set, reads from stdin in the container will always result in EOF. Default is false. */
  readonly "stdin"?: boolean;
  /** Whether the container runtime should close the stdin channel after it has been opened by a single attach. When stdin is true the stdin stream will remain open across multiple attach sessions. If stdinOnce is set to true, stdin is opened on container start, is empty until the first client attaches to stdin, and then remains open and accepts data until the client disconnects, at which time stdin is closed and remains closed until the container is restarted. If this flag is false, a container processes that reads from stdin will never receive an EOF. Default is false */
  readonly "stdinOnce"?: boolean;
  /** Optional: Path at which the file to which the container's termination message will be written is mounted into the container's filesystem. Message written is intended to be brief final status, such as an assertion failure message. Will be truncated by the node if greater than 4096 bytes. The total message length across all containers will be limited to 12kb. Defaults to /dev/termination-log. Cannot be updated. */
  readonly "terminationMessagePath"?: string;
  /** Indicate how the termination message should be populated. File will use the contents of terminationMessagePath to populate the container status message on both success and failure. FallbackToLogsOnError will use the last chunk of container log output if the termination message file is empty and the container exited with an error. The log output is limited to 2048 bytes or 80 lines, whichever is smaller. Defaults to File. Cannot be updated. */
  readonly "terminationMessagePolicy"?: string;
  /** Whether this container should allocate a TTY for itself, also requires 'stdin' to be true. Default is false. */
  readonly "tty"?: boolean;
  /** volumeDevices is the list of block devices to be used by the container. This is a beta feature. */
  readonly "volumeDevices"?: readonly io$k8s$api$core$v1$VolumeDevice[];
  /** Pod volumes to mount into the container's filesystem. Cannot be updated. */
  readonly "volumeMounts"?: readonly io$k8s$api$core$v1$VolumeMount[];
  /** Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image. Cannot be updated. */
  readonly "workingDir"?: string;
};

/** Describe a container image */
export type io$k8s$api$core$v1$ContainerImage = {
  /** Names by which this image is known. e.g. ["k8s.gcr.io/hyperkube:v1.0.7", "dockerhub.io/google_containers/hyperkube:v1.0.7"] */
  readonly "names": readonly string[];
  /** The size of the image in bytes. */
  readonly "sizeBytes"?: number;
};

/** ContainerPort represents a network port in a single container. */
export type io$k8s$api$core$v1$ContainerPort = {
  /** Number of port to expose on the pod's IP address. This must be a valid port number, 0 < x < 65536. */
  readonly "containerPort": number;
  /** What host IP to bind the external port to. */
  readonly "hostIP"?: string;
  /** Number of port to expose on the host. If specified, this must be a valid port number, 0 < x < 65536. If HostNetwork is specified, this must match ContainerPort. Most containers do not need this. */
  readonly "hostPort"?: number;
  /** If specified, this must be an IANA_SVC_NAME and unique within the pod. Each named port in a pod must have a unique name. Name for the port that can be referred to by services. */
  readonly "name"?: string;
  /** Protocol for port. Must be UDP, TCP, or SCTP. Defaults to "TCP". */
  readonly "protocol"?: string;
};

/** ContainerState holds a possible state of container. Only one of its members may be specified. If none of them is specified, the default one is ContainerStateWaiting. */
export type io$k8s$api$core$v1$ContainerState = {
  /** Details about a running container */
  readonly "running"?: io$k8s$api$core$v1$ContainerStateRunning;
  /** Details about a terminated container */
  readonly "terminated"?: io$k8s$api$core$v1$ContainerStateTerminated;
  /** Details about a waiting container */
  readonly "waiting"?: io$k8s$api$core$v1$ContainerStateWaiting;
};

/** ContainerStateRunning is a running state of a container. */
export type io$k8s$api$core$v1$ContainerStateRunning = {
  /** Time at which the container was last (re-)started */
  readonly "startedAt"?: io$k8s$apimachinery$pkg$apis$meta$v1$Time;
};

/** ContainerStateTerminated is a terminated state of a container. */
export type io$k8s$api$core$v1$ContainerStateTerminated = {
  /** Container's ID in the format 'docker://<container_id>' */
  readonly "containerID"?: string;
  /** Exit status from the last termination of the container */
  readonly "exitCode": number;
  /** Time at which the container last terminated */
  readonly "finishedAt"?: io$k8s$apimachinery$pkg$apis$meta$v1$Time;
  /** Message regarding the last termination of the container */
  readonly "message"?: string;
  /** (brief) reason from the last termination of the container */
  readonly "reason"?: string;
  /** Signal from the last termination of the container */
  readonly "signal"?: number;
  /** Time at which previous execution of the container started */
  readonly "startedAt"?: io$k8s$apimachinery$pkg$apis$meta$v1$Time;
};

/** ContainerStateWaiting is a waiting state of a container. */
export type io$k8s$api$core$v1$ContainerStateWaiting = {
  /** Message regarding why the container is not yet running. */
  readonly "message"?: string;
  /** (brief) reason the container is not yet running. */
  readonly "reason"?: string;
};

/** ContainerStatus contains details for the current status of this container. */
export type io$k8s$api$core$v1$ContainerStatus = {
  /** Container's ID in the format 'docker://<container_id>'. */
  readonly "containerID"?: string;
  /** The image the container is running. More info: https://kubernetes.io/docs/concepts/containers/images */
  readonly "image": string;
  /** ImageID of the container's image. */
  readonly "imageID": string;
  /** Details about the container's last termination condition. */
  readonly "lastState"?: io$k8s$api$core$v1$ContainerState;
  /** This must be a DNS_LABEL. Each container in a pod must have a unique name. Cannot be updated. */
  readonly "name": string;
  /** Specifies whether the container has passed its readiness probe. */
  readonly "ready": boolean;
  /** The number of times the container has been restarted, currently based on the number of dead containers that have not yet been removed. Note that this is calculated from dead containers. But those containers are subject to garbage collection. This value will get capped at 5 by GC. */
  readonly "restartCount": number;
  /** Details about the container's current condition. */
  readonly "state"?: io$k8s$api$core$v1$ContainerState;
};

/** DaemonEndpoint contains information about a single Daemon endpoint. */
export type io$k8s$api$core$v1$DaemonEndpoint = {
  /** Port number of the given endpoint. */
  readonly "Port": number;
};

/** Represents downward API info for projecting into a projected volume. Note that this is identical to a downwardAPI volume source without the default mode. */
export type io$k8s$api$core$v1$DownwardAPIProjection = {
  /** Items is a list of DownwardAPIVolume file */
  readonly "items"?: readonly io$k8s$api$core$v1$DownwardAPIVolumeFile[];
};

/** DownwardAPIVolumeFile represents information to create the file containing the pod field */
export type io$k8s$api$core$v1$DownwardAPIVolumeFile = {
  /** Required: Selects a field of the pod: only annotations, labels, name and namespace are supported. */
  readonly "fieldRef"?: io$k8s$api$core$v1$ObjectFieldSelector;
  /** Optional: mode bits to use on this file, must be a value between 0 and 0777. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
  readonly "mode"?: number;
  /** Required: Path is  the relative path name of the file to be created. Must not be absolute or contain the '..' path. Must be utf-8 encoded. The first item of the relative path must not start with '..' */
  readonly "path": string;
  /** Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, requests.cpu and requests.memory) are currently supported. */
  readonly "resourceFieldRef"?: io$k8s$api$core$v1$ResourceFieldSelector;
};

/** DownwardAPIVolumeSource represents a volume containing downward API info. Downward API volumes support ownership management and SELinux relabeling. */
export type io$k8s$api$core$v1$DownwardAPIVolumeSource = {
  /** Optional: mode bits to use on created files by default. Must be a value between 0 and 0777. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
  readonly "defaultMode"?: number;
  /** Items is a list of downward API volume file */
  readonly "items"?: readonly io$k8s$api$core$v1$DownwardAPIVolumeFile[];
};

/** Represents an empty directory for a pod. Empty directory volumes support ownership management and SELinux relabeling. */
export type io$k8s$api$core$v1$EmptyDirVolumeSource = {
  /** What type of storage medium should back this directory. The default is "" which means to use the node's default medium. Must be an empty string (default) or Memory. More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir */
  readonly "medium"?: string;
  /** Total amount of local storage required for this EmptyDir volume. The size limit is also applicable for memory medium. The maximum usage on memory medium EmptyDir would be the minimum value between the SizeLimit specified here and the sum of memory limits of all containers in a pod. The default is nil which means that the limit is undefined. More info: http://kubernetes.io/docs/user-guide/volumes#emptydir */
  readonly "sizeLimit"?: io$k8s$apimachinery$pkg$api$resource$Quantity;
};

/** EndpointAddress is a tuple that describes single IP address. */
export type io$k8s$api$core$v1$EndpointAddress = {
  /** The Hostname of this endpoint */
  readonly "hostname"?: string;
  /** The IP of this endpoint. May not be loopback (127.0.0.0/8), link-local (169.254.0.0/16), or link-local multicast ((224.0.0.0/24). IPv6 is also accepted but not fully supported on all platforms. Also, certain kubernetes components, like kube-proxy, are not IPv6 ready. */
  readonly "ip": string;
  /** Optional: Node hosting this endpoint. This can be used to determine endpoints local to a node. */
  readonly "nodeName"?: string;
  /** Reference to object providing the endpoint. */
  readonly "targetRef"?: io$k8s$api$core$v1$ObjectReference;
};

/** EndpointPort is a tuple that describes a single port. */
export type io$k8s$api$core$v1$EndpointPort = {
  /** The name of this port (corresponds to ServicePort.Name). Must be a DNS_LABEL. Optional only if one port is defined. */
  readonly "name"?: string;
  /** The port number of the endpoint. */
  readonly "port": number;
  /** The IP protocol for this port. Must be UDP, TCP, or SCTP. Default is TCP. */
  readonly "protocol"?: string;
};

/** EndpointSubset is a group of addresses with a common set of ports. The expanded set of endpoints is the Cartesian product of Addresses x Ports. For example, given:
  {
    Addresses: [{"ip": "10.10.1.1"}, {"ip": "10.10.2.2"}],
    Ports:     [{"name": "a", "port": 8675}, {"name": "b", "port": 309}]
  }
The resulting set of endpoints can be viewed as:
    a: [ 10.10.1.1:8675, 10.10.2.2:8675 ],
    b: [ 10.10.1.1:309, 10.10.2.2:309 ] */
export type io$k8s$api$core$v1$EndpointSubset = {
  /** IP addresses which offer the related ports that are marked as ready. These endpoints should be considered safe for load balancers and clients to utilize. */
  readonly "addresses"?: readonly io$k8s$api$core$v1$EndpointAddress[];
  /** IP addresses which offer the related ports but are not currently marked as ready because they have not yet finished starting, have recently failed a readiness check, or have recently failed a liveness check. */
  readonly "notReadyAddresses"?: readonly io$k8s$api$core$v1$EndpointAddress[];
  /** Port numbers available on the related IP addresses. */
  readonly "ports"?: readonly io$k8s$api$core$v1$EndpointPort[];
};

/** Endpoints is a collection of endpoints that implement the actual service. Example:
  Name: "mysvc",
  Subsets: [
    {
      Addresses: [{"ip": "10.10.1.1"}, {"ip": "10.10.2.2"}],
      Ports: [{"name": "a", "port": 8675}, {"name": "b", "port": 309}]
    },
    {
      Addresses: [{"ip": "10.10.3.3"}],
      Ports: [{"name": "a", "port": 93}, {"name": "b", "port": 76}]
    },
 ] */
export type io$k8s$api$core$v1$Endpoints = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "Endpoints";
  /** Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ObjectMeta;
  /** The set of all endpoints is the union of all subsets. Addresses are placed into subsets according to the IPs they share. A single address with multiple ports, some of which are ready and some of which are not (because they come from different containers) will result in the address being displayed in different subsets for the different ports. No address will appear in both Addresses and NotReadyAddresses in the same subset. Sets of addresses and ports that comprise a service. */
  readonly "subsets"?: readonly io$k8s$api$core$v1$EndpointSubset[];
};

/** EndpointsList is a list of endpoints. */
export type io$k8s$api$core$v1$EndpointsList = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** List of endpoints. */
  readonly "items": readonly io$k8s$api$core$v1$Endpoints[];
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "EndpointsList";
  /** Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ListMeta;
};

/** EnvFromSource represents the source of a set of ConfigMaps */
export type io$k8s$api$core$v1$EnvFromSource = {
  /** The ConfigMap to select from */
  readonly "configMapRef"?: io$k8s$api$core$v1$ConfigMapEnvSource;
  /** An optional identifier to prepend to each key in the ConfigMap. Must be a C_IDENTIFIER. */
  readonly "prefix"?: string;
  /** The Secret to select from */
  readonly "secretRef"?: io$k8s$api$core$v1$SecretEnvSource;
};

/** EnvVar represents an environment variable present in a Container. */
export type io$k8s$api$core$v1$EnvVar = {
  /** Name of the environment variable. Must be a C_IDENTIFIER. */
  readonly "name": string;
  /** Variable references $(VAR_NAME) are expanded using the previous defined environment variables in the container and any service environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to "". */
  readonly "value"?: string;
  /** Source for the environment variable's value. Cannot be used if value is not empty. */
  readonly "valueFrom"?: io$k8s$api$core$v1$EnvVarSource;
};

/** EnvVarSource represents a source for the value of an EnvVar. */
export type io$k8s$api$core$v1$EnvVarSource = {
  /** Selects a key of a ConfigMap. */
  readonly "configMapKeyRef"?: io$k8s$api$core$v1$ConfigMapKeySelector;
  /** Selects a field of the pod: supports metadata.name, metadata.namespace, metadata.labels, metadata.annotations, spec.nodeName, spec.serviceAccountName, status.hostIP, status.podIP. */
  readonly "fieldRef"?: io$k8s$api$core$v1$ObjectFieldSelector;
  /** Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, limits.ephemeral-storage, requests.cpu, requests.memory and requests.ephemeral-storage) are currently supported. */
  readonly "resourceFieldRef"?: io$k8s$api$core$v1$ResourceFieldSelector;
  /** Selects a key of a secret in the pod's namespace */
  readonly "secretKeyRef"?: io$k8s$api$core$v1$SecretKeySelector;
};

/** Event is a report of an event somewhere in the cluster. */
export type io$k8s$api$core$v1$Event = {
  /** What action was taken/failed regarding to the Regarding object. */
  readonly "action"?: string;
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** The number of times this event has occurred. */
  readonly "count"?: number;
  /** Time when this Event was first observed. */
  readonly "eventTime"?: io$k8s$apimachinery$pkg$apis$meta$v1$MicroTime;
  /** The time at which the event was first recorded. (Time of server receipt is in TypeMeta.) */
  readonly "firstTimestamp"?: io$k8s$apimachinery$pkg$apis$meta$v1$Time;
  /** The object that this event is about. */
  readonly "involvedObject": io$k8s$api$core$v1$ObjectReference;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "Event";
  /** The time at which the most recent occurrence of this event was recorded. */
  readonly "lastTimestamp"?: io$k8s$apimachinery$pkg$apis$meta$v1$Time;
  /** A human-readable description of the status of this operation. */
  readonly "message"?: string;
  /** Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata */
  readonly "metadata": io$k8s$apimachinery$pkg$apis$meta$v1$ObjectMeta;
  /** This should be a short, machine understandable string that gives the reason for the transition into the object's current status. */
  readonly "reason"?: string;
  /** Optional secondary object for more complex actions. */
  readonly "related"?: io$k8s$api$core$v1$ObjectReference;
  /** Name of the controller that emitted this Event, e.g. `kubernetes.io/kubelet`. */
  readonly "reportingComponent"?: string;
  /** ID of the controller instance, e.g. `kubelet-xyzf`. */
  readonly "reportingInstance"?: string;
  /** Data about the Event series this event represents or nil if it's a singleton Event. */
  readonly "series"?: io$k8s$api$core$v1$EventSeries;
  /** The component reporting this event. Should be a short machine understandable string. */
  readonly "source"?: io$k8s$api$core$v1$EventSource;
  /** Type of this event (Normal, Warning), new types could be added in the future */
  readonly "type"?: string;
};

/** EventList is a list of events. */
export type io$k8s$api$core$v1$EventList = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** List of events */
  readonly "items": readonly io$k8s$api$core$v1$Event[];
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "EventList";
  /** Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ListMeta;
};

/** EventSeries contain information on series of events, i.e. thing that was/is happening continuously for some time. */
export type io$k8s$api$core$v1$EventSeries = {
  /** Number of occurrences in this series up to the last heartbeat time */
  readonly "count"?: number;
  /** Time of the last occurrence observed */
  readonly "lastObservedTime"?: io$k8s$apimachinery$pkg$apis$meta$v1$MicroTime;
  /** State of this Series: Ongoing or Finished Deprecated. Planned removal for 1.18 */
  readonly "state"?: string;
};

/** EventSource contains information for an event. */
export type io$k8s$api$core$v1$EventSource = {
  /** Component from which the event is generated. */
  readonly "component"?: string;
  /** Node name on which the event is generated. */
  readonly "host"?: string;
};

/** ExecAction describes a "run in container" action. */
export type io$k8s$api$core$v1$ExecAction = {
  /** Command is the command line to execute inside the container, the working directory for the command  is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy. */
  readonly "command"?: readonly string[];
};

/** Represents a Fibre Channel volume. Fibre Channel volumes can only be mounted as read/write once. Fibre Channel volumes support ownership management and SELinux relabeling. */
export type io$k8s$api$core$v1$FCVolumeSource = {
  /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. */
  readonly "fsType"?: string;
  /** Optional: FC target lun number */
  readonly "lun"?: number;
  /** Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. */
  readonly "readOnly"?: boolean;
  /** Optional: FC target worldwide names (WWNs) */
  readonly "targetWWNs"?: readonly string[];
  /** Optional: FC volume world wide identifiers (wwids) Either wwids or combination of targetWWNs and lun must be set, but not both simultaneously. */
  readonly "wwids"?: readonly string[];
};

/** FlexPersistentVolumeSource represents a generic persistent volume resource that is provisioned/attached using an exec based plugin. */
export type io$k8s$api$core$v1$FlexPersistentVolumeSource = {
  /** Driver is the name of the driver to use for this volume. */
  readonly "driver": string;
  /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". The default filesystem depends on FlexVolume script. */
  readonly "fsType"?: string;
  /** Optional: Extra command options if any. */
  readonly "options"?: object;
  /** Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. */
  readonly "readOnly"?: boolean;
  /** Optional: SecretRef is reference to the secret object containing sensitive information to pass to the plugin scripts. This may be empty if no secret object is specified. If the secret object contains more than one secret, all secrets are passed to the plugin scripts. */
  readonly "secretRef"?: io$k8s$api$core$v1$SecretReference;
};

/** FlexVolume represents a generic volume resource that is provisioned/attached using an exec based plugin. */
export type io$k8s$api$core$v1$FlexVolumeSource = {
  /** Driver is the name of the driver to use for this volume. */
  readonly "driver": string;
  /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". The default filesystem depends on FlexVolume script. */
  readonly "fsType"?: string;
  /** Optional: Extra command options if any. */
  readonly "options"?: object;
  /** Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. */
  readonly "readOnly"?: boolean;
  /** Optional: SecretRef is reference to the secret object containing sensitive information to pass to the plugin scripts. This may be empty if no secret object is specified. If the secret object contains more than one secret, all secrets are passed to the plugin scripts. */
  readonly "secretRef"?: io$k8s$api$core$v1$LocalObjectReference;
};

/** Represents a Flocker volume mounted by the Flocker agent. One and only one of datasetName and datasetUUID should be set. Flocker volumes do not support ownership management or SELinux relabeling. */
export type io$k8s$api$core$v1$FlockerVolumeSource = {
  /** Name of the dataset stored as metadata -> name on the dataset for Flocker should be considered as deprecated */
  readonly "datasetName"?: string;
  /** UUID of the dataset. This is unique identifier of a Flocker dataset */
  readonly "datasetUUID"?: string;
};

/** Represents a Persistent Disk resource in Google Compute Engine.

A GCE PD must exist before mounting to a container. The disk must also be in the same GCE project and zone as the kubelet. A GCE PD can only be mounted as read/write once or read-only many times. GCE PDs support ownership management and SELinux relabeling. */
export type io$k8s$api$core$v1$GCEPersistentDiskVolumeSource = {
  /** Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk */
  readonly "fsType"?: string;
  /** The partition in the volume that you want to mount. If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as "1". Similarly, the volume partition for /dev/sda is "0" (or you can leave the property empty). More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk */
  readonly "partition"?: number;
  /** Unique name of the PD resource in GCE. Used to identify the disk in GCE. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk */
  readonly "pdName": string;
  /** ReadOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk */
  readonly "readOnly"?: boolean;
};

/** Represents a volume that is populated with the contents of a git repository. Git repo volumes do not support ownership management. Git repo volumes support SELinux relabeling.

DEPRECATED: GitRepo is deprecated. To provision a container with a git repo, mount an EmptyDir into an InitContainer that clones the repo using git, then mount the EmptyDir into the Pod's container. */
export type io$k8s$api$core$v1$GitRepoVolumeSource = {
  /** Target directory name. Must not contain or start with '..'.  If '.' is supplied, the volume directory will be the git repository.  Otherwise, if specified, the volume will contain the git repository in the subdirectory with the given name. */
  readonly "directory"?: string;
  /** Repository URL */
  readonly "repository": string;
  /** Commit hash for the specified revision. */
  readonly "revision"?: string;
};

/** Represents a Glusterfs mount that lasts the lifetime of a pod. Glusterfs volumes do not support ownership management or SELinux relabeling. */
export type io$k8s$api$core$v1$GlusterfsPersistentVolumeSource = {
  /** EndpointsName is the endpoint name that details Glusterfs topology. More info: https://releases.k8s.io/HEAD/examples/volumes/glusterfs/README.md#create-a-pod */
  readonly "endpoints": string;
  /** EndpointsNamespace is the namespace that contains Glusterfs endpoint. If this field is empty, the EndpointNamespace defaults to the same namespace as the bound PVC. More info: https://releases.k8s.io/HEAD/examples/volumes/glusterfs/README.md#create-a-pod */
  readonly "endpointsNamespace"?: string;
  /** Path is the Glusterfs volume path. More info: https://releases.k8s.io/HEAD/examples/volumes/glusterfs/README.md#create-a-pod */
  readonly "path": string;
  /** ReadOnly here will force the Glusterfs volume to be mounted with read-only permissions. Defaults to false. More info: https://releases.k8s.io/HEAD/examples/volumes/glusterfs/README.md#create-a-pod */
  readonly "readOnly"?: boolean;
};

/** Represents a Glusterfs mount that lasts the lifetime of a pod. Glusterfs volumes do not support ownership management or SELinux relabeling. */
export type io$k8s$api$core$v1$GlusterfsVolumeSource = {
  /** EndpointsName is the endpoint name that details Glusterfs topology. More info: https://releases.k8s.io/HEAD/examples/volumes/glusterfs/README.md#create-a-pod */
  readonly "endpoints": string;
  /** Path is the Glusterfs volume path. More info: https://releases.k8s.io/HEAD/examples/volumes/glusterfs/README.md#create-a-pod */
  readonly "path": string;
  /** ReadOnly here will force the Glusterfs volume to be mounted with read-only permissions. Defaults to false. More info: https://releases.k8s.io/HEAD/examples/volumes/glusterfs/README.md#create-a-pod */
  readonly "readOnly"?: boolean;
};

/** HTTPGetAction describes an action based on HTTP Get requests. */
export type io$k8s$api$core$v1$HTTPGetAction = {
  /** Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead. */
  readonly "host"?: string;
  /** Custom headers to set in the request. HTTP allows repeated headers. */
  readonly "httpHeaders"?: readonly io$k8s$api$core$v1$HTTPHeader[];
  /** Path to access on the HTTP server. */
  readonly "path"?: string;
  /** Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  readonly "port": io$k8s$apimachinery$pkg$util$intstr$IntOrString;
  /** Scheme to use for connecting to the host. Defaults to HTTP. */
  readonly "scheme"?: string;
};

/** HTTPHeader describes a custom header to be used in HTTP probes */
export type io$k8s$api$core$v1$HTTPHeader = {
  /** The header field name */
  readonly "name": string;
  /** The header field value */
  readonly "value": string;
};

/** Handler defines a specific action that should be taken */
export type io$k8s$api$core$v1$Handler = {
  /** One and only one of the following should be specified. Exec specifies the action to take. */
  readonly "exec"?: io$k8s$api$core$v1$ExecAction;
  /** HTTPGet specifies the http request to perform. */
  readonly "httpGet"?: io$k8s$api$core$v1$HTTPGetAction;
  /** TCPSocket specifies an action involving a TCP port. TCP hooks not yet supported */
  readonly "tcpSocket"?: io$k8s$api$core$v1$TCPSocketAction;
};

/** HostAlias holds the mapping between IP and hostnames that will be injected as an entry in the pod's hosts file. */
export type io$k8s$api$core$v1$HostAlias = {
  /** Hostnames for the above IP address. */
  readonly "hostnames"?: readonly string[];
  /** IP address of the host file entry. */
  readonly "ip"?: string;
};

/** Represents a host path mapped into a pod. Host path volumes do not support ownership management or SELinux relabeling. */
export type io$k8s$api$core$v1$HostPathVolumeSource = {
  /** Path of the directory on the host. If the path is a symlink, it will follow the link to the real path. More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath */
  readonly "path": string;
  /** Type for HostPath Volume Defaults to "" More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath */
  readonly "type"?: string;
};

/** ISCSIPersistentVolumeSource represents an ISCSI disk. ISCSI volumes can only be mounted as read/write once. ISCSI volumes support ownership management and SELinux relabeling. */
export type io$k8s$api$core$v1$ISCSIPersistentVolumeSource = {
  /** whether support iSCSI Discovery CHAP authentication */
  readonly "chapAuthDiscovery"?: boolean;
  /** whether support iSCSI Session CHAP authentication */
  readonly "chapAuthSession"?: boolean;
  /** Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#iscsi */
  readonly "fsType"?: string;
  /** Custom iSCSI Initiator Name. If initiatorName is specified with iscsiInterface simultaneously, new iSCSI interface <target portal>:<volume name> will be created for the connection. */
  readonly "initiatorName"?: string;
  /** Target iSCSI Qualified Name. */
  readonly "iqn": string;
  /** iSCSI Interface Name that uses an iSCSI transport. Defaults to 'default' (tcp). */
  readonly "iscsiInterface"?: string;
  /** iSCSI Target Lun number. */
  readonly "lun": number;
  /** iSCSI Target Portal List. The Portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260). */
  readonly "portals"?: readonly string[];
  /** ReadOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. */
  readonly "readOnly"?: boolean;
  /** CHAP Secret for iSCSI target and initiator authentication */
  readonly "secretRef"?: io$k8s$api$core$v1$SecretReference;
  /** iSCSI Target Portal. The Portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260). */
  readonly "targetPortal": string;
};

/** Represents an ISCSI disk. ISCSI volumes can only be mounted as read/write once. ISCSI volumes support ownership management and SELinux relabeling. */
export type io$k8s$api$core$v1$ISCSIVolumeSource = {
  /** whether support iSCSI Discovery CHAP authentication */
  readonly "chapAuthDiscovery"?: boolean;
  /** whether support iSCSI Session CHAP authentication */
  readonly "chapAuthSession"?: boolean;
  /** Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#iscsi */
  readonly "fsType"?: string;
  /** Custom iSCSI Initiator Name. If initiatorName is specified with iscsiInterface simultaneously, new iSCSI interface <target portal>:<volume name> will be created for the connection. */
  readonly "initiatorName"?: string;
  /** Target iSCSI Qualified Name. */
  readonly "iqn": string;
  /** iSCSI Interface Name that uses an iSCSI transport. Defaults to 'default' (tcp). */
  readonly "iscsiInterface"?: string;
  /** iSCSI Target Lun number. */
  readonly "lun": number;
  /** iSCSI Target Portal List. The portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260). */
  readonly "portals"?: readonly string[];
  /** ReadOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. */
  readonly "readOnly"?: boolean;
  /** CHAP Secret for iSCSI target and initiator authentication */
  readonly "secretRef"?: io$k8s$api$core$v1$LocalObjectReference;
  /** iSCSI Target Portal. The Portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260). */
  readonly "targetPortal": string;
};

/** Maps a string key to a path within a volume. */
export type io$k8s$api$core$v1$KeyToPath = {
  /** The key to project. */
  readonly "key": string;
  /** Optional: mode bits to use on this file, must be a value between 0 and 0777. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
  readonly "mode"?: number;
  /** The relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'. */
  readonly "path": string;
};

/** Lifecycle describes actions that the management system should take in response to container lifecycle events. For the PostStart and PreStop lifecycle handlers, management of the container blocks until the action is complete, unless the container process fails, in which case the handler is aborted. */
export type io$k8s$api$core$v1$Lifecycle = {
  /** PostStart is called immediately after a container is created. If the handler fails, the container is terminated and restarted according to its restart policy. Other management of the container blocks until the hook completes. More info: https://kubernetes.io/docs/concepts/containers/container-lifecycle-hooks/#container-hooks */
  readonly "postStart"?: io$k8s$api$core$v1$Handler;
  /** PreStop is called immediately before a container is terminated due to an API request or management event such as liveness probe failure, preemption, resource contention, etc. The handler is not called if the container crashes or exits. The reason for termination is passed to the handler. The Pod's termination grace period countdown begins before the PreStop hooked is executed. Regardless of the outcome of the handler, the container will eventually terminate within the Pod's termination grace period. Other management of the container blocks until the hook completes or until the termination grace period is reached. More info: https://kubernetes.io/docs/concepts/containers/container-lifecycle-hooks/#container-hooks */
  readonly "preStop"?: io$k8s$api$core$v1$Handler;
};

/** LimitRange sets resource usage limits for each kind of resource in a Namespace. */
export type io$k8s$api$core$v1$LimitRange = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "LimitRange";
  /** Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ObjectMeta;
  /** Spec defines the limits enforced. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status */
  readonly "spec"?: io$k8s$api$core$v1$LimitRangeSpec;
};

/** LimitRangeItem defines a min/max usage limit for any resource that matches on kind. */
export type io$k8s$api$core$v1$LimitRangeItem = {
  /** Default resource requirement limit value by resource name if resource limit is omitted. */
  readonly "default"?: object;
  /** DefaultRequest is the default resource requirement request value by resource name if resource request is omitted. */
  readonly "defaultRequest"?: object;
  /** Max usage constraints on this kind by resource name. */
  readonly "max"?: object;
  /** MaxLimitRequestRatio if specified, the named resource must have a request and limit that are both non-zero where limit divided by request is less than or equal to the enumerated value; this represents the max burst for the named resource. */
  readonly "maxLimitRequestRatio"?: object;
  /** Min usage constraints on this kind by resource name. */
  readonly "min"?: object;
  /** Type of resource that this limit applies to. */
  readonly "type"?: string;
};

/** LimitRangeList is a list of LimitRange items. */
export type io$k8s$api$core$v1$LimitRangeList = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Items is a list of LimitRange objects. More info: https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/ */
  readonly "items": readonly io$k8s$api$core$v1$LimitRange[];
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "LimitRangeList";
  /** Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ListMeta;
};

/** LimitRangeSpec defines a min/max usage limit for resources that match on kind. */
export type io$k8s$api$core$v1$LimitRangeSpec = {
  /** Limits is the list of LimitRangeItem objects that are enforced. */
  readonly "limits": readonly io$k8s$api$core$v1$LimitRangeItem[];
};

/** LoadBalancerIngress represents the status of a load-balancer ingress point: traffic intended for the service should be sent to an ingress point. */
export type io$k8s$api$core$v1$LoadBalancerIngress = {
  /** Hostname is set for load-balancer ingress points that are DNS based (typically AWS load-balancers) */
  readonly "hostname"?: string;
  /** IP is set for load-balancer ingress points that are IP based (typically GCE or OpenStack load-balancers) */
  readonly "ip"?: string;
};

/** LoadBalancerStatus represents the status of a load-balancer. */
export type io$k8s$api$core$v1$LoadBalancerStatus = {
  /** Ingress is a list containing ingress points for the load-balancer. Traffic intended for the service should be sent to these ingress points. */
  readonly "ingress"?: readonly io$k8s$api$core$v1$LoadBalancerIngress[];
};

/** LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace. */
export type io$k8s$api$core$v1$LocalObjectReference = {
  /** Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
  readonly "name"?: string;
};

/** Local represents directly-attached storage with node affinity (Beta feature) */
export type io$k8s$api$core$v1$LocalVolumeSource = {
  /** Filesystem type to mount. It applies only when the Path is a block device. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". The default value is to auto-select a fileystem if unspecified. */
  readonly "fsType"?: string;
  /** The full path to the volume on the node. It can be either a directory or block device (disk, partition, ...). */
  readonly "path": string;
};

/** Represents an NFS mount that lasts the lifetime of a pod. NFS volumes do not support ownership management or SELinux relabeling. */
export type io$k8s$api$core$v1$NFSVolumeSource = {
  /** Path that is exported by the NFS server. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs */
  readonly "path": string;
  /** ReadOnly here will force the NFS export to be mounted with read-only permissions. Defaults to false. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs */
  readonly "readOnly"?: boolean;
  /** Server is the hostname or IP address of the NFS server. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs */
  readonly "server": string;
};

/** Namespace provides a scope for Names. Use of multiple namespaces is optional. */
export type io$k8s$api$core$v1$Namespace = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "Namespace";
  /** Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ObjectMeta;
  /** Spec defines the behavior of the Namespace. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status */
  readonly "spec"?: io$k8s$api$core$v1$NamespaceSpec;
  /** Status describes the current status of a Namespace. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status */
  readonly "status"?: io$k8s$api$core$v1$NamespaceStatus;
};

/** NamespaceList is a list of Namespaces. */
export type io$k8s$api$core$v1$NamespaceList = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Items is the list of Namespace objects in the list. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
  readonly "items": readonly io$k8s$api$core$v1$Namespace[];
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "NamespaceList";
  /** Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ListMeta;
};

/** NamespaceSpec describes the attributes on a Namespace. */
export type io$k8s$api$core$v1$NamespaceSpec = {
  /** Finalizers is an opaque list of values that must be empty to permanently remove object from storage. More info: https://kubernetes.io/docs/tasks/administer-cluster/namespaces/ */
  readonly "finalizers"?: readonly string[];
};

/** NamespaceStatus is information about the current status of a Namespace. */
export type io$k8s$api$core$v1$NamespaceStatus = {
  /** Phase is the current lifecycle phase of the namespace. More info: https://kubernetes.io/docs/tasks/administer-cluster/namespaces/ */
  readonly "phase"?: string;
};

/** Node is a worker node in Kubernetes. Each node will have a unique identifier in the cache (i.e. in etcd). */
export type io$k8s$api$core$v1$Node = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "Node";
  /** Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ObjectMeta;
  /** Spec defines the behavior of a node. https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status */
  readonly "spec"?: io$k8s$api$core$v1$NodeSpec;
  /** Most recently observed status of the node. Populated by the system. Read-only. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status */
  readonly "status"?: io$k8s$api$core$v1$NodeStatus;
};

/** NodeAddress contains information for the node's address. */
export type io$k8s$api$core$v1$NodeAddress = {
  /** The node address. */
  readonly "address": string;
  /** Node address type, one of Hostname, ExternalIP or InternalIP. */
  readonly "type": string;
};

/** Node affinity is a group of node affinity scheduling rules. */
export type io$k8s$api$core$v1$NodeAffinity = {
  /** The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node matches the corresponding matchExpressions; the node(s) with the highest sum are the most preferred. */
  readonly "preferredDuringSchedulingIgnoredDuringExecution"?:
    readonly io$k8s$api$core$v1$PreferredSchedulingTerm[];
  /** If the affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to an update), the system may or may not try to eventually evict the pod from its node. */
  readonly "requiredDuringSchedulingIgnoredDuringExecution"?:
    io$k8s$api$core$v1$NodeSelector;
};

/** NodeCondition contains condition information for a node. */
export type io$k8s$api$core$v1$NodeCondition = {
  /** Last time we got an update on a given condition. */
  readonly "lastHeartbeatTime"?: io$k8s$apimachinery$pkg$apis$meta$v1$Time;
  /** Last time the condition transit from one status to another. */
  readonly "lastTransitionTime"?: io$k8s$apimachinery$pkg$apis$meta$v1$Time;
  /** Human readable message indicating details about last transition. */
  readonly "message"?: string;
  /** (brief) reason for the condition's last transition. */
  readonly "reason"?: string;
  /** Status of the condition, one of True, False, Unknown. */
  readonly "status": string;
  /** Type of node condition. */
  readonly "type": string;
};

/** NodeConfigSource specifies a source of node configuration. Exactly one subfield (excluding metadata) must be non-nil. */
export type io$k8s$api$core$v1$NodeConfigSource = {
  /** ConfigMap is a reference to a Node's ConfigMap */
  readonly "configMap"?: io$k8s$api$core$v1$ConfigMapNodeConfigSource;
};

/** NodeConfigStatus describes the status of the config assigned by Node.Spec.ConfigSource. */
export type io$k8s$api$core$v1$NodeConfigStatus = {
  /** Active reports the checkpointed config the node is actively using. Active will represent either the current version of the Assigned config, or the current LastKnownGood config, depending on whether attempting to use the Assigned config results in an error. */
  readonly "active"?: io$k8s$api$core$v1$NodeConfigSource;
  /** Assigned reports the checkpointed config the node will try to use. When Node.Spec.ConfigSource is updated, the node checkpoints the associated config payload to local disk, along with a record indicating intended config. The node refers to this record to choose its config checkpoint, and reports this record in Assigned. Assigned only updates in the status after the record has been checkpointed to disk. When the Kubelet is restarted, it tries to make the Assigned config the Active config by loading and validating the checkpointed payload identified by Assigned. */
  readonly "assigned"?: io$k8s$api$core$v1$NodeConfigSource;
  /** Error describes any problems reconciling the Spec.ConfigSource to the Active config. Errors may occur, for example, attempting to checkpoint Spec.ConfigSource to the local Assigned record, attempting to checkpoint the payload associated with Spec.ConfigSource, attempting to load or validate the Assigned config, etc. Errors may occur at different points while syncing config. Earlier errors (e.g. download or checkpointing errors) will not result in a rollback to LastKnownGood, and may resolve across Kubelet retries. Later errors (e.g. loading or validating a checkpointed config) will result in a rollback to LastKnownGood. In the latter case, it is usually possible to resolve the error by fixing the config assigned in Spec.ConfigSource. You can find additional information for debugging by searching the error message in the Kubelet log. Error is a human-readable description of the error state; machines can check whether or not Error is empty, but should not rely on the stability of the Error text across Kubelet versions. */
  readonly "error"?: string;
  /** LastKnownGood reports the checkpointed config the node will fall back to when it encounters an error attempting to use the Assigned config. The Assigned config becomes the LastKnownGood config when the node determines that the Assigned config is stable and correct. This is currently implemented as a 10-minute soak period starting when the local record of Assigned config is updated. If the Assigned config is Active at the end of this period, it becomes the LastKnownGood. Note that if Spec.ConfigSource is reset to nil (use local defaults), the LastKnownGood is also immediately reset to nil, because the local default config is always assumed good. You should not make assumptions about the node's method of determining config stability and correctness, as this may change or become configurable in the future. */
  readonly "lastKnownGood"?: io$k8s$api$core$v1$NodeConfigSource;
};

/** NodeDaemonEndpoints lists ports opened by daemons running on the Node. */
export type io$k8s$api$core$v1$NodeDaemonEndpoints = {
  /** Endpoint on which Kubelet is listening. */
  readonly "kubeletEndpoint"?: io$k8s$api$core$v1$DaemonEndpoint;
};

/** NodeList is the whole list of all Nodes which have been registered with master. */
export type io$k8s$api$core$v1$NodeList = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** List of nodes */
  readonly "items": readonly io$k8s$api$core$v1$Node[];
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "NodeList";
  /** Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ListMeta;
};

/** A node selector represents the union of the results of one or more label queries over a set of nodes; that is, it represents the OR of the selectors represented by the node selector terms. */
export type io$k8s$api$core$v1$NodeSelector = {
  /** Required. A list of node selector terms. The terms are ORed. */
  readonly "nodeSelectorTerms": readonly io$k8s$api$core$v1$NodeSelectorTerm[];
};

/** A node selector requirement is a selector that contains values, a key, and an operator that relates the key and values. */
export type io$k8s$api$core$v1$NodeSelectorRequirement = {
  /** The label key that the selector applies to. */
  readonly "key": string;
  /** Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt. */
  readonly "operator": string;
  /** An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch. */
  readonly "values"?: readonly string[];
};

/** A null or empty node selector term matches no objects. The requirements of them are ANDed. The TopologySelectorTerm type implements a subset of the NodeSelectorTerm. */
export type io$k8s$api$core$v1$NodeSelectorTerm = {
  /** A list of node selector requirements by node's labels. */
  readonly "matchExpressions"?:
    readonly io$k8s$api$core$v1$NodeSelectorRequirement[];
  /** A list of node selector requirements by node's fields. */
  readonly "matchFields"?:
    readonly io$k8s$api$core$v1$NodeSelectorRequirement[];
};

/** NodeSpec describes the attributes that a node is created with. */
export type io$k8s$api$core$v1$NodeSpec = {
  /** If specified, the source to get node configuration from The DynamicKubeletConfig feature gate must be enabled for the Kubelet to use this field */
  readonly "configSource"?: io$k8s$api$core$v1$NodeConfigSource;
  /** Deprecated. Not all kubelets will set this field. Remove field after 1.13. see: https://issues.k8s.io/61966 */
  readonly "externalID"?: string;
  /** PodCIDR represents the pod IP range assigned to the node. */
  readonly "podCIDR"?: string;
  /** ID of the node assigned by the cloud provider in the format: <ProviderName>://<ProviderSpecificNodeID> */
  readonly "providerID"?: string;
  /** If specified, the node's taints. */
  readonly "taints"?: readonly io$k8s$api$core$v1$Taint[];
  /** Unschedulable controls node schedulability of new pods. By default, node is schedulable. More info: https://kubernetes.io/docs/concepts/nodes/node/#manual-node-administration */
  readonly "unschedulable"?: boolean;
};

/** NodeStatus is information about the current status of a node. */
export type io$k8s$api$core$v1$NodeStatus = {
  /** List of addresses reachable to the node. Queried from cloud provider, if available. More info: https://kubernetes.io/docs/concepts/nodes/node/#addresses */
  readonly "addresses"?: readonly io$k8s$api$core$v1$NodeAddress[];
  /** Allocatable represents the resources of a node that are available for scheduling. Defaults to Capacity. */
  readonly "allocatable"?: object;
  /** Capacity represents the total resources of a node. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#capacity */
  readonly "capacity"?: object;
  /** Conditions is an array of current observed node conditions. More info: https://kubernetes.io/docs/concepts/nodes/node/#condition */
  readonly "conditions"?: readonly io$k8s$api$core$v1$NodeCondition[];
  /** Status of the config assigned to the node via the dynamic Kubelet config feature. */
  readonly "config"?: io$k8s$api$core$v1$NodeConfigStatus;
  /** Endpoints of daemons running on the Node. */
  readonly "daemonEndpoints"?: io$k8s$api$core$v1$NodeDaemonEndpoints;
  /** List of container images on this node */
  readonly "images"?: readonly io$k8s$api$core$v1$ContainerImage[];
  /** Set of ids/uuids to uniquely identify the node. More info: https://kubernetes.io/docs/concepts/nodes/node/#info */
  readonly "nodeInfo"?: io$k8s$api$core$v1$NodeSystemInfo;
  /** NodePhase is the recently observed lifecycle phase of the node. More info: https://kubernetes.io/docs/concepts/nodes/node/#phase The field is never populated, and now is deprecated. */
  readonly "phase"?: string;
  /** List of volumes that are attached to the node. */
  readonly "volumesAttached"?: readonly io$k8s$api$core$v1$AttachedVolume[];
  /** List of attachable volumes in use (mounted) by the node. */
  readonly "volumesInUse"?: readonly string[];
};

/** NodeSystemInfo is a set of ids/uuids to uniquely identify the node. */
export type io$k8s$api$core$v1$NodeSystemInfo = {
  /** The Architecture reported by the node */
  readonly "architecture": string;
  /** Boot ID reported by the node. */
  readonly "bootID": string;
  /** ContainerRuntime Version reported by the node through runtime remote API (e.g. docker://1.5.0). */
  readonly "containerRuntimeVersion": string;
  /** Kernel Version reported by the node from 'uname -r' (e.g. 3.16.0-0.bpo.4-amd64). */
  readonly "kernelVersion": string;
  /** KubeProxy Version reported by the node. */
  readonly "kubeProxyVersion": string;
  /** Kubelet Version reported by the node. */
  readonly "kubeletVersion": string;
  /** MachineID reported by the node. For unique machine identification in the cluster this field is preferred. Learn more from man(5) machine-id: http://man7.org/linux/man-pages/man5/machine-id.5.html */
  readonly "machineID": string;
  /** The Operating System reported by the node */
  readonly "operatingSystem": string;
  /** OS Image reported by the node from /etc/os-release (e.g. Debian GNU/Linux 7 (wheezy)). */
  readonly "osImage": string;
  /** SystemUUID reported by the node. For unique machine identification MachineID is preferred. This field is specific to Red Hat hosts https://access.redhat.com/documentation/en-US/Red_Hat_Subscription_Management/1/html/RHSM/getting-system-uuid.html */
  readonly "systemUUID": string;
};

/** ObjectFieldSelector selects an APIVersioned field of an object. */
export type io$k8s$api$core$v1$ObjectFieldSelector = {
  /** Version of the schema the FieldPath is written in terms of, defaults to "v1". */
  readonly "apiVersion"?: string;
  /** Path of the field to select in the specified API version. */
  readonly "fieldPath": string;
};

/** ObjectReference contains enough information to let you inspect or modify the referred object. */
export type io$k8s$api$core$v1$ObjectReference = {
  /** API version of the referent. */
  readonly "apiVersion"?: string;
  /** If referring to a piece of an object instead of an entire object, this string should contain a valid JSON/Go field access statement, such as desiredState.manifest.containers[2]. For example, if the object reference is to a container within a pod, this would take on a value like: "spec.containers{name}" (where "name" refers to the name of the container that triggered the event) or if no container name is specified "spec.containers[2]" (container with index 2 in this pod). This syntax is chosen only to have some well-defined way of referencing a part of an object. */
  readonly "fieldPath"?: string;
  /** Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "ObjectReference";
  /** Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
  readonly "name"?: string;
  /** Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ */
  readonly "namespace"?: string;
  /** Specific resourceVersion to which this reference is made, if any. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#concurrency-control-and-consistency */
  readonly "resourceVersion"?: string;
  /** UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#uids */
  readonly "uid"?: string;
};

/** PersistentVolume (PV) is a storage resource provisioned by an administrator. It is analogous to a node. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes */
export type io$k8s$api$core$v1$PersistentVolume = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "PersistentVolume";
  /** Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ObjectMeta;
  /** Spec defines a specification of a persistent volume owned by the cluster. Provisioned by an administrator. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistent-volumes */
  readonly "spec"?: io$k8s$api$core$v1$PersistentVolumeSpec;
  /** Status represents the current information/status for the persistent volume. Populated by the system. Read-only. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistent-volumes */
  readonly "status"?: io$k8s$api$core$v1$PersistentVolumeStatus;
};

/** PersistentVolumeClaim is a user's request for and claim to a persistent volume */
export type io$k8s$api$core$v1$PersistentVolumeClaim = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "PersistentVolumeClaim";
  /** Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ObjectMeta;
  /** Spec defines the desired characteristics of a volume requested by a pod author. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims */
  readonly "spec"?: io$k8s$api$core$v1$PersistentVolumeClaimSpec;
  /** Status represents the current information/status of a persistent volume claim. Read-only. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims */
  readonly "status"?: io$k8s$api$core$v1$PersistentVolumeClaimStatus;
};

/** PersistentVolumeClaimCondition contails details about state of pvc */
export type io$k8s$api$core$v1$PersistentVolumeClaimCondition = {
  /** Last time we probed the condition. */
  readonly "lastProbeTime"?: io$k8s$apimachinery$pkg$apis$meta$v1$Time;
  /** Last time the condition transitioned from one status to another. */
  readonly "lastTransitionTime"?: io$k8s$apimachinery$pkg$apis$meta$v1$Time;
  /** Human-readable message indicating details about last transition. */
  readonly "message"?: string;
  /** Unique, this should be a short, machine understandable string that gives the reason for condition's last transition. If it reports "ResizeStarted" that means the underlying persistent volume is being resized. */
  readonly "reason"?: string;
  readonly "status": string;
  readonly "type": string;
};

/** PersistentVolumeClaimList is a list of PersistentVolumeClaim items. */
export type io$k8s$api$core$v1$PersistentVolumeClaimList = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** A list of persistent volume claims. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims */
  readonly "items": readonly io$k8s$api$core$v1$PersistentVolumeClaim[];
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "PersistentVolumeClaimList";
  /** Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ListMeta;
};

/** PersistentVolumeClaimSpec describes the common attributes of storage devices and allows a Source for provider-specific attributes */
export type io$k8s$api$core$v1$PersistentVolumeClaimSpec = {
  /** AccessModes contains the desired access modes the volume should have. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1 */
  readonly "accessModes"?: readonly string[];
  /** This field requires the VolumeSnapshotDataSource alpha feature gate to be enabled and currently VolumeSnapshot is the only supported data source. If the provisioner can support VolumeSnapshot data source, it will create a new volume and data will be restored to the volume at the same time. If the provisioner does not support VolumeSnapshot data source, volume will not be created and the failure will be reported as an event. In the future, we plan to support more data source types and the behavior of the provisioner may change. */
  readonly "dataSource"?: io$k8s$api$core$v1$TypedLocalObjectReference;
  /** Resources represents the minimum resources the volume should have. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources */
  readonly "resources"?: io$k8s$api$core$v1$ResourceRequirements;
  /** A label query over volumes to consider for binding. */
  readonly "selector"?: io$k8s$apimachinery$pkg$apis$meta$v1$LabelSelector;
  /** Name of the StorageClass required by the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#class-1 */
  readonly "storageClassName"?: string;
  /** volumeMode defines what type of volume is required by the claim. Value of Filesystem is implied when not included in claim spec. This is a beta feature. */
  readonly "volumeMode"?: string;
  /** VolumeName is the binding reference to the PersistentVolume backing this claim. */
  readonly "volumeName"?: string;
};

/** PersistentVolumeClaimStatus is the current status of a persistent volume claim. */
export type io$k8s$api$core$v1$PersistentVolumeClaimStatus = {
  /** AccessModes contains the actual access modes the volume backing the PVC has. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1 */
  readonly "accessModes"?: readonly string[];
  /** Represents the actual resources of the underlying volume. */
  readonly "capacity"?: object;
  /** Current Condition of persistent volume claim. If underlying persistent volume is being resized then the Condition will be set to 'ResizeStarted'. */
  readonly "conditions"?:
    readonly io$k8s$api$core$v1$PersistentVolumeClaimCondition[];
  /** Phase represents the current phase of PersistentVolumeClaim. */
  readonly "phase"?: string;
};

/** PersistentVolumeClaimVolumeSource references the user's PVC in the same namespace. This volume finds the bound PV and mounts that volume for the pod. A PersistentVolumeClaimVolumeSource is, essentially, a wrapper around another type of volume that is owned by someone else (the system). */
export type io$k8s$api$core$v1$PersistentVolumeClaimVolumeSource = {
  /** ClaimName is the name of a PersistentVolumeClaim in the same namespace as the pod using this volume. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims */
  readonly "claimName": string;
  /** Will force the ReadOnly setting in VolumeMounts. Default false. */
  readonly "readOnly"?: boolean;
};

/** PersistentVolumeList is a list of PersistentVolume items. */
export type io$k8s$api$core$v1$PersistentVolumeList = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** List of persistent volumes. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes */
  readonly "items": readonly io$k8s$api$core$v1$PersistentVolume[];
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "PersistentVolumeList";
  /** Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ListMeta;
};

/** PersistentVolumeSpec is the specification of a persistent volume. */
export type io$k8s$api$core$v1$PersistentVolumeSpec = {
  /** AccessModes contains all ways the volume can be mounted. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes */
  readonly "accessModes"?: readonly string[];
  /** AWSElasticBlockStore represents an AWS Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore */
  readonly "awsElasticBlockStore"?:
    io$k8s$api$core$v1$AWSElasticBlockStoreVolumeSource;
  /** AzureDisk represents an Azure Data Disk mount on the host and bind mount to the pod. */
  readonly "azureDisk"?: io$k8s$api$core$v1$AzureDiskVolumeSource;
  /** AzureFile represents an Azure File Service mount on the host and bind mount to the pod. */
  readonly "azureFile"?: io$k8s$api$core$v1$AzureFilePersistentVolumeSource;
  /** A description of the persistent volume's resources and capacity. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#capacity */
  readonly "capacity"?: object;
  /** CephFS represents a Ceph FS mount on the host that shares a pod's lifetime */
  readonly "cephfs"?: io$k8s$api$core$v1$CephFSPersistentVolumeSource;
  /** Cinder represents a cinder volume attached and mounted on kubelets host machine More info: https://releases.k8s.io/HEAD/examples/mysql-cinder-pd/README.md */
  readonly "cinder"?: io$k8s$api$core$v1$CinderPersistentVolumeSource;
  /** ClaimRef is part of a bi-directional binding between PersistentVolume and PersistentVolumeClaim. Expected to be non-nil when bound. claim.VolumeName is the authoritative bind between PV and PVC. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#binding */
  readonly "claimRef"?: io$k8s$api$core$v1$ObjectReference;
  /** CSI represents storage that is handled by an external CSI driver (Beta feature). */
  readonly "csi"?: io$k8s$api$core$v1$CSIPersistentVolumeSource;
  /** FC represents a Fibre Channel resource that is attached to a kubelet's host machine and then exposed to the pod. */
  readonly "fc"?: io$k8s$api$core$v1$FCVolumeSource;
  /** FlexVolume represents a generic volume resource that is provisioned/attached using an exec based plugin. */
  readonly "flexVolume"?: io$k8s$api$core$v1$FlexPersistentVolumeSource;
  /** Flocker represents a Flocker volume attached to a kubelet's host machine and exposed to the pod for its usage. This depends on the Flocker control service being running */
  readonly "flocker"?: io$k8s$api$core$v1$FlockerVolumeSource;
  /** GCEPersistentDisk represents a GCE Disk resource that is attached to a kubelet's host machine and then exposed to the pod. Provisioned by an admin. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk */
  readonly "gcePersistentDisk"?:
    io$k8s$api$core$v1$GCEPersistentDiskVolumeSource;
  /** Glusterfs represents a Glusterfs volume that is attached to a host and exposed to the pod. Provisioned by an admin. More info: https://releases.k8s.io/HEAD/examples/volumes/glusterfs/README.md */
  readonly "glusterfs"?: io$k8s$api$core$v1$GlusterfsPersistentVolumeSource;
  /** HostPath represents a directory on the host. Provisioned by a developer or tester. This is useful for single-node development and testing only! On-host storage is not supported in any way and WILL NOT WORK in a multi-node cluster. More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath */
  readonly "hostPath"?: io$k8s$api$core$v1$HostPathVolumeSource;
  /** ISCSI represents an ISCSI Disk resource that is attached to a kubelet's host machine and then exposed to the pod. Provisioned by an admin. */
  readonly "iscsi"?: io$k8s$api$core$v1$ISCSIPersistentVolumeSource;
  /** Local represents directly-attached storage with node affinity */
  readonly "local"?: io$k8s$api$core$v1$LocalVolumeSource;
  /** A list of mount options, e.g. ["ro", "soft"]. Not validated - mount will simply fail if one is invalid. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes/#mount-options */
  readonly "mountOptions"?: readonly string[];
  /** NFS represents an NFS mount on the host. Provisioned by an admin. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs */
  readonly "nfs"?: io$k8s$api$core$v1$NFSVolumeSource;
  /** NodeAffinity defines constraints that limit what nodes this volume can be accessed from. This field influences the scheduling of pods that use this volume. */
  readonly "nodeAffinity"?: io$k8s$api$core$v1$VolumeNodeAffinity;
  /** What happens to a persistent volume when released from its claim. Valid options are Retain (default for manually created PersistentVolumes), Delete (default for dynamically provisioned PersistentVolumes), and Recycle (deprecated). Recycle must be supported by the volume plugin underlying this PersistentVolume. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#reclaiming */
  readonly "persistentVolumeReclaimPolicy"?: string;
  /** PhotonPersistentDisk represents a PhotonController persistent disk attached and mounted on kubelets host machine */
  readonly "photonPersistentDisk"?:
    io$k8s$api$core$v1$PhotonPersistentDiskVolumeSource;
  /** PortworxVolume represents a portworx volume attached and mounted on kubelets host machine */
  readonly "portworxVolume"?: io$k8s$api$core$v1$PortworxVolumeSource;
  /** Quobyte represents a Quobyte mount on the host that shares a pod's lifetime */
  readonly "quobyte"?: io$k8s$api$core$v1$QuobyteVolumeSource;
  /** RBD represents a Rados Block Device mount on the host that shares a pod's lifetime. More info: https://releases.k8s.io/HEAD/examples/volumes/rbd/README.md */
  readonly "rbd"?: io$k8s$api$core$v1$RBDPersistentVolumeSource;
  /** ScaleIO represents a ScaleIO persistent volume attached and mounted on Kubernetes nodes. */
  readonly "scaleIO"?: io$k8s$api$core$v1$ScaleIOPersistentVolumeSource;
  /** Name of StorageClass to which this persistent volume belongs. Empty value means that this volume does not belong to any StorageClass. */
  readonly "storageClassName"?: string;
  /** StorageOS represents a StorageOS volume that is attached to the kubelet's host machine and mounted into the pod More info: https://releases.k8s.io/HEAD/examples/volumes/storageos/README.md */
  readonly "storageos"?: io$k8s$api$core$v1$StorageOSPersistentVolumeSource;
  /** volumeMode defines if a volume is intended to be used with a formatted filesystem or to remain in raw block state. Value of Filesystem is implied when not included in spec. This is a beta feature. */
  readonly "volumeMode"?: string;
  /** VsphereVolume represents a vSphere volume attached and mounted on kubelets host machine */
  readonly "vsphereVolume"?: io$k8s$api$core$v1$VsphereVirtualDiskVolumeSource;
};

/** PersistentVolumeStatus is the current status of a persistent volume. */
export type io$k8s$api$core$v1$PersistentVolumeStatus = {
  /** A human-readable message indicating details about why the volume is in this state. */
  readonly "message"?: string;
  /** Phase indicates if a volume is available, bound to a claim, or released by a claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#phase */
  readonly "phase"?: string;
  /** Reason is a brief CamelCase string that describes any failure and is meant for machine parsing and tidy display in the CLI. */
  readonly "reason"?: string;
};

/** Represents a Photon Controller persistent disk resource. */
export type io$k8s$api$core$v1$PhotonPersistentDiskVolumeSource = {
  /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. */
  readonly "fsType"?: string;
  /** ID that identifies Photon Controller persistent disk */
  readonly "pdID": string;
};

/** Pod is a collection of containers that can run on a host. This resource is created by clients and scheduled onto hosts. */
export type io$k8s$api$core$v1$Pod = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "Pod";
  /** Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ObjectMeta;
  /** Specification of the desired behavior of the pod. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status */
  readonly "spec"?: io$k8s$api$core$v1$PodSpec;
  /** Most recently observed status of the pod. This data may not be up to date. Populated by the system. Read-only. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status */
  readonly "status"?: io$k8s$api$core$v1$PodStatus;
};

/** Pod affinity is a group of inter pod affinity scheduling rules. */
export type io$k8s$api$core$v1$PodAffinity = {
  /** The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred. */
  readonly "preferredDuringSchedulingIgnoredDuringExecution"?:
    readonly io$k8s$api$core$v1$WeightedPodAffinityTerm[];
  /** If the affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied. */
  readonly "requiredDuringSchedulingIgnoredDuringExecution"?:
    readonly io$k8s$api$core$v1$PodAffinityTerm[];
};

/** Defines a set of pods (namely those matching the labelSelector relative to the given namespace(s)) that this pod should be co-located (affinity) or not co-located (anti-affinity) with, where co-located is defined as running on a node whose value of the label with key <topologyKey> matches that of any node on which a pod of the set of pods is running */
export type io$k8s$api$core$v1$PodAffinityTerm = {
  /** A label query over a set of resources, in this case pods. */
  readonly "labelSelector"?: io$k8s$apimachinery$pkg$apis$meta$v1$LabelSelector;
  /** namespaces specifies which namespaces the labelSelector applies to (matches against); null or empty list means "this pod's namespace" */
  readonly "namespaces"?: readonly string[];
  /** This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed. */
  readonly "topologyKey": string;
};

/** Pod anti affinity is a group of inter pod anti affinity scheduling rules. */
export type io$k8s$api$core$v1$PodAntiAffinity = {
  /** The scheduler will prefer to schedule pods to nodes that satisfy the anti-affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling anti-affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred. */
  readonly "preferredDuringSchedulingIgnoredDuringExecution"?:
    readonly io$k8s$api$core$v1$WeightedPodAffinityTerm[];
  /** If the anti-affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the anti-affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied. */
  readonly "requiredDuringSchedulingIgnoredDuringExecution"?:
    readonly io$k8s$api$core$v1$PodAffinityTerm[];
};

/** PodCondition contains details for the current condition of this pod. */
export type io$k8s$api$core$v1$PodCondition = {
  /** Last time we probed the condition. */
  readonly "lastProbeTime"?: io$k8s$apimachinery$pkg$apis$meta$v1$Time;
  /** Last time the condition transitioned from one status to another. */
  readonly "lastTransitionTime"?: io$k8s$apimachinery$pkg$apis$meta$v1$Time;
  /** Human-readable message indicating details about last transition. */
  readonly "message"?: string;
  /** Unique, one-word, CamelCase reason for the condition's last transition. */
  readonly "reason"?: string;
  /** Status is the status of the condition. Can be True, False, Unknown. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-conditions */
  readonly "status": string;
  /** Type is the type of the condition. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-conditions */
  readonly "type": string;
};

/** PodDNSConfig defines the DNS parameters of a pod in addition to those generated from DNSPolicy. */
export type io$k8s$api$core$v1$PodDNSConfig = {
  /** A list of DNS name server IP addresses. This will be appended to the base nameservers generated from DNSPolicy. Duplicated nameservers will be removed. */
  readonly "nameservers"?: readonly string[];
  /** A list of DNS resolver options. This will be merged with the base options generated from DNSPolicy. Duplicated entries will be removed. Resolution options given in Options will override those that appear in the base DNSPolicy. */
  readonly "options"?: readonly io$k8s$api$core$v1$PodDNSConfigOption[];
  /** A list of DNS search domains for host-name lookup. This will be appended to the base search paths generated from DNSPolicy. Duplicated search paths will be removed. */
  readonly "searches"?: readonly string[];
};

/** PodDNSConfigOption defines DNS resolver options of a pod. */
export type io$k8s$api$core$v1$PodDNSConfigOption = {
  /** Required. */
  readonly "name"?: string;
  readonly "value"?: string;
};

/** PodList is a list of Pods. */
export type io$k8s$api$core$v1$PodList = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** List of pods. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md */
  readonly "items": readonly io$k8s$api$core$v1$Pod[];
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "PodList";
  /** Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ListMeta;
};

/** PodReadinessGate contains the reference to a pod condition */
export type io$k8s$api$core$v1$PodReadinessGate = {
  /** ConditionType refers to a condition in the pod's condition list with matching type. */
  readonly "conditionType": string;
};

/** PodSecurityContext holds pod-level security attributes and common container settings. Some fields are also present in container.securityContext.  Field values of container.securityContext take precedence over field values of PodSecurityContext. */
export type io$k8s$api$core$v1$PodSecurityContext = {
  /** A special supplemental group that applies to all containers in a pod. Some volume types allow the Kubelet to change the ownership of that volume to be owned by the pod:

1. The owning GID will be the FSGroup 2. The setgid bit is set (new files created in the volume will be owned by FSGroup) 3. The permission bits are OR'd with rw-rw----

If unset, the Kubelet will not modify the ownership and permissions of any volume. */
  readonly "fsGroup"?: number;
  /** The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container. */
  readonly "runAsGroup"?: number;
  /** Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. */
  readonly "runAsNonRoot"?: boolean;
  /** The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container. */
  readonly "runAsUser"?: number;
  /** The SELinux context to be applied to all containers. If unspecified, the container runtime will allocate a random SELinux context for each container.  May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container. */
  readonly "seLinuxOptions"?: io$k8s$api$core$v1$SELinuxOptions;
  /** A list of groups applied to the first process run in each container, in addition to the container's primary GID.  If unspecified, no groups will be added to any container. */
  readonly "supplementalGroups"?: readonly number[];
  /** Sysctls hold a list of namespaced sysctls used for the pod. Pods with unsupported sysctls (by the container runtime) might fail to launch. */
  readonly "sysctls"?: readonly io$k8s$api$core$v1$Sysctl[];
  /** Windows security options. */
  readonly "windowsOptions"?: io$k8s$api$core$v1$WindowsSecurityContextOptions;
};

/** PodSpec is a description of a pod. */
export type io$k8s$api$core$v1$PodSpec = {
  /** Optional duration in seconds the pod may be active on the node relative to StartTime before the system will actively try to mark it failed and kill associated containers. Value must be a positive integer. */
  readonly "activeDeadlineSeconds"?: number;
  /** If specified, the pod's scheduling constraints */
  readonly "affinity"?: io$k8s$api$core$v1$Affinity;
  /** AutomountServiceAccountToken indicates whether a service account token should be automatically mounted. */
  readonly "automountServiceAccountToken"?: boolean;
  /** List of containers belonging to the pod. Containers cannot currently be added or removed. There must be at least one container in a Pod. Cannot be updated. */
  readonly "containers": readonly io$k8s$api$core$v1$Container[];
  /** Specifies the DNS parameters of a pod. Parameters specified here will be merged to the generated DNS configuration based on DNSPolicy. */
  readonly "dnsConfig"?: io$k8s$api$core$v1$PodDNSConfig;
  /** Set DNS policy for the pod. Defaults to "ClusterFirst". Valid values are 'ClusterFirstWithHostNet', 'ClusterFirst', 'Default' or 'None'. DNS parameters given in DNSConfig will be merged with the policy selected with DNSPolicy. To have DNS options set along with hostNetwork, you have to specify DNS policy explicitly to 'ClusterFirstWithHostNet'. */
  readonly "dnsPolicy"?: string;
  /** EnableServiceLinks indicates whether information about services should be injected into pod's environment variables, matching the syntax of Docker links. Optional: Defaults to true. */
  readonly "enableServiceLinks"?: boolean;
  /** HostAliases is an optional list of hosts and IPs that will be injected into the pod's hosts file if specified. This is only valid for non-hostNetwork pods. */
  readonly "hostAliases"?: readonly io$k8s$api$core$v1$HostAlias[];
  /** Use the host's ipc namespace. Optional: Default to false. */
  readonly "hostIPC"?: boolean;
  /** Host networking requested for this pod. Use the host's network namespace. If this option is set, the ports that will be used must be specified. Default to false. */
  readonly "hostNetwork"?: boolean;
  /** Use the host's pid namespace. Optional: Default to false. */
  readonly "hostPID"?: boolean;
  /** Specifies the hostname of the Pod If not specified, the pod's hostname will be set to a system-defined value. */
  readonly "hostname"?: string;
  /** ImagePullSecrets is an optional list of references to secrets in the same namespace to use for pulling any of the images used by this PodSpec. If specified, these secrets will be passed to individual puller implementations for them to use. For example, in the case of docker, only DockerConfig type secrets are honored. More info: https://kubernetes.io/docs/concepts/containers/images#specifying-imagepullsecrets-on-a-pod */
  readonly "imagePullSecrets"?:
    readonly io$k8s$api$core$v1$LocalObjectReference[];
  /** List of initialization containers belonging to the pod. Init containers are executed in order prior to containers being started. If any init container fails, the pod is considered to have failed and is handled according to its restartPolicy. The name for an init container or normal container must be unique among all containers. Init containers may not have Lifecycle actions, Readiness probes, or Liveness probes. The resourceRequirements of an init container are taken into account during scheduling by finding the highest request/limit for each resource type, and then using the max of of that value or the sum of the normal containers. Limits are applied to init containers in a similar fashion. Init containers cannot currently be added or removed. Cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/init-containers/ */
  readonly "initContainers"?: readonly io$k8s$api$core$v1$Container[];
  /** NodeName is a request to schedule this pod onto a specific node. If it is non-empty, the scheduler simply schedules this pod onto that node, assuming that it fits resource requirements. */
  readonly "nodeName"?: string;
  /** NodeSelector is a selector which must be true for the pod to fit on a node. Selector which must match a node's labels for the pod to be scheduled on that node. More info: https://kubernetes.io/docs/concepts/configuration/assign-pod-node/ */
  readonly "nodeSelector"?: object;
  /** PreemptionPolicy is the Policy for preempting pods with lower priority. One of Never, PreemptLowerPriority. Defaults to PreemptLowerPriority if unset. This field is alpha-level and is only honored by servers that enable the NonPreemptingPriority feature. */
  readonly "preemptionPolicy"?: string;
  /** The priority value. Various system components use this field to find the priority of the pod. When Priority Admission Controller is enabled, it prevents users from setting this field. The admission controller populates this field from PriorityClassName. The higher the value, the higher the priority. */
  readonly "priority"?: number;
  /** If specified, indicates the pod's priority. "system-node-critical" and "system-cluster-critical" are two special keywords which indicate the highest priorities with the former being the highest priority. Any other name must be defined by creating a PriorityClass object with that name. If not specified, the pod priority will be default or zero if there is no default. */
  readonly "priorityClassName"?: string;
  /** If specified, all readiness gates will be evaluated for pod readiness. A pod is ready when all its containers are ready AND all conditions specified in the readiness gates have status equal to "True" More info: https://git.k8s.io/enhancements/keps/sig-network/0007-pod-ready%2B%2B.md */
  readonly "readinessGates"?: readonly io$k8s$api$core$v1$PodReadinessGate[];
  /** Restart policy for all containers within the pod. One of Always, OnFailure, Never. Default to Always. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#restart-policy */
  readonly "restartPolicy"?: string;
  /** RuntimeClassName refers to a RuntimeClass object in the node.k8s.io group, which should be used to run this pod.  If no RuntimeClass resource matches the named class, the pod will not be run. If unset or empty, the "legacy" RuntimeClass will be used, which is an implicit class with an empty definition that uses the default runtime handler. More info: https://git.k8s.io/enhancements/keps/sig-node/runtime-class.md This is a beta feature as of Kubernetes v1.14. */
  readonly "runtimeClassName"?: string;
  /** If specified, the pod will be dispatched by specified scheduler. If not specified, the pod will be dispatched by default scheduler. */
  readonly "schedulerName"?: string;
  /** SecurityContext holds pod-level security attributes and common container settings. Optional: Defaults to empty.  See type description for default values of each field. */
  readonly "securityContext"?: io$k8s$api$core$v1$PodSecurityContext;
  /** DeprecatedServiceAccount is a depreciated alias for ServiceAccountName. Deprecated: Use serviceAccountName instead. */
  readonly "serviceAccount"?: string;
  /** ServiceAccountName is the name of the ServiceAccount to use to run this pod. More info: https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/ */
  readonly "serviceAccountName"?: string;
  /** Share a single process namespace between all of the containers in a pod. When this is set containers will be able to view and signal processes from other containers in the same pod, and the first process in each container will not be assigned PID 1. HostPID and ShareProcessNamespace cannot both be set. Optional: Default to false. This field is beta-level and may be disabled with the PodShareProcessNamespace feature. */
  readonly "shareProcessNamespace"?: boolean;
  /** If specified, the fully qualified Pod hostname will be "<hostname>.<subdomain>.<pod namespace>.svc.<cluster domain>". If not specified, the pod will not have a domainname at all. */
  readonly "subdomain"?: string;
  /** Optional duration in seconds the pod needs to terminate gracefully. May be decreased in delete request. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period will be used instead. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. Defaults to 30 seconds. */
  readonly "terminationGracePeriodSeconds"?: number;
  /** If specified, the pod's tolerations. */
  readonly "tolerations"?: readonly io$k8s$api$core$v1$Toleration[];
  /** List of volumes that can be mounted by containers belonging to the pod. More info: https://kubernetes.io/docs/concepts/storage/volumes */
  readonly "volumes"?: readonly io$k8s$api$core$v1$Volume[];
};

/** PodStatus represents information about the status of a pod. Status may trail the actual state of a system, especially if the node that hosts the pod cannot contact the control plane. */
export type io$k8s$api$core$v1$PodStatus = {
  /** Current service state of pod. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-conditions */
  readonly "conditions"?: readonly io$k8s$api$core$v1$PodCondition[];
  /** The list has one entry per container in the manifest. Each entry is currently the output of `docker inspect`. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-and-container-status */
  readonly "containerStatuses"?: readonly io$k8s$api$core$v1$ContainerStatus[];
  /** IP address of the host to which the pod is assigned. Empty if not yet scheduled. */
  readonly "hostIP"?: string;
  /** The list has one entry per init container in the manifest. The most recent successful init container will have ready = true, the most recently started container will have startTime set. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-and-container-status */
  readonly "initContainerStatuses"?:
    readonly io$k8s$api$core$v1$ContainerStatus[];
  /** A human readable message indicating details about why the pod is in this condition. */
  readonly "message"?: string;
  /** nominatedNodeName is set only when this pod preempts other pods on the node, but it cannot be scheduled right away as preemption victims receive their graceful termination periods. This field does not guarantee that the pod will be scheduled on this node. Scheduler may decide to place the pod elsewhere if other nodes become available sooner. Scheduler may also decide to give the resources on this node to a higher priority pod that is created after preemption. As a result, this field may be different than PodSpec.nodeName when the pod is scheduled. */
  readonly "nominatedNodeName"?: string;
  /** The phase of a Pod is a simple, high-level summary of where the Pod is in its lifecycle. The conditions array, the reason and message fields, and the individual container status arrays contain more detail about the pod's status. There are five possible phase values:

Pending: The pod has been accepted by the Kubernetes system, but one or more of the container images has not been created. This includes time before being scheduled as well as time spent downloading images over the network, which could take a while. Running: The pod has been bound to a node, and all of the containers have been created. At least one container is still running, or is in the process of starting or restarting. Succeeded: All containers in the pod have terminated in success, and will not be restarted. Failed: All containers in the pod have terminated, and at least one container has terminated in failure. The container either exited with non-zero status or was terminated by the system. Unknown: For some reason the state of the pod could not be obtained, typically due to an error in communicating with the host of the pod.

More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-phase */
  readonly "phase"?: string;
  /** IP address allocated to the pod. Routable at least within the cluster. Empty if not yet allocated. */
  readonly "podIP"?: string;
  /** The Quality of Service (QOS) classification assigned to the pod based on resource requirements See PodQOSClass type for available QOS classes More info: https://git.k8s.io/community/contributors/design-proposals/node/resource-qos.md */
  readonly "qosClass"?: string;
  /** A brief CamelCase message indicating details about why the pod is in this state. e.g. 'Evicted' */
  readonly "reason"?: string;
  /** RFC 3339 date and time at which the object was acknowledged by the Kubelet. This is before the Kubelet pulled the container image(s) for the pod. */
  readonly "startTime"?: io$k8s$apimachinery$pkg$apis$meta$v1$Time;
};

/** PodTemplate describes a template for creating copies of a predefined pod. */
export type io$k8s$api$core$v1$PodTemplate = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "PodTemplate";
  /** Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ObjectMeta;
  /** Template defines the pods that will be created from this pod template. https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status */
  readonly "template"?: io$k8s$api$core$v1$PodTemplateSpec;
};

/** PodTemplateList is a list of PodTemplates. */
export type io$k8s$api$core$v1$PodTemplateList = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** List of pod templates */
  readonly "items": readonly io$k8s$api$core$v1$PodTemplate[];
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "PodTemplateList";
  /** Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ListMeta;
};

/** PodTemplateSpec describes the data a pod should have when created from a template */
export type io$k8s$api$core$v1$PodTemplateSpec = {
  /** Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ObjectMeta;
  /** Specification of the desired behavior of the pod. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status */
  readonly "spec"?: io$k8s$api$core$v1$PodSpec;
};

/** PortworxVolumeSource represents a Portworx volume resource. */
export type io$k8s$api$core$v1$PortworxVolumeSource = {
  /** FSType represents the filesystem type to mount Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs". Implicitly inferred to be "ext4" if unspecified. */
  readonly "fsType"?: string;
  /** Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. */
  readonly "readOnly"?: boolean;
  /** VolumeID uniquely identifies a Portworx volume */
  readonly "volumeID": string;
};

/** An empty preferred scheduling term matches all objects with implicit weight 0 (i.e. it's a no-op). A null preferred scheduling term matches no objects (i.e. is also a no-op). */
export type io$k8s$api$core$v1$PreferredSchedulingTerm = {
  /** A node selector term, associated with the corresponding weight. */
  readonly "preference": io$k8s$api$core$v1$NodeSelectorTerm;
  /** Weight associated with matching the corresponding nodeSelectorTerm, in the range 1-100. */
  readonly "weight": number;
};

/** Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic. */
export type io$k8s$api$core$v1$Probe = {
  /** One and only one of the following should be specified. Exec specifies the action to take. */
  readonly "exec"?: io$k8s$api$core$v1$ExecAction;
  /** Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1. */
  readonly "failureThreshold"?: number;
  /** HTTPGet specifies the http request to perform. */
  readonly "httpGet"?: io$k8s$api$core$v1$HTTPGetAction;
  /** Number of seconds after the container has started before liveness probes are initiated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes */
  readonly "initialDelaySeconds"?: number;
  /** How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1. */
  readonly "periodSeconds"?: number;
  /** Minimum consecutive successes for the probe to be considered successful after having failed. Defaults to 1. Must be 1 for liveness. Minimum value is 1. */
  readonly "successThreshold"?: number;
  /** TCPSocket specifies an action involving a TCP port. TCP hooks not yet supported */
  readonly "tcpSocket"?: io$k8s$api$core$v1$TCPSocketAction;
  /** Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes */
  readonly "timeoutSeconds"?: number;
};

/** Represents a projected volume source */
export type io$k8s$api$core$v1$ProjectedVolumeSource = {
  /** Mode bits to use on created files by default. Must be a value between 0 and 0777. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
  readonly "defaultMode"?: number;
  /** list of volume projections */
  readonly "sources": readonly io$k8s$api$core$v1$VolumeProjection[];
};

/** Represents a Quobyte mount that lasts the lifetime of a pod. Quobyte volumes do not support ownership management or SELinux relabeling. */
export type io$k8s$api$core$v1$QuobyteVolumeSource = {
  /** Group to map volume access to Default is no group */
  readonly "group"?: string;
  /** ReadOnly here will force the Quobyte volume to be mounted with read-only permissions. Defaults to false. */
  readonly "readOnly"?: boolean;
  /** Registry represents a single or multiple Quobyte Registry services specified as a string as host:port pair (multiple entries are separated with commas) which acts as the central registry for volumes */
  readonly "registry": string;
  /** Tenant owning the given Quobyte volume in the Backend Used with dynamically provisioned Quobyte volumes, value is set by the plugin */
  readonly "tenant"?: string;
  /** User to map volume access to Defaults to serivceaccount user */
  readonly "user"?: string;
  /** Volume is a string that references an already created Quobyte volume by name. */
  readonly "volume": string;
};

/** Represents a Rados Block Device mount that lasts the lifetime of a pod. RBD volumes support ownership management and SELinux relabeling. */
export type io$k8s$api$core$v1$RBDPersistentVolumeSource = {
  /** Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#rbd */
  readonly "fsType"?: string;
  /** The rados image name. More info: https://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it */
  readonly "image": string;
  /** Keyring is the path to key ring for RBDUser. Default is /etc/ceph/keyring. More info: https://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it */
  readonly "keyring"?: string;
  /** A collection of Ceph monitors. More info: https://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it */
  readonly "monitors": readonly string[];
  /** The rados pool name. Default is rbd. More info: https://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it */
  readonly "pool"?: string;
  /** ReadOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. More info: https://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it */
  readonly "readOnly"?: boolean;
  /** SecretRef is name of the authentication secret for RBDUser. If provided overrides keyring. Default is nil. More info: https://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it */
  readonly "secretRef"?: io$k8s$api$core$v1$SecretReference;
  /** The rados user name. Default is admin. More info: https://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it */
  readonly "user"?: string;
};

/** Represents a Rados Block Device mount that lasts the lifetime of a pod. RBD volumes support ownership management and SELinux relabeling. */
export type io$k8s$api$core$v1$RBDVolumeSource = {
  /** Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#rbd */
  readonly "fsType"?: string;
  /** The rados image name. More info: https://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it */
  readonly "image": string;
  /** Keyring is the path to key ring for RBDUser. Default is /etc/ceph/keyring. More info: https://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it */
  readonly "keyring"?: string;
  /** A collection of Ceph monitors. More info: https://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it */
  readonly "monitors": readonly string[];
  /** The rados pool name. Default is rbd. More info: https://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it */
  readonly "pool"?: string;
  /** ReadOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. More info: https://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it */
  readonly "readOnly"?: boolean;
  /** SecretRef is name of the authentication secret for RBDUser. If provided overrides keyring. Default is nil. More info: https://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it */
  readonly "secretRef"?: io$k8s$api$core$v1$LocalObjectReference;
  /** The rados user name. Default is admin. More info: https://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it */
  readonly "user"?: string;
};

/** ReplicationController represents the configuration of a replication controller. */
export type io$k8s$api$core$v1$ReplicationController = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "ReplicationController";
  /** If the Labels of a ReplicationController are empty, they are defaulted to be the same as the Pod(s) that the replication controller manages. Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ObjectMeta;
  /** Spec defines the specification of the desired behavior of the replication controller. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status */
  readonly "spec"?: io$k8s$api$core$v1$ReplicationControllerSpec;
  /** Status is the most recently observed status of the replication controller. This data may be out of date by some window of time. Populated by the system. Read-only. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status */
  readonly "status"?: io$k8s$api$core$v1$ReplicationControllerStatus;
};

/** ReplicationControllerCondition describes the state of a replication controller at a certain point. */
export type io$k8s$api$core$v1$ReplicationControllerCondition = {
  /** The last time the condition transitioned from one status to another. */
  readonly "lastTransitionTime"?: io$k8s$apimachinery$pkg$apis$meta$v1$Time;
  /** A human readable message indicating details about the transition. */
  readonly "message"?: string;
  /** The reason for the condition's last transition. */
  readonly "reason"?: string;
  /** Status of the condition, one of True, False, Unknown. */
  readonly "status": string;
  /** Type of replication controller condition. */
  readonly "type": string;
};

/** ReplicationControllerList is a collection of replication controllers. */
export type io$k8s$api$core$v1$ReplicationControllerList = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** List of replication controllers. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller */
  readonly "items": readonly io$k8s$api$core$v1$ReplicationController[];
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "ReplicationControllerList";
  /** Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ListMeta;
};

/** ReplicationControllerSpec is the specification of a replication controller. */
export type io$k8s$api$core$v1$ReplicationControllerSpec = {
  /** Minimum number of seconds for which a newly created pod should be ready without any of its container crashing, for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready) */
  readonly "minReadySeconds"?: number;
  /** Replicas is the number of desired replicas. This is a pointer to distinguish between explicit zero and unspecified. Defaults to 1. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller#what-is-a-replicationcontroller */
  readonly "replicas"?: number;
  /** Selector is a label query over pods that should match the Replicas count. If Selector is empty, it is defaulted to the labels present on the Pod template. Label keys and values that must match in order to be controlled by this replication controller, if empty defaulted to labels on Pod template. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#label-selectors */
  readonly "selector"?: object;
  /** Template is the object that describes the pod that will be created if insufficient replicas are detected. This takes precedence over a TemplateRef. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller#pod-template */
  readonly "template"?: io$k8s$api$core$v1$PodTemplateSpec;
};

/** ReplicationControllerStatus represents the current status of a replication controller. */
export type io$k8s$api$core$v1$ReplicationControllerStatus = {
  /** The number of available replicas (ready for at least minReadySeconds) for this replication controller. */
  readonly "availableReplicas"?: number;
  /** Represents the latest available observations of a replication controller's current state. */
  readonly "conditions"?:
    readonly io$k8s$api$core$v1$ReplicationControllerCondition[];
  /** The number of pods that have labels matching the labels of the pod template of the replication controller. */
  readonly "fullyLabeledReplicas"?: number;
  /** ObservedGeneration reflects the generation of the most recently observed replication controller. */
  readonly "observedGeneration"?: number;
  /** The number of ready replicas for this replication controller. */
  readonly "readyReplicas"?: number;
  /** Replicas is the most recently oberved number of replicas. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller#what-is-a-replicationcontroller */
  readonly "replicas": number;
};

/** ResourceFieldSelector represents container resources (cpu, memory) and their output format */
export type io$k8s$api$core$v1$ResourceFieldSelector = {
  /** Container name: required for volumes, optional for env vars */
  readonly "containerName"?: string;
  /** Specifies the output format of the exposed resources, defaults to "1" */
  readonly "divisor"?: io$k8s$apimachinery$pkg$api$resource$Quantity;
  /** Required: resource to select */
  readonly "resource": string;
};

/** ResourceQuota sets aggregate quota restrictions enforced per namespace */
export type io$k8s$api$core$v1$ResourceQuota = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "ResourceQuota";
  /** Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ObjectMeta;
  /** Spec defines the desired quota. https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status */
  readonly "spec"?: io$k8s$api$core$v1$ResourceQuotaSpec;
  /** Status defines the actual enforced quota and its current usage. https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status */
  readonly "status"?: io$k8s$api$core$v1$ResourceQuotaStatus;
};

/** ResourceQuotaList is a list of ResourceQuota items. */
export type io$k8s$api$core$v1$ResourceQuotaList = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Items is a list of ResourceQuota objects. More info: https://kubernetes.io/docs/concepts/policy/resource-quotas/ */
  readonly "items": readonly io$k8s$api$core$v1$ResourceQuota[];
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "ResourceQuotaList";
  /** Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ListMeta;
};

/** ResourceQuotaSpec defines the desired hard limits to enforce for Quota. */
export type io$k8s$api$core$v1$ResourceQuotaSpec = {
  /** hard is the set of desired hard limits for each named resource. More info: https://kubernetes.io/docs/concepts/policy/resource-quotas/ */
  readonly "hard"?: object;
  /** scopeSelector is also a collection of filters like scopes that must match each object tracked by a quota but expressed using ScopeSelectorOperator in combination with possible values. For a resource to match, both scopes AND scopeSelector (if specified in spec), must be matched. */
  readonly "scopeSelector"?: io$k8s$api$core$v1$ScopeSelector;
  /** A collection of filters that must match each object tracked by a quota. If not specified, the quota matches all objects. */
  readonly "scopes"?: readonly string[];
};

/** ResourceQuotaStatus defines the enforced hard limits and observed use. */
export type io$k8s$api$core$v1$ResourceQuotaStatus = {
  /** Hard is the set of enforced hard limits for each named resource. More info: https://kubernetes.io/docs/concepts/policy/resource-quotas/ */
  readonly "hard"?: object;
  /** Used is the current observed total usage of the resource in the namespace. */
  readonly "used"?: object;
};

/** ResourceRequirements describes the compute resource requirements. */
export type io$k8s$api$core$v1$ResourceRequirements = {
  /** Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/ */
  readonly "limits"?: object;
  /** Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/ */
  readonly "requests"?: object;
};

/** SELinuxOptions are the labels to be applied to the container */
export type io$k8s$api$core$v1$SELinuxOptions = {
  /** Level is SELinux level label that applies to the container. */
  readonly "level"?: string;
  /** Role is a SELinux role label that applies to the container. */
  readonly "role"?: string;
  /** Type is a SELinux type label that applies to the container. */
  readonly "type"?: string;
  /** User is a SELinux user label that applies to the container. */
  readonly "user"?: string;
};

/** ScaleIOPersistentVolumeSource represents a persistent ScaleIO volume */
export type io$k8s$api$core$v1$ScaleIOPersistentVolumeSource = {
  /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Default is "xfs" */
  readonly "fsType"?: string;
  /** The host address of the ScaleIO API Gateway. */
  readonly "gateway": string;
  /** The name of the ScaleIO Protection Domain for the configured storage. */
  readonly "protectionDomain"?: string;
  /** Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. */
  readonly "readOnly"?: boolean;
  /** SecretRef references to the secret for ScaleIO user and other sensitive information. If this is not provided, Login operation will fail. */
  readonly "secretRef": io$k8s$api$core$v1$SecretReference;
  /** Flag to enable/disable SSL communication with Gateway, default false */
  readonly "sslEnabled"?: boolean;
  /** Indicates whether the storage for a volume should be ThickProvisioned or ThinProvisioned. Default is ThinProvisioned. */
  readonly "storageMode"?: string;
  /** The ScaleIO Storage Pool associated with the protection domain. */
  readonly "storagePool"?: string;
  /** The name of the storage system as configured in ScaleIO. */
  readonly "system": string;
  /** The name of a volume already created in the ScaleIO system that is associated with this volume source. */
  readonly "volumeName"?: string;
};

/** ScaleIOVolumeSource represents a persistent ScaleIO volume */
export type io$k8s$api$core$v1$ScaleIOVolumeSource = {
  /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Default is "xfs". */
  readonly "fsType"?: string;
  /** The host address of the ScaleIO API Gateway. */
  readonly "gateway": string;
  /** The name of the ScaleIO Protection Domain for the configured storage. */
  readonly "protectionDomain"?: string;
  /** Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. */
  readonly "readOnly"?: boolean;
  /** SecretRef references to the secret for ScaleIO user and other sensitive information. If this is not provided, Login operation will fail. */
  readonly "secretRef": io$k8s$api$core$v1$LocalObjectReference;
  /** Flag to enable/disable SSL communication with Gateway, default false */
  readonly "sslEnabled"?: boolean;
  /** Indicates whether the storage for a volume should be ThickProvisioned or ThinProvisioned. Default is ThinProvisioned. */
  readonly "storageMode"?: string;
  /** The ScaleIO Storage Pool associated with the protection domain. */
  readonly "storagePool"?: string;
  /** The name of the storage system as configured in ScaleIO. */
  readonly "system": string;
  /** The name of a volume already created in the ScaleIO system that is associated with this volume source. */
  readonly "volumeName"?: string;
};

/** A scope selector represents the AND of the selectors represented by the scoped-resource selector requirements. */
export type io$k8s$api$core$v1$ScopeSelector = {
  /** A list of scope selector requirements by scope of the resources. */
  readonly "matchExpressions"?:
    readonly io$k8s$api$core$v1$ScopedResourceSelectorRequirement[];
};

/** A scoped-resource selector requirement is a selector that contains values, a scope name, and an operator that relates the scope name and values. */
export type io$k8s$api$core$v1$ScopedResourceSelectorRequirement = {
  /** Represents a scope's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. */
  readonly "operator": string;
  /** The name of the scope that the selector applies to. */
  readonly "scopeName": string;
  /** An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch. */
  readonly "values"?: readonly string[];
};

/** Secret holds secret data of a certain type. The total bytes of the values in the Data field must be less than MaxSecretSize bytes. */
export type io$k8s$api$core$v1$Secret = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Data contains the secret data. Each key must consist of alphanumeric characters, '-', '_' or '.'. The serialized form of the secret data is a base64 encoded string, representing the arbitrary (possibly non-string) data value here. Described in https://tools.ietf.org/html/rfc4648#section-4 */
  readonly "data"?: object;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "Secret";
  /** Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ObjectMeta;
  /** stringData allows specifying non-binary secret data in string form. It is provided as a write-only convenience method. All keys and values are merged into the data field on write, overwriting any existing values. It is never output when reading from the API. */
  readonly "stringData"?: object;
  /** Used to facilitate programmatic handling of secret data. */
  readonly "type"?: string;
};

/** SecretEnvSource selects a Secret to populate the environment variables with.

The contents of the target Secret's Data field will represent the key-value pairs as environment variables. */
export type io$k8s$api$core$v1$SecretEnvSource = {
  /** Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
  readonly "name"?: string;
  /** Specify whether the Secret must be defined */
  readonly "optional"?: boolean;
};

/** SecretKeySelector selects a key of a Secret. */
export type io$k8s$api$core$v1$SecretKeySelector = {
  /** The key of the secret to select from.  Must be a valid secret key. */
  readonly "key": string;
  /** Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
  readonly "name"?: string;
  /** Specify whether the Secret or its key must be defined */
  readonly "optional"?: boolean;
};

/** SecretList is a list of Secret. */
export type io$k8s$api$core$v1$SecretList = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Items is a list of secret objects. More info: https://kubernetes.io/docs/concepts/configuration/secret */
  readonly "items": readonly io$k8s$api$core$v1$Secret[];
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "SecretList";
  /** Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ListMeta;
};

/** Adapts a secret into a projected volume.

The contents of the target Secret's Data field will be presented in a projected volume as files using the keys in the Data field as the file names. Note that this is identical to a secret volume source without the default mode. */
export type io$k8s$api$core$v1$SecretProjection = {
  /** If unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'. */
  readonly "items"?: readonly io$k8s$api$core$v1$KeyToPath[];
  /** Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
  readonly "name"?: string;
  /** Specify whether the Secret or its key must be defined */
  readonly "optional"?: boolean;
};

/** SecretReference represents a Secret Reference. It has enough information to retrieve secret in any namespace */
export type io$k8s$api$core$v1$SecretReference = {
  /** Name is unique within a namespace to reference a secret resource. */
  readonly "name"?: string;
  /** Namespace defines the space within which the secret name must be unique. */
  readonly "namespace"?: string;
};

/** Adapts a Secret into a volume.

The contents of the target Secret's Data field will be presented in a volume as files using the keys in the Data field as the file names. Secret volumes support ownership management and SELinux relabeling. */
export type io$k8s$api$core$v1$SecretVolumeSource = {
  /** Optional: mode bits to use on created files by default. Must be a value between 0 and 0777. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
  readonly "defaultMode"?: number;
  /** If unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'. */
  readonly "items"?: readonly io$k8s$api$core$v1$KeyToPath[];
  /** Specify whether the Secret or its keys must be defined */
  readonly "optional"?: boolean;
  /** Name of the secret in the pod's namespace to use. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret */
  readonly "secretName"?: string;
};

/** SecurityContext holds security configuration that will be applied to a container. Some fields are present in both SecurityContext and PodSecurityContext.  When both are set, the values in SecurityContext take precedence. */
export type io$k8s$api$core$v1$SecurityContext = {
  /** AllowPrivilegeEscalation controls whether a process can gain more privileges than its parent process. This bool directly controls if the no_new_privs flag will be set on the container process. AllowPrivilegeEscalation is true always when the container is: 1) run as Privileged 2) has CAP_SYS_ADMIN */
  readonly "allowPrivilegeEscalation"?: boolean;
  /** The capabilities to add/drop when running containers. Defaults to the default set of capabilities granted by the container runtime. */
  readonly "capabilities"?: io$k8s$api$core$v1$Capabilities;
  /** Run container in privileged mode. Processes in privileged containers are essentially equivalent to root on the host. Defaults to false. */
  readonly "privileged"?: boolean;
  /** procMount denotes the type of proc mount to use for the containers. The default is DefaultProcMount which uses the container runtime defaults for readonly paths and masked paths. This requires the ProcMountType feature flag to be enabled. */
  readonly "procMount"?: string;
  /** Whether this container has a read-only root filesystem. Default is false. */
  readonly "readOnlyRootFilesystem"?: boolean;
  /** The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. */
  readonly "runAsGroup"?: number;
  /** Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. */
  readonly "runAsNonRoot"?: boolean;
  /** The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. */
  readonly "runAsUser"?: number;
  /** The SELinux context to be applied to the container. If unspecified, the container runtime will allocate a random SELinux context for each container.  May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. */
  readonly "seLinuxOptions"?: io$k8s$api$core$v1$SELinuxOptions;
  /** Windows security options. */
  readonly "windowsOptions"?: io$k8s$api$core$v1$WindowsSecurityContextOptions;
};

/** Service is a named abstraction of software service (for example, mysql) consisting of local port (for example 3306) that the proxy listens on, and the selector that determines which pods will answer requests sent through the proxy. */
export type io$k8s$api$core$v1$Service = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "Service";
  /** Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ObjectMeta;
  /** Spec defines the behavior of a service. https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status */
  readonly "spec"?: io$k8s$api$core$v1$ServiceSpec;
  /** Most recently observed status of the service. Populated by the system. Read-only. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status */
  readonly "status"?: io$k8s$api$core$v1$ServiceStatus;
};

/** ServiceAccount binds together: * a name, understood by users, and perhaps by peripheral systems, for an identity * a principal that can be authenticated and authorized * a set of secrets */
export type io$k8s$api$core$v1$ServiceAccount = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** AutomountServiceAccountToken indicates whether pods running as this service account should have an API token automatically mounted. Can be overridden at the pod level. */
  readonly "automountServiceAccountToken"?: boolean;
  /** ImagePullSecrets is a list of references to secrets in the same namespace to use for pulling any images in pods that reference this ServiceAccount. ImagePullSecrets are distinct from Secrets because Secrets can be mounted in the pod, but ImagePullSecrets are only accessed by the kubelet. More info: https://kubernetes.io/docs/concepts/containers/images/#specifying-imagepullsecrets-on-a-pod */
  readonly "imagePullSecrets"?:
    readonly io$k8s$api$core$v1$LocalObjectReference[];
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "ServiceAccount";
  /** Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ObjectMeta;
  /** Secrets is the list of secrets allowed to be used by pods running using this ServiceAccount. More info: https://kubernetes.io/docs/concepts/configuration/secret */
  readonly "secrets"?: readonly io$k8s$api$core$v1$ObjectReference[];
};

/** ServiceAccountList is a list of ServiceAccount objects */
export type io$k8s$api$core$v1$ServiceAccountList = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** List of ServiceAccounts. More info: https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/ */
  readonly "items": readonly io$k8s$api$core$v1$ServiceAccount[];
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "ServiceAccountList";
  /** Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ListMeta;
};

/** ServiceAccountTokenProjection represents a projected service account token volume. This projection can be used to insert a service account token into the pods runtime filesystem for use against APIs (Kubernetes API Server or otherwise). */
export type io$k8s$api$core$v1$ServiceAccountTokenProjection = {
  /** Audience is the intended audience of the token. A recipient of a token must identify itself with an identifier specified in the audience of the token, and otherwise should reject the token. The audience defaults to the identifier of the apiserver. */
  readonly "audience"?: string;
  /** ExpirationSeconds is the requested duration of validity of the service account token. As the token approaches expiration, the kubelet volume plugin will proactively rotate the service account token. The kubelet will start trying to rotate the token if the token is older than 80 percent of its time to live or if the token is older than 24 hours.Defaults to 1 hour and must be at least 10 minutes. */
  readonly "expirationSeconds"?: number;
  /** Path is the path relative to the mount point of the file to project the token into. */
  readonly "path": string;
};

/** ServiceList holds a list of services. */
export type io$k8s$api$core$v1$ServiceList = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** List of services */
  readonly "items": readonly io$k8s$api$core$v1$Service[];
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "ServiceList";
  /** Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ListMeta;
};

/** ServicePort contains information on service's port. */
export type io$k8s$api$core$v1$ServicePort = {
  /** The name of this port within the service. This must be a DNS_LABEL. All ports within a ServiceSpec must have unique names. This maps to the 'Name' field in EndpointPort objects. Optional if only one ServicePort is defined on this service. */
  readonly "name"?: string;
  /** The port on each node on which this service is exposed when type=NodePort or LoadBalancer. Usually assigned by the system. If specified, it will be allocated to the service if unused or else creation of the service will fail. Default is to auto-allocate a port if the ServiceType of this Service requires one. More info: https://kubernetes.io/docs/concepts/services-networking/service/#type-nodeport */
  readonly "nodePort"?: number;
  /** The port that will be exposed by this service. */
  readonly "port": number;
  /** The IP protocol for this port. Supports "TCP", "UDP", and "SCTP". Default is TCP. */
  readonly "protocol"?: string;
  /** Number or name of the port to access on the pods targeted by the service. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. If this is a string, it will be looked up as a named port in the target Pod's container ports. If this is not specified, the value of the 'port' field is used (an identity map). This field is ignored for services with clusterIP=None, and should be omitted or set equal to the 'port' field. More info: https://kubernetes.io/docs/concepts/services-networking/service/#defining-a-service */
  readonly "targetPort"?: io$k8s$apimachinery$pkg$util$intstr$IntOrString;
};

/** ServiceSpec describes the attributes that a user creates on a service. */
export type io$k8s$api$core$v1$ServiceSpec = {
  /** clusterIP is the IP address of the service and is usually assigned randomly by the master. If an address is specified manually and is not in use by others, it will be allocated to the service; otherwise, creation of the service will fail. This field can not be changed through updates. Valid values are "None", empty string (""), or a valid IP address. "None" can be specified for headless services when proxying is not required. Only applies to types ClusterIP, NodePort, and LoadBalancer. Ignored if type is ExternalName. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies */
  readonly "clusterIP"?: string;
  /** externalIPs is a list of IP addresses for which nodes in the cluster will also accept traffic for this service.  These IPs are not managed by Kubernetes.  The user is responsible for ensuring that traffic arrives at a node with this IP.  A common example is external load-balancers that are not part of the Kubernetes system. */
  readonly "externalIPs"?: readonly string[];
  /** externalName is the external reference that kubedns or equivalent will return as a CNAME record for this service. No proxying will be involved. Must be a valid RFC-1123 hostname (https://tools.ietf.org/html/rfc1123) and requires Type to be ExternalName. */
  readonly "externalName"?: string;
  /** externalTrafficPolicy denotes if this Service desires to route external traffic to node-local or cluster-wide endpoints. "Local" preserves the client source IP and avoids a second hop for LoadBalancer and Nodeport type services, but risks potentially imbalanced traffic spreading. "Cluster" obscures the client source IP and may cause a second hop to another node, but should have good overall load-spreading. */
  readonly "externalTrafficPolicy"?: string;
  /** healthCheckNodePort specifies the healthcheck nodePort for the service. If not specified, HealthCheckNodePort is created by the service api backend with the allocated nodePort. Will use user-specified nodePort value if specified by the client. Only effects when Type is set to LoadBalancer and ExternalTrafficPolicy is set to Local. */
  readonly "healthCheckNodePort"?: number;
  /** Only applies to Service Type: LoadBalancer LoadBalancer will get created with the IP specified in this field. This feature depends on whether the underlying cloud-provider supports specifying the loadBalancerIP when a load balancer is created. This field will be ignored if the cloud-provider does not support the feature. */
  readonly "loadBalancerIP"?: string;
  /** If specified and supported by the platform, this will restrict traffic through the cloud-provider load-balancer will be restricted to the specified client IPs. This field will be ignored if the cloud-provider does not support the feature." More info: https://kubernetes.io/docs/tasks/access-application-cluster/configure-cloud-provider-firewall/ */
  readonly "loadBalancerSourceRanges"?: readonly string[];
  /** The list of ports that are exposed by this service. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies */
  readonly "ports"?: readonly io$k8s$api$core$v1$ServicePort[];
  /** publishNotReadyAddresses, when set to true, indicates that DNS implementations must publish the notReadyAddresses of subsets for the Endpoints associated with the Service. The default value is false. The primary use case for setting this field is to use a StatefulSet's Headless Service to propagate SRV records for its Pods without respect to their readiness for purpose of peer discovery. */
  readonly "publishNotReadyAddresses"?: boolean;
  /** Route service traffic to pods with label keys and values matching this selector. If empty or not present, the service is assumed to have an external process managing its endpoints, which Kubernetes will not modify. Only applies to types ClusterIP, NodePort, and LoadBalancer. Ignored if type is ExternalName. More info: https://kubernetes.io/docs/concepts/services-networking/service/ */
  readonly "selector"?: object;
  /** Supports "ClientIP" and "None". Used to maintain session affinity. Enable client IP based session affinity. Must be ClientIP or None. Defaults to None. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies */
  readonly "sessionAffinity"?: string;
  /** sessionAffinityConfig contains the configurations of session affinity. */
  readonly "sessionAffinityConfig"?: io$k8s$api$core$v1$SessionAffinityConfig;
  /** type determines how the Service is exposed. Defaults to ClusterIP. Valid options are ExternalName, ClusterIP, NodePort, and LoadBalancer. "ExternalName" maps to the specified externalName. "ClusterIP" allocates a cluster-internal IP address for load-balancing to endpoints. Endpoints are determined by the selector or if that is not specified, by manual construction of an Endpoints object. If clusterIP is "None", no virtual IP is allocated and the endpoints are published as a set of endpoints rather than a stable IP. "NodePort" builds on ClusterIP and allocates a port on every node which routes to the clusterIP. "LoadBalancer" builds on NodePort and creates an external load-balancer (if supported in the current cloud) which routes to the clusterIP. More info: https://kubernetes.io/docs/concepts/services-networking/service/#publishing-services-service-types */
  readonly "type"?: string;
};

/** ServiceStatus represents the current status of a service. */
export type io$k8s$api$core$v1$ServiceStatus = {
  /** LoadBalancer contains the current status of the load-balancer, if one is present. */
  readonly "loadBalancer"?: io$k8s$api$core$v1$LoadBalancerStatus;
};

/** SessionAffinityConfig represents the configurations of session affinity. */
export type io$k8s$api$core$v1$SessionAffinityConfig = {
  /** clientIP contains the configurations of Client IP based session affinity. */
  readonly "clientIP"?: io$k8s$api$core$v1$ClientIPConfig;
};

/** Represents a StorageOS persistent volume resource. */
export type io$k8s$api$core$v1$StorageOSPersistentVolumeSource = {
  /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. */
  readonly "fsType"?: string;
  /** Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. */
  readonly "readOnly"?: boolean;
  /** SecretRef specifies the secret to use for obtaining the StorageOS API credentials.  If not specified, default values will be attempted. */
  readonly "secretRef"?: io$k8s$api$core$v1$ObjectReference;
  /** VolumeName is the human-readable name of the StorageOS volume.  Volume names are only unique within a namespace. */
  readonly "volumeName"?: string;
  /** VolumeNamespace specifies the scope of the volume within StorageOS.  If no namespace is specified then the Pod's namespace will be used.  This allows the Kubernetes name scoping to be mirrored within StorageOS for tighter integration. Set VolumeName to any name to override the default behaviour. Set to "default" if you are not using namespaces within StorageOS. Namespaces that do not pre-exist within StorageOS will be created. */
  readonly "volumeNamespace"?: string;
};

/** Represents a StorageOS persistent volume resource. */
export type io$k8s$api$core$v1$StorageOSVolumeSource = {
  /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. */
  readonly "fsType"?: string;
  /** Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. */
  readonly "readOnly"?: boolean;
  /** SecretRef specifies the secret to use for obtaining the StorageOS API credentials.  If not specified, default values will be attempted. */
  readonly "secretRef"?: io$k8s$api$core$v1$LocalObjectReference;
  /** VolumeName is the human-readable name of the StorageOS volume.  Volume names are only unique within a namespace. */
  readonly "volumeName"?: string;
  /** VolumeNamespace specifies the scope of the volume within StorageOS.  If no namespace is specified then the Pod's namespace will be used.  This allows the Kubernetes name scoping to be mirrored within StorageOS for tighter integration. Set VolumeName to any name to override the default behaviour. Set to "default" if you are not using namespaces within StorageOS. Namespaces that do not pre-exist within StorageOS will be created. */
  readonly "volumeNamespace"?: string;
};

/** Sysctl defines a kernel parameter to be set */
export type io$k8s$api$core$v1$Sysctl = {
  /** Name of a property to set */
  readonly "name": string;
  /** Value of a property to set */
  readonly "value": string;
};

/** TCPSocketAction describes an action based on opening a socket */
export type io$k8s$api$core$v1$TCPSocketAction = {
  /** Optional: Host name to connect to, defaults to the pod IP. */
  readonly "host"?: string;
  /** Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  readonly "port": io$k8s$apimachinery$pkg$util$intstr$IntOrString;
};

/** The node this Taint is attached to has the "effect" on any pod that does not tolerate the Taint. */
export type io$k8s$api$core$v1$Taint = {
  /** Required. The effect of the taint on pods that do not tolerate the taint. Valid effects are NoSchedule, PreferNoSchedule and NoExecute. */
  readonly "effect": string;
  /** Required. The taint key to be applied to a node. */
  readonly "key": string;
  /** TimeAdded represents the time at which the taint was added. It is only written for NoExecute taints. */
  readonly "timeAdded"?: io$k8s$apimachinery$pkg$apis$meta$v1$Time;
  /** Required. The taint value corresponding to the taint key. */
  readonly "value"?: string;
};

/** The pod this Toleration is attached to tolerates any taint that matches the triple <key,value,effect> using the matching operator <operator>. */
export type io$k8s$api$core$v1$Toleration = {
  /** Effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute. */
  readonly "effect"?: string;
  /** Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys. */
  readonly "key"?: string;
  /** Operator represents a key's relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a pod can tolerate all taints of a particular category. */
  readonly "operator"?: string;
  /** TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system. */
  readonly "tolerationSeconds"?: number;
  /** Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string. */
  readonly "value"?: string;
};

/** A topology selector requirement is a selector that matches given label. This is an alpha feature and may change in the future. */
export type io$k8s$api$core$v1$TopologySelectorLabelRequirement = {
  /** The label key that the selector applies to. */
  readonly "key": string;
  /** An array of string values. One value must match the label to be selected. Each entry in Values is ORed. */
  readonly "values": readonly string[];
};

/** A topology selector term represents the result of label queries. A null or empty topology selector term matches no objects. The requirements of them are ANDed. It provides a subset of functionality as NodeSelectorTerm. This is an alpha feature and may change in the future. */
export type io$k8s$api$core$v1$TopologySelectorTerm = {
  /** A list of topology selector requirements by labels. */
  readonly "matchLabelExpressions"?:
    readonly io$k8s$api$core$v1$TopologySelectorLabelRequirement[];
};

/** TypedLocalObjectReference contains enough information to let you locate the typed referenced object inside the same namespace. */
export type io$k8s$api$core$v1$TypedLocalObjectReference = {
  /** APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required. */
  readonly "apiGroup"?: string;
  /** Kind is the type of resource being referenced */
  readonly "kind": "TypedLocalObjectReference";
  /** Name is the name of resource being referenced */
  readonly "name": string;
};

/** Volume represents a named volume in a pod that may be accessed by any container in the pod. */
export type io$k8s$api$core$v1$Volume = {
  /** AWSElasticBlockStore represents an AWS Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore */
  readonly "awsElasticBlockStore"?:
    io$k8s$api$core$v1$AWSElasticBlockStoreVolumeSource;
  /** AzureDisk represents an Azure Data Disk mount on the host and bind mount to the pod. */
  readonly "azureDisk"?: io$k8s$api$core$v1$AzureDiskVolumeSource;
  /** AzureFile represents an Azure File Service mount on the host and bind mount to the pod. */
  readonly "azureFile"?: io$k8s$api$core$v1$AzureFileVolumeSource;
  /** CephFS represents a Ceph FS mount on the host that shares a pod's lifetime */
  readonly "cephfs"?: io$k8s$api$core$v1$CephFSVolumeSource;
  /** Cinder represents a cinder volume attached and mounted on kubelets host machine More info: https://releases.k8s.io/HEAD/examples/mysql-cinder-pd/README.md */
  readonly "cinder"?: io$k8s$api$core$v1$CinderVolumeSource;
  /** ConfigMap represents a configMap that should populate this volume */
  readonly "configMap"?: io$k8s$api$core$v1$ConfigMapVolumeSource;
  /** CSI (Container Storage Interface) represents storage that is handled by an external CSI driver (Alpha feature). */
  readonly "csi"?: io$k8s$api$core$v1$CSIVolumeSource;
  /** DownwardAPI represents downward API about the pod that should populate this volume */
  readonly "downwardAPI"?: io$k8s$api$core$v1$DownwardAPIVolumeSource;
  /** EmptyDir represents a temporary directory that shares a pod's lifetime. More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir */
  readonly "emptyDir"?: io$k8s$api$core$v1$EmptyDirVolumeSource;
  /** FC represents a Fibre Channel resource that is attached to a kubelet's host machine and then exposed to the pod. */
  readonly "fc"?: io$k8s$api$core$v1$FCVolumeSource;
  /** FlexVolume represents a generic volume resource that is provisioned/attached using an exec based plugin. */
  readonly "flexVolume"?: io$k8s$api$core$v1$FlexVolumeSource;
  /** Flocker represents a Flocker volume attached to a kubelet's host machine. This depends on the Flocker control service being running */
  readonly "flocker"?: io$k8s$api$core$v1$FlockerVolumeSource;
  /** GCEPersistentDisk represents a GCE Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk */
  readonly "gcePersistentDisk"?:
    io$k8s$api$core$v1$GCEPersistentDiskVolumeSource;
  /** GitRepo represents a git repository at a particular revision. DEPRECATED: GitRepo is deprecated. To provision a container with a git repo, mount an EmptyDir into an InitContainer that clones the repo using git, then mount the EmptyDir into the Pod's container. */
  readonly "gitRepo"?: io$k8s$api$core$v1$GitRepoVolumeSource;
  /** Glusterfs represents a Glusterfs mount on the host that shares a pod's lifetime. More info: https://releases.k8s.io/HEAD/examples/volumes/glusterfs/README.md */
  readonly "glusterfs"?: io$k8s$api$core$v1$GlusterfsVolumeSource;
  /** HostPath represents a pre-existing file or directory on the host machine that is directly exposed to the container. This is generally used for system agents or other privileged things that are allowed to see the host machine. Most containers will NOT need this. More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath */
  readonly "hostPath"?: io$k8s$api$core$v1$HostPathVolumeSource;
  /** ISCSI represents an ISCSI Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: https://releases.k8s.io/HEAD/examples/volumes/iscsi/README.md */
  readonly "iscsi"?: io$k8s$api$core$v1$ISCSIVolumeSource;
  /** Volume's name. Must be a DNS_LABEL and unique within the pod. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
  readonly "name": string;
  /** NFS represents an NFS mount on the host that shares a pod's lifetime More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs */
  readonly "nfs"?: io$k8s$api$core$v1$NFSVolumeSource;
  /** PersistentVolumeClaimVolumeSource represents a reference to a PersistentVolumeClaim in the same namespace. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims */
  readonly "persistentVolumeClaim"?:
    io$k8s$api$core$v1$PersistentVolumeClaimVolumeSource;
  /** PhotonPersistentDisk represents a PhotonController persistent disk attached and mounted on kubelets host machine */
  readonly "photonPersistentDisk"?:
    io$k8s$api$core$v1$PhotonPersistentDiskVolumeSource;
  /** PortworxVolume represents a portworx volume attached and mounted on kubelets host machine */
  readonly "portworxVolume"?: io$k8s$api$core$v1$PortworxVolumeSource;
  /** Items for all in one resources secrets, configmaps, and downward API */
  readonly "projected"?: io$k8s$api$core$v1$ProjectedVolumeSource;
  /** Quobyte represents a Quobyte mount on the host that shares a pod's lifetime */
  readonly "quobyte"?: io$k8s$api$core$v1$QuobyteVolumeSource;
  /** RBD represents a Rados Block Device mount on the host that shares a pod's lifetime. More info: https://releases.k8s.io/HEAD/examples/volumes/rbd/README.md */
  readonly "rbd"?: io$k8s$api$core$v1$RBDVolumeSource;
  /** ScaleIO represents a ScaleIO persistent volume attached and mounted on Kubernetes nodes. */
  readonly "scaleIO"?: io$k8s$api$core$v1$ScaleIOVolumeSource;
  /** Secret represents a secret that should populate this volume. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret */
  readonly "secret"?: io$k8s$api$core$v1$SecretVolumeSource;
  /** StorageOS represents a StorageOS volume attached and mounted on Kubernetes nodes. */
  readonly "storageos"?: io$k8s$api$core$v1$StorageOSVolumeSource;
  /** VsphereVolume represents a vSphere volume attached and mounted on kubelets host machine */
  readonly "vsphereVolume"?: io$k8s$api$core$v1$VsphereVirtualDiskVolumeSource;
};

/** volumeDevice describes a mapping of a raw block device within a container. */
export type io$k8s$api$core$v1$VolumeDevice = {
  /** devicePath is the path inside of the container that the device will be mapped to. */
  readonly "devicePath": string;
  /** name must match the name of a persistentVolumeClaim in the pod */
  readonly "name": string;
};

/** VolumeMount describes a mounting of a Volume within a container. */
export type io$k8s$api$core$v1$VolumeMount = {
  /** Path within the container at which the volume should be mounted.  Must not contain ':'. */
  readonly "mountPath": string;
  /** mountPropagation determines how mounts are propagated from the host to container and the other way around. When not set, MountPropagationNone is used. This field is beta in 1.10. */
  readonly "mountPropagation"?: string;
  /** This must match the Name of a Volume. */
  readonly "name": string;
  /** Mounted read-only if true, read-write otherwise (false or unspecified). Defaults to false. */
  readonly "readOnly"?: boolean;
  /** Path within the volume from which the container's volume should be mounted. Defaults to "" (volume's root). */
  readonly "subPath"?: string;
  /** Expanded path within the volume from which the container's volume should be mounted. Behaves similarly to SubPath but environment variable references $(VAR_NAME) are expanded using the container's environment. Defaults to "" (volume's root). SubPathExpr and SubPath are mutually exclusive. This field is beta in 1.15. */
  readonly "subPathExpr"?: string;
};

/** VolumeNodeAffinity defines constraints that limit what nodes this volume can be accessed from. */
export type io$k8s$api$core$v1$VolumeNodeAffinity = {
  /** Required specifies hard node constraints that must be met. */
  readonly "required"?: io$k8s$api$core$v1$NodeSelector;
};

/** Projection that may be projected along with other supported volume types */
export type io$k8s$api$core$v1$VolumeProjection = {
  /** information about the configMap data to project */
  readonly "configMap"?: io$k8s$api$core$v1$ConfigMapProjection;
  /** information about the downwardAPI data to project */
  readonly "downwardAPI"?: io$k8s$api$core$v1$DownwardAPIProjection;
  /** information about the secret data to project */
  readonly "secret"?: io$k8s$api$core$v1$SecretProjection;
  /** information about the serviceAccountToken data to project */
  readonly "serviceAccountToken"?:
    io$k8s$api$core$v1$ServiceAccountTokenProjection;
};

/** Represents a vSphere volume resource. */
export type io$k8s$api$core$v1$VsphereVirtualDiskVolumeSource = {
  /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. */
  readonly "fsType"?: string;
  /** Storage Policy Based Management (SPBM) profile ID associated with the StoragePolicyName. */
  readonly "storagePolicyID"?: string;
  /** Storage Policy Based Management (SPBM) profile name. */
  readonly "storagePolicyName"?: string;
  /** Path that identifies vSphere volume vmdk */
  readonly "volumePath": string;
};

/** The weights of all of the matched WeightedPodAffinityTerm fields are added per-node to find the most preferred node(s) */
export type io$k8s$api$core$v1$WeightedPodAffinityTerm = {
  /** Required. A pod affinity term, associated with the corresponding weight. */
  readonly "podAffinityTerm": io$k8s$api$core$v1$PodAffinityTerm;
  /** weight associated with matching the corresponding podAffinityTerm, in the range 1-100. */
  readonly "weight": number;
};

/** WindowsSecurityContextOptions contain Windows-specific options and credentials. */
export type io$k8s$api$core$v1$WindowsSecurityContextOptions = {
  /** GMSACredentialSpec is where the GMSA admission webhook (https://github.com/kubernetes-sigs/windows-gmsa) inlines the contents of the GMSA credential spec named by the GMSACredentialSpecName field. This field is alpha-level and is only honored by servers that enable the WindowsGMSA feature flag. */
  readonly "gmsaCredentialSpec"?: string;
  /** GMSACredentialSpecName is the name of the GMSA credential spec to use. This field is alpha-level and is only honored by servers that enable the WindowsGMSA feature flag. */
  readonly "gmsaCredentialSpecName"?: string;
};

/** Event is a report of an event somewhere in the cluster. It generally denotes some state change in the system. */
export type io$k8s$api$events$v1beta1$Event = {
  /** What action was taken/failed regarding to the regarding object. */
  readonly "action"?: string;
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Deprecated field assuring backward compatibility with core.v1 Event type */
  readonly "deprecatedCount"?: number;
  /** Deprecated field assuring backward compatibility with core.v1 Event type */
  readonly "deprecatedFirstTimestamp"?:
    io$k8s$apimachinery$pkg$apis$meta$v1$Time;
  /** Deprecated field assuring backward compatibility with core.v1 Event type */
  readonly "deprecatedLastTimestamp"?:
    io$k8s$apimachinery$pkg$apis$meta$v1$Time;
  /** Deprecated field assuring backward compatibility with core.v1 Event type */
  readonly "deprecatedSource"?: io$k8s$api$core$v1$EventSource;
  /** Required. Time when this Event was first observed. */
  readonly "eventTime": io$k8s$apimachinery$pkg$apis$meta$v1$MicroTime;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "Event";
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ObjectMeta;
  /** Optional. A human-readable description of the status of this operation. Maximal length of the note is 1kB, but libraries should be prepared to handle values up to 64kB. */
  readonly "note"?: string;
  /** Why the action was taken. */
  readonly "reason"?: string;
  /** The object this Event is about. In most cases it's an Object reporting controller implements. E.g. ReplicaSetController implements ReplicaSets and this event is emitted because it acts on some changes in a ReplicaSet object. */
  readonly "regarding"?: io$k8s$api$core$v1$ObjectReference;
  /** Optional secondary object for more complex actions. E.g. when regarding object triggers a creation or deletion of related object. */
  readonly "related"?: io$k8s$api$core$v1$ObjectReference;
  /** Name of the controller that emitted this Event, e.g. `kubernetes.io/kubelet`. */
  readonly "reportingController"?: string;
  /** ID of the controller instance, e.g. `kubelet-xyzf`. */
  readonly "reportingInstance"?: string;
  /** Data about the Event series this event represents or nil if it's a singleton Event. */
  readonly "series"?: io$k8s$api$events$v1beta1$EventSeries;
  /** Type of this event (Normal, Warning), new types could be added in the future. */
  readonly "type"?: string;
};

/** EventList is a list of Event objects. */
export type io$k8s$api$events$v1beta1$EventList = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Items is a list of schema objects. */
  readonly "items": readonly io$k8s$api$events$v1beta1$Event[];
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "EventList";
  /** Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ListMeta;
};

/** EventSeries contain information on series of events, i.e. thing that was/is happening continuously for some time. */
export type io$k8s$api$events$v1beta1$EventSeries = {
  /** Number of occurrences in this series up to the last heartbeat time */
  readonly "count": number;
  /** Time when last Event from the series was seen before last heartbeat. */
  readonly "lastObservedTime": io$k8s$apimachinery$pkg$apis$meta$v1$MicroTime;
  /** Information whether this series is ongoing or finished. Deprecated. Planned removal for 1.18 */
  readonly "state": string;
};

/** AllowedCSIDriver represents a single inline CSI Driver that is allowed to be used. */
export type io$k8s$api$extensions$v1beta1$AllowedCSIDriver = {
  /** Name is the registered name of the CSI driver */
  readonly "name": string;
};

/** AllowedFlexVolume represents a single Flexvolume that is allowed to be used. Deprecated: use AllowedFlexVolume from policy API Group instead. */
export type io$k8s$api$extensions$v1beta1$AllowedFlexVolume = {
  /** driver is the name of the Flexvolume driver. */
  readonly "driver": string;
};

/** AllowedHostPath defines the host volume conditions that will be enabled by a policy for pods to use. It requires the path prefix to be defined. Deprecated: use AllowedHostPath from policy API Group instead. */
export type io$k8s$api$extensions$v1beta1$AllowedHostPath = {
  /** pathPrefix is the path prefix that the host volume must match. It does not support `*`. Trailing slashes are trimmed when validating the path prefix with a host path.

Examples: `/foo` would allow `/foo`, `/foo/` and `/foo/bar` `/foo` would not allow `/food` or `/etc/foo` */
  readonly "pathPrefix"?: string;
  /** when set to true, will allow host volumes matching the pathPrefix only if all volume mounts are readOnly. */
  readonly "readOnly"?: boolean;
};

/** DEPRECATED - This group version of DaemonSet is deprecated by apps/v1beta2/DaemonSet. See the release notes for more information. DaemonSet represents the configuration of a daemon set. */
export type io$k8s$api$extensions$v1beta1$DaemonSet = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "DaemonSet";
  /** Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ObjectMeta;
  /** The desired behavior of this daemon set. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status */
  readonly "spec"?: io$k8s$api$extensions$v1beta1$DaemonSetSpec;
  /** The current status of this daemon set. This data may be out of date by some window of time. Populated by the system. Read-only. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status */
  readonly "status"?: io$k8s$api$extensions$v1beta1$DaemonSetStatus;
};

/** DaemonSetCondition describes the state of a DaemonSet at a certain point. */
export type io$k8s$api$extensions$v1beta1$DaemonSetCondition = {
  /** Last time the condition transitioned from one status to another. */
  readonly "lastTransitionTime"?: io$k8s$apimachinery$pkg$apis$meta$v1$Time;
  /** A human readable message indicating details about the transition. */
  readonly "message"?: string;
  /** The reason for the condition's last transition. */
  readonly "reason"?: string;
  /** Status of the condition, one of True, False, Unknown. */
  readonly "status": string;
  /** Type of DaemonSet condition. */
  readonly "type": string;
};

/** DaemonSetList is a collection of daemon sets. */
export type io$k8s$api$extensions$v1beta1$DaemonSetList = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** A list of daemon sets. */
  readonly "items": readonly io$k8s$api$extensions$v1beta1$DaemonSet[];
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "DaemonSetList";
  /** Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ListMeta;
};

/** DaemonSetSpec is the specification of a daemon set. */
export type io$k8s$api$extensions$v1beta1$DaemonSetSpec = {
  /** The minimum number of seconds for which a newly created DaemonSet pod should be ready without any of its container crashing, for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready). */
  readonly "minReadySeconds"?: number;
  /** The number of old history to retain to allow rollback. This is a pointer to distinguish between explicit zero and not specified. Defaults to 10. */
  readonly "revisionHistoryLimit"?: number;
  /** A label query over pods that are managed by the daemon set. Must match in order to be controlled. If empty, defaulted to labels on Pod template. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#label-selectors */
  readonly "selector"?: io$k8s$apimachinery$pkg$apis$meta$v1$LabelSelector;
  /** An object that describes the pod that will be created. The DaemonSet will create exactly one copy of this pod on every node that matches the template's node selector (or on every node if no node selector is specified). More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller#pod-template */
  readonly "template": io$k8s$api$core$v1$PodTemplateSpec;
  /** DEPRECATED. A sequence number representing a specific generation of the template. Populated by the system. It can be set only during the creation. */
  readonly "templateGeneration"?: number;
  /** An update strategy to replace existing DaemonSet pods with new pods. */
  readonly "updateStrategy"?:
    io$k8s$api$extensions$v1beta1$DaemonSetUpdateStrategy;
};

/** DaemonSetStatus represents the current status of a daemon set. */
export type io$k8s$api$extensions$v1beta1$DaemonSetStatus = {
  /** Count of hash collisions for the DaemonSet. The DaemonSet controller uses this field as a collision avoidance mechanism when it needs to create the name for the newest ControllerRevision. */
  readonly "collisionCount"?: number;
  /** Represents the latest available observations of a DaemonSet's current state. */
  readonly "conditions"?:
    readonly io$k8s$api$extensions$v1beta1$DaemonSetCondition[];
  /** The number of nodes that are running at least 1 daemon pod and are supposed to run the daemon pod. More info: https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/ */
  readonly "currentNumberScheduled": number;
  /** The total number of nodes that should be running the daemon pod (including nodes correctly running the daemon pod). More info: https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/ */
  readonly "desiredNumberScheduled": number;
  /** The number of nodes that should be running the daemon pod and have one or more of the daemon pod running and available (ready for at least spec.minReadySeconds) */
  readonly "numberAvailable"?: number;
  /** The number of nodes that are running the daemon pod, but are not supposed to run the daemon pod. More info: https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/ */
  readonly "numberMisscheduled": number;
  /** The number of nodes that should be running the daemon pod and have one or more of the daemon pod running and ready. */
  readonly "numberReady": number;
  /** The number of nodes that should be running the daemon pod and have none of the daemon pod running and available (ready for at least spec.minReadySeconds) */
  readonly "numberUnavailable"?: number;
  /** The most recent generation observed by the daemon set controller. */
  readonly "observedGeneration"?: number;
  /** The total number of nodes that are running updated daemon pod */
  readonly "updatedNumberScheduled"?: number;
};

export type io$k8s$api$extensions$v1beta1$DaemonSetUpdateStrategy = {
  /** Rolling update config params. Present only if type = "RollingUpdate". */
  readonly "rollingUpdate"?:
    io$k8s$api$extensions$v1beta1$RollingUpdateDaemonSet;
  /** Type of daemon set update. Can be "RollingUpdate" or "OnDelete". Default is OnDelete. */
  readonly "type"?: string;
};

/** DEPRECATED - This group version of Deployment is deprecated by apps/v1beta2/Deployment. See the release notes for more information. Deployment enables declarative updates for Pods and ReplicaSets. */
export type io$k8s$api$extensions$v1beta1$Deployment = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "Deployment";
  /** Standard object metadata. */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ObjectMeta;
  /** Specification of the desired behavior of the Deployment. */
  readonly "spec"?: io$k8s$api$extensions$v1beta1$DeploymentSpec;
  /** Most recently observed status of the Deployment. */
  readonly "status"?: io$k8s$api$extensions$v1beta1$DeploymentStatus;
};

/** DeploymentCondition describes the state of a deployment at a certain point. */
export type io$k8s$api$extensions$v1beta1$DeploymentCondition = {
  /** Last time the condition transitioned from one status to another. */
  readonly "lastTransitionTime"?: io$k8s$apimachinery$pkg$apis$meta$v1$Time;
  /** The last time this condition was updated. */
  readonly "lastUpdateTime"?: io$k8s$apimachinery$pkg$apis$meta$v1$Time;
  /** A human readable message indicating details about the transition. */
  readonly "message"?: string;
  /** The reason for the condition's last transition. */
  readonly "reason"?: string;
  /** Status of the condition, one of True, False, Unknown. */
  readonly "status": string;
  /** Type of deployment condition. */
  readonly "type": string;
};

/** DeploymentList is a list of Deployments. */
export type io$k8s$api$extensions$v1beta1$DeploymentList = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Items is the list of Deployments. */
  readonly "items": readonly io$k8s$api$extensions$v1beta1$Deployment[];
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "DeploymentList";
  /** Standard list metadata. */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ListMeta;
};

/** DEPRECATED. DeploymentRollback stores the information required to rollback a deployment. */
export type io$k8s$api$extensions$v1beta1$DeploymentRollback = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "DeploymentRollback";
  /** Required: This must match the Name of a deployment. */
  readonly "name": string;
  /** The config of this deployment rollback. */
  readonly "rollbackTo": io$k8s$api$extensions$v1beta1$RollbackConfig;
  /** The annotations to be updated to a deployment */
  readonly "updatedAnnotations"?: object;
};

/** DeploymentSpec is the specification of the desired behavior of the Deployment. */
export type io$k8s$api$extensions$v1beta1$DeploymentSpec = {
  /** Minimum number of seconds for which a newly created pod should be ready without any of its container crashing, for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready) */
  readonly "minReadySeconds"?: number;
  /** Indicates that the deployment is paused and will not be processed by the deployment controller. */
  readonly "paused"?: boolean;
  /** The maximum time in seconds for a deployment to make progress before it is considered to be failed. The deployment controller will continue to process failed deployments and a condition with a ProgressDeadlineExceeded reason will be surfaced in the deployment status. Note that progress will not be estimated during the time a deployment is paused. This is set to the max value of int32 (i.e. 2147483647) by default, which means "no deadline". */
  readonly "progressDeadlineSeconds"?: number;
  /** Number of desired pods. This is a pointer to distinguish between explicit zero and not specified. Defaults to 1. */
  readonly "replicas"?: number;
  /** The number of old ReplicaSets to retain to allow rollback. This is a pointer to distinguish between explicit zero and not specified. This is set to the max value of int32 (i.e. 2147483647) by default, which means "retaining all old RelicaSets". */
  readonly "revisionHistoryLimit"?: number;
  /** DEPRECATED. The config this deployment is rolling back to. Will be cleared after rollback is done. */
  readonly "rollbackTo"?: io$k8s$api$extensions$v1beta1$RollbackConfig;
  /** Label selector for pods. Existing ReplicaSets whose pods are selected by this will be the ones affected by this deployment. */
  readonly "selector"?: io$k8s$apimachinery$pkg$apis$meta$v1$LabelSelector;
  /** The deployment strategy to use to replace existing pods with new ones. */
  readonly "strategy"?: io$k8s$api$extensions$v1beta1$DeploymentStrategy;
  /** Template describes the pods that will be created. */
  readonly "template": io$k8s$api$core$v1$PodTemplateSpec;
};

/** DeploymentStatus is the most recently observed status of the Deployment. */
export type io$k8s$api$extensions$v1beta1$DeploymentStatus = {
  /** Total number of available pods (ready for at least minReadySeconds) targeted by this deployment. */
  readonly "availableReplicas"?: number;
  /** Count of hash collisions for the Deployment. The Deployment controller uses this field as a collision avoidance mechanism when it needs to create the name for the newest ReplicaSet. */
  readonly "collisionCount"?: number;
  /** Represents the latest available observations of a deployment's current state. */
  readonly "conditions"?:
    readonly io$k8s$api$extensions$v1beta1$DeploymentCondition[];
  /** The generation observed by the deployment controller. */
  readonly "observedGeneration"?: number;
  /** Total number of ready pods targeted by this deployment. */
  readonly "readyReplicas"?: number;
  /** Total number of non-terminated pods targeted by this deployment (their labels match the selector). */
  readonly "replicas"?: number;
  /** Total number of unavailable pods targeted by this deployment. This is the total number of pods that are still required for the deployment to have 100% available capacity. They may either be pods that are running but not yet available or pods that still have not been created. */
  readonly "unavailableReplicas"?: number;
  /** Total number of non-terminated pods targeted by this deployment that have the desired template spec. */
  readonly "updatedReplicas"?: number;
};

/** DeploymentStrategy describes how to replace existing pods with new ones. */
export type io$k8s$api$extensions$v1beta1$DeploymentStrategy = {
  /** Rolling update config params. Present only if DeploymentStrategyType = RollingUpdate. */
  readonly "rollingUpdate"?:
    io$k8s$api$extensions$v1beta1$RollingUpdateDeployment;
  /** Type of deployment. Can be "Recreate" or "RollingUpdate". Default is RollingUpdate. */
  readonly "type"?: string;
};

/** FSGroupStrategyOptions defines the strategy type and options used to create the strategy. Deprecated: use FSGroupStrategyOptions from policy API Group instead. */
export type io$k8s$api$extensions$v1beta1$FSGroupStrategyOptions = {
  /** ranges are the allowed ranges of fs groups.  If you would like to force a single fs group then supply a single range with the same start and end. Required for MustRunAs. */
  readonly "ranges"?: readonly io$k8s$api$extensions$v1beta1$IDRange[];
  /** rule is the strategy that will dictate what FSGroup is used in the SecurityContext. */
  readonly "rule"?: string;
};

/** HTTPIngressPath associates a path regex with a backend. Incoming urls matching the path are forwarded to the backend. */
export type io$k8s$api$extensions$v1beta1$HTTPIngressPath = {
  /** Backend defines the referenced service endpoint to which the traffic will be forwarded to. */
  readonly "backend": io$k8s$api$extensions$v1beta1$IngressBackend;
  /** Path is an extended POSIX regex as defined by IEEE Std 1003.1, (i.e this follows the egrep/unix syntax, not the perl syntax) matched against the path of an incoming request. Currently it can contain characters disallowed from the conventional "path" part of a URL as defined by RFC 3986. Paths must begin with a '/'. If unspecified, the path defaults to a catch all sending traffic to the backend. */
  readonly "path"?: string;
};

/** HTTPIngressRuleValue is a list of http selectors pointing to backends. In the example: http://<host>/<path>?<searchpart> -> backend where where parts of the url correspond to RFC 3986, this resource will be used to match against everything after the last '/' and before the first '?' or '#'. */
export type io$k8s$api$extensions$v1beta1$HTTPIngressRuleValue = {
  /** A collection of paths that map requests to backends. */
  readonly "paths": readonly io$k8s$api$extensions$v1beta1$HTTPIngressPath[];
};

/** HostPortRange defines a range of host ports that will be enabled by a policy for pods to use.  It requires both the start and end to be defined. Deprecated: use HostPortRange from policy API Group instead. */
export type io$k8s$api$extensions$v1beta1$HostPortRange = {
  /** max is the end of the range, inclusive. */
  readonly "max": number;
  /** min is the start of the range, inclusive. */
  readonly "min": number;
};

/** IDRange provides a min/max of an allowed range of IDs. Deprecated: use IDRange from policy API Group instead. */
export type io$k8s$api$extensions$v1beta1$IDRange = {
  /** max is the end of the range, inclusive. */
  readonly "max": number;
  /** min is the start of the range, inclusive. */
  readonly "min": number;
};

/** DEPRECATED 1.9 - This group version of IPBlock is deprecated by networking/v1/IPBlock. IPBlock describes a particular CIDR (Ex. "192.168.1.1/24") that is allowed to the pods matched by a NetworkPolicySpec's podSelector. The except entry describes CIDRs that should not be included within this rule. */
export type io$k8s$api$extensions$v1beta1$IPBlock = {
  /** CIDR is a string representing the IP Block Valid examples are "192.168.1.1/24" */
  readonly "cidr": string;
  /** Except is a slice of CIDRs that should not be included within an IP Block Valid examples are "192.168.1.1/24" Except values will be rejected if they are outside the CIDR range */
  readonly "except"?: readonly string[];
};

/** Ingress is a collection of rules that allow inbound connections to reach the endpoints defined by a backend. An Ingress can be configured to give services externally-reachable urls, load balance traffic, terminate SSL, offer name based virtual hosting etc. DEPRECATED - This group version of Ingress is deprecated by networking.k8s.io/v1beta1 Ingress. See the release notes for more information. */
export type io$k8s$api$extensions$v1beta1$Ingress = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "Ingress";
  /** Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ObjectMeta;
  /** Spec is the desired state of the Ingress. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status */
  readonly "spec"?: io$k8s$api$extensions$v1beta1$IngressSpec;
  /** Status is the current state of the Ingress. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status */
  readonly "status"?: io$k8s$api$extensions$v1beta1$IngressStatus;
};

/** IngressBackend describes all endpoints for a given service and port. */
export type io$k8s$api$extensions$v1beta1$IngressBackend = {
  /** Specifies the name of the referenced service. */
  readonly "serviceName": string;
  /** Specifies the port of the referenced service. */
  readonly "servicePort": io$k8s$apimachinery$pkg$util$intstr$IntOrString;
};

/** IngressList is a collection of Ingress. */
export type io$k8s$api$extensions$v1beta1$IngressList = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Items is the list of Ingress. */
  readonly "items": readonly io$k8s$api$extensions$v1beta1$Ingress[];
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "IngressList";
  /** Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ListMeta;
};

/** IngressRule represents the rules mapping the paths under a specified host to the related backend services. Incoming requests are first evaluated for a host match, then routed to the backend associated with the matching IngressRuleValue. */
export type io$k8s$api$extensions$v1beta1$IngressRule = {
  /** Host is the fully qualified domain name of a network host, as defined by RFC 3986. Note the following deviations from the "host" part of the URI as defined in the RFC: 1. IPs are not allowed. Currently an IngressRuleValue can only apply to the
	  IP in the Spec of the parent Ingress.
2. The `:` delimiter is not respected because ports are not allowed.
	  Currently the port of an Ingress is implicitly :80 for http and
	  :443 for https.
Both these may change in the future. Incoming requests are matched against the host before the IngressRuleValue. If the host is unspecified, the Ingress routes all traffic based on the specified IngressRuleValue. */
  readonly "host"?: string;
  readonly "http"?: io$k8s$api$extensions$v1beta1$HTTPIngressRuleValue;
};

/** IngressSpec describes the Ingress the user wishes to exist. */
export type io$k8s$api$extensions$v1beta1$IngressSpec = {
  /** A default backend capable of servicing requests that don't match any rule. At least one of 'backend' or 'rules' must be specified. This field is optional to allow the loadbalancer controller or defaulting logic to specify a global default. */
  readonly "backend"?: io$k8s$api$extensions$v1beta1$IngressBackend;
  /** A list of host rules used to configure the Ingress. If unspecified, or no rule matches, all traffic is sent to the default backend. */
  readonly "rules"?: readonly io$k8s$api$extensions$v1beta1$IngressRule[];
  /** TLS configuration. Currently the Ingress only supports a single TLS port, 443. If multiple members of this list specify different hosts, they will be multiplexed on the same port according to the hostname specified through the SNI TLS extension, if the ingress controller fulfilling the ingress supports SNI. */
  readonly "tls"?: readonly io$k8s$api$extensions$v1beta1$IngressTLS[];
};

/** IngressStatus describe the current state of the Ingress. */
export type io$k8s$api$extensions$v1beta1$IngressStatus = {
  /** LoadBalancer contains the current status of the load-balancer. */
  readonly "loadBalancer"?: io$k8s$api$core$v1$LoadBalancerStatus;
};

/** IngressTLS describes the transport layer security associated with an Ingress. */
export type io$k8s$api$extensions$v1beta1$IngressTLS = {
  /** Hosts are a list of hosts included in the TLS certificate. The values in this list must match the name/s used in the tlsSecret. Defaults to the wildcard host setting for the loadbalancer controller fulfilling this Ingress, if left unspecified. */
  readonly "hosts"?: readonly string[];
  /** SecretName is the name of the secret used to terminate SSL traffic on 443. Field is left optional to allow SSL routing based on SNI hostname alone. If the SNI host in a listener conflicts with the "Host" header field used by an IngressRule, the SNI host is used for termination and value of the Host header is used for routing. */
  readonly "secretName"?: string;
};

/** DEPRECATED 1.9 - This group version of NetworkPolicy is deprecated by networking/v1/NetworkPolicy. NetworkPolicy describes what network traffic is allowed for a set of Pods */
export type io$k8s$api$extensions$v1beta1$NetworkPolicy = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "NetworkPolicy";
  /** Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ObjectMeta;
  /** Specification of the desired behavior for this NetworkPolicy. */
  readonly "spec"?: io$k8s$api$extensions$v1beta1$NetworkPolicySpec;
};

/** DEPRECATED 1.9 - This group version of NetworkPolicyEgressRule is deprecated by networking/v1/NetworkPolicyEgressRule. NetworkPolicyEgressRule describes a particular set of traffic that is allowed out of pods matched by a NetworkPolicySpec's podSelector. The traffic must match both ports and to. This type is beta-level in 1.8 */
export type io$k8s$api$extensions$v1beta1$NetworkPolicyEgressRule = {
  /** List of destination ports for outgoing traffic. Each item in this list is combined using a logical OR. If this field is empty or missing, this rule matches all ports (traffic not restricted by port). If this field is present and contains at least one item, then this rule allows traffic only if the traffic matches at least one port in the list. */
  readonly "ports"?: readonly io$k8s$api$extensions$v1beta1$NetworkPolicyPort[];
  /** List of destinations for outgoing traffic of pods selected for this rule. Items in this list are combined using a logical OR operation. If this field is empty or missing, this rule matches all destinations (traffic not restricted by destination). If this field is present and contains at least one item, this rule allows traffic only if the traffic matches at least one item in the to list. */
  readonly "to"?: readonly io$k8s$api$extensions$v1beta1$NetworkPolicyPeer[];
};

/** DEPRECATED 1.9 - This group version of NetworkPolicyIngressRule is deprecated by networking/v1/NetworkPolicyIngressRule. This NetworkPolicyIngressRule matches traffic if and only if the traffic matches both ports AND from. */
export type io$k8s$api$extensions$v1beta1$NetworkPolicyIngressRule = {
  /** List of sources which should be able to access the pods selected for this rule. Items in this list are combined using a logical OR operation. If this field is empty or missing, this rule matches all sources (traffic not restricted by source). If this field is present and contains at least on item, this rule allows traffic only if the traffic matches at least one item in the from list. */
  readonly "from"?: readonly io$k8s$api$extensions$v1beta1$NetworkPolicyPeer[];
  /** List of ports which should be made accessible on the pods selected for this rule. Each item in this list is combined using a logical OR. If this field is empty or missing, this rule matches all ports (traffic not restricted by port). If this field is present and contains at least one item, then this rule allows traffic only if the traffic matches at least one port in the list. */
  readonly "ports"?: readonly io$k8s$api$extensions$v1beta1$NetworkPolicyPort[];
};

/** DEPRECATED 1.9 - This group version of NetworkPolicyList is deprecated by networking/v1/NetworkPolicyList. Network Policy List is a list of NetworkPolicy objects. */
export type io$k8s$api$extensions$v1beta1$NetworkPolicyList = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Items is a list of schema objects. */
  readonly "items": readonly io$k8s$api$extensions$v1beta1$NetworkPolicy[];
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "NetworkPolicyList";
  /** Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ListMeta;
};

/** DEPRECATED 1.9 - This group version of NetworkPolicyPeer is deprecated by networking/v1/NetworkPolicyPeer. */
export type io$k8s$api$extensions$v1beta1$NetworkPolicyPeer = {
  /** IPBlock defines policy on a particular IPBlock. If this field is set then neither of the other fields can be. */
  readonly "ipBlock"?: io$k8s$api$extensions$v1beta1$IPBlock;
  /** Selects Namespaces using cluster-scoped labels. This field follows standard label selector semantics; if present but empty, it selects all namespaces.

If PodSelector is also set, then the NetworkPolicyPeer as a whole selects the Pods matching PodSelector in the Namespaces selected by NamespaceSelector. Otherwise it selects all Pods in the Namespaces selected by NamespaceSelector. */
  readonly "namespaceSelector"?:
    io$k8s$apimachinery$pkg$apis$meta$v1$LabelSelector;
  /** This is a label selector which selects Pods. This field follows standard label selector semantics; if present but empty, it selects all pods.

If NamespaceSelector is also set, then the NetworkPolicyPeer as a whole selects the Pods matching PodSelector in the Namespaces selected by NamespaceSelector. Otherwise it selects the Pods matching PodSelector in the policy's own Namespace. */
  readonly "podSelector"?: io$k8s$apimachinery$pkg$apis$meta$v1$LabelSelector;
};

/** DEPRECATED 1.9 - This group version of NetworkPolicyPort is deprecated by networking/v1/NetworkPolicyPort. */
export type io$k8s$api$extensions$v1beta1$NetworkPolicyPort = {
  /** If specified, the port on the given protocol.  This can either be a numerical or named port on a pod.  If this field is not provided, this matches all port names and numbers. If present, only traffic on the specified protocol AND port will be matched. */
  readonly "port"?: io$k8s$apimachinery$pkg$util$intstr$IntOrString;
  /** Optional.  The protocol (TCP, UDP, or SCTP) which traffic must match. If not specified, this field defaults to TCP. */
  readonly "protocol"?: string;
};

/** DEPRECATED 1.9 - This group version of NetworkPolicySpec is deprecated by networking/v1/NetworkPolicySpec. */
export type io$k8s$api$extensions$v1beta1$NetworkPolicySpec = {
  /** List of egress rules to be applied to the selected pods. Outgoing traffic is allowed if there are no NetworkPolicies selecting the pod (and cluster policy otherwise allows the traffic), OR if the traffic matches at least one egress rule across all of the NetworkPolicy objects whose podSelector matches the pod. If this field is empty then this NetworkPolicy limits all outgoing traffic (and serves solely to ensure that the pods it selects are isolated by default). This field is beta-level in 1.8 */
  readonly "egress"?:
    readonly io$k8s$api$extensions$v1beta1$NetworkPolicyEgressRule[];
  /** List of ingress rules to be applied to the selected pods. Traffic is allowed to a pod if there are no NetworkPolicies selecting the pod OR if the traffic source is the pod's local node, OR if the traffic matches at least one ingress rule across all of the NetworkPolicy objects whose podSelector matches the pod. If this field is empty then this NetworkPolicy does not allow any traffic (and serves solely to ensure that the pods it selects are isolated by default). */
  readonly "ingress"?:
    readonly io$k8s$api$extensions$v1beta1$NetworkPolicyIngressRule[];
  /** Selects the pods to which this NetworkPolicy object applies.  The array of ingress rules is applied to any pods selected by this field. Multiple network policies can select the same set of pods.  In this case, the ingress rules for each are combined additively. This field is NOT optional and follows standard label selector semantics. An empty podSelector matches all pods in this namespace. */
  readonly "podSelector": io$k8s$apimachinery$pkg$apis$meta$v1$LabelSelector;
  /** List of rule types that the NetworkPolicy relates to. Valid options are "Ingress", "Egress", or "Ingress,Egress". If this field is not specified, it will default based on the existence of Ingress or Egress rules; policies that contain an Egress section are assumed to affect Egress, and all policies (whether or not they contain an Ingress section) are assumed to affect Ingress. If you want to write an egress-only policy, you must explicitly specify policyTypes [ "Egress" ]. Likewise, if you want to write a policy that specifies that no egress is allowed, you must specify a policyTypes value that include "Egress" (since such a policy would not include an Egress section and would otherwise default to just [ "Ingress" ]). This field is beta-level in 1.8 */
  readonly "policyTypes"?: readonly string[];
};

/** PodSecurityPolicy governs the ability to make requests that affect the Security Context that will be applied to a pod and container. Deprecated: use PodSecurityPolicy from policy API Group instead. */
export type io$k8s$api$extensions$v1beta1$PodSecurityPolicy = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "PodSecurityPolicy";
  /** Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ObjectMeta;
  /** spec defines the policy enforced. */
  readonly "spec"?: io$k8s$api$extensions$v1beta1$PodSecurityPolicySpec;
};

/** PodSecurityPolicyList is a list of PodSecurityPolicy objects. Deprecated: use PodSecurityPolicyList from policy API Group instead. */
export type io$k8s$api$extensions$v1beta1$PodSecurityPolicyList = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** items is a list of schema objects. */
  readonly "items": readonly io$k8s$api$extensions$v1beta1$PodSecurityPolicy[];
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "PodSecurityPolicyList";
  /** Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ListMeta;
};

/** PodSecurityPolicySpec defines the policy enforced. Deprecated: use PodSecurityPolicySpec from policy API Group instead. */
export type io$k8s$api$extensions$v1beta1$PodSecurityPolicySpec = {
  /** allowPrivilegeEscalation determines if a pod can request to allow privilege escalation. If unspecified, defaults to true. */
  readonly "allowPrivilegeEscalation"?: boolean;
  /** AllowedCSIDrivers is a whitelist of inline CSI drivers that must be explicitly set to be embedded within a pod spec. An empty value indicates that any CSI driver can be used for inline ephemeral volumes. This is an alpha field, and is only honored if the API server enables the CSIInlineVolume feature gate. */
  readonly "allowedCSIDrivers"?:
    readonly io$k8s$api$extensions$v1beta1$AllowedCSIDriver[];
  /** allowedCapabilities is a list of capabilities that can be requested to add to the container. Capabilities in this field may be added at the pod author's discretion. You must not list a capability in both allowedCapabilities and requiredDropCapabilities. */
  readonly "allowedCapabilities"?: readonly string[];
  /** allowedFlexVolumes is a whitelist of allowed Flexvolumes.  Empty or nil indicates that all Flexvolumes may be used.  This parameter is effective only when the usage of the Flexvolumes is allowed in the "volumes" field. */
  readonly "allowedFlexVolumes"?:
    readonly io$k8s$api$extensions$v1beta1$AllowedFlexVolume[];
  /** allowedHostPaths is a white list of allowed host paths. Empty indicates that all host paths may be used. */
  readonly "allowedHostPaths"?:
    readonly io$k8s$api$extensions$v1beta1$AllowedHostPath[];
  /** AllowedProcMountTypes is a whitelist of allowed ProcMountTypes. Empty or nil indicates that only the DefaultProcMountType may be used. This requires the ProcMountType feature flag to be enabled. */
  readonly "allowedProcMountTypes"?: readonly string[];
  /** allowedUnsafeSysctls is a list of explicitly allowed unsafe sysctls, defaults to none. Each entry is either a plain sysctl name or ends in "*" in which case it is considered as a prefix of allowed sysctls. Single * means all unsafe sysctls are allowed. Kubelet has to whitelist all allowed unsafe sysctls explicitly to avoid rejection.

Examples: e.g. "foo^*" allows "foo/bar", "foo/baz", etc. e.g. "foo.*" allows "foo.bar", "foo.baz", etc. */
  readonly "allowedUnsafeSysctls"?: readonly string[];
  /** defaultAddCapabilities is the default set of capabilities that will be added to the container unless the pod spec specifically drops the capability.  You may not list a capability in both defaultAddCapabilities and requiredDropCapabilities. Capabilities added here are implicitly allowed, and need not be included in the allowedCapabilities list. */
  readonly "defaultAddCapabilities"?: readonly string[];
  /** defaultAllowPrivilegeEscalation controls the default setting for whether a process can gain more privileges than its parent process. */
  readonly "defaultAllowPrivilegeEscalation"?: boolean;
  /** forbiddenSysctls is a list of explicitly forbidden sysctls, defaults to none. Each entry is either a plain sysctl name or ends in "*" in which case it is considered as a prefix of forbidden sysctls. Single * means all sysctls are forbidden.

Examples: e.g. "foo^*" forbids "foo/bar", "foo/baz", etc. e.g. "foo.*" forbids "foo.bar", "foo.baz", etc. */
  readonly "forbiddenSysctls"?: readonly string[];
  /** fsGroup is the strategy that will dictate what fs group is used by the SecurityContext. */
  readonly "fsGroup": io$k8s$api$extensions$v1beta1$FSGroupStrategyOptions;
  /** hostIPC determines if the policy allows the use of HostIPC in the pod spec. */
  readonly "hostIPC"?: boolean;
  /** hostNetwork determines if the policy allows the use of HostNetwork in the pod spec. */
  readonly "hostNetwork"?: boolean;
  /** hostPID determines if the policy allows the use of HostPID in the pod spec. */
  readonly "hostPID"?: boolean;
  /** hostPorts determines which host port ranges are allowed to be exposed. */
  readonly "hostPorts"?: readonly io$k8s$api$extensions$v1beta1$HostPortRange[];
  /** privileged determines if a pod can request to be run as privileged. */
  readonly "privileged"?: boolean;
  /** readOnlyRootFilesystem when set to true will force containers to run with a read only root file system.  If the container specifically requests to run with a non-read only root file system the PSP should deny the pod. If set to false the container may run with a read only root file system if it wishes but it will not be forced to. */
  readonly "readOnlyRootFilesystem"?: boolean;
  /** requiredDropCapabilities are the capabilities that will be dropped from the container.  These are required to be dropped and cannot be added. */
  readonly "requiredDropCapabilities"?: readonly string[];
  /** RunAsGroup is the strategy that will dictate the allowable RunAsGroup values that may be set. If this field is omitted, the pod's RunAsGroup can take any value. This field requires the RunAsGroup feature gate to be enabled. */
  readonly "runAsGroup"?:
    io$k8s$api$extensions$v1beta1$RunAsGroupStrategyOptions;
  /** runAsUser is the strategy that will dictate the allowable RunAsUser values that may be set. */
  readonly "runAsUser": io$k8s$api$extensions$v1beta1$RunAsUserStrategyOptions;
  /** runtimeClass is the strategy that will dictate the allowable RuntimeClasses for a pod. If this field is omitted, the pod's runtimeClassName field is unrestricted. Enforcement of this field depends on the RuntimeClass feature gate being enabled. */
  readonly "runtimeClass"?:
    io$k8s$api$extensions$v1beta1$RuntimeClassStrategyOptions;
  /** seLinux is the strategy that will dictate the allowable labels that may be set. */
  readonly "seLinux": io$k8s$api$extensions$v1beta1$SELinuxStrategyOptions;
  /** supplementalGroups is the strategy that will dictate what supplemental groups are used by the SecurityContext. */
  readonly "supplementalGroups":
    io$k8s$api$extensions$v1beta1$SupplementalGroupsStrategyOptions;
  /** volumes is a white list of allowed volume plugins. Empty indicates that no volumes may be used. To allow all volumes you may use '*'. */
  readonly "volumes"?: readonly string[];
};

/** DEPRECATED - This group version of ReplicaSet is deprecated by apps/v1beta2/ReplicaSet. See the release notes for more information. ReplicaSet ensures that a specified number of pod replicas are running at any given time. */
export type io$k8s$api$extensions$v1beta1$ReplicaSet = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "ReplicaSet";
  /** If the Labels of a ReplicaSet are empty, they are defaulted to be the same as the Pod(s) that the ReplicaSet manages. Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ObjectMeta;
  /** Spec defines the specification of the desired behavior of the ReplicaSet. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status */
  readonly "spec"?: io$k8s$api$extensions$v1beta1$ReplicaSetSpec;
  /** Status is the most recently observed status of the ReplicaSet. This data may be out of date by some window of time. Populated by the system. Read-only. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status */
  readonly "status"?: io$k8s$api$extensions$v1beta1$ReplicaSetStatus;
};

/** ReplicaSetCondition describes the state of a replica set at a certain point. */
export type io$k8s$api$extensions$v1beta1$ReplicaSetCondition = {
  /** The last time the condition transitioned from one status to another. */
  readonly "lastTransitionTime"?: io$k8s$apimachinery$pkg$apis$meta$v1$Time;
  /** A human readable message indicating details about the transition. */
  readonly "message"?: string;
  /** The reason for the condition's last transition. */
  readonly "reason"?: string;
  /** Status of the condition, one of True, False, Unknown. */
  readonly "status": string;
  /** Type of replica set condition. */
  readonly "type": string;
};

/** ReplicaSetList is a collection of ReplicaSets. */
export type io$k8s$api$extensions$v1beta1$ReplicaSetList = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** List of ReplicaSets. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller */
  readonly "items": readonly io$k8s$api$extensions$v1beta1$ReplicaSet[];
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "ReplicaSetList";
  /** Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ListMeta;
};

/** ReplicaSetSpec is the specification of a ReplicaSet. */
export type io$k8s$api$extensions$v1beta1$ReplicaSetSpec = {
  /** Minimum number of seconds for which a newly created pod should be ready without any of its container crashing, for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready) */
  readonly "minReadySeconds"?: number;
  /** Replicas is the number of desired replicas. This is a pointer to distinguish between explicit zero and unspecified. Defaults to 1. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller/#what-is-a-replicationcontroller */
  readonly "replicas"?: number;
  /** Selector is a label query over pods that should match the replica count. If the selector is empty, it is defaulted to the labels present on the pod template. Label keys and values that must match in order to be controlled by this replica set. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#label-selectors */
  readonly "selector"?: io$k8s$apimachinery$pkg$apis$meta$v1$LabelSelector;
  /** Template is the object that describes the pod that will be created if insufficient replicas are detected. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller#pod-template */
  readonly "template"?: io$k8s$api$core$v1$PodTemplateSpec;
};

/** ReplicaSetStatus represents the current status of a ReplicaSet. */
export type io$k8s$api$extensions$v1beta1$ReplicaSetStatus = {
  /** The number of available replicas (ready for at least minReadySeconds) for this replica set. */
  readonly "availableReplicas"?: number;
  /** Represents the latest available observations of a replica set's current state. */
  readonly "conditions"?:
    readonly io$k8s$api$extensions$v1beta1$ReplicaSetCondition[];
  /** The number of pods that have labels matching the labels of the pod template of the replicaset. */
  readonly "fullyLabeledReplicas"?: number;
  /** ObservedGeneration reflects the generation of the most recently observed ReplicaSet. */
  readonly "observedGeneration"?: number;
  /** The number of ready replicas for this replica set. */
  readonly "readyReplicas"?: number;
  /** Replicas is the most recently oberved number of replicas. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller/#what-is-a-replicationcontroller */
  readonly "replicas": number;
};

/** DEPRECATED. */
export type io$k8s$api$extensions$v1beta1$RollbackConfig = {
  /** The revision to rollback to. If set to 0, rollback to the last revision. */
  readonly "revision"?: number;
};

/** Spec to control the desired behavior of daemon set rolling update. */
export type io$k8s$api$extensions$v1beta1$RollingUpdateDaemonSet = {
  /** The maximum number of DaemonSet pods that can be unavailable during the update. Value can be an absolute number (ex: 5) or a percentage of total number of DaemonSet pods at the start of the update (ex: 10%). Absolute number is calculated from percentage by rounding up. This cannot be 0. Default value is 1. Example: when this is set to 30%, at most 30% of the total number of nodes that should be running the daemon pod (i.e. status.desiredNumberScheduled) can have their pods stopped for an update at any given time. The update starts by stopping at most 30% of those DaemonSet pods and then brings up new DaemonSet pods in their place. Once the new pods are available, it then proceeds onto other DaemonSet pods, thus ensuring that at least 70% of original number of DaemonSet pods are available at all times during the update. */
  readonly "maxUnavailable"?: io$k8s$apimachinery$pkg$util$intstr$IntOrString;
};

/** Spec to control the desired behavior of rolling update. */
export type io$k8s$api$extensions$v1beta1$RollingUpdateDeployment = {
  /** The maximum number of pods that can be scheduled above the desired number of pods. Value can be an absolute number (ex: 5) or a percentage of desired pods (ex: 10%). This can not be 0 if MaxUnavailable is 0. Absolute number is calculated from percentage by rounding up. By default, a value of 1 is used. Example: when this is set to 30%, the new RC can be scaled up immediately when the rolling update starts, such that the total number of old and new pods do not exceed 130% of desired pods. Once old pods have been killed, new RC can be scaled up further, ensuring that total number of pods running at any time during the update is at most 130% of desired pods. */
  readonly "maxSurge"?: io$k8s$apimachinery$pkg$util$intstr$IntOrString;
  /** The maximum number of pods that can be unavailable during the update. Value can be an absolute number (ex: 5) or a percentage of desired pods (ex: 10%). Absolute number is calculated from percentage by rounding down. This can not be 0 if MaxSurge is 0. By default, a fixed value of 1 is used. Example: when this is set to 30%, the old RC can be scaled down to 70% of desired pods immediately when the rolling update starts. Once new pods are ready, old RC can be scaled down further, followed by scaling up the new RC, ensuring that the total number of pods available at all times during the update is at least 70% of desired pods. */
  readonly "maxUnavailable"?: io$k8s$apimachinery$pkg$util$intstr$IntOrString;
};

/** RunAsGroupStrategyOptions defines the strategy type and any options used to create the strategy. Deprecated: use RunAsGroupStrategyOptions from policy API Group instead. */
export type io$k8s$api$extensions$v1beta1$RunAsGroupStrategyOptions = {
  /** ranges are the allowed ranges of gids that may be used. If you would like to force a single gid then supply a single range with the same start and end. Required for MustRunAs. */
  readonly "ranges"?: readonly io$k8s$api$extensions$v1beta1$IDRange[];
  /** rule is the strategy that will dictate the allowable RunAsGroup values that may be set. */
  readonly "rule": string;
};

/** RunAsUserStrategyOptions defines the strategy type and any options used to create the strategy. Deprecated: use RunAsUserStrategyOptions from policy API Group instead. */
export type io$k8s$api$extensions$v1beta1$RunAsUserStrategyOptions = {
  /** ranges are the allowed ranges of uids that may be used. If you would like to force a single uid then supply a single range with the same start and end. Required for MustRunAs. */
  readonly "ranges"?: readonly io$k8s$api$extensions$v1beta1$IDRange[];
  /** rule is the strategy that will dictate the allowable RunAsUser values that may be set. */
  readonly "rule": string;
};

/** RuntimeClassStrategyOptions define the strategy that will dictate the allowable RuntimeClasses for a pod. */
export type io$k8s$api$extensions$v1beta1$RuntimeClassStrategyOptions = {
  /** allowedRuntimeClassNames is a whitelist of RuntimeClass names that may be specified on a pod. A value of "*" means that any RuntimeClass name is allowed, and must be the only item in the list. An empty list requires the RuntimeClassName field to be unset. */
  readonly "allowedRuntimeClassNames": readonly string[];
  /** defaultRuntimeClassName is the default RuntimeClassName to set on the pod. The default MUST be allowed by the allowedRuntimeClassNames list. A value of nil does not mutate the Pod. */
  readonly "defaultRuntimeClassName"?: string;
};

/** SELinuxStrategyOptions defines the strategy type and any options used to create the strategy. Deprecated: use SELinuxStrategyOptions from policy API Group instead. */
export type io$k8s$api$extensions$v1beta1$SELinuxStrategyOptions = {
  /** rule is the strategy that will dictate the allowable labels that may be set. */
  readonly "rule": string;
  /** seLinuxOptions required to run as; required for MustRunAs More info: https://kubernetes.io/docs/tasks/configure-pod-container/security-context/ */
  readonly "seLinuxOptions"?: io$k8s$api$core$v1$SELinuxOptions;
};

/** represents a scaling request for a resource. */
export type io$k8s$api$extensions$v1beta1$Scale = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "Scale";
  /** Standard object metadata; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata. */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ObjectMeta;
  /** defines the behavior of the scale. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status. */
  readonly "spec"?: io$k8s$api$extensions$v1beta1$ScaleSpec;
  /** current status of the scale. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status. Read-only. */
  readonly "status"?: io$k8s$api$extensions$v1beta1$ScaleStatus;
};

/** describes the attributes of a scale subresource */
export type io$k8s$api$extensions$v1beta1$ScaleSpec = {
  /** desired number of instances for the scaled object. */
  readonly "replicas"?: number;
};

/** represents the current status of a scale subresource. */
export type io$k8s$api$extensions$v1beta1$ScaleStatus = {
  /** actual number of observed instances of the scaled object. */
  readonly "replicas": number;
  /** label query over pods that should match the replicas count. More info: http://kubernetes.io/docs/user-guide/labels#label-selectors */
  readonly "selector"?: object;
  /** label selector for pods that should match the replicas count. This is a serializated version of both map-based and more expressive set-based selectors. This is done to avoid introspection in the clients. The string will be in the same format as the query-param syntax. If the target type only supports map-based selectors, both this field and map-based selector field are populated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#label-selectors */
  readonly "targetSelector"?: string;
};

/** SupplementalGroupsStrategyOptions defines the strategy type and options used to create the strategy. Deprecated: use SupplementalGroupsStrategyOptions from policy API Group instead. */
export type io$k8s$api$extensions$v1beta1$SupplementalGroupsStrategyOptions = {
  /** ranges are the allowed ranges of supplemental groups.  If you would like to force a single supplemental group then supply a single range with the same start and end. Required for MustRunAs. */
  readonly "ranges"?: readonly io$k8s$api$extensions$v1beta1$IDRange[];
  /** rule is the strategy that will dictate what supplemental groups is used in the SecurityContext. */
  readonly "rule"?: string;
};

/** IPBlock describes a particular CIDR (Ex. "192.168.1.1/24") that is allowed to the pods matched by a NetworkPolicySpec's podSelector. The except entry describes CIDRs that should not be included within this rule. */
export type io$k8s$api$networking$v1$IPBlock = {
  /** CIDR is a string representing the IP Block Valid examples are "192.168.1.1/24" */
  readonly "cidr": string;
  /** Except is a slice of CIDRs that should not be included within an IP Block Valid examples are "192.168.1.1/24" Except values will be rejected if they are outside the CIDR range */
  readonly "except"?: readonly string[];
};

/** NetworkPolicy describes what network traffic is allowed for a set of Pods */
export type io$k8s$api$networking$v1$NetworkPolicy = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "NetworkPolicy";
  /** Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ObjectMeta;
  /** Specification of the desired behavior for this NetworkPolicy. */
  readonly "spec"?: io$k8s$api$networking$v1$NetworkPolicySpec;
};

/** NetworkPolicyEgressRule describes a particular set of traffic that is allowed out of pods matched by a NetworkPolicySpec's podSelector. The traffic must match both ports and to. This type is beta-level in 1.8 */
export type io$k8s$api$networking$v1$NetworkPolicyEgressRule = {
  /** List of destination ports for outgoing traffic. Each item in this list is combined using a logical OR. If this field is empty or missing, this rule matches all ports (traffic not restricted by port). If this field is present and contains at least one item, then this rule allows traffic only if the traffic matches at least one port in the list. */
  readonly "ports"?: readonly io$k8s$api$networking$v1$NetworkPolicyPort[];
  /** List of destinations for outgoing traffic of pods selected for this rule. Items in this list are combined using a logical OR operation. If this field is empty or missing, this rule matches all destinations (traffic not restricted by destination). If this field is present and contains at least one item, this rule allows traffic only if the traffic matches at least one item in the to list. */
  readonly "to"?: readonly io$k8s$api$networking$v1$NetworkPolicyPeer[];
};

/** NetworkPolicyIngressRule describes a particular set of traffic that is allowed to the pods matched by a NetworkPolicySpec's podSelector. The traffic must match both ports and from. */
export type io$k8s$api$networking$v1$NetworkPolicyIngressRule = {
  /** List of sources which should be able to access the pods selected for this rule. Items in this list are combined using a logical OR operation. If this field is empty or missing, this rule matches all sources (traffic not restricted by source). If this field is present and contains at least on item, this rule allows traffic only if the traffic matches at least one item in the from list. */
  readonly "from"?: readonly io$k8s$api$networking$v1$NetworkPolicyPeer[];
  /** List of ports which should be made accessible on the pods selected for this rule. Each item in this list is combined using a logical OR. If this field is empty or missing, this rule matches all ports (traffic not restricted by port). If this field is present and contains at least one item, then this rule allows traffic only if the traffic matches at least one port in the list. */
  readonly "ports"?: readonly io$k8s$api$networking$v1$NetworkPolicyPort[];
};

/** NetworkPolicyList is a list of NetworkPolicy objects. */
export type io$k8s$api$networking$v1$NetworkPolicyList = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Items is a list of schema objects. */
  readonly "items": readonly io$k8s$api$networking$v1$NetworkPolicy[];
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "NetworkPolicyList";
  /** Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ListMeta;
};

/** NetworkPolicyPeer describes a peer to allow traffic from. Only certain combinations of fields are allowed */
export type io$k8s$api$networking$v1$NetworkPolicyPeer = {
  /** IPBlock defines policy on a particular IPBlock. If this field is set then neither of the other fields can be. */
  readonly "ipBlock"?: io$k8s$api$networking$v1$IPBlock;
  /** Selects Namespaces using cluster-scoped labels. This field follows standard label selector semantics; if present but empty, it selects all namespaces.

If PodSelector is also set, then the NetworkPolicyPeer as a whole selects the Pods matching PodSelector in the Namespaces selected by NamespaceSelector. Otherwise it selects all Pods in the Namespaces selected by NamespaceSelector. */
  readonly "namespaceSelector"?:
    io$k8s$apimachinery$pkg$apis$meta$v1$LabelSelector;
  /** This is a label selector which selects Pods. This field follows standard label selector semantics; if present but empty, it selects all pods.

If NamespaceSelector is also set, then the NetworkPolicyPeer as a whole selects the Pods matching PodSelector in the Namespaces selected by NamespaceSelector. Otherwise it selects the Pods matching PodSelector in the policy's own Namespace. */
  readonly "podSelector"?: io$k8s$apimachinery$pkg$apis$meta$v1$LabelSelector;
};

/** NetworkPolicyPort describes a port to allow traffic on */
export type io$k8s$api$networking$v1$NetworkPolicyPort = {
  /** The port on the given protocol. This can either be a numerical or named port on a pod. If this field is not provided, this matches all port names and numbers. */
  readonly "port"?: io$k8s$apimachinery$pkg$util$intstr$IntOrString;
  /** The protocol (TCP, UDP, or SCTP) which traffic must match. If not specified, this field defaults to TCP. */
  readonly "protocol"?: string;
};

/** NetworkPolicySpec provides the specification of a NetworkPolicy */
export type io$k8s$api$networking$v1$NetworkPolicySpec = {
  /** List of egress rules to be applied to the selected pods. Outgoing traffic is allowed if there are no NetworkPolicies selecting the pod (and cluster policy otherwise allows the traffic), OR if the traffic matches at least one egress rule across all of the NetworkPolicy objects whose podSelector matches the pod. If this field is empty then this NetworkPolicy limits all outgoing traffic (and serves solely to ensure that the pods it selects are isolated by default). This field is beta-level in 1.8 */
  readonly "egress"?:
    readonly io$k8s$api$networking$v1$NetworkPolicyEgressRule[];
  /** List of ingress rules to be applied to the selected pods. Traffic is allowed to a pod if there are no NetworkPolicies selecting the pod (and cluster policy otherwise allows the traffic), OR if the traffic source is the pod's local node, OR if the traffic matches at least one ingress rule across all of the NetworkPolicy objects whose podSelector matches the pod. If this field is empty then this NetworkPolicy does not allow any traffic (and serves solely to ensure that the pods it selects are isolated by default) */
  readonly "ingress"?:
    readonly io$k8s$api$networking$v1$NetworkPolicyIngressRule[];
  /** Selects the pods to which this NetworkPolicy object applies. The array of ingress rules is applied to any pods selected by this field. Multiple network policies can select the same set of pods. In this case, the ingress rules for each are combined additively. This field is NOT optional and follows standard label selector semantics. An empty podSelector matches all pods in this namespace. */
  readonly "podSelector": io$k8s$apimachinery$pkg$apis$meta$v1$LabelSelector;
  /** List of rule types that the NetworkPolicy relates to. Valid options are "Ingress", "Egress", or "Ingress,Egress". If this field is not specified, it will default based on the existence of Ingress or Egress rules; policies that contain an Egress section are assumed to affect Egress, and all policies (whether or not they contain an Ingress section) are assumed to affect Ingress. If you want to write an egress-only policy, you must explicitly specify policyTypes [ "Egress" ]. Likewise, if you want to write a policy that specifies that no egress is allowed, you must specify a policyTypes value that include "Egress" (since such a policy would not include an Egress section and would otherwise default to just [ "Ingress" ]). This field is beta-level in 1.8 */
  readonly "policyTypes"?: readonly string[];
};

/** HTTPIngressPath associates a path regex with a backend. Incoming urls matching the path are forwarded to the backend. */
export type io$k8s$api$networking$v1beta1$HTTPIngressPath = {
  /** Backend defines the referenced service endpoint to which the traffic will be forwarded to. */
  readonly "backend": io$k8s$api$networking$v1beta1$IngressBackend;
  /** Path is an extended POSIX regex as defined by IEEE Std 1003.1, (i.e this follows the egrep/unix syntax, not the perl syntax) matched against the path of an incoming request. Currently it can contain characters disallowed from the conventional "path" part of a URL as defined by RFC 3986. Paths must begin with a '/'. If unspecified, the path defaults to a catch all sending traffic to the backend. */
  readonly "path"?: string;
};

/** HTTPIngressRuleValue is a list of http selectors pointing to backends. In the example: http://<host>/<path>?<searchpart> -> backend where where parts of the url correspond to RFC 3986, this resource will be used to match against everything after the last '/' and before the first '?' or '#'. */
export type io$k8s$api$networking$v1beta1$HTTPIngressRuleValue = {
  /** A collection of paths that map requests to backends. */
  readonly "paths": readonly io$k8s$api$networking$v1beta1$HTTPIngressPath[];
};

/** Ingress is a collection of rules that allow inbound connections to reach the endpoints defined by a backend. An Ingress can be configured to give services externally-reachable urls, load balance traffic, terminate SSL, offer name based virtual hosting etc. */
export type io$k8s$api$networking$v1beta1$Ingress = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "Ingress";
  /** Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ObjectMeta;
  /** Spec is the desired state of the Ingress. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status */
  readonly "spec"?: io$k8s$api$networking$v1beta1$IngressSpec;
  /** Status is the current state of the Ingress. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status */
  readonly "status"?: io$k8s$api$networking$v1beta1$IngressStatus;
};

/** IngressBackend describes all endpoints for a given service and port. */
export type io$k8s$api$networking$v1beta1$IngressBackend = {
  /** Specifies the name of the referenced service. */
  readonly "serviceName": string;
  /** Specifies the port of the referenced service. */
  readonly "servicePort": io$k8s$apimachinery$pkg$util$intstr$IntOrString;
};

/** IngressList is a collection of Ingress. */
export type io$k8s$api$networking$v1beta1$IngressList = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Items is the list of Ingress. */
  readonly "items": readonly io$k8s$api$networking$v1beta1$Ingress[];
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "IngressList";
  /** Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ListMeta;
};

/** IngressRule represents the rules mapping the paths under a specified host to the related backend services. Incoming requests are first evaluated for a host match, then routed to the backend associated with the matching IngressRuleValue. */
export type io$k8s$api$networking$v1beta1$IngressRule = {
  /** Host is the fully qualified domain name of a network host, as defined by RFC 3986. Note the following deviations from the "host" part of the URI as defined in the RFC: 1. IPs are not allowed. Currently an IngressRuleValue can only apply to the
	  IP in the Spec of the parent Ingress.
2. The `:` delimiter is not respected because ports are not allowed.
	  Currently the port of an Ingress is implicitly :80 for http and
	  :443 for https.
Both these may change in the future. Incoming requests are matched against the host before the IngressRuleValue. If the host is unspecified, the Ingress routes all traffic based on the specified IngressRuleValue. */
  readonly "host"?: string;
  readonly "http"?: io$k8s$api$networking$v1beta1$HTTPIngressRuleValue;
};

/** IngressSpec describes the Ingress the user wishes to exist. */
export type io$k8s$api$networking$v1beta1$IngressSpec = {
  /** A default backend capable of servicing requests that don't match any rule. At least one of 'backend' or 'rules' must be specified. This field is optional to allow the loadbalancer controller or defaulting logic to specify a global default. */
  readonly "backend"?: io$k8s$api$networking$v1beta1$IngressBackend;
  /** A list of host rules used to configure the Ingress. If unspecified, or no rule matches, all traffic is sent to the default backend. */
  readonly "rules"?: readonly io$k8s$api$networking$v1beta1$IngressRule[];
  /** TLS configuration. Currently the Ingress only supports a single TLS port, 443. If multiple members of this list specify different hosts, they will be multiplexed on the same port according to the hostname specified through the SNI TLS extension, if the ingress controller fulfilling the ingress supports SNI. */
  readonly "tls"?: readonly io$k8s$api$networking$v1beta1$IngressTLS[];
};

/** IngressStatus describe the current state of the Ingress. */
export type io$k8s$api$networking$v1beta1$IngressStatus = {
  /** LoadBalancer contains the current status of the load-balancer. */
  readonly "loadBalancer"?: io$k8s$api$core$v1$LoadBalancerStatus;
};

/** IngressTLS describes the transport layer security associated with an Ingress. */
export type io$k8s$api$networking$v1beta1$IngressTLS = {
  /** Hosts are a list of hosts included in the TLS certificate. The values in this list must match the name/s used in the tlsSecret. Defaults to the wildcard host setting for the loadbalancer controller fulfilling this Ingress, if left unspecified. */
  readonly "hosts"?: readonly string[];
  /** SecretName is the name of the secret used to terminate SSL traffic on 443. Field is left optional to allow SSL routing based on SNI hostname alone. If the SNI host in a listener conflicts with the "Host" header field used by an IngressRule, the SNI host is used for termination and value of the Host header is used for routing. */
  readonly "secretName"?: string;
};

/** RuntimeClass defines a class of container runtime supported in the cluster. The RuntimeClass is used to determine which container runtime is used to run all containers in a pod. RuntimeClasses are (currently) manually defined by a user or cluster provisioner, and referenced in the PodSpec. The Kubelet is responsible for resolving the RuntimeClassName reference before running the pod.  For more details, see https://git.k8s.io/enhancements/keps/sig-node/runtime-class.md */
export type io$k8s$api$node$v1beta1$RuntimeClass = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Handler specifies the underlying runtime and configuration that the CRI implementation will use to handle pods of this class. The possible values are specific to the node & CRI configuration.  It is assumed that all handlers are available on every node, and handlers of the same name are equivalent on every node. For example, a handler called "runc" might specify that the runc OCI runtime (using native Linux containers) will be used to run the containers in a pod. The Handler must conform to the DNS Label (RFC 1123) requirements, and is immutable. */
  readonly "handler": string;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "RuntimeClass";
  /** More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ObjectMeta;
};

/** RuntimeClassList is a list of RuntimeClass objects. */
export type io$k8s$api$node$v1beta1$RuntimeClassList = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Items is a list of schema objects. */
  readonly "items": readonly io$k8s$api$node$v1beta1$RuntimeClass[];
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "RuntimeClassList";
  /** Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ListMeta;
};

/** AllowedCSIDriver represents a single inline CSI Driver that is allowed to be used. */
export type io$k8s$api$policy$v1beta1$AllowedCSIDriver = {
  /** Name is the registered name of the CSI driver */
  readonly "name": string;
};

/** AllowedFlexVolume represents a single Flexvolume that is allowed to be used. */
export type io$k8s$api$policy$v1beta1$AllowedFlexVolume = {
  /** driver is the name of the Flexvolume driver. */
  readonly "driver": string;
};

/** AllowedHostPath defines the host volume conditions that will be enabled by a policy for pods to use. It requires the path prefix to be defined. */
export type io$k8s$api$policy$v1beta1$AllowedHostPath = {
  /** pathPrefix is the path prefix that the host volume must match. It does not support `*`. Trailing slashes are trimmed when validating the path prefix with a host path.

Examples: `/foo` would allow `/foo`, `/foo/` and `/foo/bar` `/foo` would not allow `/food` or `/etc/foo` */
  readonly "pathPrefix"?: string;
  /** when set to true, will allow host volumes matching the pathPrefix only if all volume mounts are readOnly. */
  readonly "readOnly"?: boolean;
};

/** Eviction evicts a pod from its node subject to certain policies and safety constraints. This is a subresource of Pod.  A request to cause such an eviction is created by POSTing to .../pods/<pod name>/evictions. */
export type io$k8s$api$policy$v1beta1$Eviction = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** DeleteOptions may be provided */
  readonly "deleteOptions"?: io$k8s$apimachinery$pkg$apis$meta$v1$DeleteOptions;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "Eviction";
  /** ObjectMeta describes the pod that is being evicted. */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ObjectMeta;
};

/** FSGroupStrategyOptions defines the strategy type and options used to create the strategy. */
export type io$k8s$api$policy$v1beta1$FSGroupStrategyOptions = {
  /** ranges are the allowed ranges of fs groups.  If you would like to force a single fs group then supply a single range with the same start and end. Required for MustRunAs. */
  readonly "ranges"?: readonly io$k8s$api$policy$v1beta1$IDRange[];
  /** rule is the strategy that will dictate what FSGroup is used in the SecurityContext. */
  readonly "rule"?: string;
};

/** HostPortRange defines a range of host ports that will be enabled by a policy for pods to use.  It requires both the start and end to be defined. */
export type io$k8s$api$policy$v1beta1$HostPortRange = {
  /** max is the end of the range, inclusive. */
  readonly "max": number;
  /** min is the start of the range, inclusive. */
  readonly "min": number;
};

/** IDRange provides a min/max of an allowed range of IDs. */
export type io$k8s$api$policy$v1beta1$IDRange = {
  /** max is the end of the range, inclusive. */
  readonly "max": number;
  /** min is the start of the range, inclusive. */
  readonly "min": number;
};

/** PodDisruptionBudget is an object to define the max disruption that can be caused to a collection of pods */
export type io$k8s$api$policy$v1beta1$PodDisruptionBudget = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "PodDisruptionBudget";
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ObjectMeta;
  /** Specification of the desired behavior of the PodDisruptionBudget. */
  readonly "spec"?: io$k8s$api$policy$v1beta1$PodDisruptionBudgetSpec;
  /** Most recently observed status of the PodDisruptionBudget. */
  readonly "status"?: io$k8s$api$policy$v1beta1$PodDisruptionBudgetStatus;
};

/** PodDisruptionBudgetList is a collection of PodDisruptionBudgets. */
export type io$k8s$api$policy$v1beta1$PodDisruptionBudgetList = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  readonly "items": readonly io$k8s$api$policy$v1beta1$PodDisruptionBudget[];
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "PodDisruptionBudgetList";
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ListMeta;
};

/** PodDisruptionBudgetSpec is a description of a PodDisruptionBudget. */
export type io$k8s$api$policy$v1beta1$PodDisruptionBudgetSpec = {
  /** An eviction is allowed if at most "maxUnavailable" pods selected by "selector" are unavailable after the eviction, i.e. even in absence of the evicted pod. For example, one can prevent all voluntary evictions by specifying 0. This is a mutually exclusive setting with "minAvailable". */
  readonly "maxUnavailable"?: io$k8s$apimachinery$pkg$util$intstr$IntOrString;
  /** An eviction is allowed if at least "minAvailable" pods selected by "selector" will still be available after the eviction, i.e. even in the absence of the evicted pod.  So for example you can prevent all voluntary evictions by specifying "100%". */
  readonly "minAvailable"?: io$k8s$apimachinery$pkg$util$intstr$IntOrString;
  /** Label query over pods whose evictions are managed by the disruption budget. */
  readonly "selector"?: io$k8s$apimachinery$pkg$apis$meta$v1$LabelSelector;
};

/** PodDisruptionBudgetStatus represents information about the status of a PodDisruptionBudget. Status may trail the actual state of a system. */
export type io$k8s$api$policy$v1beta1$PodDisruptionBudgetStatus = {
  /** current number of healthy pods */
  readonly "currentHealthy": number;
  /** minimum desired number of healthy pods */
  readonly "desiredHealthy": number;
  /** DisruptedPods contains information about pods whose eviction was processed by the API server eviction subresource handler but has not yet been observed by the PodDisruptionBudget controller. A pod will be in this map from the time when the API server processed the eviction request to the time when the pod is seen by PDB controller as having been marked for deletion (or after a timeout). The key in the map is the name of the pod and the value is the time when the API server processed the eviction request. If the deletion didn't occur and a pod is still there it will be removed from the list automatically by PodDisruptionBudget controller after some time. If everything goes smooth this map should be empty for the most of the time. Large number of entries in the map may indicate problems with pod deletions. */
  readonly "disruptedPods"?: object;
  /** Number of pod disruptions that are currently allowed. */
  readonly "disruptionsAllowed": number;
  /** total number of pods counted by this disruption budget */
  readonly "expectedPods": number;
  /** Most recent generation observed when updating this PDB status. PodDisruptionsAllowed and other status informatio is valid only if observedGeneration equals to PDB's object generation. */
  readonly "observedGeneration"?: number;
};

/** PodSecurityPolicy governs the ability to make requests that affect the Security Context that will be applied to a pod and container. */
export type io$k8s$api$policy$v1beta1$PodSecurityPolicy = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "PodSecurityPolicy";
  /** Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ObjectMeta;
  /** spec defines the policy enforced. */
  readonly "spec"?: io$k8s$api$policy$v1beta1$PodSecurityPolicySpec;
};

/** PodSecurityPolicyList is a list of PodSecurityPolicy objects. */
export type io$k8s$api$policy$v1beta1$PodSecurityPolicyList = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** items is a list of schema objects. */
  readonly "items": readonly io$k8s$api$policy$v1beta1$PodSecurityPolicy[];
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "PodSecurityPolicyList";
  /** Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ListMeta;
};

/** PodSecurityPolicySpec defines the policy enforced. */
export type io$k8s$api$policy$v1beta1$PodSecurityPolicySpec = {
  /** allowPrivilegeEscalation determines if a pod can request to allow privilege escalation. If unspecified, defaults to true. */
  readonly "allowPrivilegeEscalation"?: boolean;
  /** AllowedCSIDrivers is a whitelist of inline CSI drivers that must be explicitly set to be embedded within a pod spec. An empty value indicates that any CSI driver can be used for inline ephemeral volumes. This is an alpha field, and is only honored if the API server enables the CSIInlineVolume feature gate. */
  readonly "allowedCSIDrivers"?:
    readonly io$k8s$api$policy$v1beta1$AllowedCSIDriver[];
  /** allowedCapabilities is a list of capabilities that can be requested to add to the container. Capabilities in this field may be added at the pod author's discretion. You must not list a capability in both allowedCapabilities and requiredDropCapabilities. */
  readonly "allowedCapabilities"?: readonly string[];
  /** allowedFlexVolumes is a whitelist of allowed Flexvolumes.  Empty or nil indicates that all Flexvolumes may be used.  This parameter is effective only when the usage of the Flexvolumes is allowed in the "volumes" field. */
  readonly "allowedFlexVolumes"?:
    readonly io$k8s$api$policy$v1beta1$AllowedFlexVolume[];
  /** allowedHostPaths is a white list of allowed host paths. Empty indicates that all host paths may be used. */
  readonly "allowedHostPaths"?:
    readonly io$k8s$api$policy$v1beta1$AllowedHostPath[];
  /** AllowedProcMountTypes is a whitelist of allowed ProcMountTypes. Empty or nil indicates that only the DefaultProcMountType may be used. This requires the ProcMountType feature flag to be enabled. */
  readonly "allowedProcMountTypes"?: readonly string[];
  /** allowedUnsafeSysctls is a list of explicitly allowed unsafe sysctls, defaults to none. Each entry is either a plain sysctl name or ends in "*" in which case it is considered as a prefix of allowed sysctls. Single * means all unsafe sysctls are allowed. Kubelet has to whitelist all allowed unsafe sysctls explicitly to avoid rejection.

Examples: e.g. "foo^*" allows "foo/bar", "foo/baz", etc. e.g. "foo.*" allows "foo.bar", "foo.baz", etc. */
  readonly "allowedUnsafeSysctls"?: readonly string[];
  /** defaultAddCapabilities is the default set of capabilities that will be added to the container unless the pod spec specifically drops the capability.  You may not list a capability in both defaultAddCapabilities and requiredDropCapabilities. Capabilities added here are implicitly allowed, and need not be included in the allowedCapabilities list. */
  readonly "defaultAddCapabilities"?: readonly string[];
  /** defaultAllowPrivilegeEscalation controls the default setting for whether a process can gain more privileges than its parent process. */
  readonly "defaultAllowPrivilegeEscalation"?: boolean;
  /** forbiddenSysctls is a list of explicitly forbidden sysctls, defaults to none. Each entry is either a plain sysctl name or ends in "*" in which case it is considered as a prefix of forbidden sysctls. Single * means all sysctls are forbidden.

Examples: e.g. "foo^*" forbids "foo/bar", "foo/baz", etc. e.g. "foo.*" forbids "foo.bar", "foo.baz", etc. */
  readonly "forbiddenSysctls"?: readonly string[];
  /** fsGroup is the strategy that will dictate what fs group is used by the SecurityContext. */
  readonly "fsGroup": io$k8s$api$policy$v1beta1$FSGroupStrategyOptions;
  /** hostIPC determines if the policy allows the use of HostIPC in the pod spec. */
  readonly "hostIPC"?: boolean;
  /** hostNetwork determines if the policy allows the use of HostNetwork in the pod spec. */
  readonly "hostNetwork"?: boolean;
  /** hostPID determines if the policy allows the use of HostPID in the pod spec. */
  readonly "hostPID"?: boolean;
  /** hostPorts determines which host port ranges are allowed to be exposed. */
  readonly "hostPorts"?: readonly io$k8s$api$policy$v1beta1$HostPortRange[];
  /** privileged determines if a pod can request to be run as privileged. */
  readonly "privileged"?: boolean;
  /** readOnlyRootFilesystem when set to true will force containers to run with a read only root file system.  If the container specifically requests to run with a non-read only root file system the PSP should deny the pod. If set to false the container may run with a read only root file system if it wishes but it will not be forced to. */
  readonly "readOnlyRootFilesystem"?: boolean;
  /** requiredDropCapabilities are the capabilities that will be dropped from the container.  These are required to be dropped and cannot be added. */
  readonly "requiredDropCapabilities"?: readonly string[];
  /** RunAsGroup is the strategy that will dictate the allowable RunAsGroup values that may be set. If this field is omitted, the pod's RunAsGroup can take any value. This field requires the RunAsGroup feature gate to be enabled. */
  readonly "runAsGroup"?: io$k8s$api$policy$v1beta1$RunAsGroupStrategyOptions;
  /** runAsUser is the strategy that will dictate the allowable RunAsUser values that may be set. */
  readonly "runAsUser": io$k8s$api$policy$v1beta1$RunAsUserStrategyOptions;
  /** runtimeClass is the strategy that will dictate the allowable RuntimeClasses for a pod. If this field is omitted, the pod's runtimeClassName field is unrestricted. Enforcement of this field depends on the RuntimeClass feature gate being enabled. */
  readonly "runtimeClass"?:
    io$k8s$api$policy$v1beta1$RuntimeClassStrategyOptions;
  /** seLinux is the strategy that will dictate the allowable labels that may be set. */
  readonly "seLinux": io$k8s$api$policy$v1beta1$SELinuxStrategyOptions;
  /** supplementalGroups is the strategy that will dictate what supplemental groups are used by the SecurityContext. */
  readonly "supplementalGroups":
    io$k8s$api$policy$v1beta1$SupplementalGroupsStrategyOptions;
  /** volumes is a white list of allowed volume plugins. Empty indicates that no volumes may be used. To allow all volumes you may use '*'. */
  readonly "volumes"?: readonly string[];
};

/** RunAsGroupStrategyOptions defines the strategy type and any options used to create the strategy. */
export type io$k8s$api$policy$v1beta1$RunAsGroupStrategyOptions = {
  /** ranges are the allowed ranges of gids that may be used. If you would like to force a single gid then supply a single range with the same start and end. Required for MustRunAs. */
  readonly "ranges"?: readonly io$k8s$api$policy$v1beta1$IDRange[];
  /** rule is the strategy that will dictate the allowable RunAsGroup values that may be set. */
  readonly "rule": string;
};

/** RunAsUserStrategyOptions defines the strategy type and any options used to create the strategy. */
export type io$k8s$api$policy$v1beta1$RunAsUserStrategyOptions = {
  /** ranges are the allowed ranges of uids that may be used. If you would like to force a single uid then supply a single range with the same start and end. Required for MustRunAs. */
  readonly "ranges"?: readonly io$k8s$api$policy$v1beta1$IDRange[];
  /** rule is the strategy that will dictate the allowable RunAsUser values that may be set. */
  readonly "rule": string;
};

/** RuntimeClassStrategyOptions define the strategy that will dictate the allowable RuntimeClasses for a pod. */
export type io$k8s$api$policy$v1beta1$RuntimeClassStrategyOptions = {
  /** allowedRuntimeClassNames is a whitelist of RuntimeClass names that may be specified on a pod. A value of "*" means that any RuntimeClass name is allowed, and must be the only item in the list. An empty list requires the RuntimeClassName field to be unset. */
  readonly "allowedRuntimeClassNames": readonly string[];
  /** defaultRuntimeClassName is the default RuntimeClassName to set on the pod. The default MUST be allowed by the allowedRuntimeClassNames list. A value of nil does not mutate the Pod. */
  readonly "defaultRuntimeClassName"?: string;
};

/** SELinuxStrategyOptions defines the strategy type and any options used to create the strategy. */
export type io$k8s$api$policy$v1beta1$SELinuxStrategyOptions = {
  /** rule is the strategy that will dictate the allowable labels that may be set. */
  readonly "rule": string;
  /** seLinuxOptions required to run as; required for MustRunAs More info: https://kubernetes.io/docs/tasks/configure-pod-container/security-context/ */
  readonly "seLinuxOptions"?: io$k8s$api$core$v1$SELinuxOptions;
};

/** SupplementalGroupsStrategyOptions defines the strategy type and options used to create the strategy. */
export type io$k8s$api$policy$v1beta1$SupplementalGroupsStrategyOptions = {
  /** ranges are the allowed ranges of supplemental groups.  If you would like to force a single supplemental group then supply a single range with the same start and end. Required for MustRunAs. */
  readonly "ranges"?: readonly io$k8s$api$policy$v1beta1$IDRange[];
  /** rule is the strategy that will dictate what supplemental groups is used in the SecurityContext. */
  readonly "rule"?: string;
};

/** AggregationRule describes how to locate ClusterRoles to aggregate into the ClusterRole */
export type io$k8s$api$rbac$v1$AggregationRule = {
  /** ClusterRoleSelectors holds a list of selectors which will be used to find ClusterRoles and create the rules. If any of the selectors match, then the ClusterRole's permissions will be added */
  readonly "clusterRoleSelectors"?:
    readonly io$k8s$apimachinery$pkg$apis$meta$v1$LabelSelector[];
};

/** ClusterRole is a cluster level, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding or ClusterRoleBinding. */
export type io$k8s$api$rbac$v1$ClusterRole = {
  /** AggregationRule is an optional field that describes how to build the Rules for this ClusterRole. If AggregationRule is set, then the Rules are controller managed and direct changes to Rules will be stomped by the controller. */
  readonly "aggregationRule"?: io$k8s$api$rbac$v1$AggregationRule;
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "ClusterRole";
  /** Standard object's metadata. */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ObjectMeta;
  /** Rules holds all the PolicyRules for this ClusterRole */
  readonly "rules"?: readonly io$k8s$api$rbac$v1$PolicyRule[];
};

/** ClusterRoleBinding references a ClusterRole, but not contain it.  It can reference a ClusterRole in the global namespace, and adds who information via Subject. */
export type io$k8s$api$rbac$v1$ClusterRoleBinding = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "ClusterRoleBinding";
  /** Standard object's metadata. */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ObjectMeta;
  /** RoleRef can only reference a ClusterRole in the global namespace. If the RoleRef cannot be resolved, the Authorizer must return an error. */
  readonly "roleRef": io$k8s$api$rbac$v1$RoleRef;
  /** Subjects holds references to the objects the role applies to. */
  readonly "subjects"?: readonly io$k8s$api$rbac$v1$Subject[];
};

/** ClusterRoleBindingList is a collection of ClusterRoleBindings */
export type io$k8s$api$rbac$v1$ClusterRoleBindingList = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Items is a list of ClusterRoleBindings */
  readonly "items": readonly io$k8s$api$rbac$v1$ClusterRoleBinding[];
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "ClusterRoleBindingList";
  /** Standard object's metadata. */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ListMeta;
};

/** ClusterRoleList is a collection of ClusterRoles */
export type io$k8s$api$rbac$v1$ClusterRoleList = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Items is a list of ClusterRoles */
  readonly "items": readonly io$k8s$api$rbac$v1$ClusterRole[];
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "ClusterRoleList";
  /** Standard object's metadata. */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ListMeta;
};

/** PolicyRule holds information that describes a policy rule, but does not contain information about who the rule applies to or which namespace the rule applies to. */
export type io$k8s$api$rbac$v1$PolicyRule = {
  /** APIGroups is the name of the APIGroup that contains the resources.  If multiple API groups are specified, any action requested against one of the enumerated resources in any API group will be allowed. */
  readonly "apiGroups"?: readonly string[];
  /** NonResourceURLs is a set of partial urls that a user should have access to.  *s are allowed, but only as the full, final step in the path Since non-resource URLs are not namespaced, this field is only applicable for ClusterRoles referenced from a ClusterRoleBinding. Rules can either apply to API resources (such as "pods" or "secrets") or non-resource URL paths (such as "/api"),  but not both. */
  readonly "nonResourceURLs"?: readonly string[];
  /** ResourceNames is an optional white list of names that the rule applies to.  An empty set means that everything is allowed. */
  readonly "resourceNames"?: readonly string[];
  /** Resources is a list of resources this rule applies to.  ResourceAll represents all resources. */
  readonly "resources"?: readonly string[];
  /** Verbs is a list of Verbs that apply to ALL the ResourceKinds and AttributeRestrictions contained in this rule.  VerbAll represents all kinds. */
  readonly "verbs": readonly string[];
};

/** Role is a namespaced, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding. */
export type io$k8s$api$rbac$v1$Role = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "Role";
  /** Standard object's metadata. */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ObjectMeta;
  /** Rules holds all the PolicyRules for this Role */
  readonly "rules"?: readonly io$k8s$api$rbac$v1$PolicyRule[];
};

/** RoleBinding references a role, but does not contain it.  It can reference a Role in the same namespace or a ClusterRole in the global namespace. It adds who information via Subjects and namespace information by which namespace it exists in.  RoleBindings in a given namespace only have effect in that namespace. */
export type io$k8s$api$rbac$v1$RoleBinding = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "RoleBinding";
  /** Standard object's metadata. */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ObjectMeta;
  /** RoleRef can reference a Role in the current namespace or a ClusterRole in the global namespace. If the RoleRef cannot be resolved, the Authorizer must return an error. */
  readonly "roleRef": io$k8s$api$rbac$v1$RoleRef;
  /** Subjects holds references to the objects the role applies to. */
  readonly "subjects"?: readonly io$k8s$api$rbac$v1$Subject[];
};

/** RoleBindingList is a collection of RoleBindings */
export type io$k8s$api$rbac$v1$RoleBindingList = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Items is a list of RoleBindings */
  readonly "items": readonly io$k8s$api$rbac$v1$RoleBinding[];
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "RoleBindingList";
  /** Standard object's metadata. */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ListMeta;
};

/** RoleList is a collection of Roles */
export type io$k8s$api$rbac$v1$RoleList = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Items is a list of Roles */
  readonly "items": readonly io$k8s$api$rbac$v1$Role[];
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "RoleList";
  /** Standard object's metadata. */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ListMeta;
};

/** RoleRef contains information that points to the role being used */
export type io$k8s$api$rbac$v1$RoleRef = {
  /** APIGroup is the group for the resource being referenced */
  readonly "apiGroup": string;
  /** Kind is the type of resource being referenced */
  readonly "kind": "RoleRef";
  /** Name is the name of resource being referenced */
  readonly "name": string;
};

/** Subject contains a reference to the object or user identities a role binding applies to.  This can either hold a direct API object reference, or a value for non-objects such as user and group names. */
export type io$k8s$api$rbac$v1$Subject = {
  /** APIGroup holds the API group of the referenced subject. Defaults to "" for ServiceAccount subjects. Defaults to "rbac.authorization.k8s.io" for User and Group subjects. */
  readonly "apiGroup"?: string;
  /** Kind of object being referenced. Values defined by this API group are "User", "Group", and "ServiceAccount". If the Authorizer does not recognized the kind value, the Authorizer should report an error. */
  readonly "kind": "Subject";
  /** Name of the object being referenced. */
  readonly "name": string;
  /** Namespace of the referenced object.  If the object kind is non-namespace, such as "User" or "Group", and this value is not empty the Authorizer should report an error. */
  readonly "namespace"?: string;
};

/** AggregationRule describes how to locate ClusterRoles to aggregate into the ClusterRole */
export type io$k8s$api$rbac$v1beta1$AggregationRule = {
  /** ClusterRoleSelectors holds a list of selectors which will be used to find ClusterRoles and create the rules. If any of the selectors match, then the ClusterRole's permissions will be added */
  readonly "clusterRoleSelectors"?:
    readonly io$k8s$apimachinery$pkg$apis$meta$v1$LabelSelector[];
};

/** ClusterRole is a cluster level, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding or ClusterRoleBinding. */
export type io$k8s$api$rbac$v1beta1$ClusterRole = {
  /** AggregationRule is an optional field that describes how to build the Rules for this ClusterRole. If AggregationRule is set, then the Rules are controller managed and direct changes to Rules will be stomped by the controller. */
  readonly "aggregationRule"?: io$k8s$api$rbac$v1beta1$AggregationRule;
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "ClusterRole";
  /** Standard object's metadata. */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ObjectMeta;
  /** Rules holds all the PolicyRules for this ClusterRole */
  readonly "rules"?: readonly io$k8s$api$rbac$v1beta1$PolicyRule[];
};

/** ClusterRoleBinding references a ClusterRole, but not contain it.  It can reference a ClusterRole in the global namespace, and adds who information via Subject. */
export type io$k8s$api$rbac$v1beta1$ClusterRoleBinding = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "ClusterRoleBinding";
  /** Standard object's metadata. */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ObjectMeta;
  /** RoleRef can only reference a ClusterRole in the global namespace. If the RoleRef cannot be resolved, the Authorizer must return an error. */
  readonly "roleRef": io$k8s$api$rbac$v1beta1$RoleRef;
  /** Subjects holds references to the objects the role applies to. */
  readonly "subjects"?: readonly io$k8s$api$rbac$v1beta1$Subject[];
};

/** ClusterRoleBindingList is a collection of ClusterRoleBindings */
export type io$k8s$api$rbac$v1beta1$ClusterRoleBindingList = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Items is a list of ClusterRoleBindings */
  readonly "items": readonly io$k8s$api$rbac$v1beta1$ClusterRoleBinding[];
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "ClusterRoleBindingList";
  /** Standard object's metadata. */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ListMeta;
};

/** ClusterRoleList is a collection of ClusterRoles */
export type io$k8s$api$rbac$v1beta1$ClusterRoleList = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Items is a list of ClusterRoles */
  readonly "items": readonly io$k8s$api$rbac$v1beta1$ClusterRole[];
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "ClusterRoleList";
  /** Standard object's metadata. */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ListMeta;
};

/** PolicyRule holds information that describes a policy rule, but does not contain information about who the rule applies to or which namespace the rule applies to. */
export type io$k8s$api$rbac$v1beta1$PolicyRule = {
  /** APIGroups is the name of the APIGroup that contains the resources.  If multiple API groups are specified, any action requested against one of the enumerated resources in any API group will be allowed. */
  readonly "apiGroups"?: readonly string[];
  /** NonResourceURLs is a set of partial urls that a user should have access to.  *s are allowed, but only as the full, final step in the path Since non-resource URLs are not namespaced, this field is only applicable for ClusterRoles referenced from a ClusterRoleBinding. Rules can either apply to API resources (such as "pods" or "secrets") or non-resource URL paths (such as "/api"),  but not both. */
  readonly "nonResourceURLs"?: readonly string[];
  /** ResourceNames is an optional white list of names that the rule applies to.  An empty set means that everything is allowed. */
  readonly "resourceNames"?: readonly string[];
  /** Resources is a list of resources this rule applies to.  '*' represents all resources in the specified apiGroups. '*^foo' represents the subresource 'foo' for all resources in the specified apiGroups. */
  readonly "resources"?: readonly string[];
  /** Verbs is a list of Verbs that apply to ALL the ResourceKinds and AttributeRestrictions contained in this rule.  VerbAll represents all kinds. */
  readonly "verbs": readonly string[];
};

/** Role is a namespaced, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding. */
export type io$k8s$api$rbac$v1beta1$Role = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "Role";
  /** Standard object's metadata. */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ObjectMeta;
  /** Rules holds all the PolicyRules for this Role */
  readonly "rules"?: readonly io$k8s$api$rbac$v1beta1$PolicyRule[];
};

/** RoleBinding references a role, but does not contain it.  It can reference a Role in the same namespace or a ClusterRole in the global namespace. It adds who information via Subjects and namespace information by which namespace it exists in.  RoleBindings in a given namespace only have effect in that namespace. */
export type io$k8s$api$rbac$v1beta1$RoleBinding = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "RoleBinding";
  /** Standard object's metadata. */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ObjectMeta;
  /** RoleRef can reference a Role in the current namespace or a ClusterRole in the global namespace. If the RoleRef cannot be resolved, the Authorizer must return an error. */
  readonly "roleRef": io$k8s$api$rbac$v1beta1$RoleRef;
  /** Subjects holds references to the objects the role applies to. */
  readonly "subjects"?: readonly io$k8s$api$rbac$v1beta1$Subject[];
};

/** RoleBindingList is a collection of RoleBindings */
export type io$k8s$api$rbac$v1beta1$RoleBindingList = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Items is a list of RoleBindings */
  readonly "items": readonly io$k8s$api$rbac$v1beta1$RoleBinding[];
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "RoleBindingList";
  /** Standard object's metadata. */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ListMeta;
};

/** RoleList is a collection of Roles */
export type io$k8s$api$rbac$v1beta1$RoleList = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Items is a list of Roles */
  readonly "items": readonly io$k8s$api$rbac$v1beta1$Role[];
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "RoleList";
  /** Standard object's metadata. */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ListMeta;
};

/** RoleRef contains information that points to the role being used */
export type io$k8s$api$rbac$v1beta1$RoleRef = {
  /** APIGroup is the group for the resource being referenced */
  readonly "apiGroup": string;
  /** Kind is the type of resource being referenced */
  readonly "kind": "RoleRef";
  /** Name is the name of resource being referenced */
  readonly "name": string;
};

/** Subject contains a reference to the object or user identities a role binding applies to.  This can either hold a direct API object reference, or a value for non-objects such as user and group names. */
export type io$k8s$api$rbac$v1beta1$Subject = {
  /** APIGroup holds the API group of the referenced subject. Defaults to "" for ServiceAccount subjects. Defaults to "rbac.authorization.k8s.io" for User and Group subjects. */
  readonly "apiGroup"?: string;
  /** Kind of object being referenced. Values defined by this API group are "User", "Group", and "ServiceAccount". If the Authorizer does not recognized the kind value, the Authorizer should report an error. */
  readonly "kind": "Subject";
  /** Name of the object being referenced. */
  readonly "name": string;
  /** Namespace of the referenced object.  If the object kind is non-namespace, such as "User" or "Group", and this value is not empty the Authorizer should report an error. */
  readonly "namespace"?: string;
};

/** PriorityClass defines mapping from a priority class name to the priority integer value. The value can be any valid integer. */
export type io$k8s$api$scheduling$v1$PriorityClass = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** description is an arbitrary string that usually provides guidelines on when this priority class should be used. */
  readonly "description"?: string;
  /** globalDefault specifies whether this PriorityClass should be considered as the default priority for pods that do not have any priority class. Only one PriorityClass can be marked as `globalDefault`. However, if more than one PriorityClasses exists with their `globalDefault` field set to true, the smallest value of such global default PriorityClasses will be used as the default priority. */
  readonly "globalDefault"?: boolean;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "PriorityClass";
  /** Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ObjectMeta;
  /** PreemptionPolicy is the Policy for preempting pods with lower priority. One of Never, PreemptLowerPriority. Defaults to PreemptLowerPriority if unset. This field is alpha-level and is only honored by servers that enable the NonPreemptingPriority feature. */
  readonly "preemptionPolicy"?: string;
  /** The value of this priority class. This is the actual priority that pods receive when they have the name of this class in their pod spec. */
  readonly "value": number;
};

/** PriorityClassList is a collection of priority classes. */
export type io$k8s$api$scheduling$v1$PriorityClassList = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** items is the list of PriorityClasses */
  readonly "items": readonly io$k8s$api$scheduling$v1$PriorityClass[];
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "PriorityClassList";
  /** Standard list metadata More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ListMeta;
};

/** DEPRECATED - This group version of PriorityClass is deprecated by scheduling.k8s.io/v1/PriorityClass. PriorityClass defines mapping from a priority class name to the priority integer value. The value can be any valid integer. */
export type io$k8s$api$scheduling$v1beta1$PriorityClass = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** description is an arbitrary string that usually provides guidelines on when this priority class should be used. */
  readonly "description"?: string;
  /** globalDefault specifies whether this PriorityClass should be considered as the default priority for pods that do not have any priority class. Only one PriorityClass can be marked as `globalDefault`. However, if more than one PriorityClasses exists with their `globalDefault` field set to true, the smallest value of such global default PriorityClasses will be used as the default priority. */
  readonly "globalDefault"?: boolean;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "PriorityClass";
  /** Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ObjectMeta;
  /** PreemptionPolicy is the Policy for preempting pods with lower priority. One of Never, PreemptLowerPriority. Defaults to PreemptLowerPriority if unset. This field is alpha-level and is only honored by servers that enable the NonPreemptingPriority feature. */
  readonly "preemptionPolicy"?: string;
  /** The value of this priority class. This is the actual priority that pods receive when they have the name of this class in their pod spec. */
  readonly "value": number;
};

/** PriorityClassList is a collection of priority classes. */
export type io$k8s$api$scheduling$v1beta1$PriorityClassList = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** items is the list of PriorityClasses */
  readonly "items": readonly io$k8s$api$scheduling$v1beta1$PriorityClass[];
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "PriorityClassList";
  /** Standard list metadata More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ListMeta;
};

/** StorageClass describes the parameters for a class of storage for which PersistentVolumes can be dynamically provisioned.

StorageClasses are non-namespaced; the name of the storage class according to etcd is in ObjectMeta.Name. */
export type io$k8s$api$storage$v1$StorageClass = {
  /** AllowVolumeExpansion shows whether the storage class allow volume expand */
  readonly "allowVolumeExpansion"?: boolean;
  /** Restrict the node topologies where volumes can be dynamically provisioned. Each volume plugin defines its own supported topology specifications. An empty TopologySelectorTerm list means there is no topology restriction. This field is only honored by servers that enable the VolumeScheduling feature. */
  readonly "allowedTopologies"?:
    readonly io$k8s$api$core$v1$TopologySelectorTerm[];
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "StorageClass";
  /** Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ObjectMeta;
  /** Dynamically provisioned PersistentVolumes of this storage class are created with these mountOptions, e.g. ["ro", "soft"]. Not validated - mount of the PVs will simply fail if one is invalid. */
  readonly "mountOptions"?: readonly string[];
  /** Parameters holds the parameters for the provisioner that should create volumes of this storage class. */
  readonly "parameters"?: object;
  /** Provisioner indicates the type of the provisioner. */
  readonly "provisioner": string;
  /** Dynamically provisioned PersistentVolumes of this storage class are created with this reclaimPolicy. Defaults to Delete. */
  readonly "reclaimPolicy"?: string;
  /** VolumeBindingMode indicates how PersistentVolumeClaims should be provisioned and bound.  When unset, VolumeBindingImmediate is used. This field is only honored by servers that enable the VolumeScheduling feature. */
  readonly "volumeBindingMode"?: string;
};

/** StorageClassList is a collection of storage classes. */
export type io$k8s$api$storage$v1$StorageClassList = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Items is the list of StorageClasses */
  readonly "items": readonly io$k8s$api$storage$v1$StorageClass[];
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "StorageClassList";
  /** Standard list metadata More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ListMeta;
};

/** VolumeAttachment captures the intent to attach or detach the specified volume to/from the specified node.

VolumeAttachment objects are non-namespaced. */
export type io$k8s$api$storage$v1$VolumeAttachment = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "VolumeAttachment";
  /** Standard object metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ObjectMeta;
  /** Specification of the desired attach/detach volume behavior. Populated by the Kubernetes system. */
  readonly "spec": io$k8s$api$storage$v1$VolumeAttachmentSpec;
  /** Status of the VolumeAttachment request. Populated by the entity completing the attach or detach operation, i.e. the external-attacher. */
  readonly "status"?: io$k8s$api$storage$v1$VolumeAttachmentStatus;
};

/** VolumeAttachmentList is a collection of VolumeAttachment objects. */
export type io$k8s$api$storage$v1$VolumeAttachmentList = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Items is the list of VolumeAttachments */
  readonly "items": readonly io$k8s$api$storage$v1$VolumeAttachment[];
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "VolumeAttachmentList";
  /** Standard list metadata More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ListMeta;
};

/** VolumeAttachmentSource represents a volume that should be attached. Right now only PersistenVolumes can be attached via external attacher, in future we may allow also inline volumes in pods. Exactly one member can be set. */
export type io$k8s$api$storage$v1$VolumeAttachmentSource = {
  /** inlineVolumeSpec contains all the information necessary to attach a persistent volume defined by a pod's inline VolumeSource. This field is populated only for the CSIMigration feature. It contains translated fields from a pod's inline VolumeSource to a PersistentVolumeSpec. This field is alpha-level and is only honored by servers that enabled the CSIMigration feature. */
  readonly "inlineVolumeSpec"?: io$k8s$api$core$v1$PersistentVolumeSpec;
  /** Name of the persistent volume to attach. */
  readonly "persistentVolumeName"?: string;
};

/** VolumeAttachmentSpec is the specification of a VolumeAttachment request. */
export type io$k8s$api$storage$v1$VolumeAttachmentSpec = {
  /** Attacher indicates the name of the volume driver that MUST handle this request. This is the name returned by GetPluginName(). */
  readonly "attacher": string;
  /** The node that the volume should be attached to. */
  readonly "nodeName": string;
  /** Source represents the volume that should be attached. */
  readonly "source": io$k8s$api$storage$v1$VolumeAttachmentSource;
};

/** VolumeAttachmentStatus is the status of a VolumeAttachment request. */
export type io$k8s$api$storage$v1$VolumeAttachmentStatus = {
  /** The last error encountered during attach operation, if any. This field must only be set by the entity completing the attach operation, i.e. the external-attacher. */
  readonly "attachError"?: io$k8s$api$storage$v1$VolumeError;
  /** Indicates the volume is successfully attached. This field must only be set by the entity completing the attach operation, i.e. the external-attacher. */
  readonly "attached": boolean;
  /** Upon successful attach, this field is populated with any information returned by the attach operation that must be passed into subsequent WaitForAttach or Mount calls. This field must only be set by the entity completing the attach operation, i.e. the external-attacher. */
  readonly "attachmentMetadata"?: object;
  /** The last error encountered during detach operation, if any. This field must only be set by the entity completing the detach operation, i.e. the external-attacher. */
  readonly "detachError"?: io$k8s$api$storage$v1$VolumeError;
};

/** VolumeError captures an error encountered during a volume operation. */
export type io$k8s$api$storage$v1$VolumeError = {
  /** String detailing the error encountered during Attach or Detach operation. This string may be logged, so it should not contain sensitive information. */
  readonly "message"?: string;
  /** Time the error was encountered. */
  readonly "time"?: io$k8s$apimachinery$pkg$apis$meta$v1$Time;
};

/** CSIDriver captures information about a Container Storage Interface (CSI) volume driver deployed on the cluster. CSI drivers do not need to create the CSIDriver object directly. Instead they may use the cluster-driver-registrar sidecar container. When deployed with a CSI driver it automatically creates a CSIDriver object representing the driver. Kubernetes attach detach controller uses this object to determine whether attach is required. Kubelet uses this object to determine whether pod information needs to be passed on mount. CSIDriver objects are non-namespaced. */
export type io$k8s$api$storage$v1beta1$CSIDriver = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "CSIDriver";
  /** Standard object metadata. metadata.Name indicates the name of the CSI driver that this object refers to; it MUST be the same name returned by the CSI GetPluginName() call for that driver. The driver name must be 63 characters or less, beginning and ending with an alphanumeric character ([a-z0-9A-Z]) with dashes (-), dots (.), and alphanumerics between. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ObjectMeta;
  /** Specification of the CSI Driver. */
  readonly "spec": io$k8s$api$storage$v1beta1$CSIDriverSpec;
};

/** CSIDriverList is a collection of CSIDriver objects. */
export type io$k8s$api$storage$v1beta1$CSIDriverList = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** items is the list of CSIDriver */
  readonly "items": readonly io$k8s$api$storage$v1beta1$CSIDriver[];
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "CSIDriverList";
  /** Standard list metadata More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ListMeta;
};

/** CSIDriverSpec is the specification of a CSIDriver. */
export type io$k8s$api$storage$v1beta1$CSIDriverSpec = {
  /** attachRequired indicates this CSI volume driver requires an attach operation (because it implements the CSI ControllerPublishVolume() method), and that the Kubernetes attach detach controller should call the attach volume interface which checks the volumeattachment status and waits until the volume is attached before proceeding to mounting. The CSI external-attacher coordinates with CSI volume driver and updates the volumeattachment status when the attach operation is complete. If the CSIDriverRegistry feature gate is enabled and the value is specified to false, the attach operation will be skipped. Otherwise the attach operation will be called. */
  readonly "attachRequired"?: boolean;
  /** If set to true, podInfoOnMount indicates this CSI volume driver requires additional pod information (like podName, podUID, etc.) during mount operations. If set to false, pod information will not be passed on mount. Default is false. The CSI driver specifies podInfoOnMount as part of driver deployment. If true, Kubelet will pass pod information as VolumeContext in the CSI NodePublishVolume() calls. The CSI driver is responsible for parsing and validating the information passed in as VolumeContext. The following VolumeConext will be passed if podInfoOnMount is set to true. This list might grow, but the prefix will be used. "csi.storage.k8s.io/pod.name": pod.Name "csi.storage.k8s.io/pod.namespace": pod.Namespace "csi.storage.k8s.io/pod.uid": string(pod.UID) */
  readonly "podInfoOnMount"?: boolean;
};

/** CSINode holds information about all CSI drivers installed on a node. CSI drivers do not need to create the CSINode object directly. As long as they use the node-driver-registrar sidecar container, the kubelet will automatically populate the CSINode object for the CSI driver as part of kubelet plugin registration. CSINode has the same name as a node. If the object is missing, it means either there are no CSI Drivers available on the node, or the Kubelet version is low enough that it doesn't create this object. CSINode has an OwnerReference that points to the corresponding node object. */
export type io$k8s$api$storage$v1beta1$CSINode = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "CSINode";
  /** metadata.name must be the Kubernetes node name. */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ObjectMeta;
  /** spec is the specification of CSINode */
  readonly "spec": io$k8s$api$storage$v1beta1$CSINodeSpec;
};

/** CSINodeDriver holds information about the specification of one CSI driver installed on a node */
export type io$k8s$api$storage$v1beta1$CSINodeDriver = {
  /** This is the name of the CSI driver that this object refers to. This MUST be the same name returned by the CSI GetPluginName() call for that driver. */
  readonly "name": string;
  /** nodeID of the node from the driver point of view. This field enables Kubernetes to communicate with storage systems that do not share the same nomenclature for nodes. For example, Kubernetes may refer to a given node as "node1", but the storage system may refer to the same node as "nodeA". When Kubernetes issues a command to the storage system to attach a volume to a specific node, it can use this field to refer to the node name using the ID that the storage system will understand, e.g. "nodeA" instead of "node1". This field is required. */
  readonly "nodeID": string;
  /** topologyKeys is the list of keys supported by the driver. When a driver is initialized on a cluster, it provides a set of topology keys that it understands (e.g. "company.com/zone", "company.com/region"). When a driver is initialized on a node, it provides the same topology keys along with values. Kubelet will expose these topology keys as labels on its own node object. When Kubernetes does topology aware provisioning, it can use this list to determine which labels it should retrieve from the node object and pass back to the driver. It is possible for different nodes to use different topology keys. This can be empty if driver does not support topology. */
  readonly "topologyKeys"?: readonly string[];
};

/** CSINodeList is a collection of CSINode objects. */
export type io$k8s$api$storage$v1beta1$CSINodeList = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** items is the list of CSINode */
  readonly "items": readonly io$k8s$api$storage$v1beta1$CSINode[];
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "CSINodeList";
  /** Standard list metadata More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ListMeta;
};

/** CSINodeSpec holds information about the specification of all CSI drivers installed on a node */
export type io$k8s$api$storage$v1beta1$CSINodeSpec = {
  /** drivers is a list of information of all CSI Drivers existing on a node. If all drivers in the list are uninstalled, this can become empty. */
  readonly "drivers": readonly io$k8s$api$storage$v1beta1$CSINodeDriver[];
};

/** StorageClass describes the parameters for a class of storage for which PersistentVolumes can be dynamically provisioned.

StorageClasses are non-namespaced; the name of the storage class according to etcd is in ObjectMeta.Name. */
export type io$k8s$api$storage$v1beta1$StorageClass = {
  /** AllowVolumeExpansion shows whether the storage class allow volume expand */
  readonly "allowVolumeExpansion"?: boolean;
  /** Restrict the node topologies where volumes can be dynamically provisioned. Each volume plugin defines its own supported topology specifications. An empty TopologySelectorTerm list means there is no topology restriction. This field is only honored by servers that enable the VolumeScheduling feature. */
  readonly "allowedTopologies"?:
    readonly io$k8s$api$core$v1$TopologySelectorTerm[];
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "StorageClass";
  /** Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ObjectMeta;
  /** Dynamically provisioned PersistentVolumes of this storage class are created with these mountOptions, e.g. ["ro", "soft"]. Not validated - mount of the PVs will simply fail if one is invalid. */
  readonly "mountOptions"?: readonly string[];
  /** Parameters holds the parameters for the provisioner that should create volumes of this storage class. */
  readonly "parameters"?: object;
  /** Provisioner indicates the type of the provisioner. */
  readonly "provisioner": string;
  /** Dynamically provisioned PersistentVolumes of this storage class are created with this reclaimPolicy. Defaults to Delete. */
  readonly "reclaimPolicy"?: string;
  /** VolumeBindingMode indicates how PersistentVolumeClaims should be provisioned and bound.  When unset, VolumeBindingImmediate is used. This field is only honored by servers that enable the VolumeScheduling feature. */
  readonly "volumeBindingMode"?: string;
};

/** StorageClassList is a collection of storage classes. */
export type io$k8s$api$storage$v1beta1$StorageClassList = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Items is the list of StorageClasses */
  readonly "items": readonly io$k8s$api$storage$v1beta1$StorageClass[];
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "StorageClassList";
  /** Standard list metadata More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ListMeta;
};

/** VolumeAttachment captures the intent to attach or detach the specified volume to/from the specified node.

VolumeAttachment objects are non-namespaced. */
export type io$k8s$api$storage$v1beta1$VolumeAttachment = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "VolumeAttachment";
  /** Standard object metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ObjectMeta;
  /** Specification of the desired attach/detach volume behavior. Populated by the Kubernetes system. */
  readonly "spec": io$k8s$api$storage$v1beta1$VolumeAttachmentSpec;
  /** Status of the VolumeAttachment request. Populated by the entity completing the attach or detach operation, i.e. the external-attacher. */
  readonly "status"?: io$k8s$api$storage$v1beta1$VolumeAttachmentStatus;
};

/** VolumeAttachmentList is a collection of VolumeAttachment objects. */
export type io$k8s$api$storage$v1beta1$VolumeAttachmentList = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Items is the list of VolumeAttachments */
  readonly "items": readonly io$k8s$api$storage$v1beta1$VolumeAttachment[];
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "VolumeAttachmentList";
  /** Standard list metadata More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ListMeta;
};

/** VolumeAttachmentSource represents a volume that should be attached. Right now only PersistenVolumes can be attached via external attacher, in future we may allow also inline volumes in pods. Exactly one member can be set. */
export type io$k8s$api$storage$v1beta1$VolumeAttachmentSource = {
  /** inlineVolumeSpec contains all the information necessary to attach a persistent volume defined by a pod's inline VolumeSource. This field is populated only for the CSIMigration feature. It contains translated fields from a pod's inline VolumeSource to a PersistentVolumeSpec. This field is alpha-level and is only honored by servers that enabled the CSIMigration feature. */
  readonly "inlineVolumeSpec"?: io$k8s$api$core$v1$PersistentVolumeSpec;
  /** Name of the persistent volume to attach. */
  readonly "persistentVolumeName"?: string;
};

/** VolumeAttachmentSpec is the specification of a VolumeAttachment request. */
export type io$k8s$api$storage$v1beta1$VolumeAttachmentSpec = {
  /** Attacher indicates the name of the volume driver that MUST handle this request. This is the name returned by GetPluginName(). */
  readonly "attacher": string;
  /** The node that the volume should be attached to. */
  readonly "nodeName": string;
  /** Source represents the volume that should be attached. */
  readonly "source": io$k8s$api$storage$v1beta1$VolumeAttachmentSource;
};

/** VolumeAttachmentStatus is the status of a VolumeAttachment request. */
export type io$k8s$api$storage$v1beta1$VolumeAttachmentStatus = {
  /** The last error encountered during attach operation, if any. This field must only be set by the entity completing the attach operation, i.e. the external-attacher. */
  readonly "attachError"?: io$k8s$api$storage$v1beta1$VolumeError;
  /** Indicates the volume is successfully attached. This field must only be set by the entity completing the attach operation, i.e. the external-attacher. */
  readonly "attached": boolean;
  /** Upon successful attach, this field is populated with any information returned by the attach operation that must be passed into subsequent WaitForAttach or Mount calls. This field must only be set by the entity completing the attach operation, i.e. the external-attacher. */
  readonly "attachmentMetadata"?: object;
  /** The last error encountered during detach operation, if any. This field must only be set by the entity completing the detach operation, i.e. the external-attacher. */
  readonly "detachError"?: io$k8s$api$storage$v1beta1$VolumeError;
};

/** VolumeError captures an error encountered during a volume operation. */
export type io$k8s$api$storage$v1beta1$VolumeError = {
  /** String detailing the error encountered during Attach or Detach operation. This string may be logged, so it should not contain sensitive information. */
  readonly "message"?: string;
  /** Time the error was encountered. */
  readonly "time"?: io$k8s$apimachinery$pkg$apis$meta$v1$Time;
};

/** CustomResourceColumnDefinition specifies a column for server side printing. */
export type io$k8s$apiextensions_apiserver$pkg$apis$apiextensions$v1beta1$CustomResourceColumnDefinition =
  {
    /** JSONPath is a simple JSON path, i.e. with array notation. */
    readonly "JSONPath": string;
    /** description is a human readable description of this column. */
    readonly "description"?: string;
    /** format is an optional OpenAPI type definition for this column. The 'name' format is applied to the primary identifier column to assist in clients identifying column is the resource name. See https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#data-types for more. */
    readonly "format"?: string;
    /** name is a human readable name for the column. */
    readonly "name": string;
    /** priority is an integer defining the relative importance of this column compared to others. Lower numbers are considered higher priority. Columns that may be omitted in limited space scenarios should be given a higher priority. */
    readonly "priority"?: number;
    /** type is an OpenAPI type definition for this column. See https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#data-types for more. */
    readonly "type": string;
  };

/** CustomResourceConversion describes how to convert different versions of a CR. */
export type io$k8s$apiextensions_apiserver$pkg$apis$apiextensions$v1beta1$CustomResourceConversion =
  {
    /** ConversionReviewVersions is an ordered list of preferred `ConversionReview` versions the Webhook expects. API server will try to use first version in the list which it supports. If none of the versions specified in this list supported by API server, conversion will fail for this object. If a persisted Webhook configuration specifies allowed versions and does not include any versions known to the API Server, calls to the webhook will fail. Default to `['v1beta1']`. */
    readonly "conversionReviewVersions"?: readonly string[];
    /** `strategy` specifies the conversion strategy. Allowed values are: - `None`: The converter only change the apiVersion and would not touch any other field in the CR. - `Webhook`: API Server will call to an external webhook to do the conversion. Additional information
  is needed for this option. This requires spec.preserveUnknownFields to be false. */
    readonly "strategy": string;
    /** `webhookClientConfig` is the instructions for how to call the webhook if strategy is `Webhook`. This field is alpha-level and is only honored by servers that enable the CustomResourceWebhookConversion feature. */
    readonly "webhookClientConfig"?:
      io$k8s$apiextensions_apiserver$pkg$apis$apiextensions$v1beta1$WebhookClientConfig;
  };

/** CustomResourceDefinition represents a resource that should be exposed on the API server.  Its name MUST be in the format <.spec.name>.<.spec.group>. */
export type io$k8s$apiextensions_apiserver$pkg$apis$apiextensions$v1beta1$CustomResourceDefinition =
  {
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
    readonly "apiVersion"?: string;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
    readonly "kind"?: "CustomResourceDefinition";
    readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ObjectMeta;
    /** Spec describes how the user wants the resources to appear */
    readonly "spec":
      io$k8s$apiextensions_apiserver$pkg$apis$apiextensions$v1beta1$CustomResourceDefinitionSpec;
    /** Status indicates the actual state of the CustomResourceDefinition */
    readonly "status"?:
      io$k8s$apiextensions_apiserver$pkg$apis$apiextensions$v1beta1$CustomResourceDefinitionStatus;
  };

/** CustomResourceDefinitionCondition contains details for the current condition of this pod. */
export type io$k8s$apiextensions_apiserver$pkg$apis$apiextensions$v1beta1$CustomResourceDefinitionCondition =
  {
    /** Last time the condition transitioned from one status to another. */
    readonly "lastTransitionTime"?: io$k8s$apimachinery$pkg$apis$meta$v1$Time;
    /** Human-readable message indicating details about last transition. */
    readonly "message"?: string;
    /** Unique, one-word, CamelCase reason for the condition's last transition. */
    readonly "reason"?: string;
    /** Status is the status of the condition. Can be True, False, Unknown. */
    readonly "status": string;
    /** Type is the type of the condition. Types include Established, NamesAccepted and Terminating. */
    readonly "type": string;
  };

/** CustomResourceDefinitionList is a list of CustomResourceDefinition objects. */
export type io$k8s$apiextensions_apiserver$pkg$apis$apiextensions$v1beta1$CustomResourceDefinitionList =
  {
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
    readonly "apiVersion"?: string;
    /** Items individual CustomResourceDefinitions */
    readonly "items":
      readonly io$k8s$apiextensions_apiserver$pkg$apis$apiextensions$v1beta1$CustomResourceDefinition[];
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
    readonly "kind"?: "CustomResourceDefinitionList";
    readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ListMeta;
  };

/** CustomResourceDefinitionNames indicates the names to serve this CustomResourceDefinition */
export type io$k8s$apiextensions_apiserver$pkg$apis$apiextensions$v1beta1$CustomResourceDefinitionNames =
  {
    /** Categories is a list of grouped resources custom resources belong to (e.g. 'all') */
    readonly "categories"?: readonly string[];
    /** Kind is the serialized kind of the resource.  It is normally CamelCase and singular. */
    readonly "kind": "CustomResourceDefinitionNames";
    /** ListKind is the serialized kind of the list for this resource.  Defaults to <kind>List. */
    readonly "listKind"?: string;
    /** Plural is the plural name of the resource to serve.  It must match the name of the CustomResourceDefinition-registration too: plural.group and it must be all lowercase. */
    readonly "plural": string;
    /** ShortNames are short names for the resource.  It must be all lowercase. */
    readonly "shortNames"?: readonly string[];
    /** Singular is the singular name of the resource.  It must be all lowercase  Defaults to lowercased <kind> */
    readonly "singular"?: string;
  };

/** CustomResourceDefinitionSpec describes how a user wants their resource to appear */
export type io$k8s$apiextensions_apiserver$pkg$apis$apiextensions$v1beta1$CustomResourceDefinitionSpec =
  {
    /** AdditionalPrinterColumns are additional columns shown e.g. in kubectl next to the name. Defaults to a created-at column. Optional, the global columns for all versions. Top-level and per-version columns are mutually exclusive. */
    readonly "additionalPrinterColumns"?:
      readonly io$k8s$apiextensions_apiserver$pkg$apis$apiextensions$v1beta1$CustomResourceColumnDefinition[];
    /** `conversion` defines conversion settings for the CRD. */
    readonly "conversion"?:
      io$k8s$apiextensions_apiserver$pkg$apis$apiextensions$v1beta1$CustomResourceConversion;
    /** Group is the group this resource belongs in */
    readonly "group": string;
    /** Names are the names used to describe this custom resource */
    readonly "names":
      io$k8s$apiextensions_apiserver$pkg$apis$apiextensions$v1beta1$CustomResourceDefinitionNames;
    /** preserveUnknownFields disables pruning of object fields which are not specified in the OpenAPI schema. apiVersion, kind, metadata and known fields inside metadata are always preserved. Defaults to true in v1beta and will default to false in v1. */
    readonly "preserveUnknownFields"?: boolean;
    /** Scope indicates whether this resource is cluster or namespace scoped.  Default is namespaced */
    readonly "scope": string;
    /** Subresources describes the subresources for CustomResource Optional, the global subresources for all versions. Top-level and per-version subresources are mutually exclusive. */
    readonly "subresources"?:
      io$k8s$apiextensions_apiserver$pkg$apis$apiextensions$v1beta1$CustomResourceSubresources;
    /** Validation describes the validation methods for CustomResources Optional, the global validation schema for all versions. Top-level and per-version schemas are mutually exclusive. */
    readonly "validation"?:
      io$k8s$apiextensions_apiserver$pkg$apis$apiextensions$v1beta1$CustomResourceValidation;
    /** Version is the version this resource belongs in Should be always first item in Versions field if provided. Optional, but at least one of Version or Versions must be set. Deprecated: Please use `Versions`. */
    readonly "version"?: string;
    /** Versions is the list of all supported versions for this resource. If Version field is provided, this field is optional. Validation: All versions must use the same validation schema for now. i.e., top level Validation field is applied to all of these versions. Order: The version name will be used to compute the order. If the version string is "kube-like", it will sort above non "kube-like" version strings, which are ordered lexicographically. "Kube-like" versions start with a "v", then are followed by a number (the major version), then optionally the string "alpha" or "beta" and another number (the minor version). These are sorted first by GA > beta > alpha (where GA is a version with no suffix such as beta or alpha), and then by comparing major version, then minor version. An example sorted list of versions: v10, v2, v1, v11beta2, v10beta3, v3beta1, v12alpha1, v11alpha2, foo1, foo10. */
    readonly "versions"?:
      readonly io$k8s$apiextensions_apiserver$pkg$apis$apiextensions$v1beta1$CustomResourceDefinitionVersion[];
  };

/** CustomResourceDefinitionStatus indicates the state of the CustomResourceDefinition */
export type io$k8s$apiextensions_apiserver$pkg$apis$apiextensions$v1beta1$CustomResourceDefinitionStatus =
  {
    /** AcceptedNames are the names that are actually being used to serve discovery They may be different than the names in spec. */
    readonly "acceptedNames":
      io$k8s$apiextensions_apiserver$pkg$apis$apiextensions$v1beta1$CustomResourceDefinitionNames;
    /** Conditions indicate state for particular aspects of a CustomResourceDefinition */
    readonly "conditions":
      readonly io$k8s$apiextensions_apiserver$pkg$apis$apiextensions$v1beta1$CustomResourceDefinitionCondition[];
    /** StoredVersions are all versions of CustomResources that were ever persisted. Tracking these versions allows a migration path for stored versions in etcd. The field is mutable so the migration controller can first finish a migration to another version (i.e. that no old objects are left in the storage), and then remove the rest of the versions from this list. None of the versions in this list can be removed from the spec.Versions field. */
    readonly "storedVersions": readonly string[];
  };

/** CustomResourceDefinitionVersion describes a version for CRD. */
export type io$k8s$apiextensions_apiserver$pkg$apis$apiextensions$v1beta1$CustomResourceDefinitionVersion =
  {
    /** AdditionalPrinterColumns are additional columns shown e.g. in kubectl next to the name. Defaults to a created-at column. Top-level and per-version columns are mutually exclusive. Per-version columns must not all be set to identical values (top-level columns should be used instead) This field is alpha-level and is only honored by servers that enable the CustomResourceWebhookConversion feature. NOTE: CRDs created prior to 1.13 populated the top-level additionalPrinterColumns field by default. To apply an update that changes to per-version additionalPrinterColumns, the top-level additionalPrinterColumns field must be explicitly set to null */
    readonly "additionalPrinterColumns"?:
      readonly io$k8s$apiextensions_apiserver$pkg$apis$apiextensions$v1beta1$CustomResourceColumnDefinition[];
    /** Name is the version name, e.g. “v1”, “v2beta1”, etc. */
    readonly "name": string;
    /** Schema describes the schema for CustomResource used in validation, pruning, and defaulting. Top-level and per-version schemas are mutually exclusive. Per-version schemas must not all be set to identical values (top-level validation schema should be used instead) This field is alpha-level and is only honored by servers that enable the CustomResourceWebhookConversion feature. */
    readonly "schema"?:
      io$k8s$apiextensions_apiserver$pkg$apis$apiextensions$v1beta1$CustomResourceValidation;
    /** Served is a flag enabling/disabling this version from being served via REST APIs */
    readonly "served": boolean;
    /** Storage flags the version as storage version. There must be exactly one flagged as storage version. */
    readonly "storage": boolean;
    /** Subresources describes the subresources for CustomResource Top-level and per-version subresources are mutually exclusive. Per-version subresources must not all be set to identical values (top-level subresources should be used instead) This field is alpha-level and is only honored by servers that enable the CustomResourceWebhookConversion feature. */
    readonly "subresources"?:
      io$k8s$apiextensions_apiserver$pkg$apis$apiextensions$v1beta1$CustomResourceSubresources;
  };

/** CustomResourceSubresourceScale defines how to serve the scale subresource for CustomResources. */
export type io$k8s$apiextensions_apiserver$pkg$apis$apiextensions$v1beta1$CustomResourceSubresourceScale =
  {
    /** LabelSelectorPath defines the JSON path inside of a CustomResource that corresponds to Scale.Status.Selector. Only JSON paths without the array notation are allowed. Must be a JSON Path under .status or .spec. Must be set to work with HPA. The field pointed by this JSON path must be a string field (not a complex selector struct) which contains a serialized label selector in string form. More info: https://kubernetes.io/docs/tasks/access-kubernetes-api/custom-resources/custom-resource-definitions#scale-subresource If there is no value under the given path in the CustomResource, the status label selector value in the /scale subresource will default to the empty string. */
    readonly "labelSelectorPath"?: string;
    /** SpecReplicasPath defines the JSON path inside of a CustomResource that corresponds to Scale.Spec.Replicas. Only JSON paths without the array notation are allowed. Must be a JSON Path under .spec. If there is no value under the given path in the CustomResource, the /scale subresource will return an error on GET. */
    readonly "specReplicasPath": string;
    /** StatusReplicasPath defines the JSON path inside of a CustomResource that corresponds to Scale.Status.Replicas. Only JSON paths without the array notation are allowed. Must be a JSON Path under .status. If there is no value under the given path in the CustomResource, the status replica value in the /scale subresource will default to 0. */
    readonly "statusReplicasPath": string;
  };

/** CustomResourceSubresourceStatus defines how to serve the status subresource for CustomResources. Status is represented by the `.status` JSON path inside of a CustomResource. When set, * exposes a /status subresource for the custom resource * PUT requests to the /status subresource take a custom resource object, and ignore changes to anything except the status stanza * PUT/POST/PATCH requests to the custom resource ignore changes to the status stanza */
export type io$k8s$apiextensions_apiserver$pkg$apis$apiextensions$v1beta1$CustomResourceSubresourceStatus =
  {};

/** CustomResourceSubresources defines the status and scale subresources for CustomResources. */
export type io$k8s$apiextensions_apiserver$pkg$apis$apiextensions$v1beta1$CustomResourceSubresources =
  {
    /** Scale denotes the scale subresource for CustomResources */
    readonly "scale"?:
      io$k8s$apiextensions_apiserver$pkg$apis$apiextensions$v1beta1$CustomResourceSubresourceScale;
    /** Status denotes the status subresource for CustomResources */
    readonly "status"?:
      io$k8s$apiextensions_apiserver$pkg$apis$apiextensions$v1beta1$CustomResourceSubresourceStatus;
  };

/** CustomResourceValidation is a list of validation methods for CustomResources. */
export type io$k8s$apiextensions_apiserver$pkg$apis$apiextensions$v1beta1$CustomResourceValidation =
  {
    /** OpenAPIV3Schema is the OpenAPI v3 schema to be validated against. */
    readonly "openAPIV3Schema"?:
      io$k8s$apiextensions_apiserver$pkg$apis$apiextensions$v1beta1$JSONSchemaProps;
  };

/** ExternalDocumentation allows referencing an external resource for extended documentation. */
export type io$k8s$apiextensions_apiserver$pkg$apis$apiextensions$v1beta1$ExternalDocumentation =
  {
    readonly "description"?: string;
    readonly "url"?: string;
  };

/** JSON represents any valid JSON value. These types are supported: bool, int64, float64, string, []interface{}, map[string]interface{} and nil. */
export type io$k8s$apiextensions_apiserver$pkg$apis$apiextensions$v1beta1$JSON =
  {};

/** JSONSchemaProps is a JSON-Schema following Specification Draft 4 (http://json-schema.org/). */
export type io$k8s$apiextensions_apiserver$pkg$apis$apiextensions$v1beta1$JSONSchemaProps =
  {
    readonly "$ref"?: string;
    readonly "$schema"?: string;
    readonly "additionalItems"?:
      io$k8s$apiextensions_apiserver$pkg$apis$apiextensions$v1beta1$JSONSchemaPropsOrBool;
    readonly "additionalProperties"?:
      io$k8s$apiextensions_apiserver$pkg$apis$apiextensions$v1beta1$JSONSchemaPropsOrBool;
    readonly "allOf"?:
      readonly io$k8s$apiextensions_apiserver$pkg$apis$apiextensions$v1beta1$JSONSchemaProps[];
    readonly "anyOf"?:
      readonly io$k8s$apiextensions_apiserver$pkg$apis$apiextensions$v1beta1$JSONSchemaProps[];
    /** default is a default value for undefined object fields. Defaulting is an alpha feature under the CustomResourceDefaulting feature gate. Defaulting requires spec.preserveUnknownFields to be false. */
    readonly "default"?:
      io$k8s$apiextensions_apiserver$pkg$apis$apiextensions$v1beta1$JSON;
    readonly "definitions"?: object;
    readonly "dependencies"?: object;
    readonly "description"?: string;
    readonly "enum"?:
      readonly io$k8s$apiextensions_apiserver$pkg$apis$apiextensions$v1beta1$JSON[];
    readonly "example"?:
      io$k8s$apiextensions_apiserver$pkg$apis$apiextensions$v1beta1$JSON;
    readonly "exclusiveMaximum"?: boolean;
    readonly "exclusiveMinimum"?: boolean;
    readonly "externalDocs"?:
      io$k8s$apiextensions_apiserver$pkg$apis$apiextensions$v1beta1$ExternalDocumentation;
    readonly "format"?: string;
    readonly "id"?: string;
    readonly "items"?:
      io$k8s$apiextensions_apiserver$pkg$apis$apiextensions$v1beta1$JSONSchemaPropsOrArray;
    readonly "maxItems"?: number;
    readonly "maxLength"?: number;
    readonly "maxProperties"?: number;
    readonly "maximum"?: number;
    readonly "minItems"?: number;
    readonly "minLength"?: number;
    readonly "minProperties"?: number;
    readonly "minimum"?: number;
    readonly "multipleOf"?: number;
    readonly "not"?:
      io$k8s$apiextensions_apiserver$pkg$apis$apiextensions$v1beta1$JSONSchemaProps;
    readonly "nullable"?: boolean;
    readonly "oneOf"?:
      readonly io$k8s$apiextensions_apiserver$pkg$apis$apiextensions$v1beta1$JSONSchemaProps[];
    readonly "pattern"?: string;
    readonly "patternProperties"?: object;
    readonly "properties"?: object;
    readonly "required"?: readonly string[];
    readonly "title"?: string;
    readonly "type"?: string;
    readonly "uniqueItems"?: boolean;
    /** x-kubernetes-embedded-resource defines that the value is an embedded Kubernetes runtime.Object, with TypeMeta and ObjectMeta. The type must be object. It is allowed to further restrict the embedded object. kind, apiVersion and metadata are validated automatically. x-kubernetes-preserve-unknown-fields is allowed to be true, but does not have to be if the object is fully specified (up to kind, apiVersion, metadata). */
    readonly "x-kubernetes-embedded-resource"?: boolean;
    /** x-kubernetes-int-or-string specifies that this value is either an integer or a string. If this is true, an empty type is allowed and type as child of anyOf is permitted if following one of the following patterns:

1) anyOf:
   - type: integer
   - type: string
2) allOf:
   - anyOf:
     - type: integer
     - type: string
   - ... zero or more */
    readonly "x-kubernetes-int-or-string"?: boolean;
    /** x-kubernetes-preserve-unknown-fields stops the API server decoding step from pruning fields which are not specified in the validation schema. This affects fields recursively, but switches back to normal pruning behaviour if nested properties or additionalProperties are specified in the schema. This can either be true or undefined. False is forbidden. */
    readonly "x-kubernetes-preserve-unknown-fields"?: boolean;
  };

/** JSONSchemaPropsOrArray represents a value that can either be a JSONSchemaProps or an array of JSONSchemaProps. Mainly here for serialization purposes. */
export type io$k8s$apiextensions_apiserver$pkg$apis$apiextensions$v1beta1$JSONSchemaPropsOrArray =
  {};

/** JSONSchemaPropsOrBool represents JSONSchemaProps or a boolean value. Defaults to true for the boolean property. */
export type io$k8s$apiextensions_apiserver$pkg$apis$apiextensions$v1beta1$JSONSchemaPropsOrBool =
  {};

/** JSONSchemaPropsOrStringArray represents a JSONSchemaProps or a string array. */
export type io$k8s$apiextensions_apiserver$pkg$apis$apiextensions$v1beta1$JSONSchemaPropsOrStringArray =
  {};

/** ServiceReference holds a reference to Service.legacy.k8s.io */
export type io$k8s$apiextensions_apiserver$pkg$apis$apiextensions$v1beta1$ServiceReference =
  {
    /** `name` is the name of the service. Required */
    readonly "name": string;
    /** `namespace` is the namespace of the service. Required */
    readonly "namespace": string;
    /** `path` is an optional URL path which will be sent in any request to this service. */
    readonly "path"?: string;
    /** If specified, the port on the service that hosting webhook. Default to 443 for backward compatibility. `port` should be a valid port number (1-65535, inclusive). */
    readonly "port"?: number;
  };

/** WebhookClientConfig contains the information to make a TLS connection with the webhook. It has the same field as admissionregistration.v1beta1.WebhookClientConfig. */
export type io$k8s$apiextensions_apiserver$pkg$apis$apiextensions$v1beta1$WebhookClientConfig =
  {
    /** `caBundle` is a PEM encoded CA bundle which will be used to validate the webhook's server certificate. If unspecified, system trust roots on the apiserver are used. */
    readonly "caBundle"?: string;
    /** `service` is a reference to the service for this webhook. Either `service` or `url` must be specified.

If the webhook is running within the cluster, then you should use `service`. */
    readonly "service"?:
      io$k8s$apiextensions_apiserver$pkg$apis$apiextensions$v1beta1$ServiceReference;
    /** `url` gives the location of the webhook, in standard URL form (`scheme://host:port/path`). Exactly one of `url` or `service` must be specified.

The `host` should not refer to a service running in the cluster; use the `service` field instead. The host might be resolved via external DNS in some apiservers (e.g., `kube-apiserver` cannot resolve in-cluster DNS as that would be a layering violation). `host` may also be an IP address.

Please note that using `localhost` or `127.0.0.1` as a `host` is risky unless you take great care to run this webhook on all hosts which run an apiserver which might need to make calls to this webhook. Such installs are likely to be non-portable, i.e., not easy to turn up in a new cluster.

The scheme must be "https"; the URL must begin with "https://".

A path is optional, and if present may be any string permissible in a URL. You may use the path to pass an arbitrary string to the webhook, for example, a cluster identifier.

Attempting to use a user or basic auth e.g. "user:password@" is not allowed. Fragments ("#...") and query parameters ("?...") are not allowed, either. */
    readonly "url"?: string;
  };

/** Quantity is a fixed-point representation of a number. It provides convenient marshaling/unmarshaling in JSON and YAML, in addition to String() and Int64() accessors.

The serialization format is:

<quantity>        ::= <signedNumber><suffix>
  (Note that <suffix> may be empty, from the "" case in <decimalSI>.)
<digit>           ::= 0 | 1 | ... | 9 <digits>          ::= <digit> | <digit><digits> <number>          ::= <digits> | <digits>.<digits> | <digits>. | .<digits> <sign>            ::= "+" | "-" <signedNumber>    ::= <number> | <sign><number> <suffix>          ::= <binarySI> | <decimalExponent> | <decimalSI> <binarySI>        ::= Ki | Mi | Gi | Ti | Pi | Ei
  (International System of units; See: http://physics.nist.gov/cuu/Units/binary.html)
<decimalSI>       ::= m | "" | k | M | G | T | P | E
  (Note that 1024 = 1Ki but 1000 = 1k; I didn't choose the capitalization.)
<decimalExponent> ::= "e" <signedNumber> | "E" <signedNumber>

No matter which of the three exponent forms is used, no quantity may represent a number greater than 2^63-1 in magnitude, nor may it have more than 3 decimal places. Numbers larger or more precise will be capped or rounded up. (E.g.: 0.1m will rounded up to 1m.) This may be extended in the future if we require larger or smaller quantities.

When a Quantity is parsed from a string, it will remember the type of suffix it had, and will use the same type again when it is serialized.

Before serializing, Quantity will be put in "canonical form". This means that Exponent/suffix will be adjusted up or down (with a corresponding increase or decrease in Mantissa) such that:
  a. No precision is lost
  b. No fractional digits will be emitted
  c. The exponent (or suffix) is as large as possible.
The sign will be omitted unless the number is negative.

Examples:
  1.5 will be serialized as "1500m"
  1.5Gi will be serialized as "1536Mi"

Note that the quantity will NEVER be internally represented by a floating point number. That is the whole point of this exercise.

Non-canonical values will still parse as long as they are well formed, but will be re-emitted in their canonical form. (So always use canonical form, or don't diff.)

This format is intended to make it difficult to use these numbers without writing some sort of special handling code in the hopes that that will cause implementors to also use a fixed point implementation. */
export type io$k8s$apimachinery$pkg$api$resource$Quantity = {};

/** APIGroup contains the name, the supported versions, and the preferred version of a group. */
export type io$k8s$apimachinery$pkg$apis$meta$v1$APIGroup = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "APIGroup";
  /** name is the name of the group. */
  readonly "name": string;
  /** preferredVersion is the version preferred by the API server, which probably is the storage version. */
  readonly "preferredVersion"?:
    io$k8s$apimachinery$pkg$apis$meta$v1$GroupVersionForDiscovery;
  /** a map of client CIDR to server address that is serving this group. This is to help clients reach servers in the most network-efficient way possible. Clients can use the appropriate server address as per the CIDR that they match. In case of multiple matches, clients should use the longest matching CIDR. The server returns only those CIDRs that it thinks that the client can match. For example: the master will return an internal IP CIDR only, if the client reaches the server using an internal IP. Server looks at X-Forwarded-For header or X-Real-Ip header or request.RemoteAddr (in that order) to get the client IP. */
  readonly "serverAddressByClientCIDRs"?:
    readonly io$k8s$apimachinery$pkg$apis$meta$v1$ServerAddressByClientCIDR[];
  /** versions are the versions supported in this group. */
  readonly "versions":
    readonly io$k8s$apimachinery$pkg$apis$meta$v1$GroupVersionForDiscovery[];
};

/** APIGroupList is a list of APIGroup, to allow clients to discover the API at /apis. */
export type io$k8s$apimachinery$pkg$apis$meta$v1$APIGroupList = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** groups is a list of APIGroup. */
  readonly "groups": readonly io$k8s$apimachinery$pkg$apis$meta$v1$APIGroup[];
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "APIGroupList";
};

/** APIGroup contains the name, the supported versions, and the preferred version of a group. */
export type io$k8s$apimachinery$pkg$apis$meta$v1$APIGroup_v2 = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "APIGroup_v2";
  /** name is the name of the group. */
  readonly "name": string;
  /** preferredVersion is the version preferred by the API server, which probably is the storage version. */
  readonly "preferredVersion"?:
    io$k8s$apimachinery$pkg$apis$meta$v1$GroupVersionForDiscovery_v2;
  /** a map of client CIDR to server address that is serving this group. This is to help clients reach servers in the most network-efficient way possible. Clients can use the appropriate server address as per the CIDR that they match. In case of multiple matches, clients should use the longest matching CIDR. The server returns only those CIDRs that it thinks that the client can match. For example: the master will return an internal IP CIDR only, if the client reaches the server using an internal IP. Server looks at X-Forwarded-For header or X-Real-Ip header or request.RemoteAddr (in that order) to get the client IP. */
  readonly "serverAddressByClientCIDRs"?:
    readonly io$k8s$apimachinery$pkg$apis$meta$v1$ServerAddressByClientCIDR_v2[];
  /** versions are the versions supported in this group. */
  readonly "versions":
    readonly io$k8s$apimachinery$pkg$apis$meta$v1$GroupVersionForDiscovery_v2[];
};

/** APIResource specifies the name of a resource and whether it is namespaced. */
export type io$k8s$apimachinery$pkg$apis$meta$v1$APIResource = {
  /** categories is a list of the grouped resources this resource belongs to (e.g. 'all') */
  readonly "categories"?: readonly string[];
  /** group is the preferred group of the resource.  Empty implies the group of the containing resource list. For subresources, this may have a different value, for example: Scale". */
  readonly "group"?: string;
  /** kind is the kind for the resource (e.g. 'Foo' is the kind for a resource 'foo') */
  readonly "kind": "APIResource";
  /** name is the plural name of the resource. */
  readonly "name": string;
  /** namespaced indicates if a resource is namespaced or not. */
  readonly "namespaced": boolean;
  /** shortNames is a list of suggested short names of the resource. */
  readonly "shortNames"?: readonly string[];
  /** singularName is the singular name of the resource.  This allows clients to handle plural and singular opaquely. The singularName is more correct for reporting status on a single item and both singular and plural are allowed from the kubectl CLI interface. */
  readonly "singularName": string;
  /** The hash value of the storage version, the version this resource is converted to when written to the data store. Value must be treated as opaque by clients. Only equality comparison on the value is valid. This is an alpha feature and may change or be removed in the future. The field is populated by the apiserver only if the StorageVersionHash feature gate is enabled. This field will remain optional even if it graduates. */
  readonly "storageVersionHash"?: string;
  /** verbs is a list of supported kube verbs (this includes get, list, watch, create, update, patch, delete, deletecollection, and proxy) */
  readonly "verbs": readonly string[];
  /** version is the preferred version of the resource.  Empty implies the version of the containing resource list For subresources, this may have a different value, for example: v1 (while inside a v1beta1 version of the core resource's group)". */
  readonly "version"?: string;
};

/** APIResourceList is a list of APIResource, it is used to expose the name of the resources supported in a specific group and version, and if the resource is namespaced. */
export type io$k8s$apimachinery$pkg$apis$meta$v1$APIResourceList = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** groupVersion is the group and version this APIResourceList is for. */
  readonly "groupVersion": string;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "APIResourceList";
  /** resources contains the name of the resources and if they are namespaced. */
  readonly "resources":
    readonly io$k8s$apimachinery$pkg$apis$meta$v1$APIResource[];
};

/** APIResourceList is a list of APIResource, it is used to expose the name of the resources supported in a specific group and version, and if the resource is namespaced. */
export type io$k8s$apimachinery$pkg$apis$meta$v1$APIResourceList_v2 = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** groupVersion is the group and version this APIResourceList is for. */
  readonly "groupVersion": string;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "APIResourceList_v2";
  /** resources contains the name of the resources and if they are namespaced. */
  readonly "resources":
    readonly io$k8s$apimachinery$pkg$apis$meta$v1$APIResource_v2[];
};

/** APIResource specifies the name of a resource and whether it is namespaced. */
export type io$k8s$apimachinery$pkg$apis$meta$v1$APIResource_v2 = {
  /** categories is a list of the grouped resources this resource belongs to (e.g. 'all') */
  readonly "categories"?: readonly string[];
  /** group is the preferred group of the resource.  Empty implies the group of the containing resource list. For subresources, this may have a different value, for example: Scale". */
  readonly "group"?: string;
  /** kind is the kind for the resource (e.g. 'Foo' is the kind for a resource 'foo') */
  readonly "kind": "APIResource_v2";
  /** name is the plural name of the resource. */
  readonly "name": string;
  /** namespaced indicates if a resource is namespaced or not. */
  readonly "namespaced": boolean;
  /** shortNames is a list of suggested short names of the resource. */
  readonly "shortNames"?: readonly string[];
  /** singularName is the singular name of the resource.  This allows clients to handle plural and singular opaquely. The singularName is more correct for reporting status on a single item and both singular and plural are allowed from the kubectl CLI interface. */
  readonly "singularName": string;
  /** verbs is a list of supported kube verbs (this includes get, list, watch, create, update, patch, delete, deletecollection, and proxy) */
  readonly "verbs": readonly string[];
  /** version is the preferred version of the resource.  Empty implies the version of the containing resource list For subresources, this may have a different value, for example: v1 (while inside a v1beta1 version of the core resource's group)". */
  readonly "version"?: string;
};

/** APIVersions lists the versions that are available, to allow clients to discover the API at /api, which is the root path of the legacy v1 API. */
export type io$k8s$apimachinery$pkg$apis$meta$v1$APIVersions = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "APIVersions";
  /** a map of client CIDR to server address that is serving this group. This is to help clients reach servers in the most network-efficient way possible. Clients can use the appropriate server address as per the CIDR that they match. In case of multiple matches, clients should use the longest matching CIDR. The server returns only those CIDRs that it thinks that the client can match. For example: the master will return an internal IP CIDR only, if the client reaches the server using an internal IP. Server looks at X-Forwarded-For header or X-Real-Ip header or request.RemoteAddr (in that order) to get the client IP. */
  readonly "serverAddressByClientCIDRs":
    readonly io$k8s$apimachinery$pkg$apis$meta$v1$ServerAddressByClientCIDR[];
  /** versions are the api versions that are available. */
  readonly "versions": readonly string[];
};

/** DeleteOptions may be provided when deleting an API object. */
export type io$k8s$apimachinery$pkg$apis$meta$v1$DeleteOptions = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  readonly "dryRun"?: readonly string[];
  /** The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately. */
  readonly "gracePeriodSeconds"?: number;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "DeleteOptions";
  /** Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both. */
  readonly "orphanDependents"?: boolean;
  /** Must be fulfilled before a deletion is carried out. If not possible, a 409 Conflict status will be returned. */
  readonly "preconditions"?: io$k8s$apimachinery$pkg$apis$meta$v1$Preconditions;
  /** Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground. */
  readonly "propagationPolicy"?: string;
};

/** DeleteOptions may be provided when deleting an API object. */
export type io$k8s$apimachinery$pkg$apis$meta$v1$DeleteOptions_v2 = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately. */
  readonly "gracePeriodSeconds"?: number;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "DeleteOptions_v2";
  /** Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both. */
  readonly "orphanDependents"?: boolean;
  /** Must be fulfilled before a deletion is carried out. If not possible, a 409 Conflict status will be returned. */
  readonly "preconditions"?:
    io$k8s$apimachinery$pkg$apis$meta$v1$Preconditions_v2;
  /** Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground. */
  readonly "propagationPolicy"?: string;
};

/** Fields stores a set of fields in a data structure like a Trie. To understand how this is used, see: https://github.com/kubernetes-sigs/structured-merge-diff */
export type io$k8s$apimachinery$pkg$apis$meta$v1$Fields = {};

/** GroupVersion contains the "group/version" and "version" string of a version. It is made a struct to keep extensibility. */
export type io$k8s$apimachinery$pkg$apis$meta$v1$GroupVersionForDiscovery = {
  /** groupVersion specifies the API group and version in the form "group/version" */
  readonly "groupVersion": string;
  /** version specifies the version in the form of "version". This is to save the clients the trouble of splitting the GroupVersion. */
  readonly "version": string;
};

/** GroupVersion contains the "group/version" and "version" string of a version. It is made a struct to keep extensibility. */
export type io$k8s$apimachinery$pkg$apis$meta$v1$GroupVersionForDiscovery_v2 = {
  /** groupVersion specifies the API group and version in the form "group/version" */
  readonly "groupVersion": string;
  /** version specifies the version in the form of "version". This is to save the clients the trouble of splitting the GroupVersion. */
  readonly "version": string;
};

/** Initializer is information about an initializer that has not yet completed. */
export type io$k8s$apimachinery$pkg$apis$meta$v1$Initializer = {
  /** name of the process that is responsible for initializing this object. */
  readonly "name": string;
};

/** Initializer is information about an initializer that has not yet completed. */
export type io$k8s$apimachinery$pkg$apis$meta$v1$Initializer_v2 = {
  /** name of the process that is responsible for initializing this object. */
  readonly "name": string;
};

/** Initializers tracks the progress of initialization. */
export type io$k8s$apimachinery$pkg$apis$meta$v1$Initializers = {
  /** Pending is a list of initializers that must execute in order before this object is visible. When the last pending initializer is removed, and no failing result is set, the initializers struct will be set to nil and the object is considered as initialized and visible to all clients. */
  readonly "pending":
    readonly io$k8s$apimachinery$pkg$apis$meta$v1$Initializer[];
  /** If result is set with the Failure field, the object will be persisted to storage and then deleted, ensuring that other clients can observe the deletion. */
  readonly "result"?: io$k8s$apimachinery$pkg$apis$meta$v1$Status;
};

/** Initializers tracks the progress of initialization. */
export type io$k8s$apimachinery$pkg$apis$meta$v1$Initializers_v2 = {
  /** Pending is a list of initializers that must execute in order before this object is visible. When the last pending initializer is removed, and no failing result is set, the initializers struct will be set to nil and the object is considered as initialized and visible to all clients. */
  readonly "pending":
    readonly io$k8s$apimachinery$pkg$apis$meta$v1$Initializer_v2[];
  /** If result is set with the Failure field, the object will be persisted to storage and then deleted, ensuring that other clients can observe the deletion. */
  readonly "result"?: io$k8s$apimachinery$pkg$apis$meta$v1$Status_v2;
};

/** A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects. */
export type io$k8s$apimachinery$pkg$apis$meta$v1$LabelSelector = {
  /** matchExpressions is a list of label selector requirements. The requirements are ANDed. */
  readonly "matchExpressions"?:
    readonly io$k8s$apimachinery$pkg$apis$meta$v1$LabelSelectorRequirement[];
  /** matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed. */
  readonly "matchLabels"?: object;
};

/** A label selector requirement is a selector that contains values, a key, and an operator that relates the key and values. */
export type io$k8s$apimachinery$pkg$apis$meta$v1$LabelSelectorRequirement = {
  /** key is the label key that the selector applies to. */
  readonly "key": string;
  /** operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist. */
  readonly "operator": string;
  /** values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch. */
  readonly "values"?: readonly string[];
};

/** ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}. */
export type io$k8s$apimachinery$pkg$apis$meta$v1$ListMeta = {
  /** continue may be set if the user set a limit on the number of items returned, and indicates that the server has more data available. The value is opaque and may be used to issue another request to the endpoint that served this list to retrieve the next set of available objects. Continuing a consistent list may not be possible if the server configuration has changed or more than a few minutes have passed. The resourceVersion field returned when using this continue value will be identical to the value in the first response, unless you have received this token from an error message. */
  readonly "continue"?: string;
  /** remainingItemCount is the number of subsequent items in the list which are not included in this list response. If the list request contained label or field selectors, then the number of remaining items is unknown and the field will be left unset and omitted during serialization. If the list is complete (either because it is not chunking or because this is the last chunk), then there are no more remaining items and this field will be left unset and omitted during serialization. Servers older than v1.15 do not set this field. The intended use of the remainingItemCount is *estimating* the size of a collection. Clients should not rely on the remainingItemCount to be set or to be exact.

This field is alpha and can be changed or removed without notice. */
  readonly "remainingItemCount"?: number;
  /** String that identifies the server's internal version of this object that can be used by clients to determine when objects have changed. Value must be treated as opaque by clients and passed unmodified back to the server. Populated by the system. Read-only. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#concurrency-control-and-consistency */
  readonly "resourceVersion"?: string;
  /** selfLink is a URL representing this object. Populated by the system. Read-only. */
  readonly "selfLink"?: string;
};

/** ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}. */
export type io$k8s$apimachinery$pkg$apis$meta$v1$ListMeta_v2 = {
  /** continue may be set if the user set a limit on the number of items returned, and indicates that the server has more data available. The value is opaque and may be used to issue another request to the endpoint that served this list to retrieve the next set of available objects. Continuing a list may not be possible if the server configuration has changed or more than a few minutes have passed. The resourceVersion field returned when using this continue value will be identical to the value in the first response. */
  readonly "continue"?: string;
  /** String that identifies the server's internal version of this object that can be used by clients to determine when objects have changed. Value must be treated as opaque by clients and passed unmodified back to the server. Populated by the system. Read-only. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#concurrency-control-and-consistency */
  readonly "resourceVersion"?: string;
  /** selfLink is a URL representing this object. Populated by the system. Read-only. */
  readonly "selfLink"?: string;
};

/** ManagedFieldsEntry is a workflow-id, a FieldSet and the group version of the resource that the fieldset applies to. */
export type io$k8s$apimachinery$pkg$apis$meta$v1$ManagedFieldsEntry = {
  /** APIVersion defines the version of this resource that this field set applies to. The format is "group/version" just like the top-level APIVersion field. It is necessary to track the version of a field set because it cannot be automatically converted. */
  readonly "apiVersion"?: string;
  /** Fields identifies a set of fields. */
  readonly "fields"?: io$k8s$apimachinery$pkg$apis$meta$v1$Fields;
  /** Manager is an identifier of the workflow managing these fields. */
  readonly "manager"?: string;
  /** Operation is the type of operation which lead to this ManagedFieldsEntry being created. The only valid values for this field are 'Apply' and 'Update'. */
  readonly "operation"?: string;
  /** Time is timestamp of when these fields were set. It should always be empty if Operation is 'Apply' */
  readonly "time"?: io$k8s$apimachinery$pkg$apis$meta$v1$Time;
};

/** MicroTime is version of Time with microsecond level precision. */
export type io$k8s$apimachinery$pkg$apis$meta$v1$MicroTime = {};

/** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
export type io$k8s$apimachinery$pkg$apis$meta$v1$ObjectMeta = {
  /** Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: http://kubernetes.io/docs/user-guide/annotations */
  readonly "annotations"?: object;
  /** The name of the cluster which the object belongs to. This is used to distinguish resources with same name and namespace in different clusters. This field is not set anywhere right now and apiserver is going to ignore it if set in create or update request. */
  readonly "clusterName"?: string;
  /** CreationTimestamp is a timestamp representing the server time when this object was created. It is not guaranteed to be set in happens-before order across separate operations. Clients may not set this value. It is represented in RFC3339 form and is in UTC.

Populated by the system. Read-only. Null for lists. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata */
  readonly "creationTimestamp"?: io$k8s$apimachinery$pkg$apis$meta$v1$Time;
  /** Number of seconds allowed for this object to gracefully terminate before it will be removed from the system. Only set when deletionTimestamp is also set. May only be shortened. Read-only. */
  readonly "deletionGracePeriodSeconds"?: number;
  /** DeletionTimestamp is RFC 3339 date and time at which this resource will be deleted. This field is set by the server when a graceful deletion is requested by the user, and is not directly settable by a client. The resource is expected to be deleted (no longer visible from resource lists, and not reachable by name) after the time in this field, once the finalizers list is empty. As long as the finalizers list contains items, deletion is blocked. Once the deletionTimestamp is set, this value may not be unset or be set further into the future, although it may be shortened or the resource may be deleted prior to this time. For example, a user may request that a pod is deleted in 30 seconds. The Kubelet will react by sending a graceful termination signal to the containers in the pod. After that 30 seconds, the Kubelet will send a hard termination signal (SIGKILL) to the container and after cleanup, remove the pod from the API. In the presence of network partitions, this object may still exist after this timestamp, until an administrator or automated process can determine the resource is fully terminated. If not set, graceful deletion of the object has not been requested.

Populated by the system when a graceful deletion is requested. Read-only. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata */
  readonly "deletionTimestamp"?: io$k8s$apimachinery$pkg$apis$meta$v1$Time;
  /** Must be empty before the object is deleted from the registry. Each entry is an identifier for the responsible component that will remove the entry from the list. If the deletionTimestamp of the object is non-nil, entries in this list can only be removed. */
  readonly "finalizers"?: readonly string[];
  /** GenerateName is an optional prefix, used by the server, to generate a unique name ONLY IF the Name field has not been provided. If this field is used, the name returned to the client will be different than the name passed. This value will also be combined with a unique suffix. The provided value has the same validation rules as the Name field, and may be truncated by the length of the suffix required to make the value unique on the server.

If this field is specified and the generated name exists, the server will NOT return a 409 - instead, it will either return 201 Created or 500 with Reason ServerTimeout indicating a unique name could not be found in the time allotted, and the client should retry (optionally after the time indicated in the Retry-After header).

Applied only if Name is not specified. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#idempotency */
  readonly "generateName"?: string;
  /** A sequence number representing a specific generation of the desired state. Populated by the system. Read-only. */
  readonly "generation"?: number;
  /** An initializer is a controller which enforces some system invariant at object creation time. This field is a list of initializers that have not yet acted on this object. If nil or empty, this object has been completely initialized. Otherwise, the object is considered uninitialized and is hidden (in list/watch and get calls) from clients that haven't explicitly asked to observe uninitialized objects.

When an object is created, the system will populate this list with the current set of initializers. Only privileged users may set or modify this list. Once it is empty, it may not be modified further by any user.

DEPRECATED - initializers are an alpha field and will be removed in v1.15. */
  readonly "initializers"?: io$k8s$apimachinery$pkg$apis$meta$v1$Initializers;
  /** Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels */
  readonly "labels"?: object;
  /** ManagedFields maps workflow-id and version to the set of fields that are managed by that workflow. This is mostly for internal housekeeping, and users typically shouldn't need to set or understand this field. A workflow can be the user's name, a controller's name, or the name of a specific apply path like "ci-cd". The set of fields is always in the version that the workflow used when modifying the object.

This field is alpha and can be changed or removed without notice. */
  readonly "managedFields"?:
    readonly io$k8s$apimachinery$pkg$apis$meta$v1$ManagedFieldsEntry[];
  /** Name must be unique within a namespace. Is required when creating resources, although some resources may allow a client to request the generation of an appropriate name automatically. Name is primarily intended for creation idempotence and configuration definition. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly "name"?: string;
  /** Namespace defines the space within each name must be unique. An empty namespace is equivalent to the "default" namespace, but "default" is the canonical representation. Not all objects are required to be scoped to a namespace - the value of this field for those objects will be empty.

Must be a DNS_LABEL. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/namespaces */
  readonly "namespace"?: string;
  /** List of objects depended by this object. If ALL objects in the list have been deleted, this object will be garbage collected. If this object is managed by a controller, then an entry in this list will point to this controller, with the controller field set to true. There cannot be more than one managing controller. */
  readonly "ownerReferences"?:
    readonly io$k8s$apimachinery$pkg$apis$meta$v1$OwnerReference[];
  /** An opaque value that represents the internal version of this object that can be used by clients to determine when objects have changed. May be used for optimistic concurrency, change detection, and the watch operation on a resource or set of resources. Clients must treat these values as opaque and passed unmodified back to the server. They may only be valid for a particular resource or set of resources.

Populated by the system. Read-only. Value must be treated as opaque by clients and . More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#concurrency-control-and-consistency */
  readonly "resourceVersion"?: string;
  /** SelfLink is a URL representing this object. Populated by the system. Read-only. */
  readonly "selfLink"?: string;
  /** UID is the unique in time and space value for this object. It is typically generated by the server on successful creation of a resource and is not allowed to change on PUT operations.

Populated by the system. Read-only. More info: http://kubernetes.io/docs/user-guide/identifiers#uids */
  readonly "uid"?: string;
};

/** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
export type io$k8s$apimachinery$pkg$apis$meta$v1$ObjectMeta_v2 = {
  /** Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: http://kubernetes.io/docs/user-guide/annotations */
  readonly "annotations"?: object;
  /** The name of the cluster which the object belongs to. This is used to distinguish resources with same name and namespace in different clusters. This field is not set anywhere right now and apiserver is going to ignore it if set in create or update request. */
  readonly "clusterName"?: string;
  /** CreationTimestamp is a timestamp representing the server time when this object was created. It is not guaranteed to be set in happens-before order across separate operations. Clients may not set this value. It is represented in RFC3339 form and is in UTC.

Populated by the system. Read-only. Null for lists. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata */
  readonly "creationTimestamp"?: io$k8s$apimachinery$pkg$apis$meta$v1$Time;
  /** Number of seconds allowed for this object to gracefully terminate before it will be removed from the system. Only set when deletionTimestamp is also set. May only be shortened. Read-only. */
  readonly "deletionGracePeriodSeconds"?: number;
  /** DeletionTimestamp is RFC 3339 date and time at which this resource will be deleted. This field is set by the server when a graceful deletion is requested by the user, and is not directly settable by a client. The resource is expected to be deleted (no longer visible from resource lists, and not reachable by name) after the time in this field, once the finalizers list is empty. As long as the finalizers list contains items, deletion is blocked. Once the deletionTimestamp is set, this value may not be unset or be set further into the future, although it may be shortened or the resource may be deleted prior to this time. For example, a user may request that a pod is deleted in 30 seconds. The Kubelet will react by sending a graceful termination signal to the containers in the pod. After that 30 seconds, the Kubelet will send a hard termination signal (SIGKILL) to the container and after cleanup, remove the pod from the API. In the presence of network partitions, this object may still exist after this timestamp, until an administrator or automated process can determine the resource is fully terminated. If not set, graceful deletion of the object has not been requested.

Populated by the system when a graceful deletion is requested. Read-only. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata */
  readonly "deletionTimestamp"?: io$k8s$apimachinery$pkg$apis$meta$v1$Time;
  /** Must be empty before the object is deleted from the registry. Each entry is an identifier for the responsible component that will remove the entry from the list. If the deletionTimestamp of the object is non-nil, entries in this list can only be removed. */
  readonly "finalizers"?: readonly string[];
  /** GenerateName is an optional prefix, used by the server, to generate a unique name ONLY IF the Name field has not been provided. If this field is used, the name returned to the client will be different than the name passed. This value will also be combined with a unique suffix. The provided value has the same validation rules as the Name field, and may be truncated by the length of the suffix required to make the value unique on the server.

If this field is specified and the generated name exists, the server will NOT return a 409 - instead, it will either return 201 Created or 500 with Reason ServerTimeout indicating a unique name could not be found in the time allotted, and the client should retry (optionally after the time indicated in the Retry-After header).

Applied only if Name is not specified. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#idempotency */
  readonly "generateName"?: string;
  /** A sequence number representing a specific generation of the desired state. Populated by the system. Read-only. */
  readonly "generation"?: number;
  /** An initializer is a controller which enforces some system invariant at object creation time. This field is a list of initializers that have not yet acted on this object. If nil or empty, this object has been completely initialized. Otherwise, the object is considered uninitialized and is hidden (in list/watch and get calls) from clients that haven't explicitly asked to observe uninitialized objects.

When an object is created, the system will populate this list with the current set of initializers. Only privileged users may set or modify this list. Once it is empty, it may not be modified further by any user. */
  readonly "initializers"?:
    io$k8s$apimachinery$pkg$apis$meta$v1$Initializers_v2;
  /** Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels */
  readonly "labels"?: object;
  /** Name must be unique within a namespace. Is required when creating resources, although some resources may allow a client to request the generation of an appropriate name automatically. Name is primarily intended for creation idempotence and configuration definition. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly "name"?: string;
  /** Namespace defines the space within each name must be unique. An empty namespace is equivalent to the "default" namespace, but "default" is the canonical representation. Not all objects are required to be scoped to a namespace - the value of this field for those objects will be empty.

Must be a DNS_LABEL. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/namespaces */
  readonly "namespace"?: string;
  /** List of objects depended by this object. If ALL objects in the list have been deleted, this object will be garbage collected. If this object is managed by a controller, then an entry in this list will point to this controller, with the controller field set to true. There cannot be more than one managing controller. */
  readonly "ownerReferences"?:
    readonly io$k8s$apimachinery$pkg$apis$meta$v1$OwnerReference_v2[];
  /** An opaque value that represents the internal version of this object that can be used by clients to determine when objects have changed. May be used for optimistic concurrency, change detection, and the watch operation on a resource or set of resources. Clients must treat these values as opaque and passed unmodified back to the server. They may only be valid for a particular resource or set of resources.

Populated by the system. Read-only. Value must be treated as opaque by clients and . More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#concurrency-control-and-consistency */
  readonly "resourceVersion"?: string;
  /** SelfLink is a URL representing this object. Populated by the system. Read-only. */
  readonly "selfLink"?: string;
  /** UID is the unique in time and space value for this object. It is typically generated by the server on successful creation of a resource and is not allowed to change on PUT operations.

Populated by the system. Read-only. More info: http://kubernetes.io/docs/user-guide/identifiers#uids */
  readonly "uid"?: string;
};

/** OwnerReference contains enough information to let you identify an owning object. An owning object must be in the same namespace as the dependent, or be cluster-scoped, so there is no namespace field. */
export type io$k8s$apimachinery$pkg$apis$meta$v1$OwnerReference = {
  /** API version of the referent. */
  readonly "apiVersion": string;
  /** If true, AND if the owner has the "foregroundDeletion" finalizer, then the owner cannot be deleted from the key-value store until this reference is removed. Defaults to false. To set this field, a user needs "delete" permission of the owner, otherwise 422 (Unprocessable Entity) will be returned. */
  readonly "blockOwnerDeletion"?: boolean;
  /** If true, this reference points to the managing controller. */
  readonly "controller"?: boolean;
  /** Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind": "OwnerReference";
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly "name": string;
  /** UID of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#uids */
  readonly "uid": string;
};

/** OwnerReference contains enough information to let you identify an owning object. Currently, an owning object must be in the same namespace, so there is no namespace field. */
export type io$k8s$apimachinery$pkg$apis$meta$v1$OwnerReference_v2 = {
  /** API version of the referent. */
  readonly "apiVersion": string;
  /** If true, AND if the owner has the "foregroundDeletion" finalizer, then the owner cannot be deleted from the key-value store until this reference is removed. Defaults to false. To set this field, a user needs "delete" permission of the owner, otherwise 422 (Unprocessable Entity) will be returned. */
  readonly "blockOwnerDeletion"?: boolean;
  /** If true, this reference points to the managing controller. */
  readonly "controller"?: boolean;
  /** Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind": "OwnerReference_v2";
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly "name": string;
  /** UID of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#uids */
  readonly "uid": string;
};

/** Patch is provided to give a concrete name and type to the Kubernetes PATCH request body. */
export type io$k8s$apimachinery$pkg$apis$meta$v1$Patch = {};

/** Patch is provided to give a concrete name and type to the Kubernetes PATCH request body. */
export type io$k8s$apimachinery$pkg$apis$meta$v1$Patch_v2 = {};

/** Preconditions must be fulfilled before an operation (update, delete, etc.) is carried out. */
export type io$k8s$apimachinery$pkg$apis$meta$v1$Preconditions = {
  /** Specifies the target ResourceVersion */
  readonly "resourceVersion"?: string;
  /** Specifies the target UID. */
  readonly "uid"?: string;
};

/** Preconditions must be fulfilled before an operation (update, delete, etc.) is carried out. */
export type io$k8s$apimachinery$pkg$apis$meta$v1$Preconditions_v2 = {
  /** Specifies the target UID. */
  readonly "uid"?: string;
};

/** ServerAddressByClientCIDR helps the client to determine the server address that they should use, depending on the clientCIDR that they match. */
export type io$k8s$apimachinery$pkg$apis$meta$v1$ServerAddressByClientCIDR = {
  /** The CIDR with which clients can match their IP to figure out the server address that they should use. */
  readonly "clientCIDR": string;
  /** Address of this server, suitable for a client that matches the above CIDR. This can be a hostname, hostname:port, IP or IP:port. */
  readonly "serverAddress": string;
};

/** ServerAddressByClientCIDR helps the client to determine the server address that they should use, depending on the clientCIDR that they match. */
export type io$k8s$apimachinery$pkg$apis$meta$v1$ServerAddressByClientCIDR_v2 =
  {
    /** The CIDR with which clients can match their IP to figure out the server address that they should use. */
    readonly "clientCIDR": string;
    /** Address of this server, suitable for a client that matches the above CIDR. This can be a hostname, hostname:port, IP or IP:port. */
    readonly "serverAddress": string;
  };

/** Status is a return value for calls that don't return other objects. */
export type io$k8s$apimachinery$pkg$apis$meta$v1$Status = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Suggested HTTP return code for this status, 0 if not set. */
  readonly "code"?: number;
  /** Extended data associated with the reason.  Each reason may define its own extended details. This field is optional and the data returned is not guaranteed to conform to any schema except that defined by the reason type. */
  readonly "details"?: io$k8s$apimachinery$pkg$apis$meta$v1$StatusDetails;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "Status";
  /** A human-readable description of the status of this operation. */
  readonly "message"?: string;
  /** Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ListMeta;
  /** A machine-readable description of why this operation is in the "Failure" status. If this value is empty there is no information available. A Reason clarifies an HTTP status code but does not override it. */
  readonly "reason"?: string;
  /** Status of the operation. One of: "Success" or "Failure". More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status */
  readonly "status"?: string;
};

/** StatusCause provides more information about an api.Status failure, including cases when multiple errors are encountered. */
export type io$k8s$apimachinery$pkg$apis$meta$v1$StatusCause = {
  /** The field of the resource that has caused this error, as named by its JSON serialization. May include dot and postfix notation for nested attributes. Arrays are zero-indexed.  Fields may appear more than once in an array of causes due to fields having multiple errors. Optional.

Examples:
  "name" - the field "name" on the current resource
  "items[0].name" - the field "name" on the first array entry in "items" */
  readonly "field"?: string;
  /** A human-readable description of the cause of the error.  This field may be presented as-is to a reader. */
  readonly "message"?: string;
  /** A machine-readable description of the cause of the error. If this value is empty there is no information available. */
  readonly "reason"?: string;
};

/** StatusCause provides more information about an api.Status failure, including cases when multiple errors are encountered. */
export type io$k8s$apimachinery$pkg$apis$meta$v1$StatusCause_v2 = {
  /** The field of the resource that has caused this error, as named by its JSON serialization. May include dot and postfix notation for nested attributes. Arrays are zero-indexed.  Fields may appear more than once in an array of causes due to fields having multiple errors. Optional.

Examples:
  "name" - the field "name" on the current resource
  "items[0].name" - the field "name" on the first array entry in "items" */
  readonly "field"?: string;
  /** A human-readable description of the cause of the error.  This field may be presented as-is to a reader. */
  readonly "message"?: string;
  /** A machine-readable description of the cause of the error. If this value is empty there is no information available. */
  readonly "reason"?: string;
};

/** StatusDetails is a set of additional properties that MAY be set by the server to provide additional information about a response. The Reason field of a Status object defines what attributes will be set. Clients must ignore fields that do not match the defined type of each attribute, and should assume that any attribute may be empty, invalid, or under defined. */
export type io$k8s$apimachinery$pkg$apis$meta$v1$StatusDetails = {
  /** The Causes array includes more details associated with the StatusReason failure. Not all StatusReasons may provide detailed causes. */
  readonly "causes"?:
    readonly io$k8s$apimachinery$pkg$apis$meta$v1$StatusCause[];
  /** The group attribute of the resource associated with the status StatusReason. */
  readonly "group"?: string;
  /** The kind attribute of the resource associated with the status StatusReason. On some operations may differ from the requested resource Kind. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "StatusDetails";
  /** The name attribute of the resource associated with the status StatusReason (when there is a single name which can be described). */
  readonly "name"?: string;
  /** If specified, the time in seconds before the operation should be retried. Some errors may indicate the client must take an alternate action - for those errors this field may indicate how long to wait before taking the alternate action. */
  readonly "retryAfterSeconds"?: number;
  /** UID of the resource. (when there is a single resource which can be described). More info: http://kubernetes.io/docs/user-guide/identifiers#uids */
  readonly "uid"?: string;
};

/** StatusDetails is a set of additional properties that MAY be set by the server to provide additional information about a response. The Reason field of a Status object defines what attributes will be set. Clients must ignore fields that do not match the defined type of each attribute, and should assume that any attribute may be empty, invalid, or under defined. */
export type io$k8s$apimachinery$pkg$apis$meta$v1$StatusDetails_v2 = {
  /** The Causes array includes more details associated with the StatusReason failure. Not all StatusReasons may provide detailed causes. */
  readonly "causes"?:
    readonly io$k8s$apimachinery$pkg$apis$meta$v1$StatusCause_v2[];
  /** The group attribute of the resource associated with the status StatusReason. */
  readonly "group"?: string;
  /** The kind attribute of the resource associated with the status StatusReason. On some operations may differ from the requested resource Kind. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "StatusDetails_v2";
  /** The name attribute of the resource associated with the status StatusReason (when there is a single name which can be described). */
  readonly "name"?: string;
  /** If specified, the time in seconds before the operation should be retried. Some errors may indicate the client must take an alternate action - for those errors this field may indicate how long to wait before taking the alternate action. */
  readonly "retryAfterSeconds"?: number;
  /** UID of the resource. (when there is a single resource which can be described). More info: http://kubernetes.io/docs/user-guide/identifiers#uids */
  readonly "uid"?: string;
};

/** Status is a return value for calls that don't return other objects. */
export type io$k8s$apimachinery$pkg$apis$meta$v1$Status_v2 = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Suggested HTTP return code for this status, 0 if not set. */
  readonly "code"?: number;
  /** Extended data associated with the reason.  Each reason may define its own extended details. This field is optional and the data returned is not guaranteed to conform to any schema except that defined by the reason type. */
  readonly "details"?: io$k8s$apimachinery$pkg$apis$meta$v1$StatusDetails_v2;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "Status_v2";
  /** A human-readable description of the status of this operation. */
  readonly "message"?: string;
  /** Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ListMeta_v2;
  /** A machine-readable description of why this operation is in the "Failure" status. If this value is empty there is no information available. A Reason clarifies an HTTP status code but does not override it. */
  readonly "reason"?: string;
  /** Status of the operation. One of: "Success" or "Failure". More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status */
  readonly "status"?: string;
};

/** Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers. */
export type io$k8s$apimachinery$pkg$apis$meta$v1$Time = {};

/** Event represents a single event to a watched resource. */
export type io$k8s$apimachinery$pkg$apis$meta$v1$WatchEvent = {
  /** Object is:
 * If Type is Added or Modified: the new state of the object.
 * If Type is Deleted: the state of the object immediately before deletion.
 * If Type is Error: *Status is recommended; other types may make sense
   depending on context. */
  readonly "object": io$k8s$apimachinery$pkg$runtime$RawExtension;
  readonly "type": string;
};

/** Event represents a single event to a watched resource. */
export type io$k8s$apimachinery$pkg$apis$meta$v1$WatchEvent_v2 = {
  /** Object is:
 * If Type is Added or Modified: the new state of the object.
 * If Type is Deleted: the state of the object immediately before deletion.
 * If Type is Error: *Status is recommended; other types may make sense
   depending on context. */
  readonly "object": io$k8s$apimachinery$pkg$runtime$RawExtension_v2;
  readonly "type": string;
};

/** RawExtension is used to hold extensions in external versions.

To use this, make a field which has RawExtension as its type in your external, versioned struct, and Object in your internal struct. You also need to register your various plugin types.

// Internal package: type MyAPIObject struct {
	runtime.TypeMeta `json:",inline"`
	MyPlugin runtime.Object `json:"myPlugin"`
} type PluginA struct {
	AOption string `json:"aOption"`
}

// External package: type MyAPIObject struct {
	runtime.TypeMeta `json:",inline"`
	MyPlugin runtime.RawExtension `json:"myPlugin"`
} type PluginA struct {
	AOption string `json:"aOption"`
}

// On the wire, the JSON will look something like this: {
	"kind":"MyAPIObject",
	"apiVersion":"v1",
	"myPlugin": {
		"kind":"PluginA",
		"aOption":"foo",
	},
}

So what happens? Decode first uses json or yaml to unmarshal the serialized data into your external MyAPIObject. That causes the raw JSON to be stored, but not unpacked. The next step is to copy (using pkg/conversion) into the internal struct. The runtime package's DefaultScheme has conversion functions installed which will unpack the JSON stored in RawExtension, turning it into the correct object type, and storing it in the Object. (TODO: In the case where the object is of an unknown type, a runtime.Unknown object will be created and stored.) */
export type io$k8s$apimachinery$pkg$runtime$RawExtension = {
  /** Raw is the underlying serialization of this object. */
  readonly "Raw": string;
};

/** RawExtension is used to hold extensions in external versions.

To use this, make a field which has RawExtension as its type in your external, versioned struct, and Object in your internal struct. You also need to register your various plugin types.

// Internal package: type MyAPIObject struct {
	runtime.TypeMeta `json:",inline"`
	MyPlugin runtime.Object `json:"myPlugin"`
} type PluginA struct {
	AOption string `json:"aOption"`
}

// External package: type MyAPIObject struct {
	runtime.TypeMeta `json:",inline"`
	MyPlugin runtime.RawExtension `json:"myPlugin"`
} type PluginA struct {
	AOption string `json:"aOption"`
}

// On the wire, the JSON will look something like this: {
	"kind":"MyAPIObject",
	"apiVersion":"v1",
	"myPlugin": {
		"kind":"PluginA",
		"aOption":"foo",
	},
}

So what happens? Decode first uses json or yaml to unmarshal the serialized data into your external MyAPIObject. That causes the raw JSON to be stored, but not unpacked. The next step is to copy (using pkg/conversion) into the internal struct. The runtime package's DefaultScheme has conversion functions installed which will unpack the JSON stored in RawExtension, turning it into the correct object type, and storing it in the Object. (TODO: In the case where the object is of an unknown type, a runtime.Unknown object will be created and stored.) */
export type io$k8s$apimachinery$pkg$runtime$RawExtension_v2 = {
  /** Raw is the underlying serialization of this object. */
  readonly "Raw": string;
};

/** IntOrString is a type that can hold an int32 or a string.  When used in JSON or YAML marshalling and unmarshalling, it produces or consumes the inner type.  This allows you to have, for example, a JSON field that can accept a name or number. */
export type io$k8s$apimachinery$pkg$util$intstr$IntOrString = {};

/** Info contains versioning information. how we'll want to distribute that information. */
export type io$k8s$apimachinery$pkg$version$Info = {
  readonly "buildDate": string;
  readonly "compiler": string;
  readonly "gitCommit": string;
  readonly "gitTreeState": string;
  readonly "gitVersion": string;
  readonly "goVersion": string;
  readonly "major": string;
  readonly "minor": string;
  readonly "platform": string;
};

/** APIService represents a server for a particular GroupVersion. Name must be "version.group". */
export type io$k8s$kube_aggregator$pkg$apis$apiregistration$v1$APIService = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
  readonly "apiVersion"?: string;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
  readonly "kind"?: "APIService";
  readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ObjectMeta;
  /** Spec contains information for locating and communicating with a server */
  readonly "spec"?:
    io$k8s$kube_aggregator$pkg$apis$apiregistration$v1$APIServiceSpec;
  /** Status contains derived information about an API server */
  readonly "status"?:
    io$k8s$kube_aggregator$pkg$apis$apiregistration$v1$APIServiceStatus;
};

/** APIServiceCondition describes the state of an APIService at a particular point */
export type io$k8s$kube_aggregator$pkg$apis$apiregistration$v1$APIServiceCondition =
  {
    /** Last time the condition transitioned from one status to another. */
    readonly "lastTransitionTime"?: io$k8s$apimachinery$pkg$apis$meta$v1$Time;
    /** Human-readable message indicating details about last transition. */
    readonly "message"?: string;
    /** Unique, one-word, CamelCase reason for the condition's last transition. */
    readonly "reason"?: string;
    /** Status is the status of the condition. Can be True, False, Unknown. */
    readonly "status": string;
    /** Type is the type of the condition. */
    readonly "type": string;
  };

/** APIServiceList is a list of APIService objects. */
export type io$k8s$kube_aggregator$pkg$apis$apiregistration$v1$APIServiceList =
  {
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
    readonly "apiVersion"?: string;
    readonly "items":
      readonly io$k8s$kube_aggregator$pkg$apis$apiregistration$v1$APIService[];
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
    readonly "kind"?: "APIServiceList";
    readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ListMeta;
  };

/** APIServiceSpec contains information for locating and communicating with a server. Only https is supported, though you are able to disable certificate verification. */
export type io$k8s$kube_aggregator$pkg$apis$apiregistration$v1$APIServiceSpec =
  {
    /** CABundle is a PEM encoded CA bundle which will be used to validate an API server's serving certificate. If unspecified, system trust roots on the apiserver are used. */
    readonly "caBundle"?: string;
    /** Group is the API group name this server hosts */
    readonly "group"?: string;
    /** GroupPriorityMininum is the priority this group should have at least. Higher priority means that the group is preferred by clients over lower priority ones. Note that other versions of this group might specify even higher GroupPriorityMininum values such that the whole group gets a higher priority. The primary sort is based on GroupPriorityMinimum, ordered highest number to lowest (20 before 10). The secondary sort is based on the alphabetical comparison of the name of the object.  (v1.bar before v1.foo) We'd recommend something like: *.k8s.io (except extensions) at 18000 and PaaSes (OpenShift, Deis) are recommended to be in the 2000s */
    readonly "groupPriorityMinimum": number;
    /** InsecureSkipTLSVerify disables TLS certificate verification when communicating with this server. This is strongly discouraged.  You should use the CABundle instead. */
    readonly "insecureSkipTLSVerify"?: boolean;
    /** Service is a reference to the service for this API server.  It must communicate on port 443 If the Service is nil, that means the handling for the API groupversion is handled locally on this server. The call will simply delegate to the normal handler chain to be fulfilled. */
    readonly "service":
      io$k8s$kube_aggregator$pkg$apis$apiregistration$v1$ServiceReference;
    /** Version is the API version this server hosts.  For example, "v1" */
    readonly "version"?: string;
    /** VersionPriority controls the ordering of this API version inside of its group.  Must be greater than zero. The primary sort is based on VersionPriority, ordered highest to lowest (20 before 10). Since it's inside of a group, the number can be small, probably in the 10s. In case of equal version priorities, the version string will be used to compute the order inside a group. If the version string is "kube-like", it will sort above non "kube-like" version strings, which are ordered lexicographically. "Kube-like" versions start with a "v", then are followed by a number (the major version), then optionally the string "alpha" or "beta" and another number (the minor version). These are sorted first by GA > beta > alpha (where GA is a version with no suffix such as beta or alpha), and then by comparing major version, then minor version. An example sorted list of versions: v10, v2, v1, v11beta2, v10beta3, v3beta1, v12alpha1, v11alpha2, foo1, foo10. */
    readonly "versionPriority": number;
  };

/** APIServiceStatus contains derived information about an API server */
export type io$k8s$kube_aggregator$pkg$apis$apiregistration$v1$APIServiceStatus =
  {
    /** Current service state of apiService. */
    readonly "conditions"?:
      readonly io$k8s$kube_aggregator$pkg$apis$apiregistration$v1$APIServiceCondition[];
  };

/** ServiceReference holds a reference to Service.legacy.k8s.io */
export type io$k8s$kube_aggregator$pkg$apis$apiregistration$v1$ServiceReference =
  {
    /** Name is the name of the service */
    readonly "name"?: string;
    /** Namespace is the namespace of the service */
    readonly "namespace"?: string;
    /** If specified, the port on the service that hosting webhook. Default to 443 for backward compatibility. `port` should be a valid port number (1-65535, inclusive). */
    readonly "port"?: number;
  };

/** APIService represents a server for a particular GroupVersion. Name must be "version.group". */
export type io$k8s$kube_aggregator$pkg$apis$apiregistration$v1beta1$APIService =
  {
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
    readonly "apiVersion"?: string;
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
    readonly "kind"?: "APIService";
    readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ObjectMeta;
    /** Spec contains information for locating and communicating with a server */
    readonly "spec"?:
      io$k8s$kube_aggregator$pkg$apis$apiregistration$v1beta1$APIServiceSpec;
    /** Status contains derived information about an API server */
    readonly "status"?:
      io$k8s$kube_aggregator$pkg$apis$apiregistration$v1beta1$APIServiceStatus;
  };

/** APIServiceCondition describes the state of an APIService at a particular point */
export type io$k8s$kube_aggregator$pkg$apis$apiregistration$v1beta1$APIServiceCondition =
  {
    /** Last time the condition transitioned from one status to another. */
    readonly "lastTransitionTime"?: io$k8s$apimachinery$pkg$apis$meta$v1$Time;
    /** Human-readable message indicating details about last transition. */
    readonly "message"?: string;
    /** Unique, one-word, CamelCase reason for the condition's last transition. */
    readonly "reason"?: string;
    /** Status is the status of the condition. Can be True, False, Unknown. */
    readonly "status": string;
    /** Type is the type of the condition. */
    readonly "type": string;
  };

/** APIServiceList is a list of APIService objects. */
export type io$k8s$kube_aggregator$pkg$apis$apiregistration$v1beta1$APIServiceList =
  {
    /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources */
    readonly "apiVersion"?: string;
    readonly "items":
      readonly io$k8s$kube_aggregator$pkg$apis$apiregistration$v1beta1$APIService[];
    /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds */
    readonly "kind"?: "APIServiceList";
    readonly "metadata"?: io$k8s$apimachinery$pkg$apis$meta$v1$ListMeta;
  };

/** APIServiceSpec contains information for locating and communicating with a server. Only https is supported, though you are able to disable certificate verification. */
export type io$k8s$kube_aggregator$pkg$apis$apiregistration$v1beta1$APIServiceSpec =
  {
    /** CABundle is a PEM encoded CA bundle which will be used to validate an API server's serving certificate. If unspecified, system trust roots on the apiserver are used. */
    readonly "caBundle"?: string;
    /** Group is the API group name this server hosts */
    readonly "group"?: string;
    /** GroupPriorityMininum is the priority this group should have at least. Higher priority means that the group is preferred by clients over lower priority ones. Note that other versions of this group might specify even higher GroupPriorityMininum values such that the whole group gets a higher priority. The primary sort is based on GroupPriorityMinimum, ordered highest number to lowest (20 before 10). The secondary sort is based on the alphabetical comparison of the name of the object.  (v1.bar before v1.foo) We'd recommend something like: *.k8s.io (except extensions) at 18000 and PaaSes (OpenShift, Deis) are recommended to be in the 2000s */
    readonly "groupPriorityMinimum": number;
    /** InsecureSkipTLSVerify disables TLS certificate verification when communicating with this server. This is strongly discouraged.  You should use the CABundle instead. */
    readonly "insecureSkipTLSVerify"?: boolean;
    /** Service is a reference to the service for this API server.  It must communicate on port 443 If the Service is nil, that means the handling for the API groupversion is handled locally on this server. The call will simply delegate to the normal handler chain to be fulfilled. */
    readonly "service":
      io$k8s$kube_aggregator$pkg$apis$apiregistration$v1beta1$ServiceReference;
    /** Version is the API version this server hosts.  For example, "v1" */
    readonly "version"?: string;
    /** VersionPriority controls the ordering of this API version inside of its group.  Must be greater than zero. The primary sort is based on VersionPriority, ordered highest to lowest (20 before 10). Since it's inside of a group, the number can be small, probably in the 10s. In case of equal version priorities, the version string will be used to compute the order inside a group. If the version string is "kube-like", it will sort above non "kube-like" version strings, which are ordered lexicographically. "Kube-like" versions start with a "v", then are followed by a number (the major version), then optionally the string "alpha" or "beta" and another number (the minor version). These are sorted first by GA > beta > alpha (where GA is a version with no suffix such as beta or alpha), and then by comparing major version, then minor version. An example sorted list of versions: v10, v2, v1, v11beta2, v10beta3, v3beta1, v12alpha1, v11alpha2, foo1, foo10. */
    readonly "versionPriority": number;
  };

/** APIServiceStatus contains derived information about an API server */
export type io$k8s$kube_aggregator$pkg$apis$apiregistration$v1beta1$APIServiceStatus =
  {
    /** Current service state of apiService. */
    readonly "conditions"?:
      readonly io$k8s$kube_aggregator$pkg$apis$apiregistration$v1beta1$APIServiceCondition[];
  };

/** ServiceReference holds a reference to Service.legacy.k8s.io */
export type io$k8s$kube_aggregator$pkg$apis$apiregistration$v1beta1$ServiceReference =
  {
    /** Name is the name of the service */
    readonly "name"?: string;
    /** Namespace is the namespace of the service */
    readonly "namespace"?: string;
    /** If specified, the port on the service that hosting webhook. Default to 443 for backward compatibility. `port` should be a valid port number (1-65535, inclusive). */
    readonly "port"?: number;
  };

export type KubernetesConfig =
  | io$k8s$api$admissionregistration$v1beta1$MutatingWebhook
  | io$k8s$api$admissionregistration$v1beta1$MutatingWebhookConfiguration
  | io$k8s$api$admissionregistration$v1beta1$MutatingWebhookConfigurationList
  | io$k8s$api$admissionregistration$v1beta1$RuleWithOperations
  | io$k8s$api$admissionregistration$v1beta1$ServiceReference
  | io$k8s$api$admissionregistration$v1beta1$ValidatingWebhook
  | io$k8s$api$admissionregistration$v1beta1$ValidatingWebhookConfiguration
  | io$k8s$api$admissionregistration$v1beta1$ValidatingWebhookConfigurationList
  | io$k8s$api$admissionregistration$v1beta1$WebhookClientConfig
  | io$k8s$api$apps$v1$ControllerRevision
  | io$k8s$api$apps$v1$ControllerRevisionList
  | io$k8s$api$apps$v1$DaemonSet
  | io$k8s$api$apps$v1$DaemonSetCondition
  | io$k8s$api$apps$v1$DaemonSetList
  | io$k8s$api$apps$v1$DaemonSetSpec
  | io$k8s$api$apps$v1$DaemonSetStatus
  | io$k8s$api$apps$v1$DaemonSetUpdateStrategy
  | io$k8s$api$apps$v1$Deployment
  | io$k8s$api$apps$v1$DeploymentCondition
  | io$k8s$api$apps$v1$DeploymentList
  | io$k8s$api$apps$v1$DeploymentSpec
  | io$k8s$api$apps$v1$DeploymentStatus
  | io$k8s$api$apps$v1$DeploymentStrategy
  | io$k8s$api$apps$v1$ReplicaSet
  | io$k8s$api$apps$v1$ReplicaSetCondition
  | io$k8s$api$apps$v1$ReplicaSetList
  | io$k8s$api$apps$v1$ReplicaSetSpec
  | io$k8s$api$apps$v1$ReplicaSetStatus
  | io$k8s$api$apps$v1$RollingUpdateDaemonSet
  | io$k8s$api$apps$v1$RollingUpdateDeployment
  | io$k8s$api$apps$v1$RollingUpdateStatefulSetStrategy
  | io$k8s$api$apps$v1$StatefulSet
  | io$k8s$api$apps$v1$StatefulSetCondition
  | io$k8s$api$apps$v1$StatefulSetList
  | io$k8s$api$apps$v1$StatefulSetSpec
  | io$k8s$api$apps$v1$StatefulSetStatus
  | io$k8s$api$apps$v1$StatefulSetUpdateStrategy
  | io$k8s$api$apps$v1beta1$ControllerRevision
  | io$k8s$api$apps$v1beta1$ControllerRevisionList
  | io$k8s$api$apps$v1beta1$Deployment
  | io$k8s$api$apps$v1beta1$DeploymentCondition
  | io$k8s$api$apps$v1beta1$DeploymentList
  | io$k8s$api$apps$v1beta1$DeploymentRollback
  | io$k8s$api$apps$v1beta1$DeploymentSpec
  | io$k8s$api$apps$v1beta1$DeploymentStatus
  | io$k8s$api$apps$v1beta1$DeploymentStrategy
  | io$k8s$api$apps$v1beta1$RollbackConfig
  | io$k8s$api$apps$v1beta1$RollingUpdateDeployment
  | io$k8s$api$apps$v1beta1$RollingUpdateStatefulSetStrategy
  | io$k8s$api$apps$v1beta1$Scale
  | io$k8s$api$apps$v1beta1$ScaleSpec
  | io$k8s$api$apps$v1beta1$ScaleStatus
  | io$k8s$api$apps$v1beta1$StatefulSet
  | io$k8s$api$apps$v1beta1$StatefulSetCondition
  | io$k8s$api$apps$v1beta1$StatefulSetList
  | io$k8s$api$apps$v1beta1$StatefulSetSpec
  | io$k8s$api$apps$v1beta1$StatefulSetStatus
  | io$k8s$api$apps$v1beta1$StatefulSetUpdateStrategy
  | io$k8s$api$apps$v1beta2$ControllerRevision
  | io$k8s$api$apps$v1beta2$ControllerRevisionList
  | io$k8s$api$apps$v1beta2$DaemonSet
  | io$k8s$api$apps$v1beta2$DaemonSetCondition
  | io$k8s$api$apps$v1beta2$DaemonSetList
  | io$k8s$api$apps$v1beta2$DaemonSetSpec
  | io$k8s$api$apps$v1beta2$DaemonSetStatus
  | io$k8s$api$apps$v1beta2$DaemonSetUpdateStrategy
  | io$k8s$api$apps$v1beta2$Deployment
  | io$k8s$api$apps$v1beta2$DeploymentCondition
  | io$k8s$api$apps$v1beta2$DeploymentList
  | io$k8s$api$apps$v1beta2$DeploymentSpec
  | io$k8s$api$apps$v1beta2$DeploymentStatus
  | io$k8s$api$apps$v1beta2$DeploymentStrategy
  | io$k8s$api$apps$v1beta2$ReplicaSet
  | io$k8s$api$apps$v1beta2$ReplicaSetCondition
  | io$k8s$api$apps$v1beta2$ReplicaSetList
  | io$k8s$api$apps$v1beta2$ReplicaSetSpec
  | io$k8s$api$apps$v1beta2$ReplicaSetStatus
  | io$k8s$api$apps$v1beta2$RollingUpdateDaemonSet
  | io$k8s$api$apps$v1beta2$RollingUpdateDeployment
  | io$k8s$api$apps$v1beta2$RollingUpdateStatefulSetStrategy
  | io$k8s$api$apps$v1beta2$Scale
  | io$k8s$api$apps$v1beta2$ScaleSpec
  | io$k8s$api$apps$v1beta2$ScaleStatus
  | io$k8s$api$apps$v1beta2$StatefulSet
  | io$k8s$api$apps$v1beta2$StatefulSetCondition
  | io$k8s$api$apps$v1beta2$StatefulSetList
  | io$k8s$api$apps$v1beta2$StatefulSetSpec
  | io$k8s$api$apps$v1beta2$StatefulSetStatus
  | io$k8s$api$apps$v1beta2$StatefulSetUpdateStrategy
  | io$k8s$api$authentication$v1$TokenReview
  | io$k8s$api$authentication$v1$TokenReviewSpec
  | io$k8s$api$authentication$v1$TokenReviewStatus
  | io$k8s$api$authentication$v1$UserInfo
  | io$k8s$api$authentication$v1beta1$TokenReview
  | io$k8s$api$authentication$v1beta1$TokenReviewSpec
  | io$k8s$api$authentication$v1beta1$TokenReviewStatus
  | io$k8s$api$authentication$v1beta1$UserInfo
  | io$k8s$api$authorization$v1$LocalSubjectAccessReview
  | io$k8s$api$authorization$v1$NonResourceAttributes
  | io$k8s$api$authorization$v1$NonResourceRule
  | io$k8s$api$authorization$v1$ResourceAttributes
  | io$k8s$api$authorization$v1$ResourceRule
  | io$k8s$api$authorization$v1$SelfSubjectAccessReview
  | io$k8s$api$authorization$v1$SelfSubjectAccessReviewSpec
  | io$k8s$api$authorization$v1$SelfSubjectRulesReview
  | io$k8s$api$authorization$v1$SelfSubjectRulesReviewSpec
  | io$k8s$api$authorization$v1$SubjectAccessReview
  | io$k8s$api$authorization$v1$SubjectAccessReviewSpec
  | io$k8s$api$authorization$v1$SubjectAccessReviewStatus
  | io$k8s$api$authorization$v1$SubjectRulesReviewStatus
  | io$k8s$api$authorization$v1beta1$LocalSubjectAccessReview
  | io$k8s$api$authorization$v1beta1$NonResourceAttributes
  | io$k8s$api$authorization$v1beta1$NonResourceRule
  | io$k8s$api$authorization$v1beta1$ResourceAttributes
  | io$k8s$api$authorization$v1beta1$ResourceRule
  | io$k8s$api$authorization$v1beta1$SelfSubjectAccessReview
  | io$k8s$api$authorization$v1beta1$SelfSubjectAccessReviewSpec
  | io$k8s$api$authorization$v1beta1$SelfSubjectRulesReview
  | io$k8s$api$authorization$v1beta1$SelfSubjectRulesReviewSpec
  | io$k8s$api$authorization$v1beta1$SubjectAccessReview
  | io$k8s$api$authorization$v1beta1$SubjectAccessReviewSpec
  | io$k8s$api$authorization$v1beta1$SubjectAccessReviewStatus
  | io$k8s$api$authorization$v1beta1$SubjectRulesReviewStatus
  | io$k8s$api$autoscaling$v1$CrossVersionObjectReference
  | io$k8s$api$autoscaling$v1$HorizontalPodAutoscaler
  | io$k8s$api$autoscaling$v1$HorizontalPodAutoscalerList
  | io$k8s$api$autoscaling$v1$HorizontalPodAutoscalerSpec
  | io$k8s$api$autoscaling$v1$HorizontalPodAutoscalerStatus
  | io$k8s$api$autoscaling$v1$Scale
  | io$k8s$api$autoscaling$v1$ScaleSpec
  | io$k8s$api$autoscaling$v1$ScaleStatus
  | io$k8s$api$autoscaling$v2beta1$CrossVersionObjectReference
  | io$k8s$api$autoscaling$v2beta1$ExternalMetricSource
  | io$k8s$api$autoscaling$v2beta1$ExternalMetricStatus
  | io$k8s$api$autoscaling$v2beta1$HorizontalPodAutoscaler
  | io$k8s$api$autoscaling$v2beta1$HorizontalPodAutoscalerCondition
  | io$k8s$api$autoscaling$v2beta1$HorizontalPodAutoscalerList
  | io$k8s$api$autoscaling$v2beta1$HorizontalPodAutoscalerSpec
  | io$k8s$api$autoscaling$v2beta1$HorizontalPodAutoscalerStatus
  | io$k8s$api$autoscaling$v2beta1$MetricSpec
  | io$k8s$api$autoscaling$v2beta1$MetricStatus
  | io$k8s$api$autoscaling$v2beta1$ObjectMetricSource
  | io$k8s$api$autoscaling$v2beta1$ObjectMetricStatus
  | io$k8s$api$autoscaling$v2beta1$PodsMetricSource
  | io$k8s$api$autoscaling$v2beta1$PodsMetricStatus
  | io$k8s$api$autoscaling$v2beta1$ResourceMetricSource
  | io$k8s$api$autoscaling$v2beta1$ResourceMetricStatus
  | io$k8s$api$autoscaling$v2beta2$CrossVersionObjectReference
  | io$k8s$api$autoscaling$v2beta2$ExternalMetricSource
  | io$k8s$api$autoscaling$v2beta2$ExternalMetricStatus
  | io$k8s$api$autoscaling$v2beta2$HorizontalPodAutoscaler
  | io$k8s$api$autoscaling$v2beta2$HorizontalPodAutoscalerCondition
  | io$k8s$api$autoscaling$v2beta2$HorizontalPodAutoscalerList
  | io$k8s$api$autoscaling$v2beta2$HorizontalPodAutoscalerSpec
  | io$k8s$api$autoscaling$v2beta2$HorizontalPodAutoscalerStatus
  | io$k8s$api$autoscaling$v2beta2$MetricIdentifier
  | io$k8s$api$autoscaling$v2beta2$MetricSpec
  | io$k8s$api$autoscaling$v2beta2$MetricStatus
  | io$k8s$api$autoscaling$v2beta2$MetricTarget
  | io$k8s$api$autoscaling$v2beta2$MetricValueStatus
  | io$k8s$api$autoscaling$v2beta2$ObjectMetricSource
  | io$k8s$api$autoscaling$v2beta2$ObjectMetricStatus
  | io$k8s$api$autoscaling$v2beta2$PodsMetricSource
  | io$k8s$api$autoscaling$v2beta2$PodsMetricStatus
  | io$k8s$api$autoscaling$v2beta2$ResourceMetricSource
  | io$k8s$api$autoscaling$v2beta2$ResourceMetricStatus
  | io$k8s$api$batch$v1$Job
  | io$k8s$api$batch$v1$JobCondition
  | io$k8s$api$batch$v1$JobList
  | io$k8s$api$batch$v1$JobSpec
  | io$k8s$api$batch$v1$JobStatus
  | io$k8s$api$batch$v1beta1$CronJob
  | io$k8s$api$batch$v1beta1$CronJobList
  | io$k8s$api$batch$v1beta1$CronJobSpec
  | io$k8s$api$batch$v1beta1$CronJobStatus
  | io$k8s$api$batch$v1beta1$JobTemplateSpec
  | io$k8s$api$certificates$v1beta1$CertificateSigningRequest
  | io$k8s$api$certificates$v1beta1$CertificateSigningRequestCondition
  | io$k8s$api$certificates$v1beta1$CertificateSigningRequestList
  | io$k8s$api$certificates$v1beta1$CertificateSigningRequestSpec
  | io$k8s$api$certificates$v1beta1$CertificateSigningRequestStatus
  | io$k8s$api$coordination$v1$Lease
  | io$k8s$api$coordination$v1$LeaseList
  | io$k8s$api$coordination$v1$LeaseSpec
  | io$k8s$api$coordination$v1beta1$Lease
  | io$k8s$api$coordination$v1beta1$LeaseList
  | io$k8s$api$coordination$v1beta1$LeaseSpec
  | io$k8s$api$core$v1$AWSElasticBlockStoreVolumeSource
  | io$k8s$api$core$v1$Affinity
  | io$k8s$api$core$v1$AttachedVolume
  | io$k8s$api$core$v1$AzureDiskVolumeSource
  | io$k8s$api$core$v1$AzureFilePersistentVolumeSource
  | io$k8s$api$core$v1$AzureFileVolumeSource
  | io$k8s$api$core$v1$Binding
  | io$k8s$api$core$v1$CSIPersistentVolumeSource
  | io$k8s$api$core$v1$CSIVolumeSource
  | io$k8s$api$core$v1$Capabilities
  | io$k8s$api$core$v1$CephFSPersistentVolumeSource
  | io$k8s$api$core$v1$CephFSVolumeSource
  | io$k8s$api$core$v1$CinderPersistentVolumeSource
  | io$k8s$api$core$v1$CinderVolumeSource
  | io$k8s$api$core$v1$ClientIPConfig
  | io$k8s$api$core$v1$ComponentCondition
  | io$k8s$api$core$v1$ComponentStatus
  | io$k8s$api$core$v1$ComponentStatusList
  | io$k8s$api$core$v1$ConfigMap
  | io$k8s$api$core$v1$ConfigMapEnvSource
  | io$k8s$api$core$v1$ConfigMapKeySelector
  | io$k8s$api$core$v1$ConfigMapList
  | io$k8s$api$core$v1$ConfigMapNodeConfigSource
  | io$k8s$api$core$v1$ConfigMapProjection
  | io$k8s$api$core$v1$ConfigMapVolumeSource
  | io$k8s$api$core$v1$Container
  | io$k8s$api$core$v1$ContainerImage
  | io$k8s$api$core$v1$ContainerPort
  | io$k8s$api$core$v1$ContainerState
  | io$k8s$api$core$v1$ContainerStateRunning
  | io$k8s$api$core$v1$ContainerStateTerminated
  | io$k8s$api$core$v1$ContainerStateWaiting
  | io$k8s$api$core$v1$ContainerStatus
  | io$k8s$api$core$v1$DaemonEndpoint
  | io$k8s$api$core$v1$DownwardAPIProjection
  | io$k8s$api$core$v1$DownwardAPIVolumeFile
  | io$k8s$api$core$v1$DownwardAPIVolumeSource
  | io$k8s$api$core$v1$EmptyDirVolumeSource
  | io$k8s$api$core$v1$EndpointAddress
  | io$k8s$api$core$v1$EndpointPort
  | io$k8s$api$core$v1$EndpointSubset
  | io$k8s$api$core$v1$Endpoints
  | io$k8s$api$core$v1$EndpointsList
  | io$k8s$api$core$v1$EnvFromSource
  | io$k8s$api$core$v1$EnvVar
  | io$k8s$api$core$v1$EnvVarSource
  | io$k8s$api$core$v1$Event
  | io$k8s$api$core$v1$EventList
  | io$k8s$api$core$v1$EventSeries
  | io$k8s$api$core$v1$EventSource
  | io$k8s$api$core$v1$ExecAction
  | io$k8s$api$core$v1$FCVolumeSource
  | io$k8s$api$core$v1$FlexPersistentVolumeSource
  | io$k8s$api$core$v1$FlexVolumeSource
  | io$k8s$api$core$v1$FlockerVolumeSource
  | io$k8s$api$core$v1$GCEPersistentDiskVolumeSource
  | io$k8s$api$core$v1$GitRepoVolumeSource
  | io$k8s$api$core$v1$GlusterfsPersistentVolumeSource
  | io$k8s$api$core$v1$GlusterfsVolumeSource
  | io$k8s$api$core$v1$HTTPGetAction
  | io$k8s$api$core$v1$HTTPHeader
  | io$k8s$api$core$v1$Handler
  | io$k8s$api$core$v1$HostAlias
  | io$k8s$api$core$v1$HostPathVolumeSource
  | io$k8s$api$core$v1$ISCSIPersistentVolumeSource
  | io$k8s$api$core$v1$ISCSIVolumeSource
  | io$k8s$api$core$v1$KeyToPath
  | io$k8s$api$core$v1$Lifecycle
  | io$k8s$api$core$v1$LimitRange
  | io$k8s$api$core$v1$LimitRangeItem
  | io$k8s$api$core$v1$LimitRangeList
  | io$k8s$api$core$v1$LimitRangeSpec
  | io$k8s$api$core$v1$LoadBalancerIngress
  | io$k8s$api$core$v1$LoadBalancerStatus
  | io$k8s$api$core$v1$LocalObjectReference
  | io$k8s$api$core$v1$LocalVolumeSource
  | io$k8s$api$core$v1$NFSVolumeSource
  | io$k8s$api$core$v1$Namespace
  | io$k8s$api$core$v1$NamespaceList
  | io$k8s$api$core$v1$NamespaceSpec
  | io$k8s$api$core$v1$NamespaceStatus
  | io$k8s$api$core$v1$Node
  | io$k8s$api$core$v1$NodeAddress
  | io$k8s$api$core$v1$NodeAffinity
  | io$k8s$api$core$v1$NodeCondition
  | io$k8s$api$core$v1$NodeConfigSource
  | io$k8s$api$core$v1$NodeConfigStatus
  | io$k8s$api$core$v1$NodeDaemonEndpoints
  | io$k8s$api$core$v1$NodeList
  | io$k8s$api$core$v1$NodeSelector
  | io$k8s$api$core$v1$NodeSelectorRequirement
  | io$k8s$api$core$v1$NodeSelectorTerm
  | io$k8s$api$core$v1$NodeSpec
  | io$k8s$api$core$v1$NodeStatus
  | io$k8s$api$core$v1$NodeSystemInfo
  | io$k8s$api$core$v1$ObjectFieldSelector
  | io$k8s$api$core$v1$ObjectReference
  | io$k8s$api$core$v1$PersistentVolume
  | io$k8s$api$core$v1$PersistentVolumeClaim
  | io$k8s$api$core$v1$PersistentVolumeClaimCondition
  | io$k8s$api$core$v1$PersistentVolumeClaimList
  | io$k8s$api$core$v1$PersistentVolumeClaimSpec
  | io$k8s$api$core$v1$PersistentVolumeClaimStatus
  | io$k8s$api$core$v1$PersistentVolumeClaimVolumeSource
  | io$k8s$api$core$v1$PersistentVolumeList
  | io$k8s$api$core$v1$PersistentVolumeSpec
  | io$k8s$api$core$v1$PersistentVolumeStatus
  | io$k8s$api$core$v1$PhotonPersistentDiskVolumeSource
  | io$k8s$api$core$v1$Pod
  | io$k8s$api$core$v1$PodAffinity
  | io$k8s$api$core$v1$PodAffinityTerm
  | io$k8s$api$core$v1$PodAntiAffinity
  | io$k8s$api$core$v1$PodCondition
  | io$k8s$api$core$v1$PodDNSConfig
  | io$k8s$api$core$v1$PodDNSConfigOption
  | io$k8s$api$core$v1$PodList
  | io$k8s$api$core$v1$PodReadinessGate
  | io$k8s$api$core$v1$PodSecurityContext
  | io$k8s$api$core$v1$PodSpec
  | io$k8s$api$core$v1$PodStatus
  | io$k8s$api$core$v1$PodTemplate
  | io$k8s$api$core$v1$PodTemplateList
  | io$k8s$api$core$v1$PodTemplateSpec
  | io$k8s$api$core$v1$PortworxVolumeSource
  | io$k8s$api$core$v1$PreferredSchedulingTerm
  | io$k8s$api$core$v1$Probe
  | io$k8s$api$core$v1$ProjectedVolumeSource
  | io$k8s$api$core$v1$QuobyteVolumeSource
  | io$k8s$api$core$v1$RBDPersistentVolumeSource
  | io$k8s$api$core$v1$RBDVolumeSource
  | io$k8s$api$core$v1$ReplicationController
  | io$k8s$api$core$v1$ReplicationControllerCondition
  | io$k8s$api$core$v1$ReplicationControllerList
  | io$k8s$api$core$v1$ReplicationControllerSpec
  | io$k8s$api$core$v1$ReplicationControllerStatus
  | io$k8s$api$core$v1$ResourceFieldSelector
  | io$k8s$api$core$v1$ResourceQuota
  | io$k8s$api$core$v1$ResourceQuotaList
  | io$k8s$api$core$v1$ResourceQuotaSpec
  | io$k8s$api$core$v1$ResourceQuotaStatus
  | io$k8s$api$core$v1$ResourceRequirements
  | io$k8s$api$core$v1$SELinuxOptions
  | io$k8s$api$core$v1$ScaleIOPersistentVolumeSource
  | io$k8s$api$core$v1$ScaleIOVolumeSource
  | io$k8s$api$core$v1$ScopeSelector
  | io$k8s$api$core$v1$ScopedResourceSelectorRequirement
  | io$k8s$api$core$v1$Secret
  | io$k8s$api$core$v1$SecretEnvSource
  | io$k8s$api$core$v1$SecretKeySelector
  | io$k8s$api$core$v1$SecretList
  | io$k8s$api$core$v1$SecretProjection
  | io$k8s$api$core$v1$SecretReference
  | io$k8s$api$core$v1$SecretVolumeSource
  | io$k8s$api$core$v1$SecurityContext
  | io$k8s$api$core$v1$Service
  | io$k8s$api$core$v1$ServiceAccount
  | io$k8s$api$core$v1$ServiceAccountList
  | io$k8s$api$core$v1$ServiceAccountTokenProjection
  | io$k8s$api$core$v1$ServiceList
  | io$k8s$api$core$v1$ServicePort
  | io$k8s$api$core$v1$ServiceSpec
  | io$k8s$api$core$v1$ServiceStatus
  | io$k8s$api$core$v1$SessionAffinityConfig
  | io$k8s$api$core$v1$StorageOSPersistentVolumeSource
  | io$k8s$api$core$v1$StorageOSVolumeSource
  | io$k8s$api$core$v1$Sysctl
  | io$k8s$api$core$v1$TCPSocketAction
  | io$k8s$api$core$v1$Taint
  | io$k8s$api$core$v1$Toleration
  | io$k8s$api$core$v1$TopologySelectorLabelRequirement
  | io$k8s$api$core$v1$TopologySelectorTerm
  | io$k8s$api$core$v1$TypedLocalObjectReference
  | io$k8s$api$core$v1$Volume
  | io$k8s$api$core$v1$VolumeDevice
  | io$k8s$api$core$v1$VolumeMount
  | io$k8s$api$core$v1$VolumeNodeAffinity
  | io$k8s$api$core$v1$VolumeProjection
  | io$k8s$api$core$v1$VsphereVirtualDiskVolumeSource
  | io$k8s$api$core$v1$WeightedPodAffinityTerm
  | io$k8s$api$core$v1$WindowsSecurityContextOptions
  | io$k8s$api$events$v1beta1$Event
  | io$k8s$api$events$v1beta1$EventList
  | io$k8s$api$events$v1beta1$EventSeries
  | io$k8s$api$extensions$v1beta1$AllowedCSIDriver
  | io$k8s$api$extensions$v1beta1$AllowedFlexVolume
  | io$k8s$api$extensions$v1beta1$AllowedHostPath
  | io$k8s$api$extensions$v1beta1$DaemonSet
  | io$k8s$api$extensions$v1beta1$DaemonSetCondition
  | io$k8s$api$extensions$v1beta1$DaemonSetList
  | io$k8s$api$extensions$v1beta1$DaemonSetSpec
  | io$k8s$api$extensions$v1beta1$DaemonSetStatus
  | io$k8s$api$extensions$v1beta1$DaemonSetUpdateStrategy
  | io$k8s$api$extensions$v1beta1$Deployment
  | io$k8s$api$extensions$v1beta1$DeploymentCondition
  | io$k8s$api$extensions$v1beta1$DeploymentList
  | io$k8s$api$extensions$v1beta1$DeploymentRollback
  | io$k8s$api$extensions$v1beta1$DeploymentSpec
  | io$k8s$api$extensions$v1beta1$DeploymentStatus
  | io$k8s$api$extensions$v1beta1$DeploymentStrategy
  | io$k8s$api$extensions$v1beta1$FSGroupStrategyOptions
  | io$k8s$api$extensions$v1beta1$HTTPIngressPath
  | io$k8s$api$extensions$v1beta1$HTTPIngressRuleValue
  | io$k8s$api$extensions$v1beta1$HostPortRange
  | io$k8s$api$extensions$v1beta1$IDRange
  | io$k8s$api$extensions$v1beta1$IPBlock
  | io$k8s$api$extensions$v1beta1$Ingress
  | io$k8s$api$extensions$v1beta1$IngressBackend
  | io$k8s$api$extensions$v1beta1$IngressList
  | io$k8s$api$extensions$v1beta1$IngressRule
  | io$k8s$api$extensions$v1beta1$IngressSpec
  | io$k8s$api$extensions$v1beta1$IngressStatus
  | io$k8s$api$extensions$v1beta1$IngressTLS
  | io$k8s$api$extensions$v1beta1$NetworkPolicy
  | io$k8s$api$extensions$v1beta1$NetworkPolicyEgressRule
  | io$k8s$api$extensions$v1beta1$NetworkPolicyIngressRule
  | io$k8s$api$extensions$v1beta1$NetworkPolicyList
  | io$k8s$api$extensions$v1beta1$NetworkPolicyPeer
  | io$k8s$api$extensions$v1beta1$NetworkPolicyPort
  | io$k8s$api$extensions$v1beta1$NetworkPolicySpec
  | io$k8s$api$extensions$v1beta1$PodSecurityPolicy
  | io$k8s$api$extensions$v1beta1$PodSecurityPolicyList
  | io$k8s$api$extensions$v1beta1$PodSecurityPolicySpec
  | io$k8s$api$extensions$v1beta1$ReplicaSet
  | io$k8s$api$extensions$v1beta1$ReplicaSetCondition
  | io$k8s$api$extensions$v1beta1$ReplicaSetList
  | io$k8s$api$extensions$v1beta1$ReplicaSetSpec
  | io$k8s$api$extensions$v1beta1$ReplicaSetStatus
  | io$k8s$api$extensions$v1beta1$RollbackConfig
  | io$k8s$api$extensions$v1beta1$RollingUpdateDaemonSet
  | io$k8s$api$extensions$v1beta1$RollingUpdateDeployment
  | io$k8s$api$extensions$v1beta1$RunAsGroupStrategyOptions
  | io$k8s$api$extensions$v1beta1$RunAsUserStrategyOptions
  | io$k8s$api$extensions$v1beta1$RuntimeClassStrategyOptions
  | io$k8s$api$extensions$v1beta1$SELinuxStrategyOptions
  | io$k8s$api$extensions$v1beta1$Scale
  | io$k8s$api$extensions$v1beta1$ScaleSpec
  | io$k8s$api$extensions$v1beta1$ScaleStatus
  | io$k8s$api$extensions$v1beta1$SupplementalGroupsStrategyOptions
  | io$k8s$api$networking$v1$IPBlock
  | io$k8s$api$networking$v1$NetworkPolicy
  | io$k8s$api$networking$v1$NetworkPolicyEgressRule
  | io$k8s$api$networking$v1$NetworkPolicyIngressRule
  | io$k8s$api$networking$v1$NetworkPolicyList
  | io$k8s$api$networking$v1$NetworkPolicyPeer
  | io$k8s$api$networking$v1$NetworkPolicyPort
  | io$k8s$api$networking$v1$NetworkPolicySpec
  | io$k8s$api$networking$v1beta1$HTTPIngressPath
  | io$k8s$api$networking$v1beta1$HTTPIngressRuleValue
  | io$k8s$api$networking$v1beta1$Ingress
  | io$k8s$api$networking$v1beta1$IngressBackend
  | io$k8s$api$networking$v1beta1$IngressList
  | io$k8s$api$networking$v1beta1$IngressRule
  | io$k8s$api$networking$v1beta1$IngressSpec
  | io$k8s$api$networking$v1beta1$IngressStatus
  | io$k8s$api$networking$v1beta1$IngressTLS
  | io$k8s$api$node$v1beta1$RuntimeClass
  | io$k8s$api$node$v1beta1$RuntimeClassList
  | io$k8s$api$policy$v1beta1$AllowedCSIDriver
  | io$k8s$api$policy$v1beta1$AllowedFlexVolume
  | io$k8s$api$policy$v1beta1$AllowedHostPath
  | io$k8s$api$policy$v1beta1$Eviction
  | io$k8s$api$policy$v1beta1$FSGroupStrategyOptions
  | io$k8s$api$policy$v1beta1$HostPortRange
  | io$k8s$api$policy$v1beta1$IDRange
  | io$k8s$api$policy$v1beta1$PodDisruptionBudget
  | io$k8s$api$policy$v1beta1$PodDisruptionBudgetList
  | io$k8s$api$policy$v1beta1$PodDisruptionBudgetSpec
  | io$k8s$api$policy$v1beta1$PodDisruptionBudgetStatus
  | io$k8s$api$policy$v1beta1$PodSecurityPolicy
  | io$k8s$api$policy$v1beta1$PodSecurityPolicyList
  | io$k8s$api$policy$v1beta1$PodSecurityPolicySpec
  | io$k8s$api$policy$v1beta1$RunAsGroupStrategyOptions
  | io$k8s$api$policy$v1beta1$RunAsUserStrategyOptions
  | io$k8s$api$policy$v1beta1$RuntimeClassStrategyOptions
  | io$k8s$api$policy$v1beta1$SELinuxStrategyOptions
  | io$k8s$api$policy$v1beta1$SupplementalGroupsStrategyOptions
  | io$k8s$api$rbac$v1$AggregationRule
  | io$k8s$api$rbac$v1$ClusterRole
  | io$k8s$api$rbac$v1$ClusterRoleBinding
  | io$k8s$api$rbac$v1$ClusterRoleBindingList
  | io$k8s$api$rbac$v1$ClusterRoleList
  | io$k8s$api$rbac$v1$PolicyRule
  | io$k8s$api$rbac$v1$Role
  | io$k8s$api$rbac$v1$RoleBinding
  | io$k8s$api$rbac$v1$RoleBindingList
  | io$k8s$api$rbac$v1$RoleList
  | io$k8s$api$rbac$v1$RoleRef
  | io$k8s$api$rbac$v1$Subject
  | io$k8s$api$rbac$v1beta1$AggregationRule
  | io$k8s$api$rbac$v1beta1$ClusterRole
  | io$k8s$api$rbac$v1beta1$ClusterRoleBinding
  | io$k8s$api$rbac$v1beta1$ClusterRoleBindingList
  | io$k8s$api$rbac$v1beta1$ClusterRoleList
  | io$k8s$api$rbac$v1beta1$PolicyRule
  | io$k8s$api$rbac$v1beta1$Role
  | io$k8s$api$rbac$v1beta1$RoleBinding
  | io$k8s$api$rbac$v1beta1$RoleBindingList
  | io$k8s$api$rbac$v1beta1$RoleList
  | io$k8s$api$rbac$v1beta1$RoleRef
  | io$k8s$api$rbac$v1beta1$Subject
  | io$k8s$api$scheduling$v1$PriorityClass
  | io$k8s$api$scheduling$v1$PriorityClassList
  | io$k8s$api$scheduling$v1beta1$PriorityClass
  | io$k8s$api$scheduling$v1beta1$PriorityClassList
  | io$k8s$api$storage$v1$StorageClass
  | io$k8s$api$storage$v1$StorageClassList
  | io$k8s$api$storage$v1$VolumeAttachment
  | io$k8s$api$storage$v1$VolumeAttachmentList
  | io$k8s$api$storage$v1$VolumeAttachmentSource
  | io$k8s$api$storage$v1$VolumeAttachmentSpec
  | io$k8s$api$storage$v1$VolumeAttachmentStatus
  | io$k8s$api$storage$v1$VolumeError
  | io$k8s$api$storage$v1beta1$CSIDriver
  | io$k8s$api$storage$v1beta1$CSIDriverList
  | io$k8s$api$storage$v1beta1$CSIDriverSpec
  | io$k8s$api$storage$v1beta1$CSINode
  | io$k8s$api$storage$v1beta1$CSINodeDriver
  | io$k8s$api$storage$v1beta1$CSINodeList
  | io$k8s$api$storage$v1beta1$CSINodeSpec
  | io$k8s$api$storage$v1beta1$StorageClass
  | io$k8s$api$storage$v1beta1$StorageClassList
  | io$k8s$api$storage$v1beta1$VolumeAttachment
  | io$k8s$api$storage$v1beta1$VolumeAttachmentList
  | io$k8s$api$storage$v1beta1$VolumeAttachmentSource
  | io$k8s$api$storage$v1beta1$VolumeAttachmentSpec
  | io$k8s$api$storage$v1beta1$VolumeAttachmentStatus
  | io$k8s$api$storage$v1beta1$VolumeError
  | io$k8s$apiextensions_apiserver$pkg$apis$apiextensions$v1beta1$CustomResourceColumnDefinition
  | io$k8s$apiextensions_apiserver$pkg$apis$apiextensions$v1beta1$CustomResourceConversion
  | io$k8s$apiextensions_apiserver$pkg$apis$apiextensions$v1beta1$CustomResourceDefinition
  | io$k8s$apiextensions_apiserver$pkg$apis$apiextensions$v1beta1$CustomResourceDefinitionCondition
  | io$k8s$apiextensions_apiserver$pkg$apis$apiextensions$v1beta1$CustomResourceDefinitionList
  | io$k8s$apiextensions_apiserver$pkg$apis$apiextensions$v1beta1$CustomResourceDefinitionNames
  | io$k8s$apiextensions_apiserver$pkg$apis$apiextensions$v1beta1$CustomResourceDefinitionSpec
  | io$k8s$apiextensions_apiserver$pkg$apis$apiextensions$v1beta1$CustomResourceDefinitionStatus
  | io$k8s$apiextensions_apiserver$pkg$apis$apiextensions$v1beta1$CustomResourceDefinitionVersion
  | io$k8s$apiextensions_apiserver$pkg$apis$apiextensions$v1beta1$CustomResourceSubresourceScale
  | io$k8s$apiextensions_apiserver$pkg$apis$apiextensions$v1beta1$CustomResourceSubresourceStatus
  | io$k8s$apiextensions_apiserver$pkg$apis$apiextensions$v1beta1$CustomResourceSubresources
  | io$k8s$apiextensions_apiserver$pkg$apis$apiextensions$v1beta1$CustomResourceValidation
  | io$k8s$apiextensions_apiserver$pkg$apis$apiextensions$v1beta1$ExternalDocumentation
  | io$k8s$apiextensions_apiserver$pkg$apis$apiextensions$v1beta1$JSON
  | io$k8s$apiextensions_apiserver$pkg$apis$apiextensions$v1beta1$JSONSchemaProps
  | io$k8s$apiextensions_apiserver$pkg$apis$apiextensions$v1beta1$JSONSchemaPropsOrArray
  | io$k8s$apiextensions_apiserver$pkg$apis$apiextensions$v1beta1$JSONSchemaPropsOrBool
  | io$k8s$apiextensions_apiserver$pkg$apis$apiextensions$v1beta1$JSONSchemaPropsOrStringArray
  | io$k8s$apiextensions_apiserver$pkg$apis$apiextensions$v1beta1$ServiceReference
  | io$k8s$apiextensions_apiserver$pkg$apis$apiextensions$v1beta1$WebhookClientConfig
  | io$k8s$apimachinery$pkg$api$resource$Quantity
  | io$k8s$apimachinery$pkg$apis$meta$v1$APIGroup
  | io$k8s$apimachinery$pkg$apis$meta$v1$APIGroupList
  | io$k8s$apimachinery$pkg$apis$meta$v1$APIGroup_v2
  | io$k8s$apimachinery$pkg$apis$meta$v1$APIResource
  | io$k8s$apimachinery$pkg$apis$meta$v1$APIResourceList
  | io$k8s$apimachinery$pkg$apis$meta$v1$APIResourceList_v2
  | io$k8s$apimachinery$pkg$apis$meta$v1$APIResource_v2
  | io$k8s$apimachinery$pkg$apis$meta$v1$APIVersions
  | io$k8s$apimachinery$pkg$apis$meta$v1$DeleteOptions
  | io$k8s$apimachinery$pkg$apis$meta$v1$DeleteOptions_v2
  | io$k8s$apimachinery$pkg$apis$meta$v1$Fields
  | io$k8s$apimachinery$pkg$apis$meta$v1$GroupVersionForDiscovery
  | io$k8s$apimachinery$pkg$apis$meta$v1$GroupVersionForDiscovery_v2
  | io$k8s$apimachinery$pkg$apis$meta$v1$Initializer
  | io$k8s$apimachinery$pkg$apis$meta$v1$Initializer_v2
  | io$k8s$apimachinery$pkg$apis$meta$v1$Initializers
  | io$k8s$apimachinery$pkg$apis$meta$v1$Initializers_v2
  | io$k8s$apimachinery$pkg$apis$meta$v1$LabelSelector
  | io$k8s$apimachinery$pkg$apis$meta$v1$LabelSelectorRequirement
  | io$k8s$apimachinery$pkg$apis$meta$v1$ListMeta
  | io$k8s$apimachinery$pkg$apis$meta$v1$ListMeta_v2
  | io$k8s$apimachinery$pkg$apis$meta$v1$ManagedFieldsEntry
  | io$k8s$apimachinery$pkg$apis$meta$v1$MicroTime
  | io$k8s$apimachinery$pkg$apis$meta$v1$ObjectMeta
  | io$k8s$apimachinery$pkg$apis$meta$v1$ObjectMeta_v2
  | io$k8s$apimachinery$pkg$apis$meta$v1$OwnerReference
  | io$k8s$apimachinery$pkg$apis$meta$v1$OwnerReference_v2
  | io$k8s$apimachinery$pkg$apis$meta$v1$Patch
  | io$k8s$apimachinery$pkg$apis$meta$v1$Patch_v2
  | io$k8s$apimachinery$pkg$apis$meta$v1$Preconditions
  | io$k8s$apimachinery$pkg$apis$meta$v1$Preconditions_v2
  | io$k8s$apimachinery$pkg$apis$meta$v1$ServerAddressByClientCIDR
  | io$k8s$apimachinery$pkg$apis$meta$v1$ServerAddressByClientCIDR_v2
  | io$k8s$apimachinery$pkg$apis$meta$v1$Status
  | io$k8s$apimachinery$pkg$apis$meta$v1$StatusCause
  | io$k8s$apimachinery$pkg$apis$meta$v1$StatusCause_v2
  | io$k8s$apimachinery$pkg$apis$meta$v1$StatusDetails
  | io$k8s$apimachinery$pkg$apis$meta$v1$StatusDetails_v2
  | io$k8s$apimachinery$pkg$apis$meta$v1$Status_v2
  | io$k8s$apimachinery$pkg$apis$meta$v1$Time
  | io$k8s$apimachinery$pkg$apis$meta$v1$WatchEvent
  | io$k8s$apimachinery$pkg$apis$meta$v1$WatchEvent_v2
  | io$k8s$apimachinery$pkg$runtime$RawExtension
  | io$k8s$apimachinery$pkg$runtime$RawExtension_v2
  | io$k8s$apimachinery$pkg$util$intstr$IntOrString
  | io$k8s$apimachinery$pkg$version$Info
  | io$k8s$kube_aggregator$pkg$apis$apiregistration$v1$APIService
  | io$k8s$kube_aggregator$pkg$apis$apiregistration$v1$APIServiceCondition
  | io$k8s$kube_aggregator$pkg$apis$apiregistration$v1$APIServiceList
  | io$k8s$kube_aggregator$pkg$apis$apiregistration$v1$APIServiceSpec
  | io$k8s$kube_aggregator$pkg$apis$apiregistration$v1$APIServiceStatus
  | io$k8s$kube_aggregator$pkg$apis$apiregistration$v1$ServiceReference
  | io$k8s$kube_aggregator$pkg$apis$apiregistration$v1beta1$APIService
  | io$k8s$kube_aggregator$pkg$apis$apiregistration$v1beta1$APIServiceCondition
  | io$k8s$kube_aggregator$pkg$apis$apiregistration$v1beta1$APIServiceList
  | io$k8s$kube_aggregator$pkg$apis$apiregistration$v1beta1$APIServiceSpec
  | io$k8s$kube_aggregator$pkg$apis$apiregistration$v1beta1$APIServiceStatus
  | io$k8s$kube_aggregator$pkg$apis$apiregistration$v1beta1$ServiceReference;
