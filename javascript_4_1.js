$(document).ready(function () {
	var screenHeight = $(window).height();
	$('.ui-content').height(screenHeight);
	var imgMaxWidth = 0.7 * screenHeight / 2;
	// if (screenHeight > 1000) {
	// var imgMaxWidth = 0.7 * screenHeight/2;  
	// }
	// else if (screenHeight > 1500){
	// var imgMaxWidth = 0.6 * screenHeight/2;
	// }
	$('img').css('max-width', imgMaxWidth);
	$('#startPicture').css('max-width', 'none');


	//
	//Ab hier werden die einzelnen Werte verarbeitet 
	//

	$('#korrekt_Liegende').click(
		function () {
			var korrekt_Liegende_Counter = $('#korrekt_Liegende_Anzeige').val();
			korrekt_Liegende_Counter++;
			localStorage.setItem('korrekt_Liegende_Counter', korrekt_Liegende_Counter);
			var korrekt_Liegende_Anzeige = parseInt(localStorage.getItem('korrekt_Liegende_Counter'));
			$('#korrekt_Liegende_Anzeige').val(korrekt_Liegende_Anzeige);
		});

	$('#korrekt_Liegende_Minus').click(
		function () {
			var korrekt_Liegende_Counter = $('#korrekt_Liegende_Anzeige').val();
			if (korrekt_Liegende_Counter > 0) {
				korrekt_Liegende_Counter--;
			}
			localStorage.setItem('korrekt_Liegende_Counter', korrekt_Liegende_Counter);
			var korrekt_Liegende_Anzeige = parseInt(localStorage.getItem('korrekt_Liegende_Counter'));
			$('#korrekt_Liegende_Anzeige').val(korrekt_Liegende_Anzeige);
		});

	$('#korrekt_Liegende_Reset').click(
		function () {
			korrekt_Liegende_Counter = 0;
			localStorage.setItem('korrekt_Liegende_Counter', korrekt_Liegende_Counter);
			var korrekt_Liegende_Anzeige = parseInt(localStorage.getItem('korrekt_Liegende_Counter'));
			$('#korrekt_Liegende_Anzeige').val(korrekt_Liegende_Anzeige);
		});

	$('#hundesitz').click(
		function () {
			var hundesitz_Counter = $('#hundesitz_Anzeige').val();
			hundesitz_Counter++;
			localStorage.setItem('hundesitz_Counter', hundesitz_Counter);
			var hundesitz_Anzeige = parseInt(localStorage.getItem('hundesitz_Counter'));
			$('#hundesitz_Anzeige').val(hundesitz_Anzeige);
		});

	$('#hundesitz_Minus').click(
		function () {
			var hundesitz_Counter = $('#hundesitz_Anzeige').val();
			if (hundesitz_Counter > 0) {
				hundesitz_Counter--;
			}
			localStorage.setItem('hundesitz_Counter', hundesitz_Counter);
			var hundesitz_Anzeige = parseInt(localStorage.getItem('hundesitz_Counter'));
			$('#hundesitz_Anzeige').val(hundesitz_Anzeige);
		});

	$('#hundesitz_Reset').click(
		function () {
			hundesitz_Counter = 0;
			localStorage.setItem('hundesitz_Counter', hundesitz_Counter);
			var hundesitz_Anzeige = parseInt(localStorage.getItem('hundesitz_Counter'));
			$('#hundesitz_Anzeige').val(hundesitz_Anzeige);
		});

	$('#stehen').click(
		function () {
			var stehen_Counter = $('#stehen_Anzeige').val();
			stehen_Counter++;
			localStorage.setItem('stehen_Counter', stehen_Counter);
			var stehen_Anzeige = parseInt(localStorage.getItem('stehen_Counter'));
			$('#stehen_Anzeige').val(stehen_Anzeige);
		});

	$('#stehen_Minus').click(
		function () {
			var stehen_Counter = $('#stehen_Anzeige').val();
			if (stehen_Counter > 0)
				stehen_Counter--;
			localStorage.setItem('stehen_Counter', stehen_Counter);
			var stehen_Anzeige = parseInt(localStorage.getItem('stehen_Counter'));
			$('#stehen_Anzeige').val(stehen_Anzeige);
		});

	$('#stehen_Reset').click(
		function () {
			stehen_Counter = 0;
			localStorage.setItem('stehen_Counter', stehen_Counter);
			var stehen_Anzeige = parseInt(localStorage.getItem('stehen_Counter'));
			$('#stehen_Anzeige').val(stehen_Anzeige);
		});

	$('#halb_In_Box').click(
		function () {
			halb_In_Box_Counter = $('#halb_In_Box_Anzeige').val();
			halb_In_Box_Counter++;
			localStorage.setItem('halb_In_Box_Counter', halb_In_Box_Counter);
			var halb_In_Box_Anzeige = parseInt(localStorage.getItem('halb_In_Box_Counter'));
			$('#halb_In_Box_Anzeige').val(halb_In_Box_Anzeige);
		});

	$('#halb_In_Box_Minus').click(
		function () {
			var halb_In_Box_Counter = $('#halb_In_Box_Anzeige').val();
			if (halb_In_Box_Counter > 0)
				halb_In_Box_Counter--;
			localStorage.setItem('halb_In_Box_Counter', halb_In_Box_Counter);
			var halb_In_Box_Anzeige = parseInt(localStorage.getItem('halb_In_Box_Counter'));
			$('#halb_In_Box_Anzeige').val(halb_In_Box_Anzeige);
		});

	$('#halb_In_Box_Reset').click(
		function () {
			halb_In_Box_Counter = 0;
			localStorage.setItem('halb_In_Box_Counter', halb_In_Box_Counter);
			var halb_In_Box_Anzeige = parseInt(localStorage.getItem('halb_In_Box_Counter'));
			$('#halb_In_Box_Anzeige').val(halb_In_Box_Anzeige);
		});

	$('#spalten_Lieger').click(
		function () {
			spalten_Lieger_Counter = $('#spalten_Lieger_Anzeige').val();
			spalten_Lieger_Counter++;
			localStorage.setItem('spalten_Lieger_Counter', spalten_Lieger_Counter);
			var spalten_Lieger_Anzeige = parseInt(localStorage.getItem('spalten_Lieger_Counter'));
			$('#spalten_Lieger_Anzeige').val(spalten_Lieger_Anzeige);
		});

	$('#spalten_Lieger_Minus').click(
		function () {
			var spalten_Lieger_Counter = $('#spalten_Lieger_Anzeige').val();
			if (spalten_Lieger_Counter > 0)
				spalten_Lieger_Counter--;
			localStorage.setItem('spalten_Lieger_Counter', spalten_Lieger_Counter);
			var spalten_Lieger_Anzeige = parseInt(localStorage.getItem('spalten_Lieger_Counter'));
			$('#spalten_Lieger_Anzeige').val(spalten_Lieger_Anzeige);
		});


	$('#spalten_Lieger_Reset').click(
		function () {
			spalten_Lieger_Counter = 0;
			localStorage.setItem('spalten_Lieger_Counter', spalten_Lieger_Counter);
			var spalten_Lieger_Anzeige = parseInt(localStorage.getItem('spalten_Lieger_Counter'));
			$('#spalten_Lieger_Anzeige').val(spalten_Lieger_Anzeige);
		});

	$('#ausgestrecktes_Vorderbein').click(
		function () {
			ausgestrecktes_Vorderbein_Counter = $('#ausgestrecktes_Vorderbein_Anzeige').val();
			ausgestrecktes_Vorderbein_Counter++;
			localStorage.setItem('ausgestrecktes_Vorderbein_Counter', ausgestrecktes_Vorderbein_Counter);
			var ausgestrecktes_Vorderbein_Anzeige = parseInt(localStorage.getItem('ausgestrecktes_Vorderbein_Counter'));
			$('#ausgestrecktes_Vorderbein_Anzeige').val(ausgestrecktes_Vorderbein_Anzeige);
		});

	$('#ausgestrecktes_Vorderbein_Minus').click(
		function () {
			var ausgestrecktes_Vorderbein_Counter = $('#ausgestrecktes_Vorderbein_Anzeige').val();
			if (ausgestrecktes_Vorderbein_Counter > 0)
				ausgestrecktes_Vorderbein_Counter--;
			localStorage.setItem('ausgestrecktes_Vorderbein_Counter', ausgestrecktes_Vorderbein_Counter);
			var ausgestrecktes_Vorderbein_Anzeige = parseInt(localStorage.getItem('ausgestrecktes_Vorderbein_Counter'));
			$('#ausgestrecktes_Vorderbein_Anzeige').val(ausgestrecktes_Vorderbein_Anzeige);
		});

	$('#ausgestrecktes_Vorderbein_Reset').click(
		function () {
			ausgestrecktes_Vorderbein_Counter = 0;
			localStorage.setItem('ausgestrecktes_Vorderbein_Counter', ausgestrecktes_Vorderbein_Counter);
			var ausgestrecktes_Vorderbein_Anzeige = parseInt(localStorage.getItem('ausgestrecktes_Vorderbein_Counter'));
			$('#ausgestrecktes_Vorderbein_Anzeige').val(ausgestrecktes_Vorderbein_Anzeige);
		});


	$('#karpalgelenk_Vorne_Kein').click(
		function () {
			var karpalgelenk_Vorne_Kein_Overall = $('#karpalgelenk_Vorne_Kein_Counter').val();
			karpalgelenk_Vorne_Kein_Overall++;
			localStorage.setItem('karpalgelenk_Vorne_Kein_Overall', karpalgelenk_Vorne_Kein_Overall);
			var karpalgelenk_Vorne_Kein_Overall = parseInt(localStorage.getItem('karpalgelenk_Vorne_Kein_Overall'));
			$('#karpalgelenk_Vorne_Kein_Counter').val(karpalgelenk_Vorne_Kein_Overall);
		});


	$('#karpalgelenk_Vorne_Dick').click(
		function () {
			var karpalgelenk_Vorne_Dick_Overall = $('#karpalgelenk_Vorne_Dick_Counter').val();
			karpalgelenk_Vorne_Dick_Overall++;
			localStorage.setItem('karpalgelenk_Vorne_Dick_Overall', karpalgelenk_Vorne_Dick_Overall);
			var karpalgelenk_Vorne_Dick_Overall = parseInt(localStorage.getItem('karpalgelenk_Vorne_Dick_Overall'));
			$('#karpalgelenk_Vorne_Dick_Counter').val(karpalgelenk_Vorne_Dick_Overall);
		});

	$('#karpalgelenk_Vorne_Kruste').click(
		function () {
			var karpalgelenk_Vorne_Kruste_Overall = $('#karpalgelenk_Vorne_Kruste_Counter').val();
			karpalgelenk_Vorne_Kruste_Overall++;
			localStorage.setItem('karpalgelenk_Vorne_Kruste_Overall', karpalgelenk_Vorne_Kruste_Overall);
			var karpalgelenk_Vorne_Kruste_Overall = parseInt(localStorage.getItem('karpalgelenk_Vorne_Kruste_Overall'));
			$('#karpalgelenk_Vorne_Kruste_Counter').val(karpalgelenk_Vorne_Kruste_Overall);
		});

	$('#karpalgelenk_Vorne_Haarlos').click(
		function () {
			var karpalgelenk_Vorne_Haarlos_Overall = $('#karpalgelenk_Vorne_Haarlos_Counter').val();
			karpalgelenk_Vorne_Haarlos_Overall++;
			localStorage.setItem('karpalgelenk_Vorne_Haarlos_Overall', karpalgelenk_Vorne_Haarlos_Overall);
			var karpalgelenk_Vorne_Haarlos_Overall = parseInt(localStorage.getItem('karpalgelenk_Vorne_Haarlos_Overall'));
			$('#karpalgelenk_Vorne_Haarlos_Counter').val(karpalgelenk_Vorne_Haarlos_Overall);
		});

	$('#karpalgelenk_Behandelte_Wunde').click(
		function () {
			var karpalgelenk_Behandelte_Wunde_Overall = $('#karpalgelenk_Behandelte_Wunde_Counter').val();
			karpalgelenk_Behandelte_Wunde_Overall++;
			localStorage.setItem('karpalgelenk_Vorne_Wunde_Overall', karpalgelenk_Vorne_Wunde_Overall);
			var karpalgelenk_Vorne_Wunde_Overall = parseInt(localStorage.getItem('karpalgelenk_Vorne_Wunde_Overall'));
			$('#karpalgelenk_Vorne_Wunde_Counter').val(karpalgelenk_Vorne_Wunde_Overall);
		});

	$('#nacken_Kein').click(
		function () {
			var nacken_Kein_Overall = $('#nacken_Kein_Counter').val();
			nacken_Kein_Overall++;
			localStorage.setItem('nacken_Kein_Overall', nacken_Kein_Overall);
			var nacken_Kein_Overall = parseInt(localStorage.getItem('nacken_Kein_Overall'));
			$('#nacken_Kein_Counter').val(nacken_Kein_Overall);
		});

	$('#nacken_Umfangsvermehrung').click(
		function () {
			var nacken_Umfangsvermehrung_Overall = $('#nacken_Umfangsvermehrung_Counter').val();
			nacken_Umfangsvermehrung_Overall++;
			localStorage.setItem('nacken_Umfangsvermehrung_Overall', nacken_Umfangsvermehrung_Overall);
			var nacken_Umfangsvermehrung_Overall = parseInt(localStorage.getItem('nacken_Umfangsvermehrung_Overall'));
			$('#nacken_Umfangsvermehrung_Counter').val(nacken_Umfangsvermehrung_Overall);
		});

	$('#nacken_Abschuerfung').click(
		function () {
			var nacken_Abschuerfung_Overall = $('#nacken_Abschuerfung_Counter').val();
			nacken_Abschuerfung_Overall++;
			localStorage.setItem('nacken_Abschuerfung_Overall', nacken_Abschuerfung_Overall);
			var nacken_Abschuerfung_Overall = parseInt(localStorage.getItem('nacken_Abschuerfung_Overall'));
			$('#nacken_Abschuerfung_Counter').val(nacken_Abschuerfung_Overall);
		});

	$('#nacken_Haarlos').click(
		function () {
			var nacken_Haarlos_Overall = $('#nacken_Haarlos_Counter').val();
			nacken_Haarlos_Overall++;
			localStorage.setItem('nacken_Haarlos_Overall', nacken_Haarlos_Overall);
			var nacken_Haarlos_Overall = parseInt(localStorage.getItem('nacken_Haarlos_Overall'));
			$('#nacken_Haarlos_Counter').val(nacken_Haarlos_Overall);
		});

	$('#nacken_Behandelte_Wunde').click(
		function () {
			var nacken_Behandelte_Wunde_Overall = $('#nacken_Behandelte_Wunde_Counter').val();
			nacken_Behandelte_Wunde_Overall++;
			localStorage.setItem('nacken_Behandelte_Wunde_Overall', nacken_Behandelte_Wunde_Overall);
			var nacken_Behandelte_Wunde_Overall = parseInt(localStorage.getItem('nacken_Behandelte_Wunde_Overall'));
			$('#nacken_Behandelte_Wunde_Counter').val(nacken_Behandelte_Wunde_Overall);
		});

	$('#ruecken_Kein').click(
		function () {
			var ruecken_Kein_Overall = $('#ruecken_Kein_Counter').val();
			ruecken_Kein_Overall++;
			localStorage.setItem('ruecken_Kein_Overall', ruecken_Kein_Overall);
			var ruecken_Kein_Overall = parseInt(localStorage.getItem('ruecken_Kein_Overall'));
			$('#ruecken_Kein_Counter').val(ruecken_Kein_Overall);
		});

	$('#ruecken_Umfangsvermehrung').click(
		function () {
			var ruecken_Umfangsvermehrung_Overall = $('#ruecken_Umfangsvermehrung_Counter').val();
			ruecken_Umfangsvermehrung_Overall++;
			localStorage.setItem('ruecken_Umfangsvermehrung_Overall', ruecken_Umfangsvermehrung_Overall);
			var ruecken_Umfangsvermehrung_Overall = parseInt(localStorage.getItem('ruecken_Umfangsvermehrung_Overall'));
			$('#ruecken_Umfangsvermehrung_Counter').val(ruecken_Umfangsvermehrung_Overall);
		});
	$('#ruecken_Abschuerfung').click(
		function () {
			var ruecken_Abschuerfung_Overall = $('#ruecken_Abschuerfung_Counter').val();
			ruecken_Abschuerfung_Overall++;
			localStorage.setItem('ruecken_Abschuerfung_Overall', ruecken_Abschuerfung_Overall);
			var ruecken_Abschuerfung_Overall = parseInt(localStorage.getItem('ruecken_Abschuerfung_Overall'));
			$('#ruecken_Abschuerfung_Counter').val(ruecken_Abschuerfung_Overall);
		});
	$('#ruecken_Haarlos').click(
		function () {
			var ruecken_Haarlos_Overall = $('#ruecken_Haarlos_Counter').val();
			ruecken_Haarlos_Overall++;
			localStorage.setItem('ruecken_Haarlos_Overall', ruecken_Haarlos_Overall);
			var ruecken_Haarlos_Overall = parseInt(localStorage.getItem('ruecken_Haarlos_Overall'));
			$('#ruecken_Haarlos_Counter').val(ruecken_Haarlos_Overall);
		});

	$('#ruecken_Behandelte_Wunde').click(
		function () {
			var ruecken_Behandelte_Wunde_Overall = $('#ruecken_Behandelte_Wunde_Counter').val();
			ruecken_Behandelte_Wunde_Overall++;
			localStorage.setItem('ruecken_Behandelte_Wunde_Overall', ruecken_Behandelte_Wunde_Overall);
			var ruecken_Behandelte_Wunde_Overall = parseInt(localStorage.getItem('ruecken_Behandelte_Wunde_Overall'));
			$('#ruecken_Behandelte_Wunde_Counter').val(ruecken_Behandelte_Wunde_Overall);
		});


	$('#hinterbein_Kein').click(
		function () {
			var hinterbein_Kein_Overall = $('#hinterbein_Kein_Counter').val();
			hinterbein_Kein_Overall++;
			localStorage.setItem('hinterbein_Kein_Overall', hinterbein_Kein_Overall);
			var hinterbein_Kein_Overall = parseInt(localStorage.getItem('hinterbein_Kein_Overall'));
			$('#hinterbein_Kein_Counter').val(hinterbein_Kein_Overall);
		});

	$('#hinterbein_Umfangsvermehrung').click(
		function () {
			var hinterbein_Umfangsvermehrung_Overall = $('#hinterbein_Umfangsvermehrung_Counter').val();
			hinterbein_Umfangsvermehrung_Overall++;
			localStorage.setItem('hinterbein_Umfangsvermehrung_Overall', hinterbein_Umfangsvermehrung_Overall);
			var hinterbein_Umfangsvermehrung_Overall = parseInt(localStorage.getItem('hinterbein_Umfangsvermehrung_Overall'));
			$('#hinterbein_Umfangsvermehrung_Counter').val(hinterbein_Umfangsvermehrung_Overall);
		});

	$('#hinterbein_Abschuerfung').click(
		function () {
			var hinterbein_Abschuerfung_Overall = $('#hinterbein_Abschuerfung_Counter').val();
			hinterbein_Abschuerfung_Overall++;
			localStorage.setItem('hinterbein_Abschuerfung_Overall', hinterbein_Abschuerfung_Overall);
			var hinterbein_Abschuerfung_Overall = parseInt(localStorage.getItem('hinterbein_Abschuerfung_Overall'));
			$('#hinterbein_Abschuerfung_Counter').val(hinterbein_Abschuerfung_Overall);
		});

	$('#hinterbein_Haarlos').click(
		function () {
			var hinterbein_Haarlos_Overall = $('#hinterbein_Haarlos_Counter').val();
			hinterbein_Haarlos_Overall++;
			localStorage.setItem('hinterbein_Haarlos_Overall', hinterbein_Haarlos_Overall);
			var hinterbein_Haarlos_Overall = parseInt(localStorage.getItem('hinterbein_Haarlos_Overall'));
			$('#hinterbein_Haarlos_Counter').val(hinterbein_Haarlos_Overall);
		});

	$('#hinterbein_Behandelte_Wunde').click(
		function () {
			var hinterbein_Behandelte_Wunde_Overall = $('#hinterbein_Behandelte_Wunde_Counter').val();
			hinterbein_Behandelte_Wunde_Overall++;
			localStorage.setItem('hinterbein_Behandelte_Wunde_Overall', hinterbein_Behandelte_Wunde_Overall);
			var hinterbein_Behandelte_Wunde_Overall = parseInt(localStorage.getItem('hinterbein_Behandelte_Wunde_Overall'));
			$('#hinterbein_Behandelte_Wunde_Counter').val(hinterbein_Behandelte_Wunde_Overall);
		});

	$('#hinterhand_Sauber').click(
		function () {
			var hinterhand_Sauber_Overall = $('#hinterhand_Sauber_Counter').val();
			hinterhand_Sauber_Overall++;
			localStorage.setItem('hinterhand_Sauber_Overall', hinterhand_Sauber_Overall);
			var hinterhand_Sauber_Overall = parseInt(localStorage.getItem('hinterhand_Sauber_Overall'));
			$('#hinterhand_Sauber_Counter').val(hinterhand_Sauber_Overall);
		});

	$('#hinterhand_Leicht_Verschmutzt').click(
		function () {
			var hinterhand_Leicht_Verschmutzt_Overall = $('#hinterhand_Leicht_Verschmutzt_Counter').val();
			hinterhand_Leicht_Verschmutzt_Overall++;
			localStorage.setItem('hinterhand_Leicht_Verschmutzt_Overall', hinterhand_Leicht_Verschmutzt_Overall);
			var hinterhand_Leicht_Verschmutzt_Overall = parseInt(localStorage.getItem('hinterhand_Leicht_Verschmutzt_Overall'));
			$('#hinterhand_Leicht_Verschmutzt_Counter').val(hinterhand_Leicht_Verschmutzt_Overall);
		});

	$('#hinterhand_Stark_Verschmutzt').click(
		function () {
			var hinterhand_Stark_Verschmutzt_Overall = $('#hinterhand_Stark_Verschmutzt_Counter').val();
			hinterhand_Stark_Verschmutzt_Overall++;
			localStorage.setItem('hinterhand_Stark_Verschmutzt_Overall', hinterhand_Stark_Verschmutzt_Overall);
			var hinterhand_Stark_Verschmutzt_Overall = parseInt(localStorage.getItem('hinterhand_Stark_Verschmutzt_Overall'));
			$('#hinterhand_Stark_Verschmutzt_Counter').val(hinterhand_Stark_Verschmutzt_Overall);
		});

	$('#beine_Sauber').click(
		function () {
			var beine_Sauber_Overall = $('#beine_Sauber_Counter').val();
			beine_Sauber_Overall++;
			localStorage.setItem('beine_Sauber_Overall', beine_Sauber_Overall);
			var beine_Sauber_Overall = parseInt(localStorage.getItem('beine_Sauber_Overall'));
			$('#beine_Sauber_Counter').val(beine_Sauber_Overall);
		});
	$('#beine_Leicht_Verschmutzt').click(
		function () {
			var beine_Leicht_Verschmutzt_Overall = $('#beine_Leicht_Verschmutzt_Counter').val();
			beine_Leicht_Verschmutzt_Overall++;
			localStorage.setItem('beine_Leicht_Verschmutzt_Overall', beine_Leicht_Verschmutzt_Overall);
			var beine_Leicht_Verschmutzt_Overall = parseInt(localStorage.getItem('beine_Leicht_Verschmutzt_Overall'));
			$('#beine_Leicht_Verschmutzt_Counter').val(beine_Leicht_Verschmutzt_Overall);
		});

	$('#beine_Stark_Verschmutzt').click(
		function () {
			var beine_Stark_Verschmutzt_Overall = $('#beine_Stark_Verschmutzt_Counter').val();
			beine_Stark_Verschmutzt_Overall++;
			localStorage.setItem('beine_Stark_Verschmutzt_Overall', beine_Stark_Verschmutzt_Overall);
			var beine_Stark_Verschmutzt_Overall = parseInt(localStorage.getItem('beine_Stark_Verschmutzt_Overall'));
			$('#beine_Stark_Verschmutzt_Counter').val(beine_Stark_Verschmutzt_Overall);
		});

	$('#euter_Sauber').click(
		function () {
			var euter_Sauber_Overall = $('#euter_Sauber_Counter').val();
			euter_Sauber_Overall++;
			localStorage.setItem('euter_Sauber_Overall', euter_Sauber_Overall);
			var euter_Sauber_Overall = parseInt(localStorage.getItem('euter_Sauber_Overall'));
			$('#euter_Sauber_Counter').val(euter_Sauber_Overall);
		});

	$('#euter_Leicht_Verschmutzt').click(
		function () {
			var euter_Leicht_Verschmutzt_Overall = $('#euter_Leicht_Verschmutzt_Counter').val();
			euter_Leicht_Verschmutzt_Overall++;
			localStorage.setItem('euter_Leicht_Verschmutzt_Overall', euter_Leicht_Verschmutzt_Overall);
			var euter_Leicht_Verschmutzt_Overall = parseInt(localStorage.getItem('euter_Leicht_Verschmutzt_Overall'));
			$('#euter_Leicht_Verschmutzt_Counter').val(euter_Leicht_Verschmutzt_Overall);
		});

	$('#euter_Stark_Verschmutzt').click(
		function () {
			var euter_Stark_Verschmutzt_Overall = $('#euter_Stark_Verschmutzt_Counter').val();
			euter_Stark_Verschmutzt_Overall++;
			localStorage.setItem('euter_Stark_Verschmutzt_Overall', euter_Stark_Verschmutzt_Overall);
			var euter_Stark_Verschmutzt_Overall = parseInt(localStorage.getItem('euter_Stark_Verschmutzt_Overall'));
			$('#euter_Stark_Verschmutzt_Counter').val(euter_Stark_Verschmutzt_Overall);
		});


	$('#bauch_Sauber').click(
		function () {
			var bauch_Sauber_Overall = $('#bauch_Sauber_Counter').val();
			bauch_Sauber_Overall++;
			localStorage.setItem('bauch_Sauber_Overall', bauch_Sauber_Overall);
			var bauch_Sauber_Overall = parseInt(localStorage.getItem('bauch_Sauber_Overall'));
			$('#bauch_Sauber_Counter').val(bauch_Sauber_Overall);
		});

	$('#bauch_Leicht_Verschmutzt').click(
		function () {
			var bauch_Leicht_Verschmutzt_Overall = $('#bauch_Leicht_Verschmutzt_Counter').val();
			bauch_Leicht_Verschmutzt_Overall++;
			localStorage.setItem('bauch_Leicht_Verschmutzt_Overall', bauch_Leicht_Verschmutzt_Overall);
			var bauch_Leicht_Verschmutzt_Overall = parseInt(localStorage.getItem('bauch_Leicht_Verschmutzt_Overall'));
			$('#bauch_Leicht_Verschmutzt_Counter').val(bauch_Leicht_Verschmutzt_Overall);
		});

	$('#bauch_Stark_Verschmutzt').click(
		function () {
			var bauch_Stark_Verschmutzt_Overall = $('#bauch_Stark_Verschmutzt_Counter').val();
			bauch_Stark_Verschmutzt_Overall++;
			localStorage.setItem('bauch_Stark_Verschmutzt_Overall', bauch_Stark_Verschmutzt_Overall);
			var bauch_Stark_Verschmutzt_Overall = parseInt(localStorage.getItem('bauch_Stark_Verschmutzt_Overall'));
			$('#bauch_Stark_Verschmutzt_Counter').val(bauch_Stark_Verschmutzt_Overall);
		});

	$('#BCS_Zu_Mager').click(
		function () {
			var BCS_Zu_Mager_Overall = $('#BCS_Zu_Mager_Counter').val();
			BCS_Zu_Mager_Overall++;
			localStorage.setItem('BCS_Zu_Mager_Overall', BCS_Zu_Mager_Overall);
			var BCS_Zu_Mager_Overall = parseInt(localStorage.getItem('BCS_Zu_Mager_Overall'));
			$('#BCS_Zu_Mager_Counter').val(BCS_Zu_Mager_Overall);
		});

	$('#BCS_Gut').click(
		function () {
			var BCS_Gut_Overall = $('#BCS_Gut_Counter').val();
			BCS_Gut_Overall++;
			localStorage.setItem('BCS_Gut_Overall', BCS_Gut_Overall);
			var BCS_Gut_Overall = parseInt(localStorage.getItem('BCS_Gut_Overall'));
			$('#BCS_Gut_Counter').val(BCS_Gut_Overall);
		});


	$('#BCS_Zu_Dick').click(
		function () {
			var BCS_Zu_Dick_Overall = $('#BCS_Zu_Dick_Counter').val();
			BCS_Zu_Dick_Overall++;
			localStorage.setItem('BCS_Zu_Dick_Overall', BCS_Zu_Dick_Overall);
			var BCS_Zu_Dick_Overall = parseInt(localStorage.getItem('BCS_Zu_Dick_Overall'));
			$('#BCS_Zu_Dick_Counter').val(BCS_Zu_Dick_Overall);
		});


	$('#kopfhaltung_Hoch').click(
		function () {
			var kopfhaltung_Hoch_Overall = $('#kopfhaltung_Hoch_Counter').val();
			kopfhaltung_Hoch_Overall++;
			localStorage.setItem('kopfhaltung_Hoch_Overall', kopfhaltung_Hoch_Overall);
			var kopfhaltung_Hoch_Overall = parseInt(localStorage.getItem('kopfhaltung_Hoch_Overall'));
			$('#kopfhaltung_Hoch_Counter').val(kopfhaltung_Hoch_Overall);
		});

	$('#kopfhaltung_Niedrig').click(
		function () {
			var kopfhaltung_Niedrig_Overall = $('#kopfhaltung_Niedrig_Counter').val();
			kopfhaltung_Niedrig_Overall++;
			localStorage.setItem('kopfhaltung_Niedrig_Overall', kopfhaltung_Niedrig_Overall);
			var kopfhaltung_Niedrig_Overall = parseInt(localStorage.getItem('kopfhaltung_Niedrig_Overall'));
			$('#kopfhaltung_Niedrig_Counter').val(kopfhaltung_Niedrig_Overall);
		});

	$('#LCS_High').click(
		function () {
			var LCS_High_Overall = $('#LCS_High_Counter').val();
			LCS_High_Overall++;
			localStorage.setItem('LCS_High_Overall', LCS_High_Overall);
			var LCS_High_Overall = parseInt(localStorage.getItem('LCS_High_Overall'));
			$('#LCS_High_Counter').val(LCS_High_Overall);
		});

	$('#LCS_Low').click(
		function () {
			var LCS_Low_Overall = $('#LCS_Low_Counter').val();
			LCS_Low_Overall++;
			localStorage.setItem('LCS_Low_Overall', LCS_Low_Overall);
			var LCS_Low_Overall = parseInt(localStorage.getItem('LCS_Low_Overall'));
			$('#LCS_Low_Counter').val(LCS_Low_Overall);
		});
	
	$('#atemfrequenz_Gut').click(
		function() {
			var verbleibende_Tiere = $('#atemfrequenz_Verbleibende').val();
			if (verbleibende_Tiere > 0) {
			var atemfrequenz_Gut_Counter = $('#atemfrequenz_Gut_Counter').val();
			atemfrequenz_Gut_Counter++;
			$('#atemfrequenz_Gut_Counter').val(atemfrequenz_Gut_Counter);
			verbleibende_Tiere--;
			$('#atemfrequenz_Verbleibende').val(verbleibende_Tiere);
			} 
			else 
			window.alert("Es wurden alle Tiere geprüft.")
		}
	);
	
	$('#atemfrequenz_Schlecht').click(
		function() {
			var verbleibende_Tiere = $('#atemfrequenz_Verbleibende').val();
			if (verbleibende_Tiere > 0) {
			var atemfrequenz_Schlecht_Counter = $('#atemfrequenz_Schlecht_Counter').val();
			atemfrequenz_Schlecht_Counter++;
			$('#atemfrequenz_Schlecht_Counter').val(atemfrequenz_Schlecht_Counter);
			verbleibende_Tiere--;
			$('#atemfrequenz_Verbleibende').val(verbleibende_Tiere);
			} 
			else 
			window.alert("Es wurden alle Tiere geprüft.")
		}
	);


});

