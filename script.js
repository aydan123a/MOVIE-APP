let movies=[
{
title:"Avatar",
year:2020,
poster:"avatar.jpg",
info:"Action movie"
},
{
title:"Batman",
year:2021,
poster:"batman.jpg",
info:"Hero movie"
},
{
title:"Spider Man",
year:2022,
poster:"spiderman.jpg",
info:"Adventure movie"
}
];


function showMovies(){

let search=document.getElementById("search").value.toLowerCase();

let year=document.getElementById("year").value;

let result=movies.filter(movie=>{

return movie.title.toLowerCase().includes(search)
&&(year=="all"||movie.year==year);

});


let div=document.getElementById("movies");

div.innerHTML="";


result.forEach(movie=>{

div.innerHTML+=`

<div class="movie">

<img src="${movie.poster}">

<h2>${movie.title}</h2>

<p>Year: ${movie.year}</p>

<p>${movie.info}</p>

</div>

`;

});

}


showMovies();
