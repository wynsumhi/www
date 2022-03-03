<?
   function latest_article($table, $loop, $char_limit) // 테이블명, 리스트개수, 제목글제한수(byte)
   {
		include "dbconn.php";

		$sql = "select * from $table order by num desc limit $loop";
		$result = mysql_query($sql, $connect);

        echo "<ul class='aaa'>";

		while ($row = mysql_fetch_array($result))
		{
			$num = $row[num];
			$len_subject = mb_strlen($row[subject], 'utf-8'); //한글도 1자로 처리, 제목의 총 글자수 30
			$subject = $row[subject];
            $len_content = mb_strlen($row[content], 'utf-8');
            $content = $row[content];

			if ($len_subject > $char_limit) //제한글자수(30) 보다 크면
			{
				// $subject = str_replace( "&#039;", "'", $subject);               
              	$subject = mb_substr($subject, 0, $char_limit, 'utf-8');
				$subject = $subject."...";
			}

            if ($len_content > 30) //제한글자수(30) 보다 크면
			{
				// $subject = str_replace( "&#039;", "'", $subject);               
              	$content = mb_substr($content, 0, 30, 'utf-8');
				$content = $content."...";
			}

			$regist_day = substr($row[regist_day], 0, 10); //'2022-02-21'

            
            if($table=='concert'){
               
                if($row[file_copied_0]){ //첨부된 이미지가 있으면..
                 $concertimg='./concert/data/'.$row[file_copied_0]; // './concert/data/2022_02_22_10_24_06_0.jpg'
                }else{
                 $concertimg= './concert/data/default.jpg';
                }
            }
            
            
            
           if($table=='greet'){ 
            
			echo "      
                <li><a href='./$table/view.php?table=$table&num=$num'>$subject<span class='date'>$regist_day</span></a></li>
			";
               
           }else if($table=='concert'){
             
             echo "      
				
                <li>
                    <a href='./$table/view.php?table=$table&num=$num'>
                        <dl>
                            <dt>$content</dt>
                            <dd>
                                <img src='$concertimg' alt='$subject'>
                                <span>$regist_day</span>
                            </dd>
                        </dl>
                    </a>
                </li>
			";  
               
           }
               
               
		}

        echo "</ul>";

		mysql_close();
   }
?>
