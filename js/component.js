// Retrieve the query parameters from the URL
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

// Get the values of p1 and p2 from the query parameters
const p1 = urlParams.get('p1');
const p2 = urlParams.get('p2');
const p3 = urlParams.get('p3');

// Use the p1 and p2 values to continue the game
const player_idx = decodeURIComponent(p1)
const enemy_idx = decodeURIComponent(p2)
const map_idx = decodeURIComponent(p3)
console.log(`Player 1 character: ${player_idx}`);
console.log(`Player 2 character: ${enemy_idx}`);
console.log(`Map selected: ${map_idx}`)

const characters = {
    samurai : {
        velocity: {
            x: 0,
            y: 0
        },
        imageSrc: './asset/characters/samuraiMack/Idle.png',
        scale: 2.5,
        nframes: 8,
        offset: {
            x: 215,
            y: 155
        },
        sprites: {
            idle: {
                imageSrc: './asset/characters/samuraiMack/Idle.png', 
                nframes: 8
            },
            run_right: {
                imageSrc: './asset/characters/samuraiMack/Run.png',
                nframes: 8
            },
            run_left: {
                imageSrc: './asset/characters/samuraiMack/Run_left.png',
                nframes: 8
            },
            jump: {
                imageSrc: './asset/characters/samuraiMack/Jump.png',
                nframes: 2
            },
            fall: {
                imageSrc: './asset/characters/samuraiMack/Fall.png',
                nframes: 2
            },
            attack1: {
                imageSrc: './asset/characters/samuraiMack/Attack2.png',
                nframes: 6
            },
            takeHit: {
                imageSrc: './asset/characters/samuraiMack/Take Hit - white silhouette.png',
                nframes: 4
            }, 
            death: {
                imageSrc: './asset/characters/samuraiMack/Death.png',
                nframes: 6
            }
        },
        attackBox: {
            offset: {
                x: 70,
                y: 50
            },
            width: 200,
            height: 50,
        }, 
        hitPoint: 4
    },
    
    kenji : {
        velocity: {
            x: 0,
            y: 0
        },
        imageSrc: './asset/characters/kenji/Idle.png',
        scale: 2.5,
        nframes: 4,
        offset: {
            x: 215,
            y: 169
        },
        sprites: {
            idle: {
                imageSrc: './asset/characters/kenji/Idle.png', 
                nframes: 4
            },
            run_right: {
                imageSrc: './asset/characters/kenji/Run.png',
                nframes: 8
            },
            run_left: {
                imageSrc: './asset/characters/kenji/Run_left.png',
                nframes: 8
            },
            jump: {
                imageSrc: './asset/characters/kenji/Jump.png',
                nframes: 2
            },
            fall: {
                imageSrc: './asset/characters/kenji/Fall.png',
                nframes: 2
            },
            attack1: {
                imageSrc: './asset/characters/kenji/Attack1.png',
                nframes: 4
            },
            takeHit: {
                imageSrc: './asset/characters/kenji/Take hit.png',
                nframes: 3
            }, 
            death: {
                imageSrc: './asset/characters/kenji/Death.png',
                nframes: 7
            }
        },
        attackBox: {
            offset: {
                x: 70,
                y: 50
            },
            width: 170,
            height: 50,
        },
        hitPoint: 2
    },
    
    evil_wizard : {
        velocity: {
            x: 0,
            y: 0
        },
        imageSrc: './asset/characters/EVil Wizard 2/Idle.png',
        scale: 2.5,
        nframes: 8,
        offset: {
            x: 280,
            y: 266
        },
        sprites: {
            idle: {
                imageSrc: './asset/characters/EVil Wizard 2/Idle.png', 
                nframes: 8
            },
            run_right: {
                imageSrc: './asset/characters/EVil Wizard 2/Run.png',
                nframes: 8
            },
            run_left: {
                imageSrc: './asset/characters/EVil Wizard 2/Run_left.png',
                nframes: 8
            },
            jump: {
                imageSrc: './asset/characters/EVil Wizard 2/Jump.png',
                nframes: 2
            },
            fall: {
                imageSrc: './asset/characters/EVil Wizard 2/Fall.png',
                nframes: 2
            },
            attack1: {
                imageSrc: './asset/characters/EVil Wizard 2/Attack1.png',
                nframes: 8
            },
            takeHit: {
                imageSrc: './asset/characters/EVil Wizard 2/Take hit.png',
                nframes: 3
            }, 
            death: {
                imageSrc: './asset/characters/EVil Wizard 2/Death.png',
                nframes: 7
            }
        },
        attackBox: {
            offset: {
                x: 72,
                y: -10
            },
            width: 238,
            height: 130,
        },
        hitPoint: 4
    },
    
    flame_wizard : {
        velocity: {
            x: 0,
            y: 0
        },
        imageSrc: './asset/characters/Evil Wizard/Idle.png',
        scale: 2.5,
        nframes: 8,
        offset: {
            x: 150,
            y: 105
        },
        sprites: {
            idle: {
                imageSrc: './asset/characters/Evil Wizard/Idle.png', 
                nframes: 8
            },
            run_right: {
                imageSrc: './asset/characters/Evil Wizard/Move.png',
                nframes: 8
            },
            run_left: {
                imageSrc: './asset/characters/Evil Wizard/Move_left.png',
                nframes: 8
            },
            jump: {
                imageSrc: './asset/characters/Evil Wizard/Move.png',
                nframes: 8
            },
            fall: {
                imageSrc: './asset/characters/Evil Wizard/Idle.png',
                nframes: 8
            },
            attack1: {
                imageSrc: './asset/characters/Evil Wizard/Attack.png',
                nframes: 8
            },
            takeHit: {
                imageSrc: './asset/characters/Evil Wizard/Take hit.png',
                nframes: 4
            }, 
            death: {
                imageSrc: './asset/characters/Evil Wizard/Death.png',
                nframes: 5
            }
        },
        attackBox: {
            offset: {
                x: 60,
                y: 50
            },
            width: 130,
            height: 80,
        },
        hitPoint: 2
    },
    
    fantasy_warrior : {
        velocity: {
            x: 0,
            y: 0
        },
        imageSrc: './asset/characters/Fantasy Warrior/Idle.png',
        scale: 2.7,
        nframes: 8,
        offset: {
            x: 190,
            y: 123
        },
        sprites: {
            idle: {
                imageSrc: './asset/characters/Fantasy Warrior/Idle.png', 
                nframes: 10
            },
            run_right: {
                imageSrc: './asset/characters/Fantasy Warrior/Run.png',
                nframes: 8
            },
            run_left: {
                imageSrc: './asset/characters/Fantasy Warrior/Run_left.png',
                nframes: 8
            },
            jump: {
                imageSrc: './asset/characters/Fantasy Warrior/Jump.png',
                nframes: 3
            },
            fall: {
                imageSrc: './asset/characters/Fantasy Warrior/Fall.png',
                nframes: 3
            },
            attack1: {
                imageSrc: './asset/characters/Fantasy Warrior/Attack3.png',
                nframes: 8
            },
            takeHit: {
                imageSrc: './asset/characters/Fantasy Warrior/Take hit.png',
                nframes: 3
            }, 
            death: {
                imageSrc: './asset/characters/Fantasy Warrior/Death.png',
                nframes: 7
            }
        },
        attackBox: {
            offset: {
                x: 40,
                y: 60
            },
            width: 150,
            height: 80,
        },
        hitPoint: 4
    },
    
    white_knight : {
        velocity: {
            x: 0,
            y: 0
        },
        imageSrc: './asset/characters/Free_Knight/_Idle.png',
        scale: 3,
        nframes: 10,
        offset: {
            x: 135,
            y: 90
        },
        sprites: {
            idle: {
                imageSrc: './asset/characters/Free_Knight/_Idle.png', 
                nframes: 10
            },
            run_right: {
                imageSrc: './asset/characters/Free_Knight/_Run.png',
                nframes: 10
            },
            run_left: {
                imageSrc: './asset/characters/Free_Knight/_Run_left.png',
                nframes: 10
            },
            jump: {
                imageSrc: './asset/characters/Free_Knight/_Jump.png',
                nframes: 3
            },
            fall: {
                imageSrc: './asset/characters/Free_Knight/_Fall.png',
                nframes: 3
            },
            attack1: {
                imageSrc: './asset/characters/Free_Knight/_Attack2.png',
                nframes: 6
            },
            takeHit: {
                imageSrc: './asset/characters/Free_Knight/TakeHit.png',
                nframes: 4
            }, 
            death: {
                imageSrc: './asset/characters/Free_Knight/_Death.png',
                nframes: 10
            }
        },
        attackBox: {
            offset: {
                x: 60,
                y: 50
            },
            width: 133,
            height: 80,
        },
        hitPoint: 2
    },
    
    female_hero : {
        velocity: {
            x: 0,
            y: 0
        },
        imageSrc: './asset/characters/Hero Knight/Idle.png',
        scale: 2.5,
        nframes: 11,
        offset: {
            x: 208,
            y: 133
        },
        sprites: {
            idle: {
                imageSrc: './asset/characters/Hero Knight/Idle.png', 
                nframes: 11
            },
            run_right: {
                imageSrc: './asset/characters/Hero Knight/Run.png',
                nframes: 8
            },
            run_left: {
                imageSrc: './asset/characters/Hero Knight/Run_left.png',
                nframes: 8
            },
            jump: {
                imageSrc: './asset/characters/Hero Knight/Jump.png',
                nframes: 3
            },
            fall: {
                imageSrc: './asset/characters/Hero Knight/Fall.png',
                nframes: 3
            },
            attack1: {
                imageSrc: './asset/characters/Hero Knight/Attack2.png',
                nframes: 7
            },
            takeHit: {
                imageSrc: './asset/characters/Hero Knight/Take hit.png',
                nframes: 4
            }, 
            death: {
                imageSrc: './asset/characters/Hero Knight/Death.png',
                nframes: 11
            }
        },
        attackBox: {
            offset: {
                x: 55,
                y: 50
            },
            width: 176,
            height: 80,
        },
        hitPoint: 3
    },
    
    huntress : {
        velocity: {
            x: 0,
            y: 0
        },
        imageSrc: './asset/characters/Huntress/Idle.png',
        scale: 2.8,
        nframes: 8,
        offset: {
            x: 172,
            y: 123
        },
        sprites: {
            idle: {
                imageSrc: './asset/characters/Huntress/Idle.png', 
                nframes: 8
            },
            run_right: {
                imageSrc: './asset/characters/Huntress/Run.png',
                nframes: 8
            },
            run_left: {
                imageSrc: './asset/characters/Huntress/Run_left.png',
                nframes: 8
            },
            jump: {
                imageSrc: './asset/characters/Huntress/Jump.png',
                nframes: 2
            },
            fall: {
                imageSrc: './asset/characters/Huntress/Fall.png',
                nframes: 2
            },
            attack1: {
                imageSrc: './asset/characters/Huntress/Attack4.png',
                nframes: 9
            },
            takeHit: {
                imageSrc: './asset/characters/Huntress/Take hit.png',
                nframes: 3
            }, 
            death: {
                imageSrc: './asset/characters/Huntress/Death.png',
                nframes: 8
            }
        },
        attackBox: {
            offset: {
                x: 0,
                y: 0
            },
            width: 0,
            height: 0,
        },
        hitPoint: 0,
        rangedWeapon: true,
        damage: 5,
        objectType: {
            velocity: {
                x: 6,
                y: 0
            },
            offset: {
                x: 20,
                y: 80
            },
            imageSrc: './asset/characters/Huntress/Spear.png',
            scale: 2.5
        }
    },
    
    martial_hero : {
        velocity: {
            x: 0,
            y: 0
        },
        imageSrc: './asset/characters/Martial Hero 3/Idle.png',
        scale: 2.5,
        nframes: 10,
        offset: {
            x: 130,
            y: 54
        },
        sprites: {
            idle: {
                imageSrc: './asset/characters/Martial Hero 3/Idle.png', 
                nframes: 10
            },
            run_right: {
                imageSrc: './asset/characters/Martial Hero 3/Run.png',
                nframes: 8
            },
            run_left: {
                imageSrc: './asset/characters/Martial Hero 3/Run_left.png',
                nframes: 8
            },
            jump: {
                imageSrc: './asset/characters/Martial Hero 3/Going Up.png',
                nframes: 3
            },
            fall: {
                imageSrc: './asset/characters/Martial Hero 3/Going Down.png',
                nframes: 3
            },
            attack1: {
                imageSrc: './asset/characters/Martial Hero 3/Attack3.png',
                nframes: 9
            },
            takeHit: {
                imageSrc: './asset/characters/Martial Hero 3/Take hit.png',
                nframes: 3
            }, 
            death: {
                imageSrc: './asset/characters/Martial Hero 3/Death.png',
                nframes: 11
            }
        },
        attackBox: {
            offset: {
                x: 68,
                y: 80
            },
            width: 115,
            height: 50,
        },
        hitPoint: 6
    },
    
    medieval_warrior : {
        velocity: {
            x: 0,
            y: 0
        },
        imageSrc: './asset/characters/Medieval Warrior Pack 3/Idle.png',
        scale: 3,
        nframes: 10,
        offset: {
            x: 170,
            y: 105
        },
        sprites: {
            idle: {
                imageSrc: './asset/characters/Medieval Warrior Pack 3/Idle.png', 
                nframes: 10
            },
            run_right: {
                imageSrc: './asset/characters/Medieval Warrior Pack 3/Run.png',
                nframes: 6
            },
            run_left: {
                imageSrc: './asset/characters/Medieval Warrior Pack 3/Run_left.png',
                nframes: 6
            },
            jump: {
                imageSrc: './asset/characters/Medieval Warrior Pack 3/Jump.png',
                nframes: 2
            },
            fall: {
                imageSrc: './asset/characters/Medieval Warrior Pack 3/Fall.png',
                nframes: 2
            },
            attack1: {
                imageSrc: './asset/characters/Medieval Warrior Pack 3/Attack1.png',
                nframes: 4
            },
            takeHit: {
                imageSrc: './asset/characters/Medieval Warrior Pack 3/Get Hit.png',
                nframes: 3
            }, 
            death: {
                imageSrc: './asset/characters/Medieval Warrior Pack 3/Death.png',
                nframes: 9
            }
        },
        attackBox: {
            offset: {
                x: 63,
                y: 50
            },
            width: 133,
            height: 70,
        },
        hitPoint: 2
    },
    
    hero : {
        velocity: {
            x: 0,
            y: 0
        },
        imageSrc: './asset/characters/Hero Knight 2/Idle.png',
        scale: 2.8,
        nframes: 11,
        offset: {
            x: 162,
            y: 81
        },
        sprites: {
            idle: {
                imageSrc: './asset/characters/Hero Knight 2/Idle.png', 
                nframes: 11
            },
            run_right: {
                imageSrc: './asset/characters/Hero Knight 2/Run.png',
                nframes: 8
            },
            run_left: {
                imageSrc: './asset/characters/Hero Knight 2/Run_left.png',
                nframes: 8
            },
            jump: {
                imageSrc: './asset/characters/Hero Knight 2/Jump.png',
                nframes: 4
            },
            fall: {
                imageSrc: './asset/characters/Hero Knight 2/Fall.png',
                nframes: 4
            },
            attack1: {
                imageSrc: './asset/characters/Hero Knight 2/Attack.png',
                nframes: 6
            },
            takeHit: {
                imageSrc: './asset/characters/Hero Knight 2/Take Hit.png',
                nframes: 4
            }, 
            death: {
                imageSrc: './asset/characters/Hero Knight 2/Death.png',
                nframes: 9
            }
        },
        attackBox: {
            offset: {
                x: 54,
                y: 70
            },
            width: 118,
            height: 50,
        },
        hitPoint: 4
    },
    
    fortress : {
        velocity: {
            x: 0,
            y: 0
        },
        imageSrc: './asset/characters/Huntress 2/Idle.png',
        scale: 2.9,
        nframes: 10,
        offset: {
            x: 110,
            y: 42
        },
        sprites: {
            idle: {
                imageSrc: './asset/characters/Huntress 2/Idle.png', 
                nframes: 10
            },
            run_right: {
                imageSrc: './asset/characters/Huntress 2/Run.png',
                nframes: 8
            },
            run_left: {
                imageSrc: './asset/characters/Huntress 2/Run_left.png',
                nframes: 8
            },
            jump: {
                imageSrc: './asset/characters/Huntress 2/Jump.png',
                nframes: 2
            },
            fall: {
                imageSrc: './asset/characters/Huntress 2/Fall.png',
                nframes: 2
            },
            attack1: {
                imageSrc: './asset/characters/Huntress 2/Attack.png',
                nframes: 6
            },
            takeHit: {
                imageSrc: './asset/characters/Huntress 2/Get Hit.png',
                nframes: 3
            }, 
            death: {
                imageSrc: './asset/characters/Huntress 2/Death.png',
                nframes: 10
            }
        },
        attackBox: {
            offset: {
                x: 0,
                y: 0
            },
            width: 0,
            height: 0,
        },
        hitPoint: 0,
        rangedWeapon: true,
        damage: 7,
        objectType: {
            velocity: {
                x: 7,
                y: 0
            },
            offset: {
                x: 0,
                y: 63
            },
            imageSrc: './asset/characters/Huntress 2/Static.png',
            scale: 3
        }
    },
    
    immortal_king : {
        velocity: {
            x: 0,
            y: 0
        },
        imageSrc: './asset/characters/Medieval King Pack 2/Idle.png',
        scale: 2.5,
        nframes: 8,
        offset: {
            x: 172,
            y: 110
        },
        sprites: {
            idle: {
                imageSrc: './asset/characters/Medieval King Pack 2/Idle.png', 
                nframes: 8
            },
            run_right: {
                imageSrc: './asset/characters/Medieval King Pack 2/Run.png',
                nframes: 8
            },
            run_left: {
                imageSrc: './asset/characters/Medieval King Pack 2/Run_left.png',
                nframes: 8
            },
            jump: {
                imageSrc: './asset/characters/Medieval King Pack 2/Jump.png',
                nframes: 2
            },
            fall: {
                imageSrc: './asset/characters/Medieval King Pack 2/Fall.png',
                nframes: 2
            },
            attack1: {
                imageSrc: './asset/characters/Medieval King Pack 2/Attack2.png',
                nframes: 4
            },
            takeHit: {
                imageSrc: './asset/characters/Medieval King Pack 2/Take Hit - white silhouette.png',
                nframes: 4
            }, 
            death: {
                imageSrc: './asset/characters/Medieval King Pack 2/Death.png',
                nframes: 6
            }
        },
        attackBox: {
            offset: {
                x: -127,
                y: 50
            },
            width: 350,
            height: 70,
        },
        hitPoint: 2
    },
    
    king : {
        velocity: {
            x: 0,
            y: 0
        },
        imageSrc: './asset/characters/Medieval King Pack/Idle.png',
        scale: 1.8,
        nframes: 6,
        offset: {
            x: 85,
            y: 57
        },
        sprites: {
            idle: {
                imageSrc: './asset/characters/Medieval King Pack/Idle.png', 
                nframes: 6
            },
            run_right: {
                imageSrc: './asset/characters/Medieval King Pack/Run.png',
                nframes: 8
            },
            run_left: {
                imageSrc: './asset/characters/Medieval King Pack/Run_left.png',
                nframes: 8
            },
            jump: {
                imageSrc: './asset/characters/Medieval King Pack/Jump.png',
                nframes: 2
            },
            fall: {
                imageSrc: './asset/characters/Medieval King Pack/Fall.png',
                nframes: 2
            },
            attack1: {
                imageSrc: './asset/characters/Medieval King Pack/Attack_2.png',
                nframes: 6
            },
            takeHit: {
                imageSrc: './asset/characters/Medieval King Pack/Hit.png',
                nframes: 4
            }, 
            death: {
                imageSrc: './asset/characters/Medieval King Pack/Death.png',
                nframes: 11
            }
        },
        attackBox: {
            offset: {
                x: 63,
                y: 30
            },
            width: 125,
            height: 30,
        },
        hitPoint: 3
    },

    nightmare_demon : {
        velocity: {
            x: 0,
            y: 0
        },
        imageSrc: './asset/characters/Night_Bone/Idle.png',
        scale: 1.3,
        nframes: 9,
        offset: {
            x: 135,
            y: 93
        },
        sprites: {
            idle: {
                imageSrc: './asset/characters/Night_Bone/Idle.png', 
                nframes: 9
            },
            run_right: {
                imageSrc: './asset/characters/Night_Bone/Run.png',
                nframes: 6
            },
            run_left: {
                imageSrc: './asset/characters/Night_Bone/Run_left.png',
                nframes: 6
            },
            jump: {
                imageSrc: './asset/characters/Night_Bone/Run.png',
                nframes: 6
            },
            fall: {
                imageSrc: './asset/characters/Night_Bone/Idle.png',
                nframes: 9
            },
            attack1: {
                imageSrc: './asset/characters/Night_Bone/Attack.png',
                nframes: 12
            },
            takeHit: {
                imageSrc: './asset/characters/Night_Bone/Get Hit.png',
                nframes: 5
            }, 
            death: {
                imageSrc: './asset/characters/Night_Bone/Death.png',
                nframes: 23
            }
        },
        attackBox: {
            offset: {
                x: 63,
                y: 10
            },
            width: 110,
            height: 130,
        },
        hitPoint: 9
    },
    
    wizard : {
        velocity: {
            x: 0,
            y: 0
        },
        imageSrc: './asset/characters/Wizard Pack/Idle.png',
        scale: 1.5,
        nframes: 6,
        offset: {
            x: 122,
            y: 60
        },
        sprites: {
            idle: {
                imageSrc: './asset/characters/Wizard Pack/Idle.png', 
                nframes: 6
            },
            run_right: {
                imageSrc: './asset/characters/Wizard Pack/Run.png',
                nframes: 8
            },
            run_left: {
                imageSrc: './asset/characters/Wizard Pack/Run_left.png',
                nframes: 8
            },
            jump: {
                imageSrc: './asset/characters/Wizard Pack/Jump.png',
                nframes: 2
            },
            fall: {
                imageSrc: './asset/characters/Wizard Pack/Fall.png',
                nframes: 2
            },
            attack1: {
                imageSrc: './asset/characters/Wizard Pack/Attack2.png',
                nframes: 8
            },
            takeHit: {
                imageSrc: './asset/characters/Wizard Pack/Hit.png',
                nframes: 4
            }, 
            death: {
                imageSrc: './asset/characters/Wizard Pack/Death.png',
                nframes: 7
            }
        },
        attackBox: {
            offset: {
                x: 80,
                y: 30
            },
            width: 130,
            height: 50,
        },
        hitPoint: 5
    },

    medieval_thief : {
        velocity: {
            x: 0,
            y: 0
        },
        imageSrc: './asset/characters/Medieval Warrior Pack 2/Idle.png',
        scale: 2.8,
        nframes: 8,
        offset: {
            x: 172,
            y: 115
        },
        sprites: {
            idle: {
                imageSrc: './asset/characters/Medieval Warrior Pack 2/Idle.png', 
                nframes: 8
            },
            run_right: {
                imageSrc: './asset/characters/Medieval Warrior Pack 2/Run.png',
                nframes: 8
            },
            run_left: {
                imageSrc: './asset/characters/Medieval Warrior Pack 2/Run_left.png',
                nframes: 8
            },
            jump: {
                imageSrc: './asset/characters/Medieval Warrior Pack 2/Jump.png',
                nframes: 2
            },
            fall: {
                imageSrc: './asset/characters/Medieval Warrior Pack 2/Fall.png',
                nframes: 2
            },
            attack1: {
                imageSrc: './asset/characters/Medieval Warrior Pack 2/Attack4.png',
                nframes: 4
            },
            takeHit: {
                imageSrc: './asset/characters/Medieval Warrior Pack 2/Take Hit - white silhouette.png',
                nframes: 4
            }, 
            death: {
                imageSrc: './asset/characters/Medieval Warrior Pack 2/Death.png',
                nframes: 6
            }
        },
        attackBox: {
            offset: {
                x: 72,
                y: 30
            },
            width: 168,
            height: 100,
        },
        hitPoint: 2
    },

    young_king : {
        velocity: {
            x: 0,
            y: 0
        },
        imageSrc: './asset/characters/Medieval Warrior Pack/Idle.png',
        scale: 1.8,
        nframes: 6,
        offset: {
            x: 120,
            y: 74
        },
        sprites: {
            idle: {
                imageSrc: './asset/characters/Medieval Warrior Pack/Idle.png', 
                nframes: 6
            },
            run_right: {
                imageSrc: './asset/characters/Medieval Warrior Pack/Run.png',
                nframes: 8
            },
            run_left: {
                imageSrc: './asset/characters/Medieval Warrior Pack/Run_left.png',
                nframes: 8
            },
            jump: {
                imageSrc: './asset/characters/Medieval Warrior Pack/Jump.png',
                nframes: 2
            },
            fall: {
                imageSrc: './asset/characters/Medieval Warrior Pack/Fall.png',
                nframes: 2
            },
            attack1: {
                imageSrc: './asset/characters/Medieval Warrior Pack/Attack1.png',
                nframes: 4
            },
            takeHit: {
                imageSrc: './asset/characters/Medieval Warrior Pack/Hit.png',
                nframes: 3
            }, 
            death: {
                imageSrc: './asset/characters/Medieval Warrior Pack/Death.png',
                nframes: 9
            }
        },
        attackBox: {
            offset: {
                x: 68,
                y: 30
            },
            width: 140,
            height: 75,
        },
        hitPoint: 2
    },
}

