var yyy = document.getElementById('xxx');
var context = yyy.getContext('2d');

context.fillStyle = 'red';
context.fillRect(0, 0, 100, 100);   // 填充矩形
context.strokestyle = 'black';
context.strokeRect(20,20,60,60);    // 描边矩形
context.clearRect(40,40,20,20);     // 清除矩形

context.fillStyle = 'green';
context.beginPath();                // 填充三角形
context.moveTo(240,240);
context.lineTo(300,240);
context.lineTo(300,300);
context.fill();

context.strokestyle = 'black';
context.beginPath();                // 描边三角形
context.moveTo(240,240);
context.lineTo(300,180);
context.lineTo(300,300);
context.closePath();
context.stroke();


context.fillStyle = 'orange';
context.beginPath();                // 填充圆弧
context.arc(150,150,40,0,Math.PI);
context.fill();

context.strokeStyle = 'black';
context.beginPath();                // 描边圆弧
context.arc(150,150,40,0,Math.PI*2);
context.stroke();