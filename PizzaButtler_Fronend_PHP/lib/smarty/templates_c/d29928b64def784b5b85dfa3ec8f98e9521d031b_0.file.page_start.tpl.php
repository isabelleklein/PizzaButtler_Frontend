<?php /* Smarty version 3.1.27, created on 2016-03-15 14:34:30
         compiled from "layouts\page_start.tpl" */ ?>
<?php
/*%%SmartyHeaderCode:1549256e80f66739de9_94153699%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'd29928b64def784b5b85dfa3ec8f98e9521d031b' => 
    array (
      0 => 'layouts\\page_start.tpl',
      1 => 1458048534,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '1549256e80f66739de9_94153699',
  'variables' => 
  array (
    '__content' => 0,
  ),
  'has_nocache_code' => false,
  'version' => '3.1.27',
  'unifunc' => 'content_56e80f6679f708_02934075',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_56e80f6679f708_02934075')) {
function content_56e80f6679f708_02934075 ($_smarty_tpl) {

$_smarty_tpl->properties['nocache_hash'] = '1549256e80f66739de9_94153699';
echo $_smarty_tpl->getSubTemplate ('header_start.tpl', $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0);
?>
        
    <?php echo $_smarty_tpl->tpl_vars['__content']->value;?>

<?php echo $_smarty_tpl->getSubTemplate ('footer.tpl', $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0);

}
}
?>