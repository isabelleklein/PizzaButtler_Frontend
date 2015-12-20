<?php /* Smarty version 3.1.27, created on 2015-12-20 18:30:30
         compiled from "views\datenanzeigen.tpl" */ ?>
<?php
/*%%SmartyHeaderCode:12705676e5b6982b96_76138025%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'acb4e2a3a335ad70ce8c742c769a808c4653104e' => 
    array (
      0 => 'views\\datenanzeigen.tpl',
      1 => 1450550296,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '12705676e5b6982b96_76138025',
  'has_nocache_code' => false,
  'version' => '3.1.27',
  'unifunc' => 'content_5676e5b69c5221_35679659',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_5676e5b69c5221_35679659')) {
function content_5676e5b69c5221_35679659 ($_smarty_tpl) {

$_smarty_tpl->properties['nocache_hash'] = '12705676e5b6982b96_76138025';
?>
		<?php echo '<script'; ?>
 type="text/javascript" src="../javascript/datenanzeigen.js"><?php echo '</script'; ?>
>
		<?php echo '<script'; ?>
 type="text/javascript" src="../javascript/datenaendern.js"><?php echo '</script'; ?>
>
		<?php echo '<script'; ?>
 type="text/javascript" src="../javascript/datenanzeigen.js"><?php echo '</script'; ?>
>
		<?php echo '<script'; ?>
 type="text/javascript" src="../javascript/profilAnzeigeBefuellen.js"><?php echo '</script'; ?>
>
	
		<form id='datenanzeigen' name="datenanzeigen" action="#">
			<h1> Daten Anzeigen</h1>
			
			<h2>Deine Daten sind:</h2>
			<div id="meineDaten">
				<div class="fline">
					<label class="in1" for="vorname">Anrede</label>
					<label type="text" class="text" name="anrede" id="anrede"></label>
				</div>
				<div class="fline">
					<label class="in1">Vorname:</label>
					<label type="text" class="text" name="vorname" id="vorname"></label>
				</div>
				<div class="fline">
					<label class="in1">Nachname:</label>
					<label class="in1" name="nachname" id="nachname"></label>
				</div>
				<div class="fline">
					<label class="in1">Geburtsdatum:</label>
					<label class="in1" name="geburtsdatum" id="geburtsdatum"></label>
				</div>
				<div class="fline">
					<label class="in1">Straße/Hausnummer:</label>
					<label class="in1" name="strasse" id="strasse"></label>
					<label class="in1" name="hausnummer" id="hausnummer"></label>
				</div>
				<div class="fline">
					<label class="in1">PLZ/Ort:</label>
					<label class="in1" name="plz" id="plz"></label>
					<label class="in1" name="ort" id="ort"></label>
				</div>
				<div class="fline">
					<label class="in1">Email:</label>
					<label class="in1" name="email" id="email"></label>
				</div>
				
			 <p>
                <a href="./html/datenaendern.html"><input id="datenaendern" name="datenaendern" type="button" value="Daten &auml;ndern" /></a>
            </p>
			
			</div>
			
			
		</form><?php }
}
?>