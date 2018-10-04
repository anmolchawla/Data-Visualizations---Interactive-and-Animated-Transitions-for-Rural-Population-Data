// Axes, axes labels, tick marks, tickmark labels.


var barchart = function(data){


var color = d3.scaleOrdinal(d3.schemeCategory10);	
var barc = d3.select('#bar')
	


	


var width = 900, height = 1100;

var x = d3.scalePoint()
		.range([5,width-10]);

x.domain(data.map(function(d){return d.Country_Name;}));
barc.append("g")
		.attr("transform","translate(70," + 560 + ")")
		.call(d3.axisBottom(x))


var y = d3.scaleLinear()
		.range([560,20]);

y.domain([0,d3.max(data, function(d) {return d.Percentage_Rural_Population_2017;}) ]);

barc.append("g")
.attr("transform","translate(55," + 0 + ")")
.call(d3.axisLeft(y));


barc.selectAll('rect')
	.data(data)
	.enter()
    .append('rect')
	.attr('x', function(d) { return (x(d.Country_Name)+55); })
	.attr('y', function (d) { return (600 - (600 - y(d.Percentage_Rural_Population_2017))); })
	.attr('width', function (d) { return [30]; })
	.attr('height', function (d) { return (560 - y(d.Percentage_Rural_Population_2017)); })
	.attr("fill", d=>color(d.Rural_Population_2017));


barc.append("text")
		.attr("x",-350)
		.attr("y",17)
		.attr("transform","rotate(-90)")
		.text("% Rural Population 2017")

barc.append("text")
		.attr("x",450)
		.attr("y",594)
		.text("Country")

barc.append("text")
		.attr("x",412)
		.attr("y",30)
		.text("2017 % Rurual Population")
	

return ;
}



d3.json("world.json").then(function (data) { 
  //console.log(data);
  barchart(data);
});

