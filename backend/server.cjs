const express = require("express");
const cors = require("cors");
const puppeteer = require("puppeteer");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/generate-pdf", async (req, res) => {
  try {
    const { url } = req.body;

    const browser = await puppeteer.launch({
      headless: "new",
      args: ["--no-sandbox", "--disable-setuid-sandbox"]
    });

    const page = await browser.newPage();
    await page.goto(url, { waitUntil: "networkidle0" });

    const pdf = await page.pdf({
      format: "A4",
      printBackground: true
    });

    await browser.close();

    res.set({
      "Content-Type": "application/pdf",
    });

    res.send(pdf);

  } catch (err) {
    console.error(err);
    res.status(500).send("PDF generation failed");
  }
});

app.listen(5000, () =>
  console.log("Backend running on http://localhost:5000")
);
