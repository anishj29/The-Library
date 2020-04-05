<!DOCTYPE html>
<html>
<head>
	<title> Delete Images</title>
</head>
<body>

	<form action ="add.php" method="post" enctype="multipart/form-data">
				<input type="file" name="file" id="file"><br><br>
				<input type="text" name="username">
				<button type="submit" name="submit">Add</button>
	</form>
<hr>
<h2>View Images</h2>
		<?php
			include_once('connection.php');
				$data="select * from images";
				$result = mysqli_query($conn, $data);
					while($row = mysqli_fetch_array($result)){?>
						<right><a href="delete.php?op=deleted&file_name=<?php echo $row['file_name']?>">X</a></right> 
						<br/>

							<img src="<?php echo 'ImageUpload/'.$row['file_name'];?>" width="100px" height = "100px"/> 
				

							<?php
						}
					?>
					
	

</body>
</html>		
	