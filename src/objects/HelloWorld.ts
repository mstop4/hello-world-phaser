import { type Scene, GameObjects } from 'phaser';

export class HelloWorld extends GameObjects.Container {
  _game: Scene;
  _mainText: GameObjects.Text;
  _subText: GameObjects.Text;
  _speed: number;

  constructor(game: Scene) {
    super(game);

    this._game = game;
    this._speed = 2;
    this.setPosition(512, 384);
    this._createText();
  }

  _createText() {
    this._mainText = this._game.add.text(0, -20, 'Hello World!', {
      fontFamily: 'Arial Black',
      fontSize: 38,
      color: '#ffffff',
      stroke: '#000000',
      strokeThickness: 8,
      align: 'center',
    });
    this._mainText.setOrigin(0.5);

    this._subText = this._game.add.text(0, 20, 'Press arrow keys to move', {
      fontFamily: 'Arial Black',
      fontSize: 20,
      color: '#ffffff',
      stroke: '#000000',
      strokeThickness: 4,
      align: 'center',
    });
    this._subText.setOrigin(0.5);

    this.add(this._mainText);
    this.add(this._subText);
  }

  move(x: number, y: number) {
    this.setPosition(this.x + x * this._speed, this.y + y * this._speed);
  }
}
