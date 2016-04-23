<?php /* Smarty version 3.1.27, created on 2016-04-22 08:31:00
         compiled from "views\statistik.tpl" */ ?>
<?php
/*%%SmartyHeaderCode:163075719c524df4530_27637061%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'b9413936e2900fdca34c81f46fbb387e6fe13c30' => 
    array (
      0 => 'views\\statistik.tpl',
      1 => 1461306167,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '163075719c524df4530_27637061',
  'has_nocache_code' => false,
  'version' => '3.1.27',
  'unifunc' => 'content_5719c524e1b635_56654465',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_5719c524e1b635_56654465')) {
function content_5719c524e1b635_56654465 ($_smarty_tpl) {

$_smarty_tpl->properties['nocache_hash'] = '163075719c524df4530_27637061';
?>
<html>
    <head>
		<?php echo '<script'; ?>
 type="text/javascript" src="./javascript/statistik.js"><?php echo '</script'; ?>
>
    </head>
    
    <body>
    	<div class="maincontent">
    		<h2 class='contenthead'>Meine Statistik</h2>
    		<div>
    			<h3>Anzahl Kunden</h3>
    			<p id='anzahlKunden'></p>
    		</div>
    		<div>
    			<h3>Monatliche Bestellungen insgesamt:</h3>
    			<p id='anzahlBestellungen'></p>
    		</div>
    		<div> 
    			<h3>Monatlicher Bruttoumsatz</h3>
    			<p id='monUmsBrt'><p>
    		</div>
    		<div>
    			<h3>Monatlicher Nettoumsatz</h3>
    			<p id='monUmsNet'></p>
    		</div>
    		<div>
    			<h3>Durchschnittlicher Bestellwert pro Bestellung</h3>
    			<p id='schnittBestWert'></p>
    		</div>
    		<div>
    			<h3>Abgef&uumlhrte Vermittlungsgeb&uumlhren</h3>
    			<p id='gebuehren'></p>
    		</div>
    	</div>
    </body>
</html>
	<?php }
}
?>