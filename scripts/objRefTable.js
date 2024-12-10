const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Tween,
		C3.Behaviors.Flash,
		C3.Plugins.Arr,
		C3.Plugins.Touch,
		C3.Plugins.Mouse,
		C3.Plugins.System.Cnds.IsGroupActive,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Acts.SetLayerVisible,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.Sprite.Exps.Width,
		C3.Plugins.Sprite.Exps.Height,
		C3.Plugins.System.Cnds.For,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.System.Exps.viewportwidth,
		C3.Plugins.System.Exps.loopindex,
		C3.Plugins.System.Exps.viewportheight,
		C3.Plugins.Sprite.Acts.SetOpacity,
		C3.Plugins.Sprite.Acts.SetInstanceVar,
		C3.Plugins.Arr.Exps.At,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.System.Cnds.ForEach,
		C3.Plugins.System.Acts.Wait,
		C3.Behaviors.Tween.Acts.TweenOneProperty,
		C3.Plugins.Arr.Acts.SetSize,
		C3.Plugins.Arr.Acts.Push,
		C3.Plugins.Arr.Acts.Shuffle,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.Touch.Cnds.OnTapGestureObject,
		C3.Plugins.Sprite.Cnds.IsAnimPlaying,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.Sprite.Acts.SetAnimFrame,
		C3.Plugins.System.Acts.WaitForPreviousActions,
		C3.Plugins.System.Cnds.TriggerOnce,
		C3.Plugins.System.Cnds.Compare,
		C3.Plugins.System.Cnds.PickByComparison,
		C3.Plugins.Sprite.Acts.MoveToTop,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Plugins.System.Exps.layoutwidth,
		C3.Plugins.System.Exps.layoutheight,
		C3.Plugins.Sprite.Acts.SetSize,
		C3.Plugins.Mouse.Cnds.IsOverObject,
		C3.Plugins.Mouse.Acts.SetCursor,
		C3.Plugins.System.Cnds.Else,
		C3.Plugins.System.Acts.GoToLayout
	];
};
self.C3_JsPropNameTable = [
	{KartFrameNo: 0},
	{KartBak: 0},
	{Tween: 0},
	{Flash: 0},
	{cards: 0},
	{dogrucard1: 0},
	{dogrucard2: 0},
	{golge: 0},
	{KartNumaralari: 0},
	{Touch: 0},
	{Mouse: 0},
	{Sprite: 0},
	{Butonlar: 0},
	{SatirSayisi: 0},
	{SutunSayisi: 0},
	{TabloGenislik: 0},
	{bosluk: 0},
	{TabloYukseklik: 0},
	{sayac: 0},
	{Kart1: 0},
	{Kart2: 0},
	{kartDurum: 0},
	{TiklamaSayisi: 0}
];

self.InstanceType = {
	cards: class extends self.ISpriteInstance {},
	dogrucard1: class extends self.ISpriteInstance {},
	dogrucard2: class extends self.ISpriteInstance {},
	golge: class extends self.ISpriteInstance {},
	KartNumaralari: class extends self.IArrayInstance {},
	Touch: class extends self.IInstance {},
	Mouse: class extends self.IInstance {},
	Sprite: class extends self.ISpriteInstance {},
	Butonlar: class extends self.ISpriteInstance {}
}