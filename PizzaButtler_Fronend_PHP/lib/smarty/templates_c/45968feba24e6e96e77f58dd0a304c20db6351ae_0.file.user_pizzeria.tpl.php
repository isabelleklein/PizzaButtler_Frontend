<?php /* Smarty version 3.1.27, created on 2016-03-02 14:01:27
         compiled from "views\user_pizzeria.tpl" */ ?>
<?php
/*%%SmartyHeaderCode:73056d6e427d84a62_73266036%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '45968feba24e6e96e77f58dd0a304c20db6351ae' => 
    array (
      0 => 'views\\user_pizzeria.tpl',
      1 => 1456920646,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '73056d6e427d84a62_73266036',
  'has_nocache_code' => false,
  'version' => '3.1.27',
  'unifunc' => 'content_56d6e427dcda16_26413943',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_56d6e427dcda16_26413943')) {
function content_56d6e427dcda16_26413943 ($_smarty_tpl) {

$_smarty_tpl->properties['nocache_hash'] = '73056d6e427d84a62_73266036';
?>
<html>
    <head>

        <title>Benutzer</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <link href="./css/main.css" rel="stylesheet" /> 
		<?php echo '<script'; ?>
 type="text/javascript" src="./javascript/user_pizzeria.js"><?php echo '</script'; ?>
>
		
    </head>
    
    <body>
		<div class="content" id=datenContainer>
			<form id='datenanzeigen' name="datenanzeigen" action="#">
				<h1> Daten Anzeigen</h1>
				<h2>Deine Daten sind:</h2>
				<div id="data">
					<div class="fline">
						<label class="in1">Name:</label>
						<label type="text" class="text" name="name" id="name"></label>
					</div>
					<div class="fline">
						<label class="in1">Beschreibung:</label>
						<label type="text" class="text" name="beschreibung" id="beschreibung"></label>
					</div>
					<div class="fline">
						<label class="in1">Oeffnungszeiten:</label>
						<label class="in1" class="text" name="oeffnungszeiten" id="oeffnungszeiten"></label>
					</div>
					<div class="fline">
						<label class="in1">Mindesbestellwert:</label>
						<label class="in1" class="text" name="mindestbestellwert" id="mindestbestellwert"></label>
					</div>
					<div class="fline">
						<label class="in1">Straße/Hausnummer:</label>
						<label class="in1" class="text" name="strasse" id="strasse"></label>
						<label class="in1" class="text" name="hausnummer" id="hausnummer"></label>
					</div>
					<div class="fline">
						<label class="in1">PLZ/Ort:</label>
						<label class="in1" class="text" name="plz" id="plz"></label>
						<label class="in1" class="text" name="ort" id="ort"></label>
					</div>
					<div class="fline">
						<label class="in1">Lieferkosten:</label>
						<label class="in1" class="text" name="lieferkosten" id="lieferkosten"></label>
					</div>
					<div>
						<label class = "in1">E-Mail:</label>
						<label class = "in1" class="text" name="email" id = "email"></label>
					<p>
						<input id="datenaendern" name="datenaendern" type="button" value="Daten &auml;ndern" />
					</p>
				</div>
			</form>
		</div>
    </body>
</html>
	<?php }
}
?>