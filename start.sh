#!/bin/bash

clear

tmp="tmp.log"

if [ -f "$tmp" ]; then
  rm "$tmp"
fi

if [ ! -f "$tmp" ]; then
  touch "$tmp"
fi

#set a junk answer to enable the word checking loop
answer="asdf"

#set word counter
c=0

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
	read -p "$ask: " answer

	#calculate the correct answer
	correct=$(echo "$line" | sed 's/^.*|//')

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

		fi
		
		echo


	#end of word [correct or not correct answer]
	fi



done;

#all words has been parsed
echo visus vārdu Tu zini perfekti!

if [ -f "$tmp" ]; then
  rm "$tmp"
fi
