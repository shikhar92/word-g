p1n=localStorage.getItem("p1_name");
p2n=localStorage.getItem("p2_name");
p1s=0;
p2s=0;

document.getElementById("player1_name").innerHTML=p1n+ " : ";
document.getElementById("player2_name").innerHTML=p2n+ " : ";

document.getElementById("player1_score").innerHTML=p1s;
document.getElementById("player2_score").innerHTML=p2s;

document.getElementById("player_ques").innerHTML="Question Turn : "+p1n;
document.getElementById("player_ans").innerHTML="Answer Turn : "+p2n;

function send()
{
getWord=document.getElementById("word").value;
word=getWord.toLowerCase();

c1=word.charAt(1);

x=Math.floor(word.length/2)
c2=word.charAt(x);

y=word.length-1;
c3=word.charAt(y);

z=word.replace(c1,"_");

a=z.replace(c2,"_");

q=a.replace(c3,"_");

qw="<h4 id='word_display'>Q: "+q+"</h4>";
ib="<br>A: <input type='text' id='ibox'>";
bt="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";

total=qw+ib+bt;


document.getElementById("output").innerHTML=total;
document.getElementById("word").value="";
}


qturn="player_1";
aturn="player_2";

function check()
{
getans=document.getElementById("ibox").value;
ans=getans.toLowerCase();
if(ans=word)
{
if(aturn=="player_1")
{
p1s=p1s+1;
document.getElementById("player1_score").innerHTML=p1s;
}
else{
    p2s=p2s+1;
document.getElementById("player2_score").innerHTML=p2s;
}
}
if(qturn=="player_1")
{
qturn="player_2"
document.getElementById("player_ques").innerHTML="Question turn :"+p2n;
}
else{
qturn="player_1"
document.getElementById("player_ques").innerHTML="Question turn : "+p1n;
}
if(aturn=="player_1")
{
aturn="player_2"
document.getElementById("player_ans").innerHTML="Answer Turn : "+p2n;
}
else{
aturn="player_1"
document.getElementById("player_ans").innerHTML="Answer Turn : "+p1n;
}
document.getElementById("output").innerHTML="";
}