// Hier finden sich die Funktionen, die durch onclick events aufgerufen werden. 
// Stichwort: Eigenständige Funktionen
var timer_Ref;
var is_Stopped = false;
function start_Timer() {
	if ($('#countdown').val() < 5) {
		$('#countdown').css('background-color','#ffdf80');
	}
	else {
		$('#countdown').css('background-color','#ffffff');
	}
	$('#countdown').val($('#countdown').val()-1);
	document.getElementById('stop_Timer').onclick = function(){
		is_Stopped = true;
	}
	if (($('#countdown').val() > 0)&& is_Stopped == false) {
		 timer_Ref = setTimeout(start_Timer,1000);
	}
	else if (is_Stopped == true){
		clearTimeout(timer_Ref);
		$('#countdown').val(30);
		is_Stopped = false;
		$('#countdown').css('background-color','#ffffff');
	}
	else {
	$('#countdown').val(30);
	$('#countdown').css('background-color','#ffffff');
	}
}



function copyNumber() {
	var LCS_Low_Overall = $('#LCS_Low_Counter').val();
	var LCS_High_Overall = $('#LCS_High_Counter').val();
	var numberToCopy = $('#tiere_Anzahl').val();
	localStorage.setItem('tiere_Anzahl', numberToCopy);
	var numberToCopy = parseInt(localStorage.getItem('tiere_Anzahl'));
	$('#tiere_Anzahl').val(numberToCopy);
	if (LCS_Low_Overall == 0 && LCS_High_Overall == 0)
		$('#save_Number').val(numberToCopy);
}

