var canvas=new fabric.Canvas("myCanvas");















player_x=10;
player_y=10;





block_Width=30;
block_Height=30;


var player="";


var blocky="";



function player_update (){
    fabric.Image.fromURL("player.png", function (Img){
    player=Img;
    player.scaleToWidth(150);
    player.scaleToHeight(140);
    player.set({
top:player_y,
left:player_x
    });
    canvas.add(player);
    });
}

function new_image (get_image){
fabric.image.fromURL(get_iamge, function (Img) {
    block=Img;
    block.scaleToWidh(block_Width);
    block.scaleToHeight(block_Height);
    block.set({
top:player_y,
left:player_x

    });
canvas.add(block);
});

}