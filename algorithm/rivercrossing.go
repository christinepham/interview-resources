package main

/*
Your previous Plain Text content is preserved below:

You are standing on one side of a river crossing. You are being chased by giant centipedes and you have to cross quickly. There are stepping stones portruding from the water that you can use to cross the river. You can't swim and the current is very strong so if you miss a rock then you will be swept away.
Determine if there is a way for you to cross the river.
Due to momentum, you can only adjust your crossing speed a bit for each jump. Each time you jump, you can jump at speed:
(speed - 1, speed, speed + 1)
Your starting location and speed is (0, 0).
Examples:
---------
river = '****~~*~~**~*~~*~*~*~*' => True
         X1 2  3  3  3  3   4  345
river = '*****~~~~~~~~~~~~~~~~~~~~~~~*' => False

~ = river
* = rock

*/

import (
	"fmt"
)

func main() {

	testRiver1 := "****~~*~~**~*~~*~*~*~*"
	testRiver2 := "*****~~~~~~~~~~~~~~~~~~~~~~~*"	// False
	testRiver3 := "****~~*~~**~*~~*~*~*~~*"
	//	       X1 2  3  3  3  3   4  3  => True
	testRiver4 := "****~~*~~**~*~~*~*~*~~~*"
	//	       X1 2  3  3  3  3   4   4  => True
	testRiver5 := "****~~*~~**~*~~*~*~*~~~~*"
	//	       X1 2  3  3  3  3   4    5  => True
	testRiver6 := "****~~*~~**~*~~*~*~*~~~~~*"	// False

	
	fmt.Println(canCrossRiver(testRiver1, 0))
	fmt.Println(canCrossRiver(testRiver2, 0))
	fmt.Println(canCrossRiver(testRiver3, 0))
	fmt.Println(canCrossRiver(testRiver4, 0))
	fmt.Println(canCrossRiver(testRiver5, 0))
	fmt.Println(canCrossRiver(testRiver6, 0))

}

func canCrossRiver(river string, speed int) bool {
	
	// Handle corner cases
	if len(river) == 0 {
		return true
	} else if len(river) == 1 {
		if river == "*" {
			return true
		}
		return false
	}

	// If we are not starting on a rock, return false
	if string(river[0]) != "*" {
		return false
	}
	
	reducedSpeed := false
	sameSpeed := false
	increasedSpeed := false
	
	if (speed-1 > 0) && (speed-1 < len(river)) {
		reducedSpeed = canCrossRiver(river[speed-1:], speed-1)
	}
	
	if (speed > 0) && (speed < len(river)) {
		sameSpeed = canCrossRiver(river[speed:], speed)
	}
	
	if speed+1 < len(river) {
		increasedSpeed = canCrossRiver(river[speed+1:], speed+1)
	}

	return reducedSpeed  || sameSpeed  || increasedSpeed 
}
