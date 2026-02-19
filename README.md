# Zen Class Programme Database – MongoDB

## Overview

This project contains MongoDB collections and queries for managing Zen Class Programme.

Collections:

- users
- codekata
- attendance
- topics
- tasks
- company_drives
- mentors

## Files

01_create_collections.js  
02_insert_sample_data.js  
03_queries.js  

## Queries Included

- Topics and tasks taught in October
- Company drives between dates
- Company drives and students appeared
- Problems solved by users
- Mentors with more than 15 mentees
- Users absent and task not submitted

## Author

Thiru  
B.Tech IT
**Project Overview**

- **Purpose**: MongoDB task demonstrating collection creation, sample data insertion, and query examples.

**Files**

- **_create_collections.js**: Creates the required collections and applies basic indexes.
- **_insert_sample_data.js**: Inserts sample documents into the collections for testing.
- **_queries.js**: Contains example queries and aggregation pipelines used to answer task questions.

**Prerequisites**

- **Node.js**: v14+ recommended.
- **MongoDB**: A running MongoDB instance (local or remote).

**Setup**

1. Ensure MongoDB is running and reachable.
2. From the project directory, run the scripts using Node.js.

**How to Run**

Run collection creation:

```bash
node _create_collections.js
```

Run sample data insertion:

```bash
node _insert_sample_data.js
```

Run the query examples:

```bash
node _queries.js
```

**Configuration**

- The scripts read connection settings from environment variables or a local configuration object. Set `MONGODB_URI` to point to your MongoDB instance when needed.

**Data Model**

- Collections and example document shapes are defined in `_create_collections.js` and populated by `_insert_sample_data.js`.

**Typical Queries**

- `_queries.js` demonstrates find queries, aggregations, sorts, filters, and projections useful for the task. Use it as a reference to adapt queries to your dataset.

**Expected Results**

- After running `_create_collections.js` and `_insert_sample_data.js`, the database will contain the sample collections and documents used by `_queries.js` to produce demonstrative outputs.

**Troubleshooting**

- Verify `MONGODB_URI` and MongoDB server availability.
- Confirm Node.js version compatibility.

**References**

- See `_create_collections.js` for schema details.
- See `_insert_sample_data.js` for sample documents.
- See `_queries.js` for query patterns.
