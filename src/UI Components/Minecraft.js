import React from 'react'
import FramedImage from '../UI Components/FramedImage'
import './Minecraft.css'
import minecraft from '../imgs/minecraft.jpg'
import $ from 'jquery';

const Minecraft = () => {
    function checkStatus(){
        $.getJSON('https://api.mcsrvstat.us/1/benjaminsgriggs.com', function(status) {
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
            <h3>Server Status</h3>
            <hr></hr>
            <div className="Row">
                <div className="Row">
                    <div id="left"></div>
                    <div id="center">Checking Server Status</div>
                    <div id="right"></div>
                </div>
                <div className="Img1x1_Large">
                    <FramedImage image={minecraft} alt={"Minecraft Fountain"} caption={""}/>
                </div>
            </div>
        </div>
    );
}

export default Minecraft