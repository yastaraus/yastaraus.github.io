// Модальное окно

// открыть по кнопке
$('.js-btn-window').click(function() {
	$('.js-overlay-window').fadeIn();
	$('.js-overlay-window').addClass('disabled');
});

// закрыть на крестик
$('.js-close-window').click(function() {
	$('.js-overlay-window').fadeOut();
});

// закрыть по клику вне окна
$(document).mouseup(function (e) {
	var popup = $('.js-popup-window');
	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
		$('.js-overlay-window').fadeOut();
	}
});

// открыть по таймеру
// $(window).on('load', function () {
// 	setTimeout(function(){
// 		if($('.js-overlay-window').hasClass('disabled')) {
// 			return false;
// 		} else {
//
// 			$(".js-overlay-window").fadeIn();
// 		}
// 	}, 5000);
// });
