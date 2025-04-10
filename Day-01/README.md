# 🐳 Day 1: Docker Introduction

Welcome to Day 1! Today you’ll install Docker and run your first containers.

---

## 🧠 Theory

### What is Docker?
Docker is a tool that helps you package and run applications in isolated environments called **containers**. It's lightweight and consistent across different machines.

### Containers vs VMs

| Feature             | Containers      | Virtual Machines  |
|---------------------|------------------|-------------------|
| Startup Time        | Seconds          | Minutes           |
| Resource Usage      | Low              | High              |
| OS                  | Shared kernel    | Full OS per VM    |
| Portability         | Very High        | Moderate          |

---

## 🛠️ Hands-On

### 1. Install Docker Desktop
- Go to https://www.docker.com/products/docker-desktop
- Download and install for your OS
- Verify with:
```bash
docker --version
```

### 2. Run Hello World container
```bash
docker run hello-world
```
✅ You should see a success message.

### 3. Run Ubuntu interactively
```bash
docker run -it ubuntu bash
```
Try these inside the container:
```bash
ls
cat /etc/os-release
exit
```

---

## 🧩 Challenge

Inside the Ubuntu container:
- Update package list: `apt update`
- Install curl: `apt install curl`
- Use curl to fetch GitHub API: `curl https://api.github.com`

curl is a powerful tool used to make network requests from the command line. It's especially useful in Docker development for:

🧪 Testing API endpoints (e.g., curl http://localhost:5000/api)

🧰 Debugging container networking (try pinging other services)

📦 Downloading assets during image builds (e.g., RUN curl -LO <url> in Dockerfiles)

🤖 Automating HTTP tasks in CI/CD (e.g., POSTing build status)

```
curl https://api.github.com   # Simple GET request
curl -I https://example.com   # Fetch headers only
curl -X POST -d "name=test" https://httpbin.org/post    # Simulate POST
```

---

## 🧼 Cleanup

```bash
docker ps -a
docker rm <container_id>
```

---

Happy Dockering - Day -01 - DONE!
