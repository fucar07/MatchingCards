const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Tween,
		C3.Behaviors.Flash,
		C3.Behaviors.Timer,
		C3.Plugins.Arr,
		C3.Plugins.Touch,
		C3.Plugins.Mouse,
		C3.Plugins.Browser,
		C3.Plugins.Audio,
		C3.Plugins.Text,
		C3.Behaviors.Sin,
		C3.Plugins.Touch.Cnds.OnTapGestureObject,
		C3.Plugins.Sprite.Cnds.IsVisible,
		C3.Plugins.Sprite.Cnds.CompareOpacity,
		C3.Plugins.Sprite.Acts.SetOpacity,
		C3.Plugins.System.Acts.WaitForPreviousActions,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Plugins.System.Cnds.IsGroupActive,
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
		C3.Plugins.Sprite.Acts.SetInstanceVar,
		C3.Plugins.Arr.Exps.At,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.System.Cnds.PickAll,
		C3.Plugins.System.Acts.Wait,
		C3.Behaviors.Tween.Acts.TweenOneProperty,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.Sprite.Acts.SetAnimFrame,
		C3.Behaviors.Timer.Acts.StartTimer,
		C3.Plugins.System.Cnds.ForEach,
		C3.Plugins.Arr.Acts.SetSize,
		C3.Plugins.Arr.Acts.Push,
		C3.Plugins.Arr.Acts.Shuffle,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.System.Cnds.LayerVisible,
		C3.Plugins.Sprite.Cnds.IsAnimPlaying,
		C3.Plugins.System.Cnds.TriggerOnce,
		C3.Plugins.System.Cnds.Compare,
		C3.Plugins.System.Cnds.PickByComparison,
		C3.Plugins.Sprite.Acts.MoveToTop,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Plugins.System.Exps.layoutwidth,
		C3.Plugins.System.Exps.layoutheight,
		C3.Plugins.Sprite.Acts.SetSize,
		C3.Plugins.System.Acts.ResetGlobals,
		C3.Behaviors.Timer.Cnds.OnTimer,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Sprite.Exps.Count,
		C3.Behaviors.Timer.Acts.StopTimer,
		C3.Plugins.Mouse.Cnds.IsOverObject,
		C3.Plugins.Mouse.Acts.SetCursor,
		C3.Plugins.System.Cnds.Else,
		C3.Plugins.Browser.Cnds.IsFullscreen,
		C3.Plugins.Browser.Acts.CancelFullScreen,
		C3.Plugins.Browser.Acts.RequestFullScreen,
		C3.Plugins.System.Cnds.CompareBoolVar,
		C3.Plugins.Audio.Acts.SetPaused,
		C3.Plugins.System.Acts.SetBoolVar,
		C3.Behaviors.Flash.Acts.Flash,
		C3.Plugins.System.Cnds.Every
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
	{arkaplan: 0},
	{spbeyaz: 0},
	{CardBaslik: 0},
	{mebLogo: 0},
	{emegigecenler: 0},
	{Timer: 0},
	{sure: 0},
	{about: 0},
	{reference: 0},
	{KartNumaralari: 0},
	{Touch: 0},
	{Mouse: 0},
	{Browser: 0},
	{Audio: 0},
	{btn_basla: 0},
	{btn_anasayfa: 0},
	{btn_bilgi: 0},
	{btn_emegigecenler: 0},
	{btn_kaynakca: 0},
	{btn_replay: 0},
	{durum: 0},
	{btn_ses: 0},
	{btn_tamekran: 0},
	{text_Baslik: 0},
	{text_letsplay: 0},
	{text_sure: 0},
	{Sine: 0},
	{yildiz: 0},
	{bitis: 0},
	{text_bitis: 0},
	{ButonAilesi: 0},
	{AnaSayfaGorseller: 0},
	{SatirSayisi: 0},
	{SutunSayisi: 0},
	{TabloGenislik: 0},
	{bosluk: 0},
	{TabloYukseklik: 0},
	{sayac: 0},
	{Kart1: 0},
	{Kart2: 0},
	{kartDurum: 0},
	{TiklamaSayisi: 0},
	{musicDurum: 0}
];

self.InstanceType = {
	cards: class extends self.ISpriteInstance {},
	dogrucard1: class extends self.ISpriteInstance {},
	dogrucard2: class extends self.ISpriteInstance {},
	golge: class extends self.ISpriteInstance {},
	arkaplan: class extends self.ISpriteInstance {},
	spbeyaz: class extends self.ISpriteInstance {},
	CardBaslik: class extends self.ISpriteInstance {},
	mebLogo: class extends self.ISpriteInstance {},
	emegigecenler: class extends self.ISpriteInstance {},
	sure: class extends self.ISpriteInstance {},
	about: class extends self.ISpriteInstance {},
	reference: class extends self.ISpriteInstance {},
	KartNumaralari: class extends self.IArrayInstance {},
	Touch: class extends self.IInstance {},
	Mouse: class extends self.IInstance {},
	Browser: class extends self.IInstance {},
	Audio: class extends self.IInstance {},
	btn_basla: class extends self.ISpriteInstance {},
	btn_anasayfa: class extends self.ISpriteInstance {},
	btn_bilgi: class extends self.ISpriteInstance {},
	btn_emegigecenler: class extends self.ISpriteInstance {},
	btn_kaynakca: class extends self.ISpriteInstance {},
	btn_replay: class extends self.ISpriteInstance {},
	btn_ses: class extends self.ISpriteInstance {},
	btn_tamekran: class extends self.ISpriteInstance {},
	text_Baslik: class extends self.ISpriteInstance {},
	text_letsplay: class extends self.ISpriteInstance {},
	text_sure: class extends self.ITextInstance {},
	yildiz: class extends self.ISpriteInstance {},
	bitis: class extends self.ISpriteInstance {},
	text_bitis: class extends self.ITextInstance {},
	ButonAilesi: class extends self.ISpriteInstance {},
	AnaSayfaGorseller: class extends self.ISpriteInstance {}
}