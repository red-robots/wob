<?php
/**
 * Created by PhpStorm.
 * User: fritz
 * Date: 10/19/16
 * Time: 1:11 PM
 */

/**
 * Enqueue scripts and styles.
 */
function wob_scripts() {

    wp_enqueue_style( 'wob-style', get_stylesheet_uri() );

    wp_deregister_script('jquery');
    wp_register_script('jquery', 'http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js');
    wp_enqueue_script('jquery');

    wp_register_script('scrollify', get_template_directory_uri() . '/build/jquery.scrollify.min.js');
    wp_enqueue_script('scrollify');

}
add_action( 'wp_enqueue_scripts', 'wob_scripts' );