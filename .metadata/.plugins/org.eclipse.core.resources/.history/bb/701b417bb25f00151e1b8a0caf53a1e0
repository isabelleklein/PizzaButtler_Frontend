<?php

/* Smarty-Dateien laden */
require_once ('smarty/Smarty.class.php');
require_once ('smtemplate_config.php');

/*
 * An dieser Stelle kšnnen Applikations spezifische Bibliotheken geladen werden
 * Bsp: require(bib.lib.php);
 */
class SMTemplate extends Smarty {
	/**
	 * Konstruktor.
	 * Erzeugt eine neue Smarty-Instanz und konfiguriert die Smarty-Pfade
	 */
	function __construct() {
		parent::__construct ();
		
		global $smtemplate_config;
		$this->template_dir = $smtemplate_config ['template_dir'];
		$this->compile_dir = $smtemplate_config ['compile_dir'];
		$this->cache_dir = $smtemplate_config ['cache_dir'];
		$this->config_dir = $smtemplate_config ['config_dir'];
	}
	
	function render($template, $data =array()) {
		foreach($data as $key => $value) {
			$this->assign($key, $value);
		}
		$this->display ( $template . '.tpl' );
	}
}

?>