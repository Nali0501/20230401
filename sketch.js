let ctx;
let points = [[3,3],[5,-1],[6,-2],[8,0],[10,4],[12,8],[13,12],[13,16],[13,16],[15,15],[19,15],[22,15],[24,15],[26,16],[25,14],[23,10],[22,6],[19,5],[17,3],[16,1],[15,-3],[15,-7],[13,-8],[11,-10],[9,-12],[8,-14],[7,-18],[5,-16],[1,-14],[0,-14],[0,-14],[-4,-15],[-6,-17],[-8,-15],[-10,-13],[-11,-12],[-12,-12],[-13,-12],[-14,-13],[-17,-15],[-18,-15],[-22,-13],[-24,-12],[-25,-12],[-27,-13],[-25,-11],[-23,-8],[-21,-5],[-19,0],[-15,-2],[-12,-4],[-10,-5],[-7,-6],[-4,-6],[-1,-6],[-1,-3],[-2,1],[0,-1],[1,0],[2,0],[3,1],[3,3]]; 
  //list資料 

  function setup() { //只會執行一次的函數  
    createCanvas(windowWidth, windowHeight); //設定一個畫布，寬為整個視窗的寬度windowWidth，高度為整個視窗的高度windowHeight  //把points 內的值都*50  
    for (let i = 0; i < points.length; i++) {
      for (let j = 0; j < points[i].length; j++) {
        points[i][j] = points[i][j] * 15;} //第一行的數值會* 15
      }
      ctx = canvas.getContext('2d');
      ctx.lineWidth = 10; //線條粗細調整
        gradientLine(ctx, 3*15, 3*15, 10*15, 4*15, 'white', 'lime')
    }
    
    function draw() {
    background(0)
    text("淡江大學教育科技系 陳品潔",windowWidth/10,windowHeight/8)
    fill('lime')
    textSize(50)
    strokeWeight(10) //調整線條粗細
    translate(width/2, height/2); //圖形會出現在視窗正中央
    scale(1, -1);
     for (let i = 0; i < points.length-1; i++) {
    line(points[i][0], points[i][1], points[i+1][0], points[i+1][1]); 
    }
    line(points[points.length-1][0], points[points.length-1][1], points[0][0], points[0][1]); 
    //把最後一點與第一點的連線
    }    

function gradientLine(ctx, x1, y1, x2, y2, c1, c2) {
    const gradient = ctx.createLinearGradient(x1, y1, x2, y2);
    gradient.addColorStop(0, c1);
    gradient.addColorStop(1, c2);
    ctx.strokeStyle = gradient;
  
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
  }