function calculateSampleSize() {
	var herdengroesse = $('#herdengroesse').val();
	localStorage.setItem('herdengroesse', herdengroesse);
	var herdengroesse = parseInt(localStorage.getItem('herdengroesse'));
	if (herdengroesse > 100) {
		herdengroesse = Math.round(0.2 * herdengroesse);
	}
	else herdengroesse = 20;
	$('#tiere_Anzahl').val(herdengroesse);
	$('#tiere_Anzahl_1').val(herdengroesse);
}


//Die ID des letzten geklickten Bildes wird gespeichert. Auch wird die Anzahl der Verbleibenden Kühe in der Anzeige angepasst.
function rememberID(clicked_ID) {
	$('#save_LastID').val(clicked_ID);

	var remaining_Cows_Number = $('#tiere_Anzahl').val();
	numberPages = document.getElementsByClassName("remaining_Cows").length;
	if (clicked_ID == "LCS_High" || clicked_ID == "LCS_Low") {
		document.getElementsByClassName("remaining_Cows")[0].setAttribute("value", "Verbleibende Kühe: " + remaining_Cows_Number);
		for (i = 1; i < numberPages; i++) {
			document.getElementsByClassName("remaining_Cows")[i].setAttribute("value", "Verbleibende Kühe: " + remaining_Cows_Number);
		}
	}
	else
		for (i = 0; i < numberPages; i++) {
			document.getElementsByClassName("remaining_Cows")[i].setAttribute("value", "Verbleibende Kühe: " + remaining_Cows_Number);
		}
}

// Es wird geprüft, ob gerade die letzte Kuh dran ist. Wenn ja, dann wird zur auswertung weitergeleitet, ansonsten geht es zurück an den anfang
function numberControl() {
	var controlNumber = $('#tiere_Anzahl').val() - 1;
	$('#tiere_Anzahl').val(controlNumber);
	if (controlNumber <= 0)
		window.location.href = "#auswertung";
	else
		window.location.href = "#karpalgelenk_Vorne"
}

