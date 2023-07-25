// specify sound effects
var takeHitSound = new Audio('./asset/sounds/takeHit.mp3')
var attackSound = new Audio('./asset/sounds/hit-swing-sword.mp3')

class Sprite {
    constructor(position, { imageSrc, scale = 1, nframes = 1, offset = { x: 0, y: 0 } }) {
        this.position = position;
        this.height = 150;
        this.width = 50;
        this.image = new Image();
        this.image.src = imageSrc;
        this.scale = scale;
        this.nframes = nframes;
        this.currentFrame = 0;
        this.framesElapsed = 0;
        this.framesHold = 5;
        this.offset = offset;
    }

    draw() {
        c.drawImage(this.image,
            this.currentFrame * (this.image.width / this.nframes),
            0,
            this.image.width / this.nframes,
            this.image.height,
            this.position.x - this.offset.x,
            this.position.y - this.offset.y,
            (this.image.width / this.nframes) * this.scale,
            this.image.height * this.scale)
    }

    animateFrame() {
        this.framesElapsed++;
        if (this.framesElapsed % this.framesHold === 0) {
            if (this.currentFrame < this.nframes - 1) {
                this.currentFrame++;
            } else {
                this.currentFrame = 0;
            }
        }
    }

    update() {
        this.draw();
        this.animateFrame();
    }
}

class Object {
    constructor(position = undefined, { velocity = { x: 1, y: 0},
        imageSrc = undefined, scale = 1, offset = { x: 0, y: 0 }}, flip = undefined) {
        this.position = position;
        this.velocity = velocity;
        this.image = new Image();
        this.image.src = imageSrc;
        this.scale = scale;
        this.height = this.image.height * this.scale;
        this.width = this.image.width * this.scale;
        this.flip = flip;
        this.offset = offset;
    }
    draw() {
        c.save();

        c.translate(this.position.x, this.position.y);
        
        if (this.flip) {
            c.scale(-1, 1); // Flip horizontally
        }
        
        c.drawImage(this.image, this.offset.x, this.offset.y, this.width, this.height);
        
        c.restore();
    }
    update() {
        this.draw()
        this.position.x = this.position.x + (this.flip ? -this.velocity.x : this.velocity.x)
    }
}

class Fighter extends Sprite {
    constructor(position,
        { velocity,
            imageSrc,
            scale = 1,
            nframes = 1,
            offset = { x: 0, y: 0 },
            sprites,
            attackBox = { offset: {}, width: undefined, height: undefined },
            hitPoint,
            rangedWeapon = false,
            objectType = undefined,
            damage = 8,
            health = 100 },
        flip) {
        super(position, {
            imageSrc,
            scale,
            nframes,
            offset
        })
        this.velocity = velocity;
        this.height = 150;
        this.width = 70;
        this.attackBox = {
            position: {
                x: this.position.x,
                y: this.position.y
            },
            offset: attackBox.offset,
            width: attackBox.width,
            height: attackBox.height,
        }
        this.lastKey;
        this.health = health;
        this.currentFrame = 0;
        this.framesElapsed = 0;
        this.framesHold = 8;
        this.sprites = sprites;
        this.flip = flip;
        this.dead = false;
        this.damage = damage;
        // properties for close ranged weapon characters
        this.isAttacking;
        this.hitPoint = hitPoint;
        // properties for rangedWeapon characters
        this.rangedWeapon = rangedWeapon;
        this.object = [];
        this.fired = false;
        this.objectType = objectType;

        for (const sprite in this.sprites) {
            sprites[sprite].image = new Image()
            sprites[sprite].image.src = sprites[sprite].imageSrc
        }

        if (flip) {
            this.offset.x += this.width 
        }

        if(rangedWeapon) {
            this.object.push(new Object({
                x: this.position.x,
                y: this.position.y
            }, this.objectType, this.flip))
        }
    }

    draw() {
        c.save();

        c.translate(this.position.x, this.position.y);

        if (this.flip) {
            c.scale(-1, 1); // Flip horizontally
        }

        c.drawImage(
            this.image,
            this.currentFrame * (this.image.width / this.nframes),
            0,
            this.image.width / this.nframes,
            this.image.height,
            -this.offset.x,
            -this.offset.y,
            (this.image.width / this.nframes) * this.scale,
            this.image.height * this.scale
        );

        c.restore();
    }

