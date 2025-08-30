import Phaser from "phaser";

export default class HealthBar{
    private bar : Phaser.GameObjects.Graphics;
    private x : number;
    private y : number;
    private value : number;
    private maxValue : number;
    private width : number=100;
    private height : number = 12;

    constructor(scene:Phaser.Scene, x:number,y:number,maxValue:number=100){
        this.bar = scene.add.graphics();
        this.x = x;
        this.y = y;
        this.maxValue = maxValue;
        this.value = maxValue;

        this.draw();
    }

    private draw(){
        this.bar.clear();

        this.bar.fillStyle(0xff0000);
        this.bar.fillRect(this.x,this.y,this.width,this.height);

        const healthWidth=(this.value / this.maxValue)*this.width;
        this.bar.fillStyle(0x00ff00);
        this.bar.fillRect(this.x, this.y , healthWidth , this.height);

        this.bar.lineStyle(2,0x000000);
        this.bar.strokeRect(this.x,this.y,this.width, this.height);
    }

    public decrease(amount:number){
        this.value = Phaser.Math.Clamp(this.value -amount,0,this.maxValue);
        this.draw();
    }

    public increase(amount:number){
        this.value = Phaser.Math.Clamp(this.value + amount,0,this.maxValue);
        this.draw();
    }

    public getValue(){
        return this.value;
    }
}