//Der Counter muss wieder hochgestuft werden, wenn ein LCS Bild korrigiert wird. Außerdem wird eine Doppelkorrektur und eine korrektur ganz am Anfang verhindert.
function adjustCounter() {
	$('#isDoubleCorrection').val(0);
	var curr_Id = $('#save_LastID').val();
	if (curr_Id == "LCS_High" || curr_Id == "LCS_Low") {
		current_Number = $('#tiere_Anzahl').val();
		current_Number++;
		localStorage.setItem('current_Number', current_Number);
		var current_Number = parseInt(localStorage.getItem('current_Number'));
		$('#tiere_Anzahl').val(current_Number);
		for (i = 0; i < numberPages; i++) {
			document.getElementsByClassName("remaining_Cows")[i].setAttribute("value", "Verbleibende Kühe: " + current_Number);
		}
	}
	else if (curr_Id == "karpalgelenk_Vorne_Weiter") {
		window.location.href = "#karpalgelenk_Vorne"
		$('#isDoubleCorrection').val(1);
		window.alert('Sie müssen zuerst eine Eingabe tätigen, bevor Sie diese korrigieren können');
	}

	else if (curr_Id.substring(0, 5) == "korre") {
		$('#isDoubleCorrection').val(1);
		window.alert('Bitte korrigieren Sie immer nur eine Kategorie.');
		// curr_Id.href = "#" + + curr_Id.substring(10, idLength);
	}
	// else {
	curr_Id = "#" + curr_Id + "_Counter";
	curr_Val = $(curr_Id).val();
	curr_Val--;
	$(curr_Id).val(curr_Val);
	// }

}

// Sofern nicht zwei mal hintereinander auf zurück gedrückt wurde, wird man zur letzten Seite geleitet
function correctionConnection(page) {
	if ($('#isDoubleCorrection').val() == 0) {
		window.location.href = "#" + page;
	}
}

// Alle Werte werden aus dem lokalen Speicher gelöscht 
function resetAll() {
	localStorage.clear();
	location.reload();
	/* $('#anteil_Eutergesunde_Kuehe').val(0);
	$('#neuerkrankungsrate').val(0);
	$('#schlechte_Heilungsaussichten').val(0);
	$('#spalten_Lieger_Anzeige').val(0);
	$('#hundesitz_Anzeige').val(0);
	$('#stehen_Anzeige').val(0);
	$('#halb_In_Box_Anzeige').val(0);
	$('#korrekt_Liegende_Anzeige').val(0);
	$('#ausgestrecktes_Vorderbein_Anzeige').val(0);
	$('#herdengroesse').val(0);
	$('#tiere_Anzahl').val(0);
	$('#spalten_Lieger_Anzeige').val(0);
	$('#hundesitz_Anzeige').val(0);
	$('#stehen_Anzeige').val(0);
	$('#halb_In_Box_Anzeige').val(0);
	$('#korrekt_Liegende_Anzeige').val(0);
	$('#ausgestrecktes_Vorderbein_Anzeige').val(0);
	$('#karpalgelenk_Vorne_Kein_Counter').val(0);
	$('#karpalgelenk_Vorne_Dick_Counter').val(0);
	$('#karpalgelenk_Vorne_Haarlos_Counter').val(0);
	$('#karpalgelenk_Behandelte_Wunde_Counter').val(0);
	$('#nacken_Kein_Counter').val(0);
	$('#nacken_Kein_Counter').val(0);
	$('#nacken_Umfangsvermehrung_Counter').val(0);
	$('#nacken_Haarlos_Counter').val(0);
	$('#nacken_Abschuerfung_Counter').val(0);
	$('#nacken_Behandelte_Wunde_Counter').val(0);
	$('#ruecken_Kein_Counter').val(0);
	$('#ruecken_Umfangsvermehrung_Counter').val(0);
	$('#ruecken_Haarlos_Counter').val(0);
	$('#ruecken_Abschuerfung_Counter').val(0);
	$('#ruecken_Behandelte_Wunde_Counter').val(0);
	$('#hinterbein_Kein_Counter').val(0);
	$('#hinterbein_Umfangsvermehrung_Counter').val(0);
	$('#hinterbein_Haarlos_Counter').val(0);
	$('#hinterbein_Abschuerfung_Counter').val(0);
	$('#hinterbein_Behandelte_Wunde_Counter').val(0);
	$('#hinterhand_Sauber_Counter').val(0);
	$('#hinterhand_Leicht_Verschmutzt_Counter').val(0);
	$('#hinterhand_Stark_Verschmutzt_Counter').val(0);
	$('#beine_Sauber_Counter').val(0);
	$('#beine_Leicht_Verschmutzt_Counter').val(0);
	$('#beine_Stark_Verschmutzt_Counter').val(0);
	$('#euter_Sauber_Counter').val(0);
	$('#euter_Leicht_Verschmutzt_Counter').val(0);
	$('#euter_Stark_Verschmutzt_Counter').val(0);
	$('#bauch_Sauber_Counter').val(0);
	$('#bauch_Leicht_Verschmutzt_Counter').val(0);
	$('#bauch_Stark_Verschmutzt_Counter').val(0);
	$('#BCS_Zu_Mager_Counter').val(0);
	$('#BCS_Gut_Counter').val(0);
	$('#BCS_Zu_Dick_Counter').val(0);
	$('#kopfhaltung_Hoch_Counter').val(0);
	$('#kopfhaltung_Niedrig_Counter').val(0);
	$('#anzahl_Gepruefter_Tiere').val(0);
	$('#save_number').val(0); */
}

//Das Feld Verbleibede Liegende Kühe wird initialisiert: 
function initialize_Verbleibende_Tiere() {
	var atemfrequenz_Verbleibende = $('#tiere_Anzahl_1').val(); 
	$('#atemfrequenz_Verbleibende').val(atemfrequenz_Verbleibende);
}

function check_Verbleibende() {
	if ($('#atemfrequenz_Verbleibende').val() == 0) {
		window.location.href = "#transition_In_Den_Stall";
	} else 
	window.alert("Bitte überprüfen Sie den Rest der Kontrollgruppe, bevor Sie fortfahren!")
}
/*-------------------------------------------------------------------------------------*/

function rEutergesundeKueheValue(value) {
	if (value > 65) return 0;
	else return 255;
}
function gEutergesundeKueheValue(value) {
	if (value > 65) return 200;
	else if (value >= 25) return 153;
	else return 0;
}
function rNeuerkrankungsrateValue(value) {
	if (value < 15) return 0;
	else return 200;
}
function gNeuerkrankungsrateValue(value) {
	if (value < 15) return 200;
	else if (value <= 30) return 153;
	else return 0;
}
function rSchlechteHeilungsaussichtenValue(value) {
	if (value < 2) return 0;
	else return 255;
}

function gSchlechteHeilungsaussichtenValue(value) {
	if (value < 2) return 200;
	else if (value <= 5) return 153;
	else return 0;
}

function rFuetterungValue(value) {
	if (value < 5) {
		return 0;
	}
	else return 255;
}

function gFuetterungValue(value) {
	if (value < 5) {
		return 200;
	}
	else if (value <= 20) {
		return 153;
	}
	else return 0;
}

function gGangbildValue(value) {
	if (value < 5)
		return 200;
	else if (value < 15)
		return 153;
	else return 0;
}
function rGangbildValue(value) {
	if (value < 5)
		return 0;
	else return 255;
}

function rKopfhaltungValue(value) {
	if (value > 85)
		return 0;
	else return 255;
}

function gKopfhaltungValue(value) {
	if (value > 85)
		return 200;
	else if (value >= 50)
		return 153;
	else return 0;
}

function rVerschmutzung(leicht, stark) {
	if (stark > 0.3) {
		return 255;
	}
	else if ((leicht + stark) >= 0.1) {
		return 255;
	}
	else return 0;
}

function gVerschmutzung(leicht, stark) {
	if (stark > 0.3) {
		return 0;
	}
	else if ((leicht + stark) >= 0.1) {
		return 153;
	}
	else return 200;
}

function gPartiallyOutsideValue(value) {
	if (value < 3) { return 200; }
	else if (value < 6) return 153;
	else return 0;
}

function rPartiallyOutsideValue(value) {
	if (value >= 3) { return 255; }
	else return 0;
}

function gNaturallyLayingValue(value) {
	if (value > 10) { return 200; }
	else if (value > 4) { return 153; }
	else return 0;
}
function rNaturallyLayingValue(value) {
	if (value <= 10) { return 255; }
	else return 0;
}

