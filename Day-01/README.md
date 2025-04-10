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

---

## 🧼 Cleanup

```bash
docker ps -a
docker rm <container_id>
```

---

Happy Dockering - Day -01 - DONE!
