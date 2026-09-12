// Load the config natively: avoids a second esbuild config-bundling process.
import { build, createServer, preview } from "vite";
import { parseArgs } from "node:util";
import config from "../vite.config.mjs";

const { values, positionals } = parseArgs({
  allowPositionals: true,
  options: {
    host: { type: "string" },
    port: { type: "string" },
    strictPort: { type: "boolean" },
  },
});
const command = positionals[0] ?? "dev";
const connection = {
  ...(values.host ? { host: values.host } : {}),
  ...(values.port ? { port: Number(values.port) } : {}),
  ...(values.strictPort ? { strictPort: true } : {}),
};
if (
  values.port &&
  (!Number.isInteger(connection.port) ||
    connection.port < 1 ||
    connection.port > 65535)
) {
  throw new Error("Port must be an integer between 1 and 65535.");
}
const options = { ...config, configFile: false };
if (command === "build") {
  await build(options);
} else if (command === "preview") {
  const server = await preview({ ...options, preview: connection });
  server.printUrls();
} else if (command === "dev") {
  const server = await createServer({ ...options, server: connection });
  await server.listen();
  server.printUrls();
} else {
  throw new Error(`Unknown command: ${command}`);
}
