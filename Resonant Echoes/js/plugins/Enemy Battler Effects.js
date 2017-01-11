// ------------------------------------------------------------------
// Enemy Battler Effects.js
// ------------------------------------------------------------------
/*:
*
* @plugindesc Creates enemy battler animation and collapse effects.
* @author Soulpour777
*
* @param FloatSpeed
* @desc Floating Movement Speed over time.
* @default 300
*
* @param SidewaysSpeed
* @desc Sideways Movement Speed over time.
* @default 300
*
* @param TumbleSpeed
* @desc Tumble Movement Speed over time.
* @default 700
*
* @param BreathSpeed
* @desc Breath Movement Speed over time.
* @default 1000
*
* @help
// ------------------------------------------------------------------
// Enemy Battler Effects Documentation
// ------------------------------------------------------------------
This plugin allows you to animate you static enemies in battle.
However, you need to make a note tag in order for that to happen.
There are two effects in this plugin, Motion and Collapse.

Motion happens as the movement of the battler, while Collapse when
it dies.

To do motion, you need to place this in the enemy note box:
Note: Make sure there's no spaces.

<motion:x>

where x can be the following:
 float - makes the battlers float, to generate flight movement.
 sideways - moves sideways
 tumble - moves in arc
 breath - makes the enemy breath
 
example:
<motion:float>

To do collapse effects, you need to place this in the enemy
note box. Note: Make sure there's no spaces.

<collapse:x>
where x can be the following:
 flyleft - pulls the battler on the left side before it fades
 flatten - flattens the battler before it fades
 bloat - enlarges itself before it fades
 pullout - pulls the battler upwards before it fades

Example:
<collapse:bloat>

There are additional things you can do for blending:
<blend:x>
where x can be:
additive - activates the additive blend mode
normal - activates the normal blend mode

Example:
<blend:additive>


*/
(function(){
	var Imported = Imported || {};
	Imported.EnemyBattlerEffects = true;
	var Soulpour777 = Soulpour777 || {};
	Soulpour777.EnemyBattlerEffects = {};
	Soulpour777.EnemyBattlerEffects.params = PluginManager.parameters('Enemy Battler Effects'); 	
	var float_speed = Number(Soulpour777.EnemyBattlerEffects.params['FloatSpeed'] || 300);
	var sideways_speed = Number(Soulpour777.EnemyBattlerEffects.params['SidewaysSpeed'] || 300);
	var tumble_speed = Number(Soulpour777.EnemyBattlerEffects.params['TumbleSpeed'] || 700);
	var breath_speed = Number(Soulpour777.EnemyBattlerEffects.params['BreathSpeed'] || 1000);
	Sprite_Enemy.prototype.update = function() {
	    Sprite_Battler.prototype.update.call(this);
	    if (this._enemy) {
	        this.updateEffect();
	        this.updateStateSprite();
	    }
	    if ($dataEnemies[this._enemy._enemyId].meta.motion === "float") {
			var x = new Date().getTime() / float_speed;
		    this.y = Graphics.height / 2 - 45 - this.height / 4 + Math.cos(parseFloat(x)) * 30;   
	    } 
	    if ($dataEnemies[this._enemy._enemyId].meta.motion === "sideways") {
			var x = new Date().getTime() / sideways_speed;
		    this.x += Graphics.width / 4 - 45 - this.height / 4 + Math.cos(parseFloat(x)) * 30;    	
	    } 
	    if ($dataEnemies[this._enemy._enemyId].meta.motion === "tumble") {
			var x = new Date().getTime() / tumble_speed;
			this.rotation += Math.cos(parseFloat(x)) * 0.005;
	    }     
	    if ($dataEnemies[this._enemy._enemyId].meta.motion === "breath") {
	    	var x = new Date().getTime() / breath_speed;
	    	this.anchor.x = this.anchor.y = 0.5;
	    	this.scale.x = 0.30 * Math.cos(parseFloat(x)) / 2 + 1.50;
	    	this.scale.y = 0.30 * Math.cos(parseFloat(x)) / 2 + 1.50;
	    }

	};

	Sprite_Enemy.prototype.updateCollapse = function() {
	    if ($dataEnemies[this._enemy._enemyId].meta.blend === "additive") {
	    	this.blendMode = Graphics.BLEND_ADD;
	    	this.setBlendColor([255, 128, 128, 128]);
	    }
	    if ($dataEnemies[this._enemy._enemyId].meta.blend === "normal") {
	    	this.blendMode = Graphics.BLEND_NORMAL;
	    } 
	    this.opacity *= this._effectDuration / (this._effectDuration + 1);
	    if ($dataEnemies[this._enemy._enemyId].meta.collapse === "pullout") {
	    	this.scale.y += 0.10;
	    }
	    if ($dataEnemies[this._enemy._enemyId].meta.collapse === "flatten") {
	    	this.scale.x += 0.10;
	    }    
	    if ($dataEnemies[this._enemy._enemyId].meta.collapse === "flyleft") {
	    	this.x -= 100;
	    }     
	    if ($dataEnemies[this._enemy._enemyId].meta.collapse === "bloat") {
	    	this.anchor.x = this.anchor.y = 0.5;
	    	this.scale.x += 0.10;
	    	this.scale.y += 0.10;
	    }      
	};

})();