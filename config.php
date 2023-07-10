<?php
$conn = oci_connect('username', 'password', 'hostname/service_name');
if (!$conn) {
    $e = oci_error();
    echo "Koneksi Oracle gagal: " . $e['message'];
} else {
    echo 'Koneksi Oracle berhasil!';
    oci_close($conn); // Tutup koneksi setelah pengujian
}
?>
