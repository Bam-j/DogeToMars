<?php
$servername = "localhost";
$username = "유저명";
$password = "비밀번호";
$dbname = "score_board";
$ip = $_SERVER['REMOTE_ADDR'];
$currentScore = '<script language='javascript'>let currentScore = document.getElementById('score'); </script>';

$conn = new mysqli($servername, $username, $password, $dbname);

if($conn->connect_error) {
	die("접속 실패 : ", $conn->connect_error);
}

// 정보 생성
$sql = "INSERT INTO usr_sco (IP_ADDR) VALUES('$ip')";
if($conn->query($sql) === FALSE) {
	echo "사용자 정보 생성에 실패하였습니다 ". $sql. "<BR>". $conn->error;
}

// 사용자 정보 불러오기
$sql = "SELECT FROM usr_sco"
$result = $conn->query($sql);

$row = 0;
while($row = $result->fetch_assoc()){
	if($row["IP_ADDR"] == $ip){
		score(currentScore) = $row["sco"];
	}
}

// 실시간으로 점수가 변경되었을때 저장
$sql = "UPDATE usr_sco SET sco=$score WHERE IP_ADDR=$ip";

if($conn->query($sql) === FALSE){
	echo "DB 업데이트 오류". $conn->error;
}

$conn->close();
?>