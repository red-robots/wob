<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package ACStarter
 */

?>

	</div><!-- #content -->

	<footer id="colophon" class="site-footer" role="contentinfo">
		<div class="wrapper">
			<div class="site-info">
				<a href="<?php echo esc_url( __( 'https://wordpress.org/', 'acstarter' ) ); ?>"><?php printf( esc_html__( 'Proudly powered by %s', 'acstarter' ), 'WordPress' ); ?></a>
				<span class="sep"> | </span>
				<?php printf( esc_html__( 'Theme: %1$s by %2$s.', 'acstarter' ), 'acstarter', '<a href="http://underscores.me/" rel="designer">Underscores.me</a>' ); ?>
			</div><!-- .site-info -->
	</div><!-- wrapper -->
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>
<script type="text/babel">
    var example_vars = {
        api_root:"<?php echo get_bloginfo("url")."/wp-json/wp/v2";?>",
        root:"/bellaworks/wob/"
    };
</script>
<script type="text/babel" src="<?php echo get_template_directory_uri() . '/assets/js/example.js';?>">
</body>
</html>
