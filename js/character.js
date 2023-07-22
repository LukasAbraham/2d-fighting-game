// Retrieve the query parameters from the URL
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

// Get the values of p1 and p2 from the query parameters
const p1 = urlParams.get('p1');
const p2 = urlParams.get('p2');

// Use the p1 and p2 values to continue the game
const player_idx = decodeURIComponent(p1)
const enemy_idx = decodeURIComponent(p2)
console.log(`Player 1 character: ${player_idx}`);
console.log(`Player 2 character: ${enemy_idx}`);

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
            run: {
                imageSrc: './asset/characters/samuraiMack/Run.png',
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
            run: {
                imageSrc: './asset/characters/kenji/Run.png',
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
            x: 215,
            y: 266
        },
        sprites: {
            idle: {
                imageSrc: './asset/characters/EVil Wizard 2/Idle.png', 
                nframes: 8
            },
            run: {
                imageSrc: './asset/characters/EVil Wizard 2/Run.png',
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
                x: 130,
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
            x: 215,
            y: 105
        },
        sprites: {
            idle: {
                imageSrc: './asset/characters/Evil Wizard/Idle.png', 
                nframes: 8
            },
            run: {
                imageSrc: './asset/characters/Evil Wizard/Move.png',
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
                x: 0,
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
            x: 215,
            y: 123
        },
        sprites: {
            idle: {
                imageSrc: './asset/characters/Fantasy Warrior/Idle.png', 
                nframes: 10
            },
            run: {
                imageSrc: './asset/characters/Fantasy Warrior/Run.png',
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
                x: 15,
                y: 60
            },
            width: 150,
            height: 80,
        }
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
            x: 215,
            y: 90
        },
        sprites: {
            idle: {
                imageSrc: './asset/characters/Free_Knight/_Idle.png', 
                nframes: 10
            },
            run: {
                imageSrc: './asset/characters/Free_Knight/_Run.png',
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
                imageSrc: './asset/characters/Free_Knight/_Roll.png',
                nframes: 12
            }, 
            death: {
                imageSrc: './asset/characters/Free_Knight/_Death.png',
                nframes: 10
            }
        },
        attackBox: {
            offset: {
                x: -20,
                y: 50
            },
            width: 133,
            height: 80,
        }
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
            x: 215,
            y: 133
        },
        sprites: {
            idle: {
                imageSrc: './asset/characters/Hero Knight/Idle.png', 
                nframes: 11
            },
            run: {
                imageSrc: './asset/characters/Hero Knight/Run.png',
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
                x: 45,
                y: 50
            },
            width: 176,
            height: 80,
        }
    },
    
    huntress : {
        velocity: {
            x: 0,
            y: 0
        },
        imageSrc: './asset/characters/Huntress/Idle.png',
        scale: 2.5,
        nframes: 8,
        offset: {
            x: 215,
            y: 90
        },
        sprites: {
            idle: {
                imageSrc: './asset/characters/Huntress/Idle.png', 
                nframes: 8
            },
            run: {
                imageSrc: './asset/characters/Huntress/Run.png',
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
                imageSrc: './asset/characters/Huntress/Attack2.png',
                nframes: 5
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
                x: -20,
                y: 50
            },
            width: 120,
            height: 80,
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
            x: 215,
            y: 54
        },
        sprites: {
            idle: {
                imageSrc: './asset/characters/Martial Hero 3/Idle.png', 
                nframes: 10
            },
            run: {
                imageSrc: './asset/characters/Martial Hero 3/Run.png',
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
                x: -20,
                y: 80
            },
            width: 115,
            height: 50,
        }
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
            x: 215,
            y: 105
        },
        sprites: {
            idle: {
                imageSrc: './asset/characters/Medieval Warrior Pack 3/Idle.png', 
                nframes: 10
            },
            run: {
                imageSrc: './asset/characters/Medieval Warrior Pack 3/Run.png',
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
                x: 20,
                y: 50
            },
            width: 133,
            height: 70,
        }
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
            x: 215,
            y: 81
        },
        sprites: {
            idle: {
                imageSrc: './asset/characters/Hero Knight 2/Idle.png', 
                nframes: 11
            },
            run: {
                imageSrc: './asset/characters/Hero Knight 2/Run.png',
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
                x: 0,
                y: 70
            },
            width: 118,
            height: 50,
        }
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
            x: 215,
            y: 42
        },
        sprites: {
            idle: {
                imageSrc: './asset/characters/Huntress 2/Idle.png', 
                nframes: 10
            },
            run: {
                imageSrc: './asset/characters/Huntress 2/Run.png',
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
                x: -176,
                y: 50
            },
            width: 176,
            height: 50,
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
            x: 215,
            y: 110
        },
        sprites: {
            idle: {
                imageSrc: './asset/characters/Medieval King Pack 2/Idle.png', 
                nframes: 8
            },
            run: {
                imageSrc: './asset/characters/Medieval King Pack 2/Run.png',
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
                x: -170,
                y: 50
            },
            width: 350,
            height: 70,
        }
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
            x: 215,
            y: 57
        },
        sprites: {
            idle: {
                imageSrc: './asset/characters/Medieval King Pack/Idle.png', 
                nframes: 6
            },
            run: {
                imageSrc: './asset/characters/Medieval King Pack/Run.png',
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
                x: -70,
                y: 30
            },
            width: 125,
            height: 30,
        }
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
            x: 215,
            y: 93
        },
        sprites: {
            idle: {
                imageSrc: './asset/characters/Night_Bone/Idle.png', 
                nframes: 9
            },
            run: {
                imageSrc: './asset/characters/Night_Bone/Run.png',
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
                x: -20,
                y: 10
            },
            width: 110,
            height: 130,
        }
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
            x: 215,
            y: 60
        },
        sprites: {
            idle: {
                imageSrc: './asset/characters/Wizard Pack/Idle.png', 
                nframes: 6
            },
            run: {
                imageSrc: './asset/characters/Wizard Pack/Run.png',
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
                x: -20,
                y: 30
            },
            width: 130,
            height: 50,
        }
    },
}

