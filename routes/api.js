"use strict";

const Translator = require("../components/translator.js");

const locales = ["british-to-american", "american-to-british"];

module.exports = function (app) {
  const translator = new Translator();

  app.route("/api/translate").post((req, res) => {
    const { text, locale } = req.body;

    if (text === undefined || locale === undefined) {
      return res.json({ error: "Required field(s) missing" });
    }

    if (text.length === 0) {
      return res.json({ error: "No text to translate" });
    }

    if (!locales.includes(locale)) {
      return res.json({ error: "Invalid value for locale field" });
    }

    const translation = translator.translate(text, locale);

    if (translation === text) {
      return res.json({
        text: text,
        translation: "Everything looks good to me!",
      });
    }

    return res.json({ text: text, translation: translation });
  });
};
