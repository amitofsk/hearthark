//import {Skyflow} from "skyflow-node";
//import crypto from "crypto";
var express = require('express');
var crypto = require('crypto');
var Skyflow = require('skyflow-node');

var router = express.Router();
var fft=require('fft-js').fft;
var A=require('arcsecond');
var B=require('arcsecond-binary');
var fs=require('fs');
var WaveFile=require('wavefile').WaveFile;
var path=require('path');
var http=require('http');
var axios=require('axios');

var app=express;
//app.engine('jsx', require('ejs').renderFile);


//Today's skyflow bearer token. This changes each day. It should be in a separate file.
var myBearer='Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2MiOiJqYWUxNGY5NDg3NzQ0YTk5YTM0OTI0YzFiNzg2MTM4OSIsImF1ZCI6Imh0dHBzOi8vbWFuYWdlLnNreWZsb3dhcGlzLmNvbSIsImV4cCI6MTY0NDM2OTAwOSwiaWF0IjoxNjQ0MjgyNjA5LCJpc3MiOiJzYS1hdXRoQG1hbmFnZS5za3lmbG93YXBpcy5jb20iLCJqdGkiOiJ2YTY0NjM4OGM3NzM0ZGMzYTMyZjM1MDZjZjBhYWE0ZiIsInN1YiI6ImY3MzAxZTFhNjAzZjQ3NjRhYzc5M2YwNjJiZThmNjMzIn0.npCwLC6y5WDGjqAaEPfMF8e9fU8szwFe1lXEYTNxp4SCZ-G2caQ8W1qGDPA4lMZuiokinMw2PDlLmNO_gLU1ZSyn_nOBLJqKVwX-v4wLSybQetzNhjLlZmelYGDyMFy8YZPX9wP_6lV5-Juxe1Mh9WekISwWGVhmcVWBolHjcJovNu-0TOa4YQXI1SaKkBmG_A357JwzEbrUauYQUzNu7d4vb2GZrG2dtrskZwL_7I5dTZiNWt-JHrOWTH1pI_mr81rg9E_JY7DnUpzzIGiaNExDyprZ5ItVc3zNwxU319ukX23Xu_GCbS5hnY064pOnRMk3nvpN2rz1pKJC4rXeLg';


//router.set('views', path.join(__dirname,'views'));
//router.engine('jsx', require('ejs').renderFile);


/* GET home page. */

/*
router.get('/am', function(req, res, next) {
  res.render('index', { title: 'ExpressXXX' });
});
*/
const bigLnth=4096; //Represents number of samples we'll take the fft over

//This function takes the file ../views/isaac.wav, finds the fft, and returns the 
//(unscaled) highest frequency component. To run it, go to localhost:3000/isaac
//All the files sarah.wav, jenny.wav, and isaac.wav were made by me humming into a mic.
//The output isn't pretty on any of these...

router.get('/isaac', function(req,res,next) {

	var mypath=path.join(__dirname, '../views/isaac.wav');
	let wav = new WaveFile(fs.readFileSync(mypath));
	let samples=wav.getSamples(false, Int32Array);
	var sampleArray=[];
	
	for (let i=0;i<bigLnth;i++)
	{
		sampleArray[i]=0;
	};
	for (let i=0;i<bigLnth;i++)
	{
		sampleArray[i]=parseInt(samples[i]);
	};
	var lnth=bigLnth;
	var bigX=fft(sampleArray);
        
	for (let i=0;i<lnth;i++)
	{
	 bigX[i]=Math.abs.apply(Math, bigX[i]);
	}
        //Zero out DC terms
	bigX[0]=0; bigX[1]=0;

	var maxValue=Math.max.apply(Math, bigX);
	var maxIndex=bigX.indexOf(maxValue);
	res.render('index', {title: maxIndex});	
})

//This function is the same except for the file ../views/sarah.wav
router.get('/sarah', function(req,res,next) {

        var mypath=path.join(__dirname, '../views/sarah.wav');
        let wav = new WaveFile(fs.readFileSync(mypath));
        let samples=wav.getSamples(false, Int32Array);
        var sampleArray=[];

        for (let i=0;i<bigLnth;i++)
        {       
                sampleArray[i]=0;
        };
        for (let i=0;i<bigLnth;i++)
        {       
                sampleArray[i]=parseInt(samples[i]);
        };
        var lnth=bigLnth;
        var bigX=fft(sampleArray);
        
        for (let i=0;i<lnth;i++)
        {
         bigX[i]=Math.abs.apply(Math, bigX[i]);
        }
        //Zero out DC terms
	bigX[0]=0; bigX[1]=0;
        var maxValue=Math.max.apply(Math, bigX);
        var maxIndex=bigX.indexOf(maxValue);
        res.render('index', {title: maxIndex});
})

//Same as above but for the file ../views/jenny.wav
router.get('/jenny', function(req,res,next) {

        var signalX=[11,0,11,0];
        var mypath=path.join(__dirname, '../views/jenny.wav');
        let wav = new WaveFile(fs.readFileSync(mypath));
        let samples=wav.getSamples(false, Int32Array);
        var sampleArray=[];

        for (let i=0;i<bigLnth;i++)
        {       
                sampleArray[i]=0;
        };
        for (let i=0;i<bigLnth;i++)
        {       
                sampleArray[i]=parseInt(samples[i]);
        };
        var lnth=bigLnth;
        var bigX=fft(sampleArray);

        for (let i=0;i<lnth;i++)
        {
         bigX[i]=Math.abs.apply(Math, bigX[i]);
        }
	//Zero out DC terms
	bigX[0]=0; bigX[1]=0;

        var maxValue=Math.max.apply(Math, bigX);
        var maxIndex=bigX.indexOf(maxValue);
        res.render('index', {title: maxIndex});

}

)

/*
 * The next three functions go to the skyflow database, get the appropriate notes file, and displays them on the
 * on the console log. I haven't integrated with the front end yet. You have to manual add in each day's Bearer token to the top of this file.
 */

router.get('/sarahData', function(req,res,next) {
	var patientID="460140e5-f68e-49d7-ab01-76d1f6502e1b";
	var myURL="https://ebfc9bee4242.vault.skyflowapis.com/v1/vaults/w52b99e204b741669a2950880fff2ebf/table1/";
	myURL=myURL+patientID;
	myURL=myURL+"?dlp=DEFAULT";
	axios.get(myURL, {
	headers: {
		'authorization': myBearer
		}
	}

).then(resp=>{console.log(resp.data)});
});


router.get('/jennyData', function(req,res,next) {
        var patientID="a2df0dbe-d57a-419b-aa39-bd16422ce817";
        var myURL="https://ebfc9bee4242.vault.skyflowapis.com/v1/vaults/w52b99e204b741669a2950880fff2ebf/table1/";
        myURL=myURL+patientID;
        myURL=myURL+"?dlp=DEFAULT";
        axios.get(myURL, {
        headers: {
                'authorization': myBearer
                }
        }

).then(resp=>{console.log(resp.data)});
});



router.get('/isaacData', function(req,res,next) {
        var patientID="c3cc0e0d-ec08-4d60-800c-0f71eb8dc44a";
        var myURL="https://ebfc9bee4242.vault.skyflowapis.com/v1/vaults/w52b99e204b741669a2950880fff2ebf/table1/";
        myURL=myURL+patientID;
        myURL=myURL+"?dlp=DEFAULT";
        axios.get(myURL, {
        headers: {
                'authorization': myBearer
                }
        }

).then(resp=>{console.log(resp.data)});
});



module.exports = router;

