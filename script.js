function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#blah')
                .attr('src', e.target.result)
                .width(500)
                .height(500);
        };

        reader.readAsDataURL(input.files[0]);
    }
}

var options =
[
  {
    "text"  : "C++"
  },
  {
    "text"  : "Java"
  },
  {
    "text"  : "Python"
  },
  {
    "text"  : "HTML"
  },
  {
    "text"  : "JavaScript"
  }
];
var selectbox=document.getElementById("selectbox");
for(var i=0;i<options.length;i++){
	selectbox.options.add(new Option(options[i].text));
}

