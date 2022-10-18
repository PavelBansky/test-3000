import * as core from '@actions/core';
import * as github from '@actions/github';
import { env } from 'process';

try {
  // `who-to-greet` input defined in action metadata file
  const nameToGreet = core.getInput('user_name');
  console.log(`Hello ${nameToGreet}!`);

  core.startGroup('List of env vars');
  core.info("GITHUB_WORKSPACE="+ env["GITHUB_WORKSPACE"]);
  core.info("GITHUB_REPOSITORY"+ env["GITHUB_REPOSITORY"]);
  core.info("GITHUB_REF"+ env["GITHUB_REF"]);
  core.info("GITHUB_REF_NAME"+ env["GITHUB_REF_NAME"]);
  core.info("GITHUB_SHA"+ env["GITHUB_SHA"]);
  core.info("GITHUB_EVENT_NAME"+ env["GITHUB_EVENT_NAME"]);
  core.info("RUNNER_OS"+ env["RUNNER_OS"]);
  core.endGroup();

  const time = (new Date()).toTimeString();
  core.setOutput("time", time); 

  core.startGroup('Context list');
  core.info("Repo"+ github.context.repo);
  core.info("Ref"+ github.context.ref);
  core.info("Action"+ github.context.action);
  core.info("Sha"+ github.context.sha);
  core.info("Actor"+ github.context.actor);
  core.endGroup();

  core.startGroup('Payload dump');
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  core.info(`The event payload: ${payload}`);
  core.endGroup();
} catch (error) {
    if (error instanceof Error)
      core.setFailed(error.message);
}