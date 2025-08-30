import Phaser from "phaser";

export default class GameOverScene extends Phaser.Scene{
    constructor(){
        super("GameOverScene");
    }

    create(data:{winner:string}){
        this.add.text(400,250 ,`${data.winner}Wins!`,{
            fontSize:"48px",
            color:"#fff",
        }).setOrigin(0.5);

        this.add.text(400,350,"Press SPACE to Restart",{
            fontSize:"24px",
            color:"#ccc"
        }).setOrigin(0.5);

        this.input.keyboard?.once("keydown-SPACE",()=>{
            this.scene.start("MenuScene")
        });
    }
}