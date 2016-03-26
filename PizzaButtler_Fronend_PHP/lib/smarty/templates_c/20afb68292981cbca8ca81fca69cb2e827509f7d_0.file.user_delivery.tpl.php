<?php /* Smarty version 3.1.27, created on 2016-03-24 09:59:28
         compiled from "views\user_delivery.tpl" */ ?>
<?php
/*%%SmartyHeaderCode:1445256f3ac70e75735_92959021%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '20afb68292981cbca8ca81fca69cb2e827509f7d' => 
    array (
      0 => 'views\\user_delivery.tpl',
      1 => 1458645661,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '1445256f3ac70e75735_92959021',
  'has_nocache_code' => false,
  'version' => '3.1.27',
  'unifunc' => 'content_56f3ac70ef7425_72577844',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_56f3ac70ef7425_72577844')) {
function content_56f3ac70ef7425_72577844 ($_smarty_tpl) {

$_smarty_tpl->properties['nocache_hash'] = '1445256f3ac70e75735_92959021';
?>
<html>
    <head>
		<?php echo '<script'; ?>
 type="text/javascript" src="./javascript/user.js"><?php echo '</script'; ?>
>
		<?php echo '<script'; ?>
 type="text/javascript" src="./javascript/delivery.js"><?php echo '</script'; ?>
>
		<?php echo '<script'; ?>
 type="text/javascript" src="./javascript/login_absenden.js"><?php echo '</script'; ?>
>
    </head>
    
    <body>
		<div class="maincontent">
			<form id='datenanzeigen' name="datenanzeigen" action="#">
				<h3 class="contenthead"> Wähle eine Lieferart </h3>
                <div>
                    <input class="zahlungsart" type="radio" id="abholung" name="lieferart" value="abholung"><label for="abholung"> Abholung</label><br />
                    <input class="zahlungsart" type="radio" id="lieferung" name="lieferart" value="lieferung" checked><label 
                        for="lieferung"> Lieferung</label>
                </div>
				
                <div id="delivery_data">
                    <h3 class="contenthead"> Deine Lieferadresse </h3>
                    <div class="fline">
                        <input type="text" name="vorname" id="userVorname" required title="Zwischen 3 und 25 Zeichen (Umlaute möglich)" 
                               onchange="vornamePruefen_delivery()" placeholder="Vorname"/>
                        <input type="text" type="text" name="nachname" id="userNachname" required title="3 bis 25 Zeichen (Umlaute möglich)" 
                               onchange="nachnamePruefen_delivery()" placeholder="Nachname"/>
                        <label class="placeholder_fehler" id="fehleruserVorname"><br />Bitte geben Sie einen g&uumlltigen Vornamen an</label>
                        <label class="placeholder_fehler" id="fehleruserName"><br />Bitte geben Sie einen g&uumlltigen Nachnamen an</label>
                    </div>

                    <div class="fline">
                        <input type="text" name="strasse" id="userStrasse" required title="Nur Buchstaben inklusive Umlaute und maximal 2 Leerzeichen" 
                               onchange="strassePruefen_delivery()" placeholder="Strasse"/>
                        <input type="text" name="hausnummer" id="userHausnummer" required title="4 stellige Hausnummer mit maximal einem Zusatzbuchstaben a-z 
                                ohne Umlaute " onchange="hausnummerPruefen_delivery()"/ placeholder="Nr.">
                        <label class="placeholder_fehler" id="fehleruserStrasse"><br />Bitte geben Sie eine g&uumlltige Strasse an</label>
                        <label class="placeholder_fehler" id="fehleruserHnr"><br />Bitte geben Sie eine g&uumlltige Hausnummer an</label>
                    </div>
                    <div class="fline">
                        <input type="text" name="plz" id="userPlz" pattern="[0-9]<?php echo 5;?>
" required title="5 Zahlen" onchange="plzPruefen_delivery()" 
                               placeholder="PLZ"/>
                        <input type="text" name="ort" id="userOrt" required title="Nur Buchstaben inklusive Umlaute und maximal 2 Leerzeichen" 
                               onchange="wohnortPruefen_delivery()" placeholder="Ort"/>
                        <label class="placeholder_fehler" id="fehleruserPlz"><br />Bitte geben Sie eine g&uumlltige Postleitzahl an</label>
                        <label class="placeholder_fehler" id="fehleruserOrt"><br />Bitte geben Sie einen g&uumlltigen Ort an</label>
                    </div>
                    <div class="fline">
                        <input type="text" name="telefon" id="userTelefon" required onchange="telefonPruefen_delivery()" placeholder="Telefon"/>
                        <input type="text" name="email" id="userEmail" required onchange="mailPruefen_delivery()" placeholder="Email"/>
                        <label class="placeholder_fehler" id="fehleruserEmail"><br />Bitte geben Sie eine g&uumlltige Email-Adresse an</label>
                        <label class="placeholder_fehler" id="fehleruserTel"><br />Bitte geben Sie eine g&uumlltige Telefonnummer an</label>
                    </div>
                </div>
                <div>
                    <p>
						<input class="userbutton" id="delivery_back" name="delivery_back" type="button" value="zur&uuml;ck" />
                        <input class="userbutton" id="delivery_next" name="delivery_next" type="button" value="weiter" />
					</p>
                </div>
                <div id="eingeloggt">
                    <h3 class="contenthead"> oder weiter als registrierter User </h3>
                    <p>
				        <input class="userbutton" id="delivery_userlogin" name="delivery_userlogin" type="button" value="einloggen" />
				    </p>
                </div>
				
			</form>
		</div>
        <div class = "infocontent">
    		<p id="infoContainerText"> Der Butler Bringts!</p>
    		<img id="logo_uebersicht" src="./images/butler.png" alt="Logo Pizzabutler">
    	</div>
    </body>
</html>
	<?php }
}
?>