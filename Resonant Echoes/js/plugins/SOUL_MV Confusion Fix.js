// -------------------------------------------------------------------------------------------------------
// SOUL_MV Confusion Fix.js
// Author: Soulpour777
// -------------------------------------------------------------------------------------------------------
/*:
* @plugindesc v1.0 Changes the monotonous Confusion State to different actions for Actors and Enemies.
* @author Soulpour777 - soulxregalia.wordpress.com
*
* @param Confusion Skills
* @desc Skills randomly activated when an actor or enemy is confused. (SKILL ID)
* @default 1, 2, 6, 7
*
* @param Wait Skill
* @desc The skill ID that you use for the Wait Skill
* @default 7
*/
(function(){
	var SOUL_MV = SOUL_MV || {};
	var params = PluginManager.parameters('SOUL_MV Confusion Fix');
	SOUL_MV.ConfusionFix = SOUL_MV.ConfusionFix || {};
	SOUL_MV.ConfusionFix.confuseAction = params['Confusion Skills'].split(/\s*,\s*/).filter(function(value) { return !!value; });
	SOUL_MV.ConfusionFix.waitSkill = Number(params['Wait Skill'] || 7);

	Game_Action.prototype.setConfusion = function() {
		var confuseAction = Math.randomInt(4)+1;
		switch(confuseAction) {
			case 1: //use attack
				this.setAttack();
				break;
			case 2: // use guard
				this.setGuard();
				break;
			case 3: // Wait (7)
				this.setSkill(SOUL_MV.ConfusionFix.waitSkill);
				break;
			case 4: //Random Skill
				var setskill = Number(SOUL_MV.ConfusionFix.confuseAction[Math.randomInt(SOUL_MV.ConfusionFix.confuseAction.length)]);
				this.setSkill(setskill);
				break;
		}
	};
})();