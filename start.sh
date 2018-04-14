#!/bin/bash

start=$(date +%s)

if [ "$1" -eq "" ]; then
last=500
else
last=$1
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
echo datubazes vārdu krājums ir $s
echo

while [ $c -lt $s ]; do

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


		#compare the correct answer with user input
		echo $correct | grep "$answer" > /dev/null

		#if you typed correct answer
		if [ $? -eq 0 ]; then

		c=$((c+1))
		togo=$((s-c))

		echo correct! $togo more to go
		
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

#all words has been parsed
echo All $s words you have parsed. Number of errors are $e. Total time spent is $runtime minutes. 

if [ $e -gt 0 ]; then
echo Words that you need to take time with are:
#count occurrences of a words who did not work well
sed "s/^.*|//g" "$todo" | sort | uniq -c | sort -nr
echo
fi

if [ -f "$tmp" ]; then
  rm "$tmp"
fi

if [ -f "$todo" ]; then
  rm "$todo"
fi

