import Phaser from "phaser";
import Player from "../objects/Player";
import HealthBar from "../objects/HealthBar";

export default class FightScene extends Phaser.Scene{
    p1!:Player;
    p2!: Player;
    private playerHealth : HealthBar;
    private enemyHealth : HealthBar;

    constructor(){
        super("FightScene");
    }

    preload(){
        this.load.image("background","assets/backgrounds/background.png");
        this.load.image("shop","assets/backgrounds/shop.png")

    //kenji
       this.load.spritesheet("kenji_idle","assets/characters/kenji/idle.png",{
        frameWidth:128, frameHeight:128
       });

       this.load.spritesheet("kenji_run","assets/characters/kenji/run.png",{
        frameWidth:128, frameHeight:128
       });

       this.load.spritesheet("kenji_attack1","assets/characters/kenji/attack1.png",{
        frameWidth:128, frameHeight:128
       });

       this.load.spritesheet("kenji_takehit","assets/characters/kenji/take_hit.png",{
        frameWidth:128, frameHeight:128
       });

       this.load.spritesheet("kenji_jump","assets/characters/kenji/jump.png",{
        frameWidth:128, frameHeight:128
       });

       this.load.spritesheet("kenji_death","assets/characters/kenji/death.png",{
        frameWidth:128, frameHeight:128
       });

       this.load.spritesheet("kenji_fall","assets/characters/kenji/fall.png",{
        frameWidth:128, frameHeight:128
       });

       //mack
        this.load.spritesheet("mack_idle","assets/characters/kenji/idle.png",{
        frameWidth:128, frameHeight:128
       });

       this.load.spritesheet("_run","assets/characters/kenji/run.png",{
        frameWidth:128, frameHeight:128
       });

       this.load.spritesheet("kenji_attack1","assets/characters/kenji/attack1.png",{
        frameWidth:128, frameHeight:128
       });

       this.load.spritesheet("kenji_takehit","assets/characters/kenji/take_hit.png",{
        frameWidth:128, frameHeight:128
       });

       this.load.spritesheet("kenji_jump","assets/characters/kenji/jump.png",{
        frameWidth:128, frameHeight:128
       });

       this.load.spritesheet("kenji_death","assets/characters/kenji/death.png",{
        frameWidth:128, frameHeight:128
       });

       this.load.spritesheet("kenji_fall","assets/characters/kenji/fall.png",{
        frameWidth:128, frameHeight:128
       });


    }

    create(){
        this.add.image(400,300,"bg");

        this.p1 = new Player(this,200,500,"samurai1",{left:"A", right:"D", up:"W",attack:"F"});
        this.p2 = new Player(this,600,500,"samurai2",{left:"LEFT", right:"RIGHT", up:"UP",attack:"SPACE"});

        this.playerHealth = new HealthBar(this,20,20,100);
        this.enemyHealth = new HealthBar(this,400,20,100);

        
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