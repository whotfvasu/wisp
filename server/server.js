import express from "express";
import "dotenv/config";
import cors from "cors";
import http from "http";

const app = express();

const server = http.createServer(app);

//middleware
app.use(express.json({ limit: "4mb" }));
app.use(cors());

app.use("/api/status", (req, res) => res.send("server is live"));

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log("server is running on port: " + PORT));
