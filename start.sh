#!/bin/bash

start=$(date +%s)

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
s=$(grep -v "^$" vocabulary.db | wc -l)
echo datubazes vārdu krājums ir $s
echo

while [ $c -lt $s ]; do


#take new word
line=$(grep -v "^$" vocabulary.db | sort -R | head -1)

	grep "$line" "$tmp" > /dev/null

	#this word has been not asked yet
	if [ $? -ne 0 ]; then

	#prepare question
	ask=$(echo "$line" | sed 's/|.*$//')

	#ask the question
	read -t 15 -p "$ask: " answer
	
	#calculate the correct answer
	correct=$(echo "$line" | sed 's/^.*|//')
	
	#if there is some onswer typed in
	len=$(echo $answer | wc -w)
	if [ $len -gt 0 ]; then


		#compare the correct answer with user input
		echo $correct | grep "$answer" > /dev/null

		#if you typed correct answer
		if [ $? -eq 0 ]; then
		echo malacis!
		
		#set one more word as known
		c=$((c+1))

		#put the word in database (session)
		echo "$line">> "$tmp"

		#the word in not coorect. bad news
		else 
		echo nav pareizi!
		sleep 3
		clear
		echo
		echo $ask = $correct
		echo 
		pico2wave -w correct.wav "$correct" > /dev/null
		aplay -q correct.wav > /dev/null
		sleep 15
		clear
		e=$((e+1))
		echo "$line">> "$todo"
		fi
		
		echo
	
	#if the answer was empy string
	else
		echo nav pareizi!
		sleep 3
		clear
		echo
		echo $ask = $correct
		echo 
		pico2wave -w correct.wav "$correct" > /dev/null
		aplay -q correct.wav > /dev/null
		sleep 15
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
echo Words that need to take time with:
#count occurrences of a words who did not work well
sed "s/^.*|//g" "$todo" | sort | uniq -c | sort -nr
echo

if [ -f "$tmp" ]; then
  rm "$tmp"
fi

if [ -f "$todo" ]; then
  rm "$todo"
fi

if [ -f "correct.wav" ]; then
  rm "correct.wav"
fi

