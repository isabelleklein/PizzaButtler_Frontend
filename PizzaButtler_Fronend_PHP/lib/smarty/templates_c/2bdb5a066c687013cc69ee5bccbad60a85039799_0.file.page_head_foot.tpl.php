<?php /* Smarty version 3.1.27, created on 2015-09-20 19:00:26
         compiled from "layouts/page_head_foot.tpl" */ ?>
<?php
/*%%SmartyHeaderCode:57227826355fee62a0f6884_30775332%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '2bdb5a066c687013cc69ee5bccbad60a85039799' => 
    array (
      0 => 'layouts/page_head_foot.tpl',
      1 => 1442768421,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '57227826355fee62a0f6884_30775332',
  'variables' => 
  array (
    '__content' => 0,
  ),
  'has_nocache_code' => false,
  'version' => '3.1.27',
  'unifunc' => 'content_55fee62a119aa5_10516259',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_55fee62a119aa5_10516259')) {
function content_55fee62a119aa5_10516259 ($_smarty_tpl) {

$_smarty_tpl->properties['nocache_hash'] = '57227826355fee62a0f6884_30775332';
echo $_smarty_tpl->getSubTemplate ("header.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array('title'=>((string)$_smarty_tpl->tpl_vars['title']->value)), 0);
?>

    <?php echo $_smarty_tpl->tpl_vars['__content']->value;?>

<?php echo $_smarty_tpl->getSubTemplate ('footer.tpl', $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0);

}
}
?>