var poemIndex = 0;
var poemArray = [];
var wordIndex = 0;
var wordArray = [];
var screen = document.getElementById("poem");
var secondScreen = "";
var thirdScreen = "";
var writingScreen = "";
var letterBool = false;
var spaceBool = true;
var opacityInterval = 0;
var opacity = 0;
var riseInterval = 0;
var margin = 720;
var go = "";

var poemLength = 0;
var opacityStep = 0;
var transformStep = 0;
var sunPos = 360
var cloudsOp = 0;


var loaded = 0;
var loadOp = 0;

function begin(numScreens, pluggedPoem, trueScreen, second, third)
{
	if(pluggedPoem != undefined)
	{
		poem = pluggedPoem;
		screen = document.getElementById(trueScreen);
		if (numScreens > 1)
		{
			secondScreen = document.getElementById(second);
			if (numScreens > 2)
			{
				thirdScreen = document.getElementById(third)
			}
		}
	}
	writingScreen = screen;
	if (loadOp > 0)
	{
		loadOp = loadOp - .01;
		loader.style.opacity = loadOp;
	}
	else if (go == "")
	{
		clearInterval(go);
		screen.scrollTop = screen.scrollHeight;
		generateArray("poem");
		go = setInterval(controller, 200);
	}
}

function generateArray (type)
{
	if (type == "poem")
	{
		poemArray = poem.split(" ");
		poemIndex = 0;
		var opacityInterval = 1 / poemArray.length;
		var riseInterval = 720 / poemArray.length;
		poemLength = poemArray.length;
		opacityStep = 1 / poemLength;
		transformStep = 720 / poemLength;
	}
	else if (type == "word")
	{
		wordArray = poemArray[poemIndex].split("");
		wordIndex = 0;
	}
	else
	{
		screen.innerHTML = "<b>Critical Error: Improperly called generateArray()</b>";
	}
}



function readPoem()
{
	var read = poemArray[poemIndex]
	var write = true;
	if (read == "~lttr~")
	{
		letterBool = true;
		write = false;
	}
	else if (read == "~/lttr~")
	{
		letterBool = false;
		write = false;
	}
	else if (read == "~space~")
	{
		spaceBool = true;
		write = false;
	}
	else if (read == "~/space~")
	{
		spaceBool = false;
		write = false;
	}
	else if (read == "~wait~")
	{
		write = false;
	}
	else if (read == "~slow~")
	{
		clearInterval(go);
		go = setInterval(controller , 1000);
		write = false;
	}
	else if (read == "~fast~")
	{
		clearInterval(go);
		go = setInterval(controller , 100);
		write = false;
	}
	else if (read == "~zoom~")
	{
		clearInterval(go);
		go = setInterval(controller , 1);
		write = false;
	}
	else if (read == "~normal~")
	{
		clearInterval(go);
		go = setInterval(controller , 200);
		write = false;
	}
	else if (read == "~clear~")
	{
		writingScreen.innerHTML = "";
		write = false;
	}
	else if (read == "~stop~")
	{
		write = false;
		clearInterval(go);
	}
	else if (read == "~first~")
	{
		write = false;
		writingScreen = screen;
	}
	else if (read == "~second~")
	{
		write = false;
		writingScreen = secondScreen;
	}
	else if (read == "~third~")
	{
		write = false;
		writingScreen = thirdScreen;
	}
	if (write == true)
	{
		if (letterBool == true)
		{
			generateArray("word");
		}
		writeScreen();
	}
	else
	{
		poemIndex = poemIndex + 1;
		if (letterBool == true)
		{
			generateArray("word")
		}
	}
}

function writeScreen()
{
	if (letterBool == true && wordIndex <= wordArray.length - 1)
	{
		writingScreen.innerHTML += wordArray[wordIndex];
		wordIndex = wordIndex + 1;
	}
	else if (letterBool == true && wordIndex > wordArray.length - 1)
	{
		writingScreen.innerHTML += " ";
		poemIndex = poemIndex + 1;
		readPoem();
	}
	else if (letterBool == false && spaceBool == false && poemIndex <= poemArray.length - 1)
	{
		writingScreen.innerHTML += poemArray[poemIndex];
		poemIndex = poemIndex + 1;
	}
	else if (letterBool == false && spaceBool == true && poemIndex <= poemArray.length - 1)
	{
		writingScreen.innerHTML += poemArray[poemIndex] + " ";
		poemIndex = poemIndex + 1;
	}
	else if (poemIndex > poemArray.length - 1)
	{
		clearInterval(go);
	}
}

function controller()
{
	screen.scrollTop = screen.scrollHeight;
	if (letterBool == true)
	{
		writeScreen();
	}
	else
	{
		readPoem();
	}
}