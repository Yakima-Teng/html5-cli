const assert = require("assert");
const path = require("path");
const fs = require("fs");

describe("html5-cli smoke test", () => {
  it("should have bin/html5 entry file", () => {
    const binPath = path.resolve(__dirname, "../bin/html5");
    assert.strictEqual(fs.existsSync(binPath), true);
  });

  it("should have package.json with correct name", () => {
    const pkg = require("../package.json");
    assert.strictEqual(pkg.name, "html5-cli");
  });

  it("should have bin commands registered", () => {
    const pkg = require("../package.json");
    assert.ok(pkg.bin.html5);
    assert.ok(pkg.bin.h5);
  });
});
