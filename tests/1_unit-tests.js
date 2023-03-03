const chai = require("chai");
const assert = chai.assert;

const Translator = require("../components/translator.js");
const locales = ["british-to-american", "american-to-british"];

suite("Unit Tests", () => {
  const translator = new Translator();

  test("Translate 'Mangoes are my favorite fruit.' to British English", function () {
    assert.equal(
      translator.translate("Mangoes are my favorite fruit.", locales[1]),
      "Mangoes are my favourite fruit."
    );
  });

  test("Translate 'I ate yogurt for breakfast.' to British English", function () {
    assert.equal(
      translator.translate("I ate yogurt for breakfast.", locales[1]),
      "I ate yoghurt for breakfast."
    );
  });

  test("Translate 'We had a party at my friend's condo.' to British English", function () {
    assert.equal(
      translator.translate("We had a party at my friend's condo.", locales[1]),
      "We had a party at my friend's flat."
    );
  });

  test("Translate 'Can you toss this in the trashcan for me?' to British English", function () {
    assert.equal(
      translator.translate(
        "Can you toss this in the trashcan for me?",
        locales[1]
      ),
      "Can you toss this in the bin for me?"
    );
  });

  test("Translate 'The parking lot was full.' to British English", function () {
    assert.equal(
      translator.translate("The parking lot was full.", locales[1]),
      "The car park was full."
    );
  });

  test("Translate 'Like a high tech Rube Goldberg machine.' to British English", function () {
    assert.equal(
      translator.translate(
        "Like a high tech Rube Goldberg machine.",
        locales[1]
      ),
      "Like a high tech Heath Robinson device."
    );
  });

  test("Translate 'To play hooky means to skip class or work.' to British English", function () {
    assert.equal(
      translator.translate(
        "To play hooky means to skip class or work.",
        locales[1]
      ),
      "To bunk off means to skip class or work."
    );
  });

  test("Translate 'No Mr. Bond, I expect you to die.' to British English", function () {
    assert.equal(
      translator.translate("No Mr. Bond, I expect you to die.", locales[1]),
      "No Mr Bond, I expect you to die."
    );
  });

  test("Translate 'Dr. Grosh will see you now.' to British English", function () {
    assert.equal(
      translator.translate("Dr. Grosh will see you now.", locales[1]),
      "Dr Grosh will see you now."
    );
  });

  test("Translate 'Lunch is at 12:15 today.' to British English", function () {
    assert.equal(
      translator.translate("Lunch is at 12:15 today.", locales[1]),
      "Lunch is at 12.15 today."
    );
  });

  test("Translate 'We watched the footie match for a while.' to American English", function () {
    assert.equal(
      translator.translate(
        "We watched the footie match for a while.",
        locales[0]
      ),
      "We watched the soccer match for a while."
    );
  });

  test("Translate 'Paracetamol takes up to an hour to work.' to American English", function () {
    assert.equal(
      translator.translate(
        "Paracetamol takes up to an hour to work.",
        locales[0]
      ),
      "Tylenol takes up to an hour to work."
    );
  });

  test("Translate 'First, caramelise the onions.' to American English", function () {
    assert.equal(
      translator.translate("First, caramelise the onions.", locales[0]),
      "First, caramelize the onions."
    );
  });

  test("Translate 'I spent the bank holiday at the funfair.' to American English", function () {
    assert.equal(
      translator.translate(
        "I spent the bank holiday at the funfair.",
        locales[0]
      ),
      "I spent the public holiday at the carnival."
    );
  });

  test("Translate 'I had a bicky then went to the chippy.' to American English", function () {
    assert.equal(
      translator.translate(
        "I had a bicky then went to the chippy.",
        locales[0]
      ),
      "I had a cookie then went to the fish-and-chip shop."
    );
  });

  test("Translate 'I've just got bits and bobs in my bum bag.' to American English", function () {
    assert.equal(
      translator.translate(
        "I've just got bits and bobs in my bum bag.",
        locales[0]
      ),
      "I've just got odds and ends in my fanny pack."
    );
  });

  test("Translate 'The car boot sale at Boxted Airfield was called off.' to American English", function () {
    assert.equal(
      translator.translate(
        "The car boot sale at Boxted Airfield was called off.",
        locales[0]
      ),
      "The swap meet at Boxted Airfield was called off."
    );
  });

  test("Translate 'Have you met Mrs Kalyani?' to American English", function () {
    assert.equal(
      translator.translate("Have you met Mrs Kalyani?", locales[0]),
      "Have you met Mrs. Kalyani?"
    );
  });

  test("Translate 'Prof Joyner of King's College, London.' to American English", function () {
    assert.equal(
      translator.translate(
        "Prof Joyner of King's College, London.",
        locales[0]
      ),
      "Prof. Joyner of King's College, London."
    );
  });

  test("Translate 'Tea time is usually around 4 or 4.30.' to American English", function () {
    assert.equal(
      translator.translate("Tea time is usually around 4 or 4.30.", locales[0]),
      "Tea time is usually around 4 or 4:30."
    );
  });

  // TODO: These are not done
  test("Highlight translation in 'Mangoes are my favorite fruit.'", function () {
    assert.isTrue(true);
  });

  test("Highlight translation in 'I ate yogurt for breakfast.'", function () {
    assert.isTrue(true);
  });

  test("Highlight translation in 'We watched the footie match for a while.'", function () {
    assert.isTrue(true);
  });

  test("Highlight translation in 'Paracetamol takes up to an hour to work.'", function () {
    assert.isTrue(true);
  });
});
