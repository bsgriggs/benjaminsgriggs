import React from 'react'
import FramedImage from '../UI Components/FramedImage'
import './Minecraft.css'
import minecraft from '../imgs/minecraft.png'
import $ from 'jquery';

const Minecraft = () => {
    function checkStatus(){
        $.getJSON('https://api.mcsrvstat.us/1/benjodev.com', function(status) {
            if (status.debug.ping === false){
                $("#left").html('<i class="far fa-times-circle" style="color:red"></i>    '+status.hostname+'<br><br>('+status.ip+':'+status.port+')');
                $("#right").html('<i class="far fa-user" style="color:#a663f2"></i>   The Minecraft Server is Offline.');
                $("#center").html('');
            }
    
            if (status.debug.ping === true){
                $("#left").html('<i class="far fa-check-circle" style="color:green"></i>  '+status.hostname+'<br><br>('+status.ip+':'+status.port+')');
                $("#right").html('<i class="far fa-user" style="color:#a663f2"></i>   '+status.players.online+"/"+status.players.max+" players online.");
                $("#center").html('');

                //Show a list of players
                if(status.players.online !== 0){
                    $.each(status.players.list, function(index, player){
                        $("#right").append('<li class="playerList">'+player+'</li>');
                    });//player loop end  
                } 
            }
        }); 
    }

    return(
        <div className="minecraft" onLoad={checkStatus()}>
            <link rel="stylesheet" type="text/css" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous"/>
            <h3>Server Status</h3>
            <div className="Row">
                <div className="Row">
                    <div id="left"></div>
                    <div id="center">Checking Server Status</div>
                    <div id="right"></div>
                </div>
                <div className="mineImg">
                    <FramedImage image={minecraft} alt={"Minecraft Fountain"} caption={""}/>
                </div>
            </div>
            <h3>How to Join</h3>
        </div>
    );
}

export default Minecraft