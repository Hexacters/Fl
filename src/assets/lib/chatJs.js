

$( document ).ready(function() {

	let myChart = document.getElementById('myChart');
	console.log(myChart)

	let barChat = new Chart(myChart, {
		type: 'bar',
		data: {
			labels: ['new, test, low'],
			datasets:[{
				label: ['analysis'],
				data:[
					100,233,223
				]
			}]
		},
		options:{
			
		}
	});


});