var f=document.getElementById('file'),g=document.getElementById('gal');
document.getElementById('add').onclick=function(){f.click()};
f.onchange=function(){
  var e=document.getElementById('empty');if(e&&f.files.length)e.remove();
  Array.prototype.forEach.call(f.files,function(file){
    var i=new Image();i.src=URL.createObjectURL(file);i.alt='Shop photo';g.appendChild(i);
  });
};


function toggleVideos() {
    const videos = document.getElementById("instagramVideos");

    if (videos.style.display === "none" || videos.style.display === "") {
        videos.style.display = "block";
    } else {
        videos.style.display = "none";
    }
}




