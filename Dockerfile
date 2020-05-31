FROM hayd/alpine-deno:1.0.2

WORKDIR /app

USER deno

COPY . .
RUN deno cache app.ts

CMD ["run",  "--allow-net", "--allow-write", "--allow-read", "--allow-plugin", "--unstable", "app.ts"]