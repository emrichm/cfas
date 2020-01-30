<?php
/**
 * Plugin Name: GDPR / DSGVO Google Maps
 * Description: This plugin will used load google map on click using shortcode [google_map_click_load].
 * Version: 1.0
 * Author: UDLIS IT-Solutions
 * Author URI: https://www.udlis.com
 */

// create page for google map on settings menu 

 require_once dirname(__FILE__) . '/google_map_page.php';

// create shotcode for google map 

 require_once dirname(__FILE__) . '/shortcode/google_map_shortcode.php';