<?php /* Smarty version 3.1.27, created on 2016-03-02 14:01:38
         compiled from "layouts\page_start.tpl" */ ?>
<?php
/*%%SmartyHeaderCode:2608856d6e432d4e9c8_64515816%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'd29928b64def784b5b85dfa3ec8f98e9521d031b' => 
    array (
      0 => 'layouts\\page_start.tpl',
      1 => 1456750665,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '2608856d6e432d4e9c8_64515816',
  'variables' => 
  array (
    '__content' => 0,
  ),
  'has_nocache_code' => false,
  'version' => '3.1.27',
  'unifunc' => 'content_56d6e432d653e0_76065074',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_56d6e432d653e0_76065074')) {
function content_56d6e432d653e0_76065074 ($_smarty_tpl) {

$_smarty_tpl->properties['nocache_hash'] = '2608856d6e432d4e9c8_64515816';
echo $_smarty_tpl->getSubTemplate ('header_start.tpl', $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0);
?>
        
    <?php echo $_smarty_tpl->tpl_vars['__content']->value;?>

<?php echo $_smarty_tpl->getSubTemplate ('footer.tpl', $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0);

}
}
?>