function rHitzestressValue(hitzestress_Percentage) {
	if (hitzestress_Percentage  > 5) {
		return 255;
	}
	else return 0; 
}
function gHitzestressValue(hitzestress_Percentage) {
	if (hitzestress_Percentage <= 5) {
		return 200; 
	}
	else return 0; 
}
/* this function is used when the user sends the document per email, it creates a pdf and passes it on (?) to upload.php where it is named and uploaded onto the server --> */
function createPDF(doc) {

	var rGangbild = 0;
	var gGangbild = 0;
	var bGangbild = 0;
	var gangbildValue = 0;
	gangbildValue = $('#LCS_High_Percentage').val();
	gGangbild = gGangbildValue(gangbildValue);
	rGangbild = rGangbildValue(gangbildValue);
	doc.text('Auswertung vom ' + $('#datum').val(), 200, 10);
	doc.text('Anzahl überprüfter Tiere: ' + $('#anzahl_Gepruefter_Tiere').val(), 10, 10);

	doc.text('Gesundheit, Integument, Fortbewegung', 30, 30);
	var columnsGangbild = [{ title: "Bewegungsapparat", dataKey: "parameterBewegunsapperat" }, { title: "Anteil von Kühen [in %] mit: LCS >= 3", dataKey: "anteilGangbild" }, { title: "Bewertung", dataKey: "bewertungGangbild" }];
	var rowsGangbild = [{ "parameterBewegunsapperat": "Lahmheiten", "anteilGangbild": +$('#LCS_High_Percentage').val() }];
	doc.autoTable(columnsGangbild, rowsGangbild, {
		theme: 'striped',
		columnStyles: {
			"bewertungGangbild": { fillColor: [rGangbild, gGangbild, bGangbild] }
		},
		startY: 40,
	}
	);

	var rKopfhaltung = 0;
	var gKopfhaltung = 0;
	var kopfhaltungValue = 0;
	kopfhaltungValue = $('#kopfhaltung_Gerade_Percentage').val();
	rKopfhaltung = rKopfhaltungValue(kopfhaltungValue);
	gKopfhaltung = gKopfhaltungValue(kopfhaltungValue);
	var columnsKopfhaltung = [{ title: "Fortbewegung", dataKey: "parameterFortbewegung" }, { title: "Anteil gehender Kühe [in %] mit gerader Kopfhaltung", dataKey: "anteilGeradeKopfhaltung" }, { title: "Bewertung", dataKey: "bewertungKopfhaltung" }];
	var rowsKopfhaltung = [{ "parameterFortbewegung": "Kopfhaltung", "anteilGeradeKopfhaltung": $('#kopfhaltung_Gerade_Percentage').val() }];
	doc.autoTable(columnsKopfhaltung, rowsKopfhaltung, {
		theme: 'striped',
		columnStyles: {
			"bewertungKopfhaltung": { fillColor: [rKopfhaltung, gKopfhaltung, 0] }
		},
		startY: 70,
	}
	);
	var rVorderbein = rGangbildValue($('#vorderbein_Abweichungen_Percentage').val());
	var gVorderbein = gGangbildValue($('#vorderbein_Abweichungen_Percentage').val());
	rNacken = rGangbildValue($('#nacken_Abweichungen_Percentage').val());
	gNacken = gGangbildValue($('#nacken_Abweichungen_Percentage').val());
	rRuecken = rGangbildValue($('#ruecken_Abweichungen_Percentage').val());
	gRuecken = gGangbildValue($('#ruecken_Abweichungen_Percentage').val());
	rHinterbein = rGangbildValue($('#hinterbein_Abweichungen_Percentage').val());
	gHinterbein = gGangbildValue($('#hinterbein_Abweichungen_Percentage').val());

	var columnsTechnopathien = [{ title: "Technopathien", dataKey: "bereich" },
	{ title: "Anteil von Kühen [in %] mit: kein Befund", dataKey: "anteilKeinBefund" },
	{ title: "Anteil von Kühen [in %] mit: haarlose Stellen", dataKey: "anteilHaarloseStellen" },
	{ title: "Anteil von Kühen [in %] mit: Krusten", dataKey: "anteilKrusten" },
	{ title: "Anteil von Kühen [in %] mit: Umfangsvermehrung", dataKey: "anteilUmfangsvermehrung" },
	{ title: "Anteil von Kühen [in %] mit: behandelte Wunden", dataKey: "anteilBehandelteWunden" },
	{ title: "Anteil von Kühen [in %] mit: Abweichungen insgesamt", dataKey: "anteilAbweichungenInsgesamt" }];
	rowsTechnopathien = [{
		"bereich": "Vorderbein", "anteilKeinBefund": $('#vorderbein_Kein_Befund_Percentage').val(), "anteilHaarloseStellen": $('#vorderbein_Haarlose_Stellen_Percentage').val(),
		"anteilKrusten": $('#vorderbein_Abschuerfung_Percentage').val(), "anteilUmfangsvermehrung": $('#vorderbein_Umfangsvermehrung_Percentage').val(),
		"anteilBehandelteWunden": $('#vorderbein_Behandelte_Wunden_Percentage').val(), "anteilAbweichungenInsgesamt": $('#vorderbein_Abweichungen_Percentage').val()
	},
	{
		"bereich": "Nacken", "anteilKeinBefund": $('#nacken_Kein_Befund_Percentage').val(), "anteilHaarloseStellen": $('#nacken_Haarlose_Stellen_Percentage').val(),
		"anteilKrusten": $('#nacken_Abschuerfung_Percentage').val(), "anteilUmfangsvermehrung": $('#nacken_Umfangsvermehrung_Percentage').val(),
		"anteilBehandelteWunden": $('#nacken_Behandelte_Wunden_Percentage').val(), "anteilAbweichungenInsgesamt": $('#nacken_Abweichungen_Percentage').val()
	},
	{
		"bereich": "Rücken", "anteilKeinBefund": $('#ruecken_Kein_Befund_Percentage').val(), "anteilHaarloseStellen": $('#ruecken_Haarlose_Stellen_Percentage').val(),
		"anteilKrusten": $('#ruecken_Abschuerfung_Percentage').val(), "anteilUmfangsvermehrung": $('#ruecken_Umfangsvermehrung_Percentage').val(),
		"anteilBehandelteWunden": $('#ruecken_Behandelte_Wunden_Percentage').val(), "anteilAbweichungenInsgesamt": $('#ruecken_Abweichungen_Percentage').val()
	},
	{
		"bereich": "Hinterbein", "anteilKeinBefund": $('#hinterbein_Kein_Befund_Percentage').val(), "anteilHaarloseStellen": $('#hinterbein_Haarlose_Stellen_Percentage').val(),
		"anteilKrusten": $('#hinterbein_Abschuerfung_Percentage').val(), "anteilUmfangsvermehrung": $('#hinterbein_Umfangsvermehrung_Percentage').val(),
		"anteilBehandelteWunden": $('#hinterbein_Behandelte_Wunden_Percentage').val(), "anteilAbweichungenInsgesamt": $('#hinterbein_Abweichungen_Percentage').val()
	}];
	doc.autoTable(columnsTechnopathien, rowsTechnopathien, {
		theme: 'striped',
		headerStyles: {
			overflow: 'linebreak'
		},
		columnStyles: {
			"bereich": { columnWidth: 35 }
		},
		createdCell: function (cell, rowsTechnopathien) {
			{
				if (rowsTechnopathien.column.dataKey === "anteilAbweichungenInsgesamt") {
					{
						if (rowsTechnopathien.row.index == 0) { cell.styles.fillColor = [rVorderbein, gVorderbein, 0] }
						else if (rowsTechnopathien.row.index == 1) { cell.styles.fillColor = [rNacken, gNacken, 0] }
						else if (rowsTechnopathien.row.index == 2) { cell.styles.fillColor = [rRuecken, gRuecken, 0] }
						else if (rowsTechnopathien.row.index == 3) { cell.styles.fillColor = [rHinterbein, gHinterbein, 0] }
					}
				}
			}
		},
		startY: 100,
	});
	var rEutergesundeKuehe = rEutergesundeKueheValue($('#anteil_Eutergesunde_Kuehe_Copy').val());
	var gEutergesundeKuehe = gEutergesundeKueheValue($('#anteil_Eutergesunde_Kuehe_Copy').val());
	var rNeuerkrankungsrate = rNeuerkrankungsrateValue($('#neuerkrankungsrate_Copy').val());
	var gNeuerkrankungsrate = gNeuerkrankungsrateValue($('#neuerkrankungsrate_Copy').val());
	var gSchlechteHeilungsaussichten = gSchlechteHeilungsaussichtenValue($('#schlechte_Heilungsaussichten_Copy').val());
	var rSchlechteHeilungsaussichten = rSchlechteHeilungsaussichtenValue($('#schlechte_Heilungsaussichten_Copy').val());
	var columnsEutergesundheit = [{ title: "Eutergesundheit", dataKey: "parameterEutergesundheit" },
	{ title: "Anteil an Kühen [in %]", dataKey: "anteilEutergesundheit" }, { title: "Bewertung", dataKey: "bewertungEutergesundheit" }];
	var rowsEutergesundheit = [{ "parameterEutergesundheit": "Eutergesunde Kühe", "anteilEutergesundheit": $('#anteil_Eutergesunde_Kuehe').val(), "bewertungEutergesundheit": "" },
	{ "parameterEutergesundheit": "Neuerkrankungsrate in der Trockenperiode", "anteilEutergesundheit": $('#neuerkrankungsrate').val(), "bewertungEutergesundheit": "" },
	{ "parameterEutergesundheit": "Krank mit schlechten Heilungsaussichten", "anteilEutergesundheit": $('#schlechte_Heilungsaussichten').val(), "bewertungEutergesundheit": "" }];
	doc.autoTable(columnsEutergesundheit, rowsEutergesundheit, {
		theme: 'striped',
		startY: 160,
		createdCell: function (cell, rowsEutergesundheit) {
			if (rowsEutergesundheit.column.dataKey === "bewertungEutergesundheit") {
				if (rowsEutergesundheit.row.index == 0) { cell.styles.fillColor = [rEutergesundeKuehe, gEutergesundeKuehe, 0] }
				else if (rowsEutergesundheit.row.index == 1) { cell.styles.fillColor = [rNeuerkrankungsrate, gNeuerkrankungsrate, 0] }
				else if (rowsEutergesundheit.row.index == 2) { cell.styles.fillColor = [rSchlechteHeilungsaussichten, gSchlechteHeilungsaussichten, 0] }
			}
		}
	});
	doc.addPage();

	doc.text('Auswertung vom ' + $('#datum').val(), 200, 10);
	doc.text('Anzahl überprüfter Tiere: ' + $('#anzahl_Gepruefter_Tiere').val(), 10, 10);
	doc.text("Sauberkeit", 30, 25);

	var rVerschmutzteHinteransicht = rVerschmutzung(($('#hinterhand_Leicht_Verschmutzt_Counter').val() / $('#anzahl_Gepruefter_Tiere').val()),
		($('#hinterhand_Stark_Verschmutzt_Counter').val() / $('#anzahl_Gepruefter_Tiere').val()));
	var gVerschmutzteHinteransicht = gVerschmutzung(($('#hinterhand_Leicht_Verschmutzt_Counter').val() / $('#anzahl_Gepruefter_Tiere').val()),
		($('#hinterhand_Stark_Verschmutzt_Counter').val() / $('#anzahl_Gepruefter_Tiere').val()));

	var rVerschmutzteBeine = rVerschmutzung(($('#beine_Leicht_Verschmutzt_Counter').val() / $('#anzahl_Gepruefter_Tiere').val()),
		($('#beine_Stark_Verschmutzt_Counter').val() / $('#anzahl_Gepruefter_Tiere').val()));
	var gVerschmutzteBeine = gVerschmutzung(($('#beine_Leicht_Verschmutzt_Counter').val() / $('#anzahl_Gepruefter_Tiere').val()),
		($('#beine_Stark_Verschmutzt_Counter').val() / $('#anzahl_Gepruefter_Tiere').val()));

	var rVerschmutztesEuter = rVerschmutzung(($('#euter_Leicht_Verschmutzt_Counter').val() / $('#anzahl_Gepruefter_Tiere').val()),
		($('#euter_Stark_Verschmutzt_Counter').val() / $('#anzahl_Gepruefter_Tiere').val()));
	var gVerschmutztesEuter = gVerschmutzung(($('#euter_Leicht_Verschmutzt_Counter').val() / $('#anzahl_Gepruefter_Tiere').val()),
		($('#euter_Stark_Verschmutzt_Counter').val() / $('#anzahl_Gepruefter_Tiere').val()));

	var rVerschmutzterBauch = rVerschmutzung(($('#bauch_Leicht_Verschmutzt_Counter').val() / $('#anzahl_Gepruefter_Tiere').val()),
		($('#bauch_Stark_Verschmutzt_Counter').val() / $('#anzahl_Gepruefter_Tiere').val()));
	var gVerschmutzterBauch = gVerschmutzung(($('#bauch_Leicht_Verschmutzt_Counter').val() / $('#anzahl_Gepruefter_Tiere').val()),
		($('#bauch_Stark_Verschmutzt_Counter').val() / $('#anzahl_Gepruefter_Tiere').val()));

	
		var hinterhand_Leicht_Verschmutzt_Percentage = $('#hinterhand_Leicht_Verschmutzt_Percentage').val();
		var beine_Leicht_Verschmutzt_Percentage = $('#beine_Leicht_Verschmutzt_Percentage').val();
		var bauch_Leicht_Verschmutzt_Percentage = $('#bauch_Leicht_Verschmutzt_Percentage').val();
		var euter_Leicht_Verschmutzt_Percentage = $('#euter_Leicht_Verschmutzt_Percentage').val();
	
		var hinterhand_Stark_Verschmutzt_Percentage = $('#hinterhand_Stark_Verschmutzt_Percentage').val();
		var beine_Stark_Verschmutzt_Percentage = $('#beine_Stark_Verschmutzt_Percentage').val();
		var bauch_Stark_Verschmutzt_Percentage = $('#bauch_Stark_Verschmutzt_Percentage').val();
		var euter_Stark_Verschmutzt_Percentage = $('#euter_Stark_Verschmutzt_Percentage').val();
		
		var columnsSauberkeit = [{ title: "Tierverschmutzung", dataKey: "parameterSauberkeit" },
		{title: "Anteil [in %] leicht verschmutzt", dataKey: "leichtVerschmutzt"}, 
		{title: "Anteil [in %] stark verschmutzt", dataKey: "starkVerschmutzt"},
		{ title: "Bewertung", dataKey: "bewertungSauberkeit" }];
		var rowsSauberkeit = [{ "parameterSauberkeit": "Verschmutzte Hinteransicht", "leichtVerschmutzt": hinterhand_Leicht_Verschmutzt_Percentage,
		"starkVerschmutzt": hinterhand_Stark_Verschmutzt_Percentage, "bewertungSauberkeit": "" },
		{ "parameterSauberkeit": "Verschmutzte Beine", "leichtVerschmutzt": beine_Leicht_Verschmutzt_Percentage,
		"starkVerschmutzt": beine_Stark_Verschmutzt_Percentage, "bewertungSauberkeit": "" },
		{ "parameterSauberkeit": "Verschmutztes Euter", "leichtVerschmutzt": euter_Leicht_Verschmutzt_Percentage,
		"starkVerschmutzt": euter_Stark_Verschmutzt_Percentage, "bewertungSauberkeit": "" },
		{ "parameterSauberkeit": "Verschmutzter Bauch", "leichtVerschmutzt": bauch_Leicht_Verschmutzt_Percentage,
		"starkVerschmutzt": bauch_Stark_Verschmutzt_Percentage, "bewertungSauberkeit": "" }];

		doc.autoTable(columnsSauberkeit, rowsSauberkeit, {
			theme: 'striped',
			startY: 33,
			createdCell: function (cell, rowsSauberkeit) {
				if (rowsSauberkeit.column.dataKey == "bewertungSauberkeit") {
					if (rowsSauberkeit.row.index == 0) { cell.styles.fillColor = [rVerschmutzteHinteransicht, gVerschmutzteHinteransicht, 0] }
					else if (rowsSauberkeit.row.index == 1) { cell.styles.fillColor = [rVerschmutzteBeine, gVerschmutzteBeine, 0] }
					else if (rowsSauberkeit.row.index == 2) { cell.styles.fillColor = [rVerschmutztesEuter, gVerschmutztesEuter, 0] }
					else if (rowsSauberkeit.row.index == 3) { cell.styles.fillColor = [rVerschmutzterBauch, gVerschmutzterBauch, 0] }
				}
			},
		}
		);





	doc.text('Fütterung', 30, 78);
	var rFuetterung = 0;
	var gFuetterung = 0;
	var bFuetterung = 0;
	var BCS_Low_Anteil = $('#BCS_Low_Percentage').val();
	var BCS_High_Anteil = $('#BCS_High_Percentage').val();
	var BCS_Deviation_Anteil = BCS_Low_Anteil + BCS_High_Anteil;
	rFuetterung = rFuetterungValue(BCS_Deviation_Anteil);
	gFuetterung = gFuetterungValue(BCS_Deviation_Anteil);
	var columnsFuetterung = [{ title: "Körperkondition", dataKey: "parameterFütterung" },
	{ title: "Anteil von Kühen [in %] mit: BCS < 2", dataKey: "anteilMager" },
	{ title: "Anteil von Kühen [in %] mit: 2 >= BCS <= 4.5", dataKey: "anteilGut" },
	{ title: "Anteil von Kühen [in %] mit: BCS > 4.5", dataKey: "anteilFett" },
	{ title: "Bewertung", dataKey: "bewertungFütterung" }
	];
	var rowsFuetterung = [{
		"parameterFütterung": "", "anteilMager": $('#BCS_Low_Percentage').val(),
		"anteilGut": $('#BCS_Good_Percentage').val(), "anteilFett": $('#BCS_High_Percentage').val(), "bewertungFütterung": ""
	}];
	doc.autoTable(columnsFuetterung, rowsFuetterung, {
		theme: 'striped',
		startY: 82,
		columnStyles: { "bewertungFütterung": { fillColor: [rFuetterung, gFuetterung, bFuetterung] } },
	});
	
	doc.text('Thermoregulation', 30, 108);
	var rHitzestress = 0;
	var gHitzestress = 0;
	var bHitzestress = 0;
	var hitzestress_Symptome_Percentage = $('#hitzestress_Symptome_Percentage').val();
	
	rHitzestress = rHitzestressValue(hitzestress_Symptome_Percentage);
	gHitzestress = gHitzestressValue(hitzestress_Symptome_Percentage);
	var columnsHitzestress = [{ title: "Hitzestress Symptome", dataKey: "parameterHitzestress" },
	{ title: "Anteil von Kühen [in %] mit Atemfrequenz > 80", dataKey: "anteilHitzestress" },
	{ title: "Bewertung", dataKey: "bewertungHitzestress" }
	];
	var rowsHitzestress = [{
		"parameterHitzestress": "",
		"anteilHitzestress": hitzestress_Symptome_Percentage,
		"bewertungHitzestress": "",
	}];
	doc.autoTable(columnsHitzestress, rowsHitzestress, {
		theme: 'striped',
		startY: 112,
		columnStyles: { "bewertungHitzestress": { fillColor: [rHitzestress, gHitzestress, bHitzestress] } },
	});

	doc.text('Liegeverhalten', 30, 140);
	var rCCQ = rKopfhaltungValue($('#CCQ').val());
	var gCCQ = gKopfhaltungValue($('#CCQ').val());
	var rPartiallyOutside = rPartiallyOutsideValue($('#partially_Outside').val());
	var gPartiallyOutside = gPartiallyOutsideValue($('#partially_Outside').val());
	var rNaturallyLaying = rNaturallyLayingValue($('#naturally_Laying').val());
	var gNaturallyLaying = gNaturallyLayingValue($('#naturally_Laying').val());

	var columnsLiegeverhalten = [{ title: "", dataKey: "parameterLiegeverhalten" }, { title: "", dataKey: "merkmalLiegeverhalten" }, { title: "Bewertung", dataKey: "bewertungLiegeverhalten" }];
	var rowsLiegeverhalten = [{ "parameterLiegeverhalten": "Liegeboxennutzung" }, {
		"merkmalLiegeverhalten": "Cow Comfort Quotient (Anteil an Kühen [in %] korrekt in der Liegebox liegender Kühe, von allen die Kontakt zur Box haben)",
		"bewertungLiegeverhalten": $('#CCQ').val()
	}, { "merkmalLiegeverhalten": "Anteil von Kühen [in %] die mindestens teilweise außerhalb liegen", "bewertungLiegeverhalten": $('#partially_Outside').val() },
	{ "parameterLiegeverhalten": "Liegeposition" }, { "merkmalLiegeverhalten": "natürliche Liegeposition", "bewertungLiegeverhalten": $('#naturally_Laying').val() }]
	doc.autoTable(columnsLiegeverhalten, rowsLiegeverhalten,
		{
			theme: 'striped',
			startY: 145,
			createdCell: function (cell, rowsLiegeverhalten) {
				if (rowsLiegeverhalten.column.dataKey == "bewertungLiegeverhalten") {
					if (rowsLiegeverhalten.row.index == 1) { cell.styles.fillColor = [rCCQ, gCCQ, 0] }
					else if (rowsLiegeverhalten.row.index == 2) { cell.styles.fillColor = [rPartiallyOutside, gPartiallyOutside, 0] }
					else if (rowsLiegeverhalten.row.index == 4) { cell.styles.fillColor = [rNaturallyLaying, gNaturallyLaying, 0] }
				}
			},
		}
	);

  }
