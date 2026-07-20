export default class TownScene extends Phaser.Scene {

    constructor() {
        super("TownScene");
    }

    create() {

        this.cameras.main.setBackgroundColor("#7ccf65");

        // Titel
        this.add.text(360, 50, "Startstadt", {
            fontSize: "32px",
            color: "#ffffff"
        }).setOrigin(0.5);

        // Spielfeld
        this.add.rectangle(360, 680, 720, 1200, 0x6dbb5b);

        // Trainer (vorerst als Kreis)
        this.player = this.add.circle(360, 640, 24, 0x2d6cff);

        // Zielposition
        this.targetX = this.player.x;
        this.targetY = this.player.y;

        // Kamera
        this.cameras.main.startFollow(this.player, true, 0.08, 0.08);

        // Tippen zum Laufen
        this.input.on("pointerdown", (pointer) => {
            this.targetX = pointer.worldX;
            this.targetY = pointer.worldY;
        });

    }

    update() {

        const speed = 3;

        const dx = this.targetX - this.player.x;
        const dy = this.targetY - this.player.y;

        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance > 2) {
            this.player.x += (dx / distance) * speed;
            this.player.y += (dy / distance) * speed;
        }

    }

}
