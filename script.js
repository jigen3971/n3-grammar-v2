const grammarList = [
  {
    title: "〜気味",
    meaning: "少し〜の感じ。悪いことに使うことが多い。",
    examples: [
      "😓 最近、仕事が忙しくて、疲れ気味です。",
      "🤒 少し風邪気味なので、今日は早く寝ます。",
      "😪 最近、寝不足気味です。"
    ],
    question: "最近、仕事が忙しくて（　　　）。",
    choices: ["疲れ気味です", "疲れます気味", "疲れ気味ます"],
    correct: 0,
    practice: "最近、私は＿＿気味です。"
  },
  {
    title: "〜せいで",
    meaning: "悪い結果になった理由を言う。",
    examples: [
      "☔ 雨のせいで、作業が遅れました。",
      "😴 寝不足のせいで、仕事中に集中できませんでした。",
      "🚃 電車が遅れたせいで、集合時間に遅れました。"
    ],
    question: "雨が強かった（　　　）、作業ができませんでした。",
    choices: ["せいで", "おかげで", "ためにいい"],
    correct: 0,
    practice: "＿＿のせいで、＿＿ました。"
  },
  {
    title: "〜おかげで",
    meaning: "よい結果になった理由を言う。",
    examples: [
      "👷 先輩が教えてくれたおかげで、作業が早くできました。",
      "📘 毎日勉強したおかげで、日本語が上手になりました。",
      "😊 みんなが手伝ってくれたおかげで、早く終わりました。"
    ],
    question: "先輩が助けてくれた（　　　）、仕事が早く終わりました。",
    choices: ["おかげで", "せいで", "気味で"],
    correct: 0,
    practice: "＿＿のおかげで、＿＿ました。"
  }
];

let current = 0;

function showGrammar() {
  const item = grammarList[current];

  document.getElementById("grammar-title").textContent = item.title;
  document.getElementById("grammar-meaning").textContent = item.meaning;

  const examples = document.getElementById("examples");
  examples.innerHTML = "";
  item.examples.forEach(example => {
    const div = document.createElement("div");
    div.className = "example";
    div.textContent = example;
    examples.appendChild(div);
  });

  document.getElementById("question").textContent = item.question;

  const choices = document.getElementById("choices");
  choices.innerHTML = "";

  item.choices.forEach((choice, index) => {
    const button = document.createElement("button");
    button.className = "choice";
    button.textContent = choice;
    button.onclick = () => checkAnswer(index);
    choices.appendChild(button);
  });

  document.getElementById("practice").textContent = item.practice;

  const answer = document.getElementById("answer");
  answer.style.display = "none";
  answer.textContent = "";
}

function checkAnswer(index) {
  const item = grammarList[current];
  const answer = document.getElementById("answer");
  answer.style.display = "block";

  if (index === item.correct) {
    answer.textContent = "正解です！";
  } else {
    answer.textContent = "もう一度考えましょう。";
  }
}

function nextGrammar() {
  current++;
  if (current >= grammarList.length) {
    current = 0;
  }
  showGrammar();
}

function prevGrammar() {
  current--;
  if (current < 0) {
    current = grammarList.length - 1;
  }
  showGrammar();
}

showGrammar();