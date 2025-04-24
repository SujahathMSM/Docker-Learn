const mqtt = require("mqtt");
const client = mqtt.connect("mqtt://localhost");

client.on("connect", () => {
  console.log("Connected to MQTT broker");
  client.subscribe("test/topic");
});

client.on("message", (topic, message) => {
  console.log(`Recieved message: ${message.toString()} on topic: ${topic}`);
});
