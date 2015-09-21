<?php /* Smarty version 3.1.27, created on 2015-09-20 18:16:17
         compiled from "layouts/page.tpl" */ ?>
<?php
/*%%SmartyHeaderCode:120336295655fedbd10b5646_95444907%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '123b333984fbbfd2b407cf1e082a129c1773e01f' => 
    array (
      0 => 'layouts/page.tpl',
      1 => 1442764988,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '120336295655fedbd10b5646_95444907',
  'variables' => 
  array (
    '__content' => 0,
  ),
  'has_nocache_code' => false,
  'version' => '3.1.27',
  'unifunc' => 'content_55fedbd10c12e9_24384865',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_55fedbd10c12e9_24384865')) {
function content_55fedbd10c12e9_24384865 ($_smarty_tpl) {

$_smarty_tpl->properties['nocache_hash'] = '120336295655fedbd10b5646_95444907';
?>
<html>
     <head>
         <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
         <title>Home</title>
     </head>
     <body>
     	<header>
     		<h2>Header Content</h2>
     		<hr />
     	</header>
         <div>
         	<?php echo $_smarty_tpl->tpl_vars['__content']->value;?>

  	  </div>
         <footer>
         	<hr />
         	<h2>Footer Content</h2>
     	</footer>
     </body>
</html><?php }
}
?>