#!/usr/bin/env node

const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");

const SKILLS = [
  "kill-it",
  "requirements-killer",
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
  console.log(`nameless

Usage:
  nameless init --codex
  nameless init --claude
  nameless init --all
  nameless remove --codex
  nameless remove --claude
  nameless remove --all

Legacy:
  killit nameless --init
  killit init --codex
  killit remove --codex

Options:
  --codex     Target ~/.codex/skills
  --claude    Target ~/.claude/skills
  --all       Target both Codex and Claude
  --force      Overwrite existing skill folders during init
  --dry-run    Show changes without writing files
  --help       Show this help
`);
}

function parseArgs(argv) {
  const args = new Set(argv);
  const validArgs = new Set([
    "nameless",
    "init",
    "remove",
    "--init",
    "--remove",
    "--codex",
    "--claude",
    "--all",
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

  const [entry] = argv;

  if (entry === "nameless") {
    if (args.has("--init") && args.has("--remove")) {
      return { error: "Choose only one action: --init or --remove" };
    }
    if (!args.has("--init") && !args.has("--remove")) {
      return { error: "Choose an action: --init or --remove" };
    }

    const command = args.has("--remove") ? "remove" : "init";
    const platforms = parsePlatforms(args, ["codex"]);

    return {
      command,
      platforms,
      force: args.has("--force"),
      dryRun: args.has("--dry-run"),
    };
  }

  const command = entry;
  if (command !== "init" && command !== "remove") {
    return { error: "Expected command: nameless, init, or remove" };
  }

  const platforms = parsePlatforms(args, []);

  if (platforms.length === 0) {
    return { error: "Choose at least one target: --codex, --claude, or --all" };
  }

  return {
    command,
    platforms,
    force: args.has("--force"),
    dryRun: args.has("--dry-run"),
  };
}

function parsePlatforms(args, fallback) {
  if (args.has("--all")) {
    return ["codex", "claude"];
  }

  const platforms = [];
  if (args.has("--codex")) platforms.push("codex");
  if (args.has("--claude")) platforms.push("claude");

  return platforms.length > 0 ? platforms : fallback;
}

function copyDir(src, dest, { force, dryRun }) {
  if (!fs.existsSync(src)) {
    throw new Error(`Missing skill source: ${src}`);
  }

  const exists = fs.existsSync(dest);
  if (dryRun) {
    if (exists && force) return "would overwrite";
    if (exists) return "would skip";
    return "would install";
  }

  if (exists && !force) {
    return "skipped";
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
