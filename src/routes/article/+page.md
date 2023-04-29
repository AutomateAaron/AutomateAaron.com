---
title: 'Docker in Docker in Docker in...'
date: '2021-10-26'
image: ./title-picture.jpg
imageAlt: 'Turtles, all the way down!'
categories:
  - 'docker'
excerpt: 'Ever wonder what happens when you run Docker inside of Docker?  In this blog we explore that rabbit hole.'
---

## Intro

Hello. So, you need to run Docker inside Docker for your CI server, or some other legitimate reason? Sorry, this isn't the blog for you. (If that is legitimately what you're looking for, might I suggest [this blog](https://jpetazzo.github.io/2015/09/03/do-not-use-docker-in-docker-for-ci/)?)

## Goal

I want to know if it's possible to recursively run Docker-in-Docker. And I'm not talking running sibling containers via mounting the `/var/run/docker.sock` or anything sane. I want proper containers inside containers inside containers. Success for me is if I can run a command that indefinitely spins up child container until my computer breaks.

## Part 1: Proving the concept

So, first things first, let's mosey on over [the official docker-in-docker image on the docker hub](https://hub.docker.com/_/docker). Feel free to ignore the bothersome

> Docker inside Docker is generally not recommended

And let's give it a whirl with

```bash
docker run -it --privileged docker:dind
```

Amazingly, on the first try, after it does it's thing we actually get a running docker daemon:

```
INFO[2021-10-22T15:41:30.526668700Z] Default bridge (docker0) is assigned with an IP address 172.18.0.0/16. Daemon option --bip can be used to set a preferred IP address
INFO[2021-10-22T15:41:30.567729100Z] Loading containers: done.
INFO[2021-10-22T15:41:30.584627900Z] Docker daemon                                 commit=79ea9d3 graphdriver(s)=overlay2 version=20.10.9
INFO[2021-10-22T15:41:30.584825900Z] Daemon has completed initialization
INFO[2021-10-22T15:41:30.648761900Z] API listen on /var/run/docker.sock
INFO[2021-10-22T15:41:30.653327200Z] API listen on [::]:2376
```

Now, lets verify that this is a functional docker instance _and_ is not running sibling containers

### Functional docker instance

In a new shell, a quick:

```bash
docker exec -it strange_kalam /bin/sh
```

And a:

```docker
/ # docker run -it ubuntu bash
Unable to find image 'ubuntu:latest' locally
latest: Pulling from library/ubuntu
7b1a6ab2e44d: Pull complete
Digest: sha256:626ffe58f6e7566e00254b638eb7e0f3b11d4da9675088f4781a50ae288f3322
Status: Downloaded newer image for ubuntu:latest
root@4b8dc3537c11:/#
```

Shows me that it's working properly!

### Verify it's not running a sibling container

With the `ubuntu` image still running from above, we can open yet another new shell and just double check that that container isn't running on the hosts docker instance:

```bash
❯ docker ps
CONTAINER ID   IMAGE         COMMAND                  CREATED         STATUS         PORTS           NAMES
d509c72b66d2   docker:dind   "dockerd-entrypoint.…"   6 minutes ago   Up 6 minutes   2375-2376/tcp   strange_kalam
```

No other container are running on the host beyond that `docker:dind`. Wonderful! Now we're cooking with gas.

## Part 2: It's all about execution

So, what I'd like is a _single_ docker run command which starts off this insanity. To do this, I'm going to create _my own_ image based on the `docker:dind` one which only adds one tiny-winy change: Recursion.

Let's start look at the existing [`docker:dind` Dockerfile](https://github.com/docker-library/docker/blob/8baa881aab85f8398d2edbbcc0da4bd1f556dd98/20.10/dind/Dockerfile), all I really care about is the bit at the end since I'll need to wrap the existing entrypoint:

```Dockerfile
ENTRYPOINT ["dockerd-entrypoint.sh"]
```

With this knowledge, I can write a quick little `Dockerfile` + `entrypoint-wrapper.sh`:

```Dockerfile
FROM docker:dind

# Because I'm not brave enough to write vanilla /bin/sh
RUN apk add bash

# Copy in entrypoint-wrapper.sh
COPY entrypoint-wrapper.sh /usr/local/bin/

ENTRYPOINT [ "entrypoint-wrapper.sh" ]
```

&

```bash
#!/bin/bash

# turn on bash's job control
set -m

# Start the dockerd daemon and put it in the background
dockerd-entrypoint.sh &

# Wait until the daemon comes up
while ! docker ps
do
  echo "Waiting for docker daemon..."
  sleep 2
done

# Run this image again inside the container
docker run --privileged aaronnbrock/docker-in-docker-in-docker
```

([github repo](https://github.com/AaronNBrock/docker-in-docker-in-docker))

Build and [push it to the docker hub](https://hub.docker.com/r/aaronnbrock/docker-in-docker-in-docker)

And... **does it work?** Well, only one way for _you_ to find out, give this command a try:

```bash
docker run --privileged aaronnbrock/docker-in-docker-in-docker
```

# Conclusion

So, what did we learn today? Well, I don't know, I'll leave that one up to you...
