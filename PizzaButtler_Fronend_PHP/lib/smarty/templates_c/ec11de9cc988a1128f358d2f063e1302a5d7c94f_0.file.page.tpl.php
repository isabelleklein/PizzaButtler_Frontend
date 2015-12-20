<?php /* Smarty version 3.1.27, created on 2015-12-20 00:03:12
         compiled from "layouts\page.tpl" */ ?>
<?php
/*%%SmartyHeaderCode:109995675e2300a7ec8_82131940%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'ec11de9cc988a1128f358d2f063e1302a5d7c94f' => 
    array (
      0 => 'layouts\\page.tpl',
      1 => 1450540825,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '109995675e2300a7ec8_82131940',
  'variables' => 
  array (
    '__content' => 0,
  ),
  'has_nocache_code' => false,
  'version' => '3.1.27',
  'unifunc' => 'content_5675e2300bf5c5_89889711',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_5675e2300bf5c5_89889711')) {
function content_5675e2300bf5c5_89889711 ($_smarty_tpl) {

$_smarty_tpl->properties['nocache_hash'] = '109995675e2300a7ec8_82131940';
echo $_smarty_tpl->getSubTemplate ('header_start.tpl', $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0);
?>
        
    <?php echo $_smarty_tpl->tpl_vars['__content']->value;?>

<?php echo $_smarty_tpl->getSubTemplate ('footer.tpl', $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0);

}
}
?>