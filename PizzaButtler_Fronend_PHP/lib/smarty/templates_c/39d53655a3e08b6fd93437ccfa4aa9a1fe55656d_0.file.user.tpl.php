<?php /* Smarty version 3.1.27, created on 2016-04-23 11:37:26
         compiled from "views\user.tpl" */ ?>
<?php
/*%%SmartyHeaderCode:6882571b4256d856f5_49303788%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '39d53655a3e08b6fd93437ccfa4aa9a1fe55656d' => 
    array (
      0 => 'views\\user.tpl',
      1 => 1461404236,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '6882571b4256d856f5_49303788',
  'has_nocache_code' => false,
  'version' => '3.1.27',
  'unifunc' => 'content_571b4256dc0071_24406440',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_571b4256dc0071_24406440')) {
function content_571b4256dc0071_24406440 ($_smarty_tpl) {

$_smarty_tpl->properties['nocache_hash'] = '6882571b4256d856f5_49303788';
?>
<html>
    <head>
        <title>Benutzer</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <link href="./css/main.css" rel="stylesheet" /> 
        <?php echo '<script'; ?>
 type="text/javascript" src="./javascript/passwort_vergessen_absenden.js"><?php echo '</script'; ?>
>
		<?php echo '<script'; ?>
 type="text/javascript" src="./javascript/user.js"><?php echo '</script'; ?>
>		
    </head>
    
    <body>
		<div class="maincontent">
			<form id='datenanzeigen' name="datenanzeigen" action="#">
				<h3 class="contenthead"> Deine Daten </h3>
				<div id="data">
                    <table class="userdaten">
                        <tr>
                            <td class="in1"><label>Anrede:</label></td>
                            <td>
                                <label type="text" class="text" name="anrede" id="userAnrede"></label><br />
                            </td>
                        </tr>
                        <tr>
                            <td class="in1"><label>Name:</label></td>
                            <td>
                                <label type="text" class="text" name="vorname" id="userVorname"></label>
                                <label name="nachname" id="userNachname"></label>
                            </td> 
                        </tr>
                        <tr>
                            <td class="in1"><label>Anschrift:</label></td>
                            <td>
                                <label name="strasse" id="userStrasse"></label>
                                <label name="hausnummer" id="userHausnummer"></label><br />
                                <label name="plz" id="userPlz"></label>
                                <label name="ort" id="userOrt"></label><br /><br />
                            </td>     
                        </tr>
                        <tr>
                            <td class="in1"><label>Telefon:</label></td>
                            <td><label name="telefon" id="userTelefon"></label></td>  
                        </tr>
                        <tr>
                            <td class="in1"><label>Email:</label></td>
                            <td><label name="email" id="userEmail"></label></td>  
                        </tr>
                    </table>
					<p>
						<input class="userbutton" id="userdatenaendern" name="userdatenaendern" type="button" value="Daten &auml;ndern" />
					</p>
                    <p id="passwortAendern">
						<div>
							<label>Altes Passwort</label>
							<input type="password" id="passwortAlt"/>
						</div>
						<div>
							<label>Neues Passwort</label>
							<input type="password" id="passwortNeu"/>
						</div>
						<div id="pwAendernError"></div>
						<input class="userbutton" id="userpwaendern" name="userpwaendern" type="button" value="Passwort &auml;ndern"/>
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