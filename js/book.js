var sname = document.getElementById("siteName");
var surl = document.getElementById("siteUrl");
var srate = document.getElementById("star-input");
 var errorElement = document.getElementById("removeit");

var i;
var array;
if(localStorage.getItem('books')!==null){
array=JSON.parse(localStorage.getItem('books'));
display();

}else{
    array=[];
}

// function validateInput(inputValue) {
  

//   if (inputValue.value === "") {
//     errorElement.classList.remove("d-none");
//   } else {
//     errorElement.classList.add("d-none");
//   }
// }


function addbook(){
    console.log(sname.value);
        console.log(surl.value);
var group = {
  name: sname.value,
  url: surl.value,
  rateing: srate.value
};
array.push(group);
console.log(array);
display();
 localStorage.setItem('books',JSON.stringify(array));
 validateInput();
 clearInput();
 


}
function display(){
    var boxx=``;
    for(var i=0;i<array.length;i++){
        boxx += `<tr>
            <td>${i + 1}</td>
            <td>${sname.value}</td>
            <td><button  onclick="viewTab(${i})" class="btn btn-outline-info fa fa-eye">view</button></td>
            <td><button onclick="deleteBook(${i})" class="btn btn-outline-danger pe-2 fa fa-trash py-2">delete</button></td>
            <td class='zrate'>${array[i].rateing}</td>
          </tr>`;
    }
    document.getElementById("view-here").innerHTML=boxx;
}
function clearInput(){
    sname.value=null;
    surl.value=null;
    srate.value=null;


}
function deleteBook(index){
    array.splice(index,1);
    display();
    localStorage.setItem('books',JSON.stringify(array));
    var index=i;
}
function closeTap(){
    removetabb.classList.add("d-none");
}

function validateInput(element){

    console.log(element.value,element.id)
    var regex={
         siteName:/^.{3,}$/,
         siteUrl : /^.*\.com$/
    }

    if(    regex[element.id].test(element.value)==true){
       
      element.classList.add("is-valid");
      element.classList.remove("is-invalid");
      element.nextElementSibling.classList.replace('d-block', 'd-none')
    }else{
     element.classList.remove("is-valid");
     element.classList.add("is-invalid");
      element.nextElementSibling.classList.replace("d-none","d-block");

}

}
 

function viewTab(v) {
  var url = surl.value;  
  window.open(url);
}