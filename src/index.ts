import express, { Express, Request, Response } from "express";

const app: Express = express();
const port = process.env['PORT'] || 3000;

app.get("/", (_req: Request, res: Response) => {
  let str = "Express + TypeScript Server v14"
  res.send(str);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});