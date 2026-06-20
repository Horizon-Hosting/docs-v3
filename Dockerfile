FROM oven/bun:1 AS build
WORKDIR /app
COPY . .
RUN bun install --frozen-lockfile
RUN bun run build

FROM oven/bun:1-slim AS runtime
WORKDIR /app
COPY --from=build /app/.output ./.output
COPY --from=build /app/node_modules ./.output/server/node_modules
EXPOSE 3000
CMD ["bun", ".output/server/index.mjs"]
