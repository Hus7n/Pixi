import Phaser from "phaser";

export default class MenuScene extends Phaser.Scene{
    constructor(){
        super("MenuScene");
    }

    create(){
        this.add.text(400,200,"Samurai Showdown",{
            fontSize:"48px",
            color:"#fff",
        }).setOrigin(0.5);

        this.add.text(400,350,"Press SPACE to start",{
            fontSize:"24px",
            color:"#ccc",
        }).setOrigin(0.5);

        this.input.keyboard?.once("keydown-SPACE",()=>{
            this.scene.start("FightScene");
        });
    }
}