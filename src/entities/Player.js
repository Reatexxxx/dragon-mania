export default class Player {

    constructor(scene, x, y) {

        this.scene = scene;

        this.sprite = scene.add.circle(x, y, 22, 0x2d6cff);

        this.targetX = x;
        this.targetY = y;

        scene.cameras.main.startFollow(this.sprite, true, 0.08, 0.08);
    }

    moveTo(x, y) {

        this.targetX = x;
        this.targetY = y;

    }

    update() {

        const speed = 3;

        const dx = this.targetX - this.sprite.x;
        const dy = this.targetY - this.sprite.y;

        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance > 2) {

            this.sprite.x += (dx / distance) * speed;
            this.sprite.y += (dy / distance) * speed;

        }

    }

}