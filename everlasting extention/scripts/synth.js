const synthHit = new Effect(lifetime, e => {
	Draw.color(valueOf("8432ac"), color.valueOf("a245d0"), e.fin());
	const hj = new Floatc2({
		get: function (x, y) {
			Fill.circle(e.x + x, e.y + y, 4);
		}
	});
	Angles.randLenVectors(e.id, 3, e.finpow() * 2, e.rotation, 320, hj);
});

const telsaBullet2 = extend(LightningBulletType, {});
telsaBullet2.sapStrength = 0.48;
telsaBullet2.length = 55;
telsaBullet2.damage = 15;
telsaBullet2.shootEffect = Fx.sapExplosion;
telsaBullet2.hitColor = telsaBullet.color = Color.valueOf("a245d0");
telsaBullet2.despawnEffect = Fx.synthHit;
telsaBullet2.hitEffect = telsaBullet2.despawnEffect;
telsaBullet2.width = 6;
telsaBullet2.lifetime = 90;
telsaBullet2.knockback = -1;
telsaBullet2.collideAir = true;
telsaBullet2.lightning = 8;//number of lightning
telsaBullet2.lightningLength = 7;//length of lighning
telsaBullet2.lightningLengthRand = 10;//a random number from 0 to 15 will be added to the length of the lightning, that is, randomization of the length
telsaBullet2.lightningDamage = 10;//lightning damage
telsaBullet2.lightningAngle = 12;//angle of direction of lightning relative to the angle of the bullet
telsaBullet2.lightningCone = 3;//lightning angle randomization
telsaBullet2.largeHit = true;
telsaBullet2.lightColor = telsaBullet2.lightningColor = Color.valueOf("8432ac");

const synth = extendContent(PowerTurret, "voltcoil", {});
synth.shootType = telsaBullet2;
synth.size = 5;
synth.rotateSpeed = 15;
synth.inaccuracy = 17;
synth.shots = 12;
synth.reloadTime = 8;
synth.hasPower = true;
synth.hasItems = false;
synth.hasLiquids = true;
synth.range = 160;
synth.localizedName = "synth";
synth.description = "short range tesla armanent, fires quickly with relatively low damage.";
synth.buildVisibility = BuildVisibility.shown;
// dropler.requirements = ItemStack.with(Items.titanium, 560, Vars.content.getByName(ContentType.item, "everlasting-extention-microchip"), 200, Items.silicon, 400, Vars.content.getByName(ContentType.item, "everlasting-extention-platinum"), 160);
synth.category = Category.turret;
