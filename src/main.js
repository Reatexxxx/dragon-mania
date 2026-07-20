import MenuScene from "./scenes/MenuScene.js";
import TownScene from "./scenes/TownScene.js";

const config = {
    type: Phaser.AUTO,
    parent: "game",

    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 720,
        height: 1280
    },

    scene: [
        MenuScene,
        TownScene
    ]
};

new Phaser.Game(config);