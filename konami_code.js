const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

var i = 0;

 function init(e) {
  //
  // const key = parseInt(e.detail || e.which)
  // if (key === code[i]){
  //   i++;
  //
  //   if (i === code.length -1 ){
  //     alert("Cheat code entered.");
  //     i = 0;
  //   }
  // }else{
  //   i = 0;
  // }
  //

}

// document.addEventListener('keydown', init);

document.addEventListener('keydown',function init(e) {

  const key = parseInt(e.detail || e.which)
  if (key === code[i]){
    i++;

    if (i === code.length -1 ){
      alert("Cheat code entered.");
      i = 0;
    }
  }else{
    i = 0;
  }


})
