"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core = __importStar(require("@actions/core"));
const github = __importStar(require("@actions/github"));
const process_1 = require("process");
try {
    // `who-to-greet` input defined in action metadata file
    const nameToGreet = core.getInput('user_name');
    console.log(`Hello ${nameToGreet}!`);
    core.startGroup('List of env vars');
    core.info("GITHUB_WORKSPACE=" + process_1.env["GITHUB_WORKSPACE"]);
    core.info("GITHUB_REPOSITORY=" + process_1.env["GITHUB_REPOSITORY"]);
    core.info("GITHUB_REF=" + process_1.env["GITHUB_REF"]);
    core.info("GITHUB_REF_NAME=" + process_1.env["GITHUB_REF_NAME"]);
    core.info("GITHUB_SHA=" + process_1.env["GITHUB_SHA"]);
    core.info("GITHUB_EVENT_NAME=" + process_1.env["GITHUB_EVENT_NAME"]);
    core.info("RUNNER_OS=" + process_1.env["RUNNER_OS"]);
    core.endGroup();
    const time = (new Date()).toTimeString();
    core.setOutput("time", time);
    core.startGroup('Context list');
    core.info("Repo.Owner=" + github.context.repo.owner);
    core.info("Repo.Repo=" + github.context.repo.repo);
    core.info("Ref=" + github.context.ref);
    core.info("Action=" + github.context.action);
    core.info("Sha=" + github.context.sha);
    core.info("Actor=" + github.context.actor);
    core.endGroup();
    core.startGroup('Payload dump');
    // Get the JSON webhook payload for the event that triggered the workflow
    const payload = JSON.stringify(github.context.payload, undefined, 2);
    core.info(`The event payload: ${payload}`);
    core.endGroup();
}
catch (error) {
    if (error instanceof Error)
        core.setFailed(error.message);
}
//# sourceMappingURL=action-upload.js.map