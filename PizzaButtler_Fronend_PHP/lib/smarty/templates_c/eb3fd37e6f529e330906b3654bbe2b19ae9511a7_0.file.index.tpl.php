<?php /* Smarty version 3.1.27, created on 2016-02-17 13:36:00
         compiled from "views\index.tpl" */ ?>
<?php
/*%%SmartyHeaderCode:1867156c46930d0daa9_33298296%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'eb3fd37e6f529e330906b3654bbe2b19ae9511a7' => 
    array (
      0 => 'views\\index.tpl',
      1 => 1455712382,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '1867156c46930d0daa9_33298296',
  'has_nocache_code' => false,
  'version' => '3.1.27',
  'unifunc' => 'content_56c46930d6be86_93310409',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_56c46930d6be86_93310409')) {
function content_56c46930d6be86_93310409 ($_smarty_tpl) {

$_smarty_tpl->properties['nocache_hash'] = '1867156c46930d0daa9_33298296';
?>


    <link href='http://fonts.googleapis.com/css?family=Open+Sans+Condensed:300|Open+Sans' rel='stylesheet' type='text/css'/>
    <link href="./css/main.css" rel="stylesheet" />     
	
		<div class="farbe">
			<div class="ersterBereich">
				<form action="./pizzerienSuche.php" name="pizzerienListeButton">
					<p class="links">
						<input class="button_startseite" type="text" name="plz-ort" id="plz-ort" placeholder="Wo wohnst du?" />
					</p>
				</form>
               
               
               <p class="links">
                    <img class="logo" src="./images/butler.png" alt="Logo Pizzabutler">
               </p>
            </div>
           <div class="zweiterBereich">
           <p class="links">
               
               <img class="paypal" id="bild1" src="./images/cart.png" alt="5 Sterne fuer Paypal">
               </p>
           <div class="links" id="textbaustein">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
               </br>
               <img class="paypal" src="./images/stars.png" alt="5 Sterne fuer Paypal">
               <img class="paypal" id="bild2" src="./images/paypal.png" alt="5 Sterne fuer Paypal">
               
               </div>
               
           </div>
            
        </div><?php }
}
?>