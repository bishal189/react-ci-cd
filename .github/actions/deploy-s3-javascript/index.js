const core = require("@actions/core");
const exe = require("@actions/exec");

async function run() {
  try {
    // getting the info
    const bucketName = core.getInput("bucket-name", { required: true });
    const bucketRegion = core.getInput("bucketRegion", { required: true });
    const distFolder = core.getInput("distFolder", { required: true });

    //uploading to the s3 server
    const s3Uri = `s3://${bucketName}`;
    exe.exec(`aws s3 sync ${distFolder} ${s3Uri} --region ${bucketRegion}`);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
