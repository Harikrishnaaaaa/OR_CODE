function func() {
  var x = document.getElementById("input").value;
  var url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(x)}`; // Encode the input

  var img = document.getElementById("img");

  img.src = url;
  console.log(url);
}
