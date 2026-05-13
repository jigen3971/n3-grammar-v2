const grammarList = [

{
  title: "〜気味",
  meaning: "少し〜の感じ。悪いことに使うことが多い。",
  audio: "最近仕事.mp4",
  examples: [
    "😓 最近、仕事が忙しくて、疲れ気味です。",
    "🤒 少し風邪気味なので、今日は早く寝ます。",
    "😪 最近、寝不足気味です。"
  ],
  question: "最近、仕事が忙しくて（　　　）。",
  choices: ["疲れ気味です", "疲れます気味", "疲れ気味ます"],
  correct: 0,
  practice: "最近、私は____気味です。"
},

{
  title: "〜ことだ",
  meaning: "話し手の判断・アドバイスを言う。",
  audio: "日本語が.mp4",
  examples: [
    "📚 日本語が上手になりたいなら、毎日勉強することだ。",
    "😴 疲れているなら、早く寝ることです。",
    "🏃 健康のために、運動することだ。"
  ],
  question: "日本語が上手になりたいなら、毎日（　　　）。",
  choices: ["勉強することだ", "勉強したことだ", "勉強するのだ"],
  correct: 0,
  practice: "健康のために、____ことだ。"
},

{
  title: "〜せいで",
  meaning: "悪い結果になった理由を言う。",
  audio: "雨が強かった.mp4",
  examples: [
    "🌧 雨のせいで、作業が遅れました。",
    "😵 寝不足のせいで、仕事に集中できませんでした。",
    "🚃 電車が遅れたせいで、集合時間に遅れました。"
  ],
  question: "雨が強かった（　　　）、作業ができませんでした。",
  choices: ["せいで", "おかげで", "ためにいい"],
  correct: 0,
  practice: "____のせいで、____ました。"
},

{
  title: "〜たびに",
  meaning: "〜するといつも。",
  audio: "日本へ来る.mp4",
  examples: [
    "🏔 山に登るたびに、写真を撮ります。",
    "🏠 国へ帰るたびに、家族に会います。",
    "🍜 日本へ来るたびに、ラーメンを食べます。"
  ],
  question: "日本へ来る（　　　）、ラーメンを食べます。",
  choices: ["たびに", "せいで", "おかげで"],
  correct: 0,
  practice: "____たびに、____ます。"
},

{
  title: "〜ようにしている",
  meaning: "習慣や努力していることを言う。",
  audio: "健康のために.mp4",
  examples: [
    "🥗 健康のために、野菜を食べるようにしています。",
    "🚭 タバコを吸いすぎないようにしています。",
    "📖 毎日、日本語を読むようにしています。"
  ],
  question: "健康のために、野菜を食べる（　　　）。",
  choices: ["ようにしています", "せいで", "ことだ"],
  correct: 0,
  practice: "毎日、____ようにしています。"
},

{
  title: "〜おかげで",
  meaning: "よい結果になった理由を言う。",
  audio: "先輩が助け.mp4",
  examples: [
    "🙋 先輩が教えてくれたおかげで、作業が早くできました。",
    "📘 毎日勉強したおかげで、日本語が上手になりました。",
    "😊 みんなが手伝ってくれたおかげで、早く終わりました。"
  ],
  question: "先輩が助けてくれた（　　　）、仕事が早く終わりました。",
  choices: ["おかげで", "せいで", "気味で"],
  correct: 0,
  practice: "____のおかげで、____ました。"
},

{
  title: "〜からこそ",
  meaning: "理由を強く言う。",
  audio: "努力した.mp4",
  examples: [
    "⚾ 努力したからこそ、プロ野球選手になれた。",
    "💪 頑張ったからこそ、成功できた。",
    "👨‍👩‍👧 家族がいるからこそ、頑張れます。"
  ],
  question: "努力した（　　　）、成功できました。",
  choices: ["からこそ", "せいで", "おかげに"],
  correct: 0,
  practice: "____からこそ、____。"
},

{
  title: "〜ことか",
  meaning: "強い気持ちを言う。",
  audio: "初めて給料.mp4",
  examples: [
    "😲 どんなに驚いたことか。",
    "😭 どれほど悲しかったことか。",
    "😊 どんなにうれしかったことか。"
  ],
  question: "初めて給料をもらったとき、どれほど（　　　）。",
  choices: ["うれしかったことか", "うれしいことだ", "うれしいせいで"],
  correct: 0,
  practice: "どんなに____ことか。"
},

{
  title: "〜にとって",
  meaning: "〜の立場から考える。",
  audio: "外国人.mp4",
  examples: [
    "👨 私にとって、家族が一番大切です。",
    "📖 学生にとって、この本は難しいです。",
    "🌏 外国人にとって、日本の漢字は難しいです。"
  ],
  question: "外国人（　　　）、漢字は難しいです。",
  choices: ["にとって", "せいで", "おかげで"],
  correct: 0,
  practice: "私にとって、____は大切です。"
},

{
  title: "〜たところ",
  meaning: "〜したら、変化や発見があった。",
  audio: "病院へ行った.mp4",
  examples: [
    "🛏 枕を変えたところ、よく眠れるようになりました。",
    "📞 電話したところ、すぐ来てくれました。",
    "🩺 病院へ行ったところ、風邪でした。"
  ],
  question: "病院へ行った（　　　）、風邪でした。",
  choices: ["ところ", "せいで", "ことか"],
  correct: 0,
  practice: "____たところ、____ました。"
},

{
  title: "〜としても",
  meaning: "たとえ〜でも。",
  audio: "失敗した.mp4",
  examples: [
    "☔ 雨だとしても、試合はあります。",
    "😢 失敗したとしても、あきらめません。",
    "💰 高いとしても、必要なら買います。"
  ],
  question: "失敗した（　　　）、あきらめません。",
  choices: ["としても", "おかげで", "気味で"],
  correct: 0,
  practice: "____としても、____。"
},

{
  title: "〜にしては",
  meaning: "普通と比べて意外。",
  audio: "子ども.mp4",
  examples: [
    "🍳 初めて作ったにしては、おいしいですね。",
    "👦 子どもにしては、背が高いです。",
    "🧑 日本に来たばかりにしては、日本語が上手です。"
  ],
  question: "子ども（　　　）、背が高いです。",
  choices: ["にしては", "ことか", "せいで"],
  correct: 0,
  practice: "____にしては、____。"
},

{
  title: "〜のは〜だ",
  meaning: "話題を強調する。",
  audio: "この店.mp4",
  examples: [
    "🍞 この店で人気なのは、サンドイッチです。",
    "✈ 好きなのは、旅行に行くことです。",
    "🎵 私の趣味は、音楽を聞くことです。"
  ],
  question: "この店で人気なのは（　　　）。",
  choices: ["サンドイッチです", "サンドイッチでしたせいで", "サンドイッチことか"],
  correct: 0,
  practice: "私が好きなのは、____です。"
},

{
  title: "〜わけがない",
  meaning: "絶対〜ない。",
  audio: "毎日勉強.mp4",
  examples: [
    "😄 元気な山田さんが病気なわけがない。",
    "🎬 あの映画がおもしろくないわけがない。",
    "📚 毎日勉強しているから、落ちるわけがない。"
  ],
  question: "毎日勉強しているから、試験に落ちる（　　　）。",
  choices: ["わけがない", "おかげで", "にとって"],
  correct: 0,
  practice: "____わけがない。"
},

{
  title: "〜ことになる",
  meaning: "結果としてそうなる。",
  audio: "来月から大阪.mp4",
  examples: [
    "🏢 来月から大阪へ転勤することになりました。",
    "📅 会議は延期になることになりました。",
    "🚭 タバコは禁止ということになりました。"
  ],
  question: "来月から大阪へ転勤する（　　　）。",
  choices: ["ことになりました", "ことか", "せいで"],
  correct: 0,
  practice: "来年、日本へ____ことになりました。"
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
  document.getElementById("audio1").src = item.audio;

  const choices = document.getElementById("choices");
  choices.innerHTML = "";

  item.choices.forEach((choice, index) => {
    const button = document.createElement("button");
    button.className = "choice";
    button.textContent = choice;
    button.onclick = () => checkAnswer(index, button);
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
  answer.textContent = "⭕ 正解です！";
  answer.style.color = "green";
  button.style.background = "#b8e6b8";
} else {
  answer.textContent = "❌ もう一度考えましょう。";
  answer.style.color = "red";
  button.style.background = "#f5b5b5";
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