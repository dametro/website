//-------傍点を振る。 <span .bou>で囲っておく -----------
// <span class="bou">部分を通常の文字+透明の文字に変換
function addSesameEmphasis() {
  var elements = document.querySelectorAll(".bou");
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var text = element.textContent.trim();
    var newHTML = "";
    for (var j = 0; j < text.length; j++) {
      newHTML +=
        '<span class ="sesamed-text">' +  //CSSで通常書式に合わせて指定しておく
        text[j] +
        '<span class="sesamed-dummy">' +  //CSSでtextEmphasis:Sesame を指定しておく
        text[j] +
        "</span></span>";
    }
    element.innerHTML = newHTML;
  }
}

addSesameEmphasis();
//------------------------------------------------


//------幅不足のときに優先的に改行してほしい位置を指定------
//改行の単位となる区切り目を、原文で$によって指定しておく。

document.addEventListener("DOMContentLoaded", function() {
  // lbw(Line Break by Word)クラスを持つ全要素を取得
  const separateTargetElements = document.querySelectorAll('.lbw');
  separateTargetElements.forEach(function(lbw) {
    // 元のテキストを取得
    let originalText = lbw.innerHTML;
    // $で区切って、各部分を<span .wbr_part>で囲む
    let partedText = originalText.split('$').map(function(part) {
      return '<span class="lbw_word">' + part + '</span>';
    }).join('');
     
    // 変換後のテキストで置換
    lbw.innerHTML = partedText;
  });
});
//---------------------------------------------------

