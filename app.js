const express = require("express");
const app = express();
const twilio = require("./twilio");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/webhook", function (req, res) {
  console.log("req ->", req.body);
  twilio.sendTextMessage(req.body.WaId, req.body.Body);
  res.status(200).json({ ok: true, msg: "Mensaje enviado correctamente" });
});

app.listen(3000, () => {
  console.log("servidor montado en el puerto 3000");
});
