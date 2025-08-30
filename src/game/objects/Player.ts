import Phaser from "phaser";

interface Controls{
left:string;
right:string;
up:string;
attack:string;
}

interface PlayerControls {
    left: Phaser.Input.Keyboard.Key;
    right: Phaser.Input.Keyboard.Key;
    up: Phaser.Input.Keyboard.Key;
    attack: Phaser.Input.Keyboard.Key;
}

export default class Player extends Phaser.Physics.Arcade.Sprite{
controls:PlayerControls;
health:number=100;
isAttacking : boolean= false;

constructor(scene:Phaser.Scene, x:number, y:number,texture:string,keys:Controls){
    super(scene,x,y,texture);

    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.setCollideWorldBounds(true);
    const keyboardKeys = scene.input.keyboard?.addKeys(keys);
    if (keyboardKeys) {
        this.controls = keyboardKeys as PlayerControls;
    } else {
        throw new Error('Keyboard not available');
    }
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

