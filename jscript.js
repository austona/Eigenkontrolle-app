
$(document).ready(function(){
	

		
	
	 var screenHeight = $(window).height();
	  $('.ui-content').height(screenHeight);
	  var imgMaxWidth = 0.7 * screenHeight/2;  
	  // if (screenHeight > 1000) {
		// var imgMaxWidth = 0.7 * screenHeight/2;  
	  // }
	  // else if (screenHeight > 1500){
		  // var imgMaxWidth = 0.6 * screenHeight/2;
	  // }
	  $('img').css('max-width', imgMaxWidth);
	$('#startPicture').css('max-width', 'none');



$('#korrekt_Liegende').click(
function() {
var korrekt_Liegende_Counter = $('#korrekt_Liegende_Anzeige').val();
korrekt_Liegende_Counter++;
$('#korrekt_Liegende_Anzeige').val(korrekt_Liegende_Counter);});

$('#korrekt_Liegende_Minus').click(
function() {
var korrekt_Liegende_Counter = $('#korrekt_Liegende_Anzeige').val();
if (korrekt_Liegende_Counter > 0){
korrekt_Liegende_Counter--;
}
$('#korrekt_Liegende_Anzeige').val(korrekt_Liegende_Counter);});

$('#korrekt_Liegende_Reset').click(
function() {
korrekt_Liegende_Counter = 0;
$('#korrekt_Liegende_Anzeige').val(korrekt_Liegende_Counter);});

$('#hundesitz').click(
function() {
var hundesitz_Counter = $('#hundesitz_Anzeige').val();
hundesitz_Counter++;
$('#hundesitz_Anzeige').val(hundesitz_Counter);});

$('#hundesitz_Minus').click(
function() {
var hundesitz_Counter = $('#hundesitz_Anzeige').val();
if (hundesitz_Counter > 0){
hundesitz_Counter--;
}
$('#hundesitz_Anzeige').val(hundesitz_Counter);});

$('#hundesitz_Reset').click(
function() {
hundesitz_Counter = 0;
$('#hundesitz_Anzeige').val(hundesitz_Counter);});

$('#stehen').click(
function() {
var stehen_Counter = $('#stehen_Anzeige').val();
stehen_Counter++;
$('#stehen_Anzeige').val(stehen_Counter);});

$('#stehen_Minus').click(
function() {
var stehen_Counter = $('#stehen_Anzeige').val();
if (stehen_Counter > 0)
stehen_Counter--;
$('#stehen_Anzeige').val(stehen_Counter);});

$('#stehen_Reset').click(
function() {
stehen_Counter = 0;
$('#stehen_Anzeige').val(stehen_Counter);});
 
$('#halb_In_Box').click(
function() {
halb_In_Box_Counter = $('#halb_In_Box_Anzeige').val();
halb_In_Box_Counter++;
$('#halb_In_Box_Anzeige').val(halb_In_Box_Counter);});

$('#halb_In_Box_Minus').click(
function() {
var halb_In_Box_Counter = $('#halb_In_Box_Anzeige').val();
if (halb_In_Box_Counter > 0)
halb_In_Box_Counter--;
$('#halb_In_Box_Anzeige').val(halb_In_Box_Counter);
});

$('#halb_In_Box_Reset').click(
function() {
halb_In_Box_Counter = 0;
$('#halb_In_Box_Anzeige').val(halb_In_Box_Counter);});

$('#spalten_Lieger').click(
function() {
spalten_Lieger_Counter = $('#spalten_Lieger_Anzeige').val();
spalten_Lieger_Counter++;
$('#spalten_Lieger_Anzeige').val(spalten_Lieger_Counter);});

$('#spalten_Lieger_Minus').click(
function() {
var spalten_Lieger_Counter = $('#spalten_Lieger_Anzeige').val();
if (spalten_Lieger_Counter > 0)
spalten_Lieger_Counter--;
$('#spalten_Lieger_Anzeige').val(spalten_Lieger_Counter);
});


$('#spalten_Lieger_Reset').click(
function() {
spalten_Lieger_Counter = 0;
$('#spalten_Lieger_Anzeige').val(spalten_Lieger_Counter);});

$('#ausgestrecktes_Vorderbein').click(
function() {
ausgestrecktes_Vorderbein_Counter = $('#ausgestrecktes_Vorderbein_Anzeige').val();
ausgestrecktes_Vorderbein_Counter++;
$('#ausgestrecktes_Vorderbein_Anzeige').val(ausgestrecktes_Vorderbein_Counter);});

$('#ausgestrecktes_Vorderbein_Minus').click(
function() {
var ausgestrecktes_Vorderbein_Counter = $('#ausgestrecktes_Vorderbein_Anzeige').val();
if (ausgestrecktes_Vorderbein_Counter > 0)
ausgestrecktes_Vorderbein_Counter--;
$('#ausgestrecktes_Vorderbein_Anzeige').val(ausgestrecktes_Vorderbein_Counter);
});
$('#ausgestrecktes_Vorderbein_Reset').click(
function() {
ausgestrecktes_Vorderbein_Counter = 0;
$('#ausgestrecktes_Vorderbein_Anzeige').val(ausgestrecktes_Vorderbein_Counter);});



$('#karpalgelenk_Vorne_Kein').click(
function() {
var karpalgelenk_Vorne_Kein_Overall = $('#karpalgelenk_Vorne_Kein_Counter').val(); 
karpalgelenk_Vorne_Kein_Overall++;
$('#karpalgelenk_Vorne_Kein_Counter').val(karpalgelenk_Vorne_Kein_Overall);
}
);

$('#karpalgelenk_Vorne_Dick').click(
function() {
var karpalgelenk_Vorne_Dick_Overall = $('#karpalgelenk_Vorne_Dick_Counter').val(); 
karpalgelenk_Vorne_Dick_Overall++;
$('#karpalgelenk_Vorne_Dick_Counter').val(karpalgelenk_Vorne_Dick_Overall);
}
);

$('#karpalgelenk_Vorne_Kruste').click(
function() {
var karpalgelenk_Vorne_Kruste_Overall = $('#karpalgelenk_Vorne_Kruste_Counter').val(); 
karpalgelenk_Vorne_Kruste_Overall++;
$('#karpalgelenk_Vorne_Kruste_Counter').val(karpalgelenk_Vorne_Kruste_Overall);
}
);

$('#karpalgelenk_Vorne_Haarlos').click(
function() {
var karpalgelenk_Vorne_Haarlos_Overall = $('#karpalgelenk_Vorne_Haarlos_Counter').val(); 
karpalgelenk_Vorne_Haarlos_Overall++;
$('#karpalgelenk_Vorne_Haarlos_Counter').val(karpalgelenk_Vorne_Haarlos_Overall);
}
);
$('#karpalgelenk_Behandelte_Wunde').click(
function() {
var karpalgelenk_Behandelte_Wunde_Overall = $('#karpalgelenk_Behandelte_Wunde_Counter').val(); 
karpalgelenk_Behandelte_Wunde_Overall++;
$('#karpalgelenk_Behandelte_Wunde_Counter').val(karpalgelenk_Behandelte_Wunde_Overall);
}
);

$('#nacken_Kein').click(
function() {
var nacken_Kein_Overall = $('#nacken_Kein_Counter').val(); 
nacken_Kein_Overall++;
$('#nacken_Kein_Counter').val(nacken_Kein_Overall);
}
);

$('#nacken_Umfangsvermehrung').click(
function() {
var nacken_Umfangsvermehrung_Overall = $('#nacken_Umfangsvermehrung_Counter').val(); 
nacken_Umfangsvermehrung_Overall++;
$('#nacken_Umfangsvermehrung_Counter').val(nacken_Umfangsvermehrung_Overall);
}
);

$('#nacken_Abschuerfung').click(
function() {
var nacken_Abschuerfung_Overall = $('#nacken_Abschuerfung_Counter').val(); 
nacken_Abschuerfung_Overall++;
$('#nacken_Abschuerfung_Counter').val(nacken_Abschuerfung_Overall);
}
);

$('#nacken_Haarlos').click(
function() {
var nacken_Haarlos_Overall = $('#nacken_Haarlos_Counter').val(); 
nacken_Haarlos_Overall++;
$('#nacken_Haarlos_Counter').val(nacken_Haarlos_Overall);
}
);

$('#nacken_Behandelte_Wunde').click(
function() {
var nacken_Behandelte_Wunde_Overall = $('#nacken_Behandelte_Wunde_Counter').val(); 
nacken_Behandelte_Wunde_Overall++;
$('#nacken_Behandelte_Wunde_Counter').val(nacken_Behandelte_Wunde_Overall);
}
);

$('#ruecken_Kein').click(
function() {
var ruecken_Kein_Overall = $('#ruecken_Kein_Counter').val(); 
ruecken_Kein_Overall++;
$('#ruecken_Kein_Counter').val(ruecken_Kein_Overall);
}
)
;
$('#ruecken_Umfangsvermehrung').click(
function() {
var ruecken_Umfangsvermehrung_Overall = $('#ruecken_Umfangsvermehrung_Counter').val(); 
ruecken_Umfangsvermehrung_Overall++;
$('#ruecken_Umfangsvermehrung_Counter').val(ruecken_Umfangsvermehrung_Overall);
}
)
;
$('#ruecken_Abschuerfung').click(
function() {
var ruecken_Abschuerfung_Overall = $('#ruecken_Abschuerfung_Counter').val(); 
ruecken_Abschuerfung_Overall++;
$('#ruecken_Abschuerfung_Counter').val(ruecken_Abschuerfung_Overall);
}
)
;
$('#ruecken_Haarlos').click(
function() {
var ruecken_Haarlos_Overall = $('#ruecken_Haarlos_Counter').val(); 
ruecken_Haarlos_Overall++;
$('#ruecken_Haarlos_Counter').val(ruecken_Haarlos_Overall);
}
)
;
$('#ruecken_Behandelte_Wunde').click(
function() {
var ruecken_Behandelte_Wunde_Overall = $('#ruecken_Behandelte_Wunde_Counter').val(); 
ruecken_Behandelte_Wunde_Overall++;
$('#ruecken_Behandelte_Wunde_Counter').val(ruecken_Behandelte_Wunde_Overall);
}
);

$('#hinterbein_Kein').click(
function() {
var hinterbein_Kein_Overall = $('#hinterbein_Kein_Counter').val(); 
hinterbein_Kein_Overall++;
$('#hinterbein_Kein_Counter').val(hinterbein_Kein_Overall);
}
);

$('#hinterbein_Umfangsvermehrung').click(
function() {
var hinterbein_Umfangsvermehrung_Overall = $('#hinterbein_Umfangsvermehrung_Counter').val(); 
hinterbein_Umfangsvermehrung_Overall++;
$('#hinterbein_Umfangsvermehrung_Counter').val(hinterbein_Umfangsvermehrung_Overall);
}
);

$('#hinterbein_Abschuerfung').click(
function() {
var hinterbein_Abschuerfung_Overall = $('#hinterbein_Abschuerfung_Counter').val(); 
hinterbein_Abschuerfung_Overall++;
$('#hinterbein_Abschuerfung_Counter').val(hinterbein_Abschuerfung_Overall);
}
);

$('#hinterbein_Haarlos').click(
function() {
var hinterbein_Haarlos_Overall = $('#hinterbein_Haarlos_Counter').val(); 
hinterbein_Haarlos_Overall++;
$('#hinterbein_Haarlos_Counter').val(hinterbein_Haarlos_Overall);
}
);

$('#hinterbein_Behandelte_Wunde').click(
function() {
var hinterbein_Behandelte_Wunde_Overall = $('#hinterbein_Behandelte_Wunde_Counter').val(); 
hinterbein_Behandelte_Wunde_Overall++;
$('#hinterbein_Behandelte_Wunde_Counter').val(hinterbein_Behandelte_Wunde_Overall);
}
);
$('#hinterhand_Sauber').click(
function() {
var hinterhand_Sauber_Overall = $('#hinterhand_Sauber_Counter').val(); 
hinterhand_Sauber_Overall++;
$('#hinterhand_Sauber_Counter').val(hinterhand_Sauber_Overall);
}
);

$('#hinterhand_Leicht_Verschmutzt').click(
function() {
var hinterhand_Leicht_Verschmutzt_Overall = $('#hinterhand_Leicht_Verschmutzt_Counter').val(); 
hinterhand_Leicht_Verschmutzt_Overall++;
$('#hinterhand_Leicht_Verschmutzt_Counter').val(hinterhand_Leicht_Verschmutzt_Overall);
}
);

$('#hinterhand_Stark_Verschmutzt').click(
function() {
var hinterhand_Stark_Verschmutzt_Overall = $('#hinterhand_Stark_Verschmutzt_Counter').val(); 
hinterhand_Stark_Verschmutzt_Overall++;
$('#hinterhand_Stark_Verschmutzt_Counter').val(hinterhand_Stark_Verschmutzt_Overall);
}
);

$('#beine_Sauber').click(
function() {
var beine_Sauber_Overall = $('#beine_Sauber_Counter').val(); 
beine_Sauber_Overall++;
$('#beine_Sauber_Counter').val(beine_Sauber_Overall);
}
)
;
$('#beine_Leicht_Verschmutzt').click(
function() {
var beine_Leicht_Verschmutzt_Overall = $('#beine_Leicht_Verschmutzt_Counter').val(); 
beine_Leicht_Verschmutzt_Overall++;
$('#beine_Leicht_Verschmutzt_Counter').val(beine_Leicht_Verschmutzt_Overall);
}
);

$('#beine_Stark_Verschmutzt').click(
function() {
var beine_Stark_Verschmutzt_Overall = $('#beine_Stark_Verschmutzt_Counter').val(); 
beine_Stark_Verschmutzt_Overall++;
$('#beine_Stark_Verschmutzt_Counter').val(beine_Stark_Verschmutzt_Overall);
}
);

$('#euter_Sauber').click(
function() {
var euter_Sauber_Overall = $('#euter_Sauber_Counter').val(); 
euter_Sauber_Overall++;
$('#euter_Sauber_Counter').val(euter_Sauber_Overall);
}
);

$('#euter_Leicht_Verschmutzt').click(
function() {
var euter_Leicht_Verschmutzt_Overall = $('#euter_Leicht_Verschmutzt_Counter').val(); 
euter_Leicht_Verschmutzt_Overall++;
$('#euter_Leicht_Verschmutzt_Counter').val(euter_Leicht_Verschmutzt_Overall);
}
)
;
$('#euter_Stark_Verschmutzt').click(
function() {
var euter_Stark_Verschmutzt_Overall = $('#euter_Stark_Verschmutzt_Counter').val(); 
euter_Stark_Verschmutzt_Overall++;
$('#euter_Stark_Verschmutzt_Counter').val(euter_Stark_Verschmutzt_Overall);
}
)
;
$('#bauch_Sauber').click(
function() {
var bauch_Sauber_Overall = $('#bauch_Sauber_Counter').val(); 
bauch_Sauber_Overall++;
$('#bauch_Sauber_Counter').val(bauch_Sauber_Overall);
}
);

$('#bauch_Leicht_Verschmutzt').click(
function() {
var bauch_Leicht_Verschmutzt_Overall = $('#bauch_Leicht_Verschmutzt_Counter').val(); 
bauch_Leicht_Verschmutzt_Overall++;
$('#bauch_Leicht_Verschmutzt_Counter').val(bauch_Leicht_Verschmutzt_Overall);
}
);

$('#bauch_Stark_Verschmutzt').click(
function() {
var bauch_Stark_Verschmutzt_Overall = $('#bauch_Stark_Verschmutzt_Counter').val(); 
bauch_Stark_Verschmutzt_Overall++;
$('#bauch_Stark_Verschmutzt_Counter').val(bauch_Stark_Verschmutzt_Overall);

}
);

$('#BCS_Zu_Mager').click(
function() {
var BCS_Zu_Mager_Overall = $('#BCS_Zu_Mager_Counter').val(); 
BCS_Zu_Mager_Overall++;
$('#BCS_Zu_Mager_Counter').val(BCS_Zu_Mager_Overall);

}
);

$('#BCS_Gut').click(
function() {
var BCS_Gut_Overall = $('#BCS_Gut_Counter').val(); 
BCS_Gut_Overall++;
$('#BCS_Gut_Counter').val(BCS_Gut_Overall);
}
);

$('#BCS_Zu_Dick').click(
function() {
var BCS_Zu_Dick_Overall = $('#BCS_Zu_Dick_Counter').val(); 
BCS_Zu_Dick_Overall++;
$('#BCS_Zu_Dick_Counter').val(BCS_Zu_Dick_Overall);
}
);

$('#kopfhaltung_Hoch').click(
function() {
var kopfhaltung_Hoch_Overall = $('#kopfhaltung_Hoch_Counter').val(); 
kopfhaltung_Hoch_Overall++;
$('#kopfhaltung_Hoch_Counter').val(kopfhaltung_Hoch_Overall);
}
);

$('#kopfhaltung_Niedrig').click(
function() {
var kopfhaltung_Niedrig_Overall = $('#kopfhaltung_Niedrig_Counter').val(); 
kopfhaltung_Niedrig_Overall++;
$('#kopfhaltung_Niedrig_Counter').val(kopfhaltung_Niedrig_Overall);

}
);

$('#LCS_High').click(
function() {
var LCS_High_Overall = $('#LCS_High_Counter').val(); 
LCS_High_Overall++;
$('#LCS_High_Counter').val(LCS_High_Overall);
}
);

$('#LCS_Low').click(
function() {
var LCS_Low_Overall = $('#LCS_Low_Counter').val(); 
LCS_Low_Overall++;
$('#LCS_Low_Counter').val(LCS_Low_Overall);
}
);
// $('#LCS_High').click(
// function(){
// var updated_Anzahl = $('#tiere_Anzahl').val() - 1;
// if (updated_Anzahl >= 0){
// $('#tiere_Anzahl').val(updated_Anzahl);
// }
// else $('#tiere_Anzahl').val(0);
// });

// $('#LCS_Low').click(
// function(){
// var updated_Anzahl = $('#tiere_Anzahl').val() - 1;
// if (updated_Anzahl >= 0){
// $('#tiere_Anzahl').val(updated_Anzahl);
// }
// else $('#tiere_Anzahl').val(0);
// });
// });





});


