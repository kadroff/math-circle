function fire(){
  // Берем значения из поля ввода с id=formula
  var a = document.getElementById('a').value;
  var b = document.getElementById('b').value;
  // Высчитываем градусы
  var pi = 180;
  var number = a*pi/b;

  while (number > 360) {
    number = number - 360;
  }

  var coordinates = {0: "1; 0", 30: "√3/2; 1/2", 45:"√2/2; √2/2", 60:"1/2;√3/2", 90:"0;1",
                     120:"-1/2; √3/2",135:"-√2/2;√2/2", 150:"-√3/2;1/2", 180:"-1;0",
                     210:"-√3/2;-1/2", 225:"-√2/2;-√2/2", 240:"-1/2;-√3/2", 270:"0,-1",
                     300:"1/2;-√3/2", 315:"√2/2;-√2/2", 330:"-√3/2;-1/2" };

  if (coordinates[number]){
    alert(coordinates[number]);
  } else {
    alert("Введена неверная точка");
  }
}
