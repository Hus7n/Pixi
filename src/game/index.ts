import Phaser from "phaser";
import MenuScene from "./scenes/MenuScene";
import FightScene from "./scenes/FightScene";
import GameOverScene from "./scenes/GameOverScene";

const config : Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width : 800,
    height : 600,
    physics:{
        default:"arcade",
        arcade:{
            gravity:{
                y: 0,
                x: 0,
            },
            debug:false
        },
    },
    scene:[MenuScene , FightScene , GameOverScene],
    parent:"game-container",
    backgroundColor:"#1e1e2f"
};
export default new Phaser.Game(config);