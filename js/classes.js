class Sprite {
    constructor(position, {imageSrc, scale=1, nframes=1, offset={x: 0, y: 0}}) {
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
        if(this.framesElapsed % this.framesHold === 0) {
            if(this.currentFrame < this.nframes - 1) {
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
    constructor(position, {velocity, 
        imageSrc, scale=1, offset={x: 0, y: 0}, exist=false}) {
            this.position = position;
            this.velocity = velocity;
            this.image = new Image();
            this.image.src = imageSrc;
            this.scale = scale;
            this.offset = offset;
            this.height = this.image.height * this.scale;
            this.width = this.image.width * this.scale;
            this.exist = exist;
    }
    draw() {
        c.drawImage(this.image, 
            this.position.x, this.position.y, this.width, this.height)
    }     
    update() {
        if (this.position.x <= 1024) {
            this.draw()
            this.position.x += this.velocity.x
        } else {
            this.position.x = 0
        }
    }
}

class Fighter extends Sprite {
    constructor(position, {velocity, 
    imageSrc, scale=1, nframes=1, offset={x: 0, y: 0}, sprites,
    attackBox = {offset: {}, width: undefined, height: undefined}, hitPoint, hasObject=false, object=null}, flip) {
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
        this.isAttacking;
        this.health = 100;
        this.currentFrame = 0;
        this.framesElapsed = 0;
        this.framesHold = 7;
        this.sprites = sprites;
        this.hitPoint = hitPoint;
        this.flip = flip;
        this.dead = false;
        this.hasObject = hasObject;
        this.object = object;

        for (const sprite in this.sprites) {
            sprites[sprite].image = new Image()
            sprites[sprite].image.src = sprites[sprite].imageSrc
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
        if(!this.dead)
            this.animateFrame();

        if(this.flip) {
            this.attackBox.position.x = this.position.x - this.attackBox.offset.x - this.attackBox.width;
        } else {
            this.attackBox.position.x = this.position.x + this.attackBox.offset.x;
        }
        this.attackBox.position.y = this.position.y + this.attackBox.offset.y

        // draw attack box region
        // c.fillRect(this.attackBox.position.x, this.attackBox.position.y, this.attackBox.width, this.attackBox.height)

        // draw take hit region
        // c.fillRect(this.position.x, this.position.y, this.width, this.height)

        if(this.position.x + this.velocity.x >= 0 && this.position.x + this.velocity.x <= canvas.width - 55)
            this.position.x += this.velocity.x;
        if(this.position.y + this.velocity.y > 0) {
            this.position.y += this.velocity.y;
        } else {
            this.velocity.y = 0;
        }

        if(this.position.y + this.height + this.velocity.y >= canvas.height - 96) {
            this.velocity.y = 0;
            this.position.y = 330;
        }
        else    
            this.velocity.y += gravity
    }

    attack() {
        if(!this.hasObject) {
            this.switchSprite('attack1')
            this.isAttacking = true;
        } else {
            this.object = new Object({
                x: this.position.x,
                y: this.position.y
            }, {velocity: {
                x: 1,
                y: 0
            },
            imageSrc: './asset/characters/Huntress 2/Static.png',
            scale: 2.9,
            exist: true})
        }
    }

    takeHit() {
        this.health -= 10;
        if(this.health <= 0) {
            this.switchSprite('death')
        } else this.switchSprite('takeHit')
    }


    switchSprite(sprite) {
        if(this.image === this.sprites.death.image) {
            if(this.currentFrame === this.sprites.death.nframes - 1)
                this.dead = true;
            return
        }  
        // overriding all other animations with the attack animation
        if(this.image === this.sprites.attack1.image && this.currentFrame < this.sprites.attack1.nframes - 1) 
            return
        // override when fighter gets hit
        if(this.image === this.sprites.takeHit.image && this.currentFrame < this.sprites.takeHit.nframes - 1) 
            return
        switch(sprite) {
            case 'idle':
                if(this.image !== this.sprites.idle.image){
                    this.image = this.sprites.idle.image;
                    this.nframes = this.sprites.idle.nframes;
                    this.currentFrame = 0;
                }
                break;
            case 'run':
                if(this.image !== this.sprites.run.image){
                    this.image = this.sprites.run.image;
                    this.nframes = this.sprites.run.nframes;
                    this.currentFrame = 0;
                }
                break;
            case 'jump':
                if(this.image !== this.sprites.jump.image) {
                    this.image = this.sprites.jump.image;
                    this.nframes = this.sprites.jump.nframes;
                    this.currentFrame = 0;
                }
                break;
            case 'fall':
                if(this.image !== this.sprites.fall.image) {
                    this.image = this.sprites.fall.image;
                    this.nframes = this.sprites.fall.nframes;
                    this.currentFrame = 0;
                }
                break;
            case 'attack1':
                if(this.image !== this.sprites.attack1.image) {
                    this.image = this.sprites.attack1.image;
                    this.nframes = this.sprites.attack1.nframes;
                    this.currentFrame = 0;
                }
                break;
            case 'takeHit':
                if(this.image !== this.sprites.takeHit.image) {
                    this.image = this.sprites.takeHit.image;
                    this.nframes = this.sprites.takeHit.nframes;
                    this.currentFrame = 0;
                }
                break;
            case 'death':
                if(this.image !== this.sprites.death.image) {
                    this.image = this.sprites.death.image;
                    this.nframes = this.sprites.death.nframes;
                    this.currentFrame = 0;
                }
                break;
        }
    }
}