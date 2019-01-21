// alert('Yoo-hoo!')

var beasts = ['penguin1', 'penguin2', 'penguin3', 'penguin4', 'penguin5', 'penguin6', 'penguin7', 'penguin8', 'yeti']

function shuffleArray(array) {
	for (var i = array.length - 1; i > 0; i--) {
		var j = Math.floor(Math.random() * (i + 1));
		var temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
}

var render = function(array){
	shuffleAttay(array)
	for(i=0; i<array.length; i++){
		$('#title').after(`<div class='${beasts[i]}'></div>`)
	}
}