// Axes, axes labels, tick marks, tickmark labels.
var holder;
var temp;
var x;
var barc;
var dekhta;
var y;
var dekhta1 = 2;

function compare(a,b) {
  if (a.Country_Name < b.Country_Name)
    return -1;
  if (a.Country_Name > b.Country_Name)
    return 1;
  return 0;
}

function reset_countries(){
holder = temp.map(x=>x);
console.log(holder)
update(holder);
dekhta1 = 2;

}


function top_10(){

holder = temp.map(x=>x);

if (dekhta1 == 2)
	holder.sort(compare);
else if (dekhta1 == 0)
	holder.sort(function(x,y){return d3.descending(x.Percentage_Rural_Population_2017,y.Percentage_Rural_Population_2017);});
else
	holder.sort(function(x,y){return d3.ascending(x.Percentage_Rural_Population_2017,y.Percentage_Rural_Population_2017);});

console.log(holder)
update(holder);
}

function top_5(){
holder = temp.map(x => x);
holder.sort(function(x,y){return d3.descending(x.Percentage_Rural_Population_2017,y.Percentage_Rural_Population_2017);});
holder.splice(5,5);
if (dekhta1 == 2)
	holder.sort(compare);
else if (dekhta1 == 0)
	holder.sort(function(x,y){return d3.descending(x.Percentage_Rural_Population_2017,y.Percentage_Rural_Population_2017);});
else
	holder.sort(function(x,y){return d3.ascending(x.Percentage_Rural_Population_2017,y.Percentage_Rural_Population_2017);});

console.log(holder)
update(holder);
}

function down_5(){
holder = temp.map(x => x);
holder.sort(function(x,y){return d3.ascending(x.Percentage_Rural_Population_2017,y.Percentage_Rural_Population_2017);});
holder.splice(5,5);
if (dekhta1 == 2)
	holder.sort(compare);
else if (dekhta1 == 0)
	holder.sort(function(x,y){return d3.descending(x.Percentage_Rural_Population_2017,y.Percentage_Rural_Population_2017);});
else
	holder.sort(function(x,y){return d3.ascending(x.Percentage_Rural_Population_2017,y.Percentage_Rural_Population_2017);});

console.log(holder)
update(holder);
}

function reset_alpha(){
holder.sort(compare);
console.log(holder);
update(holder);
dekhta1 = 2;
}

function ascen(){
holder.sort(function(x,y){return d3.ascending(x.Percentage_Rural_Population_2017,y.Percentage_Rural_Population_2017);});
console.log(holder);
update(holder);
dekhta1 = 1;
}


function descen(){
holder.sort(function(x,y){return d3.descending(x.Percentage_Rural_Population_2017,y.Percentage_Rural_Population_2017);});
console.log(holder);
update(holder);
dekhta1 = 0;
}



var barchart = function(data){


var color = d3.scaleOrdinal(d3.schemeCategory10);	
barc = d3.select('#bar')

	


	


var width = 900, height = 1100;

x = d3.scalePoint()
		.range([5,width-10]);

x.domain(data.map(function(d){return d.Country_Name;}));

dekhta = barc.append("g")
dekhta.attr("transform","translate(70," + 560 + ")")
	.call(d3.axisBottom(x))


y = d3.scaleLinear()
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
		.attr("y",15)
		.text("2017 % Rurual Population")
	

return ;
}


function update(just){

	x.domain(just.map(function(d){return d.Country_Name;}));
	var next = barc.selectAll("rect").data(just, function(d) {
		return d.Country_Name;
	});



    	
    next.transition()
	    .duration(3000)
	    .attr('x',function(d) { return (x(d.Country_Name)+55); })
    
    next.exit()
    	.transition()
    	.delay(1000)
    	.style("opacity",0)
    	.remove();

    next.enter()
		//.data(just)
		.append("rect")
        .attr('x', function(d) { return (x(d.Country_Name)+55); })
	    .attr('y', function (d) { return (600 - (600 - y(d.Percentage_Rural_Population_2017))); })
	    .attr('width', function (d) { return [30]; })
	    .attr('height', function (d) { return (560 - y(d.Percentage_Rural_Population_2017)); })
	    .attr("fill",'#1F77B4')
		.transition()
		.delay(1000)
		.attr('x',function(d) { return (x(d.Country_Name)+55); })


	dekhta.transition()
		.duration(3000)
		.attr("transform","translate(70," + 560 + ")")
		.call(d3.axisBottom(x))


		
}



d3.json("world.json").then(function (data) { 
  //console.log(data);
  barchart(data);
  holder = data.map(x=>x);
  temp = data.map(x=>x);
  console.log(holder);
});

