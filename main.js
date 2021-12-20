 canvas=document.getElementById("myCanvas");
 ctx=canvas.getContext("2d");

 rover_width=100;
 rover_height=90;
 rover_x=10;
 rover_y=10;

 rover_image="rover.png";

 var nasa_img=["NASA_img_1.jpg","NASA_img_2.jpg","NASA_img_3.jpg","NASA_img_4.jpg"];
 random_no=Math.floor(Math.random()*4);
 background_image=nasa_img[random_no];

 function add(){
     bg_imgTag=new Image();
     bg_imgTag.onload=uploadBackground;
     bg_imgTag.src=background_image;

     rover_imgTag=new Image();
     rover_imgTag.onload=uploadRover;
     rover_imgTag.src=rover_image;
 }

 function uploadBackground(){
     ctx.drawImage(bg_imgTag, 0 , 0,canvas.width,canvas.height);
    
 }
  function uploadRover(){
      ctx.drawImage(rover_imgTag, rover_x,rover_y,rover_width,rover_height);
  }
   
window.addEventListener("keydown", my_key_down);

function my_key_down(e){
    keyPressed=e.keyCode;

    if(keyPressed == '37'){

        left();
        console.log("left Key Pressed");

    }
    if(keyPressed == '38'){
        up();
        console.log("Up Key Pressed");
        
    }
    if(keyPressed == '39'){
        right();
        console.log("Right Key Pressed");
        
    }
    if(keyPressed == '40'){
        down();
        console.log("Down Key Pressed");
        
    }
}
function up(){
    if(rover_y >= 0){
        rover_y=rover_y-10;
        console.log("Up key is pressed, x =" + rover_x + "y =" + rover_y);
        uploadBackground();
        uploadRover();
    }
}
function left(){
    if(rover_x >= 0){
        rover_x=rover_x-10;
        console.log("Left key is pressed, x =" + rover_x + "y =" + rover_y);
        uploadBackground();
        uploadRover();
    }
}
function right(){
    if(rover_x <= 700){
        rover_x=rover_x+10;
        console.log("Right key is pressed, x =" + rover_x + "y =" + rover_y);
        uploadBackground();
        uploadRover();
    }
}
function down(){
    if(rover_y <= 500){
        rover_y=rover_y+10;
        console.log("Down key is pressed, x =" + rover_x + "y =" + rover_y);
        uploadBackground();
        uploadRover();
    }
}
