# 📦 Day 2: Docker CLI & Images

Today we explored Docker CLI commands and got hands-on with running and managing containers. We also took a deep dive into Redis.

---

## 🧠 Docker Image vs Container (Simplified)

- **Docker Image** = A blueprint or recipe (not running)
- **Docker Container** = A running instance of an image (like cooking from a recipe)

| Concept        | Image                     | Container                        |
|----------------|----------------------------|----------------------------------|
| What it is     | App + environment snapshot | Live, running environment        |
| Created by     | `Dockerfile`               | `docker run` from an image       |
| Role           | Defines app + dependencies | Executes and runs your app       |

---

## 🛠️ Key Docker CLI Commands

| Command | Description |
|---------|-------------|
| `docker run` | Run a container from an image |
| `docker ps` | List running containers |
| `docker ps -a` | List all containers |
| `docker exec` | Run a command inside a container |
| `docker logs` | View container logs |
| `docker stop` | Stop a running container |
| `docker rm` | Remove a stopped container |
| `docker rmi` | Remove an image |

---

## 🚀 Hands-On: Nginx Example

```bash
docker run -d -p 8080:80 --name mynginx nginx
```

### Breakdown:
- `-d` → Detached mode
- `-p 8080:80` → Host port 8080 maps to container port 80
- `--name mynginx` → Container name is mynginx
- `nginx` → Image pulled from Docker Hub

Open browser: [http://localhost:8080](http://localhost:8080)

---

## 🔧 Install Python Inside mynginx

```bash
docker exec -it mynginx bash
apt update
apt install python3 -y
python3 --version
```

> If `bash` doesn’t work, try `sh`. If `apt` fails, try `apk` (Alpine-based).

---

## 🧠 Redis: What I Learned

Redis is a super-fast in-memory key-value store used for caching, messaging, and real-time analytics.

### Key Redis Commands:
```redis
SET user "sujahath"
GET user
DEL user
```

### Run Redis in Docker:
```bash
docker run -d --name myredis redis
docker exec -it myredis redis-cli
```

### Real Use Cases:
- Caching responses
- Session storage
- Task queues
- Leaderboards (using Sorted Sets)

---

## ✅ Coming Up:
We'll build a Node.js + Redis app using Docker Compose to see how services talk to each other inside containers.
