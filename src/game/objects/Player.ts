import Phaser from "phaser";

interface Controls{
left:string;
right:string;
up:string;
attack:string;
}

export default class Player extends Phaser.Physics.Arcade.Sprite{
controls:any;
health:number=100;
cursor:any;
isAttacking : boolean= false;

constructor(scene:Phaser.Scene, x:number, y:number,texture:string,keys:Controls){
    super(scene,x,y,texture);

    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.setCollideWorldBounds(true);
    this.controls = scene.input.keyboard?.addKeys(keys);
}

update(){
    this.setVelocity(0);

    if(this.controls.left.isDown){
        this.setVelocityX(-160);
    }else if(this.controls.right.isDown){
        this.setVelocityX(160);
    }

    if(this.controls.up.isDown && this.body?.blocked.down){
        this.setVelocityY(-300);
    }

    if(Phaser.Input.Keyboard.JustDown(this.controls.attack)){
        this.isAttacking= true;
        this.scene.time.delayedCall(300,()=>(this.isAttacking=false));
    }
}

takeDamage(amount:number){
    this.health -= amount;
    if(this.health<0) this.health = 0;
}

}

