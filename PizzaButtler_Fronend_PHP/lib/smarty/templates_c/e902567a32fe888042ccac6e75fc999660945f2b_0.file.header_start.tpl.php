<?php /* Smarty version 3.1.27, created on 2015-10-12 11:39:45
         compiled from "layouts\header_start.tpl" */ ?>
<?php
/*%%SmartyHeaderCode:14654561b7fe192e3d1_52870664%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'e902567a32fe888042ccac6e75fc999660945f2b' => 
    array (
      0 => 'layouts\\header_start.tpl',
      1 => 1444642662,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '14654561b7fe192e3d1_52870664',
  'variables' => 
  array (
    'title' => 0,
  ),
  'has_nocache_code' => false,
  'version' => '3.1.27',
  'unifunc' => 'content_561b7fe19748e2_71063018',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_561b7fe19748e2_71063018')) {
function content_561b7fe19748e2_71063018 ($_smarty_tpl) {

$_smarty_tpl->properties['nocache_hash'] = '14654561b7fe192e3d1_52870664';
?>
<html>
    <link href='http://fonts.googleapis.com/css?family=Open+Sans+Condensed:300|Open+Sans' rel='stylesheet' type='text/css'>
    <head>
         <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
         <?php echo '<script'; ?>
 type="text/javascript" src="./javascript/kundenregistrierung.js"><?php echo '</script'; ?>
>
 		 <?php echo '<script'; ?>
 type="text/javascript" src="./javascript/jquery.js"><?php echo '</script'; ?>
>
 		 <?php echo '<script'; ?>
 type="text/javascript" src="./javascript/jquery-ui.js"><?php echo '</script'; ?>
>
 	 	 <?php echo '<script'; ?>
 type="text/javascript" src="./javascript/polyfill.js"><?php echo '</script'; ?>
>
 		 <?php echo '<script'; ?>
 type="text/javascript" src="./javascript/absendentest.js"><?php echo '</script'; ?>
>
 		 <?php echo '<script'; ?>
 type="text/javascript" src="./javascript/jquery.js"><?php echo '</script'; ?>
>
    <?php echo '<script'; ?>
 type="text/javascript" src="./javascript/kundenlogin.js"><?php echo '</script'; ?>
>
    <?php echo '<script'; ?>
 type="text/javascript" src="./javascript/login_absenden.js"><?php echo '</script'; ?>
>
         <link href="./css/jquery-ui.css" rel="stylesheet" />
         <link href="./css/popupRegistrierung.css" rel="stylesheet" />
         <link href="./css/popupLogin.css" rel="stylesheet"/>
        
         <title><?php echo (($tmp = @$_smarty_tpl->tpl_vars['title']->value)===null||$tmp==='' ? "Title" : $tmp);?>
 | PizzaButler</title>
    </head>
    <body class="body">
     	<header>
            <link href="./css/header.css" rel="stylesheet" />
            
            <div id="header_nav">
                <div>
                    <span class="head_left">
                        <img src="./images/pizzabutler_logo_weiß.png" alt="PizzaButler Logo" height="180"/>
                    </span>
                    <span class="head_right">
                        <button class="header_button">Anmelden</button><br/>
                        <button class="header_button" id="open">Registrieren</button>
                    </span>
                </div>
            </div>
            <div id="header_bottom"></div>
     	</header>
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
	                <input class="in2" type="password" name="passwort" placeholder="Passwort" id="passwort" required title="Mindestens eine Ziffer, ein Groﬂbuchstabe, ein Kleinbuchstabe und insgesamt 8 Zeichen" 
	                		onchange="passwortPruefen1()"/>
	            
	                <input class="in2" type="password" name="pw2" id="pw2" placeholder="Passwort wdh." required onchange="passwortPruefen2()"/>
	            </div>
	            <label id="fehlerPw_1">Bitte geben Sie eine sicheres Passwort ein</label>
	            <label id="fehlerPw_2">Die Passw&oumlrter stimmen nicht &uumlberein</label>
	            <div class="fline">
	            	<input class="in2" name="agb" id="agb" type="checkbox" />Ich bin mit den AGB und dem Datenschutz einverstanden
	            </div>
	            <label id="fehlerAgb">Bitte stimmen Sie unseren AGBs und Datenschutzbestimmungen zu</label>
	            <p>
	                <input id="absenden" name="absenden" type="button" value="Kundenregistrierung abschliessen"/>
	            </p>
	            <label id="fehlerAbsenden"></label>
	        </form>
	        
	        <br />
 		</div>
 		<div id="overlay"></div>
 		<div id="containerx">
  	  <div class="fline">
        	<input type="text" class="in2" name="email" id="email" placeholder="Email-Adresse" required onchange="mailPruefen()" />
            <input class="in2" type="password" name="passwort" id="passwort" placeholder="Passwort" required onchange="passwortPruefen()" />
            <input type="button" id="closex" value="X">
 	</div>
 	<div id="merken">
 	<input class="in2" name="merken" id="merken" type="checkbox"/>
 	<div id="log">
 	Logindaten merken.
 	</div>
    </div>
 	<div id="passwortvergessen">
 	   <a href="#" id="fline">Passwort vergessen</a>
 	   </div>
 	    <Input id="absenden" name="absenden" type="button" value="Login" />
 	</div>
             <?php }
}
?>