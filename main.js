/*
----------TO--DO------------
add window to add item and serving values
    -window box
    -select recipe (search box)
    -no. servings
    -add new recipe
add week number
add new week
delete week
print pages
save as
side menu   /
    -box    /
    -arrow symbol   /
    -menu items /
flexbox buttons /
recipe obj
    -ingredients
        -Quantity
        -measurment
        -food item
            -use by
            -nutrition value
        -is frozen
    -eat by
    -servings
hold extra servings ???
*/

//------------------------------------init-----------------------------------------
console.log('start');
var i = 0;

//-------------------------------event handlers------------------------------------

//when new week is pressed
document.querySelector("#NW-btn").addEventListener('click', e =>{
    console.log('click')
})


//when delete week is pressed
document.querySelector("#DW-btn").addEventListener('click', e =>{

})

//when Print is pressed
document.querySelector("#Print-btn").addEventListener('click', e =>{

})

// when saved id pressed
document.querySelector("#Save-btn").addEventListener('click', e =>{

})

//when prev button is pressed
document.querySelector("#Prev-btn").addEventListener('click', e =>{

})

//when next button is pressed
document.querySelector("#Next-btn").addEventListener('click', e =>{

})

//when table box is pressed
document.querySelectorAll("#Recipe-btn").forEach(element => {
    element.addEventListener('click', e => {

        console.log(document.querySelector(".recipe-box"));
        
        document.querySelector(".recipe-box").style.display = 'grid';
        //display back btn
        document.querySelector(".back-btn").style.display = 'block';
        
    })    
});

document.querySelectorAll(".back-btn").forEach(element => {
    element.addEventListener('click', e => {
        document.querySelector(".recipe-box").style.display = 'none';
        document.querySelector(".back-btn").style.display = 'none';    
    })    
});
