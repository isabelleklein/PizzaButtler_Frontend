<?php /* Smarty version 3.1.27, created on 2016-02-19 11:41:35
         compiled from "views\index.tpl" */ ?>
<?php
/*%%SmartyHeaderCode:2483356c6f15f9a9738_10823062%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'eb3fd37e6f529e330906b3654bbe2b19ae9511a7' => 
    array (
      0 => 'views\\index.tpl',
      1 => 1455870545,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '2483356c6f15f9a9738_10823062',
  'has_nocache_code' => false,
  'version' => '3.1.27',
  'unifunc' => 'content_56c6f15fb36211_84521877',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_56c6f15fb36211_84521877')) {
function content_56c6f15fb36211_84521877 ($_smarty_tpl) {

$_smarty_tpl->properties['nocache_hash'] = '2483356c6f15f9a9738_10823062';
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
           	<div id="textbaustein">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
               </br>
               <img class="paypal" src="./images/stars.png" alt="5 Sterne fuer Paypal">
               <img class="paypal" id="bild2" src="./images/paypal.png" alt="Paypal Symbol">
        </div><?php }
}
?>