import express from "express";
import cors from 'cors'

const app = express();
const port = 80;
// ajout de l'en tête "Access Control Allow Origin"
app.use(cors());

app.get("/", (req, res) => res.json({
    date: new Date(),
    number: Math.round(Math.random() * 10)
}));
app.listen(port, () => console.info(`app listening on port ${port}`));
