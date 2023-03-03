const chai = require("chai");
const chaiHttp = require("chai-http");
const assert = chai.assert;
const server = require("../server.js");

chai.use(chaiHttp);

let Translator = require("../components/translator.js");

suite("Functional Tests", () => {
  test("Translation with text and locale fields", (done) => {
    chai
      .request(server)
      .post("/api/translate")
      .send({
        text: "anti-clockwise mrs agony column bikky accessorise aeon",
        locale: "british-to-american",
      })
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.property(res.body, "text");
        assert.property(res.body, "translation");
        assert.equal(
          res.body.text,
          "anti-clockwise mrs agony column bikky accessorise aeon"
        );
        assert.equal(
          res.body.translation,
          '<span class="highlight">counterclockwise</span> <span class="highlight">Mrs.</span> <span class="highlight">advice column</span> <span class="highlight">cookie</span> <span class="highlight">accessorize</span> <span class="highlight">eon</span>'
        );
        done();
      });
  });

  test("Translation with text and invalid locale field", (done) => {
    chai
      .request(server)
      .post("/api/translate")
      .send({ text: "This is my mum, Lisa.", locale: "british-to-german" })
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.property(res.body, "error");
        assert.equal(res.body.error, "Invalid value for locale field");
        done();
      });
  });

  test("Translation with missing text field", (done) => {
    chai
      .request(server)
      .post("/api/translate")
      .send({ locale: "british-to-american" })
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.property(res.body, "error");
        assert.equal(res.body.error, "Required field(s) missing");
        done();
      });
  });

  test("Translation with missing locale field", (done) => {
    chai
      .request(server)
      .post("/api/translate")
      .send({ text: "This is my mum, Lisa." })
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.property(res.body, "error");
        assert.equal(res.body.error, "Required field(s) missing");
        done();
      });
  });

  test("Translation with empty text", (done) => {
    chai
      .request(server)
      .post("/api/translate")
      .send({ text: "", locale: "british-to-american" })
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.property(res.body, "error");
        assert.equal(res.body.error, "No text to translate");
        done();
      });
  });

  test("Translation with text that needs no translation", (done) => {
    chai
      .request(server)
      .post("/api/translate")
      .send({ text: "Hi there", locale: "british-to-american" })
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.property(res.body, "text");
        assert.equal(res.body.text, "Hi there");
        assert.property(res.body, "translation");
        assert.equal(res.body.translation, "Everything looks good to me!");
        done();
      });
  });
});
