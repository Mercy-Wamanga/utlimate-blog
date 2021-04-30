
var blogTitle = document.getElementById('blog-title');
var blogPost=document.getElementById('blog-content');
var InputPosts=document.querySelector('.blog-group-content');

//Add a post.

function addPost(){

    if(blogTitle.value.length > 0 || blogPost.value.length > 0 )
    {

        var ourLi = document.createElement("li");
        ourLi.setAttribute("class", "list-group-item");
       // let btnDel= `<button class='del-btn btn'><i class="fa fa-trash"></button>`
       // let btnEdit=`<button class='edit-btn btn'><i class="fa fa-edit"></button>`
        ourLi.innerHTML =  "<h4>" +blogTitle.value+ "</h4>" + "<br>" + blogPost.value +"<br>"+`<button class='del-btn btn'><i class="fa fa-trash"></button>` + `<button class='edit-btn btn'><i class="fa fa-edit"></button>`;
        InputPosts.appendChild(ourLi);
    
    blogTitle.value="";
    blogPost.value="";

    removeBtn();

    }else{
        alert("Empty field not allowed")
    }
       
}

//Remove an Item.

function removeBtn(){
    let removeBtns = document.querySelectorAll(".del-btn");

    removeBtns.forEach(function (button) {
        button.addEventListener("click", function () {
          this.parentElement.remove();
        });
      });
}

//Edit an Item.
function editBtn(){
    let editBtns = document.querySelectorAll(".edit-btn");

    var editItem = this.parentElement;

    
}