    update() {
        this.draw();
        if (!this.dead)
            this.animateFrame();

        if(this.rangedWeapon) {
            if (this.image === this.sprites.attack1.image && this.currentFrame === this.sprites.attack1.nframes - 1) {
                this.object.push(new Object({
                    x: this.position.x,
                    y: this.position.y
                }, this.objectType, this.flip));
            }
            // animation for ranged weapon
            for (let i = 1; i < this.object.length; i++) {
                this.object[i].update()
                
                // draw attack box of ranged weapon
                // if(this.flip) {
                //     c.strokeRect(this.object[i].position.x - this.object[i].offset.x, this.object[i].position.y + this.object[i].offset.y, -this.object[i].width, this.object[i].height)
                // } else {
                //     c.strokeRect(this.object[i].position.x + this.object[i].offset.x, this.object[i].position.y + this.object[i].offset.y, this.object[i].width, this.object[i].height)
                // }

                if(this.object[i].position.x > canvas.width || this.object[i].position.x < 0)
                    this.object.splice(i, 1)
            }
        } else {
            if (this.flip) {
                this.attackBox.position.x = this.position.x - this.attackBox.offset.x - this.attackBox.width + this.width;
            } else {
                this.attackBox.position.x = this.position.x + this.attackBox.offset.x;
            }
            this.attackBox.position.y = this.position.y + this.attackBox.offset.y
        }

        // draw attack box region
        // c.fillStyle = 'rgba(255, 255, 0, 0.2)'
        // c.fillRect(this.attackBox.position.x, this.attackBox.position.y, this.attackBox.width, this.attackBox.height)
        // draw take hit region
        // c.fillStyle = 'rgba(0, 255, 255, 0.3)'
        // c.fillRect(this.position.x, this.position.y, this.width, this.height)

        if (this.position.x + this.velocity.x >= 0 && this.position.x + this.velocity.x <= canvas.width - 55)
            this.position.x += this.velocity.x;

        if (this.position.y + this.velocity.y > 0) {
            this.position.y += this.velocity.y;
        } else {
            this.velocity.y = 0;
        }

        if (this.position.y + this.height + this.velocity.y >= canvas.height - 96) {
            this.velocity.y = 0;
            this.position.y = 330;
        }
        else
            this.velocity.y += gravity
    }

    attack() {
        this.switchSprite('attack1');
        this.isAttacking = true;
        attackSound.play();
    }

    takeHit(damage) {
        takeHitSound.play();
        this.health -= damage;
        if (this.health <= 0) {
            this.switchSprite('death')
        } else this.switchSprite('takeHit')
    }

    switchSprite(sprite) {
        if (this.image === this.sprites.death.image) {
            if (this.currentFrame === this.sprites.death.nframes - 1)
                this.dead = true;
            return
        }
        // overriding all other animations with the attack animation
        if (this.image === this.sprites.attack1.image && this.currentFrame < this.sprites.attack1.nframes - 1)
            return
        // override when fighter gets hit
        if (this.image === this.sprites.takeHit.image && this.currentFrame < this.sprites.takeHit.nframes - 1)
            return
        switch (sprite) {
            case 'idle':
                if (this.image !== this.sprites.idle.image) {
                    this.image = this.sprites.idle.image;
                    this.nframes = this.sprites.idle.nframes;
                    this.currentFrame = 0;
                }
                break;
            case 'run_right':
                if (this.image !== this.sprites.run_right.image) {
                    this.image = this.sprites.run_right.image;
                    this.nframes = this.sprites.run_right.nframes;
                    this.currentFrame = 0;
                }
                break;
            case 'run_left':
                if (this.image !== this.sprites.run_left.image) {
                    this.image = this.sprites.run_left.image;
                    this.nframes = this.sprites.run_left.nframes;
                    this.currentFrame = 0;
                }
                break;
            case 'jump':
                if (this.image !== this.sprites.jump.image) {
                    this.image = this.sprites.jump.image;
                    this.nframes = this.sprites.jump.nframes;
                    this.currentFrame = 0;
                }
                break;
            case 'fall':
                if (this.image !== this.sprites.fall.image) {
                    this.image = this.sprites.fall.image;
                    this.nframes = this.sprites.fall.nframes;
                    this.currentFrame = 0;
                }
                break;
            case 'attack1':
                if (this.image !== this.sprites.attack1.image) {
                    this.image = this.sprites.attack1.image;
                    this.nframes = this.sprites.attack1.nframes;
                    this.currentFrame = 0;
                }
                break;
            case 'takeHit':
                if (this.image !== this.sprites.takeHit.image) {
                    this.image = this.sprites.takeHit.image;
                    this.nframes = this.sprites.takeHit.nframes;
                    this.currentFrame = 0;
                }
                break;
            case 'death':
                if (this.image !== this.sprites.death.image) {
                    this.image = this.sprites.death.image;
                    this.nframes = this.sprites.death.nframes;
                    this.currentFrame = 0;
                }
                break;
        }
    }
}