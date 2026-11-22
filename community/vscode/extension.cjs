const vscode = require("vscode");

exports.activate = function activate(context) {
  context.subscriptions.push(vscode.commands.registerCommand("freevideoai.checkShotPlan", async () => {
    const document = vscode.window.activeTextEditor?.document;
    if (!document || document.languageId !== "json") return;
    try {
      const { validateVideoOptions } = await import("./validator.mjs");
      const plan = validateVideoOptions(JSON.parse(document.getText()));
      if (plan.ok) {
        vscode.window.showInformationMessage("Shot plan is valid for offline preparation.");
      } else {
        vscode.window.showWarningMessage(plan.errors.map(e => e.field + ": " + e.message).join(" · "));
      }
    } catch (error) {
      vscode.window.showErrorMessage(error.message);
    }
  }));
};
