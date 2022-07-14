const container = document.querySelector('#container'); 
var my_grid = document.querySelector('#my-grid');
var reset_btn = document.querySelector('#btn-reset');
var choice = null;
var clicked = false;


document.addEventListener('DOMContentLoaded', function() {
    var CHOICE = window.prompt("How big should this grid be? Give a single interger", 16);
    choice = Number(CHOICE);
    createGrid(choice);
})

reset_btn.addEventListener('click', function() {
    reset();
    createGrid(choice);
})





function createGrid(width) {
    my_grid.style.gridTemplateColumns = "repeat("+width+ ", minmax(10px,1fr))";
    my_grid.style.gridTemplateRows = "repeat("+width+", minmax(10px,1fr))";
    add_a_item(width);
    console.log(my_grid)
    container.appendChild(my_grid);
}


function add_a_item(width){
    for(let i = 1; i < width+1; i++){
        for (let j = 1; j < width+1; j++){
            var item = document.createElement('div');
            item.className = 'item_'+i+","+j +" slide_down" + " grid_element";
            item.style.gridRow= i +"/"+ "span 1";
            item.style.gridColumn= j +"/"+ "span 1 ";
            item.style.border = "1px dotted #7D8D72";
            item.addEventListener('mousedown',  color_change);
            item.addEventListener('mousedown',  function(){
                clicked=true;
            });
            item.addEventListener('mouseup', function(){
                clicked = false;
            });
            item.addEventListener('dblclick', revert);
                    
            item.addEventListener('mouseover',  function(){
                if(clicked){
                    this.style.backgroundColor = "#F1B602";
                }
            });
            my_grid.appendChild(item)
        }
    }
}



function revert(){
    this.style.backgroundColor = "#F4E8C2";
}

function color_change(){
    this.style.backgroundColor = "#F1B602";
}


function reset(){
    my_grid.innerHTML = "";
   
}





