// const fs = require('fs-extra');
// const { google }= require('googleapis');
// import { google } from "googleapis";
// const { OAuth2Client } = require('google-auth-library');
// const fs = require('fs')
// const { promises: fs } = require('fs');

// const SCOPES = ["https://www.googleapis.com/auth/drive.file"];
// const SERVICE_ACCOUNT_FILE =
//   "D:/Visio/New folder/visio-file-storage-3c7122df5654.json";
// const PARENTS_FOLDER_ID = "12ivDNq9-e6-K_r96Y_bwzefJzEnaf2SE";

// async function authenticate() {
//   const auth = new google.auth.GoogleAuth({
//     keyFile: SERVICE_ACCOUNT_FILE,
//     scopes: SCOPES,
//   });
//   return auth.getClient();
// }

// export async function uploadDoc(filePath) {
//     const auth = await authenticate();
//     const drive = google.drive({ version: 'v3', auth });
  
//     const fileMetadata = {
//       name: 'Hello',
//       parents: [PARENTS_FOLDER_ID]
//     };
//     console.log("I m upload drive fun")
  
//     const media = {
//       mimeType: 'application/octet-stream',
//       body: fs.createReadStream(filePath)
//     };
  
//     const res = await drive.files.create({
//       requestBody: fileMetadata,
//       media: media
//     });
  
//     console.log('File uploaded:', res.data);
//   }