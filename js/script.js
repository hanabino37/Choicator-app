// ==========================================
// 設定（ここで秒数を調整できます）
// ==========================================
const CONFIG = {
    RESULT_DELAY_MS: 1000, // 結果が出るまでの「タメ」の時間（ミリ秒） 1000 = 1秒
};

// ==========================================
// データ定義
// ==========================================

// 質問プール（全100問）
const questionPool = [
    // --- 既存の質問 ---
    "昨日はよく眠れましたか？",
    "今日朝食を食べましたか？",
    "握手するときは左手からですか？",
    "旅行に行くなら北海道ですか？",
    "歩くのが早いと言われることが多いですか？",
    "偶数より奇数の方が好きですか？",
    "実家でペットを飼っていましたか？",
    "目玉焼きには醤油をかけますか？",
    "自分は晴れ男・晴れ女だと思いますか？",
    "幽霊を見たことがありますか？",
    "宝くじで1万円以上当たったことがありますか？",
    "靴下は右足から履きますか？",
    "コーヒーより紅茶派ですか？",
    "夏より冬が好きですか？",
    "インドア派というよりアウトドア派ですか？",
    "スマホの充電は80%以上ないと不安ですか？",
    "映画は字幕より吹き替え派ですか？",
    "高いところは好きですか？",
    "辛い食べ物は得意ですか？",
    "ジェットコースターに乗れますか？",
    "1人で焼肉屋に入れますか？",
    "カバンの中身は整理されていますか？",
    "待ち合わせには早く着く方ですか？",
    "寝る時は仰向けですか？",
    "お風呂では頭から先に洗いますか？",
    "炭酸飲料は好きですか？",
    "自分の字は綺麗だと思いますか？",
    "動物園より水族館が好きですか？",
    "LINEの返信は早い方ですか？",
    "コンビニでつい余計なものを買いますか？",
    "宇宙人は存在すると思いますか？",
    "占いは信じますか？",
    "人前で話すのは得意ですか？",
    "洋楽より邦楽をよく聴きますか？",
    "ショートケーキの苺は最初に食べますか？",
    "寝起きは良い方ですか？",
    "視力は良い方ですか？",
    "エレベーターの「閉」ボタンを連打しますか？",
    "ティッシュは2回折って使いますか？",
    "日焼け止めは冬でも塗りますか？",
    "傘を持ち歩くのが嫌いですか？",
    "本は電子書籍より紙派ですか？",
    "貯金は得意ですか？",
    "涙もろい方ですか？",
    "サプライズをされるのは好きですか？",
    "怒ると黙るタイプですか？",
    "SNSのアカウントを3つ以上持っていますか？",
    "行列に並ぶのは苦ではないですか？",
    "マヨネーズが好きですか？",
    "今、直感で「YES」を押そうとしましたか？",

    // --- 新規追加分（50問） ---
    "きのこよりたけのこ派ですか？",
    "唐揚げにレモンはかけますか？",
    "こしあんよりつぶあん派ですか？",
    "カレーはナンよりライス派ですか？",
    "ラーメンのスープは飲み干す方ですか？",
    "エスカレーターは歩かずに止まりますか？",
    "電車では端の席に座りたいですか？",
    "映画館ではポップコーンを買いますか？",
    "焼肉はタレより塩派ですか？",
    "お寿司はサビ抜きですか？",
    "トイレのフタは閉めますか？",
    "靴は揃えて脱ぎますか？",
    "部屋着とパジャマは分けますか？",
    "バスタオルは毎日洗いますか？",
    "シャンプーの詰め替えは失敗しませんか？",
    "観葉植物を枯らしたことがありますか？",
    "虫は平気ですか？",
    "高いところから下を見るのは好きですか？",
    "飛行機では窓側派ですか？",
    "ホテルのアメニティは持ち帰りますか？",
    "好きな食べ物は最後に取っておきますか？",
    "くじ引きで当たりを引いたことがありますか？",
    "四つ葉のクローバーを見つけたことがありますか？",
    "デジャヴ（既視感）を感じたことがありますか？",
    "金縛りにあったことがありますか？",
    "流れ星を見たことがありますか？",
    "自分の直感は当たる方ですか？",
    "生まれ変わりを信じますか？",
    "宇宙旅行に行ってみたいですか？",
    "AIに仕事を取られるのが怖いですか？",
    "スマホの通知は溜めない派ですか？",
    "ダークモードを使っていますか？",
    "検索履歴を見られるのは恥ずかしいですか？",
    "パスワードは使い回していますか？",
    "SNSの裏垢を持っていますか？",
    "自撮りは得意ですか？",
    "YouTuberになりたいと思ったことはありますか？",
    "ネットのレビューは信じますか？",
    "Wi-Fiがないと生きていけませんか？",
    "既読スルーは気になりますか？",
    "蚊に刺されやすいですか？",
    "暑がりというより寒がりですか？",
    "骨折したことはありますか？",
    "花粉症ですか？",
    "視線を感じることがありますか？",
    "じゃんけんは強い方ですか？",
    "嘘をつくのは上手ですか？",
    "約束の時間には遅れないですか？",
    "ここだけの話を持っていますか？",
    "今、このゲームを楽しんでいますか？"
];

