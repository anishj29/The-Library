<?php
	include_once('connection.php');
	// if(isset($_POST['submit' ]) && isset($_FILES['file_name'])) {
		

	// 	$file_name = rand(1000,100000)."-".$_FILES['file_name']['name'];
	// 	$file_loc = $_FILES['file_name']['tmp_name'];
	// 	$folder="ImageUpload/";
	// 	$new_file_name = strtolower($file_name);
	// 	$final_file=str_replace('  ', '-', $new_file_name);
	// 	$username=$_POST["username"];
	// 	echo "$username";
	// 	if(move_uploaded_file($file_loc, $folder.$final_file)) {
	 		// $sql = "INSERT INTO images(file_name) VALUES ('$final_file')";
		
	// 			if (mysqli_query($conn, $sql)) {
	// 			    echo "New record created successfully";
	// 			} 
	// 			else {
	// 			    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
	// 			}
	// 			mysqli_close($conn);
	//  ?>

	// 		<script>
	// 				alert('successfully uploaded');
	// 					window.location.href='index.php?success';
	// 		</script>

	// 		<?php
	// 		 }
 // 		else {

	// 		echo "Error uploads";
 // 		}

	// 	}

	 if(isset($_POST['submit'])){
    $name       = $_FILES['file']['name'];  
    $temp_name  = $_FILES['file']['tmp_name'];  
    if(isset($name)){
        if(!empty($name)){      
            $location = 'ImageUpload/';      
            if(move_uploaded_file($temp_name, $location.$name)){
            	$sql = "INSERT INTO images(username, file_name) VALUES ('$username', '$name');";
	 			mysqli_query($conn, $sql);
                echo 'File uploaded successfully';
            }
        }       
    }  else {
        echo 'You should select a file to upload !!';
    }
}
?>


	