// Обрезаем кол-во текста в post-description по высоте
var p=$('.post-description p');
var divh=$('.post-description').height();
while ($(p).outerHeight()>divh) {
    $(p).text(function (index, text) {
        return text.replace(/\W*\s(\S)*$/, '...');
    });
}
