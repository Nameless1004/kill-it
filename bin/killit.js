#!/usr/bin/env node

const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");

const SKILLS = [
  "kill-it",
  "assumption-killer",
  "risk-killer",
  "bullshit-killer",
  "hidden-cost-killer",
  "scope-creep-killer",
  "trust-gap-killer",
  "ux-friction-killer",
  "deck-killer",
];

const TARGETS = {
  codex: path.join(os.homedir(), ".codex", "skills"),
  claude: path.join(os.homedir(), ".claude", "skills"),
};

const repoRoot = path.resolve(__dirname, "..");

function usage() {
  console.log(`killit

Usage:
  killit init --codex
  killit init --claude
  killit init --codex --claude
  killit remove --codex
  killit remove --claude

Options:
  --force      Overwrite existing skill folders during init
  --dry-run    Show changes without writing files
  --help       Show this help
`);
}

function parseArgs(argv) {
  const args = new Set(argv);
  const validArgs = new Set([
    "init",
    "remove",
    "--codex",
    "--claude",
    "--force",
    "--dry-run",
    "--help",
    "-h",
  ]);

  if (args.has("--help") || args.has("-h")) {
    return { help: true };
  }

  for (const arg of args) {
    if (!validArgs.has(arg)) {
      return { error: `Unknown option: ${arg}` };
    }
  }

  const [command] = argv;
  if (command !== "init" && command !== "remove") {
    return { error: "Expected command: init or remove" };
  }

  const platforms = [];
  if (args.has("--codex")) platforms.push("codex");
  if (args.has("--claude")) platforms.push("claude");

  if (platforms.length === 0) {
    return { error: "Choose at least one target: --codex or --claude" };
  }

  return {
    command,
    platforms,
    force: args.has("--force"),
    dryRun: args.has("--dry-run"),
  };
}

function copyDir(src, dest, { force, dryRun }) {
  if (!fs.existsSync(src)) {
    throw new Error(`Missing skill source: ${src}`);
  }

  const exists = fs.existsSync(dest);
  if (exists && !force) {
    return "skipped";
  }

  if (dryRun) {
    return exists ? "would overwrite" : "would install";
  }

  fs.rmSync(dest, { recursive: true, force: true });
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.cpSync(src, dest, { recursive: true });
  return exists ? "overwritten" : "installed";
}

function removeDir(dest, { dryRun }) {
  if (!fs.existsSync(dest)) {
    return "missing";
  }

  if (dryRun) {
    return "would remove";
  }

  fs.rmSync(dest, { recursive: true, force: true });
  return "removed";
}

function install({ platforms, force, dryRun }) {
  for (const platform of platforms) {
    const targetRoot = TARGETS[platform];
    console.log(`${platform}: ${targetRoot}`);

    if (!dryRun) {
      fs.mkdirSync(targetRoot, { recursive: true });
    }

    for (const skill of SKILLS) {
      const status = copyDir(
        path.join(repoRoot, skill),
        path.join(targetRoot, skill),
        { force, dryRun },
      );
      console.log(`  ${status.padEnd(15)} ${skill}`);
    }
  }

  if (!force) {
    console.log("\nExisting folders are skipped. Re-run with --force to overwrite them.");
  }
}

function remove({ platforms, dryRun }) {
  for (const platform of platforms) {
    const targetRoot = TARGETS[platform];
    console.log(`${platform}: ${targetRoot}`);

    for (const skill of SKILLS) {
      const status = removeDir(path.join(targetRoot, skill), { dryRun });
      console.log(`  ${status.padEnd(15)} ${skill}`);
    }
  }
}

function main() {
  const parsed = parseArgs(process.argv.slice(2));

  if (parsed.help) {
    usage();
    return;
  }

  if (parsed.error) {
    console.error(`Error: ${parsed.error}\n`);
    usage();
    process.exitCode = 1;
    return;
  }

  if (parsed.command === "init") {
    install(parsed);
  } else {
    remove(parsed);
  }
}

main();
