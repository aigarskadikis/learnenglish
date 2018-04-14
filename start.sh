#!/bin/bash

start=$(date +%s)

if [ ! -z "$1" ]; then
last=$1
else
last=500
fi

clear

tmp="tmp.log"
todo="todo.log"

if [ -f "$tmp" ]; then
  rm "$tmp"
fi

if [ -f "$todo" ]; then
  rm "$todo"
fi

if [ ! -f "$tmp" ]; then
  touch "$tmp"
fi

if [ ! -f "$todo" ]; then
  touch "$todo"
fi

#set a junk answer to enable the word checking loop
answer="asdf"

#set word counter
c=0

#errors or not in time
e=0

#size of database
s=$(grep -v "^$" vocabulary.db | tail -$last | wc -l)
echo the disctionary size is $s
echo

while [ $c -lt $s -a $e -lt 5 ]; do

#take new word
line=$(grep -v "^$" vocabulary.db | tail -$last | sort -R | head -1)

	grep "$line" "$tmp" > /dev/null

	#this word has been not asked yet
	if [ $? -ne 0 ]; then

	#prepare question
	ask=$(echo "$line" | sed 's/|.*$//')

	#ask the question
	read -p "$ask: " answer
	
	#calculate the correct answer
	correct=$(echo "$line" | sed 's/^.*|//')
	
	#if there is some answer typed in
	len=$(echo $answer | wc -w)
	if [ $len -gt 0 ]; then


		#alternative exit answer
		echo "end" | grep "$answer" > /dev/null
		if [ $? -ne 0 ]; then
		
		#compare the correct answer with user input
		echo $correct | grep "$answer" > /dev/null

			#if you typed correct answer and the letter count is equal
			if [ $? -eq 0 -a ${#correct} -eq ${#answer} ]; then

			c=$((c+1))
			togo=$((s-c))

			echo correct! $togo more to go. $e incorrect answers.
			
			#set one more word as known

			#put the word in database (session)
			echo "$line">> "$tmp"

			#the word in not coorect. bad news
			else 
			echo wrong!
			sleep 1
			clear
			echo
			echo "   your: $answer"
			echo
			echo "correct: $correct"
			echo 
			sleep 2

				echo "$line" | grep "(.*)" > /dev/null
				if [ $? -eq 0 ]; then
				full=$(echo "$ask" | sed "s/\.\.\./$correct/" | sed "s/^.*(//g;s/).*$//g")
				echo "$full"
				fi
			
			echo
			read -p "Press any key to continue... "
			
			clear
			e=$((e+1))
			echo "$line">> "$todo"
			fi
			echo
		
		else
		c=$((c+1000))
		fi
	
	#if the answer was empy string
	else
		echo you gave an empty answer!
		sleep 1
		clear
		echo
		echo "   your: $answer"
		echo
		echo "correct: $correct"
		echo 

		sleep 1
		
			echo "$line" | grep "(.*)" > /dev/null
			if [ $? -eq 0 ]; then
			full=$(echo "$ask" | sed "s/\.\.\./$correct/" | sed "s/^.*(//g;s/).*$//g")
			echo "$full"
			fi
		
		echo
		read -p "Press any key to continue... "
		
		clear
		e=$((e+1))
		echo "$line">> "$todo"

	fi

	#end of word [correct or not correct answer]
	fi



done;

end=$(date +%s)

runtime=$((($(date +%s)-$start)/60)) 

#if the programm was terminated by user
echo "end" | grep "$answer" > /dev/null
if [ $? -ne 0 ]; then
echo $c words you have parsed. Number of errors are $e. Total time spent is $runtime minutes. 
else
echo
echo The programm was terminated by user cheat "end"
echo
fi

echo
if [ $e -gt 0 ]; then
echo Words that you need to take time with are:
#count occurrences of a words who did not work well
sed "s/^.*|//g" "$todo" | sort | uniq -c | sort -nr
echo
#calculate all words wich have more than 1 error.
#critical=$(sed "s/^.*|//g" "$todo" | sort | uniq -c | sed -e '$aend')
critical=$(cat "$todo" | sort | uniq -c)

#echo Critical words:
echo "$critical"

#calculate again critical words without count. add useless line at the end
critical=$(cat "$todo" | sort | uniq | sed -e '$aend')

#lets move the complicated word to the bottom of database
printf %s "$critical" | while IFS= read -r line
do {
#remove number

#search the line number which is not understandable
linenr=$(grep -n "$line" vocabulary.db | cut -f1 -d:)

#delete appropriate line in file
sed -i -e "$(echo $linenr)d" vocabulary.db

#add the line at the end
echo "$line" >> vocabulary.db

} done

#remove lines without content
sed -i '/^$/d' vocabulary.db

fi

if [ -f "$tmp" ]; then
  rm "$tmp"
fi

if [ -f "$todo" ]; then
  rm "$todo"
fi

