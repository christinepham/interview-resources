Implement a meeting planner that can schedule meetings between two persons at a time.

Time is represented by Unix format (also called Epoch) - a positive integer holding the seconds since January 1st, 1970 at midnight. 

Planner input:

dur - Meeting duration in seconds (a positive integer).
timesA, timesB - Availability of each person, represented by an array of arrays.
Each sub-array is a time span holding the start (first element) and end (second element) times.
You may assume that time spans are disjointed.
Planner output:

Array of two items - start and end times of the planned meeting, representing the earliest opportunity for the two persons to meet for a dur length meeting.
If no possible meeting can be scheduled, return an empty array instead.

```java
public static int[] timeSchedule(int[] timeA, int[] timeB) {
	schedule_a = 0
	schedule_b = 0
	while (schedule_a < timesA.length and schedule_b < timesB.length):
	   start = max(timesA[schedule_a][0], timesB[schedule_b][0])
	   end = min(timesA[schedule_a][1], timesB[schedule_b][1])
	   if (start + dur <= end):
	      return [start, start + dur]
	   else:
	      if (timesA[schedule_a][1] < timesB[schedule_b][1]):
	         schedule_a = schedule_a + 1
	      else:
	         schedule_b = schedule_b + 1
	return []
}
```

Runtime: O(n+m) for sorted or O(n*log n + m*log m) for unsorted arrays, where n and m are lengths of timeA and timeB
Space Complexity: O(1) for both cases