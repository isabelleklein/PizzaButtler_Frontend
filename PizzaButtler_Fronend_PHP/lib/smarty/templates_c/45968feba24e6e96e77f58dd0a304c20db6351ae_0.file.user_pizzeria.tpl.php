<?php /* Smarty version 3.1.27, created on 2016-03-03 19:51:59
         compiled from "views\user_pizzeria.tpl" */ ?>
<?php
/*%%SmartyHeaderCode:354256d887cf06eba2_60425173%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '45968feba24e6e96e77f58dd0a304c20db6351ae' => 
    array (
      0 => 'views\\user_pizzeria.tpl',
      1 => 1457011790,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '354256d887cf06eba2_60425173',
  'has_nocache_code' => false,
  'version' => '3.1.27',
  'unifunc' => 'content_56d887cf20f162_54853963',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_56d887cf20f162_54853963')) {
function content_56d887cf20f162_54853963 ($_smarty_tpl) {

$_smarty_tpl->properties['nocache_hash'] = '354256d887cf06eba2_60425173';
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
						<label type="text" class="text" name="name" id="name_data_anz"></label>
					</div>
					<div class="fline">
						<label class="in1">Oeffnungszeiten:</label>
						<label type="text" class="in1" class="text" name="oeffnungszeiten" id="oeffnungszeiten_data_anz"></label>
					</div>
					<div class="fline">
						<label class="in1">Mindesbestellwert:</label>
						<label type="text" class="in1" class="text" name="mindestbestellwert" id="mindestbestellwert_data_anz"></label>
					</div>
					<div class="fline">
						<label class="in1">Straße/Hausnummer:</label>
						<label type="text" class="in1" class="text" name="strasse" id="strasse_data_anz"></label>
						<label type="text" class="in1" class="text" name="hausnummer" id="hausnummer_data_anz"></label>
					</div>
					<div class="fline">
						<label class="in1">PLZ/Ort:</label>
						<label type="text" class="in1" class="text" name="plz" id="plz_data_anz"></label>
						<label type="text" class="in1" class="text" name="ort" id="ort_data_anz"></label>
					</div>
					<div class="fline">
						<label class="in1">Lieferkosten:</label>
						<label type="text" class="in1" class="text" name="lieferkosten" id="lieferkosten_data_anz"></label>
					</div>
					<div class="fline">
						<label class = "in1">E-Mail:</label>
						<label type="text" class="in1" class="text" name="email" id = "email_data_anz"></label>
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