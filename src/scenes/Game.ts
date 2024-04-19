import { Scene, GameObjects } from 'phaser';
import { HelloWorld } from '../objects/HelloWorld';
import { ControlKeys } from '../utils/Controls';

export class Game extends Scene {
  camera: Phaser.Cameras.Scene2D.Camera;
  background: GameObjects.Image;
  helloWorld: HelloWorld;
  controlKeys: ControlKeys;

  constructor() {
    super('Game');
  }

  create() {
    this.camera = this.cameras.main;
    this.camera.setBackgroundColor(0x00ff00);

    this.background = this.add.image(512, 384, 'background');
    this.background.setAlpha(0.5);

    this.helloWorld = new HelloWorld(this);
    this.add.existing(this.helloWorld);

    this.addKeys();

    this.input.once('pointerdown', () => {
      this.scene.start('GameOver');
    });
  }

  update() {
    this.handleKeys();
  }

  addKeys() {
    this.controlKeys = {
      left: this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT),
      right: this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT),
      up: this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.UP),
      down: this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN),
    };
  }

  handleKeys() {
    if (this.controlKeys.left.isDown) {
      this.helloWorld.move(-1, 0);
    }
    if (this.controlKeys.right.isDown) {
      this.helloWorld.move(1, 0);
    }
    if (this.controlKeys.up.isDown) {
      this.helloWorld.move(0, -1);
    }
    if (this.controlKeys.down.isDown) {
      this.helloWorld.move(0, 1);
    }
  }
}
