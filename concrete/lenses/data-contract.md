# Data Contract Lens

Use this lens for APIs, schemas, events, integrations, imports, exports, sync jobs, webhooks, and data pipelines.

Find missing decisions in:

- Source of truth and ownership of each field
- Required, optional, nullable, derived, deprecated, and unknown fields
- Validation, normalization, idempotency, and duplicate handling
- Schema versioning, backwards compatibility, and migration
- Event ordering, replay, retries, dedupe keys, and clock skew
- Pagination, filtering, sorting, limits, rate limits, and partial results
- Permissions, PII, retention, deletion, audit, and data residency
- Failure behavior when upstream/downstream systems are slow, stale, or unavailable

Good questions:

- What is the source of truth when two systems disagree?
- Which fields are required, nullable, derived, or safe to ignore?
- How should the system handle duplicate, late, replayed, or out-of-order events?
