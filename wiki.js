var x=0;
var j=0;
var s='';
var url = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&search=';
$('.flex-container').hide()
$('#icon-input').click(function() {
	if(x<1){
		$('#search-icon').remove()
		$('#click-icon').remove()
		$('.flex-container').show()
		console.log('done')
	}
	x+=1;
	console.log("It's working")
})

$('#search-txt').keypress(function(event) {
	console.log(event)
	if (event.which === 13) {
		var t='';
		s= $('#search-txt').val()
		$.getJSON(url+s, function(data) {
			console.log(data)
			for(var i=1;i<Object.keys(data['1']).length;i++) {
				j=i;
				i = i.toString()
				t+='<tr id="result'+j+'"><td><a href="'+data['3'][i]+'" target="_blank"><strong>'+data['1'][i]+'</strong></a><br><br><p>'+data['2'][i]+'</p></td></tr>';
			}
			$('#label-result').html('<h4>The top 10 search results are</h4>')
			$('#m-search').removeClass('search')
			$('#result').html(t)
		})
	}
	$('.btn-clear').click(function() {
		$('#search-txt').val("");
	})
})

