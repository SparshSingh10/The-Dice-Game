function playGame(){
    var randomNumberOne=Math.floor(Math.random()*6+1);
    var randomImageOnePath="Image/"+randomNumberOne+".png";
    var randomNumberTwo=Math.floor(Math.random()*6+1);
    var randomImageTwoPath="Image/"+randomNumberTwo+".png";


    var image1=$("#img1");
    $($("#img1")).attr("src",randomImageOnePath);
    var image2=$("#img2");
    $($("#img2")).attr("src",randomImageTwoPath);
    
    // var image1=$("#img1");
    // image1.setAttribute("src",randomImageOnePath);
    // var image2=$("#img2");
    // image2.setAttribute("src",randomImageTwoPath);

    // var image2=$($("img")[1]);
    // $("#img2").attr("src","randomImageOnePath");
    // // image2.setAttribute("src",randomImageTwoPath);


    if(randomNumberOne>randomNumberTwo){
        $("h1").text("Player One Wins ❤️");
    }
    else if(randomNumberOne<randomNumberTwo){
        $("h1").text("Player Two Wins ❤️");
    }
    else{
        $("h1").text("Draw ❤️");
    }

}

document.querySelector("button").addEventListener("click",playGame);
// // $(document).click("h1");
// ('#btn').bind('click', function() {
//     console.log("clicked");
//     playGame();
//   });
// $('#img1').on({
//     'click': function(){
//         $('#img1').attr('src','secrandomImageTwoPath.jpg');
//     }
// });