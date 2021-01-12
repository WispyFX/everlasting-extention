// JavaScript source code
const shotgunHit = new Effect(35, e => {
	Draw.color(Color.valueOf("f7c52d"), Color.valueOf("bf9002"), e.fin());
	Draw.alpha(e.fout());
	Fill.circle(e.x, e.y, e.fout() * 1.2);

	Draw.color(Color.valueOf("d9d218"), Color.valueOf("f7a32d"), e.fin());
	const hj = new Floatc2({
		get: function (x, y) {
			const ang = Mathf.angle(x, y);
			Lines.stroke(2 * e.fout());
			Lines.lineAngle(e.x + x, e.y + y, ang, e.fout());
			Lines.stroke(1);
		}
	});
	Angles.randLenVectors(e.id, 4, e.finpow() * 2, e.rotation, 180, hj);
	Draw.color();
});

const shotgunBasicBullet = extend(BasicBulletType, {});
shotgunBasicBullet.despawnEffect = shotgunHit;
shotgunBasicBullet.hitEffect = shotgunBasicBullet.despawnEffect;
shotgunBasicBullet.backColor = Color.valueOf("bf8300");
shotgunBasicBullet.width = 4;
shotgunBasicBullet.height = 6;
shotgunBasicBullet.shrinkY = 0.1;
shotgunBasicBullet.shrinkX = 0.2;
shotgunBasicBullet.spin = 0.05;
shotgunBasicBullet.damage = 25;
shotgunBasicBullet.speed = 3.6;
shotgunBasicBullet.shootEffect = Fx.rocketSmokeLarge;
shotgunBasicBullet.hitColor = Vars.mobile ? Color.valueOf("bf8300") : Color.valueOf("db9702");
shotgunBasicBullet.lifetime = 40;
shotgunBasicBullet.knockback = 0;


const sawburst = extendContent(ItemTurret, "sawburst", {
	init() {
		this.super$init();

		this.ammo(
			Vars.content.getByName(ContentType.item, "everlasting-extention-platinum"), shotgunBasicBullet);
	}
});
sawburst.health = 1950;
sawburst.size = 2;
sawburst.rotateSpeed = 15;
sawburst.inaccuracy = 17;
sawburst.shots = 17;
sawburst.reloadTime = 50;
sawburst.hasItems = true;
sawburst.hasLiquids = true;
sawburst.range = 120;
sawburst.localizedName = "sawburst";
sawburst.description = "short range shotgun turrect, fires alot of bullets at once.";
sawburst.buildVisibility = BuildVisibility.shown;
// dropler.requirements = ItemStack.with(Items.titanium, 560, Vars.content.getByName(ContentType.item, "everlasting-extention-microchip"), 200, Items.silicon, 400, Vars.content.getByName(ContentType.item, "everlasting-extention-platinum"), 160);
sawburst.category = Category.turret;