function uploadPDF(){
	var doc = new jsPDF({ orientation: 'landscape' });
	createPDF(doc);
	var pdf = doc.output();
	var data = new FormData();
	data.append("data", pdf);
	var xhr = new XMLHttpRequest();
	xhr.open('post', 'upload.php', false);
	xhr.send(data);
}
/* the function savePDF() is used, when the pdf is saved locally on the device. It saves the document as eigenkontrolle+date.pdf --> */
function savePDF() {
	var doc = new jsPDF({ orientation: 'landscape' });
	createPDF(doc);
	doc.output('save', "eigenkontrolle" + $('#datum').val() + ".pdf");
}

function update_Verbleibende() {
			var betrachtete_Tiere = parseInt($('#atemfrequenz_Schlecht_Counter').val()) + parseInt($('#atemfrequenz_Gut_Counter').val());
			var anzahl_Tiere = $('#tiere_Anzahl').val();
			var verbleibende_Tiere = anzahl_Tiere - betrachtete_Tiere;
			if (verbleibende_Tiere < 0) {
				window.alert("Bitte überprüfen Sie nur die vorgegebene Anzahl an Tieren.")
			}
			else 
			$('#atemfrequenz_Verbleibende').val(verbleibende_Tiere);
}




/*-------------------------------------------------------------------------------------*/
// <!-- $(document).on('swipeleft', '.ui-page', function(event){     -->
//     <!-- if(event.handled !== true) // This will prevent event triggering more then once -->
//     <!-- {     -->
//         <!-- var nextpage = $.mobile.activePage.next('[data-role="page"]'); -->
//         <!-- // swipe using id of next page if exists -->
//         <!-- if (nextpage.length > 0) { -->
//             <!-- $.mobile.changePage(nextpage, {transition: "slide", reverse: false}, true, true); -->
//         <!-- } -->
//         <!-- event.handled = true; -->
//     <!-- } -->
//     <!-- return false;          -->
// <!-- }); -->

// <!-- $(document).on('swiperight', '.ui-page', function(event){      -->
//     <!-- if(event.handled !== true) // This will prevent event triggering more then once -->
//     <!-- {       -->
//         <!-- var prevpage = $(this).prev('[data-role="page"]'); -->
//         <!-- if (prevpage.length > 0) { -->
//             <!-- $.mobile.changePage(prevpage, {transition: "slide", reverse: true}, true, true); -->
//         <!-- } -->
//         <!-- event.handled = true; -->
//     <!-- } -->
//     <!-- return false;             -->
// <!-- }); -->

