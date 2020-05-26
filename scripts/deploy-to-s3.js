const s3 = require('@auth0/s3')
const client = s3.createClient({
  s3Options: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

const branchName = process.env.GITHUB_REF.replace("refs/heads/", "")
const uploadApp = () => {
  const params = {
    localDir: "App/dist",
    deleteRemoved: true,
    s3Params: {
      Bucket: "xolvio-ui",
      Prefix: `${branchName}/App`,
    },
  };
  const uploader = client.uploadDir(params);
  uploader.on('error', function (err) {
    console.error("unable to sync:", err.stack);
  });
  uploader.on('progress', function () {
    console.log("progress", uploader.progressAmount, uploader.progressTotal);
  });
  uploader.on('end', function () {
    console.log("done uploading");
  });
}

uploadApp()


const uploadDesignSystem = () => {
  const params = {
    localDir: "DesignSystem/storybook-static",
    deleteRemoved: true,
    s3Params: {
      Bucket: "xolvio-ui",
      Prefix: `${branchName}/DesignSystem`,
    },
  };
  const uploader = client.uploadDir(params);
  uploader.on('error', function (err) {
    console.error("unable to sync:", err.stack);
  });
  uploader.on('progress', function () {
    console.log("progress", uploader.progressAmount, uploader.progressTotal);
  });
  uploader.on('end', function () {
    console.log("done uploading");
  });
}

uploadDesignSystem()