const environments = {
    "Oak Woods": {
        animated: true,
        src: './asset/environments/oak-woods.png',
        component: {
            position: {x: 600,
                       y: 128},
            properties: {imageSrc: './asset/environments/shop.png',
                         scale: 2.75,
                         nframes: 6}
        }
    },
    "Red River": {
        animated: false,
        src: './asset/environments/red-river.png',
    },
    "Countryside": {
        animated: false,
        src: './asset/environments/countryside.png',
    },
    "Silent Hill": {
        animated: true,
        src: './asset/environments/silent-hill.png',
        component: {
            position: {x: 0,
                       y: -60},
            properties: {imageSrc: './asset/environments/rain30.png',
                         scale: 2.5,
                         nframes: 3}
        }
    },
    "Dark Forest": {
        animated: true,
        src: './asset/environments/dark-forest.png',
        component: {
            position: {x: 0,
                       y: -60},
            properties: {imageSrc: './asset/environments/rain30.png',
                         scale: 2.5,
                         nframes: 3}
        }
    },
    "Dragon Temple": {
        animated: false,
        src: './asset/environments/dragon-temple.png',
    },
    "Sacred Pagoda": {
        animated: false,
        src: './asset/environments/pagoda.png',
    },
    "Town": {
        animated: false,
        src: './asset/environments/town.png',
    },
    "Underworld": {
        animated: false,
        src: './asset/environments/underworld.png',
    }
}
