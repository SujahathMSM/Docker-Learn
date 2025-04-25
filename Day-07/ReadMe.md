# Docker Learning Summary - April 24, 2025

## 🐳 Overview
This document summarizes key Docker concepts and skills learned on April 24, 2025. The focus was on deepening Docker knowledge for building backend apps using Python (FastAPI) and Node.js (Express) with PostgreSQL, especially for a Battery Management System (BMS) project.

---

## 🔧 Dockerfile Instructions

### RUN
- **When**: During image build
- **Purpose**: Install packages, configure image
- **Example**:
  ```dockerfile
  RUN apt update && apt install -y curl
  ```

### CMD
- **When**: At container startup
- **Purpose**: Define default command (can be overridden)
- **Example**:
  ```dockerfile
  CMD ["node", "server.js"]
  ```

### ENTRYPOINT
- **When**: At container startup
- **Purpose**: Set fixed executable that is hard to override
- **Example**:
  ```dockerfile
  ENTRYPOINT ["python"]
  CMD ["main.py"]  # results in python main.py
  ```

---

## 🧩 Docker Compose Concepts

### depends_on
- Sets **startup order** of services
- Doesn’t wait for service to be **ready**, just started

### build
- Defines how to build an image from a Dockerfile
- Example:
  ```yaml
  build:
    context: ./api
    dockerfile: Dockerfile.dev
  ```

### volumes
- Used for **persistence** and **live development**
- **Named Volume** (good for data like DB):
  ```yaml
  volumes:
    - pgdata:/var/lib/postgresql/data
  ```
- **Bind Mount** (great for dev hot-reload):
  ```yaml
  volumes:
    - ./src:/app/src
  ```

### networks
- Used for service-to-service communication
- Services in the same custom or default network can communicate via service name

---

## 🧠 Database Concepts

### Databases
- Top-level container of schemas, tables, users, and extensions.

### Schemas
- Namespace within a database.
- Helps organize tables and avoid naming conflicts.

### Tables
- Actual data structures with rows and columns inside schemas.

---

## 🧪 PostgreSQL + Docker

### Connecting FastAPI to PostgreSQL
- ORM: **SQLAlchemy**
- Used environment variables from `.env` file to create connection string.
- Created table `battery_data` with columns: `id`, `voltage`, `temperature`

### Connecting Express to PostgreSQL
- ORM: **Sequelize**
- Used `.env` file with Sequelize config.
- Exposed REST API to POST and GET battery data.

---

## 🧰 Useful Docker Commands

```bash
# Run docker-compose
docker-compose up -d

# Access PostgreSQL in a running container
docker exec -it ptv_db psql -U admin -d ptv

# List Docker containers
docker ps -a

# Build an image
docker build -t yourname/app .
```

---

## 🧭 What's Next?
- Visualization of BMS data (with frontend or dashboards)
- Deploy containers to Raspberry Pi 5 (ARM64)
- Learn about Docker security, BuildKit, and image optimization
- Explore reverse proxies and orchestration (Swarm/Kubernetes)

