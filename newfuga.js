touchStart = function (elm) {
  touchStartEvent = new TouchEvent("touchstart", { bubbles: true });
  elm.dispatchEvent(touchStartEvent);
};

touchMove = function (elm, moveElm) {
  if (!moveElm) return;
  rect = moveElm.getBoundingClientRect();
  X = rect.x + rect.width / 2;
  Y = rect.y + rect.height / 2;
  let touch = new Touch({
    identifier: Date.now(),
    target: elm,
    clientX: X,
    clientY: Y,
    force: 1,
    pageX: X,
    pageY: Y,
    radiusX: 41.66666793823242,
    radiusY: 41.66666793823242,
    rotationAngle: 0,
  });
  touchMoveEvent = new TouchEvent("touchmove", {
    bubbles: true,
    touches: [touch],
  });
  elm.dispatchEvent(touchMoveEvent);
};

touchEnd = function (elm) {
  touchEndEvent = new TouchEvent("touchend", { bubbles: true });
  elm.dispatchEvent(touchEndEvent);
};

var aiueo = "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもや（ゆ）よらりるれろわをんー　、。？！".split(
  ""
);
var dakuon = "がぎくげござじずぜぞたぢづでどばびぶべぼ";
var komoji = "ゃゅょ";

function charToIndex(char) {
  moveIndex = aiueo.indexOf(char);
  parentIndex = parseInt(moveIndex / 5);
  startElement = document.getElementsByClassName("css-xx1yz5-buttonStyle")[
    parentIndex
  ];
  moveElm = document.getElementsByClassName("css-2rzvda-wingStyle")[moveIndex];

  if (!moveElm) {
    if (char === "が") charToIndex("か");
    else if (char === "ぎ") charToIndex("き");
    else if (char === "ぐ") charToIndex("く");
    else if (char === "げ") charToIndex("け");
    else if (char === "ご") charToIndex("こ");
    else if (char === "ざ") charToIndex("さ");
    else if (char === "じ") charToIndex("し");
    else if (char === "ず") charToIndex("す");
    else if (char === "ぜ") charToIndex("せ");
    else if (char === "ぞ") charToIndex("そ");
    else if (char === "だ") charToIndex("た");
    else if (char === "ぢ") charToIndex("ち");
    else if (char === "づ") charToIndex("つ");
    else if (char === "で") charToIndex("て");
    else if (char === "ど") charToIndex("と");
    else if (char === "ば") charToIndex("は");
    else if (char === "び") charToIndex("ひ");
    else if (char === "ぶ") charToIndex("ふ");
    else if (char === "べ") charToIndex("へ");
    else if (char === "ぼ") charToIndex("ほ");
    else if (char === "ゃ") charToIndex("や");
    else if (char === "ゅ") charToIndex("ゆ");
    else if (char === "ょ") charToIndex("よ");
    else if (char === "っ") charToIndex("つ");

    startElement = document.getElementsByClassName(
      "css-xx1yz5-buttonStyle"
    )[13];
    moveElm = document.getElementsByClassName("css-2rzvda-wingStyle")[61];
    touchEmulate(startElement, moveElm);
  } else {
    touchEmulate(startElement, moveElm);
  }
}

function touchEmulate(startElement, moveElm) {
  touchStart(startElement);
  touchMove(startElement, moveElm);
  touchEnd(startElement);
}

answer =
  "よーーーいすたーと！！ぞーんちゃれんじのはじまりだあかさたなはまやらわそこのおとこのこのこころさかなはさかななぜこんなこと？してるのか？そうかんがえはじめたあなたはきっともうぞーんじょうたいここまででそうもうだいたいひゃくもじなかなかやるなごほうびのぼーなすぞーーーーーーーーーーーーーーーーーーーーーーーん！！！！！！！！！けた";

answer.split("").forEach((val) => {
  charToIndex(val);
});
