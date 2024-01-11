var listitems = document.querySelectorAll('.listitems');

const submiti = document.getElementById('submit');
let listcontainer = document.getElementById('listcontainer');
let cross=document.getElementsByClassName("cross")
function stupcrosseventlistener(cross)
{
    for(let i=0;i<cross.length;i++) 
{
        cross[i].addEventListener('click',()=>{
        console.log("cross[i].parentNode.parentNode")
        cross[i].parentNode.parentNode.style.display="none"
        savedata();
        })
}
}
function setupImageClickListeners(images)
{
    images.forEach((image)=>{
        image.addEventListener('click',()=>
        {
            console.log("hello");
            const imagepath=new URL(image.src).pathname;
            console.log(new URL(image.src))
            if(imagepath!="/image/unchecked.png")
            {
                image.src='image/unchecked.png';
                image.parentNode.style.textDecoration='none';
                image.parentNode.style.color='black';
                image.parentNode.parentNode.style.border = "2"+"px solid black";
                savedata();
            }
            else {
                image.parentNode.style.textDecoration='line-through';
                image.parentNode.style.color='red';
                image.parentNode.parentNode.style.border = "2"+"px solid red";
                image.src='image/checked.png';
                savedata();
            }

        }
        )
});
}


submiti.addEventListener('click',()=>{
const inpcontent=document.getElementById('input').value;
const content=`<div class="listitems">
<li> <img src="image/unchecked.png" id="checked" class="checked">${inpcontent}
<img src='image/cross.png' id="cross" class="cross"></li>
</div>`;

const pastcontent=listcontainer.innerHTML;
listcontainer.innerHTML=content+pastcontent;

images = document.querySelectorAll('img#checked');
cross = document.querySelectorAll('img#cross');
setupImageClickListeners(images);
stupcrosseventlistener(cross);
savedata();
});


function savedata()
{
    localStorage.setItem('data1',listcontainer.innerHTML);
}
function showtask()
{
    listcontainer.innerHTML=localStorage.getItem('data1');
    images = document.querySelectorAll('img#checked');
    cross = document.querySelectorAll('img#cross');
    setupImageClickListeners(images);
    stupcrosseventlistener(cross);
    
}
showtask();
savedata();
console.log(localStorage.getItem('data1'))

// console.log(localStorage.getItem('data'))







