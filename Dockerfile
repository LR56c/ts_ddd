FROM oven/bun AS build


COPY . .
RUN bun install


ENV NODE_ENV=production

CMD ["bun", "./api/src/index.ts"]

EXPOSE 3000
