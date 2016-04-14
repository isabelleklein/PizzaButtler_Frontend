<?php /* Smarty version 3.1.27, created on 2016-04-14 18:41:04
         compiled from "views\statistik.tpl" */ ?>
<?php
/*%%SmartyHeaderCode:30907570fc82063a281_20782342%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'b9413936e2900fdca34c81f46fbb387e6fe13c30' => 
    array (
      0 => 'views\\statistik.tpl',
      1 => 1460640546,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '30907570fc82063a281_20782342',
  'has_nocache_code' => false,
  'version' => '3.1.27',
  'unifunc' => 'content_570fc82067d463_47403399',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_570fc82067d463_47403399')) {
function content_570fc82067d463_47403399 ($_smarty_tpl) {

$_smarty_tpl->properties['nocache_hash'] = '30907570fc82063a281_20782342';
?>
<html>
    <head>
		<?php echo '<script'; ?>
 type="text/javascript" src="./javascript/statistik.js"><?php echo '</script'; ?>
>
    </head>
    
    <body>
    	<div class="maincontent">
    		<h2 class='contenthead'>meine Statistik</h2>
    		<div>
    			<h3>Anzahl Kunden</h3>
    			<p id='anzahlKunden'></p>
    		</div>
    		<div>
    			<h3>monatliche Bestellungen insgesamt:</h3>
    			<p id='anzahlBestellungen'></p>
    		</div>
    		<div> 
    			<h3>monatlicher Brutto Umsatz</h3>
    			<p id='monUmsBrt'><p>
    		</div>
    		<div>
    			<h3>monatlicher Netto Umsatz</h3>
    			<p id='monUmsNet'></p>
    		</div>
    		<div>
    			<h3>durchschnittlicher Bestellwert pro Bestellung</h3>
    			<p id='schnittBestWert'></p>
    		</div>
    		<div>
    			<h3>abgef&uumlhrte Vermittlungsgeb&uumlhren</h3>
    			<p id='gebuehren'></p>
    		</div>
    	</div>
    </body>
</html>
	<?php }
}
?>