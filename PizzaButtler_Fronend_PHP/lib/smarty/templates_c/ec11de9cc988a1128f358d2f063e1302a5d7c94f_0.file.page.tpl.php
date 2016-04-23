<?php /* Smarty version 3.1.27, created on 2016-04-21 11:47:56
         compiled from "layouts\page.tpl" */ ?>
<?php
/*%%SmartyHeaderCode:68665718a1cc843406_11193290%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'ec11de9cc988a1128f358d2f063e1302a5d7c94f' => 
    array (
      0 => 'layouts\\page.tpl',
      1 => 1461153068,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '68665718a1cc843406_11193290',
  'variables' => 
  array (
    '__content' => 0,
  ),
  'has_nocache_code' => false,
  'version' => '3.1.27',
  'unifunc' => 'content_5718a1cc85e990_21578049',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_5718a1cc85e990_21578049')) {
function content_5718a1cc85e990_21578049 ($_smarty_tpl) {

$_smarty_tpl->properties['nocache_hash'] = '68665718a1cc843406_11193290';
echo $_smarty_tpl->getSubTemplate ('header.tpl', $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0);
?>
        
    <?php echo $_smarty_tpl->tpl_vars['__content']->value;?>

<?php echo $_smarty_tpl->getSubTemplate ('footer.tpl', $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0);

}
}
?>