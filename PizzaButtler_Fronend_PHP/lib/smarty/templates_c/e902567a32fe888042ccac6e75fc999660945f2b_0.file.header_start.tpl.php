<?php /* Smarty version 3.1.27, created on 2016-03-02 14:01:38
         compiled from "layouts\header_start.tpl" */ ?>
<?php
/*%%SmartyHeaderCode:1740956d6e432d86337_72903731%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'e902567a32fe888042ccac6e75fc999660945f2b' => 
    array (
      0 => 'layouts\\header_start.tpl',
      1 => 1456917274,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '1740956d6e432d86337_72903731',
  'variables' => 
  array (
    'title' => 0,
  ),
  'has_nocache_code' => false,
  'version' => '3.1.27',
  'unifunc' => 'content_56d6e432dbaa60_27166089',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_56d6e432dbaa60_27166089')) {
function content_56d6e432dbaa60_27166089 ($_smarty_tpl) {

$_smarty_tpl->properties['nocache_hash'] = '1740956d6e432d86337_72903731';
?>
<html>
    <link href='http://fonts.googleapis.com/css?family=Open+Sans+Condensed:300|Open+Sans' rel='stylesheet' type='text/css'>
    <head>
        <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
        <?php echo '<script'; ?>
 type="text/javascript" src="./lib/jquery/jquery.js"><?php echo '</script'; ?>
>
		<?php echo '<script'; ?>
 type="text/javascript" src="./lib/jquery/js.cookie.js"><?php echo '</script'; ?>
>
        <?php echo '<script'; ?>
 type="text/javascript" src="./lib/jquery-ui-1.11.4/jquery-ui.js"><?php echo '</script'; ?>
>
 	 	<?php echo '<script'; ?>
 type="text/javascript" src="./lib/sugar.min.js"><?php echo '</script'; ?>
>
 	    <?php echo '<script'; ?>
 type="text/javascript" src="./lib/jquerymy-1.2.2.min.js"><?php echo '</script'; ?>
>
		<?php echo '<script'; ?>
 type="text/javascript" src="./javascript/lib/polyfill.js"><?php echo '</script'; ?>
>
		<?php echo '<script'; ?>
 type="text/javascript" src="./javascript/RestInterface.js"><?php echo '</script'; ?>
>
    
	    <?php echo '<script'; ?>
 type="text/javascript" src="./javascript/registrierung.js"><?php echo '</script'; ?>
>
        <?php echo '<script'; ?>
 type="text/javascript" src="./javascript/kundenregistrierung.js"><?php echo '</script'; ?>
>
        <?php echo '<script'; ?>
 type="text/javascript" src="./javascript/login_absenden.js"><?php echo '</script'; ?>
>
		<?php echo '<script'; ?>
 type="text/javascript" src="./javascript/header.js"><?php echo '</script'; ?>
>
        <?php echo '<script'; ?>
 type="text/javascript" src="./javascript/impressum_absenden.js"><?php echo '</script'; ?>
>
        <?php echo '<script'; ?>
 type="text/javascript" src="./javascript/passwort_vergessen.js"><?php echo '</script'; ?>
>
        <?php echo '<script'; ?>
 type="text/javascript" src="./javascript/passwort_vergessen_absenden.js"><?php echo '</script'; ?>
>
		<?php echo '<script'; ?>
 type="text/javascript" src="./javascript/logout.js"><?php echo '</script'; ?>
>
         
        <link href="./css/jquery-ui.css" rel="stylesheet" />
        <link href="./css/popupRegistrierung.css" rel="stylesheet" />
        <link href="./css/popupLogin.css" rel="stylesheet"/>
        <link href="./css/popupImpressum.css" rel="stylesheet" />
        <link href="./css/main.css" rel="stylesheet" />
        <link href="./css/popup_passwort_vergessen.css" rel="stylesheet" />
        
        <title><?php echo (($tmp = @$_smarty_tpl->tpl_vars['title']->value)===null||$tmp==='' ? "Title" : $tmp);?>
 | PizzaButler</title>
    </head>
    
    <body class="body">
     	<header>
            <link href="./css/header.css" rel="stylesheet" />
            
            <div id="header_nav">
                <div>
                    <span class="head_left">
                   		<a href="./index.php">
                        	<img src="./images/pizzabutler_logo_weiß.png" alt="PizzaButler Logo" height="180" />
                    	</a>
                    </span>
                    <section class="head_right">
                    	<span class="head_right_buttons">
                    		<form action="./pizzerienSuche.php" name="pizzerienListeButton">
									<input class="umkreissuche_header" type="text" name="plz-ort" id="plz_ort_start" placeholder="Wo wohnst du?" />
							</form>
							<span class="head_right_button_ersetzen">
                        		<button class="header_button" id="openx">Anmelden</button>
                        		<button class="header_button" id="open">Registrieren</button>
                        	<span/>
                        </span>
                    </section>
                </div>
            </div>
            <div id="header_bottom"></div>
     	</header>
        
        <!-- Registrierung -->
     	<div id="container">
	        <form id='registrieren' name="registrieren" action="#">
	            <div class="fline">
					<select class="in2" name="anrede" id="anrede" size="1" onchange="anredePruefen()" required autofocus>
					    <option value="keine" selected disabled> Anrede </option>
					    <option value="Herr"> Herr </option>
					    <option value="Frau"> Frau </option>
					</select>
					<input type="button" id="close" value="X">
					
	            </div>
	            <label id="fehlerAnrede">Das Feld 'Anrede' ist nicht ausgew&aumlhlt</label>
				
	            <div class="fline">
	                <input type="text" class="in2" name="vorname" id="vorname" placeholder="Vorname"  
	                required title="Zwischen 3 und 25 Zeichen (Umlaute m&oumlglich)" onchange="vornamePruefen()"></input>
	    
	                <input type="text" class="in2" type="text" name="nachname" id="nachname" placeholder="Nachname" 
	                 required title="3 bis 25 Zeichen (Umlaute m&oumlglich)" onchange="nachnamePruefen()"/>
	            </div>
	            <label id="fehlerName">Bitte geben Sie einen g&uumlltigen Nachnamen an</label>
	            <label id="fehlerVorname">Bitte geben Sie einen g&uumlltigen Vornamen an</label>
	            <div class="fline">
	                <input class="in2" type="text" name="strasse" id="strasse" placeholder="Strasse" 
	                 required title="Nur Buchstaben inklusive Umlaute und maximal 2 Leerzeichen" onchange="strassePruefen()"/>
	                <input type="text" name="hausnummer" id="hausnummer" placeholder="Nr."
	                 required title="4 stellige Hausnummer mit maximal einem Zusatzbuchstaben a-z ohne Umlaute " onchange="hausnummerPruefen()"/>
	            </div>
	            <label id="fehlerStrasse">Bitte geben Sie eine g&uumlltige Strasse an</label>
	            <label id="fehlerHnr">Bitte geben Sie eine g&uumlltige Hausnummer an</label>
	
	            <div class="fline">
	                <input class="in2" type="text" name="plz" id="plz" placeholder="PLZ" required title="5 Zahlen" onchange="plzPruefen()"/>
	                <input type="text" name="ort" id="ort" placeholder="Ort" 
	                 required title="Nur Buchstaben inklusive Umlaute und maximal 2 Leerzeichen" onchange="wohnortPruefen()"/>
	            </div>
	            <label id="fehlerPlz">Bitte geben Sie eine g&uumlltige Postleitzahl an</label>
	            <label id="fehlerOrt">Bitte geben Sie einen g&uumlltigen Ort an</label>
	
	            <div class="fline">
	                <input class="in2" type="text" name="email" id="email" placeholder="Email-Adresse" required onchange="mailPruefen()"/>
	            
	                <input class="in2" type="text" name="telefonnummer" id="telefonnummer" placeholder="Telefonnummer" title="Telefonnummer mindestens 5 Ziffern"
	                 required onchange="telefonnummerPruefen()"/>
	            </div>
	            <label id="fehlerEmail">Bitte geben Sie eine g&uumlltige Email-Adresse an</label>
	            <label id="fehlerTel">Bitte geben Sie eine g&uumlltige Telefonnummer an</label>
	
	            <div class="fline">
	                <input class="in2" type="password" name="passwort" placeholder="Passwort" id="passwort" required title="Mindestens 8-stelliges Passwort" 
	                		onchange="passwortPruefen1()"/>
	            
	                <input class="in2" type="password" name="pw2" id="pw2" placeholder="Passwort wdh." required onchange="passwortPruefen2()"/>
	            </div>
	            <label id="fehlerPw_1">Bitte geben Sie eine sicheres Passwort ein</label>
	            <label id="fehlerPw_2">Die Passw&oumlrter stimmen nicht &uumlberein</label>
	            <div class="fline">
	            	<input class="in2" name="agb" id="agb" type="checkbox" />Ich bin mit den <a href="./agb.php">AGB</a> und dem Datenschutz einverstanden
	            </div>
	            <label id="fehlerAgb">Bitte stimmen Sie unseren AGBs und Datenschutzbestimmungen zu</label>
	            <p>
	                <input id="absenden" name="absenden" type="button" value="Kundenregistrierung abschliessen"/>
	            </p>
	            <label id="fehlerAbsenden"></label>
            </form><br />
        </div>
        <div id="overlay"></div>
    
        <!-- Login -->
        <div id="containerx">
			<form id='login' name="login" action="#">
				<div class="fline">
					<input type="text" class="in2" name="email" id="email" placeholder="Email-Adresse" required onchange="mailPruefen()" />
					<input class="in2" type="password" name="passwort" id="passwort" placeholder="Passwort" required onchange="passwortPruefen()" />
					<input type="button" id="closex" value="X">
				</div>
				<div id="merken">
					<input class="in2" name="merken" id="merken" type="checkbox"><label>Logindaten merken</label></input>
				</div>
				<div id="passwortvergessen"><a href="#" id="open_pwvergessen" onclick="textEinblenden('box2','box1')">Passwort vergessen</a></div>
				<input id="absenden_login" name="absenden" type="button" value="Login" />
			</form>
        </div>
        <div id="overlay"></div>
        
        <!-- Impressum -->
        <div id="container_impressum"> 
            <form id='impressum' name="impressum" action="#">
                <div>
                    <h1>Impressum</h1>
                    <div class="Text3">Betreiber der Website von PizzaButtler.de:</div>
                    <div class="Text4"></br>WWI13AMB</br>info@PizzaButtler.de</br></br></div>
                    <div class="Text3">Geschäftsführer:</div>
                    <div class="Text4"></br>Alexander Zur, Christoph Flick</br></br></div>
                    <div class="Text3"> Rechtliche Hinweise: </div>
                    <div class="Text4"></br>Die yd. yourdelivery GmbH behält sich alle Rechte an den eigenen redaktionellen Texten, eigenen Bildern, eigenen Grafiken, sowie an dem gesamten Design inklusive Layout-, Schrift- und Farbgestaltung der Websites vor. Die Vervielfältigung und Verwendung dieser Informationen und/oder Daten, sowie jegliche Art von Kopie oder Reproduktion bedarf der vorherigen schriftlichen Zustimmung der yd. yourdelivery GmbH. Zuwiderhandlungen werden rechtlich verfolgt. Die rechtlichen Rahmenbedingungen unserer Webseiten entnehmen Sie bitte unseren Allgemeinen Geschäftsbedingungen.</br></br>
                    </div>  
                    <input type="button_impressum"  class="close_impressum" value="X"/> 
                </div>	
            </div>
        </form>
        <div id="overlay"></div>
        
        <!-- Passwort vergessen -->
        <div id="container_pwvergessen">     
            <div id="box1">
                <p>Passwort vergessen?</p>
                <p>Gib deine E-Mail ein, wir senden dir ein neues Passwort zu </p>
                <div class="fline">
                    <input class="in2" type="text" name="email" id="email_pwvergessen" placeholder="Email" required onchange="mailPruefen_pwvergessen()"/>
                    <input class="in2" id="absenden_pwvergessen" name="absenden" type="button" value="Absenden" onclick="textTauschen('box1','box2')"/>
                    <input type="button"  class="close_pwvergessen" value="X"/>
                </div>
            </div>
            <div id="box2">    
                <p>Bitte klicke auf den Link, der dir per E-Mail zugestellt wird!</p>
                <p>Du wirst dann automatisch weiter geleitet!</p>
                <input type="button"  class="close_pwvergessen" value="X"/>
            </div>
        </div>
<?php }
}
?>