import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
app.use(cors());

const API_KEY = "AIzaSyBXj-AStZjPnU7wXm82txO2pj_QGR-KOio";
const PLACE_ID = "ChIJgWjrbZbP1EARk8pw9Vfl9kE";

app.get("/api/reviews", async (req, res) => {
  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=name,rating,reviews&key=${API_KEY}`
    );
    const data = await response.json();
    res.json(data.result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch reviews" });
  }
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
