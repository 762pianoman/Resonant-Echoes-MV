// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"YEP_BattleEngineCore","status":true,"description":"v1.43a Have more control over the flow of the battle system\nwith this plugin and alter various aspects to your liking.","parameters":{"---General---":"","Action Speed":"agi","Default System":"dtb","---Escape---":"","Escape Ratio":"0.5 * $gameParty.agility() / $gameTroop.agility()","Fail Escape Boost":"0.1","---Animation---":"","Animation Base Delay":"0","Animation Next Delay":"0","Certain Hit Animation":"120","Physical Animation":"52","Magical Animation":"51","Enemy Attack Animation":"39","Reflect Animation":"42","Motion Waiting":"false","---Frontview---":"","Front Position X":"Graphics.boxWidth / 8 + Graphics.boxWidth / 4 * index","Front Position Y":"Graphics.boxHeight - 180","Front Actor Sprite":"false","Front Sprite Priority":"1","---Sideview---":"","Home Position X":"screenWidth - 16 - (maxSize + 2) * 32 + index * 32","Home Position Y":"screenHeight - statusHeight - maxSize * 48 + (index+1) * 48 - 32","Side Sprite Priority":"1","---Sprites---":"","Default X Anchor":"0.5","Default Y Anchor":"1.0","Step Distance":"48","Flinch Distance":"12","Show Shadows":"true","---Damage Popups---":"","Popup Duration":"128","Newest Popup Bottom":"true","Popup Overlap Rate":"0.9","Critical Popup":"255, 0, 0, 160","Critical Duration":"60","---Tick-Settings---":"","Timed States":"false","Timed Buffs":"false","Turn Time":"100","AI Self Turns":"true","---Window Settings---":"","Lower Windows":"true","Window Rows":"4","Command Window Rows":"4","Command Alignment":"center","Start Actor Command":"true","Current Max":"false","---Selection Help---":"","Mouse Over":"true","Select Help Window":"true","User Help Text":"User","Ally Help Text":"Ally","Allies Help Text":"Allies","Enemy Help Text":"Enemy","Enemies Help Text":"Enemies","All Help Text":"All %1","Random Help Text":"%2 Random %1","---Enemy Select---":"","Visual Enemy Select":"true","Show Enemy Name":"true","Show Select Box":"false","Enemy Font Size":"20","Enemy Auto Select":"this.furthestRight()","---Actor Select---":"","Visual Actor Select":"true","---Battle Log---":"","Show Emerge Text":"false","Show Pre-Emptive Text":"true","Show Surprise Text":"true","Optimize Speed":"true","Show Action Text":"false","Show State Text":"false","Show Buff Text":"false","Show Counter Text":"true","Show Reflect Text":"true","Show Substitute Text":"true","Show Fail Text":"false","Show Critical Text":"false","Show Miss Text":"false","Show Evasion Text":"false","Show HP Text":"false","Show MP Text":"false","Show TP Text":"false"}},
{"name":"YEP_X_ActSeqPack1","status":true,"description":"v1.11 (Requires YEP_BattleEngineCore.js) Basic functions are\nadded to the Battle Engine Core's action sequences.","parameters":{"Default Volume":"90","Default Pitch":"100","Default Pan":"0"}},
{"name":"YEP_X_ActSeqPack2","status":true,"description":"v1.11 (Requires YEP_BattleEngineCore.js) Visual functions\nare added to the Battle Engine Core's action sequences.","parameters":{}},
{"name":"YEP_X_ActSeqPack3","status":true,"description":"v1.03 (Requires YEP_BattleEngineCore.js) Camera control is\nadded to the Battle Engine Core's action sequences.","parameters":{"Camera Option":"Battle Camera"}},
{"name":"YEP_X_AnimatedSVEnemies","status":true,"description":"v1.16 (Requires YEP_BattleEngineCore.js) This plugin lets\nyou use Animated Sideview Actors for enemies!","parameters":{"---General---":"","Anchor X":"0.5","Anchor Y":"1","Sprite Smoothing":"true","Sprite Width":"auto","Sprite Height":"auto","Collapse":"false","Frame Speed":"12","Show State Overlay":"true","---Shadows---":"","Show Shadow":"false","Shadow Scale X":"auto","Shadow Scale Y":"auto","---Breathing---":"","Enable Breathing":"1","Breathing Speed":"20","Breathing X Rate":"0.001","Breathing Y Rate":"0.02","HP Link Breathing":"false","---Floating---":"","Floating Speed":"20","Floating Rate":"0.3","Floating Height":"50","Floating Death":"true","---Motions---":"","Attack Motion":"thrust","Weapon Image Index":"0","Idle Motion":"walk","Damage Motion":"damage","Evade Motion":"evade","Escape Motion":"escape","Guard Motion":"guard","Abnormal Motion":"abnormal","Sleep Motion":"sleep","Dying Motion":"dying","Dead Motion":"dead","---Weapons---":"","Weapon 1 Motion":"swing","Weapon 1 Animation":"6","Weapon 2 Motion":"swing","Weapon 2 Animation":"6","Weapon 3 Motion":"swing","Weapon 3 Animation":"1","Weapon 4 Motion":"swing","Weapon 4 Animation":"6","Weapon 5 Motion":"swing","Weapon 5 Animation":"6","Weapon 6 Motion":"swing","Weapon 6 Animation":"1","Weapon 7 Motion":"missile","Weapon 7 Animation":"11","Weapon 8 Motion":"missile","Weapon 8 Animation":"11","Weapon 9 Motion":"missile","Weapon 9 Animation":"111","Weapon 10 Motion":"thrust","Weapon 10 Animation":"16","Weapon 11 Motion":"thrust","Weapon 11 Animation":"1","Weapon 12 Motion":"thrust","Weapon 12 Animation":"11","Weapon 13 Motion":"swing","Weapon 13 Animation":"1","Weapon 14 Motion":"swing","Weapon 14 Animation":"1","Weapon 15 Motion":"swing","Weapon 15 Animation":"1","Weapon 16 Motion":"swing","Weapon 16 Animation":"6","Weapon 17 Motion":"swing","Weapon 17 Animation":"7","Weapon 18 Motion":"swing","Weapon 18 Animation":"1","Weapon 19 Motion":"missile","Weapon 19 Animation":"11","Weapon 20 Motion":"missile","Weapon 20 Animation":"111","Weapon 21 Motion":"missile","Weapon 21 Animation":"111","Weapon 22 Motion":"thrust","Weapon 22 Animation":"7","Weapon 23 Motion":"missile","Weapon 23 Animation":"15","Weapon 24 Motion":"thrust","Weapon 24 Animation":"15","Weapon 25 Motion":"swing","Weapon 25 Animation":"1","Weapon 26 Motion":"thrust","Weapon 26 Animation":"1","Weapon 27 Motion":"thrust","Weapon 27 Animation":"1","Weapon 28 Motion":"thrust","Weapon 28 Animation":"1","Weapon 29 Motion":"thrust","Weapon 29 Animation":"1","Weapon 30 Motion":"thrust","Weapon 30 Animation":"1"}},
{"name":"YEP_BattleStatusWindow","status":true,"description":"v1.08 A simple battle status window that shows the\nfaces of your party members in horizontal format.","parameters":{"---Visual---":"","No Action Icon":"16","Name Font Size":"20","Param Font Size":"20","Param Y Buffer":"7","Param Current Max":"false","Adjust Columns":"false","State Icons Row":"1","---Actor Switching---":"","Left / Right":"true","PageUp / PageDown":"true","Allow Turn Skip":"true","---Front View---":"","Show Animations":"true","Show Sprites":"false","Align Animations":"true","X Offset":"24","Y Offset":"-16"}},
{"name":"YEP_TargetCore","status":true,"description":"v1.03 Expand the target scope from RPG Maker's default\nlimitations for better target control.","parameters":{"---Battle Engine---":"","Everybody Text":"All Allies and Enemies","All But User Text":"All %1 But %2","Random Any Text":"%1 Random","---Multiple Of---":"","Multiple Text":"%1 with %2 as a Multiple of %3","Multiple Everybody":"Anyone","Multiple Allies":"Any Ally","Multiple Foes":"Any Foe","---Row Formation---":"","Target Row Text":"%1's Row","Front Row Text":"%1 Front Row","Back Row Text":"%1 Back Row","Specific Row Text":"Specific %1 Row","Row Enemies":"Enemy","Row Allies":"Allied"}},
{"name":"YEP_VictoryAftermath","status":true,"description":"v1.06 Display an informative window after a battle is over\ninstead of message box text stating what the party earned.","parameters":{"---General---":"","Victory Order":"exp custom drops","---BGM---":"","Victory BGM":"","BGM Volume":"90","BGM Pitch":"100","BGM Pan":"0","---Battle Results---":"","Cheer Wait":"90","Battle Results Text":"Battle Results","Battle Drops Text":"Battle Spoils","---EXP Window---":"","Font Size":"28","Level Up Text":"LEVEL UP!","Max Level Text":"MAX LEVEL","Show Skills Learned":"false","Gained EXP Text":"Gained EXP","Gained EXP Format":"+%1","EXP Gauge Color 1":"30","EXP Gauge Color 2":"31","Level Gauge Color 1":"14","Level Gauge Color 2":"6","Gauge Ticks":"15","Tick SE":"Absorb2","Tick Volume":"90","Tick Pitch":"150","Tick Pan":"0"}},
{"name":"YEP_WeaponAnimation","status":true,"description":"v1.04 This plugin allows you to go past the standard\nweapon images and even using custom images.","parameters":{"Image Filepath":"img/weapons/","Image Smoothing":"true","Default Motion":"swing"}},
{"name":"YEP_X_AftermathLevelUp","status":true,"description":"v1.00 (Requires YEP_VictoryAftermath.js) Adds a level up\nportion to the Victory Aftermath sequences.","parameters":{"---General---":"","Level Up Title":"%1 has reached Level %2!","Enable Aftermath":"true","Font Size":"28","---Skill Learn---":"","Skill Text Singular":"Acquired Skill","Skill Text Plural":"Acquired Skills","Skill List Width":"200"}},
{"name":"YEP_X_AreaOfEffect","status":true,"description":"v1.00 (Requires YEP_BattleEngineCore & YEP_TargetCore)\nAdds Area of Effect scopes for targeting allies or enemies.","parameters":{"---Buffer---":"","Buffer X":"0","Buffer Y":"0","Center Animation":"true","---Circle---":"","Circle Graphic":"AoE_Circle","Circle Blend":"3","Circle Height Rate":"0.33","---Rectangle---":"","Rect Graphic":"AoE_Rect","Rect Blend":"3"}},
{"name":"YEP_X_CounterControl","status":true,"description":"v1.07 (Requires YEP_BattleEngineCore.js) Gives you more\ncontrol over how counters work in RPG Maker MV!","parameters":{"---General---":"","Queue Max":"20","---Default Traits---":"","Counter Skill":"1","Evade Counter":"false","Counter Name":"Counter-%1","Counter Icon":"78","Counter Total":"1","Ally Counter":"false","--Default Conditions-":"","Physical":"true","Single Target":"true","Not Counter":"false"}},
{"name":"YEP_X_InBattleStatus","status":true,"description":"v1.00 (Requires YEP_BattleEngineCore.js) Adds a 'Status'\noption in the Party Window in battle.","parameters":{"---General---":"","Command Text":"Status","Show Command":"true","Window X":"0","Window Y":"this.fittingHeight(2)","Window Width":"Graphics.boxWidth","Window Height":"Graphics.boxHeight - this.fittingHeight(2) - this.fittingHeight(4)","---Status List---":"","Status Width":"Math.max(312, Graphics.boxWidth / 4);","State Help Front":"\\i[%1]%2","State Help End":"","Healthy Icon":"127","Healthy Text":"Healthy","Healthy Help":"User is currently unaffected by status effects.","---Buffs List---":"","MaxHP Buff Text":"MaxHP Up","MaxHP Buff Help":"Raises Maximum Health to %1%.","MaxMP Buff Text":"MaxMP Up","MaxMP Buff Help":"Raises Maximum Mana to %1%.","ATK Buff Text":"ATK Up","ATK Buff Help":"Raises Attack to %1%.","DEF Buff Text":"DEF Up","DEF Buff Help":"Raises Defense to %1%.","MAT Buff Text":"MAT Up","MAT Buff Help":"Raises Magic Attack to %1%.","MDF Buff Text":"MDF Up","MDF Buff Help":"Raises Magic Defense to %1%.","AGI Buff Text":"AGI Up","AGI Buff Help":"Raises Agility to %1%.","LUK Buff Text":"LUK Up","LUK Buff Help":"Raises Luck to %1%.","---Debuffs List---":"","MaxHP Debuff Text":"MaxHP Down","MaxHP Debuff Help":"Lowers Maximum Health to %1%.","MaxMP Debuff Text":"MaxMP Down","MaxMP Debuff Help":"Lowers Maximum Mana to %1%.","ATK Debuff Text":"ATK Down","ATK Debuff Help":"Lowers Attack to %1%.","DEF Debuff Text":"DEF Down","DEF Debuff Help":"Lowers Defense to %1%.","MAT Debuff Text":"MAT Down","MAT Debuff Help":"Lowers Magic Attack to %1%.","MDF Debuff Text":"MDF Down","MDF Debuff Help":"Lowers Magic Defense to %1%.","AGI Debuff Text":"AGI Down","AGI Debuff Help":"Lowers Agility to %1%.","LUK Debuff Text":"LUK Down","LUK Debuff Help":"Lowers Luck to %1%."}},
{"name":"YEP_X_VisualHpGauge","status":true,"description":"v1.06 (Requires YEP_BattleEngineCore.js) Reveal HP Gauges\nwhen a battler is selected or takes damage in battle.","parameters":{"---General---":"","Display Actor":"true","Defeat First":"false","Always Visible":"false","---Appearance---":"","Minimum Gauge Width":"144","Gauge Height":"18","Back Color":"19","HP Color 1":"20","HP Color 2":"21","Gauge Duration":"30","Gauge Position":"false","Y Buffer":"-16","Use Thick Gauges":"true","---Text Display---":"","Show HP":"false","Show Value":"false","Show Max":"false"}},
{"name":"SuperOrangeMovementEx","status":false,"description":"Movement Improvements: Diagonal Movement, Pixel Movement, Actor Hitbox Changer.","parameters":{"Tile_Sections":"4","Diagonal_Movement":"true","FollowersDistance":"0.5","TriggerAllAvailableEvents":"false","TriggerTouchEventsAfterTeleport":"false","BlockRepeatedTouchEvents":"true","IgnoreEmptyEvents":"true","DisablePixelMovementForMouseRoutes":"true","EnableAutoAvoid":"true","AutoAvoid_AvoidEvents":"false","AutoAvoid_OnlyWhenDashing":"false","AutoAvoid_DashingDelay":"0","AutoAvoid_WalkingDelay":"0","AutoAvoid_MaxOffset":"0.75","AutoAvoid_RetainDirection":"true","EnableAutoAvoidDiagonal":"true","AvDiagonal_AvoidEvents":"true","AvDiagonal_OnlyWhenDashing":"false","AvDiagonal_DashingDelay":"0","AvDiagonal_WalkingDelay":"0"}},
{"name":"SOUL_ThomasEdisonMV","status":true,"description":"Creates a customizable lighting system for RPG Maker MV.","parameters":{"-- DEFAULT SCALES--":"","Scale A":"1","Scale B":"2","Scale C":"4","Scale D":"6","Scale E":"8","-- CLASSICAL LIGHT--":"","Classical Light Opacity":"130","Classical Light Flicker Rate":"20","-- SCALE ADJUSTMENT--":"","Scale A XCoord":"60","Scale A YCoord":"100","Scale B XCoord":"120","Scale B YCoord":"140","Scale C XCoord":"250","Scale C YCoord":"290","Scale D XCoord":"380","Scale D YCoord":"400","Scale E XCoord":"500","Scale E YCoord":"460"}},
{"name":"SOUL_MV Critical Hit Effects","status":true,"description":"v1.0 Creates a flash or plays an SE when a critical hit is inflicted.","parameters":{"-- FLASH SETTINGS --":"","Actor Flash Color":"255, 0, 0, 128","Actor Flash Duration":"8","Enemy Flash Color":"255, 0, 0, 128","Enemy Flash Duration":"8","-- SE SETTINGS --":"","Actor Critical SE":"Break","Actor SE Volume":"100","Actor SE Pitch":"100","Enemy Critical SE":"Break","Enemy SE Volume":"100","Enemy SE Pitch":"100"}},
{"name":"SOUL_MV Confusion Fix","status":true,"description":"v1.0 Changes the monotonous Confusion State to different actions for Actors and Enemies.","parameters":{"Confusion Skills":"1, 2, 6, 7","Wait Skill":"7"}},
{"name":"RandomBattleBGM","status":false,"description":"v2.0 Plays a different BGM randomly each battle.","parameters":{"Volume":"90","Pitch":"100","Pan":"0","BGM 1":"Battle1","BGM 2":"Battle2","BGM 3":"Battle3","BGM 4":"","BGM 5":"","BGM 6":"","BGM 7":"","BGM 8":"","BGM 9":"","BGM 10":"","BGM 11":"","BGM 12":"","BGM 13":"","BGM 14":"","BGM 15":"","BGM 16":"","BGM 17":"","BGM 18":"","BGM 19":"","BGM 20":"","BGM 21":"","BGM 22":"","BGM 23":"","BGM 24":"","BGM 25":"","BGM 26":"","BGM 27":"","BGM 28":"","BGM 29":"","BGM 30":""}},
{"name":"MrTS_RestoreHpMpTp","status":false,"description":"Allows to have equipment/states that restore HP/MP/TP after battles or level ups.","parameters":{}},
{"name":"Map zoom (by Masked)","status":false,"description":"Makes it possible to zoom in and out the game map\n\n<MBS MapZoom>","parameters":{"Reset on map change":"true","Default zoom":"1.0"}},
{"name":"KODERA_optimization","status":false,"description":"1.0.3 Speed up core RPG Maker engine","parameters":{}},
{"name":"ItemBook","status":false,"description":"Displays detailed statuses of items.","parameters":{"Unknown Data":"??????","Price Text":"Price","Equip Text":"Equip","Type Text":"Type"}},
{"name":"HIME_EnemyReinforcements","status":false,"description":"Allows you to summon more enemies into the current battle\r\nusing event commands.","parameters":{}},
{"name":"Galv_ExAgiTurn","status":false,"description":"(v.1.0) Have battlers gain an additional turn if they have much higher agility","parameters":{"Agi Percent":"50","Ex Turn Image":"exturn","Image Fade Speed":"25","Image X":"20","Image Y":"400","Ex Turn Name Color":"#fff","Non Ex Turn Name Color":"#666"}},
{"name":"EnemyBook","status":false,"description":"Displays detailed statuses of enemies.","parameters":{"Unknown Data":"??????"}},
{"name":"GALV_LayerGraphics","status":false,"description":"Create graphic layers for parallax mapping, fog, etc. View the 'Help' document for plugin commands and info.","parameters":{"Tile Size":"48"}},
{"name":"BBS_BGMFadeIn","status":false,"description":"v1.01 Allows for the current playing BGM to fade in instead of starting abruptly.\r\nSpecial Thanks to Tsukihime for all the help.\r\nSpecial Thanks to 'Ramza' Michael Sweeney for all the support.\r\n\r\n============================================================================\r\nTerms of Use\r\n============================================================================\r\n - Free for use in non-commercial projects with credits\r\n - Contact me for commercial use","parameters":{}}
];
