<?php /* Smarty version 3.1.27, created on 2015-09-20 18:16:59
         compiled from "views/kundenregistrierung.tpl" */ ?>
<?php
/*%%SmartyHeaderCode:133389371055fedbfbc5d8e5_21265470%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'f3aec6b8383ca4a2d59af61f8e587b146b4acbb8' => 
    array (
      0 => 'views/kundenregistrierung.tpl',
      1 => 1442763950,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '133389371055fedbfbc5d8e5_21265470',
  'variables' => 
  array (
    'date' => 0,
  ),
  'has_nocache_code' => false,
  'version' => '3.1.27',
  'unifunc' => 'content_55fedbfbc91657_70693427',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_55fedbfbc91657_70693427')) {
function content_55fedbfbc91657_70693427 ($_smarty_tpl) {
if (!is_callable('smarty_modifier_date_format')) require_once '/Applications/XAMPP/xamppfiles/htdocs/PizzaButtler_Fronend_PHP/lib/smarty/plugins/modifier.date_format.php';

$_smarty_tpl->properties['nocache_hash'] = '133389371055fedbfbc5d8e5_21265470';
?>
<html>

    <head>

        <title>Kundenregistrieung Pizzabuttler</title>
        <meta charset="utf-8"/>
        <?php echo '<script'; ?>
 type="text/javascript" src="./javascript/kundenregistrierung.js"><?php echo '</script'; ?>
>
        <link href="./css/main.css" rel="stylesheet" />

    </head>

    <body>
        <!-- anmelden.php muss natürlich noch angepasst werden -->

        <form action='anmelden.php' onsubmit='return checkForm()'>

            <h1>Kundenregistrieung bei Pizzabuttler</h1>
            
            <div class="fline">
                <a class="in1">Anrede</a>
				<select class="in2" name="status" id="status" size="1">
				    <option value="keine" selected> bitte w&aumlhlen	</option>
				    <option value="Herr"> Herr </option>
				    <option value="Frau"> Frau </option>
				</select>
            </div>

            <div class="fline">
                <label class="in1" for="vorname">Vorname</label>
                <input class="in2" type="text" name="vorname" id="vorname" maxlength="32">
            </div>

            <div class="fline">
                <label class="in1" for="name">Nachname</label>
                <input class="in2" type="text" name="name" id="name" maxlength="32">
            </div>

            <div class="fline">
                <label class="in1" for="day">Geburtsdatum</label>
                <input class="in2" type="text" name="day" id="day" maxlength="2" />
                <input type="text" name="month" id="month" maxlength="2" />
                <input type="text" name="year" id="year" maxlength="4" />
            </div>

            <div class="fline">
                <label class="in1" for="strasse">Strasse / Hausnummer</label>
                <input class="in2" type="text" name="strasse" id="strasse" maxlength="50"/>
                <input type="text" name="hnr" id="hnr" maxlength="4"/>
            </div>

            <div class="fline">
                <label class="in1" for="plz">PLZ / Wohnort</label>
                <input class="in2" type="text" name="plz" id="plz" maxlength="6"/>
                <input type="text" name="wohnort" id="wohnort" maxlength="50"/>
            </div>

            <div class="fline">
                <label class="in1" for="email">Email</label>
                <input class="in2" type="text" name="email" id="email" maxlength="32"/>
            </div>

            <div class="fline">
                <label class="in1" for="tel">Telefonnummer</label>
                <input class="in2" type="text" name="tel" id="tel" maxlength="32"/>
            </div>

            <div class="fline">
                <label class="in1" for="pw1">Passwort</label>
                <input class="in2" type="text" name="pw1" id="pw1" maxlength="32"/>
            </div>

            <div class="fline">
                <label class="in1" for="pw2">Passwort wiederholen</label>
                <input class="in2" type="text" name="pw2" id="pw2" maxlength="32"/>
            </div>

            <p>
                <input id="absenden" type="submit" value="Absenden" class="button" />
            </p>
            
<!--            <p><?php echo smarty_modifier_date_format($_smarty_tpl->tpl_vars['date']->value,"%d.%m.%Y");?>
</p>       -->

        </form>

    </body>

</html><?php }
}
?>