# Data Lake Directory

This folder contains the **data pipeline and analytics layer** for the Job Platform.  
It is organized to capture raw events, transform them into a processed format, and maintain a metadata catalog for consistent schema management.

---

## **Folder Structure**

### 1. `raw/` – Raw Event Captures

This folder stores the **original events** emitted by microservices before any processing.  
Raw events are useful for:

- Auditing and traceability
- Reprocessing if processing logic changes
- Debugging and identifying inconsistencies

**Files:**

- `user.raw.json` – Raw events from the User service
- `job.raw.json` – Raw events from the Job service
- `application.raw.json` – Raw events from the Application service

---

### 2. `processed/` – Cleaned / Transformed Events

This folder contains **validated, enriched, and normalized versions** of raw events.  
Processed events are ready for consumption by downstream services, analytics pipelines, or dashboards.

**Files:**

- `user.processed.json` – Cleaned and enriched user events
- `job.processed.json` – Cleaned and enriched job events
- `application.processed.json` – Cleaned and enriched application events

**Key Notes:**

- Fields are standardized (timestamps, naming conventions, boolean flags, etc.)
- Optional enrichments (e.g., tags, AI scoring) can be added here

---

### 3. `catalog/` – Metadata Catalog

The metadata catalog defines **schemas for each type of event**. It acts as a contract that services can reference for validation and consistency.

**Files:**

- `user.meta.json` – Schema metadata for User events
- `job.meta.json` – Schema metadata for Job events
- `application.meta.json` – Schema metadata for Application events

**Benefits:**

- Ensures all services interpret event structures consistently
- Helps automated validation pipelines

---

## **Workflow Overview**

1. **Services emit raw events** → stored in `raw/`.
2. **Processing pipelines** clean, normalize, and enrich events → stored in `processed/`.
3. **Metadata catalog (`catalog/`)** is used to validate and enforce consistent schemas.
4. **Downstream consumers** (analytics, dashboards, other services) read processed events.

---

## **Best Practices**

- Never modify files in `raw/`. Treat them as immutable logs.
- Always validate processed events against `catalog/` schemas.
- Use `processed/` events for analytics, dashboards, or cross-service consumption.
- Update `catalog/` whenever the schema changes, but maintain backward compatibility.

---

This structure ensures a **robust, auditable, and consistent event-driven pipeline** for the Job Platform.
