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

    var $pName = document.getElementById("pName");
    var $pLanguage = document.getElementById("pLanguage");
    var $category = document.getElementById("category");
    var $imagesLink = document.getElementById("imagesLink");
    var $videoLink = document.getElementById("videoLink");
    var $price = document.getElementById("price");
    var $info = document.getElementById("info");
    var $pPrivate = document.getElementById("pPrivate");

    
}