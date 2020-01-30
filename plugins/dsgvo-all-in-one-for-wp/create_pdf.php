<?php
//error_reporting(E_ALL);
//session_start();
$full_path = getcwd();
$ar = explode("plugins", $full_path);
$installpath = $ar[0];

/** Loads the WordPress Environment and Template */
require ($installpath.'/../wp-blog-header.php');
define( 'WP_USE_THEMES', true ); // Don't load theme support functionality
require($installpath.'/../wp-load.php');
//echo $installpath;


if ( is_user_logged_in() ) {

if (!$language) $language = wf_get_language();	
$users = get_users();
//print_r($users);
foreach($users as $user){
        //print_r(get_user_meta ( $user_id->ID));
    
	
	if (get_current_user_id() == $user->ID) {
		
			require(plugin_dir_path( __FILE__ ).'core/inc/pdf/fpdf.php');
			
			$user_meta = get_user_meta ( $user->ID);
			//print_r($user_meta);
			$useripdata = explode(":", $user_meta['community-events-location'][0]);
			$userip = str_replace('"',"", $useripdata);
			$userip = str_replace(';}',"", $userip);	

	
			class PDF extends FPDF {	
			
				function Header() {
					// Logo
					
					//$this->Image('logo.png',10,6,30);
					// Arial bold 15
					$this->SetFont('Arial','B',15);
					// Move to the right
					$this->Cell(60);
					// Title
					$this->Cell(70,10, __("Benutzerdatenauskunft", "dsgvo-all-in-one-for-wp"),1,0,'C');
					// Line break
					$this->Ln(20);
				}
				// Page footer
				function Footer() {
					$site_title = get_option('blogname');
					// Position at 1.5 cm from bottom
					$this->SetY(-20);
					// Arial italic 8
					$this->SetFont('Arial','',10);
					// Page number
					$this->Cell(0,10, __("Seite", "dsgvo-all-in-one-for-wp").' '.$this->PageNo().'/1',0,0,'C');
					$this->Ln(5);
					$this->Cell(0,10, __("Generiert durch", "dsgvo-all-in-one-for-wp").' '.$site_title.' - '.get_site_url(),0,0,'C');
					$this->Ln(5);
					$this->Cell(0,10, __("Generiert am", "dsgvo-all-in-one-for-wp").' '.date('d.m.Y').' um '.date('H:i:s'),0,0,'C');
					$this->Ln(5);
		
				}
			

			}
			$pdf = new PDF();
			$pdf->AddPage();
			$pdf->SetFont('Arial','B',12);
			$pdf->Cell(40,10, __("Benutzerdaten", "dsgvo-all-in-one-for-wp"));
			$pdf->Ln(8);			
			$pdf->SetFont('Arial','',12);
			$pdf->Cell(40,10, __("Benutzername", "dsgvo-all-in-one-for-wp").": ".$user->user_login);
		
			if (get_user_meta ( $user->ID)['first_name'][0]) {
				$pdf->Ln(8);
				$pdf->Cell(40,10,__("Vorname", "dsgvo-all-in-one-for-wp").": ".get_user_meta ( $user->ID)['first_name'][0]);
			}	
			
			if (get_user_meta ( $user->ID)['last_name'][0]) {
				$pdf->Ln(8);
				$pdf->Cell(40,10,__("Nachname", "dsgvo-all-in-one-for-wp").": ".get_user_meta ( $user->ID)['last_name'][0]);
			}
			
			$user_id = get_current_user_id(); 
			$user_info = get_userdata($user_id);
			$mailadresje = $user_info->user_email;		
					
			if ($mailadresje) {
				$pdf->Ln(8);
				$pdf->Cell(40,10,__("Email Adresse", "dsgvo-all-in-one-for-wp").": ".$mailadresje);
			}				
			
			if (get_user_meta ( $user->ID)['billing_email'][0]) {			
				$pdf->Ln(8);
				$pdf->Cell(40,10,__("Shop Email Adresse", "dsgvo-all-in-one-for-wp").": ".get_user_meta ( $user->ID)['billing_email'][0]);
			}

			if (get_user_meta ( $user->ID)['billing_phone'][0]) {			
				$pdf->Ln(8);
				$pdf->Cell(40,10,__("Telefonnummer", "dsgvo-all-in-one-for-wp").": ".get_user_meta ( $user->ID)['billing_phone'][0]);
			}
			
			if ( class_exists( 'WooCommerce' ) ) {
			
			$pdf->Ln(20);
			$pdf->SetFont('Arial','B',12);
			$pdf->Cell(40,10,__("Rechnungsadresse", "dsgvo-all-in-one-for-wp"));
			$pdf->Ln(8);			
			$pdf->SetFont('Arial','',12);
			
			}

			if (get_user_meta ( $user->ID)['billing_company'][0]) {
				$pdf->Cell(40,10,__("Firma", "dsgvo-all-in-one-for-wp").": ".get_user_meta ( $user->ID)['billing_company'][0]);
				$pdf->Ln(8);
			}

			
			if (get_user_meta ( $user->ID)['billing_first_name'][0]) {
				$pdf->Cell(40,10,__("Vorname", "dsgvo-all-in-one-for-wp").": ".get_user_meta ( $user->ID)['billing_first_name'][0]);
				$pdf->Ln(8);
			}
			
			if (get_user_meta ( $user->ID)['billing_last_name'][0]) {			
				$pdf->Cell(40,10,__("Nachname", "dsgvo-all-in-one-for-wp").": ".get_user_meta ( $user->ID)['billing_last_name'][0]);
				$pdf->Ln(8);
			}
			
			if (get_user_meta ( $user->ID)['billing_address_1'][0]) {
				$pdf->Cell(40,10,__("Adresse", "dsgvo-all-in-one-for-wp").": ".get_user_meta ( $user->ID)['billing_address_1'][0]);
				$pdf->Ln(8);
			}
			
			if (get_user_meta ( $user->ID)['billing_city'][0]) {
				$pdf->Cell(40,10,__("Ort", "dsgvo-all-in-one-for-wp").": ".get_user_meta ( $user->ID)['billing_city'][0]);
				$pdf->Ln(8);
			}
			
			if (get_user_meta ( $user->ID)['billing_postcode'][0]) {
				$pdf->Cell(40,10,__("PLZ", "dsgvo-all-in-one-for-wp").": ".get_user_meta ( $user->ID)['billing_postcode'][0]);
				$pdf->Ln(8);
			}
			
			if (get_user_meta ( $user->ID)['billing_country'][0]) {
				$pdf->Cell(40,10,__("Land", "dsgvo-all-in-one-for-wp").": ".get_user_meta ( $user->ID)['billing_country'][0]);
				$pdf->Ln(20);
			}
			
			if (isset($userip[6])) {
				$pdf->Ln(14);				
				$pdf->SetFont('Arial','B',12);
				$pdf->Cell(40,10,__("IP Adresse", "dsgvo-all-in-one-for-wp"));
				$pdf->SetFont('Arial','',12);
				$pdf->Ln(8);			
				$pdf->Cell(40,10,__("IP Adresse", "dsgvo-all-in-one-for-wp").": ".$userip[6]);
			}
			
			if ($language == "de") {
				if (get_option("dsgvo_pdf_text")) {
					$pdf->Ln(20);
					$pdf->MultiCell( 185, 7, html_entity_decode(get_option("dsgvo_pdf_text")), 10);
				}				
			}
			
			if ($language == "en") {
				if (get_option("dsgvo_pdf_text_en")) {
					$pdf->Ln(20);
					$pdf->MultiCell( 185, 7, html_entity_decode(get_option("dsgvo_pdf_text_en")), 10);
				}				
			}
			$site_title = get_option('blogname');
			header("Content-type: application/pdf",true,200);
			header("Content-Disposition: attachment; filename='userdatas_".$site_title.".pdf");
			header('Cache-Control: public');		
			
			$pdf->Output('D','userdatas_'.$site_title.'.pdf');

			

	}
}
} else {
	echo 'You are currently not logged in and you call the file directly...'. '<br />';

}



?>

