function table1() {

}

function table2() {

}
onload = function home() {
    //Get data from sever
    table1(); //Reder data on table1
    table2(); //Reder data on table1
}

function createRequest() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
      if(this.readyState == 4 && this.status == 200){
        document.getElementById("txtStatus").innerHTML = this.responseText;
      }
    };

    var $pName = document.getElementById("pName").value;
    var $pLanguage = document.getElementById("pLanguage").value;
    var $category = document.getElementById("category").value;
    var $imagesLink = document.getElementById("imagesLink").value;
    var $videoLink = document.getElementById("videoLink").value;
    var $price = document.getElementById("price").value;
    var $info = document.getElementById("info").value;
    var $pPrivate = document.getElementById("pPrivate").value;

    
}