<?php /* Smarty version 3.1.27, created on 2015-09-20 18:54:53
         compiled from "layouts/header.tpl" */ ?>
<?php
/*%%SmartyHeaderCode:86367349055fee4ddb6c2d3_08551781%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'b3f84ab8fded8c17bdc241240d52584c30c1ef2e' => 
    array (
      0 => 'layouts/header.tpl',
      1 => 1442766183,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '86367349055fee4ddb6c2d3_08551781',
  'variables' => 
  array (
    'title' => 0,
  ),
  'has_nocache_code' => false,
  'version' => '3.1.27',
  'unifunc' => 'content_55fee4ddb737a3_24908702',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_55fee4ddb737a3_24908702')) {
function content_55fee4ddb737a3_24908702 ($_smarty_tpl) {

$_smarty_tpl->properties['nocache_hash'] = '86367349055fee4ddb6c2d3_08551781';
?>
<html>
     <head>
         <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
         <title><?php echo (($tmp = @$_smarty_tpl->tpl_vars['title']->value)===null||$tmp==='' ? "Title" : $tmp);?>
 | Smarty Tutorial</title>
     </head>
     <body>
     	<header>
     		<h2>Header Content</h2>
     		<hr />
     	</header>
         <div><?php }
}
?>