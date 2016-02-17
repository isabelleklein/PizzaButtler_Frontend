<?php /* Smarty version 3.1.27, created on 2016-02-17 16:20:51
         compiled from "layouts\page.tpl" */ ?>
<?php
/*%%SmartyHeaderCode:2793456c48fd3920f69_92029790%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'ec11de9cc988a1128f358d2f063e1302a5d7c94f' => 
    array (
      0 => 'layouts\\page.tpl',
      1 => 1455722450,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '2793456c48fd3920f69_92029790',
  'variables' => 
  array (
    '__content' => 0,
  ),
  'has_nocache_code' => false,
  'version' => '3.1.27',
  'unifunc' => 'content_56c48fd3981cd9_89548254',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_56c48fd3981cd9_89548254')) {
function content_56c48fd3981cd9_89548254 ($_smarty_tpl) {

$_smarty_tpl->properties['nocache_hash'] = '2793456c48fd3920f69_92029790';
echo $_smarty_tpl->getSubTemplate ('header_start.tpl', $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0);
?>
        
    <?php echo $_smarty_tpl->tpl_vars['__content']->value;?>

<?php echo $_smarty_tpl->getSubTemplate ('footer.tpl', $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0);

}
}
?>