const CHAR_IMAGES = {
    DEFAULT: "image_0.jpg",
    REACTIONS: ["image_1.jpg", "image_2.jpg"],
    RESULT: "image_3.jpg"
};

// ==========================================
// 変数定義
// ==========================================
let currentQuestionIndex = 0;
let determinedResult = "";
let isProcessing = false;
let currentQuestions = [];

const screens = {
    menu: document.getElementById('menu-screen'),
    game: document.getElementById('game-screen'),
    result: document.getElementById('result-screen')
};

const elements = {
    inputA: document.getElementById('choice-a'),
    inputB: document.getElementById('choice-b'),
    startBtn: document.getElementById('start-btn'),
    questionText: document.getElementById('question-text'),
    characterImg: document.getElementById('character-img'),
    answerBtns: document.querySelectorAll('.answer-btn'),
    finalResult: document.getElementById('final-result'),
    retryBtn: document.getElementById('retry-btn')
};

// ==========================================
// 関数定義
// ==========================================

function showScreen(screenName) {
    Object.values(screens).forEach(screen => screen.classList.add('hidden'));
    screens[screenName].classList.remove('hidden');
}

function generateRandomQuestions() {
    const shuffled = [...questionPool].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 7);
}

function startGame() {
    const valA = elements.inputA.value || "選択肢A";
    const valB = elements.inputB.value || "選択肢B";

    determinedResult = Math.random() < 0.5 ? valA : valB;
    currentQuestions = generateRandomQuestions();

    currentQuestionIndex = 0;
    isProcessing = false;

    updateQuestion();
    showScreen('game');
}

function updateQuestion() {
    if (currentQuestionIndex < currentQuestions.length) {
        elements.questionText.textContent = currentQuestions[currentQuestionIndex];
        elements.characterImg.src = CHAR_IMAGES.DEFAULT;
        isProcessing = false;
    } else {
        showResult();
    }
}

function handleAnswer() {
    if (isProcessing) return;
    isProcessing = true;

    const randomImg = CHAR_IMAGES.REACTIONS[Math.floor(Math.random() * CHAR_IMAGES.REACTIONS.length)];
    elements.characterImg.src = randomImg;

    currentQuestionIndex++;

    setTimeout(() => {
        updateQuestion();
    }, 800);
}

// ★ここを変更しました：結果表示ロジック
function showResult() {
    // 1. まず画面を切り替える
    showScreen('result');

    // 2. 結果テキストを一旦隠す（空にするかクラスで隠す）
    elements.finalResult.textContent = determinedResult;
    elements.finalResult.classList.remove('pop-in-animation'); // アニメーションリセット
    elements.finalResult.classList.add('invisible'); // 透明にしておく

    // 3. 設定した時間待ってから、アニメーション付きで表示
    setTimeout(() => {
        elements.finalResult.classList.remove('invisible'); // 透明解除
        elements.finalResult.classList.add('pop-in-animation'); // ドン！と表示

        // 結果発表画像にする
        elements.characterImg.src = CHAR_IMAGES.RESULT;
    }, CONFIG.RESULT_DELAY_MS);
}

function resetGame() {
    elements.inputA.value = "";
    elements.inputB.value = "";
    showScreen('menu');
}

// ==========================================
// イベントリスナー設定
// ==========================================

elements.startBtn.addEventListener('click', startGame);

elements.answerBtns.forEach(btn => {
    btn.addEventListener('click', handleAnswer);
});

elements.retryBtn.addEventListener('click', resetGame);