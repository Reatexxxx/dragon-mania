export default class MenuScene extends Phaser.Scene {

    constructor() {
        super("MenuScene");
    }

    create() {

        this.cameras.main.setBackgroundColor("#69c5ff");

        this.add.text(360, 180, "DRAGON-MANIA", {
            fontSize: "56px",
            fontStyle: "bold",
            color: "#ffffff"
        }).setOrigin(0.5);

        const startButton = this.add.text(360, 700, "SPIEL STARTEN", {
            fontSize: "38px",
            backgroundColor: "#2ecc71",
            color: "#ffffff",
            padding: {
                left: 30,
                right: 30,
                top: 15,
                bottom: 15
            }
        }).setOrigin(0.5);

        startButton.setInteractive();

        startButton.on("pointerdown", () => {
            this.scene.start("TownScene");
        });

    }

}