$(document).on('pagecreate', function () {
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth() + 1; //January is 0!

	var yyyy = today.getFullYear();
	if (dd < 10) {
		dd = '0' + dd;
	}
	if (mm < 10) {
		mm = '0' + mm;
	}
	var today = dd + '/' + mm + '/' + yyyy;

	$('#datum').val(today);

	var reprint_Halb_In_Box_Counter = $('#halb_In_Box_Anzeige').val();
	$('#reprint_Halb_In_Box').val(reprint_Halb_In_Box_Counter);

	var reprint_Korrekt_Liegende_Counter = $('#korrekt_Liegende_Anzeige').val();
	$('#reprint_Korrekt_Liegende').val(reprint_Korrekt_Liegende_Counter);

	var print_Anzahl_Tiere = $('#save_Number').val();
	$('#anzahl_Gepruefter_Tiere').val(print_Anzahl_Tiere);

	//savetolocal eutergesundheit
	var eutergesunde_Kuehe = $('#anteil_Eutergesunde_Kuehe').val();
	localStorage.setItem('eutergesunde_Kuehe', eutergesunde_Kuehe);
	var eutergesunde_Kuehe = parseInt(localStorage.getItem('eutergesunde_Kuehe'));
	$('#anteil_Eutergesunde_Kuehe').val(eutergesunde_Kuehe);

	var neuerkrankungsrate = $('#neuerkrankungsrate').val();
	localStorage.setItem('neuerkrankungsrate', neuerkrankungsrate);
	var neuerkrankungsrate = parseInt(localStorage.getItem('neuerkrankungsrate'));
	$('#neuerkrankungsrate').val(neuerkrankungsrate);

	var schlechte_Heilungsaussichten = $('#schlechte_Heilungsaussichten').val();
	localStorage.setItem('schlechte_Heilungsaussichten', schlechte_Heilungsaussichten);
	var schlechte_Heilungsaussichten = parseInt(localStorage.getItem('schlechte_Heilungsaussichten'));
	$('#schlechte_Heilungsaussichten').val(schlechte_Heilungsaussichten);

	//
	// eutergesundheit auswertung
	//


	var eutergesunde_Kuehe = $('#anteil_Eutergesunde_Kuehe').val();
	$('#anteil_Eutergesunde_Kuehe_Copy').val(eutergesunde_Kuehe);
	$('#anteil_Eutergesunde_Kuehe_Bewertung').each(function () {
		var eutergesunde_Kuehe = $('#anteil_Eutergesunde_Kuehe').val();
		if (eutergesunde_Kuehe > 65) {
			$('#anteil_Eutergesunde_Kuehe_Bewertung').css('background-color', '#008000');
		}
		else if (eutergesunde_Kuehe >= 25) {
			$('#anteil_Eutergesunde_Kuehe_Bewertung').css('background-color', '#FFA500');
		}
		else $('#anteil_Eutergesunde_Kuehe_Bewertung').css('background-color', '#FF0000');

	}
	);

	var neuerkrankungsrate = $('#neuerkrankungsrate').val();
	$('#neuerkrankungsrate_Copy').val(neuerkrankungsrate);
	$('#neuerkrankungsrate_Bewertung').each(function () {
		var neuerkrankungsrate = $('#neuerkrankungsrate').val();
		if (neuerkrankungsrate < 15) {
			$('#neuerkrankungsrate_Bewertung').css('background-color', '#008000');
		}
		else if (neuerkrankungsrate <= 30) {
			$('#neuerkrankungsrate_Bewertung').css('background-color', '#FFA500');
		}
		else
			$('#neuerkrankungsrate_Bewertung').css('background-color', '#FF0000');

	});



	var schlechte_Heilungsaussichten = $('#schlechte_Heilungsaussichten').val();
	$('#schlechte_Heilungsaussichten_Copy').val(schlechte_Heilungsaussichten);
	$('#schlechte_Heilungsaussichten_Bewertung').each(function () {
		var schlechte_Heilungsaussichten = $('#schlechte_Heilungsaussichten').val();
		if (schlechte_Heilungsaussichten < 2) {
			$('#schlechte_Heilungsaussichten_Bewertung').css('background-color', '#008000');
		}
		else if (schlechte_Heilungsaussichten <= 5) {
			$('#schlechte_Heilungsaussichten_Bewertung').css('background-color', '#FFA500');
		}
		else
			$('#schlechte_Heilungsaussichten_Bewertung').css('background-color', '#FF0000');
	});

	//
	//<!-- bewegungsapperat auswertung  -->
	//

	var anzahl_Gepruefter_Tiere = $('#anzahl_Gepruefter_Tiere').val();
	localStorage.setItem('anzahl_Gepruefter_Tiere', anzahl_Gepruefter_Tiere);
	var anzahl_Gepruefter_Tiere = parseInt(localStorage.getItem('anzahl_Gepruefter_Tiere'));
	$('#anzahl_Gepruefter_Tiere').val(anzahl_Gepruefter_Tiere);



	var LCS_High_Anzahl = $('#LCS_High_Counter').val();
	var LCS_High_Anteil = Math.round((LCS_High_Anzahl / anzahl_Gepruefter_Tiere) * 100);
	$('#LCS_High_Percentage').val(LCS_High_Anteil);

	// <!-- fortbewegung auswertung  -->
	var kopfhaltung_Gerade_Anzahl = $('#kopfhaltung_Hoch_Counter').val();
	var kopfhaltung_Gerade_Anteil = Math.round((kopfhaltung_Gerade_Anzahl / anzahl_Gepruefter_Tiere) * 100);
	$('#kopfhaltung_Gerade_Percentage').val(kopfhaltung_Gerade_Anteil);

	//
	//<!-- technopathien auswertung -->
	//

	var vorderbein_Kein_Befund_Anzahl = $('#karpalgelenk_Vorne_Kein_Counter').val();
	var vorderbein_Kein_Befund_Anteil = Math.round((vorderbein_Kein_Befund_Anzahl / anzahl_Gepruefter_Tiere) * 100);
	$('#vorderbein_Kein_Befund_Percentage').val(vorderbein_Kein_Befund_Anteil);

	var vorderbein_Haarlose_Stellen_Anzahl = $('#karpalgelenk_Vorne_Haarlos_Counter').val();
	var vorderbein_Haarlose_Stellen_Anteil = Math.round((vorderbein_Haarlose_Stellen_Anzahl / anzahl_Gepruefter_Tiere) * 100);
	$('#vorderbein_Haarlose_Stellen_Percentage').val(vorderbein_Haarlose_Stellen_Anteil);

	var vorderbein_Abschuerfung_Anzahl = $('#karpalgelenk_Vorne_Kruste_Counter').val();
	var vorderbein_Abschuerfung_Anteil = Math.round((vorderbein_Abschuerfung_Anzahl / anzahl_Gepruefter_Tiere) * 100);
	$('#vorderbein_Abschuerfung_Percentage').val(vorderbein_Abschuerfung_Anteil);

	var vorderbein_Umfangsvermehrung_Anzahl = $('#karpalgelenk_Vorne_Dick_Counter').val();
	var vorderbein_Umfangsvermehrung_Anteil = Math.round((vorderbein_Umfangsvermehrung_Anzahl / anzahl_Gepruefter_Tiere) * 100);
	$('#vorderbein_Umfangsvermehrung_Percentage').val(vorderbein_Umfangsvermehrung_Anteil);

	var vorderbein_Behandelte_Wunden_Anzahl = $('#karpalgelenk_Behandelte_Wunde_Counter').val();
	var vorderbein_Behandelte_Wunden_Anteil = Math.round((vorderbein_Behandelte_Wunden_Anzahl / anzahl_Gepruefter_Tiere) * 100);
	$('#vorderbein_Behandelte_Wunden_Percentage').val(vorderbein_Behandelte_Wunden_Anteil);

	var vorderbein_Abweichungen = Math.round(vorderbein_Haarlose_Stellen_Anteil * 1 + vorderbein_Abschuerfung_Anteil * 1 + vorderbein_Umfangsvermehrung_Anteil * 1 + vorderbein_Behandelte_Wunden_Anteil * 1);
	$('#vorderbein_Abweichungen_Percentage').val(vorderbein_Abweichungen);

	var nacken_Kein_Befund_Anzahl = $('#nacken_Kein_Counter').val();
	var nacken_Kein_Befund_Anteil = Math.round((nacken_Kein_Befund_Anzahl / anzahl_Gepruefter_Tiere) * 100);
	$('#nacken_Kein_Befund_Percentage').val(nacken_Kein_Befund_Anteil);

	var nacken_Haarlose_Stellen_Anzahl = $('#nacken_Haarlos_Counter').val();
	var nacken_Haarlose_Stellen_Anteil = Math.round((nacken_Haarlose_Stellen_Anzahl / anzahl_Gepruefter_Tiere) * 100);
	$('#nacken_Haarlose_Stellen_Percentage').val(nacken_Haarlose_Stellen_Anteil);

	var nacken_Abschuerfung_Anzahl = $('#nacken_Abschuerfung_Counter').val();
	var nacken_Abschuerfung_Anteil = Math.round((nacken_Abschuerfung_Anzahl / anzahl_Gepruefter_Tiere) * 100);
	$('#nacken_Abschuerfung_Percentage').val(nacken_Abschuerfung_Anteil);

	var nacken_Umfangsvermehrung_Anzahl = $('#nacken_Umfangsvermehrung_Counter').val();
	var nacken_Umfangsvermehrung_Anteil = Math.round((nacken_Umfangsvermehrung_Anzahl / anzahl_Gepruefter_Tiere) * 100);
	$('#nacken_Umfangsvermehrung_Percentage').val(nacken_Umfangsvermehrung_Anteil);

	var nacken_Behandelte_Wunden_Anzahl = $('#nacken_Behandelte_Wunde_Counter').val();
	var nacken_Behandelte_Wunden_Anteil = Math.round((nacken_Behandelte_Wunden_Anzahl / anzahl_Gepruefter_Tiere) * 100);
	$('#nacken_Behandelte_Wunden_Percentage').val(nacken_Behandelte_Wunden_Anteil);

	var nacken_Abweichungen = Math.round(nacken_Haarlose_Stellen_Anteil * 1 + nacken_Abschuerfung_Anteil * 1 + nacken_Umfangsvermehrung_Anteil * 1 + nacken_Behandelte_Wunden_Anteil * 1);
	$('#nacken_Abweichungen_Percentage').val(nacken_Abweichungen);

	var ruecken_Kein_Befund_Anzahl = $('#ruecken_Kein_Counter').val();
	var ruecken_Kein_Befund_Anteil = Math.round((ruecken_Kein_Befund_Anzahl / anzahl_Gepruefter_Tiere) * 100);
	$('#ruecken_Kein_Befund_Percentage').val(ruecken_Kein_Befund_Anteil);

	var ruecken_Haarlose_Stellen_Anzahl = $('#ruecken_Haarlos_Counter').val();
	var ruecken_Haarlose_Stellen_Anteil = Math.round((ruecken_Haarlose_Stellen_Anzahl / anzahl_Gepruefter_Tiere) * 100);
	$('#ruecken_Haarlose_Stellen_Percentage').val(ruecken_Haarlose_Stellen_Anteil);

	var ruecken_Abschuerfung_Anzahl = $('#ruecken_Abschuerfung_Counter').val();
	var ruecken_Abschuerfung_Anteil = Math.round((ruecken_Abschuerfung_Anzahl / anzahl_Gepruefter_Tiere) * 100);
	$('#ruecken_Abschuerfung_Percentage').val(ruecken_Abschuerfung_Anteil);

	var ruecken_Umfangsvermehrung_Anzahl = $('#ruecken_Umfangsvermehrung_Counter').val();
	var ruecken_Umfangsvermehrung_Anteil = Math.round((ruecken_Umfangsvermehrung_Anzahl / anzahl_Gepruefter_Tiere) * 100);
	$('#ruecken_Umfangsvermehrung_Percentage').val(ruecken_Umfangsvermehrung_Anteil);

	var ruecken_Behandelte_Wunden_Anzahl = $('#ruecken_Behandelte_Wunde_Counter').val();
	var ruecken_Behandelte_Wunden_Anteil = Math.round((ruecken_Behandelte_Wunden_Anzahl / anzahl_Gepruefter_Tiere) * 100);
	$('#ruecken_Behandelte_Wunden_Percentage').val(ruecken_Behandelte_Wunden_Anteil);

	var ruecken_Abweichungen = Math.round(ruecken_Haarlose_Stellen_Anteil * 1 + ruecken_Abschuerfung_Anteil * 1 + ruecken_Umfangsvermehrung_Anteil * 1 + ruecken_Behandelte_Wunden_Anteil * 1);
	$('#ruecken_Abweichungen_Percentage').val(ruecken_Abweichungen);

	var hinterbein_Kein_Befund_Anzahl = $('#hinterbein_Kein_Counter').val();
	var hinterbein_Kein_Befund_Anteil = Math.round((hinterbein_Kein_Befund_Anzahl / anzahl_Gepruefter_Tiere) * 100);
	$('#hinterbein_Kein_Befund_Percentage').val(hinterbein_Kein_Befund_Anteil);

	var hinterbein_Haarlose_Stellen_Anzahl = $('#hinterbein_Haarlos_Counter').val();
	var hinterbein_Haarlose_Stellen_Anteil = Math.round((hinterbein_Haarlose_Stellen_Anzahl / anzahl_Gepruefter_Tiere) * 100);
	$('#hinterbein_Haarlose_Stellen_Percentage').val(hinterbein_Haarlose_Stellen_Anteil);

	var hinterbein_Abschuerfung_Anzahl = $('#hinterbein_Abschuerfung_Counter').val();
	var hinterbein_Abschuerfung_Anteil = Math.round((hinterbein_Abschuerfung_Anzahl / anzahl_Gepruefter_Tiere) * 100);
	$('#hinterbein_Abschuerfung_Percentage').val(hinterbein_Abschuerfung_Anteil);

	var hinterbein_Umfangsvermehrung_Anzahl = $('#hinterbein_Umfangsvermehrung_Counter').val();
	var hinterbein_Umfangsvermehrung_Anteil = Math.round((hinterbein_Umfangsvermehrung_Anzahl / anzahl_Gepruefter_Tiere) * 100);
	$('#hinterbein_Umfangsvermehrung_Percentage').val(hinterbein_Umfangsvermehrung_Anteil);

	var hinterbein_Behandelte_Wunden_Anzahl = $('#hinterbein_Behandelte_Wunde_Counter').val();
	var hinterbein_Behandelte_Wunden_Anteil = Math.round((hinterbein_Behandelte_Wunden_Anzahl / anzahl_Gepruefter_Tiere) * 100);
	$('#hinterbein_Behandelte_Wunden_Percentage').val(hinterbein_Behandelte_Wunden_Anteil);

	var hinterbein_Abweichungen = Math.round(hinterbein_Haarlose_Stellen_Anteil * 1 + hinterbein_Abschuerfung_Anteil * 1 + hinterbein_Umfangsvermehrung_Anteil * 1 + hinterbein_Behandelte_Wunden_Anteil * 1);
	$('#hinterbein_Abweichungen_Percentage').val(hinterbein_Abweichungen);


	//
	//<!-- sauberkeit auswertung & ampel -->
	//


	$('#hinterhand_Verschmutzung').each(function () {
		if ($('#hinterhand_Stark_Verschmutzt_Counter').val() / anzahl_Gepruefter_Tiere > 0.3) {
			$('#hinterhand_Verschmutzung').css('background-color', '#FF0000');
		}
		else if (($('#hinterhand_Leicht_Verschmutzt_Counter').val() + $('#hinterhand_Stark_Verschmutzt_Counter').val()) / anzahl_Gepruefter_Tiere >= 0.1) {
			$('#hinterhand_Verschmutzung').css('background-color', '#FFA500');
		}
		else
			$('#hinterhand_Verschmutzung').css('background-color', '#008000');
	});


	$('#hinterhand_Stark_Verschmutzt_Percentage').val(Math.round(($('#hinterhand_Stark_Verschmutzt_Counter').val() / anzahl_Gepruefter_Tiere) * 100));
	$('#hinterhand_Leicht_Verschmutzt_Percentage').val(Math.round(($('#hinterhand_Leicht_Verschmutzt_Counter').val() / anzahl_Gepruefter_Tiere) * 100));


	$('#beine_Verschmutzung').each(function () {
		if ($('#beine_Stark_Verschmutzt_Counter').val() / anzahl_Gepruefter_Tiere > 0.3) {
			$('#beine_Verschmutzung').css('background-color', '#FF0000');
		}
		else if (($('#beine_Leicht_Verschmutzt_Counter').val() + $('#beine_Stark_Verschmutzt_Counter').val()) / anzahl_Gepruefter_Tiere >= 0.2) {
			$('#beine_Verschmutzung').css('background-color', '#FFA500');
		}
		else
			$('#beine_Verschmutzung').css('background-color', '#008000');

	});

	$('#beine_Stark_Verschmutzt_Percentage').val(Math.round(($('#beine_Stark_Verschmutzt_Counter').val() / anzahl_Gepruefter_Tiere) * 100));
	$('#beine_Leicht_Verschmutzt_Percentage').val(Math.round(($('#beine_Leicht_Verschmutzt_Counter').val() / anzahl_Gepruefter_Tiere) * 100));

	$('#euter_Verschmutzung').each(function () {
		if ($('#euter_Stark_Verschmutzt_Counter').val() / anzahl_Gepruefter_Tiere > 0.3) {
			$('#euter_Verschmutzung').css('background-color', '#FF0000');
		}
		else if (($('#euter_Leicht_Verschmutzt_Counter').val() + $('#euter_Stark_Verschmutzt_Counter').val()) / anzahl_Gepruefter_Tiere >= 0.1) {
			$('#euter_Verschmutzung').css('background-color', '#FFA500');
		}
		else
			$('#euter_Verschmutzung').css('background-color', '#008000');

	});
	$('#euter_Stark_Verschmutzt_Percentage').val(Math.round(($('#euter_Stark_Verschmutzt_Counter').val() / anzahl_Gepruefter_Tiere) * 100));
	$('#euter_Leicht_Verschmutzt_Percentage').val(Math.round(($('#euter_Leicht_Verschmutzt_Counter').val() / anzahl_Gepruefter_Tiere) * 100));

	$('#bauch_Verschmutzung').each(function () {
		if ($('#bauch_Stark_Verschmutzt_Counter').val() / anzahl_Gepruefter_Tiere > 0.3) {
			$('#bauch_Verschmutzung').css('background-color', '#FF0000');
		}
		else if (($('#bauch_Leicht_Verschmutzt_Counter').val() + $('#bauch_Stark_Verschmutzt_Counter').val()) / anzahl_Gepruefter_Tiere >= 0.1) {
			$('#bauch_Verschmutzung').css('background-color', '#FFA500');
		}
		else
			$('#bauch_Verschmutzung').css('background-color', '#008000');

	});

	$('#bauch_Stark_Verschmutzt_Percentage').val(Math.round(($('#bauch_Stark_Verschmutzt_Counter').val() / anzahl_Gepruefter_Tiere) * 100));
	$('#bauch_Leicht_Verschmutzt_Percentage').val(Math.round(($('#bauch_Leicht_Verschmutzt_Counter').val() / anzahl_Gepruefter_Tiere) * 100));


	//
	//<!-- koerperkondition auswertung und ampel  -->
	//

	$('#BCS_Low_Percentage').each(function () {
		var BCS_Low_Anzahl = $('#BCS_Zu_Mager_Counter').val();
		var BCS_Low_Anteil = Math.round((BCS_Low_Anzahl / anzahl_Gepruefter_Tiere) * 100);
		$('#BCS_Low_Percentage').val(BCS_Low_Anteil);
	});

	$('#BCS_High_Percentage').each(function () {
		var BCS_High_Anzahl = $('#BCS_Zu_Dick_Counter').val();
		var BCS_High_Anteil = Math.round((BCS_High_Anzahl / anzahl_Gepruefter_Tiere) * 100);
		$('#BCS_High_Percentage').val(BCS_High_Anteil);
	});

	$('#BCS_Good_Percentage').each(function () {
		var BCS_Good_Anzahl = $('#BCS_Gut_Counter').val();
		var BCS_Good_Anteil = Math.round((BCS_Good_Anzahl / anzahl_Gepruefter_Tiere) * 100);
		$('#BCS_Good_Percentage').val(BCS_Good_Anteil);
	});

	$('#BCS_Deviation_Percentage').each(function () {
		var BCS_Low_Anteil = $('#BCS_Low_Percentage').val();
		var BCS_High_Anteil = $('#BCS_High_Percentage').val();
		var BCS_Deviation_Anteil = BCS_Low_Anteil + BCS_High_Anteil;
		if (BCS_Deviation_Anteil < 5) {
			$('#BCS_Deviation_Percentage').css('background-color', '#008000');
		}
		else if (BCS_Deviation_Anteil <= 20) {
			$('#BCS_Deviation_Percentage').css('background-color', '#FFA500');
		}
		else
			$('#BCS_Deviation_Percentage').css('background-color', '#FF0000');
	});

	//
	//<!-- technopathien Ampel -->
	//

	$('#vorderbein_Abweichungen_Percentage').each(function () {
		if ($('#vorderbein_Abweichungen_Percentage').val() * 1 < 5) {
			$('#vorderbein_Abweichungen_Percentage').css('background-color', '#008000');
		}
		else if ($('#vorderbein_Abweichungen_Percentage').val() < 15) {
			$('#vorderbein_Abweichungen_Percentage').css('background-color', '#FFA500');
		}
		else {
			$('#vorderbein_Abweichungen_Percentage').css('background-color', '#FF0000');
		}
	});

	$('#nacken_Abweichungen_Percentage').each(function () {
		if ($('#nacken_Abweichungen_Percentage').val() < 5) {
			$(this).css('background-color', '#008000');
		}
		else if ($('#nacken_Abweichungen_Percentage').val() < 15) {
			$(this).css('background-color', '#FFA500');
		}
		else {
			$(this).css('background-color', '#FF0000');
		}
	});

	$('#ruecken_Abweichungen_Percentage').each(function () {
		if ($('#ruecken_Abweichungen_Percentage').val() < 5) {
			$(this).css('background-color', '#008000');
		}
		else if ($('#ruecken_Abweichungen_Percentage').val() < 15) {
			$(this).css('background-color', '#FFA500');
		}
		else {
			$(this).css('background-color', '#FF0000');
		}
	});

	$('#hinterbein_Abweichungen_Percentage').each(function () {
		if ($('#hinterbein_Abweichungen_Percentage').val() < 5) {
			$(this).css('background-color', '#008000');
		}
		else if ($('#hinterbein_Abweichungen_Percentage').val() < 15) {
			$(this).css('background-color', '#FFA500');
		}
		else {
			$(this).css('background-color', '#FF0000');
		}
	});

	//
	//<!-- bewegungsapperat ampel -->
	//

	$('#LCS_High_Percentage').each(function () {
		if ($('#LCS_High_Percentage').val() < 5) {
			$(this).css('background-color', '#008000');
		}
		else if ($('#LCS_High_Percentage').val() < 15) {
			$(this).css('background-color', '#FFA500');
		}
		else {
			$(this).css('background-color', '#FF0000');


		}
	});

	//
	//<!-- fortbewegung ampel  -->
	//

	$('#kopfhaltung_Gerade_Percentage').each(function () {
		if ($('#kopfhaltung_Gerade_Percentage').val() > 85) {
			$(this).css('background-color', '#008000');
		}
		else if ($('#kopfhaltung_Gerade_Percentage').val() >= 50) {
			$(this).css('background-color', '#FFA500');
		}
		else {
			$(this).css('background-color', '#FF0000');
		}
	});

	// Thermoregulation Score und Ampel 

	$('#hitzestress_Symptome_Percentage').each(function () {
		var atemfrequenz_Gut = $('#atemfrequenz_Gut_Counter').val();
		var atemfrequenz_Schlecht = $('#atemfrequenz_Schlecht_Counter').val();
		var fokusgruppe_Hitzestress = parseInt(atemfrequenz_Gut) + parseInt(atemfrequenz_Schlecht);
		var hitzestress_Symptome_Percentage = Math.round(parseInt(atemfrequenz_Schlecht/fokusgruppe_Hitzestress *100));
		$('#hitzestress_Symptome_Percentage').val(hitzestress_Symptome_Percentage);
	});

	$('#hitzestress_Symptome_Bewertung').each(function() {
		var hitzestress_Symptome_Percentage =  parseInt($('#hitzestress_Symptome_Percentage').val());
		if ( hitzestress_Symptome_Percentage > 5) {
			$('#hitzestress_Symptome_Bewertung').css('background-color', '#FF0000');
		}
		else 
			$('#hitzestress_Symptome_Bewertung').css('background-color', '#008000');
	});

	//
	//<!-- Liegeverhalten score und ampel  -->
	//

	$('#CCQ').each(function () {
		var korrekt_Liegende = $('#korrekt_Liegende_Anzeige').val();
		var halb_In_Box = $('#halb_In_Box_Anzeige').val();
		var hundesitz = $('#hundesitz_Anzeige').val();
		var stehen = $('#stehen_Anzeige').val();
		var partially_Inside = korrekt_Liegende * 1 + halb_In_Box * 1 + hundesitz * 1 + stehen * 1;
		var CCQ_Value = Math.round((korrekt_Liegende / partially_Inside) * 100);
		$('#CCQ').val(CCQ_Value);

		if (CCQ_Value > 85) {
			$(this).css('background-color', '#008000');
			// $(this).setAttribute('media', 'all');
		}
		else if (CCQ_Value >= 50) {
			$(this).css('background-color', '#FFA500');
			// $(this).setAttribute('media', 'all');
		}
		else
			$(this).css('background-color', '#FF0000');
		// $(this).setAttribute('media', 'all');
	}
	)
		;

	$('#partially_Outside').each(function () {
		var halb_In_Box = $('#halb_In_Box_Anzeige').val();
		var outside = $('#spalten_Lieger_Anzeige').val();
		var korrekt_Liegende = $('#korrekt_Liegende_Anzeige').val();
		var hundesitz = $('#hundesitz_Anzeige').val();
		var stehen = $('#stehen_Anzeige').val();
		var all_Laying = halb_In_Box * 1 + outside * 1 + korrekt_Liegende * 1 + hundesitz * 1 + stehen * 1;
		var outside_Percentage = Math.round(((outside * 1 + halb_In_Box * 1) / all_Laying) * 100);
		$('#partially_Outside').val(outside_Percentage);
		if (outside_Percentage < 3) {
			$(this).css('background-color', '#008000');
		}
		else if (outside_Percentage < 6) {
			$(this).css('background-color', '#FFA500');
		}
		else
			$(this).css('background-color', '#FF0000');
	}
	);

	$('#naturally_Laying').each(function () {
		var korrekt_Liegende = $('#korrekt_Liegende_Anzeige').val();
		var ausgestrecktes_Vorderbein = $('#ausgestrecktes_Vorderbein_Anzeige').val();

		var naturally_Laying_Percentage = Math.round((ausgestrecktes_Vorderbein / korrekt_Liegende) * 100);
		$('#naturally_Laying').val(naturally_Laying_Percentage);
		if (naturally_Laying_Percentage > 10) {
			$(this).css('background-color', '#008000');
		}
		else if (naturally_Laying_Percentage > 4) {
			$(this).css('background-color', '#FFA500');
		}
		else
			$(this).css('background-color', '#FF0000');
	});





});