<?php /* Smarty version 3.1.27, created on 2016-04-14 18:39:24
         compiled from "views\user_pizzeria.tpl" */ ?>
<?php
/*%%SmartyHeaderCode:29002570fc7bced5879_92572792%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '45968feba24e6e96e77f58dd0a304c20db6351ae' => 
    array (
      0 => 'views\\user_pizzeria.tpl',
      1 => 1459764240,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '29002570fc7bced5879_92572792',
  'has_nocache_code' => false,
  'version' => '3.1.27',
  'unifunc' => 'content_570fc7bcf23ad4_90944004',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_570fc7bcf23ad4_90944004')) {
function content_570fc7bcf23ad4_90944004 ($_smarty_tpl) {

$_smarty_tpl->properties['nocache_hash'] = '29002570fc7bced5879_92572792';
?>
<html>
    <head>

        <title>Benutzer</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <link href="./css/main.css" rel="stylesheet" /> 
		<?php echo '<script'; ?>
 type="text/javascript" src="./javascript/user_pizzeria.js"><?php echo '</script'; ?>
>
		
    </head>
    
    <body>
		<div class="maincontent" id=datenContainer>
			<form id='datenanzeigen' name="datenanzeigen" action="#">
				<h3 class="contenthead"> Deine Daten </h3>
				<div id="data">
                    <table class="userdaten">
                        <tr>
                            <td class="in1"><label>Name:</label></td>
                            <td>
                                <label type="text" class="text" name="name" id="name_data_anz"></label>
                            </td>
                        </tr>
                        <tr>
                            <td class="in1"><label>Anschrift:</label></td>
                            <td>
                                <label type="text" class="text" name="strasse" id="strasse_data_anz"></label>
                                <label type="text" class="text" name="hausnummer" id="hausnummer_data_anz"></label><br />
                                <label type="text" class="text" name="plz" id="plz_data_anz"></label>
                                <label type="text" class="text" name="ort" id="ort_data_anz"></label><br /><br />
                            </td>
                        </tr>
                        <tr>
                            <td class="in1"><label>&Ouml;ffnungszeiten:</label></td>
                            <td>
                                <label type="text" class="text" name="oeffnungszeiten" id="oeffnungszeiten_data_anz_so"></label><br />
                                <label type="text" class="text" name="oeffnungszeiten" id="oeffnungszeiten_data_anz_mo"></label><br />
                                <label type="text" class="text" name="oeffnungszeiten" id="oeffnungszeiten_data_anz_di"></label><br />
                                <label type="text" class="text" name="oeffnungszeiten" id="oeffnungszeiten_data_anz_mi"></label><br />
                                <label type="text" class="text" name="oeffnungszeiten" id="oeffnungszeiten_data_anz_do"></label><br />
                                <label type="text" class="text" name="oeffnungszeiten" id="oeffnungszeiten_data_anz_fr"></label><br />
                                <label type="text" class="text" name="oeffnungszeiten" id="oeffnungszeiten_data_anz_sa"></label><br />
                            </td> 
                        </tr>
                        <tr>
                            <td class="in1"><label>Mindesbestellwert:</label></td>
                            <td>
                                <label type="text" class="text" name="mindestbestellwert" id="mindestbestellwert_data_anz"></label>
                            </td>     
                        </tr>
                        <tr>
                            <td class="in1"><label>Lieferkosten:</label></td>
                            <td><label type="text" class="text" name="lieferkosten" id="lieferkosten_data_anz"></label><br /></td>
                        </tr>
                        <tr>
                            <td class="in1"><label>Telefon:</label></td>
                            <td><label name="telefon" id="pizzeriaTelefon"></label></td>  
                        </tr>
                    </table>
					<p>
						<input class="userbutton" id="datenaendern" name="datenaendern" type="button" value="Daten &auml;ndern" />
					</p>
                    <p>
						<input class="userbutton" id="pwaendern" name="pwaendern" type="button" value="Passwort &auml;ndern" />
					</p>
					<p>
                        	<input type='button' class='userbutton' onclick="window.location.href='./statistik.php'"value="meine Statistik"/>
                    </p>
				</div>
			</form>
		</div>
        <div class = "infocontent">
    		<p id="infoContainerText"> Der Butler Bringts!</p>
    		<img id="logo_uebersicht" src="./images/butler.png" alt="Logo Pizzabutler">
    	</div>
    </body>
</html>
	<?php }
}
?>