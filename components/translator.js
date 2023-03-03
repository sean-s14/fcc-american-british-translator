const americanOnly = require("./american-only.js");
const americanToBritishSpelling = require("./american-to-british-spelling.js");
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require("./british-only.js");
const locales = ["british-to-american", "american-to-british"];

const choice = {
  "british-to-american": britishOnly,
  "american-to-british": americanOnly,
};

class Translator {
  translateWord(arr, word, locale, i) {
    let modified = false;
    let index = i;
    let list = { ...americanToBritishSpelling, ...americanToBritishTitles };
    if (locale === locales[0]) {
      // Swap key with value
      list = Object.fromEntries(Object.entries(list).map((a) => a.reverse()));
    }

    for (const [key, value] of Object.entries({
      ...choice[locale],
      ...list,
    })) {
      if (word.toLowerCase() === key.toLowerCase()) {
        const value_arr = value.split(" ");
        arr.splice(i, word.split(" ").length, ...value_arr);
        index = i - 1 + value_arr.length;
        if (modified !== undefined) {
          modified = true;
        }
        break;
      }
    }

    return [index, modified];
  }

  translate(text, locale) {
    let full_stop = false;
    if (text[text.length - 1] === ".") {
      full_stop = true;
      text = text.substring(0, text.length - 1);
    }
    // console.log(text);
    let text_arr = text.split(" ");
    // console.log(text_arr);
    for (let i = 0; i < text_arr.length; i++) {
      // console.log("Text Arr:", text_arr);

      const regex_american = new RegExp(/[0-9]{1,2}:[0-9]{2}/);
      const regex_british = new RegExp(/[0-9]{1,2}\.[0-9]{2}/);

      const word = text_arr[i];
      const word2 = text_arr[i + 1];
      const word3 = text_arr[i + 2];

      if (regex_american.test(word) && locale === locales[1]) {
        text_arr[i] = text_arr[i].replace(":", ".");
        continue;
      } else if (regex_british.test(word) && locale === locales[0]) {
        text_arr[i] = text_arr[i].replace(".", ":");
        continue;
      }

      if (word3 !== undefined) {
        const joint_word = `${word} ${word2} ${word3}`;
        let [index, modified] = this.translateWord(
          text_arr,
          joint_word,
          locale,
          i
        );
        i = index;
        if (modified) continue;
      }

      if (word2 !== undefined) {
        const joint_word = `${word} ${word2}`;
        let [index, modified] = this.translateWord(
          text_arr,
          joint_word,
          locale,
          i
        );
        i = index;
        if (modified) continue;
      }

      if (word !== undefined) {
        let [index, modified] = this.translateWord(text_arr, word, locale, i);
        i = index;
      }
    }
    // console.log("Text Arr:", text_arr);
    let new_text = text_arr.join(" ");
    if (full_stop) {
      new_text += ".";
    }
    return new_text;
  }
}

module.exports = Translator;
