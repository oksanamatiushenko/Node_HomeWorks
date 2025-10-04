import express from "express";
import cors from "cors";
import "dotenv/config";

const { PORT } = process.env;

const serverRunning = () => {
    const app = express();
    app.use(cors());
    app.use(express.json());


  app.use((req,res)=>{
  const { authorization } = req.headers;
  console.log("Authorization", authorization)
    if (!authorization) {
      res.status(401).set("Content-Type", "text/plain").send("Unauthorized");
      return;
  }
    res.status(200).set("Content-Type", "text/plain").send("Authorization header received");

});

const port= Number(PORT) || 3000;

app.listen(port, () => console.log(`Server running on ${port} port`));
}

export default serverRunning;




