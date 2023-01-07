

/** ============================================
  *     GitHub Copilot
  * ============================================ */


// Toggle github copilot
serenade.app("vscode").command("copilot toggle", (api) => {
    api.pressKey("enter", ["control"]);
});

// Next github copilot suggestion
serenade.app("vscode").command("copilot next", (api) => {
    api.pressKey("]", ["option"]);
});

// Previous github copilot suggestion
serenade.app("vscode").command("copilot previous", (api) => {
    api.pressKey("[", ["option"]);
});

// Confirm github copilot suggestions
serenade.app("vscode").command("copilot confirm", (api) => {
    api.pressKey("tab");
    api.pressKey("return");
});