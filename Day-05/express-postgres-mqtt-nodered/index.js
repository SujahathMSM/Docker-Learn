const express = require("express");
const { Pool } = require("pg");
const mqtt = require("mqtt");

const app = express();
app.use(express.json());



const pool = new Pool({
  user: process.env.PGUSER || "postgres",
  host: process.env.PGHOST || "localhost",
  database: process.env.PGDATABASE || "mydb",
  password: process.env.PGPASSWORD || "mypassword",
  port: process.env.PGPORT || 5432,
});

const mqttBrokerUrl = process.env.MQTT_BROKER_URL || "mqtt://localhost";
const mqttClient = mqtt.connect(mqttBrokerUrl);

mqttClient.on("connect", () => {
  console.log("✅ Connected to MQTT broker");
  mqttClient.subscribe("my/topic", (err) => {
    if (err) console.error("❌ MQTT subscribe error:", err);
    else console.log("📡 Subscribed to topic: my/topic");
  });
});

mqttClient.on("message", async (topic, message) => {
  const msg = message.toString();
  console.log(`📥 MQTT Message on ${topic}:`, msg);

  try {
    await pool.query("INSERT INTO messages(topic, content) VALUES($1, $2)", [
      topic,
      msg,
    ]);
    console.log("✅ Message saved to database");
  } catch (err) {
    console.error("❌ DB insert error:", err);
  }
});

app.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json({ server_time: result.rows[0].now });
  } catch (err) {
    console.error("DB error:", err);
    res.status(500).send("Database error");
  }
});

app.post("/publish", (req, res) => {
  const { topic, message } = req.body;
  if (!topic || !message) {
    return res.status(400).json({ error: "topic and message are required" });
  }

  mqttClient.publish(topic, message, {}, (err) => {
    if (err) {
      console.error("❌ MQTT publish error:", err);
      return res.status(500).json({ error: "Failed to publish message" });
    }
    console.log(`📤 Published to ${topic}: ${message}`);
    res.json({ status: "Message published" });
  });
});

app.listen(3000, () => {
  console.log("🚀 Server is running on port 3000");
});
