const core = require('@actions/core');
const AWS = require('aws-sdk');
const appId = core.getInput('appId');
const branchName = core.getInput('branchName');
const region = core.getInput('region');

var amplify = new AWS.Amplify({ region });

amplify.listJobs({ appId, branchName }, function (err, data) {
  if (err) core.error(err);

  data.jobSummaries
    .filter((job) =>
      ["PENDING", "PROVISIONING", "RUNNING"].includes(job.status)
    )
    .forEach((job) => {
      const { jobId } = job;
      amplify.stopJob({ appId, branchName, jobId }, function (err, data) {
        if (err) console.error(err);
        else core.debug(data);
      });
    });
});
