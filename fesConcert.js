primJsp([0], {
    1021: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = [{
            type: "by",
            props: {
                y: 40
            },
            frame: 10,
            easing: "easeInOutQuad"
        }]
          , r = [{
            type: "by",
            props: {
                y: -40
            },
            frame: 10,
            easing: "easeInOutQuad"
        }];
        t.activeSkillCutIn = {
            fadeInSkillInfo: [{
                type: "to",
                props: {
                    alpha: 1
                },
                frame: 10,
                easing: "easeInOutQuad"
            }],
            fadeOut: [{
                type: "by",
                props: {
                    alpha: -1,
                    x: -4
                },
                frame: 4
            }]
        },
        t.playerSkillCutIn = {
            slideInBase: [{
                type: "by",
                props: {
                    x: -680
                },
                frame: 5,
                easing: "easeInOutQuart"
            }, {
                type: "by",
                props: {
                    x: -20
                },
                frame: 42
            }, {
                event: "fadeOut"
            }, {
                type: "by",
                props: {
                    x: -1
                },
                frame: 4
            }],
            slideInIdol: [{
                type: "by",
                props: {
                    x: -270
                },
                frame: 4,
                easing: "easeInQuad"
            }, {
                type: "by",
                props: {
                    x: -605
                },
                frame: 8,
                easing: "easeOutQuad"
            }, {
                type: "by",
                props: {
                    x: -15
                },
                frame: 42
            }, {
                type: "by",
                props: {
                    x: -1
                },
                frame: 4
            }]
        },
        t.rivalSkillCutIn = {
            slideInBase: [{
                type: "by",
                props: {
                    x: -680
                },
                frame: 5,
                easing: "easeInOutQuart"
            }, {
                type: "by",
                props: {
                    x: -20
                },
                frame: 30
            }, {
                event: "fadeOut"
            }, {
                type: "by",
                props: {
                    x: -1
                },
                frame: 4
            }],
            slideInIdol: [{
                type: "by",
                props: {
                    x: -420
                },
                frame: 5,
                easing: "easeInOutQuart"
            }, {
                type: "by",
                props: {
                    x: -15
                },
                frame: 24
            }, {
                type: "by",
                props: {
                    x: -1
                },
                frame: 4
            }]
        },
        t.idolAttackDamageText = {
            appear: [{
                type: "to",
                props: {
                    scaleX: 1.1,
                    scaleY: 1.1
                },
                frame: 3
            }, {
                type: "to",
                props: {
                    scaleX: .96,
                    scaleY: .96
                },
                frame: 3
            }, {
                type: "to",
                props: {
                    scaleX: 1,
                    scaleY: 1
                },
                frame: 5
            }, {
                type: "to",
                props: {
                    scaleX: 1.2,
                    scaleY: 1.2
                },
                frame: 6
            }],
            hit: [{
                type: "set",
                props: {
                    scaleX: .8,
                    scaleY: .8
                }
            }, {
                type: "by",
                props: {
                    y: -15
                },
                frame: 3,
                easing: "easeInOutQuad"
            }, {
                type: "by",
                props: {
                    y: 15
                },
                frame: 5,
                easing: "easeInOutQuad"
            }, {
                wait: 6
            }, {
                type: "to",
                props: {
                    alpha: 0
                },
                frame: 10
            }],
            appearFromRival: [{
                type: "to",
                props: {
                    scaleX: 1.1,
                    scaleY: 1.1
                },
                frame: 3
            }, {
                type: "to",
                props: {
                    scaleX: .9,
                    scaleY: .9
                },
                frame: 3
            }, {
                wait: 12
            }, {
                type: "to",
                props: {
                    alpha: 0
                },
                frame: 4
            }]
        },
        t.judge = {
            moveArrow: [{
                type: "by",
                props: {
                    x: -10
                },
                frame: 15,
                easing: "easeInOutQuad"
            }, {
                type: "by",
                props: {
                    x: 10
                },
                frame: 15,
                easing: "easeInOutQuad"
            }],
            targetFrame: [{
                type: "to",
                props: {
                    scaleX: 1.3,
                    scaleY: 1.3,
                    alpha: 0
                },
                frame: 19
            }],
            goForward: [{
                type: "by",
                props: {
                    x: 100,
                    scaleX: .2,
                    scaleY: .2
                },
                frame: 5,
                easing: "easeInOutQuad"
            }],
            backFromForward: [{
                type: "by",
                props: {
                    x: -100,
                    scaleX: -.2,
                    scaleY: -.2
                },
                frame: 5,
                easing: "easeInOutQuad"
            }],
            goBackward: [{
                type: "by",
                props: {
                    x: -100
                },
                frame: 5,
                easing: "easeInOutQuad"
            }],
            backFromBackward: [{
                type: "by",
                props: {
                    x: 100
                },
                frame: 5,
                easing: "easeInOutQuad"
            }],
            showAttackOrder: [{
                parallel: [{
                    series: [{
                        type: "by",
                        props: {
                            x: 6
                        },
                        frame: 2,
                        easing: "easeInQuart"
                    }, {
                        type: "by",
                        props: {
                            x: 14
                        },
                        frame: 8,
                        easing: "easeOutQuart"
                    }]
                }, {
                    type: "to",
                    props: {
                        alpha: 1
                    },
                    frame: 5
                }]
            }],
            hideAttackOrder: [{
                type: "to",
                props: {
                    alpha: 0
                },
                frame: 10
            }]
        },
        t.judgeList = {
            slideIn: [{
                type: "from",
                props: {
                    x: -133
                },
                frame: 20,
                easing: "easeInOutQuart"
            }],
            slideDown: n,
            slideUp: r
        },
        t.playerIdol = {
            showAttackOrder: [{
                parallel: [{
                    series: [{
                        type: "by",
                        props: {
                            x: -6
                        },
                        frame: 2,
                        easing: "easeInQuart"
                    }, {
                        type: "by",
                        props: {
                            x: -14
                        },
                        frame: 8,
                        easing: "easeOutQuart"
                    }]
                }, {
                    type: "to",
                    props: {
                        alpha: 1
                    },
                    frame: 5
                }]
            }],
            showAttackResult: [{
                parallel: [{
                    type: "by",
                    props: {
                        y: -24
                    },
                    frame: 3
                }, {
                    type: "to",
                    props: {
                        alpha: 1
                    },
                    frame: 3
                }]
            }, {
                type: "by",
                props: {
                    y: 4
                },
                frame: 7
            }],
            hideAttackOrder: [{
                type: "to",
                props: {
                    alpha: 0
                },
                frame: 10
            }],
            goForward: [{
                type: "by",
                props: {
                    x: -200
                },
                frame: 3,
                easing: "easeOutQuad"
            }],
            backFromForward: [{
                type: "by",
                props: {
                    x: 200
                },
                frame: 3,
                easing: "easeOutQuad"
            }]
        },
        t.playerIdolList = {
            slideIn: [{
                type: "from",
                props: {
                    x: 1068
                },
                frame: 20,
                easing: "easeInOutQuart"
            }],
            slideDown: n,
            slideUp: r
        },
        t.stageLayer = {
            showOverlay: [{
                type: "to",
                props: {
                    alpha: .3
                },
                frame: 6
            }],
            hideOverlay: [{
                type: "to",
                props: {
                    alpha: 0
                },
                frame: 6
            }]
        },
        t.skillSelectLayer = {
            slideIn: function(e) {
                return [{
                    type: "to",
                    props: {
                        y: e.y
                    },
                    frame: 20,
                    easing: "easeInOutQuart"
                }]
            },
            slideDown: [{
                type: "by",
                props: {
                    y: 131
                },
                frame: 10,
                easing: "easeInOutQuart"
            }],
            slideUp: [{
                type: "by",
                props: {
                    y: -131
                },
                frame: 10,
                easing: "easeInOutQuart"
            }]
        },
        t.skillCard = {
            slideUp: [{
                type: "by",
                props: {
                    y: -32
                },
                frame: 2,
                easing: "easeInQuart"
            }, {
                type: "by",
                props: {
                    y: -68
                },
                frame: 8,
                easing: "easeOutQuart"
            }],
            select: [{
                type: "by",
                props: {
                    y: -30
                },
                frame: 5,
                easing: "easeInOutQuart"
            }],
            cancel: [{
                type: "by",
                props: {
                    y: 30
                },
                frame: 5,
                easing: "easeInOutQuart"
            }],
            disappear: [{
                parallel: [{
                    series: [{
                        type: "by",
                        props: {
                            y: -13
                        },
                        frame: 1,
                        easing: "easeInQuart"
                    }, {
                        type: "by",
                        props: {
                            y: -27
                        },
                        frame: 4,
                        easing: "easeOutQuart"
                    }]
                }, {
                    type: "to",
                    props: {
                        scaleX: 1.2,
                        scaleY: 1.2,
                        alpha: 0
                    },
                    frame: 5
                }]
            }]
        },
        t.skillDetailList = {
            slideIn: [{
                type: "by",
                props: {
                    y: -40
                },
                frame: 1,
                easing: "easeInQuart"
            }, {
                type: "by",
                props: {
                    y: -231
                },
                frame: 8,
                easing: "easeOutQuart"
            }],
            slideOut: [{
                type: "by",
                props: {
                    y: 40
                },
                frame: 1,
                easing: "easeInQuart"
            }, {
                event: "switch"
            }, {
                type: "by",
                props: {
                    y: 231
                },
                frame: 7,
                easing: "easeOutQuart"
            }],
            disappear: [{
                type: "to",
                props: {
                    scaleX: 1.2,
                    scaleY: 1.2,
                    alpha: 0
                },
                frame: 5
            }]
        },
        t.memorySkillCard = {
            slideUp: [{
                type: "by",
                props: {
                    y: -36
                },
                frame: 2,
                easing: "easeInQuart"
            }, {
                type: "by",
                props: {
                    y: -76
                },
                frame: 8,
                easing: "easeOutQuart"
            }],
            select: [{
                type: "by",
                props: {
                    y: -20
                },
                frame: 5,
                easing: "easeInOutQuart"
            }],
            cancel: [{
                type: "by",
                props: {
                    y: 20
                },
                frame: 5,
                easing: "easeInOutQuart"
            }]
        },
        t.timingGaugeGroup = {
            appearGauge: [{
                parallel: [{
                    type: "from",
                    props: {
                        scaleX: 1.49,
                        scaleY: 1.49
                    },
                    frame: 5,
                    easing: "easeInOutQuart"
                }, {
                    type: "from",
                    props: {
                        alpha: 0
                    },
                    frame: 5
                }]
            }],
            disappear: [{
                wait: 9
            }, {
                type: "to",
                props: {
                    alpha: 0
                },
                frame: 6
            }],
            showResult: [{
                type: "set",
                props: {
                    scaleX: .5,
                    scaleY: .5
                }
            }, {
                type: "to",
                props: {
                    scaleX: 1,
                    scaleY: 1
                },
                frame: 2
            }, {
                type: "to",
                props: {
                    scaleX: 1.1,
                    scaleY: 1.1
                },
                frame: 10
            }],
            appearReadyIn: [{
                type: "set",
                props: {
                    alpha: 0
                }
            }, {
                type: "by",
                props: {
                    y: -20,
                    alpha: 1
                },
                frame: 3
            }],
            appealReadyOut: [{
                parallel: [{
                    type: "by",
                    props: {
                        y: -12
                    },
                    frame: 21
                }, {
                    series: [{
                        type: "by",
                        props: {},
                        frame: 18
                    }, {
                        type: "by",
                        props: {
                            alpha: -1
                        },
                        frame: 3
                    }]
                }]
            }]
        },
        t.turn = {
            slideIn: [{
                type: "from",
                props: {
                    scaleX: 1,
                    scaleY: 1
                },
                frame: 1
            }]
        }
    },
    1022: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = ["concert_note_1.png", "concert_note_2.png", "concert_note_3.png", "concert_note_4.png"]
          , r = t.twinkle = {
            data: "particles/concert/common/twinkle.json",
            images: ["concert_twinkle.png"]
        }
          , i = t.flashLine1 = {
            data: "particles/concert/common/flash_line_1.json",
            images: ["concert_flash_line.png"]
        }
          , o = t.flashLine2 = {
            data: "particles/concert/common/flash_line_2.json",
            images: ["concert_flash_line.png"]
        }
          , l = t.flashLine3 = {
            data: "particles/concert/common/flash_line_3.json",
            images: ["concert_flash_line.png"]
        }
          , s = t.flashLine3Down = {
            data: "particles/concert/common/flash_line_3_down.json",
            images: ["concert_flash_line.png"]
        }
          , c = t.flashLine3Up = {
            data: "particles/concert/common/flash_line_3_up.json",
            images: ["concert_flash_line.png"]
        }
          , u = t.flashLineRing = {
            data: "particles/concert/common/flash_line_ring.json",
            images: ["concert_flash_line.png"]
        }
          , f = t.flashSpark3 = {
            data: "particles/concert/common/flash_spark_3.json",
            images: ["light_cross_flare_purple.png"]
        }
          , d = t.flashSpark4 = {
            data: "particles/concert/common/flash_spark_4.json",
            images: ["concert_twinkle.png"]
        }
          , p = t.retireAura = {
            data: "particles/concert/common/retire_aura.json",
            images: ["concert_circle_boke.png"]
        }
          , h = t.retireFlash = {
            data: "particles/concert/common/retire_flash.json",
            images: ["light_cross_flare_purple.png", "concert_common_particle.png"]
        }
          , y = t.melancholy = [{
            data: "particles/concert/common/melancholy_1.json",
            images: ["melancholy_1.png"],
            blendMode: PIXI.BLEND_MODES.SCREEN
        }, {
            data: "particles/concert/common/melancholy_2.json",
            images: ["melancholy_2.png"],
            blendMode: PIXI.BLEND_MODES.ADD
        }]
          , _ = t.arrowUp = {
            data: "particles/concert/common/arrow_up.json",
            images: ["concert_arrow_up.png"]
        }
          , m = t.arrowDown = {
            data: "particles/concert/common/arrow_down.json",
            images: ["concert_arrow_down.png"]
        }
          , g = t.idolBuff = {
            data: "particles/concert/common/idol_buff.json",
            images: ["concert_arrow_up.png"]
        }
          , b = t.idolDebuff = {
            data: "particles/concert/common/idol_debuff.json",
            images: ["concert_arrow_down.png"]
        }
          , v = t.idolGainStar = {
            data: "particles/concert/common/idol_gain_star.json",
            images: ["concert_flash_line.png"]
        }
          , w = t.stageFlash011 = {
            data: "particles/concert/common/stage_flash_011.json",
            images: ["concert_flash_line.png"]
        }
          , k = t.stageFlash012 = {
            data: "particles/concert/common/stage_flash_012.json",
            images: ["concert_flash_line.png"]
        }
          , S = t.stageFlash013 = {
            data: "particles/concert/common/stage_flash_013.json",
            images: ["concert_flash_line.png"]
        }
          , E = t.timingPerfect = {
            top: {
                data: "particles/concert/common/timing_perfect_top.json",
                images: ["concert_star_b.png", "concert_star_g.png", "concert_star_p.png", "concert_star_w.png", "concert_star_y.png", "concet_sparks.png"]
            },
            center: {
                data: "particles/concert/common/timing_perfect_center.json",
                images: ["concert_star_b.png", "concert_star_g.png", "concert_star_p.png", "concert_star_w.png", "concert_star_y.png"]
            }
        }
          , T = t.timingGood = {
            top: {
                data: "particles/concert/common/timing_good_top.json",
                images: ["concert_star_y.png", "concet_sparks.png"]
            },
            center: {
                data: "particles/concert/common/timing_good_center.json",
                images: ["concert_star_w.png", "concert_star_y.png"]
            }
        }
          , O = t.timingNormal = {
            top: {
                data: "particles/concert/common/timing_normal_top.json",
                images: ["concert_star_y.png", "concet_sparks.png"]
            }
        }
          , x = t.timingBad = {
            top: {
                data: "particles/concert/common/timing_bad_top.json",
                images: ["concert_smoke.png"]
            },
            center: {
                data: "particles/concert/common/timing_bad_center.json",
                images: ["concert_smoke.png"]
            }
        }
          , P = t.memoryAppeal = {
            bg: {
                data: "particles/concert/memory_appeal/bg.json",
                images: ["concert_cross_particle.png", "concert_flash_light.png", "concert_hexagon.png"]
            },
            impact: {
                data: "particles/concert/memory_appeal/impact.json",
                images: ["concert_cross_particle.png", "concert_hexagon.png"]
            },
            spark: {
                data: "particles/concert/memory_appeal/spark.json",
                images: ["concert_cross_particle.png", "concert_hexagon.png"]
            },
            burst: {
                data: "particles/concert/memory_appeal/wing_burst.json",
                images: ["wing_128.png"]
            }
        }
          , I = t.memoryAppealGauge = {
            heart1: {
                data: "particles/concert/memory_appeal_gauge/heart_1.json",
                images: ["concert_heart.png", "concert_twinkle2.png"]
            },
            heart2: {
                data: "particles/concert/memory_appeal_gauge/heart_2.json",
                images: ["concert_heart.png", "concert_twinkle2.png"]
            }
        }
          , M = t.raiseMemoryAppeal = {
            heart1: {
                data: "particles/concert/raise_memory_appeal/live_omoide_heart_1.json",
                images: ["particle_pixi_1.png"]
            },
            heartBig: {
                data: "particles/concert/raise_memory_appeal/live_omoide_heart_big.json",
                images: ["omoide_heart.png", "omoide_heart_2.png", "omoide_heart_3.png"]
            },
            heartHit: {
                data: "particles/concert/raise_memory_appeal/live_omoide_heart_hit.json",
                images: ["particle_pixi_3.png"]
            },
            heartHitTwinkle: {
                data: "particles/concert/raise_memory_appeal/live_omoide_heart_hit_twinkle.json",
                images: ["particle_pixi_2.png"]
            }
        }
          , A = t.lowerMemoryAppeal = {
            heart: {
                data: "particles/concert/lower_memory_appeal/down.json",
                images: ["down01.png", "down02.png"]
            },
            hajiki: {
                data: "particles/concert/lower_memory_appeal/hajiki.json",
                images: ["hajiki.png"]
            },
            memoryDownMelancholy1: {
                data: "particles/concert/lower_memory_appeal/omoide_down_Melancholy.json",
                images: ["omoide_down_Melancholy.png"]
            },
            memoryDownMelancholy2: {
                data: "particles/concert/lower_memory_appeal/omoide_down_Melancholy2.json",
                images: ["omoide_down_Melancholy2.png"]
            }
        }
          , j = t.recoverSkill = {
            note: {
                data: "particles/concert/recover_skill/note.json",
                images: n
            },
            wave: {
                data: "particles/concert/recover_skill/wave.json",
                images: ["concert_twinkle.png"]
            }
        }
          , C = t.judgeAttack = {
            trailBoke: {
                data: "particles/concert/judge_attack/trail_boke.json",
                images: ["concert_common_particle.png"]
            },
            trail: {
                data: "particles/concert/judge_attack/trail.json",
                images: ["judge_attack_trail_boke.png"]
            }
        }
          , D = t.rivalAttack = {
            hit: {
                data: "particles/concert/rival_attack/hit.json",
                images: n
            },
            trail: {
                data: "particles/concert/rival_attack/trail.json",
                images: n
            },
            charge: {
                data: "particles/concert/rival_attack/charge.json",
                images: ["concert_common_particle.png"]
            }
        }
          , R = t.idolAttack = {
            hit: {
                data: "particles/concert/idol_attack/hit.json",
                images: n
            },
            trail: {
                data: "particles/concert/idol_attack/trail.json",
                images: n
            },
            origin: {
                data: "particles/concert/idol_attack/origin.json",
                images: ["concert_common_particle.png"]
            },
            charge: {
                data: "particles/concert/idol_attack/charge.json",
                images: ["concert_common_particle.png"]
            }
        }
          , L = t.heart = {
            hit: {
                data: "particles/concert/heart/hit.json",
                images: ["concert_heart.png", "concert_twinkle2.png"]
            },
            trail: {
                data: "particles/concert/heart/trail.json",
                images: ["concert_heart.png", "concert_twinkle2.png"]
            }
        }
          , F = t.star = {
            trail: {
                data: "particles/concert/star/trail.json",
                images: ["concert_star_particle.png"]
            },
            trailBoke: {
                data: "particles/concert/star/trail_boke.json",
                images: ["concert_common_particle.png"]
            },
            hit: {
                data: "particles/concert/star/hit.json",
                images: ["concert_star_particle.png"]
            }
        }
          , N = {
            starLine: {
                data: "particles/concert/link_appeal/star_line.json",
                images: ["concert_star_w.png"]
            },
            wingBack: {
                data: "particles/concert/link_appeal/wing_back.json",
                images: ["wing_link.png"]
            },
            wingFront: {
                data: "particles/concert/link_appeal/wing_front.json",
                images: ["wing_link.png"]
            }
        }
          , B = {
            feather: {
                data: "particles/concert/reraise_skill/reraise_feather_2.json",
                images: ["wing_link.png"]
            },
            twinkle1: {
                data: "particles/concert/reraise_skill/reraise_feather_twinkle_1.json",
                images: ["reraise_skill_twinkle_1.png", "reraise_skill_twinkle_2.png", "reraise_skill_twinkle_3.png", "reraise_skill_twinkle_4.png"]
            },
            twinkle2: {
                data: "particles/concert/reraise_skill/reraise_twinkle_2.json",
                images: ["reraise_skill_twinkle_1.png", "reraise_skill_twinkle_2.png", "reraise_skill_twinkle_3.png", "reraise_skill_twinkle_4.png"]
            },
            cutIn_feather: {
                data: "particles/concert/reraise_skill/reraise_feather_1.json",
                images: ["wing_link.png"]
            },
            cutIn_twinkle: {
                data: "particles/concert/reraise_skill/reraise_twinkle_1.json",
                images: ["reraise_skill_twinkle_1.png", "reraise_skill_twinkle_2.png", "reraise_skill_twinkle_3.png", "reraise_skill_twinkle_4.png"]
            }
        }
          , G = {
            twinkle1: {
                data: "particles/concert/reraise_skill/reraise_twinkle_5.json",
                images: ["reraise_skill_twinkle_1.png", "reraise_skill_twinkle_2.png", "reraise_skill_twinkle_3.png", "reraise_skill_twinkle_4.png"]
            },
            twinkle2: {
                data: "particles/concert/reraise_skill/reraise_twinkle_6.json",
                images: ["concert_circle_1.png", "concert_circle_2.png", "concert_circle_3.png", "concert_circle_4.png", "concert_circle_5.png"]
            }
        };
        t.default = {
            twinkle: r,
            flashLine1: i,
            flashLine2: o,
            flashLine3: l,
            flashLine3Down: s,
            flashLine3Up: c,
            flashLineRing: u,
            melancholy: y,
            arrowUp: _,
            arrowDown: m,
            idolBuff: g,
            idolDebuff: b,
            idolGainStar: v,
            memoryAppeal: P,
            memoryAppealGauge: I,
            linkAppeal: N,
            raiseMemoryAppeal: M,
            lowerMemoryAppeal: A,
            recoverSkill: j,
            idolAttack: R,
            judgeAttack: C,
            rivalAttack: D,
            flashSpark3: f,
            flashSpark4: d,
            stageFlash011: w,
            stageFlash012: k,
            stageFlash013: S,
            timingPerfect: E,
            timingGood: T,
            timingNormal: O,
            timingBad: x,
            retireAura: p,
            retireFlash: h,
            heart: L,
            star: F,
            activeReraiseSkill: B,
            passiveReraiseSkill: G
        }
    },
    1026: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = {
            children: [{
                name: "skillDetailBase",
                fullName: "skillDetailBase",
                type: "sprite",
                key: "skill_detail_base.png",
                x: 0,
                y: 0
            }, {
                name: "idolIcon",
                fullName: "idolIcon",
                type: "sprite",
                key: "idol_icon.png",
                x: 19,
                y: 11
            }, {
                name: "name",
                fullName: "name",
                type: "text",
                text: "",
                style: {
                    fill: 16777215,
                    fontFamily: "UDKakugo_SmallPr6-B",
                    fontSize: 16
                },
                anchor: {
                    x: 0,
                    y: .5
                },
                rotation: 0,
                x: 16,
                y: 79
            }, {
                name: "description",
                fullName: "description",
                anchor: {
                    x: 0,
                    y: 0
                },
                type: "text",
                text: "",
                style: {
                    fill: 16777215,
                    fontFamily: "UDKakugo_SmallPr6-B",
                    fontSize: 14
                },
                rotation: 0,
                x: 22,
                y: 92
            }],
            name: "",
            fullName: "",
            type: "container",
            x: 275,
            y: 376
        }
    },
    1032: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = {
            prepare: "sounds/se/138.m4a",
            start: "sounds/se/139.m4a",
            turnStart: "sounds/se/140.m4a",
            passiveSkill: "sounds/se/033.m4a",
            drawCard: "sounds/se/142.m4a",
            increaseMemory: "sounds/se/143.m4a",
            maxMemory: "sounds/se/144.m4a",
            selectCard: "sounds/se/145.m4a",
            showAttackOrder: "sounds/se/146.m4a",
            selectJudgeTarget: "sounds/se/147.m4a",
            gaugeStart: "sounds/se/148.m4a",
            gaugeBad: "sounds/se/149.m4a",
            gaugeNormal: "sounds/se/150.m4a",
            gaugeGood: "sounds/se/151.m4a",
            gaugePerfect: "sounds/se/152.m4a",
            appealStart: "sounds/se/153.m4a",
            showDamageText: "sounds/se/154.m4a",
            hitIdolAppeal: "sounds/se/155.m4a",
            audienceVoice: "sounds/se/162.m4a",
            idolReceiveDamage: "sounds/se/165.m4a",
            idolSpecialAttack: "sounds/se/193.m4a",
            idolNormalAttack: "sounds/se/194.m4a",
            reachJudgeGauge: "sounds/se/156a.m4a",
            giveBonus1: "sounds/se/156b2.m4a",
            giveBonus2: "sounds/se/156c2.m4a",
            linkSkill: "sounds/se/157.m4a",
            startMemoryRoulette: "sounds/se/166.m4a",
            memoryRouletteGood: "sounds/se/167.m4a",
            memoryRouletteBad: "sounds/se/168.m4a",
            memoryRouletteMiss: "sounds/se/169.m4a",
            showMemoryCutIn: "sounds/se/170.m4a",
            showBuffEffect: "sounds/se/114a.m4a",
            showDebuffEffect: "sounds/se/115.m4a",
            showRecoverEffect: "sounds/se/116.m4a",
            showActiveReraiseEffect: "sounds/se/409_1.m4a",
            showActiveReraiseEffect2: "sounds/se/409_2.m4a",
            showActiveReraiseRivalEffect: "sounds/se/409_r_1.m4a",
            showActiveReraiseRivalEffect2: "sounds/se/409_r_2.m4a",
            showPassiveReraiseEffect: "sounds/se/410.m4a",
            useSkillOfRaiseMemoryAppeal: "sounds/se/330.m4a",
            raiseMemoryAppealOfActor: "sounds/se/331.m4a",
            idolRetire: "sounds/se/concert_result/0135.m4a"
        }
    },
    1042: function(e, t, a) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = a(2)
          , i = n(r)
          , o = a(1094)
          , l = n(o)
          , s = {
            AUDITION: function(e) {
                return e > 15 ? {
                    bg: "images/bg/concert/audition_4.jpg",
                    effect: "effect_audition_4.png"
                } : e > 10 ? {
                    bg: "images/bg/concert/audition_3.jpg",
                    effect: "effect_audition_3.png"
                } : e > 5 ? {
                    bg: "images/bg/concert/audition_2.jpg",
                    effect: "effect_audition_2.png"
                } : {
                    bg: "images/bg/concert/audition_1.jpg",
                    effect: "effect_audition_1.png"
                }
            },
            CONCERT: {
                WING: {
                    bg: "images/bg/concert/wing_last_live.jpg",
                    effect: "effect_last_live.png"
                },
                FAN_MEETING: {
                    bg: "images/bg/concert/fan_meeting_last_live.jpg",
                    effect: "effect_fan_meeting_live.png"
                },
                FAN_MEETING_REHEARSAL: {
                    bg: "images/bg/concert/fan_meeting_rehearsal_live.jpg",
                    effect: "effect_fan_meeting_rehearsal_live.png"
                }
            },
            FES: {
                bg: "images/bg/concert/fes.jpg",
                effect: "effect_fes.png"
            },
            AUDITION_SELECT: {
                bg: "images/bg/concert/audition_4.jpg",
                effect: "effect_audition_4.png"
            },
            TV: {
                bg: "images/bg/020.jpg"
            }
        }
          , c = {
            NORMAL: {
                left: "speaker_left.png",
                right: "speaker_right.png",
                dx: 0,
                dy: 0
            },
            LARGE: {
                left: "speaker_l_left.png",
                right: "speaker_l_right.png",
                dx: 0,
                dy: -36
            },
            NORMAL_LIGHT: {
                left: "speaker_light_left.png",
                right: "speaker_light_right.png",
                dx: 45,
                dy: 30
            },
            LARGE_LIGHT: {
                left: "speaker_l_light_left.png",
                right: "speaker_l_light_right.png",
                dx: -10,
                dy: -65
            },
            NONE: null
        }
          , u = {
            CONCERT: {
                WING: {
                    image1: "audience_last_live_1.png",
                    image2: "audience_last_live_2.png"
                },
                FAN_MEETING: {
                    image1: "audience_last_live_1.png",
                    image2: "audience_last_live_2.png"
                }
            },
            FES: {
                image1: "audience_fes_1.png",
                image2: "audience_fes_2.png"
            }
        }
          , f = {
            NORMAL: "effect_side.png",
            RAINBOW: "effect_side_rainbow.png"
        }
          , d = {
            COMMON: {
                spotLight1: {
                    key: "spotlight_1.png",
                    scale: 2.03,
                    dx: 0,
                    dy: 0
                },
                spotLight2: {
                    key: "spotlight_2.png",
                    scale: 2.87,
                    dx: 0,
                    dy: 0
                }
            },
            FAN_MEETING: {
                spotLight1: {
                    key: "spotlight_fan_meeting_1.png",
                    scale: 1,
                    dx: 0,
                    dy: -115
                },
                spotLight2: {
                    key: "spotlight_fan_meeting_2.png",
                    scale: 1.51,
                    dx: 10,
                    dy: -70
                }
            },
            FAN_MEETING_REHEARSAL: {
                spotLight1: {
                    key: "spotlight_fan_meeting_rehearsal_1.png",
                    scale: 2.03,
                    dx: -10,
                    dy: 0
                },
                spotLight2: {
                    key: "spotlight_fan_meeting_rehearsal_2.png",
                    scale: 2.8,
                    dx: 0,
                    dy: 20
                }
            }
        }
          , p = {
            COMMON: {
                light1: {
                    dx: 10,
                    dy: -6
                },
                light2: {
                    dx: 10,
                    dy: -6
                },
                light3: {
                    dx: 0,
                    dy: 0
                },
                light4: {
                    dx: 0,
                    dy: 0
                }
            },
            FAN_MEETING: {
                light1: {
                    dx: 22,
                    dy: -22
                },
                light2: {
                    dx: 20,
                    dy: -18
                },
                light3: {
                    dx: -12,
                    dy: -14
                },
                light4: {
                    dx: -28,
                    dy: -18
                }
            },
            FAN_MEETING_REHEARSAL: {
                light1: {
                    dx: 30,
                    dy: -10
                },
                light2: {
                    dx: 23,
                    dy: -6
                },
                light3: {
                    dx: -15,
                    dy: -2
                },
                light4: {
                    dx: -25,
                    dy: -6
                }
            }
        }
          , h = function(e, t, a, n) {
            var r = function(e) {
                aoba.Tween.new(e).to({
                    alpha: 1
                }, 800, "easeOutQuad").wait(200).to({
                    alpha: 0
                }, 800, "easeInQuad").loop()
            };
            [e, t, a, n].forEach(function(e, t) {
                t >= 2 ? aoba.Tween.createBlank().wait(900).call(function() {
                    return r(e)
                }) : r(e)
            })
        }
          , y = function(e, t) {
            var a = function(e) {
                aoba.Tween.new(e).to({
                    alpha: 1
                }, 640).to({
                    alpha: 0
                }, 640).loop()
            };
            [e, t].forEach(function(e, t) {
                t >= 1 ? aoba.Tween.createBlank().wait(640).call(function() {
                    return a(e)
                }) : a(e)
            })
        }
          , _ = function(e, t) {
            [e, t].forEach(function(e) {
                aoba.Tween.new(e).by({
                    scaleX: .1,
                    scaleY: .1
                }, 480).by({
                    scaleX: -.1,
                    scaleY: -.1
                }, 480).loop()
            })
        }
          , m = function(e, t) {
            [e, t].forEach(function(e) {
                aoba.Tween.new(e).to({
                    rotation: 7 * aoba.DEG_TO_RAD
                }, 1024, "easeInOutSine").to({
                    rotation: -7 * aoba.DEG_TO_RAD
                }, 1024, "easeInOutSine").loop()
            })
        }
          , g = function(e) {
            var t = aoba.Sprite.new(e).setScale(4.4375);
            return t.alpha = .7,
            t.blendMode = aoba.BLEND_MODES.ADD,
            aoba.FrameTween.new(t).to({
                alpha: .7 * .7
            }, 37).to({
                alpha: .7
            }, 37).loop(),
            t
        }
          , b = function(e) {
            var t = aoba.Container.new()
              , a = e.speakerType
              , n = e.hideSpotLight
              , r = e.sideEffectType
              , i = e.spotLightType
              , o = e.backLightPosition
              , s = i.spotLight1
              , c = i.spotLight2
              , u = t.fromData(l.default, {
                speakerLeft: a ? {
                    key: a.left,
                    dx: a.dx,
                    dy: a.dy
                } : null,
                speakerRight: a ? {
                    key: a.right,
                    dx: -1 * a.dx,
                    dy: a.dy
                } : null,
                spotlight1: n ? null : {
                    key: s.key,
                    alpha: 0,
                    scale: s.scale,
                    dx: s.dx,
                    dy: s.dy
                },
                spotlight2: n ? null : {
                    key: c.key,
                    alpha: 0,
                    scale: c.scale,
                    dx: c.dx,
                    dy: c.dy
                },
                light1: {
                    scale: 2,
                    alpha: 0,
                    dx: o.light1.dx,
                    dy: o.light1.dy
                },
                light2: {
                    scale: 2,
                    alpha: 0,
                    dx: o.light2.dx,
                    dy: o.light2.dy
                },
                light3: {
                    scale: 2,
                    alpha: 0,
                    dx: o.light3.dx,
                    dy: o.light3.dy
                },
                light4: {
                    scale: 2,
                    alpha: 0,
                    dx: o.light4.dx,
                    dy: o.light4.dy
                },
                effectLeft: {
                    key: r,
                    x: 0,
                    y: -20,
                    anchor: aoba.p(.5, 0),
                    scale: 3.6,
                    alpha: .4
                },
                effectRight: {
                    key: r,
                    x: 1140,
                    y: -20,
                    anchor: aoba.p(.5, 0),
                    scale: 3.6,
                    alpha: .4
                }
            })
              , f = u.spotlight1
              , d = u.spotlight2
              , p = u.light1
              , g = u.light2
              , b = u.light3
              , v = u.light4
              , w = u.speakerLeft
              , k = u.speakerRight
              , S = u.effectLeft
              , E = u.effectRight;
            return [f, d, S, S, p, g, b, v].filter(function(e) {
                return void 0 !== e
            }).forEach(function(e) {
                e.blendMode = aoba.BLEND_MODES.ADD
            }),
            f && d && y(f, d),
            h(p, g, b, v),
            w && k && _(w, k),
            m(S, E),
            t
        }
          , v = function(e) {
            var t = aoba.Sprite.new(e.image1);
            return t.setScale(2.2),
            t.setAnchor(.5, 1),
            t.setPosition(i.default.SCREEN_WIDTH / 2, i.default.SCREEN_HEIGHT),
            aoba.FrameTween.new(t).wait(30).call(function() {
                t.texture = aoba.Texture.fromImage(e.image2)
            }).wait(30).call(function() {
                t.texture = aoba.Texture.fromImage(e.image1)
            }).loop(),
            t
        }
          , w = function(e) {
            var t = s.AUDITION(e)
              , a = aoba.Sprite.new(t.bg);
            return g(t.effect).addTo(a),
            b({
                speakerType: c.NORMAL,
                sideEffectType: f.NORMAL,
                spotLightType: d.COMMON,
                backLightPosition: p.COMMON
            }).addTo(a),
            a
        }
          , k = function() {
            var e = aoba.Sprite.new(s.CONCERT.WING.bg);
            return g(s.CONCERT.WING.effect).addTo(e),
            v(u.CONCERT.WING).addTo(e),
            b({
                speakerType: c.LARGE,
                sideEffectType: f.NORMAL,
                spotLightType: d.COMMON,
                backLightPosition: p.COMMON
            }).addTo(e),
            e
        }
          , S = function(e) {
            var t = s.CONCERT.FAN_MEETING_REHEARSAL
              , a = null
              , n = d.FAN_MEETING_REHEARSAL
              , r = c.NORMAL_LIGHT
              , i = p.FAN_MEETING_REHEARSAL;
            e && (t = s.CONCERT.FAN_MEETING,
            a = u.CONCERT.FAN_MEETING,
            n = d.FAN_MEETING,
            r = c.LARGE_LIGHT,
            i = p.FAN_MEETING);
            var o = aoba.Sprite.new(t.bg);
            return a && v(a).addTo(o),
            g(t.effect).addTo(o),
            b({
                speakerType: r,
                sideEffectType: f.RAINBOW,
                spotLightType: n,
                backLightPosition: i
            }).addTo(o),
            o
        }
          , E = function(e, t) {
            return e ? S(t) : k()
        }
          , T = function() {
            var e = s.FES
              , t = aoba.Sprite.new(e.bg);
            return g(e.effect).addTo(t),
            v(u.FES).addTo(t),
            b({
                speakerType: c.LARGE,
                sideEffectType: f.NORMAL,
                spotLightType: d.COMMON,
                backLightPosition: p.COMMON
            }).addTo(t),
            t
        }
          , O = function() {
            var e = s.AUDITION_SELECT
              , t = aoba.Sprite.new(e.bg);
            g(e.effect).addTo(t),
            b({
                speakerType: c.NORMAL,
                sideEffectType: f.NORMAL,
                spotLightType: d.COMMON,
                backLightPosition: p.COMMON
            }).addTo(t);
            var a = new PIXI.filters.BlurFilter;
            return a.blur = 5,
            t.filters = [a],
            t
        }
          , x = function() {
            var e = s.TV
              , t = aoba.Sprite.new(e.bg);
            return v(u.FES).addTo(t),
            b({
                sideEffectType: f.NORMAL,
                hideSpotLight: !0,
                spotLightType: d.COMMON,
                backLightPosition: p.COMMON
            }).addTo(t),
            t
        };
        t.default = {
            IMAGES: s,
            createAudition: w,
            createConcert: E,
            createFes: T,
            createAuditionSelect: O,
            createTV: x
        }
    },
    1050: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = ["images/ui/tutorial/parts.json"]
    },
    1070: function(e, t, a) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function r(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function i(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function o(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = function() {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, a, n) {
                return a && e(t.prototype, a),
                n && e(t, n),
                t
            }
        }()
          , s = a(2)
          , c = n(s)
          , u = a(1071)
          , f = n(u)
          , d = a(1075)
          , p = n(d)
          , h = {
            FREE: Symbol("free"),
            WAITING: Symbol("waiting"),
            PLAYING: Symbol("playing"),
            LOCKED: Symbol("locked")
        }
          , y = {
            tips: "images/tutorial/${id}.jpg",
            mask: "images/tutorial/mask/${id}.png",
            voice: "sounds/voice/staff/${id}" + c.default.asset.SOUND_EXTENSION
        }
          , _ = {
            tips: function(e) {
                return y.tips.replace("${id}", e)
            },
            mask: function(e) {
                return y.mask.replace("${id}", e)
            },
            voice: function(e) {
                return y.voice.replace("${id}", e)
            }
        }
          , m = {
            waitEvent: function(e) {
                var t = this
                  , a = e.target
                  , n = e.event;
                this._tutorialLayer.disable();
                var r = this.getTargetContainer(a);
                return new Promise(function(e) {
                    r.once(n, function() {
                        t._tutorialLayer.enable(),
                        t.deleteImage("finger"),
                        e()
                    })
                }
                )
            },
            waitInput: function(e) {
                var t = this
                  , a = e.target
                  , n = e.event
                  , r = void 0 === n ? "tap" : n
                  , i = e.bringFront
                  , o = void 0 === i || i;
                this._tutorialLayer.disable();
                var l = this.getTargetContainer(a);
                if (!o)
                    return new Promise(function(e) {
                        l.once(r, function() {
                            t._tutorialLayer.enable(),
                            t.deleteImage("finger"),
                            e()
                        })
                    }
                    );
                var s = aoba.p(l.position.x, l.position.y)
                  , c = l.parent
                  , u = l.getGlobalPosition();
                return this._tutorialLayer.addButton(l),
                l.setPosition(u.x, u.y),
                new Promise(function(e) {
                    l.once(r, function() {
                        l.addTo(c, s.x, s.y),
                        t._tutorialLayer.enable(),
                        t.deleteImage("finger"),
                        e()
                    })
                }
                )
            },
            wait: function(e) {
                var t = e.time;
                return aoba.Tween.new(this).wait(t).promise()
            },
            trigger: function(e) {
                var t = e.target
                  , a = e.event
                  , n = void 0 === a ? "tap" : a
                  , r = this.getTargetContainer(t);
                r.emit(n, r)
            },
            showTips: function(e) {
                var t = e.imageName;
                this._tutorialLayer.showTips(_.tips(t))
            },
            hideTips: function() {
                this._tutorialLayer.hideTips()
            },
            changeTips: function(e) {
                var t = e.imageName;
                this._tutorialLayer.changeTips(_.tips(t))
            },
            showImage: function(e) {
                var t = e.image
                  , a = e.label
                  , n = e.x
                  , r = void 0 === n ? 0 : n
                  , i = e.y
                  , o = void 0 === i ? 0 : i
                  , l = e.scale
                  , s = void 0 === l ? 1 : l
                  , c = aoba.Sprite.new(t);
                c.setPosition(r, o),
                c.scale.set(s),
                this.addImage(c, a)
            },
            hideImage: function(e) {
                var t = e.label;
                this.deleteImage(t)
            },
            showMask: function(e) {
                var t = e.imageName
                  , a = e.label
                  , n = e.scale
                  , r = void 0 === n ? 2 : n
                  , i = aoba.Sprite.new(_.mask(t));
                i.scale.set(r),
                this.addMask(i, a)
            },
            hideMask: function(e) {
                var t = e.label;
                this.deleteMask(t)
            },
            showOverlay: function(e) {
                return this._tutorialLayer.showOverlay(e)
            },
            hideOverlay: function() {
                return this._tutorialLayer.hideOverlay()
            },
            changeOverlay: function(e) {
                this._tutorialLayer.changeOverlay(e)
            },
            showComment: function(e) {
                return this._tutorialLayer.showComment(e)
            },
            hideComment: function() {
                return this._tutorialLayer.hideComment()
            },
            playComment: function(e) {
                this._tutorialLayer.playComment(e)
            },
            showFinger: function(e) {
                var t = e.type
                  , a = e.x
                  , n = void 0 === a ? 0 : a
                  , r = e.y
                  , i = void 0 === r ? 0 : r
                  , o = e.target
                  , l = e.dx
                  , s = e.dy
                  , c = p.default.create(t);
                if (o) {
                    var u = this.getTargetContainer(o)
                      , f = u.getGlobalPosition();
                    l && (f.x += l),
                    s && (f.y += s),
                    c.setPosition(f.x, f.y)
                } else
                    c.setPosition(n, i);
                this.addImage(c, "finger")
            },
            hideFinger: function() {
                this.deleteImage("finger")
            },
            playVoice: function(e) {
                var t = e.voiceName;
                this._currentVoice && this._currentVoice.stop(),
                this._currentVoice = aoba.soundManager.playVoice(_.voice(t))
            },
            bringFront: function(e) {
                var t = e.target
                  , a = this.getTargetContainer(t)
                  , n = a.getGlobalPosition();
                this._tutorialLayer.addButton(a),
                a.setPosition(n.x, n.y)
            },
            bringBack: function(e) {
                e._target
            },
            pause: function(e) {
                var t = e.target
                  , a = this.getTargetContainer(t);
                aoba.TweenManager.tweens && aoba.TweenManager.tweens.forEach(function(e) {
                    e.target.parent === a && e.pause()
                }),
                a.pause()
            },
            resume: function(e) {
                var t = e.target
                  , a = this.getTargetContainer(t);
                aoba.TweenManager.tweens && aoba.TweenManager.tweens.forEach(function(e) {
                    e.target.parent === a && e.resume()
                }),
                a.resume()
            }
        }
          , g = function(e) {
            function t(e, a) {
                r(this, t);
                var n = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return n._targetLayer = a,
                n._tutorialLayer = f.default.new(),
                n._trackIndex = 0,
                n._tracks = e,
                n._commands = m,
                n._state = h.FREE,
                n._maskStore = {},
                n._imageStore = {},
                n._currentVoice = null,
                n._tutorialLayer.on("tap", n._handleTap, n),
                n._tutorialLayer.on("endText", n._handleEndText, n),
                n
            }
            return o(t, e),
            l(t, [{
                key: "start",
                value: function() {
                    this._tutorialLayer.addTo(this._targetLayer),
                    this.playCurrentTrack()
                }
            }, {
                key: "playCurrentTrack",
                value: function() {
                    var e = this
                      , t = this._tracks[this._trackIndex]
                      , a = this._commands[t.command];
                    if (!a)
                        return void this.forward();
                    var n = a.call(this, t) || Promise.resolve();
                    if ("playComment" === t.command)
                        return void this._changeToPlaying();
                    t.lock ? this._state = h.LOCKED : n.then(function() {
                        return e.forward()
                    })
                }
            }, {
                key: "forward",
                value: function() {
                    this._trackIndex++,
                    this._trackIndex < this._tracks.length ? (this._changeToFree(),
                    this.playCurrentTrack()) : this.emit("end")
                }
            }, {
                key: "destroy",
                value: function() {
                    this._currentVoice && this._currentVoice.stop(),
                    this._tutorialLayer.destroy({
                        children: !0
                    })
                }
            }, {
                key: "fadeOut",
                value: function() {
                    return aoba.FrameTween.new(this._tutorialLayer).to({
                        alpha: 0
                    }, 3).promise()
                }
            }, {
                key: "getTargetContainer",
                value: function(e) {
                    if (!e)
                        return this._targetLayer;
                    var t = this._targetLayer.getChildByNameRecursively(e);
                    if (!t)
                        throw new Error("target " + e + " is not found");
                    return t
                }
            }, {
                key: "addImage",
                value: function(e, t) {
                    this._tutorialLayer.addImage(e),
                    this._imageStore[t] = e
                }
            }, {
                key: "deleteImage",
                value: function(e) {
                    var t = this._imageStore[e];
                    t && (t.destroy(),
                    delete this._imageStore[e])
                }
            }, {
                key: "addMask",
                value: function(e, t) {
                    this._tutorialLayer.addMaskImage(e),
                    this._maskStore[t] = e
                }
            }, {
                key: "deleteMask",
                value: function(e) {
                    var t = this._maskStore[e];
                    t && (t.destroy(),
                    delete this._maskStore[e])
                }
            }, {
                key: "_handleTap",
                value: function() {
                    switch (this._state) {
                    case h.PLAYING:
                        return void this._tutorialLayer.endText();
                    case h.LOCKED:
                        return void this.forward();
                    default:
                        return
                    }
                }
            }, {
                key: "_handleEndText",
                value: function(e) {
                    e ? this._changeToLocked() : this.forward()
                }
            }, {
                key: "_changeToFree",
                value: function() {
                    this._state = h.FREE
                }
            }, {
                key: "_changeToPlaying",
                value: function() {
                    this._state = h.PLAYING
                }
            }, {
                key: "_changeToLocked",
                value: function() {
                    this._state = h.LOCKED
                }
            }], [{
                key: "getTrackResources",
                value: function(e) {
                    return e.map(function(e) {
                        return e.imageName ? "showMask" === e.command ? _.mask(e.imageName) : _.tips(e.imageName) : e.voiceName ? _.voice(e.voiceName) : null
                    }).filter(function(e) {
                        return null !== e
                    })
                }
            }, {
                key: "createAndPlay",
                value: function(e, a) {
                    var n = new t(e,a);
                    return n.start(),
                    new Promise(function(e) {
                        n.once("end", function() {
                            n.fadeOut().then(function() {
                                n.destroy(),
                                e()
                            })
                        })
                    }
                    )
                }
            }]),
            t
        }(aoba.utils.EventEmitter);
        t.default = g
    },
    1071: function(e, t, a) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function r(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function i(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function o(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = function() {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, a, n) {
                return a && e(t.prototype, a),
                n && e(t, n),
                t
            }
        }()
          , s = a(1072)
          , c = n(s)
          , u = a(1073)
          , f = n(u)
          , d = a(1074)
          , p = n(d)
          , h = {
            top: {
                x: 120,
                y: 80
            },
            top_left: {
                x: 20,
                y: 80
            },
            middle: {
                x: 120,
                y: 320
            },
            middle_hazuki: {
                x: 108,
                y: 172
            },
            bottom: {
                x: 120,
                y: 560
            }
        }
          , y = {
            x: 568,
            y: 396
        }
          , _ = function(e) {
            function t() {
                r(this, t);
                var e = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return e.interactive = !0,
                e.beginFill(0, 0),
                e.drawRect(0, 0, aoba.game.width, aoba.game.height),
                e._overlay = c.default.new().addTo(e, 0, 0, {
                    visible: !1
                }),
                e._maskLayer = aoba.Container.new().addTo(e),
                e._imagesLayer = aoba.Container.new().addTo(e),
                e._comment = f.default.new().addTo(e, 0, 0, {
                    visible: !1
                }).on("endText", function() {
                    e.emit("endText", e._lock)
                }),
                e._tips = p.default.new().addTo(e, y.x, y.y, {
                    anchor: .5,
                    visible: !1
                }),
                e
            }
            return o(t, e),
            l(t, [{
                key: "enable",
                value: function() {
                    this.interactive = !0
                }
            }, {
                key: "disable",
                value: function() {
                    this.interactive = !1
                }
            }, {
                key: "addImage",
                value: function(e) {
                    e.addTo(this._imagesLayer)
                }
            }, {
                key: "addMaskImage",
                value: function(e) {
                    e.addTo(this._maskLayer)
                }
            }, {
                key: "addButton",
                value: function(e) {
                    e.addToAt(this, this._imagesLayer)
                }
            }, {
                key: "endText",
                value: function() {
                    this._comment.endText()
                }
            }, {
                key: "showTips",
                value: function(e) {
                    return this._overlay.resetAndCreate(),
                    this._tips.appear(e)
                }
            }, {
                key: "hideTips",
                value: function() {
                    return this._tips.disappear()
                }
            }, {
                key: "changeTips",
                value: function(e) {
                    this._tips.texture = aoba.Texture.fromImage(e)
                }
            }, {
                key: "setCommentPosition",
                value: function(e) {
                    var t = e.positionType
                      , a = e.x
                      , n = e.y;
                    if (t || a && n) {
                        var r = t ? h[t] : {
                            x: a,
                            y: n
                        };
                        this._comment.setPosition(r.x, r.y)
                    }
                }
            }, {
                key: "showOverlay",
                value: function(e) {
                    var t = e.x
                      , a = e.y
                      , n = e.width
                      , r = e.height;
                    return this._overlay.resetAndCreate(t, a, n, r),
                    this._overlay.appear()
                }
            }, {
                key: "hideOverlay",
                value: function() {
                    return this._overlay.disappear()
                }
            }, {
                key: "changeOverlay",
                value: function(e) {
                    var t = e.x
                      , a = e.y
                      , n = e.width
                      , r = e.height;
                    this._overlay.resetAndCreate(t, a, n, r)
                }
            }, {
                key: "showComment",
                value: function(e) {
                    var t = e.positionType
                      , a = e.windowType
                      , n = e.x
                      , r = e.y;
                    return this.setCommentPosition({
                        positionType: t,
                        x: n,
                        y: r
                    }),
                    a && this._comment.changeTextWindow(a),
                    this._comment.appear()
                }
            }, {
                key: "hideComment",
                value: function() {
                    return this._comment.disappear()
                }
            }, {
                key: "playComment",
                value: function(e) {
                    var t = e.positionType
                      , a = e.windowType
                      , n = e.content
                      , r = e.x
                      , i = e.y
                      , o = e.lock
                      , l = void 0 === o || o;
                    this.setCommentPosition({
                        positionType: t,
                        x: r,
                        y: i
                    }),
                    a && this._comment.changeTextWindow(a),
                    this._lock = l,
                    this._comment.playText(n)
                }
            }]),
            t
        }(aoba.Graphics);
        t.default = _
    },
    1072: function(e, t, a) {
        "use strict";
        function n(e) {
            if (Array.isArray(e)) {
                for (var t = 0, a = Array(e.length); t < e.length; t++)
                    a[t] = e[t];
                return a
            }
            return Array.from(e)
        }
        function r(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function i(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function o(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = function() {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, a, n) {
                return a && e(t.prototype, a),
                n && e(t, n),
                t
            }
        }()
          , s = function(e, t, a, n) {
            return aoba.Graphics.new().beginFill(0, 0).drawRect(e, t, a, n).setInteractive(!0)
        }
          , c = function(e) {
            function t() {
                return r(this, t),
                i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return o(t, e),
            l(t, [{
                key: "create",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                      , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
                      , a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
                      , r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0
                      , i = aoba.p(e, t)
                      , o = aoba.p(e + a, t + r)
                      , l = [[0, 0, 1136, t], [o.x, i.y, 1136 - o.x, 640], [0, o.y, o.x, 640 - o.y], [0, i.y, i.x, r]]
                      , c = !0
                      , u = !1
                      , f = void 0;
                    try {
                        for (var d, p = l[Symbol.iterator](); !(c = (d = p.next()).done); c = !0) {
                            var h = d.value
                              , y = s.apply(void 0, n(h));
                            this.addChild(y)
                        }
                    } catch (e) {
                        u = !0,
                        f = e
                    } finally {
                        try {
                            !c && p.return && p.return()
                        } finally {
                            if (u)
                                throw f
                        }
                    }
                }
            }, {
                key: "reset",
                value: function() {
                    this.removeChildren()
                }
            }, {
                key: "resetAndCreate",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                      , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
                      , a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
                      , n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
                    this.reset(),
                    this.create(e, t, a, n)
                }
            }, {
                key: "appear",
                value: function() {
                    return this.show(),
                    this.alpha = 0,
                    aoba.FrameTween.new(this).to({
                        alpha: 1
                    }, 6).wait(3).promise()
                }
            }, {
                key: "disappear",
                value: function() {
                    var e = this;
                    return aoba.FrameTween.new(this).to({
                        alpha: 0
                    }, 6).wait(3).call(function() {
                        e.alpha = 1,
                        e.hide()
                    }).promise()
                }
            }]),
            t
        }(aoba.Container);
        t.default = c
    },
    1073: function(e, t, a) {
        "use strict";
        function n(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function r(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function i(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = function() {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, a, n) {
                return a && e(t.prototype, a),
                n && e(t, n),
                t
            }
        }()
          , l = a(63)
          , s = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(l)
          , c = {
            s: {
                image: "text_window_s.png",
                wordWrapWidth: 624,
                textPosition: {
                    x: 64,
                    y: -18
                },
                iconVisible: !0
            },
            m: {
                image: "text_window_m.png",
                wordWrapWidth: 624,
                textPosition: {
                    x: 64,
                    y: -34
                },
                iconVisible: !0
            },
            l: {
                image: "text_window_l.png",
                wordWrapWidth: 624,
                textPosition: {
                    x: 64,
                    y: -52
                },
                iconVisible: !0
            },
            l_bottom: {
                image: "text_window_l_bottom.png",
                wordWrapWidth: 600,
                textPosition: {
                    x: 40,
                    y: -64
                },
                iconVisible: !1
            },
            l_left: {
                image: "text_window_l_left.png",
                wordWrapWidth: 624,
                textPosition: {
                    x: 64,
                    y: -52
                },
                iconVisible: !0
            }
        }
          , u = {
            fill: 5329761,
            fontSize: 24,
            lineHeight: 32,
            fontFamily: "HummingStd-E",
            wordWrap: !0,
            wordWrapWidth: 100,
            breakWords: !0
        }
          , f = function(e) {
            function t() {
                n(this, t);
                var e = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return e._icon = aoba.Sprite.new("navi_icon.png").addTo(e, 0, 0, {
                    anchor: aoba.p(0, .5)
                }),
                e._textWindow = aoba.Sprite.new().addTo(e, 128, 8, {
                    anchor: aoba.p(0, .5)
                }),
                e._text = aoba.Text.new("", u).addTo(e._textWindow, 64, 0),
                e._textPlayer = new s.default.TextPlayer({
                    text: e._text,
                    speed: 2
                }),
                e._textPlayer.on("end", e.onEndText, e),
                e
            }
            return i(t, e),
            o(t, [{
                key: "changeTextWindow",
                value: function(e) {
                    var t = c[e];
                    this._textWindow.texture = aoba.Texture.fromImage(t.image),
                    this._text.x = t.textPosition.x,
                    this._text.y = t.textPosition.y,
                    this._text.style.wordWrapWidth = t.wordWrapWidth,
                    this._icon.visible = t.iconVisible
                }
            }, {
                key: "ezgUpdate",
                value: function(e) {
                    this._textPlayer && this._textPlayer.update(e)
                }
            }, {
                key: "playText",
                value: function(e) {
                    this._textPlayer.play(e, !0)
                }
            }, {
                key: "endText",
                value: function() {
                    this._textPlayer.showAll()
                }
            }, {
                key: "onEndText",
                value: function() {
                    this.emit("endText")
                }
            }, {
                key: "appear",
                value: function() {
                    return this.show(),
                    this._textWindow.scale.set(0),
                    this._textWindow.alpha = 0,
                    aoba.FrameTween.new(this._textWindow).to({
                        scaleX: 1,
                        scaleY: 1,
                        alpha: 1
                    }, 6, "easeOutQuad").wait(3).promise()
                }
            }, {
                key: "disappear",
                value: function() {
                    var e = this;
                    return aoba.FrameTween.new(this._textWindow).to({
                        scaleX: 0,
                        scaleY: 0,
                        alpha: 0
                    }, 6, "easeInQuad").call(function() {
                        e._textPlayer.clear(),
                        e.hide()
                    }).wait(3).promise()
                }
            }, {
                key: "playing",
                get: function() {
                    return this._playing
                }
            }]),
            t
        }(aoba.Container);
        t.default = f
    },
    1074: function(e, t, a) {
        "use strict";
        function n(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function r(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function i(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = function() {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, a, n) {
                return a && e(t.prototype, a),
                n && e(t, n),
                t
            }
        }()
          , l = function(e) {
            function t() {
                return n(this, t),
                r(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return i(t, e),
            o(t, [{
                key: "appear",
                value: function(e) {
                    return this.alpha = 0,
                    this.show(),
                    this.texture = aoba.Texture.fromImage(e),
                    aoba.FrameTween.new(this).to({
                        alpha: 1
                    }, 6).wait(3).promise()
                }
            }, {
                key: "disappear",
                value: function() {
                    var e = this;
                    return aoba.FrameTween.new(this).to({
                        alpha: 0
                    }, 6).wait(3).call(function() {
                        e.alpha = 1,
                        e.hide()
                    }).promise()
                }
            }]),
            t
        }(aoba.Sprite);
        t.default = l
    },
    1075: function(e, t, a) {
        "use strict";
        function n(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function r(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function i(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = function() {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, a, n) {
                return a && e(t.prototype, a),
                n && e(t, n),
                t
            }
        }()
          , l = {
            left: {
                image: "finger_left.png",
                anchor: {
                    x: 0,
                    y: 0
                },
                tweenData: [{
                    x: -7,
                    y: -7,
                    duration: 13,
                    easing: "easeInOutQuad"
                }, {
                    x: 7,
                    y: 7,
                    duration: 13,
                    easing: "easeInOutQuad"
                }]
            },
            right: {
                image: "finger_right.png",
                anchor: {
                    x: 1,
                    y: 0
                },
                tweenData: [{
                    x: 7,
                    y: -7,
                    duration: 13,
                    easing: "easeInOutQuad"
                }, {
                    x: -7,
                    y: 7,
                    duration: 13,
                    easing: "easeInOutQuad"
                }]
            }
        }
          , s = function(e) {
            function t() {
                return n(this, t),
                r(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return i(t, e),
            o(t, null, [{
                key: "create",
                value: function(e) {
                    var t = l[e]
                      , a = aoba.Sprite.new(t.image);
                    return a.anchor.set(t.anchor.x, t.anchor.y),
                    t.tweenData.reduce(function(e, t) {
                        return e.by({
                            x: t.x,
                            y: t.y
                        }, t.duration)
                    }, aoba.FrameTween.new(a)).loop(),
                    a
                }
            }]),
            t
        }(aoba.Sprite);
        t.default = s
    },
    1094: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = {
            children: [{
                name: "spotlight1",
                fullName: "spotlight1",
                type: "sprite",
                key: "spotlight_1.png",
                x: 308,
                y: 116
            }, {
                name: "spotlight2",
                fullName: "spotlight2",
                type: "sprite",
                key: "spotlight_2.png",
                x: 208,
                y: 50
            }, {
                name: "light1",
                fullName: "light1",
                type: "sprite",
                key: "light_1.png",
                x: 140,
                y: 0
            }, {
                name: "light2",
                fullName: "light2",
                type: "sprite",
                key: "light_2.png",
                x: 349,
                y: 0
            }, {
                name: "light3",
                fullName: "light3",
                type: "sprite",
                key: "light_3.png",
                x: 660,
                y: 0
            }, {
                name: "light4",
                fullName: "light4",
                type: "sprite",
                key: "light_4.png",
                x: 766,
                y: 0
            }, {
                name: "speakerLeft",
                fullName: "speakerLeft",
                anchor: {
                    x: .5,
                    y: .5
                },
                type: "sprite",
                key: "speaker_left.png",
                x: 163,
                y: 188
            }, {
                name: "speakerRight",
                fullName: "speakerRight",
                anchor: {
                    x: .5,
                    y: .5
                },
                type: "sprite",
                key: "speaker_right.png",
                x: 967,
                y: 188
            }, {
                name: "effectLeft",
                fullName: "effectLeft",
                type: "sprite",
                key: "effect_left.png",
                x: 0,
                y: 0
            }, {
                name: "effectRight",
                fullName: "effectRight",
                type: "sprite",
                key: "effect_right.png",
                x: 886,
                y: 0
            }],
            name: "",
            fullName: "",
            type: "container"
        }
    },
    1192: function(e, t, a) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function r(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function i(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function o(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = function() {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, a, n) {
                return a && e(t.prototype, a),
                n && e(t, n),
                t
            }
        }()
          , s = a(136)
          , c = n(s)
          , u = a(1248)
          , f = n(u)
          , d = a(1292)
          , p = n(d)
          , h = a(1567)
          , y = n(h)
          , _ = a(1570)
          , m = n(_)
          , g = a(1649)
          , b = n(g)
          , v = a(12)
          , w = n(v)
          , k = a(144)
          , S = n(k)
          , E = function(e) {
            function t() {
                return r(this, t),
                i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return o(t, e),
            l(t, [{
                key: "createConcertGame",
                value: function(e, a, n) {
                    var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
                      , i = m.default.new(Object.assign({}, e, {
                        bg: n,
                        concertService: new b.default(e,a,t.LiveGameManager),
                        onEndConcert: this.goToResult.bind(this),
                        isProduceConcert: r.isProduceConcert
                    }));
                    return i.start(),
                    i.addTo(this),
                    i
                }
            }, {
                key: "goToResult",
                value: function(e) {
                    var t = this;
                    this.showLoadingLayer(),
                    this._requestFinishConcert(e).then(function(e) {
                        var a = S.default.createBlack()
                          , n = Object.assign(e, {
                            serverAction: t._produceAction
                        });
                        w.default.loadSceneAsync("concertResult", {
                            request: !1,
                            showLoading: !1,
                            sceneParams: n,
                            transition: a
                        })
                    })
                }
            }], [{
                key: "importModuleAsync",
                value: function() {
                    return new Promise(function(e) {
                        (0,
                        y.default)(function(a) {
                            t.LiveGameManager = a,
                            e()
                        })
                    }
                    )
                }
            }, {
                key: "getContentResources",
                value: function(e) {
                    var t = ["concert_player_icon", "memory_roulette_bad", "memory_roulette_good", "cut_in"]
                      , a = ["concert_card", "concert_icon"]
                      , n = ["cb_costume", "stand_costume"]
                      , r = ["concert_rival_icon", "active_skill_silhouette"];
                    return (0,
                    p.default)(e, {
                        centerIdolImageList: t,
                        idolImageList: a,
                        idolSpineList: n,
                        rivalImageList: r
                    })
                }
            }, {
                key: "uiResources",
                get: function() {
                    return f.default
                }
            }]),
            t
        }(c.default);
        t.default = E
    },
    1193: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a(1)
          , r = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(n)
          , i = {
            standby: function(e) {
                return r.default.post("produces/1/audition/actions/game/standby/" + e).then(function(e) {
                    return e.body
                })
            },
            appeal: function(e) {
                return r.default.post("produces/1/audition/actions/game/appeal", e).then(function(e) {
                    return e.body
                })
            }
        }
          , o = {
            standby: function() {
                return Promise.resolve()
            },
            appeal: function() {
                return Promise.resolve()
            }
        }
          , l = {
            standby: function(e) {
                return r.default.post("produces/concert/actions/game/standby/" + e).then(function(e) {
                    return e.body
                })
            },
            appeal: function(e) {
                return r.default.post("produces/concert/actions/game/appeal", e).then(function(e) {
                    return e.body
                })
            }
        }
          , s = {
            standby: function(e) {
                return r.default.post("fesConcert/actions/game/standby/" + e).then(function(e) {
                    return e.body
                })
            },
            appeal: function(e) {
                return r.default.post("fesConcert/actions/game/appeal", e).then(function(e) {
                    return e.body
                })
            }
        }
          , c = {
            standby: function(e) {
                return r.default.post("fesMatchConcert/actions/game/standby/" + e).then(function(e) {
                    return e.body
                })
            },
            appeal: function(e) {
                return r.default.post("fesMatchConcert/actions/game/appeal", e).then(function(e) {
                    return e.body
                })
            }
        };
        t.default = {
            audition: i,
            tutorialAudition: o,
            concert: l,
            fes: s,
            fesMatch: c
        }
    },
    1248: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a(1032)
          , r = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(n);
        t.default = ["images/ui/common/parts_link_skill_dialog.json", "images/ui/concert/parts.json", "images/ui/concert/parts_attack_order.json", "images/ui/concert/parts_bg.json", "images/ui/concert/parts_effect.json", "images/ui/concert/parts_pause.json", "images/ui/concert/parts_number.json", "images/ui/concert/parts_text.json", "images/ui/fes/fes_role_icons.json", "images/content/active_skills/icon.json", "images/content/passive_skills/icon.json", "images/content/skill_effects/icon.json", "images/ui/concert/effects/idol_damaged.png", "images/ui/concert/effects/idol_damaged_sad.png", "images/ui/concert/effects/idol_recover.png", "images/ui/concert/effects/judge_damaged.png", "images/ui/concert/effects/mental_break.png", "images/ui/concert/effects/player_idol.png", "images/ui/concert/effects/spark_impact_blue.png", "images/ui/concert/effects/fireworks_blue.png", "images/ui/concert/effects/fireworks_green.png", "images/ui/concert/effects/fireworks_yellow.png", "images/ui/concert/effects/spark_impact_yellow.png", "images/ui/concert/effects/line_effect.png", "images/ui/concert/effects/beam_line.png", "images/ui/concert/effects/spiral_masked.png", "images/ui/concert/effects/list_overlay_black.png", "images/ui/concert/effects/timing_gauge_line.png", "images/ui/produce_ending/fes_idol_birth_crush_w.png", "particles/concert/common/images.json", "particles/concert/memory_appeal/bg.json", "particles/concert/memory_appeal/impact.json", "particles/concert/memory_appeal/spark.json", "particles/concert/memory_appeal/wing_burst.json", "particles/concert/memory_appeal_gauge/heart_1.json", "particles/concert/memory_appeal_gauge/heart_2.json", "particles/concert/recover_skill/note.json", "particles/concert/recover_skill/wave.json", "particles/concert/judge_attack/trail_boke.json", "particles/concert/judge_attack/trail.json", "particles/concert/rival_attack/hit.json", "particles/concert/rival_attack/trail.json", "particles/concert/rival_attack/charge.json", "particles/concert/idol_attack/hit.json", "particles/concert/idol_attack/trail.json", "particles/concert/idol_attack/charge.json", "particles/concert/star/hit.json", "particles/concert/star/trail.json", "particles/concert/star/trail_boke.json", "particles/concert/heart/hit.json", "particles/concert/heart/trail.json", "particles/concert/common/twinkle.json", "particles/concert/common/arrow_up.json", "particles/concert/common/arrow_down.json", "particles/concert/common/flash_line_1.json", "particles/concert/common/flash_line_2.json", "particles/concert/common/flash_line_3.json", "particles/concert/common/flash_line_3_down.json", "particles/concert/common/flash_line_3_up.json", "particles/concert/common/flash_line_ring.json", "particles/concert/common/flash_spark_3.json", "particles/concert/common/flash_spark_4.json", "particles/concert/common/idol_buff.json", "particles/concert/common/idol_debuff.json", "particles/concert/common/idol_gain_star.json", "particles/concert/common/retire_aura.json", "particles/concert/common/retire_flash.json", "particles/concert/common/stage_flash_011.json", "particles/concert/common/stage_flash_012.json", "particles/concert/common/stage_flash_013.json", "particles/concert/common/stage_flash_020.json", "particles/concert/common/stage_flash_030.json", "particles/concert/common/timing_bad_center.json", "particles/concert/common/timing_bad_top.json", "particles/concert/common/timing_normal_top.json", "particles/concert/common/timing_good_center.json", "particles/concert/common/timing_good_top.json", "particles/concert/common/timing_perfect_center.json", "particles/concert/common/timing_perfect_top.json", "particles/concert/common/melancholy_1.json", "particles/concert/common/melancholy_2.json", "particles/concert/raise_memory_appeal/live_omoide_heart_1.json", "particles/concert/raise_memory_appeal/live_omoide_heart_big.json", "particles/concert/raise_memory_appeal/live_omoide_heart_hit.json", "particles/concert/raise_memory_appeal/live_omoide_heart_hit_twinkle.json", "particles/concert/reraise_skill/reraise_feather_1.json", "particles/concert/reraise_skill/reraise_feather_2.json", "particles/concert/reraise_skill/reraise_feather_twinkle_1.json", "particles/concert/reraise_skill/reraise_twinkle_1.json", "particles/concert/reraise_skill/reraise_twinkle_2.json", "particles/concert/reraise_skill/reraise_twinkle_5.json", "particles/concert/reraise_skill/reraise_twinkle_6.json", "particles/concert/lower_memory_appeal/down.json", "particles/concert/lower_memory_appeal/hajiki.json", "particles/concert/lower_memory_appeal/omoide_down_Melancholy.json", "particles/concert/lower_memory_appeal/omoide_down_Melancholy2.json"].concat(function(e) {
            if (Array.isArray(e)) {
                for (var t = 0, a = Array(e.length); t < e.length; t++)
                    a[t] = e[t];
                return a
            }
            return Array.from(e)
        }(Object.values(r.default)))
    },
    1292: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e, t) {
            var a = []
              , n = t.centerIdolImageList
              , r = t.idolImageList
              , i = t.idolSpineList
              , o = t.rivalImageList
              , l = e.rivals
              , s = e.idols
              , c = s.find(function(e) {
                return e.isCenter
            });
            return n.forEach(function(e) {
                a.push(c.getImagePath(e))
            }),
            s.forEach(function(e) {
                r.forEach(function(t) {
                    return a.push(e.getImagePath(t))
                }),
                i.forEach(function(t) {
                    return a.push(e.getSpinePath(t))
                })
            }),
            l.forEach(function(e) {
                o.forEach(function(t) {
                    return a.push(e.character.getImagePath(t))
                })
            }),
            a.push(e.musicPath),
            a
        }
    },
    1293: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = {
            children: [{
                name: "skillCardBase",
                fullName: "skillCardBase",
                type: "sprite",
                key: "skill_card_base.png",
                x: -128,
                y: -59
            }, {
                name: "skillCardIdol",
                fullName: "skillCardIdol",
                type: "sprite",
                key: null,
                x: -118,
                y: -49
            }, {
                name: "positionIcon",
                fullName: "positionIcon",
                pivot: {
                    x: .5,
                    y: .5
                },
                type: "container",
                x: -30,
                y: 50
            }, {
                name: "skillIcon",
                fullName: "skillIcon",
                pivot: {
                    x: .5,
                    y: .5
                },
                type: "container",
                x: 70,
                y: -2
            }],
            name: "",
            fullName: "",
            pivot: {
                x: .5,
                y: .5
            },
            type: "container",
            x: 1002,
            y: 579
        }
    },
    1404: function(e, t, a) {
        "use strict";
        function n(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function r(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function i(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = function() {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, a, n) {
                return a && e(t.prototype, a),
                n && e(t, n),
                t
            }
        }()
          , l = a(1021)
          , s = function(e) {
            function t(e) {
                n(this, t);
                var a = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this))
                  , i = a.fromData(e);
                return a.base = i.base,
                a.skillInfo = i.skillInfo,
                a.name = i["skillInfo/name"],
                a.description = i["skillInfo/description"],
                a.standIdolsLayer = aoba.Container.new().addToAt(a, a.skillInfo),
                a.base.x = a.base.x + a.base.width,
                a.skillInfo.alpha = 0,
                a
            }
            return i(t, e),
            o(t, [{
                key: "play",
                value: function() {
                    throw new Error("Not Implemented.")
                }
            }, {
                key: "slideInIdols",
                value: function() {
                    throw new Error("Not Implemented.")
                }
            }, {
                key: "fadeInNameBase",
                value: function() {
                    var e = this;
                    return new Promise(function(t) {
                        return aoba.Tween.fromData(e.skillInfo, l.activeSkillCutIn.fadeInSkillInfo).call(t)
                    }
                    )
                }
            }, {
                key: "fadeOut",
                value: function() {
                    return aoba.Tween.fromData(this, l.activeSkillCutIn.fadeOut).promise()
                }
            }]),
            t
        }(aoba.Container);
        t.default = s
    },
    1405: function(e, t, a) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function r(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function i(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function o(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = function() {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, a, n) {
                return a && e(t.prototype, a),
                n && e(t, n),
                t
            }
        }()
          , s = a(9)
          , c = n(s)
          , u = a(1588)
          , f = n(u)
          , d = a(1022)
          , p = n(d)
          , h = function(e) {
            function t() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                r(this, t);
                var a = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return a._bg = aoba.Sprite.new("passive_skill_base_boke.png").addTo(a, 0, 0, {
                    alpha: 0,
                    anchor: .5,
                    scale: aoba.p(3.65, 3.2),
                    blendMode: aoba.BLEND_MODES.ADD
                }),
                a._particleContainer = aoba.Container.new().addTo(a),
                a._scores = e,
                a
            }
            return o(t, e),
            l(t, [{
                key: "play",
                value: function() {
                    var e = this;
                    aoba.Tween.new(this._bg).to({
                        alpha: 1
                    }, 6),
                    c.default.playParticle(p.default.flashLine1, this._particleContainer, -this.width / 2, -60, {
                        startTime: 400
                    });
                    for (var t = []; this._scores.length > 0; )
                        t.push(this._scores.splice(0, 3));
                    return new Promise(function(a) {
                        t.reduce(function(t, a) {
                            return t.then(function() {
                                return e._playScoreBonusList(a)
                            })
                        }, Promise.resolve()).then(function() {
                            return Promise.all([aoba.Tween.new(e._bg).to({
                                alpha: 0
                            }, 6).promise(), aoba.Tween.new(e._particleContainer).to({
                                alpha: 0
                            }, 6).promise()])
                        }).then(function() {
                            return a(e)
                        })
                    }
                    )
                }
            }, {
                key: "_playScoreBonusList",
                value: function(e) {
                    var t = f.default.new(e).addTo(this, 0, 0, {
                        pivot: aoba.p(0, .5)
                    });
                    return t.slideIn(),
                    aoba.FrameTween.new(t).wait(40).call(function() {
                        t.fadeOut()
                    }).promise()
                }
            }]),
            t
        }(aoba.Container);
        t.default = h
    },
    1406: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = {
            children: [{
                name: "scoreBonusBase",
                fullName: "scoreBonusBase",
                type: "sprite",
                key: "score_bonus_base.png",
                x: -300,
                y: -27
            }, {
                name: "name",
                fullName: "name",
                anchor: {
                    x: 0,
                    y: .5
                },
                type: "text",
                style: {
                    fill: 16777215,
                    fontFamily: "HummingStd-E",
                    fontSize: 28
                },
                rotation: 0,
                x: -269,
                y: -1
            }, {
                name: "score",
                fullName: "score",
                anchor: {
                    x: 1,
                    y: .5
                },
                type: "text",
                style: {
                    fill: 16773120,
                    fontFamily: "HummingStd-E",
                    fontSize: 28
                },
                rotation: 0,
                x: 269,
                y: 0
            }],
            name: "",
            fullName: "",
            pivot: {
                x: .5,
                y: .5
            },
            type: "container",
            x: 552,
            y: 488
        }
    },
    1407: function(e, t, a) {
        "use strict";
        function n(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function r(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function i(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = function() {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, a, n) {
                return a && e(t.prototype, a),
                n && e(t, n),
                t
            }
        }()
          , l = a(143)
          , s = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(l)
          , c = [].concat(function(e) {
            if (Array.isArray(e)) {
                for (var t = 0, a = Array(e.length); t < e.length; t++)
                    a[t] = e[t];
                return a
            }
            return Array.from(e)
        }(s.default.NUMBER_OF_TIMES_LIMITED_MASTER_EFFECT_TYPES))
          , u = function(e) {
            function t() {
                n(this, t);
                var e = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return e._iconAndEffectDataList = [],
                e
            }
            return i(t, e),
            o(t, [{
                key: "addIcon",
                value: function(e, t) {
                    var a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    this._iconAndEffectDataList.length >= 5 && (this._iconAndEffectDataList.shift().icon.destroy({
                        children: !0
                    }),
                    this._iconAndEffectDataList.forEach(function(e) {
                        e.icon.x -= 15
                    }));
                    var n = Math.min(this._iconAndEffectDataList.length, 4);
                    if (e.addToAt(this, 0, 15 * n + e.width / 2, e.height / 2, {
                        anchor: .5
                    }),
                    this._iconAndEffectDataList.push({
                        icon: e,
                        effect: t
                    }),
                    a) {
                        e.alpha = 0,
                        e.scale.set(.3);
                        var r = aoba.Sprite.new(e.texture).addTo(e, 0, 0, {
                            anchor: .5,
                            blendMode: aoba.BLEND_MODES.ADD
                        });
                        aoba.FrameTween.new(e).to({
                            alpha: 1
                        }, 3),
                        aoba.FrameTween.new(e).to({
                            scaleX: 1,
                            scaleY: 1
                        }, 4, "easeOutQuad"),
                        aoba.FrameTween.new(r).wait(6).to({
                            alpha: 0
                        }, 5).call(function() {
                            return r.destroy()
                        }),
                        aoba.FrameTween.new(r).wait(4).to({
                            scaleX: 1.8,
                            scaleY: 1.8
                        }, 7)
                    }
                }
            }, {
                key: "updateStatusEffectIcon",
                value: function() {
                    var e = 0;
                    this._iconAndEffectDataList.forEach(function(t) {
                        if (t.icon.x -= e,
                        c.includes(t.effect.data.effectType))
                            if (t.effect.remainTimes > 0)
                                t.icon.texture = aoba.Texture.fromImage(t.effect.getStatusEffectIconImagePath());
                            else {
                                if (e += 15,
                                !t.icon)
                                    return;
                                t.icon.destroy({
                                    children: !0
                                }),
                                t.icon = null
                            }
                    }),
                    this._iconAndEffectDataList = this._iconAndEffectDataList.filter(function(e) {
                        return e.icon
                    })
                }
            }, {
                key: "deleteAllStatusEffect",
                value: function() {
                    this._iconAndEffectDataList.forEach(function(e) {
                        e.icon && e.icon.destroy({
                            children: !0
                        })
                    }),
                    this._iconAndEffectDataList = []
                }
            }, {
                key: "decreaseStatusEffectRemainTimes",
                value: function(e) {
                    this._iconAndEffectDataList.forEach(function(t) {
                        e.includes(t.effect.data.effectType) && t.effect.remainTimes > 0 && (t.effect.remainTimes -= 1)
                    })
                }
            }]),
            t
        }(aoba.Container);
        t.default = u
    },
    1408: function(e, t, a) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function r(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function i(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function o(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = function() {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, a, n) {
                return a && e(t.prototype, a),
                n && e(t, n),
                t
            }
        }()
          , s = a(1293)
          , c = n(s)
          , u = a(1606)
          , f = n(u)
          , d = a(1021)
          , p = a(1607)
          , h = n(p)
          , y = a(9)
          , _ = n(y)
          , m = a(1022)
          , g = n(m)
          , b = a(1032)
          , v = n(b)
          , w = function(e) {
            function t(e) {
                var a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                r(this, t);
                var n = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this))
                  , o = e.id
                  , l = e.idol
                  , s = e.imagePaths
                  , u = e.linkSkill
                  , d = e.memoryAppealPoint
                  , p = n.fromData(c.default, {
                    skillCardBase: {
                        key: "skill_card_base.png"
                    },
                    skillCardIdol: {
                        key: s.card
                    },
                    skillIcon: f.default.new(d)
                })
                  , h = p.skillCardBase
                  , y = p.skillCardIdol
                  , _ = p.skillIcon;
                return n._linkIconTextures = {
                    on: aoba.Texture.fromImage("link_on.png"),
                    off: aoba.Texture.fromImage("link_off.png")
                },
                n._linkSkillIcon = aoba.Sprite.new(n._linkIconTextures.off).addTo(n, -72, -49, {
                    visible: !!u,
                    anchor: .5
                }),
                n._linkSkillIconEffect = null,
                n._skillCardBase = h,
                n._skillCardIdol = y,
                n._memorySkillGroup = _,
                a || (n._memorySkillGroup.y += 112),
                n._selected = !1,
                n._skillId = o,
                n._idolId = l.id,
                n._isMemoryAppeal = !0,
                n.interactive = !1,
                n._gaugeFullEffects = [],
                n._skillCardBase.interactive = !0,
                n._skillCardBase.on("touchstart", function() {
                    n.emit("touchstart", {
                        target: n
                    })
                }),
                n._memorySkillGroup.on("gaugeFull", function() {
                    n._showGaugeFullEffect(),
                    n.emit("gaugeFull", n)
                }),
                n._memorySkillGroup.on("gaugeNotFull", function() {
                    n._hideGaugeEffect(),
                    n.emit("gaugeNotFull", n)
                }),
                n._disable(),
                n
            }
            return o(t, e),
            l(t, [{
                key: "updateAvailability",
                value: function(e) {
                    e ? this._enable() : this._disable()
                }
            }, {
                key: "_enable",
                value: function() {
                    this._disabled = !1,
                    this._skillCardIdol.tint = 16777215,
                    this._skillCardBase.tint = 16777215,
                    this._linkSkillIcon.tint = 16777215
                }
            }, {
                key: "_disable",
                value: function() {
                    this._disabled = !0,
                    this._skillCardIdol.tint = 8947848,
                    this._skillCardBase.tint = 8947848,
                    this._linkSkillIcon.tint = 8947848
                }
            }, {
                key: "slideUp",
                value: function() {
                    return aoba.Tween.fromData(this._memorySkillGroup, d.memorySkillCard.slideUp),
                    aoba.Tween.fromData(this, d.memorySkillCard.slideUp)
                }
            }, {
                key: "select",
                value: function() {
                    var e = this;
                    return this._selected ? Promise.resolve() : this._tween ? (this._tween.then(function() {
                        return e.select()
                    }),
                    Promise.resolve()) : (this._selected = !0,
                    this._tween = aoba.Tween.fromData(this, d.memorySkillCard.select).call(function() {
                        e._tween = null
                    }).promise(),
                    this._tween)
                }
            }, {
                key: "cancel",
                value: function() {
                    var e = this;
                    return this._selected ? this._tween ? (this._tween.then(function() {
                        return e.cancel()
                    }),
                    Promise.resolve()) : (this._selected = !1,
                    this._tween = aoba.Tween.fromData(this, d.memorySkillCard.cancel).call(function() {
                        e._tween = null
                    }).promise(),
                    this._tween) : Promise.resolve()
                }
            }, {
                key: "updateLinkSkillState",
                value: function(e) {
                    this._enabledLinkSkill !== e && (this._enabledLinkSkill = e,
                    this._enabledLinkSkill ? this._linkSkillIcon.texture = this._linkIconTextures.on : this._linkSkillIcon.texture = this._linkIconTextures.off)
                }
            }, {
                key: "disappear",
                value: function() {
                    return this._memorySkillGroup.consume(),
                    this._hideGaugeEffect(),
                    this.emit("consume", this),
                    this.cancel()
                }
            }, {
                key: "increaseGaugeTo",
                value: function(e) {
                    this._memorySkillGroup.increaseTo(e)
                }
            }, {
                key: "_showGaugeFullEffect",
                value: function() {
                    if (!(this._gaugeFullEffects.length > 0)) {
                        aoba.soundManager.playSE(v.default.maxMemory);
                        var e = _.default.playParticle(g.default.memoryAppealGauge.heart2, this._memorySkillGroup, 0, 0);
                        this._gaugeFullEffects.push(e);
                        var t = aoba.Sprite.new("concert_heart.png").addTo(this._memorySkillGroup, 0, 4, {
                            anchor: .5
                        });
                        this._gaugeFullEffects.push(t),
                        aoba.FrameTween.new(t).to({
                            scaleX: 1.94,
                            scaleY: 1.94
                        }, 3, "easeInOutQuad").to({
                            scaleX: 1.62,
                            scaleY: 1.62
                        }, 3, "easeInOutQuad").to({
                            scaleX: 1.94,
                            scaleY: 1.94
                        }, 3, "easeInOutQuad").to({
                            scaleX: 1,
                            scaleY: 1
                        }, 3, "easeInOutQuad").wait(4).loop(),
                        aoba.FrameTween.new(this).to({
                            scaleX: 1.15,
                            scaleY: 1.15
                        }, 3).to({
                            scaleX: 1,
                            scaleY: 1
                        }, 16)
                    }
                }
            }, {
                key: "_hideGaugeEffect",
                value: function() {
                    var e = this;
                    this._gaugeFullEffects.reduce(function(e, t) {
                        return e.then(function() {
                            return aoba.FrameTween.new(t).to({
                                alpha: 0
                            }, 5).call(function() {
                                t.destroy()
                            }).promise()
                        })
                    }, Promise.resolve()).then(function() {
                        e._gaugeFullEffects = []
                    })
                }
            }, {
                key: "disabled",
                get: function() {
                    return this._disabled
                }
            }, {
                key: "selected",
                get: function() {
                    return this._selected
                }
            }, {
                key: "isMemoryAppeal",
                get: function() {
                    return this._isMemoryAppeal
                }
            }, {
                key: "skillId",
                get: function() {
                    return this._skillId
                }
            }, {
                key: "idolId",
                get: function() {
                    return this._idolId
                }
            }, {
                key: "skillGroupPosition",
                get: function() {
                    return this._memorySkillGroup.position
                }
            }], [{
                key: "create",
                value: function(e, a) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return e.level >= 1 ? t.new(e, n) : h.default.new(a.getImagePath("concert_card"), n)
                }
            }]),
            t
        }(aoba.Container);
        t.default = w
    },
    1409: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = {
            children: [{
                name: "memorySkillGaugeBase",
                fullName: "memorySkillGaugeBase",
                anchor: {
                    x: .5,
                    y: .5
                },
                type: "sprite",
                key: "memory_skill_gauge_base.png",
                x: 0,
                y: 0
            }, {
                name: "gauge",
                fullName: "gauge",
                anchor: {
                    x: .5,
                    y: .5
                },
                type: "sprite",
                key: "memory_skill_gauge.png",
                x: 0,
                y: 0
            }, {
                name: "memorySkillGaugeFrame",
                fullName: "memorySkillGaugeFrame",
                anchor: {
                    x: .5,
                    y: .5
                },
                type: "sprite",
                key: "memory_skill_gauge_frame.png",
                x: 0,
                y: 0
            }, {
                name: "icon",
                fullName: "icon",
                anchor: {
                    x: .5,
                    y: .5
                },
                type: "sprite",
                key: "memory_skill_icon.png",
                x: 0,
                y: 0
            }],
            name: "",
            fullName: "",
            pivot: {
                x: .5,
                y: .5
            },
            type: "container",
            x: 1072,
            y: 577
        }
    },
    1410: function(e, t, a) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function r(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function i(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function o(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = function() {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, a, n) {
                return a && e(t.prototype, a),
                n && e(t, n),
                t
            }
        }()
          , s = a(1616)
          , c = n(s)
          , u = a(199)
          , f = n(u)
          , d = function(e, t) {
            return e + "/" + t
        }
          , p = function(e) {
            function t(e, a) {
                r(this, t);
                var n = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                n._mental = e,
                n._maxMental = a;
                var o = n.fromData(c.default, {
                    icon: {
                        scale: .84
                    },
                    gauge: f.default.new("concert_mental_gauge.png", {
                        maxValue: n._maxMental,
                        value: n._mental
                    }),
                    value: {
                        text: d(n._mental, n._maxMental),
                        dx: -67,
                        dy: -2
                    }
                })
                  , l = o.gauge
                  , s = o.value;
                return s.style.stroke = 4076865,
                s.style.strokeThickness = 4,
                s.setAnchor(.5),
                n._gauge = l,
                n._value = s,
                n._gauge.once("empty", function() {
                    n.emit("gaugeEmpty")
                }),
                n
            }
            return o(t, e),
            l(t, [{
                key: "increase",
                value: function(e) {
                    e = Math.min(e, this._maxMental - this._mental),
                    this._mental += e,
                    this._gauge.increase(e),
                    this._value.text = d(this._mental, this._maxMental)
                }
            }, {
                key: "decrease",
                value: function(e) {
                    e = Math.min(e, this._mental),
                    this._mental -= e,
                    this._gauge.decrease(e),
                    this._value.text = d(this._mental, this._maxMental)
                }
            }, {
                key: "setValue",
                value: function(e) {
                    this._mental = e,
                    this._gauge.setValue(e),
                    this._value.text = d(this._mental, this._maxMental)
                }
            }, {
                key: "value",
                get: function() {
                    return this._mental
                }
            }, {
                key: "mentalRate",
                get: function() {
                    return this._mental / this._maxMental
                }
            }, {
                key: "isRetired",
                get: function() {
                    return 0 === this._mental
                }
            }, {
                key: "isWarning",
                get: function() {
                    return this.mentalRate < .2
                }
            }]),
            t
        }(aoba.Container);
        t.default = p
    },
    1411: function(e, t, a) {
        "use strict";
        function n(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function r(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function i(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = a(1026)
          , l = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(o)
          , s = function(e) {
            function t(e) {
                n(this, t);
                var a = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this))
                  , i = e.name
                  , o = e.comment
                  , s = e.imagePaths
                  , c = e.isMemoryAppeal
                  , u = void 0
                  , f = void 0;
                c ? (u = "memory_skill_detail_base.png",
                f = .66) : (u = "skill_detail_base.png",
                f = 1);
                var d = a.fromData(l.default, {
                    skillDetailBase: {
                        key: u
                    },
                    idolIcon: {
                        key: s && s.icon,
                        scale: f
                    },
                    name: {
                        text: i,
                        dy: -3
                    },
                    description: {
                        text: o,
                        dy: -3
                    }
                });
                return d.description.style.wordWrap = !0,
                d.description.style.wordWrapWidth = 260,
                d.description.style.breakWords = !0,
                d.description.style.leading = -4,
                a
            }
            return i(t, e),
            t
        }(aoba.Container);
        t.default = s
    },
    1412: function(e, t, a) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function r(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function i(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function o(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = a(1026)
          , s = n(l)
          , c = a(3)
          , u = n(c)
          , f = a(2)
          , d = n(f)
          , p = function(e) {
            return "" + d.default.env.ASSET_ROOT + u.default.createImagePath("characters", "link_skill_icon", e)
        }
          , h = 11184810
          , y = function(e) {
            function t(e) {
                var a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                r(this, t);
                var n = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this))
                  , o = e.name
                  , l = e.comment
                  , c = e.linkSkillIdols
                  , u = e.linkSkillType
                  , f = e.enabledLinkSkill
                  , d = n.fromData(s.default, {
                    skillDetailBase: {
                        key: "skill_detail_base_link.png"
                    },
                    idolIcon: null,
                    name: {
                        text: o,
                        dy: -3
                    },
                    description: {
                        text: l,
                        dy: -3
                    }
                })
                  , y = aoba.Container.new();
                if (c.forEach(function(e, t) {
                    (e ? aoba.Sprite.from(p(e.characterId)) : aoba.Sprite.new("unknown_idol_icon.png")).addTo(y, 52 * t, 0)
                }),
                "linear" === u)
                    for (var _ = y.children.length - 1, m = 0; m < _; m++) {
                        var g = aoba.Sprite.new("link_skill_arrow.png")
                          , b = y.children[m];
                        g.addTo(y, b.x + b.width, b.height / 2, {
                            anchor: .5
                        })
                    }
                return y.addTo(n, 19, 11),
                d.description.style.wordWrap = !0,
                d.description.style.wordWrapWidth = 260,
                d.description.style.breakWords = !0,
                d.description.style.leading = -4,
                f || a || (d.skillDetailBase.tint = h,
                d.description.tint = h,
                d.name.tint = h,
                y.children.forEach(function(e) {
                    e.tint = h
                })),
                n
            }
            return o(t, e),
            t
        }(aoba.Container);
        t.default = y
    },
    1413: function(e, t, a) {
        "use strict";
        function n(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function r(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function i(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = function() {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, a, n) {
                return a && e(t.prototype, a),
                n && e(t, n),
                t
            }
        }()
          , l = a(1293)
          , s = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(l)
          , c = a(1021)
          , u = function(e) {
            function t(e) {
                var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    isPositionVisible: !1
                };
                n(this, t);
                var i = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this))
                  , o = e.id
                  , l = e.idol
                  , c = e.imagePaths
                  , u = e.linkSkill
                  , f = e.isFixedMeter
                  , d = i.fromData(s.default, {
                    skillCardBase: {
                        key: "skill_card_base.png"
                    },
                    skillCardIdol: {
                        key: c.card
                    },
                    skillIcon: {
                        instance: aoba.Sprite.new(e.getImagePath()),
                        scale: 1 / .785
                    },
                    positionIcon: a.isPositionVisible && l.position ? {
                        instance: aoba.Sprite.new("fes_role_icon_s_" + l.position + ".png"),
                        scale: 1 / .785,
                        anchor: aoba.p(.5)
                    } : null
                })
                  , p = d.skillCardBase
                  , h = d.skillIcon;
                return h.x -= h.width / 2,
                h.y -= h.height / 2,
                i._linkIconTextures = {
                    on: aoba.Texture.fromImage("link_on.png"),
                    off: aoba.Texture.fromImage("link_off.png")
                },
                i._linkSkillIcon = aoba.Sprite.new(i._linkIconTextures.off).addTo(i, -72, -53, {
                    anchor: .5,
                    visible: !!u,
                    scale: 1 / .785
                }),
                i._linkSkillIconEffect = null,
                i._skillCardBase = p,
                i.scale.set(.785),
                i._skillId = o,
                i._idolId = l.id,
                i._idolUnitId = l.unitId,
                i._selected = !1,
                i._isFixedMeter = f,
                i.interactive = !0,
                i
            }
            return i(t, e),
            o(t, [{
                key: "slideUp",
                value: function() {
                    return aoba.Tween.fromData(this, c.skillCard.slideUp).promise()
                }
            }, {
                key: "select",
                value: function() {
                    var e = this;
                    return this._selected ? Promise.resolve() : this._tween ? (this._tween.then(function() {
                        return e.select()
                    }),
                    Promise.resolve()) : (this._selected = !0,
                    this._tween = aoba.Tween.fromData(this, c.skillCard.select).call(function() {
                        e._tween = null
                    }).promise(),
                    this._tween)
                }
            }, {
                key: "cancel",
                value: function() {
                    var e = this;
                    return this._selected ? this._tween ? (this._tween.then(function() {
                        return e.cancel()
                    }),
                    Promise.resolve()) : (this._selected = !1,
                    this._tween = aoba.Tween.fromData(this, c.skillCard.cancel).call(function() {
                        e._tween = null
                    }).promise(),
                    this._tween) : Promise.resolve()
                }
            }, {
                key: "updateLinkSkillState",
                value: function(e) {
                    this._enabledLinkSkill !== e && (this._enabledLinkSkill = e,
                    this._enabledLinkSkill ? this._linkSkillIcon.texture = this._linkIconTextures.on : this._linkSkillIcon.texture = this._linkIconTextures.off)
                }
            }, {
                key: "disappear",
                value: function() {
                    var e = this;
                    aoba.Tween.fromData(this, c.skillCard.disappear).call(function() {
                        return e.destroy({
                            children: !0
                        })
                    })
                }
            }, {
                key: "skillId",
                get: function() {
                    return this._skillId
                }
            }, {
                key: "idolId",
                get: function() {
                    return this._idolId
                }
            }, {
                key: "idolUnitId",
                get: function() {
                    return this._idolUnitId
                }
            }, {
                key: "selected",
                get: function() {
                    return this._selected
                }
            }, {
                key: "isFixedMeter",
                get: function() {
                    return this._isFixedMeter
                }
            }, {
                key: "enabledLinkSkill",
                get: function() {
                    return this._enabledLinkSkill
                }
            }, {
                key: "baseHeight",
                get: function() {
                    return this._skillCardBase.height
                }
            }]),
            t
        }(aoba.Container);
        t.default = u
    },
    1567: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a(212)
          , r = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(n)
          , i = function(e) {
            r.default.dynamicLoad(function() {
                return a.e(77).then(a.bind(null, 1568))
            }, function() {
                return a.e(78).then(a.bind(null, 1569))
            }).then(function(t) {
                return e(t.LiveGameManager)
            })
        };
        t.default = i
    },
    1570: function(e, t, a) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function r(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function i(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function o(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = function() {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, a, n) {
                return a && e(t.prototype, a),
                n && e(t, n),
                t
            }
        }()
          , s = function e(t, a, n) {
            null === t && (t = Function.prototype);
            var r = Object.getOwnPropertyDescriptor(t, a);
            if (void 0 === r) {
                var i = Object.getPrototypeOf(t);
                return null === i ? void 0 : e(i, a, n)
            }
            if ("value"in r)
                return r.value;
            var o = r.get;
            if (void 0 !== o)
                return o.call(n)
        }
          , c = a(1571)
          , u = n(c)
          , f = a(2)
          , d = n(f)
          , p = a(143)
          , h = n(p)
          , y = a(9)
          , _ = n(y)
          , m = a(1021)
          , g = function(e) {
            if (e && e.__esModule)
                return e;
            var t = {};
            if (null != e)
                for (var a in e)
                    Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
            return t.default = e,
            t
        }(m)
          , b = a(1032)
          , v = n(b)
          , w = a(31)
          , k = n(w)
          , S = a(1572)
          , E = n(S)
          , T = a(1593)
          , O = n(T)
          , x = a(1600)
          , P = n(x)
          , I = a(1601)
          , M = n(I)
          , A = a(1605)
          , j = n(A)
          , C = a(1408)
          , D = n(C)
          , R = a(1608)
          , L = n(R)
          , F = a(1609)
          , N = n(F)
          , B = a(1610)
          , G = n(B)
          , U = a(1614)
          , Y = n(U)
          , X = a(1617)
          , W = n(X)
          , V = a(1618)
          , H = n(V)
          , Q = a(1620)
          , J = n(Q)
          , z = a(1621)
          , K = n(z)
          , q = a(1623)
          , $ = n(q)
          , Z = a(1624)
          , ee = n(Z)
          , te = a(1625)
          , ae = n(te)
          , ne = a(1628)
          , re = n(ne)
          , ie = a(1630)
          , oe = n(ie)
          , le = a(1631)
          , se = n(le)
          , ce = a(1632)
          , ue = n(ce)
          , fe = a(1633)
          , de = n(fe)
          , pe = a(1634)
          , he = n(pe)
          , ye = a(1635)
          , _e = n(ye)
          , me = a(1636)
          , ge = n(me)
          , be = a(1637)
          , ve = n(be)
          , we = a(1648)
          , ke = n(we)
          , Se = a(222)
          , Ee = n(Se)
          , Te = {
            1: {
                imagePath: "speed_button.png",
                SESpeed: 1,
                nextSpeedChange: 2
            },
            2: {
                imagePath: "speed_button_2.png",
                SESpeed: 2,
                nextSpeedChange: 3
            },
            3: {
                imagePath: "speed_button_3.png",
                SESpeed: 2,
                nextSpeedChange: 1
            }
        }
          , Oe = [].concat(function(e) {
            if (Array.isArray(e)) {
                for (var t = 0, a = Array(e.length); t < e.length; t++)
                    a[t] = e[t];
                return a
            }
            return Array.from(e)
        }(h.default.NUMBER_OF_TIMES_LIMITED_MASTER_EFFECT_TYPES))
          , xe = function(e) {
            function t(e) {
                r(this, t);
                var a = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this))
                  , n = e.rivals.find(function(e) {
                    return e.isPlayer
                });
                n && !n.name && (n.name = e.userName);
                var o = [].concat(d.default.app.RIVAL_COLORS);
                e.rivals.forEach(function(e) {
                    e.isPlayer || (e.idolColor = o.shift())
                }),
                a._concertService = e.concertService,
                a._isTutorial = e.isTutorial,
                a._isFesMatch = !!e.userFesDeck,
                a._isProduceConcert = e.isProduceConcert,
                a._voicePlayer = new ke.default(a._concertService.centerIdol),
                a._onEndConcert = e.onEndConcert,
                a._stageLayer = H.default.new(e.bg),
                a._turn = re.default.new(a._concertService.turn + 1),
                a._judgeList = P.default.new(),
                a._playerIdolList = W.default.new(),
                a._skillSelectLayer = K.default.new(),
                a._passiveSkillList = N.default.new(),
                a._skillHistoryList = ee.default.new(),
                a._skillCardHand = $.default.new({
                    isFesMatch: a._isFesMatch,
                    onSelect: a._selectSkillCard.bind(a)
                }),
                a._timingGaugeGroup = ae.default.new(),
                a._PauseDialogClass = a._isFesMatch ? ve.default.FesPauseDialog : ve.default.AuditionPauseDialog,
                a._memorySkillCard = null,
                a._standIdol = null,
                a._standSupportIdols = {},
                a._appealPhaseLayer = E.default.new({
                    centerIdol: a._concertService.centerIdol,
                    judgeList: a._judgeList,
                    playerIdolList: a._playerIdolList,
                    isFinal: e.isFinal,
                    isFanMeeting: e.isFanMeeting,
                    isFesMatch: a._isFesMatch
                }).on("retired", a._showConcertFailureCutIn, a).on("playVoice", function(e) {
                    a._voicePlayer.play(e)
                }).on("playAppealVoice", function(e) {
                    var t = e.voiceId
                      , n = e.characterId;
                    a._voicePlayer.play(t, n)
                }).on("playLinkVoice", function(e) {
                    a._voicePlayer.playLinkAppealVoices(e)
                }).on("showScoreBonus", function(e) {
                    e.addTo(a)
                }).on("showEvaluations", function(e) {
                    e.addTo(a)
                }),
                a._speedChanger = new se.default;
                var l = Te[a._speedChanger.speed]
                  , s = a.fromData(u.default, {
                    stageLayer: a._stageLayer,
                    turn: a._turn,
                    pauseButton: {
                        class: _.default.DecideButton
                    },
                    speedButton: _.default.DecideButton.new(l.imagePath),
                    judgeList: a._judgeList,
                    playerIdolList: a._playerIdolList,
                    skillSelectLayer: a._skillSelectLayer,
                    timingGaugeGroup: a._timingGaugeGroup
                });
                a._skillDetailList = J.default.new().addToAt(a, a._skillSelectLayer, d.default.SCREEN_CENTER.x, 716),
                a._overlay = _.default.createDialogOverlay(.3).addToAt(a, a._timingGaugeGroup, 0, 0, {
                    alpha: 0
                });
                var c = aoba.soundManager.playConcertMusic(e.musicPath);
                return a._music = c ? new j.default(c) : j.default.createEmpty(),
                a._music.pause(),
                a._speedButton = s.speedButton,
                a._speedButton.on("tap", function() {
                    a._speedChanger.change(l.nextSpeedChange),
                    l = Te[a._speedChanger.speed],
                    a._speedButton.texture = aoba.Texture.fromImage(l.imagePath),
                    a._setSESpeed(l.SESpeed)
                }),
                a.on("removed", function() {
                    a._speedChanger.reset(),
                    a._setSESpeed(a._speedChanger.speed)
                }),
                a._pauseButton = s.pauseButton,
                a._pauseButton.on("tap", a._pauseGame, a),
                _.default.backKeyEventManager.addHandler(a._pauseButton),
                Ee.default.on("suspend", a._onApplicationSuspend, a),
                a.interactive = !0,
                a._timingGaugeGroup.on("showResult", function(e) {
                    a._voicePlayer.play(e)
                }),
                e.isTutorial && (a._appealPhaseLayer.on("endLinkSkill", function() {
                    a.emit("endLinkSkill")
                }),
                a.on("stopOnPerfect", function() {
                    a._timingGaugeGroup.stopOnPerfect()
                }),
                a.on("stopMemoryRoulette", function() {
                    a._memorySkillRoulette && (a._memorySkillRoulette.stopOnGood(),
                    a._memorySkillRoulette.once("stopOnGood", function() {
                        a.emit("stopOnGood")
                    }))
                })),
                a._setSESpeed(),
                a._startOverlay = _.default.graphics.rect(d.default.SCREEN_WIDTH, d.default.SCREEN_HEIGHT).addTo(a),
                a
            }
            return o(t, e),
            l(t, [{
                key: "ezgPreDestroy",
                value: function() {
                    Ee.default.off("suspend", this._onApplicationSuspend, this),
                    this._standIdol && (this._standIdol.destroy({
                        children: !0
                    }),
                    this._standIdol = null),
                    this._appealPhaseLayer && (this._appealPhaseLayer.destroy({
                        children: !0
                    }),
                    this._appealPhaseLayer = null),
                    this._warinigFrame && (this._warinigFrame.destroy({
                        children: !0
                    }),
                    this._warinigFrame = null),
                    s(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "ezgPreDestroy", this).call(this)
                }
            }, {
                key: "pause",
                value: function() {
                    s(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "pause", this).call(this),
                    this.children.forEach(function(e) {
                        return e.pause()
                    })
                }
            }, {
                key: "resume",
                value: function() {
                    s(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "resume", this).call(this),
                    this.children.forEach(function(e) {
                        return e.resume()
                    })
                }
            }, {
                key: "start",
                value: function() {
                    var e = this
                      , t = this._concertService.getStartData()
                      , a = t.judges
                      , n = t.rivals
                      , r = t.centerIdol
                      , i = t.otherIdols
                      , o = t.memoryAppeal
                      , l = t.turn
                      , s = t.usedSkills
                      , c = t.actors;
                    this._stageLayer.addIdol(r),
                    this._stageLayer.addSupportIdols(i),
                    this._skillHistoryList.initSkillHistories(s),
                    aoba.soundManager.playSE(v.default.prepare),
                    Promise.resolve().then(function() {
                        return new Promise(function(t) {
                            aoba.Tween.new(e._startOverlay).to({
                                alpha: 0
                            }, 480).call(function() {
                                t(),
                                e._startOverlay.destroy()
                            })
                        }
                        )
                    }).then(function() {
                        if (e._initJudgeList(a),
                        e._initPlayerIdolList(n),
                        e._appealPhaseLayer.updateStatusIconsForNextTurn(c),
                        e._initSkillSelectLayer(),
                        l >= 1) {
                            var t = e._concertService.checkFinishResult();
                            if (t.finished)
                                return e._endConcert(t.isRetired),
                                new Promise(function(e) {}
                                )
                        }
                        e._skillSelectLayer.slideIn(),
                        e._judgeList.slideIn();
                        var r = e._isProduceConcert ? "concert_start_2" : "concert_start_1";
                        return e._voicePlayer.play(r),
                        e._playerIdolList.slideIn()
                    }).then(function() {
                        return e.emit("startConcert"),
                        aoba.FrameTween.new(e).wait(1).promise()
                    }).then(function() {
                        e._turn.slideIn();
                        var t = e._concertService.standby();
                        return e._initSkillCardHand(t.idol.activeSkills, o).then(function() {
                            return t
                        })
                    }).then(function(t) {
                        e._music.start(),
                        e._stageLayer.startLive(),
                        e._setUpTurn(t),
                        e._standIdol = _.default.Spine.new(r.getSpinePath("stand_costume")),
                        e._appealPhaseLayer.setCenterIdolSpine(e._standIdol)
                    })
                }
            }, {
                key: "_onApplicationSuspend",
                value: function() {
                    this._canPause() && this._pauseGame()
                }
            }, {
                key: "_canPause",
                value: function() {
                    return !this._isTutorial && !this._overlay.parent
                }
            }, {
                key: "_pauseGame",
                value: function() {
                    var e = this;
                    if (!this._pauseDialog) {
                        var t = this._concertService.getPauseData();
                        this._music.pause();
                        var a = this._playerIdolList.findMyIdol().hp;
                        this._pauseDialog = this._PauseDialogClass.new(Object.assign({}, t, {
                            mental: a
                        })).addTo(this).on("removed", function() {
                            e._pauseDialog = null,
                            e._resumeGame()
                        })
                    }
                }
            }, {
                key: "_resumeGame",
                value: function() {
                    this._pauseDialog && (this._pauseDialog.destroy({
                        children: !0
                    }),
                    this._pauseDialog = null),
                    this._music.resume()
                }
            }, {
                key: "_setUpTurn",
                value: function(e) {
                    var t = this;
                    return this._currentPassiveSkills = e.idol.passiveSkills,
                    this._playerIdolList.showRankingIcons(),
                    this._playerIdolList.showAttackResults(e.rivals),
                    this._timingGaugeGroup.setUpShare(e.idol.appealMeters),
                    this._showPassiveSkillCutIn(e.idol.passiveSkills).then(function() {
                        return t._memorySkillCard.updateAvailability(e.idol.enabledMemoryAppeal),
                        t._skillCardHand.updateLinkSkillState(t._concertService.allSkills),
                        e.idol.enabledMemoryAppeal && !t._appealPhaseLayer.hasMemoryMovie && t.once("touchend", function() {
                            t._appealPhaseLayer.initiateMovie()
                        }),
                        t._memorySkillCard.increaseGaugeTo(e.idol.memoryAppealPoint)
                    }).then(function() {
                        t._overlay.remove(),
                        t._judgeList.on("select", t._handleSelectJudge, t),
                        t.emit("setUpTurn", t._concertService.turn)
                    })
                }
            }, {
                key: "_handleSelectJudge",
                value: function(e) {
                    this.selectedCard && !this.selectedCard.disabled && this._judgeList.isArrowVisible ? (this._judgeList.setTargetJudge(e),
                    this._judgeList.removeAllListeners(),
                    this._voicePlayer.playSelectVoice(this.selectedCard),
                    aoba.soundManager.playSE(v.default.selectJudgeTarget),
                    this._startSkillGame(),
                    this.emit("selectJudge")) : (aoba.soundManager.playSE(k.default.ui.decide),
                    M.default.new(e).addTo(this).open())
                }
            }, {
                key: "_startSkillGame",
                value: function() {
                    var e = this;
                    this._prepareSkillGame().then(function() {
                        aoba.FrameTween.fromData(e._overlay, g.stageLayer.showOverlay),
                        (0,
                        _e.default)().addTo(e);
                        var t = 1 / e._speedChanger.speed;
                        e.selectedCard.isMemoryAppeal ? (e._showMemorySkillRoulette(t),
                        aoba.FrameTween.new(e).wait(22).call(function() {
                            e._startMemorySkillRoulette()
                        })) : (e._timingGaugeGroup.appear(),
                        aoba.FrameTween.new(e).wait(22).call(function() {
                            e._startTimingGauge(t)
                        }))
                    })
                }
            }, {
                key: "_playAppealPhase",
                value: function(e) {
                    var t = this;
                    aoba.FrameTween.fromData(this._overlay, g.stageLayer.hideOverlay),
                    this._startAppealPhase(e).then(function() {
                        t.emit("endAppealPhase", t._concertService.turn)
                    }).then(function() {
                        return aoba.Tween.new(t).wait(1).promise()
                    }).then(function() {
                        return t._endTurn()
                    }).then(function() {
                        var e = t._concertService.standby();
                        return t._turn.updateTurn().then(function() {
                            return t._skillCardHand.syncSkillCards(e.idol.activeSkills)
                        }).then(function() {
                            return t._setUpTurn(e)
                        })
                    })
                }
            }, {
                key: "_playActions",
                value: function(e) {
                    var t = this;
                    return this._appealPhaseLayer.addTo(this).playActions(e).then(function() {
                        t._appealPhaseLayer.destroyChildren(),
                        t._appealPhaseLayer.remove()
                    })
                }
            }, {
                key: "_calcAppealResultActions",
                value: function(e) {
                    var t = this._judgeList.selectedJudge
                      , a = this.selectedCard;
                    a.disappear();
                    var n = this._concertService.findActiveSkill(a.skillId, a.idolId, a.isMemoryAppeal);
                    this._skillHistoryList.addSkillHistory(n);
                    var r = this._concertService.appeal(n, t.id, e)
                      , i = !0
                      , o = !1
                      , l = void 0;
                    try {
                        for (var s, c = r.actions[Symbol.iterator](); !(i = (s = c.next()).done); i = !0) {
                            var u = s.value
                              , f = !0
                              , d = !1
                              , p = void 0;
                            try {
                                for (var h, y = u.targets[Symbol.iterator](); !(f = (h = y.next()).done); f = !0) {
                                    h.value.effects.forEach(function(e) {
                                        Oe.includes(e.type) && (e.remainTimes = e.times)
                                    })
                                }
                            } catch (e) {
                                d = !0,
                                p = e
                            } finally {
                                try {
                                    !f && y.return && y.return()
                                } finally {
                                    if (d)
                                        throw p
                                }
                            }
                        }
                    } catch (e) {
                        o = !0,
                        l = e
                    } finally {
                        try {
                            !i && c.return && c.return()
                        } finally {
                            if (o)
                                throw l
                        }
                    }
                    return r
                }
            }, {
                // maxkss 마지막 수정 20190411
                key: "_startTimingGauge",
                value: function(e) {
                    var t = this;
                    // maxkss 판정핵 
                    var extensionState = (document.getElementById("perfectState").innerHTML)
                    var selectPoint = parseInt(document.getElementById("perfectPoint").innerHTML)
                    if (extensionState == "true") {
                        for (var i = 0; i < 4; i++) {
                            t.children[10]._appealMeters[i] = t.children[10]._appealMeters[selectPoint];
                        }
                    }
                    // maxkss 끝
                    this._timingGaugeGroup.playSlider(e).then(function() {
                        t.once("touchstart", function() {
                            t._timingGaugeGroup.stopSlider().then(function(e) {
                                t._timingGaugeGroup.disappear();
                                var a = t._calcAppealResultActions(e);
                                // maxkss 딜미터기 코드
                                dealMeter.calcDealMeter(a)
                                // 끝
                                t._playAppealPhase(a),
                                t.emit("startAppealPhase")
                            })
                        })
                    })
                }
            }, {
                key: "_showMemorySkillRoulette",
                value: function(e) {
                    return this._memorySkillRoulette = L.default.new(this._concertService.centerIdol),
                    this._memorySkillRoulette.addToAt(this, this._timingGaugeGroup),
                    this._memorySkillRoulette.appear(e),
                    this._memorySkillRoulette
                }
            }, {
                key: "_startMemorySkillRoulette",
                value: function() {
                    var e = this;
                    this._memorySkillRoulette.start(),
                    this.emit("startMemoryRoulette");
                    var t = null
                      , a = !1
                      , n = function() {
                        var t = e._memorySkillRoulette.judge();
                        null !== t && t.resultCallBack.call(e._memorySkillRoulette, t)
                    }
                      , r = function n() {
                        e.off("touchend", n),
                        e.off("touchendoutside", n),
                        e.off("touchcancel", n),
                        t ? e._playAppealPhase(t) : a = !0
                    };
                    this._memorySkillRoulette.once("decideResult", function(t) {
                        var a = t.isSuccess ? "concert_memory_appeal_success_1" : "concert_memory_appeal_failure_1";
                        e._voicePlayer.play(a)
                    }),
                    this._memorySkillRoulette.once("end", function(r) {
                        e.off("touchstart", n);
                        var i = r.isSuccess ? "perfect" : "miss"
                          , o = e._timingGaugeGroup.findAppealMeterByCategory(i);
                        t = e._calcAppealResultActions(o),
                        // maxkss 딜미터기 메모리 어필 계산
                        dealMeter.calcDealMeter(t),
                        // maxkss 끝
                        a && (e._playAppealPhase(t),
                        t = null)
                    }),
                    this._memorySkillRoulette.once("showFrameEnd", function() {
                        e.once("touchstart", n),
                        e.once("touchend", r),
                        e.once("touchendoutside", r),
                        e.once("touchcancel", r)
                    })
                }
            }, {
                key: "_endTurn",
                value: function() {
                    var e = this._checkConcertIsFinished();
                    return e.finished ? (this._endConcert(e.isRetired),
                    new Promise(function(e) {}
                    )) : (this._stageLayer.hideOverlay(),
                    this._passiveSkillList.fadeOut(),
                    this._playerIdolList.hideAttackOrders(),
                    this._judgeList.hideAttackOrders(),
                    this._judgeList.showTrends(),
                    this._judgeList.showNoticeIcons(),
                    this._playerIdolList.slideUp(),
                    this._judgeList.slideUp(),
                    this._skillSelectLayer.slideUp())
                }
            }, {
                key: "_initJudgeList",
                value: function(e) {
                    var t = this;
                    // maxkss 딜 미터기 심사위원 초기화
                    dealMeter.initJudgeList(e)
                    // maxkss 끝
                    e.forEach(function(e) {
                        t._judgeList.addJudge(O.default.new(e))
                    })
                }
            }, {
                key: "_initPlayerIdolList",
                value: function(e) {
                    var t = this;
                    // maxkss 딜 미터기 아이돌 초기화 및 시작
                    dealMeter.initPlayerList(e)
                    dealMeter.showDealMeter()
                    // maxkss 끝
                    this._playerIdolList.init(e.map(function(e) {
                        var a = Y.default.new(e, e.idolColor);
                        return e.isPlayer && (a.on("enterWarning", t._showWarning, t),
                        a.on("leaveWarning", t._hideWarning, t)),
                        a
                    }))
                }
            }, {
                key: "_initSkillSelectLayer",
                value: function() {
                    var e = this;
                    this._skillSelectLayer.init({
                        passiveSkillList: this._passiveSkillList,
                        skillHistoryList: this._skillHistoryList,
                        skillCardHand: this._skillCardHand,
                        memorySkillCard: this._memorySkillCard
                    }),
                    this._skillSelectLayer.on("showPassiveSkillDetailList", function() {
                        aoba.soundManager.playSE(k.default.ui.decide),
                        e._showPassiveSkillDetailList()
                    })
                }
            }, {
                key: "_initSkillCardHand",
                value: function(e, t) {
                    return this._memorySkillCard = D.default.create(t, this._concertService.centerIdol),
                    this._skillCardHand.init(e, this._memorySkillCard)
                }
            }, {
                key: "_prepareSkillGame",
                value: function() {
                    return this._overlay.addToAt(this, this._timingGaugeGroup),
                    this.selectedCard.isFixedMeter && this._timingGaugeGroup.switchShare(),
                    this._playerIdolList.showAllAttackResults(),
                    this._skillDetailList.disappear()
                }
            }, {
                key: "_startAppealPhase",
                value: function(e) {
                    var t = this;
                    return this._playerIdolList.hideAttackResults().then(function() {
                        return t._playerIdolList.hideRankingIcons(),
                        t._appealPhaseLayer.showAttackOrders(e.actions).then(function() {
                            return t._playerIdolList.reorder()
                        }),
                        new Promise(function(e) {
                            t.emit("showAppealStartText"),
                            (0,
                            he.default)().addTo(t).on("end", e)
                        }
                        )
                    }).then(function() {
                        t._judgeList.hideTargetFrame()
                    }).then(function() {
                        return t._stageLayer.showOverlay(),
                        t._playerIdolList.slideDown(),
                        t._skillSelectLayer.slideDown(),
                        t._judgeList.slideDown()
                    }).then(function() {
                        return t._playActions(e)
                    })
                }
            }, {
                key: "_showPassiveSkillCutIn",
                value: function(e) {
                    var t = this;
                    if (this._concertService.turn >= 2 && e.length > 0) {
                        var a = void 0
                          , n = void 0
                          , r = e.find(function(e) {
                            return e.rarity >= 2
                        });
                        r ? (a = r,
                        n = "concert_special_passive_skill_2") : (a = e[0],
                        n = "concert_special_passive_skill_1"),
                        this._voicePlayer.play(n, a.idol.characterId)
                    }
                    return e.reduce(function(e, a) {
                        return e.then(function() {
                            if (t._passiveSkillList.playIconEffect(a),
                            a.rarity >= 2) {
                                var e = t._concertService.centerIdol
                                  , n = a.idol.characterId === e.characterId ? e : t._concertService.idols.find(function(e) {
                                    return e.characterId === a.idol.characterId
                                });
                                return de.default.new(n.getSpinePath("stand_costume"), a).addTo(t, 0, 350).play().then(function(e) {
                                    e.destroy({
                                        children: !0
                                    })
                                })
                            }
                            var r = a.idol.cutInImagePath;
                            return ue.default.new(r, a).addTo(t, 0, 450).play().then(function(e) {
                                e.destroy({
                                    children: !0
                                })
                            })
                        })
                    }, Promise.resolve())
                }
            }, {
                key: "_showPassiveSkillDetailList",
                value: function() {
                    G.default.new(this._currentPassiveSkills).addTo(this).open()
                }
            }, {
                key: "_selectSkillCard",
                value: function(e) {
                    var t = this;
                    if (!this._switchingPromise) {
                        var a = !1;
                        if (e === this.selectedCard)
                            this._judgeList.hideTargetArrows(),
                            this._judgeList.showNoticeIcons(),
                            this._skillCardHand.cancelCard(e),
                            this._skillHistoryList.clearIconEffects(),
                            this._switchingPromise = this._skillDetailList.hideContents();
                        else {
                            e.disabled ? this._judgeList.hideTargetArrows() : (a = !0,
                            this._judgeList.hideTargetArrows()),
                            this._judgeList.hideNoticeIcons(),
                            this._skillHistoryList.clearIconEffects(),
                            this._skillCardHand.selectCard(e);
                            var n = this._concertService.findActiveSkill(e.skillId, e.idolId, e.isMemoryAppeal);
                            n.enabledLinkSkill && this._skillHistoryList.lightUp(n.linkSkill.linkSkillCharacters),
                            this._switchingPromise = this._skillDetailList.switchContents(n, e.enabledLinkSkill)
                        }
                        this._switchingPromise.then(function() {
                            t._switchingPromise = null,
                            a && t._judgeList.showTargetArrows()
                        }),
                        this.emit("selectCard")
                    }
                }
            }, {
                key: "_showWarning",
                value: function() {
                    this._warinigFrame || (this._warinigFrame = oe.default.new("warning_frame.png")),
                    this._warinigFrame.playAndAddTo(this)
                }
            }, {
                key: "_hideWarning",
                value: function() {
                    this._warinigFrame && this._warinigFrame.stopAndRemove()
                }
            }, {
                key: "_showConcertFailureCutIn",
                value: function() {
                    var e = this;
                    this._music.stop(),
                    this._hideWarning(),
                    this._stageLayer.setFinishAnimation();
                    var t = (0,
                    ge.default)(this._standIdol).addTo(this);
                    Promise.all([new Promise(function(a) {
                        t.on("middle", function() {
                            e._drawTapArea(a),
                            e._voicePlayer.play("concert_mental_2", null, a)
                        })
                    }
                    ), new Promise(function(e) {
                        t.on("end", e)
                    }
                    )]).then(function() {
                        return e._endConcert(!0)
                    })
                }
            }, {
                key: "_checkConcertIsFinished",
                value: function() {
                    return this._appealPhaseLayer.syncConcertData(this._concertService.actors),
                    this._concertService.checkFinishResult()
                }
            }, {
                key: "_endConcert",
                value: function(e) {
                    var t = this;
                    // maxkss 딜미터기 숨기기
                    dealMeter.hideDealMeter()
                    // maxkss 끝
                    delete this.update,
                    new Promise(function(a) {
                        e ? a() : (t._drawTapArea(a),
                        t._voicePlayer.play("concert_finish", null, a))
                    }
                    ).then(function() {
                        var a = t._concertService.getResultRivals()
                          , n = t._playerIdolList.findMyIdol().star;
                        t._onEndConcert({
                            rivals: a,
                            isRetired: e,
                            score: n
                        })
                    })
                }
            }, {
                key: "_drawTapArea",
                value: function(e) {
                    return _.default.graphics.rect(d.default.SCREEN_WIDTH, d.default.SCREEN_HEIGHT, {
                        alpha: 0
                    }).addTo(this, 0, 0, {
                        interactive: !0
                    }).once("tap", e)
                }
            }, {
                key: "_setSESpeed",
                value: function(e) {
                    this._appealPhaseLayer.setPlaySESpeed(e)
                }
            }, {
                key: "speedButton",
                get: function() {
                    return this._speedButton
                }
            }, {
                key: "pauseButton",
                get: function() {
                    return this._pauseButton
                }
            }, {
                key: "selectedCard",
                get: function() {
                    return this._skillCardHand.selectedCard
                }
            }]),
            t
        }(aoba.Container);
        t.default = xe
    },
    1571: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = {
            children: [{
                name: "stageLayer",
                fullName: "stageLayer",
                pivot: {
                    x: .5,
                    y: .5
                },
                type: "container",
                x: 568,
                y: 320
            }, {
                name: "turn",
                fullName: "turn",
                type: "container",
                x: 0,
                y: 0
            }, {
                name: "pauseButton",
                fullName: "pauseButton",
                anchor: {
                    x: .5,
                    y: .5
                },
                type: "sprite",
                key: "pause_button.png",
                x: 1098,
                y: 38
            }, {
                name: "speedButton",
                fullName: "speedButton",
                anchor: {
                    x: .5,
                    y: .5
                },
                type: "sprite",
                key: null,
                x: 1014,
                y: 38
            }, {
                name: "judgeList",
                fullName: "judgeList",
                type: "container",
                x: 0,
                y: 61
            }, {
                name: "playerIdolList",
                fullName: "playerIdolList",
                type: "container",
                x: 884,
                y: 76
            }, {
                name: "skillSelectLayer",
                fullName: "skillSelectLayer",
                type: "container",
                x: 0,
                y: 512
            }, {
                name: "skillDetailList",
                fullName: "skillDetailList",
                visible: !1,
                pivot: {
                    x: .5,
                    y: .5
                },
                type: "container",
                x: 568,
                y: 452
            }, {
                name: "timingGaugeGroup",
                fullName: "timingGaugeGroup",
                visible: !1,
                pivot: {
                    x: .5,
                    y: .5
                },
                type: "container",
                x: 568,
                y: 439
            }],
            name: "",
            fullName: "",
            type: "container"
        }
    },
    1572: function(e, t, a) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function r(e) {
            if (Array.isArray(e)) {
                for (var t = 0, a = Array(e.length); t < e.length; t++)
                    a[t] = e[t];
                return a
            }
            return Array.from(e)
        }
        function i(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function o(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function l(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = function() {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, a, n) {
                return a && e(t.prototype, a),
                n && e(t, n),
                t
            }
        }()
          , c = a(14)
          , u = n(c)
          , f = a(2)
          , d = n(f)
          , p = a(143)
          , h = n(p)
          , y = a(1022)
          , _ = n(y)
          , m = a(9)
          , g = n(m)
          , b = a(1032)
          , v = n(b)
          , w = a(1573)
          , k = n(w)
          , S = a(1574)
          , E = n(S)
          , T = a(1575)
          , O = n(T)
          , x = a(1577)
          , P = n(x)
          , I = a(1579)
          , M = n(I)
          , A = a(1580)
          , j = n(A)
          , C = a(1586)
          , D = n(C)
          , R = a(1587)
          , L = n(R)
          , F = a(1405)
          , N = n(F)
          , B = a(1592)
          , G = n(B)
          , U = a(341)
          , Y = n(U)
          , X = a(4)
          , W = n(X)
          , V = h.default.EFFECT_TYPES
          , H = h.default.MASTER_EFFECT_TYPES
          , Q = h.default.ACTION_TYPES
          , J = h.default.ACTOR_ROLES
          , z = h.default.TARGET_GROUPS
          , K = h.default.FES_SCORE_TYPES
          , q = [H.PERFECT_BONUS, H.FASTEST_APPEAL, H.SLOWEST_APPEAL]
          , $ = [h.default.MASTER_EFFECT_TYPES.VARIABLE_DAMAGE_DOWN_BARRIER, h.default.MASTER_EFFECT_TYPES.VARIABLE_DAMAGE_UP_BARRIER]
          , Z = function(e) {
            return new Error("Invalid effectType " + e + ".")
        }
          , ee = function(e) {
            return new Error("Invalid actionType " + e + ".")
        }
          , te = function(e) {
            return new Error("Invalid actorRole " + e + ".")
        }
          , ae = function(e) {
            return new Error("Invalid targetGroup " + e + ".")
        }
          , ne = function(e) {
            function t(e) {
                i(this, t);
                var a = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return a._judgeList = e.judgeList,
                a._playerIdolList = e.playerIdolList,
                a._isFinal = e.isFinal,
                a._isFanMeeting = e.isFanMeeting,
                a._isFesMatch = e.isFesMatch,
                a._standSupportIdols = {},
                a._memorySkillMoviePath = "" + d.default.env.ASSET_ROOT + e.centerIdol.getMoviePath("card_costume"),
                a._standIdol = null,
                a._movie = null,
                a
            }
            return l(t, e),
            s(t, [{
                key: "setPlaySESpeed",
                value: function(e) {
                    this._playSESpeed = e
                }
            }, {
                key: "setCenterIdolSpine",
                value: function(e) {
                    this._standIdol = e
                }
            }, {
                key: "showAttackOrders",
                value: function(e) {
                    var t = this;
                    return aoba.soundManager.playSE(v.default.showAttackOrder),
                    this._playerIdolList.resetAttackOrders(),
                    Promise.all(e.map(function(e, a) {
                        return t._findActorBy(e).showAttackOrder(a + 1)
                    }))
                }
            }, {
                key: "syncConcertData",
                value: function(e) {
                    var t = this;
                    e.forEach(function(e) {
                        var a = t._findActorBy(e);
                        a && e.hp !== a.hp && a.setGaugeValue(e.hp)
                    })
                }
            }, {
                key: "playActions",
                value: function(e) {
                    var t = this;
                    this._applyDamageAndRecoverBeforeActions(e.previousActions);
                    var a = []
                      , n = [];
                    if (this._isFanMeeting || this._isFesMatch) {
                        var r = !0
                          , i = !1
                          , o = void 0;
                        try {
                            for (var l, s = e.actions[Symbol.iterator](); !(r = (l = s.next()).done); r = !0) {
                                var c = l.value;
                                if (c.scores) {
                                    var u = !0
                                      , f = !1
                                      , d = void 0;
                                    try {
                                        for (var p, h = c.scores[Symbol.iterator](); !(u = (p = h.next()).done); u = !0) {
                                            var y = p.value;
                                            K.TURN_END.includes(y.type) && a.push(y)
                                        }
                                    } catch (e) {
                                        f = !0,
                                        d = e
                                    } finally {
                                        try {
                                            !u && h.return && h.return()
                                        } finally {
                                            if (f)
                                                throw d
                                        }
                                    }
                                }
                                if (c.evaluations) {
                                    var _ = !0
                                      , m = !1
                                      , g = void 0;
                                    try {
                                        for (var b, v = c.evaluations[Symbol.iterator](); !(_ = (b = v.next()).done); _ = !0) {
                                            var w = b.value;
                                            n.push(w)
                                        }
                                    } catch (e) {
                                        m = !0,
                                        g = e
                                    } finally {
                                        try {
                                            !_ && v.return && v.return()
                                        } finally {
                                            if (m)
                                                throw g
                                        }
                                    }
                                }
                            }
                        } catch (e) {
                            i = !0,
                            o = e
                        } finally {
                            try {
                                !r && s.return && s.return()
                            } finally {
                                if (i)
                                    throw o
                            }
                        }
                    }
                    return e.actions.reduce(function(e, a) {
                        return e.then(function() {
                            return t._playAction(a)
                        })
                    }, Promise.resolve()).then(function() {
                        return t._playScoreBonusOrEvaluationCutIn(a, n)
                    }).then(function() {
                        return t.updateStatusIconsForNextTurn(e.actors)
                    })
                }
            }, {
                key: "_applyDamageAndRecoverBeforeActions",
                value: function(e) {
                    var t = !0
                      , a = !1
                      , n = void 0;
                    try {
                        for (var r, i = e[Symbol.iterator](); !(t = (r = i.next()).done); t = !0) {
                            var o = r.value
                              , l = o.targets[0];
                            if (l) {
                                var s = this._findActorBy(l);
                                if (s) {
                                    var c = 0
                                      , u = 0
                                      , f = 0;
                                    o.targets.forEach(function(e) {
                                        e.effects.forEach(function(e) {
                                            return e.effectType === V.DAMAGE ? void (c += e.value) : e.data.effectType === H.MEMORY_APPEAL_GAUGE_BONUS ? void (f += e.data.value) : e.effectType === V.RECOVER || e.effectType === V.BUFF && e.data.effectType === H.REGENERATE ? void (u += e.value) : void (e.data.effectType === H.SLIP_DAMAGE && (c += e.value))
                                        })
                                    }),
                                    c > 0 && s.receiveDamage(c),
                                    u > 0 ? s.recover(u) : f > 0 && s.raiseMemoryAppeal(f)
                                }
                            }
                        }
                    } catch (e) {
                        a = !0,
                        n = e
                    } finally {
                        try {
                            !t && i.return && i.return()
                        } finally {
                            if (a)
                                throw n
                        }
                    }
                }
            }, {
                key: "updateStatusIconsForNextTurn",
                value: function(e) {
                    var t = this;
                    e.forEach(function(e) {
                        var a = t._findActorBy(e);
                        a && a.updateStatusEffectList(e.statusEffects)
                    })
                }
            }, {
                key: "initiateMovie",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._memorySkillMoviePath;
                    if (!e || e.length <= 0)
                        throw new Error('invalid video path: "' + e + '"');
                    if (this._movie)
                        throw new Error("movie is already initiated");
                    return this._movie = g.default.MuteVideo.new(e),
                    this._movie.pauseOnPlay()
                }
            }, {
                key: "_findActorBy",
                value: function(e) {
                    switch (e.role) {
                    case J.IDOL:
                        return this.myPlayer;
                    case J.RIVAL:
                        return this._playerIdolList.findById(e.id);
                    case J.JUDGE:
                        return this._judgeList.findById(e.id);
                    default:
                        throw te(e.role)
                    }
                }
            }, {
                key: "_playAction",
                value: function(e) {
                    switch (e.role) {
                    case J.IDOL:
                        return this._playIdolAction(e);
                    case J.RIVAL:
                        return this._playRivalAction(e);
                    case J.JUDGE:
                        return this._playJudgeAction(e);
                    default:
                        throw te(e.role)
                    }
                }
            }, {
                key: "_getOrCreateStandSupportIdol",
                value: function(e) {
                    var t = e.id;
                    return this._standSupportIdols[t] || (this._standSupportIdols[t] = g.default.Spine.new(e.getSpinePath("stand_costume"))),
                    this._standSupportIdols[t]
                }
            }, {
                key: "_playIdolAction",
                value: function(e) {
                    var t = this
                      , a = u.default.groupBy(e.targets, "actionType");
                    return Object.keys(a).reduce(function(n, r) {
                        var i = a[r];
                        switch (r) {
                        case Q.LINK:
                            return n.then(function() {
                                return t._playIdolLinkSkillCutIn(e, i)
                            });
                        case Q.MEMORY:
                            return n.then(function() {
                                return t._playIdolMemorySkillCutIn(e, i)
                            });
                        case Q.SKILL:
                        case Q.NORMAL:
                            return n.then(function() {
                                return t._playIdolSkillCutIn(e, i)
                            });
                        default:
                            throw ee(r)
                        }
                    }, Promise.resolve()).then(function() {
                        return t._onEndPlayerAction(t.myPlayer, e.stars, e.scores)
                    })
                }
            }, {
                key: "_playRivalAction",
                value: function(e) {
                    var t = this
                      , a = u.default.groupBy(e.targets, "actionType")
                      , n = this._playerIdolList.findById(e.rival.id);
                    return Object.keys(a).reduce(function(r, i) {
                        var o = a[i];
                        switch (i) {
                        case Q.MEMORY:
                            return r.then(function() {
                                return t._playRivalMemorySkillCutIn(o, e.skill, e.rival)
                            });
                        case Q.LINK:
                        case Q.SKILL:
                        case Q.NORMAL:
                            return r.then(function() {
                                return t._playRivalNormalSkillEffect(o, n)
                            });
                        default:
                            throw ee(i)
                        }
                    }, Promise.resolve()).then(function() {
                        return t._onEndPlayerAction(n, e.stars, e.scores)
                    })
                }
            }, {
                key: "_playJudgeAction",
                value: function(e) {
                    var t = this
                      , a = e.id
                      , n = e.targets
                      , i = e.isUsedSkill
                      , o = this._judgeList.findById(a)
                      , l = n.map(function(e) {
                        return t._playerIdolList.findRivalOrMyIdol(e.id)
                    });
                    return Promise.resolve().then(function() {
                        return Promise.all(l.map(function(e) {
                            return e.goForward()
                        }))
                    }).then(function() {
                        return o.showAttackComment(i),
                        Promise.all(l.map(function(e) {
                            return t._shootJudgeAttackParticle(o, e)
                        }))
                    }).then(function() {
                        return Promise.all([o.act()].concat(r(n.map(function(e) {
                            var a = t._playerIdolList.findRivalOrMyIdol(e.id);
                            return Promise.all(e.effects.map(function(e) {
                                return t._playJudgeSkillEffect(o, a, e)
                            }))
                        }))))
                    }).then(function() {
                        return l.reduce(function(e, a) {
                            return a.isRetired ? a.isPlayer ? (t.emit("retired"),
                            e.then(function() {
                                return new Promise(function(e) {}
                                )
                            })) : e.then(function() {
                                return new Promise(function(e) {
                                    (0,
                                    M.default)(a.character.getImagePath("active_skill_silhouette")).addTo(t).on("end", e)
                                }
                                )
                            }) : e
                        }, Promise.resolve())
                    }).then(function() {
                        return Promise.all(l.map(function(e) {
                            return e.backFromForward()
                        }))
                    })
                }
            }, {
                key: "_playRivalNormalSkillEffect",
                value: function(e, t) {
                    var a = this;
                    return t.goForward().then(function() {
                        return aoba.FrameTween.new(t).wait(5).call(function() {
                            return t.backFromForward()
                        }),
                        a._playRivalSkillEffects(t, e)
                    })
                }
            }, {
                key: "_playRivalMemorySkillCutIn",
                value: function(e, t, a) {
                    var n = this
                      , i = O.default.new().addTo(this).play(t, a.character, a.idolColor)
                      , o = e.map(function(e) {
                        var t = []
                          , r = [];
                        if (e.effects.forEach(function(e) {
                            e.effectType === V.DAMAGE ? r.push(e) : t.push(e)
                        }),
                        r.length > 0) {
                            var i = r.reduce(function(e, t) {
                                return e + t.value
                            }, 0)
                              , o = r.map(function(e) {
                                return e.data.attribute
                            });
                            t.push(Object.assign({}, r[0], {
                                value: i,
                                attributes: o
                            }))
                        }
                        return Promise.all(t.map(function(r, i) {
                            return aoba.FrameTween.new(n).wait(4 * i).wait(4).call(function() {
                                var o = n._playerIdolList.findById(a.id);
                                return n._playIdolSkillEffectOnCutIn({
                                    playerIdol: o,
                                    target: e,
                                    effect: r,
                                    damageEffectCount: t.length,
                                    index: i
                                })
                            }).wait(30).promise()
                        }))
                    });
                    return Promise.all([i].concat(r(o)))
                }
            }, {
                key: "_onEndPlayerAction",
                value: function(e, t) {
                    var a = this
                      , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : []
                      , r = this._isFesMatch ? n.filter(function(e) {
                        return K.STAR.includes(e.type)
                    }) : [];
                    return Promise.resolve().then(function() {
                        return Promise.all([a._playBonusStars(t), a._playScoreBonusCutIn(r)])
                    }).then(function() {
                        a.emit("endGainStars")
                    }).then(function() {
                        return a._judgeList.goAwayIfCompleted()
                    })
                }
            }, {
                key: "_playIdolSkillCutIn",
                value: function(e, t) {
                    var a = this
                      , n = e.skill
                      , i = e.idol
                      , o = e.scores
                      , l = this._isFesMatch ? o.filter(function(e) {
                        return K.SKILL.includes(e.type)
                    }) : []
                      , s = null
                      , c = null;
                    i.isFesIdol ? s = i.isCenter ? this._standIdol : this._getOrCreateStandSupportIdol(i) : (s = this._standIdol,
                    i.isCenter || (c = this._getOrCreateStandSupportIdol(i)));
                    var u = P.default.new().addTo(this).play(n, s, c).then(function(e) {
                        s && s.remove(),
                        c && c.remove(),
                        e.destroy({
                            children: !0
                        })
                    });
                    this._playIdolSkillVoice(t, n.idol.characterId);
                    var f = t.map(function(e) {
                        return Promise.all(e.effects.map(function(t, n) {
                            return aoba.FrameTween.new(a).wait(4 * n).wait(10).call(function() {
                                var r = e.effects.filter(function(e) {
                                    return e.effectType === V.DAMAGE
                                }).length;
                                a._playIdolSkillEffectOnCutIn({
                                    playerIdol: a.myPlayer,
                                    target: e,
                                    effect: t,
                                    damageEffectCount: r,
                                    index: n,
                                    isMyPlayer: !0,
                                    hasSupportIdol: !!c
                                })
                            }).wait(60).promise()
                        }))
                    });
                    return Promise.all([u, this._playScoreBonusCutIn(l)].concat(r(f)))
                }
            }, {
                key: "_playIdolSkillVoice",
                value: function(e, t) {
                    var a = this
                      , n = []
                      , r = !0
                      , i = !1
                      , o = void 0;
                    try {
                        for (var l, s = e[Symbol.iterator](); !(r = (l = s.next()).done); r = !0) {
                            var c = l.value
                              , u = !0
                              , f = !1
                              , d = void 0;
                            try {
                                for (var p, h = c.effects[Symbol.iterator](); !(u = (p = h.next()).done); u = !0) {
                                    var y = p.value;
                                    n.push(y.effectType)
                                }
                            } catch (e) {
                                f = !0,
                                d = e
                            } finally {
                                try {
                                    !u && h.return && h.return()
                                } finally {
                                    if (f)
                                        throw d
                                }
                            }
                        }
                    } catch (e) {
                        i = !0,
                        o = e
                    } finally {
                        try {
                            !r && s.return && s.return()
                        } finally {
                            if (i)
                                throw o
                        }
                    }
                    if (n.includes(V.DAMAGE)) {
                        var _ = e.some(function(e) {
                            return e.effects.some(function(t) {
                                var n = a._judgeList.findById(e.id);
                                return t.value >= .1 * n.maxHp
                            })
                        })
                          , m = _ ? "concert_attack_2" : "concert_attack_1";
                        this.emit("playAppealVoice", {
                            voiceId: m,
                            characterId: t
                        })
                    } else
                        n.includes(V.BUFF) ? this.emit("playAppealVoice", {
                            voiceId: "concert_buff",
                            characterId: t
                        }) : n.includes(V.DEBUFF) && this.emit("playAppealVoice", {
                            voiceId: "concert_debuff",
                            characterId: t
                        })
                }
            }, {
                key: "_playIdolSkillEffectOnCutIn",
                value: function(e) {
                    switch (e.effect.effectType) {
                    case V.DAMAGE:
                        this._playIdolDamageSkillEffectOnCutIn(e);
                        break;
                    case V.BUFF:
                        this._playIdolBuffSkillEffectOnCutIn(e);
                        break;
                    case V.DEBUFF:
                        this._playIdolDebuffSkillEffectOnCutIn(e);
                        break;
                    case V.RECOVER:
                        this._playIdolRecoverSkillEffectOnCutIn(e);
                        break;
                    case V.PENALTY:
                        this._playIdolPenaltySkillEffectOnCutIn(e);
                        break;
                    default:
                        throw Z(e.effect.effectType)
                    }
                }
            }, {
                key: "_playIdolDamageSkillEffectOnCutIn",
                value: function(e) {
                    var t = this
                      , a = e.playerIdol
                      , n = e.target
                      , r = e.effect
                      , i = e.index
                      , o = e.isMyPlayer
                      , l = e.hasSupportIdol
                      , s = this._judgeList.findById(n.id);
                    switch (s && e.target.actionType !== Q.LINK && s.decreaseStatusEffectRemainTimes($),
                    r.data.targetGroup) {
                    case z.US:
                        a.receiveDamage(r.value),
                        this._playSelfDamageEffect();
                        break;
                    case z.THEM:
                        var c = o ? D.default.shootIdolAttack : D.default.shootRivalMemoryAppeal;
                        aoba.soundManager.playSE(v.default.showDamageText);
                        var u = k.default.new(r.value)
                          , f = l ? 480 : 640
                          , p = 80 * (1 - n.effects.length) / 2
                          , h = d.default.SCREEN_CENTER.y + p + 80 * i
                          , y = aoba.p(f, h)
                          , _ = s.getGlobalPosition();
                        c(y, _, this).then(function() {
                            u.destroy({
                                children: !0
                            }),
                            t._playJudgeDamageEffect(n, r)
                        }),
                        u.addTo(this, y.x - 28, y.y, {
                            anchor: .5,
                            scale: 0
                        }),
                        u.appear();
                        "1000700060101" === r.data.id && aoba.FrameTween.new(this).wait(6).call(function() {
                            var e = Math.atan((y.y - _.y) / (y.x - _.x));
                            G.default.new().addTo(t, y.x, y.y, {
                                scale: aoba.p(-1, 1),
                                rotation: e
                            }).play().then(function(e) {
                                return e.destroy({
                                    children: !0
                                })
                            })
                        });
                        break;
                    default:
                        throw ae(r.data.targetGroup)
                    }
                }
            }, {
                key: "_playIdolBuffSkillEffectOnCutIn",
                value: function(e) {
                    var t = e.effect;
                    if (!q.includes(t.data.effectType)) {
                        if (t.data.effectType === H.RERAISE)
                            return void this._playIdolActiveReraiseSkillEffectOnCutIn(e);
                        var a = this._judgeList.findById(e.target.id);
                        switch (t.data.targetGroup) {
                        case z.US:
                            aoba.soundManager.playSE(v.default.showBuffEffect),
                            e.playerIdol.addStatusEffect(t),
                            g.default.playParticle(_.default.arrowUp, this, 720, 780, {
                                scale: 1.5
                            });
                            break;
                        case z.THEM:
                            aoba.soundManager.playSE(v.default.showBuffEffect),
                            a.addStatusEffect(t);
                            var n = a.getGlobalPosition();
                            g.default.playParticle(_.default.arrowUp, this, n.x - 40, n.y + 60, {
                                scale: .6
                            });
                            break;
                        case z.RIVALS:
                            this._playRivalReceivedBuffEffect(e.playerIdol, t);
                            break;
                        default:
                            throw ae(t.data.targetGroup)
                        }
                    }
                }
            }, {
                key: "_playIdolActiveReraiseSkillEffectOnCutIn",
                value: function(e) {
                    var t = this
                      , a = e.playerIdol
                      , n = e.effect;
                    1 === this._playSESpeed ? aoba.soundManager.playSE(v.default.showActiveReraiseEffect) : aoba.soundManager.playSE(v.default.showActiveReraiseEffect2),
                    aoba.FrameTween.new(this).call(function() {
                        return j.default.playIdolReraiseEffect().addTo(t)
                    }).wait(50).call(function() {
                        a.addStatusEffect(n),
                        a.playActiveReraiseEffect()
                    })
                }
            }, {
                key: "_playIdolDebuffSkillEffectOnCutIn",
                value: function(e) {
                    var t = e.effect
                      , a = this._judgeList.findById(e.target.id);
                    switch (t.data.targetGroup) {
                    case z.US:
                        aoba.soundManager.playSE(v.default.showDebuffEffect),
                        e.playerIdol.addStatusEffect(t),
                        t.data.effectType === H.SLIP_DAMAGE ? this._createIdolMelancholyParticle(a) : g.default.playParticle(_.default.arrowDown, this, 720, 240, {
                            scale: 1.5
                        });
                        break;
                    case z.THEM:
                        aoba.soundManager.playSE(v.default.showDebuffEffect),
                        a.addStatusEffect(t);
                        var n = a.getGlobalPosition();
                        g.default.playParticle(this._getJudgeDebuffParticle(), this, n.x - 40, n.y - 100, {
                            scale: .6
                        });
                        break;
                    case z.RIVALS:
                        this._playRivalReceivedDebuffEffect(e.playerIdol, t);
                        break;
                    default:
                        throw ae(t.data.targetGroup)
                    }
                }
            }, {
                key: "_playIdolRecoverSkillEffectOnCutIn",
                value: function(e) {
                    var t = e.playerIdol
                      , a = e.effect;
                    if (a.data.effectType === H.MEMORY_APPEAL_GAUGE_BONUS) {
                        aoba.soundManager.playSE(v.default.useSkillOfRaiseMemoryAppeal);
                        var n = a.data.value;
                        t.raiseMemoryAppeal(n),
                        j.default.playIdolRaiseEffectOfMemoryAppeal(n).addTo(this)
                    } else
                        t.playRecoverEffect(),
                        t.recover(a.value),
                        j.default.playIdolRecoverEffect(a.value).addTo(this)
                }
            }, {
                key: "_playIdolPenaltySkillEffectOnCutIn",
                value: function(e) {
                    var t = e.effect;
                    if ([H.MEMORY_APPEAL_GAUGE_BONUS].includes(t.data.effectType)) {
                        aoba.soundManager.playSE(v.default.showDebuffEffect);
                        var a = t.data.value;
                        j.default.playIdolLowerEffectOfMemoryAppeal(a).addTo(this)
                    }
                }
            }, {
                key: "_playSelfDamageEffect",
                value: function() {
                    var e = this
                      , t = [];
                    (0,
                    u.default)(5).times(function() {
                        t.push({
                            x: 640 + 400 * Math.random(),
                            y: 100 + 400 * Math.random()
                        })
                    }),
                    t.reduce(function(t, a) {
                        var n = void 0;
                        return t.call(function() {
                            n = g.default.playParticle(_.default.judgeAttack.trail, e, a.x, a.y)
                        }).wait(2).call(function() {
                            n.stopAndDestroy()
                        })
                    }, aoba.FrameTween.new(this))
                }
            }, {
                key: "_playRivalSkillEffects",
                value: function(e, t) {
                    var a = this;
                    return Promise.all(t.map(function(t) {
                        var n = []
                          , r = [];
                        if (t.effects.forEach(function(e) {
                            e.effectType === V.DAMAGE && e.type === H.DAMAGE ? r.push(e) : n.push(e)
                        }),
                        r.length > 0) {
                            var i = r.reduce(function(e, t) {
                                return e + t.value
                            }, 0)
                              , o = r.map(function(e) {
                                return e.data.attribute
                            });
                            n.unshift(Object.assign({}, r[0], {
                                value: i,
                                attributes: o
                            }))
                        }
                        return Promise.all(n.map(function(n, r) {
                            return a._playRivalSkillEffect(e, t, n, r)
                        }))
                    }))
                }
            }, {
                key: "_playIdolSpecialSkillEffect",
                value: function(e, t) {
                    if (q.includes(t.data.effectType))
                        return Promise.resolve();
                    var a = this.myPlayer
                      , n = this._judgeList.findById(e.id);
                    switch (t.effectType) {
                    case V.DAMAGE:
                        return t.data.targetGroup === z.US ? a.receiveSelfDamage(t.value) : (n && e.actionType !== Q.LINK && n.decreaseStatusEffectRemainTimes($),
                        this._playJudgeDamageEffect(e, t, !0));
                    case V.BUFF:
                        return t.data.effectType === H.REGENERATE && a.recover(t.value),
                        this._playPlayerBuffEffect(t, a, n);
                    case V.DEBUFF:
                        return this._playPlayerDebuffEffect(t, a, n);
                    case V.RECOVER:
                        return this._playPlayerRecoverEffect(t, a);
                    default:
                        throw Z(t.effectType)
                    }
                }
            }, {
                key: "_playRivalSkillEffect",
                value: function(e, t, a) {
                    if (q.includes(a.data.effectType))
                        return Promise.resolve();
                    var n = this._judgeList.findById(t.id);
                    switch (a.effectType) {
                    case V.DAMAGE:
                        return a.data.targetGroup === z.US ? e.receiveSelfDamage(a.value) : this._playRivalDamageAppealEffect(a, e, t);
                    case V.BUFF:
                        return a.data.effectType === H.REGENERATE && e.recover(a.value),
                        a.data.effectType === H.RERAISE ? this._playPlayerReraiseEffect(a, e) : this._playPlayerBuffEffect(a, e, n);
                    case V.DEBUFF:
                        return this._playPlayerDebuffEffect(a, e, n);
                    case V.RECOVER:
                        return this._playPlayerRecoverEffect(a, e);
                    case V.PENALTY:
                        return this._playPlayerPenaltyEffect(a, e);
                    default:
                        throw Z(a.effectType)
                    }
                }
            }, {
                key: "_playJudgeSkillEffect",
                value: function(e, t, a) {
                    switch (a.effectType) {
                    case V.DAMAGE:
                        return t.receiveDamage(a.value);
                    case V.DEBUFF:
                        return this._playJudgeDebuffEffect(e, t, a);
                    case V.BUFF:
                        return this._playJudgeBuffEffect(e, t, a);
                    case V.RERAISE:
                        return t.reraise(a);
                    case V.RECOVER:
                        return Promise.resolve();
                    default:
                        throw Z(a.effectType)
                    }
                }
            }, {
                key: "_playJudgeBuffEffect",
                value: function(e, t, a) {
                    switch (a.data.targetGroup) {
                    case z.US:
                        aoba.soundManager.playSE(v.default.showBuffEffect, {
                            volume: .15
                        });
                        var n = e.getGlobalPosition();
                        return g.default.playParticle(_.default.arrowUp, this, n.x - 40, n.y + 60, {
                            scale: .6
                        }),
                        e.addStatusEffect(a),
                        Promise.resolve();
                    case z.THEM:
                        aoba.soundManager.playSE(v.default.showBuffEffect, {
                            volume: .15
                        });
                        var r = t.getCenterGlobalPosition();
                        return g.default.playParticle(_.default.idolBuff, this, r.x - 100, r.y + 10, {
                            scale: .35
                        }),
                        t.addStatusEffect(a),
                        Promise.resolve();
                    default:
                        return Promise.resolve()
                    }
                }
            }, {
                key: "_playJudgeDebuffEffect",
                value: function(e, t, a) {
                    switch (a.data.targetGroup) {
                    case z.US:
                        aoba.soundManager.playSE(v.default.showDebuffEffect, {
                            volume: .15
                        });
                        var n = e.getGlobalPosition();
                        return g.default.playParticle(_.default.arrowDown, this, n.x - 40, n.y - 60, {
                            scale: .6
                        }),
                        e.addStatusEffect(a),
                        Promise.resolve();
                    case z.THEM:
                        aoba.soundManager.playSE(v.default.showDebuffEffect, {
                            volume: .15
                        });
                        var r = t.getCenterGlobalPosition();
                        return g.default.playParticle(_.default.idolDebuff, this, r.x - 100, r.y - 60, {
                            scale: .35
                        }),
                        t.addStatusEffect(a),
                        Promise.resolve();
                    default:
                        return Promise.resolve()
                    }
                }
            }, {
                key: "_playRivalDamageAppealEffect",
                value: function(e, t, a) {
                    var n = this
                      , r = this._judgeList.findById(a.id);
                    return r && a.actionType !== Q.LINK && r.decreaseStatusEffectRemainTimes($),
                    this._shootRivalAttackParticle(t, r).then(function() {
                        return n._playJudgeDamageEffect(a, e)
                    })
                }
            }, {
                key: "_playPlayerReraiseEffect",
                value: function(e, t) {
                    return 1 === this._playSESpeed ? aoba.soundManager.playSE(v.default.showActiveReraiseRivalEffect) : aoba.soundManager.playSE(v.default.showActiveReraiseRivalEffect2),
                    t.addStatusEffect(e),
                    t.playActiveReraiseEffect(),
                    aoba.FrameTween.new(this).wait(45).promise()
                }
            }, {
                key: "_playPlayerBuffEffect",
                value: function(e, t, a) {
                    switch (e.data.targetGroup) {
                    case z.US:
                        aoba.soundManager.playSE(v.default.showBuffEffect),
                        this._playIdolReceivedBuffEffect(t, e);
                        break;
                    case z.THEM:
                        aoba.soundManager.playSE(v.default.showBuffEffect),
                        this._playJudgeReceivedBuffEffect(a, e);
                        break;
                    case z.RIVALS:
                        this._playRivalReceivedBuffEffect(t, e)
                    }
                    return aoba.FrameTween.new(this).wait(45).promise()
                }
            }, {
                key: "_playPlayerDebuffEffect",
                value: function(e, t, a) {
                    switch (e.data.targetGroup) {
                    case z.US:
                        aoba.soundManager.playSE(v.default.showDebuffEffect),
                        this._playIdolReceivedDebuffEffect(t, e);
                        break;
                    case z.THEM:
                        aoba.soundManager.playSE(v.default.showDebuffEffect),
                        this._playJudgeReceivedDebuffEffect(a, e);
                        break;
                    case z.RIVALS:
                        this._playRivalReceivedDebuffEffect(t, e)
                    }
                    return aoba.FrameTween.new(this).wait(45).promise()
                }
            }, {
                key: "_playPlayerRecoverEffect",
                value: function(e, t) {
                    if (e.data.effectType === H.MEMORY_APPEAL_GAUGE_BONUS) {
                        var a = e.data.value;
                        t.raiseMemoryAppeal(a)
                    } else
                        t.recover(e.value);
                    return aoba.FrameTween.new(this).wait(45).promise()
                }
            }, {
                key: "_playPlayerPenaltyEffect",
                value: function(e, t) {
                    if (e.data.effectType === H.MEMORY_APPEAL_GAUGE_BONUS) {
                        var a = e.data.value;
                        t.penaltyMemoryAppeal(a)
                    }
                    return aoba.FrameTween.new(this).wait(45).promise()
                }
            }, {
                key: "_playIdolReceivedBuffEffect",
                value: function(e, t) {
                    var a = e.getCenterGlobalPosition();
                    g.default.playParticle(_.default.idolBuff, this, a.x + 100, a.y + 10, {
                        scale: .35
                    }),
                    e.addStatusEffect(t)
                }
            }, {
                key: "_playRivalReceivedBuffEffect",
                value: function(e, t) {
                    var a = this;
                    aoba.FrameTween.new(this).wait(30).call(function() {
                        aoba.soundManager.playSE(v.default.showBuffEffect);
                        var n = !0
                          , r = !1
                          , i = void 0;
                        try {
                            for (var o, l = a._playerIdolList.children[Symbol.iterator](); !(n = (o = l.next()).done); n = !0) {
                                var s = o.value;
                                s.equals(e) || s.isRetired || a._playIdolReceivedBuffEffect(s, t)
                            }
                        } catch (e) {
                            r = !0,
                            i = e
                        } finally {
                            try {
                                !n && l.return && l.return()
                            } finally {
                                if (r)
                                    throw i
                            }
                        }
                    })
                }
            }, {
                key: "_playIdolReceivedDebuffEffect",
                value: function(e, t) {
                    var a = e.getCenterGlobalPosition();
                    t.data.effectType === H.SLIP_DAMAGE ? this._createIdolMelancholyParticle(e) : g.default.playParticle(_.default.idolDebuff, this, a.x + 100, a.y - 60, {
                        scale: .35
                    }),
                    e.addStatusEffect(t)
                }
            }, {
                key: "_playRivalReceivedDebuffEffect",
                value: function(e, t) {
                    var a = this;
                    aoba.FrameTween.new(this).wait(30).call(function() {
                        aoba.soundManager.playSE(v.default.showDebuffEffect);
                        var n = !0
                          , r = !1
                          , i = void 0;
                        try {
                            for (var o, l = a._playerIdolList.children[Symbol.iterator](); !(n = (o = l.next()).done); n = !0) {
                                var s = o.value;
                                s.equals(e) || s.isRetired || a._playIdolReceivedDebuffEffect(s, t)
                            }
                        } catch (e) {
                            r = !0,
                            i = e
                        } finally {
                            try {
                                !n && l.return && l.return()
                            } finally {
                                if (r)
                                    throw i
                            }
                        }
                    })
                }
            }, {
                key: "_playJudgeReceivedBuffEffect",
                value: function(e, t) {
                    var a = e.getGlobalPosition();
                    g.default.playParticle(_.default.arrowUp, this, a.x - 40, a.y + 60, {
                        scale: .6
                    }),
                    e.addStatusEffect(t)
                }
            }, {
                key: "_playJudgeReceivedDebuffEffect",
                value: function(e, t) {
                    e.addStatusEffect(t);
                    var a = e.getGlobalPosition();
                    g.default.playParticle(this._getJudgeDebuffParticle(), this, a.x - 40, a.y - 120, {
                        scale: .6
                    })
                }
            }, {
                key: "_playIdolSpecialSkillEffects",
                value: function(e) {
                    var t = this;
                    return Promise.all(e.map(function(e) {
                        var a = []
                          , n = [];
                        if (e.effects.forEach(function(e) {
                            e.effectType === V.DAMAGE ? n.push(e) : a.push(e)
                        }),
                        n.length > 0) {
                            var r = n.reduce(function(e, t) {
                                return e + t.value
                            }, 0)
                              , i = n.map(function(e) {
                                return e.data.attribute
                            });
                            a.push(Object.assign({}, n[0], {
                                value: r,
                                attributes: i
                            }))
                        }
                        return Promise.all(a.map(function(a, n) {
                            return t._playIdolSpecialSkillEffect(e, a, n)
                        }))
                    }))
                }
            }, {
                key: "_playJudgeDamageEffect",
                value: function(e, t, a) {
                    var n = this;
                    return aoba.FrameTween.new(this).wait(6).call(function() {
                        var r = k.default.new(t.value)
                          , i = n._judgeList.findById(e.id)
                          , o = !1;
                        o = t.attributes ? t.attributes.includes(i.attribute) : t.data.attribute === i.attribute;
                        var l = o || a;
                        return i.receiveDamage(t.value, l),
                        e.actionType !== Q.LINK && i.updateStatusEffectIcon(),
                        j.default.playJudgeDamageEffect(r, i, e.actionType, o, n)
                    }).wait(10).promise()
                }
            }, {
                key: "_playIdolLinkSkillCutIn",
                value: function(e, t) {
                    var a = this
                      , n = e.skill
                      , r = e.scores
                      , i = this._isFesMatch ? r.filter(function(e) {
                        return K.LINK.includes(e.type)
                    }) : [];
                    aoba.soundManager.playSE(v.default.linkSkill);
                    var o = n.linkSkill.linkSkillIdols
                      , l = o.map(function(e) {
                        return e.getVoicePath("concert_link")
                    });
                    this.emit("playLinkVoice", l);
                    var s = o.find(function(e) {
                        return e.idolId === n.idol.id
                    })
                      , c = o.filter(function(e) {
                        return e.idolId !== n.idol.id
                    })
                      , u = s.isCenter ? this._standIdol : this._getOrCreateStandSupportIdol(s)
                      , f = c.map(function(e) {
                        return e.isCenter ? a._standIdol : a._getOrCreateStandSupportIdol(e)
                    })
                      , d = E.default.new().addTo(this);
                    return d.play(u, f).then(function() {
                        return Promise.all([a._playIdolSpecialSkillEffects(t), a._playScoreBonusCutIn(i)])
                    }).then(function() {
                        a.emit("endLinkSkill")
                    }).then(function() {
                        return aoba.Tween.new(a).wait(1).promise()
                    }).then(function() {
                        u.remove();
                        var e = !0
                          , t = !1
                          , a = void 0;
                        try {
                            for (var n, r = f[Symbol.iterator](); !(e = (n = r.next()).done); e = !0) {
                                n.value.remove()
                            }
                        } catch (e) {
                            t = !0,
                            a = e
                        } finally {
                            try {
                                !e && r.return && r.return()
                            } finally {
                                if (t)
                                    throw a
                            }
                        }
                        d.destroy({
                            children: !0
                        })
                    })
                }
            }, {
                key: "_playIdolMemorySkillCutIn",
                value: function(e, t) {
                    var a = this
                      , n = e.scores
                      , r = this._isFesMatch ? n.filter(function(e) {
                        return K.MEMORY.includes(e.type)
                    }) : [];
                    return function(e) {
                        var t = g.default.graphics.rect(d.default.SCREEN_WIDTH, d.default.SCREEN_HEIGHT, {
                            fill: 16777215
                        }).addTo(e);
                        return t.alpha = 0,
                        new Promise(function(e) {
                            aoba.FrameTween.new(t).to({
                                alpha: 1
                            }, 3).call(e).wait(3).to({
                                alpha: 0
                            }, 3).call(function() {
                                return t.destroy()
                            })
                        }
                        )
                    }(this).then(function() {
                        return a._playMemorySkillMovie()
                    }).then(function() {
                        return Promise.all([a._playIdolSpecialSkillEffects(t), a._playScoreBonusCutIn(r)])
                    })
                }
            }, {
                key: "_playMemorySkillMovie",
                value: function() {
                    var e = this;
                    return this.emit("playVoice", "concert_memory_appeal_success_2"),
                    aoba.soundManager.playSE(v.default.showMemoryCutIn),
                    this._movie || this.initiateMovie(this._memorySkillMoviePath),
                    this._movie.addTo(this),
                    this._movie.show(),
                    aoba.FrameAnimation.new("images/ui/produce_ending/fes_idol_birth_crush_w.png", 102, 102, {
                        fps: 30
                    }).addTo(this, 0, 0, {
                        scale: aoba.p(11.14, 6.27),
                        blendMode: aoba.BLEND_MODES.ADD
                    }).play(),
                    this._movie.isReady ? this._resumeMovie() : new Promise(function(t) {
                        e._movie.once("ready", function() {
                            e._resumeMovie().then(t)
                        })
                    }
                    )
                }
            }, {
                key: "_resumeMovie",
                value: function() {
                    var e = this;
                    this._movie.resume(),
                    this._movie.interactive = !0;
                    var t = function(t) {
                        (0,
                        Y.default)(_.default.memoryAppeal.burst, e, d.default.SCREEN_CENTER.x, d.default.SCREEN_CENTER.y, {
                            scale: 2.4
                        }),
                        aoba.FrameTween.new(e._movie).wait(3).to({
                            alpha: 0
                        }, 6).call(function() {
                            e._movie.destroy(!0),
                            e._movie = null,
                            t()
                        })
                    };
                    return new Promise(function(a) {
                        e._movie.once("tap", function() {
                            return t(a)
                        }),
                        e._movie.once("end", function() {
                            return t(a)
                        })
                    }
                    )
                }
            }, {
                key: "_shootRivalAttackParticle",
                value: function(e, t) {
                    var a = e.getCenterGlobalPosition()
                      , n = t.getGlobalPosition();
                    return D.default.shootRivalAttack(a, n, this)
                }
            }, {
                key: "_shootJudgeAttackParticle",
                value: function(e, t) {
                    var a = e.getGlobalPosition()
                      , n = t.getCenterGlobalPosition();
                    return D.default.shootJudgeAttack(a, n, this)
                }
            }, {
                key: "_shootJudgeStarParticle",
                value: function(e, t) {
                    var a = e.getGlobalPosition()
                      , n = t.getCenterGlobalPosition();
                    return D.default.shootJudgeStar(a, n, this)
                }
            }, {
                key: "_playScoreBonusCutIn",
                value: function(e) {
                    if (!e || 0 === e.length)
                        return Promise.resolve();
                    var t = e.map(function(e) {
                        return {
                            name: e.data.name,
                            score: e.score
                        }
                    })
                      , a = N.default.new(t);
                    return a.setPosition(568, 520),
                    this.emit("showScoreBonus", a),
                    a.play().then(function() {
                        a.destroy({
                            children: !0
                        })
                    })
                }
            }, {
                key: "_playEvaluationCutIn",
                value: function(e) {
                    if (!e || 0 === e.length)
                        return Promise.resolve();
                    var t = this._isFinal ? "fanMeeting" : "fanMeetingRehearsal"
                      , a = e.map(function(e) {
                        return {
                            name: W.default.t("fanMeeting.live.evaluation." + t + "." + e.category)
                        }
                    })
                      , n = L.default.new(a);
                    return n.setPosition(568, 520),
                    this.emit("showEvaluations", n),
                    n.play().then(function() {
                        n.destroy({
                            children: !0
                        })
                    })
                }
            }, {
                key: "_playScoreBonusOrEvaluationCutIn",
                value: function(e, t) {
                    return this._isFanMeeting ? this._playEvaluationCutIn(t) : this._playScoreBonusCutIn(e)
                }
            }, {
                key: "_playBonusStars",
                value: function(e) {
                    var t = this;
                    return e.reduce(function(e, a) {
                        return e.then(function() {
                            return t._playBonusStar(a)
                        })
                    }, Promise.resolve())
                }
            }, {
                key: "_playBonusStar",
                value: function(e) {
                    var t = this
                      , a = this._judgeList.findById(e.judgeId)
                      , n = this._playerIdolList.findRivalOrMyIdol(e.playerId);
                    return n.goForward().then(function() {
                        return a.showBonusComment(),
                        a.giveBonus(e.starNum),
                        a.showBonusEffect(e),
                        t._shootJudgeStarParticle(a, n)
                    }).then(function() {
                        return n.isPlayer && t.emit("playVoice", "concert_last_appeal"),
                        n.receiveBonus(e.starNum)
                    }).then(function() {
                        return n.backFromForward()
                    })
                }
            }, {
                key: "_getJudgeDebuffParticle",
                value: function() {
                    return _.default.arrowDown
                }
            }, {
                key: "_createIdolMelancholyParticle",
                value: function(e) {
                    var t = aoba.Container.new().addTo(e, 5, 5, {
                        alpha: .5
                    });
                    aoba.Sprite.new("images/ui/concert/effects/list_overlay_black.png").addTo(t, 0, 0),
                    aoba.FrameAnimation.new("images/ui/concert/effects/spiral_masked.png", 160, 43, {
                        fps: 12,
                        loop: !0
                    }).addTo(t, 0, 0, {
                        scale: 1.5
                    }).play();
                    var a = aoba.FrameTween.new(t).wait(30).to({
                        alpha: 0
                    }, 15).call(function() {
                        t.destroy({
                            children: !0
                        }),
                        t = null
                    });
                    t.once("removed", function() {
                        a.remove(),
                        a = null
                    }),
                    _.default.melancholy.forEach(function(e) {
                        g.default.playParticle(e, t).blendMode = e.blendMode
                    })
                }
            }, {
                key: "hasMemoryMovie",
                get: function() {
                    return !!this._movie
                }
            }, {
                key: "myPlayer",
                get: function() {
                    var e = this;
                    return this._myPlayer || (this._myPlayer = this._playerIdolList.findMyIdol(),
                    this._myPlayer.on("playVoice", function(t) {
                        e.emit("playVoice", t)
                    })),
                    this._myPlayer
                }
            }]),
            t
        }(aoba.Container);
        t.default = ne
    },
    1573: function(e, t, a) {
        "use strict";
        function n(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function r(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function i(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = function() {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, a, n) {
                return a && e(t.prototype, a),
                n && e(t, n),
                t
            }
        }()
          , l = a(1021)
          , s = a(9)
          , c = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(s)
          , u = .8
          , f = .64
          , d = 45
          , p = 36
          , h = 1e3
          , y = function(e) {
            function t(e) {
                n(this, t);
                var a = u
                  , i = d;
                e < h && (a = f,
                i = p);
                var o = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, {
                    imagePrefix: "damage_number_",
                    originX: .5,
                    interval: i,
                    scaleX: a,
                    scaleY: a
                }));
                return o.setNum(e),
                o
            }
            return i(t, e),
            o(t, [{
                key: "appear",
                value: function() {
                    aoba.Tween.fromData(this, l.idolAttackDamageText.appear).promise()
                }
            }, {
                key: "hit",
                value: function(e) {
                    return this.prefix = "+",
                    this.originX = 1,
                    this.setNum(this.number),
                    this.setPosition(e.x, e.y),
                    aoba.Tween.fromData(this, l.idolAttackDamageText.hit).promise()
                }
            }]),
            t
        }(c.default.ImageLabel);
        t.default = y
    },
    1574: function(e, t, a) {
        "use strict";
        function n(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function r(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function i(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = function() {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, a, n) {
                return a && e(t.prototype, a),
                n && e(t, n),
                t
            }
        }()
          , l = a(2)
          , s = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(l)
          , c = {
            2: {
                idolIndex: 0,
                positions: [{
                    imageNumber: "2",
                    x: 0,
                    startY: 640
                }, {
                    imageNumber: "3",
                    x: 230,
                    startY: -640
                }]
            },
            3: {
                idolIndex: 1,
                positions: [{
                    imageNumber: "2",
                    x: 0,
                    startY: 640
                }, {
                    imageNumber: "3",
                    x: 230,
                    startY: -640
                }, {
                    imageNumber: "2",
                    x: 460,
                    startY: 640
                }]
            },
            4: {
                idolIndex: 2,
                positions: [{
                    imageNumber: "2",
                    x: 0,
                    startY: -640
                }, {
                    imageNumber: "3",
                    x: 230,
                    startY: 640
                }, {
                    imageNumber: "2",
                    x: 460,
                    startY: -640
                }, {
                    imageNumber: "3",
                    x: 690,
                    startY: 640
                }]
            },
            5: {
                idolIndex: 2,
                positions: [{
                    imageNumber: "4",
                    x: 0,
                    startY: -640
                }, {
                    imageNumber: "2",
                    x: 170,
                    startY: 640
                }, {
                    imageNumber: "1",
                    x: 400,
                    startY: -640
                }, {
                    imageNumber: "2",
                    x: 650,
                    startY: 640
                }, {
                    imageNumber: "5",
                    x: 880,
                    startY: -640
                }]
            }
        }
          , u = function(e) {
            function t() {
                n(this, t);
                var e = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return e._idolGroup = aoba.Container.new(),
                e._text = aoba.Sprite.new("link_appeal_text.png").setPosition(s.default.SCREEN_CENTER.x, 463).setProps({
                    anchor: .5,
                    scale: .9,
                    alpha: 0
                }),
                e
            }
            return i(t, e),
            o(t, [{
                key: "play",
                value: function(e, t) {
                    var a = this
                      , n = c[t.length + 1]
                      , r = [].concat(t);
                    return r.splice(n.idolIndex, 0, e),
                    r.forEach(function(e, t) {
                        var r = n.positions[t]
                          , i = aoba.Sprite.new("link_skill_base_" + r.imageNumber + ".png");
                        i.addTo(a._idolGroup, r.x, r.startY),
                        e.addTo(i, i.width / 2, i.height / 2 + 226),
                        e.mask = aoba.Sprite.new("link_skill_base_" + r.imageNumber + ".png"),
                        e.mask.addTo(a._idolGroup, r.x + .03 * i.width, 0, {
                            scale: aoba.p(.94, 1)
                        }),
                        e.setAnimation(0, "skill3");
                        var o = i.y > 0 ? -1 : 1;
                        aoba.Tween.new(i).by({
                            y: 206 * o
                        }, 66, "easeInQuart").by({
                            y: 434 * o
                        }, 264, "easeOutQuart")
                    }),
                    this._idolGroup.addTo(this, s.default.SCREEN_CENTER.x, 0, {
                        pivot: aoba.p(.5, 0)
                    }),
                    this._text.addTo(this, s.default.SCREEN_CENTER.x, 463, {
                        anchor: .5,
                        scale: .9,
                        alpha: 0
                    }),
                    new Promise(function(e) {
                        aoba.Tween.new(a._text).to({
                            alpha: 1,
                            scaleX: 1,
                            scaleY: 1
                        }, 165).to({
                            scaleX: 1.1,
                            scaleY: 1.1
                        }, 1980).call(function() {
                            aoba.Tween.new(a).to({
                                alpha: 0
                            }, 330).call(function() {
                                r.forEach(function(e) {
                                    e.mask = null,
                                    e.remove()
                                }),
                                e()
                            })
                        })
                    }
                    )
                }
            }]),
            t
        }(aoba.Container);
        t.default = u
    },
    1575: function(e, t, a) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function r(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function i(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function o(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = function() {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, a, n) {
                return a && e(t.prototype, a),
                n && e(t, n),
                t
            }
        }()
          , s = a(1576)
          , c = n(s)
          , u = a(1404)
          , f = n(u)
          , d = a(1021)
          , p = function(e) {
            function t() {
                r(this, t);
                var e = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, c.default));
                return e._silhouette = aoba.Sprite.new(),
                e.description.style.wordWrap = !0,
                e.description.style.wordWrapWidth = 470,
                e.description.style.breakWords = !0,
                e
            }
            return o(t, e),
            l(t, [{
                key: "play",
                value: function(e, t, a) {
                    var n = this;
                    return this.showSkillInfo(e),
                    this.fadeInNameBase(),
                    this.slideInIdols(t, a),
                    this.slideInBase().then(function() {
                        return n.destroy({
                            children: !0
                        })
                    })
                }
            }, {
                key: "slideInBase",
                value: function() {
                    var e = this;
                    return new Promise(function(t) {
                        aoba.Tween.fromData(e.base, d.rivalSkillCutIn.slideInBase).on("fadeOut", function() {
                            return e.fadeOut().then(t)
                        })
                    }
                    )
                }
            }, {
                key: "slideInIdols",
                value: function(e, t) {
                    var a = this._silhouette;
                    a.texture = aoba.Texture.fromImage(e.getImagePath("active_skill_silhouette")),
                    a.tint = t,
                    a.addTo(this.standIdolsLayer, a.width, 0),
                    aoba.Tween.fromData(a, d.rivalSkillCutIn.slideInIdol)
                }
            }, {
                key: "showSkillInfo",
                value: function(e) {
                    this.description.text = e.comment
                }
            }]),
            t
        }(f.default);
        t.default = p
    },
    1576: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = {
            children: [{
                name: "base",
                fullName: "base",
                type: "sprite",
                key: "rival_active_skill_cutin_base.png",
                x: 60,
                y: 0
            }, {
                children: [{
                    name: "nameBase",
                    fullName: "skillInfo/nameBase",
                    type: "sprite",
                    key: "rival_skill_name_base.png",
                    x: 0,
                    y: 0
                }, {
                    name: "description",
                    fullName: "skillInfo/description",
                    anchor: {
                        x: 1,
                        y: .5
                    },
                    type: "text",
                    text: "",
                    style: {
                        fill: 8289918,
                        fontFamily: "UDKakugo_SmallPr6-B",
                        fontSize: 26
                    },
                    rotation: 0,
                    x: 626,
                    y: 115
                }],
                name: "skillInfo",
                fullName: "skillInfo",
                type: "container",
                x: 182,
                y: 440
            }],
            name: "",
            fullName: "",
            type: "container",
            x: 320,
            y: 0
        }
    },
    1577: function(e, t, a) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function r(e) {
            if (Array.isArray(e)) {
                for (var t = 0, a = Array(e.length); t < e.length; t++)
                    a[t] = e[t];
                return a
            }
            return Array.from(e)
        }
        function i(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function o(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function l(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = function() {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, a, n) {
                return a && e(t.prototype, a),
                n && e(t, n),
                t
            }
        }()
          , c = a(1578)
          , u = n(c)
          , f = a(1404)
          , d = n(f)
          , p = a(1021)
          , h = {
            SINGLE: "skill1",
            TWO: "skill2"
        }
          , y = function(e) {
            function t() {
                i(this, t);
                var e = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, u.default));
                return e.name.style.fontSize = 28,
                e
            }
            return l(t, e),
            s(t, [{
                key: "play",
                value: function(e, t, a) {
                    var n = this;
                    return this.showSkillInfo(e),
                    this.fadeInNameBase(),
                    this.slideInIdols(t, a),
                    this.slideInBase().then(function() {
                        return n
                    })
                }
            }, {
                key: "slideInBase",
                value: function() {
                    var e = this;
                    return new Promise(function(t) {
                        return aoba.Tween.fromData(e.base, p.playerSkillCutIn.slideInBase).on("fadeOut", function() {
                            return e.fadeOut().then(t)
                        })
                    }
                    )
                }
            }, {
                key: "slideInIdols",
                value: function(e, t) {
                    t ? (this._slideInIdol(t, h.TWO, 1240),
                    this._slideInIdol(e, h.TWO, 1540, 3)) : this._slideInIdol(e, h.SINGLE, 1440)
                }
            }, {
                key: "_slideInIdol",
                value: function(e, t, a, n) {
                    var i = [].concat(r(p.playerSkillCutIn.slideInIdol));
                    e.setAnimation(0, t),
                    e.addTo(this.standIdolsLayer, a, 620),
                    n && i.unshift({
                        wait: n
                    }),
                    aoba.Tween.fromData(e, i)
                }
            }, {
                key: "showSkillInfo",
                value: function(e) {
                    this.name.text = e.name
                }
            }]),
            t
        }(d.default);
        t.default = y
    },
    1578: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = {
            children: [{
                name: "base",
                fullName: "base",
                type: "sprite",
                key: "player_active_skill_cutin_base.png",
                x: 40,
                y: 0
            }, {
                children: [{
                    name: "nameBase",
                    fullName: "skillInfo/nameBase",
                    anchor: {
                        x: 1,
                        y: .5
                    },
                    type: "sprite",
                    key: "player_skill_name_base.png",
                    x: 634,
                    y: 67
                }, {
                    name: "name",
                    fullName: "skillInfo/name",
                    anchor: {
                        x: 1,
                        y: .5
                    },
                    type: "text",
                    text: "スキル名は最大20文字。右寄せ",
                    style: {
                        fill: 16729856,
                        fontFamily: "HummingStd-E",
                        fontSize: 28
                    },
                    rotation: 0,
                    x: 618,
                    y: 99
                }],
                name: "skillInfo",
                fullName: "skillInfo",
                type: "container",
                x: 163,
                y: 484
            }],
            name: "",
            fullName: "",
            type: "container",
            x: 339,
            y: 0
        }
    },
    1579: function(e, t, a) {
        "use strict";
        (function(e) {
            function n(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = a(2)
              , i = n(r)
              , o = a(9)
              , l = n(o)
              , s = a(1022)
              , c = n(s)
              , u = a(1032)
              , f = n(u)
              , d = a(93)
              , p = n(d)
              , h = i.default.SCREEN_WIDTH
              , y = i.default.SCREEN_HEIGHT
              , _ = function(t) {
                var a = aoba.Container.new()
                  , n = l.default.graphics.rect(h, y, {
                    fill: 65571
                });
                n.alpha = 0,
                n.addTo(a);
                var r = aoba.Container.new().addTo(a);
                r.alpha = 0,
                l.default.playParticle(c.default.retireAura, r, 640, 40),
                aoba.FrameTween.new(r).to({
                    alpha: .8
                }, 6).wait(35).to({
                    alpha: 0
                }, 12);
                var o = aoba.Sprite.new(t)
                  , s = new PIXI.AEDataInterceptor({
                    "001.png": {
                        image: o
                    }
                });
                return (0,
                p.default)({
                    folderPath: "concert/rival_retire",
                    interceptor: s
                }).then(function(t) {
                    a.addChild(t),
                    t.x = 495,
                    t.alpha = 0,
                    aoba.soundManager.playSE(f.default.audienceVoice),
                    aoba.soundManager.playSE(f.default.idolRetire),
                    aoba.FrameTween.new(t).wait(5).call(function() {
                        t.play()
                    }).to({
                        alpha: .6
                    }, 4).wait(22).call(function() {
                        l.default.playParticle(c.default.retireFlash, a, 720, 120);
                        var n = aoba.FrameTween.new(t);
                        e(15).times(function(e) {
                            var a = e;
                            n.call(function() {
                                for (var e = aoba.Graphics.new().beginFill(0), n = (14 - a) / 14, r = 0; r < 12; ++r)
                                    e.drawRect(i.default.SCREEN_WIDTH - 768 + 64 * r + 32 * (1 - n), 0, 64 * n, i.default.SCREEN_HEIGHT);
                                for (var o = 0; o < 12; ++o)
                                    e.drawRect(i.default.SCREEN_WIDTH - 768, 64 * o + 32 * (1 - n), i.default.SCREEN_WIDTH, 64 * n);
                                t.mask = e
                            }).wait(1)
                        })
                    }),
                    aoba.FrameTween.new(t).by({
                        y: 22
                    }, 52),
                    aoba.FrameTween.new(n).to({
                        alpha: .7
                    }, 15).wait(35).to({
                        alpha: 0
                    }, 6).call(function() {
                        o.destroy(),
                        t.stop(),
                        t.destroy(!0),
                        a.emit("end", a)
                    })
                }),
                a
            };
            t.default = _
        }
        ).call(t, a(14))
    },
    1580: function(e, t, a) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = a(1581)
          , i = n(r)
          , o = a(1582)
          , l = n(o)
          , s = a(1583)
          , c = n(s)
          , u = a(1584)
          , f = n(u)
          , d = a(1585)
          , p = n(d);
        t.default = {
            playIdolRecoverEffect: i.default,
            playJudgeDamageEffect: l.default,
            playIdolRaiseEffectOfMemoryAppeal: c.default,
            playIdolLowerEffectOfMemoryAppeal: f.default,
            playIdolReraiseEffect: p.default
        }
    },
    1581: function(e, t, a) {
        "use strict";
        (function(e) {
            function n(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = a(1022)
              , i = n(r)
              , o = a(9)
              , l = n(o)
              , s = a(1021)
              , c = function(t) {
                var a = aoba.Container.new()
                  , n = l.default.playParticle(i.default.recoverSkill.wave, a, 640, 600);
                n.once("destroyed", function() {
                    a.destroy({
                        children: !0
                    })
                });
                var r = aoba.FrameTween.new(n);
                e(2).times(function() {
                    r = r.by({
                        x: 400
                    }, 8, "easeInQuart").by({
                        x: -400
                    }, 8, "easeInQuart")
                }),
                r.call(function() {
                    n.stopAndDestroy()
                }),
                l.default.playParticle(i.default.recoverSkill.note, a, 640, 600),
                l.default.playParticle(i.default.flashLine3, a, 740, 380),
                aoba.FrameTween.createBlank().wait(1).call(function() {
                    l.default.playParticle(i.default.twinkle, a, 780, 340)
                });
                var o = aoba.Sprite.new("recover_skill_icon.png").addTo(a, 820, 480, {
                    alpha: 0,
                    anchor: .5,
                    scale: aoba.p(0, 1.2)
                });
                return aoba.FrameTween.new(o).to({
                    alpha: 1,
                    scaleX: 1.4,
                    scaleY: 1.4
                }, 3).to({
                    scaleX: 0,
                    scaleY: 1.2
                }, 3).to({
                    scaleX: 1.4,
                    scaleY: 1.4
                }, 3).call(function() {
                    var e = aoba.Sprite.new(o.texture).addTo(a, o.x, o.y, {
                        alpha: 0,
                        anchor: .5,
                        blendMode: aoba.BLEND_MODES.ADD
                    });
                    aoba.FrameTween.new(e).to({
                        alpha: 1,
                        scaleX: 1.5,
                        scaleY: 1.5
                    }, 3).to({
                        alpha: 0,
                        scaleX: 2,
                        scaleY: 2
                    }, 5),
                    aoba.FrameTween.new(e).by({
                        y: -22
                    }, 9);
                    var n = l.default.ImageLabel.new({
                        imagePrefix: "recover_number_",
                        originX: .5,
                        interval: 36,
                        scaleX: .64,
                        scaleY: .64,
                        prefix: "+"
                    });
                    n.number = t,
                    n.addTo(a, o.x, o.y),
                    aoba.Tween.fromData(n, s.idolAttackDamageText.appear).wait(15).to({
                        alpha: 0
                    }, 10).call(function() {
                        n.destroy({
                            children: !0
                        })
                    })
                }).wait(4).to({
                    alpha: 0
                }, 5),
                aoba.FrameTween.new(o).by({
                    y: -88
                }, 9).by({
                    y: -22
                }, 9),
                a
            };
            t.default = c
        }
        ).call(t, a(14))
    },
    1582: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = {
            linkSkill: {
                image: "images/ui/concert/effects/judge_damaged.png",
                width: 88,
                height: 148
            },
            memoryAppeal: {
                image: "images/ui/concert/effects/judge_damaged.png",
                width: 88,
                height: 148
            },
            normalSkill: {
                image: "images/ui/concert/effects/judge_damaged.png",
                width: 88,
                height: 148
            },
            normalAttack: {
                image: "images/ui/concert/effects/judge_damaged.png",
                width: 88,
                height: 148
            }
        }
          , r = function(e, t, a, r, i) {
            var o = t.getDamageTextPosition();
            if (e.addTo(i),
            r) {
                o.y += 30;
                var l = aoba.Sprite.new("damage_excellent.png").addToAt(i, e, o.x + 123, o.y - 48, {
                    anchor: .5,
                    scale: 0
                });
                aoba.FrameTween.new(l).to({
                    scaleX: 1,
                    scaleY: 1
                }, 8, "easeOutBack").wait(6).to({
                    alpha: 0
                }, 10).call(function() {
                    l.destroy({
                        children: !0
                    })
                })
            }
            e.hit(o).then(function() {
                return e.destroy({
                    children: !0
                })
            });
            var s = n[a]
              , c = t.getGlobalPosition();
            return aoba.FrameAnimation.new(s.image, s.width, s.height, {
                fps: 30
            }).addTo(i, c.x, c.y, {
                anchor: .5,
                scale: 2
            }).play()
        };
        t.default = r
    },
    1583: function(e, t, a) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = a(1022)
          , i = n(r)
          , o = a(9)
          , l = n(o)
          , s = a(1021)
          , c = function(e) {
            var t = aoba.Container.new();
            return [{
                data: i.default.raiseMemoryAppeal.heart1,
                option: {
                    scale: .5
                }
            }, {
                data: i.default.raiseMemoryAppeal.heart1,
                option: {
                    scale: .5
                }
            }, {
                data: i.default.raiseMemoryAppeal.heartBig,
                option: {
                    scale: .5,
                    blendMode: PIXI.BLEND_MODES.NORMAL,
                    alpha: .75
                }
            }, {
                data: i.default.raiseMemoryAppeal.heartBig,
                option: {
                    scale: .5,
                    blendMode: PIXI.BLEND_MODES.ADD,
                    alpha: .75
                }
            }].forEach(function(e) {
                l.default.playParticle(e.data, t, 725, 350, e.option)
            }),
            l.default.playParticle(i.default.flashLine3, t, 740, 380),
            aoba.FrameTween.new(t).wait(10).call(function() {
                var a = l.default.ImageLabel.new({
                    imagePrefix: "memory_skill_number_",
                    originX: .5,
                    interval: 36,
                    scaleX: .64,
                    scaleY: .64
                });
                a.number = e,
                a.addTo(t, 755, 325, {
                    scale: 1.3
                }),
                aoba.Sprite.new("memory_skill_up.png").addTo(a, a.width - 40, -a.height / 2 + 20, {
                    scale: .7
                }),
                aoba.Tween.fromData(a, s.idolAttackDamageText.appear)
            }).wait(20).to({
                alpha: 0
            }, 5),
            t
        };
        t.default = c
    },
    1584: function(e, t, a) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = a(1022)
          , i = n(r)
          , o = a(9)
          , l = n(o)
          , s = function(e) {
            var t = aoba.Container.new();
            return [{
                data: i.default.lowerMemoryAppeal.heart,
                option: {
                    scale: .3,
                    blendMode: aoba.BLEND_MODES.NORMAL,
                    alpha: .7,
                    startTime: 1e3
                },
                delay: 0,
                stopTime: 15
            }, {
                data: i.default.lowerMemoryAppeal.heart,
                option: {
                    scale: .3,
                    blendMode: aoba.BLEND_MODES.ADD,
                    alpha: .7,
                    startTime: 1e3
                },
                delay: 0,
                stopTime: 15
            }, {
                data: i.default.lowerMemoryAppeal.hajiki,
                delay: 20,
                stopTime: 10
            }].forEach(function(e) {
                aoba.FrameTween.new(t).wait(e.delay).call(function() {
                    var a = l.default.playParticle(e.data, t, 725, 350, e.option);
                    aoba.FrameTween.new(a).wait(e.stopTime).to({
                        scaleX: 0,
                        scaleY: 0
                    }, 5)
                })
            }),
            aoba.FrameTween.new(t).wait(10).call(function() {
                var a = l.default.ImageLabel.new({
                    imagePrefix: "memory_skill_number_down_",
                    originX: .5,
                    interval: 36,
                    scaleX: .64,
                    scaleY: .64
                });
                a.number = e,
                a.addTo(t, 755, 375, {
                    alpha: 0,
                    scale: 1.3
                }),
                aoba.Sprite.new("memory_skill_down.png").addTo(a, a.width - 40, -a.height / 2 + 20, {
                    scale: .7
                }),
                aoba.FrameTween.new(a).to({
                    alpha: 1
                }, 5).wait(20).to({
                    alpha: 0
                }, 10)
            }).wait(20).to({
                alpha: 0
            }, 5),
            t
        };
        t.default = s
    },
    1585: function(e, t, a) {
        "use strict";
        (function(e) {
            function n(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = a(1022)
              , i = n(r)
              , o = a(9)
              , l = n(o)
              , s = function() {
                var t = aoba.Container.new()
                  , a = l.default.playParticle(i.default.activeReraiseSkill.cutIn_feather, t, 780, 320);
                a.once("destroyed", function() {
                    t.destroy({
                        children: !0
                    })
                });
                var n = l.default.playParticle(i.default.activeReraiseSkill.cutIn_twinkle, t, 780, 440)
                  , r = aoba.FrameTween.new(a);
                return e(2).times(function() {
                    r = r.wait(16)
                }),
                r.call(function() {
                    a.stopAndDestroy(),
                    n.stopAndDestroy()
                }),
                t
            };
            t.default = s
        }
        ).call(t, a(14))
    },
    1586: function(e, t, a) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = a(1022)
          , i = n(r)
          , o = a(9)
          , l = n(o)
          , s = function(e, t, a) {
            var n = l.default.playParticle(i.default.judgeAttack.trail, a, e.x, e.y)
              , r = l.default.playParticle(i.default.judgeAttack.trailBoke, a, e.x, e.y);
            return new Promise(function(e) {
                aoba.FrameTween.new(n).to({
                    x: t.x,
                    y: t.y
                }, 8, "easeInQuad").call(e).wait(3).call(function() {
                    n.stopAndDestroy()
                }),
                aoba.FrameTween.new(r).to({
                    x: t.x,
                    y: t.y
                }, 8, "easeInQuad").wait(3).call(function() {
                    r.stopAndDestroy()
                })
            }
            )
        }
          , c = function(e, t, a) {
            var n = l.default.playParticle(i.default.idolAttack.charge, a, e.x, e.y)
              , r = l.default.playParticle(i.default.idolAttack.trail, a, e.x, e.y);
            return new Promise(function(e) {
                aoba.FrameTween.createBlank().wait(9).call(function() {
                    n.stopAndDestroy(),
                    aoba.FrameTween.new(r).to({
                        x: t.x,
                        y: t.y
                    }, 6, "easeInQuad").call(function() {
                        r.stopAndDestroy(),
                        l.default.playParticle(i.default.idolAttack.hit, a, t.x, t.y, {
                            playAndDestroy: !0
                        }),
                        e()
                    })
                })
            }
            )
        }
          , u = function(e, t, a) {
            var n = l.default.playParticle(i.default.rivalAttack.charge, a, e.x, e.y)
              , r = l.default.playParticle(i.default.rivalAttack.trail, a, e.x, e.y);
            return new Promise(function(e) {
                aoba.FrameTween.createBlank().wait(0).call(function() {
                    n.stopAndDestroy(),
                    aoba.FrameTween.new(r).to({
                        x: t.x,
                        y: t.y
                    }, 7, "easeInQuad").call(function() {
                        r.stopAndDestroy(),
                        l.default.playParticle(i.default.rivalAttack.hit, a, t.x, t.y, {
                            playAndDestroy: !0
                        }),
                        e()
                    })
                })
            }
            )
        }
          , f = function(e, t, a) {
            var n = l.default.playParticle(i.default.heart.hit, a, e.x, e.y);
            return new Promise(function(r) {
                aoba.FrameTween.createBlank().wait(9).call(function() {
                    n.stopAndDestroy();
                    var o = l.default.playParticle(i.default.heart.trail, a, e.x, e.y);
                    aoba.FrameTween.new(o).to({
                        x: t.x,
                        y: t.y
                    }, 6, "easeInQuad").call(function() {
                        o.stopAndDestroy(),
                        l.default.playParticle(i.default.heart.hit, a, t.x, t.y, {
                            playAndDestroy: !0
                        });
                        var e = aoba.Sprite.new("concert_heart.png").addTo(a, t.x, t.y, {
                            anchor: .5,
                            blendMode: aoba.BLEND_MODES.ADD,
                            alpha: .8
                        });
                        aoba.FrameTween.new(e).to({
                            scaleX: 3,
                            scaleY: 3
                        }, 6).to({
                            scaleX: 3.6,
                            scaleY: 3.6,
                            alpha: 0
                        }, 12).call(function() {
                            return e.destroy()
                        }),
                        r()
                    })
                })
            }
            )
        }
          , d = function(e, t, a) {
            var n = l.default.playParticle(i.default.star.trail, a, e.x, e.y)
              , r = l.default.playParticle(i.default.star.hit, a, e.x, e.y)
              , o = void 0;
            aoba.FrameTween.new(n).wait(3).call(function() {
                r.stopAndDestroy()
            }).to({
                x: t.x,
                y: t.y
            }, 7, "easeInQuad").call(function() {
                o = l.default.playParticle(i.default.star.hit, a, t.x, t.y)
            }).wait(3).call(function() {
                n.stopAndDestroy(),
                o.stopAndDestroy()
            });
            var s = l.default.playParticle(i.default.star.trailBoke, a, e.x, e.y);
            return new Promise(function(e) {
                aoba.FrameTween.new(s).wait(3).to({
                    x: t.x,
                    y: t.y
                }, 7, "easeInQuad").call(e).wait(3).call(function() {
                    s.stopAndDestroy()
                })
            }
            )
        };
        t.default = {
            shootIdolAttack: c,
            shootJudgeAttack: s,
            shootRivalAttack: u,
            shootRivalMemoryAppeal: f,
            shootJudgeStar: d
        }
    },
    1587: function(e, t, a) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function r(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function i(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function o(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = function() {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, a, n) {
                return a && e(t.prototype, a),
                n && e(t, n),
                t
            }
        }()
          , s = a(1405)
          , c = n(s)
          , u = a(1590)
          , f = n(u)
          , d = function(e) {
            function t() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return r(this, t),
                i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
            }
            return o(t, e),
            l(t, [{
                key: "_playScoreBonusList",
                value: function(e) {
                    var t = f.default.new(e).addTo(this, 0, 0, {
                        pivot: aoba.p(0, .5)
                    });
                    return t.slideIn(),
                    aoba.FrameTween.new(t).wait(40).call(function() {
                        t.fadeOut()
                    }).promise()
                }
            }]),
            t
        }(c.default);
        t.default = d
    },
    1588: function(e, t, a) {
        "use strict";
        function n(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function r(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function i(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = function() {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, a, n) {
                return a && e(t.prototype, a),
                n && e(t, n),
                t
            }
        }()
          , l = a(1589)
          , s = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(l)
          , c = {
            X: 18,
            Y: 60
        }
          , u = function(e) {
            function t() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                n(this, t);
                var a = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return e.forEach(function(e, t) {
                    s.default.new(e).addTo(a, c.X * t, c.Y * t)
                }),
                a
            }
            return i(t, e),
            o(t, [{
                key: "slideIn",
                value: function() {
                    this.children.reduce(function(e, t) {
                        return e.call(function() {
                            t.slideIn()
                        }).wait(3)
                    }, aoba.FrameTween.new(this)),
                    aoba.FrameTween.new(this).to({
                        scaleX: 1.06,
                        scaleY: 1.06
                    }, 46)
                }
            }, {
                key: "fadeOut",
                value: function() {
                    return Promise.all(this.children.map(function(e) {
                        return e.fadeOut()
                    }))
                }
            }]),
            t
        }(aoba.Container);
        t.default = u
    },
    1589: function(e, t, a) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function r(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function i(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function o(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = function() {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, a, n) {
                return a && e(t.prototype, a),
                n && e(t, n),
                t
            }
        }()
          , s = a(1406)
          , c = n(s)
          , u = a(197)
          , f = n(u)
          , d = function(e) {
            function t(e) {
                r(this, t);
                var a = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return a.fromData(c.default, {
                    name: {
                        text: e.name,
                        dy: 2
                    },
                    score: {
                        text: f.default.getNumberStringWithSign(e.score),
                        dy: 2
                    }
                }),
                a.alpha = 0,
                a.scale.set(1, 0),
                a
            }
            return o(t, e),
            l(t, [{
                key: "slideIn",
                value: function() {
                    aoba.FrameTween.new(this).to({
                        alpha: 1
                    }, 3),
                    aoba.FrameTween.new(this).to({
                        scaleX: 1,
                        scaleY: 1
                    }, 7, "easeInOutQuad"),
                    this.x -= 152,
                    aoba.FrameTween.new(this).by({
                        x: 152
                    }, 10, "easeOutQuart")
                }
            }, {
                key: "fadeOut",
                value: function() {
                    aoba.FrameTween.new(this).to({
                        alpha: 0
                    }, 6),
                    aoba.FrameTween.new(this).to({
                        scaleX: 1.35,
                        scaleY: 1.35
                    }, 6, "easeInQuart")
                }
            }]),
            t
        }(aoba.Container);
        t.default = d
    },
    1590: function(e, t, a) {
        "use strict";
        function n(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function r(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function i(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = function() {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, a, n) {
                return a && e(t.prototype, a),
                n && e(t, n),
                t
            }
        }()
          , l = a(1591)
          , s = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(l)
          , c = {
            X: 18,
            Y: 60
        }
          , u = function(e) {
            function t() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                n(this, t);
                var a = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return e.forEach(function(e, t) {
                    s.default.new(e).addTo(a, c.X * t, c.Y * t)
                }),
                a
            }
            return i(t, e),
            o(t, [{
                key: "slideIn",
                value: function() {
                    this.children.reduce(function(e, t) {
                        return e.call(function() {
                            t.slideIn()
                        }).wait(3)
                    }, aoba.FrameTween.new(this)),
                    aoba.FrameTween.new(this).to({
                        scaleX: 1.06,
                        scaleY: 1.06
                    }, 46)
                }
            }, {
                key: "fadeOut",
                value: function() {
                    return Promise.all(this.children.map(function(e) {
                        return e.fadeOut()
                    }))
                }
            }]),
            t
        }(aoba.Container);
        t.default = u
    },
    1591: function(e, t, a) {
        "use strict";
        function n(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function r(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function i(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = function() {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, a, n) {
                return a && e(t.prototype, a),
                n && e(t, n),
                t
            }
        }()
          , l = a(1406)
          , s = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(l)
          , c = function(e) {
            function t(e) {
                n(this, t);
                var a = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return a.fromData(s.default, {
                    name: {
                        text: e.name,
                        dy: 2,
                        dx: 269,
                        anchor: {
                            x: .5,
                            y: .5
                        }
                    },
                    score: {
                        text: ""
                    }
                }),
                a.alpha = 0,
                a.scale.set(1, 0),
                a
            }
            return i(t, e),
            o(t, [{
                key: "slideIn",
                value: function() {
                    aoba.FrameTween.new(this).to({
                        alpha: 1
                    }, 3),
                    aoba.FrameTween.new(this).to({
                        scaleX: 1,
                        scaleY: 1
                    }, 7, "easeInOutQuad"),
                    this.x -= 152,
                    aoba.FrameTween.new(this).by({
                        x: 152
                    }, 10, "easeOutQuart")
                }
            }, {
                key: "fadeOut",
                value: function() {
                    aoba.FrameTween.new(this).to({
                        alpha: 0
                    }, 6),
                    aoba.FrameTween.new(this).to({
                        scaleX: 1.35,
                        scaleY: 1.35
                    }, 6, "easeInQuart")
                }
            }]),
            t
        }(aoba.Container);
        t.default = c
    },
    1592: function(e, t, a) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function r(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function i(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function o(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = function() {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, a, n) {
                return a && e(t.prototype, a),
                n && e(t, n),
                t
            }
        }()
          , s = a(341)
          , c = n(s)
          , u = a(1022)
          , f = n(u)
          , d = function(e) {
            function t() {
                return r(this, t),
                i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return o(t, e),
            l(t, [{
                key: "play",
                value: function() {
                    var e = this
                      , t = (0,
                    c.default)(f.default.judgeAttack.trail, this, 0, 0, {
                        scale: 2
                    })
                      , a = aoba.Sprite.new("images/ui/concert/effects/beam_line.png").addTo(this, 0, 0, {
                        anchor: aoba.p(0, .5),
                        scale: aoba.p(6, -.03),
                        blendMode: aoba.BLEND_MODES.SCREEN
                    });
                    return aoba.FrameTween.new(a).to({
                        scaleX: 18,
                        scaleY: 1.2
                    }, 5).to({
                        scaleY: 2
                    }, 20).to({
                        scaleY: -.13
                    }, 7),
                    aoba.FrameTween.new(a).wait(30).call(function() {
                        aoba.FrameTween.new(t.container).to({
                            alpha: 0
                        }, 5).call(function() {
                            return t.destroy()
                        })
                    }).to({
                        alpha: 0
                    }, 3),
                    new Promise(function(t) {
                        aoba.FrameTween.new(e).wait(25).call(function() {
                            aoba.FrameAnimation.new("images/ui/concert/effects/line_effect.png", 125, 25, {
                                fps: 30
                            }).addToAt(e, 0, 0, 0, {
                                anchor: aoba.p(0, .5),
                                scale: aoba.p(6, 1.2),
                                blendMode: aoba.BLEND_MODES.ADD
                            }).on("end", function() {
                                return t(e)
                            }).play()
                        })
                    }
                    )
                }
            }]),
            t
        }(aoba.Container);
        t.default = d
    },
    1593: function(e, t, a) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function r(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function i(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function o(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = function() {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, a, n) {
                return a && e(t.prototype, a),
                n && e(t, n),
                t
            }
        }()
          , s = function e(t, a, n) {
            null === t && (t = Function.prototype);
            var r = Object.getOwnPropertyDescriptor(t, a);
            if (void 0 === r) {
                var i = Object.getPrototypeOf(t);
                return null === i ? void 0 : e(i, a, n)
            }
            if ("value"in r)
                return r.value;
            var o = r.get;
            if (void 0 !== o)
                return o.call(n)
        }
          , c = a(14)
          , u = n(c)
          , f = a(1594)
          , d = n(f)
          , p = a(1021)
          , h = a(199)
          , y = n(h)
          , _ = a(1595)
          , m = n(_)
          , g = a(1597)
          , b = n(g)
          , v = a(1598)
          , w = n(v)
          , k = a(1599)
          , S = n(k)
          , E = a(1407)
          , T = n(E)
          , O = a(1032)
          , x = n(O)
          , P = function(e) {
            function t(e) {
                r(this, t);
                var a = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this))
                  , n = aoba.Container.new()
                  , o = void 0 === e.currentScore ? 0 : e.score - e.currentScore
                  , l = n.fromData(d.default, {
                    image: {
                        key: e.judgeType + "_image_" + e.attribute + ".png"
                    },
                    interestingGauge: y.default.new("interesting_gauge.png", {
                        maxValue: e.score,
                        value: o
                    }),
                    statusEffectList: T.default.new(),
                    trend: m.default.new(e.order),
                    targetArrow: {
                        class: S.default
                    }
                });
                n.addTo(a, n.width / 2, n.height / 2, {
                    pivot: .5
                });
                var s = l.image
                  , c = l.trend
                  , u = l.interestingGauge
                  , f = l.statusEffectList
                  , p = l.targetArrow
                  , h = l.iconNotice;
                return a._attackOrderX = 80,
                a._attackOrder = aoba.Sprite.new().setPosition(a._attackOrderX, 12).setProps({
                    alpha: 0
                }),
                a._comment = b.default.new(null, e.attribute).setPosition(s.x + 104, s.y + 56).setAnchor(0, .5),
                a._bonusEffect = w.default.new("text_star_bonus.png", "text_appeal_" + e.attribute + ".png").setPosition(s.x + 172, s.y + 112).setAnchor(.5),
                a._positiveEffectRect = aoba.Graphics.new().beginFill(16777215).drawRoundedRect(s.x, s.y, s.width, s.height, 12),
                a._attackEffectRect = aoba.Graphics.new().beginFill(16711680).drawRoundedRect(s.x, s.y, s.width, s.height, 12),
                a._id = e.id,
                a._attribute = e.attribute,
                a._maxHp = e.score,
                a._attackComment = e.actionComment,
                a._usedSkillComment = e.actionComment2,
                a._reactionComment = e.reactionComment,
                a._order = e.order,
                a._skill = e.skill,
                a._main = n,
                a._image = s,
                a._trend = c,
                a._judgeType = e.judgeType,
                a._interestingGauge = u,
                a._statusEffectList = f,
                a._targetArrow = p,
                a._iconNotice = h,
                a.interactive = !0,
                a._targetArrow.remove(),
                a._iconNotice.show(),
                a.showTrend(),
                a._retainedContainers = [a._attackOrder, a._comment, a._bonusEffect, a._positiveEffectRect, a._attackEffectRect, a._targetArrow],
                a.once("added", function() {
                    o === e.score && a.hide()
                }),
                a
            }
            return o(t, e),
            l(t, [{
                key: "ezgPreDestroy",
                value: function() {
                    var e = !0
                      , a = !1
                      , n = void 0;
                    try {
                        for (var r, i = this._retainedContainers[Symbol.iterator](); !(e = (r = i.next()).done); e = !0) {
                            var o = r.value;
                            o && o.destroy({
                                children: !0
                            })
                        }
                    } catch (e) {
                        a = !0,
                        n = e
                    } finally {
                        try {
                            !e && i.return && i.return()
                        } finally {
                            if (a)
                                throw n
                        }
                    }
                    s(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "ezgPreDestroy", this).call(this)
                }
            }, {
                key: "setGaugeValue",
                value: function(e) {
                    this._interestingGauge.setValue(this._maxHp - e)
                }
            }, {
                key: "showTargetArrow",
                value: function() {
                    this._targetArrow.parent || (this._targetArrow.addTo(this),
                    this._targetArrow.playSwing())
                }
            }, {
                key: "hideTargetArrow",
                value: function() {
                    this._targetArrow.stopSwing(),
                    this._targetArrow.remove()
                }
            }, {
                key: "showTrend",
                value: function() {
                    this._trend && this._trend.show()
                }
            }, {
                key: "hideTrend",
                value: function() {
                    this._trend && this._trend.hide()
                }
            }, {
                key: "showNoticeIcon",
                value: function() {
                    this._iconNotice.show()
                }
            }, {
                key: "hideNoticeIcon",
                value: function() {
                    this._iconNotice.hide()
                }
            }, {
                key: "goAway",
                value: function() {
                    var e = this;
                    return new Promise(function(t) {
                        aoba.Tween.new(e._main).to({
                            scaleX: -1
                        }, 165).wait(99).call(function() {
                            aoba.Tween.new(e._main).by({
                                x: -100
                            }, 363, "easeInOutQuad")
                        }).to({
                            scaleX: 0,
                            scaleY: 0,
                            alpha: 0
                        }, 363).call(function() {
                            e.hide(),
                            t()
                        })
                    }
                    )
                }
            }, {
                key: "addStatusEffect",
                value: function(e) {
                    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
                      , a = aoba.Sprite.new(e.getStatusEffectIconImagePath());
                    this._statusEffectList.addIcon(a, e, t)
                }
            }, {
                key: "updateStatusEffectList",
                value: function(e) {
                    var t = this;
                    this._effects = e,
                    this._statusEffectList.deleteAllStatusEffect(),
                    e.forEach(function(e) {
                        return t.addStatusEffect(e, !1)
                    })
                }
            }, {
                key: "updateStatusEffectIcon",
                value: function() {
                    this._statusEffectList.updateStatusEffectIcon()
                }
            }, {
                key: "decreaseStatusEffectRemainTimes",
                value: function(e) {
                    this._statusEffectList.decreaseStatusEffectRemainTimes(e)
                }
            }, {
                key: "showAttackComment",
                value: function(e) {
                    var t = e ? this._usedSkillComment : this._attackComment;
                    return this._showComment(b.default.TYPES.ATTACK, t)
                }
            }, {
                key: "showBonusComment",
                value: function() {
                    return this._showComment(b.default.TYPES.BONUS, this._reactionComment)
                }
            }, {
                key: "_showComment",
                value: function(e, t) {
                    return this._comment.addTo(this._main),
                    this._comment.play(e, t)
                }
            }, {
                key: "showBonusEffect",
                value: function(e) {
                    return this._bonusEffect.addContent(e, this._main),
                    this._bonusEffect.addTo(this._main),
                    this._bonusEffect.play()
                }
            }, {
                key: "giveBonus",
                value: function() {
                    var e = this;
                    aoba.soundManager.playSE(x.default.giveBonus1);
                    var t = aoba.soundManager.playSE(x.default.giveBonus2, {
                        loop: !0
                    });
                    this._positiveEffectRect.addTo(this._main);
                    var a = aoba.Tween.new(this._positiveEffectRect);
                    return (0,
                    u.default)(3).times(function() {
                        a.call(function() {
                            e._positiveEffectRect.alpha = .43
                        }).to({
                            alpha: 0
                        }, 462)
                    }),
                    a.call(function() {
                        t && t.stop(),
                        e._positiveEffectRect.remove()
                    }).promise()
                }
            }, {
                key: "setAsTarget",
                value: function() {
                    this._targetArrow.setAsTarget();
                    var e = aoba.Texture.fromImage("judge_target_frame.png")
                      , t = this._image.x + this._image.width / 2
                      , a = this._image.y + this._image.height / 2;
                    this._targetFrame = aoba.Sprite.new(e).addToAt(this, this._targetArrow, t, a, {
                        anchor: .5
                    });
                    var n = aoba.Sprite.new(e).addToAt(this, this._targetArrow, t, a, {
                        anchor: .5
                    });
                    aoba.Tween.fromData(n, p.judge.targetFrame).call(function() {
                        return n.destroy()
                    })
                }
            }, {
                key: "hideTargetFrame",
                value: function() {
                    this._targetFrame && aoba.Tween.fromData(this._targetFrame, p.judge.hideAttackOrder),
                    this._targetArrow.disappear(),
                    this._iconNotice.hide()
                }
            }, {
                key: "showAttackOrder",
                value: function(e) {
                    return this._attackOrder.texture = aoba.Texture.fromImage("attack_order_" + e + ".png"),
                    this._attackOrder.addTo(this),
                    aoba.Tween.fromData(this._attackOrder, p.judge.showAttackOrder).promise()
                }
            }, {
                key: "hideAttackOrder",
                value: function() {
                    var e = this;
                    return aoba.Tween.fromData(this._attackOrder, p.judge.hideAttackOrder).call(function() {
                        e._attackOrder.remove(),
                        e._attackOrder.x = e._attackOrderX
                    }).promise()
                }
            }, {
                key: "act",
                value: function() {
                    var e = this;
                    this._attackEffectRect.addTo(this._main);
                    var t = aoba.FrameTween.new(this._attackEffectRect);
                    return (0,
                    u.default)(2).times(function() {
                        t.call(function() {
                            e._attackEffectRect.alpha = .43
                        }).to({
                            alpha: 0
                        }, 12)
                    }),
                    t.call(function() {
                        return e._attackEffectRect.remove()
                    }).promise()
                }
            }, {
                key: "receiveDamage",
                value: function(e, t) {
                    var a = this;
                    if (!this._playingSE) {
                        var n = t ? x.default.idolSpecialAttack : x.default.idolNormalAttack;
                        aoba.soundManager.playSE(n),
                        this._playingSE = !0
                    }
                    this._positiveEffectRect.addTo(this._main),
                    this._positiveEffectRect.alpha = .43,
                    aoba.FrameTween.new(this._positiveEffectRect).to({
                        alpha: 0
                    }, 10).call(function() {
                        a._playingSE = !1,
                        a._positiveEffectRect.remove()
                    }),
                    this._interestingGauge.increase(e)
                }
            }, {
                key: "getDamageTextPosition",
                value: function() {
                    var e = this.getGlobalPosition();
                    return e.x += 54,
                    e.y += 5,
                    e
                }
            }, {
                key: "id",
                get: function() {
                    return this._id
                }
            }, {
                key: "attribute",
                get: function() {
                    return this._attribute
                }
            }, {
                key: "judgeType",
                get: function() {
                    return this._judgeType
                }
            }, {
                key: "maxHp",
                get: function() {
                    return this._maxHp
                }
            }, {
                key: "hp",
                get: function() {
                    return this._interestingGauge.maxValue - this._interestingGauge.value
                }
            }, {
                key: "completed",
                get: function() {
                    return 1 === this._interestingGauge.rate
                }
            }, {
                key: "trendOrder",
                get: function() {
                    return this._order
                }
            }, {
                key: "skill",
                get: function() {
                    return this._skill
                }
            }, {
                key: "statusEffects",
                get: function() {
                    return this._effects
                }
            }]),
            t
        }(aoba.Container);
        t.default = P
    },
    1594: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = {
            children: [{
                name: "image",
                fullName: "image",
                type: "sprite",
                key: "judge_image_vocal.png",
                x: 9,
                y: 16
            }, {
                name: "interestingGaugeBase",
                fullName: "interestingGaugeBase",
                type: "sprite",
                key: "interesting_gauge_base.png",
                x: 18,
                y: 129
            }, {
                name: "interestingGauge",
                fullName: "interestingGauge",
                type: "sprite",
                key: "interesting_gauge.png",
                x: 18,
                y: 129
            }, {
                name: "statusEffectList",
                fullName: "statusEffectList",
                type: "container",
                x: 20,
                y: 104
            }, {
                name: "targetArrow",
                fullName: "targetArrow",
                anchor: {
                    x: .5,
                    y: .5
                },
                type: "sprite",
                key: "judge_target_arrow.png",
                x: 156,
                y: 84
            }, {
                name: "trend",
                fullName: "trend",
                type: "container",
                x: 0,
                y: 0
            }, {
                name: "iconNotice",
                fullName: "iconNotice",
                anchor: {
                    x: .5,
                    y: .5
                },
                type: "sprite",
                key: "icon_notice_white.png",
                x: 103,
                y: 38
            }],
            name: "",
            fullName: "",
            type: "container",
            x: 0,
            y: 61
        }
    },
    1595: function(e, t, a) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function r(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function i(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function o(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = a(4)
          , s = n(l)
          , c = a(1596)
          , u = n(c)
          , f = 3
          , d = {
            1: {
                fill: 16640578,
                value: 2
            },
            2: {
                fill: 15130863,
                value: 1.5
            },
            3: {}
        }
          , p = function(e) {
            function t(e) {
                r(this, t);
                var a = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this))
                  , n = {
                    order: {
                        key: e ? "trend_order_" + e + ".png" : null
                    }
                }
                  , o = d[e];
                e && e !== f ? (n.bonusBase = {
                    key: "trend_bonus_base_" + e + ".png"
                },
                n.bonusValue = {
                    text: s.default.t("judgeTrend.bonusValue", {
                        value: o.value
                    }),
                    dx: 2
                }) : (n.bonusBase = null,
                n.bonusValue = null);
                var l = a.fromData(u.default, n)
                  , c = l.bonusValue;
                return c && (c.style.fill = o.fill),
                a
            }
            return o(t, e),
            t
        }(aoba.Container);
        t.default = p
    },
    1596: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = {
            children: [{
                name: "order",
                fullName: "order",
                type: "sprite",
                key: null,
                x: 1,
                y: 0
            }, {
                name: "bonusBase",
                fullName: "bonusBase",
                type: "graphics",
                fill: 0,
                alpha: 1,
                width: 60,
                height: 18,
                shape: "roundedRect",
                round: 9,
                x: 0,
                y: 40
            }, {
                name: "bonusValue",
                fullName: "bonusValue",
                anchor: {
                    x: .5,
                    y: 0
                },
                type: "text",
                text: "★2倍",
                style: {
                    fill: 16771328,
                    fontFamily: "UDKakugo_SmallPr6-B",
                    fontSize: 14
                },
                rotation: 0,
                x: 28,
                y: 41
            }],
            name: "",
            fullName: "",
            type: "container",
            x: 0,
            y: 61
        }
    },
    1597: function(e, t, a) {
        "use strict";
        function n(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function r(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function i(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = function() {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, a, n) {
                return a && e(t.prototype, a),
                n && e(t, n),
                t
            }
        }()
          , l = {
            fill: 16777215,
            fontSize: 16,
            fontFamily: "UDKakugo_SmallPr6-B",
            wordWrap: !0,
            wordWrapWidth: 140,
            breakWords: !0
        }
          , s = {
            ATTACK: "attack",
            BONUS: "bonus"
        }
          , c = function(e) {
            function t(e, a) {
                n(this, t);
                var i = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return i._attribute = a,
                i._commentText = aoba.Text.new("", l).addTo(i, 40, -12),
                i.scale.set(0),
                i
            }
            return i(t, e),
            o(t, [{
                key: "play",
                value: function(e, t) {
                    return this.texture = aoba.Texture.fromImage("judge_comment_" + e + "_" + this._attribute + ".png"),
                    this._commentText.text = t,
                    aoba.FrameTween.new(this).to({
                        scaleX: .95,
                        scaleY: .95
                    }, 4).to({
                        scaleX: 1,
                        scaleY: 1
                    }, 31).to({
                        alpha: 0
                    }, 7).call(this._reset, this).promise()
                }
            }, {
                key: "_reset",
                value: function() {
                    this.remove(),
                    this.scale.set(0),
                    this.alpha = 1
                }
            }], [{
                key: "TYPES",
                get: function() {
                    return s
                }
            }]),
            t
        }(aoba.Sprite);
        t.default = c
    },
    1598: function(e, t, a) {
        "use strict";
        function n(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function r(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function i(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = function() {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, a, n) {
                return a && e(t.prototype, a),
                n && e(t, n),
                t
            }
        }()
          , l = {
            fontSize: 28,
            fontFamily: "HummingStd-E",
            fill: 16777215,
            strokeThickness: 8
        }
          , s = {
            APPEAL_BONUS: "appealBonus",
            TOP: "top",
            FINISH: "finish",
            OVER: "over"
        }
          , c = function(e) {
            function t(e, a) {
                n(this, t);
                var i = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return i._normaltexture = i.texture,
                i._specialTexture = aoba.Texture.fromImage(a),
                i
            }
            return i(t, e),
            o(t, [{
                key: "play",
                value: function() {
                    return this.scale.set(3.5),
                    aoba.FrameTween.new(this).to({
                        scaleX: 1,
                        scaleY: 1
                    }, 5, "easeInOutQuad"),
                    aoba.FrameTween.new(this).to({
                        alpha: 1
                    }, 6).wait(24).to({
                        alpha: 0
                    }, 5).call(this._reset, this).promise()
                }
            }, {
                key: "addContent",
                value: function(e, t) {
                    if (e.category === s.APPEAL_BONUS)
                        this.texture = this._normaltexture,
                        this.x = t.x + t.width + this.width / 2 - 48,
                        aoba.Sprite.new("concert_star_icon.png").addTo(this, this.width / 2 + 14, 4, {
                            anchor: .5,
                            scale: 1.2
                        }),
                        aoba.Text.new("×" + e.starNum, Object.assign({
                            stroke: 13643326
                        }, l)).addTo(this, (this.width + 108) / 2, 4, {
                            anchor: .5
                        });
                    else {
                        this.texture = this._specialTexture;
                        var a = aoba.Sprite.new("text_" + e.category + "_appeal.png");
                        a.addTo(this, -(this.width + a.width) / 2 + 12, -4, {
                            anchor: aoba.p(.5, .5)
                        }),
                        this.x = t.x + t.width + (this.width + a.width) / 2,
                        aoba.Sprite.new("concert_star_icon.png").addTo(this, this.width / 2 + 14, 0, {
                            anchor: .5,
                            scale: 1.2
                        }),
                        aoba.Text.new("×" + e.starNum, Object.assign({
                            stroke: 13643326
                        }, l)).addTo(this, (this.width + 108) / 2, 0, {
                            anchor: .5
                        })
                    }
                }
            }, {
                key: "_reset",
                value: function() {
                    this.remove(),
                    this.removeChildren(),
                    this.alpha = 1
                }
            }]),
            t
        }(aoba.Sprite);
        t.default = c
    },
    1599: function(e, t, a) {
        "use strict";
        function n(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function r(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function i(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = function() {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, a, n) {
                return a && e(t.prototype, a),
                n && e(t, n),
                t
            }
        }()
          , l = a(1021)
          , s = function(e) {
            function t(e) {
                n(this, t);
                var a = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return a.on("added", a._storeDefaultPosition, a),
                a
            }
            return i(t, e),
            o(t, [{
                key: "_storeDefaultPosition",
                value: function() {
                    this._defaultX = this.x,
                    this._selectedX = this.x - 10
                }
            }, {
                key: "playSwing",
                value: function() {
                    this._swingTween = aoba.Tween.fromData(this, l.judge.moveArrow).loop()
                }
            }, {
                key: "stopSwing",
                value: function() {
                    this._swingTween && this._swingTween.remove(),
                    this.x = this._defaultX
                }
            }, {
                key: "setAsTarget",
                value: function() {
                    this.scale.set(1.1),
                    this._swingTween && this._swingTween.remove(),
                    this.x = this._selectedX
                }
            }, {
                key: "disappear",
                value: function() {
                    return aoba.Tween.fromData(this, l.judge.hideAttackOrder).call(this._reset, this).promise()
                }
            }, {
                key: "_reset",
                value: function() {
                    this.alpha = 1,
                    this.scale.set(1),
                    this.x = this._defaultX,
                    this.remove()
                }
            }]),
            t
        }(aoba.Sprite);
        t.default = s
    },
    1600: function(e, t, a) {
        "use strict";
        function n(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function r(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function i(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = function() {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, a, n) {
                return a && e(t.prototype, a),
                n && e(t, n),
                t
            }
        }()
          , l = a(1021)
          , s = function(e) {
            function t() {
                n(this, t);
                var e = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return e._selectedJudge = null,
                e._isArrowVisible = !1,
                e
            }
            return i(t, e),
            o(t, [{
                key: "addJudge",
                value: function(e) {
                    var t = this;
                    e.pivot.set(e.width / 2, e.height / 2);
                    var a = this.children.length;
                    e.addTo(this, e.width / 2, e.height / 2 + 148 * a),
                    e.on("tap", function() {
                        return t.emit("select", e)
                    })
                }
            }, {
                key: "setTargetJudge",
                value: function(e) {
                    var t = !0
                      , a = !1
                      , n = void 0;
                    try {
                        for (var r, i = this.children[Symbol.iterator](); !(t = (r = i.next()).done); t = !0) {
                            var o = r.value;
                            o.hideTrend(),
                            o !== e && o.hideTargetArrow()
                        }
                    } catch (e) {
                        a = !0,
                        n = e
                    } finally {
                        try {
                            !t && i.return && i.return()
                        } finally {
                            if (a)
                                throw n
                        }
                    }
                    e.setAsTarget(),
                    this._selectedJudge = e
                }
            }, {
                key: "goAwayIfCompleted",
                value: function() {
                    this.children.forEach(function(e) {
                        e.completed && e.goAway()
                    })
                }
            }, {
                key: "showTargetArrows",
                value: function() {
                    this._isArrowVisible = !0,
                    this.children.forEach(function(e) {
                        return e.showTargetArrow()
                    })
                }
            }, {
                key: "hideTargetArrows",
                value: function() {
                    this._isArrowVisible = !1,
                    this.children.forEach(function(e) {
                        return e.hideTargetArrow()
                    })
                }
            }, {
                key: "showTrends",
                value: function() {
                    this.children.forEach(function(e) {
                        return e.showTrend()
                    })
                }
            }, {
                key: "showNoticeIcons",
                value: function() {
                    this.children.forEach(function(e) {
                        return e.showNoticeIcon()
                    })
                }
            }, {
                key: "hideNoticeIcons",
                value: function() {
                    this.children.forEach(function(e) {
                        return e.hideNoticeIcon()
                    })
                }
            }, {
                key: "hideAttackOrders",
                value: function() {
                    this.children.forEach(function(e) {
                        return e.hideAttackOrder()
                    })
                }
            }, {
                key: "hideTargetFrame",
                value: function() {
                    this.children.forEach(function(e) {
                        return e.hideTargetFrame()
                    })
                }
            }, {
                key: "slideIn",
                value: function() {
                    return aoba.Tween.fromData(this, l.judgeList.slideIn).promise()
                }
            }, {
                key: "slideDown",
                value: function() {
                    return aoba.Tween.fromData(this, l.judgeList.slideDown).promise()
                }
            }, {
                key: "slideUp",
                value: function() {
                    return aoba.Tween.fromData(this, l.judgeList.slideUp).promise()
                }
            }, {
                key: "findById",
                value: function(e) {
                    return this.children.find(function(t) {
                        return t.id === e
                    })
                }
            }, {
                key: "selectedJudge",
                get: function() {
                    return this._selectedJudge
                }
            }, {
                key: "completed",
                get: function() {
                    return !this.children.some(function(e) {
                        return !e.completed
                    })
                }
            }, {
                key: "isArrowVisible",
                get: function() {
                    return this._isArrowVisible
                }
            }]),
            t
        }(aoba.Container);
        t.default = s
    },
    1601: function(e, t, a) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function r(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function i(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function o(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        function l(e) {
            var t = aoba.Container.new()
              , a = t.fromData(m.default, {
                popStretchInnerBase534x320: b.default.new("pop_stretch_inner_base.png", {
                    left: 10,
                    top: 10,
                    right: 10,
                    bottom: 10,
                    width: 534,
                    height: 320
                }),
                "status/dotLine438": x.default.create({
                    width: 438,
                    type: x.default.types.DOT_BLACK
                }),
                "status/trendOrder": {
                    key: e.trendOrder ? "trend_order_" + e.trendOrder + ".png" : null
                },
                "status/interestingScore": {
                    text: c.default.numberFormat(e.maxHp - e.hp) + " / " + c.default.numberFormat(e.maxHp)
                },
                "status/interestingGauge": T.default.new("interesting_gauge.png", {
                    maxValue: e.maxHp,
                    value: e.maxHp - e.hp
                }),
                "status/interestingTitleBase": {
                    fill: 10260385
                },
                "status/judgeSkillComment": {
                    text: e.skill.comment
                },
                "status/judgeIcon": {
                    key: e.judgeType + "_icon_" + e.attribute + ".png"
                }
            })
              , n = a.popStretchInnerBase534x320;
            if (e.statusEffects && 0 !== e.statusEffects.length) {
                a.list.x = n.x + 2,
                a.list.y = n.y + 2;
                var r = aoba.Container.new();
                e.statusEffects.forEach(function(e, t) {
                    I.default.new(e, t % 2 == 0 ? A.EVEN : A.ODD).addTo(r, 0, t * M)
                });
                var i = f.default.commonUiHelper.createScrollBarBase({
                    width: 8,
                    height: 300
                });
                w.default.new({
                    width: n.width - 4,
                    height: n.height - 4,
                    container: r,
                    scrollBar: S.default.new({
                        width: 14
                    }),
                    scrollBarBase: i,
                    round: 10
                }).addTo(a.list, 0, 0),
                i.addTo(a.scrollBar, 0, 0)
            } else
                aoba.Text.new(p.default.t("concert.statusEffect.noStatusEffectMessage"), {
                    fill: 6378341,
                    fontFamily: "HummingStd-E",
                    fontSize: 28,
                    align: "center"
                }).addTo(n, n.width / 2, n.height / 2, {
                    anchor: .5
                });
            return t
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = a(22)
          , c = n(s)
          , u = a(9)
          , f = n(u)
          , d = a(4)
          , p = n(d)
          , h = a(15)
          , y = n(h)
          , _ = a(1602)
          , m = n(_)
          , g = a(60)
          , b = n(g)
          , v = a(90)
          , w = n(v)
          , k = a(91)
          , S = n(k)
          , E = a(199)
          , T = n(E)
          , O = a(194)
          , x = n(O)
          , P = a(1603)
          , I = n(P)
          , M = 100
          , A = {
            EVEN: 16777215,
            ODD: 16053236
        }
          , j = function(e) {
            function t(e) {
                r(this, t);
                var a = l(e);
                return i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, {
                    title: p.default.t("concert.judgeDetailDialog.titles." + e.judgeType, {
                        attribute: c.default.capitalize(e.attribute)
                    }),
                    type: "close",
                    width: 573,
                    height: 615,
                    marginTop: 0,
                    container: a
                }))
            }
            return o(t, e),
            t
        }(y.default);
        t.default = j
    },
    1602: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = {
            children: [{
                name: "popStretchInnerBase534x320",
                fullName: "popStretchInnerBase534x320",
                type: "container",
                x: -268,
                y: 102
            }, {
                children: [{
                    name: "judgeIcon",
                    fullName: "status/judgeIcon",
                    type: "sprite",
                    key: null,
                    x: 7,
                    y: 8
                }, {
                    name: "judgeSkillComment",
                    fullName: "status/judgeSkillComment",
                    anchor: {
                        x: 0,
                        y: 0
                    },
                    type: "text",
                    text: "１２３４５６７８９０１２３４５６７８９０１２３４５６７\r１２３４５６７８９０１２３４５６７８９０１２３４５６７",
                    style: {
                        fill: 6378341,
                        fontFamily: "UDKakugo_SmallPr6-B",
                        fontSize: 16,
                        wordWrap: !0,
                        wordWrapWidth: 421,
                        breakWords: !0
                    },
                    rotation: 0,
                    x: 106,
                    y: 51
                }, {
                    name: "interestingTitleBase",
                    fullName: "status/interestingTitleBase",
                    type: "graphics",
                    fill: 0,
                    alpha: 1,
                    width: 110,
                    height: 24,
                    shape: "roundedRect",
                    round: 12,
                    x: 99,
                    y: 9
                }, {
                    name: "interestingTitle",
                    fullName: "status/interestingTitle",
                    anchor: {
                        x: .5,
                        y: .5
                    },
                    type: "text",
                    text: "必要アピール",
                    style: {
                        fill: 16777215,
                        fontFamily: "UDKakugo_SmallPr6-B",
                        fontSize: 16
                    },
                    rotation: 0,
                    x: 153,
                    y: 21
                }, {
                    name: "interestingGaugeBase",
                    fullName: "status/interestingGaugeBase",
                    type: "sprite",
                    key: "interesting_gauge_base.png",
                    x: 217,
                    y: 13
                }, {
                    name: "interestingGauge",
                    fullName: "status/interestingGauge",
                    type: "sprite",
                    key: "interesting_gauge.png",
                    x: 217,
                    y: 13
                }, {
                    name: "interestingScore",
                    fullName: "status/interestingScore",
                    type: "text",
                    text: "9500,000",
                    style: {
                        fill: 6378341,
                        fontFamily: "UDKakugo_SmallPr6-B",
                        fontSize: 18
                    },
                    anchor: {
                        x: 0,
                        y: .5
                    },
                    rotation: 0,
                    x: 325,
                    y: 22
                }, {
                    name: "trendOrder",
                    fullName: "status/trendOrder",
                    type: "sprite",
                    key: null,
                    x: 0,
                    y: 0
                }, {
                    name: "dotLine438",
                    fullName: "status/dotLine438",
                    type: "container",
                    x: 98,
                    y: 40
                }],
                name: "status",
                fullName: "status",
                type: "container",
                x: -271,
                y: 0
            }, {
                children: [{
                    name: "judgeStatusEffectDetail",
                    fullName: "list/judgeStatusEffectDetail",
                    type: "container",
                    x: 0,
                    y: 0
                }],
                name: "list",
                fullName: "list",
                type: "container",
                x: -265,
                y: 106
            }, {
                name: "scrollBar",
                fullName: "scrollBar",
                type: "container",
                x: 246,
                y: 112
            }],
            name: "",
            fullName: "",
            pivot: {
                x: .5,
                y: 0
            },
            type: "container",
            x: 567,
            y: 84
        }
    },
    1603: function(e, t, a) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function r(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function i(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function o(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = a(1604)
          , s = n(l)
          , c = a(194)
          , u = n(c)
          , f = a(4)
          , d = n(f)
          , p = a(143)
          , h = n(p)
          , y = 24
          , _ = function(e) {
            function t(e, a) {
                r(this, t);
                var n = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this))
                  , o = null;
                o = h.default.NUMBER_OF_TIMES_LIMITED_MASTER_EFFECT_TYPES.includes(e.type) ? d.default.t("concert.statusEffect.remainTimes", {
                    remainTimes: e.remainTimes
                }) : d.default.t("concert.statusEffect.leftTurn", {
                    leftTurn: e.leftTurn - 1
                });
                var l = n.fromData(s.default, {
                    base: {
                        fill: a
                    },
                    comment: {
                        text: e.data.effectDescription
                    },
                    name: {
                        text: e.data.effectName
                    },
                    turn: {
                        text: o
                    },
                    tabLine: u.default.create({
                        width: 462,
                        type: u.default.types.DOT_BLACK
                    }),
                    icon: {
                        key: e.getStatusEffectIconImagePath()
                    }
                })
                  , c = l.comment
                  , f = l.icon;
                return c.style.wordWrap = !0,
                c.style.wordWrapWidth = 480,
                c.style.breakWords = !0,
                f.scale = aoba.p(y / f.height),
                n
            }
            return o(t, e),
            t
        }(aoba.Container);
        t.default = _
    },
    1604: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = {
            children: [{
                name: "base",
                fullName: "base",
                type: "graphics",
                fill: 0,
                alpha: 1,
                width: 535,
                height: 100,
                shape: "rect",
                x: 0,
                y: 0
            }, {
                name: "comment",
                fullName: "comment",
                anchor: {
                    x: 0,
                    y: 0
                },
                type: "text",
                text: "１２３４５６７８９０１２３４５６７８９０１２３４５６７\r１２３４５６７８９０１２３４５６７８９０１２３４５６７",
                style: {
                    fill: 6378341,
                    fontFamily: "UDKakugo_SmallPr6-B",
                    fontSize: 16,
                    wordWrap: !0,
                    wordWrapWidth: 427,
                    breakWords: !0
                },
                rotation: 0,
                x: 21,
                y: 54
            }, {
                name: "name",
                fullName: "name",
                type: "text",
                text: "１２３４５６７８９０１２３４５",
                style: {
                    fill: 6378341,
                    fontFamily: "UDKakugo_SmallPr6-B",
                    fontSize: 18
                },
                anchor: {
                    x: 0,
                    y: .5
                },
                rotation: 0,
                x: 53,
                y: 20
            }, {
                name: "turn",
                fullName: "turn",
                anchor: {
                    x: 1,
                    y: .5
                },
                type: "text",
                text: "残り5ターン",
                style: {
                    fill: 43007,
                    fontFamily: "UDKakugo_SmallPr6-B",
                    fontSize: 18
                },
                rotation: 0,
                x: 486,
                y: 20
            }, {
                name: "tabLine",
                fullName: "tabLine",
                type: "container",
                x: 21,
                y: 42
            }, {
                name: "icon",
                fullName: "icon",
                anchor: {
                    x: .5,
                    y: .5
                },
                type: "sprite",
                key: "icon.png",
                x: 26,
                y: 21
            }],
            name: "",
            fullName: "",
            type: "container",
            x: 302,
            y: 190
        }
    },
    1605: function(e, t, a) {
        "use strict";
        function n(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = function() {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, a, n) {
                return a && e(t.prototype, a),
                n && e(t, n),
                t
            }
        }()
          , i = a(203)
          , o = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(i)
          , l = function() {
            function e() {
                n(this, e),
                this.start()
            }
            return r(e, [{
                key: "start",
                value: function() {}
            }, {
                key: "stop",
                value: function() {}
            }, {
                key: "pause",
                value: function() {}
            }, {
                key: "resume",
                value: function() {}
            }]),
            e
        }()
          , s = function() {
            function e(t) {
                n(this, e),
                this._sound = t
            }
            return r(e, null, [{
                key: "createEmpty",
                value: function() {
                    return new l
                }
            }]),
            r(e, [{
                key: "start",
                value: function() {
                    this._sound.volume = o.default.getVolume(aoba.soundManager.SOUND_GROUPS.BGM),
                    this._sound.resume()
                }
            }, {
                key: "stop",
                value: function() {
                    aoba.Tween.new(this._sound).to({
                        volume: 0
                    }, 1600)
                }
            }, {
                key: "pause",
                value: function() {
                    this._sound.pause()
                }
            }, {
                key: "resume",
                value: function() {
                    var e = this._sound
                      , t = e._currentTime
                      , a = e._loopEnd;
                    t >= a && (this._sound._currentTime = t % a),
                    this._sound.resume()
                }
            }]),
            e
        }();
        t.default = s
    },
    1606: function(e, t, a) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function r(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function i(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function o(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = function() {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, a, n) {
                return a && e(t.prototype, a),
                n && e(t, n),
                t
            }
        }()
          , s = a(1409)
          , c = n(s)
          , u = a(1032)
          , f = n(u)
          , d = a(9)
          , p = n(d)
          , h = a(1022)
          , y = n(h)
          , _ = 1e3
          , m = function(e) {
            function t(e) {
                var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                r(this, t);
                var n = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n._maxValue = a.maxValue || _,
                n._value = a.value || 0,
                n._beforeValue = n._value,
                n._animSpeed = .005,
                n.mask = aoba.Graphics.new().beginFill(0).moveTo(0, 0).arc(0, 0, 0, 0, 0).closePath().addTo(n),
                n._updateMaskWithAngle(2 * Math.PI * n.valueRate),
                n
            }
            return o(t, e),
            l(t, [{
                key: "setValue",
                value: function(e) {
                    this._beforeValue = this._value,
                    this._value = Math.max(Math.min(e, this._maxValue), 0),
                    this._updateMask()
                }
            }, {
                key: "_updateMask",
                value: function() {
                    var e = this
                      , t = 2 * Math.PI * this.beforeValueRate
                      , a = 2 * Math.PI * this.valueRate
                      , n = a > t;
                    this.update = function(r) {
                        t = n ? Math.min(t + r * e._animSpeed, a) : Math.max(t - r * e._animSpeed, a),
                        e._updateMaskWithAngle(t),
                        t === a && (delete e.update,
                        e.emit("endUpdate"))
                    }
                }
            }, {
                key: "_updateMaskWithAngle",
                value: function(e) {
                    var t = -90 * aoba.DEG_TO_RAD;
                    this.mask.clear().beginFill(0).moveTo(0, 0).arc(0, 0, this.radius, t, e + t).closePath()
                }
            }, {
                key: "radius",
                get: function() {
                    return this.width / 2
                }
            }, {
                key: "valueRate",
                get: function() {
                    return this._value / this._maxValue
                }
            }, {
                key: "beforeValueRate",
                get: function() {
                    return this._beforeValue / this._maxValue
                }
            }, {
                key: "isFull",
                get: function() {
                    return this._value === this._maxValue
                }
            }]),
            t
        }(aoba.Sprite)
          , g = function(e) {
            function t(e) {
                r(this, t);
                var a = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this))
                  , n = a.fromData(c.default, {
                    gauge: m.new("memory_skill_gauge.png", {
                        value: e
                    })
                })
                  , o = n.gauge;
                return a._gauge = o,
                a
            }
            return o(t, e),
            l(t, [{
                key: "increaseTo",
                value: function(e) {
                    var t = this;
                    return this._particleSystem && (this._particleSystem.destroy({
                        children: !0
                    }),
                    this._particleSystem = null),
                    aoba.soundManager.playSE(f.default.increaseMemory),
                    this._particleSystem = p.default.playParticle(y.default.memoryAppealGauge.heart1, this, 0, 0),
                    this._gauge.setValue(e),
                    aoba.FrameTween.new(this).to({
                        scaleX: 1.16,
                        scaleY: 1.16
                    }, 6, "easeInOutQuad"),
                    new Promise(function(e) {
                        t._gauge.once("endUpdate", function() {
                            aoba.FrameTween.new(t._particleSystem.container).wait(6).to({
                                alpha: 0
                            }, 6, "easeInOutQuad").call(function() {
                                t._particleSystem && (t._particleSystem.destroy({
                                    children: !0
                                }),
                                t._particleSystem = null)
                            }),
                            t._gauge.isFull ? (aoba.FrameTween.new(t).to({
                                scaleX: 1.5,
                                scaleY: 1.5
                            }, 3, "easeInOutQuad").wait(7).to({
                                scaleX: 1,
                                scaleY: 1
                            }, 9, "easeInOutQuad").wait(3).call(e),
                            t.emit("gaugeFull")) : (aoba.FrameTween.new(t).wait(6).to({
                                scaleX: 1,
                                scaleY: 1
                            }, 6, "easeInOutQuad").call(e),
                            t.emit("gaugeNotFull"))
                        })
                    }
                    )
                }
            }, {
                key: "consume",
                value: function() {
                    return this._gauge.setValue(0)
                }
            }, {
                key: "gauge",
                get: function() {
                    return this._gauge
                }
            }]),
            t
        }(aoba.Container);
        t.default = g
    },
    1607: function(e, t, a) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function r(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function i(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function o(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = function() {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, a, n) {
                return a && e(t.prototype, a),
                n && e(t, n),
                t
            }
        }()
          , s = a(1293)
          , c = n(s)
          , u = a(1409)
          , f = n(u)
          , d = a(1021)
          , p = function(e) {
            function t() {
                r(this, t);
                var e = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return e.fromData(f.default, {
                    gauge: null
                }),
                e
            }
            return o(t, e),
            l(t, [{
                key: "increaseTo",
                value: function(e) {}
            }, {
                key: "consume",
                value: function() {}
            }]),
            t
        }(aoba.Container)
          , h = function(e) {
            function t(e, a) {
                r(this, t);
                var n = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this))
                  , o = n.fromData(c.default, {
                    skillCardBase: {
                        key: "skill_card_base.png"
                    },
                    skillCardIdol: {
                        key: e
                    },
                    skillIcon: p.new()
                })
                  , l = o.skillCardBase
                  , s = o.skillCardIdol
                  , u = o.skillIcon;
                return n._skillCardBase = l,
                n._memorySkillGroup = u,
                a || (n._memorySkillGroup.y += 112),
                n._selected = !1,
                n._skillId = 0,
                n._idolId = 0,
                n._isMemoryAppeal = !0,
                l.tint = 6710886,
                s.tint = 6710886,
                n
            }
            return o(t, e),
            l(t, [{
                key: "updateAvailability",
                value: function() {}
            }, {
                key: "slideUp",
                value: function() {
                    return aoba.Tween.fromData(this._memorySkillGroup, d.memorySkillCard.slideUp),
                    aoba.Tween.fromData(this, d.memorySkillCard.slideUp)
                }
            }, {
                key: "select",
                value: function() {}
            }, {
                key: "updateLinkSkillState",
                value: function() {}
            }, {
                key: "cancel",
                value: function() {}
            }, {
                key: "increaseGaugeTo",
                value: function() {}
            }, {
                key: "disabled",
                get: function() {
                    return this._disabled
                }
            }, {
                key: "selected",
                get: function() {
                    return this._selected
                }
            }, {
                key: "isMemoryAppeal",
                get: function() {
                    return this._isMemoryAppeal
                }
            }, {
                key: "skillId",
                get: function() {
                    return this._skillId
                }
            }, {
                key: "idolId",
                get: function() {
                    return this._idolId
                }
            }, {
                key: "memorySkillGroup",
                get: function() {
                    return this._memorySkillGroup
                }
            }]),
            t
        }(aoba.Container);
        t.default = h
    },
    1608: function(e, t, a) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function r(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function i(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function o(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = function() {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, a, n) {
                return a && e(t.prototype, a),
                n && e(t, n),
                t
            }
        }()
          , s = function e(t, a, n) {
            null === t && (t = Function.prototype);
            var r = Object.getOwnPropertyDescriptor(t, a);
            if (void 0 === r) {
                var i = Object.getPrototypeOf(t);
                return null === i ? void 0 : e(i, a, n)
            }
            if ("value"in r)
                return r.value;
            var o = r.get;
            if (void 0 !== o)
                return o.call(n)
        }
          , c = a(14)
          , u = n(c)
          , f = a(2)
          , d = n(f)
          , p = a(1032)
          , h = n(p)
          , y = a(9)
          , _ = n(y)
          , m = a(1022)
          , g = n(m)
          , b = 20
          , v = 234
          , w = {
            1: 3,
            2: 5,
            3: 7,
            4: 8,
            5: 10
        }
          , k = aoba
          , S = k.DEG_TO_RAD
          , E = d.default.SCREEN_WIDTH
          , T = d.default.SCREEN_HEIGHT
          , O = function() {
            return aoba.Sprite.new("memory_select_frame.png").setPosition(E / 2, T / 2).setAnchor(.5)
        }
          , x = function(e) {
            function t(e) {
                r(this, t);
                var a = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                a._moving = !1,
                a._acceptingJudgement = !1,
                a._speed = 1,
                a._frame = null,
                a._judgeResult = null,
                a._filmBaseOverlay = _.default.graphics.rect(E, T, {
                    alpha: .5
                }).addTo(a);
                a._filmBase = aoba.extras.TilingSprite.fromFrame("memory_base.png", v * b, 236).addTo(a, -16, T / 2, {
                    anchor: aoba.p(0, .5)
                }),
                a._bgEffect = aoba.Sprite.new("memory_film_base_effect.png").addToAt(a, a._filmBase, -16, T / 2, {
                    anchor: aoba.p(0, .5)
                }),
                a._bgEffect.width = v * b,
                a._bgEffect.height = 1.25 * a._filmBase.height,
                a._films = a._createFilms(e).addTo(a, -16, T / 2, {
                    pivot: aoba.p(0, .5)
                }),
                a._filmOverlay = _.default.graphics.rect(E, a._films.height, {
                    alpha: .8
                }).addTo(a, 0, a._films.y, {
                    pivot: aoba.p(0, .5)
                });
                var n = aoba.Sprite.new("memory_appeal_bg_boke.png").addTo(a, 0, 0, {
                    alpha: .5,
                    blendMode: aoba.BLEND_MODES.SCREEN
                });
                return n.width = E,
                n.height = T,
                a.on("end", function() {
                    aoba.FrameTween.new(a).to({
                        alpha: 0
                    }, 6).call(function() {
                        a.destroy({
                            children: !0
                        })
                    })
                }),
                a
            }
            return o(t, e),
            l(t, [{
                key: "appear",
                value: function() {
                    var e = this
                      , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                    return this._moving = !0,
                    this._speed = t,
                    this.alpha = 0,
                    aoba.FrameTween.new(this).to({
                        alpha: 1
                    }, 9).call(function() {
                        e._showBgParticle()
                    }),
                    aoba.soundManager.playSE(h.default.startMemoryRoulette),
                    this
                }
            }, {
                key: "start",
                value: function() {
                    var e = this;
                    this._frame = O().addTo(this),
                    this._frame.scale.set(5.5),
                    aoba.FrameTween.new(this._frame).to({
                        scaleX: 1,
                        scaleY: 1
                    }, 8, "easeInOutQuart").call(function() {
                        e._acceptingJudgement = !0,
                        e.emit("showFrame"),
                        e._filmOverlay.destroy();
                        var t = O().addTo(e);
                        aoba.FrameTween.new(t).to({
                            scaleX: 2.1,
                            scaleY: 2.1
                        }, 7, "easeInOutQuad"),
                        aoba.FrameTween.new(t).to({
                            alpha: 0
                        }, 7).call(function() {
                            t.destroy()
                        })
                    })
                }
            }, {
                key: "stopOnGood",
                value: function() {
                    var e = this
                      , a = this._films.children.find(function(t, a) {
                        return a >= 12 && t.resultCallBack === e._showSuccessEffect
                    });
                    this._films.update = function() {
                        if (e._frame.x - a.getGlobalPosition().x >= 0) {
                            var n = e._frame.x - a.x;
                            e._films.x = n,
                            e._filmBase.x = n,
                            s(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "pause", e).call(e),
                            delete e._films.update,
                            e.emit("stopOnGood")
                        }
                    }
                }
            }, {
                key: "_showBgParticle",
                value: function() {
                    var e = this
                      , t = _.default.playParticle(g.default.memoryAppeal.bg, this._filmBaseOverlay, 568, 320);
                    t.container.alpha = 0,
                    this.once("showFrame", function() {
                        aoba.FrameTween.new(t.container).to({
                            alpha: 1
                        }, 5).call(function() {
                            e.emit("showFrameEnd")
                        })
                    }),
                    this.once("judgeMemorySkillRoulette", function() {
                        aoba.FrameTween.new(t.container).to({
                            alpha: 0
                        }, 5).call(function() {
                            t.destroy()
                        })
                    })
                }
            }, {
                key: "_createFilms",
                value: function(e) {
                    var t = this
                      , a = function(a) {
                        return a ? {
                            image: e.getImagePath("memory_roulette_good"),
                            resultCallBack: t._showSuccessEffect
                        } : {
                            image: e.getImagePath("memory_roulette_bad"),
                            resultCallBack: t._showFailureEffect
                        }
                    }
                      , n = [];
                    (0,
                    u.default)(8).times(function() {
                        n.push(Math.random() <= .5)
                    });
                    var r = []
                      , i = w[e.tensionLevel || 5]
                      , o = 12 - i;
                    return (0,
                    u.default)(i).times(function() {
                        r.push(!0)
                    }),
                    (0,
                    u.default)(o).times(function() {
                        r.push(!1)
                    }),
                    r.sort(function() {
                        return Math.random() - .5
                    }),
                    [].concat(n, r).reduce(function(e, t, n) {
                        var r = a(t)
                          , i = aoba.Sprite.new(r.image);
                        return i.resultCallBack = r.resultCallBack,
                        i.addTo(e, i.width / 2 + n * i.width, i.height / 2, {
                            anchor: .5
                        }),
                        e
                    }, aoba.Container.new())
                }
            }, {
                key: "judge",
                value: function() {
                    if (this._judgeResult = this._getJudgeResult(),
                    !this._judgeResult)
                        return this._judgeResult;
                    this._acceptingJudgement = !1;
                    var e = this._frame.x - this._judgeResult.x;
                    return this._films.x = e,
                    this._filmBase.x = e,
                    this._fadeOutBgAndFilm(),
                    this._judgeResult.addTo(this, this._frame.x, this._frame.y),
                    this.emit("judgeMemorySkillRoulette"),
                    this._judgeResult
                }
            }, {
                key: "_showSuccessEffect",
                value: function(e) {
                    var t = this;
                    aoba.soundManager.playSE(h.default.memoryRouletteGood),
                    this.emit("decideResult", {
                        isSuccess: !0
                    });
                    var a = aoba.Container.new().addTo(this._filmBaseOverlay, e.x, e.y);
                    _.default.playParticle(g.default.memoryAppeal.impact, a, 0, 0, {
                        scale: .5
                    }),
                    aoba.FrameTween.new(a).to({
                        scaleX: 6.4,
                        scaleY: 6.4
                    }, 4).to({
                        scaleX: 7.2,
                        scaleY: 7.2
                    }, 4).to({
                        scaleX: 8,
                        scaleY: 8,
                        alpha: 0
                    }, 8),
                    aoba.FrameTween.new(this._frame).to({
                        scaleX: 1.6,
                        scaleY: 1.6
                    }, 4).to({
                        scaleX: 2.4,
                        scaleY: 2.4,
                        alpha: 0
                    }, 4);
                    var n = aoba.Sprite.new("text_timing_good.png").addTo(this, e.x, e.y + 60, {
                        anchor: .5
                    });
                    aoba.FrameTween.new(n).wait(2).to({
                        rotation: -7 * aoba.DEG_TO_RAD
                    }, 6).to({
                        rotation: -8 * aoba.DEG_TO_RAD,
                        alpha: 0
                    }, 6),
                    aoba.FrameTween.new(n).wait(2).to({
                        scaleX: 2.9,
                        scaleY: 2.9
                    }, 6, "easeOutQuart").to({
                        scaleX: 3.06,
                        scaleY: 3.06
                    }, 6).call(function() {
                        return n.destroy()
                    }),
                    aoba.FrameTween.new(e).to({
                        scaleX: 1.6,
                        scaleY: 1.6
                    }, 4).to({
                        scaleX: 1.8,
                        scaleY: 1.8
                    }, 4).to({
                        scaleX: 2,
                        scaleY: 2,
                        alpha: 0
                    }, 4).call(function() {
                        t.emit("end", {
                            isSuccess: !0
                        })
                    })
                }
            }, {
                key: "_showFailureEffect",
                value: function(e) {
                    var t = this;
                    aoba.soundManager.playSE(h.default.memoryRouletteBad),
                    this.emit("decideResult", {
                        isSuccess: !1
                    }),
                    this._showBadBg();
                    var a = aoba.Container.new().addTo(this._filmBaseOverlay, e.x, e.y);
                    _.default.playParticle(g.default.memoryAppeal.spark, a, 0, 0),
                    aoba.FrameTween.new(this._frame).to({
                        scaleX: 1.6,
                        scaleY: 1.6
                    }, 4).to({
                        scaleX: 2.2,
                        scaleY: 2.2,
                        alpha: 0
                    }, 4);
                    var n = aoba.Sprite.new("text_memory_bad.png").addTo(this, e.x, e.y - 120, {
                        anchor: .5
                    });
                    aoba.FrameTween.new(n).by({
                        y: 6
                    }, 12),
                    aoba.FrameTween.new(n).by({
                        alpha: 1
                    }, 2),
                    aoba.FrameTween.new(n).to({
                        scaleX: 1.2,
                        scaleY: 1.2
                    }, 7, "easeOutQuart").to({
                        scaleX: 1,
                        scaleY: 1
                    }, 5, "easeInQuad").to({
                        rotation: -6 * aoba.DEG_TO_RAD,
                        y: n.y + 24
                    }, 12).to({
                        rotation: -9 * aoba.DEG_TO_RAD,
                        y: n.y + 30,
                        alpha: 0
                    }, 6).call(function() {
                        return n.destroy()
                    }),
                    aoba.FrameTween.new(e).to({
                        scaleX: 1.32,
                        scaleY: 1.32
                    }, 8, "easeInOutQuad").to({
                        rotation: -6 * aoba.DEG_TO_RAD,
                        y: e.y + 38
                    }, 15).to({
                        rotation: -9 * aoba.DEG_TO_RAD,
                        y: e.y + 46,
                        alpha: 0
                    }, 6).call(function() {
                        t.emit("end", {
                            isSuccess: !1
                        })
                    })
                }
            }, {
                key: "_showMissEffect",
                value: function() {
                    var e = this;
                    aoba.soundManager.playSE(h.default.memoryRouletteMiss),
                    this.emit("decideResult", {
                        isSuccess: !1
                    }),
                    this._showBadBg();
                    var t = aoba.Text.new("miss", {
                        fill: 16777215,
                        fontSize: 84,
                        stroke: 11622820,
                        strokeThickness: 12
                    }).addTo(this, this._frame.x, this._frame.y, {
                        anchor: .5
                    });
                    aoba.FrameTween.new(t).wait(2).by({
                        y: 20
                    }, 8).by({
                        y: 4,
                        alpha: -1
                    }, 12).call(function() {
                        e.emit("end", {
                            isSuccess: !1
                        })
                    }),
                    aoba.FrameTween.new(this._frame).wait(2).by({
                        rotation: 10 * S,
                        y: 40
                    }, 8).by({
                        rotation: 2 * S,
                        y: 8,
                        alpha: -1
                    }, 8)
                }
            }, {
                key: "_showBadBg",
                value: function() {
                    var e = aoba.Sprite.new("memory_bad_bg.png").addToAt(this, this._bgEffect, 0, 0, {
                        scale: 4,
                        alpha: 0,
                        blendMode: aoba.BLEND_MODES.ADD
                    });
                    aoba.FrameTween.new(e).to({
                        alpha: 1
                    }, 6)
                }
            }, {
                key: "_fadeOutBgAndFilm",
                value: function() {
                    aoba.FrameTween.new(this._films).to({
                        alpha: 0
                    }, 5),
                    aoba.FrameTween.new(this._filmBase).to({
                        alpha: 0
                    }, 5),
                    aoba.FrameTween.new(this._bgEffect).to({
                        alpha: 0
                    }, 5)
                }
            }, {
                key: "_getJudgeResult",
                value: function() {
                    var e = !0
                      , t = !1
                      , a = void 0;
                    try {
                        for (var n, r = this._films.children[Symbol.iterator](); !(e = (n = r.next()).done); e = !0) {
                            var i = n.value
                              , o = i.x + this._films.x
                              , l = this._frame.bounds;
                            if (o >= l.left && o <= l.right)
                                return i
                        }
                    } catch (e) {
                        t = !0,
                        a = e
                    } finally {
                        try {
                            !e && r.return && r.return()
                        } finally {
                            if (t)
                                throw a
                        }
                    }
                    return null
                }
            }, {
                key: "ezgUpdate",
                value: function(e) {
                    if (this._moving) {
                        var t = v * (e / (5e3 / 30)) * this._speed;
                        this._filmBase.x -= t,
                        this._bgEffect.x -= t,
                        this._films.x -= t,
                        this._acceptingJudgement && this._films.bounds.right < this._frame.bounds.left && (this._showMissEffect(),
                        this._acceptingJudgement = !1)
                    }
                }
            }]),
            t
        }(aoba.Container);
        t.default = x
    },
    1609: function(e, t, a) {
        "use strict";
        function n(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function r(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function i(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = function() {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, a, n) {
                return a && e(t.prototype, a),
                n && e(t, n),
                t
            }
        }()
          , l = function(e) {
            function t() {
                n(this, t);
                var e = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return e._iconList = aoba.Container.new().addTo(e),
                e._effectLayer = aoba.Container.new().addTo(e),
                e
            }
            return i(t, e),
            o(t, [{
                key: "playIconEffect",
                value: function(e) {
                    var t = this
                      , a = aoba.Sprite.new(e.getImagePath())
                      , n = a.width * (58 / 72) / 2 + 38 * this._iconList.children.length;
                    return a.addTo(this._iconList, n, 24.5, {
                        anchor: .5,
                        scale: 0
                    }),
                    new Promise(function(e) {
                        aoba.FrameTween.new(a).to({
                            scaleX: 58 / 72,
                            scaleY: 58 / 72
                        }, 5, "easeInOutQuad").to({
                            scaleX: 58 / 72 * 1.1,
                            scaleY: 58 / 72 * 1.1
                        }, 2, "easeInOutQuad").call(function() {
                            var e = aoba.Sprite.new(a.texture);
                            e.addTo(t._effectLayer, n, 24.5, {
                                anchor: .5,
                                blendMode: aoba.BLEND_MODES.ADD
                            }),
                            aoba.FrameTween.new(e).to({
                                alpha: 0,
                                scaleX: 58 / 72 * 2,
                                scaleY: 58 / 72 * 2
                            }, 8).call(function() {
                                return e.destroy()
                            })
                        }).to({
                            scaleX: 58 / 72,
                            scaleY: 58 / 72
                        }, 4, "easeInOutQuad").wait(429).call(e)
                    }
                    )
                }
            }, {
                key: "fadeOut",
                value: function() {
                    var e = this;
                    return new Promise(function(t) {
                        return aoba.Tween.new(e).to({
                            alpha: 0
                        }, 132).call(function() {
                            e._iconList.destroyChildren(),
                            e.alpha = 1,
                            t()
                        })
                    }
                    )
                }
            }]),
            t
        }(aoba.Container);
        t.default = l
    },
    1610: function(e, t, a) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function r(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function i(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function o(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        function l(e) {
            var t = aoba.Container.new()
              , a = t.fromData(y.default, {
                popStretchInnerBase534x418: m.default.new("pop_stretch_inner_base.png", {
                    left: 10,
                    top: 10,
                    right: 10,
                    bottom: 10,
                    width: 534,
                    height: 418
                })
            })
              , n = a.popStretchInnerBase534x418;
            if (e && 0 !== e.length) {
                a.list.x = n.x + 2,
                a.list.y = n.y + 2;
                var r = aoba.Container.new();
                e.forEach(function(e, t) {
                    S.default.new(e, t % 2 == 0 ? T.EVEN : T.ODD).addTo(r, 0, t * E)
                });
                var i = c.default.commonUiHelper.createScrollBarBase({
                    width: 8,
                    height: 390
                });
                b.default.new({
                    width: n.width - 4,
                    height: n.height - 4,
                    container: r,
                    scrollBar: w.default.new({
                        width: 14
                    }),
                    scrollBarBase: i,
                    round: 10
                }).addTo(a.list, 0, 0),
                i.addTo(a.scrollBar, 0, 0)
            } else
                aoba.Text.new(f.default.t("concert.passiveSkillDetailListDialog.emptyMessage"), {
                    fill: 6378341,
                    fontFamily: "HummingStd-E",
                    fontSize: 28,
                    align: "center"
                }).addTo(n, n.width / 2, n.height / 2, {
                    anchor: .5
                });
            return t
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = a(9)
          , c = n(s)
          , u = a(4)
          , f = n(u)
          , d = a(15)
          , p = n(d)
          , h = a(1611)
          , y = n(h)
          , _ = a(60)
          , m = n(_)
          , g = a(90)
          , b = n(g)
          , v = a(91)
          , w = n(v)
          , k = a(1612)
          , S = n(k)
          , E = 100
          , T = {
            EVEN: 16777215,
            ODD: 16053236
        }
          , O = function(e) {
            function t(e) {
                r(this, t);
                var a = l(e);
                return i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, {
                    title: f.default.t("concert.passiveSkillDetailListDialog.title"),
                    type: "close",
                    width: 573,
                    height: 610,
                    marginTop: 0,
                    container: a
                }))
            }
            return o(t, e),
            t
        }(p.default);
        t.default = O
    },
    1611: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = {
            children: [{
                name: "popStretchInnerBase534x418",
                fullName: "popStretchInnerBase534x418",
                type: "container",
                x: -270,
                y: 0
            }, {
                children: [{
                    name: "passiveSkillDetail",
                    fullName: "list/passiveSkillDetail",
                    type: "container",
                    x: 0,
                    y: 0
                }],
                name: "list",
                fullName: "list",
                type: "container",
                x: -267,
                y: 3
            }, {
                name: "scrollBar",
                fullName: "scrollBar",
                type: "container",
                x: 244,
                y: 10
            }],
            name: "",
            fullName: "",
            pivot: {
                x: .5,
                y: 0
            },
            type: "container",
            x: 569,
            y: 88
        }
    },
    1612: function(e, t, a) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function r(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function i(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function o(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = a(1613)
          , s = n(l)
          , c = a(194)
          , u = n(c)
          , f = 31
          , d = function(e) {
            function t(e, a) {
                r(this, t);
                var n = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this))
                  , o = n.fromData(s.default, {
                    base: {
                        fill: a
                    },
                    comment: {
                        text: e.comment
                    },
                    name: {
                        text: e.name
                    },
                    tabLine: u.default.create({
                        width: 462,
                        type: u.default.types.DOT_BLACK
                    }),
                    icon: {
                        key: e.getImagePath()
                    }
                })
                  , l = o.comment
                  , c = o.icon;
                return l.style.wordWrap = !0,
                l.style.wordWrapWidth = 480,
                l.style.breakWords = !0,
                c.scale = aoba.p(f / c.height),
                n
            }
            return o(t, e),
            t
        }(aoba.Container);
        t.default = d
    },
    1613: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = {
            children: [{
                name: "base",
                fullName: "base",
                type: "graphics",
                fill: 0,
                alpha: 1,
                width: 535,
                height: 100,
                shape: "rect",
                x: 0,
                y: 0
            }, {
                name: "comment",
                fullName: "comment",
                anchor: {
                    x: 0,
                    y: 0
                },
                type: "text",
                text: "[条件:5ターン以降][確率:20%][最大:1回]",
                style: {
                    fill: 6378341,
                    fontFamily: "UDKakugo_SmallPr6-B",
                    fontSize: 16
                },
                rotation: 0,
                x: 11,
                y: 54
            }, {
                name: "name",
                fullName: "name",
                type: "text",
                text: "Vocal7%UP",
                style: {
                    fill: 6378341,
                    fontFamily: "UDKakugo_SmallPr6-B",
                    fontSize: 18
                },
                anchor: {
                    x: 0,
                    y: .5
                },
                rotation: 0,
                x: 47,
                y: 21
            }, {
                name: "tabLine",
                fullName: "tabLine",
                type: "container",
                x: 21,
                y: 43
            }, {
                name: "icon",
                fullName: "icon",
                anchor: {
                    x: .5,
                    y: .5
                },
                type: "sprite",
                key: "icon.png",
                x: 26,
                y: 23
            }],
            name: "",
            fullName: "",
            type: "container",
            x: 302,
            y: 91
        }
    },
    1614: function(e, t, a) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function r(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function i(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function o(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = function() {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, a, n) {
                return a && e(t.prototype, a),
                n && e(t, n),
                t
            }
        }()
          , s = function e(t, a, n) {
            null === t && (t = Function.prototype);
            var r = Object.getOwnPropertyDescriptor(t, a);
            if (void 0 === r) {
                var i = Object.getPrototypeOf(t);
                return null === i ? void 0 : e(i, a, n)
            }
            if ("value"in r)
                return r.value;
            var o = r.get;
            if (void 0 !== o)
                return o.call(n)
        }
          , c = a(14)
          , u = n(c)
          , f = a(22)
          , d = n(f)
          , p = a(1615)
          , h = n(p)
          , y = a(1407)
          , _ = n(y)
          , m = a(1021)
          , g = a(4)
          , b = n(g)
          , v = a(1022)
          , w = n(v)
          , k = a(9)
          , S = n(k)
          , E = a(1410)
          , T = n(E)
          , O = a(1032)
          , x = n(O)
          , P = a(355)
          , I = n(P)
          , M = {
            normal: "text_timing_normal",
            good: "text_timing_good",
            perfect: "text_timing_perfect",
            miss: "text_timing_bad"
        }
          , A = {
            NORMAL: "normal",
            GOOD: "good",
            PERFECT: "perfect",
            MISS: "miss"
        }
          , j = function(e) {
            return d.default.pad(e, 2, "0")
        }
          , C = function() {
            var e = aoba.FrameAnimation.new("images/ui/concert/effects/player_idol.png", 73, 34, {
                fps: 30,
                keep: !0
            });
            return e.setProps({
                visible: !1,
                scale: 3.4,
                blendMode: aoba.BLEND_MODES.ADD
            }),
            e.on("end", function() {
                e.hide()
            }),
            e
        }
          , D = function(e) {
            function t(e, a) {
                r(this, t);
                var n = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this))
                  , o = e.id
                  , l = e.character
                  , s = e.name
                  , c = e.mental
                  , u = e.currentMental
                  , f = e.currentStar
                  , d = e.isPlayer;
                n._mental = void 0 === u ? c : u,
                n._maxMental = c,
                n._star = f || 0;
                var p = void 0
                  , y = void 0;
                d ? (p = "idol_base_player.png",
                y = l.getImagePath("concert_player_icon")) : (p = "idol_base_rival.png",
                y = l.getImagePath("concert_rival_icon"));
                var m = aoba.Text.new(j(n._star), {
                    fontSize: 22,
                    fill: [16710310, 16563510],
                    stroke: 2236962,
                    strokeThickness: 6,
                    letterSpacing: 4,
                    fontStyle: "italic",
                    fontWeight: "bold"
                });
                n._main = aoba.Container.new();
                var g = {
                    base: {
                        key: p
                    },
                    idolImage: {
                        key: y,
                        dx: -16
                    },
                    producerName: {
                        text: s
                    },
                    starCount: {
                        instance: m,
                        anchor: .5,
                        dx: 4,
                        dy: 0
                    },
                    mentalGroup: T.default.new(n._mental, n._maxMental),
                    statusEffectList: _.default.new()
                }
                  , b = n._main.fromData(h.default, g);
                if (b.producerName.text = I.default.create(s, b.producerName.style, 5 * b.producerName.style.fontSize),
                void 0 !== a && (b.idolImage.tint = a),
                d) {
                    var v = C().addTo(n._main, 4, -24);
                    aoba.FrameTween.new(n).call(function() {
                        v.show(),
                        v.play()
                    }).wait(60).loop()
                }
                n._main.addTo(n, 0, 0),
                n._attackResultY = 60,
                n._attackResult = aoba.Sprite.new(),
                n._attackResult.position.set(12, n._attackResultY),
                n._attackResult.setProps({
                    scale: .4,
                    anchor: aoba.p(1, .5),
                    alpha: 0
                }),
                n._attackOrderX = -26,
                n._attackOrder = aoba.Sprite.new().setPosition(n._attackOrderX, 2).setProps({
                    alpha: 0
                });
                var w = b.base
                  , k = b.concertStarIcon
                  , S = b.mentalGroup
                  , E = b.statusEffectList
                  , O = aoba.Sprite.new().setPosition(-14, 26).setProps({
                    anchor: aoba.p(.5, 1),
                    alpha: 0
                });
                return n._id = o,
                n._character = l,
                n._isPlayer = d,
                n._base = w,
                n._mentalGroup = S,
                n._statusEffectList = E,
                n._starIcon = k,
                n._starCount = m,
                n._rankingIcon = O,
                n._statusList = [],
                n._retainedContainers = [n._attackResult, n._attackOrder, n._rankingIcon],
                n._mentalGroup.once("gaugeEmpty", n._retire, n),
                n.once("added", function() {
                    if (n._mentalGroup.isWarning && n.emit("enterWarning"),
                    0 === n._mental) {
                        n._addRetireOverlay().alpha = .7,
                        n._addRetireText()
                    }
                }),
                n
            }
            return o(t, e),
            l(t, [{
                key: "ezgPreDestroy",
                value: function() {
                    var e = !0
                      , a = !1
                      , n = void 0;
                    try {
                        for (var r, i = this._retainedContainers[Symbol.iterator](); !(e = (r = i.next()).done); e = !0) {
                            var o = r.value;
                            o && o.destroy({
                                children: !0
                            })
                        }
                    } catch (e) {
                        a = !0,
                        n = e
                    } finally {
                        try {
                            !e && i.return && i.return()
                        } finally {
                            if (a)
                                throw n
                        }
                    }
                    s(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "ezgPreDestroy", this).call(this)
                }
            }, {
                key: "goForward",
                value: function() {
                    var e = this;
                    return new Promise(function(t) {
                        return aoba.Tween.fromData(e._main, m.playerIdol.goForward).call(t)
                    }
                    )
                }
            }, {
                key: "backFromForward",
                value: function() {
                    var e = this;
                    return new Promise(function(t) {
                        return aoba.Tween.fromData(e._main, m.playerIdol.backFromForward).call(t)
                    }
                    )
                }
            }, {
                key: "equals",
                value: function(e) {
                    return !(!this._isPlayer || !e.isPlayer) || this._id === e.id
                }
            }, {
                key: "receiveBonus",
                value: function(e) {
                    var t = this
                      , a = aoba.Sprite.new(this._starIcon.texture).addTo(this._main, this._starIcon.x, this._starIcon.y + -40, {
                        scale: 1.2
                    })
                      , n = aoba.Text.new(this._star, this._starCount.style).addTo(this._main, this._starCount.x, this._starCount.y + -40, {
                        scale: 1.2
                    });
                    aoba.FrameTween.new(n).wait(6).by({
                        y: -4
                    }, 2).call(function() {
                        t._star += e,
                        n.text = j(t._star),
                        t._starCount.text = n.text
                    }).by({
                        y: 4
                    }, 2).wait(20).call(function() {
                        a.destroy(),
                        n.destroy()
                    });
                    var r = aoba.Sprite.new(this._base.texture).addTo(this._main, this._base.x, this._base.y, {
                        blendMode: aoba.BLEND_MODES.ADD
                    })
                      , i = aoba.FrameTween.new(r);
                    return (0,
                    u.default)(3).times(function() {
                        i.call(function() {
                            r.alpha = .8
                        }).to({
                            alpha: 0
                        }, 10)
                    }),
                    S.default.playParticle(w.default.idolGainStar, this._main, 0, 30),
                    aoba.FrameTween.createBlank().wait(1).call(function() {
                        S.default.playParticle(w.default.twinkle, t._main, 60, -20)
                    }),
                    i.call(function() {
                        return r.destroy()
                    }).promise()
                }
            }, {
                key: "receiveDamage",
                value: function(e) {
                    var t = this;
                    if (aoba.soundManager.playSE(x.default.idolReceiveDamage, {
                        volume: .15
                    }),
                    this._isPlayer) {
                        var a = this._mentalGroup.isWarning;
                        this._mentalGroup.decrease(e);
                        var n = this._mentalGroup.isWarning
                          , r = void 0;
                        if (!a && n)
                            this.emit("enterWarning"),
                            r = "concert_mental_1";
                        else {
                            r = e >= .2 * this._maxMental ? "concert_damage_2" : "concert_damage_1"
                        }
                        this.emit("playVoice", r)
                    } else
                        this._mentalGroup.decrease(e);
                    aoba.FrameAnimation.new("images/ui/concert/effects/idol_damaged.png", 105, 31, {
                        fps: 30
                    }).addTo(this._main, 0, 0, {
                        scale: 2.38
                    }).play(),
                    aoba.FrameAnimation.new("images/ui/concert/effects/idol_damaged_sad.png", 32, 32, {
                        fps: 30
                    }).addTo(this._main, 200, -32, {
                        scale: 2
                    }).play();
                    var i = aoba.FrameTween.new(this);
                    return (0,
                    u.default)(6).times(function() {
                        i.by({
                            x: -6
                        }, 2).by({
                            x: 6
                        }, 2)
                    }),
                    new Promise(function(e) {
                        return i.call(function() {
                            return e(t)
                        })
                    }
                    )
                }
            }, {
                key: "receiveSelfDamage",
                value: function(e) {
                    if (!this._isPlayer)
                        return void this._mentalGroup.decrease(e);
                    var t = this._mentalGroup.isWarning;
                    this._mentalGroup.decrease(e);
                    var a = this._mentalGroup.isWarning;
                    !t && a && this.emit("enterWarning")
                }
            }, {
                key: "resetOrder",
                value: function(e) {
                    this._order = e
                }
            }, {
                key: "recover",
                value: function(e) {
                    var t = this._mentalGroup.isWarning;
                    this._mentalGroup.increase(e);
                    var a = this._mentalGroup.isWarning;
                    t && !a && this.emit("leaveWarning"),
                    aoba.soundManager.playSE(x.default.showRecoverEffect),
                    this.playRecoverEffect();
                    var n = S.default.ImageLabel.new({
                        imagePrefix: "recover_number_",
                        originX: .5,
                        interval: 20,
                        scaleX: .36,
                        scaleY: .36,
                        prefix: "+"
                    });
                    n.number = e,
                    n.addTo(this._main, this._base.width / 2, this._base.height / 2),
                    aoba.FrameTween.new(n).by({
                        y: -15
                    }, 3, "easeInOutQuad").by({
                        y: 15
                    }, 5, "easeInOutQuad").wait(12).to({
                        alpha: 0
                    }, 5).call(function() {
                        n.destroy({
                            children: !0
                        })
                    })
                }
            }, {
                key: "raiseMemoryAppeal",
                value: function(e) {
                    aoba.soundManager.playSE(x.default.raiseMemoryAppealOfActor),
                    this._playRaiseEffectOfMemoryAppeal();
                    var t = S.default.ImageLabel.new({
                        imagePrefix: "memory_skill_number_",
                        originX: .5,
                        interval: 20,
                        scaleX: .36,
                        scaleY: .36,
                        prefix: "+"
                    });
                    t.number = e,
                    t.addTo(this._main, this._base.width / 2, this._base.height / 2),
                    aoba.FrameTween.new(t).by({
                        y: -15
                    }, 3, "easeInOutQuad").by({
                        y: 15
                    }, 5, "easeInOutQuad").wait(12).to({
                        alpha: 0
                    }, 5).call(function() {
                        t.destroy({
                            children: !0
                        })
                    })
                }
            }, {
                key: "penaltyMemoryAppeal",
                value: function(e) {
                    this._playPenaltyEffectOfMemoryAppeal(),
                    aoba.soundManager.playSE(x.default.showDebuffEffect);
                    var t = S.default.ImageLabel.new({
                        imagePrefix: "memory_skill_number_down_",
                        originX: .5,
                        interval: 20,
                        scaleX: .36,
                        scaleY: .36,
                        prefix: "-"
                    });
                    t.number = e,
                    t.addTo(this._main, this._base.width / 2, this._base.height / 2),
                    aoba.FrameTween.new(t).by({
                        y: -15
                    }, 3, "easeInOutQuad").by({
                        y: 15
                    }, 5, "easeInOutQuad").wait(12).to({
                        alpha: 0
                    }, 5).call(function() {
                        t.destroy({
                            children: !0
                        })
                    })
                }
            }, {
                key: "playRecoverEffect",
                value: function() {
                    aoba.FrameAnimation.new("images/ui/concert/effects/idol_recover.png", 100, 50, {
                        fps: 30
                    }).addTo(this._main, this._main.width / 2, this._main.height / 2, {
                        anchor: .5,
                        scale: 3,
                        blendMode: aoba.BLEND_MODES.ADD
                    }).play()
                }
            }, {
                key: "_playRaiseEffectOfMemoryAppeal",
                value: function() {
                    S.default.playParticle(w.default.raiseMemoryAppeal.heartHit, this),
                    S.default.playParticle(w.default.raiseMemoryAppeal.heartHitTwinkle, this)
                }
            }, {
                key: "_playPenaltyEffectOfMemoryAppeal",
                value: function() {
                    var e = this;
                    [{
                        data: w.default.lowerMemoryAppeal.memoryDownMelancholy2,
                        blendMode: aoba.BLEND_MODES.ADD,
                        alpha: 1,
                        scale: 1,
                        x: 0,
                        y: 0,
                        delay: 10,
                        stopTime: 35
                    }, {
                        data: w.default.lowerMemoryAppeal.memoryDownMelancholy1,
                        blendMode: aoba.BLEND_MODES.NORMAL,
                        alpha: 1,
                        scale: 1,
                        x: 0,
                        y: 0,
                        delay: 10,
                        stopTime: 35
                    }, {
                        data: w.default.lowerMemoryAppeal.hajiki,
                        scale: .8,
                        blendMode: aoba.BLEND_MODES.NORMAL,
                        alpha: 1,
                        x: this._base.width / 2 + 20,
                        y: this._base.height / 2,
                        delay: 25,
                        stopTime: 30
                    }].forEach(function(t) {
                        var a = new S.default.ParticleSystem(t.data.images,t.data.data);
                        a.setScale(t.scale, t.scale),
                        a.setPosition(t.x, t.y),
                        a.blendMode = t.blendMode,
                        e._main.addChild(a.container),
                        aoba.FrameTween.new(e).wait(t.delay).call(function() {
                            a.play(),
                            aoba.FrameTween.new(a).wait(t.stopTime).to({
                                alpha: 0
                            }, 5).call(function() {
                                a.destroy({
                                    children: !0
                                })
                            })
                        })
                    }),
                    [{
                        scale: .25,
                        blendMode: aoba.BLEND_MODES.NORMAL,
                        alpha: .8,
                        startTime: 1e3
                    }, {
                        scale: .25,
                        blendMode: aoba.BLEND_MODES.ADD,
                        alpha: .5,
                        startTime: 1e3
                    }].forEach(function(t) {
                        var a = S.default.playParticle(w.default.lowerMemoryAppeal.heart, e._main, e._base.width / 2, e._base.height / 2, t);
                        aoba.FrameTween.new(a).wait(20).call(function() {
                            a.destroy({
                                children: !0
                            })
                        })
                    })
                }
            }, {
                key: "playActiveReraiseEffect",
                value: function() {
                    var e = this
                      , t = aoba.Sprite.new("reraise_frame_light.png").addTo(this, -116, -145, {
                        alpha: 0,
                        blendMode: aoba.BLEND_MODES.ADD
                    });
                    aoba.FrameTween.new(t).call(function() {
                        S.default.playParticle(w.default.activeReraiseSkill.feather, e, 110, -94),
                        S.default.playParticle(w.default.activeReraiseSkill.twinkle1, e, 80, -158, {
                            playAndDestroy: !0
                        })
                    }).wait(30).to({
                        alpha: 1
                    }, 1).call(function() {
                        return S.default.playParticle(w.default.activeReraiseSkill.twinkle2, e, 0, 0, {
                            playAndDestroy: !0
                        })
                    }).to({
                        alpha: 0
                    }, 20).wait(20).call(function() {
                        t.destroy()
                    })
                }
            }, {
                key: "reraise",
                value: function(e) {
                    var t = this;
                    return new Promise(function(a) {
                        t._removeStatusEffectListByCounterAction(e);
                        var n = t._mentalGroup.isWarning;
                        t._mentalGroup.increase(e.value);
                        var r = t._mentalGroup.isWarning;
                        return n && !r && t.emit("leaveWarning"),
                        t._playPassiveReraiseEffect(a)
                    }
                    )
                }
            }, {
                key: "_playPassiveReraiseEffect",
                value: function(e) {
                    var t = this
                      , a = aoba.Sprite.new("reraise_frame_light.png").addTo(this._main, -116, -145, {
                        alpha: 0,
                        blendMode: aoba.BLEND_MODES.ADD
                    });
                    aoba.soundManager.playSE(x.default.showPassiveReraiseEffect),
                    aoba.FrameTween.new(a).to({
                        alpha: 1
                    }, 17).call(function() {
                        S.default.playParticle(w.default.passiveReraiseSkill.twinkle1, t._main, 0, 0, {
                            playAndDestroy: !0
                        }),
                        S.default.playParticle(w.default.passiveReraiseSkill.twinkle2, t._main, 0, 0, {
                            playAndDestroy: !0
                        })
                    }).to({
                        alpha: 0
                    }, 20).wait(20).call(function() {
                        a.destroy(),
                        e()
                    })
                }
            }, {
                key: "setGaugeValue",
                value: function(e) {
                    this._mentalGroup.setValue(e)
                }
            }, {
                key: "showRankingIcon",
                value: function(e) {
                    this._rankingIcon.texture = aoba.Texture.fromImage("concert_ranking_" + e + ".png"),
                    this._rankingIcon.addTo(this._main),
                    aoba.FrameTween.new(this._rankingIcon).to({
                        alpha: 1
                    }, 3)
                }
            }, {
                key: "hideRankingIcon",
                value: function() {
                    var e = this;
                    aoba.FrameTween.new(this._rankingIcon).to({
                        alpha: 0
                    }, 3).call(function() {
                        return e._rankingIcon.remove()
                    })
                }
            }, {
                key: "showAttackOrder",
                value: function(e) {
                    var t = this;
                    return this._order = e,
                    this._attackOrder.texture = aoba.Texture.fromImage("attack_order_" + e + ".png"),
                    this._attackOrder.addTo(this._main),
                    new Promise(function(e) {
                        return aoba.Tween.fromData(t._attackOrder, m.playerIdol.showAttackOrder).call(e)
                    }
                    )
                }
            }, {
                key: "showAttackResult",
                value: function(e) {
                    if (e.isUsedMemoryAppeal) {
                        var t = e.result;
                        e.result !== A.MISS && (t = A.GOOD),
                        this._attackResult.texture = aoba.Texture.fromImage(M[t] + ".png")
                    } else
                        this._attackResult.texture = aoba.Texture.fromImage(M[e.result] + ".png");
                    this._addRivalIcon(e),
                    this._attackResult.addTo(this),
                    aoba.Tween.fromData(this._attackResult, m.playerIdol.showAttackResult)
                }
            }, {
                key: "hideAttackResult",
                value: function() {
                    var e = this;
                    return aoba.FrameTween.new(this._attackResult).to({
                        alpha: 0
                    }, 7).call(function() {
                        e._attackResult.y = e._attackResultY,
                        e._attackResult.destroyChildren()
                    }).promise()
                }
            }, {
                key: "hideAttackOrder",
                value: function() {
                    var e = this;
                    return aoba.Tween.fromData(this._attackOrder, m.playerIdol.hideAttackOrder).call(function() {
                        e._attackOrder.remove(),
                        e._attackOrder.x = e._attackOrderX
                    }).promise()
                }
            }, {
                key: "addStatusEffect",
                value: function(e) {
                    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    this._statusList.push(e);
                    var a = aoba.Sprite.new(e.getStatusEffectIconImagePath());
                    this._statusEffectList.addIcon(a, e, t)
                }
            }, {
                key: "updateStatusEffectList",
                value: function(e) {
                    var t = this;
                    this._statusEffectList.deleteAllStatusEffect(),
                    e.forEach(function(e) {
                        return t.addStatusEffect(e, !1)
                    })
                }
            }, {
                key: "updateStatusEffectIcon",
                value: function() {
                    this._statusEffectList.updateStatusEffectIcon()
                }
            }, {
                key: "decreaseStatusEffectRemainTimes",
                value: function(e) {
                    this._statusEffectList.decreaseStatusEffectRemainTimes(e)
                }
            }, {
                key: "_removeStatusEffectListByCounterAction",
                value: function(e) {
                    var t = this
                      , a = this._statusList.filter(function(t) {
                        return t.effectId !== e.effectId
                    });
                    this._statusEffectList.deleteAllStatusEffect(),
                    this._statusList = [],
                    a.forEach(function(e) {
                        t.addStatusEffect(e, !1)
                    })
                }
            }, {
                key: "getCenterGlobalPosition",
                value: function() {
                    var e = this.getGlobalPosition();
                    return e.x -= this.width / 4,
                    e.y += this.height / 2,
                    e
                }
            }, {
                key: "_retire",
                value: function() {
                    var e = this._base.x + this._base.width / 2
                      , t = this._base.y + this._base.height / 2;
                    aoba.Graphics.new().beginFill(0).drawRoundedRect(0, 0, this._base.width, this._base.height, 4).addTo(this._main, e, t, {
                        pivot: .5,
                        alpha: 0
                    });
                    var a = this._addRetireOverlay();
                    this._addRetireText(),
                    aoba.FrameAnimation.new("images/ui/concert/effects/spark_impact_blue.png", 160, 160, {
                        fps: 30,
                        blendMode: aoba.BLEND_MODES.ADD
                    }).addTo(this._main, e, t, {
                        anchor: .5,
                        scale: 2
                    }).play(),
                    aoba.FrameAnimation.new("images/ui/concert/effects/mental_break.png", 125, 51, {
                        fps: 30,
                        blendMode: aoba.BLEND_MODES.ADD
                    }).addTo(this._main, e, t, {
                        anchor: .5,
                        scale: 2.8
                    }).play().on("end", function() {
                        aoba.FrameTween.new(a).to({
                            alpha: .7
                        }, 6)
                    })
                }
            }, {
                key: "_addRetireText",
                value: function() {
                    var e = this._base.x + this._base.width / 2
                      , t = this._base.y + this._base.height / 2;
                    aoba.Text.new(b.default.t("concert.playerIdol.retire"), {
                        fontSize: 32,
                        fontFamily: "HummingStd-E",
                        fill: 6692736,
                        stroke: 16777215,
                        strokeThickness: 12
                    }).addTo(this._main, e, t, {
                        anchor: .5
                    })
                }
            }, {
                key: "_addRetireOverlay",
                value: function() {
                    var e = this._base.x + this._base.width / 2
                      , t = this._base.y + this._base.height / 2;
                    return aoba.Graphics.new().beginFill(0).drawRoundedRect(0, 0, this._base.width, this._base.height, 4).addTo(this._main, e, t, {
                        pivot: .5,
                        alpha: 0
                    })
                }
            }, {
                key: "_addRivalIcon",
                value: function(e) {
                    var t = 2.6 * -this._attackResult.width
                      , a = null;
                    if (e.isUsedFastestAppeal ? a = aoba.Sprite.new("fast_icon.png") : e.isUsedSlowestAppeal && (a = aoba.Sprite.new("slow_icon.png")),
                    a && a.addTo(this._attackResult, t, 0, {
                        anchor: .5
                    }),
                    e.isUsedMemoryAppeal) {
                        var n = a ? t - 75 : t;
                        aoba.Sprite.new("memory_skill_icon.png").addTo(this._attackResult, n, 0, {
                            anchor: .5
                        })
                    }
                }
            }, {
                key: "id",
                get: function() {
                    return this._id
                }
            }, {
                key: "character",
                get: function() {
                    return this._character
                }
            }, {
                key: "isPlayer",
                get: function() {
                    return this._isPlayer
                }
            }, {
                key: "hp",
                get: function() {
                    return this._mentalGroup.value
                }
            }, {
                key: "order",
                get: function() {
                    return this._order
                }
            }, {
                key: "star",
                get: function() {
                    return this._star
                }
            }, {
                key: "isRetired",
                get: function() {
                    return this._mentalGroup.isRetired
                }
            }]),
            t
        }(aoba.Container);
        t.default = D
    },
    1615: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = {
            children: [{
                name: "base",
                fullName: "base",
                type: "sprite",
                key: null,
                x: 0,
                y: 0
            }, {
                name: "idolImage",
                fullName: "idolImage",
                type: "sprite",
                key: null,
                x: 152,
                y: 5
            }, {
                name: "concertStarIcon",
                fullName: "concertStarIcon",
                type: "sprite",
                key: "concert_star_icon.png",
                x: 10,
                y: 11
            }, {
                name: "starCount",
                fullName: "starCount",
                type: "container",
                x: 29,
                y: 9
            }, {
                name: "producerName",
                fullName: "producerName",
                type: "text",
                text: "こっしー…",
                style: {
                    fill: 16777215,
                    fontFamily: "UDKakugo_SmallPr6-B",
                    fontSize: 16
                },
                anchor: {
                    x: 0,
                    y: .5
                },
                rotation: 0,
                x: 83,
                y: 25
            }, {
                name: "mentalGroup",
                fullName: "mentalGroup",
                type: "container",
                x: 10,
                y: 40
            }, {
                name: "statusEffectList",
                fullName: "statusEffectList",
                type: "container",
                x: 166,
                y: 1
            }],
            name: "",
            fullName: "",
            type: "container",
            x: 884,
            y: 286
        }
    },
    1616: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = {
            children: [{
                name: "icon",
                fullName: "icon",
                type: "sprite",
                key: "icon_status_mental.png",
                x: 0,
                y: 0
            }, {
                name: "concertMentalGaugeBase",
                fullName: "concertMentalGaugeBase",
                type: "sprite",
                key: "concert_mental_gauge_base.png",
                x: 27,
                y: 3
            }, {
                name: "gauge",
                fullName: "gauge",
                type: "sprite",
                key: "concert_mental_gauge.png",
                x: 27,
                y: 3
            }, {
                name: "value",
                fullName: "value",
                anchor: {
                    x: 1,
                    y: .5
                },
                type: "text",
                text: "248/999",
                style: {
                    fill: 16777215,
                    fontFamily: "UDKakugo_SmallPr6-B",
                    fontSize: 16
                },
                rotation: 0,
                x: 158,
                y: 17
            }],
            name: "",
            fullName: "",
            type: "container",
            x: 894,
            y: 326
        }
    },
    1617: function(e, t, a) {
        "use strict";
        function n(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function r(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function i(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = function() {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, a, n) {
                return a && e(t.prototype, a),
                n && e(t, n),
                t
            }
        }()
          , l = a(1021)
          , s = function(e) {
            function t() {
                return n(this, t),
                r(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return i(t, e),
            o(t, [{
                key: "init",
                value: function(e) {
                    var t = this;
                    e.forEach(function(e) {
                        return t._addPlayerIdol(e)
                    })
                }
            }, {
                key: "hideAttackOrders",
                value: function() {
                    this.children.forEach(function(e) {
                        return e.hideAttackOrder()
                    })
                }
            }, {
                key: "showAttackResults",
                value: function(e) {
                    var t = this;
                    this._attackResultTweens = e.map(function(e) {
                        var a = t.children.find(function(t) {
                            return t.id === e.rivalId
                        });
                        return aoba.Tween.new(t).wait(3e3 * Math.random()).call(function() {
                            return a.showAttackResult(e)
                        })
                    })
                }
            }, {
                key: "showAllAttackResults",
                value: function() {
                    this._attackResultTweens.forEach(function(e) {
                        e.target && e.update(3e3)
                    }),
                    this._attackResultTweens = []
                }
            }, {
                key: "showRankingIcons",
                value: function() {
                    this.children.filter(function(e) {
                        return !e.isRetired
                    }).sort(function(e, t) {
                        return t.star - e.star
                    }).slice(0, 3).forEach(function(e, t) {
                        e.showRankingIcon(t + 1)
                    })
                }
            }, {
                key: "hideRankingIcons",
                value: function() {
                    this.children.forEach(function(e) {
                        e.hideRankingIcon()
                    })
                }
            }, {
                key: "hideAttackResults",
                value: function() {
                    return Promise.all(this.children.map(function(e) {
                        return e.hideAttackResult()
                    }))
                }
            }, {
                key: "resetAttackOrders",
                value: function() {
                    var e = this.children.length;
                    this.children.forEach(function(t) {
                        return t.resetOrder(e)
                    })
                }
            }, {
                key: "reorder",
                value: function() {
                    this.children.sort(function(e, t) {
                        return e.order - t.order
                    }),
                    this.children.forEach(function(e, t) {
                        aoba.Tween.new(e).to({
                            y: 72 * t
                        }, 165)
                    })
                }
            }, {
                key: "slideIn",
                value: function() {
                    var e = this;
                    return new Promise(function(t) {
                        return aoba.Tween.fromData(e, l.playerIdolList.slideIn).call(t)
                    }
                    )
                }
            }, {
                key: "slideDown",
                value: function() {
                    var e = this;
                    return new Promise(function(t) {
                        return aoba.Tween.fromData(e, l.playerIdolList.slideDown).call(t)
                    }
                    )
                }
            }, {
                key: "slideUp",
                value: function() {
                    var e = this;
                    return new Promise(function(t) {
                        return aoba.Tween.fromData(e, l.playerIdolList.slideUp).call(t)
                    }
                    )
                }
            }, {
                key: "findById",
                value: function(e) {
                    return this.children.find(function(t) {
                        return t.id === e
                    })
                }
            }, {
                key: "findMyIdol",
                value: function() {
                    return this.children.find(function(e) {
                        return e.isPlayer
                    })
                }
            }, {
                key: "findRivalOrMyIdol",
                value: function(e) {
                    return this.findById(e) || this.findMyIdol()
                }
            }, {
                key: "_addPlayerIdol",
                value: function(e) {
                    var t = this.children.length;
                    e.addTo(this, 0, 72 * t)
                }
            }]),
            t
        }(aoba.Container);
        t.default = s
    },
    1618: function(e, t, a) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function r(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function i(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function o(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = function() {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, a, n) {
                return a && e(t.prototype, a),
                n && e(t, n),
                t
            }
        }()
          , s = a(1619)
          , c = n(s)
          , u = a(1021)
          , f = a(9)
          , d = n(f)
          , p = {
            produceIdol: {
                x: 0,
                y: 140
            },
            supportIdols: [{
                x: -264,
                y: 100
            }, {
                x: -132,
                y: 120
            }, {
                x: 132,
                y: 120
            }, {
                x: 264,
                y: 100
            }]
        }
          , h = function(e) {
            function t(e) {
                r(this, t);
                var a = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return a.fromData(c.default, {
                    bg: e
                }),
                a._idols = aoba.Container.new().addTo(a),
                a._overlay = aoba.Graphics.new().beginFill(0).drawRect(0, 0, a.width, a.height).addTo(a, 0, 0, {
                    pivot: .5,
                    alpha: 0
                }),
                a.interactive = !0,
                a
            }
            return o(t, e),
            l(t, [{
                key: "showOverlay",
                value: function() {
                    aoba.Tween.fromData(this._overlay, u.stageLayer.showOverlay)
                }
            }, {
                key: "hideOverlay",
                value: function() {
                    aoba.Tween.fromData(this._overlay, u.stageLayer.hideOverlay)
                }
            }, {
                key: "setFinishAnimation",
                value: function() {
                    this._idols.children.forEach(function(e) {
                        return e.setAnimation(0, "win")
                    })
                }
            }, {
                key: "addIdol",
                value: function(e) {
                    var t = p.produceIdol;
                    d.default.Spine.new(e.getSpinePath("cb_costume")).addTo(this._idols, t.x, t.y).setSkin("normal").setAnimation(0, "live_startup_01")
                }
            }, {
                key: "addSupportIdols",
                value: function(e) {
                    var t = this;
                    e.forEach(function(e, a) {
                        var n = p.supportIdols[a];
                        d.default.Spine.new(e.getSpinePath("cb_costume")).addTo(t._idols, n.x, n.y).setSkin("normal").setAnimation(0, "live_startup_01")
                    })
                }
            }, {
                key: "startLive",
                value: function() {
                    this._idols.children.forEach(function(e, t) {
                        var a = t % 2 == 0 ? 0 : 120;
                        setTimeout(function() {
                            e.setAnimation(0, "setin"),
                            e.addAnimation(0, "live_dance_01", !0)
                        }, a)
                    })
                }
            }]),
            t
        }(aoba.Container);
        t.default = h
    },
    1619: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = {
            children: [{
                name: "bg",
                fullName: "bg",
                type: "sprite",
                key: "bg.jpg",
                x: -568,
                y: -320
            }, {
                name: "idols",
                fullName: "idols",
                type: "container",
                x: -320,
                y: -131
            }],
            name: "",
            fullName: "",
            pivot: {
                x: .5,
                y: .5
            },
            type: "container",
            x: 568,
            y: 320
        }
    },
    1620: function(e, t, a) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function r(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function i(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function o(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = function() {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, a, n) {
                return a && e(t.prototype, a),
                n && e(t, n),
                t
            }
        }()
          , s = a(1411)
          , c = n(s)
          , u = a(1412)
          , f = n(u)
          , d = a(1021)
          , p = function(e) {
            function t() {
                r(this, t);
                var e = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return e._current = null,
                e._next = null,
                e._switching = !1,
                e
            }
            return o(t, e),
            l(t, [{
                key: "switchContents",
                value: function(e) {
                    var t = this;
                    this._switching = !0;
                    var a = this._current ? new Promise(function(e) {
                        return t._slideOutContent().on("switch", e)
                    }
                    ) : Promise.resolve()
                      , n = [e]
                      , r = e.linkSkill;
                    return r && n.push(r),
                    a.then(function() {
                        return t._slideInContents(n)
                    })
                }
            }, {
                key: "hideContents",
                value: function() {
                    var e = this;
                    return new Promise(function(t) {
                        return e._slideOutContent().on("switch", t)
                    }
                    )
                }
            }, {
                key: "disappear",
                value: function() {
                    return this._switching && aoba.Tween.fromData(this._next, d.skillDetailList.disappear),
                    aoba.Tween.fromData(this._next || this._current, d.skillDetailList.disappear).promise()
                }
            }, {
                key: "_slideInContents",
                value: function(e) {
                    var t = this;
                    return this._showContents(e),
                    aoba.Tween.fromData(this._next, d.skillDetailList.slideIn).call(function() {
                        t._swap(),
                        t._switching = !1
                    }).promise()
                }
            }, {
                key: "_showContents",
                value: function(e) {
                    var t = this;
                    this._next = aoba.Container.new().addTo(this),
                    e.forEach(function(e, a) {
                        t._createSkillDetail(e).addTo(t._next, 295 * a, 0)
                    }),
                    this._next.setPivot(this._next.width / 2, this._next.height / 2)
                }
            }, {
                key: "_slideOutContent",
                value: function() {
                    return aoba.Tween.fromData(this._current, d.skillDetailList.slideOut)
                }
            }, {
                key: "_swap",
                value: function() {
                    this._current && this._current.destroy({
                        children: !0
                    }),
                    this._current = this._next
                }
            }, {
                key: "_createSkillDetail",
                value: function(e) {
                    return e.linkSkillCharacters ? f.default.new(e) : c.default.new(e)
                }
            }]),
            t
        }(aoba.Container);
        t.default = p
    },
    1621: function(e, t, a) {
        "use strict";
        function n(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function r(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function i(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = function() {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, a, n) {
                return a && e(t.prototype, a),
                n && e(t, n),
                t
            }
        }()
          , l = a(1622)
          , s = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(l)
          , c = a(1021)
          , u = function(e) {
            function t() {
                return n(this, t),
                r(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return i(t, e),
            o(t, [{
                key: "init",
                value: function(e) {
                    var t = this
                      , a = this.fromData(s.default, {
                        passiveSkillList: e.passiveSkillList,
                        skillHistoryList: e.skillHistoryList,
                        skillCardHand: e.skillCardHand,
                        memorySkillCard: e.memorySkillCard
                    })
                      , n = a.passiveSkillListBase;
                    n.interactive = !0,
                    n.on("tap", function() {
                        return t.emit("showPassiveSkillDetailList")
                    })
                }
            }, {
                key: "slideIn",
                value: function() {
                    var e = this
                      , t = this.y;
                    return this.y += this.height,
                    new Promise(function(a) {
                        return aoba.Tween.fromData(e, c.skillSelectLayer.slideIn({
                            y: t
                        })).call(a)
                    }
                    )
                }
            }, {
                key: "slideDown",
                value: function() {
                    var e = this;
                    return aoba.Tween.fromData(this, c.skillSelectLayer.slideDown).call(function() {
                        e.hide()
                    }).promise()
                }
            }, {
                key: "slideUp",
                value: function() {
                    return this.show(),
                    aoba.Tween.fromData(this, c.skillSelectLayer.slideUp).promise()
                }
            }]),
            t
        }(aoba.Container);
        t.default = u
    },
    1622: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = {
            children: [{
                name: "skillHistoryBase",
                fullName: "skillHistoryBase",
                type: "sprite",
                key: "skill_history_base.png",
                x: 0,
                y: 0
            }, {
                name: "passiveSkillListBase",
                fullName: "passiveSkillListBase",
                type: "sprite",
                key: "passive_skill_list_base.png",
                x: 1,
                y: 5
            }, {
                name: "passiveSkillList",
                fullName: "passiveSkillList",
                type: "container",
                x: 9,
                y: 10
            }, {
                name: "skillHistoryList",
                fullName: "skillHistoryList",
                type: "container",
                x: 55,
                y: 67
            }, {
                name: "skillCardHand",
                fullName: "skillCardHand",
                type: "container",
                x: 267,
                y: 31
            }],
            name: "",
            fullName: "",
            type: "container",
            x: 0,
            y: 512
        }
    },
    1623: function(e, t, a) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function r(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function i(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function o(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = function() {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, a, n) {
                return a && e(t.prototype, a),
                n && e(t, n),
                t
            }
        }()
          , s = a(1032)
          , c = n(s)
          , u = a(1413)
          , f = n(u)
          , d = function(e) {
            var t = aoba.Sprite.new("concert_light_circle.png").setProps({
                anchor: .5,
                scale: 0,
                blendMode: aoba.BLEND_MODES.ADD
            })
              , a = 2 * e.scale;
            return aoba.FrameTween.new(t).to({
                scaleX: .9 * a,
                scaleY: .9 * a
            }, 5).to({
                scaleX: a,
                scaleY: a
            }, 14),
            aoba.FrameTween.new(t).wait(10).to({
                alpha: 0
            }, 9).call(function() {
                t.destroy()
            }),
            t
        }
          , p = function() {
            var e = aoba.Sprite.new("memory_gauge_overlay.png").setProps({
                anchor: 1,
                scale: 3.6,
                alpha: .5,
                blendMode: aoba.BLEND_MODES.ADD
            });
            return aoba.FrameTween.new(e).to({
                alpha: .4
            }, 3).wait(8).to({
                alpha: 0
            }, 5),
            aoba.FrameTween.new(e).to({
                scaleX: 6.5,
                scaleY: 6.5
            }, 5).to({
                scaleX: 7.4,
                scaleY: 7.4
            }, 11).call(function() {
                e.destroy()
            }),
            e
        }
          , h = function() {
            var e = aoba.Sprite.new("memory_gauge_overlay.png").setProps({
                anchor: 1,
                scale: 1.3,
                alpha: 0,
                blendMode: aoba.BLEND_MODES.ADD
            });
            return aoba.FrameTween.new(e).to({
                alpha: .3
            }, 3).wait(8).to({
                alpha: 0
            }, 5).wait(2).loop(),
            aoba.FrameTween.new(e).to({
                scaleX: 4.22,
                scaleY: 4.22
            }, 5).to({
                scaleX: 5.12,
                scaleY: 5.12
            }, 11).wait(2).set({
                scaleX: 1.3,
                scaleY: 1.3
            }).loop(),
            e
        }
          , y = function(e) {
            function t(e) {
                r(this, t);
                var a = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return a._isFesMatch = e.isFesMatch,
                a._onSelect = function(t) {
                    e.onSelect(t.target)
                }
                ,
                a._blankOrder = null,
                a
            }
            return o(t, e),
            l(t, [{
                key: "init",
                value: function(e, t) {
                    var a = this
                      , n = e.reduce(function(e, t, n) {
                        var r = f.default.new(t, {
                            isPositionVisible: a._isFesMatch
                        });
                        return e.call(function() {
                            return a.addSkillCard(r, n)
                        }).wait(4)
                    }, aoba.FrameTween.new(this));
                    return this._memorySkillCard = t,
                    this._memorySkillCard.on("gaugeFull", this._createGaugeFullEffect, this),
                    this._memorySkillCard.on("gaugeNotFull", this._destroyGaugeFullEffect, this),
                    this._memorySkillCard.on("consume", this._destroyGaugeFullEffect, this),
                    n.call(function() {
                        return a.addMemorySkillCard(t)
                    }).wait(10).promise()
                }
            }, {
                key: "addSkillCard",
                value: function(e, t) {
                    var a = this;
                    return t = t || this._blankOrder,
                    e.addTo(this, 204 * t + e.width / 2, e.baseHeight / 2 + 86),
                    e.on("touchstart", this._onSelect, this),
                    e.on("removed", function() {
                        a._blankOrder = t
                    }),
                    this.children.sort(function(e, t) {
                        return e.x - t.x
                    }),
                    e.slideUp()
                }
            }, {
                key: "syncSkillCards",
                value: function(e) {
                    var t = this.currentSkills
                      , a = e.find(function(e) {
                        return !t.find(function(t) {
                            return t.skillId === e.id && t.idolId === e.idol.id
                        })
                    });
                    return a ? (aoba.soundManager.playSE(c.default.drawCard),
                    this.addSkillCard(f.default.new(a, {
                        isPositionVisible: this._isFesMatch
                    }))) : Promise.resolve()
                }
            }, {
                key: "addMemorySkillCard",
                value: function(e) {
                    e.addTo(this, 612 + e.width / 2, e.height / 8 + 118),
                    e.on("touchstart", this._onSelect, this),
                    e.slideUp()
                }
            }, {
                key: "updateLinkSkillState",
                value: function(e) {
                    var t = this;
                    e.forEach(function(e) {
                        var a = t.children.find(function(t) {
                            return t.skillId === e.id
                        });
                        a && a.updateLinkSkillState(e.enabledLinkSkill)
                    })
                }
            }, {
                key: "cancelCard",
                value: function(e) {
                    aoba.soundManager.playSE(c.default.selectCard),
                    e.cancel()
                }
            }, {
                key: "selectCard",
                value: function(e) {
                    aoba.soundManager.playSE(c.default.selectCard),
                    this.selectedCard && this.selectedCard.cancel(),
                    e.select()
                }
            }, {
                key: "_createGaugeFullEffect",
                value: function() {
                    this._memoryGaugeEffect && (this._memoryGaugeEffect.destroy({
                        children: !0
                    }),
                    this._memoryGaugeEffect = null);
                    var e = aoba.Container.new().addTo(this, this._memorySkillCard.x, this._memorySkillCard.y)
                      , t = this._memorySkillCard.skillGroupPosition;
                    d({
                        scale: 1.1
                    }).addTo(e, t.x, t.y);
                    var a = aoba.p(130, 64);
                    aoba.FrameTween.new(e).wait(2).call(function() {
                        d({
                            scale: 1.9
                        }).addTo(e, t.x, t.y),
                        p().addTo(e, a.x, a.y)
                    }),
                    aoba.FrameTween.new(e).wait(20).call(function() {
                        h().addTo(e, a.x, a.y)
                    }),
                    this._memoryGaugeEffect = e
                }
            }, {
                key: "_destroyGaugeFullEffect",
                value: function() {
                    var e = this;
                    this._memoryGaugeEffect && this._hideGaugeFullEffect().then(function() {
                        e._memoryGaugeEffect.destroy({
                            children: !0
                        }),
                        e._memoryGaugeEffect = null
                    })
                }
            }, {
                key: "_showGaugeFullEffect",
                value: function() {
                    return this._memoryGaugeEffect ? (this._memoryGaugeEffect.alpha = 0,
                    aoba.FrameTween.new(this._memoryGaugeEffect).to({
                        alpha: 1
                    }, 5).promise()) : Promise.resolve()
                }
            }, {
                key: "_hideGaugeFullEffect",
                value: function() {
                    return this._memoryGaugeEffect ? aoba.FrameTween.new(this._memoryGaugeEffect).to({
                        alpha: 0
                    }, 5).promise() : Promise.resolve()
                }
            }, {
                key: "selectedCard",
                get: function() {
                    return this.children.find(function(e) {
                        return e.selected
                    })
                }
            }, {
                key: "memorySkillCard",
                get: function() {
                    return this._memorySkillCard
                }
            }, {
                key: "currentSkills",
                get: function() {
                    return this.children.map(function(e) {
                        return {
                            skillId: e.skillId,
                            idolId: e.idolId
                        }
                    })
                }
            }]),
            t
        }(aoba.Container);
        t.default = y
    },
    1624: function(e, t, a) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function r(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function i(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function o(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = function() {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, a, n) {
                return a && e(t.prototype, a),
                n && e(t, n),
                t
            }
        }()
          , s = a(9)
          , c = n(s)
          , u = a(1022)
          , f = n(u)
          , d = function(e) {
            function t() {
                return r(this, t),
                i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return o(t, e),
            l(t, [{
                key: "initSkillHistories",
                value: function(e) {
                    var t = this;
                    e.slice(-5).forEach(function(e, a) {
                        var n = e.isMemoryAppeal ? .66 : 1
                          , r = aoba.Sprite.new(e.imagePaths.icon)
                          , i = 38 * a + r.width * n / 2
                          , o = r.height * n / 2;
                        r.characterId = e.idol.characterId,
                        r.addTo(t, i, o, {
                            scale: n,
                            anchor: .5
                        })
                    })
                }
            }, {
                key: "addSkillHistory",
                value: function(e) {
                    var t = this;
                    if (this.children.length >= 5) {
                        var a = this.children[0];
                        aoba.FrameTween.new(a).by({
                            x: -27,
                            y: 30,
                            alpha: -1
                        }, 10).call(function() {
                            return a.destroy()
                        }),
                        this.children.forEach(function(e) {
                            aoba.FrameTween.new(e).by({
                                x: -38
                            }, 10, "easeInOutQuart")
                        })
                    }
                    var n = Math.min(this.children.length, 4)
                      , r = e.isMemoryAppeal ? .66 : 1
                      , i = aoba.Sprite.new(e.imagePaths.icon)
                      , o = 38 * n + i.width * r / 2
                      , l = i.height * r / 2;
                    c.default.playParticle(f.default.flashSpark4, this, o, l, {
                        scale: .18,
                        playAndDestroy: !0
                    }),
                    aoba.FrameTween.new(this).wait(5).call(function() {
                        c.default.playParticle(f.default.flashLineRing, t, o, l, {
                            scale: .18,
                            playAndDestroy: !0
                        })
                    }),
                    i.characterId = e.idol.characterId,
                    i.addTo(this, o, l, {
                        scale: 0,
                        anchor: .5
                    }),
                    aoba.FrameTween.new(i).wait(3).to({
                        scaleX: 1.1 * r,
                        scaleY: 1.1 * r
                    }, 5, "easeInOutQuad").to({
                        scaleX: 1 * r,
                        scaleY: 1 * r
                    }, 11, "easeInOutQuad");
                    var s = aoba.Sprite.new(i.texture);
                    s.addTo(this, o, l, {
                        scale: 0,
                        anchor: .5,
                        blendMode: aoba.BLEND_MODES.ADD
                    }),
                    aoba.FrameTween.new(s).wait(3).to({
                        scaleX: 1.1 * r,
                        scaleY: 1.1 * r
                    }, 5, "easeInOutQuad").to({
                        scaleX: 1.5 * r,
                        scaleY: 1.5 * r
                    }, 11, "easeInOutQuad").call(function() {
                        s.destroy()
                    }),
                    aoba.FrameTween.new(s).wait(9).to({
                        alpha: 0
                    }, 10).call(function() {
                        s.destroy()
                    })
                }
            }, {
                key: "clearIconEffects",
                value: function() {
                    this._iconEffects && this._iconEffects.forEach(function(e) {
                        return e.destroy()
                    })
                }
            }, {
                key: "lightUp",
                value: function(e) {
                    var t = this;
                    this._iconEffects = [],
                    e.forEach(function(e) {
                        var a = t.children.find(function(t) {
                            return t.characterId === e.characterId
                        });
                        if (a) {
                            var n = aoba.Sprite.new(a.texture).addTo(a);
                            n.anchor.set(a.anchor.x, a.anchor.y),
                            n.blendMode = aoba.BLEND_MODES.ADD,
                            aoba.Tween.new(n).to({
                                alpha: 0,
                                scaleX: .9,
                                scaleY: .9
                            }, 900).to({
                                alpha: .8,
                                scaleX: 1,
                                scaleY: 1
                            }, 900).loop(),
                            t._iconEffects.push(n)
                        }
                    })
                }
            }]),
            t
        }(aoba.Container);
        t.default = d
    },
    1625: function(e, t, a) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function r(e) {
            if (Array.isArray(e)) {
                for (var t = 0, a = Array(e.length); t < e.length; t++)
                    a[t] = e[t];
                return a
            }
            return Array.from(e)
        }
        function i(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function o(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function l(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = function() {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, a, n) {
                return a && e(t.prototype, a),
                n && e(t, n),
                t
            }
        }()
          , c = a(1626)
          , u = n(c)
          , f = a(1021)
          , d = a(1627)
          , p = n(d)
          , h = a(1032)
          , y = n(h)
          , _ = 5
          , m = {
            normal: {
                order: 1,
                image: "text_timing_normal.png",
                se: "gaugeNormal",
                voice: "concert_meter_bad"
            },
            good: {
                order: 2,
                image: "text_timing_good.png",
                se: "gaugeGood",
                voice: "concert_meter_good"
            },
            perfect: {
                order: 3,
                image: "text_timing_perfect.png",
                se: "gaugePerfect",
                voice: "concert_meter_perfect"
            },
            miss: {
                order: 4,
                image: "text_timing_bad.png",
                se: "gaugeBad",
                voice: "concert_meter_miss"
            }
        }
          , g = [{
            category: "normal",
            criticalRate: .5,
            id: "",
            order: 1,
            share: 50,
            value: 1
        }, {
            category: "good",
            criticalRate: 1,
            id: "",
            order: 2,
            share: 30,
            value: 1.25
        }, {
            category: "perfect",
            criticalRate: 10,
            id: "",
            order: 3,
            share: 5,
            value: 1.5
        }, {
            category: "miss",
            criticalRate: 0,
            id: "",
            order: 4,
            share: 15,
            value: 0
        }]
          , b = function(e) {
            return g.map(function(t) {
                return t.originalData = e.find(function(e) {
                    return e.category === t.category
                }),
                t
            })
        }
          , v = function(e) {
            function t() {
                i(this, t);
                var e = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this))
                  , a = e.fromData(u.default, {})
                  , n = a.slider
                  , r = a.gauges;
                return e._slider = n,
                e._gauges = r,
                e._default = {
                    alpha: e.alpha,
                    slider: {
                        x: e._slider.x,
                        y: e._slider.y
                    }
                },
                e._slider.y = -1400,
                e._gaugeInnerWitdh = e._gauges.width - _,
                e
            }
            return l(t, e),
            s(t, [{
                key: "appear",
                value: function() {
                    return this.show(),
                    this._flare = this._createAndAddFlare(),
                    aoba.Tween.fromData(this, f.timingGaugeGroup.appearGauge).promise()
                }
            }, {
                key: "disappear",
                value: function() {
                    var e = this;
                    return aoba.Tween.fromData(this, f.timingGaugeGroup.disappear).call(function() {
                        e._reset()
                    }).promise()
                }
            }, {
                key: "playSlider",
                value: function(e) {
                    var t = this;
                    return this._appearSlider().then(function() {
                        t._gaugeSE = aoba.soundManager.playSE(y.default.gaugeStart, {
                            loop: !0
                        });
                        var a = 0
                          , n = t._gaugeInnerWitdh;
                        t._slider.update = function(r) {
                            var i = .32 * r * e;
                            a += i,
                            t._slider.x += i,
                            a >= n && (t._slider.x = t._default.slider.x,
                            a = 0)
                        }
                    })
                }
            }, {
                key: "stopSlider",
                value: function() {
                    var e = this
                      , t = this.stop();
                    return this._gaugeSE && (this._gaugeSE.stop(),
                    this._gaugeSE = null),
                    new Promise(function(a) {
                        e.showResult(t.category).then(function() {
                            return a(t)
                        })
                    }
                    )
                }
            }, {
                key: "stop",
                value: function() {
                    var e = this;
                    return delete this._slider.update,
                    aoba.FrameTween.new(this._slider).to({
                        scaleY: 2.08
                    }, 1).to({
                        scaleY: 1
                    }, 2, "easeInOutQuad"),
                    aoba.FrameTween.new(this._flare).to({
                        alpha: 1
                    }, 1).to({
                        alpha: 0,
                        scaleX: 2.71,
                        scaleY: 3.25
                    }, 14).call(function() {
                        return e._flare.destroy()
                    }),
                    this._getCurrentAppealMeter()
                }
            }, {
                key: "showResult",
                value: function(e) {
                    var t = this
                      , a = m[e];
                    return aoba.soundManager.playSE(y.default[a.se]),
                    this.emit("showResult", a.voice),
                    new Promise(function(a) {
                        (0,
                        p.default)(e).addTo(t, t._slider.x, 8).on("end", a)
                    }
                    )
                }
            }, {
                key: "findAppealMeterByCategory",
                value: function(e) {
                    return this._appealMeters.find(function(t) {
                        return t.category === e
                    })
                }
            }, {
                key: "stopOnPerfect",
                value: function() {
                    var e = this;
                    this.update = function() {
                        "perfect" === e._getCurrentAppealMeter().category && (delete e._slider.update,
                        delete e.update)
                    }
                }
            }, {
                key: "_appearSlider",
                value: function() {
                    var e = this;
                    return this._slider.scale.set(15, 13.2),
                    aoba.FrameTween.new(this._slider).to({
                        scaleX: 4.7,
                        scaleY: 20.9,
                        y: this._default.slider.y
                    }, 3, "easeInOutQuad").to({
                        scaleX: 1.8,
                        scaleY: 8.3
                    }, 4, "easeInOutQuad").to({
                        scaleX: 1,
                        scaleY: 1
                    }, 4, "easeInOutQuad").call(function() {
                        aoba.FrameAnimation.new("images/ui/concert/effects/timing_gauge_line.png", 130, 25, {
                            fps: 30
                        }).addTo(e, 0, 7, {
                            scale: 4,
                            anchor: .5,
                            blendMode: aoba.BLEND_MODES.ADD
                        }).play(),
                        e._flare.show()
                    }).wait(8).call(function() {
                        aoba.FrameTween.new(e._flare).to({
                            alpha: 0
                        }, 5)
                    }).promise()
                }
            }, {
                key: "_createAndAddFlare",
                value: function() {
                    return aoba.Sprite.new("timing_gauge_flare.png").addToAt(this, 0, 0, 0, {
                        scale: 2.34,
                        anchor: .5,
                        visible: !1
                    })
                }
            }, {
                key: "_getCurrentAppealMeter",
                value: function() {
                    var e = (this._slider.x - this._default.slider.x) / this._gaugeInnerWitdh * 100
                      , t = this._appealMeters
                      , a = 0
                      , n = !0
                      , r = !1
                      , i = void 0;
                    try {
                        for (var o, l = t[Symbol.iterator](); !(n = (o = l.next()).done); n = !0) {
                            var s = o.value;
                            if (a += s.share,
                            e < a)
                                return s
                        }
                    } catch (e) {
                        r = !0,
                        i = e
                    } finally {
                        try {
                            !n && l.return && l.return()
                        } finally {
                            if (r)
                                throw i
                        }
                    }
                    return t[t.length - 1]
                }
            }, {
                key: "_reset",
                value: function() {
                    this.hide(),
                    this.alpha = this._default.alpha,
                    this._slider.x = this._default.slider.x,
                    this._slider.y = -1400
                }
            }, {
                key: "setUpShare",
                value: function(e) {
                    var t = this;
                    e.forEach(function(e) {
                        e.order = m[e.category].order
                    }),
                    e.sort(function(e, t) {
                        return e.order - t.order
                    }),
                    this._appealMeters = e;
                    var a = this._gaugeInnerWitdh
                      , n = this._gauges.height;
                    [].concat(r(this._gauges.children)).reverse().forEach(function(e, r) {
                        var i = t._appealMeters.slice(0, r + 1).reduce(function(e, t) {
                            return e + t.share
                        }, 0);
                        e.mask && e.mask.remove();
                        var o = i < 100 ? _ / 2 : _;
                        e.mask = aoba.Graphics.new().beginFill(0).drawRect(0, 0, a * i / 100 + o, n).addTo(e)
                    })
                }
            }, {
                key: "switchShare",
                value: function() {
                    this.setUpShare(b(this._appealMeters))
                }
            }, {
                key: "appealMeters",
                get: function() {
                    return this._appealMeters
                }
            }]),
            t
        }(aoba.Container);
        t.default = v
    },
    1626: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = {
            children: [{
                name: "base",
                fullName: "base",
                anchor: {
                    x: .5,
                    y: .5
                },
                type: "sprite",
                key: "timing_gauge_base.png",
                x: 0,
                y: 0
            }, {
                children: [{
                    name: "gaugeMiss",
                    fullName: "gauges/gaugeMiss",
                    type: "sprite",
                    key: "gauge_miss.png",
                    x: 0,
                    y: 0
                }, {
                    name: "gaugePerfect",
                    fullName: "gauges/gaugePerfect",
                    type: "sprite",
                    key: "gauge_perfect.png",
                    x: 1,
                    y: 1
                }, {
                    name: "gaugeGood",
                    fullName: "gauges/gaugeGood",
                    type: "sprite",
                    key: "gauge_good.png",
                    x: 1,
                    y: 1
                }, {
                    name: "gaugeNormal",
                    fullName: "gauges/gaugeNormal",
                    type: "sprite",
                    key: "gauge_normal.png",
                    x: 1,
                    y: 1
                }],
                name: "gauges",
                fullName: "gauges",
                type: "container",
                x: -88,
                y: -9
            }, {
                name: "slider",
                fullName: "slider",
                anchor: {
                    x: .5,
                    y: .5
                },
                type: "sprite",
                key: "timing_gauge_slider.png",
                x: -85,
                y: 8
            }],
            name: "",
            fullName: "",
            visible: !1,
            pivot: {
                x: .5,
                y: .5
            },
            type: "container",
            x: 568,
            y: 439
        }
    },
    1627: function(e, t, a) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = a(9)
          , i = n(r)
          , o = a(1022)
          , l = n(o)
          , s = function(e) {
            return aoba.FrameTween.new(e).to({
                scaleY: 13.18
            }, 4).to({
                scaleY: 14.34,
                alpha: 0
            }, 4)
        }
          , c = function(e) {
            return aoba.FrameTween.new(e).to({
                scaleX: 1.25,
                scaleY: 1.25,
                y: -159
            }, 4).to({
                scaleX: 1.35,
                scaleY: 1.35,
                y: -181
            }, 19)
        }
          , u = function(e) {
            return aoba.FrameTween.new(e).to({
                scaleX: 1,
                scaleY: 1,
                y: -120
            }, 4).to({
                scaleX: 1.1,
                scaleY: 1.1,
                y: -136
            }, 19)
        }
          , f = {
            normal: {
                textImage: "text_timing_normal.png",
                textMaskImage: "text_timing_normal_mask.png",
                createTextTween: u,
                particle: l.default.timingNormal,
                fireworks: []
            },
            good: {
                textImage: "text_timing_good.png",
                textMaskImage: "text_timing_good_mask.png",
                createTextTween: u,
                particle: l.default.timingGood,
                fireworks: [null, {
                    image: "images/ui/concert/effects/fireworks_yellow.png",
                    x: 92,
                    y: -132
                }, null]
            },
            perfect: {
                textImage: "text_timing_perfect.png",
                textMaskImage: "text_timing_perfect_mask.png",
                createTextTween: c,
                particle: l.default.timingPerfect,
                fireworks: [{
                    image: "images/ui/concert/effects/fireworks_blue.png",
                    x: -129,
                    y: -179
                }, {
                    image: "images/ui/concert/effects/fireworks_yellow.png",
                    x: 0,
                    y: -215
                }, {
                    image: "images/ui/concert/effects/fireworks_green.png",
                    x: 129,
                    y: -179
                }]
            },
            miss: {
                textImage: "text_timing_bad.png",
                textMaskImage: null,
                createTextTween: u,
                particle: l.default.timingBad,
                fireworks: []
            }
        }
          , d = function(e) {
            var t = aoba.Container.new()
              , a = aoba.Container.new().addTo(t)
              , n = f[e]
              , r = aoba.Sprite.new("timing_gauge_slider.png").addTo(t, 0, 0, {
                anchor: .5
            })
              , o = aoba.Sprite.new(r.texture).addTo(t, 0, 0, {
                anchor: .5,
                rotation: 90 * aoba.DEG_TO_RAD
            });
            return s(r),
            s(o),
            aoba.FrameAnimation.new("images/ui/concert/effects/spark_impact_yellow.png", 120, 120, {
                fps: 30
            }).addTo(t, 0, 0, {
                anchor: .5,
                blendMode: aoba.BLEND_MODES.ADD,
                scale: 3.5
            }).play(),
            aoba.FrameTween.new(t).wait(1).call(function() {
                if (n.particle.center) {
                    var e = n === f.bad ? -91 : 0;
                    i.default.playParticle(n.particle.center, t, 0, e)
                }
            }).wait(1).call(function() {
                var e = i.default.playParticle(n.particle.top, t, 0, 0);
                aoba.FrameTween.new(e.container).wait(17).to({
                    alpha: 0
                }, 5)
            }).wait(1).call(function() {
                var e = aoba.Sprite.new(n.textImage).addTo(t, 0, 0, {
                    anchor: .5,
                    scale: 0
                });
                n.createTextTween(e),
                n.textMaskImage && (e.mask = aoba.Sprite.new(n.textMaskImage).addTo(t, 0, 0, {
                    anchor: .5,
                    scale: 0
                }),
                n.createTextTween(e.mask),
                i.default.commonUiHelper.createGlossEffect().addTo(e, 0, 0, {
                    scale: 2
                })),
                aoba.FrameTween.new(e).wait(6).call(function() {
                    t.emit("end")
                }).wait(11).to({
                    alpha: 0
                }, 6).call(function() {
                    return t.destroy({
                        children: !0
                    })
                })
            }),
            n.fireworks.reduce(function(e, t) {
                return t && e.call(function() {
                    aoba.FrameAnimation.new(t.image, 120, 120, {
                        fps: 30,
                        blendMode: aoba.BLEND_MODES.ADD
                    }).addTo(a, t.x, t.y, {
                        anchor: .5,
                        scale: 2
                    }).play()
                }),
                e.wait(2)
            }, aoba.FrameTween.new(t).wait(11)),
            t
        };
        t.default = d
    },
    1628: function(e, t, a) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function r(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function i(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function o(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = function() {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, a, n) {
                return a && e(t.prototype, a),
                n && e(t, n),
                t
            }
        }()
          , s = a(1629)
          , c = n(s)
          , u = a(9)
          , f = n(u)
          , d = a(1032)
          , p = n(d)
          , h = function(e) {
            function t(e) {
                r(this, t);
                var a = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return a._turn = e,
                a._turnValue = f.default.ImageLabel.new({
                    imagePrefix: "turn_number_",
                    zeroPaddingNumber: 0,
                    originX: .5
                }).setNum(a._turn),
                a.fromData(c.default, {
                    turnValue: a._turnValue
                }),
                a.hide(),
                a
            }
            return o(t, e),
            l(t, [{
                key: "slideIn",
                value: function() {
                    var e = this;
                    return this.show(),
                    new Promise(function(t) {
                        return aoba.Tween.fromData(e, [{
                            type: "set",
                            props: {
                                x: e.x - e.width
                            }
                        }, {
                            type: "by",
                            props: {
                                x: e.width
                            },
                            frame: 10,
                            easing: "easeOutQuart"
                        }]).call(t)
                    }
                    )
                }
            }, {
                key: "updateTurn",
                value: function() {
                    return this._turn++,
                    this._turnValue.setNum(this._turn),
                    aoba.soundManager.playSE(p.default.turnStart),
                    Promise.resolve()
                }
            }]),
            t
        }(aoba.Container);
        t.default = h
    },
    1629: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = {
            children: [{
                name: "concertTurnBase",
                fullName: "concertTurnBase",
                type: "sprite",
                key: "concert_turn_base.png",
                x: 0,
                y: 0
            }, {
                name: "turnValue",
                fullName: "turnValue",
                pivot: {
                    x: .5,
                    y: .5
                },
                type: "container",
                x: 122,
                y: 23
            }],
            name: "",
            fullName: "",
            type: "container",
            x: 0,
            y: 0
        }
    },
    1630: function(e, t, a) {
        "use strict";
        function n(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function r(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function i(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = function() {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, a, n) {
                return a && e(t.prototype, a),
                n && e(t, n),
                t
            }
        }()
          , l = function(e) {
            function t(e) {
                n(this, t);
                var a = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return a.blendMode = aoba.BLEND_MODES.ADD,
                a.alpha = 0,
                a.width = aoba.game.width,
                a.height = aoba.game.height,
                a
            }
            return i(t, e),
            o(t, [{
                key: "playAndAddTo",
                value: function(e) {
                    this.play(),
                    this.addTo(e)
                }
            }, {
                key: "play",
                value: function() {
                    this._warinigTween = aoba.FrameTween.new(this).to({
                        alpha: 1
                    }, 16).to({
                        alpha: 0
                    }, 16).loop()
                }
            }, {
                key: "stopAndRemove",
                value: function() {
                    var e = this;
                    this._warinigTween.remove(),
                    aoba.FrameTween.new(this).to({
                        alpha: 0
                    }, 16).call(function() {
                        return e.remove()
                    })
                }
            }]),
            t
        }(aoba.Sprite);
        t.default = l
    },
    1631: function(e, t, a) {
        "use strict";
        function n(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = function() {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, a, n) {
                return a && e(t.prototype, a),
                n && e(t, n),
                t
            }
        }()
          , i = 1
          , o = "concertSpeed"
          , l = function() {
            function e() {
                n(this, e);
                var t = localStorage.getItem(o);
                this._speed = t ? parseInt(t, 10) : i,
                this._setSpeed(i, this._speed)
            }
            return r(e, [{
                key: "change",
                value: function(e) {
                    var t = this._speed;
                    this._speed = e;
                    var a = this._speed;
                    this._setSpeed(t, a),
                    localStorage.setItem(o, a)
                }
            }, {
                key: "reset",
                value: function() {
                    var e = this._speed;
                    this._speed = i;
                    var t = this._speed;
                    this._setSpeed(e, t)
                }
            }, {
                key: "_setSpeed",
                value: function(e, t) {
                    var a = aoba.game._update.bind(aoba.game);
                    aoba.game._update = function(n) {
                        a(n * t / e)
                    }
                }
            }, {
                key: "speed",
                get: function() {
                    return this._speed
                }
            }]),
            e
        }();
        t.default = l
    },
    1632: function(e, t, a) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function r(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function i(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function o(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = function() {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, a, n) {
                return a && e(t.prototype, a),
                n && e(t, n),
                t
            }
        }()
          , s = a(1032)
          , c = n(s)
          , u = a(1022)
          , f = n(u)
          , d = a(9)
          , p = n(d)
          , h = {
            NAME: {
                fill: 16777215,
                fontFamily: "HummingStd-E",
                fontSize: 24,
                stroke: 16471329,
                strokeThickness: 8
            },
            COMMENT: {
                fill: 5329760,
                fontFamily: "HummingStd-E",
                fontSize: 20,
                stroke: 16777215,
                strokeThickness: 8
            }
        }
          , y = function(e) {
            function t(e, a, n) {
                r(this, t);
                var o = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return aoba.Text.new(n.name, h.NAME).addTo(o, 0, -24, {
                    anchor: .5
                }),
                aoba.Text.new(n.comment, h.COMMENT).addTo(o, 0, 20, {
                    anchor: .5
                }),
                aoba.Sprite.new(a).addTo(o, -320, 0, {
                    anchor: .5
                }),
                o
            }
            return o(t, e),
            l(t, [{
                key: "slideIn",
                value: function() {
                    return this.x += 51.5,
                    aoba.FrameTween.new(this).by({
                        x: -80
                    }, 5).by({
                        x: -23
                    }, 18).promise()
                }
            }]),
            t
        }(aoba.Sprite)
          , _ = function(e) {
            function t(e, a) {
                r(this, t);
                var n = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                n._particleContainer = aoba.Container.new().addTo(n);
                var o = aoba.Sprite.new("passive_skill_base_boke.png");
                return o.setProps({
                    anchor: .5,
                    scale: aoba.p(3.65, 2.12),
                    blendMode: aoba.BLEND_MODES.ADD
                }),
                o.addTo(n, o.width / 2, 0),
                n._band = y.new("passive_skill_base_normal.png", e, a),
                n._band.addTo(n, o.width / 2 - 40, 0, {
                    anchor: .5
                }),
                n.alpha = 0,
                n
            }
            return o(t, e),
            l(t, [{
                key: "play",
                value: function() {
                    var e = this;
                    return aoba.soundManager.playSE(c.default.passiveSkill),
                    this._band.slideIn(),
                    aoba.FrameTween.new(this).to({
                        alpha: 1
                    }, 3).call(function() {
                        p.default.playParticle(f.default.flashLine1, e._particleContainer, 0, -60, {
                            startTime: 400
                        })
                    }).wait(17).to({
                        alpha: .7
                    }, 1).to({
                        alpha: 0
                    }, 2).promise()
                }
            }]),
            t
        }(aoba.Container);
        t.default = _
    },
    1633: function(e, t, a) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function r(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function i(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function o(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = function() {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, a, n) {
                return a && e(t.prototype, a),
                n && e(t, n),
                t
            }
        }()
          , s = function e(t, a, n) {
            null === t && (t = Function.prototype);
            var r = Object.getOwnPropertyDescriptor(t, a);
            if (void 0 === r) {
                var i = Object.getPrototypeOf(t);
                return null === i ? void 0 : e(i, a, n)
            }
            if ("value"in r)
                return r.value;
            var o = r.get;
            if (void 0 !== o)
                return o.call(n)
        }
          , c = a(1032)
          , u = n(c)
          , f = a(1022)
          , d = n(f)
          , p = a(9)
          , h = n(p)
          , y = 1.43
          , _ = {
            NAME: {
                fill: 16777215,
                fontFamily: "HummingStd-E",
                fontSize: 28,
                stroke: 5654937,
                strokeThickness: 8
            },
            COMMENT: {
                fill: 5329760,
                fontFamily: "HummingStd-E",
                fontSize: 18,
                lineHeight: 28,
                stroke: 16777215,
                strokeThickness: 8,
                wordWrap: !0,
                wordWrapWidth: 410,
                breakWords: !0
            }
        }
          , m = function(e) {
            function t(e, a) {
                r(this, t);
                var n = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return n._particleContainer = aoba.Container.new().addTo(n),
                n._bg = aoba.Sprite.new("passive_skill_base_special.png"),
                n._bg.addTo(n, 0, n._bg.height / 2 + 20, {
                    scale: y,
                    anchor: aoba.p(0, .5)
                }),
                aoba.Text.new(a.name, _.NAME).addTo(n._bg, 536, -12, {
                    anchor: aoba.p(.5, 0),
                    scale: 1 / y
                }),
                aoba.Text.new(a.comment, _.COMMENT).addTo(n._bg, 536, 18, {
                    anchor: aoba.p(.5, 0),
                    scale: 1 / y
                }),
                n._idolSpine = h.default.Spine.new(e),
                n._idolSpine.addTo(n, 320, 360),
                n._idolSpine.play("skill3"),
                n._bg.scale.y = 0,
                n._bg.alpha = 0,
                n._idolSpine.scale.y = 0,
                n._idolSpine.alpha = 0,
                n.on("added", function() {
                    n._idolSpine.mask = aoba.Graphics.new().beginFill(0).drawPolygon([0, 0, 1136, 0, 1136, 552, 0, 582])
                }),
                n.on("removed", function() {
                    n._idolSpine.mask = null
                }),
                n
            }
            return o(t, e),
            l(t, [{
                key: "ezgPreDestroy",
                value: function() {
                    this._idolSpine.remove(),
                    s(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "ezgPreDestroy", this).call(this)
                }
            }, {
                key: "play",
                value: function() {
                    var e = this;
                    aoba.soundManager.playSE(u.default.passiveSkill);
                    var t = aoba.Sprite.new("flash_light_ssr_01.png").addTo(this, 0, this._bg.y - 52, {
                        anchor: aoba.p(.5, 0),
                        blendMode: aoba.BLEND_MODES.SCREEN
                    });
                    return new Promise(function(a) {
                        aoba.FrameTween.new(t).to({
                            scaleX: 29.7
                        }, 5).call(function() {
                            aoba.FrameTween.new(e._bg).wait(1).to({
                                scaleY: y,
                                alpha: 1
                            }, 8).call(function() {
                                h.default.playParticle(d.default.flashLine2, e._particleContainer, 0, 136, {
                                    startTime: 400
                                })
                            }).to({
                                scaleY: 1.02 * y
                            }, 28),
                            aoba.FrameTween.new(e._idolSpine).wait(1).to({
                                scaleY: 1,
                                alpha: 1
                            }, 8).to({
                                scaleY: 1.02
                            }, 28),
                            aoba.FrameTween.new(e._particleContainer).wait(26).to({
                                alpha: 0
                            }, 6),
                            aoba.FrameTween.new(e).wait(32).to({
                                alpha: 0
                            }, 6).call(function() {
                                return a(e)
                            })
                        }).to({
                            scaleX: 30.7,
                            alpha: 0
                        }, 5)
                    }
                    )
                }
            }]),
            t
        }(aoba.Container);
        t.default = m
    },
    1634: function(e, t, a) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.createAndPlayAppealStartEffect = void 0;
        var r = a(93)
          , i = n(r)
          , o = a(9)
          , l = n(o)
          , s = a(1022)
          , c = n(s)
          , u = a(1032)
          , f = n(u)
          , d = t.createAndPlayAppealStartEffect = function() {
            var e = aoba.Container.new();
            aoba.soundManager.playSE(f.default.appealStart),
            l.default.createDialogOverlay(.5).addTo(e);
            var t = aoba.Container.new();
            l.default.playParticle(c.default.stageFlash013, t, 280, 0);
            var a = aoba.FrameAnimation.new("images/ui/concert/effects/fireworks_blue.png", 120, 120, {
                fps: 30,
                blendMode: aoba.BLEND_MODES.ADD
            });
            a.setProps({
                anchor: .5,
                scale: 8
            }),
            a.play();
            var n = new PIXI.AEDataInterceptor({
                "FlashLight_SSR_g.png": {
                    blendMode: aoba.BLEND_MODES.SCREEN
                },
                "FlashLight_SSR_o.png": {
                    blendMode: aoba.BLEND_MODES.SCREEN
                },
                "FlashLight_SSR_p.png": {
                    blendMode: aoba.BLEND_MODES.SCREEN
                },
                "FlashLight_SSR_b.png": {
                    blendMode: aoba.BLEND_MODES.SCREEN
                },
                spot_light_result_r: {
                    blendMode: aoba.BLEND_MODES.ADD
                }
            });
            return (0,
            i.default)({
                folderPath: "concert/appeal_start",
                interceptor: n
            }).then(function(n) {
                e.addChild(n),
                t.addTo(n.find("stage_flash_01_3")[0]);
                var r = n.find("text_appeal_1.png")[0]
                  , i = n.find("text_start_1.png")[0];
                r.mask = aoba.Sprite.new("text_appeal_mask.png").addTo(r),
                i.mask = aoba.Sprite.new("text_start_mask.png").addTo(i);
                var o = void 0
                  , s = void 0;
                aoba.FrameTween.new(e).wait(14).call(function() {
                    a.addTo(n.find("fireworks_blue")[0], 500, 500),
                    o = l.default.commonUiHelper.createGlossEffect().addTo(r, 0, 0)
                }).wait(3).call(function() {
                    s = l.default.commonUiHelper.createGlossEffect().addTo(i, 0, 0)
                }),
                n.play(),
                n.on("completed", function() {
                    t.destroy({
                        children: !0
                    }),
                    a.destroy({
                        children: !0
                    }),
                    r.mask.destroy(),
                    i.mask.destroy(),
                    o && o.destroy({
                        children: !0
                    }),
                    s && s.destroy({
                        children: !0
                    }),
                    n.destroy(!0),
                    e.emit("end", e),
                    e.destroy({
                        children: !0
                    })
                }),
                e.ezgUpdate = function(e) {
                    a && a.parent && a.ezgUpdate(e)
                }
            }),
            e
        }
        ;
        t.default = d
    },
    1635: function(e, t, a) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.createAndPlayReadyEffect = void 0;
        var r = a(9)
          , i = n(r)
          , o = a(93)
          , l = n(o)
          , s = t.createAndPlayReadyEffect = function() {
            var e = aoba.Container.new();
            return (0,
            l.default)({
                folderPath: "concert/ready"
            }).then(function(t) {
                e.addChild(t),
                t.play();
                var a = t.find("txt")[0];
                a.mask = aoba.Sprite.new("text_ready_mask.png").addTo(a);
                var n = void 0;
                aoba.FrameTween.new(e).wait(4).call(function() {
                    n = i.default.commonUiHelper.createGlossEffect().addTo(a, 0, 0)
                }),
                t.on("completed", function() {
                    a.mask.destroy(),
                    n && n.destroy({
                        children: !0
                    }),
                    t.destroy(!0),
                    e.emit("end", e),
                    e.destroy({
                        children: !0
                    })
                })
            }),
            e
        }
        ;
        t.default = s
    },
    1636: function(e, t, a) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = a(2)
          , i = n(r)
          , o = a(9)
          , l = n(o)
          , s = a(1022)
          , c = n(s)
          , u = a(93)
          , f = n(u)
          , d = a(1032)
          , p = n(d)
          , h = i.default.SCREEN_WIDTH
          , y = i.default.SCREEN_HEIGHT
          , _ = function(e) {
            var t = aoba.Container.new()
              , a = l.default.graphics.rect(h, y, {
                fill: 65571
            });
            return a.alpha = 0,
            aoba.FrameTween.new(t).call(function() {
                a.addTo(t),
                aoba.FrameTween.new(a).to({
                    alpha: .7
                }, 28)
            }).wait(22).call(function() {
                aoba.soundManager.playSE(p.default.audienceVoice),
                aoba.soundManager.playSE(p.default.idolRetire);
                var a = aoba.Container.new().addTo(t);
                a.alpha = 0,
                l.default.playParticle(c.default.retireAura, a, 640, 40),
                e.addTo(a, 840, 640),
                e.play("sad2"),
                aoba.FrameTween.createFadeIn(a, 5)
            }).wait(5).call(function() {
                t.emit("middle", t),
                (0,
                f.default)({
                    folderPath: "concert/audition_failure"
                }).then(function(e) {
                    t.addChild(e),
                    e.position.set(478, 310),
                    e.pivot.set(e.width / 2, e.height / 2),
                    e.play(),
                    e.on("completed", function() {
                        e.destroy(!0)
                    })
                })
            }).wait(55).call(function() {
                var e = l.default.graphics.rect(h, y, {
                    fill: 0
                }).addTo(t);
                e.alpha = 0,
                aoba.FrameTween.createFadeIn(e, 20).call(function() {
                    return t.emit("end", t)
                })
            }),
            t
        };
        t.default = _
    },
    1637: function(e, t, a) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function r(e) {
            if (Array.isArray(e)) {
                for (var t = 0, a = Array(e.length); t < e.length; t++)
                    a[t] = e[t];
                return a
            }
            return Array.from(e)
        }
        function i(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function o(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function l(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = function() {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, a, n) {
                return a && e(t.prototype, a),
                n && e(t, n),
                t
            }
        }()
          , c = a(2)
          , u = n(c)
          , f = a(9)
          , d = n(f)
          , p = a(4)
          , h = n(p)
          , y = a(1638)
          , _ = n(y)
          , m = a(1639)
          , g = n(m)
          , b = a(1640)
          , v = n(b)
          , w = a(1641)
          , k = n(w)
          , S = a(1642)
          , E = n(S)
          , T = a(1643)
          , O = n(T)
          , x = a(1644)
          , P = n(x)
          , I = a(1645)
          , M = n(I)
          , A = a(1410)
          , j = n(A)
          , C = a(79)
          , D = n(C)
          , R = a(357)
          , L = n(R)
          , F = a(1413)
          , N = n(F)
          , B = a(1408)
          , G = n(B)
          , U = a(1411)
          , Y = n(U)
          , X = a(1412)
          , W = n(X)
          , V = a(1646)
          , H = n(V)
          , Q = a(31)
          , J = n(Q)
          , z = a(90)
          , K = n(z)
          , q = a(91)
          , $ = n(q)
          , Z = u.default.asset.PARAMETER_ICONS
          , ee = function(e, t) {
            var a = aoba.Container.new();
            return a.fromData(E.default, {
                icon: {
                    key: e
                },
                line: {
                    instance: d.default.dotLine.create({
                        type: d.default.dotLine.types.DOT_BLACK,
                        width: 102
                    }),
                    dx: 1
                },
                value: {
                    text: t
                }
            }),
            a
        }
          , te = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , a = aoba.Container.new()
              , n = t.isHalf ? 429 : 858;
            return a.fromData(M.default, {
                base: {
                    fill: 10260384,
                    width: n
                },
                text: {
                    text: e,
                    dy: 2
                }
            }),
            a
        }
          , ae = function(e, t) {
            return e.reduce(function(e, a, n) {
                var r = N.default.new(a);
                return r.addTo(e, r.width / 2 + 220 * n, r.baseHeight / 2 - 12),
                r.on("tap", function() {
                    t(a, r.getGlobalPosition())
                }),
                e
            }, aoba.Container.new())
        }
          , ne = function(e, t, a) {
            var n = aoba.Container.new();
            return n.fromData(P.default, {
                title: te(e),
                skillCardList: ae(t, a)
            }),
            n
        }
          , re = function(e, t, a) {
            var n = aoba.Container.new();
            return n.fromData(P.default, {
                title: te(e, {
                    isHalf: !0
                }),
                skillCardList: ae(t, a)
            }),
            n
        }
          , ie = function(e) {
            return e.linkSkillCharacters ? W.default.new(e, !0) : Y.default.new(e)
        }
          , oe = function(e, t) {
            var a = Object.assign({}, e.memoryAppeal, {
                memoryAppealPoint: t
            }, e)
              , n = G.default.create(a, e, !0);
            return n.pivot.set(-n.width / 2, -n.height / 2),
            e.memoryAppeal.level >= 1 && n.updateAvailability(!0),
            n.interactive = !0,
            n.on("tap", function() {
                n.emit("tapMemorySkillCard", a)
            }),
            n
        }
          , le = {
            STATUS_EFFECT: "StatusEffect",
            SKILL: "Skill"
        }
          , se = {
            EVEN: 16777215,
            ODD: 16053236
        }
          , ce = function(e) {
            function t(e) {
                i(this, t);
                var a = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                a._params = e;
                var n = e.centerIdol
                  , r = e.mental
                  , l = a.fromData(_.default, {
                    overlay: (0,
                    D.default)(),
                    popStretchWhite970x573: d.default.StretchSprite.new("pop_stretch_white.png", {
                        left: 28,
                        top: 28,
                        right: 28,
                        bottom: 28,
                        width: 970,
                        height: 573
                    }),
                    popStretchInnerBase930x395: d.default.StretchSprite.new("pop_stretch_inner_base.png", {
                        left: 10,
                        top: 10,
                        right: 10,
                        bottom: 10,
                        width: 930,
                        height: 395
                    }),
                    centerIdol: a._createCenterIdolLayoutContainer(n, r),
                    tab: a._createTab(),
                    resumeButton: {
                        class: d.default.DecideButton,
                        dy: -5
                    },
                    tipsButton: {
                        class: d.default.DecideButton,
                        dx: -5,
                        dy: -5
                    }
                })
                  , s = l.overlay
                  , c = l.list
                  , f = l.scrollBar
                  , p = l.resumeButton
                  , h = l.tipsButton
                  , y = l.popStretchInnerBase930x395;
                p.once("tap", function() {
                    a.destroy({
                        children: !0
                    })
                }),
                d.default.backKeyEventManager.addHandler(p),
                h.on("tap", function() {
                    L.default.loadAndAddTo(u.default.tips.concert, a)
                }),
                a._overlay = s,
                a._tabContent = aoba.Container.new(),
                a._tabContentAreaWidth = y.width - 4,
                a._tabContentAreaHeight = y.height - 4;
                var m = d.default.commonUiHelper.createScrollBarBase({
                    width: 8,
                    height: 383
                });
                return a._scrollRect = K.default.new({
                    width: a._tabContentAreaWidth,
                    height: a._tabContentAreaHeight,
                    container: a._tabContent,
                    scrollBar: $.default.new({
                        width: 14
                    }),
                    scrollBarBase: m,
                    round: 10
                }).addTo(c, 2, 2),
                m.addTo(f, 0, 0),
                a._skillDetailContainer = aoba.Container.new().addTo(a),
                a._lastTapSkill = null,
                a._selectTab(le.STATUS_EFFECT),
                a
            }
            return l(t, e),
            s(t, [{
                key: "_showSkillDetailPanel",
                value: function(e, t) {
                    var a = this
                      , n = [e]
                      , r = e.linkSkill;
                    r && n.push(r),
                    this._hideSkillDetailPanel(),
                    n.forEach(function(e, t) {
                        var n = ie(e);
                        n.addTo(a._skillDetailContainer, 290 * t, 0),
                        n.visible = !0,
                        n.addTo(a._skillDetailContainer)
                    }),
                    this._skillDetailContainer.setPivot(this._skillDetailContainer.width / 2, this._skillDetailContainer.height / 2);
                    var i = t.y < 200 ? 190 : -120
                      , o = 0;
                    r && (t.x < 233 ? o = 59 : t.x > 892 && (o = -49)),
                    this._skillDetailContainer.setPosition(t.x + o, t.y + i, 0),
                    this._lastTapSkill = e
                }
            }, {
                key: "_hideSkillDetailPanel",
                value: function() {
                    this._skillDetailContainer.destroy({
                        children: !0
                    }),
                    this._skillDetailContainer = aoba.Container.new().addTo(this),
                    this._lastTapSkill = null
                }
            }, {
                key: "_onTapSkillCard",
                value: function(e, t) {
                    this._isLastTapSkill(e) ? this._hideSkillDetailPanel() : this._showSkillDetailPanel(e, t)
                }
            }, {
                key: "_isLastTapSkill",
                value: function(e) {
                    return this._lastTapSkill === e
                }
            }, {
                key: "_createCenterIdolLayoutContainer",
                value: function(e, t) {
                    var a = aoba.Container.new();
                    return a.fromData(k.default, {
                        mental: j.default.new(t, e.displayParams.mental),
                        vocal: ee(Z.vocal, e.displayParams.vocal),
                        dance: ee(Z.dance, e.displayParams.dance),
                        visual: ee(Z.visual, e.displayParams.visual)
                    }),
                    a
                }
            }, {
                key: "_createTab",
                value: function() {
                    var e = this
                      , t = aoba.Container.new()
                      , a = t.fromData(O.default);
                    return this._tabs = {},
                    Object.values(le).forEach(function(t) {
                        e._tabs[t] = {
                            on: a["tab" + t + "On"],
                            off: a["tab" + t + "Off"]
                        },
                        e._tabs[t].on.interactive = !0,
                        e._tabs[t].off.interactive = !0,
                        e._tabs[t].off.on("tap", function() {
                            aoba.soundManager.playSE(J.default.ui.select),
                            e._selectTab(t)
                        })
                    }),
                    t
                }
            }, {
                key: "_selectTab",
                value: function(e) {
                    var t = this;
                    if (this._selectedTabId !== e)
                        switch (this._selectedTabId = e,
                        Object.keys(this._tabs).forEach(function(a) {
                            t._tabs[a].on.visible = e === a
                        }),
                        this._hideSkillDetailPanel(),
                        this._selectedTabId) {
                        case le.STATUS_EFFECT:
                            this._showStatusEffectTab();
                            break;
                        case le.SKILL:
                            this._showSkillTab();
                            break;
                        default:
                            throw new Error("invalid tabId. " + e)
                        }
                }
            }, {
                key: "_showStatusEffectTab",
                value: function() {
                    this._tabContent.removeChildren(),
                    this._getOrCreateStatusEffectTab().addTo(this._tabContent, 0, 0),
                    this._scrollRect.updateScrollBarTransform()
                }
            }, {
                key: "_getOrCreateStatusEffectTab",
                value: function() {
                    var e = this;
                    return this._statusEffectTab ? this._statusEffectTab : (this._statusEffectTab = aoba.Container.new(),
                    this._params.statusEffects && 0 !== this._params.statusEffects.length ? this._params.statusEffects.forEach(function(t, a) {
                        var n = Math.floor(a / 2)
                          , r = a % 2;
                        H.default.new(t, (n + r) % 2 == 0 ? se.EVEN : se.ODD).addTo(e._statusEffectTab, 455 * r, 100 * n)
                    }) : aoba.Text.new(h.default.t("concert.statusEffect.noStatusEffectMessage"), {
                        fill: 6378341,
                        fontFamily: "HummingStd-E",
                        fontSize: 28,
                        align: "center"
                    }).addTo(this._statusEffectTab, this._tabContentAreaWidth / 2, this._tabContentAreaHeight / 2, {
                        anchor: .5
                    }),
                    this._statusEffectTab)
                }
            }, {
                key: "_showSkillTab",
                value: function() {
                    this._tabContent.removeChildren(),
                    this._getOrCreateSkillTab().addTo(this._tabContent, 0, 0),
                    this._scrollRect.updateScrollBarTransform()
                }
            }, {
                key: "_getOrCreateSkillTab",
                value: function() {}
            }]),
            t
        }(aoba.Container)
          , ue = function(e) {
            function t() {
                return i(this, t),
                o(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return l(t, e),
            s(t, [{
                key: "_getOrCreateSkillTab",
                value: function() {
                    var e = this;
                    if (this._skillTab)
                        return this._skillTab;
                    var t = this._params
                      , a = t.idols
                      , n = t.centerIdol
                      , r = t.memoryAppealPoint
                      , i = a.filter(function(e) {
                        return !e.isCenter
                    })
                      , o = i.map(function(e) {
                        return e.activeSkill
                    })
                      , l = h.default.t("concert.pauseDialog.produceSkill")
                      , s = h.default.t("concert.pauseDialog.supportSkill");
                    this._skillTab = aoba.Container.new();
                    var c = this._skillTab.fromData(g.default, {
                        memorySkillCard: oe(n, r),
                        produceIdolSkillContainer: ne(l, n.activeSkills, this._onTapSkillCard.bind(this)),
                        supportIdolSkillContainer: ne(s, o, this._onTapSkillCard.bind(this))
                    })
                      , u = c.memorySkillCard;
                    return u.on("tapMemorySkillCard", function(t) {
                        e._onTapSkillCard(t, u.getGlobalPosition())
                    }),
                    this._skillTab
                }
            }]),
            t
        }(ce)
          , fe = {
            CENTER: "center",
            LEADER: "leader",
            VOCAL: "vocal",
            DANCE: "dance",
            VISUAL: "visual"
        }
          , de = function(e) {
            function t() {
                return i(this, t),
                o(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return l(t, e),
            s(t, [{
                key: "_getOrCreateSkillTab",
                value: function() {
                    var e = this;
                    if (this._skillTab)
                        return this._skillTab;
                    var t = this._params
                      , a = t.idols
                      , n = t.centerIdol
                      , i = t.memoryAppealPoint
                      , o = [].concat(r(a)).sort(function(e, t) {
                        var a = e.fesDeckMemberPosition.position
                          , n = t.fesDeckMemberPosition.position;
                        return n === fe.CENTER ? 1 : a !== fe.CENTER && n === fe.LEADER ? 1 : 0
                    })
                      , l = o.reduce(function(t, a, n) {
                        var r = a.fesDeckMemberPosition.position
                          , i = Math.floor((n + 1) / 2)
                          , o = (n + 1) % 2;
                        return re(h.default.t("fes.pauseSkillTitle." + r), a.activeSkills, e._onTapSkillCard.bind(e)).addTo(t, 440 * o, 126 * i),
                        t
                    }, aoba.Container.new());
                    this._skillTab = aoba.Container.new();
                    var s = this._skillTab.fromData(v.default, {
                        memorySkillCard: oe(n, i),
                        idolSkillContainer: l
                    })
                      , c = s.memorySkillCard;
                    return c.on("tapMemorySkillCard", function(t) {
                        e._onTapSkillCard(t, c.getGlobalPosition())
                    }),
                    this._skillTab
                }
            }]),
            t
        }(ce);
        t.default = {
            AuditionPauseDialog: ue,
            FesPauseDialog: de
        }
    },
    1638: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = {
            children: [{
                name: "overlay",
                fullName: "overlay",
                type: "container",
                x: 0,
                y: 0
            }, {
                name: "popStretchWhite970x573",
                fullName: "popStretchWhite970x573",
                type: "container",
                x: 79,
                y: 30
            }, {
                name: "popStretchInnerBase930x395",
                fullName: "popStretchInnerBase930x395",
                type: "container",
                x: 100,
                y: 110
            }, {
                children: [{
                    name: "fesSkillTab",
                    fullName: "list/fesSkillTab",
                    type: "container",
                    x: 0,
                    y: 0
                }, {
                    name: "auditionSkillTab",
                    fullName: "list/auditionSkillTab",
                    type: "container",
                    x: 0,
                    y: 0
                }, {
                    name: "statusEffectTab",
                    fullName: "list/statusEffectTab",
                    type: "container",
                    x: 0,
                    y: 0
                }],
                name: "list",
                fullName: "list",
                type: "container",
                x: 104,
                y: 113
            }, {
                name: "scrollBar",
                fullName: "scrollBar",
                type: "container",
                x: 1010,
                y: 119
            }, {
                name: "centerIdol",
                fullName: "centerIdol",
                type: "container",
                x: 452,
                y: 66
            }, {
                name: "tab",
                fullName: "tab",
                type: "container",
                x: 104,
                y: 52
            }, {
                name: "tipsButton",
                fullName: "tipsButton",
                anchor: {
                    x: .5,
                    y: .5
                },
                type: "sprite",
                key: "tips_button.png",
                x: 924,
                y: 557
            }, {
                name: "resumeButton",
                fullName: "resumeButton",
                anchor: {
                    x: .5,
                    y: .5
                },
                type: "sprite",
                key: "resume_button.png",
                x: 568,
                y: 557
            }],
            name: "",
            fullName: "",
            type: "container",
            x: 0,
            y: 0
        }
    },
    1639: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = {
            children: [{
                name: "memorySkillCard",
                fullName: "memorySkillCard",
                pivot: {
                    x: .5,
                    y: .5
                },
                type: "container",
                x: 464,
                y: 71
            }, {
                name: "supportIdolSkillContainer",
                fullName: "supportIdolSkillContainer",
                type: "container",
                x: 28,
                y: 270
            }, {
                name: "produceIdolSkillContainer",
                fullName: "produceIdolSkillContainer",
                type: "container",
                x: 28,
                y: 144
            }],
            name: "",
            fullName: "",
            type: "container",
            x: 104,
            y: 113
        }
    },
    1640: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = {
            children: [{
                name: "memorySkillCard",
                fullName: "memorySkillCard",
                pivot: {
                    x: .5,
                    y: .5
                },
                type: "container",
                x: 234,
                y: 71
            }, {
                name: "idolSkillContainer",
                fullName: "idolSkillContainer",
                type: "container",
                x: 27,
                y: 16
            }],
            name: "",
            fullName: "",
            type: "container",
            x: 104,
            y: 113
        }
    },
    1641: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = {
            children: [{
                name: "mental",
                fullName: "mental",
                type: "container",
                x: 0,
                y: 1
            }, {
                name: "vocal",
                fullName: "vocal",
                type: "container",
                x: 165,
                y: 0
            }, {
                name: "dance",
                fullName: "dance",
                type: "container",
                x: 305,
                y: 0
            }, {
                name: "visual",
                fullName: "visual",
                type: "container",
                x: 443,
                y: 0
            }],
            name: "",
            fullName: "",
            type: "container",
            x: 452,
            y: 66
        }
    },
    1642: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = {
            children: [{
                name: "icon",
                fullName: "icon",
                type: "sprite",
                key: null,
                x: 0,
                y: 0
            }, {
                name: "line",
                fullName: "line",
                type: "container",
                x: 29,
                y: 26
            }, {
                name: "value",
                fullName: "value",
                anchor: {
                    x: 1,
                    y: 0
                },
                type: "text",
                text: "88,888",
                style: {
                    fill: 6378341,
                    fontFamily: "UDKakugo_SmallPr6-B",
                    fontSize: 18
                },
                rotation: 0,
                x: 131,
                y: 5
            }],
            name: "",
            fullName: "",
            type: "container",
            x: 294,
            y: 172
        }
    },
    1643: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = {
            children: [{
                name: "tabStatusEffectOff",
                fullName: "tabStatusEffectOff",
                type: "sprite",
                key: "concert_pause_dialog_tab_status_effect_off.png",
                x: 0,
                y: 0
            }, {
                name: "tabStatusEffectOn",
                fullName: "tabStatusEffectOn",
                type: "sprite",
                key: "concert_pause_dialog_tab_status_effect_on.png",
                x: 0,
                y: 0
            }, {
                name: "tabSkillOff",
                fullName: "tabSkillOff",
                type: "sprite",
                key: "concert_pause_dialog_tab_skill_off.png",
                x: 139,
                y: 0
            }, {
                name: "tabSkillOn",
                fullName: "tabSkillOn",
                type: "sprite",
                key: "concert_pause_dialog_tab_skill_on.png",
                x: 139,
                y: 0
            }],
            name: "",
            fullName: "",
            type: "container",
            x: 104,
            y: 52
        }
    },
    1644: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = {
            children: [{
                name: "title",
                fullName: "title",
                type: "container",
                x: 0,
                y: 0
            }, {
                name: "skillCardList",
                fullName: "skillCardList",
                type: "container",
                x: 0,
                y: 28
            }],
            name: "",
            fullName: "",
            type: "container",
            x: 132,
            y: 257
        }
    },
    1645: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = {
            children: [{
                name: "base",
                fullName: "base",
                type: "graphics",
                fill: 0,
                alpha: 1,
                width: 858,
                height: 24,
                shape: "roundedRect",
                round: 12,
                x: 0,
                y: 0
            }, {
                name: "text",
                fullName: "text",
                type: "text",
                text: "サポートアイドル所持スキル",
                style: {
                    fill: 16711422,
                    fontFamily: "UDKakugo_SmallPr6-B",
                    fontSize: 18
                },
                anchor: {
                    x: 0,
                    y: .5
                },
                rotation: 0,
                x: 14,
                y: 12
            }],
            name: "",
            fullName: "",
            type: "container",
            x: 132,
            y: 383
        }
    },
    1646: function(e, t, a) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function r(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function i(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function o(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = a(1647)
          , s = n(l)
          , c = a(194)
          , u = n(c)
          , f = a(4)
          , d = n(f)
          , p = 24
          , h = function(e) {
            function t(e, a) {
                r(this, t);
                var n = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this))
                  , o = e.leftTurn - 1
                  , l = n.fromData(s.default, {
                    base: {
                        fill: a
                    },
                    comment: {
                        text: e.data.effectDescription
                    },
                    name: {
                        text: e.data.effectName
                    },
                    turn: {
                        text: d.default.t("concert.statusEffect.leftTurn", {
                            leftTurn: o
                        })
                    },
                    tabLine422: u.default.create({
                        width: 422,
                        type: u.default.types.DOT_BLACK
                    }),
                    icon: {
                        key: "skill_effects/icon/" + e.data.iconImage + ".png"
                    }
                })
                  , c = l.comment
                  , f = l.icon;
                return c.style.wordWrap = !0,
                c.style.wordWrapWidth = 427,
                c.style.breakWords = !0,
                f.scale = aoba.p(p / f.height),
                n
            }
            return o(t, e),
            t
        }(aoba.Container);
        t.default = h
    },
    1647: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = {
            children: [{
                name: "base",
                fullName: "base",
                type: "graphics",
                fill: 0,
                alpha: 1,
                width: 455,
                height: 100,
                shape: "rect",
                x: 0,
                y: 0
            }, {
                name: "comment",
                fullName: "comment",
                anchor: {
                    x: 0,
                    y: 0
                },
                type: "text",
                text: "１２３４５６７８９０１２３４５６７８９０１２３４５６７\r１２３４５６７８９０１２３４５６７８９０１２３４５６７",
                style: {
                    fill: 6378341,
                    fontFamily: "UDKakugo_SmallPr6-B",
                    fontSize: 16,
                    wordWrap: !0,
                    wordWrapWidth: 427,
                    breakWords: !0
                },
                rotation: 0,
                x: 15,
                y: 54
            }, {
                name: "name",
                fullName: "name",
                type: "text",
                text: "１２３４５６７８９０１２３４５",
                style: {
                    fill: 6378341,
                    fontFamily: "UDKakugo_SmallPr6-B",
                    fontSize: 18
                },
                anchor: {
                    x: 0,
                    y: .5
                },
                rotation: 0,
                x: 52,
                y: 20
            }, {
                name: "turn",
                fullName: "turn",
                anchor: {
                    x: 1,
                    y: .5
                },
                type: "text",
                text: "残り99ターン",
                style: {
                    fill: 43007,
                    fontFamily: "UDKakugo_SmallPr6-B",
                    fontSize: 18
                },
                rotation: 0,
                x: 444,
                y: 20
            }, {
                name: "tabLine422",
                fullName: "tabLine422",
                type: "container",
                x: 21,
                y: 42
            }, {
                name: "icon",
                fullName: "icon",
                anchor: {
                    x: .5,
                    y: .5
                },
                type: "sprite",
                key: null,
                x: 26,
                y: 21
            }],
            name: "",
            fullName: "",
            type: "container",
            x: 104,
            y: 113
        }
    },
    1648: function(e, t, a) {
        "use strict";
        function n(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = function() {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, a, n) {
                return a && e(t.prototype, a),
                n && e(t, n),
                t
            }
        }()
          , i = a(3)
          , o = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(i)
          , l = function() {
            function e(t) {
                n(this, e),
                this._idol = t
            }
            return r(e, [{
                key: "play",
                value: function(e, t, a) {
                    var n = o.default.createVoicePath("characters", t || this._idol.characterId, e);
                    aoba.soundManager.playVoiceAsync(n, {
                        volume: 1.2
                    }).then(function(e) {
                        a && e && e.once("ended", a)
                    })
                }
            }, {
                key: "playSelectVoice",
                value: function(e) {
                    this.play(this._getSelectVoice(e))
                }
            }, {
                key: "playLinkAppealVoices",
                value: function(e) {
                    e.forEach(function(e) {
                        aoba.soundManager.playVoiceAsync(e, {
                            volume: 1.2
                        })
                    })
                }
            }, {
                key: "_getSelectVoice",
                value: function(e) {
                    var t = e.isMemoryAppeal
                      , a = e.idolId;
                    return t ? "concert_memory_appeal_select" : a !== this._idol.idolId ? "concert_skil_select_2" : "concert_skil_select_1"
                }
            }]),
            e
        }();
        t.default = l
    },
    1649: function(e, t, a) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function r(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function i(e) {
            if (Array.isArray(e)) {
                for (var t = 0, a = Array(e.length); t < e.length; t++)
                    a[t] = e[t];
                return a
            }
            return Array.from(e)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = function() {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, a, n) {
                return a && e(t.prototype, a),
                n && e(t, n),
                t
            }
        }()
          , l = a(1650)
          , s = n(l)
          , c = a(1651)
          , u = n(c)
          , f = a(1652)
          , d = n(f)
          , p = a(52)
          , h = n(p)
          , y = a(143)
          , _ = n(y)
          , m = _.default.EFFECT_TYPES
          , g = _.default.ACTION_TYPES
          , b = _.default.ACTOR_ROLES
          , v = _.default.TARGET_GROUPS
          , w = _.default.STAR_CATEGORIES
          , k = _.default.NUMBER_OF_TIMES_LIMITED_MASTER_EFFECT_TYPES
          , S = [].concat(i(k))
          , E = !1
          , T = !1
          , O = function(e) {
            var t = new Error("Invalid hash error");
            h.default.captureException(t, {
                extra: e
            })
        }
          , x = function(e, t) {
            if (!e.skillEffects.find(function(e) {
                return "mental_unfavorable_damage" === e.effectType
            }) || e.isMemoryAppeal)
                return t.id;
            if (t.originalData)
                return t.originalData.id;
            throw new Error("Invalid appealMeterId")
        }
          , P = {
            getStatusEffectIconImagePath: function() {
                return S.includes(this.data.effectType) ? "skill_effects/icon/" + (parseInt(this.data.iconImage, 10) - this.data.times + this.remainTimes) + ".png" : "skill_effects/icon/" + this.data.iconImage + ".png"
            }
        }
          , I = function() {
            function e(t, a, n) {
                var i = this;
                r(this, e),
                this._gameManager = new n(t),
                this._serverAction = a,
                this._turn = 0,
                this._actors = [],
                this._usedSkills = [],
                this._memoryAppealPoint = 0,
                this._store = new s.default({
                    isFesMatch: t.isFesMatch,
                    appealMeters: t.appealMeters,
                    judges: t.judges,
                    rivals: t.rivals,
                    idols: t.idols,
                    activeSkills: t.activeSkills,
                    fesScores: t.fesScores
                }),
                this._actionFactory = new u.default(this._store,t.isFesMatch),
                this._createAllActiveSkillData();
                var o = t.appealRequests;
                if (o && 0 !== o.length) {
                    var l = o.map(function(e) {
                        i._turn++;
                        var t = e.usedSkill
                          , a = t.skillId
                          , n = t.idolId
                          , r = i._store.findActiveSkill(a, n, e.isUsedMemoryAppeal);
                        return i._usedSkills.push(r),
                        {
                            standbyResult: i._gameManager.standby(i._turn),
                            appealResult: i._gameManager.appeal(e)
                        }
                    })
                      , c = l[l.length - 1];
                    this._actors = c.appealResult.actors.map(function(e) {
                        return new d.default(e)
                    });
                    var f = this._createAppealViewResponse(c.appealResult)
                      , p = !0
                      , h = !1
                      , y = void 0;
                    try {
                        for (var _, m = f.actors[Symbol.iterator](); !(p = (_ = m.next()).done); p = !0) {
                            var g = _.value;
                            switch (g.role) {
                            case b.IDOL:
                                var v = this._store.findPlayerIdol();
                                v.currentMental = g.hp,
                                v.currentStar = g.star;
                                break;
                            case b.RIVAL:
                                var w = this._store.findRival(g.id);
                                w.currentMental = g.hp,
                                w.currentStar = g.star;
                                break;
                            case b.JUDGE:
                                this._store.findJudge(g.id).currentScore = g.hp
                            }
                        }
                    } catch (e) {
                        h = !0,
                        y = e
                    } finally {
                        try {
                            !p && m.return && m.return()
                        } finally {
                            if (h)
                                throw y
                        }
                    }
                }
            }
            return o(e, [{
                key: "getStartData",
                value: function() {
                    return {
                        judges: this._store.judges,
                        rivals: this._store.rivals,
                        centerIdol: this._store.centerIdol,
                        otherIdols: this._store.otherIdols,
                        memoryAppeal: this._store.memoryAppeal,
                        turn: this._turn,
                        usedSkills: this._usedSkills,
                        actors: this._actors
                    }
                }
            }, {
                key: "getPauseData",
                value: function() {
                    var e = this._store.findPlayerIdol()
                      , t = this._actors.find(function(e) {
                        return e.role === b.IDOL
                    });
                    return {
                        centerIdol: this._store.centerIdol,
                        idols: this._store.idols,
                        mental: e.hp,
                        memoryAppealPoint: this._memoryAppealPoint,
                        statusEffects: t ? t.statusEffects : []
                    }
                }
            }, {
                key: "standby",
                value: function() {
                    this._turn++;
                    var e = this._turn
                      , t = this._gameManager.standby(e);
                    return this._serverAction.standby(e).then(function(a) {
                        a && a.hash !== t.hash && (E || (O({
                            requestParams: e,
                            serverResponse: a,
                            clientResponse: t
                        }),
                        E = !0))
                    }),
                    this._createStandbyViewResponse(t)
                }
            }, {
                key: "appeal",
                value: function(e, t, a) {
                    var n = {
                        isUsedMemoryAppeal: e.isMemoryAppeal,
                        appealMeterId: x(e, a),
                        selectedJudgeId: t,
                        usedSkill: {
                            skillId: e.id,
                            idolId: e.idol.id
                        }
                    }
                      , r = this._gameManager.appeal(n);
                    return this._serverAction.appeal(n).then(function(e) {
                        e && e.hash !== r.hash && T && (O({
                            requestParams: n,
                            serverResponse: e,
                            clientResponse: r
                        }),
                        T = !0)
                    }),
                    this._usedSkills.push(e),
                    0 === this._actors.length && (this._actors = r.actors.map(function(e) {
                        return new d.default(e)
                    })),
                    this._createAppealViewResponse(r)
                }
            }, {
                key: "findActiveSkill",
                value: function(e, t, a) {
                    return this._store.findActiveSkill(e, t, a)
                }
            }, {
                key: "checkFinishResult",
                value: function() {
                    var e = this._actors.find(function(e) {
                        return e.role === b.IDOL
                    });
                    return {
                        finished: this._gameManager.isFinished(),
                        isRetired: 0 === e.hp
                    }
                }
            }, {
                key: "getResultRivals",
                value: function() {
                    for (var e = this._actors.filter(function(e) {
                        return e.role !== b.JUDGE
                    }).map(function(e) {
                        return {
                            id: e.id,
                            score: e.star,
                            isPlayer: e.role === b.IDOL
                        }
                    }).sort(function(e, t) {
                        return t.score - e.score
                    }), t = 0; t < e.length; t++) {
                        var a = e[t];
                        if (0 !== t) {
                            var n = e[t - 1];
                            n.score === a.score ? a.order = n.order : a.order = t + 1
                        } else
                            a.order = t + 1
                    }
                    return e.filter(function(e) {
                        return !e.isPlayer
                    }).map(function(e) {
                        return delete e.isPlayer,
                        e
                    })
                }
            }, {
                key: "_findActorBy",
                value: function(e) {
                    return this._actors.find(function(t) {
                        return t.role === e.role && (t.role === b.IDOL || t.id === e.id)
                    })
                }
            }, {
                key: "_createStandbyViewResponse",
                value: function(e) {
                    var t = this
                      , a = Object.assign({}, e)
                      , n = a.idol
                      , r = a.rivals
                      , i = this._store;
                    n.appealMeters = n.appealMeterIds.map(function(e) {
                        return i.findAppealMeter(e)
                    }),
                    n.passiveSkills = n.passiveSkills.map(function(e) {
                        return t._store.findPassiveSkill(e.passiveSkillId, e.idolId)
                    }),
                    n.activeSkills = n.activeSkills.map(function(e) {
                        var a = t._store.findActiveSkill(e.activeSkillId, e.idolId);
                        return a.enabledLinkSkill = e.enabledLinkSkill,
                        a
                    }),
                    this._updateEnabledLinkSkill(n.activeSkills, n.enabledMemoryAppealLinkSkill);
                    var o = !0
                      , l = !1
                      , s = void 0;
                    try {
                        for (var c, u = n.activeSkills[Symbol.iterator](); !(o = (c = u.next()).done); o = !0) {
                            var f = c.value;
                            this._createActiveSkillData(f)
                        }
                    } catch (e) {
                        l = !0,
                        s = e
                    } finally {
                        try {
                            !o && u.return && u.return()
                        } finally {
                            if (l)
                                throw s
                        }
                    }
                    var d = !0
                      , p = !1
                      , h = void 0;
                    try {
                        for (var y, _ = r[Symbol.iterator](); !(d = (y = _.next()).done); d = !0) {
                            var m = y.value;
                            m.result = i.findRivalAppealMeter(m.rivalId, m.appealMeterId).category
                        }
                    } catch (e) {
                        p = !0,
                        h = e
                    } finally {
                        try {
                            !d && _.return && _.return()
                        } finally {
                            if (p)
                                throw h
                        }
                    }
                    return this._memoryAppealPoint = n.memoryAppealPoint,
                    a
                }
            }, {
                key: "_createAppealViewResponse",
                value: function(e) {
                    var t = this
                      , a = Object.assign({}, e);
                    this._checkFinishStars(a.actions, this._checkTopStars(a.actions)),
                    a.actions = a.actions.filter(function(e) {
                        return e.role === b.JUDGE || (!!e.isUsedMemoryAppeal || "0" !== e.usedSkillId)
                    });
                    var n = !0
                      , r = !1
                      , i = void 0;
                    try {
                        for (var o, l = a.actions[Symbol.iterator](); !(n = (o = l.next()).done); n = !0) {
                            var s = o.value
                              , c = !0
                              , u = !1
                              , f = void 0;
                            try {
                                for (var d, p = s.targets[Symbol.iterator](); !(c = (d = p.next()).done); c = !0) {
                                    var h = d.value;
                                    h.effects = h.effects.filter(function(e, t, a) {
                                        return a.findIndex(function(t) {
                                            return e.effectId === t.effectId
                                        }) === t
                                    }),
                                    h.effects = this._filteredLimitedTimesUpdateEffectStatusIconEffectTypes(h.effects),
                                    h.effects.forEach(function(e) {
                                        return aoba.utils.setPrototypeOf(e, P)
                                    })
                                }
                            } catch (e) {
                                u = !0,
                                f = e
                            } finally {
                                try {
                                    !c && p.return && p.return()
                                } finally {
                                    if (u)
                                        throw f
                                }
                            }
                        }
                    } catch (e) {
                        r = !0,
                        i = e
                    } finally {
                        try {
                            !n && l.return && l.return()
                        } finally {
                            if (r)
                                throw i
                        }
                    }
                    var y = !0
                      , _ = !1
                      , m = void 0;
                    try {
                        for (var g, v = a.previousActions[Symbol.iterator](); !(y = (g = v.next()).done); y = !0) {
                            var w = g.value;
                            this._addEffectDataTo(w)
                        }
                    } catch (e) {
                        _ = !0,
                        m = e
                    } finally {
                        try {
                            !y && v.return && v.return()
                        } finally {
                            if (_)
                                throw m
                        }
                    }
                    a.actions = a.actions.map(function(e) {
                        return t._actionFactory.create(e)
                    }),
                    this._updateActorsStatusEffects(a.previousActions, a.actions);
                    var k = this._extractTopScores(a.actions);
                    return k.length > 0 && this._insertTopScore(a.actions, k),
                    a.actors.forEach(function(e) {
                        t._findActorBy(e).updateParameter(e)
                    }),
                    a.actors = this._actors,
                    a
                }
            }, {
                key: "_updateEnabledLinkSkill",
                value: function(e, t) {
                    var a = this
                      , n = !0
                      , r = !1
                      , i = void 0;
                    try {
                        for (var o, l = e[Symbol.iterator](); !(n = (o = l.next()).done); n = !0)
                            !function() {
                                var e = o.value
                                  , t = a._store.activeSkills.find(function(t) {
                                    return e.id === t.id
                                });
                                t && t.linkSkill && (t.enabledLinkSkill = e.enabledLinkSkill,
                                t.linkSkill.enabledLinkSkill = e.enabledLinkSkill)
                            }()
                    } catch (e) {
                        r = !0,
                        i = e
                    } finally {
                        try {
                            !n && l.return && l.return()
                        } finally {
                            if (r)
                                throw i
                        }
                    }
                    var s = this._store.memoryAppeal;
                    s && s.linkSkill && (s.enabledLinkSkill = t,
                    s.linkSkill.enabledLinkSkill = t)
                }
            }, {
                key: "_updateActorsStatusEffects",
                value: function(e, t) {
                    this._actors.forEach(function(e) {
                        return e.clearStatusEffects()
                    });
                    for (var a = [].concat(i(e), i(t)), n = 0; n < a.length; n++) {
                        var r = a[n]
                          , o = this._findActorBy(r)
                          , l = !0
                          , s = !1
                          , c = void 0;
                        try {
                            for (var u, f = r.targets[Symbol.iterator](); !(l = (u = f.next()).done); l = !0) {
                                var d = u.value
                                  , p = this._findActorBy(d)
                                  , h = !0
                                  , y = !1
                                  , _ = void 0;
                                try {
                                    for (var w, k = d.effects[Symbol.iterator](); !(h = (w = k.next()).done); h = !0) {
                                        var S = w.value;
                                        if (S.effectType !== m.RERAISE) {
                                            if (1 !== S.leftTurn && d.actionType !== g.PASSIVE && (S.effectType === m.BUFF || S.effectType === m.DEBUFF)) {
                                                if ("0" === r.id) {
                                                    p.addStatusEffect(S);
                                                    continue
                                                }
                                                switch (S.data.targetGroup) {
                                                case v.US:
                                                    o.addStatusEffect(S);
                                                    break;
                                                case v.THEM:
                                                    p.addStatusEffect(S);
                                                    break;
                                                case v.RIVALS:
                                                    var E = !0
                                                      , T = !1
                                                      , O = void 0;
                                                    try {
                                                        for (var x, P = this._actors[Symbol.iterator](); !(E = (x = P.next()).done); E = !0) {
                                                            var I = x.value;
                                                            I.isDead || I.role === b.JUDGE || (r.role === I.role && r.role === b.IDOL || r.role === I.role && r.id === I.id || I.addStatusEffect(S))
                                                        }
                                                    } catch (e) {
                                                        T = !0,
                                                        O = e
                                                    } finally {
                                                        try {
                                                            !E && P.return && P.return()
                                                        } finally {
                                                            if (T)
                                                                throw O
                                                        }
                                                    }
                                                    break;
                                                default:
                                                    throw new Error("Invalid targetGroup " + S.data.targetGroup + ".")
                                                }
                                            }
                                        } else
                                            p.removeStatusEffect(S)
                                    }
                                } catch (e) {
                                    y = !0,
                                    _ = e
                                } finally {
                                    try {
                                        !h && k.return && k.return()
                                    } finally {
                                        if (y)
                                            throw _
                                    }
                                }
                            }
                        } catch (e) {
                            s = !0,
                            c = e
                        } finally {
                            try {
                                !l && f.return && f.return()
                            } finally {
                                if (s)
                                    throw c
                            }
                        }
                    }
                }
            }, {
                key: "_createAllActiveSkillData",
                value: function() {
                    var e = this;
                    this._store.idols.forEach(function(t) {
                        t.activeSkills ? t.activeSkills.forEach(function(t) {
                            e._createActiveSkillData(t)
                        }) : t.activeSkill && e._createActiveSkillData(t.activeSkill)
                    }),
                    this._store.memoryAppeal && this._createActiveSkillData(this._store.memoryAppeal)
                }
            }, {
                key: "_createActiveSkillData",
                value: function(e) {
                    this._addIdolPosition(e),
                    this._addLinkSkillIdols(e),
                    this._addIsFixedMeter(e)
                }
            }, {
                key: "_addIdolPosition",
                value: function(e) {
                    this._store.findIdol(e.idol.id).fesDeckMemberPosition && (e.idol.position = this._store.findIdol(e.idol.id).fesDeckMemberPosition.position)
                }
            }, {
                key: "_addLinkSkillIdols",
                value: function(e) {
                    var t = e.linkSkill;
                    t && (t.linkSkillIdols = this._store.fetchIdolsByLinkSkill(t))
                }
            }, {
                key: "_addIsFixedMeter",
                value: function(e) {
                    var t = e.skillEffects.find(function(e) {
                        return "mental_unfavorable_damage" === e.effectType
                    });
                    e.isFixedMeter = !!t
                }
            }, {
                key: "_addEffectDataTo",
                value: function(e) {
                    var t = !0
                      , a = !1
                      , n = void 0;
                    try {
                        for (var r, i = e.targets[Symbol.iterator](); !(t = (r = i.next()).done); t = !0) {
                            var o = r.value;
                            o.effects = this._filteredLimitedTimesUpdateEffectStatusIconEffectTypes(o.effects);
                            var l = !0
                              , s = !1
                              , c = void 0;
                            try {
                                for (var u, f = o.effects[Symbol.iterator](); !(l = (u = f.next()).done); l = !0) {
                                    var d = u.value;
                                    d.data = this._store.findSkillEffect(d.effectId),
                                    aoba.utils.setPrototypeOf(d, P)
                                }
                            } catch (e) {
                                s = !0,
                                c = e
                            } finally {
                                try {
                                    !l && f.return && f.return()
                                } finally {
                                    if (s)
                                        throw c
                                }
                            }
                        }
                    } catch (e) {
                        a = !0,
                        n = e
                    } finally {
                        try {
                            !t && i.return && i.return()
                        } finally {
                            if (a)
                                throw n
                        }
                    }
                }
            }, {
                key: "_checkTopStars",
                value: function(e) {
                    var t = {}
                      , a = !0
                      , n = !1
                      , r = void 0;
                    try {
                        for (var i, o = e[Symbol.iterator](); !(a = (i = o.next()).done); a = !0) {
                            var l = i.value
                              , s = l.stars;
                            if (s)
                                for (var c = 0; c < s.length; c++) {
                                    var u = s[c];
                                    u.playerId = l.id,
                                    u.category === w.TOP && (t[u.judgeId] = s.splice(c, 1)[0],
                                    c--)
                                }
                        }
                    } catch (e) {
                        n = !0,
                        r = e
                    } finally {
                        try {
                            !a && o.return && o.return()
                        } finally {
                            if (n)
                                throw r
                        }
                    }
                    return t
                }
            }, {
                key: "_checkFinishStars",
                value: function(e, t) {
                    if (0 !== Object.keys(t).length) {
                        var a = !0
                          , n = !1
                          , r = void 0;
                        try {
                            for (var i, o = e[Symbol.iterator](); !(a = (i = o.next()).done); a = !0) {
                                var l = i.value
                                  , s = l.stars;
                                if (s)
                                    for (var c = 0; c < s.length; c++) {
                                        var u = s[c];
                                        u.category === w.FINISH && t[u.judgeId] && (s.splice(c + 1, 0, t[u.judgeId]),
                                        c++)
                                    }
                            }
                        } catch (e) {
                            n = !0,
                            r = e
                        } finally {
                            try {
                                !a && o.return && o.return()
                            } finally {
                                if (n)
                                    throw r
                            }
                        }
                    }
                }
            }, {
                key: "_extractTopScores",
                value: function(e) {
                    var t = []
                      , a = !0
                      , n = !1
                      , r = void 0;
                    try {
                        for (var i, o = e[Symbol.iterator](); !(a = (i = o.next()).done); a = !0) {
                            var l = i.value
                              , s = l.scores;
                            if (l.role === b.IDOL && s)
                                for (var c = 0; c < s.length; c++) {
                                    var u = s[c];
                                    if ("top_appeal" === u.type) {
                                        var f = s.splice(c, 1)[0];
                                        f && t.push(f)
                                    }
                                }
                        }
                    } catch (e) {
                        n = !0,
                        r = e
                    } finally {
                        try {
                            !a && o.return && o.return()
                        } finally {
                            if (n)
                                throw r
                        }
                    }
                    return t
                }
            }, {
                key: "_insertTopScore",
                value: function(e, t) {
                    var a = !0
                      , n = !1
                      , r = void 0;
                    try {
                        for (var i, o = e[Symbol.iterator](); !(a = (i = o.next()).done); a = !0) {
                            var l = i.value
                              , s = l.stars;
                            if (s)
                                for (var c = 0; c < s.length; c++) {
                                    var u = s[c];
                                    if (u.category === w.TOP) {
                                        var f = t.shift();
                                        f && l.scores.push(f)
                                    }
                                }
                        }
                    } catch (e) {
                        n = !0,
                        r = e
                    } finally {
                        try {
                            !a && o.return && o.return()
                        } finally {
                            if (n)
                                throw r
                        }
                    }
                }
            }, {
                key: "_filteredLimitedTimesUpdateEffectStatusIconEffectTypes",
                value: function(e) {
                    return e.filter(function(e) {
                        return !(S.includes(e.type) && 0 === e.remainTimes)
                    })
                }
            }, {
                key: "idols",
                get: function() {
                    return this._store.idols
                }
            }, {
                key: "centerIdol",
                get: function() {
                    return this._store.centerIdol
                }
            }, {
                key: "allSkills",
                get: function() {
                    return this._store.allSkills
                }
            }, {
                key: "memoryAppealPoint",
                get: function() {
                    return this._memoryAppealPoint
                }
            }, {
                key: "actors",
                get: function() {
                    return this._actors
                }
            }, {
                key: "turn",
                get: function() {
                    return this._turn
                }
            }]),
            e
        }();
        t.default = I
    },
    1650: function(e, t, a) {
        "use strict";
        function n(e) {
            if (Array.isArray(e)) {
                for (var t = 0, a = Array(e.length); t < e.length; t++)
                    a[t] = e[t];
                return a
            }
            return Array.from(e)
        }
        function r(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function() {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, a, n) {
                return a && e(t.prototype, a),
                n && e(t, n),
                t
            }
        }()
          , o = function() {
            function e(t) {
                r(this, e),
                this._appealMeters = t.appealMeters,
                this._judges = t.judges,
                this._rivals = t.rivals,
                this._idols = t.idols,
                this._activeSkills = t.activeSkills,
                this._fesScores = t.fesScores || [],
                this._centerIdol = this._idols.find(function(e) {
                    return e.isCenter
                }),
                this._otherIdols = this._idols.filter(function(e) {
                    return !e.isCenter
                }),
                this._memoryAppeal = this._centerIdol.memoryAppeal,
                this._allSkills = this._activeSkills.slice(0),
                this._memoryAppeal && this._allSkills.push(this._memoryAppeal),
                this._allSkillEffects = this._extractAllSkillEffects(t.isFesMatch)
            }
            return i(e, [{
                key: "findAppealMeter",
                value: function(e) {
                    return this._appealMeters.find(function(t) {
                        return t.id === e
                    })
                }
            }, {
                key: "findRivalAppealMeter",
                value: function(e, t) {
                    return this._rivals.find(function(t) {
                        return t.id === e
                    }).rivalAppealMeters.find(function(e) {
                        return e.id === t
                    })
                }
            }, {
                key: "findActiveSkill",
                value: function(e, t, a) {
                    return a ? this._memoryAppeal : this._activeSkills.find(function(a) {
                        return a.id === e && a.idol.id === t
                    })
                }
            }, {
                key: "findPassiveSkill",
                value: function(e, t) {
                    return this.findIdol(t).passiveSkills.find(function(t) {
                        return t.id === e
                    })
                }
            }, {
                key: "findIdol",
                value: function(e) {
                    return this._idols.find(function(t) {
                        return t.idolId === e
                    })
                }
            }, {
                key: "fetchIdolsByLinkSkill",
                value: function(e) {
                    var t = e.linkSkillCharacters.map(function(e) {
                        return e.characterId
                    });
                    return this._fetchIdolsByCharacterIds(t)
                }
            }, {
                key: "findPlayerIdol",
                value: function() {
                    return this._rivals.find(function(e) {
                        return e.isPlayer
                    })
                }
            }, {
                key: "findRival",
                value: function(e) {
                    return this._rivals.find(function(t) {
                        return t.id === e
                    })
                }
            }, {
                key: "findJudge",
                value: function(e) {
                    return this._judges.find(function(t) {
                        return t.id === e
                    })
                }
            }, {
                key: "findSkillEffect",
                value: function(e) {
                    return this._allSkillEffects.find(function(t) {
                        return t.id === e
                    })
                }
            }, {
                key: "findFesScore",
                value: function(e) {
                    return this._fesScores.find(function(t) {
                        return t.id === e
                    })
                }
            }, {
                key: "_fetchIdolsByCharacterIds",
                value: function(e) {
                    var t = this;
                    return e.map(function(e) {
                        return t._findIdolByCharacterId(e)
                    })
                }
            }, {
                key: "_findIdolByCharacterId",
                value: function(e) {
                    return this._idols.find(function(t) {
                        return t.characterId === e
                    })
                }
            }, {
                key: "_extractAllSkillEffects",
                value: function(e) {
                    var t = []
                      , a = function(e) {
                        var t = []
                          , a = !0
                          , r = !1
                          , i = void 0;
                        try {
                            for (var o, l = e[Symbol.iterator](); !(a = (o = l.next()).done); a = !0) {
                                var s = o.value;
                                t.push.apply(t, n(s.skillEffects)),
                                s.linkSkill && t.push.apply(t, n(s.linkSkill.skillEffects))
                            }
                        } catch (e) {
                            r = !0,
                            i = e
                        } finally {
                            try {
                                !a && l.return && l.return()
                            } finally {
                                if (r)
                                    throw i
                            }
                        }
                        return t
                    };
                    t.push.apply(t, n(a(this._allSkills)));
                    var r = !0
                      , i = !1
                      , o = void 0;
                    try {
                        for (var l, s = this._idols[Symbol.iterator](); !(r = (l = s.next()).done); r = !0) {
                            var c = l.value;
                            if (c.passiveSkills) {
                                var u = !0
                                  , f = !1
                                  , d = void 0;
                                try {
                                    for (var p, h = c.passiveSkills[Symbol.iterator](); !(u = (p = h.next()).done); u = !0) {
                                        var y = p.value;
                                        t.push.apply(t, n(y.skillEffects))
                                    }
                                } catch (e) {
                                    f = !0,
                                    d = e
                                } finally {
                                    try {
                                        !u && h.return && h.return()
                                    } finally {
                                        if (f)
                                            throw d
                                    }
                                }
                            }
                        }
                    } catch (e) {
                        i = !0,
                        o = e
                    } finally {
                        try {
                            !r && s.return && s.return()
                        } finally {
                            if (i)
                                throw o
                        }
                    }
                    var _ = this._rivals.filter(function(e) {
                        return !e.isPlayer
                    });
                    if (e) {
                        var m = !0
                          , g = !1
                          , b = void 0;
                        try {
                            for (var v, w = _[Symbol.iterator](); !(m = (v = w.next()).done); m = !0) {
                                var k = v.value
                                  , S = !0
                                  , E = !1
                                  , T = void 0;
                                try {
                                    for (var O, x = k.userFesDeck.userFesDeckMembers[Symbol.iterator](); !(S = (O = x.next()).done); S = !0) {
                                        var P = O.value;
                                        t.push.apply(t, n(a(P.userFesIdol.activeSkills)));
                                        var I = !0
                                          , M = !1
                                          , A = void 0;
                                        try {
                                            for (var j, C = P.userFesIdol.passiveSkills[Symbol.iterator](); !(I = (j = C.next()).done); I = !0) {
                                                var D = j.value;
                                                t.push.apply(t, n(D.skillEffects))
                                            }
                                        } catch (e) {
                                            M = !0,
                                            A = e
                                        } finally {
                                            try {
                                                !I && C.return && C.return()
                                            } finally {
                                                if (M)
                                                    throw A
                                            }
                                        }
                                    }
                                } catch (e) {
                                    E = !0,
                                    T = e
                                } finally {
                                    try {
                                        !S && x.return && x.return()
                                    } finally {
                                        if (E)
                                            throw T
                                    }
                                }
                                var R = k.centerIdol.memoryAppeal;
                                R && (t.push.apply(t, n(R.memoryAppealEffects)),
                                R.linkSkill && t.push.apply(t, n(R.linkSkill.skillEffects)))
                            }
                        } catch (e) {
                            g = !0,
                            b = e
                        } finally {
                            try {
                                !m && w.return && w.return()
                            } finally {
                                if (g)
                                    throw b
                            }
                        }
                    } else {
                        var L = !0
                          , F = !1
                          , N = void 0;
                        try {
                            for (var B, G = _[Symbol.iterator](); !(L = (B = G.next()).done); L = !0) {
                                var U = B.value
                                  , Y = U.rivalSkills
                                  , X = U.rivalMemoryAppeal;
                                X && t.push.apply(t, n(X.rivalMemoryAppealEffects)),
                                Y.forEach(function(e) {
                                    t.push.apply(t, n(e.rivalSkillEffects))
                                })
                            }
                        } catch (e) {
                            F = !0,
                            N = e
                        } finally {
                            try {
                                !L && G.return && G.return()
                            } finally {
                                if (F)
                                    throw N
                            }
                        }
                    }
                    return this._judges.forEach(function(e) {
                        t.push.apply(t, n(e.skill.skillEffects))
                    }),
                    t.filter(function(e, t, a) {
                        return a.findIndex(function(t) {
                            return t.id === e.id
                        }) === t
                    })
                }
            }, {
                key: "appealMeters",
                get: function() {
                    return this._appealMeters
                }
            }, {
                key: "judges",
                get: function() {
                    return this._judges
                }
            }, {
                key: "rivals",
                get: function() {
                    return this._rivals
                }
            }, {
                key: "idols",
                get: function() {
                    return this._idols
                }
            }, {
                key: "activeSkills",
                get: function() {
                    return this._activeSkills
                }
            }, {
                key: "fesScores",
                get: function() {
                    return this._fesScores
                }
            }, {
                key: "centerIdol",
                get: function() {
                    return this._centerIdol
                }
            }, {
                key: "otherIdols",
                get: function() {
                    return this._otherIdols
                }
            }, {
                key: "memoryAppeal",
                get: function() {
                    return this._memoryAppeal
                }
            }, {
                key: "allSkills",
                get: function() {
                    return this._allSkills
                }
            }]),
            e
        }();
        t.default = o
    },
    1651: function(e, t, a) {
        "use strict";
        function n(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = function() {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, a, n) {
                return a && e(t.prototype, a),
                n && e(t, n),
                t
            }
        }()
          , i = a(143)
          , o = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(i)
          , l = o.default.ACTOR_ROLES
          , s = function() {
            function e(t, a) {
                n(this, e),
                this._store = t,
                this._isFesMatch = a
            }
            return r(e, [{
                key: "create",
                value: function(e) {
                    switch (e.role) {
                    case l.IDOL:
                        return this._createPlayerAction(e);
                    case l.RIVAL:
                        return this._isFesMatch ? this._createFesMatchRivalAction(e) : this._createRivalAction(e);
                    case l.JUDGE:
                        return this._createJudgeAction(e);
                    default:
                        throw new Error("Unexpected action role " + e.role)
                    }
                }
            }, {
                key: "_createPlayerAction",
                value: function(e) {
                    var t = e.usedSkillIdolId
                      , a = this._store.findIdol(t)
                      , n = this._store.findActiveSkill(e.usedSkillId, t, e.isUsedMemoryAppeal);
                    if (n) {
                        var r = n.linkSkill;
                        e.isUsedLinkSkill && (r.linkSkillIdols = this._store.fetchIdolsByLinkSkill(r)),
                        this._addEffectDataTo(e.targets)
                    }
                    if (e.scores) {
                        var i = !0
                          , o = !1
                          , l = void 0;
                        try {
                            for (var s, c = e.scores[Symbol.iterator](); !(i = (s = c.next()).done); i = !0) {
                                var u = s.value;
                                u.data = this._store.findFesScore(u.scoreId)
                            }
                        } catch (e) {
                            o = !0,
                            l = e
                        } finally {
                            try {
                                !i && c.return && c.return()
                            } finally {
                                if (o)
                                    throw l
                            }
                        }
                    }
                    return Object.assign({}, e, {
                        idol: a,
                        skill: n
                    })
                }
            }, {
                key: "_createFesMatchRivalAction",
                value: function(e) {
                    var t = this._store.findRival(e.id)
                      , a = e.usedSkillIdolId
                      , n = void 0;
                    if (e.isUsedMemoryAppeal)
                        n = t.centerIdol.memoryAppeal;
                    else {
                        n = t.userFesDeck.userFesDeckMembers.find(function(e) {
                            return e.userFesIdol.idolId === a
                        }).userFesIdol.activeSkills.find(function(t) {
                            return t.id === e.usedSkillId
                        })
                    }
                    if (n) {
                        var r = n.linkSkill;
                        e.isUsedLinkSkill && (r.linkSkillIdols = this._store.fetchIdolsByLinkSkill(r)),
                        this._addEffectDataTo(e.targets)
                    }
                    return e.scores && (e.scores = []),
                    Object.assign({}, e, {
                        rival: t,
                        skill: n
                    })
                }
            }, {
                key: "_createRivalAction",
                value: function(e) {
                    var t = this._store.findRival(e.id)
                      , a = e.isUsedMemoryAppeal ? t.rivalMemoryAppeal : t.rivalSkills.find(function(t) {
                        return t.id === e.usedSkillId
                    });
                    return a && this._addEffectDataTo(e.targets),
                    e.scores && (e.scores = []),
                    Object.assign({}, e, {
                        rival: t,
                        skill: a
                    })
                }
            }, {
                key: "_createJudgeAction",
                value: function(e) {
                    var t = this._store.findJudge(e.id)
                      , a = e.isUsedSkill ? t.skill : null;
                    return a && this._addEffectDataTo(e.targets),
                    Object.assign({}, e, {
                        skill: a
                    })
                }
            }, {
                key: "_addEffectDataTo",
                value: function(e) {
                    var t = !0
                      , a = !1
                      , n = void 0;
                    try {
                        for (var r, i = e[Symbol.iterator](); !(t = (r = i.next()).done); t = !0) {
                            var o = r.value
                              , l = !0
                              , s = !1
                              , c = void 0;
                            try {
                                for (var u, f = o.effects[Symbol.iterator](); !(l = (u = f.next()).done); l = !0) {
                                    var d = u.value;
                                    d.data = this._store.findSkillEffect(d.effectId)
                                }
                            } catch (e) {
                                s = !0,
                                c = e
                            } finally {
                                try {
                                    !l && f.return && f.return()
                                } finally {
                                    if (s)
                                        throw c
                                }
                            }
                        }
                    } catch (e) {
                        a = !0,
                        n = e
                    } finally {
                        try {
                            !t && i.return && i.return()
                        } finally {
                            if (a)
                                throw n
                        }
                    }
                }
            }]),
            e
        }();
        t.default = s
    },
    1652: function(e, t, a) {
        "use strict";
        function n(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = function() {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, a, n) {
                return a && e(t.prototype, a),
                n && e(t, n),
                t
            }
        }()
          , i = function() {
            function e(t) {
                n(this, e),
                this._role = t.role,
                this._id = t.id,
                this._hp = t.hp,
                this._statusEffects = [],
                this._star = t.star,
                this._isDead = t.isDead
            }
            return r(e, [{
                key: "updateParameter",
                value: function(e) {
                    this._hp = e.hp,
                    this._star = e.star,
                    this._isDead = e.isDead
                }
            }, {
                key: "clearStatusEffects",
                value: function() {
                    this._statusEffects = []
                }
            }, {
                key: "addStatusEffect",
                value: function(e) {
                    this._statusEffects.push(e)
                }
            }, {
                key: "removeStatusEffect",
                value: function(e) {
                    var t = this._statusEffects.findIndex(function(t) {
                        return t.effectId === e.effectId
                    });
                    -1 !== t && this._statusEffects.splice(t, 1)
                }
            }, {
                key: "role",
                get: function() {
                    return this._role
                }
            }, {
                key: "id",
                get: function() {
                    return this._id
                }
            }, {
                key: "hp",
                get: function() {
                    return this._hp
                }
            }, {
                key: "statusEffects",
                get: function() {
                    return this._statusEffects
                }
            }, {
                key: "star",
                get: function() {
                    return this._star
                }
            }, {
                key: "isDead",
                get: function() {
                    return this._isDead
                }
            }]),
            e
        }();
        t.default = i
    },
    2361: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = [{
            command: "pause",
            target: "concertGame"
        }, {
            command: "showMask",
            imageName: "mask",
            label: "mask1"
        }, {
            command: "showOverlay"
        }, {
            command: "showComment",
            positionType: "top",
            windowType: "l"
        }, {
            command: "showTips",
            imageName: "013"
        }, {
            command: "playComment",
            content: "オーディションは、他のライバルユニットと一緒に\n参加をします。「審査員」を一番多く満足させて\n「スターを獲得」し、１位を目指してくださいね♪"
        }, {
            command: "wait",
            time: 2e3
        }, {
            command: "changeTips",
            imageName: "014"
        }, {
            command: "playVoice",
            voiceName: "hazuki_tutorial_2"
        }, {
            command: "playComment",
            content: "他のライバルユニットも含め「スターの数」と\n「メンタル」を都度チェックしていきましょうね"
        }, {
            command: "wait",
            time: 2e3
        }, {
            command: "resume",
            target: "concertGame"
        }]
    },
    2362: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = [{
            command: "pause",
            target: "concertGame"
        }, {
            command: "showOverlay"
        }, {
            command: "showTips",
            imageName: "015"
        }, {
            command: "showComment",
            positionType: "top",
            windowType: "l"
        }, {
            command: "playComment",
            content: "アピールフェイズでは、行動順番毎に\nアイドルがアピールをしていきます"
        }, {
            command: "wait",
            time: 2e3
        }, {
            command: "changeTips",
            imageName: "016"
        }, {
            command: "playVoice",
            voiceName: "901_surprise"
        }, {
            command: "playComment",
            content: "審査員の方々は、アイドル達に厳しいコメントを\nされます。アイドルの「メンタル」を常に見守って\n適切な指示を出してあげましょう"
        }, {
            command: "wait",
            time: 2e3
        }, {
            command: "resume",
            target: "concertGame"
        }]
    },
    2363: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = [{
            command: "showOverlay"
        }, {
            command: "showMask",
            imageName: "mask",
            label: "mask1"
        }, {
            command: "showComment",
            positionType: "middle",
            windowType: "l"
        }, {
            command: "playComment",
            content: "プロデュースユニットが所持している８つの\nライブスキルから３つがランダムに選出され、\n１ターンに１つを使うことができます"
        }, {
            command: "playComment",
            content: "まずは、真乃さんが持っている「スキル」を\n選択してみましょう～",
            lock: !1
        }, {
            command: "changeOverlay",
            x: 470,
            y: 534,
            width: 202,
            height: 170
        }, {
            command: "showFinger",
            type: "right",
            x: 500,
            y: 555
        }, {
            command: "hideMask",
            label: "mask1"
        }, {
            command: "showMask",
            imageName: "concert_turn_1_1",
            label: "mask2"
        }, {
            command: "waitEvent",
            target: "concertGame",
            event: "selectCard"
        }, {
            command: "changeOverlay",
            x: 420,
            y: 368,
            width: 300,
            height: 228
        }, {
            command: "hideMask",
            label: "mask2"
        }, {
            command: "showMask",
            imageName: "concert_turn_1_2",
            label: "mask3"
        }, {
            command: "playComment",
            positionType: "top",
            content: "真乃さんのライブスキルは「Vocal」ジャンルなので\n「Vocal担当審査員」に使うと『好反応』を得られます"
        }, {
            command: "wait",
            time: 500
        }, {
            command: "hideMask",
            label: "mask3"
        }, {
            command: "showMask",
            imageName: "concert_vocal",
            label: "mask4"
        }, {
            command: "changeOverlay",
            x: 0,
            y: 52,
            width: 200,
            height: 160
        }, {
            command: "playComment",
            positionType: "middle",
            windowType: "s",
            content: "それでは「Vocal担当審査員」を選択しましょう～",
            lock: !1
        }, {
            command: "showFinger",
            type: "left",
            x: 112,
            y: 120
        }, {
            command: "waitEvent",
            target: "concertGame",
            event: "selectJudge"
        }, {
            command: "hideMask",
            label: "mask4"
        }, {
            command: "changeOverlay"
        }, {
            command: "playComment",
            positionType: "top",
            windowType: "l",
            content: "審査員の方を選択すると\n「アピールメーター」が表示されます\n基本は「Perfect」の位置を狙っていきましょう"
        }, {
            command: "trigger",
            target: "concertGame",
            event: "stopOnPerfect"
        }, {
            command: "wait",
            time: 2400
        }, {
            command: "playComment",
            positionType: "top",
            windowType: "m",
            content: "今が「Perfect」チャンスの位置です\n本番では、うまく狙ってくださいね",
            lock: !1
        }, {
            command: "changeOverlay",
            x: 0,
            y: 0,
            width: 1136,
            height: 640
        }, {
            command: "showFinger",
            type: "left",
            x: 800,
            y: 440
        }, {
            command: "waitEvent",
            target: "concertGame",
            event: "startAppealPhase"
        }]
    },
    2364: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = [{
            command: "showOverlay"
        }, {
            command: "showMask",
            imageName: "mask",
            label: "mask1"
        }, {
            command: "showComment",
            positionType: "middle",
            windowType: "m"
        }, {
            command: "playComment",
            content: "2ターン目は風野灯織さんの持っている\n「スキル」を選択してみてください",
            lock: !1
        }, {
            command: "changeOverlay",
            x: 470,
            y: 534,
            width: 202,
            height: 170
        }, {
            command: "showFinger",
            type: "right",
            x: 500,
            y: 555
        }, {
            command: "hideMask",
            label: "mask1"
        }, {
            command: "showMask",
            imageName: "concert_turn_2_1",
            label: "mask2"
        }, {
            command: "waitEvent",
            target: "concertGame",
            event: "selectCard"
        }, {
            command: "hideMask",
            label: "mask2"
        }, {
            command: "showMask",
            imageName: "concert_vocal",
            label: "mask3"
        }, {
            command: "changeOverlay",
            x: 0,
            y: 52,
            width: 200,
            height: 160
        }, {
            command: "playComment",
            windowType: "s",
            content: "今回も「Vocal」審査員を選択しましょう",
            lock: !1
        }, {
            command: "showFinger",
            type: "left",
            x: 112,
            y: 120
        }, {
            command: "waitEvent",
            target: "concertGame",
            event: "selectJudge"
        }, {
            command: "hideMask",
            label: "mask3"
        }, {
            command: "changeOverlay",
            x: 0,
            y: 0,
            width: 1136,
            height: 640
        }, {
            command: "playComment",
            positionType: "top",
            windowType: "s",
            content: "アピールメーターをTAPしてください",
            lock: !1
        }, {
            command: "waitEvent",
            target: "concertGame",
            event: "startAppealPhase"
        }]
    },
    2365: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = [{
            command: "showOverlay"
        }, {
            command: "showMask",
            imageName: "mask",
            label: "mask1"
        }, {
            command: "showComment",
            positionType: "middle",
            windowType: "m"
        }, {
            command: "playComment",
            content: "３ターン目は八宮めぐるさんが持っている\n「スキル」を選択してみましょう",
            lock: !1
        }, {
            command: "changeOverlay",
            x: 470,
            y: 534,
            width: 202,
            height: 170
        }, {
            command: "showFinger",
            type: "right",
            x: 500,
            y: 555
        }, {
            command: "hideMask",
            label: "mask1"
        }, {
            command: "showMask",
            imageName: "concert_turn_3_1",
            label: "mask2"
        }, {
            command: "waitEvent",
            target: "concertGame",
            event: "selectCard"
        }, {
            command: "changeOverlay",
            x: 0,
            y: 52,
            width: 200,
            height: 160
        }, {
            command: "hideMask",
            label: "mask2"
        }, {
            command: "showMask",
            imageName: "concert_vocal",
            label: "mask3"
        }, {
            command: "playComment",
            windowType: "s",
            content: "もう一度「Vocal担当審査員」を選択してください",
            lock: !1
        }, {
            command: "showFinger",
            type: "left",
            x: 112,
            y: 120
        }, {
            command: "waitEvent",
            target: "concertGame",
            event: "selectJudge"
        }, {
            command: "hideMask",
            label: "mask3"
        }, {
            command: "changeOverlay",
            x: 0,
            y: 0,
            width: 1136,
            height: 640
        }, {
            command: "playComment",
            positionType: "top",
            windowType: "m",
            content: "アピールメーターをTAPしてください\nふふ、そろそろ慣れてきましたか～？",
            lock: !1
        }, {
            command: "waitEvent",
            target: "concertGame",
            event: "startAppealPhase"
        }]
    },
    2366: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = [{
            command: "showOverlay"
        }, {
            command: "showMask",
            imageName: "mask",
            label: "mask1"
        }, {
            command: "showComment",
            positionType: "top",
            windowType: "l"
        }, {
            command: "hideMask",
            label: "mask1"
        }, {
            command: "showMask",
            imageName: "concert_turn_4_1",
            label: "mask2"
        }, {
            command: "changeOverlay",
            x: 880,
            y: 514,
            width: 256,
            height: 126
        }, {
            command: "playComment",
            content: "思い出ゲージが溜まりましたよ\nプロデューサーさんとアイドルとのコミュニケーション\nによって、引き出された能力です",
            lock: !1
        }, {
            command: "showFinger",
            type: "right",
            x: 900,
            y: 555
        }, {
            command: "waitEvent",
            target: "concertGame",
            event: "selectCard"
        }, {
            command: "hideMask",
            label: "mask2"
        }, {
            command: "showMask",
            imageName: "mask",
            label: "mask"
        }, {
            command: "changeOverlay",
            x: 568,
            y: 366,
            width: 406,
            height: 160
        }, {
            command: "wait",
            time: 200
        }, {
            command: "hideMask",
            label: "mask"
        }, {
            command: "showMask",
            imageName: "concert_turn_4_2",
            label: "mask3"
        }, {
            command: "playComment",
            content: "さらに、今回は「リンクアピール」の条件を満たしているので、思い出アピールの後に続けて「リンクアピール」が行われますよ"
        }, {
            command: "playComment",
            content: "アイドル達の輝く瞬間をしっかり見届けてくださいね！"
        }, {
            command: "hideMask",
            label: "mask3"
        }, {
            command: "showMask",
            imageName: "concert_dance",
            label: "mask4"
        }, {
            command: "changeOverlay",
            x: 0,
            y: 212,
            width: 200,
            height: 160
        }, {
            command: "playComment",
            windowType: "s",
            content: "それでは、使ってみましょう～",
            lock: !1
        }, {
            command: "showFinger",
            type: "left",
            x: 112,
            y: 260
        }, {
            command: "waitEvent",
            target: "concertGame",
            event: "selectJudge"
        }, {
            command: "hideMask",
            label: "mask4"
        }, {
            command: "changeOverlay"
        }, {
            command: "waitEvent",
            target: "concertGame",
            event: "startMemoryRoulette"
        }, {
            command: "trigger",
            target: "concertGame",
            event: "stopMemoryRoulette"
        }, {
            command: "waitEvent",
            target: "concertGame",
            event: "stopOnGood"
        }, {
            command: "playComment",
            windowType: "m",
            content: "Goodのタイミングをうまく狙えると\n思い出アピールの力が「最大限」引き出されます"
        }, {
            command: "playComment",
            content: "「Good」をTAPしましょう\n本番では、しっかり狙っていきましょう",
            lock: !1
        }, {
            command: "changeOverlay",
            x: 0,
            y: 0,
            width: 1136,
            height: 640
        }, {
            command: "showFinger",
            type: "right",
            x: 468,
            y: 300
        }, {
            command: "waitInput",
            target: "concertGame",
            event: "touchstart",
            bringFront: !1
        }]
    },
    2367: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = [{
            command: "pause",
            target: "concertGame"
        }, {
            command: "showMask",
            imageName: "mask",
            label: "mask1"
        }, {
            command: "showOverlay"
        }, {
            command: "showTips",
            imageName: "017"
        }, {
            command: "showComment",
            positionType: "top",
            windowType: "l"
        }, {
            command: "playComment",
            content: "リンクアピールの発動条件はスキルによって異なります\n条件を満たしていないと発動できませんので\n確認をしてからユニットを編成しましょう"
        }, {
            command: "wait",
            time: 2e3
        }, {
            command: "resume",
            target: "concertGame"
        }]
    },
    2368: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = [{
            command: "pause",
            target: "concertGame"
        }, {
            command: "showOverlay"
        }, {
            command: "showMask",
            imageName: "mask",
            label: "mask1"
        }, {
            command: "showTips",
            imageName: "018"
        }, {
            command: "showComment",
            positionType: "top",
            windowType: "l"
        }, {
            command: "playVoice",
            voiceName: "hazuki_tutorial_6"
        }, {
            command: "playComment",
            content: "プロデューサーさん、やりましたね～\n審査員を満足させることができたので\n「スター」を獲得することができましたよ\n"
        }, {
            command: "wait",
            time: 2e3
        }, {
            command: "changeTips",
            imageName: "019"
        }, {
            command: "playComment",
            content: "ライバルよりも「一番多くのスターを獲得」して\n１位を目指しましょう"
        }, {
            command: "wait",
            time: 2e3
        }, {
            command: "resume",
            target: "concertGame"
        }]
    },
    938: function(e, t, a) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function r(e) {
            if (Array.isArray(e)) {
                for (var t = 0, a = Array(e.length); t < e.length; t++)
                    a[t] = e[t];
                return a
            }
            return Array.from(e)
        }
        function i(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function o(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function l(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = function() {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, a, n) {
                return a && e(t.prototype, a),
                n && e(t, n),
                t
            }
        }()
          , c = a(62)
          , u = n(c)
          , f = a(1192)
          , d = n(f)
          , p = a(1248)
          , h = n(p)
          , y = a(1292)
          , _ = n(y)
          , m = a(57)
          , g = n(m)
          , b = a(144)
          , v = n(b)
          , w = a(1042)
          , k = n(w)
          , S = a(1193)
          , E = n(S)
          , T = function(e) {
            function t(e) {
                i(this, t);
                var a = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return a.createConcertGame(e, E.default.fes, k.default.createFes()),
                a
            }
            return l(t, e),
            s(t, [{
                key: "goToResult",
                value: function(e) {
                    this.showLoadingLayer(),
                    g.default.fes.finish(Object.assign({
                        isRetired: e.isRetired
                    })).then(function(e) {
                        var t = v.default.createWhite();
                        u.default.directTo("/fesResult", {
                            request: !1,
                            showLoading: !1,
                            sceneParams: e,
                            transition: t
                        })
                    })
                }
            }], [{
                key: "request",
                value: function() {
                    return g.default.fes.resume()
                }
            }, {
                key: "getContentResources",
                value: function(e) {
                    var t = ["concert_player_icon"]
                      , a = ["concert_card", "concert_icon", "cut_in", "memory_roulette_bad", "memory_roulette_good"]
                      , n = ["cb_costume", "stand_costume"]
                      , r = ["concert_rival_icon", "active_skill_silhouette"];
                    return (0,
                    _.default)(e, {
                        centerIdolImageList: t,
                        idolImageList: a,
                        idolSpineList: n,
                        rivalImageList: r
                    })
                }
            }, {
                key: "uiResources",
                get: function() {
                    return [].concat(r(h.default), [k.default.IMAGES.FES.bg])
                }
            }]),
            t
        }(d.default);
        t.default = T
    },
    941: function(e, t, a) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function r(e) {
            if (Array.isArray(e)) {
                for (var t = 0, a = Array(e.length); t < e.length; t++)
                    a[t] = e[t];
                return a
            }
            return Array.from(e)
        }
        function i(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function o(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function l(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = function() {
            function e(e, t) {
                var a = []
                  , n = !0
                  , r = !1
                  , i = void 0;
                try {
                    for (var o, l = e[Symbol.iterator](); !(n = (o = l.next()).done) && (a.push(o.value),
                    !t || a.length !== t); n = !0)
                        ;
                } catch (e) {
                    r = !0,
                    i = e
                } finally {
                    try {
                        !n && l.return && l.return()
                    } finally {
                        if (r)
                            throw i
                    }
                }
                return a
            }
            return function(t, a) {
                if (Array.isArray(t))
                    return t;
                if (Symbol.iterator in Object(t))
                    return e(t, a);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }()
          , c = function() {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, a, n) {
                return a && e(t.prototype, a),
                n && e(t, n),
                t
            }
        }()
          , u = a(62)
          , f = n(u)
          , d = a(1192)
          , p = n(d)
          , h = a(1248)
          , y = n(h)
          , _ = a(1292)
          , m = n(_)
          , g = a(57)
          , b = n(g)
          , v = a(144)
          , w = n(v)
          , k = a(1042)
          , S = n(k)
          , E = a(1193)
          , T = n(E)
          , O = a(110)
          , x = n(O)
          , P = function(e) {
            function t(e) {
                i(this, t);
                var a = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return a.createConcertGame(e, T.default.fesMatch, S.default.createFes()),
                a
            }
            return l(t, e),
            c(t, [{
                key: "goToResult",
                value: function(e) {
                    this.showLoadingLayer(),
                    Promise.all([b.default.fesMatch.finish({
                        fesMatchConcertRivals: e.rivals,
                        isRetired: e.isRetired
                    }), x.default.get()]).then(function(e) {
                        var t = w.default.createWhite()
                          , a = s(e, 2)
                          , n = a[0]
                          , r = a[1];
                        f.default.directTo("/fesMatchResult", {
                            request: !1,
                            showLoading: !1,
                            sceneParams: Object.assign(n, {
                                earthUserResponse: r
                            }),
                            transition: t
                        })
                    })
                }
            }], [{
                key: "request",
                value: function() {
                    return b.default.fesMatch.resume()
                }
            }, {
                key: "getContentResources",
                value: function(e) {
                    var t = ["concert_player_icon"]
                      , a = ["concert_card", "concert_icon", "cut_in", "memory_roulette_bad", "memory_roulette_good"]
                      , n = ["cb_costume", "stand_costume"]
                      , r = ["concert_rival_icon", "active_skill_silhouette"];
                    return (0,
                    m.default)(e, {
                        centerIdolImageList: t,
                        idolImageList: a,
                        idolSpineList: n,
                        rivalImageList: r
                    })
                }
            }, {
                key: "uiResources",
                get: function() {
                    return [].concat(r(y.default), [S.default.IMAGES.FES.bg])
                }
            }]),
            t
        }(p.default);
        t.default = P
    },
    971: function(e, t, a) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function r(e) {
            if (Array.isArray(e)) {
                for (var t = 0, a = Array(e.length); t < e.length; t++)
                    a[t] = e[t];
                return a
            }
            return Array.from(e)
        }
        function i(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function o(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function l(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = function() {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, a, n) {
                return a && e(t.prototype, a),
                n && e(t, n),
                t
            }
        }()
          , c = a(1192)
          , u = n(c)
          , f = a(140)
          , d = n(f)
          , p = a(1042)
          , h = n(p)
          , y = a(1193)
          , _ = n(y)
          , m = function(e) {
            function t(e) {
                i(this, t);
                var a = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return a._produceAction = d.default,
                a.createConcertGame(e, _.default.audition, h.default.createAudition(e.produceAudition.difficulty)),
                a._auditionId = e.produceAudition.id,
                a
            }
            return l(t, e),
            s(t, [{
                key: "_requestFinishConcert",
                value: function(e) {
                    return d.default.auditionFinish({
                        auditionId: this._auditionId,
                        produceConcertRivals: e.rivals,
                        isRetired: e.isRetired
                    })
                }
            }], [{
                key: "getContentResources",
                value: function(e) {
                    return [].concat(r(u.default.getContentResources(e)), [h.default.IMAGES.AUDITION(e.produceAudition.difficulty).bg])
                }
            }]),
            t
        }(u.default);
        t.default = m
    },
    972: function(e, t, a) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function r(e) {
            if (Array.isArray(e)) {
                for (var t = 0, a = Array(e.length); t < e.length; t++)
                    a[t] = e[t];
                return a
            }
            return Array.from(e)
        }
        function i(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function o(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function l(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = function() {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, a, n) {
                return a && e(t.prototype, a),
                n && e(t, n),
                t
            }
        }()
          , c = a(1192)
          , u = n(c)
          , f = a(1248)
          , d = n(f)
          , p = a(140)
          , h = n(p)
          , y = a(1042)
          , _ = n(y)
          , m = a(1193)
          , g = n(m)
          , b = function(e) {
            function t(e) {
                i(this, t);
                var a = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return a._produceAction = h.default,
                a.createConcertGame(e, g.default.concert, _.default.createConcert(e.isFanMeeting, e.isFinal), {
                    isProduceConcert: !0
                }),
                a
            }
            return l(t, e),
            s(t, [{
                key: "_requestFinishConcert",
                value: function(e) {
                    return h.default.concertFinish({
                        produceConcertRivals: e.rivals,
                        isRetired: e.isRetired
                    })
                }
            }], [{
                key: "getContentResources",
                value: function(e) {
                    var t = []
                      , a = _.default.IMAGES.CONCERT.WING.bg;
                    return e.isFanMeeting && (t.push("images/ui/concert/parts_fan_meeting.json"),
                    a = e.isFinal ? _.default.IMAGES.CONCERT.FAN_MEETING.bg : _.default.IMAGES.CONCERT.FAN_MEETING_REHEARSAL.bg),
                    t.push(a),
                    [].concat(r(u.default.getContentResources(e)), t)
                }
            }, {
                key: "uiResources",
                get: function() {
                    return [].concat(r(d.default))
                }
            }]),
            t
        }(u.default);
        t.default = b
    },
    990: function(e, t, a) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function r(e) {
            if (Array.isArray(e)) {
                for (var t = 0, a = Array(e.length); t < e.length; t++)
                    a[t] = e[t];
                return a
            }
            return Array.from(e)
        }
        function i(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function o(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function l(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = function() {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, a, n) {
                return a && e(t.prototype, a),
                n && e(t, n),
                t
            }
        }()
          , c = a(1192)
          , u = n(c)
          , f = a(200)
          , d = n(f)
          , p = a(1070)
          , h = n(p)
          , y = a(2361)
          , _ = n(y)
          , m = a(2362)
          , g = n(m)
          , b = a(2363)
          , v = n(b)
          , w = a(2364)
          , k = n(w)
          , S = a(2365)
          , E = n(S)
          , T = a(2366)
          , O = n(T)
          , x = a(2367)
          , P = n(x)
          , I = a(2368)
          , M = n(I)
          , A = a(1042)
          , j = n(A)
          , C = a(1193)
          , D = n(C)
          , R = a(1050)
          , L = n(R)
          , F = [v.default, k.default, E.default, O.default]
          , N = 4
          , B = function(e) {
            function t(e) {
                i(this, t);
                var a = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                a._produceAction = d.default;
                var n = j.default.createAudition(e.produceAudition.difficulty)
                  , r = a.createConcertGame(Object.assign(e, {
                    isTutorial: !0
                }), D.default.tutorialAudition, n);
                return r.pauseButton.hide(),
                r.speedButton.hide(),
                a._auditionId = e.produceAudition.id,
                r.name = "concertGame",
                r.once("startConcert", function() {
                    h.default.createAndPlay(_.default, a)
                }),
                r.on("setUpTurn", function(e) {
                    var t = F[e - 1];
                    t && h.default.createAndPlay(t, a)
                }),
                r.once("showAppealStartText", function() {
                    h.default.createAndPlay(g.default, a)
                }),
                r.once("endLinkSkill", function() {
                    h.default.createAndPlay(P.default, a)
                }),
                r.on("endAppealPhase", function(e) {
                    e === N && h.default.createAndPlay(M.default, a)
                }),
                a
            }
            return l(t, e),
            s(t, [{
                key: "_requestFinishConcert",
                value: function(e) {
                    return this._produceAction.auditionFinish({
                        score: e.score,
                        produceConcertRivals: e.rivals
                    })
                }
            }], [{
                key: "getContentResources",
                value: function(e) {
                    return [].concat(r(u.default.getContentResources(e)), [j.default.IMAGES.AUDITION(e.produceAudition.difficulty).bg])
                }
            }, {
                key: "request",
                value: function() {
                    return d.default.resume()
                }
            }, {
                key: "uiResources",
                get: function() {
                    return [].concat(r(L.default), r(u.default.uiResources), r(h.default.getTrackResources([].concat(r(_.default), r(g.default), r(v.default), r(k.default), r(E.default), r(O.default), r(P.default), r(M.default)))))
                }
            }]),
            t
        }(u.default);
        t.default = B
    }
});
//# sourceMappingURL=0-9d57391fc765be71c6da.chunk.js.map
