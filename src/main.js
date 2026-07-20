const config = {
    type: Phaser.AUTO,
    parent: "game",

    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 720,
        height: 1280
    },

    backgroundColor: "#5cb8ff",

    scene: {
        create
    }
};

new Phaser.Game(config);

function create() {

    this.add.text(
        360,
        200,
        "Dragon-Mania",
        {
            fontSize: "54px",
            color: "#ffffff",
            fontStyle: "bold"
        }
    ).setOrigin(0.5);

    this.add.text(
        360,
        320,
        "Version 0.1",
        {
            fontSize: "30px",
            color: "#ffffff"
        }
    ).setOrigin(0.5);

}