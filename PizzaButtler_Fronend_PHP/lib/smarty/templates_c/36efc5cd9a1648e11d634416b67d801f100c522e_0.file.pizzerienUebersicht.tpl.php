<?php /* Smarty version 3.1.27, created on 2016-03-05 00:43:18
         compiled from "views\pizzerienUebersicht.tpl" */ ?>
<?php
/*%%SmartyHeaderCode:17256da1d96b60fb9_97029213%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '36efc5cd9a1648e11d634416b67d801f100c522e' => 
    array (
      0 => 'views\\pizzerienUebersicht.tpl',
      1 => 1457134897,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '17256da1d96b60fb9_97029213',
  'has_nocache_code' => false,
  'version' => '3.1.27',
  'unifunc' => 'content_56da1d96ba4dc3_72455140',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_56da1d96ba4dc3_72455140')) {
function content_56da1d96ba4dc3_72455140 ($_smarty_tpl) {

$_smarty_tpl->properties['nocache_hash'] = '17256da1d96b60fb9_97029213';
?>
<html>
    <head>

        <title>Gefundene Pizzerien</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <link href="./css/main.css" rel="stylesheet" /> 
		<?php echo '<script'; ?>
 type="text/javascript" src="./javascript/pizzerienListe.js"><?php echo '</script'; ?>
>
		
    </head>
    
    <body>
    	<div class="maincontent" id="pizzerienContainer">
    	 <table>
		  <tr class="line">
		    <td class="iconspalte"><img class="pizzeriaIcon" id="samplePizzeria1" src="./images/samplePizzeria1.jpg" alt="Pizzeria1"></td>
		    <td>
		    	<p class="listParagraph" id="pizzeriaName">Pizzeria Avaia</p>
		    	<p class="listParagraph">Musterweg 1</p>
		    	<p class="listParagraph">68165 Mannheim</p>
		    	<p class="listParagraph"></p>
		    	<p class="listParagraph">Lieferkosten: 1,50&#8364</p>
		    	<p class="listParagraph">Mindestbestellwert: 10,00&#8364</p>
		    	<p class="listParagraph"></p>
		    	<p class="listParagraph">ge&oumlffnet</p>
		    </td>
		  </tr>
		  <tr class="line">
		    <td class="iconspalte"><img class="pizzeriaIcon" id="samplePizzeria2" src="./images/samplePizzeria2.jpg" alt="Pizzeria2"></td>
		    <td class="listParagraph" id="pizzeriaName">Pizzeria 2</td>
		  </tr>
		  <tr class="line">
		    <td class="iconspalte"><img class="pizzeriaIcon" id="samplePizzeria3" src="./images/samplePizzeria3.jpg" alt="Pizzeria3"></td>
		    <td class="listParagraph" id="pizzeriaName">Pizzeria 3</td>
		  </tr>
		  <tr class="line">
		  	<td class="iconspalte"></td>
		    <td class="listParagraph" id="pizzeriaName">Pizzeria 4</td>
		  </tr>
		  <tr class="line">
			  <td class="iconspalte"></td>
			  <td class="listParagraph" id="pizzeriaName">Pizzeria 5</td>
		  </tr>
		  <tr class="line">
		  	<td class="iconspalte"></td>
		  	<td class="listParagraph" id="pizzeriaName">Pizzeria 6</td>
		  </tr>
		</table>
    	</div>
    	<div class = "infocontent" id = "infoContainer">
    		<p id="infoContainerText"> Der Butler Bringts!</p>
    		<img id="logo_uebersicht" src="./images/butler.png" alt="Logo Pizzabutler">
    	</div>
    </body>
</html><?php }
}
?>