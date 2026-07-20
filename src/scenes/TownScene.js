export default class TownScene extends Phaser.Scene {

    constructor() {
        super("TownScene");
    }

    create() {

        this.cameras.main.setBackgroundColor("#7ccf65");

        this.add.text(360, 60, "Startstadt", {
            fontSize: "34px",
            color: "#ffffff"
        }).setOrigin(0.5);

        this.add.circle(360, 640, 30, 0x3366ff);

        this.add.text(360, 690, "Trainer", {
            fontSize: "22px",
            color: "#ffffff"
        }).setOrigin(0.5);

    }

}