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

function wob_setup() {

    // This theme uses wp_nav_menu() in one location.
    register_nav_menus( array(
        'primary' => esc_html__( 'Primary', 'acstarter' ),
        'sitemap' => esc_html__( 'Sitemap', 'acstarter' ),
    ) );

}
add_action( 'after_setup_theme', 'wob_setup' );