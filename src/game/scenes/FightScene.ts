import Phaser from "phaser";
import Player from "../objects/Player";

export default class FightScene extends Phaser.Scene{
    p1!:Player;
    p2!: Player;

    constructor(){
        super("FightScene");
    }

    preload(){
        this.load.image("bg","/assets/backgrounds/background.png");
        this.load.spritesheet("samurai1","/assets/characters/samuraiMack/Idle.png",{frameWidth:64,frameHeight:64});
        this.load.spritesheet("samurai2","/assets/characters/kenji/Idle.png",{frameWidth:64,frameHeight:64});
    }

    create(){
        this.add.image(400,300,"bg");

        this.p1 = new Player(this,200,500,"samurai1",{left:"A", right:"D", up:"W",attack:"F"});
        this.p2 = new Player(this,600,500,"samurai2",{left:"LEFT", right:"RIGHT", up:"UP",attack:"SPACE"});
    }

    update(){
        this.p1.update();
        this.p2.update();

        if(this.p1.isAttacking && Phaser.Math.Distance.Between(this.p1.x, this.p1.y,this.p2.x , this.p2.y)<80){
            this.p2.takeDamage(10);
        }

        if(this.p2.isAttacking && Phaser.Math.Distance.Between(this.p2.x, this.p2.y,this.p1.x , this.p1.y)<80){
            this.p1.takeDamage(10);
        }

        if(this.p1.health <= 0)this.scene.start("GameOverScene",{winner :"Player 2"});
        if(this.p2.health <= 0)this.scene.start("GameOverScene",{winner :"Player 1"});

    }
}