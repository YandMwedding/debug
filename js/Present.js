var Present = function() {};
Present.prototype.show = function() {
    // お礼メッセージ
    var message = document.createElement('img');
    var imgUrl = './images/tyanks_message.png';
    message.setAttribute('src', imgUrl);
    message.style.width = '100%';
    var pass = document.createElement('div');
    pass.textContent = '合い言葉は４桁の半角数字'
    var hint = document.createElement('div');
    hint.textContent = 'ヒントは『ニュウセキビ』'

    var button = document.createElement('a');
    var albumUrl = 'http://30d.jp/ay-m-wedding/1';
    button.setAttribute('href', albumUrl);
    button.setAttribute('class', 'square_btn');
    button.textContent = 'WEDDING PHOTO ALBUM';


    // 中央寄せタグ
    var center = document.createElement('center');
    center.appendChild(message);
    center.appendChild(button);
    center.appendChild(pass);
    center.appendChild(hint);

    // DOMに追加
    var content = document.getElementById('content');
    content.appendChild(center);
};

window.Present = Present;