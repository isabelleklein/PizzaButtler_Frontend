<?php /* Smarty version 3.1.27, created on 2016-02-18 12:04:53
         compiled from "views\user.tpl" */ ?>
<?php
/*%%SmartyHeaderCode:913856c5a5558dd088_57552334%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '39d53655a3e08b6fd93437ccfa4aa9a1fe55656d' => 
    array (
      0 => 'views\\user.tpl',
      1 => 1455793489,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '913856c5a5558dd088_57552334',
  'has_nocache_code' => false,
  'version' => '3.1.27',
  'unifunc' => 'content_56c5a5559261b1_57945506',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_56c5a5559261b1_57945506')) {
function content_56c5a5559261b1_57945506 ($_smarty_tpl) {

$_smarty_tpl->properties['nocache_hash'] = '913856c5a5558dd088_57552334';
?>
<html>
    <head>

        <title>Benutzer</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <link href="./css/main.css" rel="stylesheet" /> 
		<?php echo '<script'; ?>
 type="text/javascript" src="./javascript/user.js"><?php echo '</script'; ?>
>
		
    </head>
    
    <body>
		<div class="content">
			<form id='datenanzeigen' name="datenanzeigen" action="#">
				<h1> Daten Anzeigen</h1>
				<h2>Deine Daten sind:</h2>
				<div id="data">
					<div class="fline">
						<label class="in1" for="vorname">Anrede</label>
						<label type="text" class="text" name="anrede" id="userAnrede"></label>
					</div>
					<div class="fline">
						<label class="in1">Vorname:</label>
						<label type="text" class="text" name="vorname" id="userVorname"></label>
					</div>
					<div class="fline">
						<label class="in1">Nachname:</label>
						<label class="in1" name="nachname" id="userNachname"></label>
					</div>
					<div class="fline">
						<label class="in1">Geburtsdatum:</label>
						<label class="in1" name="geburtsdatum" id="userGeburtsdatum"></label>
					</div>
					<div class="fline">
						<label class="in1">Straße/Hausnummer:</label>
						<label class="in1" name="strasse" id="userStrasse"></label>
						<label class="in1" name="hausnummer" id="userHausnummer"></label>
					</div>
					<div class="fline">
						<label class="in1">PLZ/Ort:</label>
						<label class="in1" name="plz" id="userPlz"></label>
						<label class="in1" name="ort" id="userOrt"></label>
					</div>
					<div class="fline">
						<label class="in1">Email:</label>
						<label class="in1" name="email" id="userEmail"></label>
					</div>
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