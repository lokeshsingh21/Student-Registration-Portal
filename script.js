
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#image')
                .attr('src', e.target.result)
                .width(500)
                .height(500);
        };
        reader.readAsDataURL(input.files[0]);
    }
}

function addSkill(input){
  $("#skill").append("<li><span><i class='fa fa-trash'></i></span> "+input.value+"</li>");
  var mySelect = document.getElementById("selectbox");
  mySelect.selectedIndex=0;
}

$("#skill").on("click","span",function(event){
  $(this).parent().fadeOut(500,function(){
    $(this).remove();
  });
});