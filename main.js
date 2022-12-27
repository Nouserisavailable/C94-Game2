const { fabric } =require("./fabric");

// Create canvas variable
var canvas = new fabric.Canvas ('myCanvas');

//Set initial positions for ball and hole images.
ball_y=0;
ball_x=0;
hole_y=400;
hole_x=800;

block_image_width = 5;
block_image_height = 5;

function load_img()
{
	// write code to Upload golf image on the canvas
	new_image();
	fabric.Image.fromURL="golf-h.png",function(img);
	hole_obj = img;
	hole_obj.scaleToWidth(50);
	ball_obj.scaleToHeight(50);
    hole_obj.set({
		top : hole_y,
		left : hole_x
});
canvas.add(hole_obj);

}

function new_image()
{
	
	{
		// write code to Upload golf image on the canvas
		new_image();
		fabric.Image.fromURL "ball.png", function(img);
		ball_obj = img;
		ball_obj.scaleToWidth(50);
		ball_obj.set({
			top : ball_y,
			left : ball_x
	});
	canvas.add(ball_obj);
	
	}
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
	if((ball_x==hole_x)&&(ball_y==hole_y))
	{
		canvas.remove(ball.obj);
		document.getElementById("hd3").innerHTML="You made the goal!";
		document.getElementById("myCanvas").style.borderColor="red";
	}
	
	else
	{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(ball_y >=10)
		{
			ball_y = ball_y + block_image_height;
			console.log("block_image_height =" + block_image_height)
			console.log("When up arrow key is pressed, Y = "+ ball_x + ", X = "+ ball_y )
		}
	}

	function down()
	{
		if(ball_y <=450)
		{
			ball_y = ball_y + block_image_height;
			console.log("block_image_height =" + block_image_height)
			console.log("When down arrow key is pressed, X = "+ ball_x + ", Y = "+ ball_y )
		}
	}

	function left()
	{
		if(ball_x >5)
		{
			ball_y = ball_y + block_image_width;
			console.log("block_image_width =" + block_image_width)
			console.log("When left arrow key is pressed, X = "+ ball_y + ", Y = "+ ball_x )
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			ball_y = ball_y + block_image_width;
			console.log("block_image_width =" + block_image_width)
			console.log("When left arrow key is pressed, X = "+ ball_y + ", Y = "+ ball_x )
		}
	}
	
}

