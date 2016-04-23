<?php /* Smarty version 3.1.27, created on 2016-04-21 12:04:23
         compiled from "views\bewertung.tpl" */ ?>
<?php
/*%%SmartyHeaderCode:199525718a5a71ebee1_69928755%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '80435d95f4b5b2969a39c0cf821f9a70c3233df1' => 
    array (
      0 => 'views\\bewertung.tpl',
      1 => 1461153068,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '199525718a5a71ebee1_69928755',
  'has_nocache_code' => false,
  'version' => '3.1.27',
  'unifunc' => 'content_5718a5a720f167_35889542',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_5718a5a720f167_35889542')) {
function content_5718a5a720f167_35889542 ($_smarty_tpl) {

$_smarty_tpl->properties['nocache_hash'] = '199525718a5a71ebee1_69928755';
?>
<html>
    <head>

        <title>Pizzeria xyz</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <link href='http://fonts.googleapis.com/css?family=Open+Sans+Condensed:300|Open+Sans' rel='stylesheet' type='text/css'/>
        <link href="./css/main.css" rel="stylesheet" /> 
		<?php echo '<script'; ?>
 type="text/javascript" src="./javascript/bewertung.js"><?php echo '</script'; ?>
>
		
    </head>
    
    <body>
    	<div id="pizzerienContainer">
            <h3 class="contenthead" id="ueberschrift_bewertung">Bewertung</h3>
            <div class="bewertung2">Und, wie hat es Dir geschmeckt ?<br></div>
            <div class="bewerung_text" id="ueberschrift_bewertung">
               <br> Du hast bei <span id="pizzeria">PIZZA XYZ</span> bestellt. Wir hoffen, Du warst mit unserem Service zufrieden und es hat Dir geschmeckt. <br> <br>
                Bitte lasse Deine Bewertung hier, damit andere Nutzer von Deiner Empfehlung profitieren können. <br> <br>
                Vielen Dank !
				<p>
					<img id="1" class="stern" src="./images/dunklerStern.png" alt="1" />
					<img id="2" class="stern" src="./images/dunklerStern.png" alt="2" />
					<img id="3" class="stern" src="./images/dunklerStern.png" alt="3" />
					<img id="4" class="stern" src="./images/dunklerStern.png" alt="4" />
					<img id="5" class="stern" src="./images/dunklerStern.png" alt="5" />
                </p>	
            </div>
            
            <!--<input type= "button" class="userbutton" id="ueberschrift_bewertung" value="Absenden" onclick="schliessen()"></input>-->
    	
    	</div>
        
        
        <div class = "infocontent">
    		<p id="infoContainerText"> Der Butler Bringts!</p>
    		<img id="logo_uebersicht" src="./images/butler.png" alt="Logo Pizzabutler">
    	</div>

    </body>
</html><?php }
}
?>