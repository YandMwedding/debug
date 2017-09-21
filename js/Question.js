var Question = function() {};
Question.prototype.show = function() {
    // 問題番号
    var index = document.createElement('img');
    var imgUrl = './images/q_j.png';
    index.setAttribute('src', imgUrl);
    // 問題文
    var text = document.createElement('h1');
    text.textContent = '新郎の下の名前は？';
    
    // 中央寄せタグ
    var center = document.createElement('center');
    center.appendChild(index);
    center.appendChild(text);
    
    // DOMに追加
    var content = document.getElementById('content');
    content.appendChild(center);
};

window.Question = Question;