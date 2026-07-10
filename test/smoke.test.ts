import assert from "node:assert";
import path from "node:path";
import fs from "node:fs";
import { fileURLToPath } from "node:url";
import { describe, it } from "node:test";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

describe("html5-cli smoke test", () => {
  it("should have bin/html5 entry file", () => {
    const binPath = path.resolve(__dirname, "../bin/html5");
    assert.strictEqual(fs.existsSync(binPath), true);
  });

  it("should have package.json with correct name", () => {
    const pkg = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../package.json"), "utf-8"));
    assert.strictEqual(pkg.name, "html5-cli");
  });

  it("should have bin commands registered", () => {
    const pkg = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../package.json"), "utf-8"));
    assert.ok(pkg.bin.html5);
    assert.ok(pkg.bin.h5);
  });
});
