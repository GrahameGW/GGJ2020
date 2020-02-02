import Entity from './entity.js'

export default class Door extends Entity {
  init() {
    this.tags(['door']);

    this.open = false;

    this.physicsBody.body.setVelocity(0);
    this.physicsBody.body.setImmovable(true);
  }

  sprite() {
    return {
      size: {
        w: 16,
        h: 16
      },
      offeset: {
        x: 8,
        y: 8
      },
      sheet: 'atlas',
      frame: 'item-3.png'
    }
  }

  static animations() {
    return [];
  }

  collisionList() {
    return ['player', 'hero'];
  }

  openDoor() {
    this.open = true;
    this.physicsBody.visible = false;
    this.physicsBody.body.setEnable(false)

    setTimeout(() => {
      this.open = false;
      this.physicsBody.visible = true;
      this.physicsBody.body.setEnable(true)
    }, 2500)
  }

  update(p3, time, delta) {
  }

  unload() {
  }
}
