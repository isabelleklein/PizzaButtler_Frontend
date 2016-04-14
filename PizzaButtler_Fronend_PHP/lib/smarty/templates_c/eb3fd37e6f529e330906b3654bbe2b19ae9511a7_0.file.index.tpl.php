<?php /* Smarty version 3.1.27, created on 2016-04-13 14:02:40
         compiled from "views\index.tpl" */ ?>
<?php
/*%%SmartyHeaderCode:9939570e3560d6e610_21879858%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'eb3fd37e6f529e330906b3654bbe2b19ae9511a7' => 
    array (
      0 => 'views\\index.tpl',
      1 => 1459771992,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '9939570e3560d6e610_21879858',
  'has_nocache_code' => false,
  'version' => '3.1.27',
  'unifunc' => 'content_570e3561018c66_19014579',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_570e3561018c66_19014579')) {
function content_570e3561018c66_19014579 ($_smarty_tpl) {

$_smarty_tpl->properties['nocache_hash'] = '9939570e3560d6e610_21879858';
?>


    <link href='http://fonts.googleapis.com/css?family=Open+Sans+Condensed:300|Open+Sans' rel='stylesheet' type='text/css'/>
    <link href="./css/main.css" rel="stylesheet" />     
	
				<p>
					<img class="logo" src="./images/butler.png" alt="Logo Pizzabutler">
				</p>
			
				<form action="./pizzerienSuche.php" name="pizzerienListeButton" id='pizzerienSucheGross'>
					<p>
						<input class="button_startseite" type="text" name="plz-ort" id="plz-ort" placeholder="Wo wohnst Du?" />
					</p>
				</form>
				<?php echo '<script'; ?>
>$.validate('#pizzerienSucheGross')<?php echo '</script'; ?>
>
           <div class="zweiterBereich">
           	<div>
               
               <img class="paypal" id="bild1" src="./images/pizzaStartseite.png" alt="Pizza Symbol Startseite">
            </div>
            </div>
           	<div id="textbaustein"> 
               <h3> Warum Pizza Butler ?</h3>
                
                Pizza Butler ist Deine persönliche Plattform für Lieferdienste. Wir bringen Dir Dein favorisiertes Gericht direkt mit einem unserer Butler nach Hause. Frisch für Dich zubereitet – direkt zu Dir geliefert. <br>
Auf Deiner eigenen Favoritenliste kannst Du Dir Deine Lieblingsgerichte zusammenstellen und sofort bestellen. Über unseren Zahlungsdienstleister PayPal kannst Du Deine Bestellung mit Deinen PayPal Zugangsdaten direkt bezahlen.
 <br> <br>
Wir wünschen Dir einen guten Appetit, euer Pizza Butler Team.
        </div>
		<?php echo '<script'; ?>
 src="./javascript/inputSuggestions.js"><?php echo '</script'; ?>
><?php }
}
?>