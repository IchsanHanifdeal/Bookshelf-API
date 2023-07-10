<?php
$conn = oci_connect('tdsuite', 'allfor1', '(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=172.24.128.231)(PORT=1521))(CONNECT_DATA=(SID=KBY)))');
if (!$conn) {
    $e = oci_error();
    echo "Koneksi Oracle gagal: " . $e['message'];
} else {
    echo 'Koneksi Oracle berhasil!';
    oci_close($conn);
}
?>
