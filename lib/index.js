#!/usr/bin/env node
const path = require("path");
const fs = require("fs");
const { execSync } = require("child_process");
const findWorkspaceRoot = require("find-yarn-workspace-root");

const currentDir = process.cwd();
const workspaceRoot = findWorkspaceRoot();

console.log("");

const moduleDirPrefix = workspaceRoot || currentDir;
const moduleDir = path.resolve(moduleDirPrefix, "node_modules", "react-native");

if (!fs.existsSync(moduleDir)) {
  console.error(
    "❌  React Native does not seem to be installed, please install it and try again.\n"
  );
  process.exit(1);
}

const input = path.join(__dirname, "rn-renderer");
const patchDir = "Libraries/Renderer";
const dest = path.resolve(moduleDir, patchDir);

try {
  console.log(`ℹ️  Patching ${dest}.`);
  execSync(`cp -R "${__dirname}/rn-renderer/*" "${dest}"`, { stdio: "inherit" });
  console.log("✅  Patch successful.\n");
} catch (error) {
  console.log(`❌  Error: ${error.message}`);
  process.exit(1);
}
