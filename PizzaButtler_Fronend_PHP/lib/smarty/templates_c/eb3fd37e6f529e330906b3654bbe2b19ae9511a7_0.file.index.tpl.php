<?php /* Smarty version 3.1.27, created on 2016-03-02 14:01:38
         compiled from "views\index.tpl" */ ?>
<?php
/*%%SmartyHeaderCode:2125956d6e432cea747_81575154%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'eb3fd37e6f529e330906b3654bbe2b19ae9511a7' => 
    array (
      0 => 'views\\index.tpl',
      1 => 1456750666,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '2125956d6e432cea747_81575154',
  'has_nocache_code' => false,
  'version' => '3.1.27',
  'unifunc' => 'content_56d6e432d315f8_00671329',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_56d6e432d315f8_00671329')) {
function content_56d6e432d315f8_00671329 ($_smarty_tpl) {

$_smarty_tpl->properties['nocache_hash'] = '2125956d6e432cea747_81575154';
?>


    <link href='http://fonts.googleapis.com/css?family=Open+Sans+Condensed:300|Open+Sans' rel='stylesheet' type='text/css'/>
    <link href="./css/main.css" rel="stylesheet" />     
	
				<p>
					<img class="logo" src="./images/butler.png" alt="Logo Pizzabutler">
				</p>
			
				<form action="./pizzerienSuche.php" name="pizzerienListeButton">
					<p>
						<input class="button_startseite" type="text" name="plz-ort" id="plz-ort" placeholder="Wo wohnst du?" />
					</p>
				</form>
           <div class="zweiterBereich">
           	<div>
               
               <img class="paypal" id="bild1" src="./images/cart.png" alt="Einkaufswagen Symbol">
            </div>
            </div>
           	<div id="textbaustein"> Pizza Butler ist deine persönliche Plattform für Lieferdienste. Wir bringen dir dein favorisiertes Gericht direkt mit einem unserer Butler direkt nach Hause. Frisch für dich zubereitet – direkt zu dir geliefert. <br>
Mit unseren zahlreichen Partnerlieferdiensten, bei denen einer auch in deiner Nähe ist, wird dir dein Lieblingsgericht direkt und ohne Umweg an dich zugestellt. Auf deiner eigenen Favoritenliste kannst du dir deine Lieblingsgerichte zusammenstellen und auf Wunsch mit unserer 1-Klick Bestellmöglichkeit sofort bestellen. Über unseren Zahlungsdienstleister PayPal kannst du deine Bestellung mit deinen bestehenden PayPal Zugangsdaten abwickeln, ohne diese extra neu bei uns verifizieren zu müssen. Bestell noch heute – und erhalte als Neukunde <b>15% Rabatt</b> auf deine gesamte Bestellung.
 <br> <br>
Wir wünschen dir einen guten Appetit, euer Pizza Butler Team.

               </br>
               <img class="paypal" src="./images/stars.png" alt="5 Sterne fuer Paypal">
               <img class="paypal" id="bild2" src="./images/paypal.png" alt="Paypal Symbol">
        </div><?php }
}
?>