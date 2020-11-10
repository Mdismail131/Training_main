<?php
/**
 * Global settings/Elements.
 * PHP version 5
 * 
 * @category Components
 * @package  PHP
 * @author   Md Ismail <mi0718839@gmail.com>
 * @license  https://www.gnu.org/licenses/gpl-3.0.txt GNU/GPLv3
 * @version  SVN: $Id$
 * @link     https://yoursite.com
 */

$siteurl="http://http://localhost/Training/dailyShop/simpleadmin/";
global $conn;
$conn = mysqli_connect('localhost', 'root', '', 'product');

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
/** 
 * Function Returns Query Result.
 * 
*/

function Call_query($query) 
{
    $conn = mysqli_connect('localhost', 'root', '', 'product');

    $result = mysqli_query($conn, $query);
    $row = mysqli_fetch_all($result);
    return $row;
}

?>