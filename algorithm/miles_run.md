You’re given an array with a date and the miles run. On a chosen start and end date, print out the cumulative miles run on that given day.

EXAMPLE:
- [[date, miles run], [date 2, miles run 2], ...]
- [[4, 5], [12, 6], [16, 3]]
- Day 4, you’ve run 5 miles/ Day 12, you’ve run 6 miles/ Day 16, you’ve run 3 miles
start date: 10
end date: 20

Result
- [[start date, cumulative], [start date + 1, cumulative], ... [end date, cumulative]]
- [[10, 5], [11, 5], [12, 11], [13, 11], [14, 11], [15, 11], [16, 14], [17, 14], [18, 14], [19, 14], [20, 14]]

START DAY is 10, you’ve only run 5 miles (from day 4)
On DAY 12, since you’ve run 6 miles the new cumulative is now 11 miles. Day 13, 14 and 15 are still 11 until you hit DAY 16 where you’ve run another 3 miles

```python
# sum variable 
def sum_miles(lst_of_day_miles, start_day, end_day):
	total_miles = 0
	start_date = lst_of_day_miles[start_day]
	# loop over the input list
	# get the cumulative start date
	# make sure the total doesnt change unless the second index is different 


def cum_miles(lst, start, end):
    total = 0
    lst_result = []
    last_day = 0
    for curr_day in range(start, end+1):
        for i in range(0, len(lst)):
            if lst[i][0] <= curr_day and lst[i][0] > last_day:
                total += lst[i][1]
        lst_result += [[curr_day,total]]
        last_day = curr_day
    return lst_result
```
