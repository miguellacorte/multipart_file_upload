let http = require("http");
let fs = require("fs");
let formidable = require('formidable')

http
  .createServer(function (req, res) {
    let form = new formidable.IncomingForm();
    form.parse(req, function (error, fields, file) {
      //grab the name of the uploaded file
      //fileupload is the name set for the uploaded file in the html file
      let filepath = file.fileupload.filepath;

      //directory in which uploaded file will be saved
      let newpath =
        "~/Users/miguellacorte/Documents/coding/multipart_file_upload/file_upload_example/";

      //keep original file name
      newpath += file.fileupload.originalFilename;

      fs.rename(filepath, newpath, function () {
        res.write("nodeJS file upload success");
        res.end();
      });
    });
  })
  .listen(80);
