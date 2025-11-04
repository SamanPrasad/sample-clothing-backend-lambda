import serverless from "serverless-http";
import app from "./src/app";

exports.handler = serverless(app);
