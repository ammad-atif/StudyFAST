import express, { Application, Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import morgan from "morgan";
import fs from "fs";
import path from "path";

// create log file path
const logPath: string = path.join(process.cwd(), "logs", "access.log");
// make sure folder exists (important)
fs.mkdirSync(path.dirname(logPath), { recursive: true });
// create write stream
const accessLogStream: fs.WriteStream = fs.createWriteStream(logPath, {
  flags: "a",
});

const app: Application = express();

// Middleware
app.use(express.json()); // Body parser
app.use(helmet()); // Security headers
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(compression()); // Compress responses

morgan.token("body", (req: Request) => {
  return JSON.stringify(req.body);
});
morgan.token("headers", (req: Request) => {
  return JSON.stringify(req.headers);
});
app.use(
  morgan(
    ":method :url :status :response-time ms\nbody: :body\nheaders: :headers",
    { stream: accessLogStream },
  ),
); // Logging

// Basic Health Check Route
app.post("/health", (req: Request, res: Response) => {
  res.status(200).json({ status: "UP", message: "Server is running smoothly" });
});

export default app;
