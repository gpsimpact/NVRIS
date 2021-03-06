const Promise = require("bluebird");
const gm = require("gm").subClass({ imageMagick: true });
require("gm-base64");

Promise.promisifyAll(gm.prototype);

export default (path, width, height) =>
  new Promise((resolve, reject) => {
    gm(path)
      .resize(width, height)
      .write(path, (err) => {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          console.log(" signature resized! ");
          resolve();
        }
      });
  });