function copyNumber() {
var LCS_Low_Overall = $('#LCS_Low_Counter').val(); 
var LCS_High_Overall = $('#LCS_High_Counter').val(); 
var numberToCopy = $('#tiere_Anzahl').val(); 
if (LCS_Low_Overall == 0 && LCS_High_Overall == 0)
$('#save_Number').val(numberToCopy);
}

function calculateSampleSize() {
var herdengroesse = $('#herdengroesse').val();
if (herdengroesse > 100) {
herdengroesse = Math.round(0.2 * herdengroesse);
} 
else herdengroesse = 20; 
$('#tiere_Anzahl').val(herdengroesse);
}


//Die ID des letzten geklickten Bildes wird gespeichert. Auch wird die Anzahl der Verbleibenden Kühe in der Anzeige angepasst.
function rememberID(clicked_ID) {
$('#save_LastID').val(clicked_ID);
var remaining_Cows_Number = $('#tiere_Anzahl').val();
numberPages = document.getElementsByClassName("remaining_Cows").length;
if (clicked_ID == "LCS_High" || clicked_ID == "LCS_Low"){
document.getElementsByClassName("remaining_Cows")[0].setAttribute("value", "Verbleibende Kühe: " + remaining_Cows_Number);
for (i = 1; i < numberPages; i++){
document.getElementsByClassName("remaining_Cows")[i].setAttribute("value", "Verbleibende Kühe: " + remaining_Cows_Number);	
}
}
else 
for (i = 0; i < numberPages; i++){
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
		current_Number ++; 
		$('#tiere_Anzahl').val(current_Number); 
		for (i = 0; i < numberPages; i++){
			document.getElementsByClassName("remaining_Cows")[i].setAttribute("value", "Verbleibende Kühe: " + current_Number);	
			}
	}
	else if (curr_Id == "karpalgelenk_Vorne_Weiter"){
		window.location.href = "#karpalgelenk_Vorne"
		$('#isDoubleCorrection').val(1);
		window.alert('Sie müssen zuerst eine Eingabe tätigen, bevor Sie diese korrigieren können');
	}
	
	else if (curr_Id.substring(0,5) == "korre"){
		$('#isDoubleCorrection').val(1);
		window.alert('Bitte korrigieren Sie immer nur eine Kategorie.');
		// curr_Id.href = "#" + + curr_Id.substring(10, idLength);
	}
	// else {
	curr_Id ="#"+ curr_Id + "_Counter";
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


<!-- $(document).on('swipeleft', '.ui-page', function(event){     -->
    <!-- if(event.handled !== true) // This will prevent event triggering more then once -->
    <!-- {     -->
        <!-- var nextpage = $.mobile.activePage.next('[data-role="page"]'); -->
        <!-- // swipe using id of next page if exists -->
        <!-- if (nextpage.length > 0) { -->
            <!-- $.mobile.changePage(nextpage, {transition: "slide", reverse: false}, true, true); -->
        <!-- } -->
        <!-- event.handled = true; -->
    <!-- } -->
    <!-- return false;          -->
<!-- }); -->

<!-- $(document).on('swiperight', '.ui-page', function(event){      -->
    <!-- if(event.handled !== true) // This will prevent event triggering more then once -->
    <!-- {       -->
        <!-- var prevpage = $(this).prev('[data-role="page"]'); -->
        <!-- if (prevpage.length > 0) { -->
            <!-- $.mobile.changePage(prevpage, {transition: "slide", reverse: true}, true, true); -->
        <!-- } -->
        <!-- event.handled = true; -->
    <!-- } -->
    <!-- return false;             -->
<!-- }); -->

$(document).on('pagecreate', function() {
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!

var yyyy = today.getFullYear();
if(dd<10){
    dd='0'+dd;
} 
if(mm<10){
    mm='0'+mm;
} 
var today = dd+'/'+mm+'/'+yyyy;

$('#datum').val(today);

var reprint_Halb_In_Box_Counter = $('#halb_In_Box_Anzeige').val();
$('#reprint_Halb_In_Box').val(reprint_Halb_In_Box_Counter);

var reprint_Korrekt_Liegende_Counter = $('#korrekt_Liegende_Anzeige').val();
$('#reprint_Korrekt_Liegende').val(reprint_Korrekt_Liegende_Counter);

var print_Anzahl_Tiere = $('#save_Number').val();
$('#anzahl_Gepruefter_Tiere').val(print_Anzahl_Tiere);


// eutergesundheit auswertung

var eutergesunde_Kuehe = $('#anteil_Eutergesunde_Kuehe').val(); 
$('#anteil_Eutergesunde_Kuehe_Copy').val(eutergesunde_Kuehe); 
$('#anteil_Eutergesunde_Kuehe_Bewertung').each(function() {
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
$('#neuerkrankungsrate_Bewertung').each(function() {
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
$('#schlechte_Heilungsaussichten_Bewertung').each(function(){
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

<!-- bewegungsapperat auswertung  -->

var anzahl_Gepruefter_Tiere = $('#anzahl_Gepruefter_Tiere').val();


var LCS_High_Anzahl = $('#LCS_High_Counter').val(); 
var LCS_High_Anteil = Math.round((LCS_High_Anzahl/anzahl_Gepruefter_Tiere) * 100); 
$('#LCS_High_Percentage').val(LCS_High_Anteil);

<!-- fortbewegung auswertung  -->
var kopfhaltung_Gerade_Anzahl = $('#kopfhaltung_Hoch_Counter').val(); 
var kopfhaltung_Gerade_Anteil = Math.round((kopfhaltung_Gerade_Anzahl/anzahl_Gepruefter_Tiere) * 100); 
$('#kopfhaltung_Gerade_Percentage').val(kopfhaltung_Gerade_Anteil);


<!-- technopathien auswertung -->

var vorderbein_Kein_Befund_Anzahl = $('#karpalgelenk_Vorne_Kein_Counter').val();
var vorderbein_Kein_Befund_Anteil = Math.round((vorderbein_Kein_Befund_Anzahl/anzahl_Gepruefter_Tiere) * 100);
$('#vorderbein_Kein_Befund_Percentage').val(vorderbein_Kein_Befund_Anteil);

var vorderbein_Haarlose_Stellen_Anzahl = $('#karpalgelenk_Vorne_Haarlos_Counter').val();
var vorderbein_Haarlose_Stellen_Anteil = Math.round((vorderbein_Haarlose_Stellen_Anzahl/anzahl_Gepruefter_Tiere) * 100);
$('#vorderbein_Haarlose_Stellen_Percentage').val(vorderbein_Haarlose_Stellen_Anteil);

var vorderbein_Abschuerfung_Anzahl = $('#karpalgelenk_Vorne_Kruste_Counter').val();
var vorderbein_Abschuerfung_Anteil = Math.round((vorderbein_Abschuerfung_Anzahl/anzahl_Gepruefter_Tiere) * 100);
$('#vorderbein_Abschuerfung_Percentage').val(vorderbein_Abschuerfung_Anteil);

var vorderbein_Umfangsvermehrung_Anzahl = $('#karpalgelenk_Vorne_Dick_Counter').val();
var vorderbein_Umfangsvermehrung_Anteil = Math.round((vorderbein_Umfangsvermehrung_Anzahl/anzahl_Gepruefter_Tiere) * 100);
$('#vorderbein_Umfangsvermehrung_Percentage').val(vorderbein_Umfangsvermehrung_Anteil);

var vorderbein_Behandelte_Wunden_Anzahl = $('#karpalgelenk_Behandelte_Wunde_Counter').val();
var vorderbein_Behandelte_Wunden_Anteil = Math.round((vorderbein_Behandelte_Wunden_Anzahl/anzahl_Gepruefter_Tiere) * 100);
$('#vorderbein_Behandelte_Wunden_Percentage').val(vorderbein_Behandelte_Wunden_Anteil);

var vorderbein_Abweichungen = Math.round(vorderbein_Haarlose_Stellen_Anteil*1 + vorderbein_Abschuerfung_Anteil*1 + vorderbein_Umfangsvermehrung_Anteil*1 + vorderbein_Behandelte_Wunden_Anteil*1);
$('#vorderbein_Abweichungen_Percentage').val(vorderbein_Abweichungen);
 
var nacken_Kein_Befund_Anzahl = $('#nacken_Kein_Counter').val();
var nacken_Kein_Befund_Anteil = Math.round((nacken_Kein_Befund_Anzahl/anzahl_Gepruefter_Tiere) * 100);
$('#nacken_Kein_Befund_Percentage').val(nacken_Kein_Befund_Anteil);

var nacken_Haarlose_Stellen_Anzahl = $('#nacken_Haarlos_Counter').val();
var nacken_Haarlose_Stellen_Anteil = Math.round((nacken_Haarlose_Stellen_Anzahl/anzahl_Gepruefter_Tiere) * 100);
$('#nacken_Haarlose_Stellen_Percentage').val(nacken_Haarlose_Stellen_Anteil);

var nacken_Abschuerfung_Anzahl = $('#nacken_Abschuerfung_Counter').val();
var nacken_Abschuerfung_Anteil = Math.round((nacken_Abschuerfung_Anzahl/anzahl_Gepruefter_Tiere) * 100);
$('#nacken_Abschuerfung_Percentage').val(nacken_Abschuerfung_Anteil);

var nacken_Umfangsvermehrung_Anzahl = $('#nacken_Umfangsvermehrung_Counter').val();
var nacken_Umfangsvermehrung_Anteil = Math.round((nacken_Umfangsvermehrung_Anzahl/anzahl_Gepruefter_Tiere) * 100);
$('#nacken_Umfangsvermehrung_Percentage').val(nacken_Umfangsvermehrung_Anteil);

var nacken_Behandelte_Wunden_Anzahl = $('#nacken_Behandelte_Wunde_Counter').val();
var nacken_Behandelte_Wunden_Anteil = Math.round((nacken_Behandelte_Wunden_Anzahl/anzahl_Gepruefter_Tiere) * 100);
$('#nacken_Behandelte_Wunden_Percentage').val(nacken_Behandelte_Wunden_Anteil);

var nacken_Abweichungen = Math.round(nacken_Haarlose_Stellen_Anteil*1 + nacken_Abschuerfung_Anteil*1 + nacken_Umfangsvermehrung_Anteil*1 + nacken_Behandelte_Wunden_Anteil*1);
$('#nacken_Abweichungen_Percentage').val(nacken_Abweichungen); 

var ruecken_Kein_Befund_Anzahl = $('#ruecken_Kein_Counter').val();
var ruecken_Kein_Befund_Anteil = Math.round((ruecken_Kein_Befund_Anzahl/anzahl_Gepruefter_Tiere) * 100);
$('#ruecken_Kein_Befund_Percentage').val(ruecken_Kein_Befund_Anteil);

var ruecken_Haarlose_Stellen_Anzahl = $('#ruecken_Haarlos_Counter').val();
var ruecken_Haarlose_Stellen_Anteil = Math.round((ruecken_Haarlose_Stellen_Anzahl/anzahl_Gepruefter_Tiere) * 100);
$('#ruecken_Haarlose_Stellen_Percentage').val(ruecken_Haarlose_Stellen_Anteil);

var ruecken_Abschuerfung_Anzahl = $('#ruecken_Abschuerfung_Counter').val();
var ruecken_Abschuerfung_Anteil = Math.round((ruecken_Abschuerfung_Anzahl/anzahl_Gepruefter_Tiere) * 100);
$('#ruecken_Abschuerfung_Percentage').val(ruecken_Abschuerfung_Anteil);

var ruecken_Umfangsvermehrung_Anzahl = $('#ruecken_Umfangsvermehrung_Counter').val();
var ruecken_Umfangsvermehrung_Anteil = Math.round((ruecken_Umfangsvermehrung_Anzahl/anzahl_Gepruefter_Tiere) * 100);
$('#ruecken_Umfangsvermehrung_Percentage').val(ruecken_Umfangsvermehrung_Anteil);

var ruecken_Behandelte_Wunden_Anzahl = $('#ruecken_Behandelte_Wunde_Counter').val();
var ruecken_Behandelte_Wunden_Anteil = Math.round((ruecken_Behandelte_Wunden_Anzahl/anzahl_Gepruefter_Tiere) * 100);
$('#ruecken_Behandelte_Wunden_Percentage').val(ruecken_Behandelte_Wunden_Anteil);

var ruecken_Abweichungen = Math.round(ruecken_Haarlose_Stellen_Anteil*1 + ruecken_Abschuerfung_Anteil*1 + ruecken_Umfangsvermehrung_Anteil*1 + ruecken_Behandelte_Wunden_Anteil*1);
$('#ruecken_Abweichungen_Percentage').val(ruecken_Abweichungen); 

var hinterbein_Kein_Befund_Anzahl = $('#hinterbein_Kein_Counter').val();
var hinterbein_Kein_Befund_Anteil = Math.round((hinterbein_Kein_Befund_Anzahl/anzahl_Gepruefter_Tiere) * 100);
$('#hinterbein_Kein_Befund_Percentage').val(hinterbein_Kein_Befund_Anteil);

var hinterbein_Haarlose_Stellen_Anzahl = $('#hinterbein_Haarlos_Counter').val();
var hinterbein_Haarlose_Stellen_Anteil = Math.round((hinterbein_Haarlose_Stellen_Anzahl/anzahl_Gepruefter_Tiere) * 100);
$('#hinterbein_Haarlose_Stellen_Percentage').val(hinterbein_Haarlose_Stellen_Anteil);

var hinterbein_Abschuerfung_Anzahl = $('#hinterbein_Abschuerfung_Counter').val();
var hinterbein_Abschuerfung_Anteil = Math.round((hinterbein_Abschuerfung_Anzahl/anzahl_Gepruefter_Tiere) * 100);
$('#hinterbein_Abschuerfung_Percentage').val(hinterbein_Abschuerfung_Anteil);

var hinterbein_Umfangsvermehrung_Anzahl = $('#hinterbein_Umfangsvermehrung_Counter').val();
var hinterbein_Umfangsvermehrung_Anteil = Math.round((hinterbein_Umfangsvermehrung_Anzahl/anzahl_Gepruefter_Tiere) * 100);
$('#hinterbein_Umfangsvermehrung_Percentage').val(hinterbein_Umfangsvermehrung_Anteil);

var hinterbein_Behandelte_Wunden_Anzahl = $('#hinterbein_Behandelte_Wunde_Counter').val();
var hinterbein_Behandelte_Wunden_Anteil = Math.round((hinterbein_Behandelte_Wunden_Anzahl/anzahl_Gepruefter_Tiere) * 100);
$('#hinterbein_Behandelte_Wunden_Percentage').val(hinterbein_Behandelte_Wunden_Anteil);

var hinterbein_Abweichungen = Math.round(hinterbein_Haarlose_Stellen_Anteil*1 + hinterbein_Abschuerfung_Anteil*1 + hinterbein_Umfangsvermehrung_Anteil*1 + hinterbein_Behandelte_Wunden_Anteil*1);
$('#hinterbein_Abweichungen_Percentage').val(hinterbein_Abweichungen); 

<!-- sauberkeit auswertung & ampel -->

$('#hinterhand_Verschmutzung').each(function(){
if ($('#hinterhand_Stark_Verschmutzt_Counter').val() / anzahl_Gepruefter_Tiere > 0.3){
$('#hinterhand_Verschmutzung').css('background-color', '#FF0000');
}
else if (($('#hinterhand_Leicht_Verschmutzt_Counter').val() + $('#hinterhand_Stark_Verschmutzt_Counter').val())/ anzahl_Gepruefter_Tiere >= 0.1) {
$('#hinterhand_Verschmutzung').css('background-color', '#FFA500');
}
else 
$('#hinterhand_Verschmutzung').css('background-color', '#008000');

});

$('#beine_Verschmutzung').each(function(){
if ($('#beine_Stark_Verschmutzt_Counter').val() / anzahl_Gepruefter_Tiere > 0.3){
$('#beine_Verschmutzung').css('background-color', '#FF0000');
}
else if (($('#beine_Leicht_Verschmutzt_Counter').val() + $('#beine_Stark_Verschmutzt_Counter').val())/ anzahl_Gepruefter_Tiere >= 0.2) {
$('#beine_Verschmutzung').css('background-color', '#FFA500');
}
else 
$('#beine_Verschmutzung').css('background-color', '#008000');

});

$('#euter_Verschmutzung').each(function(){
if ($('#euter_Stark_Verschmutzt_Counter').val() / anzahl_Gepruefter_Tiere > 0.3){
$('#euter_Verschmutzung').css('background-color', '#FF0000');
}
else if (($('#euter_Leicht_Verschmutzt_Counter').val() + $('#euter_Stark_Verschmutzt_Counter').val())/ anzahl_Gepruefter_Tiere >= 0.1) {
$('#euter_Verschmutzung').css('background-color', '#FFA500');
}
else 
$('#euter_Verschmutzung').css('background-color', '#008000');

});

$('#bauch_Verschmutzung').each(function(){
if ($('#bauch_Stark_Verschmutzt_Counter').val() / anzahl_Gepruefter_Tiere > 0.3){
$('#bauch_Verschmutzung').css('background-color', '#FF0000');
}
else if (($('#bauch_Leicht_Verschmutzt_Counter').val() + $('#bauch_Stark_Verschmutzt_Counter').val())/ anzahl_Gepruefter_Tiere >= 0.1) {
$('#bauch_Verschmutzung').css('background-color', '#FFA500');
}
else 
$('#bauch_Verschmutzung').css('background-color', '#008000');

});

<!-- koerperkondition auswertung und ampel  -->

$('#BCS_Low_Percentage').each(function(){
var BCS_Low_Anzahl = $('#BCS_Zu_Mager_Counter').val(); 
var BCS_Low_Anteil = Math.round((BCS_Low_Anzahl / anzahl_Gepruefter_Tiere) * 100); 
$('#BCS_Low_Percentage').val(BCS_Low_Anteil);
});

$('#BCS_High_Percentage').each(function(){
var BCS_High_Anzahl = $('#BCS_Zu_Dick_Counter').val(); 
var BCS_High_Anteil = Math.round((BCS_High_Anzahl / anzahl_Gepruefter_Tiere) * 100); 
$('#BCS_High_Percentage').val(BCS_High_Anteil);
});

$('#BCS_Good_Percentage').each(function(){
var BCS_Good_Anzahl = $('#BCS_Gut_Counter').val(); 
var BCS_Good_Anteil = Math.round((BCS_Good_Anzahl / anzahl_Gepruefter_Tiere) * 100); 
$('#BCS_Good_Percentage').val(BCS_Good_Anteil);
});

$('#BCS_Deviation_Percentage').each(function(){
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


<!-- technopathien Ampel -->


$('#vorderbein_Abweichungen_Percentage').each(function(){
if ($('#vorderbein_Abweichungen_Percentage').val()*1 < 5) {
$('#vorderbein_Abweichungen_Percentage').css('background-color', '#008000');
}
else if ($('#vorderbein_Abweichungen_Percentage').val() < 15) {
$('#vorderbein_Abweichungen_Percentage').css('background-color', '#FFA500');
}
else {
$('#vorderbein_Abweichungen_Percentage').css('background-color', '#FF0000');
}
});

$('#nacken_Abweichungen_Percentage').each(function(){
if ($('#nacken_Abweichungen_Percentage').val() < 5) {
$(this).css('background-color','#008000');
}
else if ($('#nacken_Abweichungen_Percentage').val() < 15) {
$(this).css('background-color', '#FFA500');
}
else {
$(this).css('background-color', '#FF0000');
}
});

$('#ruecken_Abweichungen_Percentage').each(function(){
if ($('#ruecken_Abweichungen_Percentage').val() < 5) {
$(this).css('background-color','#008000');
}
else if ($('#ruecken_Abweichungen_Percentage').val() < 15) {
$(this).css('background-color', '#FFA500');
}
else {
$(this).css('background-color', '#FF0000');
}
});

$('#hinterbein_Abweichungen_Percentage').each(function(){
if ($('#hinterbein_Abweichungen_Percentage').val() < 5) {
$(this).css('background-color','#008000');
}
else if ($('#hinterbein_Abweichungen_Percentage').val() < 15) {
$(this).css('background-color', '#FFA500');
}
else {
$(this).css('background-color', '#FF0000');
}
});

<!-- bewegungsapperat ampel -->
$('#LCS_High_Percentage').each(function(){
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

<!-- fortbewegung ampel  -->
$('#kopfhaltung_Gerade_Percentage').each(function(){
if ($('#kopfhaltung_Gerade_Percentage').val() > 85 ){
$(this).css('background-color', '#008000');
}
else if ($('#kopfhaltung_Gerade_Percentage').val() >= 50) {
$(this).css('background-color', '#FFA500');
}
else {
$(this).css('background-color', '#FF0000');
}
});

<!-- Liegeverhalten score und ampel  -->
$('#CCQ').each(function(){
var korrekt_Liegende = $('#korrekt_Liegende_Anzeige').val(); 
var halb_In_Box = $('#halb_In_Box_Anzeige').val(); 
var hundesitz = $('#hundesitz_Anzeige').val(); 
var stehen = $('#stehen_Anzeige').val();
var partially_Inside = korrekt_Liegende*1 + halb_In_Box*1 + hundesitz*1 + stehen*1;
var CCQ_Value = Math.round((korrekt_Liegende / partially_Inside) * 100);
$('#CCQ').val(CCQ_Value); 

if (CCQ_Value > 85){
$(this).css('background-color', '#008000');
// $(this).setAttribute('media', 'all');
}
else if (CCQ_Value >= 50 ){
$(this).css('background-color', '#FFA500');
// $(this).setAttribute('media', 'all');
}
else 
$(this).css('background-color', '#FF0000');
// $(this).setAttribute('media', 'all');
}
)
;

$('#partially_Outside').each(function(){
var halb_In_Box = $('#halb_In_Box_Anzeige').val(); 
var outside = $('#spalten_Lieger_Anzeige').val(); 
var korrekt_Liegende = $('#korrekt_Liegende_Anzeige').val(); 
var hundesitz = $('#hundesitz_Anzeige').val(); 
var stehen = $('#stehen_Anzeige').val();
var all_Laying = halb_In_Box*1 + outside*1 + korrekt_Liegende*1 + hundesitz*1 + stehen*1; 
var outside_Percentage = Math.round(((outside*1 + halb_In_Box*1) / all_Laying) * 100);
$('#partially_Outside').val(outside_Percentage); 
if (outside_Percentage < 3){
$(this).css('background-color', '#008000');
}
else if (outside_Percentage < 6){
$(this).css('background-color', '#FFA500');
}
else 
$(this).css('background-color', '#FF0000');
}
);

$('#naturally_Laying').each(function(){
var korrekt_Liegende = $('#korrekt_Liegende_Anzeige').val();
var ausgestrecktes_Vorderbein = $('#ausgestrecktes_Vorderbein_Anzeige').val(); 

var naturally_Laying_Percentage = Math.round((ausgestrecktes_Vorderbein/korrekt_Liegende) * 100); 
$('#naturally_Laying').val(naturally_Laying_Percentage);
if (naturally_Laying_Percentage > 10){
$(this).css('background-color', '#008000');
}
else if (naturally_Laying_Percentage > 4){
$(this).css('background-color', '#FFA500');
}
else 
$(this).css('background-color', '#FF0000');
});





});