$.fn.vKeyBoard = function() {
	var caps = false;
	$(document).on('click', '.key', function(){
		var value = $(this).find('span').html();

		switch(value) {
			case 'esc':
				break;
			case 'F1':
				break;
			case 'F2':
				break;
			case 'F3':
				break;
			case 'F4':
				break;
			case 'F5':
				break;
			case 'F6':
				break;
			case 'F6':
				break;
			case 'F7':
				break;
			case 'F8':
				break;
			case 'F9':
				break;
			case 'F10':
				break;
			case 'F11':
				break;
			case 'F12':
				break;
			case 'Eject':
				break;
			case 'fn':
				break;
			case 'control':
				break;
			case 'option':
				break;
			case 'command':
				break;
			case 'tab':
				$('.keyArea').append('&nbsp;&nbsp;&nbsp;&nbsp;');
				break;
			case 'Shift':
				break;
			case 'return':
				$('.keyArea').append('<br />');
				break;
			case 'caps lock':
				$('.caps').toggleClass('keydown');
				caps = (caps) ? false : true;
				break;
			case 'Delete':
				var content = $('.keyArea').html().slice(0, -1);
				$('.keyArea').html(content);
				break;
			default:
				if (caps) {
					$('.keyArea').append(value.toUpperCase());
				} else {
					$('.keyArea').append(value);
				}
		}
		return false;
	});
	$('.shift').mousedown(function() {
		caps = true;
	});
	$('.shift').mouseup(function() {
		caps = false;
	});
};

$.fn.vKeyBoard();